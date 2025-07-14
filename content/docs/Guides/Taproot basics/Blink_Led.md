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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NX2JRF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCL%2Bj6HKYmWzHfjioIwavWGSDxOCop4Wg2wvj3Et9j6dgIgaV%2Baz%2BMMxr6jqox1EA8ztYPRH7IzkXVR3nchqEZw3Goq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKFokJx9tg8mruevKircAzd%2Bx42bvH6%2BsjPtwzq6GM2RYjWbscsfQHGDyBWnKG21qsOfjRiQ%2F0zRCMJK6zxYwUKP8qL6zxYhKu6q4Ch7hwry%2Fe8gbqi9yqEB4g%2BADTkgLOvm2uRoEYlJ4QfrTmq3g%2FaxM6gZyQoBnkqrXWIsDKKH%2B48BS0lKLkLgtdC0QyS41oCamSv0RD%2FK9D9%2FlKqyiiYWc1qUTvwReBVhKs52jnF0fiu8DOCs%2F9YgkdLTVmfnpw6s0FFzSA%2BhBa1qYl9j1qhq%2FNlXV55FSKsHmp%2B%2Bd55bpJ5zS04G4cKuDZBy8WYK%2Ba%2FS6Q7UsmUfNviQYr%2BvGGKbU2G72Px8wUcgnke4b82Y6Zizms3t5Rx89QyGyEnpwhvs29YSAFooK2OppuVRlnAjaepxRva8ojgrIrnv39pZwltZpnVWMSqD53%2Fa%2BHjop%2BgDijByfRCrqYVWoZMBPTy4aYX8D4v8CVzFY8IA3JD4eDtZSMFytbO66ARWupf1fUJR3YGKjAWEr9UEiH6FJNotZPruOralSwzjWClLkLo8NpbUsraiTegBuDqR3j%2Bl504JwoopQsYRloYuNEp85WddjSaKsdGWCxjVdAricrB%2B4L4c7s6kXLD6xkGk4XiX71ncu0idFP5HkDd5MMOi0cMGOqUBnYiNqLeIutSXP21Jj%2F%2F3GAXD0vzwDbM0NXFrgYbvFHJKvcfVCvjMM6jIaWdscymSh4MDuAQ0uKILvoJVurClHrCnusgCXvi0e6hH2Ed8D3I%2BgddPXkToI7fTV8kIV7IXlkPnOBZlRmpcg0tN7k9M7Hbk9%2BfhndehtmbXsVQIie02usGL7LXY%2Fv87Vc%2F%2BxK9OG8hQ%2Bl0ANMXnffJg%2FJ7%2F3UVva228&X-Amz-Signature=277e38f244a773f565eda98041bcde58a84a3fca722e5321dc9ab5bfc3f53c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ZYISD7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC9EE7oVyZV1hW5p0cBJx2Om0VVKJ1fY%2Bz%2FKp9F444jXwIgGVGZJcfInGoFd92OFdNBHomvw0zXPe1aPOdDWAx3LiUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJvUHKo4Exruv6R7nCrcAzdD5%2FRgxkp5qumb225WR7w5J1WIn4MvDLLb%2FJ4tcqIJBHkJ6QPy0Jz33X5%2BX3hEjjjcuyYX%2F%2F%2BR1liWQ0jqn58t7QX3DPnT1rzH4SWIUPgCxtEguHaQ8Fb3JPXzHdu65cgQyKwza3mT79BD255pjTO%2FGY%2FvyJezhPZI4Zfxq63pXq7%2BGnXgEto3n5gV9CgvI9Ik1uLIuv%2BOvJJI1Nb1s%2BKSPcQAvh0hfFP8SkkSkc7rONAlSAuEf8SJ9Q3QQ%2FYLAIpvEgfWx4NLQmg3XWbjcWwCljB52Y1Ly%2FoOMTlYE%2FlHbF72%2BB3Aw2F%2BntUEY4ONQ7qsXb16ZrvLtZzgbbQSFDV%2FDYiY0LDtzhnLkQ9WbRC9QR3uhUgRxXgaiOIIuETPH2Tv06nm3rz1EDHc4JZz2%2F1UPwxBIOPvRIaT0IkeZzS127EyGEl0628DAc2UC3lgYDQjovCNpvXgE08sUf21auUQY%2BD1JviZNMSeJ16zao6xcszN%2FeNx2dQ2m92ePTIRna0Rhkv%2F1i1%2BXV4cvtu58E7Uk6C%2BP%2Fy%2Bve4nhp9qqDkHAVbqFzTQ00TD0pSZ1dwpSd%2BkBISVTkBeSrnq%2BPy4vKxowIR4898L%2Fq6Bz%2BEdsDTDvuleNKogyHYTXgr%2BML%2Bj0cMGOqUBB5ESSca6jhm0TZUH6mO7hOqB%2F7hLU3aSI%2BfTjAEEKbY%2B%2FyIfWXtZ5jyMAzRAGGkP5WFh96ptuhwElcAEzeHTYnCXioNroh0GxNlOpNTIyc7l2flkwZeluSMRI2xx1ECoHzFS3oEgojmumv1PIlywExjDa4NnLSOyYaTnIWYD6%2Bd9Z002h80hBS2goXT4zMivoUCQ5Ko0nmkb%2BbFVF8ie%2Fhu%2Bkmcg&X-Amz-Signature=cd27550570de1c4b78e355a63140b836ea9709d3dfbe335e263a05dd45527cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
