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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF7KB3CH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGXkWpRh27nMuftSN4TKYMvM8cDVev8qJgkNZw7VUAEoAiB14%2F%2Boe2VaNw7jf2k37S8eWs1TUnfV40LUjq72TjE5Xyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMnGQRJzlO1Eh4RS2WKtwDpfqjzsEUmgikDscJcMv8FR9NImqwv0hFw0m8hfjoGD9dChZnGldoGR5fOIC%2FB8%2FmsXV7GQ2cYm2LfOuHOYmKIdZuWV1fOYmRiVs4E%2FzBdK9c9tRGTFBYUXktEAWqVNat7f9%2FVGfImYUHKmLMplwD5psx%2B9DoU0ZAnVF721117sVK%2BaWcC9CEWVGCWPck%2BrRKmrXm33T1Vf9DGcOASoKJS3cKjb%2B08udJcyVk9hbduGw2Aa7Z%2BDppzTmV7OYeQEWYNp8uEuOm5F84N4EP6PUBasbA3VNGfwFA%2BMPCc6zuZH%2FhZ6dws2Q%2BRqkl%2BIz8PBpBJdMKnofsxT5T2XNgrgX2vwZlPjonFY4q1iQayymvEHtd15eyGIRhb8vRFoOtppJWHItkoEbyvrzKcLiAEGfz2jAjJGp4y0UCL9y42pIMoptpzvajHui8jDhMZlLsn8t6LtsBJqnPtGwyskHrsDzQz5L62ZCDbKoue8ojt8g61FuFyeUH0KOkrnBFC5DorQZNfW7cER6WTlE%2Bzot9UzAkld8fgY72dQKqTj7UcrbpnC9BdU%2BGTvBQQFJE%2FsitQCy4cZz16bMgV3LmB9N1cguEVZoDzQ9op%2FQxsjw8j3DzDhl8QEIko95TbYz7O7Iw7Yf8vQY6pgGry%2BDP%2BoHY3o6nW%2BxjTsAByaiehFbNTR3FFH8D7gMIok4KwAo6Ft0ngab%2BqHIgRYHznFJP%2FutcDiMXzHELvkJEQqdCpPuRGpkdSqV61nX8bqOsTKTmgtpIw6HRMSyCnB1qogrONa%2BRE%2FAG1rbBu3qmYTn0Dd5FN0vgSzcJy1IaJk40IKCk5IsvibzwvOXuxqxUwjplV9yfs68wBP1w7Qs1sa8ojnmi&X-Amz-Signature=88bcdb7e0a5d383cd05fdc1901524099bd85856ca8633b645f4ff4eb3d7827a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6XVTZW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCID9wia7pGwIxnBNTAJZWpjd4O%2Fw%2FQ7SSfVnw5PUDwGNDAiEAoXbecI%2FGjPmuZljaOUPeuMx75mYGVATXZRcvUnS6MH0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAyKh9ouf8DASmPobCrcA4WldhCBwQbPm9ysKxV%2BWbkfDjuRDwtUyCEEORsNljaOyFp0CezEhkxaoR2w1q1%2Bkr3BGwwFSUXo12HnoVsakKrfgSJEo%2BwD7zgcgyfAp89YM%2ByDp%2Bd5NxHQeuxpAVInqybwneHm2TOGnQ1q1Sevli3hgvgjHunDeEWZhz7d%2BJE5k7O2uiXXS82ithTPGfsYsiVGHMuImH963vzL0VCxnT3eL5iMPhtxyXMsoY5N02FSI1GGzOS%2FUDrqggYugSAvXJjuklxMPSWNT4PHCm0DnDNn%2FA9tBNLxxWElNTpoN5m5DH%2BaOggrS2KFqxpCdqHP2tp4qH5phW7GGZlG3BKdiZddaY1Z%2FeShpjfFXCBeF8cx8He9vazEXeryWKnmVbsHwmEC52zHRDu6Ev2jyqRgSeviaOLdc9iTaoLUcbEpwZgbOZpcydcgFzoOjdJ6FtLHI6i13Kz3eubI6xSQVmBKW4OvLm5WyKcMNFrlnCX4jmYgUqTU4vO3K5EHbTFizuZzGfebkiSAllIKea9Ujf43PVkedE6FPYLFB3IhwyQfcurqhNS5FEi5w2dw1ERxLmNC0pVj4MUni9LeGCPY%2BUUPpAz9vl%2FiuUBrg9gO%2FJZDkwICMf5eBJxFHRDX9ZgxMOGH%2FL0GOqUB2GVdG1Yw6e%2FKj5tFnf7ZB%2Bc4hJR74ycyC4DRY3vT%2BRJcfv7p288LMcDBjHWCH%2B6dBAdKyFuq6WlXbSEX7GMO0IyWKbJVvv5HEVkbViWUT9rFx%2BbLTTVuaTjZFCpXQrehoL8%2BONegOU39zF49iNyA%2BRWA5XMrqUs3ddM%2Fv1V7oVnyw8LSR3TYnnhETzzRNyYWSCvqqA%2F7zJrJ%2BZ60wa3r7QmiEalW&X-Amz-Signature=3aa3b467111c39704f877bdbb468d670af79a1775166d4f6915aa3fb75b88332&X-Amz-SignedHeaders=host&x-id=GetObject)

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
