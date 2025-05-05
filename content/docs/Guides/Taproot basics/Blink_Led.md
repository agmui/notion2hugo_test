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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NFWZ4O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt9awWkHq2an3MWq9xscsS8b9s7K0ILg3qsjzk2gAKlgIgSJrtEb1T2KQ4hhF06KSwaI31Tuq8q2Aqic7UKu8XsY0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCL1cp%2BtxTrG03rffircA9nTQHM8IM7Mqum9u4IH6acD4PjsyGEGo2opDUY7ijjz20Qm1tmraeZ0EN1s%2FTR7%2FNtCAX70Qgi%2FMQUBBe9VQoEG%2Bo5yjuH%2FatFry7wwOT%2FCbjVcBPJzqtneJOezp7mOsIHaKX55V0wMT5zGet62JmSbazG%2FJWFjwt7%2FDVBSO2p9iRCE1%2BVEZUYG9R8PoH1xE8W9BD5tc0wrPEO2h38jXA847YygwZJ0mLI%2BR6494MwZ9WyjI7XVFTsfp5CZjyPJCmRD1cLPuRQmUb0p9IboLf5r1pcfzf64j58Jnjh6lzTeVDS3OFPsUfLO%2FZoi6JKvNAFSt3g59lWx6PC3BCGiFe5714VFOhjI3Rq47VQYs7%2F1GcJ%2FpNk%2FBM7nU9A78rzsRmYAd8KKF8Zh1fNfXWbdbJ0gMS8xom2o0xmTe071%2Bdc5pmySTCdIt205tVbsxoRVgRcCiFjuF4eyDcFkP3fefsvk9FNMXDQCCxSxMOf0kDbCI2qLTSRNf9GzBSbbyudLSil3JfsWyXD%2Fb8RRY4nZgU%2BiBgRB9DfMfNhBK92gHpESWMBmorBq3ouSNV5JPeIqyfPuyOuhM7TVu%2B4nxqUEhUYyKZeRMNvFilZLjxhQ769dT5mTUMQOev63JurNMJ2W5MAGOqUBxkVIYmdB%2FWeBAgLUl63o4Bf7uzW2k8I9l0ERuvDrLe8ktBXcrCvvFKcNyEYJDqegle6IN6SM0FawX01aJn91cyOnX2aTo37Yi6TtBWH1JEy8ebmAGgGyaaHmT%2Bm9XAqyACvb1RfoNgxOtgWsHkGJ2avj%2F%2Bi9pM3NT3C2hphvfEh4Fx4tAXXn4IHE5bk6nFKzNGYceO%2FjPlF1%2FvAG7ekGXapcQoOz&X-Amz-Signature=d91d10e1b1bb78cd3543ccdbe11c8cfcb92caeeeacea3c884e4764007c48cb84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O2MJ6GR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6t2jLYOrz7NmnlQtPA6BkvTWOjirVM6MTRrmJyuu6rgIgFPMhTHu923wQGViRTc2n0yLnO%2BEC5GsHbXKzzzer4gAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMmQsAnZGsmhHk1p5yrcA9rkXIvfmAPepDwk7om7uZ6hQ2ueD0N8BQdniIXAEZ3tO2yLZsTQQrP8Q7x2dhfp3EU8yo9v2BIJprmbAB9pXsrigWfcXNjSn4kzkwGz8Dhv3BVVFphybboDfw3bsxazuCbsK5VEoHBpU2kwASmXbS8KaOt3uEnK5QxYo0UqWWa5zOvj7aHfZWVx6%2BZfE2oSBtddJCJAHEUg3PtzWZf9og7nKllnR5sPHKD7JDs6ANWT%2FHQlzbrjJyJ%2BOb0w2R2%2FoRWZQbQarA4miXaXKnIFC4GOtpJNnDNpGgX5%2BRxBC4f5l%2BAkTolpgAX7s9gzXYpjYvS8TL3h7Ur9Y0a0YgRVntCEeXE7x3oD%2BA4hwuoKDsbqs05I3YHCymEfaVEwmI0CtceniOYU15jS64XQzmGt5V%2By06y%2BwCDR%2FZm5l3BNs%2FkMVFW1TBIaHnQUzMbXlbh0K%2F4RueFgeYl5W6t9O%2BtnhHt466SZ9UQF%2BM%2BkmpIrjyoLLnC2ECkFRLhVT0tgfH1aVwUCkLcvnG08bzwB5r9tX3NybYmWO40sZhOwN%2BSsSWYHSUqUlTKjR7xmO5hlUMBMuGbAqIkd3Wm%2FmE5aRt4EhPMmx1IHf87lrKVLaI7f%2Fv3y8grMv8V6BO2D24SpMOyV5MAGOqUByUDaFRXMN0ve4zDq6VpyHr2C1cHAcLNe9TxHj98x2UOt5%2FFXqDsHYymaI%2FYaW62hO96g%2F%2FVL8LWrsghLDJ62E%2BtjvDLXHCZQHbzirQZGOWRNjIT00VBJT%2BPRdI60VCPJgFar%2Fv3dAFjWPDAOh%2F8LV%2FZgxjYOw2DDaAKZV8C%2Fl7fxt1hmgC6YPzT5OdjN%2FdH0SQD7WT3IlcsUEViXxLNZl8RRD8hA&X-Amz-Signature=94ab2282e3b1d7a8c2342adffcc448fa8d6f9581d1e385adb0adc6aedc8a5090&X-Amz-SignedHeaders=host&x-id=GetObject)

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
