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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7YY2TXN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQD884Jon1nvibtal%2BqoyBV01x9u4j8acXKFnYo%2BWbeMyAIhANExqjlj224qDG%2Fxr5ZEqVmuQRdGmDHPFRipVuVuoAgaKv8DCGgQABoMNjM3NDIzMTgzODA1Igwm8IU%2BP4bFlL%2Bejv8q3AMcnpSczXiTMmI0ohGfP0ApLIlgZK%2FKpQULYFVNFgErV5Q%2FAXQfHxmkWG3BPyIM2i3NVvhsotzca8xqaSKLekriikmS5ysvmJTMssAROOWGTe4pETQFDxWg1lfgQ%2BjSqq9IZgxbKUEn1oV2ZOsFM76%2FVfHANOP0FeZ9oEDzPEy4gP9jhgpWpy%2FcgZLPIjHINb%2Fm3NxjYqmiWbOEWzN0DYWYfUzSf9ZfIgxJCZBKtYNqxybT0PXRrKpjzVSWdfSDwDNtFCuc%2BEzUrY4shlVYKHQjIHwL0oMCXf9wxucFPYXZGgV3QlTAn5MqMh%2BOP9YN17R0LpqLOZ9YeBbkeRjNRmpV8hGRDC5BY5qbofaze4ALcEnD3PCb4RsORBCUQ%2Bd1W07ywIRr1EV8tLaDyO%2Fg7IiGz1hQfP%2FEFkSApufvVU76GJNqWGpR4hha10YYfQ2Zr7tgmO4wE3T9Xr%2F0mTxn8ax5zKGZl3lqtJ%2Bfz4wgkbQBCP3MZfdGl15LbtmMmx42z%2Fyxt%2BG5dj0fYoAyeA%2FMZW%2FREj9B5BI3IJbDYd3bXoc%2FzpdVyRQNRNaYsb71O1egFGuLfdRM5nuSap30fn71eF1tos3BJB%2BLbEyIU88QiR8akRjKW5xu23bfvXPAqDD4gazDBjqkARq4FtDSJ47inALWyB9qXu%2FwffSp0t2CrwbI1vB%2FPREe6zrG2KmpcziNu4DVKj0sAG2ih6fJy9pZA2ojo1OMTqfKbU2A4%2Fjw%2FG8r8HW9ilqxQc0zkYke7GZVqH57ZGW7vCDbot0i6vDVnpegalQxGJB4%2FMW6nMMOgjQLExW%2Fih4GyKQahlOlDpLqr2AmbNk3W89XuV%2FGureQfiaR%2BDrH931q67Dl&X-Amz-Signature=a036717cdedd449800c0cf147e88ffede489b77f8f12d2e4e0fe819e4ea7adf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z632CG4E%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICxJ%2BNHalWdDN3CwQMohDnPKuoTrcAbdNfT6OdXGHN%2F%2FAiEAuNsuU6bgoks5v0PYSLPoU8YT9g%2FEERzYaWFYsHfkU68q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPiLt28Jnb1QfcXOfyrcA0iLjFmXOEYgt4dFjedm%2BdU%2BIgYcOJ4My1976Nd37twO%2BdFEAHH0m0kZoHU5%2BdzzrC1n9YGAAaxqMH7oV3ARxBBnCexu%2BuVJKw0O%2FXaLGp4lt7Ljc2HDXZmzLrGWSc3oQwZ4xsPJO%2FZqggKG%2F8dvwb1QeuogFqTSy8K9u%2FteY0pi6Vs4xvOwIQSq5qA8nJIhH5xL6EVobfYTmOSaayYqsiF1Gx9mMvUEKtskh94yO3uJRaORQbFVz4Y3NWfO5FffFloEgY5fSZ3HIHeLwNaIpmzywY3L1ol%2B%2FTk46yDRjbMdYrXuAIWFSQivC%2BYb45UpnXSne7xqIFI0Z0dhHvcbF24bPE%2FSbj%2FvQNleUpdtdABwm2Ync6%2FjhZEBj9IqG%2FOp%2B0kzgXm3igZBuGAQVuiBmtAsSjtH0GMByYC4fKjBXxtd5Fz05DD2gydyiVKw1dx%2BPAmOhgeLpAmnQ8sl9O5BetqPj5P%2FL4og8JZX0j2AUlNUFALer5yDQtLtTiWFsyP%2FpuXHY4jt6FVMIEphg8VxwwmW2J20z573PLoEKqXtoacLVshEbRTsUP7woH15fNbOs24zmAoQ0bT%2FoVkkxwVxgSt4%2F6PK4Eu41g9YqhcKCsplhax4MDngbYIJk00fMIOSrMMGOqUBMkoeNJS55g9VSOW3hL%2F0XRBKshAnyPPAB3Uwjc7dy7YuDcj%2FQY4AourcrSVgDSVJqb0IeNPR8FEJErzp5y1J2OjT5%2FUZGdQoYlmGm%2F1DUbSkHthJFbM2I6MGoktqldqZ45XdRQHCALM62tUhIt7h4ftOaLCQaotmsU3IfsS3Aw0W68ro3%2F2RwU88H07r2eF4QPViFHgjZ1D1eKwoZEA6LHH5AdqA&X-Amz-Signature=9196536dfc02a93c7722768fa0639adc29015557819ec24688d45def11a611b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
