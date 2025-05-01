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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDS6433%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQD47OlFBqkMkoOwB%2BNgU28jRr0grCOxkFzA7OCcXBnUqAIhAKYUb1fQsMPniTPcAOhWG1V0H8lCJA3vq8JJl%2BQ99k6qKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FFLPeny2wR7uzJB0q3AOsI8B0gc%2Bqytgp3P8%2FkONneP1TSgFUGi40K245neCGq5v7IHMxeTNLaA3eFwC2MdRr9AGTk0p4Ec6V%2FZ%2BDkk7cTcaZWPDRH1jWzS7maze2ow3TP%2BUwGTX7rvaR%2BMZogqfGF9J%2BrQP0pSkYhYMdmomsB%2BQLMO4LYLT8LROeNKeCy9MHSXjvGOzjA2HvXBqcNGd50WydtAQXLhQprKo9rSsMjrFNRhlKBBAJk3xqHKZWyjbCLasQ8eeJbdh7MhiOUmwjHM%2BsA53bSRYOYH3lqUQFbLkRIBzi7rtWAETzVGr9PHW7svSokMIxiPBFg6syV5YE%2BIkVRfH7xBwOG1j2Bf8OgJ8WFd9xgxqmv2SKYW5CSXYsfcsJgRuD%2FbqgdBP79A1kFYd0DK%2FcK%2ByFZzPKn%2BCFp6T2OiFn4%2FXfY45AkgTQa1JWd%2F5KLLCvhikShLTMDa4hMJWXa%2F69gD6oN%2B%2BuDYUgnGQwKy2NVmkwtAHfwqHYUOWpuoPukQZKUYTGK1yyWc6glf%2BomDrMYQI63H7mlGoarvlml2Pf%2B1%2FUwxtdbjPuSzk2kPpKuQ16CRq0EvMuAQMxzVjGmHbGhHe8ib1DWyh1YiIkAgAZZSUVWXl3CwwwSKClRIlRs0hfdtuHjDD6oM7ABjqkAagNkV%2FbZfXpd5MxuIeQSDatpjvSadKrhIr5%2FXHiITMVqjVbRmKYxhMhXVI%2BS3IZkCVl6QxkLQDofQPRWqeBfZRIyUJzNi5BsJBW7crdwWR66cT1UT5eqMBu42Hc3OCXA4iRWhRcZobfBaJjMCCU6PSj%2BfJ585vDp9X9id5OV067zrjvUnt%2B8Qd6D7BotaomRTGlPSS4RHf7TN1Chbuuuejy7A1o&X-Amz-Signature=3bf0bbdcc635f5b82fece5931fe8349e0ca6122a259fd20f580a01c395fb0c07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7YBMOZW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIHVOp08ppEjPE5cueUGOya8mfL2EPPAZusvpJZTVPJVXAiAxPfpza4ekPH5hMgM0H5hnOYjiZiH3guAIHrm1yuVlDiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaa%2BaDy5PzaOaMTnIKtwDASE857Rxhoj1dDfSPJDRxheoLH3eGKfNXk8m8vgSZyRP%2BjDNt1dm0opNK%2FObwaNJway7t4TIZdUdcGVUQlyhFp6fNrp7tlXc282Px4AMPFeH09pCNGbJh9c8uaIrlaMg0NbvZbv14EWoAQHdJS07vS0h0mafccm7%2FCwLXcDG8VdGxC%2F4ttVrQZw7HzZGF%2Bwe9yZoV5lT1Y6KS2%2FPz2M3T0%2B1gTo9RvytGlB2lkxvUKeBeJR1IIKfSVeF6F4rWnB4A5WqS4ciuThSoLlP0FczF7ophID8vW8JUDZtLByr%2FUlacMIqERNRxP6ucK3oPwhKgVu%2FRGhqJJqaRYxpOkCIVZF6%2FLHWsFvSN2UAWOCuC%2BKW0U5PufpzoTJzXE5Kscd4GSoZ3xrV0sZ5qN5F1rcb2fo3LstOc7Lg2hE%2F4391RZws%2FVaZL%2FXV1QLDLtKpi%2F%2Fb4ZHvPo8mLsXrGQBMaKx9lS5FYnblD5rbzXRnF921G%2F42PH6lu%2F1evhT4We%2B%2Fd%2BPCr6C%2B1UQrsfTPri76ARkzv%2FhFtXAvab%2FhptxD%2BodoGoxJEhv8HnR2lUhwBh1OG%2FhbnGu24UQjcKAtBryJYpLiQH47QN8QrlQxBMDTBPsUgcuSOFq63GMjBMYA1FQw7aDOwAY6pgGIPe38iASUkuzqli3T%2BTf2olSfRLNhdjqrzKGsGwKUiVOFpMmS1djdTEohI01bWCFP3C%2Bxt65ZjxqvIWBT6%2FUpIRfipQ0SUY5zQhQHBpzoT2JhqP4v3cwGrsVSamPgEgmiolQDRC7rCf1dC%2FfGGHzH0X2IQiAxPbibhtAJTDNUP8wKmtNDG7ypt12F9DI46zOWcWClXBiUaQ5q1RXxDPM0LqukX0%2FL&X-Amz-Signature=7e123988b85c6ca45dcf04dfc79465b676637d532460a624dc29bb964397d36a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
