import { IsNotEmpty, IsString } from 'class-validator';
export class CreatePublicationDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  owner: string;
}
