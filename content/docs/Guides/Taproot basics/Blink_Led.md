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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IH5HQ24%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIC9c6LAyyMf%2FtDG53wFv8wePEE1CsEcxUKe6%2B%2B2Gb2oeAiBmj%2BC%2BgfY4VdyYRUASRZ5bETz92sHMuLrb%2F%2BRH13XzlyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRq4h8WwuAxIZ7LwSKtwDtRGoQys%2Bu3lM7QxOl%2BO23G25cygGvTt0Snc%2FZdwbVxsNhmwOeUKAsf8tKw4Ik84jGYRv5lMa2lKO021Sej7P%2FJdemg5D76n6bukIp25An7mytyAqO2SZqN%2Bl8b4yh5jddtNr%2FkqMmNwN16bU78aizZsxc7soeUbmKg1nTDA2rgIhJ8zoVmE0eeMYUp%2BvlBStY50L%2BizQFQorBG3u4neXwhTc%2Bp%2F7B%2BlRGSmzs7BIUa8yPWSikNj0kzs8VFo5DE2kPf70C6d0WkqDnKKqmCOiIo9fHnQyoiREblN5BbIb1YY2YDXiy3fP6INyegTR06GzkZXFJW4VyflntT9nOfles0f81kx7Vblmt82WNu%2FW3b75uJvCH5etJckbz8KYNfy3XcxIJLM77a1WKGpNDgoUBNwI8CcItGj1UIGwMgwUYtXEhncxvxQu%2FSnuJvg34rMeOzzNVLXcmXnyN0eCrrR5TF2jlWBNAuGYRxIHfGad0e3WSx%2BmLKxV5qrQzAME3UyUczf%2F6PVV5dTeeJL5qtNoyH1VYJCdUIMoqMb26joBcMW8E8lXEaKqJoDV7tWj0pEa45BrP373dOUxPyd94C1ntF79mr7MteMzwfgJuaKWGKuK5s3fPvIBOqginPcw%2Fp%2BawAY6pgHDJwFFXoJGtjr72KjakCLLtlyFrWFpuBCN95f5R8U%2FDC5eObp6M0CmoraZxEMt5YxgV7MsAmkVClBz0XQxpPvCHj24aoT1StKVjjHLOWypDXu97S01VfgU8JmW0XXpnAAILgDVkA11qsFej4%2F5%2BBIsW6ICg8HCEY0ONDqL7AG9m6d1Z5btKPfXc9XGVKIVhdB11Ja5YgZ9uvajo7X2ajeZKgi9fdMH&X-Amz-Signature=8ebdddadd63225a38f98ccb12bcc62288a999cbfb9bad8bda5e6a778fbe69f00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWMCQPW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBxgzhUWgV5DTYiqvkp1XmgGvxcLL8%2BomSNKm%2B0hZxNwAiEAz4Wml1ycn6u0D%2FyADxdlP6yDoDoh93ZQ8nHS3%2F2mi%2BoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq3qdd7POtXGS7m1yrcA%2BWJs%2Bs%2FLXC1kgXMK21Dq%2FP7KgVroaXhuUgGeU7EIhg0ZQqsp4ghwmi4H5EMMQMrdssv6GgKRlLi%2F2nGNHvE1IyFbTgEOuf3kbZI8io2dGPVX3yeOkFCbDKkyIEnl9ws4o5kJiQslcAxpZaBf1c4mLQcYixprWe0UXD0JqSSDj5N0GwEq1xNzGpI3eu70RgBSxLAkKSTmATKy0RIENVLmLvfyShfhFNN6%2B1nouuj2lzglClEF6ZxLJ7N3Ko3HAmgZlqbgLIxv1AtVN%2BGSAiPACiiBSQ1w0jFSwdHglUvQUM1d7tbKtVLqUW%2FpXnOpiTp9koRyMirm7zX4Vbgm4Ccr%2FzoGYDNzQL0FkfE3g%2F85FOdgmyZNfImrSxNhWbAml9oZTNA%2BfiBSixewr8TTrnjp665LXnMaMv6dbcu598edMwpXgDsH7WGBkQd23MXQegJWCXv5it%2FKtCYMDK7RgaWHMcDdOMguCwUseKTL1RF3daJ1GnaTTxsEFvORHrtlybqEAGbeCEKiwBv5oYueq5ZCst9ik63gjF8Ouq7LpdR4MhiwtqCfQc%2F54VaN%2FobHXUyTA%2BzOg%2FDoLPNFchHuuofc29AAUHjwBslHUTl3zeWej1IF0kUURwVk9YZyUIKMMufmsAGOqUB%2BGNQz46WDIqjWIfQPfajX95Kuw4Zhy%2BT69bBqtLI%2BMebc%2FFaF82UEWvj48jzXjpapCifzZs8BycbdDMYV4%2F6ovFbE9HJOG6t1Hzo09Ls3QCbN8y6TaE9QQugSbmCqahz3AVmLLURTRV69Fd6xktGRRriWW1aLcgwkVcSv7iBWl6NQj6Yl2UDiTD7QPzfMlnV9THGNKpxCrXLNggdL5mz7NBxT7sk&X-Amz-Signature=3620fcf5a8212574d3fac96736d595ad661b5cc1f906664a59a398eb78f163fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
