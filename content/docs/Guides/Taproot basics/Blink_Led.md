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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627STGLEQ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDIOLQFSCodd2wOZKZ89jqdsZEfQ0fdG4TP7%2Bx7cqqexAIgBAGBgPRdW7C0UOS0DP45NCDHRneTmYuqg0NVxJ2U2AEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYuOwr%2BWX7KrZuMCSrcA%2BSh1kxsZi5zgTYbaQE2f%2FVlIUKT%2FNLBaEnjB4t3bv3%2BqL1eJgq2611iqD7oWLUODzGZ7UWGUpXqbA%2FrSHFtO3gUpHiRk2DBvhB2v9wAoBO464fjbSC%2BYGhCWNLgNPCG%2BjOSQrwsLRW4zDHOQXE9Z6HFd3D9siAb7dJzBaxoVYQ4Z0rTPXu4aK9pY9groh4tOk5tVaWs7munPQkyS5iVQ4fOivYfgV1VmRO3zkTG%2F0M8qKDac53v8neDix6weS3ASjvo775skQ2%2BFrr5YOmzrY0i7NO8tiT10mkajfdfXnSiezlOZkk02pi4M8sqzqA79AtyimhHZZGlKFhUkkBdvzSXgOgzzJtTBBoHyVWo1trdiqhMPWmBVBEumDBU3BFImO3rbBWKT8jRZEsxV%2BwlGe1vthk9eTnvCRTP1TdkWjp0iX7M40x1TzIbQdi%2BCVOdX7mCVXvvbrrKQlgBTkw4%2Fo03Av5X0yU8f5o5%2BSlMr6Z%2BbBLg%2BAcYGQaKMRsD%2BqijyxIYp0oCHZE3QD6x1QBArRf0%2B8vSlSGBOFHXBZ9OJiC3qUcScHywLjbKl3Z%2B3LkbHW0iZSYNH3BabggN5XR5I0CCcSg%2F7GHwv0NfdodA3JWMwRJXy9mbtkhElas8MKfJ2r8GOqUBWjqNluovNV7g2hch6%2BGejeZmHUOJRj1JGrNMKa60U1Y%2B0FEq9B6ySQYc05ozsAuWsrVqtZ6UXUKiPSKUOifVkcBeFAoster%2F4mAnymUgc65GVx63QhMDeZf7bvlSFyxjSxnrqVg1xcQpBhNk8Ut1uxPL3O7%2F2lVrFkRSFhSzf4BWCvFLH62u4qcDOFeNJ5qg5RI7RuId1JGEl3tD9SPxhCfDpzMe&X-Amz-Signature=8073513fa07bbcb2b7536dc76e642a3f863d8f0e3cd7cc14524a048dae4c8be2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W47FPVRH%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIE5g9neh8T%2B3YZWgP9wAkxzO%2F50%2BOTA%2FnIrD42n0Ue8xAiEA8WT7vSsN%2BdguTjQpaS8%2BsDpwRRJi2bf97%2BcHUYCXZjcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb7chcmWPVaOQQALCrcA1%2B5sHcXEFw7BAfo8%2FjoRP%2Frx1Tg7Tj%2BMDqJUo2BiOwCq%2FqtsM2%2BUz2hNamhm5q%2BAaUjkMlkDsVZIqGGBZqVlR%2BJo7tI7%2FaxOBM0sTR%2B8Plgsb8f3Qmc6zq6Lia8d0cqjP7f8WftMqm%2Fqy%2FbQ3pIGEpAHnQHZdDHlhQWJ7mfzR5JNqf%2FtnvDba6lnQUhz3yTBGNbHWUhLM6tyV%2BDPLBxybuS5Bq5v%2FiPy2vKv2%2BxAruBLJzNimnrYaMYjvjt4V%2BJbbsKeK7YLx2zXPOw6xzm0x7NWG24BH4RfeoYY0uPC3kUip3L8YBV8XWwCSGClpgw6c%2BnIcLxl50nKYLFRkAmIYPIaAB%2F%2F9ONOctOWLUzonD7BiKI0zO98MaWXYPO%2Fv9thKoEMDTgPVv6uIU7cKgfdmrCod3M8H%2FgIt%2FphXrixx0jqyZ0mgCkUz2L%2B2OiOTIt%2BUUW%2BvhknY38201u5XdJDoMHCtMuMvOk%2Fcgx70IZ2cllFnlG%2Bc4iMlLK%2BYATKvzFfCCTWkGhm%2BHAf2oVEUfjT%2F6qDtFX44YX%2F7YMVcv018utd3hFqkLh3AFumLAu9%2FSl%2BGi%2FW1Rs%2B9%2BGOKAJ6GhBEJcJjcxqzWgHvxmrA8eCle0MuJ68eoK7CFURtMk%2BMK7J2r8GOqUBlrE0gsqQRRTyT%2ByjeSP6BxgSTYao1BRkXVBK6SHkpCzgMxGNNyp9QbSkIEqaXUMOUZAqRlPmJ57j7kdfOgXYP37irlIpL0BgMLEUmpvUgxo7QzpQMmg3QxoUHDnynvUZ17D1MVL5qnAVcmi67vidlTAq%2FGqcUbIvLE70lpTnYb8p9eTVpkNJB%2FFH3u6e7s8jiWil6o2t47DL1WNhqTwCRZiBrb85&X-Amz-Signature=6fcca4e7288ea8d015b478b5d93c90bf4d233d732ec0f31196124bd1f39345f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
