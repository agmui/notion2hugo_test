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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6L7YLG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0f0pXo2I%2BQWO78mhLlXLQ4YM4B2qQJCEbIUiNjdWjGAiAHcJQZBvoNJOljf%2FZR3MQsuK1Iwzx3s3nWw1BvPmiUHir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMhm0nNcxB424T9NDUKtwD5pUFIbZRv7c65TPa4bdXV8Y3B7hZ6gK9%2B%2FYXF3%2BqD8wsAwhjPRnrgVgMLpskDCkrGuLv57kKgvyVItBu%2BXtnAw0n16LlbFY5XbJjFMwQfpvGNTedfrgP1yspV9Mpl3fih6tBdl%2BrHOuJvc9oezuz0wOPGudXbRBc9w%2FPsVti9xYWpftJypN5CpI2GaRnWf%2FtHz2%2B%2FiHPyfjKLaI%2Fh4ERvJJAyO95MlVoB56na%2B5N0Tsy90yJ2zDE7y6Mbq78JRriifJzvCo6NU4ouriY7z0APknd7Tc9sHyB17bffH0AwPLfYvTAdrjgd5hxRJDMdNlaO5ovgitHqpVKQY62yUCqtz68yfUPn6oQKDfC1k0AR%2Bpte0%2B0M2gbvxlJ8X%2B35B1Jn%2FROi9DCnYISupLper%2F94LrJP1Y4kYjRUaxZQp%2FQaUO%2FEGG%2FVdBoZxcsEdvZ6yFxNIspjc8t3UlAKA6E%2FaLfELOSqpx6AfBal9F19ow2PTeqYp03r0EVkrLmAh2VwrMg1YVk0MApkS%2BM1Mw3eZsPXBVPOJo7LlDcGqWcl45%2FnAxQqNyjMadaXT8FBZlPgodQQzVCH760HhMzQxrDntkbor6fwrYChE%2By3nJEm6amHBSzB3%2BnZSgvYhALv9UwqYPuwAY6pgHWoG%2BnUl0H0Bh%2FNSx4Yscv0d%2FHna4vgsjAxcXUk3nn7xXvhlb9uX6UfPJ7zFyVdvkKp4HWyaSwpV6X3Teugao%2BIs%2FPyvfOspgsWUr%2FvMdoJYfBSBoOT7e2sF7zPZojKyMNg2zp4%2FuMk9ZsP5DIC2hNTApmkDxIIbj%2BUHQUMMjSoK12aFgsAEUzhz3MM4ga4H9P4UovQTGdxv%2FR2fFHPxRIGJieC096&X-Amz-Signature=c1235c936a5beed7812c11087b85bd4e6d6fed0d35dfb9b385059d4d1bed6399&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZY52NE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDT5SyTvsKXksD50olcYa0um50tB234UDk3E0ps2iMgXAiBg1L2PBN%2F%2FTfKqpkbq65fZ3fo9yXNqhjl7G7rKmvXqgir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMhbpmdZEOYuRp7UYHKtwDyIxsTDOSkPQeJajb%2BRETq5Z3Fq9bEpJjgVK38sayJ9fHUmswIkzllRWorVAfzSGVI%2FTDUyu5RqBCgwno924oBTfcbArzkqV2Wwj7DNVjPQhzhCr8%2BweRbP88GguY6tmA%2B3AHtX%2BasjFb6pDR1EBNxdm6K8guG1vLMkIdelx3dRdQ4Ac2VHg4FxQdHxelSHjcjQAOFk3xXeMGvzVkCZz57cpTdrnvrNgE9Sbx8ni6x3fAYk8v1LZXvBapAmSLtJK8BHSBJXxYYO4johjjYeuEqayQut4apxjEOdQrmFbMt8j91Ak6rk%2F%2Fgy7s2pJDHdExcaC6Pmtsu3XbvAISlBFUN8jba4%2FZ%2FqNUhxgrmGSazAxWSte%2FzFFY2hc5OD3Ro3if5qxvu6Y4NFFL8S7%2B43hHT1oca%2BTzb7QDSU75aaQDJANMEKGAup6kZXd1YKNOMZWV5Lvh8y9Jq%2FAhJTuLf2hFz1O2JrbMEm5BLfGLfMXG4e%2BjtWR7w2UDSVjy7rHKRhphiDJFflsGxHsl5nRBj71zg%2BNEOZ3ZRBgkWuIJODximvzPntrJkL8%2BlRKTkpUJi2w1PB5iN1HTDnFEi5YVM0ZCuyI9e%2BVhR9p64b%2F49kPHp0uVsiekSdUeQVJjCEsw64LuwAY6pgGaFc1g3a2RxyhKUTYVbuIvZ805ra7Dwf6jgnPCynKxAMhCt5EtNl41LwcItdlxXhE4Y74R0Gk9rf14OvFFzLhOylSG9%2FK4mzW2TtukYngntRI114VllD1KUJCj7gMPZBGOMhwYqAevrvyZ4Zzl3VM4POPOjGrdRMPYPOAD%2By50vJA1bn6QAaTdkSBoAs%2BKHGqwSCIdNuj5Ep3irauB%2B4GrJX7D0uGa&X-Amz-Signature=b7d1ffc10c02c359ad9bc31fd7c81113aca3dbeba038e85ec77ceea2f45895e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
