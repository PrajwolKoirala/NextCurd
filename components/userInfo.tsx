import { ExtendedUser } from "../NextAuthD";
import { Card, CardHeader, CardContent } from "./ui/card";
import React from "react";
interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const Userinfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md text-right">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Name</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md text-right">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
    <p className="text-sm font-medium">Email</p>
    <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md text-right">
      {user?.email}
    </p>
  </div>
  <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
    <p className="text-sm font-medium">Role</p>
    <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md text-right">
      {user?.role}
    </p>
  </div>
      </CardContent>
    </Card>
  );
};
