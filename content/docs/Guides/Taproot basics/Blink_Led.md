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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDUKH4E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDqkYMPC50xgGZ0UsGMCW8nsVNcoPPmjbmZxSFx0%2FfmbwIgGwaFzTQpz0DeL0aUS0WU5cVAA%2F1J0swAXgEV2%2FT8In0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcVfN1wDDhXFPVmGSrcA7YggOwsQfvhTliaF3MCn5heK7jrc%2F1TI9%2BjkvAFX1S2k0BE0MItibPI2OWYAXF%2BUF2OCK9Kilxbwc4%2B3pNGy5%2FfL9GzmS%2BAYhAKOayMG31PXHbXcfrIDgPAKXByold0TTXhLlVJVvbW3NTa1Ujjje2Fswybz60knej8iQZx4ObdfxrLa%2BOr4asid79iPHESORaJ56Nno2ZVlBdkQRwXBzIzTVaKMTkZ0nTiZcJwAd2lDmrxQKszEZg6BfUudHT4aTot4dF1Njwg7U8EBf2lRrqHshn%2FtevPafbvbcVhWGUbwSJQja5UqtkM9NXm9GR7XTiOArRRz051kl467ME0mdG5pyqjpnQSzLCmLrHyOGUiNdyD1sVERoaBBfuXVdB3I24UZD3fv4Tb2swOW%2FXVEehaNimp96bS4RCCgkAwmK7IaFWmgTGG5%2B13%2BfMZHkAzlzI1TzJiApMM15lRBnfMwIXGJYKE9RLdKnz5fck0KGmE6TKfS2s%2BUe3Cwtig9HYfJ2OFHwlQDgOY5WUSNeD1RAIPNExymd6lKVoVYVPHhxOp8WHcBxPclNa6jHOlHV%2FdLzBQGze3lMW374%2BNpQQdxif%2BolSqv2%2BhHSFUmOH8BecCiiVUfZ4Se8ESps7XMOu5070GOqUBHD3tNGp1NdY5XEnbEOi1ai6HcFe04TWHiEqZO4rE5fQxA0xwrrx4fefo2UPTdl3BDGGhNFmhptrHeCERGKoIob%2BMo5UkmhHsPwBRo9kdV92n0z5NTfgZuzGwSIcb1ro2lMiMrfG03LDJy2xaIEP%2FbeSKjE%2Fe5Ui4A8gw0QuAaYBIk%2BxeYvUTm5y%2B%2FAcUiNAW2XMVjcTzQGMOlm9C9JJOJTZh%2BS5g&X-Amz-Signature=ed46fd71cc44cd136ced744e5846de30948f6c43b65a42fb90824e1e6e487792&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNJCF3B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDswy07ZtmAP7f7bHUnaow%2FxlBNUXdF9fA2XBtTJOKXfAIhAJV1et4LYmFs14NFMGGFL3F4V0ltE8e1jf1fXMeZvi7RKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6NfFZsKdfgJVva%2B8q3ANbPZmkj%2BXxfHAlYB7zhUkiFK3TbTWvhIbfMxryXEfUg%2BDY3k9kf1MSTIxoX%2BHIq82xEO0Ac64cC5Ra1E8whEaK77JqsquQCh35duTMkUToAuEJIoDY7su1CkJJEdlSobkZIUYGCnCFNSRDupSf5S0OENsYLafKnBHJD08O9pCWmWstAUUQxQHk%2BrMsJpgRW11ArhQLb2jc3%2BlI53rAF0sbWClCYYL7XVYLyGiKnJCbczrWug3LaTHkwN9GEoBDRtb3mUkJHpVIKt9Bey6zOe%2BlB5O2hzfJqOwMi1azTdjvlEsElQndQ7%2BE1xdGFeNaCTrMfEo8vWlddeI5cO5ChQ0OFMU3eR5c%2FepoMVVdm6j3sFXRp5ueY2WbKTDjSzACXjm0eONSDH1mclxG6ETsFMCsZqPKBvd%2Ft7Lfboo0tcy0ST1gnTeySLmbRYOUQy8YFG74UuYpH%2BKHbtfCC9hTBMstYjwnT3pyUsERMUK17O5HUyc0CsdCXFZBEkQIaFD8fvG7SXPg2sKHksoT6z%2FbY%2Bm9ZeS6nqWoH5JD88na20E3U%2B4mrmm4iChwIC4hzl%2Bl9tQtfx6nvfxQGFyPfwQ6REvotyu%2FYSUwgHfA4lIkUFo7SsM54RC9Ka8ZhJTFvzCAutO9BjqkATU2fu2bQh5cSuhZO4MbrbRZ3KywRtfQbfaFqQhoAdgtDpP5vWC4JtZibb1G3G2wJru6g3IA7ZNLFzGrlIlyXgUAFlnkbJiaZwfsVya7KSOghKEHaGRsoH%2FkC7RwOYelQlqd%2FWGbuxuniUm4eF0HZgC%2FHezrySjVu%2FArRZxkXR2MCPTTBd603kwnY1AHVcSR7WU4dqOchNNzB3aoy54v3ZHhlWUQ&X-Amz-Signature=d8f5dc21341b9805a7c0e60cafb9c334458c5c7690a7d590002ed93dc46536e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
