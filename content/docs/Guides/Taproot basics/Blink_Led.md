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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3V7O2X%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCTQVgK0w2qyo7cnhmviTfi1Tjt0Oj3MkelAFPZhZRcVwIhAP6cj9dNtcgXNu8sQggy29ewKxYWQspMZNCWQKUhmudmKv8DCEIQABoMNjM3NDIzMTgzODA1Igwu%2F46Kfy93b46e0Jgq3AO%2B79%2B8gkbkKkMxrW2NiY53%2F2PWjjH8DHwTMfn3mo%2BfCwoqd%2BhxXDM4Bz2njFV4MwIw2GkYZtdqeeeix4ggBFevreq0%2FYsvK3fRlJByAQ4xantevnOpO5b3%2F4eIOFDyVTrDpfvtu75TIaKqrXhuWrG0F6xVL1rftfEKvgJssSPwv5Z833Wn1ftKGXoOUT0nKOEs1emVrl%2B8nN127iH%2Brd02aX4iyW%2F5DslC2ZEcGXTzyLd7ZHmSSQjQP0biHP9zKuu96MB774UqztjkZpoj8ufKzucD624SEjp712QfS3CQ1AT7uccqMIPys6nPTz1azB%2BN0FcZYZpW1U2UTS04EQnIkOORH00n2kRmV7LONR0dFHZsoXdAwLSO5NgpymMuikiKJxRxOpqAoN0SFo1Y0hBGMS6dcD5MWMvkNOQ%2FxJ8e4CD8irTs6zxlpLZNMe6QV%2BY4bMCpLnkSz5P%2FO%2F1HfTeXbX%2FMeKSy6pTAP%2Fz3RtmrrGoUOMzkf8Gs4Qt6D9RbXp4Z8TejyHKcm8fGKDgWunWPmYPckOI7Abm%2BDX986Z%2BQMNqe2MTwIqeS0ZKDAAqDdUg7P%2B2lPm4Cxe0zCoAYgLbBzJHX0KmYTFH3T%2B58agax%2Bm%2FI75%2BeN%2FFPQQPZ5zClhbrCBjqkAaPFtTypsfUufoOzEhcxEGC4hNoe4qpxtRJn4hZNhWj64KjuZfgaPmHVYMLTekKA6%2FbrdoQXTF8AIVSiMAQ6rjbra02Wd88ocICorvwZOW5%2BdVJ27MSzTjxWHUX3OCNxno0w6ewid88AtfK%2BNc9FgLa2LHjduM2UnRQZK7r6Uxctky01%2BMTFyyDNi28c7tLHl%2Fn5FBGj9YpuDNEFUHitZzLjJU7E&X-Amz-Signature=b2f213080afaead14d47605a3886dfa20c874db6feb7be5e8c454e35028d9938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTLICFX6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBNkv%2BX%2BNW0kV5P6c5VKHV2tYfLDDrbTWmljabURJCueAiEA75lKIL3KKg72y4aoVhowj3AgMDUfN0%2BMSTIe35QWLz4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDN6mt9HHI1%2F4jD399CrcA7VFmNyQ9y5vu1VRlK84aE1bmuFK8ePRD3uA104VmMa1z5Fodm51XLRLAPAudSwwVyY1l4yg6Vv50v7PCOsa%2FfT9ABMxb3DsnAa5sPsF3b6ipTYwLvzMVPKeUXkLqVxThptvKFVkA22koe0S7Rk8p%2B%2FEaOhdY2teWswdyDUMmfdVBf%2FrLKntHQ8XtzZXhh2OBxDLvKSrbFEpnZbKUPx03pYbFVxBJalAKqg2IhEn1QCm3T6HZgzYL5Z%2FYUWxd0ymLaNPF0d2xYn4y%2Fkyzn6sCFyLjd%2BYgbJENBHekNa4BbPG4qEJamXUDCjqrY7wPGuiItI3EoMP3KPxbw%2BYhvUzaLD3oAmZXZbuEJSF8t%2BJy5bU1IgI9CMXsHCIXUdNtYVw37vIoqdubfJKeeVqQwfCnmnqvvtpvF9xqMN%2Bux9Zia83wxYR7KjRkh0wbG2Q8PA7T7RNn6M1pDIOClLc2OPbHE5TmIG0Lv3Su%2F70rY%2BijFcwKZ%2FjTSt3oSlA3xP9nr0NvFSLFoVdakEgI7E%2BqY1rlz08ktoo4eG16TRUFtBCUdELItj7EPS1YNjYfeBJ20wbLNHXBAnX6SLVvJWfU9p9eOanOXrpDJYADK1cnnPalAnJ%2BDWdI46kC%2Bf%2FIjvMMJyvusIGOqUBR%2Ftf5mQKI81%2BTwI%2Fi2Us6QvWSs6K4QTDaC%2FCIAe1u2vea0iMDisc2TJzJMkUEwxcCSYJ5C0k9xFtSRIS%2FOR5c%2F5QZnkb4ygX4bkenO4whIEkZYNos%2BF9X%2F9SM6EWsCpT%2FWknwnEuNfo4w%2F0gEyP%2Bz4JriBMIZ8djIRK09rHvPn8Q2R3byYgy4m0iFAfsIp7iDQwEMRn2UbQjiBJXk%2BEZ5Hxw3B5l&X-Amz-Signature=0b3323bfae738a35946ef6c69d6063015fac3429733e36c6ed42530341d1c622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
