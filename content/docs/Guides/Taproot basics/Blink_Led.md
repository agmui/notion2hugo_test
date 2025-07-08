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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WEZNRVR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLX5Y%2Bet%2BwaeWbJkZUurlP2ru3ZhcHIBimZD%2BXfIJsvAiEAyK4KgaCjFT6iLrg6%2BguU9OkJ%2FWRFcKsORnGuIxEBsAcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGeTr1sIUrCzHeY1CrcAy9KEDhuxAZuzOgoLdymFWhzf0ULaO8YyPKlwjPMWGQaWh%2BSZ%2BmITT1plBuaNCYbGdwm9Rt5%2F84LIfddEd49vAfagyQ89MHvNdrzod%2BtTImSwcFzAhoYoVREflxX1fZELbXBk1kBHZrTs5Vc3T3G59EaonROIJc90FXkn6PMK5HxCkMu0tUytb%2BZi9jxkvO%2BJtpxKz3MNAX1veeQANLgZM1ZuKQJqDHwN5Sux2gL3PJ9UFClYFgnMA49TUxdnjjv4mOkMWvkx6Lz2%2FGuke7nRTbxkqaXF%2BtLpWAVj6fie4jwgOZ%2BTjWvA6sYXdSYEqjJ8fFAsBSm%2BVKSrR3W2KcYEBCWuWa13I4UHr3S8uSNkf8xJs4lMFbsXcNkybYB8mx8FXUt%2Bb7s4AcapAmRt2j48nY3Wb4t2qIixKZfkFzdZTWSXpgGzneQhorcIVEmxbX%2FnjkWsBhYIXSdkbhkz8o%2B8bMzx4Ms6bCaOkanxlmI%2FCjthZA9DxU%2FCdDtm7DH2v0OCW3a9AZYvWM8%2Ff5MABIYbT%2Beaqx4h0IO56KdPTQfkyencA%2FZhSSxgtFI4h5CoQhDxtQBKKPABM08v7GbH0dNs3A4e2j0c%2BDrfz83gl6BHNHniYjFyU64kv40iIhVMJX9s8MGOqUBU5x7RDrUM6fIUe5Pu7O68Qf38ZPBwwZz%2Bf0VYB6wg2ph7R1eLX%2BjkfgOF5eL5O%2FihRlvwFQ9zV2TKzy1RnlUbnv1mJKpDdTH17FLcaMWAltyUK8R%2FXAPh4S%2BmuahBrTvF7xf6n8I5YXWFSPMSUodi1lF2YmE1nFrgWIeEh4tJjCzDv8Ax1rmIms2fvPNAwX5T3r4ZntC60DFhOxQtXQ3oo6TRpi0&X-Amz-Signature=f275a55719623c095867c46ebce230746892df4c50c5792c42dba912aea20eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRZN7KC%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDROcDuNpgxxf0D3QJAxN0HhoogGBHVmEJ7HkR2W006zgIgfq89tgsbq92KHTYpCpYMpInMmt0TwnBFm76Jr7NViUQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIomWEp4fvnVrG9ihSrcA3KgA5TcTa0Bw1%2BDrxiF17V9Y9zEaDtGoEsq6ErbzF1sf5YbNxrEyuPvFSKIQa0XUCPSbVYv5rxFDpNkid1slgqNGebKjOY8JvAJbsdNGLN6hz6UbKVusfyvzIZV8yZ8zKId%2BAs5FcFVrje5dP%2FycgD%2BgOAxbH7flFhQcScpZlryM%2By2ctLPLkbrOux%2BpFG0n323F%2BnkxI6%2Bi53s2EbGMw3mY6cbcjUwZYTXjL9OcoTkgeIhLIS2kvosoLdcyyWPRE5WZvOB4DqIGFdDKpJRHb8MTTca6NbESfyvv99jYlZvKlEANsGzLNuJVBZlXQnRhjjc12Zf3zNkoMeHTi7AFgsJ9tB90lYnNUzCwe72%2BfESrgzGDOIynVa554Acp7lhAXv8%2FJF2DkDggT0sWyT0QCfYYr%2FCby7tG7oXn%2BFglgB76aXyGYUBywqtYRni4tRR66mhZwELfb4gsAWMhfKHXO2COozSQ6rNDL2pE1dh2ahh4FVE7oCDi5OIeXaVkc2YwciFqLAEIPE80u2I4pXGsrPgUeGkPTY3U39ZYxAURmI6OE%2BbvzPb3skj2VCZqyxbLT37dcESNNyHwP5DR0idyWPSNCZOMxYWum2PEVbbjN2J2%2BBt1sOPTA5Rp0BnMOP9s8MGOqUBt1quwLSMDaIBXd1EQXSJly605mr%2BQiCuzlT7BUgswC4E0tS4mrN5IiOuguTzcyCLEo7kQSR1JPd%2FrJkBqSn9PRwA8eL%2F3qwYknmzGQllMCS3TP8xEr8wPMIzxsOgOWpqtLX8s147omnrrz6aJrytkUZXRc%2FcRRQ7nFJkwgkb%2F869LQDEJkuI15BVWq97BgkXIhXt1O5iUxVn051McL39dsRH9oP5&X-Amz-Signature=66f97ecfa78144e4f14ea6795d46bc442be0b730ee9ba8e20745eceac5e59884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
