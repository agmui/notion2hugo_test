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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVJ36FA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET%2FrlxWtbBjFShFwVmcc%2BR9obCyo69oY5L51xaSALQhAiEA2SFhTCM%2FXtmB2qd3yKVqij8WTnjKxCvZFVlkekmg6Gwq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDEdbesGhpSX8t1cnoCrcA9dwSWo%2Beq%2BewPoamJaRx2JLIomw0cO4VR4QWGLbQVUUtyFCq7DUSyEVsezDxlh5m5XZ4Sdppgr4m7rdtI%2FD2tNTtv2xU67NqUc2yr2ZJdVN3xLVccBiXEchTZ8EUdP6l5HHaRQ%2F157zpTPtRnH09AzwkRiBywqCHVaNa%2Bh5M14MWMfIH2zF6vKQ9DaTgYr9V8rDgoCr1XH6ZGEnVw83czwVaL9WODTFqG747m46QTPa3Pj%2F%2FKHGALRjfdQ6xPC53jy8tTXYsuWgeUP0y4ACzp92CT%2FonAJXodNXZr9pupdP0VdNP384B5gD2iAIvfijdKG1ZN5BFaDJ9%2F7usookceUDxuwN9G8WcYbeKz4NDvNSwk95knD3erE4TwF9lpALUTJZ87h%2FgoAakpc6VSyfATh5ALAnJ3w4KLGHGdIYA%2BR8DqkuRDnUVQRJLEfFN%2B%2FPzI%2FaGvHbRO9uV%2BMiZ%2BOOmBnDkqx2xY9HtWUHmUMg%2BPQs92NbEl%2Bm9RYwQdQaQvmcMLM6vdP8%2BMJWvw2M6PMhJ%2FPO%2FkRyMcCJnwEomLVdmcMld7cwEg%2F%2FF1GZ9IrNbEzEEVTD%2BxdVuQLdqLGCcqrGqw5K4b%2FkUKBffW9kckLCXs1nmgWIdYbk3LC9vca4MLqiu8AGOqUB8%2Btmv6EMSfK1hUgUy8%2BcjWDmQVKxajVcVlTOWuMZomJq0fceHZDf97YRR1bvDjt6RjOmYWOndZy%2FLY55%2Bu4IvrL7bKE1ImQUEfS0byoUsJmsBd38oo2DdHQf%2BJ2HMobPGQORfgcLTDbWeXF1dvafh4UQ3U70Nh0eefWinN0cA9YrUhpKna7eBcVKtnZI9E6XmUCNcYTmndbl0FO0ZQMWTwdR%2FHDO&X-Amz-Signature=0a16d8957e1c714dce05b43ac59211a9945d825318146d987b6b5682b97bdf14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KY2TW2F%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Be66pX4dW%2BfbkMGQMFBaun11SqIa4OTJy4pn6Xypc6AIgYjW128OsZMWfQ%2FyJyJti24BNRy5z4Fbqgl%2B8onQ8HMAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDJUOGqFacEhLm%2FWZAyrcAyXRWMWS9rqym%2B14D4iSOPA6q8jxsw94MQsCKmPtZL97iAU6dES7zJb65d9Ll6o8ZBKzuwqTarcnrcxMdwTKzpSKOfbsCQ0MAhtiFCWB5ZR72wRQnanvNNvebTFXZdPt65K6d2doax88YwbRMh4w6eKLkEPvDwTjRdATnAMjPPapzlfvNcIe96KZOXiv%2Ftlq%2Bml3l5ohb9RUq%2BIpmIaWig6DWcj9zzL%2B%2BklleDnj71OXvojep7U4q%2Bleeex1yRtle8IcUDobrvTzNChze8UIy18%2FcTWWu8GWBgF1Aubrvrg5ZeENVaXAzf2Cu7sAsywPk2YX6M2GDW36bdU5QU54EBhyqhTnPITARKO5quQpGfwP4KYqbUl2Lno1%2F9oWZe4f%2FJYt0HR8al1%2Fs11OO0MihgzmsW9ba%2FrUv%2FLp6hKVcLa38UfNY21eTcLKQxAOp%2BY88PR6XVodczkW8eS4fFUUgemRFQtBv5JCEuZX3kWeL77XfJC1h1SQbDXwdnh2aIqF%2Fqi2g0%2Fzk1lGIP%2BvmctO1zuWXp24h8r2cP4m0fYuQpDRDPN9NBdLol%2FZcHMcb74ZnLckoreMLWUKh8yLTXZ7Mg8FGPHAIdFmhoDRLxzxP8THgdq9%2BGc3QTV71hgfML%2Bhu8AGOqUB7ifxPKvL0bKmdT1TwCbLUT4D7P5pJ2HcbwpzJKh%2BFj5atdT3kJ7D4f4T6Z1uUX1sjxQyNO1jRZsz0W6%2BY0u5jitumy5WV06yArJ38n2SVV849zjRrRc%2FZCpwTacJAwlinor5Vhw5TA3B69JzhQ2TGr%2B30hXMxm9rGB8SiojrSbDFWXK4VJl7ych3KzdwkiCULSFBBIUlWqqDgDy7P59D3uHFSCdp&X-Amz-Signature=5837160c6a53cccda752861f14d6e3ea0933b8082f1a2dd9687446b00aa67b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
