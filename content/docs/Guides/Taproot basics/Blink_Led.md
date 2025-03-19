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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBLIXYF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCM90TJud5gmBGBtsahZlqGgePpfeXFp7uyECt5sxTI%2FgIhAO1cDqI2dRZTZBZumrEHG02VUKxrHUPKrx1glMdyrfrxKv8DCGsQABoMNjM3NDIzMTgzODA1IgxZEI37qz1lm4%2F3T1kq3AN4QdjXHrekEp7LdjNLZ51OQCdOqAi9SREp07v%2Be%2Fb2GoK28Ci5dla%2FpWGLeNM7boj0Mh0FBrPhVJLvGFt5X%2FMxDpH5GXSMcvgDFYn%2FgE5JRFmNuK1KkLxr1%2FwL8et%2BGq1Lx281jN%2FFFpYdsrfHzymqIR%2Fb2r4jqarLPPgsXZNj0QuG6BSda3xcl41hrQhylIW%2Fi4fJiZDwk3fBFgZ583siev5FfnQcw5HDoKoceSRo6gzNtRBlxhdjYSfjAEdvhCV7sRiKKvRk1N%2FjrATGtwNoqugrsb09sOfqXu2Dh1aF2TskYItVjjB9obGtYCMWkX1Wl0zcT6wDsi4r3anou14kulb52RXRtgoKQ21hmzSywnB5ukqV8qamRwS%2BxNgc8QjTUFAHawDfKqjW904aM1LQzG3z9x%2Bq6O6Q5gcWRAdV8TikV5RElHLIEn74MfA8NUeiMHExSO2RCXY4loD5Y%2BF0w11qFLubsuBe7IjviHXVqKY1lYQoA9iUhkyHc1c3rC0R%2F7WvZcMXxMZpADkSTNJfSJGwhhazEOjxHGJc03gLFYNi22%2FHJmV9eY0JCMqt3uVFHE9j4fah8U18uihEm%2FPoBr%2F66WeUqVDuoSCVBixK2DVO9E1Xz0p5GTjrFTCmvei%2BBjqkAQY8RlLa%2BkcNcIIAyS0Xjkw05AIfQlPNXg58HaTqFLCU6FIWi1ljQthyB30fl3PZlmSF0r7rsEp1rO%2B8QD2b5cft6uILVFFl8G5UcSV4F1TIV1OG5FEeOTTwIiVcMnSHkkYBjlMVLnT%2Bbr98XpzGuQInD%2BKoqWrz8ukTicoRDQjo742rKDcf7OXwb4m6F2xdabtxe0YHiHIGul6NuD1qne01zntu&X-Amz-Signature=33b0a5680927b2f11444e41d5c1346125fc0f425dcedbecb337d7dba53e5637a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635R2RYCH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDRCaRiB4qpqGauJOi6jFWpVT%2BAmlX5QChupqEXNXKcVQIhANCWw8xvEd1WRWp6ePeSqO8vqjuMk5Hd7Zshcwd0cjaoKv8DCGsQABoMNjM3NDIzMTgzODA1IgwZmUCBhFR6iNqs4NUq3APiiF3xKjeIO0u6wScBOMpf1o%2FMaT9ND%2FumcQLa5XeCbwUUNvCwlskOlvqNx6ROB%2FvmT02Cg9yxzRi4ALDo%2Fd008vf9v6BcdrfSxfmT3lrEShze%2FTNpT6O0jQQENKz6YH8my9iLXQj3CIOuthP6hUXnDYZF%2FR680ntXglDiuoFO7zuqTUH3eFh%2Fga%2FqtS8mPmpJc78t7f57RlMgyQB64bsbIk69AX1HjgqOZUYVMeGh1M8HEmOYK6LCKPHVoMULChkLUatZI0KZuPyjf4zErSLoxGTa3w9muh%2BriZ44hxgSkIMIY8JTHcHQl6jRyYUi%2B7YzMFslwZ4MzslY%2F%2BCAa70j6JDdQgrmngBkNccew815R9cZN9XURWTNauP5te1SpZHd6j%2Fn%2FDauU5IOSOHYaAyQ795%2FunaElmFl4oqO2Yj1EX35YphKw3z6tWNnHKRNF4GOGb1JwsyD%2FEB%2F%2FyoYOfPbOnfNOnvvzCRMjfiSgSs7Y3qMn8ymXA4ZHmKjnH4PIhSA%2BB3fJoyVRFDRuBDrZ3m8qN4EpHjiQZSbtIW8H6Rke%2F4EfirENlfiobrAUwFYivF5EYAquInXVVOwS8uHINDMrgxodHiNp9z0hil05%2BlAtfQ4f40uCYOQyooJyTCwvei%2BBjqkAdZc2WTwNiadItmSBdLFhRN9oq%2Bj%2FWOvlJsoKN4x94S85GjsTc7eDpgln4jWyhZkFs%2By1czFwxNfMIUwYAgg3c37w4d1EwMYlXKjEinbwfqBlB48db6FOhR%2BMGtyO0omB2%2FUYUP3SEissw2LHzEnRdJGoUswzFPHdukjJQBlJCl5DMdpa8Tz1azroxixNdvq3THW0sCajpr%2B87kxnQic%2BfSxNcGw&X-Amz-Signature=8e8d3a45f774db67c1e262afeb8f5ae112eb7f002c29d5a8395502d7df5a72cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
