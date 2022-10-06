interface Leader {
  id: string;
  created_at: Date;
  updated_at: Date;
  updated_by: string;
  fields: {
    name: string;
    title: string;
    department: string;
    section: string;
    phone: string;
    email: string;
    assistant: string;
    assistant_email: string;
    image: Image[];
  };
}

interface Image extends ImageFields {
  id: string;
  thumbnails: {
    small: ImageFields;
    large: ImageFields;
    full: ImageFields;
  };
}

interface ImageFields {
  url: string;
  width: number;
  height: number;
}
// {
//   "id": "attMCdIhyMW8Jr6ab",
//   "width": 2000,
//   "height": 3000,
//   "url": "https://dl.airtable.com/.attachments/e986dfc0b59d614ce3e73946e530ce85/dbb76cf7/horwedelgregth.jpg",
//   "filename": "horwedelgregth.jpg",
//   "size": 3499377,
//   "type": "image/jpeg",
//   "thumbnails": {
//     "small": {
//       "url": "https://dl.airtable.com/.attachmentThumbnails/9728e80de61e30b344581e529a7e88ef/a8a81f56",
//       "width": 24,
//       "height": 36
//     },
//     "large": {
//       "url": "https://dl.airtable.com/.attachmentThumbnails/b6c636f617f6b5a71e95391c913706ee/783587e7",
//       "width": 512,
//       "height": 768
//     },
//     "full": {
//       "url": "https://dl.airtable.com/.attachmentThumbnails/a9c91c0df5fa66e9d0628c46d24061b6/570b76dd",
//       "width": 3000,
//       "height": 3000
//     }
//   }
// }
