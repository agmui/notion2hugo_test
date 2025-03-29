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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632STMUFB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCID8T5a6qV8jsiEoIh4GR1StpD2s6Fu4LgDl9BdzJveGXAiAb7y%2FIqNHl8%2BHyjN%2FMsieaWElCFSlKBeho9ltsJzqkEir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMcOblD%2F0xZrMYcdI6KtwDO61oUlPIBLsa%2Bp5nQZlzO4F%2FhEfgV%2F76NRZVvsf4FHz%2BrWx5BrprP2MVPvJzgRnMFZYWzm61wTqVGop4yYkgfzBtfE2J9qyaoD%2F2l84BsdomXjeNkD7qVWoup6fmCrh9cFuqHbAf9g%2BHrPbqyLz74K9nLkyCBlSNXCr81%2FlK6HuJFYgpMl1sWYPz%2BkTTE11%2Bdli0UcCK2vYIctR4oualkxShrqcCxiaJMlgdkyUklcGdEqkXkmjTBSo3Z7gzI9VBFoFOhcxotgaJdud9rJT3fPMvOgvBltFWzTwzN8gQZBXKzY0%2FiLNFY1NXDc6Jn8Mh%2Fi%2FFeQvqqO3L2QJ9DZizcnww1i9d3LOQwYY%2B0zphxwtSe2HyDHjPHVWN9okg3R5OapjBHEVN6zoS9wFK6BeFqlGrZ05%2FOcOdStaX24wMjVWly%2FXbIPxgqoidQWQGdcvgxzVL%2FDwExV5AO8QPey%2FFOM%2BmuRjVsjv4orPuGTOwCgk%2FBViUBIxpNFpHRjUtAHsscGoNoD8HwUgVM%2FdPyRk7BxU%2BknBQx%2BvO43iCE3ZljZui8mfV21lMpLD0CyAbLKJZzvvWXyFJbWI7Faoe6MGGT1NGq57G2apdDXseEXiEe7TaLJTpVshJm2KWYEQw9sWevwY6pgEiwCvwidNHbfBKhv1Jl20VOSNNCgT8777tDkaEH626hO9E%2Ff9JRIn7g6F2HAnwLtRh%2BmFjOziO7dUb8zsnbAyzuGf%2FHNEtOAagnItJJq%2F2TTok7fG0QsW6I3drJhf7NQ4%2FugKqGT%2Fu5tpi1iKVBQHGnLmSzScy3QRT%2FJdOdeapkjQY1d%2BD6TJwLRCJVii%2B04WLeiSJgwZRpE6tWazjAlw7XuWuinD%2F&X-Amz-Signature=4b71d1c55f1ab5d967949bc4e799f791b93e36f3f0b689b211d8d142a758e3d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T652D25H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBvp7Avfrx6FsDPrOUbK9JEtJPRFk%2BnDhBRQ5FVVluEaAiBntc6%2F8P4S1TMXH90kT4t%2FiS0bvQrX2jUAPnI3ZeYejCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMk30ZrOLFsfmofZrUKtwDjwAUaM1GxyoOnrjj4890YksHXen%2F70rUcgjSSeti9LPXpoMCeit%2BNHrKbuZUJQ4zy3d3PkdisTom7vl0vmbRGTXqQ5QyCGvRzccC7n6vIPdd986Bcvfpa8Ci8u2WzGgqlL1W%2Bn4ql7HjLzcUrWo8K9qQTeLGGKAElUM9e3PGn1zmbH0D0yMsy2R6aDEEIUp5b%2F4TKObmX8AV1iKCSSWl8c62tbcletoRb0og3C5tG5gtthQ%2Bv0b4%2F%2BwHv41JyNRGWrOOeoXPL6ILmbO4Nu4DtiV5dlp9j5WIstGaWKEDYQjbZzyrZljjCc1qhnZevWzy25iquHEr78vmO%2FCNaIPeGB9DCmvGs5GNhxVY%2FsgLeqBt3h%2BjW3JzOBsiG88l6%2B1jS3qnEfF1r%2FOiuXC0MLWhpTfFyo3YueHRqxQi6b92EMw%2FsVzgn05pw8SoR0fKoEDqL6QeHJCRJ4GYGkL8CXWE3nYDAaYHtZCnLuKpKs73hu%2FFqTgXTinpujXuWjN0lb59NkKsGCmWGKblXLs66HjUSCflNAhxb8XszeXTkfD2grVIrUmqRI4%2FWXgta5oapfQo0s8dTotDuc3V7V64lqkO1lT9gWPVWVTHVaco9MtG75adHUZE%2FtThAE1pMlcwmcWevwY6pgGVOwyWbw4awTwKROjNRw4mRnKfaZIQRRNNtt4SKpL%2BepPpp%2BBs9xFmW4yox7MzwJ4KdeLhpvPGKpLUSjPLzQ8aE5dQ0eV8AZAeiIxngs36siNPySq%2BixdGM%2BnAAsuTm6fEbs%2BjMbJihjY8cGYh%2F7AAfRYnuBl9cf9x77J9lngXQjE82Ewm%2FqWlg5W%2BtB3OL1PKN3cn2iXVQ6%2FLn4OYSCVIrSX7l2DR&X-Amz-Signature=3a26ef2773ec2e0388c38c5048387369d41e07100838d627bc1b065359d612f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
