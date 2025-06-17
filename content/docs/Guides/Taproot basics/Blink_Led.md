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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UEPM5UJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDh%2BCwr2EqPy1uny%2Bf4AVdYABM%2FHWBfXg%2Ftpuh2QL70AiEA58EcemLtfWmkK8zlIa%2FSscNvOxmM4e%2BWPzLSyovA2FYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFpTdHMm0UQ75J3beCrcAw4Vp8gvy0mh6YX7UPIzoTDAzmhrS1O%2FC1Pnoce9YbwlwPxTucJ2TUzxfOGmp0GI%2B%2Fwx40%2BfseRJA8rIpO6N%2FYav9bgZAzgbWDZr86Sqe40je8Peva%2F2MeNE4SdasuYl47HYKvIFxgBqvyQsOunrerXHQv3LuCMbQF%2BCuTz7%2FLWr8rM%2Fr7FfPjGdD8C2VVP3U32wFfSngFfYoeg7aYWyUfpECMb9cjl0CLmXv%2FkRq8fDG%2BWP2w4cmPIjET64OnUk%2Bww%2FRamSS8qzfcVt1yKuCmBab0BBeee2OPYNdDFqRt6ConCG1DCpIvEFQ07IR%2BVzZfH88dTVQGxkj5IpfP5ZYz%2BQ25Y%2FovFdz9ATDKBotR32E1gls%2Fp0zmaayPbaGaudpe6NZ%2FdiKyUrFmCfeFuAXUCMUhaZt1wYTNUu2zyHgdDGtwHnjtfoyemtEuPw8QGHYOd4Fj70lMw60E1ffEwYZSHZyTvDP2Xy8iblpZJyWxKwZfgWVqQRQkvTTndE9uNAp8T5wZfzu5JbarQT8WsEnRswVOePbv1UNIUXdM2NWewbZJ1YLbH6qLSXEFzjWgOx4UitP23jo8fRgnX2wdvLg3GyatK2vxc7CCMb8cTjrCZVzM0ou8tQ1esuwKUoMOCTxMIGOqUB%2B5RYqu8RZ2w%2BAT88pVv4AoTAeMjeFh9VuNcAT9DZiNfcTqVMaeRPdk8XsEq5Ci8H17go8Tdnq9OAswPItmRQXU0wT9lKtQZ8tTcdrqh6iMh2R9vYNoZ5TFe81BnObNji5wNQJH4eExiUsc%2BPjDvm7nsAiFs7pumh%2Fs13jaKHbMsfkbqc1o0k4a7f8IFc5vPnHoG0ECObg5oCvRGgH7XNoJrHNa%2BY&X-Amz-Signature=77af9f26c0f7264a22586aad99708419ed2e104ee97b1bd1287e97bcdc96bcaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNVATSEY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYITGGYtIwHr%2B8zZXGDo8vuKMn1sLmaDRuZX6H5GQQWQIhALxdp1K7eiSaKi3Bzlu9ir5HdLFRkfx4FDcM33elMOWaKv8DCG8QABoMNjM3NDIzMTgzODA1IgwORvqrr3NujD69IHcq3APB%2BPeBRaouAw2wPEN1xhl1x0g5ImrIhDhh9iTjpfe6z1OnG31BPpwzShrGKQsUxvKD%2B5aj6v1K3t%2FwU6%2B3xFkpQROoglF4v9cyuVsQspAjBz8ODTOgad2JaPuIsleYXKfc8g5vhn5W%2BODcnWmtkdDoONX1QHPw%2BNbsPH1w01qfDOXcRgsAE4XzU48mFdO8%2B8SZuGWRgwMsEsJVyvvjDPZV%2Flf8R%2FsPlJHeoB7G69PnDu%2BxkewS8iZpJ8KZok2H3w1b1N6O1fl78aER72ArObUiWsFvJwdRtEAiNf0IUIQpRIKFEJeaiT8L6tizjFnK6pXrxvIrS%2BQ5qdi336XeQ%2Bpivr79t5VMKG3AOrWo5tXC7%2F8iRbZFvQ2cM6S1X9mzTOrEQoNOpY0zZTYPhDpKNN98OqLAbMPivP8DRAIGYMDjSqFFu2lXINTsLQCrtAEuts6Uz9kbBNBpPb8O%2Flm8z%2FZEZe7yeqr4SNZcRH5mEHH8aoHbA5nDBp1LrUi%2BM60D6LuovpXrnzcB8dOlklX2rzMK3QwVxWA9wfc7abl0YHlY00n3zBESCz5F8iVOX8LudLBQI8cnfquoHl5JYt%2F0IrCU4JPiNnTFHKIjuH3SyQxR%2FlQgj1vxSvOUBS8hUzDMk8TCBjqkAZ%2FMp8ko6FXqEKwpGyOvkAAS3I%2FxzhOdXm4MwlDJFMd8wLFiEems5xL3KddqDjee0t6FYy9%2BKbYiRMdldPV8GTpShDRRvPWPO19HbjKae%2FRlFc%2FghHCXmkkPtqb90qucJxaSxVLqjzNaI%2Bh9La%2Fr%2FwxE1etCmqY%2BrD0lT36u02v3AVFx61sqSQzXGgepNVTWI9NgRvvsz2d7tFLMe9CBPOWdxyKV&X-Amz-Signature=8b00aa1bc64b2ec492f3ad9aeacdc520bb9c5ab8a7ac9c52e81b3dea3cdc7f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
