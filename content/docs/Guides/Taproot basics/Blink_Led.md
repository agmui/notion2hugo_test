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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOJEHG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtBIiE%2B5icP6wvEHoe2yXwUtw4H4ltmJZ44dLNkhUTrAiEAld9BoFAPWwAZs2CBUOt%2BqQuI1TrBuEHRnF84ZEgVo2kq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKTfVEpfg1X%2BEPrceSrcA43Ric1O%2BM9kbfNbxwvvEpWqe56HHPjwCIUzDxZbhzubb7Elnjjha9yUA5WGHf80g1mzPlD%2Bkum%2FfS4szXQbOyyJHq0MFVTLLecjU4u%2Fwn901l%2BJAIiptjgTP8AlKTeRbyHWYHP21f3kzZUQP0i13%2FspxvY0VtCR84%2BALHx8Nag4AW55ubNsWw14qASJPiuuSqKNRua0ygOc%2FN924NpqBg7GgvYdvTtHENnEAHrjPWLZFg529mIabxWoGf7qwTvMTlKJnTnE32d6fyb1XxhiEb%2B%2FmqCJcFdNJ1BypptawIVPi3AGHH0f%2BGLZJyc%2BZsufu%2FJynbRpg4za94SJb6rh7yTMLfQhVadHJLo5e7EpWyAwQkHQgAqzEjSwQRUl8ESUsTa7vXITawE5aw4lzaRSYDUt6P%2BalYPlHvaOpjinuQLK63%2Bw%2Flh0%2Bgo9GHXwP56p97yQut2wE5x5simy96gDMictrhVRFcfsNEoLrTd3mqe4CwqGrC5oYQnbtAaVW4YnJ5tVjzHaqCG8QWxD%2BqrNbaWop%2F%2BSsL8DvbEWjwCnrPEsufl9NShu42%2FlhdtlzOMycfyPohfVw7cCNwMyJTk5xOW%2F4WZrUvhZC936w2F%2FF3m06R9rOE1%2BwE23YaokMOe38b0GOqUBgm7C6fZ48QiCgceaCo5B6UiDwJXvezsgdGMjfm%2BjVfdJDsYjsrFaOGyqJaC4fp1gRl0c%2FzVG%2F3qYfz0p3IKnKayTldIAIg%2Bpac%2FBPLvSJaeeRk%2BI93yw0CNuBW08tHOzUjQrfRaPdhjZIVfWQdLP5v7%2F9ZdGF1m4I%2BQ%2BBx3aebd8O8jBY3Js77zCjYKaAJnMlBMNgrlt5U%2F62UwIwDix4SjFn%2B2T&X-Amz-Signature=5aec7e8f8124380147a2aff4cde9fd3b5d7860b0ffb57645095e2b813b27bf07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOYZQZ6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICW3bplTff923urWP1PfoAeqXuo2b2mGo3qQZvxRIdGgAiBSB9U9LQQjzJnP6iFRMHCo%2FBrcRNogI3pOzqAttk5dYSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMbRzGiUsvaIruIa6OKtwDfdAqlZ8Qrq5KKeaX8h3dm1TnoJiquOMMOwwvowJuk%2BJ5U0xsb3dJbKcndcBh4mIvMHCCxI7XxMnF2XeOkbDbBHOUobPjQ8div911NwG5SuDvWpImhlHc%2Bl%2ByZpXLglAq2Md9LcNR7xhXxf5aQ25N6drptyqTA1Ill4WMrEdoDPRSDJ656c8syk7Ph6w3Y2JoqwQ%2Br71G1uASpk6imAx4WCYbaD5JZS6xOmFVIskq1%2F3itl%2FTs7flanQhGjuIFF%2Burcq%2FAw2jY%2Bkdr9iih8b4Uuv2hBUSRHG6vco9ORichjpAXBNSqg0g4DJqFu%2B53ApG%2FmrY8OJ78ubiqFQJ%2Bp2cRrPrlNfTdyhenT1sYvqI4OfQ1VrxwRyqfmYtctefcklLNCwIPlEzBADJTquQOQwRTFSZE3DrYExYejPBM71%2Br1QwQQG7%2FY6elflMo0%2F5Vz2aInRKha0aSDlA4z47HlTisPnOsEFYWgDMZruQb4GQKOnOZnofGseCs1w5ifN6AAL0UHiENc43FSWm9dOKOK9sT4SnIie%2FLNRfgnxlxo3zBcxGWzOne9v9iueKxcHCzhkZwDGuBu2%2F2lnqupmu1eZfu5Aam%2BrJuUREwek2FcBiDKcDibJ%2FB5qu9bBdQUowt7fxvQY6pgG3FJGXf7TL3gZpc1TUKS37at8Bc0YxtIXtLZ8kFru%2BWMUH1P78fjt%2Bbx5hxXc7waXukele2TDN5%2FU%2BbwviQOlOeGPS6zFSdYM%2FETHPewELMxZ4aPVf4%2Fwtf8BtlfM%2BAykOtHDYKGvOgVpO89HxsZnSXsvjvfGi525s0bWTYntv1y3jWFpKxbIp8dHDRzTyKJP8cHemy52S3Lo5eBYUCdSFLJZFtU8z&X-Amz-Signature=7f66185386197a3b368cf714f40dc1346550b5d1b9e46db5810a4b35b661d364&X-Amz-SignedHeaders=host&x-id=GetObject)

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
