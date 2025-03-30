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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQCRSQZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEMsER9I%2F31WXf2wI3SBx6xOu8FeupL18Hs5WkdjigIdAiAiWKc1NmcbLGN7ZTvLFkF6N6qo73vfVH2eu%2BVpeMc3oyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4uDXb37TH1kFjnfvKtwDdnlC%2FfyrHW2QpkRcEe3t%2FDAc8hfvIl2xZjRIPvLaY0KEf76Web4dhG52RJZF26Wo22anw82El7m6%2BSaZPUvXM3Q4VqU2LEg1sR6piHssmEhbe8mYol90ayyw0841VRSV2%2BFzpmaA%2Bmgp9E3GjQ6pDrMBBF8MCLrPLdehUAtctPbLA%2FVnhPZNM7ADvFC3oMUxOPT%2Feykqpvpi%2BV2mJcLkBFmLxMwQTSr9q7HsP5o6L8QfcpcADASH81tEg4Qy9qUgHCGJpXlyxHId9QOVEnK%2F2%2FYU02yqc%2FS0tQymBXpJPBCmAmvKfzgcZ6A%2B7dI5kcNIpdKSmP33NEVQ9JsGHf5iVYVH%2BlK6JqdBXhM0hkYGiMU5mBx0An5xukk9OxRn%2Fd7QW9qHzq7UPS%2Bs4CqH6EfcsD2mwhfL8puF2vUhQ7SDE3Uo9TRgm8Eupt7qz%2B7Ui8M%2FU5FHTqBz4I8AFXNv4Stf1rzfsT3wOGqr6Br72JsIzpmyly6IR6ZY9ZaiLmal0XnOVhdJ1%2FrCcDX2SVZVoGQZhMzjjP8Q%2BdeLrJlVhRI7Bnxh961qL5Vzuj1m8HWuVT8tcawvWe4OmWqVh77YoibRX0CouyjlymIE1uZWKg3o0XKOaM2VqNsmdBtI9%2FMw3%2BmivwY6pgHXlY9Ub9gMvlCVxPx1fjDWTjJjA4Ua6C06Ru0HeWUumrmm7zV4Tcn9JfTJwGp4AfBocN4PLmSyk4MYwavX8veInnHvpQzA4HvjnSkebPs2QowQwe9HDVdfdfCQjS5UcYMLFGCDkZ2BR8sLdDmZi6LY6FdDyCy2WQaZHfg5U%2BMI5bpDc0X7p5HWKD8LRirEn2DnqlmIUzdoJLZHr2O%2FupQeO5RcJHGp&X-Amz-Signature=4db5a70815838e16434ff6793f66a5d0a6833cb83bbc6b526086c4714c94c7ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VROTQY7B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDK3hzcSaPZ9g3Y0nqRewP%2B0mVHWE3uPAJ7OvWL5Ye0cQIgPFDnCbV1g%2FOON5pcbQGwdaViwXXetEHAYBMz6ixSn4MqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEKIHttn4dlUZqP2ircA%2FEq7bz29vZ3KN7hyDSwDgdaqSEGIdrvPechZFPMVci1pdxTftTuUkDxfMyM6XagThmv79al448DzUKYPUXyiymEWpdtY9C%2BEp0h0HAeh9ZpGM8fx4eAanSAqvmEwkkxTx6biNHjCM1Qtp5tiygrV51iTapp8JzEMY%2BJUnjycFU4VM0xm5GEMETec%2F3UKvm7OvuxAo%2F7YmEfe5%2FYaqLg2lgHwfv6hFBeX1FVw8aoaFcFJEQIf0FMcoKCms50iL35Zi4SzFBr9ll5AzNXqoLWcVCd3LCeXVn5C791QVmx8vgFBSzFgIfTmM0630UGn6CDClRpHZmcYiMTlZRWP0Ro4wf2GADZwDeYKNNQtYTcDP7Qq%2FPp9swHql5OB2RXFOe%2BN10SabNx1yhkmE%2F1%2FaCD24seLQIi6pIRq%2BlIHaPBGNrfd2nQow6KLcPEpqhTrPlL1zUxjZucdyyZ9WYsPvn4to5GjtFHm4eN1K9QkyOPFEa4FzMVzKxFmIbEeVq4HoT7WYTWTWlSydAatFVPTnW1kmN3FJK0IP4uebeSdJSIjdxRTKaWQ1%2B7FAmOb1nd8QtD2f6hPn1Fl0hXXAJFpfXr%2FslKKSd8mQRvq%2Frgahq7S77KdmIWjGOw4U4FPSrRMOfpor8GOqUB0WEm8Q%2BHqkMBfTvrgE4V5vJCYoEu5edEBm2V9pcAsoA6ukqBrTzQ%2BGx%2FRw0X2crEZhiTMgLjgAOQWvW3onbFEatFXfZ85qAV5pgvroqBi9qNe3EllrBCr19I%2BAan%2Fcy3jFsZiHRIXbsdl8NBp%2BTX%2B3ZT0QuVgEPgx1%2BweT%2BhBWw9rrPdG4bQptq781SjtvjwiDyAhLr2d3kOHDIEODsu%2Bm7e5F2m&X-Amz-Signature=b15559f27aa92fa47c6fc43d15d4bea7f5dbad1a217acfb712c63cb8f796700a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
