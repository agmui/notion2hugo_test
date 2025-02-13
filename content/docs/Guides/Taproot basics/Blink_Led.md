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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662U22NKI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg8K3Nc4muC6E0UNA12q0RtDoGbF%2BRiwtjrJC0k%2BmDQwIhAKUnS0D5pchvugo92TMqkREGfnzd%2B2vdWK0qsKp%2BHCi4Kv8DCBEQABoMNjM3NDIzMTgzODA1IgxwTR3zIx7dUjKhUyAq3APn5OHwDEkgAnqfiZ1RD1%2BPNI7d2UzTD%2FRAZeHoIQL%2F1bILPfNtUouqOutf2zVckOedOIKQ41Au5Evepx6698cLxTFJtEEMjGwBc1Ikap8aoGNYxtyj%2FakEEOe3oEhMijI10yqDEaeY7jiu%2FaDNWCLT4FeNFh749WROklC5P2nb2aaaRalOk6XAuaOqYQqF06BDfiwF8yj5Rz85mmfwKOuQdn8c1boRRtdR22aLYJjTBPWE937XYWB1MMQMEoOOXbG7rwiZ8oTDb5aVTalD%2Bh6OSaGy23Mru3QZG64EVTpCqPU3og01tSeefeeYGdVnDyqltaeRCu%2FP7Vf%2BgsLw4Mo3OQfYsxgg4bxtBz6AFlGowDRFIjukSJL1wZURhESSai%2FxvjNwglw8CZ1EBQksxOvgPwnxIZaD4KgnU0CImL17t%2FvcNf%2F9NZALSeeDpaF%2BSQXjkN3dkIqahjkByOQJNnVKlfb5K3Bhx8NnJT3x%2BoOGXfB%2BoU%2FjOnh693YeSSB0Pu9hT0N9S5O3Jyjf%2BHUemf7kENh3RYO9sSgKFZyEFhEBpL7igbCAcoJf1qwwrwt4d%2Fi9nPRKVydg3Z2RkIQmX8H9qvirXdY8a%2BkOGCPaAAt9LE5saRApGDQMzLSPjDC4yba9BjqkAcB8wAPDk3ZJkJld2QGDs28rSvIrjqgw5r6Pk0rSXOEUziolrHvXWP%2BNhhYZ4nxKPmMaQqHUOIhBgO9JQBLdbN%2FGvIzKrscw5tNogrIxmCrdKQHzNcDf6BSRoVtZdo73rYrutrW4k5N8b%2Bb%2FLSE2cTZv2EtpeD8WDPUuW5LQRPWBWMCEmBFtTwKqRuRqNYbD%2F2vORjDG%2BwbT8%2BwvI6wsnAEAOmFG&X-Amz-Signature=aaab9848a16f220d5bdce2960c35bb13af4f4c256bb8a2de95699de933582d25&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGJQVITB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5e%2FfFck2Fkl7FRgJUWRPdHJcr%2F6fsrcw8D0eGuYD2vAiAcjrp%2BznJuHnj3G20K2Cy0ghWAOryv1xTkB%2FByxbZq4Sr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIME%2FzNGx6vz0hC%2FxULKtwDLfdiFCVORdESOx3hVHN3X3davCH5NSSBaRm9wMlXXvA%2BiI0OfJ%2B7CWyETLh7Pt85cGrzc7NJgVgIlbI6l5gH7Yf1IkWYY2MtGX%2FsMrzkCo%2B5CJrUjZJycW65YIZiAo5lj9IyMeiUNBdwCv%2BsuVlFTZTU79X244uryEdy0BM3xob2SAC4OeeNWhaxC0J7M3JamxH0HHAg3wyV476n1P1SzbQkOrG%2BONA34Sq%2FdDfenPgdirVpMGaKzKJkGthHcbtx7i6QCOUCA86SRbEJeGhCrJhTlTRitkqlPjwE2SYk0vH5%2B142SW1BUV%2BDttNESC6iQPeVMo%2FYzS%2BjCNsiWnxr%2BKWslyF5Ns5gyZe1tcTsYS5%2Bfsdfm%2FSemb7o2o%2Bc9XDfeVAYmjGzC7x3pDSeAEd%2FoZh1xPBjRQFi4JrlX6dkFxpWCSobUI1WtPIDcFZK9eUiTOWxXNAeSVsQsM6rxdya5Nd3Uk5GLwCax0MVajDuq6mgugbsrFFiDMr%2F0A3nGK8JuFwcZFduHT%2BNRiLIynNjxEUYxOwZyxJYGTSXT0VINvCD9bONQLQE2PSGlbXff3RCCFtgA8yIE4lWT2UfByeiMkxSJZ8gYBL7%2BoUwziKGSBKDXiV1jrb4tgCf7TMwysm2vQY6pgG572pK%2BhKHPrn4nkMpX0YXGucivWbzsOeWE2eAKJdLiB%2F7PVTWuIP3lDiZuGPsRCJZHavboJ9%2Bil%2Fd41JR9qITItKB61YRZ2f30Y5PLHY2ZWNwtE19u%2B8IM2YoQgrf2FUJEaCl52PBTAQZJ2E9VRELyvcjNTG48iulK9iHMdyGM%2FMnz0QIY%2FUOaixc37QWs%2B7wl%2FUDUo3aA4pn2uxYtrOkxKoLSvhh&X-Amz-Signature=8bd7e0e3c0ca3d8b01deee67e95b77b4e56162312803ec6295c3720f0f557066&X-Amz-SignedHeaders=host&x-id=GetObject)

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
