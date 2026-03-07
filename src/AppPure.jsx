import './App.css';
// import PullUpImpure from './components/PullUpImpure';
import PullUpPure from './components/PullUpPure';

function AppPure(props) {
    return (
        <div>
            <PullUpPure counter={11}/>
            <PullUpPure counter={12}/>
            <PullUpPure counter={11}/>
            {/* <PullUpImpure />
            <PullUpImpure />
            <PullUpImpure /> */}
        </div>
    );
}

export default AppPure;