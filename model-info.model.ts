import {
    prop,
    getModelForClass,
    modelOptions,
    ReturnModelType,
} from '@typegoose/typegoose';
import mongoose from 'mongoose';
@modelOptions({
    schemaOptions: {
        collection: 'model_info',
    },
})
export class ModelInfo {
    @prop({ type: () => [String], required: true })
    public filePath!: string[];

    @prop({ index: true, required: true })
    public indexName!: string;

    @prop()
    public orgId!: mongoose.Types.ObjectId;

    @prop()
    public name!: string;

    @prop()
    public description!: string;

    @prop({ default: Date.now })
    public createdAt!: Date;

    @prop({ default: Date.now, update: Date.now })
    public modifiedAt!: Date;

    @prop({ default: false })
    public isModelReady!: boolean;

    @prop({ default: false })
    public isIndexReady!: boolean;

    public static findByIndexName(
        this: ReturnModelType<typeof ModelInfo>,
        name: string,
    ) {
        return this.find({ indexName: name }).exec(); // thanks to "ReturnModelType" "this" has type information
    }
}
const ModelInfoDocument = getModelForClass(ModelInfo);

export default ModelInfoDocument;
