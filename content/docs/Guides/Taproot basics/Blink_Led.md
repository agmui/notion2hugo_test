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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHA6TYX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCKmjWfJ3fzuAPYwl1J5IJs2f5qvAeeLt7%2BOSay7xRDqAIhAJAqr7WPzhrzqrxJUilERbTeeE%2BmsKHhtEeF8mRr60uqKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ%2BYtql8KMbAPGDc8q3AOUpmEPLIbAL5nZwO1GLD2sUlbrObzgFGBDGxw%2FbXpvUp29bJoQ5dAQ%2BuXTyeogTiLWfweXk9m3BtidnqJ9FQxKxaggvBLZZZ%2FF%2FTjvokPMO2GbNVrFhBeWlSoS02MIsaYyreNcLQc2bmWWEIE1hkvSSCz9kSab7Dk1LQ3bryaotJTh0DKIoJwPF25XFb%2BKqWXZob54nG%2B0DXq4uXo3V%2FCkNuImNqM9s7BwFfJuMOe9fOgpKDP3SXR%2FbsLqRLQPj7j19gGkwCJpVR%2BnM9MN2nUMWokednt8QDuzU4ITpE05kWM6HIRuYagcssdLkIkH0EtcuVV82MC71l%2F22a14XVzLsjeSzbu78%2FvS0y8PWZFWtm1VT%2Fy0b%2BdLXZOaU4GwvG5e%2Bn8aW%2BYiREVYQSdBBj58KWi2nTrqJzxy04kAU9VKQDYtpehuya%2FGVKc%2BE5ggYuzdCSoe8dJAZ%2BC9qXStlaZLRn7CGBY%2FPSJwKPzBrPdFl1dB4L5QDrlT7Qxj9GDjcss5Gn5imbWNpTTBf1IuW82yth4er7oiasXQ7R1o%2BGK67z77ORTTK1RIm9Dh5IChbcPCCUMnWxkniiMtdCRwMzbC0noz0NGi7y%2Bn5m7Rx2i4TyR0%2FdF1NJRewsPdPzCNh9bABjqkAZMhx47UHVBqffvpj9xgzj1pLruHCBmbVwwtz4i5piWGgqDiEblLWK3E2t6ZgoPK2EXfYTvurVbE6aU6fWWWtE6g%2Bcm5Few0invPWjhNBE7gJb22k2V%2F70My0rx4hzKSFfzyoqgrmcvWzUbwATdms9Q8qi%2BQkXckFWvSv0G8VzKdyCy8qPuCLmdSlYMovtqrGTr0ingh6nMlhbXhsmarYJFU%2BYw%2B&X-Amz-Signature=581634694f6c0b5a027a0fdfe1105175370dde728f710f148476fef2bc46a977&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE3AHRUH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDfLU8agXKVtT39gRyXtFLrV9tXEvuqJmLi0oLyc%2FOD%2BgIgQhGHdiVeS7Lm58kzj2rHTz%2FUeb4dTzM8Hhcb3fF4d3UqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl4OlChp%2BGnjkpWUCrcAwdDj%2BiFeoGevNpueoeaoV3O338UJa8zHxx5VXryi6QnO9RZBNJXqlT2CDtqkT7PobtdE2M56X1tCn1jOQWwZAXFHGlInyLpxK93kllq15%2BhZmJwaFQsW2pBo8KdBMdGqEJRwviIfztxj0TRNyUGCGXUJnlG6mqTg3vEpY%2BkJZ2MZf3M03Y6CHz3u1J%2FXhwaCLE4d4nqkOgLl75UJmtAsrajE5FctCysEaRxgVC23CAs5ls8A6myQ1BjJFwUK5H0bv0fwPwefM6YSK8mnFYiOWOIab7nMBuG1NvY1BiM81PylG9Y4oMw%2FaTcaM%2BQf4odLM3djToc%2BE6IGJvn%2Bckqlkoj8%2BC6OgaELyuiygkELpLMAr2%2B%2B974I9b6NDy5QwVdeyE0FiTyE%2Fmq%2F7ZvCBANb9B%2FvpnKr7dorJ3kTpRAKlDeiUcH8SrFkGX87%2BILHwn37AlJpagLxmyzhnd51js4yZic%2FVbpbZ9Ctb3nJkpIkqoOa1Sqsp0y8%2BcUpkYzJMsQbzHlvD4aOnHLzjeBvoWrfmk%2FlDlP15HCTo7pZxhV3iWjgu%2BZUnFvjnJUNJHEtMd71oD19%2Ftqmg9oPULKjgE%2BV4VrBexsmK50fAZ%2FWCWIirkARqPQYfYPBz5yI8qdMP6G1sAGOqUB%2FNEoFENYfH1YiPvnpn3wvBQnD4Q2XVHqVGO76CyOSy%2BS76hS9zBAp5RSwy2upwWxh8mEhNizjpynSg3juCH2JGqEYQ0MmKOWg3%2FT46yJgJ%2BzIvoitzkYI0CJpnpYyFnvxyxhmP5MIZfKhO9fKvM4Y%2BthEaDXH3CLSU%2B2QyZ0JAIaWTMl1GYXP%2BA0Bza5GpoWDryEKnqtDxt2gHgHrtPpOt%2Bos6Ob&X-Amz-Signature=d303d05c8f9c58827c1d18b7bcb1c148bfb8f1b31aca1a1f8614b854106bcae5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
