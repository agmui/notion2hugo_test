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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JWDNOER%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCv0VPmiMwjyVGTjnSZ%2Bl0%2F2VgO8N%2FYRXHhsUoarxW%2BhgIhAIqKkbHZiRwHNkFEOrhwe1Hj5DYVY5VVoqflcLjJhslIKv8DCFkQABoMNjM3NDIzMTgzODA1IgyExA30cUViGbPHugEq3AOXcEBDMZe2kCXblIn8qqWsf%2BE7RMiQSVmQnLR%2FKSC50j%2BYvKFvkNNSami0ltxWOkBiqJKxWa5mZGlZM1rVqGlX6Sp0bYDd8GKPipE5aSbPZb3VcinekTAd2%2F%2FowammuWqcSUJ6gkw8JvX8h4ga%2BldpNLkD0ANqs4LFJG5yqscu1TaXEuWPiRQLs%2Bns9IJmJrkWtI%2BQJwSNUUZZD3BndupNcp0HdQ3BCqfFh1nQF27nzFIstWP0mrhoKGGEA2oYYZmOTyUdw5NQKNmv8fzfyo1b6Zfwi2RgSwSz81k6NF4QHWcyBM%2BWxOCT0GfLjFw7CNx%2BEgqk4%2FQx2n15NMZJpJHh%2BGmOm8V7J8%2FatNRcZsnu87I9FwN1aC6ue6e6vrUUZdydIq%2B53m1xN%2Bxj8X%2F3OHAfxg7Coiv6fBq6H6h72%2FfC%2B5h4r06NZuGsrIfe9ddOvuZ6KMt%2Fh5zMtZSZ6OikuAVFpcSoU8K%2F1j53mE%2FRdpRnHVEeW2Ws1T9crn8lTcN0g9s9awrl48sM8%2FcMywpp%2BLMFQCVO8bIZ4tMK%2FMSWBIzcRLaVAY9qiRRdCLUb1UnSJTlGserl5WC5qZmqFMk%2B42E13bzqTiqQ%2F1HhjQ1wJIlkpVkje4sKMhvFC3yjejCz4K%2B%2BBjqkAcL32da2ZBrJGYsE%2FUKPUIU2V6e5b9a%2BG0ohKx7bN6aDyowe9EQFoBYdD26u%2BvRnWa2Q5S70PwYpAyAPzUx6kXR%2FaX7MvuBbBqNP4Kr9qQ1VB4wRShYfu%2BzhHn2bPgiu6a%2F4g8uHlL6N6e3IYNC6rI5ftWgl7kqgFurc4rCl7IiIBaPmMm69apgofxNscTdwQfOwE9WzCSzACt%2B79fVuTkMY0F1r&X-Amz-Signature=05f1456037b40cc34e23566eb1fbf3961099dff92da7672d47750d7e37c9541c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBYRGQF%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDzaZ3JCNRuZv3WoS3otRAz7BUulRDXwRZjO5ziUPdQEAiEAyx8Lk5elb2olU8LdC4Y2iYonR3i9%2BurTgvAhDtRhbqAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG2rRSmNNSyevPWttSrcA7UInbJKf%2FfOqzOdOU3Q5Ylu0Q63hraSi6ZYOvjdvMBdnpxBGxv%2Ba3q4pOZpudOu6fGUe0Iif1BAkCKm7ryQAVObiE%2BLATP8t0wkY33BSOYyKu1C63PxpMPVlDrGpMVcQurFQp5uVNuFIcJCv5OMzmoJeXBHxjVtDh%2FVoKM1GYQixOoyr%2B4We4DhVo3LR7fVgTJl4dhiKa2yL%2Bv6Wv9UUKEwmmJR8jj5e8WgA%2FtfCMhmjk%2FmyVlwijtLNrHi6t6NFai1R2oZn4c8nSUtyYW%2BUBTlHDsTke6V6%2BX%2F6JRkMNfCHm7b3CFpAOwDNEVSc0bECnXSdaqRqj%2BNo3G63dEbbkb8LS7awopu02G1WSR5yfuwXNDIZKrXPfAA9ulRP5uRVsiYRtydOSDjErkjg5rlhfyjNOePsmrXHbosLu%2BsEy7Tzb6sq2Lct2L618ZvYWb2R7j%2FXpRYvTCuFeGg9fpoP9dzHo6XC2iYgqg3GLkejlTRgU2MVvwHwnnggMZpvDxhryAKIkFCCLPzEba6eZQQl7Z8kFD%2B4khcYQmHEG%2Bc3Fc3p3xGpi%2Bl8KmiUGZU0StXpeGv%2FicZSGsJnzWqXHQbscMqlriY06faIa6BZ1nIg7pVRrIHL4mvaKGfRrYdMNvgr74GOqUBxZloVtjMQKivHOuQxPEtnXs1S4U4DvcHwx27A9AjG6IeweElCAiPuJp5Giis9aJXvp%2BYAow%2BE8UeC1AUuOg9uGERtvX3GRRSVkiQZyzyX7BxsPx%2FUdVFfxb076JuhmBM%2FoAzZp2Wx0u29riWuEFfv%2B0NZ37Jnxu4pMEzhfVJwLoqrhw5St3YNO9JUvgEsp%2Bs%2Fgnu5DMe%2BxKWcY2kZGmKnk6mae9n&X-Amz-Signature=63c24bdc96eae893cac24537488116af78eac181c39819addacd54f7a32205f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
