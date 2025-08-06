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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOJV6ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGXZpWT6l77b4I8C0PB0RM0mS5B6OCu6xXBacmSHFcJDAiEAxgiCxZXlvTBKeY%2BaOgU76lP3UiCeWKpFYJB0Xq9tgDEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCFfn43isOMU5Yn8LCrcA%2BkJhbNNJVz06J1tx5yCsc%2Bwhfl6XrL0QtDYExtJ9lSt9lXIt3nPsJ5rTAj0E3bqp1w6%2BKQ78bTnNbnpERspQtApzQ%2FUR05Tdv7dpBXIsfyJSdQwbpNsLJf3kcdgM03Yr3HBMnHZGVDPiuGl%2FYDpLn1II3j80vaj6prCiQTi%2F%2BeUD%2Bi0y7%2BaThQsnueUKMX4t5ZYXFJWeu3UfxWdhA3PKR%2BCGNf%2FkXUOpZdELpbh1iuMGCgVJtmqY1hignK6l04PjqTX7RJDi7mIwqF6FqgOAHbzYUKPFjMTvWx3RXw003BREDy5V7fdOeLNm3cT%2F3ZN1VoS6l%2BDgnuiGy5JtPh1ROTgxQfIWHfAq8iC9ULj8tgORDhx1UJvDRxMB4qvYH5FuDhOIkWuxmM0WKkqyWTydirJXOKRqHp4e3WO1lCWId%2FjXmVlrWnkaEWSsjLEAz0%2FnizJlIfte%2FlJWsdbkb%2F1mrGt10uUMxjDmfwoBffPVDnBVKnYp8wacHwNUlKO9nJMAjO4L7qHkGBr6x1KJn8EE5H5ueUrtSMxQGwvq34QteM3lZFzwGKjnObzKvIyMCXhgvU%2F%2BcqBsoJELb8u9w%2BiLsiO1goN%2Ft0PSrWoS9vx09BFJ5oF01ZuADfhs2%2F4MLCFzcQGOqUBbYpr23Mpe39CciwXrkeoSw37%2FooBtr6LbU%2F4ek7%2Bx1DaCh%2F4CTIkr0Lz5Y%2B0dSrUl3QkvCZDj%2BAqw4KAvLHSByD6EVUp06JHrZvZ%2B9zMO3aB8Ml84Z90UHxFtaGMnvVaw6W0ydfyEgwAFaKSR7ioaMltvRpEnYvCpGk50i3btRapUY2h%2F8HKl4KvWhGuyuCLQDRoZCvWM4q2fQPbMrvs4nIG3EfR&X-Amz-Signature=0c46bf1ccf6225dd4beaa4732c53e39d0257ce7604a87343076edd14b61cdf47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMM6FSD7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCwpNavs%2FfOiZ4G3FnG9xs%2FLS6bZuzGbm5kOmoUKw9UZwIgNIZG6dAfJvqykybK6mANYzICbmChPSznoRJPoZ%2B5BWsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD7%2FDQEpWbhzI%2Fl9vircA3jT1cAVfbmnV6He%2FLVRyNorFfI78Y9Q%2B1BHEvEa38oLzU7vjGC4Fc7lUzecCp1iX7r37VEN4%2BOYCdM9S7IH8ou5dJJkxrUkA27%2BZoK%2FJPhXkPuLe26bZSV1eUS5c3oOemCrZpam1%2Ff8tNplGLGClT%2BCpPJdS5RI1epyuclV4h9S%2FEJ1PJKsev5Afw4ahufX1eVSxbn1OJYpOjrJ8Q5dkry4at7Jp9JK%2FVUHWd68FIW37ydNL9cEfDkZ0Eyh7N6SqqyYYCVXalsSGVuA5q%2B%2FjvNxotn5nuIIlHNpcvpaBq4cpMvs7l5XzmHNfsZLZyUD6nOirTqvZRG4Tx5gA%2FZ90iYp3cDsfmBg20j4FeCu8oouegGm1tTHShDI14jKiC4t1QKDyoaqf2%2Fxr%2B44jGtN%2FU0tsUUWWAMF332s4FGkZTg2wm11xUbEDh9Dj00zfOcdqiDxlMtxAAb53RpyfWjiyRK302VimJb027tlFFPPAEWHjTxg9IOiJ1MdJlu07Qm2YmsywnL8YBfP9Grdjr13WrzwB%2F0nLaF62HnsaVnaBFovqMgcYPcGora1IzNaN%2Fiij%2B%2FrT8HKaUxjeCRewmICx9mslG6gdVZvWCWYq4%2Bw3V489sfhJuUxS%2BqbXVyFMN%2BEzcQGOqUBjQ710T6SQwsBSl2eqrYyObTQLWeV%2By%2FypTmtqHtqw5UejHhv49j%2B%2F%2B%2FECSb%2BImbh5gcCVy%2FT1gvscobwApxN0Xr9LxtbbJzpZX683N00ads7UbqXmpiX553fXGrgo1UlMZgBHCYYVEQHXGdcJ%2BU0owlhw2QzoQEm%2B45djcmo2pdukBuLn24p29UBfNb8ZVLZYBiqwF14aVUgEwIznzQk4cyCYqQb&X-Amz-Signature=53b86ddf359818f12b706a7b4c0ab6025e6f73d7c7e960c6dd3f042153d2114c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
