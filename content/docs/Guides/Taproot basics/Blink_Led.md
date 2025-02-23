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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7F7P7BI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTwu5iKbcC7MtLMOEOeBq4jHfD%2FTVOsqenfjvazN5ergIgbBqm%2FF%2FsrnHIwYGXOxbFYgovMLKVHedCej6lcXOO%2BP8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOlL%2BsbohC2HOfvnByrcAy2X1N7JWGRM3O7bw1Zp8QTriNHDmlQ2eso6Y2UvoFi%2F2tRH%2FYGX03GL3AtIlxzKyUfkXEo%2Bto7Axvyxyo1IKIFGYj66ndVVv849DrnVAZc3H4N9t72aN738oTFiPNwSvMUlJ8J5tTiN%2BKG%2Bl1dwtT4MuJsYijLOfzuF%2FA3am8Rhn%2FFck%2FLNLz87DHp0uyKZYJstOuoRb0xU28yixX8YYi1fww2QqMgBQmHEsmDGBY5JvJi8oR8wTCtd%2BZ1axCtY1U2NtXfbxPVrJx9cbiFOV1MnrkNop4u5gzWSls8N2V3IrjYBIwyIo%2FzoRPoO7JoK519%2BMs0xjNe1AfxZ4u1bdVymneADgSrUtNNqzG3dyWzxj3SeG1SsLbVareXhPcP28CdXmalM7FA%2BpZ0qmKJ7mZjBjckN%2FlMvLWLdEgt5IdCuZ3ivuv8D2kWiyuQ%2FMw%2Ff%2BYk5eocGZb2AWKvHflQOOzMudiiX1WdGS00cbJHd5JtAp9Qqxd0zDcLH27iLD1HiORPQoE4FuSA7KgNtatiKYHdWY4Nc4qXF7oGR7biWRwGK86WA20UnbmUTs%2B748LldQc4rOiXbjnaPwMJbterYhtVP6xeFe6T835Nj67jay7veYl0cCXZJ1vhI4YR1MJrS7b0GOqUBswHc675xVcmRDJusbdL2WvwzejtmT%2B6Ca0JECReJV66vtBTZdLGFSvVF2Q4Pm4qoDZuKJLVLHopINZ2bgRTEcXK5zAv3%2F471PafA8gdK0vzk%2B3CtB44Ie59XLzp3hAndx1y8MJLSbyUfR%2B0VGvfhVJbSMgHm8J9HFqx%2FcsOJrV1gsWicSgef6OZxQOtb3KNqI0dWweKRSJTo%2BL2ZidhiNSTrpiNW&X-Amz-Signature=afce5fe72dfec2a07f244b874526e12ac2d2300792a0f61a0db9b23063bdec68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXHJUKBH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJFLRwjl0pG%2FsinrY7zYHecH6tJhN%2FKGB4arR5%2FGvHbAiEA3j7pmYSGaagwCwrWG2cp4rVXYJzqkQ9e3pDsDxT1jbMq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJnNCFbA5nUke5ZHKircAzM4gS7GhyKCH1RR3K4V1DmoFXeGS%2Bc2x1%2B8Z2fMxlj9pwKHUtJ7dtphsoooiNPj85YJWVWEPuG8%2BtWvJgetIG2VHR2NZYlk0tEilaYEfdafhBIbJ%2B4H8HD8Jm8cdggZFIe5U7rTs2Z25GwNw9Thvlok9efL2T8AYrNy9V5ld8cFcCvFqtUdg6urv24ZdVtPUKr4nJEJZ7UkSY%2BxHRyZDDiLdUQDJSs6Pl1VUYY0rBBfmlrWn2Lbzuve0rhYEXWrIPs9UKn8CTP18uAItR6kRN6D%2BSOHpp1cxV%2Bc9j4YfaLakpMGp5vIimP9NWYadFLMeensvUHgl8GrrIbB4Dm8D7%2BnTlciU%2BUFPrcKltptpLZd136jWqEep21vBjNyRuGW0Snp8wF1YJdzwZylz16qP%2Fp%2FbV%2F8zMnbc%2FGGKQj6NK3ro1Gcdnk8pk%2BCiUCbCUaHO4hxdkHgQ2vlnTCzkEhpFRpJKDsuaFkg1%2FEMeqmpDFE1n5KxBY9x86hpu5rlAuejWjgzybetwyZ1mkX7xeoiXCjM9PZ2j0FeNfieV8akPrN%2B%2BmIn4L%2Bf2mt%2B1tV%2Bq3R%2FlFQDBsjFwoh2bUo3LxvG7GsKZa3%2Fuac7DJk67kk%2FcoL9BWwvDoQZrYm89OqSMOaU7b0GOqUBf0fPDq0JjiGZ1mZLm7chudLt6I%2FNeWNWHR6OEQiW7le34bBOWgHVFAFoMPfWry7BGWzkY7iDxtTEEPgPVKKYTUuddTbjw5PCZeJ4yX61ewv%2Fj4u4QLSwZCgxu2YLWHgKivrLwdyapVF2bOyLRx%2Fb8fwsrUC2MLSFcSK4UXO3QxH9VF4wL%2By7y%2Bd1v5ekGQwojeZ13dbe9FfYaEautM21yyvJR9Nj&X-Amz-Signature=a8a119920ee92d0dd333427e043d2bfefc330c70cc809f4527831f00d2e51395&X-Amz-SignedHeaders=host&x-id=GetObject)

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
