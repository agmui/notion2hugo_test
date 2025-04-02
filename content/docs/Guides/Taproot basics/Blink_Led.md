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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKG7IEZX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDH%2FmPR9T4YsDlZUA4s8cZleogy84NilmSIYo6HSVKcAgIgHh2by32sXDenuKpc0ZaySRDYmo5ysHP5pT4dwIMujFAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyL9n1fDxbfDePXqCrcAw%2FTmC5MxSj9B%2FVn%2BNdM9flFJerEl%2F1aGZpo2OCzNVe%2FWWHayxa4GYCpej%2BW%2Bk8%2BwL6LaWkTIyWwsP%2BggSR%2FJRLWdSxbcE4uvHp2H5%2FcIP112f1CPfRJwkuyBAXO8UP6YUgMsJ54fgCNTgIQMkll8HZ%2FHta1SD9ClmkNld6Cc4RuswJhyNL9xkU7gSS%2BKcotW3FfM%2FmfLS3Atl4ueuOrmYXyBRvba0e1swOhfb1%2FBOIvj0n08a88uXRrd6ovjIU9IoiG1CZskvRQXm2UgqKfwBzS7jWYNiyjO3NWOAGB0vp3tfyx8yxwiac%2FC5ylt00QrT2vd%2F9KVPO9TEAlLBgGaD93A1sMTqXpMW6Uy3vWg4P9QXrSbSjOWFPRN2xjMsRiXSQ8HPOzQ%2B%2BRw3udlSqXgOeCNTQP%2BJxBP6WaNe6kkz86fq2uhpWc0n55UHXv9t9QxYN6Pq78LF5BlOGJ5PcT%2BCDuSK1kCDFQf2XsTIDpIKwhW91GCpLB0oNT16RmtvP7f2C3qRebs7hOz2KyBo1FMLqJNL%2BShxOHNNoeZI1tMWYG%2FmCm4gpICFEbWG9fDZgppxIGtc2WP1hr4D2wT07UHz79jMPHmSVEUuLB3nWN0Z5k1eDOAaWdx%2FIbHBzdMNy3sr8GOqUB0KoJxf%2F9J%2BSet6tA%2FKbXosoq2g%2BtzS2%2BXqg219vmI%2FP3%2BLsqRYAr8190j%2BmswPg1OB8FCUJfBLJo6d2Of0R9vBqr%2FZBY48FzZJ5XZHQGNL1LqBW6Etcz62r%2FJImlhNd8Y4EQpEHT%2BV0Iz66PFWIV8d%2FRw8FWOPvCp80nr%2BF%2F1L2K1bKAal67q3swMQf4qlijWiSklcOhJfwjVaFlBiD0S9mcqAdc&X-Amz-Signature=069322a92dd0e4a99e8a17054db93de4ff9bdc8a3eec5bc63a706845c3423c49&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTQROCXF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD6dysh219aPHaSXOT812cx7lzIk0S79UEiUpA7vkKWIAIgA%2BvkDvNmj7TYgnknsPQna3vURwXoIKGHCPhj1L94Q7cqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDuT5fVwgySNjy5gyrcA5Xl95W9NnL9yhsvNTlOWdvpa3gH17pnZ4%2BNfqjlQZkcnVCcXCJWbTL62kj0F7tT9c53TAqU6fnag0hzpxOpqGa4R5zcrN9ceJvcETalU2QIulEgSNSN8dOjm73p35V9NEkGGk%2BjQi%2FqUftz%2BSKRYGpWOSNUCnutDlbs23UJvQdICze%2Bg2d%2ByWo8PfrjacpWb08uoT10beDQ1CoW0839J5ntOb1GOqqCB2rHt03dBZu6SNQz%2FoUwVAl1UWEFKJ6xjZOg1qt7oT4Wxw%2Fx%2BoVSu5EgE6mfdlJMP%2F83BrZ3o64CWcGOgWr8LadyToblo%2Bkm%2BQa63TUaIDeclGfbepgkt%2Fw23PIlS73RHi7jY37tXSZOtp5Ka8qGDY4LxjcsYEySsrnB2ShFjLhd%2BkmAolRQS5WOti%2FT%2FQb1j4gPrkWAr3bPKmlPjOij7rve8Gi4D1%2BJNevOX0xW%2FJRVirl14ajy1ND16ayqtbvXLmZCXQZZMqc1eCq6oZ3VAp6TQKpsrS%2Fj3bGcwvxGUJrChagq0eXRsMVp0CNozuzYPnQ0zIzPup4GzKsLTwYrrRc6k83S1fCo6BLB7VZ%2F34ivxQ3iDCzOcdvqV2WFkD%2F%2BE8XjQST3HSAwgQ5CP5ctlT5xhptNMKG4sr8GOqUBUo0zPXqYFG9tJUhwdyvol2%2FQNlY0TuvRv5aqKZCuKXswuFH20x5O8c0u%2BSBUYzpWFjvb1uuzMx%2FKa3uFrdgrI2%2FvjmbJW%2F%2BcFs%2FR9YiYonm1HqBaPneQQ7YvamcX5B3Bplyj7b9%2Bw4mo725YiVn9%2BY06d2XtLXfiHhzZMLgXB2XOww27%2FowwfHfjfjpzj4DDJcTYxpPil8zZQHy4TZ%2FNzAF8cEfR&X-Amz-Signature=695750664666ed0ba35e9a578af96e69fe5fabd90cdab6fec489c55c6931b5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
