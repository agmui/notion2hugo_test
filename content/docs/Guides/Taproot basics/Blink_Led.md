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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEM3BIE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEHCwjcTs4bP3Wiw%2BY5CSomlMUa1Qfg50UcDrH5KJmvAIhAKXjWW1f%2BPS6mOb6QawNRhZFWG9XCJV8OioLcq2hqKaLKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuihIFFDJUvnbEhVEq3AMdMhBTA9X8rk%2BTb06U9zNS1LbgQOAam9RmOcmibEEqefPfcj0M6OPpqtLG5KWEFrfnzQFCxHn8hqk%2BI9jDg5wTv2zvlMy8804pdmRc7gB5YIAPNNXEXXbcfWvMb3a7XdQr0dtk%2F%2BO3enlxVRUkFrw413lbgrb2BOYudeZO56MDUi0nA%2Be1TJgtdTfaCUjJckuYIHDk68zF%2B8afEm%2B4o77BDpTV6EMms%2B%2FiDUZbbQ3yOcQI6ITxIt3A4u%2BnP1nXB93PPYTJM8KHQOTm5m7rq%2FcqLn5NZJ%2FUPzF%2FtwI0BKykOZMyUJfR9DuCfLDQxKYXqfsNWPUxLprX9NIuWDYV8K%2BsIaXOBiu2lBwqEl6tFFMyh29EuLLj1jU%2FXGrWhA5KJMiDOBwXQnFfGZCXiP1I%2B5l3kAU6cuaUZmuxm65kVoJKDlk9IE1jkmBesZPrfIm%2FTCL75MESQKMUmOSEBpi5QzfGcHkKQePe9dbSVzw%2BHbownVgoGORgUIcSvyWLhj3xLcsD9m8%2FHuCAKUdlHeOGcSAsuaX8FfZ3bHV1O4Rov2uozWTm%2Fxuahhq%2F4jdprYudATCiJGtvDOHWuosPnrSi2p7PJyPiOhVjPtXKxlkTqNDy8qCZiFv9qlB5bae5UTDlzIbDBjqkAQRrP53EZBmRAjJsQZ4W0rKdZ4EdQyHCz03XUmJHkYVwFHme0sjPoW0ANrCJvyfZfiP7pjUfwi%2FMMrHIX3r2X9k1dycWWPBiQ0zdVRZze%2FT6yA%2FubTg9LFMKR5QB1h%2Flel50iUdEzgs3d4gb3NIHdCwqhuzsrixNxMmG6AoQCbzg4fN86lPBcDjhSZjx7po6XnJFkVPhhw2dQxjr%2BHfhxeIL1tM3&X-Amz-Signature=dfbbebe1e4974fd288aad7278ed0e1b934cdd396a7efbc2716c054b5d53b400d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXHVJH4Z%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR6WG9055RKHWHvbq5wwW%2FP5ittdX0%2FSksJeOXVg303AiAMZy6xFll8BsnHMyDVvJhN7Ai82Cs3R2T4kuLNVIjCWSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlCdr7Su%2FufioWJceKtwDQSLfLDA%2BvHc3ouU%2Fm8WYkjc3urhIfyGCsA%2BDxNjxqMjOir5wvENcOf8eoPgja4LFmgl6mup0zBCucokXw9pQkuTls6pGlHU0Cq7y0drQnNnwMoMz3zumnhnMHHR7U2v%2FGvK6slegwlWaljPLo1pXPj5i061fJYa4yGHSufFfsFAOKKzF70pOfHTsgZe4rpKlCN9KyT3wm0m6%2Blbh8k7VI1Nv73l4izD1b1JxltueplxSXvG85ylk%2FzkYE1JY7wW3Xip%2BcGMcju5V8pWxc1%2FkBbqubQDGXpm6wcrq4QyRYZjozDpq7XEaBcPDcgln%2FBwHWqmcrzpZpChZumBywqONfX5ElMvp0LOMDONNaEdd%2F9kSqPijfFQ82hrGcfieDvwVGquZKDsm%2Fem2fBU3o5rtnVb%2F%2B%2BheS80NO6CTmoHG92DAwC8VKK%2BEgD4suPXdw%2BVjQvfEKH%2B%2BdTwvVfbckzLXmMcHhI56%2BTU1vuTBtMQ1yRDinOtRLCPPAtT2Gg2JmdxtxY4ZlxgT%2FQnOLy00m70F3py%2FMKQUM30IecVShOJx3Wg4dYzn0WxdDk0tF5w2wSxcdqFQyJ44cp2K5dayttB4sBLW%2F5SKMK32DFU2ZeflumDmJJM9WCrQ%2Fm%2FcDDUwq82GwwY6pgHI42tNJm7L%2BLHU7BxaEetgX%2F8WZzxn6re1VDpJ%2BNF3qeIrC0nB1Ib9WbZlZoLxN4lZtshwyWNW7Jy6ev%2BtK8jlfhCSHlyyA0jcqgPzBjF0F8bGh4AaDmi398X%2BxplVtTXG2br0mqeKCvFEpFYiCaEsX0pryO0JvFxqBE%2F2KkVpTDQ0AIHugZt%2FDEUmgAy7If0RVGtqwurVJvgEgOJiZxPSkM%2FLgAOD&X-Amz-Signature=5110ccd1017376ebfcc1a4f77390ad0303a4caa14c52f7134f111c22820a8385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
