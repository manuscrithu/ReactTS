import './CoreConcepts.scss'
import { CORE_CONCEPTS } from '../../utils/data'

export default function CoreConcepts() {
    return(
        <div className='core-concepts-container'>
            {
                CORE_CONCEPTS.map((item: any, index: number) => (
                    <div key={index} className='item-container'>
                        <div className='concept-image'><img src={item.image} alt={item.title} /></div>
                        <h3 className='concept-title'>{item.title}</h3>
                        <div className='concept-description'>{item.description}</div>
                    </div>
                ))
            }
        </div>
    )
}