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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAVXNXWG%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDAFrZcqJSJP4PFyIbYZjG9r5Jj%2FHj403FO68%2FSV3BPsQIgP9N1k5NPFsvV5iXJ%2BeFhkFGNocgtZGTTIu7RaKl391MqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvLjtOFi5WWyg8wwSrcA1QB4FAufFgvBsV%2F2ZTAi1iEtCErVt45sjOHS44x7MHTYT0tr%2BsRbF%2B0DOscEi1OJw5sxPSuh5f%2BhHBI%2F1kKlIDmKvtdY%2Fo81D7dK0j1OcZX7QHmhriBM7CqobGSpvKOIL2V2IwIbI%2BazHcQBIXOAUjcPz39Fn6Ij%2F0xc72qbrRfoKsnRqKLgYn%2F5fzQILmQ0MqeBbpP0n09q4T7hppdpEq4WOoTrbJDYbRf3nygkFjNMzyQaFliUAOmzKrNog68SZ8I10oRBuu2yDtN1sVEi3LGJXn1z9IAuL%2BQoyodSs0gJZ4hVkBlC60faJvHH3IgXVhCB%2FsbxVpgDCWBgWsPb453eEfJfYGUlektCajaAFfze0DaDYqa3cgp5sbwHGaV3gyp3ySk7roksSAfbYxnKZb9Mz7JE%2BjfSLmf8%2FrB%2FTD0sho%2BupBNz000UNgT7Q%2FHty11azKCVnH5%2B8F7j2MpJyL8dgu6RPKTAkXwBGw40cTgbO%2FZjqmtpdO1Cqk%2FD23lyeMLZkbl6WJLGcHt%2F9AOjA3t%2BLH4rIAOPqdbXktVQjp2MSTmAdE6tYeEUZGOKWkcYFfVLaoUBX1QANWB6DD30XSFfmiMvzE3dDWKejBUu5cOwrCoYy8VqDxhAr%2FjMJCJnMAGOqUBMymoAWNc7lkMb3FGlsknFA7PQndeKYX35Rzeim%2BvyFuZZ2hICY8Z0%2B9dhETchvlJmxx3yW45CqpvYVt10QJtd2z8Sw4VrUsftEhH6b%2FO2QDszssxZQQEA5YCUJmMH2e%2BP7loF2SaTfUhPBea7TYZ1SED92DYNur2Z2o4lEkik6dMAgs2st2WigbwN71wO4WCySkyJgmPGZIlb7oXVEFiMylnxuPJ&X-Amz-Signature=b8b625b25352b3cc8e87c14e41e0242e80f71bcf02ca336aab2afcbac9bffadd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CX32ID2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCSvDhBmaCHrsDi5wiOdntIkuDCM%2Bphg1OT1LjWsCVElAIgEKotCJyATBeD4DW1tWZ8y4sJFIJkMD8o%2F0iqlNIX5goqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkrcePTUa%2FkVK1UmCrcA33RfSWwQfKk1%2FK%2FmntgFKGtgoE8hZnOjz%2B7lbI7WxwN6ociV5HqqvEO%2F2gh8mgCHy5XpeLbDtKPqPORM7gB14mbeMOmOx7lIgoP60nTFwLnQAOtMq6%2B6RO5Yk8IzMT%2FIh9sU9xMSBHsdhp9eilAWlzni5m1AmThqaqha9oe%2B25BmoGQbOkINa8%2B4SN0igWgPAMQsTsAGHFbdvrsTgE80sq%2BfdGzXKFjfbkQfbinFxFmzkytHosVOdyknZ6KIeRF%2BmkIq1pt4z%2FOpluWhvRmtyX6pvh5FfrxnvXNTsxLQImNKg2caN7DQUyJadpDdqjlZT4KspL6%2FkDKNYLZjHhyvfMC46RGIok%2FAPv8519aVCd7tHjYqQryrYVJT2fFgYBC6ns9sA%2BRrOBcX90MZXDx7LIC83Ef6lPeagBTdJdjpaLnABG24poljrqj31oqVAiTIAeTbfiKoDC7b59cFvUfBd6WzvqNDRTDjduFYecAGX7Z89fmUvuJJrA474O1TR997G5gjSDRWZBRZlkZMUuuQAqIBtPWEbAtQ3frd4MKfalHJvM4YarqmoWZfdn53xKMm1z3UPKcN0kpsVzR3XmXF%2FxCMOE75jXYjtxXF7ijxtBYBwzNYCo4P2n6cgQ6MJmJnMAGOqUB4fwoxZg%2Fl4%2Biyziql87e8CB5m6cW3VrI3kyO16OChorECDB5%2BbmGLpAQScptYw6lHAmEFhEgeiuX1mOV82JSuXdlQQO7CzA8ZD%2Fq4qQvlqAsGCudNSdJkPEyUmtUTuT4HNgHMY4jkt9gyfpq%2BpVln2kZa4B9EQ8Aag9el%2Fw6b6pVZufe5%2FF0MR7JKYzA15oTCVfTJiKN8X9BjNjdS4SREgZ00Gc5&X-Amz-Signature=d217845361639a5be3bd33d1d8d5a551f7562d7fdb7779773fb08174d23e78fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
