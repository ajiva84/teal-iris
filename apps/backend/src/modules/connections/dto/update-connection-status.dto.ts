import { IsEnum } from "class-validator";
import { ConnectionStatus } from "../../../db/schema.js"; // Ensure this matches your enum path

export class UpdateConnectionStatusDto {
  @IsEnum(ConnectionStatus)
  status: ConnectionStatus.ACCEPTED | ConnectionStatus.REJECTED;
}
