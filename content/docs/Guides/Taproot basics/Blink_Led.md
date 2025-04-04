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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6SS7MZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWjbiQOAgYeBckkLawszbucQlFQP2znGL%2F6lln%2FzpREwIhAKtuupBS50IG2mIhJ%2FfY%2BYhSj50Nt54j2R1A5r1F3ilpKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyW9DN2fTdNnBrK8cq3ANAA1NETzdL4gwGmbjMkwPP0Ar5d%2BhELT%2BvE82OUYDFOUyNi74ECMBlJKzgjVPX7CdAoqNqm9ZHhUPNounSfTI9u9nxGu5M3JqErL5eSTWOwUhJ6y5JCl3vUAQZ7Y0aOPE3FPi%2Bvjwlil2xU6LOWodVfY5xEtqEDzoEYbQZ1R3R7zjmcL4NipPxGU0I7g%2FsDxW3Gq0JQlob%2BS6eSeFfJAScZoLf5D%2BStAi5ew1Zj4HGhBujGQfN5Za%2B0OYFF2VbHuPg5%2BupjC2HTVCOR%2BYPLFERGOZa2SWQCy%2BRuJf2XRaHmjBqsJoLglqup8lgbvtriS1zXYqvDrQ1o9VuggbdGHGzJ0bMJ7Jy4vuu2bVmfagQCt2%2BNuyyiqt%2FVOzcQDHSFQxQAl6yWN3KGi9NazZ9YLuZQy76RaUhMYEwDkFlll3IbED4Y7PtAahc86dYnRoymibiHYOoKeZDnGRj2kgkjYyI2Co1GkjoQTHV%2Fuuf9Q0TaIln5XFE6dTJdjnl1on3RaQbcvvDRF3cGm%2BbF%2BZj2XmmfQVkkgRIamuPyxJmusvmGhD6qGOxaLAfkmdVACseBAvPEPgdkdYWMDUJuzOuRdKiFdJJxbRRLreSDFfqET0WGqrN2g3VfzKdA3TRyzCWuby%2FBjqkAaB563AYtbgcKtAT0%2FzZ1MTkBwduMRYwI3bgPX57YXsOIVtEvPrMCXelINzzQAkaKKkzNWXt4KDZj9OQPFHbdPQtY0iwB0ywO6zIVY3V%2Bft3RiZmFHCC1NSd4%2Fg4d7zunqMYGPUtKFZf0TPfp0m4KqcQLQIiGiX3EtPZP0imIJy5zOd8zLTer6kh6oyQcEWIIJghKGcOGzDU4PDjnQHHTY6%2BjyAf&X-Amz-Signature=b843fd58b38b4fca167617361f3a9670e4c6d66be9db373eddd5f3c6efbb6482&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNALIQKJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2FnS%2BTetIS7%2B4AnkiZjt7zukLpUma%2BzR3LMO64k4vEgIgI6pVWDFlxp0Qvun44uEDE2kaGLgXUt73rm0BHKG8CQMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNH6GhufNlEoYeWXCrcA7IXTnCERB9A1z2t9Vvjh21wod0ujd0jz7w9yOCKYQyPR%2BmO9fPFxuDcqScvlTbjHkAtSiqfz6Z0vzzA8CmQ1zfgH%2BVwiGaSSTjij9HZtRLp0EXbvOFD1MYyNikTsOqJfGAlxzPviCIJD0ZcYxmikwy4Bt4AP1tTgA00Mlz7eOK23Wa0tn6WiMLzRpwO8koZLOiqP4PMUeT0EhB%2BILxPcIhN7kk8TmsKwS7357OolvoAwYrqEPzqxbaQr0%2Bo1OhrSo1CbVTYRr59TvQyKUiIdrpOEodfmy8UX3GVg19k2EDXcqQzSxnfXLKWy8D5YFEe21nXI36oY3OKj4m3KoIZyvAEXUyEs2eZhHjIPMzBQqMbzM7MMOKwVCgvrpQ%2BDvjORkDz71H%2B43wsdYnanl%2B41DdLKrSl%2FgIRyxvTG9a5paWm4LLTgQm4TV92OPdilaeOjgQKTDNNHNjpi7k6jrghrsOvBO%2Fcda29d38lCOZMze4TcNP3G47phv0opPHePgjnZZcDxlSg4Z1DRpFZKuk7I1XXW22ejO9kHFG80bvj3t2VsIkQXGBZ5Hdm4w3YA62TXZOw73%2FeDf2SHKjlzJ%2Fg7JgxD%2F7byfBG4DuwHk%2BB%2FMDB%2Bukk4toprzUaXc5WMNa5vL8GOqUBrchcAl2OFYhd5CIunmj0AI7fVJ%2BraRyd59L7XvnoNMDBnvDT01OVfISvnPJujA1CD%2F4Yuh062P8w2EJAYOvnvdb8AlKFIsFQagl2zpDCDYCUzF4f6ge1AvoLhVSFndeIi%2BCcIBtSCT3EUT9%2B%2BaKQpaAO0Xpk2HUq7J2KXPx6gvXfuAwVw2mICui%2BK9lR3UdE0I9D03VVuq5A1QPiYiTNv%2BgNVg4R&X-Amz-Signature=6ccddf171ec86dbd1f760ec7a291d52fa6544a28158b0e96287324e4673a8a62&X-Amz-SignedHeaders=host&x-id=GetObject)

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
