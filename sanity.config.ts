import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'لوحة تحكم مستر محمد زايد',
  // هذا الكود يسحب الرقم سرياً من فيرسل دون أن يظهر في جيت هاب
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio', 
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: 'lesson',
        type: 'document',
        title: 'المحاضرات',
        fields: [
          { name: 'title', type: 'string', title: 'عنوان الدرس' },
          { name: 'videoUrl', type: 'url', title: 'رابط الفيديو' },
          { name: 'description', type: 'text', title: 'وصف الدرس' }
        ]
      }
    ],
  },
})
