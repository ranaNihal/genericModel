import { Injectable } from '@nestjs/common';
import { aggregate, deleteById, list, save, update } from './common/model.service';
import { IUserSchema } from './models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('User') readonly userModel: Model<IUserSchema>,
  ) { }

  create(data) {
    return save(this.userModel, data)
  }

  get() {
    let condition = {
      $match:{
      password: '123456'
      }
    }
    const aggregation = [condition]
    return aggregate(this.userModel, aggregation)
    // return list(this.userModel, condition)
  }

  update() {
    let condition = {
      _id: '664f1f6cbbc9a6306d8ab408'
    }
    const payload = {
      name: "abc"
    }
    return update(this.userModel, payload, condition)
  }

  delete() {
    let condition = {
      _id: '664f1f6cbbc9a6306d8ab408'
    }
    return deleteById(this.userModel, condition)
  }
}
