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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77C3LLR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIK0l3gKS1DTXmONKYTV3V0%2Fn2Qm1x9vPNFG7j0IhnGAiAOAE3LuSySKculrAuHC5PWSOIk%2BUrxSkLesnSUMGi8ZSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMnm23rPcTLI68w1%2BdKtwDJDSY94XJkGsS2%2BsMDWu5jv9TMLMfLMzkFr9yvC2pVsL4wP0MeGa2iDIfuJ%2BfjxYDSethbqMXFs37N305qlCOhbzxOISlyC%2Fd%2BkX4Ocp17Tk4D31vXTPWZyrw8YQ7WXBA198yZ%2B5Ob6JOkX2tY3ZywOUUX4IzXF9NDSInJMunkjTirZXSwZ8zLnxAyT8hZXj%2BIWi9KS5t9ev4qa%2F9h2cWE1AjUUUFERccAqgofjD1GbJ8QEnt%2Be1djk0JdNWWToalgTbYwuStg9%2FykN7VVanzYpojxi0zp4RIL6axMU22Ck80iPyHifDQqBM1Vswem%2BcFPlOOQus2XkZuCIfOhv2BYkDFL3jilS5i3id98cTkJoy%2FJbq%2BCxSubwb1%2FlzQQXWaB1oLOT9IA0X40L72zqUkKoOTa45n%2BgdDyEHbmhSRFdoYvzLOMjhI1DJxNPOtjc4LSWHinRaIB4vdbTLS9UJ%2FCHeP9PIBoqdSn67SIGzcMbyyR6G07%2FrwsMs6oysKWkq%2BYKjLm7PiJKUcny9%2F4JuMkeNbdqMxPafgQofiOWZJ4qF1NZDXy6OIoocWzL3XrBOX5czgSIMcV1a3ryJcaISgKWp1XzkMrUk%2FO%2Bws8bfqQpiovqXNarAaRtXOwWIw5u7VvgY6pgFjKbX5GJGwHPgMrUd77oXi8zub2Uo9eP9vlVYWm4yPQQehjc0iheRYzOCIc0DgOGz%2B8tzynNUYpqx43OhC0uBP1QJ5nZgzU%2FvKc%2B95iQR%2BquR7Aije5lr6aiptw7FcfGksm1jMqGvA0kxB0EUJDMlsI4NivjRyqPiiD%2Bp3Hy3Ilj8GE5cgHGsQPIlrjSYbpH1%2Bxc5id79dcoN2YdrWsT47vCkcUXaK&X-Amz-Signature=b7e6ec7c7bb6f87e4b1441f807502f551b8228eaf03f4303dea72de8dfb79c2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ4XFQWQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2EdSGSQuzioaSCvq5DCwaT4EOuakJbBfcEZ9SW9Z5RwIgfbCdxEeeQ9rc0yyFe0el2RfavwBzp1vAqYrIi0Iv11Mq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFGNgpLWsyd4wgy01ircA3XlSfFxo4JvtqKH%2FRhFpElI0EaGEqeWb8OatBwuCDy6oClgoKiic9bDeRZQds7wIV%2FA2VXGDf9XogoX8dhnu6MB1PIiLpWaL%2B8hD6iZUo%2FoqijN%2BAb6UK14kVjbjmLIbriGPe37Hiu2mWXrPsMFTjOBfIsxTEw6srPgkYMv%2F9R3x4rRtmo6U9gQsEBICTnnfqAUarzTtrgZnhogVR2%2BaQEWufB59B5dyvMhAb5qH3KRpbrGsBR%2BnJ%2BOWMcWzZQhv2kc8QWqMxjBSbi%2Bl4UVVJBa2QptE4p8%2B7vO7jsoqzCCyRY5Huqe%2BaUXFcVgGEsJquVNyIXP%2B6r1NG8s81Bc5n0x7cmgXMFd2G2X4kV19fFlk3TFIdy2cnjlEbyytgJz9x9xC5UyyNSFoZHN%2FtfpYDglVHEfqZiTV0976gkQlbYWz5y08Xljhni50whWqjdsOFbsvpLyHiyaoZVB7wZ%2Bna63jj39m4o6L4qzW1jqHHs%2FZxHgHucN1EBTOxCO9oZ2b9qNibiN%2BrkZoeIzHEm3SCFzHsdWhWN663TRzpy%2Bg%2FrOAHC7hcFLig379E47dA8ZYVNWJm41M1LUmygEtunr7AkPxpfk03JkQe9WYMNXpASnmodTbvHq5hfcES4DMPHu1b4GOqUBJ%2F10C6xHbh6OygQzq%2FMccSr9as93GurvczgOXom6%2BeNESlNDf7bKAPb2LAFRdl%2FKOrBkTMIZ6uJmu4SLAgVcDa88xzckHmU81l6fnQsX9umAv6J8yLltPKvAI0Nq4FYldghhCJtNENW0y3Z8j4MD%2BfX2Fa8wMyfVD0WzyT5HW1M%2FY2aY5u89zeMgzcmsmzdFO8mjFLyofCzhQZZWBtizsA%2BlB9qr&X-Amz-Signature=50b7c2ff3b127d68976b635f9908b99905251e909c7a7d4a0697be1bc5c8e79b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
