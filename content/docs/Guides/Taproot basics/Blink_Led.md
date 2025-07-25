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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NDACIL2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCJOmk%2FRkKWWkityF5q%2BRU9H7WgpA2yaORSZhCOjRPzXgIgGg1e05bV5WgbbeSuP9sZqn5eA4HjuwS4WnXIFH6bqzEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIXhF7UQShRPmfa40ircA7TNEuPkwGdT%2FvFeo%2BVC0FYBDkZBoPiDRiYmzAsG7%2Bvq5aFj0Byp8WWo8u7XdTRWjotHiODQsim4%2BMF3PYkbZ0zevl7Vg4HN4tACtI7ikfsHrzd5KY%2Fx0SoSk7npgPeE3FYnlePvMk%2BvDGAOFMKyTaL7ui1xTsLwnl4OjTA15bbVev0Wwqqvltfvx5tmgAvvgo7T9j3dGqxsnpo9eSmsca8isCbw0VZo0mH4Yv4KR0v7%2BUq%2FWd2XZcIDlKT1MI8LbS3SAgbsmPXpIOfyAEQuSnF4OePo1eRhJIof%2FfO4Zw%2BvmnDhlPY%2BBGYtffHhzOBkKrOJP3FVp6vmeAfdYP79SEoy3u9yphY4h5tgBUx4tztEX9GGybztTXFNXOAyCNiwMn9cmSXKlFPcM7QW6sZlKNL9YT0XpS2%2BNpEc1Tkw7uHZ8THiM%2BxV8f8pQ0w74Y7pzEB04eBEqtpLaX8e2L8BUemRvEHp9FRlnZ2hCGw1t4I4vaUeFITVudB%2Bli2wbRSkG6f6SZ7YoE8n7XNIJSvoBIB%2BLrixrFXBydNH%2BFE3DNqh4mWCoZxkoXm%2B9C8pQuj8Nd5Pq3bNw96i25BPjBSap15Axj5Ln0nPAeVApd5NuML8IcT6W62IJrRXzeqPMNXTi8QGOqUBLx6XqXD39PWUk3Rx%2F9l58n9rUpPM8rxO222zykafJTEwvwupGtKUeNxwM3ELmojyICyCu418zp2v6wB2jHEhv3ef8%2BmLPnl9fkmjoYoF%2FUlJHf2GCz7zbNKkLibLFeNg%2F0rrKmcZb%2Bcqc97ULdj28ZSeUGNSqQ%2Fhwr2257uCXoLJdyE5e3aiabaF3fzbZvc7YeT5t8HfXaeubS%2Bwm3aFCwkCZoFa&X-Amz-Signature=61f9558ee53d731e6b90b2623de408460cb316fef0059b1d290222a0f3a154ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PVXGG7V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGXzSoHwgxYVf9cj10DnNy1lzXCONyZuo3xn43FM2wscAiEA8gMNoFSILVDID9tdFhUQW%2FpI45zMNLNA5MWRNUBRQtYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKObnxK5rXB%2Fy6ErRSrcA5dZaqxe%2B8jrvsF%2FqFoqxxyUt3WZ%2FbNsxjSAqkmkW7ZwuY5JlCZdFxM3Fh%2Bt8ZPJ93t7jdUoraP%2FXi6MEHbCzGZF%2Fe5L6tIerKistuWOfe5Xn6RlYhXSgB1mXgDE6to8WUgXzgi0OxC3gdNCDftlwzM5OuC3FrTZFmpEUrpnO2x18UrAcWxOEDJZ7XpWSe6ae4h9D9BsAlGZ6lgg0Y04mEPoUeh%2BJOMtZ2qhkZLvsFd%2F1AypnJK1D%2B4UnUkRMvR3mVfoiAUoE2XI14r1nEc1MIH8pGr9cEY%2BodQpR5YpVCZ90UhbJNhncQG4RC3fdi0HoNBoRdMiIiHUhE7iXjM9w7GsROlqbDAGY2SADYndgQmjUz4GF23yDdctWwuadErNihwSgpaQ6Y9V%2B5lE5nUlb%2FryD8o0vLtHGvbgKgtPE7umFy2U0Vp0HYSadfVm6lpCjfShWIP%2BSYbXvu54opzovgIEzESM45ilhJpuEMnInEGGu9y7pDqPZn68Le7lUQdBlQtPgOnGLKpcPHwLQ8P%2FpcAzOz2FMiT2BrAvwjuyOMwKkwouhio16hV7jp6z2q6q6Io8J2X9JOkNH06RYU6UNqBcCyOOxvcrb4Kk7AfnVyhbWIfPOHS%2FOrH8QlF1MLzTi8QGOqUB0ZrJXH0ENU6NaL1PNihdW%2FyfA4%2Bg63Wap9u4eFLoijpTVADn2%2BRxq9RTLr3ixq9EoSc%2BsNgUeoeo0PIJe9FWsoPruy8HX1nDe6JXKsFaRXcbJiRS2wVvdTWL%2BxkWjElbYLqqQoi%2BleGvtEdxbSQX9QBfyieg0%2BBYxgBKp5Yj0Awf%2B6%2FGoi90pqRxw6meJNALCZ3kiCUWBQEi2G6Zo7FHNOz1zT28&X-Amz-Signature=52b2e1837d07696858dd2907016682b27f2b3ac9d6e15f4c557effa0734bd359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
