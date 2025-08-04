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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5HLDNU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAfhChPlOYx58qqab0YtOaWCUjdjFFy1eyaFjV%2FO42kmAiEAnqdt4W0X0PxlTO2zFxFXMrZzvEhLKUWPkQuwdtv1%2FO0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLIq4lFoyn985HFPbSrcA5HSC5QsnsqMtsoIhjbEhBJ3CMCGrVK5phLcfsHr1vsHlC2aFECCz16TbWxMkvxRfAdCco3TNSPGdVnH%2FWiZGhvQRv%2BtgoTC4NxQrh%2BKtMyBh2R8smzSUEvz2b9UR6FB60cakf%2B9jULTdTOiPNZEjuI0dnApIiBb3x7GH3UHgP3onToTStLdDRQa0wZTNveknU4Tu35U3AsV%2FT2SfVCTMEnczpNidGPm12i5LrJ6eSh3QI90PmJ3QF%2BBxoSWHuajQ7mDg0dNz9tXaqwpnkEDX%2BBtelJ1aQLiFZ0t7Dk%2F89LVrEF8igZfHGPpGMcqsosE8rYqmqpfZf2lfQg%2B7jDS2Am7y5r4%2FmxZu7A66cwgx7YNwYdcFj4DS%2Fvo3c710I0IzZUntTAnmNjvGexKwrAgzkG%2FY3t8Y8SbThGOw7R5jFmvrmeUjUqDMx7waCGI%2FFM5pTBWdoBsY0jZiiu%2FSImwwyFLjG5mNKFfuzU%2FTT7R3lkuW6uJNV8qvCpevxvd22euolN%2B1FCxyxZWOJb4FOLKcBKQj8xjzDYV7UFqpGFLjFSOqvwYzlBMTEy4moGflH2gkMswv7ori6%2B%2BDDcMfiknnlllt6PoofwTPQ%2F4KyaUcrkEHo1Inz6VbI9oMFdAMNCmwsQGOqUBdxbX8ANvrsE5mqpZ4GwIgPt9ekHBuut0Q1LLDNdygpyW8jg38pnRaJYc1USjw5vzKPO6iQdHXtHxIkMzF3zmFu0Vv7YMWPlntGN%2FsWvcJD2HomYh8FJnMihaEhvr4gCuXqRubt2nJqS91G%2BBSEC8LDwKXgKUXBvXRMpKLFpGQ1zW6R7k0P8OfesW2YE3TRIS8295Uk7%2Bc9B7C2iXJfW4HY6a%2B6xI&X-Amz-Signature=8ac870992e58af1d0cdd85032fe102528f64da16596d38ee2f27061f9938201d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTH2LJLH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFypqREU3jGT9joLs%2BQxvI5spdlD0rqrD2nic8gguDSpAiEA4YrnWKr8CQH5dldCi7W6%2FFt1NOeUVoeH7kLXXFsJT0Iq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPCXiEYNEzDELBs8iSrcA6D9AMkznnfJs6a1ITiNybvjQnIEsPZmiO3JN8mfgtrmfTOBBG5j26xCu18RWBq4w%2FUyc75fYtQFGW4etyI5by2zNDlJUGj1OlSUFxj45vrOfEyYYSv1pT%2BsjFm9CFGiyoDNV8FepKmyP1BbZlllsCQW4AhEbJknt6XWxtdkcpi8W50fQ4dDE1l2mG028fWs0EnHaL%2Fy84rLbF%2Bu%2BONs60ZCVY7OGbIxvHQun51XFwEA%2By073fMpet6kncHoaWk7yuzRoPXToIO0DfkKU8np7FnvdMNKyScXtsDM8DA5qtZ%2BKxC9Mamc1lNmFvNa3kpJ%2FX0eNvBI6yeGHjq%2B28UfSp%2FKx9WLb9XStu8njZrGqJgXb551OSHaRPv646%2Btp%2Fz8BehC0vLyCKGABil33rpEYw9uMiKig6sLznYpeIf2am3HP7v11DIHkCpi94luUSYluY7Y6BZic0U%2FEQliZfgv7UKr2xiM7Vno%2BUq%2B2g99aBfcwvIZFigOEdOv6fVdNvKADw1dIjSzTvoePRZ3OUQKnrv%2BUIKZPBdLO6Yg4L%2BP6ueFgzZ0XLw7qvqCnipSWLahuWV5U00vnzmufQx27RlgVa%2B7914TzoqxV1hxwpJHcBqbmyGJOL%2BsG31GruR7MPqmwsQGOqUBHHZM%2BSG0YT%2Fcr%2Bz24HzW7Ijv14NtNWENb9ArPE9F02COmq3C%2FMTOAwY34tQXEpFgoJwAQH0emiukpGqLrbJHaLj9NE5cU1nLWbR4UJ0tI%2Bz8fTCNxxEk6Tm2Om9vGQEto9czv0DBo37wBZVbCNOEFM%2FhKx%2FLUrHhYJZKT6SWVA2Jh9Co4WNY69iyBuFL%2FCY%2B8VaM1s47hyau6GWCmo4gxtBP53NX&X-Amz-Signature=1135ad6602cbcf028841dd71ff1d53ea5c897f53517ed1d0f855968b3f518b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
