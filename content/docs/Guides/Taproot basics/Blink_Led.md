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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663IF2X5Y%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHS%2FTLGS0F%2BEW43Kee834izdqS%2FGsFT2pnf0TA8N1bO0AiBRuhAEkcUFXVkjE4RugToEJqrDQG8GaPgoKpURY95p6CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKwwx45EO%2FDPMyX4VKtwDuB9JvLcv%2FDs72OFq8fsZnUB1CYroqbisQyLr%2BEPgonNjtXg47CYhb8wrudtGr0V87mDlzhihEvlXbg%2FyZFQ0vUFjvwocqw5gm6WjQqmpRcM1oJoOdeQSBXQs0NJtT1daIS9d7%2BCV%2B9u5DxqVYfrCYVHI4UKSjdOp6mTLRJaPBLBGkwREDJvFeyNURpwkwuH37rB7NCY4f7k0IBSE8lk1TQ4FY6zKl28ya5DSywO0kQ5Voy2fvJB4%2Ff6FgP930UysEd3HxuB%2BadfzqfPOJzv6X83YrTCYVEeV%2BwMv68ut4pIe%2F0c56NpFBvnoC01%2F%2BInxbb21r3JHWM5mIeBS5LVDBpxsPGmuyVBte7d%2Blw3jN5caQeISde3Y%2FOD5HsMs5vwUlRboPNJna7Ubmf1HNP3fb1SAlCtxLsxT9ZxKtc%2BJFuk%2BdxkKVdnSkImoQ2D133o8%2BqrPyz0N%2B6xWNus97vP7kU%2B5nQxR0aqu2bmHrL6IQs4h3SKyes%2FEnoZOanpTERPKDFJPk7zywUjDpoI5oC73o7qrFXSgx2kXaIRBxdm8TtaLwfNgvA8kNrzOOJBNrMZgqIFXxJ%2BsqaPJ5XW65ICdVXgqdhmKMhE5QwTKWOudJbLZIfAb1UQiu2sgkFgw2M2qvwY6pgFuztjnDteMXoR1uGR3iUJ0EWI6f%2FRbQ4gWtxE3rSR1z%2BEPwdnTY%2FAO%2B0glEgjhVPcUE4I3yzE31OJZnweMpr%2BUyQL61mRf8on48Z6z4r1MDeisZdfEOM4ccuRIa4lv9HEBgcwB69AkAPUXH92erzsDndSwSHc%2Bq6mpubZ%2BDied2dRhPZdM95WYOcmpT0EWZMmLNFndfboBdZs6xCpIYpQk4OlYsayk&X-Amz-Signature=659ff9d8474659120b2b5a48f36ee9fae50b31e03e9c4f243ed88852ebfe1623&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH7QH2T5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB%2BwmP%2BI6dEaVEDS0ppNVcvWimW%2F2t2rSHY5QaeQ2cIUAiEAosreE8dwlXlQwhZcRuU%2FRNWyhFiAyyMJyFGZMkKwn5UqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWWb4ILnzLXR3PIPCrcA5ry%2FB0KVk07Ix5knErFgle%2Fw%2BI1DkXEsWoNxRCMK4aUM2HceJWnphjzzZLu8GS6SVt0wrFs8kIQBR4kKo6ZMukry%2Fk6g6KPIg9zkCW8WahOWdlZpbBAZGoAOBZcXSehkgjU52W74cwOxA7vA6laAWciSdbWM0CkfQkBRj%2FvJwIJhbdJC3wKh8pOIjrxt4c0Pb%2BdMykRLzUdljSDGtkIbRvGxKd2gHWy9JmaXI%2FGsVbqW7xiETqUydrPImcruXXACVsZzvfIxNQzLGGBjzvU6Opc6T%2BnXegHVXPiW2CzWyz9RdgGYyjx87XaaS5BnKZd1dig05DmpPJRyM7aP4dWJsFOC2cATdleQEDy8sgyfQ1JhiVO1uJ72%2FSnN530WBDCS7%2BC8e05BKHT3rif48nVfWS5IIFNuzfS8w99A0w7eu63EERixgwbY82RdMl0zQ%2Bf2vmC3hN63hj%2Fd%2B1zwGyxD7t2PVLhRNa0UmNo72xiQB2iV3V7v%2BDrCgeTcxn3mt55ieGucJfAnFC3dgzD0U1VHM7NKuK9Ap1ZBRJ2RTuTAy8uCnheJHoFnsObBJKu%2BLh1tVkz8utgcWiDdD8qpc1DxrZUn7StnxijYxsH8ZFxfSy4mP0Fp%2FHQChjQqAJ7MNjNqr8GOqUBxIScXS%2FKHCDyghezm19kD3L9f4xQEtDjb4526DOcuaS1u4Db8sl6Hwi6APrhIIe3CWxoyR0yGuVceae2NH37ZBu3u2t%2Bf0qc5seyF0PW4tp6gjBanE85AJvOxS5fP1Kk%2Bptm0ciZyzOL4csAOfCI5YH0UJ%2B0seu2nabNI0Q8xWfOGedJ6GDHzL9R1kX0OgmVqCbs6qH0HWufKTliDaRXv0CrWLJG&X-Amz-Signature=952dd0f68ba994a089e232d6c0b85dd2209ca3e7561ec3186b554cd3c2eb0a21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
