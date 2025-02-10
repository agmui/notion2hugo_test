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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RE7V22%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhRvzxrtSiKfnhsHdWDoXnB6if7n7bbP%2B7eoZeZA3ffAiAa40S3HEQD1ZdkwlDgk%2F6VfD1Omq055LTLS8QgTCOObiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwp2lT2zMq6QTEwrTKtwDcFhZsoMPljgtUZNSpiYjeSEVxKfGT7qTmM6lfRHXbw3%2FTRGhXrkq2Fx8HXK4Ej5fhUhlJUeGLED%2BWCCXmFI0lOHI4LTegJxSMqLIcggKjESxp8wqZKN5tyqZr2lxFAKtFb8Guv5OVCMNgtGD7VPb%2FOlW9vJrcLzLVZ5WEbsFcqUavJjPeNpSR4TWYdVd62BLSCjeM0WD8xJABelbak3wxh%2B1QlcICf77JuLFmAI4WhvludL63VXWu%2Bt3I5B5FIW2V9zxYwBRSenc%2FFSlKL4sm%2FO1ivR6HXjUfZhKPE2PyqDGI4BlJCfzoymh1VyfexwlFLoXuIf3S7auObmdGJPuRdwhU7zWcXCo1rvWmiWthaLjv1bbyAUjjd8SYIsb%2BM8vQzot%2FFcYHpf7MrZgYqPEfF%2F0BOLmusQVFKY0KC3OsNklvSVt4gXr6RLlM7WtN37bFy690l4VWVuAPsyj8YIOKjFnM%2B2z2qLEoSKnxxberB%2BuaX2swBWmtcIIunNrFat%2Ftzu85hc%2FZhA4uoiv9jwlBHPkDrWE2cWdGQtr29o1CUKZnuVn0cSgXKrpU4i0iQb8wGGgTbS2ubsERqehx2QJWL5q%2FEyTHn0pWNG9yMyqu4jfhRAeostcUT9U1UEwgJipvQY6pgE6%2FUKIz3LROcsVHqcf3G5UwXNiaRsRubZR4FncAS4TcU%2Bk01kjUlwjxDB1gNrky7aQptBlitsWJD4bmoPaZycVR5vXR44qn99rkQjdxDZNFLOB%2FsYsAdMo8P1HLKOY75URHMkRG1x09PVJJGEa1OWIDM4aEjN2EuLPJ1MlrBkPmVw9a1qKAxdW1fiRe90P7SDI3thtruuSFjAdJw9LQQ9SaWZngN%2BY&X-Amz-Signature=1ed34fdb8cf9ef8a600cfec94787474e9c13ce7614f4e00cad7d4a5c6dfa70f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DRKR6TU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfzs2tAJ%2BnkVt7%2BsoziUGMxebSyAKAuQjOHN5%2FdChFwIhAJeP50jmc0x34DKZMQDBHL14Ar9pxRgNncyXbdfNgIg7KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkVocAAkqAFgW56Qcq3APriZWp6TXw%2FjrftEs%2BMer3LG2VgTOB85LGgYGnOVBS7IOoXTjOC6zohZULY4xlvqNl03tsDTudk3RMjp4KU9AZz%2F1gS4By1W3VUzCsMIhKaQ0MGSwcRtBdiUS1Jx5FeJF8uPAEog0RoxU5BmvzUgRlKThsRtE1F4UbsDrAhXYKKKMPrwp7CCtAy8Ez8h9kSEE4i2%2BQdCLvgzMpJK%2F8R4TpYq%2B068TWuNk3oFEHTxZyuzK5pVT6xHe1bU9%2BsezMXDfDNntfw1TQu8C9sO27mmGKLVoImtI20sLSdMLTEBPiN1gXZ25e3rnSXCjXu7oPF5y3nsKyYJxd4gXd9zVEdyfOyYcZf0aS96hwt%2BmtdsbaKG8PT%2BGEKXgVXnokcAlDUk40ZdVlywqbAEUBOzVFLfDydQDugJnMOpSr9BgLTED%2BxPnZqnwEKWLH47u%2FQ0%2F0SOa%2F%2FWmt004ccxM8PmK7ECrsazGtutKqoNlGIewzMTDUV3fCbpZje%2FGv7cthbKQ1E9KhEX26I0hVbmFJQ5CrjbGlnfvund8TBTVwqS55SNgrcIKeRk7aP87RFK21HFLIMIv5WfMdIbjhQNUJ0gDQGvVDfUIa%2FMjtm60y4b8tKIXlqfegJS%2FLzqnSuOP0gzDfl6m9BjqkAQ3XnAnD9ll2qJihLipQV8BglnLsRIins9yKKLGIDrBCwK3wD7M%2BFHrWk6s6cuK%2BSgacpUvPUfcLM%2FWm6vdTcSYQ4gjGYNfcQM3OCNtBh%2FHZgKrs7bwleOdV1iJ2foIUdXvm0qEb2UX9i0xX%2Fo6uzyYv5Guj5dYWghY%2BEjLUsj8AK9y2xI2D8Zr57gwcVxxu5jyvGBq%2FchOvvfHY7do1W9LK8Fra&X-Amz-Signature=615fce6ddf38e4fc52f663258c39306ca4e8348d1b599c96ecbd357952f810f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
