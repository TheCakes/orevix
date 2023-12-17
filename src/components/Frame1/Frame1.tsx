import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse3Icon2 } from './Ellipse3Icon2.js';
import { Ellipse3Icon } from './Ellipse3Icon.js';
import { Ellipse7Icon2 } from './Ellipse7Icon2.js';
import { Ellipse7Icon } from './Ellipse7Icon.js';
import classes from './Frame1.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 8:182 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle32}></div>
      <div className={classes.rectangle31}></div>
      <div className={classes.rectangle29}></div>
      <div className={classes.ellipse3}>
        <Ellipse3Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse7}>
        <Ellipse7Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle33}></div>
      <div className={classes.rectangle121}></div>
      <div className={classes.rectangle122}></div>
      <div className={classes.rectangle123}></div>
      <div className={classes.rectangle124}></div>
      <div className={classes.rectangle125}></div>
      <div className={classes.rectangle126}></div>
      <div className={classes.rectangle127}></div>
      <div className={classes.rectangle128}></div>
      <div className={classes.rectangle129}></div>
      <div className={classes.rectangle130}></div>
      <div className={classes.rectangle131}></div>
      <div className={classes.rectangle132}></div>
      <div className={classes.rectangle133}></div>
      <div className={classes.rectangle134}></div>
      <div className={classes.rectangle135}></div>
      <div className={classes.rectangle136}></div>
      <div className={classes.rectangle137}></div>
      <div className={classes.rectangle138}></div>
      <div className={classes.rectangle139}></div>
      <div className={classes.rectangle140}></div>
      <div className={classes.rectangle141}></div>
      <div className={classes.rectangle142}></div>
      <div className={classes.rectangle143}></div>
      <div className={classes.rectangle144}></div>
      <div className={classes.rectangle145}></div>
      <div className={classes.rectangle146}></div>
      <div className={classes.rectangle147}></div>
      <div className={classes.rectangle148}></div>
      <div className={classes.rectangle149}></div>
      <div className={classes.rectangle150}></div>
      <div className={classes.rectangle151}></div>
      <div className={classes.rectangle152}></div>
      <div className={classes.rectangle153}></div>
      <div className={classes.rectangle154}></div>
      <div className={classes.rectangle155}></div>
      <div className={classes.rectangle156}></div>
      <div className={classes.rectangle157}></div>
      <div className={classes.rectangle158}></div>
      <div className={classes.rectangle159}></div>
      <div className={classes.rectangle160}></div>
      <div className={classes.rectangle161}></div>
      <div className={classes.rectangle162}></div>
      <div className={classes.rectangle163}></div>
      <div className={classes.rectangle164}></div>
      <div className={classes.rectangle165}></div>
      <div className={classes.rectangle166}></div>
      <div className={classes.rectangle167}></div>
      <div className={classes.rectangle168}></div>
      <div className={classes.rectangle322}></div>
      <div className={classes.rectangle312}></div>
      <div className={classes.rectangle292}></div>
      <div className={classes.ellipse32}>
        <Ellipse3Icon2 className={classes.icon3} />
      </div>
      <div className={classes.ellipse72}>
        <Ellipse7Icon2 className={classes.icon4} />
      </div>
      <div className={classes.rectangle332}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon5} />
      </div>
      <div className={classes.welcomeTo}>Welcome to</div>
      <div className={classes.scrollForMore}>Scroll for more</div>
    </div>
  );
});
