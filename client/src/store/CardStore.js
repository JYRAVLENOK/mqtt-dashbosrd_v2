// Copyright 2023 Alexandr Vasilev
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

import {makeAutoObservable} from "mobx";

export default class CardStore {
    constructor() {
        this._cards = []
        this._selectedCard = {}
        makeAutoObservable(this)
    }

    setCard(cards) {
        this._cards = cards
    }

    get Card() {
        return this._cards
    }

    setSelectedCard(card) {
        this._selectedCard = card
    }

    get SelectedCard() {
        return this._selectedCard
    }
}