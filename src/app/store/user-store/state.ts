export interface State{
    data : any;
    loading:boolean;
    error: string;
}

export const initalState: State = {
    data:null,
    loading:false,
    error:''
}