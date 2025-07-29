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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHWRMFC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIQCbI%2BGCM8HTWXE1fLKT0%2FDj4tXqGt%2F2B4QM5FncpnNo4AIfbXx9DIiC4OzxBByPF%2FaPTGQt8%2BqRm0bAi5M%2Bwz%2BqViqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6fdT7jr3UB%2BZz3FrKtwD48UXJgE5gtkxaAkLeuknNzgbogjGVaW%2Fc8mq0PamiXPlTQqXElKTJ0EjjswuEFscZ2ujMB7HzbvuEn26IbmsXDQ0vgM0ynHvuCQy10ZSCL3wgG5X2YgmpGj5LOeSvJ7lmllX9PJ1ZihSYkYqPmSdRBoCVHIjpSHSogvqe84C8VYFbSakXwrQTuBnMmVtvMqphrZs%2F5r6M0GGkxYUZkQXJmkkMefZyW2xVW08l4GQtd7sgdvKMTpNhAjPowmjQjYaAU%2BQ9y6JVVvlOnEWhfT4TXVEro6dD5WkmL6q%2BsLXKFokMRGazZImRLh77vLQ%2FOKcahzxLDkWrMcmXQ2x4P7jUkfO%2BM0DwmupEY56rd3asNtp%2FHq7SqhpSs2ysAH%2Bcbni89zmHyR2g3xbvZuVEYyPzG3t%2F6HN9PJY5LelRk3r9mZZQKGMO4VNpR88Al5zFDa0EzpDmk%2BdQKSLAK59e95qyxIm%2BalyLqTAftMA35146TOtO37hrxzHEYWZzvFfXqs8fMsQ%2Bze8ZaKXEtwdbzZ7WKIyy6OfpCWkT3jZbm5NJYotTMu%2B3%2BblVY2IeIkCP7yCZPPMzAK18PR0mSTIrEodRJIkEhBXLmrBmuMrcnKik2bLJJqGhh3v5DWLtv0wrLGixAY6pgHYfjbG3Z5VfK5MfA6vj9Up5GU6GMZkm7j07ce%2Bci9hWaNrAg05wf2EW2tlN%2BvrrSf%2F4dmLuX83N3WOnsTcvZXgAR5kqVQHhNLAV5bl69XTXhvIneleMhYh1JmlOTuGD0slhfTKalIXYaPYcBG5ZoXR3m0PrHCI3P8N4v0BYP7mB%2FxTKF%2F%2FNgT0SNU7UMeJXV7I%2FTJln3KsEDCJ4Pbp96u8VqF4RhtU&X-Amz-Signature=97232b1a3d7c65f2add9cd83048efa71de6e4d478546aea3c418c49868ea66cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SXYC7VU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDydY0L%2FJfphBidJIPlMtXniIOY1cgDTk4c%2BZl6qBwNLQIgUYLL3DcbfUVPy7qbEudIYvpfxOj64wztz9IyEtciN6QqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdvmlBlEidPhJIWlSrcA8PpbX0E7WioE0e3JM%2F5PPACZkXCb2jXTPnzrnu%2FIlCK3bTjwVW6nZMPeLlSIkVq9ke6p0Ye6HOSaip3b0oShbVVJgSKPlD8ijnoK%2BghZNZC%2FPHVwqg3%2F7Dd6b2F5OHI%2FqhEq2akAGXyrXBHNf%2B2YFzupwGlaN%2FCjsCq01%2FxkVz7qx9Ty0lfVXHYGiPPZ%2BGdBcQI6zOLCHLbqR7me99MkGZATO3KBXSAcnoF4piXtUu3zCvAyNUl%2Fal7SXHDCVJsUe1xAJuOTGd%2FaJKvIwUPtP59SDpgkgXErdEtR8N67rn3NaMEvSkXsjC8AldjkWRFvzOs1Dre1igSttjTGMNw53hyqoyOQAjEcjbRJQfrWkJx4%2FjGOpESrG16%2BHI0Mnb%2BxijOR9jlMOnf%2FpO4PZsgSX2a5bKOtU6pnuYCQPf1I9SGVcE7aLOXjL3QvnN9qOYP%2F%2F0af5BSk78hAr5OYQG9d2Zjyqtkf1CmoG8VWhVhzpwoBbhH%2F8aQmKxkYGmh0yal%2Bfch8SMGmFjox5o5rIAbTPVGUVEP3XZqzqG3K%2BatLzHg70UH5rXBWEqhrxVI5a9VjVaLjR6MnwMq6WKIbCjNW8JO2%2FZy3HZEy7u5Zc3a4Gh7aga%2F3GC67JetoZvUMOSwosQGOqUBdlxrLAo98W4Cary0Wiiun63EuDBymLzkl4iUzoyXilqZSa07rtXOuuCCuoIln1KHfpnjv64%2B%2FsjoZalghraA4tqAgZHRGxx1q7t4V71TV68dVw5pRdBdSoWR868QnH14lX5%2BTcGlEh0rLIAt%2BSuqTf68ddKy%2B1MIU7v0PY47wHeJLkmGycalYO3m%2BFssUxmqDwkO07uWiznKaq2xr1YJq5l9ZmuK&X-Amz-Signature=0fe59d688a158387793774a9cf07b9399fa4225965c0410b0cc9af9ff2bdcb5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
