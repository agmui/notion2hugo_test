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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264VZHVL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoOgn5XFKhTwEvJzaDXW6RjJDjwd%2FrbYMnxfFTVgC4kgIhAPx1WKOgbDdQokU2irnKqQBU6PX9nnCq78QOEsOHLIf6KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzA6dBTLuZY0qYkIVoq3AOnidtsYR469aaTUgha0bL2SDscBeAS5Mc8IcMNci1660mu09QUuqc3uwuEyN241%2Bt8rKDPn%2FQg50o4rutzwFcZuk29RTJ%2B50sorNnjmeGbwVy%2Fw%2Blh%2F00bzfaMdwVlbf2GdxQKnseJY0M7GYa8LNMsZK%2Btshf64myulIHEP0%2B8cz%2F0zC1ba2wUbpTNGKb%2BRgcBqR1ZVJDEasOdWoH3O9GaMRILnN2m3Y3nzGOnFPV668ESjCPXCLuWkyMTefjOuvuLCVBUVgW0H%2Fepc8IwRaO2Qdgjp6%2BjWlIqXZwk4sf4e9qUBI6zRIy38d7Zu8suDH2jLf5TbuW36hPN1IpH6nksxKYcM2dDnLpxKVhe4vAupcTkw5w8Pe6w%2Fk%2B%2BcfZONAJe%2BBAlyZ5sEYO5j4wOG3xQdiqJc%2BuUj2WIkogO7AXTlntrOU%2FUqtyBYjxOcVS9DAORHvxqJxazcp2umas1Ktdj9N%2Fo%2FASqAUBnAjcj4Im9%2BTt4zgU%2BYHDikHjJxV0KF9czPKI8DkieHLNgfeSc09IoXWin%2FLCaUgysq5ZcgfyuyiMZGpK%2Ff%2Bu1%2FMoRFrbQNzKjXmltZY1IwWqBKTWjFrdSeBQecFL2CiowXVrY%2FBWPFXHtmQX76eB7ClnKeDCMpv3ABjqkAbKwbn32fc07RuAwfD53LHTiCPhL%2FyTmtgxlDDJUibelabJshWWrLiSlMJDYawJ3KeAqGTGYgR%2FKG3VnuwbK51hC7GpdU3t0J4rDY2ndHi1N7EfuAGmWbHpeXJMJ%2BzakKuGkxcIz37AAN7W1SmHVdK1bYR%2FA8CYW4ITD43jLfrBTwyAzmRhglkrkMO1QxrJQ3xGvbQzQ0foQLLE3mmFzfXyXz7NV&X-Amz-Signature=ac8d2123244e1767af5666b164214283d677a8d5db2f98155a838941c4dc88b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHOYDNXM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4ZxYjiapAbAlxReDx5LeX3CxFi6ugCrNePntfEADmZAiEA%2BcpULSeKB4m%2FCaOdEk2VYHbu8B1oxsnKBAV2z909QXUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5zLKTRhPxBeEFIDircAzUqjX0h3GCWDFwGSNUE3%2BzHq%2Fb%2B7bx9aOkDdZZaHc6WBW%2BkwBwKsY3DjF4XMLgLDzfUDhpVDc%2FoSXRQh%2BDxX6aZyHg672FucVZrQbZWoFCLAl5So691T5weOKfUsZovnD5acP6p1ZO3E0Eus8sCy1I9%2FBXtUPz2MYaDwkis3KLQbyM9SX0xUMctCisqOsYRjNpocc8ZCETE2SCRYLkwWssKDgE0%2BfBWT5MVxzEbvapYpWl2kOYJO9nOa705Ek%2Fm%2FpGxnrtiHAazmKYXTZubGJLopgDpmgy%2F9ONhidtRqkQMkqg1bG7kb28aYWBmHD3TgxSag4Xbv14RmfkXYQtQsKSTeF5vJHfKZmam%2F6v73Zqs1Uo%2BxjSVyPH2bI526bIIrObukOUijTKuLPVJgbuVj6IEluvfdcWlVXVkEfGBTPmnhQxGvGJ6RfsrVKtmdO%2FyqM9CvY22R%2BaCLU%2FN8b%2FCdmjmVyKOTBNDjAsswhQ7d1oxWFWGjV5cNXrph37qAq5cxlyQLUT%2BrCXlDHy%2Bo0pWWmu8LLtmPtyGjHW3KxaBXXJ3wPV8yE3J6F4u7XGGIS6EUODX1cNJTYBUHSwAw%2BwYsonb%2B8bwMMwVfyZpeTyI3seDCavGWgl5%2B%2B%2BTlhBHMNes%2FcAGOqUBtOJBZdUYcktm1WyP%2BaJsDv25Nm0lBSW7P6FTW4ZOdhwZ1i3BJrCboF8POIkQiLyZew6emQ%2FlHDCzIq54oqubc8V4UInQtmwNaxAwfArEE1oGwT6K%2B4H2e0opWXfWOGCOjFjv%2FPWyqvrtiI7Ef%2FMwetfCr5gIwOJ7MIEss36OCU%2FX3Ri1Jr68O82FrHZv3GJAorOX89Y84HB0j6vVtXI13hmcaPxx&X-Amz-Signature=e08d34cc39a1b8cc341e13f60ca061aef64d61a8360e65bdafefb6e9cbc19660&X-Amz-SignedHeaders=host&x-id=GetObject)

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
