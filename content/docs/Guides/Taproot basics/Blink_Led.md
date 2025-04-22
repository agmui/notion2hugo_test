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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V25ZNDAR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIH%2BQQXwZ%2FPzF6quNprkn8lMoi28ve74DP8N5KaNp%2BIvGAiB37KtBJVVBCXKVyhIvxXQIYp8nlCJDuD54S%2B7ipSCJ3iqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMndtsyMweO2eQh1YZKtwDVlHnOzG9lyOTeukbudeEhL0Gu94ml4VOjNSFXGeYK%2F1PvWEpTYiXzpbgOxsdzXqKU5unAduLCUNBWsUceXbEyctDYRDnuDQt4QO86RF9BGZe3lEoSl7vqp7dHgqgd2NSGUVmMF2T%2B6MKcrF8TahiHQNvtxInm0PTZCGZ1xLqOmyi6Rt9J4uQx3DAPXfciRjxUJWL5JzAVXgJLHsiqZBbtod%2Fko%2BShUw6Nvi8A23DWVY5pglVnr305V%2Fmmv9hTmWTAoy7APuegQtF1%2FGTRXaUjKXrW%2FzJYleNVmnLyws60%2B3V1v%2F9lJWFIA9I5FCn5oEZi0%2B59J%2FvjfxvdEkJEnSbYo%2FHYkd0QDGnmUIDgCGrfxO7ymDnCPG5Ptm0pOPB7BnBzEaw6cPxXfGx69hjP4VPaH3sv%2BFVkrhxytQy354NEwjmn44EI%2FWXhTS2%2BFT6DhKE5uPi21%2FIHBkYXsUADmutYeWwbSE%2FNA6v%2FEqM%2F7Y7n%2BeuvjAjkNh%2BDFRkfEWJJ8i3nR0SVzYJrucPSgA%2Bs8Xlb5JcgTfw56Mi5OJW1AEGgOASIIWbwlrTmckW63%2FV2AL7Pao%2BXWJuQ3IITjw3mebvQY3hedFK0sFxItBXejqYRrMxsQ2Yd%2BhqnLCh12Mwx9WcwAY6pgEGAEyNDJd%2B8EZfIjDUel3sDkoXzYbiRP%2FJ4alsSpytaJEVWCfNAA3fHIS0fo8q7xg0ohnkybnalCdZTeR5PYl%2FRONex5TmD%2F3Q99h0LZSF7mkkAfTThPM1h6HLP0UWgrhT%2Fr%2BHi%2B7i3CFwn9rYtb9YrtuAOUMqa1MgLvph85OXoxI7KY%2Bg8%2FkrlcdsurFSLMH8AwL4IkYO1tTL12Pn7GvzXeSCaYYo&X-Amz-Signature=ae953a2c652cd202c482b1c5519c728cd51ed18ce3400c3dde88208e3ad05607&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEDKWJI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQC74SWrAraAToAjXO2H4bsWpRHh2OTKgAmXzbVFR%2BLD2QIgRfD6btSY1W%2BzoN4qq8t9%2BV2CQju12Fj4%2BfBrkflHBbEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRm1rDP9uDaBad6syrcA%2F3VwE%2FT2%2FGYs3WP8%2BohEwhBiK2Z21XAb145m6JwVJj4tfw2K3rn4EuH5WPJhujIFgWtUw%2BLoYpiXwfLtL7amnF97kqGAF3SsLtkxU%2FNGlQoWbGSy%2FIq0msKGE92OX6LYa1OPtbbElCw7rMdKwcSNBUhkQDqXG8kj9ehDjfVQtAd6xZcP61R823VFDGslBpQxKwVHA3YOAwc2RH93SrYh4t%2Fhpywk4B4hossjb9fBNrq%2FI58jE4rYCUWpiWqvy3S3mpAbjdXFk4bOcmGIsfLaiXpvGqR85Y2VgYkyqS9jDiYU1n6THdpNLE0UljO8x4CaU8CJEmm6FcqZO6M2O3uDlNTroLoIGQarx5%2BGBD0iOsJUk2a1GL3c0GZ3SmkE4t6qNx3fnHOHVlAIJD3ASilpa4V5y%2FJswbqiy6ElRWFEBOXuscb4tPFPzW5g9h085RXgVEXAeErdWLY1pCR1W2DNnoWfk%2B60PAVQ0XK4J2RqY%2F5gjAdmzB4PgsuJvUjtKwDa3de8yrd1uTk9v%2BE3bmZLafPhKkWsxI1HDqVnXjzW5ao0QvEXuY%2Bzd%2FgiSnMYWTAQDdMUUbWZf5o7t3dALtg8RuBwpmkFLb%2FSrM8PvrDzGZ4%2F4mz22QTt9dmVJGPMMjVnMAGOqUBuzQe9DNUG8B6%2FhgxxPZlW1MsKlToIgCLit%2FGE2EZdhmhVuG0EjakJH9kaktYUGOz8QJxDcAJJA%2BAJG7Wd4EkqvwUdJ%2BJcnHLrfUFmlSvOr6PyZULuikbU3mH5ut0IfrBzh2iDUTsH0L3JH7QQ3RrLObdpN1JHpMqz6U0gJUMkQ%2Becj8OTWDBLucuMU7ZUekpG4Rq2Wb3B%2BCK7QEJUN1aLwb3fwyy&X-Amz-Signature=e6df1cdd1ca5b29a96369883a0b2d9795db9eda8dae2f7123556e94c11869938&X-Amz-SignedHeaders=host&x-id=GetObject)

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
