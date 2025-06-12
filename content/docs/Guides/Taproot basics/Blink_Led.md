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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX5PDVXF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCxbgZ8i16FLUHO8eLI0Q8rJalifah3oPvJCU7C%2BDn7OAIhALrGrGjz5X8gACvUp55AZqjb9OgdZkzNhafXUSUWkWvYKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz35K7HKcXm6zgodNIq3ANY%2BfmBI03i9qXAsGXnkg6cyMOvJgG95zbbrDCuKskeRwhMZEkkr23FIRjWnEF7%2B7u7ynbtMYHLwVf0x3YFPgyPW9Y7laYhpRTE52OPQbK1WPuXdo9x3ICfDf92sPGWGwi9sDrkXlvYcdumM9R3XOWTPulsUpNAuNwk0jdOngKsVPLrSZWyYWd4S%2BFyPkqgdr3%2Fdoc%2F4HU0s0wy0bBH5Mu9rdpCKE0CeI2%2BLJ%2FML%2Bnq%2FnmDI9YGqofP6pqd5JoJzzvFOucp9YXPRXyUJZPJ73j1owJX7W2LsSOXAGb04y3WIXWWARgt5Ih1vZUTXV7gHuf4KMVc9PHjo5%2Bq8bFVFKbZ0uxp%2B%2FH00HgBhRwLR3NpNtTV7K5x%2BE8b2pjJ0p5hVUq5nyexUKQW8X4yVnwUW4atH8OanaJU7HTO6yig%2F72BjRELOmVRUjwhNO0xZZn8cb62XzB2kV16RH637mPaJ%2FOa4YoXvbvf1Joqxv%2BU9lZHdmvoyG44HZsfWcvLQHXQ9W0kutA6mheIUDmS58WbTgwCbTfh4fIPeNfzXe3vpCrNKg31CL0LzSM%2FdLEptivVk%2FJ4jIsKSvNfq9oftFz%2Fn%2B2cTAMensF3eD30Iec%2FzKZTIgZrbG%2FitFHqvF8E%2FTCMiarCBjqkAaVLOaXiqOBmIrtNW8jSynVBlGdaMAkzesB4UFsb0%2BDOTvGAN8Al9gmxrNfHo%2BuaWMiHGWqPJ%2FppAcFcusEowu%2F%2B%2BkN5CZOkFQevnLsGOMcd5gY9yjcfSqSbBsfxlQNMq0bgsBZ3t8uY59bsWHEQ3l7I4UF2LPrLkxw5NtQ4rJGX%2BLNqLc0hWPUuF2Z6L49nOfN0PnZtB3yLKv5sgQMrmeKlrR0f&X-Amz-Signature=73dd6b1427e8bac57b927479d4c30acbf01aa94ed783d29a2da0734007c978b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLUEOQX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxskyIkes9rm7KjiCKMwzYdfa86byTXx2YrwIrvApFpgIgNZcZa2BF4fClKc1XjaVNlf5dr21s5sz7r%2BzGmW5w%2Fh0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F3DUsw8nlTcfcqaSrcA29Qz%2Bxd9cthwjz8uVw5QFiKU7yBY8kJPhxuyf8oX19Qf2xlW4UZTGGtnXERQkKux5DiQtS%2B%2BqPx07%2BA44KPewgoVWJQwK4ahZJ46R%2FRhkRsANpSBEGD4SdzMYgS5Xaw4K4rJ4K9hAhOxYwSZEWN%2BNxim%2BUnNAC%2FXbjb8ulgjK13FXXXIn%2F2LIRsd8j2a2SplLBrDZTeRRCpk2jCswkx4WKb%2BoJb9EwA4maQy2yHA7CkwRhgngIJ3d%2FwzYuazihKIZtTk43oCdgX4h37e7djqpI4EYxt9UPz4PFkGjFrPL44ZVJUW8Tp3Sq%2BvLqMeESr8MDcqKiesGr3LU70u1I082Z7Hi%2FMa2aT5P8aQ%2Bl67DWLDnVboSk4l04bXEwLwEf0yI2H%2BJapC18vMt6WJhKw0RkUBi8xJH6teQdE0%2FIh40uIh8UQbgD%2FaAWPE8G%2Fb1FonmJ0Pl1uMXiEppUMo2vSWp0gsB2u4b32CtQONoCtsiPoQ08wJrvXPGXSnxgnDvIe80H%2BYEea812umvvlIt3zFBJ7qnnbt2RN8%2FjTgbYU2TvAdY75LJ1MmkiDBlwR82xg3tsi0inAu6zt6OR%2B1ffw%2F3X11M9nbw26jps4j81UhXhQJuaVr%2FbUq25VfeERMMiIqsIGOqUBHRDVCuraWGJfeqWW%2BCApR%2BDpXoY8rwENXOp8fZctTJ82lMzMeKttZrlbrZ91lwuOVvJO%2F54C8y54TwqGWT0toVA2XDUlC%2B95W2jPI68wWtJxvc0XeSK1Etzi0qc6t6%2BhwRyu22Abr5hpSsBfeMw5hBz%2FmcQ2ZRFYFJgfhwAbbkDO%2FCI42v0nFM4COluh5JR1Ru8zybQtkgVNltHmoiuxZAmVYuuB&X-Amz-Signature=045c4fd314451c648dcebb47ebe334b04ddf082726e9b7fb35f967c061a8cc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
