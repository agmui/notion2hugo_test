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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNAPMJPD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5BRC4haYoN7uVxnNCLiy0zKgKOVkmfyt2aptR7nZuQwIhAL3HxsAfA58JToWb%2F8TLNWbCDWlu5qpC8gRLY23QTtLyKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1MchfOKkcC3o7Me0q3AN0vCGOdzgk1TYlxh%2F6UVaHskqWuuRPt1kInd889Yoi5F0SQWGHItCHTYr3Leu%2FdagqntXXcoNKF8crSJaOJRpWpfRpx8Q2Fn%2BJGpCCcoZgUZznb9Tpx09zz9oDcp%2BWFtDbzkrnm0qxW%2FQrkwRGrpjQO9x3wQXQZUZeP5v%2FfCM%2B5qifTD0ncvz0HCB90RgeT13K%2F0vQL7SH%2BYEvIvJ81heQ7Wd3x%2By1xzW2KdTQoPsL4V89LZ8LDZdREAzvcglZOvIrUQ9vr2e6A6WvGXIQ4YeHPCXi5TI0X65HR3dM0OApXXj4DoR5jaB%2Fw%2F69HA%2B0AQIFKgt8aGJyXMSOrTjAhbfbVSCn18E2BQ%2BaSHtIOJdioTgy03WjfozgSC%2Bz4ny80NE57%2BQBb8r92Z%2FfWzuK6FnkqvfhAd7iQ1TuYsxIPrA7%2B6s1tzQqzBkdbntaR2TiTSUXh%2FcXlkdxvklKU6YUjjzhIbk%2FmWZOTnVOIQ2%2FW9U8h01HZwE9H7bjNMQV9bX8wZr2yOiErVVUUkId0rg6zrPoWWpDKnEKMd9OZ4ZgfY0scAdh8giOU1YTr4PrYgYDidNsss8hUpKKUnF5GvI1LKoZjmwGjU5RkoGh4dVtEBLBf85WLVus559pOBQxpTDgxfnDBjqkAUEqa8mk65X2TXH1Ygh3MJ9b%2BTVW3Lr3w4KoJpGNasuTskB7a4qOr7SPBX%2F3RHY6vvRAFlMVlJthvO2jEU%2BSzS%2FNLnwujpFzrxzaL8GQ5N%2BCe%2BD6HpIgo68DU8X6%2FTycXLvy5DLMWkRz%2FdCJiD3w3bHgCuP%2BKCJxp6JXaiffaWLcCnbannT7qyeFDtYehX3CzJgm0PyLvpXqPwfRgUwYAfqSEKit&X-Amz-Signature=f28ef184958ffdc6d0d90d1631ec6ce82eb4e9d08a759bdc66567457d10311cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LELT4M%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUPZ6UzmlP1fZ0rAwh6i06WREoALqHT55ryqzQ6i64XAIgPDlgwVStzKBxG87QP6EBz%2B7jvCCuvLend%2BpXJy6JRPIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdMXc6GgQMgezFBPSrcAwD4wofSaH%2BJnUIVb8MTNiDbczOpH7fUoVx%2BsrODmnBNUeMhkAJeLI2VAckj0DxpnxPSCeccIzeEnjdbl7r3ihXH5iDvGGW9FMEHeBDY4P10Uqh2pZ70g%2BDLYCgYL%2BYvdGoOoYxsfgZIRl1lkoOwMGC8bdIHf51G6iwo%2Fz6mVKlXY9fU2BjGAsk2DKI3uD0ZnQ4g%2F1tjog2LWH9WozUZV8zINK5czGxXahvoUlcMjUzqbpUMUegY3tIRSLzxzuxY%2B8SBuzs9Ued%2FlfBZWJK1idLhP78Wu1hDuZCJEo4tt8IlPrm%2FvGNEnWNGZeRNnIG7d8p2YmqjyloTTIqKg0G3v05KdfXKz5iNjlLEf16kCG0J3oUiaz90fHTkcp4iCqWr5AfaZF4WDYKUktXekTOjFFyIbfs46yI06Rf35xIpjraoYMi7ZvKdUqKJ4wLW7m0Hd6Kpk2HvwwoxeUa3UkX47DjM9LA5gsWA2dcTUczBIToD80JNsp%2FCZ%2FLBCl1t6YeCTtP1iKJMSxtj25IWknwwC5392SR1JrbeBPbEaqrStQ82sz2S%2BeoPFddNpS2FzWIiXZNhvJqjc4dM7MRFkWiwx28o3tKk2ac%2BQyLoaiNa3j045F5Td4lVR6WoDbdbMNvF%2BcMGOqUBWhgAzsuDUi5NdXmgQkTIHv3HrnE4OuMYp%2FLU5XrjGt59q3pxx%2BkUK3B%2FLJzF2fmx60JHv21gLc6r%2Flm1hnRM80434A4xttiiygExp%2BUzWNckiO7NRm5Qn%2F917jFegHiuM13GUQB93ndP33nVJrvjg0MEbDQyghzbhNQ1hdrAXt6CTGu0CettromAroeNrwuPPTy%2Bh%2Fv3sKaQ8mkRUquW2u4pc2Xy&X-Amz-Signature=de1e8e30d51e52cdb0ae182eddd8c5e8ff07ff6183df66df67cb2e0ff16a81cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
