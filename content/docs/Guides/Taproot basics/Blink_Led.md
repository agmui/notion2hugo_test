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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MJHKDX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS8VRWrigIumqOzfdH7iOno4Qet7Kz0qCluOmeQKZoVQIgdByQH51gerc1c7GRNO1yBuqoknCsAPTTno598MA8MbYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBRycEjXFu9fm9g%2ByrcA8PNeZcFqq%2BTkno8lVmVTj4tN0onsVPs9%2BEp91wmfpz2TixyEabK31zqXfpXH6d2xMd%2Fv9Z%2Fgwk4XjPc2QgUeyjSeBSkAZt1cv1jWw8BCnsY87M7GEiNyakGBQRV%2Fbmjbp%2Bw4Z%2FbuHoB0k9PqIePt0UDSL%2BPAC%2BeFIieARBkpAigh%2Ft7GXCtPsCNMtTwW02iWO%2FOwNqHlPrf4SwwY%2BvyzUOh3ZZkQfYRL5OVKQAMtrVcBmn6rb0ujDDwnVbHF1BOFr%2Fwgv0Sjx6QTwyj3SPv6f%2BcNDd5hB5Md2tBqkdNoyY2QKkOVGX4wpFOzoEfQ3Tg1FjHfBZk8x3GZzPmz3lNaGdojmmtT5d%2Bwm6R89WWArvlxJPM0%2BaIBbIJn%2By%2BRb5lVGICynXxkCzmJCUQ9pH7STIOZxjoTm0I%2BwMGrU8WNpjQ%2Bq%2FrDbhalNbQguJHD2o5dvUmildLFd3z%2FtgRdy%2FgejtCZGoM955vds6Jryp6Qu9d0woM7jB%2BBB2uD23mPzE%2BJbHKWTs3Hg6vlU5SO%2FyqtVKNUCKTQ%2F0yWHKG8V5I%2BJtwwD3WVWDg9OXfd97gbKRWbld%2Fls4skgIgormUbMlWw1Qs8L9Htwhbygn%2BKgBPWpIxUBD7UD9qdI2g7hvaMPzK3L0GOqUBZruVE4iRdNra13ed7BD%2FAf5jymcP9NW3oRpsFSPGaiBRd%2Ftl%2FKYNAzCpAjgtfa%2BWTmWeNHnBwJn03T3eCTzWnaBsbgqdf0vjGrmivn9RKuLOi7qgTHjd%2Bu%2FpYTU07KnqhSuQrLl3DUfQbQwyZCBx%2B%2FN5vF89P1%2FycYeEeSeXexJYnOnt%2FkcI6yTTEupnrp%2FDEEHR5t%2B50cpZrBiZfzOrZrDXBGib&X-Amz-Signature=50a53ee4437f90a28f30e2c4088f689023ed8e18b32e838a72280708ca9d0512&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPTLFKWY%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQhwzFP6tdaMSY%2BUocYTPC%2FGxkWD8QqieYTmigIqm4xAIhAJKYW9IH4cCVd%2F%2Bgg1pUK9QsNKr6tMkhldqwOeXTL3nBKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwal0h3%2F12HkTu2OKAq3APiYvydxcD1mL4RVSdVCmZeSoLc%2F5g3e3tLLb%2Fjk4yxsFu1r3XIQ55lY%2B%2FNF%2BdcSMI9mpJXGiGUuCLgdk0ZlIbcGzPhZLFZv56ME4DF8dgWOKNQ%2BS%2BKGtgWNwFjTFnohw0JXGRkC0g1zNfcdDJI%2FMxc3uI1M3bH9ua%2BnKjoYai%2BZsZdnPJqKFn4Y2zQo74A4blTEQbG9CZKr0tMKtx8MqPu%2FSoFbOSToO3gS%2FHzrGKw1GNKVXdOwJEjP5WuxtMfKDsnlErN%2BhcZebk5OpihE2wUx%2Fb8yX6MKvseb887UyP%2BqjAUPZgloIgl02r8ILBVkvsmIX16tEynzVQHwkAOsd0n5qy%2BUI%2B5Jjg0hpZ8t73eE6O%2Bltz%2B92y3V%2BAc0Pll9%2BkTE9t%2FtDIKoKi0XJZAfdebM6eNVWUOC36%2F8FIsWUZ2QTd06wDiD4nbueXm5gJ3XlLknCyjVqd56wFtmTthkEwTnfBuPwa%2FzFIYRIRGLr12aCFMDNA%2B%2Frrq%2BT2rUiZghu%2B4b6FrIVC1TRpu%2FpJeDz4x8f36c3F6lH6rTSXPp99nwg6k7Qc24esm3R5AyKZgDM6ZRmYmEbUk7N86cQun9mEwXqmOJA%2BiW9jcHKLQ4QmiQKkLAbLizCLnMsE%2B4jD4yty9BjqkAS%2BtFTGqmSu%2BBppa9rvGDuj8wB2aBD9j3KFeNV4I6J77RwjbW0%2BrVmRGk8sFs27x%2FkErLxaOI6cyADvlsGFxM03uAGPqsCzkcMV%2F1oHj75mIS1O%2Fj1VDxPYE1eRmozJOJBhhcIohklCGKwrNxDXN%2FwATl9sNM2cRCaOYMpVbQPio83PE%2BdILAIpTg2T8NFE%2FJtIV6fmCmDNR0tx6DSWVGmavYMpY&X-Amz-Signature=7dcf45f633bc8d6cb97a5794711d3059980ce29199fb93ccf2cfb9e5e85bb4e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
