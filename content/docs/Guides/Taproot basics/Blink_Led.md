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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV3DVKYJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXMyYAs3sPBNT7HuZxE72DxUcteeezN1i2sjR1FRZFvAiBr5ZGjN3rDZhH1EoLXLupjsEnzw70ITGwK5U%2FZkCJWKSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMyb26mXnsR1Ovz%2Fv3KtwDgEuNeOXHyEtW0p9h9AhuFE7ZjhYp4IvYFAAFLwnjZBqaTp%2BldDZzadP64XoX0fy0tilwRs8w8yKGyIGZWccKk%2FFNGP1TlOPelQx418ph3QYXqZrzIveHTWeP7npRI9yWaXLrwpwUPi%2FF36hLT5RDbPT%2BK96XYrCCjc2iMPTc%2BvymfZvi9ALQC7LQaJZMhbN4ElL7lXoqg6u6cUc%2BOV1Cs8PAY7wr1MGR9Ke4wpsI7mizzhr3zpKjT%2FqJaXb6ZaMv0bFX0yH1R6Hs0XjdNoazMOVL9joRw%2BELBI3QGSxpPmciTbYAZnZsuUC9%2F0pgJOeacgNZwD%2FwBOMcIX28EXLwwQzg8FuSFAi%2FYrNuWT0RNYjfPbutL7ihvNlsZ%2BwmfhX8jtDqBfRfIr%2Fjj%2FI7mjtZHjzllVklzEr1pF1%2FnNHObZ369ZR1bdeCtCZc4hlNoXYJwFTzpYNoSTHbf0b9MtrnRiXAFoBzyLebaERkwjXTGcG2bfnA3fyyhrDQL44berYjyeBl6iWGzOVMJ5w9drmNBfGXTrqiKacOxKTOoqqqychc1qlDt2HXpmkiPe8okcU1Dbo9DtBviur1iJ0C5vNlyk3Jg3tjjUEzke5KZLFxcWPvYifg8acn%2FMjO8g4w053dvgY6pgHUQV8%2BItGVzRXAxjJO9tGTFMTTtTPO8zRTmebjHD6i8iQhxh0h5bMGcyDsB2x4Qcy%2FlGvxNmTYl00zwzS1EnW3y1OuWj16sKM9a0ZMXbNfUQODooiIaMpORu4Yvjc%2Fea5ig%2F3lxeCknshVMY9yXmqmpWS8HBfHWvYltfWzIUgeqefd1QnDPmN6y9s86CixmDQ3KtAGEUZPXiLDxJ7Gh6fqkNm1bfZq&X-Amz-Signature=37abaedf1e62e0686524d0e50fb781933aba91e3e4363b0e0ab4daf14d57dd5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTLSUIQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXOw8tmmYV925uvEuSEadR0ISXnwLvzHufS9CTNLVfjwIgPM%2BiEXCPdGq53uBwRMJNgy0FzgI8WtcnDbCwRXZDiJAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF07%2FRu6lvVS79DenircA27ge6ijAamvE9tG%2BypTyzwbgAxPY7ChUfz7zpOqfEuNfsqCbAJqgyfl7ORZBSqNoZ8EiqqykpmdtfSqwocimckUvSKM5vZYY5hUlyCWcdRwkPaEtTReMc368UQRzl9Q5yBNYHXsJYrkxkf3F6Hj2vtcHIhP62UaKaPEsO8ZBaSyvtddXTSRZj%2F5RyQ%2Fxa8pa4gtEidTY27ZPjscJQqt5xmzRGnu%2B4%2Bn%2FGoS0WXl76Wesvybq0RDFz0L9%2BXBXfySdo9vgymh%2FXnBidv2akKVQy5p8nup%2B4BfhUy5GBasbEhfWDHvrqMl6PeAMPvd1QjQGcxGYHnS2RHoPsMPJYg3vqcsLqlhJPiwWBi4D9Fipz6jizwPbRx9nPbH1fjlTapQk1DvZa%2BCGr4NeZusFJ1lZB1Aqujjh%2BwxucsjmfmXosVOsEy5JuReE%2FpmFIk1dGwblsw%2F9XcmQZeFwZ7G2tbCFP2AU6nDndwv%2FsQ3soW1uiyq%2BAKmS9yWKToc4pRZatab4%2BVmheog3obu1ImLJ30LQb80tXkg5hDmofuljLjCEW4UCIiAJfceRZdNzNcvacajNlyfKEcW%2BGGtJwXwaywg9Y%2FFXIZpR7TRM11%2FEaLd6Y1ME9kkgBfgt%2BTOAXADMIKd3b4GOqUBmo4KobB3ZTcMctu8hgevSHpEnhTRG3av3JfT8RvpNhkFrzpNpb8o%2BZedPtO9i1VF96mbXl416ex%2BLn9QuzB4UvQkSHv6fobK%2BXcky6ToxcmB%2FHr4RHAgsJNXPuLd3MM5K3shvXOMO9xxM0l%2BiGcob2Dxcljw7%2FE018HDPmtK4eCXcGg2zrBLxg1pO%2Bbf%2Fs%2BPRo6j9RvBOTf9t59pIFtGhJeUnGkU&X-Amz-Signature=c008d543104689824eb9149aaeb85400a7dcfcd152d14cf8feb7a1e2b34df894&X-Amz-SignedHeaders=host&x-id=GetObject)

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
