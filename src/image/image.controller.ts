import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Param, Res, UploadedFiles } from '@nestjs/common/decorators/http/route-params.decorator';
import { AnyFilesInterceptor } from '@nestjs/platform-express/multer/interceptors/any-files.interceptor';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';



//import { AnyFilesInterceptor } from '@nestjs/platform-express/multer/interceptors/any-files.interceptor';
//import { FilesInterceptor } from '@nestjs/platform-express/multer/interceptors/files.interceptor';

@Controller('image')
export class ImageController {

  /*  @Post('upload')
    @UseInterceptors(FileInterceptor('image'))
    uploadFile(@UploadedFile() image) {
        console.log('hello all');
      console.log(image);
    }
*/
/*
    @Post('uploads')
    @UseInterceptors(FileFieldsInterceptor([
  { name: 'avatar', maxCount: 1 },
  { name: 'background', maxCount: 1 },
]))
uploadFiles(@UploadedFiles() files) {
  console.log(files);
}
*/

@Post('upload')
@UseInterceptors(AnyFilesInterceptor())
uploadFile(@UploadedFiles() file ) {
  console.log(file);
}

@Get(':imgpath')
seeUpoadedFile(@Param('imgpath')image,
@Res()res){
   return  res.sendFile(image,{root :'uploads'});
}


@Post('test')
@UseInterceptors(
    FileInterceptor('image'),
)

async uploadedFile(@UploadedFile() file) {
    console.log(file);
const response = {
    originalname: file.originalname,
    filename: file.filename,
  };
  return response;
}
    
}
