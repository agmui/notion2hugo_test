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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622EN6BN7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGzSF77AF3ZbKI%2FSl6gXMwUI3O0%2FhODmai9M8WygEdFxAiAG9YkVz1ICGYOaGeAw8KPuTNQqfyyzKPNMBH6hCQnSOir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMKJ96Y6S1NW4TQOgaKtwDpaatI%2BV%2Bfp9%2Fn0gAnJf%2FgNALEnNXBXvt31fTHQG0vhiRI2tY0B040ukQ9g82DpNUmZMh6FK%2FFjZEgYI4VAfxDGS%2BLoH%2B3sLwPD3FFxK3kLRKGDBQTRghPpW8UYYPaGsJU8KXiR0o1mVmN8fSq7stSgTp1%2Bfo8c7za%2BMm5UZJL1vIX7J2ctw60ZzOglW8mPswC6cgka7VbgVzbXQYpPhM7s1I2BQm56CHPagj8UWRQ6kSBUeg44yxW%2FPpaRSqVPL3kHJY2KGi7oERSJ%2F7SqCF%2F%2BNry2ne5VYz5JhKYJfm0iA6i%2FJOtWY7yq5d19uamw%2BNia6PtX7pRHkozV7Vzuz%2BVlQBa07iyvootu1qA20wvfj8WRUI3rfpy6qdqxrGZlpnxvKaT0JKdk9sr1JKHHrlEQG38E%2BX1RxzKD0X5ZjMdldhlG1Pcvm5dZuKApxo2yEzRxgOqS2rIflrpoZ06aGYlyVDEyBLgoALEr93%2Bjvj0RaR2paYfkh4oWsg4Nk5pbApO8%2BrvO2l4c9QSDYS8OrIaC78mWx4e0Cpx18qCQ8DEi04y7KLWbdwiwXwyrDzSq3EIs78HiKm3%2BDyjuEjlvPGc4UAYsSzP%2FXhlySz1dwxR0fL6hTMI76%2FtPPg8TcwzYqiwwY6pgFL63oNlXtRlFRdg%2Bgcwa%2Fgldhl1XXkvo3Knml%2FEHguWeFx210ZYqvdHvCVvsNmFbz8MEX7L%2Bgo2X5uuxAPdAkq%2FQsC5eLRBwR3sWDkbIOKzVnuA9aK9iKVA2EFsuigDQ2%2BgL6i%2BNwy%2FbIgTmzOr5D0Qmn7SSsNGkZAVm1%2F2Tfrq0xpxBQl%2Fb%2Fj7r0kJsN%2FAO6jeE1IOHVRif0sQCUMTo9zunE3tU%2B1&X-Amz-Signature=0db7c202b249948fe46f6928e7b42c4727afc171fffc9b2f1d307bc46e5346f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NOSRD2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDFSbh9m%2FUwUVn1yLexKRWxdSMEDWs3n829ionc%2BxkekgIgNDXaIDqW3cWlnjQGLpSrwyYU4qTxfKhdT01CCzzf%2Bysq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDG0%2BTwQfcHNPJhXB1yrcA16OOzl1ten7BtyV%2BvL7OnOp6lvWLjQCcQYEqwZAT65g8J98GNQzScjq8b2Qg55iPUAVukrbXu2SJCURAu7PMZ7%2BADjd0V6dth%2FmbzDrBnnUhJeJRdt0dvVaOTvxYJBg2ecFI7LrzIAOVI42UkmP2289mFnsebncuLVzlcxNmcOj1dUlaNsbqpxiSQXMiMetP8lFv918fvFH6As%2FDsv%2F36t5LrvRiptNhMOMdvj0FlHPWRc8t98F3Vq2KzGWiCDDXMKCnUevlNX1zrmpSkB%2FhuIvBlYKA6SFS0EXd8%2BttuU85DNl1lJHHodm7dsNhhxhR%2Ba4PgwjEI6iUo2tWaaF7PfBMP3UFdsLauWREDolt5i2fWNbywX13p9bbG36ovLuNvj2pGjD%2FuaLw6SMQXRIRoedCr%2Bn6YDXL4odEwqK46I3Xsj4MH7Hw%2BBiivzf6ELnfdfdxFSqj8QpLVaJz3EgdgAuW%2B19tDtsh2DUE7gvry0QrMk4uBojg1a4j6tuN9%2Bm4z5nImBYL7tZ2KLMlYrmDdU9flioOX%2Fd%2FqYkAi0btbFZRNXCmRx0XVWA7kVi3I9MmhezfpTTRSLV4LEZJsxV%2FAbajGGXvEs2HCKzVo1LPsFDyzWxUtseob43aDw6MK28ocMGOqUBr2EFD9HzwqyIR6mTi%2FZy8LyAmWqodz0pyWFxioinWslB43E%2FWdtg%2BAMzeFA2oFCMr7So1XIleKj60zEWOrV7KQ%2B6zitf4syd82asfaUPUReTzVs%2FPZcXWmvFJqw3SdLN19NQuN8knpLrNVmqQYH1jHogTTVmBYDLbLAY8C4p7dIiTymq5U6vdMUKQkDzJVnM3dPzVMU1v0xooPYrEz7YfPIRk8em&X-Amz-Signature=61a8829c800a31a8de5c26ff417a8cda87152b375614c220154c9420ace2db13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
