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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN3CBIT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPMO3Qo7yshomJXYbDZmKMd33wWaayKFetdEIGNeZ3agIga%2Flz4dE8U4Dh%2B0h1Jvb5RhOt8%2BOGUgIBEI4ZYro89U8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDD2cYiEkxGVItz5jCSrcA26WoW5G%2BtvtkmUGgvTUvRqo%2BVRb%2F6NVrKqu%2BjGt%2B2S%2B4C3oySbIcFF010ENsMwNXKHSdd6IOnaiEc020Hl9481%2ByCIxKftlWg%2BuMcHblJfEoFzZQxIqiXzpJhghI16ufPkQbz6rsZcpVHA75skkcvWJ9STCXaTMwZ6IZ2LQFCmJIQCcJoyq8jEOBUzvQf2x6FG9DmclzU64mbH4UnCjUnZJUj%2B1Us1r9Z9mr3cKekB%2FvnuYG6vIWN%2BhnEyqlKjw4yENNRk50itRafK67injQu6idu%2BSgL1XtSUTt9DFDZIYv5ieKrBJ%2B9Xt6Ugm1brkd7m8qAL3IUP%2F0LNyphNuJfSzbY6nh8ho1SmPAiQV7SqXWPghYU9geh9WEmt0yRLK24f87Rwfpc7NitpONCFTwRdExo%2Fz6XRMa%2FW0arWt0VIomk47ZsnZIjBKP3T1OlqO5jO%2FbHULVgJJdId7DTmF0f3F5Dc4C98zsL%2Fej1fL5P2bFjJQ7422eTXUf7oLbVF4IPFsJZkoV17GkJ9ZaXlNzYTtoeTvIu16cawHWWcRVJCTbo6XYVLvLGjKNPQOFpV7KS4XLVKxHU4JSWn5KpSRxpT0ypuYZ8weuYN0HAn1yLkPCcRX0Tkt6ZseobxPMI6N78AGOqUBVxLbbh%2BKFATXO83YMIAa8BMXzC8nHSPzotIbdePHB1ZtBR%2BL0TFxS3VMdpzHJ6%2BElbdzuPfhftVRcip7%2FNLR90yFmD8vbJAjJQ1eN%2BvLteC8uvReSjil9NTNeHtgptn6CUmT3YB3Bs%2BapXSWMakX6syrDjAzUNLIJd8XtUkfrE7nMDpnyrMlOzov5euxLfjLjocQcz02FoRQycVG%2BVWSe0Bc0tNb&X-Amz-Signature=b7289d21bab2f0e2213e193b3376405a0224b748a540e5775ea2adc39acbd049&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FC64LPT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FTnLLgqYQEEs45lIrksPlujh132FqmlRuWcjHozCqJAiAU%2FnlAls5ReGI1ilXdf5KjUne2MZ7cRBzr8uhFKY5k8Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMzMsfPQDGSFs303rxKtwD8NDI6MpYrNFDcoTHwbXttmckC47corTX1zKdXcgdwAxmpFi0iIi%2BsbQQ7iKnjgmbtBvYVq5HST%2Fi0cl5g%2FMxuW7Z57l4Is9%2F2CdFArb1dPSX2v%2FVLNT8rBiiqU5YdmEGM6uLBRYzz4kDh0rnjLxC3yY9luCkqoDpoVsP4CXx6h84TmudBd3lMdiXE5S3AbgiP4QFZT8ISmy%2BQCJiCjX%2Fn0GW0znNttm7joD9aC52jSA3EE5jg7%2Fx8DUjtAzHfEE0Q%2B0W8ESngTELHjGMZe8OqBofTtPJqPw%2BPa65dQyybeGmrSRg%2BdBpj%2FIaSrsOixz3gwHIgV0JXS7%2BYsJWHW6hh%2BNLRL8pYORT%2FipuG3buiAzd%2B8MAIhVycLc9Gn3%2F3a8%2FUMblzfIWwY3nIz1g2SD8qGucLQ8MkqcI1DumS2ZK3qF4UOn2LjxbnCbbNAwqlX%2Fy0JQJPkwYfV%2BoD%2BGKG7GG2%2FN%2BcL%2BjE%2F2oxUL50uly9JmTNVHOXEY7u%2BFgZH0SfYAwR6b%2BTMH%2FoX1J9TS41ROMaUyYKjUyIDMj%2BpCsEtqAqX2wscbYwdfLdF19i2SrOwXzbhs76XOGLqWIweyjeOcaGmM5f6A8fY5A1ICMPC99StZ8j8Bu2YUfdTIz940wyY3vwAY6pgHQE9mWRpYy1pDIIKJfwSzpzSa5BaZRxwbgs9AybfStk6MaRIe%2BT05dLRyH9mcZbwXfIH%2FTxV5BgeTBxvyNmZ8fzE4LI0pmeoZHt9v8wyPpm4ODTzkTW0dQodQWSIWxvSUUONl0Mx86cqlrKnIQl9TjX6VN1U%2BCySdRMjJgrFeU7syGWP%2Ba3JKtPsK0Pto8gqesLOPed%2F9nXwcdpUZBbRdA21Wkpxf5&X-Amz-Signature=bd219aa32657edf9473d612c28c3a7643f324f1c886451a3ad86e481c960bb32&X-Amz-SignedHeaders=host&x-id=GetObject)

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
