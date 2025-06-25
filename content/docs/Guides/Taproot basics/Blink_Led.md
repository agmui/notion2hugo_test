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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EEGBTQR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC2N09iO3EK9AkPrg65P6kST1B9%2FDdphNa%2Fak6%2BGMaTswIhAJAKwjlcU5a48hzct9iDBO27IsU7kff9wQ3fGpKm%2BEdfKv8DCDwQABoMNjM3NDIzMTgzODA1IgwXUX6e0gb%2BOrtElWgq3AMzPelUDlkPZ1rwQxg4OrmhLM9NHHzEFZ%2BBAxd53VHWQxQVdbf3dRB9KrYtfj5vOJC2Iol3%2BOFXevHfygghteqcJpxHtbqek4ZqwuQ7Lz5W%2FDlY5oQzgY%2BeAnNSM6Xx9fIuBHi0N2Cif1YBVZ1i0vMYMU8LrypSVVeaVpLcUp00ewQAesng%2FBfdNukBtvLYXLgtIaQz7gEfNkK%2BrAcaDUT8Vu%2BgLYQdgMIx9n9HOblCja5gD3bXdhKzW%2FEyYEdOrOH2m1pl%2Fd3jv27jeAjnXln1hU2lv1fGelM6CxuLQ%2FxCueNdePs%2BHDYwdw78EIy5sCaKB%2B5U7zNjtTLFvsCek2Pw8fBQy9th%2B0WJmoSNtZy06UMFIq%2FycrD0gRrK1jEz7ogNyqK5C4Nk2PbV6zSxOSHJ9UXqho15xaRgtkrA8S0VkCRaLhtl%2BVrEBuCPIpUi%2Bypwy4nS%2BHzV%2FGNPWMkzFqp0ELeBsDf65qU4nBxSCj5EcO6ocAArgRGq11vhldpDAa%2BTem1yC0mKP4A392q5corIQmjYyTuZBt1vDs7KEx6OOCSmNmJHIp690fR%2Bj4vuXxsMufVsYCo6%2FPZ1rVtZODFWBA7Zec68b53xY1c%2B%2BuLRQttqdTb%2Bj3s0GJ4q9TDY0%2B3CBjqkAfKULsS06a9xXC4WTXwTkDBxQl1mYaw2q%2FaBqAlgFmWa7ZKHiNbu%2F%2F8aM%2FsAOwLOqqYJun5jF68qznIKIabmtmMMA7ZtT7c2tLJRoP78cu85tICEGgNX8bgLKlOiLwoKIC7o1%2BVY4F8ZfKg8bEWjpybNMaR9EstY4qKh7owjGjD3bGTFi%2F0cTvPmUGjTR1QTs6zsrVbQa0hbDmlZq0qYcT74n8je&X-Amz-Signature=ae8d0b5d3269b5bc1d13e0450be6b09081f2a0ba43459383e57a22c4b4db33f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB4JHJZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC5guNorG0rzkTUKiyXoObLKTwFvhm%2BMlYs2A8PoU80SQIgTajLnINxBoxoHvRvxIq1lbG7lQ3v2DoHE1bliV2JqEcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDHbfkJBzigG79ozZVyrcA7aC5hGR%2BHxWb8q%2FKF6i7S6bsNiPcxtMEizP1NvlWxNsurHqSZ2%2BJVr0PzV%2B3%2BRX%2FcdaN7AvErI%2BiWreRrEHicV4WpNSzl15uu9QqEKufKHcXIdRxI2F4IQbQ1huPolttDE9uc5PSN0joezjoq2QBQdqetkVAzEcuge8ryHywMOfAflFRtD5NXqdlikfMc%2FseUR64MErQEPMlvN9FY8CerSJKoJe8EABamk7x7hRzXv%2Ft57zT6H1Z8w%2BmkDiDyCSab55dllWVG7IE0rXJkj2TYse1TFUS%2BbMZKCQG75TIwcih%2BRbKdGXblYScvaselgwN6NSHI0XgrBCu9TcuED9U%2Bh8LQPY2yNup9QbbjYShjjYrt3%2FEfUEvEWNDTLPPRE6XqjYjShcXBnJm8iOKLIsf56U3Osz6z16mGQiBOrnoq6wSd5M9B3C6oVABfqCTVkj8Vb26yd7zA%2FQxfeiCGDBzsWIkTilHZJgvKQsi52eNSI45pnkRkDPniA1Nl7b7Y72uLjDxHOefE4eM4nw6%2F%2B8Eq8fTQoas5TRIezNu3z%2B%2BqhyYMMJs0dqvKQhkQGIp5GlRB4%2Bx%2FzAp5GOGu9E6mIK46BUm4kPUgDXnFY1HfxUakSjNjab%2FX1ogR7BsdiMMLrD7cIGOqUBYGANjqTFeq6XRi9C%2FKYh7aERjnuTN%2F1HvvmB0WDUIcd904CDqP7m23y8843K7JAbxdN840RraiGIpb5njCGer5MucIPkihU5deFy6PKixCDInUiA5aoPSlNn8kGGjBx3%2BO0n7qTW93L%2BtuvI9FNZk2kHF9OEPoIjKHaW2ONQIbR0hI32G%2F%2FPd1iLKIBFsiT0oK2f%2BpL72KK5mS0v%2FEIX9JPvBcH%2F&X-Amz-Signature=41704b2a31a40f21acb56eafa5456fcfd873219d6b627b7de13f8bb99fb12900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
