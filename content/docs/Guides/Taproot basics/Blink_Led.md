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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z326VJHR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBXZ%2BOi9Xf9jKUlMAOREupvzzW82SPUtDHxrsRyxH52PAiEA%2BQQZ0ZeONUHpLtMlEX7SRhh9Ha9nWWm3xymhjcBegIcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFvyjE%2B0F2VPEWnPZircA3fv5ETGzRscZBMfO4AvqoNw9aocluQwahlORqFk6k%2FqO135lVDX2pHrhVD8QpPoGE8pMS4WAmKL7jkpGDSF7s8tmxRN4FnP%2FDahB2vJwuMnDQz%2F3K2JHN8lJj7A6el9enwS2mM1O%2FhYQ9uniSI7Mjic3%2B7qQ87udvb4p2uiMqn4r3l2wd7nryHEi4UKfXTXTSo4x%2B728fGP3T8NBxlG9ZR8c7ADzRddoluYOF66Oimx6uSxt1lndWiWh6DTiHzKCCGzkcJP%2F3Ic8yiJ9Nun7aaLFrlpUhwav%2FOm%2F9TaPBGPmAlYaCeq9BTVhIJmiOZE5RgvN752VtBkmB4FrVfY2F1eUGah%2FpMoUbHJIQ3LzvtYpEakV81hvdIKUcSLljftaTCki%2BVbwGw0%2Bv0k7CKjNNQXYY3MzEMoN4fmr7%2F4j6CQ%2FFHVGdzb%2B9mEba11pGRgrAs2D8FaHuwQa1julSAz0ox2W9%2B9pEmM9%2BobxX0SH7jR%2BcqdvBE4sXZrVESZ%2B3Wju0xp8T0K5sruHfmNa5AnPryT5C3N4Q%2B4MU5IQt5RSysMW5Goi7GkrbHHhk7lOhdudMz%2FsxjHzQnTo2LgbmstD9XCeLK%2Bdou7NKdCXAW5ar8fZ6wWH%2FfJtG7vwRLaMKfz5MIGOqUBp5oZnR4K3xXzve13%2BuBzfw7qK5o4wKcGwLlqXd3bND0KLhsW7YvX%2Fu%2Fa%2BFu%2BaTXPEf3VAaYf7QtGYuxupI7YB2eCfptwTtU9vrASW1ipL3wzuIgs9KqcOR5RCOJhYZ8zoeibeF5S%2BQ6h4FKP9mBJo09z4WcC8P3eZgNL%2FfE9vZYZwqLrkaNBlnpCi2wiLfD4yKdSPxNnUORZ1mf827EDIWPo0arZ&X-Amz-Signature=482cabe0f6e09ca655f867bb6454116f0e2f566a97a9ceb4f6f12fb5fe01d01d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XREBWNRR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD1PYMvgRmD%2FmWk%2F%2FR%2FwTHP3wQeLmr%2FhLC7dlw54XTX6AIgd7ylMaV8jkQpIeMSMD7jeJ%2FYSONcIk8F%2FxecTA7tbPMq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDP%2BUp5Fl23cdGFx1FircA1jRrzpKZOpm6zXneLMF%2F229xaxcIaDFvP8RW7Ua1VG9QHhT%2F6rEtqakHAmaBR2hUqPys2DWzUGL5i1PnrqjlSJOCO3lLAw%2F4AqZ9FEJdBYIp8I%2F0oQZMkrlvkMoLonXlF%2BNgHQix3Dw5hK4uqiXw12DPhJN%2BMx3yk4aGkdejj%2FnLuSXO1%2BXCWfr3GrPNXED0oI0CkPsIuCUFByADvqTqTYDr6gHKPATTCzkxSdiiOu6msqqs1okRscmbR7BApdod%2B3H8GXGP4KNNBB9s1otXMwdmZ2Ck2FUt5O6g3bUwSnirvFVJIyVW9LXV5i%2Bwuu7gSijp5atjisZfrYqHQ9HwViSOD01CUeeYD8BGr78EKgAzbw7bRDnPBNSuk3OxqXTj1re1%2F79FgQF4B4lkaVDX5Fm9EbwWwVFqDZzqTER01oC3STN0wTkyxgx6uf9HWKd4cFNumofDjSqD82RjfojD6rNczhvXyAZxU%2FRy%2FdmVkpHR7lU8VXaRBMoITGV4odRjzkjR2lQU1vTBHvdJ7xpKdCjJ5R7coRY4DJLXQap95k5R7Qzc0l0sO3THxMQLQC603DVh%2BnZ69r5digQjXBWqG0X%2B856DSEJ0zVlirr4Tx7V9D4kN27SG8xAeXzUMLb05MIGOqUBZQdDpThEF%2BpGL%2BljgAaKR7paY%2BBpV9MXJhwYRhbNP259KF3wxPis6KnVuY6uxynv3Drur7MA3HqIH8AgSUgVWScGwXcOaVBNFb%2F0moctGXzqLgkJUlBHBvVb%2B2LVfVQoZDmA0gSuwYO7qflKAyTVgz6aSUHXaW0VC9EVDIX909sDiwsaqDrRFL0DI7M5HiLgw2%2FWvhkWg02%2FjpNx5NT4JfnsKgMP&X-Amz-Signature=22ec78d3e81c1b29b8fbd7ef4be705e7b7bc03db12f6f7ca62bddb0d7c49a3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
