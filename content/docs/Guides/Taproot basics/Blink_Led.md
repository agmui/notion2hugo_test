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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBYSNJVO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDVwqqnMnBVn2NCtmV4ZWJWHJX0SiC50%2BPglP5qkxyXtAiEAySJY8huZaPHadh46IuGKOtxKH0sywPXeeasVyVLkmzwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEXLhbZJyjHS7QHQircA%2Fhe80wlYzzFOeiczEUizYom5wdDTpvK5MWsMdXFJly1%2FLXltYEmKjewns7sVIMeOpH7cFPO%2Fq0o4GfIzrJqr7jfoXM1CvSOiGaobTi0N4rU11U00ZXln0sxk4FE0QJDm3UQInHeNpGnbDX%2Bv1yamTjJWl80OcBwmAVsro4pOKI5DUHs96rn2sZOYamWSewF3MaW9YxqBAJpq89RmbBZhq5hxOgN3pfezXahFj6Nbn83aiZwO6hDyQTeEtf9xV1FhP9FTATnzEykz2IKKfsoqe%2FxEujQEkNcfb3C04fG9FoLcvq2vuZUKt213SAabSpEp5PJaI8z%2B0fUwQBz%2BLd8XB1TWEy8alh9e4HVWtQfAy%2Fsvsw6ntxz2rMLgbPSMybd6goAxbmIf6PgHDw330aSWNwADrpWyO1%2BlPHyzmN6bhhAHZvoZ6vK5J8Ai6vXnhONQZDJ4mEKf5MCM2pGBg2H1zUp%2BdTbV6BHiABvYg4T2cW%2FgC5FFT3oGf3Z8F0lIuyOuYHRoN9lQAYMlxOOgZsatyiLWfB03%2BkwYhbziZVYvrv%2BreFhFCVENQyvqMTQCYCg5Yt1Y02B9q%2BMmGPc8cvFxfx%2Bsi6OC%2BAznVHwP%2F%2FjBRxMyzS%2F9yf2t3uuDBg3MMOqtL8GOqUBeAkrKxeYpzBACxm1khtXZLL4Z8CnfFoxXji1C1NQCLeYAvuSGhlnrq5vAkqS1KwJmLganXJM6aWCDNDaHfd%2FDzeQkxDWHTQTsqnyQVvYC3dPZEG%2BvqNqypIZaSdW6kxufe6mALVAvuT9FVMYg8pgCMy8mIbplArqUVwwL6cSr%2B%2FW0x4wDpsHWfzs0f2k%2B%2FiIFgJPfA4vg7hndJ7hqZYVNxawhY9H&X-Amz-Signature=507bb865b5fee0ff502110defe549718710c6dc29749cea6935d472da2220dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWQMSDC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDgOISCzm%2BcYLKUC4qpaAqA%2BFYjXAZcTnYdJezV%2BvsdrgIhAKpEnVvtbKbrG8mJ3cWWbFtMVgfOjgkw6vvPp4Ly0t55KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxzsaeixb8YOVmU37Iq3ANVHE20aLGn9AHOWGnWS5cZvTdPymPhaCjMaRrmtuMkJ3WFMU795QdVwnCl%2BzSnU2lEaVNR10qwWIw6BX0mGL70EMDLJcq9tdSdzKObnT%2Fn2b6AzOXxIKI9Dyjb%2FZPRF2ex%2B%2F4f0iMK%2F9hZ8V%2F2TaBl8M%2BHZwUmMbbgqU32Qn8YDV6ngLbKiPUgaEhM7i9tYWQHC%2BWSgrIY5j1FwOVusFcFbC3xPGzelRl322%2BQlE3TuEdbygWn7E09eJtNjw3FX6MphiW7TfSudUrcqG3I7b5yg%2BQH%2FmRF3KGD1C8%2BAfMUEcmjweFrcf9d%2BM6WdQ7P9eV3WM3FbVb2aWYKFwtLfhrFbQ6kS4ReoJxo4%2Fdjq86fBSY%2FZFCIBSLkNlgiLKrv3s9mWJlCRi6eaLCIZ9oRF6tdncgrIWF0nFyLxU%2BsLh2jTDuRBIKrCjspcCbVKKUQS4ij%2FDby%2F%2F3%2BLaHOoduPT%2BddhzzcISC%2FGkwMTWZnwOu6%2F69Hft2FLedhH%2BcXlELvgs5RK59jxpi04YLx0W3ndYePN47JRLsdnnXhTc7wYYzkZY48EvfH1PGVTeYlURDR4rhKgGRQ3G4jT11BE0KLrSSPmhv7arg%2BBJ%2FvKhoYu8UUa4VA10of7KLC1rFLxjC2qrS%2FBjqkARGEYBZSSLowbxsMy5xx8qD2eHxECrng43SFLJRE%2FPx6J%2BGCqgpAymSjqQJvrvIqRw8tryxZtboZ4se74R1s0TYYgTzrMdeObqkJxqlJDvKivOSluAqCJrUtIi5zFQjyNxZRdlu2B84RMIA4f8qvh0AurhEvr5zY3JP1TVKDluRbyuXzj2uhO2oVYHg6UqCOT%2FmaeUX270o8tLQiNE2mXCid32rc&X-Amz-Signature=5dc0e3c8fbf27a8b62250a035da5f06633ca9487e1126046255f971209497ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
