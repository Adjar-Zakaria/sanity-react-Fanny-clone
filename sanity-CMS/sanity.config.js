import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'

//import {ProjectId , Dataset} from './environment.js'

export default defineConfig({
  name: 'default',
  title: 'fanny',


  //projectId: ProjectId, 
  //projectId: Dataset,  
    

  projectId:'ru5lf6ow',
  dataset: 'production', 


  plugins: [structureTool(), visionTool(),colorInput()],

  schema: {
    types: schemaTypes,
  },
})
