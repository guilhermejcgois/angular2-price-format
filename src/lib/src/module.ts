import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { PriceFormatComponent } from './component/price-format.component';
import { MdPriceFormatComponent } from './component/md/md-price-format.component';

const CommonImports = [
  CommonModule,
  FormsModule,
  TextMaskModule
];

@NgModule({
    imports: CommonImports,
    declarations: [ PriceFormatComponent ],
    exports: [ PriceFormatComponent ]
})
export class PriceFormatModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PriceFormatModule,
            providers: []
        };
    }
}

@NgModule({
    imports: CommonImports,
    declarations: [ MdPriceFormatComponent ],
    exports: [ MdPriceFormatComponent ]
})
export class MdPriceFormatModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MdPriceFormatModule,
            providers: []
        };
    }
}
