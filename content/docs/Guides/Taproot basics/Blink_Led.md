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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4AU6D7E%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD91Ar3wHvq7hwWkPMk46uTLtgFn8KUImLDrVj%2BYTwNcwIgSZV3QbPSHpan3lXgtAVQcKgI8Po2KNp2%2BTpbiGU9cagq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIUVnSEjKE9dku%2FnoircAzZggcDYcH3gpGt5vBIDdh0cFCEnqkRHH5zDeW1CEOraVDXqmKR775PwaLhjrWiRolR0woPpfztRNTMW6HLIm6BiXtyhhGqO%2BokHl%2FR3OY6Qz6bysnzgzAsdxQurMgK9HkNgdC4g%2BtOe7k22dxsfZIM8kE4HXxTutTVXp5tTqDudrCSfWRqrFZ85wop8ExV1TpaxN1AzfZFL%2BNPFiOecjMSh%2Fn2Cxx9no0KmAvuWxxzJ%2FY6cL%2FHSKT1zm0LAQLyiyOYgVVd3tFSf9e5itz4jsGTZ1wQyuI8nnvjRGN1D%2BgO0VD2xMmgsk%2FLKKHFUGxE5NhEdZ7hTN0N1PDScggtbSOBTYcmdTgOCsfNvvr03EZPv5NP4g4OKZO%2B%2FGRmzVrdSQ7k1KSYDVEKOekyQOKGjQ11ipR52byLT7KHQfzV3denO8oFnP0egczObEq7U9wzF1Aw0xi4Lhh4GafkjzGNmbOfPZLhLt%2BuURxuuJaJeaZKc4l44AK0rd2G4CGzvKCHzbYqNpHr%2FiyJdFVZ3N53G6I6wApQZjh3sQ4xw2oYnYSOnJvnDqG97F4trCMgf%2BSHH%2FoKxKSeV6NgYBNchfTW841qALAwodLWIIFLd36MXeFs6XK4iAZxH%2FiU7hMVyMOjImcEGOqUBgMXpqOkwK0BdEW9TidJ2GeySgXIh981xZxYuXE%2Fn1E3huY1fs62oQBdk5K9rOiuRRzhqhzlXyi3F1OwIxNq%2FLBncnMA01mCn92dAQTn0JcS67LHcMKE7cXvJltMQfHI66SBeoM7IoEfAJy%2BEkuwE5zS6rCU%2FVfSxQXx1%2BP8JazcDCLgBxkuzaBQBDbgLPE8NrTX17xo49%2B2TNbPJ2wRwaHNWsp2Y&X-Amz-Signature=e2fabcdbf6146c04e9af48162f0dadee1cf65fdc6974697823bd0e0db6d10bff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAOGXNFH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCl6Z6VMbEWqIH%2FzWPDuFP6%2F5CNShWohGiAZU1RbEqNKQIhAI6lAcXEyF4kKTS5ZywlIha2HqwV7cUYsQwEJ9HmRf4nKv8DCDcQABoMNjM3NDIzMTgzODA1IgxBAk69XnpVLqiPO9oq3AOrsgsyT7mT2xOQV7hzFdf6cLCsjDyrSwtU8RVEePkyUT73xSF7STe%2BB2PcTKf3E2VDD6RSy9dOARbcrl%2BUnyEvRbt1PUCjKnUm91hVUJgXNOIckhbpTb9yPRZ%2Fx8GcTyT1TBCo84Ra%2FBAgQVQ3s7jDXlW%2BoMa9oAcICtSWHvOXmNPSO0zgujEk7roBQCYunoWeyjXTiM229euraEOETJ27S0IUbUFTv8ac8r%2BL3WmmUTihd78YEcmridCSmKGwfgabTpK%2BnqqTmLvXt5fOuVNya15K7AElD1L58ugN4yJ%2FWCALBoDxfIV1U49R2NuQwrU78TIod5bwk4x4o1G6iyGzCk4UC8qLbDimS8g9sNzoPLrZ0iLn6uFjALM6gpeqy5DahRVBESI91gHpx93gUaYwEzpmlc1HQfztDQXvmQU8Sih%2FZAagp7LqKSvjCPVRa2X3OZtzv%2BzwPv8%2Fgsr4a%2FZg5Sd7znAc4kV1Q8H2ZHedqbKOu6Ye1lbvr8Sl8175xNddwtFYyIDWp%2FnKKkfZeXFj3kuGjUaMgc%2FdblEFkC3VYnZTXNS4lLJ2iFNLpAq7mwvHIuPAXgBgN2I6QlZ1DwBEapZV6O4CRDprYmcIdgui4uSyrm0BdRql%2FeWSNTCfyZnBBjqkATyyQuhr3BsBH6wzin%2BDEe36jp54HBJdNle05rRLRZoVGrR6pZIsECzK5k1FZ9gymH%2Fi60ottiWpmZLtr54o9eDgqnv5xUCZYukKjKBLKLyJ%2BGEn%2FywpLb%2BxRoGC6gbAbt%2BM3PJb18%2BWJXal4cl4X7GGnOGBc%2Ft9e%2BNy2GVfdDMsJfWbbZxYDNKTRMCCAKN9wRszdpYV%2FxBZAPSz19g%2F0DISeG9L&X-Amz-Signature=aad6a88138fc90580ccf5abb6ab925f89022f843584254dbb0b965e977037eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
