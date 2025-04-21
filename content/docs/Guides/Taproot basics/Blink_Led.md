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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZKXKN4B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDovuP1WXOQg7AQLbUJi358mOg0P27o%2Bk3EDjVaHSoryQIgCDRyiVeI2puxERyvOMK83dytEi2r5SnndA8y6O1gQ58qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvvnHWX2l2RBtfm8ircA6KxizNzRkU6DPneM03opaH0U4aWP7v%2Fwj%2F6UgMI%2F2lD7%2Fl35Fb7Vj8MeUSeQ9jpSKK%2FKcq91JmHxA5oVWQD8GKmnT6xqCtTNXRm7616vQqgHtaOMQkSJevgGAY6xzjPE9AuUuPhayvlWSz52MGxkolztW%2B%2BzIYfNHOLCjJb%2FblWjUpYfFbPp5KucavvSWqn4llcMsA4YkxQLykdvJkOkjSNt36yeFV%2BC6H5trQwSnnrmEupChrQaT%2Bhl7gcYO2xD0uDWRib5QPuKy2zXW75FQig2kxEorQ%2Bhk8E9YqJdn%2FC8OR6t5sJfOuSIsf%2Bv6mQTCPuS8TwgF%2BgJEThWfMlTdZPsMpE4b6bJ0CM6hsJCTzGuUW43am8JXYHet%2FzoN2bD7DOM2bPmgHCGWWbPVRyPQRcwujTabpV8tluq7GV%2BlqAM3TvHNRDbcDHKZ4q6Ppu%2BO5YhMpzr3AcDrBn%2Fo082O4mOn9vUCYT1OuEde0I2sVjeR2ixpN6qfw44V3thpsAmM%2BO5rElkVBSQx5t9UHzt83KZqC1%2BVJCXdo5ucIcK9qgW31SXfD6j241Oti1%2BviGrfwVUDZLKf8shgmOjYwBxEkEQ33hoxyslCKvnI7NiGb17siSX5Ukp1GmXKyJMP7wl8AGOqUBjeDUr0osNAmfiiPg3rjVmPuB1bQNHZ2nnVkoSYphbXjh5brgF5NexKqxk7oNdhKP%2B%2FEVzFneU%2B1zAP7B7rD6ljROjnqXrFMgi6LlQHazBoXlS77wAHbJLB4QvtKyZGk4dZyd7g1O1RYLIEWWW31nByKovk%2F%2FFVMT2GCYfwWrQ0LTMU9q1MyKKnhm%2F%2FP3MzQvnY0ybUDAxCQ7pXeV%2Blu8oWzF1vk6&X-Amz-Signature=dd2b819b9947ffcc065df943ae98ce9f0ba096d8d5122ef12e19d36ddcdcb222&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLXXCKA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBKA%2Bfq5YWU8XTvwwOKub1ZrIIOOC6FA5q0p4hly4OorAiBNDYNrbQjZnQCVFXhZ0hGdVYr4R7%2FEV9YbcvrvEKZjuCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjQolMXxlrCm7nee%2BKtwDQz8bHSONwE9fGRVliBZsK27DD9z%2BN180BcoxsznqzwhbmK2MTIF9sA16lrSHtn7sWSMwiON1JQAQQRgT9Gr8hwOHceeVqirbCS%2BD67%2FQ19SrZkO%2F4lqzc081wL5gRN2PAqoq0RNZCcO%2BxGJubafwBu%2BJwtMr60IR%2FwndCXWJLzDhrZUsMPvrOO%2BNzh5UD2qcFCwHtOfX6Hwt4J324yFUaa2tuSUhQIabqC%2BwNR2AzpOuqykOYAp5islIqVwPqUPMuVXUXCkn27E4tbyxnukc9WCIdTmuQg0uNAnrRxAHuEoqPPzClYhViHhaU9wrHIRvmyEsGZVRkGSHAfDviVqU0bA60occXU7OiQyq9SJyxsRcisB2NOQdD94oHUp26%2B3HBPLtVo%2FzqQQDocmmlh87oTMoGMssTzpacvWyW2ZrCBETV3huayobYqJhW%2FPNxK%2F2O86OZKt%2BV%2FOCb1OxnJLnfZtJ679T0C0cEZ1gmerRU6XNaWF6jZip35sbP9oEPFlnJlgzA41GTAmD6nSdGpK5QFsdbN95r%2BQuJdwe6jx3iSKMkJjTHU8a3mrQDVo27ShYPa01qiLMDV80RLjlHNRf76SOiVlUdGLi%2FUA7Xdh98p0Pp72vexZJbkSOMlIwovGXwAY6pgHWv7FlCBLggMeUcsbyUVeasbbPwwHRvnp8xG%2FI5jt37cvhFbzN58ahRcJfHvUep8%2Bd6SE5myQ58R9s2KEel2iVXhucrb5quw7Z8Zy51kiNo2rAgH6NA9kFrYJ3UQPFusQDrRI1%2BMFYgJpvJX9zad5o67CkpXQg6lRO0a9X%2FkRaL%2BWOAmB%2BFDQJ9Nm9gdOUnEv1Bu%2FRso5hGU41TyoC46vTrRSDZZjp&X-Amz-Signature=4baaa803241e46ba2f4c0c9699c6a081e726dc9aa5c651d5e0bb137c13a558ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
