import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { ResponsePublicationDto } from './dto/response-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { Publication } from './entities/publication.entity';

@Injectable()
export class PublicationsService {
  constructor(
    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,
  ) {}
  async create(createPublicationDto: CreatePublicationDto) {
    try {
      const newPublication = await this.publicationRepository.save(
        createPublicationDto,
      );
      return ResponsePublicationDto.factory(true, newPublication);
    } catch (error) {
      return ResponsePublicationDto.factory(false, error.message);
    }
  }

  async findAll() {
    try {
      const findPublications = await this.publicationRepository.find();
      return ResponsePublicationDto.factory(true, findPublications);
    } catch (error) {
      return ResponsePublicationDto.factory(false, error.message);
    }
  }

  async findOne(id: string) {
    try {
      const findPublication = await this.publicationRepository.findOne({
        uuid: id,
      });
      if (!findPublication)
        return ResponsePublicationDto.factory(true, 'Publication not found');
      return ResponsePublicationDto.factory(true, findPublication);
    } catch (error) {
      return ResponsePublicationDto.factory(false, error.message);
    }
  }

  async update(id: string, updatePublicationDto: UpdatePublicationDto) {
    try {
      const findPublication = await this.publicationRepository.findOne({
        uuid: id,
      });
      if (!findPublication)
        return ResponsePublicationDto.factory(false, 'Publication not found');
      Object.assign(findPublication, updatePublicationDto);
      const publicationUpdate = await this.publicationRepository.save(
        findPublication,
      );
      return ResponsePublicationDto.factory(true, publicationUpdate);
    } catch (error) {
      return ResponsePublicationDto.factory(false, error.message);
    }
  }

  async remove(id: string) {
    try {
      await this.publicationRepository.delete({ uuid: id });
      return ResponsePublicationDto.factory(true, 'no data');
    } catch (error) {
      return ResponsePublicationDto.factory(false, error.message);
    }
  }
}
