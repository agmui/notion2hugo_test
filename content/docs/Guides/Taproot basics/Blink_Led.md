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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JIX5VYA%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGkdOOqQ0TE0nIu8EiqEvu7Qm7BcVU5AlQXEf1xm4M%2FhAiA%2FfhK2eegw4IFVBDu5iFKSs%2BwWuCA7FerIoal1%2BZs6Jyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMohABT2RdYaZoofSYKtwD%2FoHpU0kJ7bqhMXqcNuqnnZxcgz7xkRs588eHJeoteJ77PAEsRtQ7UeGnR5WSzkuZjeLEUcOwoykGPv%2FKYK0jMUFu1bN9GevX74SZsoM0XpMJik8IfRVY9RCy1vhtuoRgK8c3w6PckHACGbjQyS5jblqgXFmxO1VMxU24oJnSfLazcD4EXJVLgOaOW0Vivlt5PvO4AC%2BHahZ%2FgtB7HO8%2BkEhvaF9CPgXYRC9ZdpkzlxgEju7Kzy38vqdmK8E1sexhkg8AVJ3WK%2BUG6z7iUXoPJWB9OpXKc4HlHO34UJ1wBofJFDd4H5l6kXgwv6yYlzqBqrIBTq%2BbNEXRyv%2BnAsTocB1FMjYsk3Oj36Uj%2FBiO9wmsSTHZPG%2FsAMznmT5Egn26X9Ru%2Fsxt1TYwfFe4Zza9xYqZnzq%2BAPRPwrxr%2F6ntUk6bHeGTI7YPZHkhhbB5HMk%2BzwRvzKVeFoJ2LVjsXLC6vTn%2BXKNI2ckMKTpk7ZKh4fYyOakk%2FdiT9X6%2FEHWs2O1ScS31%2FhmUYqOb8Q6yoN1p9Sc6gD2%2FnlCVDzVG1qtQhbyHLc8nS%2B7XPD1odnjB0HHbxxQxb8qVv3PHuDq1VCyr006qYDd5UTjChW%2F7uCwzb%2F0z2RTtTZ%2BVRlw%2Bbv0wkKmHwgY6pgGfpdWP6DPiXjyi9N52iQqcWVAefCG6R8wsJgS7cMz4tHEI1OsoS6ZWv7fUU2w%2Bh7j4f3VirA9o0vL9%2FFGY5r1K0CaOjcQ1lpsIKNSF3he73zcVM6Da5UgRENhsDeqv7WNrOsizN8XrlW5CJQhysudhCkhir9hugvvJFV%2FM3dTMybkYKjfxGjE7HVQaKgszcOQr9klH%2B592Z%2BSRQ39Lw247zsUSvrlV&X-Amz-Signature=df7cd6d7bbc513f6acae33bdc95566b561f7935b125a613c2ddc3ed867d14592&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SWHCID2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHLil1p7Xp2JlWlH3rJOcK0CgTeZlG%2FT1T%2FALo0aDSSsAiEAtM9Nb1THy4OO2JRLNSp%2BMpPxiVSuIfe4plNHXFzzu8Qq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBT3ClW1LquPs53IxircAwu6miCvBZF5y%2BgrB6F5HMg5HouJ7yS3Iwf3iNcnaBlZvvOIKLE55NRcRU1gUA2F7wT7Q%2BIcGDnimga2tNxPMW7151hASj%2Bwv3ohDWU0bgEXDBWflsI9vi871RyCKKFjiDxJbeqabzG0jw8xiZ5wnecs45eJXyHeMIhZ8IuKOPQhEbj%2BpAxaqATTx4D%2FCkTuSUjwjcFUb6cuzYctmz7mzVkQdKWpxssAvPzRTZ8znuQ8q8RWnLYeRbvt9Mkha0JReN4HOpP7Pg3HZcgaGFMibEWDROyevPAWdo1cohonYWm9ZRRpZwueXV9S6TqL%2BP%2F1uVF%2BFSkpm31jv9XiXHI6qw2WpQw6XxuRYBNVqVEEqAZEXbYsIl%2BmCTv6qBx%2FiYVaqrabpWtLkubg6lWaM3jSPxx%2FhYt%2Bc6MgGx0iJSDIx12SQcZQYys2zkH43LHF3v%2B9ZD6EuWoLYP39t7gkLuJ0w5%2Fz8Wm2eAVUAtk%2BbsIp7HRplGRk5PoZ%2BCVRkQktiOT8E%2FGbLElV%2BzjYdjlkfTRoNIG5bIDBS6oggmKZdh0PCLMNXRUOCjthitlckZiot45K7Q2cniyCxzkqtynXHCXE2bvCytv4gpXRcSqaeusTDkZkLX32ySdY6fGuSXHaMKWph8IGOqUBM5Gpms9IpoHCcXSiQvoKBuWKOUBgap4xCnjsI%2BVxgo39e12BeRr3oGX8tUBB3Zw63otn0MMyDPzf8cnxEsPNnG%2BFbri4BOqilZECgRW6QIKdHCOyk8Z8AZk1Y8T3TDXRXg4AKeQ0kGP%2FxD%2FfhihYk7spLZh8n%2Ff0eTI%2BoKJyUYHZegjvGDgqxGj334tir%2BX4Yh1sf0jDBbsxR6EzQqhDA0Caj%2BuD&X-Amz-Signature=3c5ff4b968ec035bb8e79e43753c48239924308060833d5fa90c5a3dbd45d72b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
