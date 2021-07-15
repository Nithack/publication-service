import { classToClass, plainToClass } from 'class-transformer';
export class ResponsePublicationDto {
  success: boolean;
  data: any;
  public static factory(success: boolean, data: any): ResponsePublicationDto {
    const resultDataDto = plainToClass(
      ResponsePublicationDto,
      { success, data },
      {
        ignoreDecorators: true,
      },
    );
    return classToClass(resultDataDto);
  }
}
