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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PHTJFT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF4AjvSx6Pg%2BM1dpoNApRCbQaaiGALVmdmo6fOZLo5ZhAiEAmoALZyhdohaRjiv4EMJDPWwYL4ObUKkwcwuzv48xFTMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHtpe23GR5p31gC7pyrcA7SFsuQYVUgkfmksDak7Ni4Gpmh4w6dgFlDOfFHzbiTgXI63skGQUEzWgXIFNfVJKA%2FB1OTi%2B3h5LihjYIZDadE5DBH96jbrXOAKhr9kEQXzhSrXjFyWQPf3D%2FvB6atkOV2r0JFGNcOBJg0wbnoo5e9cpnK%2F5Okk8mv8%2FMyBcpjwkdOj87yULqDVzAp0JqLCvm0R9Jhwq%2F9hehhbrrnivIjNSdpx2BNTfgYUoOMeQzlpB4chG%2FHS16eIImWJreVmB2jD%2BOfkXqackCmA8LCcwVBrl64%2B3%2FGZvtC0TKTCCH1%2FWi3uW3%2FAuVNWsYQZJHczBD7wYUYCr4ipBT2QWMky0waRcp7uQrSyXmBox5ujC4iz8U9BrHHbOtklJL42wscU%2BqF3l2%2FXu24kQoeDicNCsEj1XSWaAINpLhaSMLhP3kCAWsjkBBWM1dqe1%2BdmlFO1HMYb1qQdQBry4lYYoVEf0G14Fj1LQHkCB2PYuAyj5LHRDwV0eyNyOFBWo9HlsBk4DGSqwPKgIvKR28cJKgLLDEc3WlvUcMNceSiv1f8OnockhZAKsoluhcMowtdCRmZjpz9iuT4sp%2FaQ6vMJ8w84UHMY8W%2BfYm4jKO1kBxY7MoDIwjIotfCE5BWrZ1rVMOqGjsQGOqUB6kHaSZT02%2Ft9NgViYiF5KB27tLsn3FEL7ngz%2BCsE6QRUv55jRVxFKbBW55xGsnCPe2Pv3FHMuga%2FrbYMfPTwpuRLjNkr14mZaakwEOwlmJ%2BfeeRUxMFHT6jRjh%2FbU3wnFq385vOyAanVUfCRAG1oofXp9QhA0yQVJ8Y5bjEJmpGjCS%2BVKnppig%2Fx%2F6Jgh4PhXDkjQYFt9%2BbXCCpTncMkZa5p%2B%2F9G&X-Amz-Signature=f13af2d6af1452c75574c7c820d43cf2616fa6ad6f4de8d3ad553fc3dafc6573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXTZONJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIANRbuebiMYl4MWQZmp1NXHaYEzL9zDv%2Bq9KRde3wz6gAiAVG5dvlARk%2Btw28ZG29KOr9LGESBHIvpViVLudRDDBHSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM7oL1eV5ABhGYXb3mKtwDLFZRJGNvxX8uFNc8S9s8vx8rUTwhhZDJ94bG7PdT7%2Bmh9aT286xxJsT67aa%2FRVfDvH3VAovaAlt%2F%2FQn4FUe59b%2FOpuaUq9SoDdHRTxGRdarcdlMmVc1Ux2MpRjsTDQ52Uf9ICDLikZKAHW2ACbXWgNCK6yk8Qx0N6QhRL8MUUab%2Fd06WX7cKsnvsh0p5UVxcfZTHZt8%2BOdNTmkINP7sJwafsMLqvrA2CFQZl3bmSMxTdNvX5zjGVJEOBKVQi603L16k0QJxx%2F355xAq%2BNpq%2FIcxN3NgpdIMDZVlVLv06HLuUfK4AqN4jNyoTYF1ofrBiw9WMxJ%2B7LvzlI6FiBTzvSp9wIWKjM%2BAnr4%2BfyFu8Uj5jAD31SYSQ0r1PaK11gUKbaM66MYHhqlkv3HxAbaCxHoDq46BQ0rNCTJUilakCz8GdykG44YZl%2Fx2lxtdR2aO9mFBPn1WUGV7L5uDftMC%2BqZMJoF8lqkWSDplmj8wGMnDS1neSxFcrkwUITvKm9wO6St6KYhfZhFEF2nInEjkXFnoxn%2BvgpDWL%2B%2BaWjfS0osMpt0251U3nHBiM%2BfPSOeW3aClvwOS6DVpP7NYHUSWSS%2B4kvchBIP2tdD85bHxI1akmgSxA6QDEXmGBO7Qwo4aOxAY6pgHrhnOaJroYt4GxDjK9jrSPgfXT2DkcfljnEOaotzIETlhvXLm%2BVnrV4QIRLQ8FL2RoXZM0IX2qxqc4f1psAHD9aWm9MIQ%2BOxDPCPcUkvlF8cC%2B02Q3A6hALotfRYNhKl8UNXiUNidtIay9HUVL8xxKmnTmiZjn0snfkDUNjtL15Y0RzJqC9iL3lBgyjkdxnAs1EqzK%2F0FxMyb0k9yVBG7OTiUFPREW&X-Amz-Signature=117817465df08c8230357316c1143ef9f852e99d0c7e9dad320b21241ec96ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
