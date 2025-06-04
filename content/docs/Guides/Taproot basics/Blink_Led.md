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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRXYTGU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCy61K0FoLsE%2F3sLICIl%2BkEhgHgi1hT8dlZsr9%2FHjTczAIgf1JapyFqAfqyL%2FdwI1DAzR0Y45n8x5lSLA%2FkKaBTLRgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBgcBSvrBBHa1UF%2BcircA6teKqa6a3ElZKBfjcund8wqU9E3NHJM7ki9vWTY3jnKhgSxrBECVAMP14f1wmQZ8sZhrXr6CcJeVZUssDYGz2IbpXhMfErNddOHttZFqzkAM9pH3muYYBFvPPOT6we%2BI2ee56XI0jtI7ypS6Jmb6BPtNWWc5mTa9c81n%2FNUP53jZOC5dH%2FuklWWt26FG7J5lXbhtV6CJlsilfpipmF8Lmo2GsxS1owFJOlkeFWp09BGLtI78VovzbQEFq35F01z7c0wrKImzjeFd90favm7fj3FSjgAPEQmy0KiXYSCQDNYooX85DRwhNtN1yaxmuSSPlosfvGUBPMEL5ab9XYzY9yWySc9Xi7S5v8PVgsRBdNkh8%2B%2BEiCpbUDvFgSGWblEj4EeWIq%2FiGkrZ5FDhpczVwYOksPQl9IW7AizqGxP0iLNvx6t%2FQ83bL5e%2FnGeMIRK4c3CX%2FchJb%2BGrQxCDTQ48wAG6eoc5Y398b73u%2F6uoNfGLG7Ik5qbG%2Ff5w7Rv3Ek4%2FYCmkL7HLvmdOj%2FcdhziXUkt0FAacfYWEYbyW0pdgcBntKgBo2uulQ1dslMc95t6NrFmOPXgXlHQzkhUUP3IbPrujW7UBOi9HOfTRI8vOk8HH5x7W12OIgO3A%2Fh6MLvVgsIGOqUB1Qyc%2Fu8HF0FxXChqfU9h6YbWMWqe0zdxEDyJDcIMKT03SUcVqObO4vWoOqkJ%2FsBZea%2BaI6E1niRBtc8v4QK4Sg3cXfUZT%2Bdk9BYbdT4y2O%2BU%2BIeBzFPMpI3V76y66Nm9Q85HN%2BgHew48TxY%2BeV5F44oVZFv8uAI4QBbmRUdVbckg4TPJwgKQ9g5XVeBKi7nyOwZPP76oxnFHSsh11WyWKtFSyad6&X-Amz-Signature=8e9a394767bb19b87e36ab60e2476c0aa11b9caddd99e01cda5c23ed0a6863c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVKBMFB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD1RA3cTk6iuQ5JyMUBi%2FFXfN2jejFYOlx4u%2FvdHrr%2BlgIgLeHOKKzu%2BLuPHMiHEyF8r%2FIfcS%2BHFL6X6V1C6CaC6S0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHebQcG6JNCQjoJF1SrcA3R8wAxO4flneZQXvyS6BgP6BkT6DxJ4QE%2FVcLWyYVrIUb44ixyB7wPeSOFHctWJfMfYJIByphdSfyhuOvamBwLsy5H95o8DNd8wUssQnzxPpONSh%2FerV9spSxl9MpWsGdvnsMdEwkYyZ8DzdSWn5%2FU%2B7ad%2BS%2B6bCbZOj%2BYwQ0B30ZICLAzxLGml1k%2F7rF8w4x9VeHxYWvJoP5BNI0XNgNP6P%2BD3JxVXsU%2FFuBMS1S6nmcP73YNl3l6riKB5FzYUpwm4EiiOEkRBgOWWGUypmJnvCjrmkiOFnOXJHgf7R%2FIrHu54wZCDnnUSXXFRkHVXXvjEqY6Lh3p8SePqSjiszgOVDfRAJfjzgQhlpJau18sZ0gyKzGsR4cK6iMxaoQbLgWfmUA41mHyTJO8pa4C%2BudjBq2t68j9VeuQb1nsibLFTkNURnbeh4RDrViRgLguAYSjMiD55LCM%2F4sTRYY29XPL%2F012NOeFExN1lcGi5pubwB%2Bzgg36LbjLvVZ7KyFxrWuBg88OhqY%2BkuU32QhqLDclP%2FlKvadRwQj9D3mfGaXEYrXAOX3pppPpq9qXUTTGpZOVOSQasZoRq8EQo1b8sEQBbuA%2FacsNjv6c%2BkYWERbEUL95I85p9cZj775K9MNTUgsIGOqUB%2BI%2BILQ3W1PiuP0dpUpascz6UBtnNLyGed3X%2F%2FSVJAP2BtYpD7dZ5wJGkL6vBD%2B10KuAD8DZhVYqSteOfodqcS%2FMbq2n6sTx47axEea3QfigcDHTrOjPJOcWs1NbmWSevGWXbX20LhUVeNwIetIytgoCexdo%2Bv5I4qFmVsD%2FNCNjd0Gs2HfNk6wzswm4gnzs8Wlp6FqhLdMp7qKHUNol7BGgZ8FzW&X-Amz-Signature=2d101215ea46d45f65ff7697e1c78967cfa771a1d091eeea97d522ad9e64aee5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
