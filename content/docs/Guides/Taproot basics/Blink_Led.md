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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664OB364C%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDaDBGHligieoidETQfLEMcIT0f7SxMok9OEP9ADk1%2FAIhALWAPpf6ZOp6s3dy8rZ%2Btp3Oi9UprAt7LHz0Iy2wd8nRKv8DCBEQABoMNjM3NDIzMTgzODA1IgwKTUcada%2FwYAKI0VAq3AN%2FXF86hZE80HcYoXtlRP2zoP3AxJwP94lcOsP82MepecmuT73D%2BzRxwlhwGB6WcQbKukSbsRtRWf5XnYTZNz2%2BAwCh63e1FEsJKp75wIyhflwtYo%2BWp4SBY5ld5uLwfH5nU1aIUNMuU%2FJKVAErpwuDmGBbcIFaDQEvr5Sg1nZ83KtCAS2%2FWh5gwJs3PyJnXg4As77cjVTBxIwLK4k9QLWVRweOwksm9wgAIKE8V5KPoqG1CK8M7Q64luGqCFpomUUANrP2ivOQK2TMlH857oPY%2BycI400aF%2BpMPTLKuZZGF1pKi6GY3N8c4YR5iitcuh3el71EK12ZBVg3vCOd8ToXqoWns1dQ7ZwHs5TlMAcMsipdKxWUsVR0k%2FqgfPm6Zp0Arm1U%2BUDJluvjMVeJ%2Fm7rOt8OvI8%2FqJXd%2FOJ0MolE6fq%2Bt7I8kDudkW2GojpAlXaXYTru%2Fvm7y0UfBwHKneL0d2ZxEbcZCrZyFNxgH7ntPd3zEUE5WdNWRwowGckuW05uYP9hco0bK4m1pO4AABhO3ZtHfOW%2BKGE83rdg2WILQ33bDyJt5mMsazJAWtQPpIA4l75rP1yF%2BKHbYOBS%2B4d0iY06zArS5Ojbk7%2BBYGhSYNyjK8Zfa9xIKMcoITCXjaC%2BBjqkARwzuz02XRd0gJ8Xqlqg2S0LfbmwDEOjV7uAH55UVZmbAxjMgCP7KOzcIkW8Tq3W%2BrYZII91ef3JPxK8g1YpGe90dhpdFiNVYwdh%2B3eGUvlUUl3%2BLndvIMhQ84hIj7NMqFkLY%2BQYp2Z0F%2FuuPEVEaNIqZxbY3PySSFEybW1Vc1tl3qwCHCXDQMi06%2FVfFCmHEi6kk5In44NtpWHPORNDUWXj4t7r&X-Amz-Signature=8862422c253c5d0ce5ebe3e82c52f9eebb8ad2fd67888e13417ac52571a1fc4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGLUTYEE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiU%2B%2B5IuKgybun%2FzwUMGmBRJS3x%2BymEVpCDea9yifyqgIgIPByJwmH7TeDaPlJuUBguxljy7btbN7Pcfgttn8%2FSWoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBJBnbHTko6e%2B7GAPircA8isMzG%2Bw%2FhW%2ByqmJNp47FdLsTczI47bSdi0hlyw%2FCRbWElGYY6dYwMIHtKfMBIobwSzW03hreqsdrrTylF%2BwY%2F4XfoEofJN%2FwzV9i4IPnenAl4qVNazrzMU8Bb8V8OaZrKttLkvL2e3TLj4DgquoCG2IUKL2H6wd5NbVtpfZ3PvxgwDeQ0OXl9mSmq4O2yYCKwo4kxdDlJuFl3LCDzQErOdt%2FSQOelkzwrZsdbPoAnj6R7ee%2F42uoPbWItGMjJHDIIHopH4vvMuxRpeJ9%2F9y5FtIv5I9FCVv%2B93ECtNnrZ2BU1rMxi1OMCFOiFM8cuq5zElEf6PDr5aQarXYo9xm57bxZnGIY%2FG7s5I%2BieH9BqR0ntufNqK%2FKqHWtWO%2BnxE9bxx8jNqgBoGC%2FMNPMhvk9RB09qfUh%2Btz66kEpEO%2FfBTiCXioUqTGS653qpH0tt8gCk31kmCac6upSL7B3fWUPxhxHkmEZNoeHnlnuh7zjfX4pwkfvFNOZCB4TzzTsk%2BQ%2FRUBAHBUWIVaOUozcnTbZFwEjYm75%2Fj2o1jdJhEqOpfUwEVTwzvL3anvAECZ%2FxYsOAfzD30y%2Fedz3imJl1M1EGZVfijL1nFiUCaDzRLEtheTaSpTRcrfbLmM3I1MPCLoL4GOqUBd3QJSpc2A5NNov77lzzp%2BVuFd0%2BHdjzuM6MJentTMoZVlU8f5t4SXNTOrR3jJZckvZIoCylHf198VsRbwhxOdEinu20fVhAPo%2B5GzUNaJ37mK1ZyC7luJy2eh3%2FA5HLJYzioxeMBiiixNQqNHbD%2BH96ELsupKIh6AEumM%2BsGPMYuDsQNHRdDuMt6X7H6Hwhnrs3EbhZF%2BKxVRC7l4yrB6nqzR92p&X-Amz-Signature=125a112e9897605d5434e86ae6d265dec8fa209f98cc90cc66f72af2e0fa65a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
