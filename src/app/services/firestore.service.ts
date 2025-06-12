import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  constructor(private afs: AngularFirestore) {}

  getProviders() {
    return this.afs.collection('providers').valueChanges({ idField: 'id' });
  }

  addProvider(data: any) {
    return this.afs.collection('providers').add(data);
  }
}