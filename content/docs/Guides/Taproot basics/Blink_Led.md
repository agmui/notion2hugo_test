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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMM56GFD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCELCesetuL7UTbgARli9SKdcCN2bMjSOr8GFb0etTq%2BgIgL5rbRNmH2%2BsajrK19wyhjc4TBr%2Fkf7bmxk7JgV%2B5kQMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJL8aiXldVBBgGNy9CrcA1lzVji5YYsrIACLgfCOrJW1AflTx8nP7qRqIVmcP4ZSUBzh9ZEcPz2NxG76Qp1Bi6wz0bEfW%2BsvfVDuIrQHPx6ifZvYXH20srSyB1h0Bg0rMoKqosK9%2FDO8RfKI2pW8SjE6aMxfDvYy7odCqq2gFQZpRvaVGe2xObsgBostWAbTbIuTRFff0a3ETgnD8C0Au%2FY4qyKroFGCIw%2BLbDMVYzJQcgwBdYQVgCwJ8dFPc7RSN9nrc7Synauw%2BpKWPl1w%2FT6VIsP19XqyzOf9YBjlM7RJjmiZ3b%2FakP%2B0hbOhJ3ahBIU53qHnNN%2FVRl2FOrdH4c8027Jc%2BIehmymSMamGDAhtdLKqgy4R7ggUsxy80KAnx8NXjw74LzwbzcJBLiIZq9gRXWzAfPsG3Z0C%2FdYFyok1qH%2Bg6Fgry7ayI7BEiSmi0dbc%2FZCNDgdV3ky1Bmggkdl%2BlfGj%2BnYpuwdMAyI3NwYrZGLErZ31IAItv5zHxbyhy8u3O60aCf4sYgToDB%2FKGjFtnr8NEv%2FsjaOtddN9lQGmM%2BQBGSJXie8Ou%2F2RdaiAqowFm9vc7Kys%2FruR5%2B7CFnKCdBhzCakWdC0IPUx4bPvfw09TGt%2BVl9bVY%2BC0YVTDoE8T5N0S1nErMg%2FWMOXXisQGOqUBJQ%2B1JYH5YPkwQshwOVyIXvD%2BrN5mG7DmF4omA3xywUibEwoDhu6PlGits6y2LGDJViD9xn45iLMKqN89z7%2Bkj1NX%2FAU1YQGICurc4dTugH38Q3o6cX%2BMWaWbvIivuGoqAROzYcbhtx6jT9i1RhKxUDzpLkfs1jmSlM1DRw3eo%2FO931L7Rm4Idxy8oxYp5vPLfb%2FqgX8khiWPfvd7FBkAkH%2F4GjRu&X-Amz-Signature=c9722bf717cb1829d36d13d67081040e39f06e6fdcf8002e41ebca4a90bf7d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM4QRS7K%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIG8Pxv8RQoTGfuD3JGpR3SPMYhK5uylIjTGbIK3%2BICYeAiBl7ozhO8mtHnAtq0scOruQlF99yGSKzrfQIaAO%2BwaTQyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmLMcyilewQdYDa9HKtwDUXMyde4ifRvj8bsJvPCapsfhAxv0Duo5rilX6aFTzrPtlvZNuxJC22v5WGeSDEOTTVqesLoq6sd0PV7kv3S1OfdFa9HuYIs%2F7Cf1our1DGCLWdXbDX81GUHSSo0L59%2BlZKVKw5t5nMu3y0xSXZSKRYuF8sORZ9z04jeiKjEsPNG774Kxv%2B09Rml0ddi1X%2B1WvQYNO2M8H%2BKywGKU1ESb%2F%2BpOJF2mDjkypWBqAfV6Nm1T5Bnt%2BvVotc0iQm7LIhznB7XPtHJBDCq9CeCHXIsJ5HOImmeNZkqn0pVkx0zpjo1O3aYb%2FjAr7pOMrs4VXZN1rdK2mttV1H%2BtZw%2FvMmhYFM5Jlq67mvIJRb4z1juKlJfxjIEs%2FCPm1vi4tEoV5y3CGfuCxELJvvzqc6pozgEbWOGQqpKt%2BoG72T4JDGAXCvuT4hyCThOXkHjtfVkqS%2FdmR5zh9Vtmw2ImfbUstr3zxZkc6cchV9BJLYLoTS5wy%2FELBJ5%2ByakxCiECjT6bFwpACgfJ2r48RtN58lbpzpI2fx9l3QR1hkLR5In87bxTaA5EIFQNn9irh74dqnB8VQgA8PxmdUCEVapx1%2Fnvtdx1q5KPGHft0FcUstE6JBo2D5%2F7%2FVDuobPuNQ5N6pgw1NeKxAY6pgFxrhZDBRmv9qwl35Asf7qWef0DmkVRXc9rtQQHgzzm07C7Rv%2Bcpg%2F4RA2k1wDaTlgrdH1fgYmCtg3g6NeL29GRyO2cNfFkuGOzsXQ82D879czRuK7EnvrB7P7X3Qi1OPNsYhTU4x5Y%2BOm%2FFqXEn1w5nj97mjblFFJEewkTnD%2FhJtdjpaPnbxltUwng0MPjnDRSkXuhOzxxuunF%2BmNJhaXdH%2B0x24p2&X-Amz-Signature=e898c45fddc11fb096e093a50f9fdae80107d9a9260db443394c4fff1a4b84f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
