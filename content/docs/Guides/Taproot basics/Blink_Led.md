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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3L4YZQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEEEsP%2BlNEiww9nXhJtUlTWtql3MYLZjF92sdxLAmyv1AiEArGV8KwdvuMS97cyxEmKxI3d6NrfhHZNYbiLCoICrhMEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLu4r1NkRTrTxUVWfircA%2Fjyx90non86wPVLSAD4Na4HEg1xsUbJcv0b6WcCpAAwCF%2BtdQ90FZp1FD5dTKm5lk5V9K%2FHhhiLIcaQsh9g8Tz%2B4SksUtxb08D8TrA8I0qkefTOKdTFWuaRzK5xc1YlD3qypcMPYODzQZB63wnQ2Hwy9vMA%2FPTLYkbyBDF6%2BRqi9estWHIrtva%2FBUeotv3iZIq%2BYcwFWnNf2Ad7OPhd8p38ygJBBWz650BlfkobARbIK6KpJrdxJk89ZkQRla53diMwag8P8p7iSTxSEIt%2FPU%2BK6TVeT%2BquGICxUszJo0CJWUahEig%2Bib5bKhCS53CSDpIIvbKYY7yks%2Bkl%2Bww%2BsvOB55%2FhfUIPMj8kEJGIus9FzwBGSUcbfJrEs8vZrRu1jDIACFYCxBZezLF8VPzUKNfkYZploVz7pgI8vmdneaHwWpMe6T%2FYCWOWsJwW6M4lioHdv7HVMJkQa8COTqOPiPkFunvB3wedUvQ8UuRPxLd%2Fg7IjvjOxeOhe%2BEsounsMmndYv38so8oYAo2QC9%2Bq7m0NdMcUbb8%2Bh3%2FBuG9CayPFWe1NH7pTdsf2LeW%2FoKbqgNRLMtrO50lGyyoZrfZ%2BtsixbdwHjOIZIU%2BP1HaQdryftv1Zp2B7zNnhEm0TMP6Ms8IGOqUBLo%2BZDhLeaMuL5f%2F8jMGoLjDz%2BlrUYWQLYGqNaqao0xQXRoejE23o6StOBA97wBi8nJdemjGXPTC36k9GwAJmeGcH0aFtN520phvvYhuTlydnMFbCGVwmJogQmHGtpYnIt0vT9%2FFcxToXcxm%2BaWYiMRmAaiR9ERnK2PHbrtsLb%2FbCocpunvpNOJS%2FwaISwtdG5LPSdfFumqklwesan%2BburlTkRzKP&X-Amz-Signature=1790a2a0619d2ce1314596dcb710f2d4531d9e33e1416200caef06fc8375b338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575AISSM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCID1vbvislIbQDbpEi8s9UQ%2BaSRXXxqv5AmJ6mR1KODgEAiEAlmuraq2%2FVDdUQbj5mnfacU6%2F7Gd4vJ6zcI56B4ALpBIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDASZuMY5Pcq4UeYGLircAxXaTngwVHh%2F0wQiV1HDtfGNuyzXTq2cO9SezSvgU1bvo1jynH2rrEuSigA5zJm14lF%2FJJ%2BHCVSApVVfRu9fXO0tnOXMr647UEkMdbOrXv5Sv%2FNw4O2LhrVIX5xCLAlvC4l%2FOYrwfMmn2c%2FPZAw9rZKlO8Pg4xoqtURnbdDF6hDqAgD8Fkkw34rG3nChCOqwHwUxhQUJiqP1u0A10Srm7CbzzFO9f1R0sWkc7P0ZWCiJsG7JJKUBBF%2FbHjSIV77W%2FcWXSZKqmKmVxipKteZJDeLgxZW3dYMLEVIuoVJ1rgEzZWZIqQZapdugbNfjz6C3yxTEBsoM4Efdin5ia5zhmqUcmjMXE9x1EgfqZm9qkBIWj1%2Fh%2F%2Bwim9d2bz2%2FJ0vp1hBp6idZl1MoEuCJ2SyVaHqYD8iV1u7Zm%2FgE3oW2YU3aKq2gXDu88Dfv9TqVvLWdY3n6iRgZSQMVuEJ70pTejYaTMsT1yfsJ%2BBRgebNnKY4l44ofjhdf8DLCN3E9%2FeShqXWjU1GEPtqbbZG7nEjkSWDSEiDuamq2iFbIMOnUhKjou%2FaxJoYw%2BXjsZmPn0%2FIcQNb%2FVGYA5Dk%2Fc6W3sq5UBx0gzH10nbHOe6AGSDeRRhkNrAOMuObuIJwdv2T9MPqMs8IGOqUBxjd2iYeX30pQMws27VOmzcfTbmkbE4u4y2cV4Av%2BE%2BH1TDXwskkJjaAc4Vfb1llfvjnZlE%2BpOEDVGPL3CeR%2Fie%2Fwt15UtBo92zDE8oKPvra8bP7fMUZ2zCtJABUYtJ4VNgtxNmoQzWqIfOWbfdPTVPpt5TOqSD0WdUip2pK9Yhc6jsRkD0P1j01adsKL%2B%2BuNpNLGfAiBTQ06XSd%2BXgzc%2B%2F3XdM%2Fe&X-Amz-Signature=a035fee1b95831906da9b75d08e5275f913524b02ee9fc2fc643b9ab10eb4d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
