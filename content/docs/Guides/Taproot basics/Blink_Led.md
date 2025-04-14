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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MYXHO6D%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiRUfvhcx35WPc3YFTR4ujKvuYYS0%2BXZH5EyEp3CEY%2BQIhAOSyku9xSRO4osZvS%2FkBdHVCFvoktK7JM67Ptb0xuKu%2FKv8DCBcQABoMNjM3NDIzMTgzODA1IgyNZK5m7ToWi6LLkbkq3ANgqTlBf3C%2B6HesrKjSe6PDFiHtXULK0Cg2j%2B9%2Fwn%2Bk9mJyaRV4aaTCMaQeAIh3XuHY00FMWj70O%2FdGUQV8OxsMrx8kuJEbJd7k0SdgwAFHXjFDnNKoQVNSCFVdXICAhCFxNmb7nboY67Gjn%2Fwxt3Rl%2Bkk5vFJAdq08ZV41a%2BxJjDF%2F%2B7r%2F9NngDkyNVecgHbVsLiFJNLn%2BfgyH1ONHO1ZCTe0%2FGdJA7Xp68rlCn3R1jtRK8i9rhuRnA9cNR%2FZEr%2Fkbg%2B0VfnTfEdEFeDsb0nWvzqTlQwtBHhlS3Dw%2Bl04jN6Fp13TUFG1cYE6EU3IlJsQ%2BVLdKbYy1%2B0IO4Mw%2B8oh7m7KmacEA%2FTMWn8h8T3GQXRblyqLkxLA8YHWMUSO%2Fk%2FJnzoAF6DdCSpzDLgb%2Bx%2FrlO2KtTiLh5zRUouzaua550Ttkn9jnj9CUGOzITb2HIIgKurtMEwBv67a58hileBjl9CjSdmdHi73q9kgfdrr%2FYXsAQzMCBCIsBlCFyJv4W%2B9L0wxsceyMRQ0qQmxqQSs4T52XCDn%2BIWALM4qD%2FcDeJPTbzOMbCKlB7QzHWaqSTX3hSUUd5lxwMzv3bxvu%2FRVG1EZ5UKapQhzSiAa%2Fomiw5b%2BKFmcywzb5p6NYEjCAqPS%2FBjqkAZVU%2BMVGckNSdqmBvDzYMV%2FXEDlHD1QVZniurGCVmlvFOdRXOnAzeopc7bX2Vh8NctKj1%2Fo9dtWQIuK%2FRFigqhWaK068Cc97h%2BPFHsBxPXMu7mDShnSahsQC7dvuTwHV%2Fckgx%2BEk6wfcaKwUB%2Ba3mQWLEddTh3shKfdZgbXUJbat3SRpa%2FKpo%2Fu%2FNyhWclPHQ6DQzYEha9vy6v0zf9zHkqz%2BGo1B&X-Amz-Signature=eba22ed3a73c977f1837d1cc5afdddbac6b377982cfa9e95bc32bea8118d355b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXI6ENM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHKjOZhw692qpzHxUhWx245%2B7LXu27QOUm%2FMzyQIifwIgbJ5yjJBOlxnULl1Nx1kSjXeFmMLv9D0gtNGcR%2F2yR5gq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJnPsC%2F2QTRhHUwJxSrcA800RNsYMnqgdX%2BCk5f77amMPymy5fHmqTtWKlSHHsWuWSLd2ka0TV%2FT3wMx%2FjhB9YcQkzvchIhu2T1qPBHHX5g6jHKq6j1X8Y5Ei42cMsBLVzxyLjVZVKAWgZtZmtmEn9CYsoizKzQpP8p71k2RxQqSHaV%2FDGVpT3X4dBZCuzTd7%2BChDa2j13VzldxL00B7S25QlTj6MmYvyeckYkBsAaCEjS4tq%2BOUBm3mehuHxAXOVSjHp0xYm8Q1wpuuSCiNJAbD713CIhb2XZ7pkAHd8h2EzBgOGWkVRXuiWZa%2Bi7buc0T7sVQ5CnXiG0nrnPs3canZsTPM6Jr8cnH72fQvB23G3ZPzcBXTTJlkPW629zqzwc1VHQ6PsFO0LYq%2FzmvXPRgqizt9ODzDB%2BytN15ryhubgfbQWPoFnNEWedZUsVcKGANyY9HDDJj541MhHI83MYmdlU0MfXkfMFSiNHCTdkZeDuPq5Yj%2BUt%2FwmiZJLbqIjmb7hRdR16n0wzf8YCQrXLeRR0OT8lo9p%2Fqi7SskY9mmDrvepW3TxWwXNL8PM4JBfpnT8ATme86dgk1GV19JoihdJgutp9oFAHbucffImuWbjY0TcdN%2F1yTGnqU%2FaYaicyFaEira8vOvGM2PMMuo9L8GOqUBqOdEmtDvOiZJl5LO9i7LcvC6%2BSNKprxtwNHankhrQi6y5wtgVb9woIiDf3tse%2Fl9LeXkQaelCLEDWKmQ3z7c%2FL7yKSoVISX%2F%2B%2Fn3zSTNaOXy7gNcA3YqyAcyjAEa96VRe24cM1bdZWyskyhKvsnad%2F42ntxeVyv0gUpGg9mxv6ecKrrTeMBS5MhMQUuTULux5hbukRdb8jyKu9feKCC%2FzBJ3c738&X-Amz-Signature=c4462a4d39b564e2c3e02c1b245ab5d49c27293811e67f7df6613fe711f9912e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
