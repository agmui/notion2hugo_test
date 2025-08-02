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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PGEJGXL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5DSIgLA0JJLALSUw6dcL8E%2B3zgouRKRmANYEVuzQomQIhAJ%2B0d9Iwkh2edX6mEWI9Ldz3C0oEHbz28Qv17bX1wssfKv8DCBAQABoMNjM3NDIzMTgzODA1IgxPlh7kxnU5VtzRBtoq3AN%2FO9FQyTOM%2FxK81wQvV5pri3spejSqBRLo0CSATKE3Hu1TpnMYPkMMniDW3Gzkd2FL7lG96xn%2B0auONsouTPNsNYZQVQlgQr%2BwHU34T30a9b9r9OfPTpqHXRJwoz3sOVj3jDF4kyDhVcTijvt%2F25w5fkQTCvEujmy4iy7PtPHVJ4NZvX76HfSS3YN1L2Cs5HegeAepnQud5TNvVTX82%2F435JWEDUlenzTX2nbmOz71HYY0gravUbt%2BYPDoY7lO%2Fx4B00vUbprKBK97NjJmz8CWghaTnU1ld26vQ7fsi4eLzxg%2B0hppEJn9T1OmtxLtc5FRikuLXcFvprmRaPXhPQ3kJJoM0Nd0PM5LJgZLy8UCdxUPgw0T9f%2FZxkH%2BZk9rzRuNbd4YcHgNYiUzhHNwegeIx5w7DTEnhGSZf3cGfZrlsVifGDsqHwEObNDWXpZaLFRaBprCC%2BcY4PwatJAWNVd7%2BOlJzY%2BEGAk6etm76kDXqh5xFUyvSZPr6dyRLwYkg6rP3GQhWf73ndubSILEnxVUs19Xj5wNYJgsAkB51NwRo2yXHvRumC46mdzKOmq%2FRsd3L%2FTvYcLsmoqDJSZ%2BtBGhMGbLMVW%2BWWK3DEk8tBdG2TW4adLZUMbFL%2F7oFDDZ77bEBjqkAUqWzuGT7TIXZIohWEB6%2FLz40UvPOLtaywEW6ugY6JPBUZfB2T7%2B%2BFQUW%2BUtHn520wbhEHfAGeqGrFyXyLXiHGDvPMicVvSpp78TYH3zwejJXPhlrQjfR5AQYhyUK0eO6MLPZYJTe2%2BjVzLAYdApMAR%2BNo9vIZHYhjZKlfUlRLFzNvEILydSMoZdqoKNHjGlPR3XY4BtCTDc8Vl%2Bx8sqUGwtShI0&X-Amz-Signature=4225079e628d5bcb8626ccb40053ffafd8576cb65ca84e792a08ae7041bfaec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SBKWWI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAnJCAUMorudBSBYkWijn2c65yvKhwRtpEuBsif7yLUwIhAMXs7w0yphENifZmfODmLrkPLAoO72Gwo%2BMUU%2B3Yj0qpKv8DCBAQABoMNjM3NDIzMTgzODA1IgzUV1c8Ym9wcRI7o%2FIq3APjpd1Ilz9DXnpSMSnCOJYOYQjOpBAld%2FETy3MOKCDavhRf7%2FuN1Lm%2F%2FpW4eWrHsJLWisytaRK86Llvn3uFJzl0C9GACUYCV0U1YpsSjr4oMyFtDqQtSeU3eC7a6Ybn5LAh0AbNGqG6YtuB0ALiytiGmWLCOc6QLj0J%2BkQJyH7U5tlx4%2F5jP4Qjji7bpS6vbCbVRP9QwPprFoa78rIRsPSLrCv4xe5X%2BPU6wSJSEK6oT3C%2FrJMcM7PItri6WCKFDT4sn232OIAjyK41jZMjgcLV%2B16hbfyFIcQDlXjrXdbRpVDn9NWemblGzP1vHaGdYVliancWR3Xls7BQdq9Zb7TQ73BCRhalU0sQXRfq6tJlOanndvWgoVzud1QwJpIat39TWhJeLPj6bBeR%2FPwmV%2BWcvNoswg01qta6B2rGaU6dA02SyS2Ldemq7yZH4wKNVqeRLB4GfIBJs%2Bdul8xyyxgNZUiUlCqGhxOZD8moGNkYD8B4BPRkUjjUggSYqCsDa9njzjqUNjxIuQCSe5lOjdHRYyNCDaEu8vL8JrIHfqnvqYQxSDb3tNhyzSsX8JHEqaCwIy66X4uZk4EepnPxkimSboMIR7RXKZ5TbXoIiL9fbk%2BRzq1%2FDYPV9EganjDb77bEBjqkASBSFhnVbSEMWBo26M5a1l5zXG5EKwtj%2F7oEm7LSQhhtVdSCmpuj6vmxMXiYex5%2BvvlVMcytzomVN6R1KLKlbVD6Io%2FSTyQYia3xgl0KYU1RwoogkOcAH1reD3oKs4khMnK1r0YRe%2FrpXLPklk%2F0p4j60CC0lu%2FdyfI2ZB8Op884PtvdrgUY7HBqG4Ywn7QBMnhG%2Bzdd9qRoH0322yuzgdMjak80&X-Amz-Signature=b19c4551ab9cda9bbba7dc4377d9cece5689b833dc8b81b59ef79731f093e6fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
