import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    id: false,
    _id: false,
  },
})
class Organisation {
  @prop({ alias: "orgId" })
  public _id!: string;

  @prop({ required: true })
  public name!: string;

  @prop({ required: true, unique: true, index: true })
  public email!: string;

  @prop({ required: true })
  public password!: string;

  @prop()
  public webstite?: string;

  @prop()
  public description?: string;

  @prop({ default: Date.now })
  public createdAt!: Date;

  @prop({ default: Date.now, update: Date.now })
  public modifiedAt!: Date;
}
const OrganisationModel = getModelForClass(Organisation);
// Create the model

export default OrganisationModel;
