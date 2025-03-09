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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRCM4T7A%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGlVR46qSAo4BseVSFCi1s91qW8GXGvzgfXXfwT9X0IAAiEA9vWiKKW0hB%2BcH6nCyKBccdnTxCaJyaL%2F%2F7UL2NFj%2FQ4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP8BO%2F9crXQ%2BWLyrTSrcA%2BOMzbR7P4RvMwIzaW2qINgWwNnmRQKHYZMcHGs0gSRxzYuryluJDQNpemgOzlirdwBQYpH%2FCGr0H2gf7llGThlCkD8s2LuoeivdS%2ByqrDETu4aqzvV0rnhHUiYU%2Bs1fvC1or%2BDJF7T4uNebvJMT7Sgvf2kRNq6rfTLj7MQ5cH%2F5YV9NBKJuDUZMICkSlEbtMDJFu9GSjzmteR3mA5nxMflBAA0RLRJcEINg9HpbHxUqMNMcz14olCtewhQucCOHeG65g22p79VyvmKt1AIBxcj3EjV%2FTI0sTU8pkiy%2FKeI8A2r9AeavHmvpJNeR76iO9IZAykJI0I2n%2BgdZizKISA3CUCNkTfv3nmvYqn2nDdrx8g%2Bn8AoWAlsRiHDUYyaS%2Bf%2FTMiPSWTahmnP7Zcf7Ev3QNbOfH6s4yd7t8dhWs9sys1wyfp0mjDCIGYUq0%2BovDi%2F1Ft%2FY5O9rrpDy4KLYwBqJg2HRjJ%2BjdmEn6HaSzUO17sYBYBeVhDeNP2H57%2F7IBdtXjMtK3DDTjM9aTUjboD5mtGWs1i1zNbqauIQp7rfRCFrdkNuXUI6Ro7CD8ocifGYJdb0scK%2B57%2Fc70AHd7H6flGxD7NKY86IQnwydmUmRRUszQDMqiEk9AsFPMO3gt74GOqUBvo5UcCyuSHbFjGTZ2K%2BEfCfVTbd6v%2Frf8ME4uBYF2jiPdOzeW91x5AkWenjBXAGy74isqasjYjlvVNgciFe%2ByvzaGcd1erdMHTns6eKQPq7aY%2FNe06p3vPv3zNS8VicvKG5BjvuhK0rLlyQsW2Pe2OfoHnyeA84bREHo%2BMgha4FmcYXCHue55QXjb5%2BsoSvCwK9w%2F8fnBccNYMQ5RYP2MA9YQgpx&X-Amz-Signature=441ad336212600de7bca58dd8a97fc0596ac4073d75c16d7677a6f8f512dc0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTJIHNV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBQaGICp8RYMnvC0b1Yzmyket9dqMnH1eqE43cfuLnhgAiEA%2BB4gsP1guWZpNkyXU%2F8ZNg03iOozr5qv5p1f6TNtn%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNHfb1dXhIwNHOHRByrcA3NkFCg%2BCYQUQeSaBOjufnVn35LkwYOG%2F%2BEr6Z3ymK8TfJgjCpmlM7k7KxGBYgBc8JEygOLQQWHYy9uOaDJC%2B374kJ2XysEDnUSJdc8uKgf%2Fw6BXKpkuNm3QX4RID4InDsav9CzHBy5B63g5VWVhh9A9gpIMOgycfxnRLwVkGq0fzsxyaiCFCZLG6jjJmP0JWzEnV5k6u9jnxZom%2BhLSEc9iUbOH51i4mvQpTgtuMt0lrJ2ujYxyHtWp0d9QWf9NR2EgaG0s7FT3QF%2Bgk%2FXefkT37TBRpWvGm8JQGMGtXzlNBQ1xqxOVzzSMx3hvCa3Tx6XkiC5mNablj0lqA0WgTxKcKREMZX%2FG%2FzGHVCRva2S%2FaF0sQ%2FU5%2Fq4w0ZkLkgVDdxc4ot3yeiAngDqcbtyh2aavkkQP%2FdrLKHUFQkY0NYYsryBh7TAbs%2F9ZxySqDLHCZ%2FJpkxTMkI%2Ft2BtQiZ2kQUJB2gU5pdTSwcninjuc1Zusypcw5wVyCJTKNZPATLHI5WnCyv9iPoz57VB8PWihALaubNNv0DtLUCsiG1Xlme0eAqUdNWLr9euN1IoRmLVTNIsx7yWp8os1lXAvWPUx6%2BL1Ws0St22ZKnnZ3upPoBfDy%2FJuGUnIC04sHFCuMNzgt74GOqUB2LnkIJROXhp9SWDc8Mg4%2BphZd3G7BsmCWjE6rwnBRiSazbWtJjE0GFnIVyAkYJh6OXAbYXJh2oueLU1Ydu%2FRYgRVEzh6SCwA%2FLZF9Mq799oQ%2FM59h%2FWYt%2BzxAj%2BYdqTZ1hd%2BqZrssfPV2TQ6iYoi%2FglmnEqZpOW3OQIPTAnCiGLH%2FGv10qHACowYZOCNR0tBzoF2d4uAcY%2FyoImszrDnkq4Twb%2Bc&X-Amz-Signature=c5ccde494ed5672ec213553a282c30cba508e7226242c936e637108b5e4ec075&X-Amz-SignedHeaders=host&x-id=GetObject)

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
