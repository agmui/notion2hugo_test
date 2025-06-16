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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6R6VYNX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDDf8Ym6kqiohdCDMlodSMCkNjwhCL7wgJWTfwJUpBhJgIhAMsF0Jg29cvFS6Y3Q6CFsjHtFIf4q4JhsuI48Kww1S1CKv8DCGMQABoMNjM3NDIzMTgzODA1IgwjewMhN5p0ZiPjuwQq3APZCPOit7Zb%2B4zD8uJXblWmulOodEL4v7MRYlVvSHr3p%2FQ045MnCoBsYtmn4aEj1pt3qs%2FQupoiWuffv%2BqWo9gBZ70b3ktGF45wPSiKEu1CnIWyyZEj4St%2Bg5NXgik%2FO9EaPfiChVMf3gvz%2Bx%2BznJN3T7oJNpU5mRU1t0A9zQJkVnHFzMN8dyxg3Gq0S1dJoNRAOWoJ8VyD97UeVQ0FX%2FUjBggrJT7iNG3DtQ0hF4GRnSgrVj4kMkjrj097762oB5t8x6FhmYlO1E9FPpC7RopzkIxLetkQZZ6XVS%2FItKkZT7w08ocMY8EizMPOdna3bz03L8v8nAOseP3mx2YpxU7CZSPWs0niFvlQUpOPs43LEFFmK2aZc7L2VRQrSwYJXDn0HWCMr2kYv55OTThYdY0Ujtp3nr3srwNaqm1vnrgsmGAo9T%2FKAy%2BpQWZXRG47yKQ2nBuy12vw9KiJI%2B9Spd1kboKTXdddUv7WHAOCug70%2BYpNW4AsfbtBMmy5xQi4m1jIIb4cUEhqV3vkKKBfAY8xGrYtjkDVejDxkVwjjcFkgoAGwc%2BCagnsRSqYzsK4rmS%2FxViI4S%2BSxa5q6Y5%2B3wcxXwZFHfgl%2B1g0KViClQ8eC30ayfsBhFgkBRKunjCXsMHCBjqkAd%2FanxfVSB2B4XVulOt6tGky5ynHdpoZ%2Fj1Ri1M%2BEUIXxOb6cO4WVSwxihEsh%2BpDH%2BmW%2F65fXutEDpTfknip4rEykjMhPAdMSIEtJ4QCzhCWgMH4NmBFIYdaIfllmG3hzpmtZS0mdXS7nmsFCx4Lgi4hlcIgkx7H%2BSlJoC34QvQYjkPJBRH5xcF2EqPLU0imvMfu16rn33Ifwaei7V7pq4JGRZa6&X-Amz-Signature=3024bf7f13268a2052958352cb1dc0d5b7f53ea5888bae1efee1b203a9fc96a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQV5RQPJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDE%2BMxV92ZI5HT2lJ%2FgIQ7MsXoFAO71QkKALaiOj7D4QwIhAKqjohHxDrzx5sukRVEoBnvl45OeFDbydP9OeR2AJnLcKv8DCGQQABoMNjM3NDIzMTgzODA1IgyWbYQivzJF7kCfX8sq3APrh91LFg6EEN4RHoSg2Qpgjq66z6Y%2FhClAgf5zkiVvAK5j3PibSPpJWB7nv%2B5r9%2Bh5UJ%2FBkG2z1l%2FjfWsHsd3YvJ6b5a64TtgRwgbx%2BbbnlEfvX2rSIoASsuJk1Yoqyi%2F%2BAq15h%2B0i19DHn84X%2BrVKUmbYx1N2c7McKZHGvAeW%2BN1K%2BRmWKpmokhICIbeyzhgP2sHwL6cH2ulORNHCEqaO%2BpZ890k3gWl%2B%2FSoUGxHUl0merTOn7SnTu8ghrIy6CEwvYAU4%2FxJwb8OIFsPCz5eWkYgHRro6V2cISnKsEUMmq3JaABLpwNTRm1LfnrTP%2FMn3lU570bobmuAV22ApA9gDVygjqUj8%2F8gQ3fTgnF8%2FqGoM05I2LdaUQFyfek6xaov%2BIztVgViJ4RoGgN4SjcdlVTwg9dZKyECtnxrEnfLzuB%2F%2BON%2FQZUtV1m7DVFh9QbdHaPljotS5NhYE%2Bo4Usg7pIVVblt0vrs0LWPDSHFF3VUwKsUfqrJjBj5r0hAsdzaEXT70jvNw%2B4pJWZkJdiqOXFz0Tv13jdPjTzumqF1uru8MOca6X1Uo8AXK3zErGIG0yxN2CyxqmoB5SCn36qMqFFTn29fULtlYMLG7jPslfh8E%2F95yN6n7VEU3kpDDEzcHCBjqkAVFzwFMRs68yqG7SGMjlkCOMinSr5Z6FEm4x2JSBoJC1gvc5fak9xwA8CsbtkYi9jqRtErorvUyYGFyvY89YEHabIyP6Xk8K6uzNIaOjipsjP5iYA1Tuhm%2BINDGA09KDFBu0HLCBfBng0Jtzr8oiTwCB5ASeS%2BMQlx5%2BQoHIz%2BowdcizWlGE0oYwDH46KkNk%2BcQMupRR%2FXeUOLYPiE3lWJpsqZex&X-Amz-Signature=49623a04a7197eab5395781f62c542338b4ace392fda5136eac8aec417bee752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
