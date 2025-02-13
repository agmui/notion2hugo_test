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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSRZAZK3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9%2FblfqwVpfw%2BeUGGd6ySK6HjtAfUtAUHfofYvv%2BxPDAiEAoiMvOaq%2BNSpWIbQVSfBG%2Bmr3H7%2BftDbQLr6fctNlzFEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFUQLYFc%2BfTRU%2BvQYCrcAxtTgw6SS%2F3BXVXSuED1nh8v8y54kVM2ee9eT4ZtVQrG7HWDvSaHZRnH4aUYP7tTgNcX9v8xFPbP%2F9C4H37qteFvXegGcY4dTLXu0KoY4sWACuNnhGzIynaPBnFuoXqcVil%2Fq70Im1%2F%2FIU9DWTEB3tO9NhdGtHQATUkruuP4ReVrBc9ROZoDRjZxgBOxXS4Ez3jpV3aZnumRU9QV%2BjjKBx%2FM%2BL9%2B5FaNkOc5eZZnGOw%2FX8MJt340MJvjYvdToqRRcNM7P73rYdK2AytqDenms%2Bln9TWyiFEAk87XiHClAzvjAWsQfs4OM6xXrwpqHAzdxivk0TXYVAIi2DAfQYDdWygQ%2B5t%2BCxHt04p33gJ9fIsHqJsQ7OZ2trVFIGPkdwE%2BCCDGlvx0pxnFrCa7yB4oDcLED3RZ5VgG80LavmXi8VXFy5vHbQScnp5IqDjB5pTK9goDSh00mfxFcT%2F30H%2FwEAhwGH5dMt4A8EfSgnJUYJHcGudlnhWtX6fiWhvXkXIaNtt9%2FfPu%2F3nRcK2z40bkHd%2F9JPtJvVMqRMja9q%2BUcyAt2EOah%2BbT46RjdUCLRs2Z%2BZhY6rBlZN%2BaGbyVUWCA27PEnJLv59u0dXNhdjzUkqVy0LKEru11PaXgQX2xMN%2Bptr0GOqUBFA%2Fw6TP3qo0LkpIlqSsjVK9TH5ZTSqI48iHuSbp6syXUMcSc22bPvKLgwGRoNCllwUD1of1gk3PDSjDsYYJkqbat9IwizLkIjJ2uf%2BU8LMIpEr%2B3hKiud4MT4276X6YQDc%2BP6YKid8z9zhJCi1HNb40rgtzmgmqPv3MxmUHksEOYFs5X1RE8OeFYf4rkbHP%2B5qaOSHGjHqVHniCcg%2F0ThmzVIB4O&X-Amz-Signature=ca028d615afc67fd50b5b31b1d4e5d21e03d31b5ffb006d00240c16448a64990&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHDTQ4GO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2Si2qA3Jo9iGHH6%2FTgBPOgszbBZrKiQ22plo929JLrAiEAw5IHkziyRqbLgckMTaMlxvhxF5D2clG8y0TUDjDc07wq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKY5HFhQq3k3uZKl7CrcA%2FONytYixPJIPI9M27WW2I87Z77hKPmsjY1yLIWMmtbw3SsOj3V0pxWnuPVTSB5I6V3s7q4HqlMdNxaAEgr7txFdxW6FRKOCsTokwfuly1ZHdYt31eI%2Fd887V3MZRwIxgH%2FM2GOymEaD2ZrQmo47Jel3rzyrYetfo6WVnFcXN1QbQ1NAcuRy4cFGEb6fxSV2bvxQGDCVwSepHMCT8Oj5T%2BH7P0rbhtAPZtErfygUDoNrs4PFrpSci%2Bkn1ZdY02Y07mHezYXshiHERMG%2FQscojjmda3Dv6qMbm%2BPDR0AcSgOSuYAAdN3XXUj3DC6Ogb78aZLJn48yWqHQGN%2Bw%2FcE%2FOWDBegad5gIxDr%2FME%2BkA7zS9L6DbfNnqQbGRgfUv8Tib%2Bn%2BA9cZzzNciYFzSCT39mM3vgWuAIKI6PfoNBaU3E8CnOnhepGXlMOq18osRnsu8ezW3KKCiD2jlafwdXulPpYyD5M5AHNK%2BB3AnpiwrB%2BeVz%2F1ueQJl9OH%2B5GKIoltPLLvsliU2rDaxi9DSipQB36YQkrBKahQrUuGjzlJmrK%2Fz0zZShu7DRBItRfrL4BLceLwLg7kr0Xjdfzi2KFRiftiPXw9YySawGo%2F8QNa01Pm2MfE4t9NTvVp8VIBXMJ%2Bqtr0GOqUBlbEwc1oua942TGx7uLxfeU4lobbHcOVGA%2FP9YGy6CI9cUfBMT72n4cevTXv5jiY4lpqDnDqwLnc7yjkB7xcy2KT8Hgcc8hPOE8djqbN0qpN87nQ3ggpAlXKmyni6C%2FwMBjkv9qLvlClmx4gKa34k1w7WYfQghBCuvyvFUQVt3haPtgtzAHX12IxTOiB9UJj5oGR6piejzhdVF3bWniHTm0xVodIp&X-Amz-Signature=30e73a38dea4e6a99936cc6382dc0c41aeab48ff35aaef071437df2c3557bfa8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
