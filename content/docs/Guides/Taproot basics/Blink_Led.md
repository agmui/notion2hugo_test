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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF3YNQKV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDreil6%2B%2FzweHmHvmyjgxgyMYNmvIAbkgxc%2BC8LwFADQIgWL0qhj%2F97i%2BMpU4ma1pVZSlMDMxClI6ElJ3qVoS0AlQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLzGhZZImsaBhSH1SrcA12POQYlr3albyuccRbxrixjOLS%2BmXHkO9EKLvRRSYel9wiukeoy%2FDpTO81kBSI5lkRo3pvD1Mrkg1dpg0RU3rj4wUV7PM8ld3X9hTh%2BVZB5S5lWqhV3Ir0zFKAnDDLMY1hzgNFoFnFu5N0hIxeuAlIIuWBt8D6Tm9gV%2B2Y7AR1h3MzsiTCpKsA%2FDD5sBFlNy400yzLCdTWZwSw65SFmaKehBapz%2FpTRJ80aw4nZF2p%2B1pcNUtI7yEth0SWuY5g6EkPV3n2ETATOJ7QRam4X7zYOFHziM8fGr%2FjZX%2FWZlS%2Bh97WyEA5LiWtTiRQX7htKz9S%2FChZHVTkcw8nAXsREuw8TVvnCf9snorIGB7JVlAplbFQ9m64gsHZAZ6hW33V1eHmfx%2FbXqK3%2FXgIrlvzvWbxO5B4LuDE3SfvJf2TOOb0G%2BYPmasC4rPL4lA4mCZG4etRYx5uY8vWoYCI5esS3J4LglcW7uJYJ0hdCvbX4gdaAE3E%2B6iodE2QWxsDHAHczGIMHngM9IcEHRXD4UkR%2BsUmuzsBF63YpkKPtO9I4tuZHqLATzcQQm5sQ01n0iScwyVLzlIQgMiZvdMFZ1HM7DolH%2BKpaRNIAZBwURcCZZWAvlGzbpKPhIeF4XtI%2FMJXYl8AGOqUBWF7yJmtewZgbFK%2BEL47lO1yxlaMofd2BBAkfwklDN30PX3T7I5lTQx4wunPHJoAxyP3sybdrkYtFV%2Fff%2FZcA5xJhsUMNfbcyEVvnKcXbdT%2BYqDIRUYSmxiBkdctRr4a1rZkPXtGjisEgHqWCGZvz8a6fveolZnxdPm4eQRLmqvJJ7F5GBxFCKQ3xDNtjHDbq8ofNYqUzGm4EbV79hqtoEYLHBai6&X-Amz-Signature=1fdf89608c55022cfaa16d457862039ead9f9417ccb9ca349bc022721ff9e0fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPZSVCU3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDQilUqbPLHOcRNrOv4GxtvTSS%2FvjY3WivsibdyKJbKHAIgLbAJ9FJ%2FTLB4rXJEywIqp6XQb85xwpOuIcUykJrXt%2BEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUlg6GQYypmGWOl2CrcAzrY31ipZogskcLb7l1NC95V9Co23OmaJFU8k4Ym%2B63MVdCysqwq0%2FKPnm4CDN7wPy6TBSqnExcfAOQJ0xQhucYjuOTqcdPOyUdSbGdLc1FWqdUQWM9kXwVG0z4iJUUJ%2B%2BA4X4A3kGnc4wr32%2Bx8GB5rZqEAU7%2BrnkmRVd1KTpM3Jc%2FChii9t0tGjJoxpA5nxCUBKiL9ABV6Db%2FunSLKcybiFDVQ5DgHhYS%2BRuWFPTlH1f7Q20zcU1wlPYkGuBSiPxYcZ4dn8NcuoVl2hS1DzEefWdKn2FsIGGDBARqHe%2BXPL6mGWsRQW1jZDWxP1Gh%2FK2lawWDG5AjX3uNzA%2BlhXEND4siZyk1E9xpeEpIqMLoi7AJQ7upQ5y0J%2FKK%2B5IKgVX2OXSKJohGgiPhc%2BrosgkRFobq8Qy9Ls26OxHN%2BgxbFd01h02MaJpC8vgT8JFww16vCvkfQMR0HTym83Drp0WVaNKyVtdBBAZ8tTwOf25oyAyUjp7wg6fTJo1epE%2FV0Lif4Hn6o9%2BTG%2Fu9RDjL6OdhJ0Wckj6lxmQxHbDDs4s4I%2FOFw15l6SGHHw8yFyYWz%2FFP2hnZzIvHraTfDvsFMOMmCEqtjsoq%2FVMACxUBixK3UM0F0ln73kmu4XNqLMMTYl8AGOqUBNuhVhCutWigMOLx4XX8hHDnU7VJPzIz7rj3%2FZXoiyqWY%2FUs0KUBVo%2FGIY0bExIVnT%2BpygTkoKymp6IB8SsPw5xedKsPMalW1n5JWoY%2FBEbGkQK74tQycPHsJzLrSaKjnSb9Rtw7hFdLO6IoU%2FquDDWissGMODLrCtf91AhDX2YHiEXOByY487PSLupNW6Qe0aoMlQpmW3P5ZCJ1AaTSN4Nnfy9ii&X-Amz-Signature=44ce582283d5458d4b19c3893dea1e1733422eb363c22c5f2d0bd92dd0d80780&X-Amz-SignedHeaders=host&x-id=GetObject)

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
