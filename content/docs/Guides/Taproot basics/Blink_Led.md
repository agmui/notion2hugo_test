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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAQELE4W%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD1gPif4xlRiMmX9E%2FNUNLUiteitblBIRCrD7oFTYkKzAIhALdFRoL%2FmIxP7gxCDchfVSLUqKBCGAtVX0lUlDpc2QGDKv8DCHkQABoMNjM3NDIzMTgzODA1Igx5deFEE0%2B1d3U5FuYq3ANqXXuCEygL%2B1X0WB2yHG24huqjnKq5Dg8HzOaVeLMJWCuyt8HSlfgzazurK8PCOG%2BWZs%2BwgirTJy0LTdklE5juRTbdvAfILVQn2R0iFYyQvHGynDKkOw3nUwgt8Gx4ypkNvlskPkc1hqHPoMqzYlFt2OHZmGTN0W0eswcyXpFFbJShZhgMW6QhD3QDeR9lEfMqFw2yOFV01WW3yhHmZ2EpgVHNA5sdGG4dvUG2c8jB785IBsVwXECdHbPBuKFrnHP5cC94cnM2%2ByFmcuM4Ym2smWznBTtO5siuPzNactkuAVIRzwfgIeJP3%2B7UwK7ImZ4NLAk0F0Ljs68d1rxylq%2BX%2F4v3XxSkPuW1ZuFtQXDZsoLAwNsXtTQzOuWXl1WJBNd70BUgFiwVJI%2BG7BBuT4fRk3AlEGvW0x%2B9gNOvqRLwpihsMn8NebVrltlhmqWq5IlVNg5ZNAsN2R3lW9W8HZklVWlmC7v6HZrWWKYczyXiG2cBt2s8W1ObG6Km%2Bg8hsvqr44nSjf7X3Lw0yFKniSFCmFGCjJgkXIiwUNn23qfydRJYXjPWluDhl9wMq8qAgWC5KPbbcyZXa3a5XV9DXHQHIO2QmfPLcqAz%2BGswR0X%2FDxafpadWgeUr1NT0JzCjjYK%2BBjqkAUgOhaEgZa3KvaILMIVwt0DtRAQZ6uvF%2FO6kK8AN5u9KZK1DGZbMEteW6Y32BvwT0stiF7bfiX4U8dXgKbmaC403WZdJoYAt3Doyn7dvHWQR4vdOuhUyc4ywJoP5f8SkJcIZRj6Qis8rlsCtpaZbxrpXLxJWGb7YMuDV%2Fay26WmHdolveVnHvSUVIVE1cdV02OwIb3BIgDgLcCCn9cMAU5GowZ3g&X-Amz-Signature=f56293c204c991e8b644edc4819fabb1462ed73de67bb97e252157e0b37d152a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OSZEFLP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD7BKGl3S%2BibcnXycOoi2nUXBOUmHIwZnHg5GMX5882uAIhAO5lUmUvSILkWoS1qnq%2BnE8zIzhk6TwWbSN217DBFlE%2BKv8DCHkQABoMNjM3NDIzMTgzODA1IgycoVY4f5Yk8Ir%2BPJIq3AOw%2BMJERyCRbLauZe4ApgVMlpDth38w6ooWPVDy4QUES0tTF9VFiasnBb7RfoFFt4jn%2BbffUKiiehWi6y2jLoNY%2FH2q98IfpMoqIVwEIebk35VFlTbYUT7mqQrKu5a81%2Fwu8pmwpOkwnRQx7djZk9wUPTfUTg%2FlREaGH7thTgw41khYYSdBjdajWEeCodwXuMstmOykrigvgUno10lI%2FM6KHrixqdUYf%2FzPUmZ6ISuqVkZKns%2BbBJ0894I0JZMKff%2FiTAVqw0UCuhJ03NMX4jUIGpnJDROmi5JslDdKOLZ%2F8S5YI7QQDcGAqAd9hL5WjlwWpPCDVa4JLapFP07ad3T6OE92WP6Jqs72GPF1tPybN4TNxU1WC7uDs%2Bb4SjWjSPJljWPODAsMDNYIlo7LefHKuQoRDfxsmbw6YxHlAbin3UJJsobm2GOXkM1kDlzxDLqUfIPjWbdmnDVabUAj2YWDNm0GMIY0K7w3q4G5RMr4V82fctyYns1FTGKFtdTCP%2FAdku1shKV16AVpbuu7k7MUsjUMd4o1eWtRgM996rQXWpn6QWdgd5TCosgUWF8qRbjocEQUcz4U17v%2BrJIyVZBnZZSoxH9pB%2BC03x7ev77U%2BET2CjHjdpatVHB6UDDZjYK%2BBjqkATpx%2BSO2mbPwRgFsQa4KQgEcbqJO5UmUp17X3zDm6YCMNP1qZPmb5kJP7CDbqDkGCtnEjIQF0yNamEOmwTJkEncwZEn8LYbiz9v2Cb4UyhHg%2Bd%2BJz4gWV3gGA7jZ6YPQ%2BJEN8iQc0LrR%2B3B09JhAVV99IPIPgMY2s8JB67Ka37JPQkzA%2FPxoWM6yz7L3jPzFSbmK5MTRvLyRto%2B6dy0bUxzaDnqx&X-Amz-Signature=012a51d8bc4f84a1210f442fbfec4ad353ba574373c7c445383d00d1f64fd32b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
