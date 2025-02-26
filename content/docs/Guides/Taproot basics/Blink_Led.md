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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BFHMKX4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIFps8LUixhj2KduibNlcO0V1HA9rj1ucT5HdUN17vClDAiEA%2FMYaxZTrYOaXwcVZdksxhK0BDNxhU5Xk88Oh1vT7Vb0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLfjKUhWZxomZIbj6SrcAx0pYfi93xAF9OBI1VDwYXKiZzkvIRHDxber8o6Vi8Eryxpyp88Uv8%2FdNS%2BzlyGtvSK%2Fo2e31WTmePWkXBa5USPmo4ArLZ%2BCUhOuIQhg0jxR8nD3gOSbu2D%2BbMV5NMbId5%2FJ5khhNixpU%2FgOaAAeMosvoH%2BFkTnUTYlOfAGh5qwgL95cKmXQ4qtdNM2cpINE%2B2A5FvnbfZ28ShiPnpoVh8qvZHfsWZNGkqgBz7jFT86Awvbnl7TEYWY0f6l32x50lfUTJcJ9vNmLMghKI2n491fakOynOhdjPfG3JHFljcvxud61J8WJeUobd%2F7YSj3zjJRTlhsxmrl1jx%2BvHro6G1%2Bvz92FjOrcIEd17Y%2BoUBhoOmeeV6epIAsyDqi%2ByW7otGE18u%2B9IjAdunHO9pZsn65i31Ahc5bKZdjvxCIJK7%2BHnNpqQ4%2BP5b2hmqUdrPInKrTalXEksO%2F%2Bvu6e5d5aA9IaZyZwDQa5iixIZf8glvWqyyMsO0rV3FuJAg9cql3YZlgmXyWAiJX5gKn%2FoOFogcTIXGzjsVACGaIF8OU%2BJYfN0G1ejq3OLUAgzWdOtt5p8ZbHKLnCO6EI9LjsU3cpdrZsrwLspZQ5BkZgTMvxvkk80sm1uaUWUe7glHNCMMGI%2FL0GOqUB%2BBpTxH6D6czpYbUEXJf%2FGmekoqT0rhfD%2FEXjAr2YJh9qwndZvNtxRIZm2sdAZ%2BmwAotpnjZh90yBZmNGINfu%2FHgnqV1zXKahOso2lz%2B%2BUexlVP85PpTeYjgTJB2zP718nGwNMM4%2B0uLn%2B1IC1S%2Bih9RB%2Bq3rZv4opNvgTRhxQ2KBLAgQYgWm25IXsw0%2BJkkNzuTvDpmA0osmeAh1UQR0ejrO7gZd&X-Amz-Signature=252762462b8dc0da55ccc2b1becf6e2cd6b5c3b2008485b89e395da0fe896ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O47JRCI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCAQkpApriJMZSfidYkWo8WshXTL%2BntFl6yd4kKDjFylwIgV63571%2BWnImbjS0c0V4HwVoXfFnrxCEC2mvu6oK%2Faewq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDArgn5JLLjBt8ntUcyrcA3qQ5DJ09buacVLEtKhuqBfzTDUKBqboYJsnM5t5Ib1RJ4iRD075Ct%2FWqSDygv7i%2FcStr34aHfOWfXmqlC1DCx31iLkMJ8JhuKsXGt3lFDhRw5VrqxfiQniEysXnSxEYsXVobUdqHr0t%2Fv90vWG%2BBJCz7fzZfsAGYah6qnCSvePn8TXmawqUM8ixO7TEe%2FO%2FhSqZzbekWHSgzBHuqbQ6RkEYgtoaqeKd4pr%2F7JiuebBBL8EP0r69d9kYuV9MsnKD0ze4u0qA20oT8OWLqpkkz5hs7pFU8GNkh5MTFGdOqW%2B760K3SSQs3zyNzR5iCTkh9%2BzRAV1Ulk2CHVhedItOe6z6%2B9Z4FmaP0Wf3mUunuTsAe7nHQO9HUbwZwRi2e%2BLAeHbVW8OL9%2Fn3bbCG%2F4E5dSjKr56rtRXDfzIaeY%2FzK0hJBgJuyYhphCXP8KOlZwjrYSjnL2wsrBukb3PeALi%2FMRhcPdpVX%2FXX%2BfwS8gok8v%2FWh68PxCQrGkyAT1rlGy071L7WLFlBZVN00YnH86XCT2cBMG9D0lPd2s%2FnPg7bZ8e%2FvPKPwEPcEHz%2BAr78ERa2urNrbA%2Bt%2BT5705YDooSBa6gkFOF8pYYAmSitA8Wn3I8BWC9UaeHEnZjRcxbHMIyI%2FL0GOqUBCtuGyO1olniSD3%2BL3RvmRnO5AxPmFuelw1iSifEsKMgHWAN0%2FLE7UF4wMZiFpCdFwRflZAHUr9pDwpUKJfv91%2BLrEYkeHPDoU%2B1wwQAMZvwm%2B23UZu2Sn1QFEftGC7miXmCqvDnyoXDJGeXnzeQLyRTPjPegg%2FW5kvPUbKleziKNtca1RvroCgRP2AvJJ0ReObl1WCEZ7VRlEMwUWcLJ88%2FqtRhK&X-Amz-Signature=91d0a7d2b56a951dc874c2fb6856b118e18b8661f03de4099d2f7f3dbd67c98f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
