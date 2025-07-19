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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAX7CDSS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Bh1NKFZ6U%2Bnd%2Bphw1w%2BSThvZ3Q808jyrUj5c63TWJuAiEA9HD8kR2VwRXqKnDjDfzr67d9lCaK1kyAwP8XTIuQGTEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBShE3b6TD4MiCy1FircA5geVCpqA5aFP17kOTO2%2F07pDnyiuKDioJ4Y37HKE3PUc1KU6%2BOeSe6hRZG9k5Fli1Th2P%2B8lbtbpyTrUuFQnthuQGgAhlhIft4ZoKnI2jWQQS7zMpE8A38SE3G5J2%2Ft69IWzgV0wzvPZGrVsF%2FIYooE%2BmV78LIwa5NuU9a3%2Fz2F%2FG1sSuaG8m357Cbhov7DtVidUS2Ebkmi86QFhjtJuLpe1idfcfszSPsWgUMxNBYw0bFUPsuncL616XjaWzShQseGSBqBou%2FVktVz5lxtedSLIKf85Uw4i7bGNHntdMzgHGUBGL09vvjHztgQqq%2B3w7Y2X3LLCi6ejUSKAJENR%2Fy%2F15vJzpG5S%2BpXIuYdeqlbCyNR3HSM%2BlMYbZKIenTbHsDlGpwksom4ZjfYCvlAvWLTSCAqVqlcFoBaEZ7ryu1KDgE%2B%2F3MJipuMG0WBd7%2Fn0MJEdA3ckMTgyaa56LNhvYdd0RQfRsHBEfYe69f%2FeOeEhM81XcZQtKXQqVwgRX2utXQyW5ZLq%2BeKm%2FVE%2BtmNSq%2BYEd66sTDX8ZLawxbZedJGP3cEXvSrWeAFmiVBqie2cTsArhwSzIdnfpbBc8oOyOczzfgkkgWQPQGIwwiwZL71wx7Jqbnlrroj57teMNy47sMGOqUBRv%2Fm0eaz%2B%2Fc0VWxK%2FoTgujUpgk3oZcVI2HCs2bjF5GcIet3vJuOKb6vMxlnyIqL4tbbaJLstixa7ALDaDyuSeptFYOl5qwuWYJRWgQIx4QjP4mWSmnrK%2B8HdkTSA%2BGEQK7XxQS479k%2BHS4a0HiMo8XW3Jsb9v4E8dRgleVGM5hiM2PZN6JC%2B%2BAjOQI7tVt7WCTWjpEEqxeigSpPF9%2FYyBUQDJqPO&X-Amz-Signature=95dec5e77058b3d861169499f2763481eca918d832f9c3d30715baf3dafc7451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XN5PD6O%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHHl78weVyNt8iqzoVv9EdWEaiTjxERlGXZl0mydrwgQIhAPCVvJnq8AAV26zbqEOrKgCSZd4ScSBmoFZW7GWic4RzKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywQcjF%2FjWgxvORKXwq3AM2IcgTCu0ajsJbg4kV9VQHwO3v5YWL1oSgPUcqOIBCqqe3zRLEZhEmx2sWShpPf8hTg93huo%2B2M%2Bw4Z%2BKLEjwbzY8%2FsHuwcMHsrO4AtfRh6YJjpDX6z1foCksBUPNw3ydfiahCDXCqvcHb4k%2Fx2TdicSNWMuvnp%2FNXa%2BxmsYWD%2Fs3BPts82n9kKSCZfyXK7uu1ilESX0kJuddakE11LbZ3p84kgOvWmwMWULrI2AYxSqbhNxQDsP3u%2BiI3HR9PkEFcshNUwdUXVJLe0y6ZMHuNuUalUq52NG2em6WpehOME73BJTOI61i3Uj72tCfPWKamq22hI2fA%2FiigFuD9nzBl%2FvO1%2FCfcj8rqXUJEL6bOfEJjmhmodo%2B8zicIlb%2BkyoHmMu6Ofd%2FJgQTUW03LOqSFZ5oYxVFRNmdNLz%2Blq6fT5%2B%2FKEa9GgpZBK7MAbflOE8utWSuZMle2QzXR8Y7m424eUW2w%2FrteDilN3txTUMJWcBaO04aMROHCX5ktX0IdP8ts2F1qFNMICQSsYTGIGXRxAPIrLy5kD9ITZ2dnzyytcw8HIQmtVwz%2FCE9beO0nzQ%2BcUzcIRDJBkI31ZcvAyF4eFLDc%2BR2h1BPVVBDrsVpKPOWXwm0CenH3BXRxHjChuO7DBjqkAYEpCxpp97oF0WgUPLUO0hI3a2Yypx6UPinDTfleD7lxx0rqgefxJXJ%2FrB3o2lbHeuST5uMSom5PMDFhmIi0HtuYHHXceFq8QNwPObjesPufpVJOmi3FKrWVVL%2By5MoVkZnndlgNa754nPjGq%2FspOH10C78KArDCQ9vBs1nrbIO%2FE3t0IuSNqdk9WhMBIaZBRyyrYIbXmheOn3cUVytPYFiLuFGf&X-Amz-Signature=77829909dd67c3105124d3d6cf3030407dbcd4632041f5ac6ea4aa32a82fbd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
