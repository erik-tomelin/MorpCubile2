import { Layout } from 'app/layout/layout.types';

// Types
export type Scheme = 'dark';
export type Screens = { [key: string]: string };
export type Theme = 'theme-default' | string;
export type Themes = { id: string; name: string }[];

/**
 * AppConfig interface. Update this interface to strictly type your config
 * object.
 */
export interface AppConfig
{
    layout: Layout;
    scheme: Scheme;
    screens: Screens;
    theme: Theme;
    themes: Themes;
}

export const appConfig: AppConfig = {
    layout : 'material',
    scheme : 'dark',
    screens: {
        sm: '600px',
        md: '960px',
        lg: '1280px',
        xl: '1440px'
    },
    theme  : 'theme-purple',
    themes : [
        {
            id  : 'theme-purple',
            name: 'Purple'
        },
    ]
};
