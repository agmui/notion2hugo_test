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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFLL6IF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9SvuSK24yWlijkit%2BaqQMyqC7g3nm3hIF0M7XwtWj%2FAiA1Hl%2BQxCL0MEaSp%2B1DvpvRfCaSLFrFA5pnyadXT3InvCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMuUmxpqjvGdj0qkpFKtwDgb9mcirBKX9XoqC8zgiq7ngLVDV%2FFDAtbWB4aBcNl%2Fu5KBMYXtaURdX8izL2SsQU%2BiYJqoUcLTnyyW7LMD7dGx12%2FTkzgpY3BJ9F0WuMbFwgbS%2BfuNqfiI6LhPyG%2Fma159fapvT3XkeypcMGqcabTrhXUvoxik044bWn8bWCkKgYc%2BQmLWAyJX4MCZgRBD6WoqXZVs9aEcQQ%2Frsi1k5ft8IM6mzWkJctYe%2Be2khWiuV%2FP0Fmbbysf15niGijaH4ChSwEuciW5x8VYZJtp96s6p%2FNoSHwO%2FQKxteyraHl9fmU30SY6ObHBLeel75Zj6lWOX7yCpA3ixaSveXV9GJVD6p%2BOQMc64Ap87cmuv5Z43jByiLuZSLnFqCa9gUM9BJuaY7foR8017FJ%2FIYS4DtN%2FxiMtQxAVDVPWblfAfDkQZMyruZERAFV46IyVtu7T7WJ3hzGknFdEUCbfWf5auUE5D%2FA%2FY%2B3iKTwsfWpb8FjYsFggGT3q%2BlZOIzXwqfHPvnuI43ngsrYrLMC%2BzYp%2B56I6dWkAVWS7OuF25dkZG3myicQ%2BrPjakt4WsUYyRnyYH%2Ft5X3Pl99Sozi9%2ByujnbOcWo2WR0z89Dxf9BBT7i92O8NYAuCSKFgQmNEuBCMw3aTNwwY6pgGAoiwZpiNHahDD0dHf9dWeEOrPBiDnP4%2FTeB2Vj1W2vJ0fTwiX0rv4Xbei9FchpXWW85XdeNfFZstCTvYqNc5juX%2BGZirOGANSP4sSgzoH46um5P0fwI3NqFeWkvdHxikhso1PdQYbAZWU51sD6n4gQbSOE9GdpjNFqOkFaeVcwC6aWqy55PK%2BthcX0KtZt0ObkNZAWnhfd6Uc22U4WaLIZ8MHoHa1&X-Amz-Signature=0788c4d50db1fd08d9bcf1559233a042be4b445ded9aaaac79a2137a05d4ce4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5N4NUT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmID4QIoDtqhm0ePj%2F9hcH1%2BXLM56F%2Fn6EdhFjonT2eQIgY%2BJHLzH09OIqKCrroNixwQpWXQ803zLC%2FFtqpRuJhrQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEDELfTs6H2T8RqFZircA1cwra%2BUYuSM3F1bOM43YZC2yVNKFvNz3XvZZN%2BRmOaL%2B2ACKs0QPYL2ex2FYg9WsEfTai5fai2DTRofcVCRudYXQ2RcBH3Ovl4nLNtxTi47nPDVgqEEVV6gmQbFhEWjYZGPjyePVm9KPlByfxMGdQcEMkRd7othcR08w2rDSvGPEPL80YvME%2FUsxXm2JV5Mk4R6ztDLDfNQlmMHuOBiDK7DqvWIr7fSqLChSpbTqRHocKOLBohCHck43nMGOpVj6JSEV6HtxaIzJ%2FKTGI9Lzhd7rv4lhx8YFEIdHrdqTb2HUmBLImunytp%2FdUFdgRod%2FRSdm7j1Hd5KfzWFupQMZSkI4GIsAPONHWcP9kc67iHOfUSNBR2l1nbWnDpScsNBpkAa2HAlIcN6WAmMFzxIcGO%2BWVH7EUFiMpsiqybEsB5ozNIx1od9es8HCmRfSWEH9IVsoYttgCz02D6kd6sGciou%2FYJvmSU4BP2FVm2lkTUTrEahao9YKXNPzT3hLf47GEHqDYeNNFddZdaE7tmRVKMndnYIvM%2F29FmswRpPTpQ5csLAzc%2FY%2B8rBUovQo4QOTKt9BwRuJikUTRtz6x0hcfEr7KZxkI8usZuYuEEbdiGT0h2vjhNHTV0aQYBMMNGkzcMGOqUBRCoQpnqhQvYGdBcMK6rTz9LlPFojqx%2B7yRWidsT8YHGj5SEKxHSMJLyMssmhx8aYLnQW9ENFQijxyngsgrznBlLdkv4%2BotP1B609h%2BH0Ibc78HjHKpFYjLfyymOXe%2Fg2J5mU%2BX3DbnNuvAuF9EGsJuDfugolRyLloIQX5GhJE5Wb60vj9FTQ1joddAiQr8vP8n3S6CS0eVF0AozxeK5doAuOehlQ&X-Amz-Signature=77bf670bca6b9a9bd0b6fd8e0e751b97768464bc8f6476d89b91be522159515c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
