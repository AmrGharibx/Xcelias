import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  const databaseUrl = process.env.DATABASE_URL || "";
  const hasToken = Boolean(process.env.TURSO_AUTH_TOKEN);

  const summary = {
    hasDatabaseUrl: Boolean(databaseUrl),
    scheme: databaseUrl.startsWith("libsql://")
      ? "libsql"
      : databaseUrl.startsWith("https://")
        ? "https"
        : databaseUrl.startsWith("file:")
          ? "file"
          : databaseUrl
            ? "other"
            : "missing",
    host: databaseUrl
      ? databaseUrl
          .replace(/^libsql:\/\//, "")
          .replace(/^https?:\/\//, "")
          .split("/")[0]
      : null,
    hasTursoAuthToken: hasToken,
  };

  try {
    const userTable = await db.$queryRawUnsafe<Array<{ name: string }>>(
      "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'User'"
    );
    const userCount = await db.user.count();

    return NextResponse.json({
      ok: true,
      now: new Date().toISOString(),
      database: {
        ...summary,
        userTableExists: userTable.length > 0,
        userCount,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        now: new Date().toISOString(),
        database: summary,
        error: error instanceof Error ? error.message : "Health check failed",
      },
      { status: 500 }
    );
  }
}
