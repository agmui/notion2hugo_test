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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTFPYQAW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGTk9kc2A7M04rKMEo41GumN6W1Fu%2FDatF9QVNbSxAO4AiAt5GZze%2BLjTWaaQYtUYOkf2gf4eH%2FVPZhfQW0gW8TaoSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM2esenSVsMM2pN6%2FVKtwDrvJnARFffinOkBw7wxisTdeR%2FobgAjBD4eyHjqg7c2L1Wd3abMMTGjXY0BGktA0dPcXQoDLsucxWYBcMsrqWeZY0tEWjpj53kAewp0ydT8fIMJmBUPpF%2Bf5emTosWhc98WqZ3zbGyej5sYrhlLqZtBPNL1sj%2FxFnaSdX3W98binY7LG3H5xuo1HTjt3TGL%2BsHi1sAa1hN%2B%2Frn5e5YX3NLm%2BuOlT9axT0%2FFADR1Y3Zs9onoyxLoDceZuSeJXFgKgJFYvom6a17hPfaTVfJpS%2F4TA6pcXliOc152Ofs%2FNJSOL6a0VxVUOSV4%2F6VpTvx4ugB70W1bbSpG27IFwGsTDviXi6cOF5bChpzUZFo26LRxRG3X07cGGdyNdaYDz58a4mdeCYmaqsKtzmpoLerqD5DGPRx0Ic1%2BEMkKdTF1C6VoWGCRJndp3fkqt2%2Fb4%2FeBVMvjAMFC1DjcjH5O2ORIqu5gUS7tRGm9uMcSWrLVc731m1CILvaMzzjCilCjpQVNdyWmNTg%2BmFFhTriq%2FK8hJvWmT5OUuJcOd8W2D71l2o6GC05H9rhklImi1279nG8vJpZofCv0DT4w9G8PmxG2yBO65SICfem3sGgtQC8cryNJKDEzCG4MG14Mojod8w7d7BwgY6pgEp%2BBoEwEJcBybyGuXeACeG7blPQz5vN7TiGhUy%2BQTroYraFuRg2nb9NgBMnRVZtxPi1Mj8h3TEH6dzT0zSHHQ%2BsamN1%2BHWJP2j%2Bx1oaMuQ%2FpdDfAk1Otjkn4a2wkXPqz4MqKGeO2sNxSD2%2BSRuLq3FQG3ihz6eGPaZ4DkIC3%2BK1zg%2Fc7EA9RpBKXljlt1duNQa%2FjJB0SYOL%2ByHwtoXt4utlOYSN7k%2F&X-Amz-Signature=6bb22f4da934e8e7f771a058f2370733ab36f066a16fa1c4e4eec84b46584c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSEDLQYM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCsiQgd9PMGOTwXZJQO4DdS351Mz4ZrDHwPd8YTpiy9PwIgAtP%2BeOyzLwjbJT2nfkVUfsyxeFVRWSbG0ucAv1D1DiMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFXYaZNpWj7AXKPQdSrcA2BQCVTspRVfSWzb5rMa7qhEdeWV9D93hXLSREMpQ%2FFpuxlpcqfG3q%2FTMuOWk%2FkBBsbItK7DXGdUGtJaQrDv9OZJYCzL77M4Dr%2FV%2FtYgKhGBKnvrHtq7D%2Bkt5VrcYoLN69%2FLxpFanmkeH1GOBVmlSzZHB63dhlX0I0UyMO96l0hEuxxPmSZ8rSn%2B1grCyrwCKKXQfLm3UWLh1kG3JM9TzgyOW5lAsRbm5mbKXFaKjLafGmZitamntc00Mtqyw48dsQbRozvTJWBuYFPtjD6gapM3tWDwrUxh%2FyclqyNgNL4H0ieOKI5PkIdKAXk6%2BGbUfdVyyQ513Oa1cq2hJDAcdGiFZ86zGKNmDfcTlBe0XA4U%2BTGFfM6uvOJf0NBoab770lyIc6nOZlLDeVF8cRPmB6pdwOVTZ4sydzqUUf6BUJ16ozDZXZ1tRydBbmQzTPyPbAVb2TayrLNuTVocUeX%2Bk6zo%2BJ1LItSH8MB%2Fru02mjNBIUdP09fTXJ2DCylXwyzRkbJPuNkleBrAvd6zSMYydyjsov0casJbbzv9PVmYLwv4QKf7ay9vOjkjOYGrLHCFpJvXO4wsEQ4Sxt%2BJD4Bizw22qAZW6poml3XEg4s9JMBYfOcmHX95ko4peW2JMPfewcIGOqUB6RvAiP0EmG%2BgOKI1xrg4whXlQEaFaNshuuGBP599IDm2d7doKuDNyAtduRqZiRoUEcDAXSks9s8m9UQoPTbczRZ%2F12Q09WkeeQi30pE0OmCX8FaR5dY5yzTGk7NuW77FzfL9smld8j1k6%2B3gzckNvDDv4jgP5vQ%2BnNXAkHBqVjKe0GmaifphKhJcokGcN7jVp5r9TNO%2FSg9LX0zwc1fz2skJmVud&X-Amz-Signature=47dd00ebb20ef6e258ba63f4055d4976a35bf63ae286a201a06505b2a0513e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
