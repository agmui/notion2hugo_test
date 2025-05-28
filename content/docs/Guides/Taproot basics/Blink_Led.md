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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEE4MAE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG5F0Mp4GSopuYInwzpBapt5kzK0qX9szwQc5BAlG6%2BAiB0LDCPxBENWhKPeWn9P8c0IaofH1ngbY9jv0NfJxTmyir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMKNK6E82Na5H3Kt4aKtwDMumjp%2FgjheimX54IcI5LLRoZLu7lu8YlTqr2ce8Cudbp1jdnydRwtKtOBq0iB0d81UodvTzafj%2BwgBsmG6T1l%2BsAVLHliSFWZY%2FSVbmNqiZ1iZnNCWQb%2FhVnaqBj00K7PVKqcb9dbzMu%2FBA2AGvuGda1NqPlkD7fbO72MmqGsIAPPltbepdniwYzwy0hpnKnDvaWvh9iHv6QdfLUrrRqueyKv78BPYDGjLkTZGsS6dyApQqCw%2BdVx8x0lYz5qhCBicqaii4ySRe7RAyYAkIErFKnmfdEcTaLhVITqQF%2Bp0CF76r6N8ErjeF25NffEKR8HISOZ2WKuPrD%2FG%2B7MZn7LOUhrHU86GPlrePiUp9e7Kgdfe4rY0DCmvCJP2x4CS2jc0qIGGy3M09%2FdWqjUKz5iiqGtkN9vg%2FX9MywNdAZ7VYy8kRPWswQJ%2FeGi%2B0d0MWKQT7KKrF0FElZ1BDaZ8iZf3Dh8GxE5NvAU7DUeMU3gAD65ceEEpJLXJ4cSx9juaJSgXoATfYL2YcGPND%2Fhfuf1uY8Re4sc%2FG8jyciPG2SFL%2FVeiZtfJzxcBqOIPyTEu1Z0ACWl9BENZ9GMv4ZiZkBnKg%2By7gwwou9QkuGNAe72jlwPtA184dIlZsLSz8wnaXZwQY6pgHnaNxZE%2BdljvBS4G7OOeLg3NX%2BVkHKEabSeYQFfYRI7o4g3gxyusG2acuNVE7lDFwqxryeLdTefmMoQjLg91sSlqS%2Bhrma2ytDQipPLqqHoyr0yFOprZ1tnqtgZaWScmw5ZeLp%2FlO2%2FqR5Li%2F2JH0VflcmBgghKORLE09kzV8z3nbnQzITAMtcb9AQRqK%2BFseVqeRqiG9C%2FFt59h%2Bln5ApI%2FOUsCiS&X-Amz-Signature=fd27900b9a771ae6a065326dc461e96422217385c2164a3dd9dff57accda0730&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGOHE42%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRHW7R1R7FELt4E8SGdfkhEPFzFpX%2F%2FtVk%2F092zsmvkAiAWR3mEk%2FGubtN1kh7eiexKia7c8kBlxBPcindcKpopoir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM2Yk%2B5Zh2BATCwhIuKtwDerCj8CnSoWquCu3BTavs3IHBL0wFLGsKIrlvPqb8%2Bt2iU%2Flwhni8Ec4MBVzdA2QWFaqCY9Dh33n0h4q9XjAVtE1syRpzN4SaXI1aJObIZJ%2BAfuCqs2qVJ1e2kphAfhTVHhoVzkfUC9mMxNLHZ8ClrQLxGCL5MhS5VJbZBhiC9UqE8HdhrG9SJZuFeI6IYq0gsK1N6eyyqluVCAzqZn1%2BqyrR0KMwP5K%2BjmVB4N30uHj4CnRUmb%2BLXJcVygxPejdaLTWcky%2FOx0ebzHolZ0zQ7663Ui1taqMY%2Bs9LkWR7i50lHUSEvyMtVvAhW3N%2BSEnKJPJ8Po7sjqYlWH5Ax8Sq4vDUKs3Zat6c8XREcBjsXC03QOhsq22inu%2BiULeoT%2FVRz4MZmU5bghwT0nLNY%2Fd%2BggXvtKonfzbvyg%2F08kcN2wgmF8zIhLhn09X%2Fz9zEDTd9%2F%2B21tRvHFnsVaWXZruTaiDcgwe%2FnLL%2FP5XCVCY7dAH4Gk3SZJ0JAmkJaH6TnUQqfw2PnICGYl34BkaeBifxcKDiXDg9r4pI6rGFgMMcftpKj82ziLvjnzosDcIMtgTdkI7Ol%2BYiyfSTJJw9Xg6ucDlzRvflDwwE5oOYvd7sxahunKnJU60mmzwyZAcUwuaTZwQY6pgF8ng5SAy0gl841v401YSeQ3uW0HIIXXj4kwAMf4IhrrQUKAGuaGLldz6ZvdqjZSo6MQ2Tbsuz4BNWxt72byMhfjnlYZvAmPoab6mPZdGhStP%2FvfqetNspT2U%2FJ8M%2B8GA3eZx31quOuXx%2BDZD5MOjOPGyQmiVXkdVAYtcHSYOYxwq1h%2BSUjVehUT0XC7%2BPKwT0q%2FvNaWjR9YZwIS8NbVe4a3ln16uj%2F&X-Amz-Signature=ae046e29a656c05f8c87766c38616a51b5873a5c6007b3352a3119faaa44491c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
