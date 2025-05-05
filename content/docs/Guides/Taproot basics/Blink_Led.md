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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWZOCAT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDd6BNvybMai6hzIiI5CvQ1N%2By8HrSaCmhUCUmPrIOevwIgLkE9oVjZ4JnxyHz5uFDioq5HJ2Sde0SAJ0hLTuxtQG0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHvUgZ8cnZgDhD5bJSrcA%2FLJcd9F%2Fu7G3kx%2FSoGXHuC526OtzaYvBNQ3Y4XKP8IJiz5071dN%2F6CNcwqvBkU4Q1PPtW5X3EuVeI0%2B%2FI1LjXmIuGvl6PxZ%2Bm8M7H06igMdyDuoatoOdz9Ki5RwAW%2FPYkOvRiOOUOfxIRvpM%2FA143b2DTRhXGcFV2MVCsmOHLXe3W%2F0Tbnlzpcrr4i70v1bH6x7CfeA4D7GsBv0ZDw6lRblXXCyIjyKVR993XHOH8UPCemKhemGcnNxeJFeK68HjX2BGZEpZVyto7TdMbulvMjrcP%2Fb65%2BUy2uhJvbNOUM%2Fb%2FAV0X4KnsVqwrQBMK%2F6sLVShwbS56gWZP5zsG04cd92ATnX4J9zBkZoo6wji%2BJYZmn5ztBHJ0OOQ1x9%2BQUYz%2FzjCFk8lGrYqe%2BFpI2exL%2Bu1whU0T58p2cq0nDupPApLC1E6WAtBZDZpokF8gKjCjgkba4dS21Vj0vDysyNRTjIiGUAEQBtFRj4kD%2BNpwRyc4lrnes1ds9auLahfLq4pUOszG%2B%2B2J4Xt6mL75fOWulXYmwesbzdeE2%2F5tMGv5gIofQ6jjVoqYhmpyc6GwyzyPd9RQ2KRQItws6Ah8uNoyHBE2PbxDEU1DXumXNqSlXXl9dtbhqXiPFIAY34MPKc4cAGOqUB9PysHizZXhoz43o2Imd35gGY6kV%2BjXTxC9mFsIk8AdIf4UER6roDOGQrQoVXXRS10KDvPIU65YSZ99d3yHD4OdiTV%2FpLtBVcjv6EdxeJhaLmsMJfDNs0qis2%2FTqY1MtaODTucWLNNaLaSfC%2FwRTFR%2BuJd2WNAiAASwVq66bOwZ4aq96O%2FvxD8JkEPoRW61zcpEoaGuWbomBgFPUc4lfxJNucpL2x&X-Amz-Signature=30f184ba2091ef30ee1b079af73aaa268d5b1167a840519a2b51a1b774c1b5c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6Z3QBE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDYQtzMM0EMfoqvA6ikCsj31ZXavmIzEaKP4fI%2Bmsr8bAiBOsoV%2BVcbhL%2BUhT3z53Ogmx0lOFPPpm5V7jlYRzYYZpir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMYq4xhWeSkCKrgjjvKtwD5108iLRCxoG5Sa4EFjoCCWk1xOVdXbeisS24%2F5fcBAYs0xhysr2mAorRHKvpj3kVurztVvHy2pRHyL%2BN2qWv%2BdeaB9d%2BAWo%2FwJMW9gy8wiAX6wp0CF1yHMmNcdbPa6tgorGJ3amVg9SoUsqBIMGFNY4cLxvs2sdpEGjjLWJIzq5vycQ46ss1h1qbYVM0qG3tETtSq0otniKBUKMw4Q6U4OypNq7Vj2T5c5ajC6mrT0nWe%2B3e86zRjGeDzJXtXVr5Rwm3WoLyRwF2PlioiHbevmXRxKSGClMU%2FQ4dKC10mjTupafB51ssiOasr8yDPeUqmiJnSDixu2NBW6TZnzzOn3%2BzV2GlW9%2FSeskmo4A5lb226Bdl5j%2FP6SEQnDcw2vtz7bqbXbxMnbMyiZGIbYAZg1L4Y9EXLiGAHG6%2FkJIavB75tHZEv37V2NGLq3tYR63Evsait7eMXk%2F9tpO5MWW3dsnaCiybhOutShL%2FGBZuDyaoUC%2BNm3AXqL%2FZPV%2FmTw8af%2FbpPblZ%2FP%2FflJ2XYdZe0rNc2OUFOCJfxbtnAM8hDAiw5s09hE8MkC2%2FbUf3kQiw4C5XcKyuHLTIYSYV%2B%2BV%2BuH%2FtvtcmZbn0rBQJTFOoZONIrFBuhEurkC4%2Bbucw%2B5rhwAY6pgF1Ytbn76Piv8muhyZ0UJqMiNmYvDEL62%2BtZAAD%2FKZydAkJuZY2jCimpNkr67tCFz%2BF%2BbcrnBhP%2BwvnilSzGeqHeKk0kFhodu4OFmPQBThPK7rmX%2Bms7URDQ6tct6aD8JkgVsvjbqq1TW2SNWBGHoyonhgJhBCXbvQOyc76EqYO2Tvy5%2B5%2FeAwVeDfx7orPAwxpUd4aA5px0xc78%2BvPhYNSPolA%2BgHO&X-Amz-Signature=7f901dc05b3f3ae281e0837905db7e0bcc80f84aa1922131c078331f132d2d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
