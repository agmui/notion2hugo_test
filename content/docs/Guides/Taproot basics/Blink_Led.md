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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYDXQNZ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICohgYY2KFxokZh70E0VNz9RU%2BVoxpAYK7zWEr3WXHvJAiAz1c4pbm%2FqqvmGf14dN5x%2BC8FLnOWE8GSOaEqi8bFJFir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM5ZvxyJnWDyvRCnb0KtwDQTysbBq%2FTxBqWXVBh8Q2BZ5epYZKS2S%2Bq3N01qBtv5ynRzRplgMrP1xVrYBer1rjJMKsvRrcoRJrrkJxN8O5HFCzSLw2UVPsVA%2FOTaw1D3YXFSbPLOEy%2Fw8cJa0zzFsvf87lq3dLJvsOFIGbPzE3CB2puGpBnF4X7bnvxo1RRWDnQ%2B5nAyYyASs4dbmlWL7PWVJxb2tB%2F824DsQQF4ObYzx30WRQjPcxuV0PwH171NBbDWzNb%2FDdLdioY7KiQWklQONgmOD1vE1RmXBLtGpKxwSY9CetSoF%2Fe%2FHGHg3e0XK9wh80S8O1%2BdFblzDCOZxyA1QRQ8zEwQYW932h2eeB0U5S9Sezj1XlfI1V%2BdBPN9UOS7MD6fheMw0M%2BeDF9iDoIwpjlPv9cVisn8AeJEANnNQJekTDdrL5FXu%2Fe%2FxzeH5BccU34eVuyTmhUDeI%2BFoLA8aw9U20nMMGyzyDz4CUUsMq0ZvE6y7eb9o9PCXuHvhJxJHJ2xPC%2FWHCTm21v758qB%2BHqc8AIV5oPumg8r%2FfvVZePv75whtOyaTkRIlbqTAPOr2ZuE0UsFNpOGC86izPLW%2FbAcu2WLCF8uLfQZU2GyPLuYr6v%2FIynJGNGpIpenY8hFMXTnOd%2FjwP360wjI6SvwY6pgF%2FD1djCgx7WFdruETz8POYDwZh464ZjZk17kxoN10SZX0j9KR2Qs7E%2BwKlpZRChdFvo14S%2FLc7tIdjy7EFTTVMU4gR9uN%2F06%2FpXzoQaIChGSU3DlwtQrciav2vE%2B0%2BzLSyAVzRdd3Sb8EryPR8StVVQNg4aT87xpgyPwtDXBWsbPwQdRGlJ0QbixVDgC4uVK%2FWual4YkOPkZDbGoY3sqELUugVbPem&X-Amz-Signature=8fae959a0c624d3b2b55d690705178799dedefe031c3deb4c8eff7e19cece6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLGMJ7U6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbhELzcz4BDNKp%2FX9SVxkQixTFrTV4ZlOoSgtJa3BqqAiAlpdBIFBYnl9d24zbweki3WXVHqo7BOvnQ%2FPJaUm0N3Sr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMxRMnJWpqXrVwj8zWKtwDF4Nk2m91tIcQDTo3pxJ6NOmjTu5qfEdc2GHpRX6wD27t5pIKPJHYDUHF9XYl3zGf%2BgllutBB0e88kfEC0VphtpHPBQ71ug02RYsSWi54WDTR518liFPyiOq3LyzIJe%2BXNIsVF3eWUT6mC50tW4oi3f8RVgZNoD0M9uEo%2BrEaOduTXHgpM0malwIGlYDqifOdWPJKVfppu%2Bun7papc%2FHRdR3NC1P5nFoffClFLZIcpxq8v3GwgF0F1q86Zr2YGJFXr%2FV7vNRD5NQ%2FgmMCZy2643lyTIRLdWDAiWiJ9XLE7RUOGirOmZQhleVWdOznidEC7HLeU1v%2FJ8POx%2FcKFXcEOic5mIv8ent7Wb74I41HeXOP2F94gXFSH0CQZGZjnK2KY8FaeMvsGQsgM81vFfqN%2BahXZFB1Jn0Mep0paXFUZ96Fy1bBJtUhnTNFL8Ux6D9spD7JmjyGIRoOReYKLdU084QK2%2B0AZnC7i4m0lKZlH7YrgrWnFw5WtgOHDPLMn7vSCCWFGZgse7CG6pCBAZPlWIbQDr4m4GW8VrdIyJhlPnAg2scbOaqNOX%2FIrjDl%2FaXlJ30b6ofj1HUwdd4xO%2FRvk%2F%2Fv6Hfi2rn1TLoMagY6NJ8DMoTYxLmWyFMTQlUwj42SvwY6pgEVMUj%2FncoyKPcu88l0I85on7fe%2FCD3vP8gUngPazToYSFBQ6Yn3M12CugDbDkIVWaYLaqg2kO%2B4fb9ojGGIltKvAqVKQ10oQ8qCLBLNjShz2DDO90bWu%2F3ytBZA3%2FXc2olHHufvGn%2BeqIOFfUldYNjO3fNMEmvx0CwTke4jtJrrKOwnMvu698sX8wh%2FsxplmCF6AVJHgWERxr9j3EhL%2FV5I1xcMikI&X-Amz-Signature=f32f06f11e0254608cdc456ece7c604e7b093e59fa99ff2075bbf081f3cbe4f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
