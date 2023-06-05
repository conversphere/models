import { prop, getModelForClass } from '@typegoose/typegoose';

class ModelInfo {
    @prop({ type: () => [String], required: true })
    public filePath!: string[];

    @prop()
    public indexName!: string;

    @prop()
    public orgId!: string;

    @prop()
    public name!: string;

    @prop()
    public description!: string;

    @prop({ default: Date.now })
    public createdAt!: Date;

    @prop({ default: Date.now, update: Date.now })
    public modifiedAt!: Date;
}
const ModelInfoDocument = getModelForClass(ModelInfo);

export default ModelInfoDocument;
