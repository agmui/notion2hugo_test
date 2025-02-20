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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K46CU4Z%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHZlrJmIlsEqah1O7%2FTgyH5pLq7g%2Bkc2hKK2RPjp%2BpXwIhAJkKr6gslPDWEA2rFLG6ly5DdcYu5sNRYneyTP3UIBzhKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuzyhEgKbMIGWswQcq3AOFgiV3g6smXqoZ6lX9lg0QzbBhVLPikKQHG8Bh2yyuyoxTmDrZew1ZOfRd7HhxzGdhWTotdyDOP%2F4r0HzOUYjEs6e1G8AvWBfqhsCdKKgQbcZRl%2B63tkkRy75LQvFl9LgS6zdYIYnF%2FcIVh9e9%2B%2F%2BUEmikHQkEJ6RM3o2y0JSZybFoXeEmXcMKNjxv%2BeHS%2FQVw3ix%2BVlwjIUa%2Bai8bEP766QXTwt7RCk1ALy77Om%2BwNJv9VQiRXKUNEYv3Tj%2FmDMaQDV2tQm7ETpAcl1tLBLI%2FdKihW73Imgv%2FQVM6BkRxwk31mNO4KHtHyMMufbYae30cUrS1ocL%2Fmtu%2Ftw%2Bu3%2BUnnyZGoy8UF5A5XYvfqm35zZetzF0nIFWJD0Uf2WCSwUv6AkmzwgARUqrIE1kSGHxaoNuh4EDClUi0xs9%2BmOA78rrUPYUwexBykwzo7jcngCVdQBECrLjxZTbsTXQVrOtDwzMUFQH5VPj6x0j3w%2BWkk1iibOSYeSvII68FDCxiaM6LDboL9Sue%2B46bUf%2Fya7Xy6dO29Pp79KzMQTIzVPK3eiDIOibHR5NGV4B18rEBeKApYCI2%2BQpAQGOLkWc2%2Bh2YPHzHnkNrIlGn24wtKdQnrUVOa8O8UHmLB8jYXzCWxNq9BjqkARIdmhQ1NtAJIHuSMaa03HxfrNXwIyChMVHwHY%2FDF7rnASagLF0Z%2BdU1GZLDk7z2WFUVgIPNPLmcsS723KG%2F%2Bg9k5JRbmsbPk9NxsaQuTIjFIZXuc9eLHdEl1%2Bu%2FbAappEZgPFzXJ%2F7haxNQUbTyYSBTgLn2FBf4%2F6k%2Fa506FX8sXTv4p3T8tqKZhRZ5MzBvOW1BsHbgBTjJE0c4HwOb8hS%2FeK0l&X-Amz-Signature=e010db00fe731e1016453a862dd74a34fbca39e1eef36f18800f44de9d78c26b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE2QPI2J%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2cboApThZ0FLeMYyaMSI7bmxlY4HHvbUbPqB%2BNOuznwIhAOSOcYYFaWqRRTXJX%2FrVf5dUMm1EGQEDPA0asOPfvaMOKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa4ZtO7NoBb8XtZjMq3APKUmXEG%2Bykah2c8iPIV28R5Um72IcjGS%2BdVqGGaTnuGIHyy9vbbYlyuoV5XBJ2AD6ZuuViP3VXhWA2%2FPBvnwEwhOTeyXNDCTQHMHbK%2BjZCtXGKcuyTDcIBMM3GN%2BmfKDQV3Tiu5gsFVcHHhm1N4kPXYgF7f4YKc9EZGpTsiC2XnmaGk6C5UkhrKIztsQtlfQs7Im8%2FXt7pfXogEY%2BJtZB0FOcRs%2BCeoxQwX6UeHaB2wHrnwvgH7cQb1jVMyOWjLzXS9APs7kEp6eBq3p7AWDv55joAmsJGdKzFyS7VmRk0wqV93U9zWmF8K9oRcS4MqWGyWE1HrgKbfqCMEHlsfo1%2BxNsNe8FvXTK2cfqLCqpFUtkckTfVrUjf98luZk8lgxDtK81sUS4cT2ZHNgT3XaMqq27M45IyjpgV8UFlG9t0%2BSpYlD%2BaPuJI3koptlgm3F1hFcPZknEdafWa80gZHUizytGaQoyftzthl9bDApGDviQnCALp7Wah00XQnLtqR45EMS0SMG0rGAmb3TB8Tg0WNSK5%2FLxUcI5lpLSmOg29LFVXBUkKEO8magtg1lFlNJJgM2sfPBKDm8htDQWcFBZLzU92I40E3P5ae8tDuW3n8ROiz1WSo%2BqXKDA6pTCnxNq9BjqkAWuPqAlNyuOwXzE3nIE6gTz3wTWcD7qHMVf9cHzhnpMSl0miXyrmnkH1o%2B8U8Ru9uo7oHMYjG6WN3WvJRl2m2b9GXMXqmgjijPOiDJEWhwHR8BWqSOgsU6vWct5ud1xKlaifyycH%2FLctErLL9N89G%2Bh2e4acgc%2F4naCQ74jd1jePybLipFmJ0zsG%2FNAksJD%2B3jncIC5lPonCXBv2NXvVzyz5aL1V&X-Amz-Signature=5cddc9ed17a762f9ee173d2bde3f30fc9ce316d8d634dd03cc8a5bf9a4728c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
