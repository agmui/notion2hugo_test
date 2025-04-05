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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VS4JEL2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ7%2BTarSQUaSRKoGCgKlL7g7eYkfZ9JX2z4TkOy%2Bi4wAIhAIYCrMPuDCXuh3jMvPAtuCPiNeXXfyvhUcU7TVUkfBzYKv8DCCkQABoMNjM3NDIzMTgzODA1IgyF%2B71yaUfabndM%2BZgq3AORtFFLuxxoK6wWUsRoJHF6XS8a5RWmw72%2F4A03viC8ZB1bFUMcAXRju%2BZ0e8xLkqY6%2Bdkx5SQbQR5Di6BayWEsCxPBP54uu%2B1u24AbxTKJ3eMOMUNS3pIqtzmccB%2BVhNJKuwB4R8Sh2Fux%2F3gHkQmxo3gqeXzczga4mUNNaX0uCsUf1eQW5Ai26ou3QuTQFv%2FzTNxS2oMr3flXIjPRGCQEdmB5dQZGLDSmQsswvXA42ang2L0I9TlTd8nWf7hZUOET7ByfZekMO59UkpAALBuzYax7cszmF3wJfzJqD2VITJpMzbU0U7Ex24EXnDX1zEKAxP7%2BPEQC4UFUbgjFIP0j9l18Kvuhwqcd7uQXxGCy0VklZFCB99WcYVKSG%2BY8Phqz%2Bea2Yn0bfjS5psQR9KFkkgR%2BJ3vyDmcdaosHF1HbU9LeD8QHuUAqWOAQdmGPsfS1R5QyBKRDYNXEf1kQlO%2Fcy0gmzSRKxWXDutHTNIYuIKbtOmKVAmgpwAaWTdfivrvTbOQIf8F0%2Fc7EkoMf77f1Zw2zuWPJouWH%2FB%2BIWax1p%2BVLCMevAx402TlvvRflOuvB1Twd0m1Boqa4iVRUBUCOphZSQ74btZ9Io87hhwzWhVltlcrxS9xf%2BKhULjCZvcO%2FBjqkAaEYr5oyaiYyATe3Gc4mSb9OibqAaWYTKlf8HPOw5CjZdGLCAZtSY0vW0kVSxktjFBKAQzpMUf1F2oa8xHMa%2BQziZE3gkYS3bQjzXzAQwwueTCzXMD5PadBPGSrLFZoqmHxxMO43plYw0zzoZvLzgvCYDrgkaOJuiqX2B4oNXNF7JIb3k1X9t2XL7G4lQ5zkINXsdP3c%2BLO26Y%2BNHsAWU8uGFs0%2F&X-Amz-Signature=2214fc3a119b9d8a151eb356cbfb39ccd38a93d2d5fa03ae7a45c3bef76d3414&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3OAS43I%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2N2S%2F%2FdP%2BLuWD7hfwsQ%2FamBLFXrdNWF%2FbtKoRkV%2BP8QIgTdW6l%2Bujh0zWkfVnB4w%2F%2Bleyxy54VX%2FMA7OLIvqAXeEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDD%2BdXg7DTWkIYpA0TSrcA3OdGDyhXiYsX%2FymSRKhPmTUmhFIRdqqQpjHqO3iGvcPaMHoVp04ipm6pHdpllAlYI3n5tAEfghv9u5SY6IaUfBl4g6l9rwyYfANykXEy%2FYJ8ZGkMb6Gaz1jCXFezJZ5gQhzeYmH%2BU67%2Blv0vBNGKDcMfxREgy7FAUyyxfcNsE6AFiA%2BY6XnnZMFfbJr9eYCmJGyoDWfs9IkWv0ult4cKT9aI2UB9u0BCU9inI4sJp%2BjFeSz3sTdv%2F5wqVvNweTenQyffm%2Fv4TfZlMgVzUt%2FMjdNlXbqfpvqUcGanL6o4gyeatgGyXKg%2BwkH5Fd28%2BmbY8dcY4JT4HUOh7GOFx%2BIx40Vf0vemd%2FFoUrLHS2Ld1KUk%2BAFkZUTo9hup%2BvgU2A7aaUR6850lrr4q0Kude4Q%2B6R1yQ8YchHjtBkC8w7yM7H6iaphsqj7o%2B%2BzpUcTGD%2B5kqC4D802%2BlvLW1OUJaiT16hNlwhT9j1A1vAxG%2BvKQjZ3Xmk89Sy%2BbzDdPZeKhZYTuEGqIw3Onmt%2BgXQeAGmSm4XxcsuOlFC%2BhtuUmmIeiNz9TdsIh96iKpqj1MBtbvJHgvm164AKbaowTrP%2BVVO9aPpGymxl4Mzm6EAaC1TLKUDsjvYVR%2FWwT%2FLjfHcYMOy7w78GOqUBfM155cOI8WnbmeLvLchBYQh91wj1GDlJf7hhimLfpIO%2Bdf9xBn73YyQNmT89EHTjoxcY4%2B1xmaLFSyZ4vL5oFwpSXjENocX%2FTEfgNtexa529DAGsVJxa18ELJVYBrS6CiMtG65xzyf8jwIGqcE0%2Fo0cXImvdTN90TxIsU1LoswDJjcPPTUfbDnwP68r6Xm4gZAyFzb5hwdWSVIJk%2FPwJIA8BvlWt&X-Amz-Signature=309e49a0bcbc1f6c0638cf1a17a117aab53e53440bbf5a880d140eb1d5bff55f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
