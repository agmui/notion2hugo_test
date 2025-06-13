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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVGFWG53%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIE5ax62cC0CBC%2B47ijyU9NIhQANk4LidFgtex3wviiMuAiEAqNDHmHqVssIKm8BUJ%2BkFAzQG%2FOe2bS6zFbpxuiz2aGcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDL4uF5EuXoCHzvAD%2FircA34e%2Fapu5VJk50C%2BaIwR5tMv0pZC3vpFYGje9BKZ2LZcwa8RV3SfxZc%2FKL7n9bofTfZUrBk2%2FbZ96GxqCqoFjvVdIB%2FlFYrbjArRnb4ooL8W4Qzo1nXSWmtj5%2BmQpo9fQJKdJBpBXZIqch6PqTBw5DRsdrtVERb%2BRhjAKryqOOoUUqiewr26eDlyTUHKnFaAPCNcW%2F5KehC8CaRjGjAaWUO%2FW0T%2BJDs9s51ofaOqrSSrdrFFj%2BorRBpnyvpR%2BS0rX6S3ZpZewtc0Hsu4Eo07sVeQMbUWejWy1M4hBoUjHI%2Fdc3gfJJZ9i1PWkrMiksVrkgiQfmSk2xj8A3V1y9xQf3QrmXuTrNxmePWLF3Cwg%2F3BxxlhfkVBbXUfATivNEXeA4bFaZkmKkjlFLZG%2BFoC7X%2F56rLxchhsOeVcWOipw%2Fwn2VeNSvCASoY5sXq7vT71KUxKLyve6UiSup0TPx0azANo6UKf9RbKLGURedsZSs5Xy7cxxGZFH40OkS6%2BmF8Kg6WV%2BcRhVI7CvXiimuBIGlniEgiDAErm6Cf%2BvNLIt6VATp9dZlyNSturLBX36bY9DppVAT5TugMsYc0Le87ddfR0Lp8bixx3rLlWSbv%2BMxQcPw6FLF19DMc0lDZqMN6SssIGOqUB%2B%2F8dEe6Ln3LXzAhelWUO0byoqvqfh16ugg4urPj%2BNd2CnMLOQY70giaXvkYEVNPn6b%2Bn0m%2FMHIgHsd1ayondIdGqHKxsjzOPPIs1AzxafJ1dmbX4yxvUzyAtdYw3fguqwHCbce%2F074KkXzF95rvbx025RdB2rYG9BavTq5EW556FgO%2BS9WkuWhe40lNGTrLfLaeHaoVz51N1b1femF9Z%2FreBG6zj&X-Amz-Signature=5f57c917996e3bd50895fd6735cbb1e8d7b23453d9bb906947751a6bc501c2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTETZDW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCY7fj4wg8gQgF%2FP5%2BdgTUBTvNRZHEnEom36FJlWR2p2gIgKbxbnG7PIPc7cxOPenHBNs408tEHUafqrquTywDEQrgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDP%2BTahq%2BczU3lGOk7yrcAzTlj9FD7uxcxqATPc8rsY%2FaRGv4CwFU5VgHV%2F1WlB6cXp5FzCljuR%2B05W2yLe0DxE4v7HvS4jE99Jx9bNpXUbkI7bzOfM5ywB5GSOyCjTW4w2vIcZWg78%2FBK3j2%2BOry7HW2vmq2X345j7qo9TY3iAtKFOAV1JUhymiWSj6tpQpbO1GHs0O7y%2BmI46tVtoLsMSSVjTr%2B7uZjcWtzQEVw7kRXZlqJF0fS53Bo7SyWdvpMU3kJOL%2BhSMkgWEs04qqLk1tud0VH5mbORJHlrs%2FFlGzoEF%2FPmYdhECLIygJrHcRJw4JlAkJQiNfEK7iDRIOWKIiZE%2BYvE8lx%2FqRoJ3%2Bjbb4Mf9mxIlVm2%2B2SP%2BFevlpCaxJxuhw2gF4VP0YpFcqM8WjI38WoY3iSfoKxc5cYzOwwjx0o2WFMcK%2FOWJdPhZcD7RvXYbNDDsYj58Z2XEby76%2FAgrJToSwwOKne3N0hybOcLR8Jn6%2FAyvJZvr6AwhctsEMt8vTdxi1hr1xSlqWdFS%2FQiqqNf1H105xrCyENx673Lq3wQd0V0%2BzC3t6NjyGejLqIYnrQF%2B3xAeJ3oGoFaKLMmh58gkGXYzqusIc71vollZRTxBuznXZdcHiWFgF2Ws5H4y7erez95Z9jMOmSssIGOqUB2OOfP7fURFVtjcoahGS2usHPWPGHNcrNj6vrq%2FsPUGZmQz%2F%2F08nHdcG0BW1f5Vi57BGsGx%2FihRGupl%2B1YON6xCKGQUC6hxT3YYr4Zjfum%2BYPuZ8IwI%2BuYOCOBR%2FOpKn%2BLGHVzwZYdWiyJSJrCfscqVfFrfsLKU5gMPMHy7mDBIl8wJm8ukx09Wzqrl2lpXJFZ%2BMLYvpEz%2FtIJKSaHmLvD9%2FRl9Dw&X-Amz-Signature=09af157f4198600ad8feddffa85869bb1065df28bf6e1f93888443606ba12ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
