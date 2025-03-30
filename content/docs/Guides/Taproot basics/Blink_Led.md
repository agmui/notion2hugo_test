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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YTBY3SD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDd3HR821HIQ6gWfx7q1N3rd7wqfjNCcg1UXt%2Fhn1wH6wIgNQ%2Bfu%2F4T7kWRhw4aHGm8KBwxk9AEL5oLQFCftlEsDKEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlNn1XHMJST%2BnspcircA3qikvzK%2B5jpm%2Fr6mBaZohQHAMY%2Fg98u3Hb0eFmoMXM64Z9JQVxTgXFoKnionvR0VgjNJJwWSVq4JjT%2B5aLZcZGOIFFTdT2dm11AmJ5CvgwoqbbgZc6gAIBGQiC4q5JmqTHTqIcrB09sLju3aeC9CX6lNrlIiabsNqD87dDfbjq%2FsFAu5p44fgMQJY1QWgoV8n3nmQK6sVcDwMmhMsXUGYQiwPUUT%2FFjGFlT5dMRPamBVKoeoEQv6ldozc7r7aKJnx2MpkMCy5sChnPVPkFcnPZswt2i9nuUvb0edq3hfKjtug727uPmUAvjUylgon4MXJSEcx2%2BLeH0SdQYuvGoFKOMRLek3J%2Fwp6jHx%2FXYx4yEMaQVF9feQeCtj%2FztM2j7d%2Bw5g4od60SDW94pmZ7nWfABJOA4wKgkWmKfbR%2FSRO6H7Gw9V%2BFm7f07OpNSKPJkq1f2gVcEBYfrd3O4w7AlwIhtUGBq8Ed5d7d2XDMCYVLs%2B5p0ylUMjb7KxV6ARh%2FjBLjJt6X8raTbk54MynkM%2BhG7WA5Exv4tw3n%2FAfEVveiNzQP5JKPL8VCkS2oldzM84hsZDgqwCZXfvmSrg85CY906paHR%2FekAlMRhW4nF%2FUptndVKNQ6IMdh4ZwzPMKbqor8GOqUBuOV153lbhv9YfBbqTPbSZrnbpEIEYAhxIRlyl3zOem3SOt4wZ7RIuOjJ8qTIQZt2YXsY8MNPD4S2ZcJN4eqsf%2FMYSNLSxNnN9RHwSAKYlDmMqBTV%2BvmD380aVe5oQ6%2Bace%2Fm%2F3N4cKhKsJXZPo5Am6aNhqwbt7mRvD73l8EyRplKBRUCYzTWb2y7vCWZ%2BAjkbGCvzJgWVo65tm0YBXBWZ1GGkhQC&X-Amz-Signature=c96ae0b2978d34adcab9ad3403fd0bf3cb1f27283ab0ad43a05b3fcd840c69f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVCFR2X%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIF3NxLTg4LOw1pTy%2FAmH953DtFbW2Ra94CkHa%2FL7By%2BbAiA2Jc5k3Yuh5JXj%2Fs9MOPKXuaQCyFTX4NITIP2PhGUROCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1FK4iJeL1BOoOnoeKtwDXfQlhhvXOcOHLLmCliHwYatdIZEByemYZec1eGJ%2FvkIYmI7KCL%2FtrSuRbu0WDfaliMwm89YXApM%2BwtgcaNFggHJ%2FJFiWgG5IY5Bj0DK7uaMSr3CYkRNE7FQ3IgOwhqq%2FfQvgC1UdQqkFujU5OITgkdo9RZKl%2BOkhNjYZQ7Zc4eHMy4l1UDHXnJvnQqVKLs2GxYQPmT%2BZEHDM0mQUlSvmzfS8EzdbouqVGgWs1NJoPWWv3EU1KLsZL%2B0TZLEfIO8Li1%2FAEo3%2FVO7KvllWb%2BCr9H7OkxQCc%2BPyWrUQqdeBF39JRttWIO1hR6cZBD3cJ5tSTl%2FzeUMN0JYSSxwAobBhG4rX%2F21VMHwxvYGeZVTDdcuRJDWsH8zPKn0DjT65XZTzJ8P%2FkqaCjQxQzZAJyCs7%2BNuz4CQpLEqTiqGF%2Fbc3C3YW2CZn8eugsP0eXy13HF96MCFC0UY2Ydkh8XkXxnYBt6iBNq4Y3gmlUgjgsC0G7yb3UjmLaqnaeaXqYoMRLIIIUJ5kEIWBWnkr%2FN%2Bd%2FC2KP1r0fzw8NVT6i3NrhZ4KP4rBi08JplX7NhM%2FhQUJiqijKzYi11a5JRlAuddSQSluqxwm5YxcTNyakKmLio%2FgkN79m%2FfaVTge6HSJJP8wo%2BqivwY6pgFF1n5cicBu6%2FYIlEp97pUtRqkwegnpikLVy371Xh6m9%2BvANGBOWJxs6U3X%2FHG0JYWe7jJHYv0rGbTfedlK91RW4Xgt1Qz8o4RVtfjE4r3sTt608kYXj5KHwtAUgbvzz3t%2FPoRTCrsZal3jZtwiWewpTwLicex9M6ADmRqd05GSNyMzNYEQD40G3rn3WlCnfxnK8GJACwauPTESnYxWcUwtXdhIxCXV&X-Amz-Signature=50ff3184974776b850dd0fb76e2c0748b801baf9bba721815c110e9e8a14af9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
