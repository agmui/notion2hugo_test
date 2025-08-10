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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XINSO23U%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiHqhL5LZrB8exLj7QUB2uvAOfdMYBLPHz5t6xxfm%2BTQIgY5ErKj6kTz%2Fc%2FtYk3OhPGFbvVZpdgPolk9BoBwg9e4MqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYdJwE7uim%2Bv2DMxCrcA%2BsLk%2BZfqxJkkDmFpgnOkwP01OtGFGjjkZVMCUi54y9H%2FIIr%2FuBHFD4txW1QFY30t1esK3CF34KCSowy%2BldDNYiJ7DukHKQ89jX7UsuecCelUrB5HNgfsnaEyjmrY2nW%2B8REuDbKrm9%2FE0L8eiCAA8qmMZCys6WK8GAvg4Clxq2jm3HYU16xSzcUc0GQrv833aOb6DOAt0RvEBNYYkA%2B27KmWyTL41QeZa858Fvmk2MqH2e5mSrHOZdkx0R2Lzwih997cYgymnNzW0m5nf%2FTLfOi2h7G7Cy%2ByRVouNuiJ1MHLLBO6NYlQM5ukRtgiUiH5fnqKMxN%2Fv784CA8%2Fh7hP6raiByuFjjWjageiP%2FbFpKzp%2BfjO%2Bw9164cm2O9BVxHKVRPC2mIb%2FfQWGwe8E6l2ddoy%2FXzskIWx3%2B2gvT40ykDDMsMz0YT%2B00pV0mzt10dC2xloOhzNVkz0KzA%2Fq8B2GhWdFvUGioq4DM3LI1B6J5WK%2FvoynI%2BjL5gCSZjqcnouZ4Tg4IsllRnJ3F4Eey89RYAgtpqKOZGT2Y1S%2FFfIP5qVmXI6ZDCkVy0ZUdyE0otIcOR90FjDfdSorWpUwejKI0DtJfhG3i0foqicBqUVNN2mlUUmsqJEBNTEZftMIX14MQGOqUBNFdiKu1GOEGXe%2BRHJdiXIGZeYK%2F4PTOVKgmqud4a0G9Xiw%2BUvCCG8MDmOVLYrrAyWB0tKqKz7NhGkH1QsHH8V7O5EsxRpVorGDMlpkythFLncGMm2kSS5P1ezVkkasNEj8W6S7t6aEEtLBm3dAXYXCNH9KwI27RIAg%2FMsbiAi%2BUgJLkvWA4mARW5YeVvzQszKJY7xh79yJy3YI1xfJhkEms3oGBH&X-Amz-Signature=64273920e9a0f3b34eeb7c756c49f62d92c2d09110593b519f20b3b767d2bcdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ODCSTZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlqtnolF5fK94he3FyYqKOau%2FXHCP9eYn76sagTMbv3AiEA5vbFDilBLbp70xJX6c%2FrMEi%2BcrH3bre%2BAtl3Vw9WGB4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMynZ8iGBTHxttxkvSrcA5tUGEK4JvENGnFtV5CmYpW%2FI%2F2pr3JULEJd5q3XGUMOI73VpBgG7tnOVXCEJHHuIGBWaMrAAxRFg4Kwz5Ov4rj2jxO957rlVskFgj1UiaPOT8Yf3n9MLwCjV%2FCMadNoxgTZch95AlJsgttkbpV8KoMf5TGQ04W1n9nVc%2BhbWw8BDOUfp4Rx8U5Xm5V4atok0h61OJnXSboYOZ6oulcnfDSz9AkkD1SG7MtVauAiwJK1SwWUhjP%2FYNVo%2BuYQFyIQRBmS0kvLHYPqIzbH04NyoX086erdvCna8t1LkPlvmxTPKO1Zu0MfJEjcFGRl2Xf0oreGV330FPdzAiB2RjfiREjo7%2F6zJrildrUEm2FAnlOaw3pfFwj52iNzdCGMp3WYhLGreQBGxWpqcKIfNtBn5PNeSRG2dSYVneTvX%2FimNWHGk7iuFlcgkbqE1wDiPA%2BwcLik4PeLmoo3U5FfZzcmV%2BYeIGbMKI6wKny38jPyr%2BbZxatDix5GxwipHm%2B8u78IYnMtr9HeOp4j4dBEiGpds0m03lcE8HuRHUdXxyYTknKU9%2B%2BvRMJTvSxaRe9Stv84O60rmTXhd1KmTquJNJeskfAffX5SBMhBTNT0r8mXXCt5V%2ByLREWBizeH%2BBC9MMf14MQGOqUB4cjcYPZZrm3ALNUbZacOIsH%2FPb3Xnslv9C3KnkONjtmF5YNbNhQ2aCw61lWbzeGrSqLjgsu8F1iNHPWAP%2B9B7okvOT39eoI8o2z6SZEzWc85eTEJKcmPmk4yGI6i1CfUfprQ%2BJmfjSY5XLVA4%2BjevBqOmsJ4pvj4lPgs9NjCg9Ua00TK8fM1nehLZPBkLe7bdy1gPZ9cGetx4YXF8yIEFxztgEgu&X-Amz-Signature=3b423abe089224689edadfc8e26630632339302edf78f5a7e70087c9119aced9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
