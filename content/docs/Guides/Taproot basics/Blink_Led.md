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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPR5TPJU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSNw%2BNUlJCuQU8oN1NZIYp36uDaTgs7VZ8DCZ3JiIDDAiAJu2oDl1HiZTb2wn8spdiT%2BMaDil0GTj9q3IR%2B%2FuhsMSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMklP3ZRz4X0ygZBudKtwDqkPOaMbj2q%2FnjoMdqczN%2FJVddQ7taq%2B6j1N4fXe5yvJ%2FgUKNGCGe8tdQM7gmSzaisoeFzo%2FlL0V4WyTFkphP0XSJhF8Zqrhm30ZiyPlmaC%2FQaR3cjAZbIIgsP%2BZ6vDcRGkt21782z%2FQo8aIxXbPjQfz1U0wm%2FL6JL1HpmpGWnGilWmzCNvPJGBFubk0aDTPyn84JjO0RNQk7V7RmyRruaX84YklNdSjq4X28vy1XVzhcy1o7oJ9CkyDk7t%2BlR%2BhMSv6cdvglY%2Ft9vlGxT%2Fkkr%2F4aBUM0h%2BQkfjG3y40wxytqBk3YxGlGW2fJHsCOHkJvAi1ccHh9gYe%2FmFqGGVSTSEPO%2FpCXVcZ3L215YelgRzw2y3vXWA9HW3HUhpJ5goSFfaD5jl%2Fouwh37TYJdJ4gE63GVbQaCuDqoXuL0zHRv5bxci2aRPNRjOohSG8uiUUtchbJCkgDaxfWnVVrWws4ovcazs4M8JpLrs2I1V2g%2FDSqs2khL8N8y1Nh4DN22CJsb1n8U9sSlHzZeD6sl1cUYh4XN0Fx1WWMH6v3EP%2FYZva8rQHogQsJCpADxPfLY0uhiwamQbG0kdQ0FCzfXdXRkhcfMl4U%2BdOvt2DJiM0j1MY5FPbplu%2FTIqQ16L0w67mkvgY6pgFOBu%2BwQw%2FPDDUqIVeNPe6cHrsZ53s%2FGBX3e2%2FMJQD8JQnyblzxxZk3cXf41wPy1K2iwbqs%2BuZgvEYTejmkJj%2FCHxnjKXWbq04pKCqfKypmLxQJjAXFK9htVcFvJnbs%2BTyXY2lWMKnRL5DqKBXR9Ddif%2BnACPbXJXCzzfqszzotIRyiwBt0CRQdur3trV2Plmgy1YHBgnGoM3HRU6wkBr8psWi7WWF0&X-Amz-Signature=773b9ce3f2e7124bc9745e0fcdd22691edd22d48bf70e5f35721dcf8701a1dac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKPLXYJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCgSucpoCegXh1k3oONwOUZuPaFOnNA1YMdepRAWsN7AIgHctjT%2FJEuRobJBapjxE6O2yzNGsO6LZWER1D4eqLfYwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGgDVsreRuHKv7QDzyrcA0LxJ4OKiSb3yuGTiqt4bBps6aaKuv2o0oSvbtr5AwaPLmQ96DF2MAoEL%2Fuw2zMY9dgtXDKxQ2SMLfKTE2p31EY2sSuSxpAN6SrD7FnrKG2rbOF9jRCI4vADK7GeqSbvIiRmmsbDegpM2dXgWnd7dWdPc4xEDoPNwe2q4ZpStzNJi%2BFKqGiR2cZIR2KFkNwq%2FCDsGL%2FjvjAWhkKZ7%2FwgyqRux8S205lBcj13ZHpjsCJeyZHbPobO4vM3MLcyxVFCn5cEsITCusl0Mp3N%2Fsxch1EebNRyjsQa4FPRnCVI6pWY34TLDAN47NGONJLiSSBYOWTYCoyqHlzNbnmiuC1MEere%2BRWVLZnAfMVlf3NZJjoCCUKT9YwvF2U1ubPo8BrIFQxR0g5pf5haYtQG8efE7i247Go5KhKEV6jpu1%2BBvLR0uqZ9rDYtEKx5cVLaJdc0BW%2BTY1uRkNqz9QzTmkD8ipX6GyrkKHDaTak8gEdV9EXiZNGBMVNjQmPUWH2oo3SS%2Br00IuY5eMQ3plBU%2FepTibJiNrM76SxQB%2B7la80aXHRIndCqfCWg7p2LxbzL48W71ypFLNLDhgL80oBaJy6YWRHxYoNHyQ1GFJTgzODjiCtpVtpYRSiCNV3Nw0WXMLW5pL4GOqUBSm6BigqwkvM%2BpQ9tE7GHAg8EOZ199Jo7hjy60rDFBjRvLkHpv1KPdgnTR9J8%2BRq5pNZWNMhHTPZ3%2FcByOTFBfkHyzC5aa%2BPpAyAe3urfBLJ%2BPMGw%2Fmfl%2Fp7ncqu88xZcbrHnfwjlPLQVdFjzB2eaIefrEFiaebkjizH8BOQojJRwPpBCanKx4mOpPjnZZY7PsDFU%2F4RuoWRVAmtFP45d%2Bw%2FAbRFC&X-Amz-Signature=d24cf40def9b199d346b59db7f2516679081167d932469c5a104cf4aec04c7df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
