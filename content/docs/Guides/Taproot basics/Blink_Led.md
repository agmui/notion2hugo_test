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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSY3TIED%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDYZZGgXVSlT7t0CNA7e%2BvsI%2FEqcj424h6aJEsuV3npwQIgL%2Fffbs7%2Fhg7f5x7RdiUVfY7Ip4edNbV2R2MYHQ580qAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDARZnMiDqATdvu1xnSrcA1GUHV8buhyKmgOdA6MrU9sEDxB6rOEwJJDN3qSxs5miY7fmYX9girB5CE6RMItzNn2p4TwnkEskEhmsmfZb19PIcXagG2hf8RYk%2B2tE998CUH0QsI7Ag2rQI6dMbV2Lda8ioJ1Ue8E0yLL5FZ%2FN77DhM875t6eZvI5NgRwoSXL5uVTlOIrfZqOYoXE3oanIeJ6MK9jPIh9tDKh04HvHvqv2kzKxXtqpTBOOXgmPdUTD23zwzB4cxv%2FaQgzBpAC1dMDwAbHjCoAeYwZ2sGr02rhZ3n%2FP%2BnsozYb%2FHRziKAU9Jbfq%2Fp2wMtJ7ZldDiBzaKV5sD8sL07h%2BVYUBWxweQkTA9i80WeCLCxGwH9zXSgow9YOIW4HEFoM7L5tHazQN5rCYdGwrsLrzW4mcZ5K3%2BiKjGWTbV8FspEhMubhvnFLG6xn2ccYT28VhgSBpWXOkqRgeDqJFLNa1rRX8ecJqUiNV5mCTjQvm%2FmX5G2%2BWzeqcXBrbcNslY7JXQ7fF4s1vE4aNZZk%2F833A5AmII47Gf02r5xhU%2Fh03Bz9dkRWH5n44u2fH6kev0hKLk8rxZY4mgeK8q7eITXZk%2FKTzxlkbuF1RdrHPEg8%2BWk4qWzJ7aNsL8Xyf6vqz7iQwLCpmMKG73sAGOqUBRYjoxq9xGQr9HfmWiqOpioI3wQVXGuVL58vW9izJeIOddIbfBwKO4QGvlkzgs05sJYgrZsnT%2BrXf6W8%2BTTZa8ZX9uIxH5xlFR85euJSSzw2doukG8AYPtwFijKqogVvRReVHYWn2QQGPl5mO3Dvu4NZY8VIzra%2FM3zZpJGS6qzd5IrNHY9ambAsmEkEhd66%2FknWkYPV33HJ5IAAxeWwNAAWoV0du&X-Amz-Signature=053d0e846a89cac6fe04463b8bb8fd0dc897583c7a4ca95e530c1d09ff982114&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQO5OB3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGOMMhutqhCcGDxMUnwcHPhSMSFz%2FEdrEUIbQRvxa8h5AiEAk043%2BF3AldiqytbugSzFJbrAI77y4oMpjZriqdIp8roq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAH1Mf%2FM3WI8hu0SJyrcA0XrSF6XxkwKtulXBlt4BeiAu5iPIHWuoKig%2BF%2BRGk3uIvdtVoDhlpS%2BNVHuix1L3PSLYa%2FQizIw9V62IUOzQHoPXQmqXyywB6I25LAVolquMJwp1%2Fk8pRMpjBV1M8RG6fSKEMbILCvoZ4AbRJn6whFXM2aIUY897c4trGM%2FU5wGd12FigvzhLIHHRtSQbQwoEyfTo8qzb3jFawA9qjmTcCxUHHYdZxQJhvBuPBTgkLUF4COYyqAD4A2udrE9b6XhyJNBhn55qxpR2Sa5yJPY98OXauqThJBK8HHZSXSqrgwk1W73eaJ1LQAdVjgRjAF9SWgSWzIgSiGP8sqDZ%2FpyvjpbuDxxW5RXom%2FewVp4A3qDRgPuOmTlxRx75KHn33EdLqafiaE0t%2BjnbBQEareGMTfWUwEjGks7F99qdUVllqJmwKEl1mr09%2BQ2YpV%2BVnbgrcTfxnWiCq24xzDIYN364A68a4L8ivSES9HReEXOiqQ%2BfIY%2BFE50%2Bsdbq%2BGdwlFLkkJBezrS%2Fjhcd8jZpdc42mB2d%2Bklh28%2BdV8fFvkzrKj8xSxl5VPr10LoWsCYs%2FSfMf4d5%2B28tqkyaKjA%2FcC%2BPQex3ApznP1ruBWl6RpwEOHsKmNqHqRl9MRuLn4MO663sAGOqUBiQQ8lRvV3mm%2FyoVfp4YKyk51bMQ%2FgFJ9DYE9si1blENwxEUZWVeVc92NLK6bPRdqJLSWJf2Do2otYi5z2ZDL%2FW4mo2aGFtYJuNa48kCB4UviV%2FG5Uc6nsjBa1jyqrXLwYIpjinzpisZg4Uj2vxMnSqAymHrl9fjKbK6Y1SJvgB6oEBLqCVZws3BcScAeGBzHIHUQ%2BopMDIYTgB3ikGaqbejYm78t&X-Amz-Signature=8e4765cd53fd5a776859cf85923af6c4599e4549001aaa77237b96a28d966343&X-Amz-SignedHeaders=host&x-id=GetObject)

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
