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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSMGLVO3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGb9L6yRPYJwBi50P9p8YhWiaFx3qvOreZXKAlsr3%2FtoAiACXLMb5quBU5YdOFlocs1AsrJiqX3xAnuv%2BtiPvRGRrCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMkDHtLvEeExBSpZeIKtwDsmoLnZJXtMhnkjwjh27G116A0pAZnkRcd2j1lhOwYTHcVroSIHGdS38NhWB%2BV0JLPmtOwnKvRJf8hIzms5bPqp2UfUmqklgLYjunyiTVhp15KjYOkSF5xI6cTm%2Fzh6JnmzAW4eGasHG9NcMvftiYs%2FN6rKGZtgG5qEQTXEcZKW%2BvoU%2BTKsQC0jLF9sdzyP3ST6MGqu7IH9XsGO0tf4nnQVVVjO3ySMvg5ScqltNjll4OFukr%2Fk74zTgcwHoqN2x4JwC0IESbuAhjLoydZQ4WtfjqA3oD1Lh81wV1U6TUt6GTfzNb49B7ZQe8TvH2fuNoKR8ds2TcywYcM6SiXV4qtDJnr3s%2FOqF%2B4ekBT4n5OBX82YyNoeQ8K9H51goSbczQZQuREDGFPLS96q9VoPbGM8VW6AZPCakqu9DVaBB5VOqCkR6%2F7K5OHtSyQgr0LkJVQBA23FRliI8BGXbR03FZ2bCfOJCJFiJkT2wpBbIgfoSBOtiC4GII8YlaJC4qduxISrfT7c6yYuWcVU01iaAc7wAaQx1JbdZ1Gt0fngm355y5PdidO11n4E%2BJRL0h9Q8YobW0bTBCCvPS6SI9b9oks95CT6fFR5M0zBrx4SyezoP0WRuxi61nBeFMbssw2NGAvgY6pgGKds9Bck0%2BE%2BNJ5F%2B6tErefLeCi%2BlRanYhU%2BBLUUAt8G1ddplzHJ%2BK6hzA0Qb%2FAJzC5ju9cZKys8Tpgtnq8l4odp9%2FjI6nBHG7V%2F2dNEqFsk%2F76c5y6CFKtLgNQ2Zuy1YBkDf9CexbvU0xyX1Aq33TJ7ySVzQvOScdabuH9JaXsSUP5h8fMXdoD78Twly0avc9WpT%2FFABqDNu%2BguynNnGYRbejfWzX&X-Amz-Signature=c9770d1c48c8689d8f36f4b90a7b688f90885e3045be113fdfe039b3c22fcfa1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4E7DNQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC8yVMgnA%2BGGpz6fMHb2G5iLFcITavNwBmoFr%2B%2FDfUo%2FAIgNKnZBIgS00XXVmg9S5dJcYI7Zb1EMfGKFplri9ajtnQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPq%2FLEmjqxQv3wpztSrcA9m7dW8vBRZfmhIMeygUbWoKG2%2FVwmLmxkTuQpxrp1HZkky7xeCPf1LsWx6vaaXKuYWgmsgv2GpyaGSxeJ884fAFfRe%2BODs%2BAGAbsVIScCVOYZKGz%2F9BiVk3DC9lNphG%2BEmtUkrf%2FIhaf6jIaSBmbBnz0N%2B9JWB6hFs1zS6ADZ%2Fpwqoc0xJkGwrrJOZoBkqV3HjlkT9tAmQHj82Nfegjw%2BYmPhK%2FpYUehaViU2dlH%2FB1NBkpukTqZnENgYkv9oH3ZXujr7q8LetROyR22mGkUcpwdh2nsY8RjX9VpdKfIem1S1mpjM72b46GhI%2FIirsztYYOwMXJ3GHidR0uauaCTUzZvY20tXlctUo7i6ks08xAZePApQdaqjjoAYab346iCbQZyB6jE0ceoUDYQVjV%2BQpv2nuPH1Omim%2BFFuP8%2FUyX9ISbLdkAJZYqpaQEDcrn3pYTlqFNMjNz34hmHb%2FMBjO9sZsLj%2BnV%2BxmNPfnNS0%2FSGhuIEURwkW8pqAk2ST0uXoZ7Ke5p%2B%2BnYmx0MoOO1AcXvOhyjBpffeMIsv6NxizL4crvCre9WZfDR3ijmrAU9k0Rrggfz%2BGo1Mxn4US3UcMT6DyVHP8cRHh3ZRDA3k4cpQI6LT%2B7cXzBr71aFMJDSgL4GOqUB98y1KavkzWJl5rN3DQcR3wJs%2BD4iyPL%2F6bqpTKG0wimZ4QCqRZyfYKLsvvujnyZnBOjm2e0pJlS%2FHeJZRLeMc%2BRovNmIkUhY9O9iw%2BDlq%2BHcYWR4dTMbUx%2Bo%2FGIxKjkhSKykRb98unMse37AwAG3%2BVvv%2Bv54qfPoJ8F7%2BZ6wERUFVNIfwxpd83E3zWURaxnGz58El6nrgjQ0kCF5fKCuL%2FKlc6xF&X-Amz-Signature=1be0a1f04ba08be08e20b13b15327250db71167cec7fe56d876d7522b751496c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
