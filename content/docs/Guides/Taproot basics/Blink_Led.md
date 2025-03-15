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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643J6YRY6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR47PHc2LbO0yrkhJS0iNTZ0UYUvKMjpqs9riSeh2k%2FAiEApOVyyngllBht3LEhyYSiymNM4DeLf4CHBX8pm%2FDyNJgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRRtJqNGXyDmLPocCrcAw4ermTBDmZP5HdzCZB%2BwECLhIYdoC1TkmBtolrgmrjWozjFzGuin8YcqD0UmfCiMPfrjjb1TTjwOlMsyUXOWtiNTR4Yq6rO%2F0ryzET9sGHua%2Bfj6WxroaaQCm9%2FIVKZ5t%2FwP02DCpgAHw27aI03UWZa2qKFvs8PIqcUBX4aH1OUGE%2BvEzVcStmxqFodJGPdjUTDwEJOcdERb8RvPaND0E3I4otMD5jPFIiDqeaBUKjfqeVZRZcgXLwvUTWhMZaoYsfsSoFFoTm0f0igK8wU15JEn%2BvFnxb4TGP7qnC9vf3jfkhpdy3A7ajdzpxx7aNyRwcuWvQ13gQh2bqHGUejeh1DR0WA13SOX1K8vcP%2Fl1XpTHgCTJemTm4kQXdhW1RMNb7wlCiKcxqMQEcwp4FbEuEriSxzaeTBxu%2FU7K5o8IZAwQCSt027qdIukRHfx5GH3xvboCmv9IUh8Dyou%2FULbFgmP9NWZQM%2BUQfa9PidMdf5ovsS5gX5Uo1Z5xk%2FuXIYCoVgOSXW0nZhFpWczJ39I04st5vQZMga9pp74nLPpRKLqlRdQn0d6OaxeGCSg4OjSwPlDRRHDU7Uy0Z0pY96DkCzieLJilI%2FwBbzHrNGeYFFr9%2FVef42tgDHfy7HMPqM074GOqUBf3HobGirkJmnP69ca%2Ff0N7hvFZMIuesMveF5o%2FkQBlg30G%2FrHxG8bhTnrI3J2tDaVZv7n%2B8vm6AEtXHqB2jRh3k3cdd6jZciWdFbySvjMWnKhbQgoh6lcTkf41EXMisjrSzqFElcCBToTRopxfrmWO583TX%2B2AZrZUE6B%2Bdf09BSy%2B3DhzaAhnIGRza%2FhmNz%2BltF8tlj6ZwUvU1Ay1Y2IHPAlexS&X-Amz-Signature=77882817002173bfd7ff9f09b9da4815183ab2e823d92e6b44a2617d46a86875&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKUBDTS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoX%2FzS7enbhhWX9mVjmj%2BCs7IC%2FwFrnkL68B9i4OrXPAIgfAlVs1wknc93IgqHwIGnKZ9%2FJ6ehvUdcPvlUpOyDtLMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgr%2B693N3QsEPgsKyrcA%2FV3oUbwpl%2B6T3sVks%2BnbOYaViS26rPOs9cf%2B2O5rIp6WPI%2FtIGUA7NoWwboyarD5i1eDGtK8j1NsGdYVfbddGOXrxXJO%2B2mU8%2B78lw7vDrwbuWwkwXSijer2MMUCnO2GNrdW10vWsDOJjOmAnAca%2BCd3fQXYox30F%2FCuL1PAHSNBZonyEoT3ktaKNIwbR9YNl8kmYRJgvZYh12hUMSmYLpfhFcHGy%2BtNfTjk8c8PH3dlh6t6EkQrpUPzwKFPzy2Z%2FN%2Fz1EySXKaBGbVHp7SeGmhct%2B%2FgKjqXDp76cqM5X5gjMh2B9kpvv2FgKc5YEE1qJqGLZIA%2Fg3kdflcQUc0vwLxII83jChjKPoT2NpXfjQWDYJYI45JXYn0jWo7f%2FMNrNDskDKR7MDWR9gBkMadzAlzP1yr15uqSO92rORZA8KTJF3%2F0s0AwNgl%2BjYMsZs7QARdptXVaL%2BSQW6ulWeeHiGRRqhfA5UAz7RSbBw1zHa1zsR4Gmf7fpcLrsnvfFVLATzj40d3h5%2Fkk562vV6A%2BOSbN8YDcY8zkPpIAevBzzC%2FWmDBqQ1YQHdKqeji3g%2F4PjgtO8SfLgsOCF9ZYNI0wWTaVAd4x%2FYcGdjvEO2wiDX6eau9UctLKvjswhv4MPOM074GOqUBPrZq4zF5cVD6OizjDWEtIdi33p9gHmLNXPE9VTNheP2NjtCRZaLFCDmPMagRS%2BKuxnPqNufTBnwGtBeD8Z4XJaKiax%2FziQbjgUhcO%2FWvXihgXkxVRyVUe2xyXZ0naljECNMGbQVxougoQUYOxlp77laJm7DwOvTGaw%2FRjj16zHwnIA4K7QwfWtpkTWB78ewMd%2FlwelV67v%2Fvk%2FFtLh7T2CoP5qkF&X-Amz-Signature=d040c29d7b9b8645aba3ba1e961be8a3289bc4c67103aca92399d5fa8f66877f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
