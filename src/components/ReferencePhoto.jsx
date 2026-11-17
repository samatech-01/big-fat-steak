import React from 'react';
// ViewBox crops only the displayed region; user-supplied raster sources remain intact.
export const crops={
 mobileHero:{file:'mobile-reference.png',rect:[60,6,40,37],ratio:1024/1536},
 mobileSteak:{file:'mobile-reference.png',rect:[4.5,65.4,44,10.8],ratio:1024/1536},
 mobileChicken:{file:'mobile-reference.png',rect:[51.5,65.4,44,10.8],ratio:1024/1536},
 mobileRib:{file:'mobile-reference.png',rect:[4.5,82.8,44,10.7],ratio:1024/1536},
 mobileTower:{file:'mobile-reference.png',rect:[51.5,82.8,44,10.7],ratio:1024/1536},
 hero:{file:'hero-reference.png',rect:[46,16,54,77],ratio:1664/941},
 logo:{file:'hero-reference.png',rect:[4.4,2,12.5,17.5],ratio:1664/941},
 steak:{file:'menu-reference.png',rect:[3.3,24,19.5,19.3],ratio:1.5},
 chicken:{file:'menu-reference.png',rect:[50.5,22.5,17.3,20.5],ratio:1.5},
 snack:{file:'menu-reference.png',rect:[3.3,46.6,18.8,18],ratio:1.5},
 tower:{file:'menu-reference.png',rect:[50.8,47,20,17.9],ratio:1.5},
 drink:{file:'menu-reference.png',rect:[3.5,69,16.8,24],ratio:1.5},
 extra:{file:'menu-reference.png',rect:[50.8,70,16.8,23],ratio:1.5},
 story:{file:'story-reference.png',rect:[36,2,64,49],ratio:1672/941},
 contact:{file:'contact-reference.png',rect:[0,0,45,90],ratio:2},
};
export default function ReferencePhoto({kind='hero',className='',label='Ilustrasi hidangan dari referensi desain',...props}){
 const {file,rect:[x,y,w,h],ratio}=crops[kind];
 return <div role="img" aria-label={label} className={`reference-photo ${className}`} style={{aspectRatio:ratio*w/h}} {...props}><svg aria-hidden="true" width="100%" height="100%" viewBox={`${x*ratio} ${y} ${w*ratio} ${h}`} preserveAspectRatio="xMidYMid slice" style={{display:'block',overflow:'hidden'}}><image href={`${import.meta.env.BASE_URL}images/references/${file}`} width={100*ratio} height="100"/></svg></div>;
}
