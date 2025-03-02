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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNF3BAR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIG7oIZYjAhkhMFRkyZPICyW1Q2Je8krONzNW5a%2FrC3hrAiBQAw7xv%2F49nQkCk28OuEeg6KHcaFTw41tAE6QAJEJilyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORM5A8TIZOmkgP3jKtwDM7NOJqMjLIA%2BfOubW%2F1Fd4w9tz6K0yjM5OPJeMi6JWA0PSYEiPLTP156PY%2FED8psmpng63igdHbEsTNFjPlJY0F1KaHMK4qnWFt%2Fw8o%2F3y0Bn48YZFQ8j7wFFtm0wbkzf8ZGIztvNE4RtZiVrmClh65o1tafRVZfSEvk9dIvH7%2FQIsktSnTStrJATH1%2FDecyBzPcFkIuwA%2F609vmmhp%2FH5Vr1Su9yzRDGTHE500L1H%2BDAIm1UmdCXD4hvch1kKUpPpLVRAMVp3nQNgmWeoMTQ2%2FIoPm5hKlSrm%2FaV%2Fto29GOqwvxFhP6dl0Z1GBa5JrIcfC%2B2qntQWKGh1tXTHP5jbiP6znG7jzardjYlLhPOFUubAgI5Sg56eQdrkyxe9yZl1p2mo0StcWHDUDGcY06Uy9Nmgbekv6i%2FkOZViJsRnAtW%2BwbdxKHqOvrDSoVa3yc3ucvcu%2BVtI7jDR7%2Bn%2F47l4ktnQufW79dt4otfmUIuRiZk853YjECmDnvfxPDqZcPi%2BJ1iVBt9rnY3AFM7IUYECbj9%2Fi4GWAnS9V9VbXptxTbeq%2B%2Fjy31Nc1AGUdo%2BFRxxr4yiTLFDUfu1q4SI2wWxAleEMk84ytTbwg5DBxsG35ev4s7q%2BFdGwoq608wjLiPvgY6pgEH1RUk0h5iYT%2BelHjfFuz4iBeMMWCn4pHOGJ34Qhb%2B8ho81ofWQzaBg%2F0xazqJt9PrbpZI5p6tZ1EdCSUh%2FKfk3upWtXfu0ZCrY0WQSlGVpHOUswgtcTRoTeEtZRrOJPES1ZjNVcshWPLbXCqf5c6UP5wGPflI8sr5QDnIuo4TCZQmQ6vPxRoW31ivVELuAiCy%2BMHOIlUqablmSec5JzcdIe0Hc3yN&X-Amz-Signature=eec7f82b97958520d8666892bcdff17517ed097ef7cf0d7d53d61eddd208ad00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQDROJPY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD%2F33BIa8Y1QCnMtveUyS6bphDZO8AVW%2FdTKX3%2FRiZBdAIhAJm6GGWBR0Tyko6f%2FTy6tfnAGXC0ZTChiJDUdjmMNVFUKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCfCv11kESNBX%2Bgd4q3ANMoYIpH5M3Nkt3AMwm2e31NWgMVZbmZJx4Pppexv0BLh24yBLdRTwhabXqXWuCatUF%2FVCI2%2Ba1SGaLJoKDaWEWgq%2BuO7uiMXMDu7NCgxqePeBMRseraFv30up1KEgO%2Bho4%2FrSbVPhr%2BfI2rAHAsXrYF1%2BYu3n2B3su%2FJMGstSBclupqVd09eDesG4l5tN%2BOyJWw0ilNl8221OYRLqo0iIrictOfQWRjhZqRoe75ELyvCppHccax9uvCFqvbExY7xJ01FLp5xhFzMRoP41xBuUV6mdPOhhkcVW7fvf2zZlL8kLAaswf6%2FY%2Fxx%2FMIFA13bh4rhGn%2BTQRIjfYoLdiMhlRif1UP73tAEhFfCHTgPpBABVglSJy5c2udI51yBsOILH8pgAMdmCNbVereV1PkkCMU6RI45sFDa6hPPSWKZQqqwhDho0WLWMBEw%2B8xAQXcgsDwkXe57y33lWJ%2BFdMeBRyYf32lr7f7X21ke8cvHAQr2iRfXrmcYAZe7f%2FnnEp7nxl1SGAniikNafDrfQxVeS7fUWEEYCL3pbdgl1208MOQvQJGFBdpZD2HqQXcGHEIwJ4JakiBEFHgGnaSnos8Vea6kOQELPshfg8p8ghOx2loVTNaXRcC7MOsXclrDDGt4%2B%2BBjqkAfj5HElWPfndyaBWHccT6cPx3kM4cl39LYWXmCzdAotKOSEOUVLW4I0ucgVcSg0SGgacvB8QsPd6V0LuJyhbcVvddFdn1gVEOjhDtTowavM2opatoBUASX1bfGxyZKL3FoeDdD%2Bf6WfjwmRdAccgiCMEoL%2FakWD%2B7E4IgrFMn04Gq%2BZr%2BFq65Hjym3YawpPIPebwTcUqoXmPxyHVaaap9rIH7VWh&X-Amz-Signature=74071e34be7b446f2ed204392dd7857e2eff229d78cf2298b4af9f0b0ac31eac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
