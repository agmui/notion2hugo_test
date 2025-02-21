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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G2F7ZAC%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuHgq30lx5ijltEgGmQBhgDI42Mev05HwWdchMY%2FnLWAIhAO%2Br1fLZ8ZfNEkASwf2cj%2FpSkigrtTZnLZDScLuzz6BSKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZlPGOcuR%2Fv4yOL1Uq3AMalqxS2V2aTokVCQqAt2UydCkzCad%2BV%2FfP9y8FhAI2VxV3aTTBx5EzbAsL2eSiq92HtQ%2BdbCtx2T2jF71XPWzIKGWELywM4lK7BGbS2lVqgaTkhnseVeNicBNTGl0ZdHRGOsO0cQL2P60D8Nu1NTjGzuqemiOfOlfvt6ZZbBpwnHvI7iuC4vgXWBOTmBPn1iRVuXeTf2CwDA5JhS5ImRvd9pN6dym0JIO%2FeYkFnW%2BaG6MvJrtpjdN032EE3sylwXTvlm5QGpN6cPhbVD75iytvEzAG%2FGI4huHO3Rbp5lin%2BdLpYbNpNbv0xeHNs%2FXrTKywjRCnLxjXi0j2bE4zDqw3%2FPK5ZTGUHIBnu9BXD0ZQIa1VTSNG0bs%2Bb94TcXDXt7HEaXOzSIXzyFe9iKYQM8PXlN8UhhAkEK1NWN829iTeWWTlmgi51ThkQ0uKwY6oJ8agailwPlDVKJlmUIleW2WnZfdq2v8pnkKD0VrXfMOUaimBFQC4z%2BT3pkoTPDeLLMn%2BQB9jtHZgpIqi3V%2FL1IAL7oFjSOWoq1p6hK3zf7vr8ODYu7SF1u%2FXCt4KNt0ZO4HDl1NQ6%2F2ur%2FGw9shYX6NrP5S3sP1yQxjHbyqGP6g1QSouWgnHoQ6VgBpa7zCp2eO9BjqkARa6%2B3AY7Gx4h9Gj0BH9SMb6O1dcSp5%2BH0dDT8Nd83LxPl1WFYnFD6lPjUNhWEr2uvaOlvgICMMA22GQfaWjFvQjoXtvnODl%2BLNtNWbHm7i5hA6%2FMETj1y2kHVsAGzScqf1qS2tHQAGN3I%2BoMmlgTalis3h8xXGYOTrvGjMeC7rdrI2y27eyNs76Su8XXthnMU%2Fsc1r7A0k8KwiAbKgu8a9OXeSf&X-Amz-Signature=1a93ac79bfbafe9f480ae91e0da180d39c4ce5be98f408eb03ef63e2c5d5dc25&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NTZJLN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw%2BaZ%2FICXShwwE8tlCGvjVUY5Y6iz40o%2BTHDmHji3lHAIhAJT7j6%2F51B5sn67SR3JLshnF9lMq4OL7qvmjO8xRFtGyKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAPj0PoWP6zqP8T3gq3APTYR81P9jKa%2F6eUAtVId1JdIINSztAXb8eKS27btcKVmYU%2BUSPQyaud0mbJxdMPy7kvuVIVHfE66DAGHv4tcR3CnTAAfKZNnfGLg%2BZYR2DdjTLdKrFw9%2Fhl2E7y7osOUAtgmrKk4%2BBwlM%2BE3JrX7XPF8ZbFZUXBhBeDR1CJRgZE1ujhdelpu10T9Ev%2F9%2FGjCsv%2FhAeUfUbZnPBBSMDCaaANW1pvftqSZ7lJ0MbG0QytRDFFyXlV9Qi1ZugtfjLAw910VDFDYZR8%2Bjr%2BA8iSi%2BOsYIBSeLw2DIY8hRxUNO8qt7tSDe6JBX4UkTJYqQ2tN0cHm3ZVS8XEBeDjd%2BKeqs2R1qlHK%2BMRwVbw3J%2BgP9hwSW0BvYxtH05xg6Rsm7qg59mzYcogcgGsWnn2u2QNV9FVhKJTyBrL4oi1Jpb9ktvh1IOqi%2FMNK%2FgwoRF5h6wez7V9eqNWlar361POq%2FHGaagJFG6saCiwQdGWZtETT0sp%2FnXLXd0Kg1xnHQLUZ6%2F9qWyPMHgbN2O918sTqLuPSZ2tcc%2FY%2BaxJy0c77kMgW1WmusD82Fj0bBgTPHRL1WEm62vzcqaqJsszZELG5aM6mx0v8a2ufPiSVcyiM6cwRFAElbXYQnfByREKffIFTD02OO9BjqkAXy35rIhXL7OWjf83aI%2BYZVSHt1atger5SwTV%2Fba969FXN8gHO1LJMYlAm46sdAKuZ9fcLGMRwBgJDSvNUHgd%2FuwpboFwudy3jMcBXzUhh%2BJDMm67ucTyB9BSRYnfydeCGk8fumDvv%2FkapjYdpk%2BzYPAqVt1yHkP84q68BGcq7pfAs6hDV60eFX%2FLEEVBwUW4gtLKRs4EOVI2tgOg3W9SY0YuScv&X-Amz-Signature=16537ab62b257a5bd9785488841bc6f2fd390c784d79dfeda4100d03dff33e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
