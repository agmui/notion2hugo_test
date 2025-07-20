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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLUPCBZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTjTh5EddlTmV5G%2BkOmOJClg44xGDVC2lpFdnqVDha8AIhAIDx20iZrU1RG5X1i2MX7mwoc1Z9mt2NY75lByNvTIpHKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FH7zVpU6leQVdii8q3APVCZN9vMTRlU8SmvCPs%2Bto2tC09xbYGYgBRkvyolWxS8E9qoVIeXkwc9BZUQeGTH5YHAdKBWwpCktGNt6KH7HUKtKrXvbdqbMgQF6XtdSq%2B3LtbCl61u%2B1%2FtAG%2FCj7UEdBOPNgw2tAyV4gZQ5ESCsrsJSoUcYy3WsLIJaP4M6yB83TESQhi8VMwgCvplAw37l40p9LEjWP9aUPP21IiGBg9Brvyy3ZMd62TK7FxvaSNlAVrQZpNEXEqfkogLvoh1ZHR%2BSQGj8NyRJev8Ds1U42o74rSD21iU89grU052fDawX1jfYuIPsEd2kF71g9sfuTyYVsJS%2Ft8fSS%2Fu2bs9wjfgc3ZEsbHSPULdCEQaqoklsENilOemZYRCM1wEmVk2kWab2xWqb2h4vh1%2F7oqvWZIQpIPiVdnoqTm2kQf3VUE%2FyAyAePQsZDpJcby6jgEDyBEYff1SwO3Gjdw1Kk9N2XzhrO81P9QGIcg5ose3Pn0PZ9y1xR8yLGh81%2Bd7xJIAIG0MgdNUF56L2ctGpdeZeDjiGqws1zb9GBjECOksvNAODf79Uuiqg4WrhOyRZlsPDD9GG3a8FCJAlzMwsHv2opCy%2Bp%2F3nnOegVNA9F82iLVHRyyCz9ubzEbWxzXTDKm%2FHDBjqkAUUI9s6uLQC80wUgKENjz8oMCFDlF5qiy1VeWzlj04wsunmRkNnNZ0zr0fg9qaikqIyjQhzU0ryoRvRVJr979Owhv2jAMNuXRsbcqqcGD3gRc2HqNqGyqxvJIqVYcW%2Ber67u3otu%2F1Obr%2Fj5yF0%2Be5AopaM9v%2FnD37jN5QPNmo6C1V9zvq9zDhZ5QFjy1cY48YgBW6%2BZl92V6LlUQERSNGixOyzw&X-Amz-Signature=fd7bead6d9d4202e9202b41755ba236beb8362996731f794abc2b900de72fb59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2FNZ6F%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARqCGXttQnl8ceVsZ3bA4N%2FNV9tI72DiJgfKeESRxavAiBANM8pTCIzuew%2F6tynDADp6oUx4Zcrg1GM%2FltjvXsuMSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8qkBcEHZdULT02MKtwDYFsHnZK7GHqIj8F8FCaHjsGXfodzcdFJz2D7FtWJLuEeBDnUKkKt2LLEOE5q6ENc9G7XDrN98SbC4o1k8xtKPGgT0PWzjvlZXQ4Qc70kUQQicMxs9P6E2htj0VC6BE81CZ0N4YFeGgF8e4YGf0xAitBjdQMYkv%2BnAAzxQWHyyypAnnYnIUq9XaWYbf0rk8%2ByDsMbYOBcskI7GuWJphfG0Qb9U2WVKqcv%2FGoXZjciIUL1fcfDSKYRtbx1E4Z4hlUZMuEzBs8GMEEIyDMMmNqiC46%2B2nAwAQSPcQddsEhY8Gxece5BoI2nP5mzeLpqMAWhvuo327HXQV%2Fd5INnQGZGufHtzipAbHIfxWxLrsTpS4Fhacy59ku8mIk7KpBxvZsBFOwJQR7vD4pN24T5AKzPn5QBj9TgtrAdTnBUfxPTOPvt0qhh510ecBw9Juq5umfzcO4n5w%2B3YkaiifCXyUwmYX1eFdW1UeWxnlCUJaGnWJEc0yvC39THdZMBCu%2FVMA8Myd0OKW4hrGTOP%2B%2BCeIIYidTYAbxc9rhCkfWYxgv%2BBRyJ%2BsKmfzvUk4Sp3%2BUxS0hHKjFEC2SvmiQpDhz85%2FTsDSzRnqZf5u5RIO7wGC3vzbRMK8YzNZQMWHuOa1UwlpnxwwY6pgFr3S4YzbN5u9QKCcW%2FrRpZV0KMyhttkIj29SeqYbXbQu7bixeWhK2ueNJbsC2k8cc2rjZ0T7%2B%2B6%2F%2ByJaeiZ6ZStN6YVO2b3A9kqffDCvhFV56aUZvKLQfUsrBAkHSEShMgbUZUQqezM1vSkJyeRsrGV25fAjVFuDzdtb57pfzRvBefv9XG6Vkk7Jl1uPyP27cj8xLJVI4YPrXJLYEYGzbEwp6jLPzL&X-Amz-Signature=2b9287458806db52544171f6aa28d9ba95822af016da6386b80886d550794b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
