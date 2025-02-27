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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJDFKGTN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCorVAHRvxUX8jlS2NX%2BJUj7IPcXiV7DnCHzyScwAXOLgIgXFnGnGb9okLi2dIorES9w2NKYUlcHsZuJzTDkU%2FGpt4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMj98RFGTT2rCVnFzyrcA9DCBAoVzJovdXtWM0lI0XJHsTVFTg80HMN1aNJvsHHvWmiFbPExnhA75NC5Yz%2B1WJyXcbeatDYxaw%2BC5L49wuB5qJ78phBTPPQSBuFQ224HbyX46mV7nS9WtFh0QNeg9GN8IoAExrW9xg4t0NY7vKOMb8O5WVt7WujLNp9ssC0AYAOuIQwZ0Y595jIKoJP1Amb5%2F1gXgS6WRznvCjOe7SrJG%2B%2FlvvubAyYMrT%2BLGvGcGy95%2BjXrsREMkOUpL3EOhAd6IIitfcs0rE7koRzoIImz5UjVg4i4jgD1EABhGTbyV0slZVOPnsO2aqjbn5vSCgswXOdubdXWW07ICBh7XAJbHOrVPkJGsx%2F3IWAuKmwAlOL9lBo6PS4BBHMIiloeQc1ilg8BLx30lrJ8FUMFMnO3JKY506mBU9TIHy8DD680DclxfJykKQvL4YDQXLsAHWPqO4v8LnYxO9T6OjQJWorGnmRRfpFelN2R0UnhC%2Fj2NN%2B2vhW14oKCtzXc0hkf7FDfCz8fhs%2BbR%2BAuEZm2OkDQiieIYlBHaPM%2B5kC%2FRhN6gmksT0LRz2UtLnwTpIm7OdPeMIRdWe1A7FAmfgmlIVaXsG%2BoMYPvt4e0bBEwsddO1oQb9kLb2R9%2F%2B%2Bw%2BMPq7g74GOqUBDobwQL1ZqLIc63a5tOqxuF2u7NQjce8YVbVap3qnAPOWpncYXXG9mUNdzEzko4uauyGrd6p6lcC5Dfg2I4iMJH%2BJGdaQ6apB6k9obhK6EK6wSuljTDKOYh0ldv8uKUYpvpoilvRQi9aFshnY819QX8ZE%2FE8bYPQ5e2GgACMNS6QuAlTmHY7YZ1%2BzMiFeg8poyW8NA6hRq4vgzIFgALRM9Uynn3IH&X-Amz-Signature=e4db616b90cd746495d1e41279133bf7dba2875f6025e97e8f30970299ab4a80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QRNULNX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAeantFA8GhfsQ2VFp5oJXQqLjSSNG2CclLNDK%2FKTD3yAiB4T%2B6nYBbFoZ2Z71bkiMQmc1QvXJqsZDeeECMWjKDGaCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5qwbp4NasyTFPAgkKtwDK%2FYU32WrqDQKdjFO9n0OxReUfPWS0TzvVTDJLwPgRBTJCkMv8emsnhSkNnZtznenKQsNJTv0hwWQ1sCVyRyBwb%2B%2F%2FCvEfcs3HUSQCUo6PqsRqHzu4Ke%2FNp%2Ba%2BwIzZpFngZwyAQyGxLQtZeaba4cL2tLsD59mxze2Uo1xee4Z4X643iwWX9i7Av6rAhN%2BTbkukVf4NeGp2sFjNy5J3LC07FYHL3jEsckUMWRLWzBy3IM%2FUq9BgV%2FVT5LnkZ4Ja%2BDKDPEcuHXcDO7N7IOHiAQfU4pB8pNVy%2F79OERu8k4CL27Z9Il7vBw2BjdyxUbPOcPo2qziioOWsYAN%2BGZ2YMD3SAoDwMD98Dh1QRK30elMeHuagD6voH%2FWZ7JjyQ3wbmPKqgg67rNmTPlAX1KLTpPY1mRQCu47d6Ag9F147ss3z6S9DTRRtBBCn2Fnlcpuh%2FqLMMvE0lo6VTxHJEC%2BZ4xW4WZiC8w%2F8CX98Jfc4ahYkgAFcm7SwBtAyMeM%2F6DFL9pdu5tSaVXVTu%2BzPJCaJlNgcCANfqFGMv1LhVLY%2BmFTr1dHbwoEBVF6bOKfns6YyqQRZ43imo%2Bj%2BuOcZ%2BXd9557OVhRGAVF84OuGH0Aoql0Fq35XhtSaVQG8r34uyowhLyDvgY6pgHmgQsZIK%2BrDXS1bT7aZ3JzNxqcpPeFzgzOyrHs9jabsQyJpbcX%2F18vmukyib7wT9%2F0T3gCFTgo7ycQ96LRNgmqNEUzbzfDQCU%2BxSlwIwq8dCZJDcaf%2BI17InS8yEFo7rcLmb2xXc4VCBYWPGacPIGVKhgIjArG%2BD%2FvTVRS9GlHAk%2BEoi6GgiKfqFRF7EBjh1pQtNTveg5opdnYSDpIDNmn74WS2Agw&X-Amz-Signature=6c6b1db6ecfcaf1fca3f613abbd25d11a2642828aaf6a6f04d6de5c24f839f29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
