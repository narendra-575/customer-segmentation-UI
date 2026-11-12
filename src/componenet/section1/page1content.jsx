import '../style.sheet/page1content.css'
import Leftside from './leftside';
import Rightside from './rightside';

const Page1content = (props) => {

    return (
        <div className='page1'>
            <Leftside />
            <Rightside user={props.user} />
        </div>
    )
}

export default Page1content;
