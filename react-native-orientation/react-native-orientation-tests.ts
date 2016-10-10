/// <reference path="react-native-orientation.d.ts" />

import * as Orientation from 'react-native-orientation';

Orientation.addOrientationListener((orientation)=>{});
Orientation.removeOrientationListener((orientation)=>{});
Orientation.removeSpecificOrientationListener((orientation)=>{});

Orientation.lockToPortrait();
Orientation.lockToPortrait();
Orientation.lockToLandscape();
Orientation.lockToLandscapeLeft();
Orientation.lockToLandscapeRight();
Orientation.unlockAllOrientations();
Orientation.getOrientation((err,orientation)=>{}));
Orientation.getSpecificOrientation((err,orientation)=>{}));
