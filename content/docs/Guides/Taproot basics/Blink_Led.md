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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ESWZ6YB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsykG3FOMihvW1RK3X6nvfLjXKPtRZ7I99LdJvt6IGRAIgXOAgGZku4Y8yUWb9s3SuOFvWm8mjLkcAK6DIlt6d3JYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F5%2BHuRfY8q%2BntuQCrcA%2F5H35TTvoSuWmOlhf0bCQ8AuckvOhu0eU7o8eEQZoVHj6bM3kt55jv3zslWfOIFuBD%2Bjhtc04O9SlCzmIbcYh45Cs7s1h4asBovVRj%2FP9dm1NYKMftvxWBkyGKAloj%2B%2F4B7hyhDrU2gmGCBuBe%2BgHY6yIkb5QX8HmTebV53sFUFcrtXqeB%2F8fsI7pX0%2FCI7gHtMUq4Z%2BOyEskpq5czoHLLD4v5zzR899BIhL3%2FLinntTWPJE0iqg1wxsqS0wyrQXR1xRnj5tAp9S0%2FmjABjwAEdAs%2FhAdfH3Ttq90%2FZrDda66g7vQtg8Ys5SNdt62Cn3SZnNQbHiHrwrQ9sEQDZWrdxivWi3eO35EuCMBjIq6foh6KVhPc47OgVfMZaqNMS5HBRu2AXY%2BXJ0kqSbkNQI0VCQ%2BXXQDe9euf9ZF3MueuNndMT1wwrHBK5M%2BoestBEvSe6tM9ehbvTDjSDNnTnZK%2FIG1qFfhTYo4Kq0pQONpKdiXlkvCGt%2BE4mNLj4pes0s5K7tXandAH98dI%2Bh9QRMyNePCtp4LJGz%2BShif60wop6LCdnKCVHzlLvRuXMJbz6WQQyfpOZltgjpBDAoXblvEFDauMNMZBbVCD6uyfRMDQBbPLBEyuFFPo8aaY4MP2apsQGOqUBV2BaNVooPZJUqmzkmuPOwZ0J5nv49Nv8hLzi7lCYZWvVJ2wr4gYjQKMBFzXJ1iiGx%2FIbCyNTPqo1uW8bg0DbkprK2ATTCFLcOnsmo0xdlv3c6x9C%2B1kpkTUlc9fWBwEwKfaQsusbao524zw6u48CVgfpDao93%2B%2F9tvp6HgHO6rkS%2FmaBH6wsj92X5sSGxsetTVn7%2B2zQVadtgBoYe7SFr3sfVyzY&X-Amz-Signature=18b38621f26720166b261c667280b92e838097b4e4fb3f1d41c42e648abf9a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ESWZ6YB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsykG3FOMihvW1RK3X6nvfLjXKPtRZ7I99LdJvt6IGRAIgXOAgGZku4Y8yUWb9s3SuOFvWm8mjLkcAK6DIlt6d3JYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F5%2BHuRfY8q%2BntuQCrcA%2F5H35TTvoSuWmOlhf0bCQ8AuckvOhu0eU7o8eEQZoVHj6bM3kt55jv3zslWfOIFuBD%2Bjhtc04O9SlCzmIbcYh45Cs7s1h4asBovVRj%2FP9dm1NYKMftvxWBkyGKAloj%2B%2F4B7hyhDrU2gmGCBuBe%2BgHY6yIkb5QX8HmTebV53sFUFcrtXqeB%2F8fsI7pX0%2FCI7gHtMUq4Z%2BOyEskpq5czoHLLD4v5zzR899BIhL3%2FLinntTWPJE0iqg1wxsqS0wyrQXR1xRnj5tAp9S0%2FmjABjwAEdAs%2FhAdfH3Ttq90%2FZrDda66g7vQtg8Ys5SNdt62Cn3SZnNQbHiHrwrQ9sEQDZWrdxivWi3eO35EuCMBjIq6foh6KVhPc47OgVfMZaqNMS5HBRu2AXY%2BXJ0kqSbkNQI0VCQ%2BXXQDe9euf9ZF3MueuNndMT1wwrHBK5M%2BoestBEvSe6tM9ehbvTDjSDNnTnZK%2FIG1qFfhTYo4Kq0pQONpKdiXlkvCGt%2BE4mNLj4pes0s5K7tXandAH98dI%2Bh9QRMyNePCtp4LJGz%2BShif60wop6LCdnKCVHzlLvRuXMJbz6WQQyfpOZltgjpBDAoXblvEFDauMNMZBbVCD6uyfRMDQBbPLBEyuFFPo8aaY4MP2apsQGOqUBV2BaNVooPZJUqmzkmuPOwZ0J5nv49Nv8hLzi7lCYZWvVJ2wr4gYjQKMBFzXJ1iiGx%2FIbCyNTPqo1uW8bg0DbkprK2ATTCFLcOnsmo0xdlv3c6x9C%2B1kpkTUlc9fWBwEwKfaQsusbao524zw6u48CVgfpDao93%2B%2F9tvp6HgHO6rkS%2FmaBH6wsj92X5sSGxsetTVn7%2B2zQVadtgBoYe7SFr3sfVyzY&X-Amz-Signature=2827a53601a9cc62369d8e32f21b1690468f053345a4b1715a22c7001c7dd90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
