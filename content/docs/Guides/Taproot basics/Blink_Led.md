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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQNYADUZ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVTXoFFFKJR41r8evXC7yCL1ryontVhvZt793oShy%2FfAiBmbEfH4nH33y6sYdESki1idtqabSIoSd3eIRh9jyjSnCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM60pEDrFICd0Ydi73KtwDotfr63qF%2F1bUrnWfMM7GCrZyqdWGj%2FyfuG%2FeiwGF9SxDvYdJqOJT10HSlo%2Fs%2FHuSjNLD1h24K%2FS%2Fe4Lffe5khf04pkyMC286NjMQDg0v9grBGI1RyJm4%2ByKyt9AUaTFwKZGBx1gi%2BpXZNegXeZxTnlgJrThEIM2DP%2BMpr0xtyDN89zzMusV%2BtkkxMqQCoL78VwQmgT93hn7GhRdf2oBRKaeK0we5cTZgneq9ibYWU2%2FGiKAJNMhJn%2BZT41HkoqSP%2F1l1ufAa79K%2B4BfdM7H4NfkhQarn1TfvxVWhopilJLuBXtW9GdwTht%2FlSEqQyuFs8OOHaxMTdrps5LN9sqGQaLwH049pgBg8HbDmKhmWKMkiaz82qoxA3xmH8A0QBVECnqWLWxqE%2BL2fPiyH6R5WEP50INdFWBEB3wqnoNxLUcveF2cQ77T%2FVOSxtzNwm4J7G9frgaGR9L9h68Pt7wtg%2FQbdfRZJeorv0mRNjcRQYsT1b2xMgfWJowecWjT56tWpFsfTHYcvAvTr0BxMq6Vvphw2CCthLL2%2FWmEdGebJfHyvvOBkFwySSRLT51poeWftOEWw0wx3DD3UAfWkQRm13wHCuoP0nUHUTHOiUOff2pDt8Gl7uYGP4tORpBEwha3MwwY6pgFjmnrmwmFOPhVT4P0pkqo9%2BciPpB%2BwSOViOl0Q9z9eNPvs9OFDt6s68FtvwFMvctbcTmwAMxW8wPpZm3R9ofnG2PPMVwj2icax9Xl8Doj4fVjfJciTmI8KCHjoVOdj5nPoBguXWVyYzTcFNcb%2FQQg0oTwJWJu1EwsLe5e2xW6vDJzk1d4ZOdluvHIjVxSFgB87UopNyko1IQLQqIWaaTrMDyOrj%2F9z&X-Amz-Signature=ada65ad2f2118ba208ccdd505f1c2dcbbd87fb380d06932753aabb89bd8d3f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UNUPAQO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVLWacvm6yWXT31fOoiYZlnAQibgPN4oGbNdeh%2Bv1GgIhAMY0rSSHyoCb22IBocdjQEsjQHjJfOZR0skAiXR4pEcSKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym2PxjBrrwSPbSR9sq3AMCNbZ2tlU%2B64guZQcrdG2cSHY5OxVQ4%2B4AC%2FaEMAb2RYJbo1sQt8DEJEBfwOwcQpgTxLlRKmPeQl%2BCyP2xPKI2MU9dmNKYeZDPWJ91K7t1q7DpDO9S8Ra%2FFqT5hqwqc2RhqfFxepjfCrSGXk6kp1GvMxO6OyDixWGGBaEvf2D%2Big5siWvzmv6bkoLrVeReFGKqMshtRWPSKwC0Vas6G8WoAP36iWGcIIkrXy%2F59vrZdycEP%2B7mZRjTYISfq00zeLo2RvHUWxlr6kkGhpdNOeJmBoVv94wBYHemejCADj9Pw4KlYxg%2BQk93VWWEEF4Bjstim1dbtUe%2BHdj42dTH2WxYrsLiByJK4EZVJUIAYlli0QL%2Fh8SfudxEQw2STH2q%2BmcKcuPrqOJrLG%2BzdWSawCNwwQQz2IVHo6H2JPVfsNcHQi1jhPFdsv%2Bx1N7qS7JiNxrgh31kikmHGx32WYm1XAfdlUJ1o%2BorI4ul2I7jRo8qWfJ8Raant%2FqyytQgXU4DaZDXf%2Bk6mdtazo6j%2BwlZugFH%2BLyZFV08v%2FVyRSYFzvwsJplpl3oIKCmn2OGQLKvv0VdezAkl2BA5uwaTojjkBNzMDxzGAbVobwKik5avGTxcjZST1F%2BYcMbQ3i5WCzCYrczDBjqkAd32AhG4ZHrWa%2FvPTzPuRGUvQrEXsRB2AnIGP1bBi3889swvHuhf53JgrLpDylDK4iuH1LvJfC343uaLJOGMVI0WkwFQfJKF8rRgkxjjKrlF7jUdSOQv4B9akkwGbTMAbIXGXMubXU2QCYsgWX40VPbUdtmVXEgPHQYBsdgii%2F6EADIDM0YlJ%2B4rlzKq66NeKa4v4eGY%2F5LKr8CSttxzESyX97Ff&X-Amz-Signature=eb555b07992192b415ec1b39ec2b0ef0d571de45952cf33b02cd3141c6b6f759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
