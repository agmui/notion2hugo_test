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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z75SY5TQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCehg6sv5a%2FQCTqPayUQ6PPA3%2FWz64xxophI4kW8rRyHwIgTi9W8XTlsjTg5kRtuq5eZsgIHC08fWZWPE9%2BI1v8%2F5sqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHouFvn28p6qLsk%2FvSrcA%2Bqn9NC5ujrjNbLLrfzrrP45lw971ZGm7v%2BIToi%2F%2FsvPKAVxckEmRoP6QPP98AXOsyKjF%2Bs7lqlIdvvbWwooHigF0tx9f6WJpFJ08mZpLuKA%2B5CwWlZuMmk%2BfKaPImxE4E9nMX9vrhKJ%2B%2BsKiQ2CaPwmk8tdr2QcuqTtfqQ6UhcWyQLT8VrfRub0zuRPd2wXxwcp97uSg8eVqmZ9idZmSOusbguJPuK14UtQ1e4P9J54ry1B%2FeQxGCDs5r8TCIsTQvEwbVMw5Cp41b56QvW4N1UdAB7z1nLrD6waUKb8XWlG%2BbIKL2FQDGEF%2Btb8pr1Ugor836aLOy1RQh83ErnpkdLm9d7Bwdvhl8gsmsvzFvz%2BBppFt96WmdhI7AGcwhxUsVL2fwHcpn41U%2FxAHU90ei8Pd%2FQw3W12fkw1LnD6m%2B4eFkzcylM085OA%2B4KNBrqzW9Fk4gAkhvAlRtZpqxiRTNBI4VMjjfZafL7zThwYfEBXAoA9YLvY1eBex5QGulXBXivLFog00QbnlUo%2BFnvMTsHKDSDZzV6VEijOTQTkpVxNZrxA%2FVfj3YiL0TczYIUw3JEAnShqnvH4%2FpJjkcLXK7yPcpbY481M%2Fo7NErn3stLy2CLYlZGKnFtDbkA4MNacpb0GOqUBHLtc75Yf7VWvzK2tmbCIhJtSQgqDmSC6WaJQ5qEi%2BJih0rvgnpW3vcAMTNZBz4%2BP%2BRv9cpT%2BPszdqFX1jdY8szzNKPFygsVKFAQWEVO4OqYku3KtnTs3PqlHD0lo%2BLyoNX%2Bk7%2FUENL8vwIM619MeLVSXsw1A0G%2FViMju442uRBrYJHfEW5pHdGQyKMM6cqh1CnBRB8IKo4tfLEpk1h4kN%2BX9Dc4k&X-Amz-Signature=028b6e864e7f19d0070f3ca3dd5302de5c215d1837209c8f09ffe6b2c034c282&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675II2BJ6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNOVimMFr%2F56ZbKH9S3zkRB%2B4akuY5rY%2BrkWvqi6rJLAiAQjaxUhU1sRQOfyLFkoACLtcv7LWfBkDO8QPdre%2FcLsyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrAb%2BTpDd69X%2B8Cw1KtwDYcFIY4tmVYPkbYi43MXvWtuWh0wLrqRW10y5PLnR2HeIidIt6%2FlvnDuJYcJSUU7jiVj%2FGhnDJNv9dPtdpo44fW9ORcH%2FG2GR5u0TIzq3xK%2BT%2BgQI8ipoZTOib0pLHFMF9l1Uoyj%2FSEGAlYqvlp4cNZuUE3dOEEwon5JsXkQ7k1SbJALg7A5LkYeMUaYDeFBLxaBmR7Svs7jnSYepIl%2BN7ESHdYHzbnaW1An3s%2BnL7f1d7oP1itmtiKEoemHR9QOeuAVmIi1aUice2MFZBNxIS1Y5%2F6w1XOjhJVYK0iP5MCzxrSCu%2BjhcYjOAqtfON5wmMY9aZ2X77mfe1YnEetlU5yvDnuwSO%2B8DTTVztJ9zqtVYBqbjyFbEo6IzSBzHW%2BZh7lDDq7lzB1VELE9HKtdrvmoMhOOoKJ3Oe5Z3JfwBs0SCqEfi2uDolAYtWzYh1NRIMIyHkRlasLjB0TPrwLOIgVx7tpRx53nD3geoKtrfX2761bavOZjoYJ7uIZnAHKt9AqcGPnFVIlB4VLd%2F750f5AclGxWRGoRKxNZC%2FLOtG8tKR9RrjLOi%2F9k5D2fgLKIYbEPUI%2FXX9oqsU2oSwuWz%2BkgE0IUc%2FNmKwTQ0ahVYTBlGcCoZ7XOEo%2BpifUMww5ulvQY6pgHzPPf%2B53GWypq%2BilBpi%2FDGrIH02nmXoOf5HIGZenrt0WlJIX%2BgWbbMC4%2Fsf8iukZOEgU3k2ZR%2BMmzCdC%2FK5DMntbHhSs9AOvrwgieS45Dqt4Z4gi9Qtl9HzadQsDRDyth6v9ho2cUsmkBfUnp5Bi3i1mmt6tZ2qLpOYnoCi19d8XvsLCDgbYzgk1keTaEWY66KlgaP%2FnAXTVrR5YnGkc3igchOZkVR&X-Amz-Signature=ab87f77c493b93bce6483bcc78c486aa3dc3a15cc9cb286f0ea2601d8567896a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
