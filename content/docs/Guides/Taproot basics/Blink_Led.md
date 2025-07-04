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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXVCR7M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFaHM%2ByYOExup70GdBeN6lUf54FZoB0WN4fwj7MKMapXAiEAgq4%2BbD3THZqDkensZi%2FgSrrB1BuloH42YtHF1kKiFvUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDC1tjamirEpvlpApNircA%2FD2i8zXucy5ebB81sOEizvu4qXKq1q8CkL8Ub2boo72bVm%2FW77d%2BYrRZ0gul3oRTSJt8AGSB44Nc6GpkEFQ5Olx%2BmrJB7tEi0clIV9XBnRIK%2F36fdxrEYrgRgx4FqFvKs6sacw9YxhqGAtfY06ut77A3hdSvVThmVWju1uG10vFzZwOppIVj%2Fgl1rsbMKfToiCp%2BahXwwp%2BZ1fQZqyKQl6SSRmDC5geVlOfr%2F1WQ6pIehUkmcJWkowIYIXSpiCrK64u3yGm7v7oo%2Fjf%2B8v7teWNfRRJwMynnIrFIeDxgYxLtjRBdzM1nBR%2FzN6lPZcCV2OVgyLbIrYY8GWP2aEDq%2B0ZGXUKgwidKJA6jh3zqeZhHcFgbISCcGUuS3KlevduTV5iu0k7vxqy6ky4oZJ2bFah7JhsUuNgdsPOrTRdde9H6U7XbTeZV1sjjYtThdc9MjbWOheuxyDn1QS6QW3SePKgSJ9i%2BVF%2FUd4LLFa5xze%2FDDvVzeEfO5pM%2BKOzQtaAB86yZnqTKMLjmSDfvKEF2UpqUghDMACM6RezxSTytVKzZlSRSGnVgvvj%2FUt2rBzqFw2iEBKwVdd%2ByHf3qR78SV5sqq2BNQdwYg8yzS0Co6jRCOuJec4s9Lz0ZtM8MOi3nMMGOqUBRZy%2FRmH18sK%2FtB%2Fw4U%2FJvAbbGmsEXUYgAI0ZXGeCephIAyk%2FSD7VFGkKL8b3nFRQgklaYhS4UX0G0IXHJeHHkyvlsjiSWRlcsLdwkPt5J2CxVGCzX6dpvlKMn3Qk52dnBal30G0%2FwIAiWICeUgB5smxSi84X2eJTFDszlIKhpYUhh4TtNjdn8ZVlEj0I7%2F1JTc2Hyb4JrXFd87whB3FdYtyEEgFC&X-Amz-Signature=248efa282dab90a6a194664246c917d068168ffa91e1a717dbb1c54dd9a6f54a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXXNK62%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIGABkWtNlud6vY8MTdB%2FSfVBUyCSsuATqjH%2FW16wsRR6AiBJqHqw33gVLgd1ViKu4g%2FGgA6oD4qZkqLXvc2baQwafir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMBYfsXJrUFbISrP9DKtwDAzN55csgmaTZggrJZsaMFZJsa5Qqgw%2FGN5YBkHX4UI5h636qAk%2F5onl0ozbmTABbfr7Oc%2BsOIyptToiT5ontB%2FF7FE3BHbsxHkL2tfGNaTiTDAxxrpMuRg0x5YEf2ngV2a5tHpqILQdY%2FPNbbPfvoZSwZZpPAESfY79hy87MJzArKwDsuR1Pw2fqw1ZjzoQI3zsl6vCRK1TvR3DjMwgxM2WA26ySdEn5c3IrooWPtsxnVmGYS9lylj3lIK1ABAmwJUyiHxxsgagkR%2BmRNh8NTiu1w9mROuB45nAXilc61dK%2BbwdLnX0KMwM1wGN7G%2FF2Psh5%2BTSkIpVWPnp%2BGuS0ogOEZguDB4pnIPIeYOutqIMW%2FBWJPEBxjUyX7JI0Wei5S50%2FU7bW7uX8eHYXW7Fdv5ngViadPm1DbrtANou%2BFhAI5p4yOJtn8BHGJTlzzJaxoqwIMkdlWZzH1xn4kcNwV7q%2FVNpFOqOXs3s6eaG0qY2WTG8Wi1DzIWtv0ZYwrE%2B6w9lMwfPU0wCvh3rgM35GUiU3T4WUpQLOw6XlnoGRX3Vvac0sVvBVhWHaiNK4yV7n8gu6A4W%2F8MAjaZRz3e7Gi1dL7n2HaRu0eRkc54DzhzAPWbKlccDJmrZV5RIwpbicwwY6pgEeByPLtroQYBrl2zBAhlk%2FpBEu9Kj3JHqkS6tDazjSSdEBIVIxK4o5fADtauIEb8ZLonVPEvF%2F%2FiC%2BG8y4iz5FPJILeVl%2Fb2M3cqV%2BAQZNo4I%2BzM1OB3M8rL6dflcjxaE1VIhsDVfiB7CEaM4HVF2G3EZ3zVQYazfoYLbFwFdXfpryEr2ZC5zJN6RuNRANbYducNTM4V7no%2FTeg3etFZS77AvzETm0&X-Amz-Signature=3e11747d902e66465f1c62e5af09de0525b5d2f3e55f5569704c1b66f725f7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
