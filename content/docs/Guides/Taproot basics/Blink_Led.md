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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3PXJBMA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDww2dis%2FtQktUSslTaLx1%2BNxI%2BFrRPtX8Qc1qhMn2JnwIgOimV0NV%2FRwfD2fycBR2IGW1q5uGWvsVrzGaJtainS38qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHm%2FM%2BN3SewwVfXAMircA8vY0p7y3jgRvUqidRuQgwMyPxTi12c%2BNtKrhImIH%2ByKtan3Gfy%2F3324p8%2FueY9P7uQ411eKNH1edk70%2BSpbYBDtqMX76i3nNpgLerUVS2IEGAPh0TLZqxwt8gNEWVPJhuguyQfJRtqNEV32UYlIj0vhiNMvn7AO%2BHB2mPmURnoRVJgyfA8ERaNUzcu%2BQ6EhKd1MFbQ%2Fm8gYPHKLmEfY%2BGGny0pidd9eji%2BA7LsbaqayFeKid%2FEeX3GM6w69D8U63%2Boa7UV6x63rSIfKs6eL7GogNF0ana%2FFuFQknwmeEsp%2BTHxb1AeyOdACv35NbumI3W2cAMxvms2cRWH8eYEnYG2dUojkOC%2BKsF7k8p4PIkMYvIpu8DeZrhXo8i8Q%2BiDdlPHU4n845JFlL7cF4hQxuDNYQ9ldwV7kdXhVjEfYNIDqYiv2CNYKh58IqBjZLJY0edHCAmBh3d%2B%2FAp5qWe%2FWEbNTCYiNn4x1YeZTh%2FwFYVUkPn3V%2Flw%2FjPAfuQIe11o9B5AEHOfrXxj5GyAEVgdAGtIek%2F9%2FjTNqWReGXBg2%2BexWJgEZKfOSL5RAYQRlnNRSVjcxG04p%2Fjv3QlyB4utSnJyk2D%2FpH4AntJeM11mXMbNKrfc1sNiH%2BM2wpm31MOvd0MIGOqUBzb0LbO0kzqpXSzwQIaetipI7G5T1Ne%2BRLQOQdfghb%2BmKNNWn1g%2B4z7muXhYIdf7XkvyWb%2BE9Ug1CDJeg%2Bs2IDmvWmatlpLbOm0e7J1mEDQv5KyELFrDbrvAlxaBoW6usrQRIzs2Adl77Vhf0KveVKE9d%2BWDd8LL9D5CfJRoORL%2FkyGvqV9pc24UJqpBYP4psbf27gIEpggDqvONlB5HvPDvr7WN1&X-Amz-Signature=eea38f563b96a1def95a7139c05961f671ad5682ebca74635604e5e9b281d29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ESPV5KZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyZOUKNS1kFyJNf0TRTOv%2BRfRNMFt813hyMF7ow2ziogIhAMwuRAkqE%2Fpo55Z3z7HxyAZY32y%2FM5qz2xydfEYPDdQrKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzkZN76UdZQCaJDA0q3APYnBhAI%2FZwiP7R5uMAAHOBPd0fwNJ7I3lFsalwILNd0ok6ebW7bkIjIFjmU1KgZH1ASP2b3a9EsfHhy5kfwXQwFYT15h%2FBdTbO3Oz529G6lYOWtVl0AJ%2F5jeiILdbDPg5%2BSjQc7YLHGw1%2Fm%2BgUQ2jeUpRgxoRP0RC9lXOxCVj4TTD6RsBqeGDCVRqUaO5UikZccfQ0Qm05zDVe0xb92GAqEnqNhCrgGc2BIlI%2BXgBg%2BfdbgnnpoqbdC3oHDThly%2BjMORDzFzTg6oP7E0nAEpyEGyM0rzII2MR03oB%2FkDa0oonrx4ZR6odlHlwymxMvzyOMysse7isLOy%2BEylBJt06DAxJXgGry0HwekmYWNizULb7TKHykQMcofDSpz2rhCQdzUBSJ%2FRcEr%2Fi7VGLpCOCYu2e6CfkFNKI%2Br%2BOYcMA93O2EAG9U6HqEK%2BTwetS%2B4ROTrsWBqXOzxs3RHho1RHI64R%2FtZqGR887N7qMh9rD%2BYPXeqD5JndtcOfX24LBQ%2FnkkIerXhKPSx%2FXPbBPZkAs27GHwHulMmfwSGJdCKJAc9bFpaESG39K3wcnD3oB2UT927LJi0UR43AYj5cuwVyOC0GJ2b%2FmqJhbGDneD%2FbhY5LJfijywbjiO9iS1jjDX3dDCBjqkAVmqSheYqRS%2Bxjv%2FbSxqyy2JXbN7DqnE5F2UF73Q70mt9%2BmrQ7rrTDVzRsouLNs3IukQbKREL6Umk%2FuFxsQdBf%2Bfovuk2DHTRE61FEiZIMqTLj26VvlRMdSFywQiXpEV1E%2B0xBwYzJYQCRqXaTBNZxopDT4Hj%2BEDZuUAhTCkI90LKLDk7H4uxTFMwT868UiaWSy9iLJ1AR01CQzRu0RRFJIhFB4T&X-Amz-Signature=107148585a8d9103fd07a2966424bea9a7be285fe6c23869eb42bc5924ba9042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
