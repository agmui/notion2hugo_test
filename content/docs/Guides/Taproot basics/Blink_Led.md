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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KIEUGM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDltGr22fKWG5mvcaJhzYpONXcFi%2BqEfDb1elKqx6ru4wIhAKiS0nnEsupPWozEt%2Ba4ugBB8KsyBSAy7dhl%2BflHBc82Kv8DCE8QABoMNjM3NDIzMTgzODA1IgxooXxyK5SJau08r0Qq3AOvljTUdvDvonscNElFwWz2Ypy8yBA4LnmS%2FNNhM9d34Qj7RE5PxakXMBy4DlxteayCZEOWLpnCzW3DQ7tmcvqZ9HYOVsfbTz%2FG1Wl74Npa9ZgqSUm53LyTwWorJASrhSXypjsx8K4MdnS6z9CR4vndGKAWrMhTXkM3zzAqiVWSLDHpkowBDSAxTQiCAWUBZffZaXr3Pq%2BQhmJIouEbm18Hk7k%2BssXBHLMs9PW6COgPZDarVu9X9d1o4oU%2FqTYsZeCktDRlJU%2BhdRCLeEiS8jT2ZTatlhw5lNOzw25MZ7vrIJFq97xSPx3yVjjJ38E06or%2B1yaSnQLCKRFCs570PheUbIoZyEVMS1KWitfpPGSmluKdtkSjInBG9EOElJR9g7FWCn9FEVFgVzCILdwCaKG%2FEEdnD3YelIaCfCqOfyBe5c4o6OJUw5fbQ80Fi5bswTU%2BmF7SibmhtOXmqX9tvjT4kqTm7zqIV9XDSabP6EdN96YkAQR%2BrsHTr4EAZjwoqiIO3SuTKDZTWRj5L3q%2BHr9KJH8%2Fi%2FGLht33F%2Fz7ic4Dz9jy8Sp4098hLhK49GBesKf0XWTXZjCjmOYs%2FFecTLDJFIPPo2ss%2B1YRMNMD%2FcuPGQ6vKKyR812prqZsiTDekMS9BjqkAWWoyMEBIVnpFzPwtznMbnn3aaHvAYmvdCrTYuDzzJqzaihnNa3BhHkFqYamWI%2BALpaLNEl%2FuUQVso1sbDwpqSQl5GuhM1BqCwB1H2fvbxQECzH2UAFCtEpvD7JE%2FrPQBIWFR6WJyD4Z75CBc30lPUcibFdj1Ug1ctk4Ol6wRjJnTQBCH0U9bwmDO8mxef8qPJSXNZ7LRcIBaJrDfkeVh2rqoU3%2F&X-Amz-Signature=14490d49e3118b24f770a70fe285279de3c958abd639e370d8d680f1524e10c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHF733OE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDYCPVUKpQn%2FdMWYtsjkJn4Bsb2f6VaxpvClPHLK5sAwwIgdn7mDTVsRI5eS4h5PES7LqxjT1JQ8FsVH8My4P5sr84q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCG4PMLB6BVh94yctSrcA%2BNgxq4Je6XRsQkxpHd6zZ9I%2BUmmpCtGkmf17ZOvJMU88KlBJAYsSA4%2BgXkctQTyr6burKr3U2%2BBLgHCCVls%2BC5JboFJEYQoS2DvRGE8z3Iw4WzSCfQ4dN0o8Cw4JusKkfitEltj0eomf2ZuGTUkXVgG%2F8Q5NxzjgTmTUmfk3j%2Ft9jKqK%2Bup8oiKysVH8vbZbP%2BvcdIMRfmV1noLvNf9dcEb9xVkZZJAWMES4ErniBu3CpR0dalxwX57naPVa%2BT8hRvG5IJYoysXdu2oUyPbFJEiyiDmlYlLc1UO2UPcwkZfzU5SgaTjdnTKw%2BnPfxjdUCdmFaz%2FpmeTdI40ZysM%2F%2BDO6h52mYVGfrfBAvDfr4GXxQshf6h7zxw9bscqcvV7AA3rctpsmeNARUXq3Um3fPazD%2Bb8MWaxZmgVyui9kgh5%2F7GIT9cf8kRNzXjocnY95dYyF34qD0XedMysuB2ztwvTSyLrvb1ESVZ53xeyGlcFuxZbtej%2ByN%2FEbyRtcNO9%2FdWFsebj6KPIawUD1yz4cfh3enuPjDRjesRWS%2FKKwzn5tNEkw3PUA0Yq8NWM7vHg%2F5yV031KDjG75muidL8Ea4Tc0W%2BG91sC%2BcwpX81PurA10hO5QkQvIwFcHclqMNGQxL0GOqUBYlheKlkRjwrMQ8qbfNOw5h4cGTWOx0aY4suVLwUVADyqKLODjraufDlFMibzEZ54sl1HNI9KnAFYjaBNWeNkhPFwfOXp3uvHeeuUyo%2BOD095fvHMS%2F9Ix0agjx7MeFIxjhhTF%2BiivpapFIAaalit8BKNzprb1j9WgY4jj7BfzN9pXbimG%2BzVI7pSYGd6%2BhNhN8zWCQgMPeWmrT5WHpd064TUlE7v&X-Amz-Signature=eea1ece9f1d4a69ceca94795f85d3e9ecfdda6e280f185e02382409cd42d26f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
