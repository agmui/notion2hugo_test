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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURS46DA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDy78vbib6aQrDC1U814LfaQxV1%2F26xK63fT6SCxj03IAiB7hP%2BKlTaemugI6IPJ0cZJHONp%2B4FqmlTEy4odBZj0cSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6eeZcFVQdfrdlJSsKtwDOrt42D%2BlCaQ2H%2FTUaaxGPnW0IF4ahK9mXEWVLrleC6XbOeEBTeGktEzPa6ClZbwSL6dK%2BhR6fX%2B4lguD7Bd3PHpun4fuJewb2Qut9GVjJah0PG7T%2B6xN948g3V3POT0Zsv6KWculiITtJfrW11afx3mvXadDKRrpihxHIiMp9Y56dPyXLp3o6LNiPe7xu8X3jDxkfOZc5e8ZW6Pwe1ehNNxb0On45MKXGU8wTofuBaMfYg9YzAfTCfgPHIHwBiWXgGs%2Bd2L5U7zAE7s2yA4Xn0Hp80qWUPDqYmqrux1OUv6F0fnzzr40MKV%2F8XSj1Jcljx%2F%2B2cYzK9eLmA2hLshyazPp7sZFZFeeGio2T5wWcxFLE5bEEsaQHKUROA84So1RKiNr5%2F3ENB3eAbbaYOXtxDjOJ%2Bns8skpbb5Cq8fGCZCKCxh7w6l0cplX%2Bz9Lr0emBvahq9oUtsslC3kiuBKGhJaJ3NUqKTjI6z%2FYm%2Bb%2BLBctMmWNOZF3w18yNAsFBN0RK4p6SEYAPME76v22kF9vLk5p%2BwIHokWWZd8sWWTMdGUr0VyKbrXVow9VZyJOI20PC4ydGs60%2BNet9PHGksQJrrjcAVEoJV%2FdmnMM9PfO1kUAfw5OtJIFnglDvbIw%2FILkwQY6pgFYMstrY0tyMB%2F5Szt2B0tUNzv2irBHWYJFF%2BhdoETsF7gMnAMoRUr8szBWETeBYyrSKv%2FCtjNifTKxBF9bZivyOdCQezP%2FAy1ykLJdq7We9art%2B1rWeMUoYlnkgEQFu3zoi4xDuINKPUFRHHCq%2BikB0JYo2jGCICT0hmKK5%2B5yf%2FENNjVqewlrb0zpQrROvBBejY5ZJVGPMsY%2Fq000Z8E3R9wlDbv7&X-Amz-Signature=50ab07958a1d3d6ca01a98ff93d720f40432eebd7862f55f92cb6af36fe1aa16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63JGWSF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDxtgHajlu02ZbOAoYRotUbmhcUWMVp2iWc4mRA4VrSAiBOyGfWQ9D7GWslloQnIMhswT1WuTbEcff7HJR14lofeyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8NfEfSdgTiP6BZ4sKtwDYfP9BscAmLjL52foQRzWkK6F33mMLGDru8rCqRlkpvXh1F3g3a0AvlEZ3aDepSEv%2F2fSRD8PzzBB9bjCKl9EReVmSycXTx4I9Zjby%2FMswtZTkjlsrBBeaUz5%2BoCUPvgCrTWOOo7Ih9FYjcPYlUblVfa9UDIsucGXMLFnlw79xK8u7oqQ6uFYBtGn8pG6ZsmycaRj8CElF6klLjSsLteBAKRuZjYO5KdaUsHZh4C1Xn9qk%2B6nysA%2Bkn%2BUg%2BjJx2hzak7xXORoJRwfq5dpHGFMWdu8umrUJPDTJPoSL19xYwcahxaGl20K1bn4ij6NJO3Rm2rTqX5aXHikpYRulNLL3lGBoE009UnjZeVWgXzmaFhdhHlos7ZVJ8m%2BOTz6WKqygQyy1nc94lHPSQg7jOjWfUi4Fgf1v62reA6WI6YdfU5UJ2cPg6xC8fWnCYLDtK7EL2NV21irCL3SSNxFl7EmqsH4StEOXaUCRT4YFt85pSjCsETFVpfkPQP3l9ztQK2TT1gHGjbzy7jBkt6Hl2zjWABRelBeSh68dpFGPa4wOmGdyVtvFjoj%2FB%2FSc2U9%2F%2FKlHILHf6%2FUd4YIHYhopdeTtVcyBT3Q8LDqSVQReo93OPkLYi3kf%2FGwXo7xiB8w%2B4HkwQY6pgGcopM%2BF7P8uFi8NtJqaghafDnuhytaQH08BnzUkTwIjVnAs3QH32xvV0TEgo%2BpoTxfwcMySPPWwWbzS1XW0TCB0Q9ddyGdCD89tYeg1QZn2a%2BefDRPF4ieITGJH8EU8gD%2FGqlj%2FrLfUMEbSbKHxap67ZDD5O5Uy1Nf3%2FiVLvwd9%2BdQ9DJJyL3WvV1fQW2gVCx6UMMOhnHECjKI3Vzr%2Bxap1MBNGsaq&X-Amz-Signature=0b75e9beeddf0bbf9941c3872c1946cfe9ed14bcb9247762abae9d790514002e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
