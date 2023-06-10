import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//Esto basicamente lo que hace es que ese documento de moongose , va a ser de tipo Item, de la clase de abajo , lo que hace que ese documento en la database tenga esas propiedades de la clase
export type ItemDocument = HydratedDocument<Item>;

//El decorador @Schema() se utiliza para marcar la clase "Item" como un esquema de mongoose. Esto significa que mongoose utilizará este esquema para modelar la estructura de los documentos en la base de datos.
// El @Schema()decorador marca una clase como una definición de esquema. Asigna nuestra Itemclase a una colección MongoDB del mismo nombre, pero con una "s" adicional al final, por lo que el nombre final de la colección mongo será cats. Este decorador acepta un solo argumento opcional que es un objeto de opciones de esquema
@Schema()
export class Item {
  // el @Prop()decorador acepta un argumento de objeto de opciones ( lea más sobre las opciones disponibles). Con esto, puede indicar si una propiedad es obligatoria o no, especificar un valor predeterminado o marcarla como inmutable. Por ejemplo:
  @Prop({
    type: String,
    
    required:true,
    // lowercase: true,
    // default:"",
    // select: true, // Incluida por defecto en las consultas
    // get: function, defines a custom getter for this property using Object.defineProperty().
    // set: function, defines a custom setter for this property using Object.defineProperty().
    // alias: string, mongoose >= 4.10.0 only. Defines a virtual with the given name that gets/sets this path.
    // index: boolean, whether to define an index on this property.
    // unique: boolean, whether to define a unique index on this property
    // sparse: boolean, whether to define a sparse index on this property.
    // enum: Array, creates a validator that checks if the value is in the given array.
    // match: RegExp, creates a validator that checks if the value matches the given regular expression
    // minLength: Number, creates a validator that checks if the value length is not less than the given number
    // maxLength: Number, creates a validator that checks if the value length is not greater than the given number
    // min: Number, creates a validator that checks if the value is greater than or equal to the given minimum.
    // max: Number, creates a validator that checks if the value is less than or equal to the given maximum.
    // enum: Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.
    // min: Date, creates a validator that checks if the value is greater than or equal to the given minimum.
    // max: Date, creates a validator that checks if the value is less than or equal to the given maximum.
    // expires: Number or String, creates a TTL index with the value expressed in seconds.
  })
  name: string;



  @Prop({
    // select: false // No incluida por defecto en las consultas
    type: String,
  })
  description: string;




  @Prop({
    type:Number
  })
  price: number;





  //*Ejemplo de relacion con mongo


//   En caso de que desee especificar la relación con otro modelo, luego para completar, @Prop()también puede usar el decorador. Por ejemplo, si Cattiene Ownerque se almacena en una colección diferente llamada owners, la propiedad debe tener tipo y ref. Por ejemplo:
// import * as mongoose from 'mongoose';
// import { Owner } from '../owners/schemas/owner.schema';

// // inside the class definition
// @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
// owner: Owner;


// En caso de que haya varios propietarios, la configuración de su propiedad debería ser la siguiente:


// @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }] })
// owner: Owner[];
}

// Finalmente, itemSchema se crea utilizando el método SchemaFactory.createForClass(Item). Este método toma la clase "Item" y genera un esquema de mongoose a partir de ella. Este esquema se utilizará para realizar operaciones de base de datos, como crear, leer, actualizar y eliminar documentos relacionados con la entidad "Item".
export const itemSchema = SchemaFactory.createForClass(Item);
