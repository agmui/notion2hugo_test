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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QK3OESO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQD1GNzeks%2FVslQe6SP5kJE0Nl6JympVQt6Z%2BNwAJXGetwIhAM0wvOXdGLHrvyFs2s03%2FJQPKJfmtoYf6DRrKnagHEveKv8DCHAQABoMNjM3NDIzMTgzODA1IgxY0LZzca9StkBR9nMq3AMDvvi%2B81bOI1iawKaMBIGioan%2F1h7sJVYsmI3VUOEt4AV6B8RJaHcTuek0mThursH1m3P%2FEYKW4AVvjFiImH%2F3x%2BPmDzoLbq3sSv7IpfaC5K74up8RPO0dKf%2Bt49t%2FDeaVSu7fqSu2MG21C%2F1%2BuQ0Nztcp%2F9iFZ5AYUFCMT2NW%2BnIlQinGnq%2Fdmzd6fOipagIdgMLLllSfg%2BKWE3Um2s1bXNuSgOiQBAJ%2B9NUYvQz9AXULa7i2%2B9XJKnt5Df7vulJZ9DNV2FFApFz8qX7IdJPrSVjLwi5zx2uwEMCjEiTqSXo%2ByDEcXR0oBgmHNM%2F8u27UX%2BG8KEN0oNqZITmDOZwKNZuqomdAwO5MT0G4Gy8J%2BuwUZ%2FKsmQrwSsYeMsPnSXisaATjBpyg6ByP4SJmB7z2tkeE9U5QZLu8oLOj0bI15KdUJYky6KsJN3xt0AqE5rEw4sXKJKerwEHw%2BfprqYgSMRQB3emJt6ptXDFu%2BMkhboCyyrc2J1TRW6H14bciZ%2BV%2FdrxHN5QGUX2sIlUNnd6s1sTKX5CtsEW8Rs6rfDDabfl0gHgwIVN7QC1ydcaaucQOwYRCY68lzYRl0chDUUf%2Fu7T5gUh0HK9NfqbwGBnRZt%2FJ1wFp2tFFCEQ0RTC5i4C%2BBjqkAT7FpBe4WCs9gUQtmNHxZngi63PSMqqZEU1tZFDzKl9KSsWeRELzbU9CsRks%2FwJMTAPK5QN40belWMCY9VrVHTcCJGi6bm9Zn8eVTokAzgoM6eTuKO1PqLg9WOdZi3XxUlTCCDR2PkRoUJx175sUve08kUxcfPn578KUOZeethQqXXN4E6%2BTm%2F8pPwAMPpl%2FUVaOTvzXtYlTqRcx7RuJIv45M4yr&X-Amz-Signature=cf979fb041b0681a11097a44a2c750bc7fc92b691dd17c216827b4030451a07c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HE2SNDG%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCwbWzihWLq1CjG6eqocflDMe5TCeB64fIv6Xarbiu7AQIgBmMwGlXuQKqKIIobi2fa2PkHdQ%2BI1g7B77tMXIsmjboq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOmeP73SYI%2FuxM8JzSrcA7NKqAMhxWP35CetuH4JkkOI2fVP8ou%2Fp08tlm9E0XXWI%2FsDo1Udd78AgRlwAbVb%2FT%2FjQ7Wv%2Fg8%2FeI5I3PdRf%2Fczeot3bNw75z4lrJbx%2FT2RrbnePMag11LovgZF6%2BoQ0lN6FadD6Xmj9%2Bf60%2BmRERrL%2FwSM%2BFGDn4Lu%2BjRgrrAZUcB7767H906FeKKM74iT%2BtjHAkb7M%2BGwVWrydWaBXrpIjH8O%2FiBzw40ZWYq3nKVRayXnSczYoJMr2xVSa6XR%2Bym3lCKzTgiD6dZERindArsEFE7%2BzpsQnzezVdr2L7sihIj9PPWzq9hk4Qs8WTR%2FtfhP0JMPlT8zt2qaB9%2BNbklqDoNi5CPebfBCVRFlVZerAWSjMD%2B15MvSxiaS0pDhxL3bHvsaSB56yUo6gzOc6B6fYUZNCDrhhyYCB5ObY0dcZo99pCsy%2F9ZBQjDEq3LqHASM5AjnbFHpY9wAtUEW91bbLNTR7Vq%2FZR7apR1VZ0RWhGJY5r6zXU66EdX4TJY156ClM977T3aOTvGA2C9EK5MqUBrk5mOi%2F2EV7CAfkLpJF%2FoxBH5pudxQa3kegA7GcxA7gFVlYsADJr1u0eYuzmjpwcFyzgk0VtAit9Z3i24hnVPSg%2F%2B%2Fo%2FIdIGWvMLGLgL4GOqUBKM5BJKyOCcdtNl6OsU%2B2EEXTViV3ARHThGbgNTpAoO8mj4aH8QdweuGVX2tcxC%2Fkx9qOhOljEmplPWvjLJwhOlV%2FXLPAXYV7pDu00KCviy%2FnMDBRgiodW0Q%2BEhTaXI0NgRpY28Ik85bpEK%2BLL%2BFvBZdI1neg%2BwE%2FiToYwpzEfTn1aR6vrYCq0OfJqbxEBbHm%2BT05%2BMhbHen4K3URvMTpKdiDRsHt&X-Amz-Signature=20751e0649862b292805f18f871a43b3391363f601096d1d849cc070da2c3f88&X-Amz-SignedHeaders=host&x-id=GetObject)

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
