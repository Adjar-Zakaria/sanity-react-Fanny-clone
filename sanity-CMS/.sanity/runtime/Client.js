import {createClient} from "@sanity/client";
//import {ProjectId , Dataset} from '../../environment.js'

export default createClient({

  //projectId: ProjectId,  
  //dataset: Dataset, 
  
  projectId: 'ru5lf6ow',  
  dataset: 'production', 
  useCdn: true,
});
