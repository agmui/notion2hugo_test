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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFF62J52%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEAMnsSxdMADoF8gefdPpFi9U2wb%2BuT5BVc1POiKAOB1AiBtEaRe4D%2FQXM2NgqxuTWtrmXIwWh3rxBXy0RB4hR5vVyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BHPz0CPf8f7adZXFKtwDqw9wNppBxy15s5l5lY6kNkYIvCbLpWix4TMOXM0%2F4PnCX2Lz%2B4%2BwbdUU%2FTtuAdpMqMqdiB0WDQBVXSUl8E53htAd9Al6Rv5ZdMN2wh8k1KkoXSNJN3JYxV%2Fi3%2FIn%2B8W8QWMWbzToFDprGDq9gN0SDYZq62R9I1tZ8W8fTgoNJc9KFXL2BU%2BNyySXcNhfnJt9L8Ddle%2BFQc5iuzzPiEtqEL%2BBtI3ZcghTIjRxJr3hXk6TVCH033SBG2F4oSK797V6asiOikalQZuAf7ZNfx0kA2OOkG34tYAbFW6DqLN2%2B9MtaFeV88WcZdGp8x%2BSkhEerHhkDOawMaWil8NCwSvt37gN%2FWuBJI2ST8k4NrNDxIf9OpAHu%2FohlGBHadIQ9MhaUc9pxs3P0b7WTuLF7p2%2BgHtNzyfZ%2FqvZWuXB%2FzBQkhSGMFTq0E0ygdwZHqqKrtirScXGLUb9TjCXC%2FPQ7puIezkoGIDbuEYtzxpjB8lEWH6kD3%2F46gdwT7D072uMgf6Nm%2BtxXTafg3qOv8Ch7P%2BZBChtXK1k3BlpM4SE7pUijKjQs%2BFww%2B2a1pF%2BTAxNh%2FsmJbMYAphhmXXWZq%2FMUjvY6DI%2FHcqHaOfEQiFCHAyybrLzLET8qj31Fgwsshswp66BvgY6pgHpBWJI9qUrawd3JE%2FErx9k2jtT4f0cuKqNf86qqhLgJlBDiH%2Fz4hD7%2Bu1Tk9XcBubwUA9bVm4TK%2B7%2FJESWTT11%2FjenmuNftyvacFG%2BYxkQtsAZRsuVxaEC%2FSMWz%2BtadWbXZTZUOYQtuLYkGeV2Hrm%2Bwt73A%2BQAliA5Z%2BvkJdn%2B%2F%2FQfEohDMMIdPgsU4stxCQw8vuzRHY4D5%2BQGokz2TgopD8XGSBGi&X-Amz-Signature=b580ad8caff09bcac31987a695ba743a8d795de0c802e1df31099b823affd3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTUKPPU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCi%2BgYAXCvcKySYvkbNMX2jv7TltiGN8UiXEQ51kg223gIhAOTO83RbCKfBaFDYzg0aPG1QIFB4x%2BfyphRFEFqZv6NHKv8DCHUQABoMNjM3NDIzMTgzODA1Igzs3H4%2FyKSjGrv13L4q3AMEcMDb2k6Ex9OTLWUANvIhIiHrEsb0sgP%2Fn%2BgFmiUwkRpe8Nr5XdoPuz7p5co4jhzI8XKRZqlTPFb1vhzczl4rqth%2BIbsgyW%2FtgjZjVJIdNzowmhw1kmpLR%2F5KICNJUKvbFRsAcO8%2FCcoKjSmVs3KA8c%2BieU1wOpOVfKbwF5ZG0F3uPFnl0GNsi86HymFLHPcx1IKSu2jIkqt2PQtBECxFanpNshPJ3TKl1kIYCG2CeyUsSNmjasr7%2FholdT5Op8qOAVlAqgeRv6RIgJfCGrN7ZvpbsB9LjPQpdTMj182KNtDHbU53WDs3%2BnOukqEvKkTf%2BRmkkrz5B3eYPpaDkXOWwmJ8Z76IHsgWOJ19MGQgLohyqZe78wWC2h5ierYFD7c84YJrYjrO34%2FE%2FhYPcA%2FSCVif98WLYYtV4e050wuuo%2FMfWXtRooYodNL63kB%2FS4R4voakmfjdkofUp%2FahtTUvQM3aBvvGj0yob9ZdHliJgrDBGEuU7KrjJa1TdEG6RxaWRKlSzN9fyKsncCtg6KkzUcd0gYFVtefqUBKZ7cOMEjsE2xKYXaDH4IvkokHuIJQG0o3YUDyk9XsOTvhSMC9tTYD25MoIZjVhWvIswJJ3cbSWNrmVQFjXnMMrdTDvroG%2BBjqkAddqoWWFCHKlxwUlMRUb6Nb5a27INGW3M2AW06xlq%2BHWmxjgCNLCYkZldia%2FWynHOuCEZqvo87qV%2FqzrJWy5PhXEkgn9AH%2FZWW71RgrTYZnYLXiwW1faJv3LxeP1HAfC82W%2BmiIVDsmk7LcQ4h0liWcGJnk%2F%2BM%2B5h7%2BW1NhTM5ZuzXPoQypM4eTVEtmVme0%2FBqrn3cq41nTEdnZEDbbmpoTzq%2Bsc&X-Amz-Signature=cba96373eb3ddb5e490e6085e9e817106a4b2938240240e574d3200bf6ca9f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
