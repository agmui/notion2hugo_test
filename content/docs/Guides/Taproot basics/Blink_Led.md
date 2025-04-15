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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VXG5LJQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGis%2B8ERmoK2E4TocZqGCSAUOVSF7F1UVrTSbVzYA4kkAiAQlnjbq6R8Xee%2F%2Bgmuj1GJiWlWda2X3M2h5MnhN2Pbbir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMrrMkYU%2Fh922eqHFEKtwDgAp8I3fBUoF%2BQtqKeJS3845ov44%2F4cQVQYTOpB5yuZ39AFfnLKrRq%2F1R2E5E6i7vTNhyGL1yvJ7iVRcdVjEOEjxJIVCjFKgLHcQLLTfgD%2FShEfWU2B%2FtkZh8f72%2FWXD%2B2yz2auEl%2FM7IKGjzNwzzpOEaT1z2f8gavVIioyFw1Zn6j%2F%2BFfh%2FJOojTZThBxQSgJzoj4vSPvnGDHnOPCAsE0rjIl68jU3OsHF6bHsrIKNU2F4QwsPSO04nJvrMSP98KE8WZ10LrkYDFD%2F7kaXVro%2FG8tJA%2FRK02dcc9aAAC3xl1Iu%2BPev8LWkQpFTi%2BetbwW6oXuimGNNSCkuxsEvswtu59TQQL5MNFe%2FxmjAol0c3A6m4mzs8Cyd8RzT6dyg%2FlSlmnUc%2BMZL4R8rz6cMfrcJzb36EJ43JB9lEKzrEfQtlvdww%2BYLc8viJjtBFS9f1IcBNC0z5X68ZmBvM5sz0Bn%2F0spztRJNS8rRIp1iY5hLVU5CiWPVrUZhp%2FuQYxXOt95kWw01J1DyZ950%2FBXMlBcvnoXpIVRG1MylijvdnZSr4T5mECGSTwxZn%2FrJuQgZ4YGHe5Qfyioxp4JV1a4IYhN%2BtNCMtcypdrAL%2FofZVvulyPtYZ39S1td0bFP8swlM%2F4vwY6pgEAR89cpGqHdwi%2FFcq%2F32dpir8QpQSeDAInqMQt3nRjDIvr4t4%2Bt%2BEgiS3cZzr%2BnctHBYbkwvOS16xYW3vUz5TDH%2BNP%2Fy3T8pZ0GzABUmRfSjNMnBRsk9cll7gnuy6StqzKS73wGH8P9uL%2Bi5WdoxQDrJIF9VYUdrAUX0NLaOwNLapHR6FLDaPAQ27b%2BRnRNv2F%2FMb9ZV7uhYS%2BB2kp8Yb28qR7onnA&X-Amz-Signature=e4279684725e0fea9190acf3bbba5d30407ae9fffadb646459f03f8c3f81f6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXC6M5GI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEX%2FivzE%2BIo4cZsSFOf7guHH11fLg6O0zkjIo7pP%2BifAAiEAjMwUwViiVPsisZpbNzbvHx0VHmvS6KqYotu76uEgtQMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGFzarcRXGXIcRTH0yrcA4PkRSPu3I9YZeHUAZrpcdF5wq%2Fi64Hg3oyYvs%2F7Z%2BlD9MuIdVR0SNK9PRIff4hqvXrP6x7oFV8%2F0F2DhERTsOc0%2FdgKqz4Qt3p1jTi5lYmrUSMb3koFEYc54mgPmiicXZ9zEvgRrP8BvIUroDs1MpXHPBzc1jBWGScSXZbuiyI9UxmnASYz7xCkMES5ihKxrACw4UMvauuAzzNW6N2RsmKz%2BfsgJAyPh4vXWgxwYjsHK6gaJoPpycFRDece0MOijGdYfCb39WGUY1A114YpfvS%2Ft8BXD7loLutALJ35H4wCg8X7YPNRqp5E3R7kchXU1qfiQG7ay%2BLE%2FlTZO05JAiEySlrSARGwnSFYdub17rTM6NDK4fu7s1KF2TcIA76tJ74qU31T3ZfVefTRFgoBGW1xNPgTmEX9WeXcOsflc0Q2BAEfAJSn89UqUVlAb0kX4AHSPfSx%2FL36gIXu2GjbwBxQzLB2fJpMcMrPNUVrQeGLolp0ukiqN%2FNpj94669atxlwLinLfJhVMBrUYsnR2%2FVKcb4MT78nw9cPCg56VDfiXCtS9Rp1QZE6zDPjT4nlZdItNROeyT40QG1S0F4dBKu1%2FZg%2BJivpKHo8PmffphZ65FFGTRIf7sBcJORgpMK7O%2BL8GOqUBravf38kE3ze%2B8Zy5uQZv2dKz7z4r4uUzdQ384S21LqUlat7hWoSDSkanFPlvqdBtvnQr6evNWx3LyiAU1%2BjEH%2Fh1E6aVcH4ZZK6V1RY4Xg42JFue2M4S9Gf%2FcQqgrUTtE1g7QaudRoF9qmJOOGDxIxsI4sAXUzeb7Omsh0FanZxgiQx6ORzrh0xr%2FVGJ8Z1%2BnpDRq6z418GlBFZ8v%2BDkCpJRKgSb&X-Amz-Signature=63fdc5a95a740fed876381f6e1dc20e974c32e7c6905a43166d2a114f8798a75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
