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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXVALPA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3mwxxPN0Bt8alE1bMpYsHuFps65fSVHj9m3dFaDjOuAiEAnopeP6%2BI5dxsfbaYoq%2BaxuxiPdITIkf6MoOLCiZx7ykqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1CNkVDaZqZ%2BvSrXSrcA%2BMbZ6DdGdpEiRqHFq0wY6hYP76ud3WcZm28n31YNec%2FdVIMYNsao14Xxt0xHU1TknfcFGgOHCw0eDtyeMivhoc2MiR5lITe7TfWJn%2BUw4QxDe7ZBNX%2BgI491uzkK1octKGBYnEfOLnragShuythWXMYHcoaNMM0C1L7F9GMjE91kReCdrp%2Bt7LsCbx3ErYAMEvsfakQsCAhqH0dQz548ce7Onv3odOlWkX4%2BaMrfUbZD9mOwS7V3QTqiPK6k4%2BaBSyvenrsHbACrHutgJoPagK0unkBw4qNwK8TnGki5FTk3lCfqiRZ4MmL%2BkoniCXjfAW9lChdE8OyzHC1op2%2BCoXb92owslQ%2FPOkTibqJoLhgCYadBaw9uvFqWj%2FtGBpuVx%2BveYI%2BZBW7885xx9Cn035%2B%2BbtH3bzSG%2FV10iz5xWYLvtAmLJGeyts%2BOqzQZQLLhvho89upaVZbvvC7WaBKHhEjP3U%2FfOV4izvstfN9f45JgegLzCSCv%2BoSDm%2BO40a%2FyJvkM3DWOGfosy1mWKWRuX6dPb1uPlVIhFMR%2Bd7DAftUZ1R1RaJmR3Hlrkn99PrnfaZhFY1qVDM987krHlIa%2B2UKqb29zhMC409Z9JpPkI2dkUNN7tNnOGuMQLyTMOTByr4GOqUBb%2BmGs8seRaxNxihPqgnLTbPqAa8XOB2c2KdydXiCyrnbekO0c0bCMiLEldukw3eQ8Ed8F1fdwIIJHkrSX8OiD5V%2FdpPpCZlj%2B3uAjjCsPywrXG290c4qzZ48CfxeonhwClCWCbrcSnArHvQtHRaw4xoLLV%2FatRdi%2F%2Bg%2FtR%2FXnZYQohpcm5LJOH%2FdgXePxoDoKd8jFcG3fR1Ymmohd7C7zy96cVzm&X-Amz-Signature=227c4530430a4db9b257d6b1cc24fbc951cfa3f68817d5f9d87cf8775f04cd66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CYD2U67%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDshmZJm4KqdcR4NE7nkGvvkW%2Fe4QIYk30OmXry%2BZZPkgIgANBWXWyOUtcbQf5rQLERmim%2F2A%2FGOedhLKCiKKSp5lsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW7NAKvLXWthJdUFircAwhrsK6ibVvCFd5VOYfVcP9jEHipFAr7nJlUrv030pS5XdD15EaIt0BHKP5yjJXYSpOUyIeVdYfKc0SWZJfkAUDEAQtTwsp365mkxC6gDF88wF8N82mcpqx0qxAef9mMJWUcWFVzqJcWNzvTwDMT6%2BraX9WoNrkuiLRQUonaWkwol3zgUD1wa%2FhHC1JtqxPZ9xZxVA6j77ep6XJPL2sl%2FV0Y0Iz0q0TyZ6b3KE2678cHDFLEhviJZ2aDA0OJCTHD7gGxcz4R%2BBIiJVT7MjxllHHU8TtPIwrUFhdMa32wts9KaUlD4OVr9Ri9ueU64YCWDs1IZvlelf21UVDvf%2FLOYACEpmwQ3KMNACnBbwxbFYtHhE0dm2Ja8YfgD%2BXegKlKWoP5eaHGAcagw8snOwfFefzSeC%2F%2Bkc88vCJSkFtA8wl%2B29oNlS%2FkRmn7YlxowZIt6gQcQxRsdIeGRtKN5nGcZOooem9%2BeYHNQ0r5%2BoxncBu0u30avBsyvsX%2FGx6OtxXs77PExlc5akdrgcWAurSN08Yl8U12NL3f5A0FUJ%2FLgxJBYPDhYHTpFyLOHp1yf9IFvKHhdtJzf0xgzuu481kBJZ%2FczqKZUEaWo1cZ5rok3UqCJ31OPVjFKOVBIetZMO%2FAyr4GOqUByWz6rh%2FjXJoMRzlOHoA3ZsWBenstNSQvREhYaNSwUzXrGAGf1r8ZnWCOXmUYCCLs1%2B3rTGuJENqIDnljnCjMCRaYdXopSqi1Qy3hxk8wpbawhYfxJ4rgGKvXsuywE9u7EIeJE7SK9kpBfQagizRUIK18KiC5ksBz5qpVnRQQ%2BT5t9wza4eBBODw2gFpXIUit0ugu83P%2BOheAOCn19n73B7JISkYK&X-Amz-Signature=6d0b361986078d9061a5e6eb83feae941f0c9e26355786236cec033f3cd0fdc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
