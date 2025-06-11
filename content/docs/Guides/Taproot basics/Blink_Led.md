---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZCE7IJ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDxc6bbM1Ym5e%2FDiqb4mr7Agu0lPrZBXYc0LtcD0MM2AiEAiSVSDrZUSWrUYK0o2SGcbK%2BaX8zl9UOGSbHpPICuv44qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTEUZ8jSB9nOQOYFyrcAyNL103KgH4txGjfDec5%2FGNRXhBJ%2FCVqxxyS1oZHGcpbzIB1SFaoIWoDWcfUhvkcYEVwLMQ%2F3GtIz1sOsylrQ9s%2BHjUbVeuLZi6qMH7jsP%2BW4Z8KAoNCjSqrSt0Br4%2FlSznPRkOmH9QaEK%2BSNbxu%2BfAhQrp0lvW4JdhLiqCeQ%2Fnr6ifjNaYI03g4OkHCSveca3n%2FV%2FqeeMvxib%2B%2FFgtlsEoF4xqNOomz2oelzb51XABZDRRGKkhDFfQc%2BTfMazfzay%2B3rCtD4vIuiMlIb%2FgevJ2dXhB8dzSzXlKt7DM1okwU34CP%2FDDeZJT1BLjhb3e1QuTBdsmd1qaFbYF5jCFg0kOrPCY194FCbQRxs6MJhgNRGA4lIy%2B0s85XksiSw9bGF5nuCMtB4u4LJtt7Q6Z4Xx1KjLIk4wGzkcSiNltT4aj%2FvkbvtUFrW3LeNMADKSygeq5G%2B9S3R041%2F%2B%2B%2BsucgbFpHgdZxB1JDzRbop3n4iMf%2F5WriSUFnZEx9SXIFiY6adu0yE3El%2F1214w%2Fbx0ICUf%2FHZCCX3lfom0jEN1zMXNE2Ee0LsA3XattJGa3L6QxtQv%2F4je4kHaDqwC%2BGOD65h%2FAnw567Le1zifQhTeLF5BnsnMmg5QIIhYyXF5RdMLmWpsIGOqUBal0iiuNMADL7BXbCwQc%2BmPXT3alsUpRLBo0WBUMx3O1P%2FOQlj%2FW8rQY7dKAyC5xvDVM7KRgLhU9MhXyEW%2B3H%2BSStIdDSnowzXesyo0i1zV5gk5vngyUMHG1JYdGxSDkVNT2sar6SlNHGfO5cvYlNg1YE4JSbu%2BGeowce1E7xg6ib%2FDPA7G8FAjSRQe6ap8ut2b2gZxNdLoHP1lDSbN3InufO763b&X-Amz-Signature=dcc9e355e719ba6d2aef11bbc59e14a33f56f7fb51efe905594132e7bbdd96b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZFAJCXF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFmGAP3mrKVWDCyCOnPXFXE34V%2FWecNfpj8Irz2ffg4QIgWKaCe8%2BDfjh%2FQeZuWJf5KgwqLCIleACyKxUf51MjTQYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErZEA8U8bCBjxBxxircA6OFrFs%2Bd4ulp%2BT%2FIzg0XLN%2BitCYiR%2FVPs9FvqPKfWx2As%2FpomTmnyEMr1SRAtdthOP4qAU2pEWbxJfCmtpkqIid9ZnXFBqqUh1RzapH4PTtcbAEY72P0wcsBk4shKPGprov0Bj6C3zzfzqw%2BSwjnwJAG4aBkpaN3LzEuoP6wawA2qlwqqFh%2FLHfZHE1KF2gTA1rrphS%2FjQk8ZC%2Fkd53XxFri3hQxc6XLM%2BD6hKXU0tTuB1fnxrV%2FGT%2FajYSb6sQwx8n8QbY2Y7Xe7gfWu51Y%2BFVGcksxfaH3aeOYvQDNiQhT5Wu%2BSRHgMcu3xbyz%2FkMzuvRZJd3oAkEqVu4gwnPS%2BJvUp1CrOdyDsvZzZUtiU6dy3ngKkt2lD5UpdvgLvqQ39bX75RTIUlua8zD05HXvnIBnat63HMP%2B1urYernJYblgL4032onvLqJHKxImhtvRp4aU3Hjt6M0ttIiuMGGRCut7zo2KkqtSgx4bwOqB5ddL1fbNQ0RkJJmJbh%2FNyFfDhoWcAXmMdWxu9YVst2EtrWQJGTkFijXppBe00mVxfGp2BF1cSc%2BW9bMiqTg%2FkAVVm5CkOUaOjWWTSHl%2FlaY9wSM%2FW7yp9%2F%2F93MG59DLH2L52lY0VDj14Ekjy5wdMITmpcIGOqUBX9S%2Bojz%2BF1GkFxsuF4hoH4ZfyXc2vL4fbyZar0BxVVYIX%2BReKkYsnV%2F190UKJCzr%2B95uFf8ABuRSxMWDmX7Xi9%2Fn%2F7NMZwKH%2Fayw8YkQYcyyFX5oZSeweHfI3Xrcq%2B21eM6NeMySSrPKb4LV5A6%2BHSI%2BwtWVRopSbgZgd3NoT0no1CjWlyRlplVcpBNIZ4YY%2F3vmQn953yTL7rBDLE%2B1wq8NnAG8&X-Amz-Signature=38a4e5bdfa73a584bd71133207e7e916bc47eba09f6935ff9c87b0aee6d0ae5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
