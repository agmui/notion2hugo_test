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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TNG3XU4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB3kNqrGypnJsGpWL6qpH3BPQqlEGp4IyAaL2dqy1XaZAiB89fHfGPriVl59w8eWEsUcgzcHiIN2imxLFRRYXBSqJSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7ZZGpaQF50GVOoynKtwDLjIWr%2FzguhDbkvmS0HFkWnrNRWQ8uJhmMrEizH7He46GBZ815grLZl4HK4VP9s93DqaJtDgPzyzJUf3rLpuXabajaetttxSWy4GMBVXhXjEg%2BkpzQSMWSTVKRNLdkkQI8KHWaxqBSBqNWXqUBcWMr7RZT6bEdVUdgQCro%2FUkow0Y9%2F2mWxujJklnvx7LzFyOF713ZM2k4kY7PaHqgTDUXjBei456idrzNPHIBWWxn5wzDZtL3Nd1PGdF%2FcisV07hjUzO2CIT8LxNj1lDUQOU7w0bzmcfsSWOFgaTP2cqZCcMfq4BECB6zX6ByJQqUSn4oMFl953VMTM%2FijruK%2B2PpJbiwE9ftn1VRRaFjwWHXV3ufYXj0k%2F90haWBJT0HzdFwzjXNp9hJp3sNfKylzK4H5I52WUPJBw5Hq%2BmqzATN4xOOhGNXBohXQuhSmL%2FLO8queYPgwhNZM0leSZDz4Q4XOhEgwEj4kXParxog4fS%2BIBVSAHq4twvs2uJPpVg0rjB6lftLTZIT9gyltHhqoDTaVWM%2BvU%2FpMIZCgvFXAjWi0ARlcDxCkfldiC6VmBZYfjLvCXLYutAmR0VY73CYSlvgA9rzJaNuqIK0%2F3uMc%2BUKJvOlov%2FloKQo2L3k88wrPuYwQY6pgFh%2FzzXroHWDKfkni72dnMFjsO1dtvJEPrjgXYT78pkfaQFgZd7NxTyxfMB2wLsQt6RKqh6VjWCm9zQ2vZATjqP6us64Vmqjvx0ggdR4oFW0kyo0jLBE05aEky7HNtVIhpjET%2BBP0kHrk0FPMtYyoVVMW%2BG6CJUfBm5JZB6pEqRtQprnUNPzY96Matw%2BJR%2B8xBiZAeQAFPmWj3%2FOsMOGJhLsC3YrWZo&X-Amz-Signature=7153fcba1fb53445544bc2e74136b2e9caad4b6177b8a07e6216f324a479a95b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS5YQD57%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEaUlif7Xrd87NqRcTO5kj%2F%2B5W7%2BUgSp0ZSy%2FKriAU%2BSAiEA9ISUuxETHg4TKLK5PvJZlLNslztOImdA%2BOjrbh6IBJsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMJHhJSro1%2FVCW7zVyrcA%2FlTmbtUtQb9P4vtfTPP6SyGXDGBCK9BMSe5aTNUX01e7oQTc7DjlRqSPfGRYeX1TYcPqEWoeri3qdHbq9n0WDW7tkopkfM0YSKwL4BqU6w9f9h0wUjOeRmdpaMWk1MN4ozSfxi6RTCGWNTk1CjR0l0vhaHENj0x%2B0hxhAvNpq0BXyoUK8YuusKQVDE11mHXXUMaSszWVQ6PCxY%2BZajNH0%2BOz65GO%2FeJYHcGrOPeeBwnqSeVf5sx244scJSMs63c4xehCRrdTA7UfvkXutCF4xBxuHrOPBFFIar3RLDUwdk4d833W3IZ0eKIcYOrQONESkNZDpnIB5ASOv0BemR043i2ona0lkvB3DOkBPE9eQ0mlTJ2AhZiO6S5Jom%2F9ja92xHc6ho7uBdxGfJN6QFz0EtQWvJMByanDkkb9LotwiHxbQEnRU2SlxDP%2B6iCpccY%2Bh0tL85rTb1SMkweqUnB%2BvAJRzHYvISQUCb0%2BSb3yOD5s%2FDiVtRYp%2F47YNWLwcDIQS23IvFIqhnJpptTCjMwHWA9A2l%2BQiXflm%2Fg0CWm7O5ywWIde3olg3IsB8zGvnCdFAAl7t4MCFZojMPl0Odo8W6NEA5GZ43Lq86L0MMdWXVE64H5kUDqrq%2BQGN4CMNf7mMEGOqUBPl%2FSqVPeJu0eWzwwxbEuEWVHQEfrIQBZloROg367vw4SRB5xYTnGpsWzrdYvQPYZrCkp5e87CF0UAaWtUnj9MQYjDZDMON1RPWerUcdX%2BHk8zSOeaQoEN57%2FqS47d0c5yizzMGibFPMH8FcEW3900rM7Y8uT19iPJUBAbXfdywHxkEdUDit3YA7YnmqebOg3OlGm2clYvSj%2F4eTTLKZ6uAKbQopc&X-Amz-Signature=6b76129081f579ba45f9ff089bf23c4ac84ba6220365766de941c62f06d99457&X-Amz-SignedHeaders=host&x-id=GetObject)

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
