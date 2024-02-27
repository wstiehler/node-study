import { CacheStore } from "../../../data/protocols/cache/index"
import { SavePurchases } from "../../../domain/usecases/save-purchases"

export class LocalSavePurchase implements SavePurchases {
    constructor(private readonly cacheStore: CacheStore) { }

    async save(purchases: Array<SavePurchases.Params>): Promise<void> {
        this.cacheStore.delete('purchases')
        this.cacheStore.insert('purchases', purchases)
    }
}
