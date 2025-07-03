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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV7PGJCF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCTC8vfriYpEkhLVpbKGDmfdt84Q9Xpv4uOb59x7ONC2AIgYe7e3kIRmx4B1enDVa9iAEDuKMKw4d18WrPG0Ts3y8cqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC65Z3381hDfaAVDmCrcAy8zmfAkb6sdE445hLlmlGaNxA97XYaaHF%2FfCuQNTADmcVVqgCSJvoDfrLjRP05ScdYT5XGlb9lUeFDCaCm9B6yFElkxeb%2F6oxeTKZL79auo9afEv3NAOqyzoz2TsQzHyyun7eHZaGRv6bSQ4r3ssHo%2BL86IJlPsLIb720gfHrAvdUxxtxkFTZqVpOaCCfgydpwxrxpj3u3a%2B%2B4hjdONgg4THZEktl7R4%2BUK3ULOZ6sY9xqiB%2FneP630ZhFcDH2S0AdzGFbSbA32HiDlKuiLFgTDwVVPIdaAfXpSHF3rVvUO5frkOzwNKfxBBHy%2BqlcfNzjyGTB4JK%2FTZzEmvwZvz54ZR4eXHqvUxFllWZfZJTUopMdJ%2BQ1a%2BN7jSTlwPDsMKGuZA%2B7zrQ64hFDcwUYKSJBc2TaYPgu4%2FvKClP7CQ%2BWyEdrjtEHBVxjLp83QfZV1bnNk%2BgainZ9TGPe%2BpiZo3YPAwzv2UIXlduoTKPnACCxsyGFLiMUzkE3gvNdNzqzYu6ikXMMEImI88jgayNmZ3VvoA2cTrworvwsElqPfVvavSHkLzRwjorFdd1Yxf03x1nChvH%2BTBKyXMCY8OoZDCK3srgfUte%2F8OjUQLh3vGyqd7ivzK4skJI9Udz%2BIMIyHmMMGOqUB3oP36FbaiHRJTlksLIYVgUFwFHb%2FGqVAdz6iZ5zU%2BOzJDXdufFDJYbKIbHBefMXmZrg2oapYUFkUGm2CxyyF7T3Z0%2BlP6j5jV08Ndy0K390%2BThP5wXRgTyL%2BRQGOcyqy7IPHh2HwijP9OtdYz%2BPqND4pdRZTyx4jCH8Z6nx2vWPamVb7Sp%2BeimVgXJBP3F%2FDnM%2Brf5S63OkXoX3SIuO87WzxfWV5&X-Amz-Signature=cd6dbcbb9a4c326224681afe8861533f85f400074a22544a94a4545b15c51250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEIU5AC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCt3%2Bgvckb%2BITJdy%2FXWMWkV%2B7UXSEqtuASOG6cmneSjZgIhAIAH9t8kOoCwokHXZ%2BmA0P%2FZl9PzyqxxmtPu%2FPVrnBROKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2Fi9ijy8bgLxFkGlsq3AOfLZGgHFq0iOXFuhfJH3V1%2Bw%2FttEQYpmDOI63SjoEzhOOGoKQM7GhLn%2FM02sR3Rd0Y2jQcL6eVFFEfJK0f5kIdkpYnPJqYu7ws4CB4tSUYnLOhyzo8j8SVvP3REhgmQTpIs6FEqD6wiC2zkkjTqzRXE74QD4nStSB6MmpyjHrg13doSvVEG0Z03TgQjtM0m9LCpKkGQdui0YEaavexgN0%2BRgyAMARqMfi0zEYDJSLfEwF%2F%2FiDm8bNZpcvoYGxQWi%2F0hj9nWOXbO7tCRSBV74nuNmcFhxfhLBqurNiXtNfVMqiq4Tii9so6Vrw7P95RvI%2FXLRYZIrsGEhRZYlgocOJraw2ul8RBHC%2FopZ9vxTCFULlL%2FbPHeGzQ6Y%2FnFaNucu4s52UXD%2BA4BrS56u0s3D0S6Bp9bmUPYPyEfdjPsua4Nm%2B4FFTU7S5fNOUG7xLKe9Q9vrHnFItfYzZY3Nu8oqX8Dkmg1Kyh%2F4I%2FpA5NqwF%2F6OgFSWO9EyTpnEjtBD%2BgLHGufLvnbwix07IiW%2FQAmTqkE1AoLInQwjRZZz8yXu9k9Aq%2FJqBVYZvhhWuzbQKyIrbqLnnvrynUACnbMvI80XL2vUfm7GSh1a%2F%2BzkifrV882Q0lJrXtCu%2BkEIqHbzCBiJjDBjqkAXriJndB6wnaEsZx2BQAV9qzm6pmKAwGbHD3NJXpUFq95dxT2OWl%2Bp16vwYkY7PqY%2Fsc9P68%2Bcy68PfCDchhLpd%2F1Xhef1YooKRLdNzJamdC%2FrYVJkcD02kdpOgFuqdQvQwzIieG8NikcZPt9VfvrysB4zNEEmM9rTdnlbeOzVEUDPkNbebqSqoYx3IBKT2O51l4A9P3z9wTPqng%2FMYIm0Z2CXe3&X-Amz-Signature=78d9e4c0031403cfa680a6b9e1b1f2bb926bb46fb6eb91532aea8b8ab18591b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
