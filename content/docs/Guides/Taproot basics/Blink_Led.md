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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667QIWM2Q%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7lq%2FemGlwtjJlVlF7heChRPvHrwvPdVX5PGsMVz35QgIgX1Vnsp3s96FQ9%2B0%2F9VjRPeQG7LmkOb04E4rkSnwxyekq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMPrUYawmi7%2Fm2cV7CrcA1noGvT7zlzCQIzRFbdUmeaCzV2jC5%2Bai2WCdv82S3FpNAjVdHVgZaXqCfLwLkeWXg6B4GlNonWuQiLasZmmzSFKTa%2B2zOIwLGLDfYOX%2FHDutJhgLvK9THTcl%2FguraZ%2FQT7dQHe3j89m4gZBVpBG74y3ejWdBW905egWA2I2MN8cGT3IWYnP4kGA2xZAyG24LxSUzCAgo9JPwXtpgVCm1JH7q4JRZdBQaYrMwEXiAtUlSjkHHBMLe054T%2FNuqF1b%2FWfFqmmYHA8qEFkGCASaW2uU%2FnPrKJ2Egwiut2qI4UZJoABvvg92%2FrRy6Vygb%2FApNbpnE33C2xHgS1krn5ZGVTfJ%2BVF28iWdS8D%2BK9Th9s3UbXCmLoHKBQaOlRKThqaMIxlqrDKB0D2TPrbbr1OtNrFdavCKQYfRsA9jKicUCJDeJsiyPoiqGGNhD7yKnVTnU%2FLZx28sa%2Fq3YO4hMZRrElVsVy%2FDUdlpEB%2FDEuNurKVt%2BZO2RFlPsG95NCJsKUp3dEY2yjKmt2oQbG0Ve0OVLecv1pCQsMCpPaCMVut4XuYpf4z%2BkhvMhdVTllOdTyjf2gLlTRObl%2Bdv7y3wio%2BGdGlRacyqH3Fk06ZO8wlRbJ0InjvTyOi2qEnRqzgpMIHsn74GOqUBlDblZi2Mr%2F996smcamoP8xN0WNScJE7r5Ir2KBMHNhhD9JoAErctxk3HWoHjaGYuAbtnIrF7MR4aHfG5ObjwgkJFS8qaIQ2Vg2DApSBgFURz%2BOKHLabvPMWXv%2Fycrw7wJHB8zN7OkbnqY9rHzVqL3%2F%2B7tQpRqoIO8IPRp0JflulvDD2awOMyiuCtOj%2FaiAu2qdL15HV%2Bx1lCWky%2FobVbqsOvVAUI&X-Amz-Signature=39db4e1bd61e83b5f18dd33869189c253aa25a89497bc62fdfd60a16d73379f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B475MZ3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTzOtng2n%2BmVBkS%2Bp60%2B2cy%2B02FPLDt9qk5E1IGjgERAiBnNiMMSYmlRrIDWWKBNriJAuH%2BzvJi9RVCcqpNO%2BMxDCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMO1hGoUN67qXaxnrkKtwDWN%2FSy0bi1cv2WqGewma9k4p3%2FOEmjZTp5yRSP437ovdxfVIjqX5MMjl7cBztiRm4F%2Bgt%2FRZzYh6H%2FBvu0jAXjrKTDI4cgB%2FJmeeYP4Rv2Uflz3W6ehVJJn1rRq3xhxFNvOFoRT7ZB99PX5BQC%2B7RPhOYr7T6DzLn9I9H23m7ivnkL2ROSVnh4OfTsOLFNT8xhTF%2FNnB5r1gqk4b2hwAdZf2%2BDWE89vujyLWj%2BFHHNrw7r2RS7RP1ySe%2BCcFxWld9BZefllrtZ9NPcsuSZCShNYizEuMbfLzTLJ4PA%2FwRdn2ADeAIsBu%2BZ7Cbh85VXZqOYbG3Mtx9IoshQAUwJYY3fH1uXyoHEv%2BOcDoebtNPs0MsoUG8IU7I%2BtMvW3WRbBv2ItuiIBme%2F1i%2BS6JROGVSujupJWNEK1qMERRX%2F5rIpZfNR%2BLo%2F88UALhkWKkJVpkL3eqoWlEpDlHfZ8vHu5%2Bs0L53B2aZ4KMvA8PKqNgQ1aq0fI%2Fp4KFcFKgMfvwTktW1Jz9eb40HEbJmxp1EG6EgL0oY6gd8Q%2FMnWoCTTfqxQqpU4QyZdFhpAY3r8IkR0BD3k96TgoPwescWLAZpmfiWy8Ke0h60Rf4t%2F06TVn7tnJH3qHrDDN5eOF5U024w%2B%2BmfvgY6pgHFUFJrOBDxwlYRxAoXc4%2FFA8wpcd9ZDOaQ9cQ%2F8IxcwfyqYfz2kw3T8GC%2F1aSkf3QU6exmhMnfmmnfctV%2F2YcC0GqahLkZ%2FvPSxZ2o5dMevd7pto8j9geWq%2BHdfprLH9NpVWSG1zYmzaHqqF%2FD8f2ysoUUYGWCc7uhta6VtC3obEqjyUdZcu5Es5s0GmdbtiVI1ohPdZ5vogB9rkdygb1%2FmuPIlmRh&X-Amz-Signature=8868535a8be3cd85d3b4902174a0fb101cc13f85a98f0b83fba923c6b6ff659c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
