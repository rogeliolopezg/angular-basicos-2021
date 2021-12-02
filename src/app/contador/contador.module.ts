import { CommonModule } from '@angular/common'
import {NgModule} from '@angular/core'
import {ContadorComponentent} from './contador/contador.component'


@NgModule({
    declarations: [
        ContadorComponentent
    ],
    exports: [
        ContadorComponentent
    ],
    imports: [
        CommonModule
    ]
})
export class ContadorModule{}