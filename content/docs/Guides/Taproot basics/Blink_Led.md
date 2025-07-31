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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLCHX5HV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM%2BNUZeoheLs3q2lmB0RKBy04ruEueVYbbWPP9uqYjRwIgAKl2%2FFQB2cxiCF9vCxy5jeSQIC%2FYJwcR%2FmfkslD5olQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImIu3FS4WNjIzIyxircA1ajTsQxCVPQjpjkXFEpVEB26qbtniW65dlw3MxLUUGg38rq8CQsWVepffZHlCQ9B1kzoNPviu8PPOH3HiIszGvVzzLlQiZUN3PvHLoWZsjtiROlo9%2BM7cu%2BIDYnJB9n1XZpPNnO5pBI1lgoqnMO9TtVQ4ch7DVwjBS7tEGYwIxEUVBaGPX9Dz7Q0Mmw%2B4VgDD5Pu2HFrkue9TbTjwgan6HNMde9fX0obqHOqRmyGUk31C6H39udtrdEBI98r%2BXXIis7kPdAcLc2YzzAhCH73S5y3vFz6XOvSBS14hkf09Rc50Se87Up2yvhHt8w6ayAsW7Ty7gZp6xp95We2SHRSedfyai8TFctLmMDJzwAWnilGB4K2q6ADJoHX5Iy7M82gEyqx38P64kOnSwDTB08TT3dyyX4fX8r6S9tSDiJ92SipmLlGdtXKXKM%2BAkJILY6q2YPkmi%2BGrPouR8ClGoI5odkjKW36oxucIp4D5oYb6c6rEELfpG5u3yViFcMkgfT9j9C%2FVl7U3gmlUvi%2BiasFWGh%2B9z2k9RfytKYxuLd2mYKv4aV1RV5OVXRGzOxOwrQIh80Sw14u27aKKfXtxN9fVxP7sp8A6G6XXydwXpA3Hxd%2FN24WPzZZJ2t5WQBMJylqsQGOqUBiwYFrik%2FF2M9F1iJEjd77MlgVhJe8Xbs5x9Y2VE3lVahES5XpubBf84Wy%2BJoVfyh1%2BnkV5Y%2FZE%2BKQLQ7IiQk9P0%2BhQ7FeO7An4EhtzUp6GqXaviuQ8TrtJ368VqjFvzOP5dRHYXFIKLTQnl5uXfnVms7kMj9B79klfYpBO9DDqdaD8zSTYQxRf6m7fNBrUyKwlWnnV7q740Qp1VviKTZhNF59ax6&X-Amz-Signature=8b52d9ea1665dca08b19c0b71f63f8db4737b409d8c36dbc31acf09ea2e61975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGSHN5Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvn6DsvznVnQg9z1wF4HFAi9e7Xn7uOBLF7LW0xdLkFAIhAIUHbY%2BFgvUnFO4AHfptmL9WUEzJDMuLcxXP44atYeCcKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6DfUgNvb2AC37qlEq3APY3EwMFbN7QFf1b1G2QEO%2B6ISBzOhGIKdHvA6FkOrH9Amtcgkmxy2fDaauEgwCLCcjDwSWVD%2Fm7F5SjaeK87enjlWEt04QgibKsEvfGMHDfsqHG08CpIFzYYSKb01XbUD0rw5bZy9pYf3UBM7tuteKuTdTeHSuBT0J%2Fe%2BaqGSp%2B6glreZPt4sdoG3ILWQpnQqfGBFel1EYmEQI17HH%2BUv8aDs9c2rMnm4Lrkpz9Ua%2BUwR%2BSqWhG3G2EVf1NZZIxTKHHFomWVNvE7rgOEBQvO6NWlsytUhnhp52CAs4n%2BePOA4vskKjHF9Mzak5nUf2lFi9ydlsD5yp%2BLglFcVkMrIw%2FZ5Fen7ytcOKyuwUf5ejitq8jP1emqc%2BJ%2FeCahXS7iEnaXCecJSxXLOBqBgsa8LpWMfrWo4u552hKbIz7ElKwp15VOLloIoXaZLFgaYdqIVT%2BGRUdzUSHqoTukeTzVyHGvVcwQ1Tx%2BqT1ZW5rYjLu%2BQW%2BaHFBk%2B3EUD2c9I1%2F%2BkxWLotzdkQKs05pE1lWi7jnM8WwgsS6PoJlDtE4gGcF3d3JJ%2F9EboM8OZY2BRVosHHwPceLFb6puM1TsL636TrgmJ6VPbAUVw8aa5ViU6uzSRkckEIDIM%2F6QPXuzDQoqrEBjqkAaQ4h2adx1mg%2BwQvMP9CvDFtLCc8Vb0OYLbSGzARiyLQMTBetlcz%2BGVeY80O7PGVUpBEiyB0pj0r1GtJ%2FKnDwNdtQdsFyv1O7qVjHRnvWrG8E0xxGsgtdngmA5ko5pTS149f1LL7MRrMCtp9vQGqKNdV91eyePAksBIajs1IAfAZJ2rw83Ps7wOxkp8f7P5bb0BeDa77eQA%2Biy8Pp%2Brl02oyZs3C&X-Amz-Signature=0c8673ed6c5782f4ea2defcc5b2dac463bfdcd63e1a170cba90235aed572c987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
