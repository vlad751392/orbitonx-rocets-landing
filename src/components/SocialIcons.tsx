import { FC } from 'react';

import cn from 'classnames';


interface Props{
  config : any,
  hidden : boolean,
}




export const SocialIcons: FC<Props> = ({
  config, hidden 
}: Props) => {
    return <div className={cn(
      'flex gap-10 items-center',
      {
        'hidden sm:flex': hidden !== true,
        'flex': hidden === true
      }
    )} >
        {config.map((config : any) => (
          <a href={config.link}>
           <img key={config.id} style={{ height: `${config.height}px`, width: `${config.width}px` }}  src={config.icon} alt="" />
           </a>
        ))}
    </div>;
  };
  