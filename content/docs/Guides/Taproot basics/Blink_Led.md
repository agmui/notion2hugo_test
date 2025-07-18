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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPZ3DIN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCcO7pMuFeCSwI9GE5%2FrUMlVc0BGZf9mFyKuXKOhXPBzAIhANzt15PxqTYhmoX%2FiGREQaQOQudX7GtXQzoK0djCohcLKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8e6nIya9Q3VM2JUoq3ANtafIMgu9afW8C7SOqFDc2WclqToOlaYUfkXKJ7E80MLbJrDZIdr6N7MiWF%2FOcFBj0mTZmNevHxUJ6sreIRYofAhwQnqp5oyGiBYX5U9AQA%2FBk8irEpaKwF2BPa7EopMCBRHBF50MKaDVecNtJhzzFZy1ymUOJWHg3iMfx3U5YmMlsMKQQiU4E34pnfRqhkrW4M6lz9WERLGPI94pIiGoG8b%2F7epOGZDsob4ww67REcyTDoQFpzk4IAb6RX3fH2JiSP1x3kP1xwd79NVsb1%2BIp1Dq%2BGgJtBKUHJPtZpGiYweWwSlbnouO801WpmjMCmSL9DPAB5tVkAuNjTAZeG2fz5OgHF6ACEb5NnZ5nF7uUGwHjdRQxqSxdj44TO7yxyFFyPqwpV%2FtAT8K%2FDdlKOundEmWGuA0J294RSpf5ZVwRABPtJ362J2qoYq%2B12JLGW3oFVsADZKcxHroGgjZ5VTMiXwDUoil0qqJXIM03dXaWEdQLa%2BDJnXO6dnBuXoZbKoY1ljvFhrIYYDPmlcMapp6EsrP3OShgRGN7SaNg3NriqmS2xsAKP5Y%2F9xrRz%2B8KSZYxmYSZSyTJYDNfjWJSaw3mG8I98N47hru93dKRlqrGm22tWz2fZ%2Br67kQc4jCMiuvDBjqkAX8GAV1ljQmQBuYeEKm8jmgOmgvkF0QR5aCvQYC4ZMmRXnzUJfXfS8iX7KPpzjQJdSv%2Fgr7DPE7uIMOgJWQU5y6rGAwzFA75FRURgpnZdoa3PCWUR2lsvIZV39gP5X%2FqnqeJ33F%2F2ItOn8N8pC0kjDE8nCb2tpqUmhNbzPs7Cdw6oaD%2FIPc1V%2BgE%2Fazryxc8OgqbCubPrHhFoOIFk9KCr6EPJGD4&X-Amz-Signature=e9634f898036cd2b372a4b8063fa95b7925e4c1b663afdeebe9b337518f3dab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5SAYOK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDy%2BMLeeBQztzn%2B3mrjmI1%2BEDYw7vBgrhHfs7wfreIO4AIgVijieOtiNWu8A1BCjmgz09Pz%2Bx6o5O1s%2FplnoV4990EqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB94aADbmWY9kL15UCrcA5c1J4O%2F8onfGZ0DEDH1e6TJNIbhuqnLtBdIACPth69u6LpTDm3Jhz9lUrZRXl46dNT3%2Bda1ORDu4lXQKU%2FfMgIFGKs%2FDUOqTQr7T%2Fo26%2Fe191A4DDcNjAJspYejilOdC7zOPfwdlIrNDxfHE6PkKkmho4bnHu1HHcDlEp3ovLR8XyqS7AvwVrEOqx5d6mvHit3b%2FyUmGwIv%2FE6vEUlgW%2BvJpsGkKgCtD%2FPiAEGC2qvLxELURoepPNJg6yBjHEnYPLCibj87OegUqgr3yJvA7AuS3bytxOMlb2ifiSa1VD9Nv7Jn%2F1jcMNiPxq826ZNbs1nZMpXkzVqTmZ%2FAYsQfRkFiOQEnHKaedoWFcEdUk0uGJEiK80fJ4iL8BBWBUQLAFHy3KAglboyq0yCd8%2B2VnvfRuqreEx6g0ZQswhbXmP40tnDSxmUGHxasH8KGafeuQlW2UOcpKCZ7gB%2FMfNbrE8BFHIohBqyEaA70u3cKF1z%2FupMA6DIIvAqR%2FYoxqHKesmTBDA23KriTtX%2Fkw2hnGXHTQQzmmRDFt7xjuOf6jiovnCvazJ6wF%2FY35bL6w5K7zmrhjl1Yj4OT6WBqjUHtH38Nhh%2FKNUi1O13b5WoMC4LwF1E2xDw2cSsX%2FH0UMPiJ68MGOqUB%2FvMnwVrrF2iSD0rjYQLfhS0hWe%2FMkzTOssc3lx7u7kkEuQmG7e7wjingi01CEfdrH3hLb1ARI2ltDmwetxbSEnbElVelupSZnvfjiZy5FPI%2FhynG26xJ%2BpTNog4no2foLMxsDWWjG%2FVzyG7CyHObI2J4EIFxYZ37FnA5sunriZSr56BsceMH685oWSzKX4gIJnQbRM1%2FsPdd3bBm2uMtosITXhwT&X-Amz-Signature=2d1e36c8156cacb195840fd8961b29a9caaedb4196f6d0fddb1fa052091e7fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
