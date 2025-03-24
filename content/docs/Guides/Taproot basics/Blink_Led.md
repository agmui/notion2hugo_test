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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSB5SYIO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmjViUubcNT4eU4iaAgSxH6dkqhueTzFAdgdoglSTjKAIgba1h3D4w9Sn5fNKnH14r4AqpIZW2LHW7ggz49Ul2Bo4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIpLVInk8RXVe9gHSrcAyGhB7%2FBggmQQpIOT2B73WO0ZLFYyh%2Fdu1rjLltl7ME8GRh8aKRlarJrv1amtzrQbT9eJ6kkncvV9bE4EO7DWuPO1piGO8lzoBYU02h4TeC7q33HuG5YsJR1aLXkrUuLOapyV%2BiaK%2BeqSZSNkqHgwxHf6bcFyDbYWfTCNzOFpLoiSZa%2FmsTnRpN0fsUpb%2Bct2Uh4InkuV3M6bLHD6NwXSFTCYDglMBw6cO97tiC4QesqEPTiCuFnlQFAAzKG%2BfqLdF12IiozUzkNEPOiRE7C9I%2F6bGuuIipokcyN6Sfwmb8xrUtK%2B1hlMNksXaHupYj3HUZzazsWqX7YRoedYaGv18PaFhDBBKAFT6euKCyzu3EoW08hiW7bV4tBS0KyQNjBPLPxGy5awWY%2BGUapLd8Czdbnfj3b%2BJajAtBDXMci2zFLrzXqnOD1K%2FosHdu9pnuB36LW%2BBj80L3y2bnvBvDUZ3aB9m%2B1Hc2FFuQLZl0fauYo0s%2Fu1dCl85%2F0cGkmVzO%2FfbYuWdthUgpoDUaZ9TG6SBv01OIiu0xfaGOxKL12nBMPyILAFKX4cgwYC0omJThE0%2F4W68ON7nGekn9nW38x5OLVgBcL6AU5FbPOjNjbW9s3ztJyjhQavypyDNWWMInjg78GOqUBjeV9twLBvCibOzGPI9%2F5i8xA5PWLJN%2B8y2nrzWlmoN6s1g%2FQHXDmXxhrlhY4EckhbOajzdVqjwBDpNmCgfo7MRPcxV9jzHBuoEsZesGnsgTXSG4enlr5yAdB%2Fj1SeQBK9Nme3yBuM8b2hGLFrtCuZPh8t4nlvsh4d6yiYfA6p%2Fy4MN1BpqPQ48dKadipw7Q4u%2BDYgvLx7xcd%2FAFiS%2Fr1JWVrHXMK&X-Amz-Signature=b0f02d176de74a16576d4e9c0b525617806ddf51c7631516e9e4d0b7a52ffd48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNUD6RIF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMLYnyH1PtPGw8yE0O7PMMPisIaVNXihGoTGOIshxtCAIhANiau1iQ4JIXSBNSU6nHEvSdUdCwijQUgtLblz%2BBHfTMKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5WIA1qc3tUnFqVLMq3APtW0PjQ8zI%2BJ31cCztHgNEEAMtuwMyIAD4GbzbmpD%2B3NzOaZ3B1gZhncQlUOUr3HsaetDXZyKLGPqqaFpY%2BsZs%2Fu9jOmbH56pRBiMCETz3SrIrQRod%2BTpfB7W81bCSeIO2geUFcvfG5Rf2lVXbH7gBqVkwhvW7bFGl%2Fr9drgECmJxwg6dz56UR3Hl8oPBetJFzI8OPyplacomBFgRNHv4J4I0Xp4FUVvVfp7YZAg2K8aqr4bOb8U4R8tjGkbk0P9MmcEI4Q%2BrSlw35QU3Fy904GfLRCz3bv0hYvRtLh%2FDonfFmmbvfva4kWzkZQhts55xW8dm%2FJtfNN1JdTsKwtYlccDM774c8S8JQszxYQwVfqsFY3m6ehV%2FdvdZaqwxinGUruQLdypIk4mZWej7rTWKKAxS6EarfNAFzoOz%2BNDX%2BJYPxW7Z7ynnF7HF5pILOqz4l0i9PPJsRffDE00uQG79ouv9zP8vQ8UT3otqqdlExRHgnBUHHYLToz7FRVrzOpGflI8%2F70uRcyComuu9uOQz9sHMpT6psRCfkoL%2BWeOVQ77vFQU%2BAGApEjTvt8Wkbw0GGXA3kN%2Fej4WEpj8pG3t7lndDf2dtX9ykzBKGN%2Fop1DGBfwzPpmCR8I%2B4ucDD54oO%2FBjqkAfQPdQiZopQd9sB%2BLstqI6wz46S38URDRI7XsOnPsiB8yFB5jxwFV%2BxI%2FK4XG%2BN7qK2gDQCSgN08cRNcw3KU1lCyEuKspgwGhL%2BaPuIC51O8mXlD5ejHK6dA2Dh6DM1qCMjmKx2d9c9eUsolI2ng2UpkrkLO9ejYp1wWvyfFVLO48sDB3t77b2MjvGrm9%2Fo4JUJ7%2BI%2F7FsejI4ULb7xLLo1CIYlU&X-Amz-Signature=d9599054757d17169f5087483d48c11df7ec2f24f638704f260e72df9a19a039&X-Amz-SignedHeaders=host&x-id=GetObject)

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
