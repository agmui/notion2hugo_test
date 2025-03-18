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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3VZD5O%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDvOqoaikrbJitZVUycYH%2FHZlyOIPSVBNsQPpCJqIeEgAIgLzCmsmclK8CzA2QiAz1VMy1iltcCn3Q6Rs5trGvtuuIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPCrzg3geIM3C2TQYCrcAxwZ7TNn0z1p%2FUjQ7aH%2Bq89H9Kg4RUNfwRAHM6LrNClgFM2rAfJnSL1nqTRN2yaMWZUZuR5LGk30kktMekxA2BzAg6btU3qQHQ8NX8ncVuJPdh%2FMFQu95Y0orh0IrqphxQ8h%2F0A0Jm%2Fl0FSyFdtoBIR7gU1%2F8P1e7Dw69PbnRVianpBiQ%2BJJ8XUNLMBSNIBfd9Nq5Jam0R8CFvi%2FeSjHONtg0BiXF6BCdi4Mav7uRrWmWNfYMZa3djNwSN46SSOrm%2BrBkXgjmJNJC7w2bTOqSEp3YEMkGPX6sqtH1rq8EP2aluOLPqx7Vzm%2F0K5Z%2B8HFWWa%2B4%2FV35TyoJ2sAdiR4s8VbYvTUtsS0aZdkYK4kDg6U8vor3lEhJ7%2FV6U%2FlDEA1d9jmdvVFY%2BTRYtsSPsKoiuWZ6GwCFJTa1GsLlX3dw2Ni5MrcRXL%2FcdlRN63SCVD5DrOXL1DZx21DCF5%2BLs7yZ%2FZafmd1ix8wNSVMlXtXu3aZ4VFF%2F3XK7TgUsEJLbUDdhPksgjKrtvbuzNbRAUZ1TP%2BJqof9fjzytPzuSU8fo0V1%2FTErrTTbu%2FvNPf9fGCwjalJG6hwrVeIyMxtUnANof4GLyh3F2KEILjZOCgpuKCLQFeEfD6eKBb%2FS2GFeMJqV5r4GOqUBvqn%2BVk7CqjzJGh%2F%2FDwfCzvW90t7KTjL76Ydgg8J%2F%2FY79zbZT31STEHaQxpQUf6Q8Fkm3H%2BBFqyH4ykv00m4kN%2BFON6U1iktAEzJppPga0Xjdcox48Usj%2F1J79UjIOzMviM1%2Bfm%2FERI3KDnxhd1Ztk3E%2FqHDZ9x0XKnQiys4U4Cr8IJQtLhHitTTU7DWWYy3WjaA00xRrl%2F4GjWFKX3ueZs1gmdg0&X-Amz-Signature=b1490db77928ed0b12e486a64fad1f2b95db9f2c7049ea4f799f9f5322debf69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUB7DFRU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDeF6c%2FMlSWaEUYE805KT3zwHXZf%2BAL10GD91DH1i4GxQIhAOvEGzMP3KrNiN7tO%2BqE7zGJjJt2bfpOlkhpABKuryozKv8DCGAQABoMNjM3NDIzMTgzODA1IgxwL3WjC8o54hkB8Dcq3APnz97RaVoTYMBYTvj5Lg62mIT0CzmYPd%2F%2BaMfhErWu4PehHGDgl9HBaYTGt1MCZRiNKHCzWNwv8yydtg8MqEYBXIMlfzcimC72E4G82uC7qYLzrl3VlreqTuKJptThloiVRrooWqFNlNHw3EYhUjQPVLOiP4QrCfBBAQB4HghWkn%2F20QQnRypL%2FLd10CHnoQcMF1TLSdxG82V%2FEZ%2FCxDvNi75Jqnr3hw50EhQfnFDXZNy9Wh7x6369lj6pvtEYtTZugPlJ5lAIofWQj%2Fy0HG5S6ooYMsInf9VVFmqPacPSUiTa2xubwAs1SswrQZQvG4tUe%2BJK3SWdQVe1Z0bMqVtYFDMycmISGnYKZYyNYyfHUlGwpSS%2FqdGNWyGjmYQ%2F19d3kUM2Fqc%2BYnXkEOkFIjdNLQUVxg8Aoxe9tkfQOMFk7eTlG7fNu9q8RJfHigGDOZqXJWrJQn5KpAvOrxMrCN7NN2beVWtgs63z0jjUyXyzsktX2dRejAaR%2F9Iq2jLnMxCRknymNxRGg607dIg8zbicRGZCwZwPt%2BOpo44CKm2AB3AGHACWyNTJ9dbSWCLGUV3Dp%2BrwkaanU2gcOwNbeZr1JbtypxbdulL72BSx%2BDA2MkqVg6biiuLpeW2aIjDtlOa%2BBjqkAS5Img3yV9HqqXgDJksae8cJ4nUl0MrNeoWWACYCkILL3TgmbyeW%2BJZ9QEctk%2FlZ6%2BLfYcponZactWOnuL6ZzLaH%2FzFOlZCVRHnnNoBz6q4l7I%2Bg5Yzi0PBAwQ5kZ170eTlC%2B3kM66PfCUJ%2FvAVgoRdXqRhuOLScnxlmiMifPQzRZ4RlNxkbOmVf4VkQiU%2Fx9hQGE1fds%2BNrIQr8oupvltk2hu7r&X-Amz-Signature=238ad925d7c39058a9ec17b242a50178106952bb8bac01c6c7a1534c64127197&X-Amz-SignedHeaders=host&x-id=GetObject)

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
