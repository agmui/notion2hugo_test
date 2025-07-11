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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GAK3J3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKamn0MN91I8mussL4p4P3%2FhRKQRNP02k86wgqLQ1lhAIhAOvg15VFvmz9mFT5OzYaNK952UUdbDZ%2B11qT1l3BeshGKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYQVZgSy63MAo7mIMq3AMWYIamDQ8BMF%2F3%2F%2BhyDQuLEsxvYD3XABtrmLpAP0Co4zlkKO1zMvzEtUTCPwOSEm5zLVA%2BlbutHC22g5CSSxIlndnNzSMtWznfjIRPE8RItzIy3O9ZmCJN%2FegwitrwAosj4kETsNMdhWbKdrTCeZkkRqVo6wKGNkQW8QgmWS2K7ucYW88jVttQDrihqxPyqXdExJcQWIWdswPUZLpzWnBHoF5t%2FgOKvICGava3MUNLxEiTgjhLGR18r7DYNdCYK3tZ%2FA2ksCZd1fS5h12hJji9%2BsNIL3YrQTJ0Pm2QoFa2xTvNYeplbogMGn2MsMoNPGWrRZLx%2B20ETFOE1azP2ApFcMww8as9XdEhumlaqrwcoutxC1Wmmo8fIpTlwPJU6ZoCF1Or7m526OCQxsoxeRvr%2F2xqPQVz3cHvDC3JnrbWNAQSUtRHSt1wQK4OTY4miq9HaCUi8j%2FyrIzJkpkUjiAWUx5P%2F7nt1v%2FZbqIM8xxy%2FmriuyWxlE8r94QbBUbRj%2FgJdQmFGwZ93awIpI6zX%2BjlVysBFUugPYaoJ4gYfjse8MXvlhHnLg8J7a7wgWaq%2FIfDZ19ksgnDyMwmMh3hTY3y2ZUORyhBZN029nGDrEkE9PRw2uJvqTlERMi9IzDAqsTDBjqkAUch0U4UPQB2wA5bOdABgb%2Bh%2F4l6iR4qeMstEzg%2FDOqZ3jkkSj0Sv9YBbJq%2BvVvWE1b%2FTvxqFLeW8HQoczph9UzOKTokbFzcQc5PbYERQJjJiC8bvT9%2BbV3TuaHYKAs6Ymwb8GCbDnR%2FH9bPxGCB%2FNJwUyOYgC2B3IWaN5emLMCbBNeC3wfeuKhMXGl2sbnYCpDNOzWSSHsvcBL35l6Agy0BeqWY&X-Amz-Signature=7acbb2fe5099b2e16ed99fe163d6d052b882f5e43d25b5f8ff1d036ac9ec1c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BD3ERGY%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChyJbqdvJPej2aPe7RalRXXz7cJjSLSNBYiPB8ys%2FehAIhAO3YY3OYuaOZt1D7dpcKfJK8sIKE0uOFBhJm9wsvHnS1KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBqnJghB6xpo0nOGAq3AOUQKDWHerSq8KlfOGjeNv89umFuCWxYJVB6%2Bm5oTt8JfPNMgW7wx83RuyrDmrzEdzyVe3Ztea5r5BNvSvDUhzvutKJIFhQDSW%2BNxIDRXN8qEPdCU%2Fvpr1CEqnZ4EO4v0HgJKy4h9zP0yIAZRE0Xp4sh%2BOlnx54gZCkJTn817%2Fyt7g12KcZhHXOrCM5bSaAVdx%2F6K0O%2Fv0OgQr6cx6UmFq6AoDroxYMSv1epuJJ7XN342ZXf6A6iAtS6zl5QMABX9fBNR5L6g0y%2FqPVJ68mCzkGklB9t99JFSbgHQ8iJGJWaDQmyFfcGJnWU5b45UpTP311QyLtHcN3oJyfullgF2EqOVFmZ2Ok3XjkbcZa9H1NzTguNuG%2F39SOp3kzk6olQEB6T%2BiUbbnVMXwpFwLZ1xZeSxyzgz452hiz3iLdCOP48o4ld2JW38Db4JTGIeTwhb9cKhYKCmOSCgatwemEhvmJj8ohyf1q78deqW0hHetIMY4kdD63V1XwlXklIslt1Vx%2BTENEiyZ3uUApAzW3PYxSDiVYcbPTmjAOMi9hVTn860uuu5JfuhtuLT3o74DJ9pRQ%2FmY7orw7unQZweqOpC7ymapNf2JBx16o6nBa8sD4gtJKWmqEpgjnlBpoYTD2qcTDBjqkAYI8vK7YNoPZDdh8tafw%2Bjx9dgctMmrM0pimoc09obUy5S8siOM%2B845t2mo22IrHzvF%2FMee%2BBXetdlDTNu3alKbZVwiShT5w7EDwd709sSBCOTjZBZdC4j6kwNdEkhPttXOptIIFa4o6EwLczmAHtFTQeE9tCDJT3ehFDDDzX6dYX%2B0cAYpy7HaFOSvH4DF9J3ehMU5FllKD4AZjkVfOSj0ED2C%2B&X-Amz-Signature=c9185eff23fb4425a32f7f564e166d72c31bb9cd50e22ab759570ea60a21066d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
