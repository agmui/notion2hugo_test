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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJEFKOOF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDQvZpVNNzrd%2F1R3gnkDjbyTzmDmF7rM9eldwbeakMKnAiEAkyLShlfHXdwuPhNpywC1VAjDgKqNBSwQxhqtAgYK2N4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8G8zjd9ZD6ykGYIyrcAysZzUftba4%2BPegHYe5aJbSUZm4uyEhCEu%2FABclnpc4BXan%2FQnzol04uCZJ0KKDhjg1LtHRPFLETISb6B3y0DuooCVcHsJW5raSJgyEUEZURHUypdDw5m21gbsVOt2vFQPRjPHx%2BgfxVhSO7cY4hQE1QxT0pJqnLezamy2hCpBZPb%2F%2FpPihLuEyFyW4CoMzJACB3toBn4MBaweTHLxeAaohxvnItBbamjt3Y5OhwrRGqFlSQni0JNHAkQoYK6OaXkwmX5NvmYY%2F7w4GtX8FOjbpXs5ZchbeJx7ejG7JQb%2FT6WXZBv%2BBciSTwbb%2F3BlZB1DkhW9Nr0N8OYHX4kgcT0bv6MEEqzsWgW1T3BAGJrI9AwOfHNNq14S%2BXXOUu8c4%2BoqScJB52hI5iHu6DNbJJRwXMXFpim1Sqv%2F1BY00aI8KdhvzKgPjDD1OZTg%2FmIr90dWcB1PvgeDeEElwoDgQxeg6bRuBoaoo1XG6hcF4r8NFDcnmhp3GWqc5Mr9hRY%2FBMY4pV1BOBuI4P%2BtKZHuuwM%2BiN%2Beb%2BiGHeoZ%2BbTrxgPOmcZjPNEZ8wXqiTLDQ53MI7y8o1kiJ19b6KZRyJ6NtJ3oWvo8J6Y9IvX0erorlsavI%2BlFiAJ7%2FKIjtfmjmZMIHrwL4GOqUBfzz12PXlmu540ahTudW%2FOkZF7C8JVAknan3XBWdfJ57y8ZCDrTqz7BXfFGSzri%2BORAeZAXkADQoC44qvXc0i6nfR75suYwdkpmSvxqAgmzecQb%2Bl%2FiMM0OK2ybBBBGRFu88GgPeb%2BB7Ew7YFLPne1%2BJmeeujjSSEczEsjOTcwTE%2FiG1lEHEf7sz7ohwROaEbchPl6k94Xps6iw3F6VFBgUvo5yN7&X-Amz-Signature=0f67f9e63e41f068b57afd6a2272a8787802981e7c668c2722e0080923ba12e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z6KIEHZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAp7%2BM2S53pezHTAP77L%2BIzpSSc2XlvL9TxUbGC1TETaAiEAsuuyTsE6oMs8o75XbUo2oakzqi7wQsSXIw1PJ1%2FO0qgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTGsbwzNvZcnWUwTyrcA3oGjeArRkR3gqTLTfp0992njGcSede06cCD9AjC6mIYcDGzdC5Ta9wIBLgPlUeKzI4l2N1BOpJowOR9EfIplmy%2FxonZngkAUQrilmDQ9DXkkWnQ1Z%2FXySV9XEBdSycQvKIn%2BuRrLSwT7%2Fuq%2FLrT0%2F0uy27w%2F0Yw6QibZ8QNhmk9%2FmkZwCPTYvYF%2BpXmPUIP9s1LHQ0birP8CQjRxTBPyexoNtr%2FaBqbBZbaW6voa6kRr7dlyW%2BHnE2SUkhJLIUq1kmI7xdkRqYBl4%2Bvcu6kB8m75ruD%2FPSWqIjormrBGhSitXWd8z6buoWM9UsyiX5bvapaZ851%2BFmpR0UPo48%2FndyYGa%2FZUin1NIiv1cld1reibT0B836WQXmWMNzEZYuRauIBb0CXJQi4aM1%2FmsDIfVGx%2B8NdwcsNMtQE56Nblh8m6VU3ktobtwLhncSPqooDaNvaIyVVqKpMHZ9JuX2ebFSlzi0d04pdQQzidT2kYj%2FHEIUUhOhb55Ok5pAEUZP3eYAY901c1Gck88XomILLBCwvvgUITrYva9OpsE8sEVKrMj3zEGwLRVAco00baLluap5pbb%2FaXgdfbNMZ6zzjduACRVWzseRUGguX9NCObWvhQ1igDgAG8xLAglleMMHrwL4GOqUBBNTChlTI8j69tIUHvS%2BbQQr9JJ%2BMZR8gVOneoYWWZLSVyVEmG43pE%2BUIeiNxboFF7um8%2Blz8lrSxAlfZBnqnEe6boX5n5fWr0f65OUQdAmQrYgx9PzD9NFLqaC86SeDKAGvkgIuvJvXRfLpIjgUUtABs7ps5UKsrXtWTlbHXseguufBSpvUlTcU4xkclt5BMNRwERr6LJ9bmDom2kM2ca9CRosY4&X-Amz-Signature=df4f6da7c1442c54156fd1f4c871a567f0c33c15e1eced3cbb9f25a4a19852bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
