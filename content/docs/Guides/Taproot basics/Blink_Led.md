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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YRYN6T2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWSu7ljwJqTE61Wxny5WC5YyH0KRRg7NPNc4y1pSfuzwIgF7z%2F5SF8AYi3AdLRDhxJ%2F37KGDqdv4vNQAwXu3yKkQwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWyhk2qEw610wbVQyrcA9gCFTmN2WcOvY2hOu4Bs0CmCbg0AMoHMRdu04iei27t26kNHFmPlx8C6XnEbYL9DylDRxaCAXS06jl5cs%2B%2BfJmbo4JdNOOP9WSZ0J3k8q7jXkuHAv4FwnWOLU1Itm4atouV9JH4g3bohRRIdYFR2YM5796gb6eIDVqgA%2FHg%2BbcVAwF8CtjXmU9dh%2Fy14O%2FPwMDtQdpmqQj0obN4BkGanBzZvgRWBp2SDggGPNy0xtAKQXqSDZduv6q3lvgVobly2dVtDxjSQ06I3h3oa3fYqKrwuoudTXcvf1Osj8%2B%2BRWBqnAXZyyXTZOPwemAHij%2FapRv4xnQxlqg0aF9DvccjPVeXzLTvJGUqSsCPttlbDyCY%2BdjskyucohsPKO4K8%2BKVJozKkdz8I4bkRHYV8b6AQgtrJ%2BP66LLtq09O0UGEXkv4pTLPxb9l%2BQ%2F7YOaCO1v1eDcdQBcwR5lcJd%2FDvACSp8z%2BrxHK4Rs2e%2FX0Y%2FOzjsaxtxFc4SgIyDujKOTTAkbTP86rhDZWRSnPg7Jpo575oCzLkrOvpW5%2FrL6PXcPuXCc%2FJQk4jE%2Fry%2BH86iMZEkW08tTQwePU8CR9ScJ4mVtDEe%2BQJ7%2F8df%2BLec7%2FTpuixcZNhRUfRnfIX73V83GWMJSO%2BMMGOqUB4sSZWI5mCF%2BXtmfKJU7ClJf2tgfAmzjXZSYRjlHEm4Ro%2Ft%2BUnbGLHbJ4uNpMr7nRmLsZgFWXxv8sRlmViNQXKbe%2FR%2FWIDYNOeJJ3icqE7kVuZ98%2BKqV%2BPOaXD%2BU34FEvDGsOi%2FC0o7uBOCEu1f3cY97UCVDtxpGvTiGgXkPvDA2oHNyINkheyKRdE5jc6dwvBFWMBVDGDwVaTT6YkfM%2Bzri%2FMqkF&X-Amz-Signature=af0e9261794ce3905d97f8641b203d90a9dbfc512cd4bcaca5ed8732cc7afa53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IYWIOVY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2ve4nJQTgpfol7gs%2FyTh3%2BdmBAQwXcqbbdXWqNa9fjAiBDM0LjZ543wCni%2F48WlcCnWCy79gfGYN8kVVKFZ4P3uCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0oE%2BSdhANlTXchuvKtwDou1I3lI5axhIQI%2B1LfKiuqymhNAmWwSAmHHG8bMaXRbk9cYGRKYKJQOYcPRaqAymoPZJQxhEP%2BxdBXe3piw7iOQPAASINgPSyYxFv9ecFV7lhKHImiCTiy9uVOY4Vqy83356HmEcemySKcadlI7gpgIyR13PyoN%2BbZvSv0ViuwkJRrrS7sGpdxPMu%2FrjtI%2B01skENEWcCLoRBeuSAWuaVCvQzxGPxEUcomIo3Vy1y3KHS98JnS73GarSqhurldkP%2F9NW4pzYpKGeQHEDVyFSkenXCzHGpk1JnXR7%2BGfK%2BF1Gdei073EM3tM26RgiTwYuS85fhc%2FsKeRfBlNTuOvkrboJZaOiEMQfwfz8fpTnF%2BAxmdVgOCxq0jgX%2BZac%2B9%2BiX4jp0Y5Z3fvTl7UvZXCJ97KP3gERjLRP261yu6ndtmsc4IAP3sqaVikStvYltV1BcDi80XJgAHgPeKwXpn5vz1IAjEPN9%2BE3Z%2Bj0H%2BZ7GaS5D4nFPdVe%2BaXtvbyNzQGUnVtTf%2Fa2P51YbSq2NZwHpHSzhqLWLzDTEmCM975HyI8chjqoyS6dYUFHIR2cAJlJtOAzoXSZb90UUchyvBcUU8aIv7LuKaeL3epobxRyQOTPzYs46bWtDSvI8FIw0Y34wwY6pgEYH2wj5IhfWASuWRC%2FY5TCcp1FplnntztemCkF2qHqOLGedBzMwfQ6TPqf906m%2F%2BNWYsQ7D2CCXa35xsvH%2B%2B8wT83NTo7wmi5ygFy4TIHU1ydlVIckjqelde%2FnU43eirouXy22HryhKJ3QFT8bN1kpoos6alCldJF52R3pP3lRryx9EHeUXFpZ%2Br8NnuMrIpHk89TZgQYkkq%2BXcj5U7pEF8Sl5pq5i&X-Amz-Signature=d509a80ad82b5187bb406dd2f8b1dcef966664233c69acd70bfd940297da187c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
