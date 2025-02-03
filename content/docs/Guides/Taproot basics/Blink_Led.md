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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQC7KWPY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5teeI0jjH26x9UWN9YQkdFlOu27bKUicOhdg2dKFXrAiEA6wINfvOYgQeJKAtzI0GqZrWywQo42HVQcjx7rFO1ezsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfOKRh2x1CCf1TF9CrcA49cuBVUmutVerMMIowtfyIT4Rka5PowK3qKbjubzsHIvUBT7NoyoNno8VdLkDMLJxJJfSIYHT6UF%2BmWyXalK%2BDcNmUD3MVCkWWpgDvSUAI7fxz9hAFZGe4Nw03ETOlMgD7vnJLB3Ak3QNv%2BAIJPIuKV4wrgfgFZeVHRarPBCaJEOHIkeASKoZTYbYlnC3LKWuALoBvjCKhWd0%2FKVWpPLKZ98q8tUTvy30HSjyPkrtHLTifNGptwHralPWQT61lCXy1sjN4CbixbqsQNcFQjwi3ZTBngd%2FraxLepGyCWj%2BWk3LrXTEHLD8FVOuxHUVhM1BOw8I9GUSIlfFAsLhttbHr188FgnN7oo1bdwOQQOD73KrDNTSxEAUwxPOPwgf2GaPBKs71hI1%2Fc7i5nHaGMtEUL7kvm%2B4xJCfwFSwYYvwd09CbO2syVw9L3ny%2FNdxYqG2WmTD4bCyya8LPU3g5xAto4f15eIh%2FFjNt9KcxhDWvCtXzI676TYxjHzBrgSrQG6%2F0XV1M%2ByEK9Ak2Ognna8vs80RCDFMMyQ0odiPUKmTTIK1CtiXSJY8uwuAN%2BVas2jUfRt09kGJmKd5MnKGm1Tb4FieubQM0ny0o2qeddJIyqgsM6c78QXsS0bJRGMLTAgL0GOqUBQzGNOJPikCO7zgxKAclAexSk4%2FbX%2BEMwIYcZ8joh%2F7YgSxIHHOruqcurKkw%2Bb5CUl6UjFZ3ygwAEF%2BJjaNCldYVAFpNwbfyeO4Zb5%2FjSshB%2Ftv768KKWNnojJ9iInl5phAhDLN7OKKkUdv6pjHFaBLd7Ok23ttlcVdAZcmkOio5yq%2BRwqdnEd%2B84vVPDL%2BQRgAy26iEo9%2F%2FLBKyccmBGEWmkOcis&X-Amz-Signature=86bd5f096a4d90f0a92515f768c296dbd7a07a0785a60ca94e5a87afa62377af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBNT2HD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuWdjwdKnX10yWcbgV%2Fz0vRUbOhYzK44BNJdf0HsYU9QIgdTTtf4eIn5L57U9t5kvokEO1CuiZtyr7yEkAtboGNDkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI8OzIduo2z%2Fi5BlSrcA6QxzpPeOwPL%2FUCUwEtn%2BjjSd7kM5FLOkRDrypgdMwcBlHhpEGORSkhn6T9dPjUL7XQa8bEvyjMhgjgLzFJ03XOLcgJf9ABy%2Bp0nWNh8u07Kht3Nmfnj9VsFKUTd6rbZAHpfRxuALeVL2ag8fYFKx7R5t8rUw%2Baw%2Fh%2FccwSp6FScBEmoJfMRv7iPAunV0p8gLmSEoS64%2BJHa3cZY4lmduV6gfPvRbsKqH6ylx%2FvAeCfrxu4TITCqcOrjWTq99jwyVYER3cablpT0dDuJB8B1EbGlZ36bR9OELNg1XPTX0vHAYOH2Hifi%2FwhkRbMKRWrBxvDXjhqu5FZ%2FN7lefsAfHvyZen7h8LPeXHMWsaWmY4APo8suecqJh%2B5WIwlT9eL7UubnBlmNe6A5KWBJvY3M4EfT3WOysRY3WUrxlJTpfABWBlllAbpBT%2BF99AHo%2B6afZ8ef9WlK%2BIAtEMbMWwsz31mo9jaJC8EDomeeSSRfvFiXVLUPA098OrPHu0CZgeapNCxgtJxXLVS3U%2FpQLrDfgxBALq5QKxxJ2HiQZzkdGXu7QxojP%2Fq7UJRtPkwP%2FmYGaO5ww4JSW95PTbbKPLTj%2FlNtBoR%2FJnVUZiqy0FpA7fk9TCmjaotp246jFLKoMNPAgL0GOqUBa5M10Th0jWvY0hI1bblxTGQgBKTssXptXEpr%2BLyCCQ8tKy808kn2Xy717Y720XE%2Fn698E1SUHWB2%2BR62k33ZHy4h01O52DDrCcX7Y43b786FtKZrK6%2BWWRkGXizOdFq9OBYL1HXaY3aTf2XIa4aqA7iRXL38QYwEWa6jhld33unHOcce4KdGaSRGE0bxTxF0O7C9rb33amwFSA1LX0jTyWKqXqiX&X-Amz-Signature=0dba8d19434120959a69362a1e75b5c7157205c64a87df0537097e0e8d5b4710&X-Amz-SignedHeaders=host&x-id=GetObject)

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
