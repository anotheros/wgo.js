import { Point } from '../types';
import CanvasBoard from './CanvasBoard';
export interface BoardViewport {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export interface CanvasBoardTheme {
    stoneSize: number;
    grid: {
        handler: DrawHandler;
        params: {
            linesWidth: number;
            linesColor: string;
            starColor: string;
            starSize: number;
        };
    };
    markupBlackColor: string;
    markupWhiteColor: string;
    markupNoneColor: string;
    markupLinesWidth: number;
    shadowColor: string;
    shadowTransparentColor: string;
    shadowBlur: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    coordinates: {
        handler: DrawHandler;
        params: {
            color: string;
            bold: boolean;
            x: string | (string | number)[];
            y: string | (string | number)[];
        };
    };
    font: string;
    linesShift: number;
    backgroundColor: string;
    backgroundImage: string;
    drawHandlers: {
        [key: string]: any;
    };
}
export interface CanvasBoardConfig {
    size: number;
    width: number;
    height: number;
    starPoints: {
        [size: number]: Point[];
    };
    viewport: BoardViewport;
    coordinates: boolean;
    theme: CanvasBoardTheme;
    /** Size of board margin relative to field size */
    marginSize: number;
    /** This will cause sharper edges, but the board won't have exact specified dimensions (temporary solution I hope) */
    snapToGrid: boolean;
}
export interface DrawFunction<P> {
    (context: CanvasRenderingContext2D, args: P, board: CanvasBoard): void;
}
export interface DrawHandlerBase {
}
export interface FieldDrawHandler extends DrawHandlerBase {
    drawField: {
        [layer: string]: DrawFunction<BoardFieldObject>;
    };
}
export interface FreeDrawHandler extends DrawHandlerBase {
    drawFree: {
        [layer: string]: DrawFunction<BoardFreeObject>;
    };
}
export declare type DrawHandler = FieldDrawHandler | FreeDrawHandler;
export interface BoardObjectBase {
    type?: string;
    params?: {
        [key: string]: any;
    };
}
export declare type BoardFieldObject = ({
    type?: string;
    handler?: DrawHandler;
}) & BoardObjectBase & {
    field: Point;
};
export declare type BoardFreeObject = ({
    type?: string;
    handler?: DrawHandler;
}) & BoardObjectBase;
