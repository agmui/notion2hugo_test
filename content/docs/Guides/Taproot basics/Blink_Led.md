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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BSDSOI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFMfGjuc%2Fg%2FOMGzZAbFFUQi8LVL2SM57AGveha6fYOYlAiEA0KDZV4ctnhGz%2Fd8Ybm%2BBhjEdimjghXcOAlV%2FhMcLmTkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFvFXWbPVBFZni4xUircAxjWjLhm7mtHdgcJHtl%2FsYbWqsgP4GvVGar61EJ0BvQ0d4p%2FuBgCi4mqB9YCpMgfnX9Esy9gphFkp4FeXgGDdOF9dNnGt%2F1cEW9%2FLtpMc8hllvzn%2FAOP3JZFj0xvBY%2BwYxeze73WYU2y5uJdB0yMSWrDwz%2F3mg4drCrgAq%2FyAz1ocjJEFbgwBGY4jmRlWV50Jic3Vi0yNzelc%2BrgzsPL22Xe6lLr84oy4ovhOAAlquKyww6069GD6Za69QKdMTtZVsw1jKzEGWIbXzQaRfd1qPueIy3ziuaYvQucYWIHT0O6UNeC%2BvbL3uW3X8OO7A3cDs%2BtDV0ZFA1DQRce8bA%2FDrOJ0oxUleKNjp6dLfYaUHQ7AQGEiMwYiuNgt%2BaqvrRHnsy9IsTZQQ8uD20v3MVPbCz%2Ba9ia8yYJMO02dQaQgCAa7F2BUys1S6P9hvFM3Y0VPN5Nj2GQFTOGnAKjCHe4o9SHLD0bqfwJCf%2Fw6tJxVKRsQE0FWn%2FybWkjnq8lPjKVvkLTGxvdwbm3dTAppfECW7yDk9ogRUTUj0%2FLh2NiWJq%2FUk9a2ICfdEjS%2FC%2BqxqM2UMlb5kjiqeGVNjBK4YluJqFiMj1A7643eEV1KLwbfOPMbLEu1XWsz5mKJL0zMMKX970GOqUBTM3Jb0lHfl7IwLDKGeHEaaTu%2FL86K9K%2F70KnaWN%2FP1VNjUL5UTV97UZd9ZLYrfkXzzh%2F%2Fz8MySZGikHKpqfGUs8iWd8hrjG7m0K7GqwOwtZonF9Fc9asM7qydM5I%2FS5MHh7GqLXfUltlU5BdG%2BHZ%2FLNgyRJb6EaB4rinkbd6v1DvAQOXX1f02gtcppV7auD%2B49PqJRgN8D4sfgAFPaKh2d6TqBH3&X-Amz-Signature=aa075f44175c3b98fe6e9043525dccba46152b1197919fc8d544517cf0612942&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4MV2FN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDvx6w0qEwYyoz%2Fb8PcUwOjzccL4vwtM7deM8aQd0GFpwIgMQbAtxCLcbrnslX%2FsjvlwkaCDjg9mm39gmPG%2Fqmy148q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCkcG1de4IfbJoZ%2BJSrcAzwsaScZWCB1zVxepJH8V81Sv17u5I8TLcsgA%2BmdPEoa1p%2FpqPtgz%2FOWx1EVUEEGFGPHtlG2wwKZdl57pxrVCB1tW1oWCEzh%2BQhQUde4H2VFutxgHhswfijlOvbNJb%2B4yDwow7xExkX22cLMwqwImPnrnM6QURDpNCaiZgreVRaYySrNRky1cE1IvhONMWrVsb9DI8cv7WHCFP5LNQMms1vk5y%2FtgRp5iwzIvR6wvdZqbRFRG9%2Fd7uc%2B0ZYJuKYkCtV0mBFRnwax6a9PniT3f6ffruHOeyTjOfy7SrUZasVjEvMXtP1J4JAGiTyo87RYKqaysHH7h7bmxcf3VoQbA%2B5eojn6k1foM5aLH4vyTiPKIftc8tVy5UxB0wPlRdJw900FchI7aZuKyD7cExSYDPMiTZrDWV8C4D0H%2FbJ3B2UN%2B389NODsBUngGPZ%2BUTYAI6MYWmoJ9V3WGztBNcPKKPIRidBmHufInKwSPVMcA%2BYll3jZ0yTty32ZXQjUgolde9j%2BB5HTGUl0eVFRaTNPXwjirWTNXB%2FOZ4NuSDbGKRNcl2VeYDwCGJHMkYSOnTsCEhtR6NEkGqzBz%2FdZTfQ5NtQmOj4x3LSd%2ByKBGW2HyPkvy853l0qERJ6g61HhMPeV970GOqUB0LB4uhcn9loec6VGY6CC3HuE1cfU3hkj%2Bu0WTdbqFpHatMe2VlQPtigwG9sov0VnzENEj8kBBBJfdObmJQ9AKDU3aLSq7CiHLAKfNP6WUFSLWfJDfG4J5tA5gTj3o3ovBBcchfg8ZOViJK%2B%2FldcdY498TlbywZaoq5rDB1pypcM8nvfe%2FTjGFL5oXgeKPlnNymtKyrBfGhFl2dpjCMobD1ntjzjH&X-Amz-Signature=efbbe32c5f6c0a7fbc4e7aab102e3c1e25b638452461fab9c0086168d9156846&X-Amz-SignedHeaders=host&x-id=GetObject)

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
