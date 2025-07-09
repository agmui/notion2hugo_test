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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQMKX4E%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0vac02cvLLLBUQF90gSTlPc%2B1ICziqxlip9S04V6UQIgd4l3qFZMXU7eT5AgrG1h4YHbKwxXqkvt%2FzT4B8r2pC8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdxpH1NjyIY4IoucSrcA84y%2BY5qoxFap9wmk6CB5JSbvVjjFrnV%2FQpQxhaRWRgxXPLYPmYj7tC6RUK0x4nHCfzJRZCrZTBoizI%2BRhzy%2BS1nf2Lyq7iNhofBbNvVv5PqdScT76ak%2Fkwmn5QTTsgWRO9wlwn28uU%2FLK00ynYzmuVu3Tp4C5NO5CkldVX7H9J04DQAOnz%2BT3z77JLvqmQGHvbcbG6lmJBGAcMHYnSd66P91DB9nZcuHszv6UAPc0gjj0R69pW1WX4Lgtz31%2FyI3r1%2Bqc8q0juuvyQvf7NWGo1HDTF4MCXMgo%2BvIcxRdYYmh970I9rz7JrwsjZjxgkrwyOf67D0wbEK7zNkVYpvyM6PTzwiQTr7EOXgQRk4cmIJkZlH7mWufwaogQhTtsYMdWlU5MTBVDuRRy%2BxD8ZMDxQEqbae%2FoIFMKLmLYut%2F0VtB3ebiyp3yGc4bYFygNC08u2O6GylFUTGIfbiGTA4p3WurnZrmC9aaPHsr4FLj4KZB1KH0yNAg%2BERQTITbe8wqf26gBIjV09MlMPAQMNrQIL6a6nma%2FenV3e6ogIfBxyAfsWMXjLZR4FV14C5F9Oo6YigYCsfPZ1tY97t%2FK88lgZlPPOdzkUThksxa%2BSlHSbvqLuUIqLjGkQIQO1VMNiLucMGOqUBT%2BM12jTP1CA2fpbvhEXahs8LAWcubXTY7KImxozrqKazw5PleYuWQGQ9M4vJ1yXqKZr%2Bd9GTJLE2vkWZt70yTbrYVCgwaJij5jrDjJbzYGMt%2BFlSWdqb3oQHRl060BcE%2Be9pGkO%2BfiReeLkamjRy%2B9Jshlj3INwRQSNcKvEyw53fGkNdBBLwjApMo9OgxNiXx0z8pgP5hNzCRYxfEd3XdD6tNdA1&X-Amz-Signature=3458432ed9147e894f4c87f4e3505dc03897624fe460fc2e4639671e097093af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWWDZ26J%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHg7W8ENMbC8Q6bayzj%2F6WE74RWJ4d0VoMgvMTcIOxaAiBmu6QofDuM2%2FzA6ecpJZp6zekKuvvuE%2FURJnMEzN%2BdUCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOUC2M357jKEjvW9zKtwDQY9IZd4UKu4PhA9fGyvy20wtoPlsQr8aPWXkC6U5i1pkN3PHzCetNHdORQu8tfAMhkiPYiJg1hFjxVvzl43ng55AketupwUJSnJDCP%2BWZDYDRpmw1LBtHksCz4T0fi2462k7P3u2STQnzjBBf7s4Kl3on1K2UXh5ydRbsi4SIvbtsz2MEK0vXf8XuU4CU1iyk55j4hyxdveu0Ag1Jz1m6fdLFA32LtxDialMH8wxGnBLXR26kaMI3RfTc1n6kHHwtXjNQ7fZgjZEBQSH66bzMxNH%2Bd4qIhwEvaaYetTRQeR7uhjsg9H%2FqU5pJQuW2QsgVqKZyNemxCya72uJUlAU%2BTTwhhNbmp%2BRBxtKh9sIM7%2FA2SVTmzX%2FL7PicE8gtD2oajR3Oqa5Ii4OR8fBM8jlS4HNLOIAj3WQ73zGlUA4hsnb61PWb0eg5wPy8Wifo5ktc92dhVHCU3d91cbOUzjW2EghEybYeMLG7AXvA1%2B%2FlFTZQfH8kt2u8Asy7yDI8keSCsoGZmb96leALuzbwk%2FJnvNXNTn0FCFTppbKBJTFBSspmsZa173aqfNSOLvh4yBRfdDGgfU5LlyFVkqPnjDSaRSn%2FMrJ3fZDs9E51iaVuuB%2F1qHr%2BzuM4pv8BK4wjIu5wwY6pgGcGjhy6Sa954BhFL7g%2FgUD2Fqmb8QaAo9s99%2F7%2BBv%2BKNHLY4vMeTWpAvYNgzDz%2FDPwhxGfs89axJt4WVML%2BiM3WJbBFxLJ4o693jTXvfm57ZSvy6sZEHzzMn6qYNQav1CNbz2nCZlZrSc2xo4JQRw2dyrV1lxucV1d%2Ft7NYNfjLn6UTD5CD9mYPr71EfkY9qY%2BfkVuG48bbIOIueUbfcH%2Bg2GfYgpI&X-Amz-Signature=1f316631e97dfb4a04ca7a1467973e1c8ac265cf0cf8746a5bf378a0ee689d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
