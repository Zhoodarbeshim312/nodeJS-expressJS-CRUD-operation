import { Request, Response } from "express";
declare const _default: {
    getAllUsers: (req: Request, res: Response) => void;
    addNewUser: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    deleteUser: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    updateUser: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
};
export default _default;
//# sourceMappingURL=crud.controllers.d.ts.map