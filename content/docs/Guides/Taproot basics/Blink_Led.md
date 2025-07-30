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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDX2BA7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpe8wMmh%2Bo4ykdBq63c3VZyt8srPHLUu4VN782AgGW8AiEAzcTl1xGgvrQLwKww%2FRCrOF7kzT5Cj5ZUjuV0Qxhvm5kqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbKJ3NwD6hofjqtHyrcA9W%2FTNeY9abJmt1i6eId606yjpiOTVhgEoGJDaGfixdeAWvCTGGamhqtCg8Q9ufIgKOd6BW9udxeEy5JTZTqqlRA82uq1H8TLZiN%2BLMOp49o7gNLH5KH%2FFlLnhsh3QTV2MgjoAeZfDL0E8EiEhzG%2BnDg7e9jeF6U4hhGl6mPt22GmgruTeNfKmEqG%2F6DzS2ODGBwKoArHqtECNULRjIuOfMmgX6WvhsoT%2FsMuMcMjDiI6olPwHQyvW2kR6k9G0L5dhi1HAc3A7qbXJVcXuyZJYHPlkLqr0MlDJd6QDS%2By2arwCezjpues0n69oRWPNGwNz3s8BDUoEQCv%2FlZ39fUqeHIQjaEA25s4lxoWinksHD8nJo%2FBVEmirBZJpXX%2BhJC65aqYgo6Kixi6Ru3GVjui7U4nBXB%2Fp8TQ%2FCR6is9gh5sYSVztyVVui%2FQBnZQxOasgOBVsCUmSPAkY8aXOUdUfD5gomjEeYqLIHYt72TRFPfOfqqJEDE5xwSbpl%2Fg1Q1CmYBDdlZuslRyEnB0Oe9ga1ZR4mwItQQBxhfr7rnmGJXX9CNpr%2BuPEA%2BYzJpcXFdwSnj4GfBfTm6hlZQ5xnRUSy9eITrCqrCcM9BaakJetlOELnD0KiO4DKRFJ9Z%2FMP6apsQGOqUBCKIDm7%2FMt%2BXtG8cb7cm6Dga%2BdCytnVaGcgZNutwoZKWQZBjhZGAegLDmZW%2FyIRz7ZnekWO4WGdKTQpL2lekHuPIIAD%2FrUImjtBuFISjKRBLmHrEWNv45yG%2BAxkGf3yapi1yzhWOc6u01vlEcqbMKSXh%2FKro6OPtacRUbyZAG%2Bho5YHhkjQMvo73r%2Bow%2FlNh72YoZx7Jn%2BOpky9J9%2FM03tgjrKrvC&X-Amz-Signature=74b0e83943ff1b2ec6493aec3723f9203fca842dc9cd8f8623727fb35318ab77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWG2UHY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEBWpXl75GTtEiF37dlj3%2BjQL8zZOzPJfScvI0EWtG%2BAiANECGmGl7ve9daWoNOwddPaDYMtYPOPUvki5v4FeTc9SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ8wR0yUanYGF006zKtwDpXKfzONsHncMQyFZfAkHQ4uCUIDmPZuQIH05BI2SHBx7H1BqGM7J6NZSCP4WTfQiWyFaQdgGxppYo3o%2BS9SpCicNeNODIXpNlwe9xMmoX7rLRP7cTVxGKfykuhyyuwjLwoTuqy6Vzl2iiGxgWAIgPOiGRsxJ3HxbbngvLeMfec5xP8N0s4JDbWAsbpdXVJv%2B6MTHUgo1rUBSPS4whzrApzRcGHOx07Fnr9n8Nr9FSjB9lMLTJtMHIouo5F5w4UlwKT5A%2BQyMiuiuuq0M94YRMd%2FHrVdYjnr0dMZTVkQdpUsoOZYC1wnhA%2FPy%2BLe2bjPoouH%2Bo2vEjIbWxkf%2FJIvreW8Z9WvUbBfTufuvoyv6I8BCa85KbZD4eO%2Fo4WlPTgQjMoT48IECwbbCkQAIrljip031DRxuub1iKeVuKXJJje9ifUA9j%2BGycldDyl2SIDvFLfWvlyoAGHFWJo0%2B6Cv03dLCfXsNnf3vjIKBflUii3gnsSoDHzwdUSt8EMp9Wil4oTmY8BrD8HFFDghFVRMCwJsEiDCGqckNlFpM6%2BId0ZN%2BPxJsuNlQofXXN4lTcIrNdKQL1w1nZ7S7go0kZ0HqdcWn%2FZcpZeQfcOXFsJcpYSiVuQAmOgeNJ0hZa%2Bsw%2BPKlxAY6pgFeE%2Fr2uLvNDwXKsZIDHYnVup579OpjoBjt%2FwDsW55SHfYntViTPLd777OfvdhAPR%2BKwJDFamqcrvp%2F4byM1EWG8yL3I8qBHE2VYI7X2rNx%2BnZdybrbxIMXsOPfLLkqBxkdTlx27w%2FTXQXnsBRmakQLXsNBmdidLFqFjyQkvtz%2BU%2FNlK5p38PE8uy%2F5dGCg6X0S3d7k9Xb61S57vGFDFXz3zGhQzkc%2F&X-Amz-Signature=0ec7bb0e13962971489a0be10e1ec76dbb1a01a85c3c8b9b30985777e567e6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
