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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBRLBBLI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCrddyOkCQmS27wpkWU1ZLlW2iHOC2Mipkyqse2MUG2zQIgZFfF72s%2BO8ft6I3LnOoodTQ0i8HS0VRhgPJrB7SH1%2B0qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6LY9wMwOY3szWGbCrcA%2BPtHDJmGqpR%2Bvq0qOQTlmEYSeAFaJMCIWaoiCHOppTsv%2FR5YgsPV5%2FAOUDvXEQWnfDTjsSDP27cBxRihC%2ByKl8AQsIB2NvbGPVynCtBYzwtHojzBDeitTY1mOy97uz0UCUvsXUVLJagT9wJ%2Fc29n0t57SPFKD%2FkgTLrEplx593DOKSkbUet%2BnZ0%2BcxozleWF2sPRjY5LavnKbbJZyja%2BAeRuGrgjJvTDjYyEGPj2ndplgyZt331Se8BJBAz%2FRM6pKCRo4nHDlDVPHhvaTLZHI3i0KIMWbSUfcbWHngwMc3iRAuve%2BiJhOuB0znDrxPs2kWKtPDJGSkBSZ2AJygLfoPsqRsBc1DQVqrdEc0IjNQwUWGZN%2BA07S7HYzE5oUpMWA7PAchfR85BeIaCQ9NrUrRzzzwhAoirxgJY24F%2BYy33uPbULQjhBbJYFzIOkBSnDaT2T%2BTyZhdc02jhR2AjOb%2B3v8wfTs7ldUVceIIJgICt2NtSh9fxPmYgo%2FG85N1r%2FV8rnfVH8%2BXp%2FM0mUu%2BG6nMXmrFqM8DPiI0HVDYp97TPCcT2PXVcEhKlvb4X9Eykz%2Fehl7fsNCzZ9wZLv09gHPYTOJnJGNB4V0EMmEkeyeZifoSwlox3QqdOt9L%2FMJCaub4GOqUB28JEsn7kRvskOTdYZfGSJPyd3L2E4KfGBS6342L0bjrVqHjCHkYY567Qfmm2vAMxhxNOHJQeW1wxdHEmMmEd311b9tgyLYyzRXYIf49j4wG2uN7BFguzv7HJvaiL5cvQHQQbEIDpI2turUgJSMJQZZ%2Fa5RFRE3R3eJFrEKxI1hIX3sYT3KjF6x16iET9JsGdioF2n96YdygIytUzeyrxayRwL97S&X-Amz-Signature=1162ca6c851ca9f43c2ffce5793cd340fb0dd59717302fb3b9061ef90024121a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTG3C56%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDtVHoRxCS3v%2F1vOFHDGxyoe4pyLL1uXziHQiL0Z9VhAAiAs%2F1v1jX7vZiyoXUXF0TsNwguoTl%2BjX77HIYYUdFIa3CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaubwbC6XKnKvkFDKtwDjI1x0ituAYOLN%2BvhPmWba%2B%2B1IILqYTu%2FDjKlnRLZKXy6H8KlFtQL80c3%2Fydux0Aa8TgO6Vbq5x55wEg5Hh4w%2BCRvImbnKPgxx2TR1Btdsoks6NzbeQpww%2F4xTJQ9Vn%2FlKt8nno1lVaTMhyZAvHsMXzVpWsNoTlz%2FhFCsISXYDRXKMG5vx258Ebb5Fz05GqK3dxHNUvF9Q%2BtnfJwgC%2BSoZ6cVBvi4gQN4Br8LtLSg9Valbim4Uv8KBke4jxfpIkFeiXxYXmwewr%2BEq266R0z%2B3G8Dmyd6g7NzGG1OJ0Gz6COzk1YCDm2mXmuO7ZKIVFMT6waOH3u%2Bv55dH6GDQbOdi4BMhxxZLH5JTFH7V%2FIv%2BV2nl2NJo2TVVREHpbCDmnl4oC3cxbP%2B7zVigOYo9oLKwLTewRyqbdni8JQFgImQS5cYWQJ1JymGF7kaOi5RzTPxk%2Ft1DwpODMs1WO%2FsBKrM0Ukl190f3sJuKq%2Flsum7ghmJ9TsTLYWtCGEhiwIEu%2B6ZCZz4MoC3I1iB0wpts1qeyhNvvBgsw65gvpZSLS%2BvDtxk%2FawE06GWKORMuBsyJFpJzElr6PKNBX3qs16YXmuwstbnBQcGKnm0Kn43EtEFrAODYxocTreQnJFKiM0wmvu4vgY6pgExjA7RhJ67ksS4ayJ1HZj4kzCOR%2FNrzu7j1UifhIh8gk5OYfGmC3AAiwNB0A1bAMQAaXIX1L%2F1%2F5TBJ6KsT4qrXCehAHeIZAZ3j1oW4wORjru%2FvlP3jzdcYK591ET3zD8FX2u3BliViQCc3%2FtYVKbS16W1qGE6E2pxPYqRNtMZqwPeLxwHzJcUanxyXjsLoq5yXS05AlwQaimBbwvuwQnEzsLc0mOn&X-Amz-Signature=9e7262ce2b34d67f123be2b33d61c7c4a2cb97295fa6fcec9ceec1e315c34e54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
