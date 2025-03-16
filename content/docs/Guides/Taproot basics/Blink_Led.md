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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMT7S52V%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5lbyiaulYKXSaLAOt9jjFBhUfW41Bdr39pnnIRd1ihgIgFwA%2BGM%2FjIY1QWX%2BNHRwNyfEEsc01ZThChfgZtKx%2BjVIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGzMuiS6QV81LVjZ%2BircA7QGaAOlWnKYkDGuS2QsI17nAduz8U%2FVlRUW7rIS38MTtDtumeVaWgbDtA5ooIZzp4X0RbtqiBQYAvV9gqEvvjUDeonxmZ6nN9NF%2F7iHBhd%2Bs%2BysZW7xGOThfAQ1Pal1yd1mNbCNcyiCqxlrmEKI%2B9G6yNrvD%2BSHJIWD7ulLx8QQMsj33ssqWuLTvjCw9jIThsITUam4e8VXC0DbjNxIaud5R60Wfrd8t5cND5kkyzkl8bIYmz5pR9Ij2hwfuoeH2YiSSH84%2Bc%2B8UeD2BvSPkU7KPR%2FXYZJgGQDsPFuSgTN%2Fhr3%2BVEdBtae8CcV4X6CDK0aYyoMLJFJ%2B8%2Be0sLP%2FhpdoZWAKt7As3jf9tUOdMwAw%2B5%2FzknJxmlV9fSSolF2yMqPG6C45VmRC9mHEEg3eiSTXOIaerHucvTRf2m%2BKzwyHzwNYJ1%2B2d1C4I%2F2CKkSNAyv6yu7KPeYYrcJ6x3CdPYNk1WgzgKQ82U6ddPb0bdHqlLcG0giDsFiwl6zhOkciJId%2BOON%2Bp0C4W6Cch3Q92PYQbmiU2%2F4%2FupUOl1zpu961lNUpAjPPALdIJ6V2JFz6LW8%2BD8%2F5yACfRXSzXZQx%2BYRv5c8WHhTUjGB%2FIlJl%2BRLhGgVlM7q%2BJD9ePBdzMILZ2r4GOqUB9S%2B8pPD7lT3FIB8mWyNvL9v%2BtvjCejxoWBmr5Vzf4CwSY40dlUDn6Ge1Yu2bJ%2B4uzQuV12pZNh9hJ1o%2BpB17Py0jC5mtzaA5REHZl2VX3mbA5tws3Y8%2FUvibux3rF1u%2FOzfpHwIWakIJ93abQAkmuTGzEAmljlSMp1vlIrZiZN2M8hEqoANa8GFBv7K8QFZhRtTIZFeY%2FiMTmIjs1yDdvOqtcEk3&X-Amz-Signature=e73db46d60d69d229a145aaa8a6b19381fbf867d4fe70154642b8f5ce63fb945&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLISISH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsXfG4hAfJeW5dP3IbOW3uZTjotpWGQetEsEtsHls4WQIgLXyz2OPTDVVb3oWKQZC5jseSx9U2oJ1OrEHeG6r9Wygq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNLdcPud5hrXxFq%2BDyrcA3aTTiNgxlKeOc9%2BXVS7avPxrGgS3hH5CHl3kTgIiCfQkRjWMRz%2F72%2BgIl56LxQ7SYytQheNAzmy4u5jBfvvwQOhVDZrriboApzWy3PIy8TEastxNcag9BSShnE%2B2U8LhQrK%2FXPPCr8hyHmW%2FJD7%2F%2Fl8ii5RWnwSXjAc3DxinmTf0HafCB01SutlIRw0W4w5DeqjHPXba8KPDWsms8uEbds6tIZehsz7xtVTVLI0UxIgndobb9CM1GkMONeFvtBn6e0a2Uas2HXCDAtOyOyb2XDA2Ichk6NNyQOVoa9MIUaooxrX8ik1DSaNI5BNAsTk52p6n3Lw%2BqY758gv2awSZ32%2BXit944KmNA2q99H1YBJSKpxU15q8Jpq2cZK%2BGEuSU88pTM7WsbZHGeZBQh8qIp%2BNf7AM3%2B6a2ulH6v6ZNIfGRxOZBbigLFB%2FLBFn8b4FgHD2zsQoJt1ddB1Nex0MCdDD4v2csndNtOnRsClqtRV4pfNBjn0XILSbcIjwtD3uiF%2BbBr2Tk6TIej1VODwuA%2BvqCbmwwh4guuhM2YFBQ%2Fa9hk15rcHhi8kr0mtvKRmrO8f%2FJXWoVC7GGSIOgcJX%2BwnGYiAbFBEDWQ441gr8EPSXmNzC7RWd4wQ%2B8a0XMLjY2r4GOqUBTWP1L2qCo2sS752R97JHgu93r1i6r%2FTkvLCDRYPuJ%2FPQgw4nQ%2FGqSqGZlzn3CMfq7V6sZFCBbA8%2B4dd6Kx7ZJUpyqPEKUydRElJjsa%2BakqOWq7RTp5eC9dCXKjBnD0Eoo0wB8QFpHQ86lGTWAKHi%2BMZ0vl0%2FoL6t2P9FV78RLuKjY%2FUFYC5FHlu%2BanPH6xIgmMEMzUvnycto1OcJHddsfKErut5m&X-Amz-Signature=15242e1388f9aa749262bfe332cb90d2b137b104b2d4747bc10fe8021719de9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
