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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIVWAMZ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDpOeg%2BuMGzqVt8AtY%2F4F2vMchBvKH9ieCcAt5JoTEXyAIgI4C%2FEmjQTSoReaRqS%2FL15eeL7TSn6kvLhReXcNKTThoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrwBUCD6DkCTmWU1CrcA3RRIqIXw9xMGfrvrDx0yOmIunSsoZvGDPnt55Y9v4c%2F%2FLunMwUzb8odloy13ErLMRc07DloCmPgjkP%2BVCIAd86Y22qaPcuiYoYDV25gNhaGFyifTnHF6P8BG1sXXX2ybDtrAG%2F9ri0t6eCxpuuVB73UWY6XB5PfEITF3NfLojVRblEzlYc8Nwrvkg%2FmPvXRC7W4sUrzvvyAUrW7a1Aul8zmPtWRO%2BIT8V6DGbg1sH%2Fvqd8dslQNAousxKnGacc7B%2BQPs4oYLPqzHd8DTrI4ex3qqtpT9qEfFETXr%2FJoiCOfK0QKvAgnmuDr8SbGvbwcj4J531Dx73YHvI%2Bh2rD47lgcftRShmIUokF1WNw8p%2BXM%2B7%2BxwAt49MedG3YpifJNUM0sAmu3r4TwrEyQkgn2a2utjzj7qHsQ%2BFl8PJPmcMks951XLw5AlE0Ugk9mwWZfulyXRojlu9ykA%2Fb6oHk8%2FX74YWzezhDXW49OsK%2FHiZL67AQro2dgMU3SBLYQNcCAPaugWWp54My9sOicDYFfkVlW%2FgYQKNaW4c3zZzqYkm5qvn0ZpMv5AobMHz7XdowAKDy3dWkqeBVJM3jbIrJUR9EShZEP1AdDSzc1%2BYYg3YafvqLEG8WgHKJs437vMPn2usEGOqUBm2S7dA0SJfFFYjboTdbPX23jDFu0S1e9CzPgIiTaY5XEy%2FfK7UZ05ee5oL2ULx%2BcdBn8yhyxEGGB5U3c%2BulQbudYoVYbsjYD21Chq1sW7b4JbOsMmqAeUnuP9nMJ2e6HHZYQkExuJ6YX5Xgj%2FfBNig6KL2ikG%2BZT4JnqMO3GykB%2BbW5denqFc6MszldMbCaOhajb0hq5YQPd3DUymxfTAUNK0q4Q&X-Amz-Signature=972893a2edd68de5ccb996d3cb71bb8ba6d68078a94e3ab8e5331c3ea7c8bde2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662FYG5EH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIG07osYRikATJQT2x8xYqx2tEMgky9Y2RO%2B0DGFxBLQ%2BAiEAv2h9qvC%2BkwlN5N1Bs8S6q472nD%2BHFkk54czS1R9IAucqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsZ7%2FDHfgw%2B3XDyKCrcA%2FTEjgryy6nk9%2BsYEhEBBJ34cS2HR8MnfFKqdXomGuz6g50ZYQNdoIN%2BGQ9XMlEl2nt0TJIhVwq3gDjUIIqwJ%2FPw6Qsr5s7u4MJRUcmavQbnM8Iizixuz0iP6PB25vF%2BiOjGXGGCP5wOxYdFu2Y76Fjl9WY5u1nulHYnHBpcnD2rIzHHdOWdBm%2FPCsfb7US5q9FAGUqBVOfRk5l9L%2FfcP7pJsGL5w%2BigLJPJF%2FfMcKtMVUVaVReaksh%2FE6fouJn57PQq84DuaIsB7xzZbirWDKejZK3Jgq7%2FRLcuTHUFctpyG7q4jdz7wOdtCWyk%2F97JaeTiXa51OFhwixxJCkCYvVcI6hj9tuY7OUr4FVoC6mkMyWEjiKheY7ePbGYG%2BoB2nEJ%2FXQH8xCbHXBGya0kxNnLZBSnqVk5y3eEOOCSrQh5M9Z%2BU2m1joeAKhA8CqpCLvbdYhiWVa6x0Zzgx%2B7RbFRP00rSzztiw3zigbaiFXAIFbV9brcLXjcUSUYt%2Fkonwvz%2FaDQ88WsIx2YrWLYnO8MHhU1Nv8tQfbkON226QOn6BPtAuw4liQ972520dCOqqNbCzpBm9W9gzzOrBmk28lJxYbBofEDo8d384t49MJpuC%2Bh2lZzeZgznf7JLcMMf3usEGOqUBUiD4A5q2sNvtzHel8NnRcekmGxfw6FM%2B0N3qMlAUlx27SU5jGyvlkONjbfHz9Gggc717MZ0lPVPK5kpt1Mbgbe5HqZjc8rze2ADuxiccWWF2V4RKG%2FcuV5dkCDvNcgJAJO56RfHYAzFA1%2Bg0mgCn31yvqB2CMdzHhxI5OeLiRE%2FX0EWWskQDJ1H2Ju2aZqCJpw57GAi%2F31AA%2BmYAd0rvGX0rBvWf&X-Amz-Signature=51b23f1867926c590b212c18912e0f4a28cee7fb7a8990bd8a6a5de497df1dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
