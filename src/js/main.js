import '../scss/main.scss';
import {useBurger} from './components/burger'
import {dropDownIdeas} from './components/header';
import {dropDownMenu} from './components/header';
import { nameFile } from './components/input';
import { tagSet } from './components/input';
import { imageGallery } from './components/input';
import { swiperIdea } from './components/slider';
import { rateStars } from './components/rate';
import { switchMenu } from './components/modal';
import { modalWindow } from './components/modal';

dropDownIdeas();
dropDownMenu();
nameFile();
tagSet();
imageGallery();
swiperIdea();
rateStars();
useBurger();    
switchMenu();
modalWindow();