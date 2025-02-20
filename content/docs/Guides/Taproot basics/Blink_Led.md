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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7KZW3A%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6tX%2BnIdfx1DGQHPaoBeABggiCGS86zsAuh0slEMGxgQIgekHftQLXhcq1OPZ1u%2FhmQiTgjz73o%2FSbt63bMNWlv9IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5k4xh2zme9P5T61CrcA96iCgQiEhKzuV1CIVm28UYIEZ4ozvMGHh4g8MUW5piWjhyl8hFEnl5buoAbdhzdjlEWl2nqScHRvM6DfLQT2fWWcXxkP2g4sdlYSgWjN1pMvOs5F52PsDD9HoTyM0ElGahKsKi0XMjyDAF3ecsAMR3Cgl9GTZjSUP2kc09bFrVkDOO40CrMSN38YnuSqAyTZSrtA56DikPB%2F8Vhhpjb5lBBu6FuJCRmkIzuW3uy0EgvxD3dG6FJvd5NZCf2TBPNhHpybQfjGgw2Nn2kNCxbqftZ0iTYOhH1qE1Dp1Ra99Dtoyb3WeH9WaGrWgs%2BaieAM%2F3V442mEfkDew68GGGaKpkty%2FJldH5QzXOr2q2bUp%2FgU6Zff0meB2vz0NimANngX%2BxYJMmd4seE35nLJniYpsmhVGuT1y6JcZYZ5HklY2r9ZLvypaglW0X2On5VTK3ZMr1cKstnVLKCh7w4wrbmOnQrqjjHuGkSHLHZQ84mJEV1Ic2e8mM7Fb20jhkXjMIzx%2BfoXeBj%2FtZUOnLwmAhic8MXoIKfxMmXJyRU9ZQkB7V2E0Aa562C1SvtyoJoDiB%2BfVo%2BZ%2B9GQVw5MBu51YTpVeNI1%2BlxNHELkDD%2Bcu9it%2BWOQBgywGKgOHTLLVNWMNT%2B2r0GOqUBNdJYRYgSjo%2BXzqzjyMID2b6jjQs8rcI1NmqhILPxDYOhsdr7sfMlDWryR3JwV5hKrCF8Rv%2BONlbKnzl1Rm4KIST7oipib4nlE0wt5MtxMzIlbRNm3KJ99xguezegKqml8jltT%2F8%2FDzuAwquqeuPnVulVCmutX0VsyJ2zK1HpG%2BK9svYRaWFU%2B7DXF5JEPU7StlMQQi7n3vHoCa03on23303YsILL&X-Amz-Signature=15a4423dfaecb80ddc768af64050b9fb6a7774782dca4f7a0e40c636605c041a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PGX2QV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bj%2F3Rtictq9injwHJwww9Q67mstnEaBIZ8a%2FfqKNSjgIhAPOspqG56%2F%2BY85AwMRE1PsCDqKKAUYAdIhq1CEOGeSSqKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B6bWmYb6tc4KfUBYq3AOhsXnVAcJZItQi3KCmCalkecgroKF%2BPUNLzFwlta1rzvGhpIS2vxlfJWCl%2BEUujda5PhbS5pEMBN%2BA1XjE64gQnFpfIErlJ9ieh6pzsQovn5Gsc4GSla0Mp%2F3QptqrH5qRj7DDGS8UaCoXF0KHw9k0VGtd90tRhyDgOvdDVXLiXul4dYGgmYtEAwEnxOLn8lcv0GK1bGJg1s%2FZw08Keo6v9sSjqn1hFWhl35OV%2ByukCAS%2B%2FjqqDKEGx3ZuIbTKSeFJvch1%2BLxaE5owzRrSAgXSCX7Vj4ia91%2FlhClPdtVTwbiaFPIlUR9gAhwfiyFc3bWQFFvuvagq4AcuEiyKIq8oTGaYug0%2BPslLscuWZa%2B%2FGbO9KF%2FjWWBSdyosirre%2BgnOfCJBY4O8YM3zQes1cnI6jyBc8wP5JKie%2FaTj0AnDsGYWdIr%2BOL3vLxsn01vVOdO3TY2gmd4rmDTyAJKvAeJS7EmMu3EYeblbc4dRvNRGXy61BWre2d3ne8L68AoQDeeFis5Bwtrau1KTpqLDNNB7sX0zx5cuLApHh9u3pij1BVGVNwbwmA7dIodO8ImlgZgGrED%2FE3kSrwRrsQAmdBWG9KEuOWp5HHx2UsASkyxTmW6In%2F8F6pqVQ7Om7zDE%2Fdq9BjqkAXcrjII2xXT21biAyg1nlGqqCOvjxQ%2F0b5mSB%2Bk6n90JnLv3F2216CqKgnwEvH%2Be7Iog5kUrX5GTij%2BUxEOz44G0HXy5FdqbkH3vvFtfWKsQmBnoQgr0LGZfSnD4Nr6ohreS6xWN2Jyrlg2ufHXkdnRXFZP6Og%2BCPk7CxOQI1vzqksn%2FnrEAC380IrvU0wLBqNPvwiFZXV8nh4b2RjTM5oEXRLLR&X-Amz-Signature=1ab39f6aa9b063df7652f73083bc49e549cdafa7c6c35f4ba0edcb26453042ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
