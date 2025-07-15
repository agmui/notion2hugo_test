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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GT6VBVY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHbxAuHi5JuVJD2Ky%2FnxaumCm%2FrEKJ1svw%2FFtun7uCsmAiB%2FLjQC%2FRVvqR27VlsUAGyG2BcQKtjNdcPoXKAqUJQ2iCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMXwHfnwYFenBDTbxkKtwDfLXk436p6s24C9Z1asT0o3PBte%2BLL%2FjjYTJ5zMYceCd%2B8dCd7Q2aPrCHLB0OR2h1UBEQ3CQB0m0VGevis704Dm3bdHR7t9G7K6r%2F2lYzimioJ3%2BL4kWfi7kZDKqnYuzi%2BRPe5fDyafS2nEPzzG8IIVFnyPU2hr9YlYTccueM6C46cCWrQtwwTIkodZBW%2B%2BuNJgDH%2B7xc%2FiEXLgMSCZXm2z30wSY6aMIxKjyGZPkqsS68DojZqB26hwJ1SUGVocrBpg%2ByfXmFS%2FXvexUdk6FGiolVK16d0ElxWMPpVPmeqVOTTtMM2o1fzkmKaNd%2BR%2FoCGtUh4iMiwNIwiHNTzScoSU70O3twzfP01RRSlvCJ4T%2FwLR%2BHS2B6FThpQz%2BeOac2gGyhTNQgNjTNL8P8eciEvX9qoaLn1o%2Fv9qvWsW9QeZHRxB3xYwPa1qyJ4OdzaWoh%2F4t71gC2wynpe5iKXpMD%2FbDtJYLp0NuPjVHass9Y8nrYrVb5PlOcFDk3zpBzS2OQhqfMbN2WKLkW9i6XUwKxb2hWpzGqAiHV%2BYEuL4%2FNqROgG4vVii8qKXRuMNXXKBytkeYlOzfTmV5o0%2B3yl1wrHc%2FBXOB0InOrrggQH08%2FnRCMx%2BOgK1ottuN4rNow3KTbwwY6pgERUYON1bK3M1LE%2BqCaQY3WXRH8pWD2SZN2Kd3zCyq8KeroKuPoatsXpFpRTYqsZD%2FonWqi4f0d2wa3Ppr2rqOmhifjDRIv%2FyfO1CA8%2F0yMinYHj6ekv%2FfZ00g8Cujw303rVujfEdgRuZlK%2FxZeP9zy8HzRjqB93y%2Bfkq0nZZC0F%2BnWVGGacrjEpLWaOmBHU91htbO3HisB40RzgTUTXUA1Kopv3SfS&X-Amz-Signature=7399fddbb69bac672f6bb552678c032fb2be2a17620a0aaadf0c6bb5a3b01abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBHEN3IE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDzZZWQItr1PxCCgf1BUwZ9z73F4OG5P6ww%2B6k6glxxEAIhAMyt2Y4RM5WIdIZuhAff%2FRIEIFrJxKbuVSs%2B08%2BAoQ1zKv8DCE8QABoMNjM3NDIzMTgzODA1Igzwmty3g17hWa%2BkBmMq3ANtw%2Bdoz0eZ07XDKC6p0gkq8yyZHs15G7zMWxtKcVbsunCpSIRktbaVuZosFhvQDfXgteFOKm4vwXVeNMegNAGoloLefAcCXoYkbLGh2cSgDxAXqVC%2FI36Y3xPG4gDwbZOsn%2BJwbotOYBrvIToTnWB5vyH08%2FmZ51CKkG5U9Kd2yb2TTHDliGCvNDPJD77HTRC%2B2qdbwlncoIfBWqt8%2Fo7TVYeuJPtaNceiLKc6%2B248NRS3oiLjXvLyPoothuwSCg0aAUxWnu%2F3hAYLWMRut9m75dodvDt9hR6ZYbwcPCSH7UFSXss6ajoGt4tyTfSzWI7YVaFo4HyC%2FzEtE2oQbzBBWOHAx%2F06x4v4zu6MMDNn5pbXl8%2FfJn6WSIKVwBQkYnz5Cp%2BnIf6OjL%2BqWtUrNgg%2Bvq9pqIaGPwgHFyjDoLu4Pt8cXH6cMzWl7qSI2f4JS8mE5Ac3QgWqGvb5mSuyacDPMReHQBd1N%2FzwojVN4BhBSqjTCFrpPhyTuWx1Tf8f5nwpP4pa6zMW%2FcGWICsLDzi9HEjiZBzgWEWsO2abAD4xYPNdg5RWUyDXehejBDlmr4EK3AI7afPLLqUaI0DXfML5oAqXq%2FeQda4Csl2cH%2BkvLXoOsZo29mzZErdd3jCMpdvDBjqkAaQ%2FysxwjRC5NXYc3W9bMXms4fSbkdn8fNdT4TtZDk%2FuTAici5iIOBlhfc3t2iKqDuG4VXv%2BeiF9wxPOjEZls5c0MzmT2O2bIDfByDsweamxKQyV0bydKegC3vGm19KkRUDylpRwZq5cGAnjIbL2hbp7BG9UhVToJiLeTy8rFI%2BQylRW23%2BRJm1m5F%2By68QcOj0%2FE6ocD0MY4p%2FsuOa5Rp6VpGBE&X-Amz-Signature=6e79807f303e2d1f4f7b5273e58efd5802ae808c17b21079f4b2c5489350ab87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
