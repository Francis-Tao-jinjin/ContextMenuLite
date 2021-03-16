/// <reference types="react" />
import './contextMenu.scss';
export declare type ContextmenuData = {
    name: string;
    fn: (() => void) | null;
    tips?: string;
    separate?: boolean;
    selected?: boolean;
    disabled?: boolean;
    extend?: ContextmenuData[];
};
export declare type ContextmenuProps = ContextmenuData[];
export declare function ContextMenuLite(props: {
    data: ContextmenuProps;
    position: {
        x: number;
        y: number;
    };
    dark?: boolean;
    roundCorner?: boolean;
}): JSX.Element;
