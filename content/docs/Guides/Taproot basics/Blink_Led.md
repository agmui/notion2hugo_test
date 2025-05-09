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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLO7SYY7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfJVo%2FDcocb%2BgCnxIzUgrCzq%2FHsnT1CxQ9IiCm97xciAiBZDrtMRRQbQHW64xyY1zWM45%2B3s%2Fsk7H%2Fs4SB7r7yzoCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLgs6hv10gHmfn44KtwDrB7d4WvkFrY431UOicq2YSQOP6g27qe0WhAhT3wXK0UhA2Iq8QMjQ3o9GRMrN25bm2uH%2Fft0ZGrUZJeHTY2ch7h716V%2FPJfP9HTW0FdjxUSjslfNF1zrjvf88Ay2VaFhTn9gOkAYuiOaCs03JrOEgO2IOb4fugr%2FpeFgoyZwh8V7Q8ihGDJDVHyxw%2BV%2BO7h%2FDaGC%2BkJfQmCS%2F%2FvP1MoGHxLblWKsuchNkBR1Hr%2BTsS3xo6g4hWGbh7KB0K2qBB1SxHFtys1VyWrDUfpsPDS01S3LMuK9fNP1cZNJadV5hLfA0P9zyfHsEfCvoI8KJnuxVXdAERRpB3ALejhm%2B%2BRJEgxN%2FVfLSBiP8%2FMrNdvRS9HO6M29zUtnQtpCgLoYAD%2BHw5f%2FvqY0Efrsks2qqwzmPo6Cz%2F6HJJiVCl%2FBnue0QPE3UGM1gaOVkT7rVU1dgrjhjyfajDLITLWS2XwPg41BcWTYAUlZTYVtDCbmgOWLSws4O%2BuqDWspTC08ol94BvUTg8iZ9PfslsEOuze8E769s23fVYjmbB9weGLyZBfrXlulYLipG3N%2FPkqnczB0NOTduVvTMPK49c7pOjaO7f%2F8c3drHemEqtxDx2T%2BmSW2QKa09hb7Vegblhx5knAws4f4wAY6pgHMlvWEbEsxXyVG6UmBaToYs%2FfXzi3UT8f79L887KB1FVAsSgipS9Bryj77wA9LEWhB4YRsHj1pvFoZHvacIcn9TpE8c9wlLu0kj%2FHc2KHp3%2BslaOHnWbuaf2rpqxY%2BqDN51g1qHVYQdS37S7XpHV%2FbjUHab%2BK3mbxwB%2BFMsVO%2BrGYb2Xrk010l4vvMEfU9cvX1V%2BmRUYipTVDlG0%2Fzp9wOUKRv2zMj&X-Amz-Signature=ac7c67fd5fe9b080ef69851433bffb44daccc34d9d45f6183f0ab6809ab446b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVZY657%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyQGVixKZHCrmqmvjzbaZ5zzszghzeXK%2FurtxcBTJknQIgNcIDS%2FO9v2SR7VuhuFMhMRqeDHHzXeFz5%2Fy%2FlrEKXDoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrv7ktqNvN64YVNUCrcA2L45E82%2FW0gjtbNbrsNREMPg8Q4vsNXIo0dBtgDHn63juzH1d8WoLsQmKVHYeu%2FBOXXMdYb%2FA2JNIe9v9ldkaH4NSjO4KK4csNwD0gHaUCbdmuMSvmDVHvqfxZSrQazAcPhobfVW6Alq7B%2FpjCSNM06%2BAfK7wqvGb%2FssxRJFqfS6CEDLqfeUbuKad2l3CCQ4WH0vh5sqKMKCA9XWttvDwDVO3sPuMSm8rhBEcMZC3x27KCogyGYIO0aWyUBk0QkQJjP%2B14mKL413%2Fku61DSw9sMpnDcv81GyiNK7HCByDqbbkT3nKZUHTwqWg2LvtV53xNG9xxK5cFmsLgRR62DwVB7q3Xa9%2F97ngRVCR5f%2F5NLJ%2FEiqFQmnnEIrzvT4gpHrRivXGcLs919Y2APLwPFvh60uvXkx8UM1aprKWJbTM7oq6VqxyHVpWa%2Bw%2BOnyE1dAeaocyFOPAbUPw7f1F8I62V7uq%2Ff3UEUgEOjO1HNo1n7SEcCl8bpWuIsppGdmEW0UGDXoQe8p79%2BGh3ABRpXy8jlXF6iuM5If1s6QYpgxV2JsB51K92%2FZME5vHJNZqPZMm7bEgQCLwT10Qqpyobp0g3CkkCcgEBGOUIPxdKiwhA9HCc53fsq6AXdrCpkMLeI%2BMAGOqUBHeRLYriEUbZBAUeE6CaPrkeNdB5PCBaS11bsCrgkHiVkeiQ8hUiQY8scrUaa3lzPtD5P6odOpBh4YyHn%2By1mRi%2Bi0Yx9RP3ZeiFUJG5Bf0uKFDo8ok9aKpXUbKzRp3rRynRCb9K4sYGXXh4ObjwVfPGVy154Jm6ivAP7Fq4rjf3hKK64uxQsG59rLCT9vZUOSQ8rYEBQwpTyW76XWZ3MfTjVUJta&X-Amz-Signature=d57244f20e147bb07e84ac2476c10b84344dda600673d214fc18b521de99f1ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
