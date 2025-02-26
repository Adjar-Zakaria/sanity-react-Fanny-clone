import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  groups: [
        {
          name: 'section1',
          title: 'Section1',
        },
        {
          name: 'section2',
          title: 'Section2',
        },
        {
            name: 'section3',
            title: 'Section3',
          },
      ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'section1',
    }),
    defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      group: 'section1',

      }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      group: 'section1',

      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'section1',

    }),

    defineField({
      name: 'titleSection2',
      title: 'Title section 2',
      type: 'string',
      group: 'section2',
    }),
    defineField({
        name: 'gallerySection2',
        title: 'gallery section 2',
        type: 'array',
      group: 'section2',

        of: [
          { type: 'image' }
        ],
        options: {
          layout: 'grid'
        }
      }),
      defineField({
        name: 'gallerySection3',
        title: 'gallery section 3',

        type: 'array',
      group: 'section3',

        of: [
          { type: 'image' }
        ],
        options: {
          layout: 'grid'
        }
      })
    
  ]
})
