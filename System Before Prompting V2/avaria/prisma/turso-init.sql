CREATE TABLE "Batch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "notionId" TEXT,
    "batchName" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Planning',
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "dataVersion" INTEGER NOT NULL DEFAULT 1,
    "totalTrainees" INTEGER NOT NULL DEFAULT 0,
    "avgAttendance" REAL NOT NULL DEFAULT 0,
    "avgCompletion" REAL NOT NULL DEFAULT 0
);

CREATE TABLE "Trainee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "notionId" TEXT,
    "traineeName" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "avatar" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "dataVersion" INTEGER NOT NULL DEFAULT 1,
    "batchId" TEXT NOT NULL,
    "presentDays" INTEGER NOT NULL DEFAULT 0,
    "absentDays" INTEGER NOT NULL DEFAULT 0,
    "lateDays" INTEGER NOT NULL DEFAULT 0,
    "completionPercent" REAL NOT NULL DEFAULT 0,
    CONSTRAINT "Trainee_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "DailyAttendance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "notionId" TEXT,
    "entryId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "arrivalTime" DATETIME,
    "departureTime" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'Present',
    "absenceReason" TEXT,
    "isLate" BOOLEAN NOT NULL DEFAULT false,
    "minutesLate" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "dataVersion" INTEGER NOT NULL DEFAULT 1,
    "traineeId" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    CONSTRAINT "DailyAttendance_traineeId_fkey" FOREIGN KEY ("traineeId") REFERENCES "Trainee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DailyAttendance_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "TenDayAttendance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "notionId" TEXT,
    "record" TEXT NOT NULL,
    "periodStart" DATETIME NOT NULL,
    "periodEnd" DATETIME NOT NULL,
    "day1" BOOLEAN NOT NULL DEFAULT false,
    "day2" BOOLEAN NOT NULL DEFAULT false,
    "day3" BOOLEAN NOT NULL DEFAULT false,
    "day4" BOOLEAN NOT NULL DEFAULT false,
    "day5" BOOLEAN NOT NULL DEFAULT false,
    "day6" BOOLEAN NOT NULL DEFAULT false,
    "day7" BOOLEAN NOT NULL DEFAULT false,
    "day8" BOOLEAN NOT NULL DEFAULT false,
    "day9" BOOLEAN NOT NULL DEFAULT false,
    "day10" BOOLEAN NOT NULL DEFAULT false,
    "completionPercent" REAL NOT NULL DEFAULT 0,
    "checklistStatus" TEXT NOT NULL DEFAULT 'Not Started',
    "attendanceAIReport" TEXT,
    "presentCount" INTEGER NOT NULL DEFAULT 0,
    "absentCount" INTEGER NOT NULL DEFAULT 0,
    "lateCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "dataVersion" INTEGER NOT NULL DEFAULT 1,
    "traineeId" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    CONSTRAINT "TenDayAttendance_traineeId_fkey" FOREIGN KEY ("traineeId") REFERENCES "Trainee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TenDayAttendance_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "Assessment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "notionId" TEXT,
    "assessmentTitle" TEXT NOT NULL,
    "mapping" REAL NOT NULL DEFAULT 0,
    "productKnowledge" REAL NOT NULL DEFAULT 0,
    "presentability" REAL NOT NULL DEFAULT 0,
    "softSkills" REAL NOT NULL DEFAULT 0,
    "attendance" REAL NOT NULL DEFAULT 0,
    "absence" REAL NOT NULL DEFAULT 0,
    "assessmentOutcome" TEXT NOT NULL DEFAULT 'Good',
    "instructorComment" TEXT,
    "assessmentAIReport" TEXT,
    "company" TEXT NOT NULL,
    "techScorePercent" REAL NOT NULL DEFAULT 0,
    "softScorePercent" REAL NOT NULL DEFAULT 0,
    "overallPercent" REAL NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "dataVersion" INTEGER NOT NULL DEFAULT 1,
    "traineeId" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    CONSTRAINT "Assessment_traineeId_fkey" FOREIGN KEY ("traineeId") REFERENCES "Trainee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Assessment_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'viewer',
    "avatar" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLoginAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

CREATE TABLE "DataImport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fileName" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "recordsTotal" INTEGER NOT NULL DEFAULT 0,
    "recordsNew" INTEGER NOT NULL DEFAULT 0,
    "recordsUpdated" INTEGER NOT NULL DEFAULT 0,
    "recordsSkipped" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "errorLog" TEXT,
    "importedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME
);

CREATE TABLE "SystemLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "level" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "context" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "Batch_notionId_key" ON "Batch"("notionId");
CREATE INDEX "Batch_status_idx" ON "Batch"("status");
CREATE INDEX "Batch_startDate_endDate_idx" ON "Batch"("startDate", "endDate");

CREATE UNIQUE INDEX "Trainee_notionId_key" ON "Trainee"("notionId");
CREATE INDEX "Trainee_batchId_idx" ON "Trainee"("batchId");
CREATE INDEX "Trainee_company_idx" ON "Trainee"("company");
CREATE INDEX "Trainee_traineeName_idx" ON "Trainee"("traineeName");

CREATE UNIQUE INDEX "DailyAttendance_notionId_key" ON "DailyAttendance"("notionId");
CREATE INDEX "DailyAttendance_date_idx" ON "DailyAttendance"("date");
CREATE INDEX "DailyAttendance_status_idx" ON "DailyAttendance"("status");
CREATE INDEX "DailyAttendance_batchId_idx" ON "DailyAttendance"("batchId");
CREATE UNIQUE INDEX "DailyAttendance_traineeId_date_key" ON "DailyAttendance"("traineeId", "date");

CREATE UNIQUE INDEX "TenDayAttendance_notionId_key" ON "TenDayAttendance"("notionId");
CREATE INDEX "TenDayAttendance_batchId_idx" ON "TenDayAttendance"("batchId");
CREATE INDEX "TenDayAttendance_checklistStatus_idx" ON "TenDayAttendance"("checklistStatus");
CREATE UNIQUE INDEX "TenDayAttendance_traineeId_periodStart_periodEnd_key" ON "TenDayAttendance"("traineeId", "periodStart", "periodEnd");

CREATE UNIQUE INDEX "Assessment_notionId_key" ON "Assessment"("notionId");
CREATE INDEX "Assessment_batchId_idx" ON "Assessment"("batchId");
CREATE INDEX "Assessment_assessmentOutcome_idx" ON "Assessment"("assessmentOutcome");
CREATE INDEX "Assessment_company_idx" ON "Assessment"("company");

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE INDEX "User_role_idx" ON "User"("role");
CREATE INDEX "User_isActive_idx" ON "User"("isActive");

CREATE INDEX "DataImport_status_idx" ON "DataImport"("status");
CREATE INDEX "DataImport_importedAt_idx" ON "DataImport"("importedAt");

CREATE INDEX "SystemLog_level_idx" ON "SystemLog"("level");
CREATE INDEX "SystemLog_createdAt_idx" ON "SystemLog"("createdAt");