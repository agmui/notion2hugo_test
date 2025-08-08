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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQ6YCOF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDoBeWOuMdvES9AsolP7Ha4oR5PF6ZbPJSuFsbE25id4QIgCLcFIth58Nb6CrvQvHjeVjns7LpyHXLxN9IdB%2BS%2B7VsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdKuI65SFxvcemyIyrcA%2BsR6YvYCSaeVB%2B4OFfgZxq%2BGil3rj2iejmiX%2Fe7GJMKGntkhJ2E%2FtsFhujxqipKaE%2F2XR6Y6tdW8NxS9cx1KxWUS2Mb1jimK5NUi1GYTOAAV2%2FkFh8niSYYSPXHATBqRRHlfgkP3WKN2bp3BviFdD4ZJe%2FLHFjZ%2FoGf0RvLxA8Rwk9UZvYKc4KuF1U6NTUGfIeTdJ7707Rx%2Bv%2BYT5T23v0DZjyPjc85yG%2FFVRmWx3zOqcMIaEAJ7WDxaGg7P0Pb1jFCBmT0UJG3JOGbgcZakirILUMshfmV9jIyE1vVkUvEqcZB7JXQLM2ZeTf04hY7ELkHv4FF28sAuRTy7FIJbo34AiwQRv3eltL8JflcBm8a7cAX6EzBrBtyTAMWz51NEQhjpSnXxPOmOvFZFjFdaojKFOUpKz2kwuhvzU3ho9YwvtGU4y9Cyakicy8ZLz%2FaGW40cK9Ts0gDJrEL51JJQQeJDWmqasQXdyUdATK%2BhDMGnslW0txC%2Bb5LpM2LmNm19x6vKRve2mnmJZrEPvXWQBuVAqi3Pc5OU0Spir%2BLNCjKdZMELQF8xX1vz489h6HS3%2F6mwwfuYH27M1ghayLdwKYSfD9cGFidqodYh6fHn5jn%2F8l2DXc84I50%2FmU4MI%2Fq2MQGOqUBw90%2FDIERSq7zEWfrQbyDQBoWpMZmeg2DK2qWVItH7IV0WUme5a517dYshQQOVGspgFk2MCN6%2BoAfaztBXFBW%2BV4gjuVbFDfuxcgoUPX8N6aSrKugBYHv%2FmA3vAEpb1M%2FxSBzIhu%2FEFJOeE9WjhAWE8gE7Ehq90kYgBU7CoXTjHeAkv1PVH8Zl1RRQ%2FbQTPDtYtP7DBH4yR8A%2FbaWi7pQir0b9qEl&X-Amz-Signature=6d7e79eedbd2adcfe6673496c06810ab91f17344308c57005249acda5b08b621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OZRXKMB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDrY%2F2mVradcBcr0ub4DHloWngO4Cj6zathOmXdfd0XYwIgT6qHm50ck%2F%2FokfnXHsO6KvIHZ8KSbQN1iSD5igrHZ74qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOvT61XkHFgfpfN4yrcA%2FMahKqn%2FpY2HWBF8vZUf8ejoC%2FA%2Foomy0qwN%2B5G9ebs0B7AYUCwt%2BtbDtv3DERm8eXkFUdoKopqmXuf8z71CZSMyhxbGGqrbhTcICj3twl6h7QyhVFzuz4oJp2YCgiQ4begxuIBUrKsVWxQ2WZT3%2BQN195VOXSwsU%2FkEq99pHlq%2FeelyDbuenNuAejLmCmHWYUE3qWyLKPo4MHwAiZEXSGSjixn%2Begxr6dynR3TaYIPIdVSTZZFgwXYFz8oegzVdyvKczrv6DFH68dec1pfpOLejwfrUlh7YDDyvDGR22xO7ae6s8G1cr7O1pH4hgt31E3ZwGwiWPypag%2FUizlT2tItrV%2Bzix7FigOiMG9TKCpLUVRqi13axGKk0L00s%2Bqag2EI4RTolrXDw8fqcmXCEE4KZWcgzTyE%2B7MhZRaRdlEuM4vLePhn0kmg9r%2FqpWPmdcGQwzEZZQ3H24hniruWLc36kpD6AW%2B%2FTeIzSZUEVw9J%2FRLFLIMBuOixZiLEN5wlizkRbJYmcYX2gYMhcrizjssi%2FRDwJJYqqFsJMMN0g%2BXWadYUndLEOimoZ3A1NW78%2BOI%2FyM25hK%2F165rXSaAyz0e%2F4g5KUxWMZI80Pk8lVEtZPavOz2Cm44Fx9EjGMMzq2MQGOqUBatJlYCBFpYQTsasVveHm4iDrIYj1kIt26YwxDAzC%2FE5lWQlW79mkpTJijjvkcITFM8eivv6DT1UQRx%2BCLoZNFq04C2ArlKpScaRMKVldFczBy9wiSD%2Fj%2FRGs%2BcHZVSX%2FUuxz9VewrivuPoLbock9Zn0DTFKBfCrZ%2BqHdCAu0qrwrCJozo0ZaWpwqXJnQlAIlVcj5jOJNTgrIWCuy%2BCOt%2B%2FFKsBWk&X-Amz-Signature=0e66689a47c284cf1c5906340254be3065be9e280768852432cab36128e1dbfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
