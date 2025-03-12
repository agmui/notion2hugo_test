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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7GYVCH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICWbtmODu9JZAPVI2kglifzWZBUdIVKhaIhfhTpx7iRMAiEAgUG57UWKebihj1nt6Kr0Jq1qM%2FustmQhIUvwhRNxGR4qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSUB81ezZhMRWE94CrcAy%2FtCSwXYBJOXEQeFw3UenNaQ5i8iYsC1%2FKEtdsh6Tx4z%2FKMv4jMXFG6TY1Qi%2FLOD1ixPCrq%2BxMarggYI1ohrUPjdsq6JYZoR%2FKTUg4uhD%2B3i%2BrBZo%2BAJeC4EKxLlNp1%2BomaabhhEx6ePD6NZoXJT4g8G6JhHHi5hQTRffFd0KO%2F1m7%2FCa4VSBR0L%2FRvPN66RxsNSz1fM643CXrhSVzkwjowBBIFqbDkj%2FENWeLFPVHYS3URn5FtrSrvn8HwqbK2%2Ft%2FMZVBpHWjW6IXk5rLZxrWaV%2F%2F781Jn4SHQ36ApZCci6K6lnRU9c0MNZZGcqtPNW6jSxAVXdziR59oxcUOlI2hBrXo%2BXdKdRfjtql7W0oj1eFSttHlhzoyJTahlfapLtfenekPpAa7jtdVU4QmuvM200h84fd3HSthRJW2Hh%2FLtrqR3JWLR%2BeKfr9%2FIujzqYRdzzGzGZo68GCIHEgvGGbUJ7NWk8PC9v3FoZ0atpz84oRh7sgv7P%2BFJXejAnjMx%2BiKJ1WiBRcvulzKZuylMC7JX5C2v9UICDjaJxs%2BoX4tj53XiVlczfTMntC3MQG0UjEKqj06vATCUHoRY0EurxOOm%2Bkzp70RC7zELwQ%2FHduA2q17yJmWjv8941DQxMKbkx74GOqUBJ5zxq4tNBED%2BtgpRPP2Wpx%2BWBdOewj4HJNk3paRd%2FUKwTcr5%2BGTbBrnfHZnlp0FdHacBAa0zOkJ0vjEuTClRpfGK7CgLAcNFFDkHfxXNJt9LAobztuzqMEd86yvAu5eTKmvc3QRsakb71A4EgwRoFtYqvqI0b%2F3wBK78PP9a4TYzfx7HQoIFwMw4npYKwDujN4XXjSeRcaYrtgvlmzXpGa7ladZ7&X-Amz-Signature=4050b5a23c76795cd96bd661ace81418e50f7ad365ed90f822006f5c1631e3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IKRLJEN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVpFxQ98GWXBjOcual24biPjP20MeJO74o5IyUdHzUkAiA8Sxuk7gst65E2hj0NA1J9MN3TY2NCEaONiEKPYYJXEiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS915X5fDfOJnzUI5KtwDtyt30ZjeHkkSxHnz9Ee232ucGmDmzMwJ0OD6Jd%2BWuqpxgzQoNyNMk1Ia6P8eFrxHZq%2F%2B8pRR%2BoavYUaiSXXpqyaDF71IkQ6mJkUJN%2FLmcDGjuOXj%2BM48TBW2MKPAfXZD9HsKaURwf9dsQ%2BQoLac5M8bUww3SCQ8iTBXVkcmFCBHaAs%2BkK%2FfBgaUNpSwMTjHntiAXY3tNjI1nxI2AZwTubi3uJ1KTCOWfcKi5NXG0QLJuXMd7zTwwEpFoTvZWYouFb6YL0i8M7%2F1Oa2UIWol%2BHBb15ldteQwiiRGLfMNuS9s8BOOxa3pPt9NvXI1Ax28zs%2BNH53R%2BgeJ81xIFp3lpYKOJaE90gjOLt4DwdNUaTfuIQZ2FJmPuSnf8hxGnCsrppoTHqD0%2BYkd%2BHO5%2FqzfJaMTWtW35jh2JaCFcraZ1XARs8fwbnpRBlyDrpHmELd7yEVtO5WSwpyir%2FMb0xu0XKclibieRC9Ar2aKifXK71uNw3c1tcEM4xNeiZn8jYjrxcFbI%2FQjy9LgIbDJrUppZSKoYa4ZeKoztLCtxOv883jC%2F8LcU7SjWll0J%2B5ZOu%2BgU15VsQGNvjxF8lvk9ZxiBZ1r%2FlLIz6dPWqPjmfoqBPgTZMtMdu0nIhlBNzxcwyOTHvgY6pgHQX%2FHRFEF8HVlty2%2ByhkxABlTPEf5R0gPFaz6baBahfN6XT6HHdHYPuvSogOndx05zoZMdVceIruZL9mZPl0UhvnZpoDOArfwcvg4sz0aHVR2F22%2Fzaaal1HLWEBNB9wYJNbtKddG2THpR6KLN5vkdpfeeSD8e2UcrYZgQ%2FAZSU%2BkWIREPJaz37KVqs1H3S0vOB7Lr0wGLUQtvHYYGJof382EYBLeD&X-Amz-Signature=a6882128d1200bd52dad3f27788d8153ce1ea378bb832adec2c93ad1680b0bc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
