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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSVN5TN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC7pNXjJg9lp7h31uF5bPAczcPTPUTiT0e3y6%2FSj9qyAiBal1UlScv4uImLM8Q26TdgM3oSRpVan1TAP8Z%2BpbWHHyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg5wZeB1j3c%2FyJoYLKtwDJES8kjT5chDxBP42OgbGXtGEy9%2BQ5Ov47uUinKMn0PtyOj09NBMRoM5Vujoz%2Fq9Sb%2FdrbxSAb7eGVDsTv18ppMVCPOt231Y7%2F1ExpqVOuxQfJbSR4njheWLsZP2YdiQNCJgCIGtcqMEWWjoeL68tmQQXadCeGI9ywqcB46IybSGd32mErQ%2BSE%2BDkTRVgJ%2FCCPD5eK8aMtbz9olTjzWpWGj2z%2BpbJ2DMo%2BnArTXweJz3mbcw1tm93Str0rMm5uM1JiGmkTmGWVyUrztKOzWu43XshuY%2BoOwI3r7u6NTTqaAuNebQGaPgF87RQ7Nmli2GolAOOPA6VLUw7iFPgjrglTlKs98T8GWH72JmosNciUdIHmCLJfoqzXH1Fruk%2By08rTcX6fY20zmPfG56Tbh0sgWhKyCtF1mS5Hz2fjxGbOUUIseXOdRwpe0wB0AA2H%2FYU3N701961K1mGB4P6nfqdYLd4%2F5MPfCvvWm%2FyoWuOT3Iipl%2BNlkEFQ6EvZB4xAnnqsU5WwB1rqRfYocG7i4z5aiN84q1AI0zVKZp5vvJYIWQfWCCz9PpFGhm%2Bx39KRTyjMxqgCT4XsWHM6vyPnef29WvOVv4L3zPIi08I2ePj5dUlqjJhCgPr8on9SNMwmqSNwwY6pgGtDQokaszL%2B9VDXV0brXyuPJ5oocbCQxeAe5ZhpxC6i9PkvSf7yzcaYG2CsxEoU8FkPBvIHCjCuDAopnMKclI2ZazNiR2JW%2FPfrFpDX2699lBjT2PhStMo7CTszUmrnHU5BjVjQdjf6rGCqdCiogXJC4MHL9T11804YRjMyzFHvAsde%2Bdu1iHe1KdXhmhmC%2F0YwTE5WFZCU3Z77aMpveqb9OisSB7L&X-Amz-Signature=ba725c1c41f6d0c721b5168b4d03e6fc91f32e2ee1cee367112e8dfb57832e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622H626BQ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD%2FdzHkz8pC49%2F1zerQtmX9ZQvJoZZZZvtOB9ojeG8WwIgPoVgN2MuZ6X%2BBYEQkbn3EgwPsCGDR%2BfBoUOMUQSBdQYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG25cVlU9hxaY34OBCrcA6hRLqRexy1HOKX0v2XISvckI7ZGr695Srn21s7JcjAU%2BCwAk8oENaYeEQ7X88rMoAHGicaluuiFfyX5nJrcqEFU0MB%2Fmt95I%2FOziwEzXIjaUFQW0%2FQE%2B%2FjXlKKzxkvuOduQYnsuSr%2BnLI9igtkfMRijq2cDa2Z0UVHWtmYGEgEwZK8LCcdlSmnEhbnYVIa%2BXwWcVym0zFmZpEUPBF1PEuM4HuUNWMZDSEBFkvwW4YQ9cRlBTAGdctVUtokEjWbNiRnanc4doZdOeS22TpDJAMZYsCi1klVjU3Qs9Hltw9OcRGdaCKihs%2B2ev0JY%2BZdjFQziD8Yq6BCNzo8g6n8DmNkVHGMVfhN51PeYCn6O%2BcTKjppR9aBO7Ev8mBGTcXGK0ECT%2BQAHMikqAHiZGsArjSlDJq5h7aAq5jtPdBzx0BswwO%2FaYr8oZkGRqBGSGprtJ5zMVh7i5WqA2wvRX3oZ%2BvEKcas8AV%2F3ms9VF%2BGj%2BTRao0RpBfmx%2Fej3Ynzj3mc1AcEko6edGKYS34kQd3i6KAJ8ROUXYcuuOLrucrY27oELyZiygROFqIr4ixeEtIGgaQXlOhcaqVkScKS%2F7QCByTCbq%2FqZxBZdS%2F3iSgsyXPnSzCB%2BYw5boTXD6aJTMNujjcMGOqUB1%2Fa1wi%2FzteGoPnHQnNgal5l7%2B3h7t1LTxu4Z20kH2flP84U6HL5jEwxLV9p9oenqeeIiCGEis5uD7PtHxcw3TqCblwzp%2B3MM9mOrSsfJSwzjCEeSBxXPO9cnUFA8JlhaeofBS3TXy2mJ9o8DAyQZ25OJs96saOfQvjVhFJWHZY2ViWNmIv7IMQLon4GtuvTvDlyOPaq1aCHmcaLjBCOOUp9SAhZA&X-Amz-Signature=f0ae1080cded40ec310dc220870052cb248c58db53c129bc731c6e05a8399392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
