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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2PPWY25%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrGo8vDZgK6vg2OVj4u1RLEc%2FJlpMCH%2FKIGwkJWiuTvAiBaRrdeHJufaMWBUkfIIkpljx2gVnbghMMiH38bSuUZTCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCxF9r2eUIPrA8zGTKtwDtaSF7SzaYnR9fi0cAvxkXEeIsEbY3BUS604t9CnZu14SsqPFb%2BS0diP1mlutZEn6HVKN4Yp33m%2FaD4DHXaNpMtH2cy7giTc7bOmTbE9MYoTWMToAWR1Ue8W%2BL3slgUaJojKiULkiuT5LjfeK4YstTscwCFlCk%2FYX0LoZE7HuU9locZPWhG1JoPpmNgkI7EAJp6NrC3tyY2yfjOx2kwck7PXaG41WDSGn03RvybTQqK1tTtVdGzHzUOoRFjsBE41s11%2BQcJwUBvRA%2B5yN6GJQONPKLeJAd6AZu6kvWY%2FaA6tssOC5U4RsiUu3%2BSoTWvU08RXk4k8h3fBLl2KAivl8zDhOVEXF2ogG3BkfDPNPMIylIMhmQ9lsf6GfMklakRb0krZGiRv2lFeTCN274liMMbZRCh%2FSneYLhAhKQNO8LFyTj8ZRSaUhunxoCYqrkCv8rQEgIX%2FOQR%2FoSaYWTSeWDjYBUDLuMA90I5JnrZUJZ%2FYDrCqd0l51bF3KuFvylpDyxfpgCv0st7xAGe6qf52AGBugdbeyvTF2TEuASnl5sdJRsvrpVCGMHogqD5r%2Bm3mktR26Y%2FYIDoSonrI9mZuAEbgHecjrbpExLh5PfxbbmqBt%2FHzZii0cQickFeIw1aqFwwY6pgESD2RUtn0pCAE1zf6%2BB1Y3995lgY106p1qN3%2F%2BENyAMdmFWE%2F9EZhe9gJsRgdiNL4EdlKAhtm0pnK0o6nARpzR3KIzMBHwpq32LMlgVzqxmALhuTXcdPyi4n4NEBwqevPr024iMQj9hLOeoL4PEJsWqY%2BxPiH%2BArtHxfS5j6hPDP4osvA%2B6KF3Zz7ybcxsTEyC4t6oxEmuzwfiGxnTTdnoyYkV9hOD&X-Amz-Signature=64d4a326048be562f6fc32c951f2e57785f43b52509225e60ae0f5eeed29ddff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JEE44GM%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3rsoN7FnGgiw00Je%2FK6GZbOe5Bh3%2Be1eBTKLIP9ZcAIgXo9x99uaYQYM0FKJxT45ub830DkB0aJMfMU9mbdRijgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWt0VW22FpmrIFC3ircAxz2ukoi609OK04p8NXmkZep0IkBB1%2BtU1F78oUjSTyjk6%2Bq5a9sdn6o5g0lDuCsnigkVk3svSvE1vyCwmcVA4WDOrJVlihoiJSlLOcqYWR%2BKg%2BKDlK66PLbQQ0eQXnYNx9WXiVLTWDGt1d8QhCJfb2SNP10mSuzO6GyNVEpEHUBXQqXl5T0QWAeECt3jxcgYpVfe2YlSVNSEFaajFNvEjggFGA%2FeMIojw7wystdFgHfDXqhqg0aV9VxBHY6VR5AtA%2FVzlbyYAieYB59wYdSav8BiNDdOBmSwnRV%2FVNnbmPo3bHZ%2FlHzJpRjc60UDT4bT0Xo%2F1ycc5tKwi09J7rtuAO99oPua%2F57GA805jhUZ1BXnAL2Tm5Xfxi9cubGS6jK8%2F4ESPpwvkJRGO7V8w6ESXWlYlULJZnL3igWLwtoUdhqpRWBlOYkfgN2xvH2Pzkbuuf8qvwDG9YlETmW13G1k8XoAoDSwwbg%2FsSaVzU3rZWb%2BCCZ418S%2FMCi7msza6DLkeHvc5V%2Bo9xzjQtiHcL009Sgn3Mvd8WVdICzC2BV5VVpKiEjJlFK0hllAcMMTMvEv5itIfMRKjwo5%2Fiy%2B0YQwr9DxEWKqkOlGc83LhDu9S4udL4ur6E%2FVikcYCezMPq6hMMGOqUBGV608hlkIaSpxiB3Thf2Uf9KhMF2ezL3s585fMzAtKjzx8EctV9201XyI1XKaJz8CTRvz26xgJl7JVP67JoMEDcoswy0zDd3y2ij5Q9hzOAWn38L0xWUjOcvQ9oWC4BkI1OF9xjYu1rUpp6DW8B6Ak6fvzu0xOWoRMSWlczVOG09TT1Z350DWkTI%2Fc9Q%2FWnOVm1BSIgApn0ZbAlRE8xF1g%2FIF3Um&X-Amz-Signature=193057de67d11f8c7bdb45d74f2e67506b4c6bfeca531dd42f5d20cb77cd213b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
