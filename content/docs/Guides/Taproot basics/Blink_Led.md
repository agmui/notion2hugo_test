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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TUPPUK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIG1BALAk1sejuxbrYFzdf%2FG3im2cX0zzWiTT6AlrOmACAiBSL4IKM41pqtdiDsrJJsmUPOoFwp8zh8f%2FJT8vQ%2BYeair%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMSyOb7OlzQTfVGuQdKtwDfE21pqTscBGmeKAQbLWbvZBJInXxjBIc9pEGDfvNbhYlyHMkRryviRRPZV7nrnM0huHS5vnE%2BIyEUBXEuCaxl3TIfFdlvdRqM5esq%2Fbox256JozGbwex96QRB9cRbTPTLp72LlmI%2B%2BV4LFNYwkusghNlr3d0uIQGFLnpKADyVlNcKYdIjr6na7P23hIJsAqaZA7lziRbpGeMYN%2BLuCuEjOzjR4jvKOhDfX30sLEdVK57fDLhc0ofKgMo7PBeTY2ySyl9rhu4cB%2BxhJgtUMkMzSdPMoDj9H9rikx2%2FGkiLNua6FEYy%2Ba4sDEcovymcpbSPiT15refYwxnQmjjbVLeDIEYibH%2BscZgE5NU9IezLvnFA8fIPA0rG1Z0OtfWTsPLpoTg1tUk5ZnfEIBGqpQGsF2A9y6u3ORBkTLLItgn%2B7aTKvZBQyuBjiIHIGqxy1IpFqv05nZuzIldpGOYi%2B8edn4Y%2Fuqb0cIrbXNeYjozOnIxnPe%2FJCK%2BKHzoAsPoL7l3fIVwiUTkA4mjlyMkRJb%2B0%2B9gadxAPtXRwxO2fi1Vtj78Q0aYZlsPSI%2BaD6uyfqsfZxTGQ7%2B2AYbTmBln2w%2FF7%2B%2FqFi77LMv2Jl0b6Mp07SDhZR4xXyb0p4dsObQwiITZwwY6pgEYr7yB8Os4MvrUkg0mozDVDiRgk5DpZ8mTp%2BJI6CKjlt224JyE8cff4pki4xTM6lfHtrNk1LgO5VpvCOHyfEfyXOfw6x24LMNncTyzf7Zkx2uyWBz8ChYcb%2FIHG7cPvqxvUmscJa8nVR3fEjrNdVWxFe1bHPf6tBkrQz0wSuYnfkottnWUpbhcSolrU8IJDdBVYTVjnnBdHiE7bv0%2BgoMRMihLXBPz&X-Amz-Signature=c1d8836e0a55b1bb7f5bbd1ad275631c92a1747ecde4353d6a2fdd296ca51e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7U7NELH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDCZ1qRjy7l3%2FuGMxGoFE8uElVveGzKBV4330z40TG85QIgI13LEZzbN3wpEEW5HXrnsROmwX417SsrZV%2F19kW7FKUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOSwdxvKcDggbSOVXyrcA2ODEVW1w9g%2Bk%2FkLNodVCJi2MFmRFpzW0dOkvcf0NEeyrEQqivLCI%2FukqbJd%2Bi2DOSN%2FwTN9MdQxStgojLN1xg%2FCCmZeO6ovY4b%2BEdPkr4XmEebzVqScVPdQa2Lp5w0ym4lNN%2BWwKlwkvMxkNsSOA2HsX%2FaNuuImNjy5RUIzMjnbowOrGZF1ms38sz1GxzauW%2FYGvOAW%2B%2F2wdmsZYDETF7nnh9WtAuAaqfzQX%2FiyBboi1T9G73E4OqKxtK%2Be7e7ijaSrGoqXcLIkCj1OsW4tARMtK7DVmFwSMuar1Ow6dZ0e2JtwOP2ni75f2wFor8%2BPvi74E%2F7k1iZ5qf3mO4nZXPmzxgw8LlpyKAhd%2BNocbdgJXgZAGxEMXkbSRH%2BfWuk6tTTMYWJ%2F8H%2F1tAdNomXAucrCVlEVSbpFBWbe4ZHMjjR5XKwJHr0IAyJRC6Q8%2F%2FeNwMZ%2Bvdblclrh3UUay%2BbyQwlOQWnLBucbwRmvyVNiThkh%2BgmZHy4oyM9H0TLiTG0mIOr9oFItxn3Ovst1RA1Zdo7pMDvC5NDraFbU9Nxh4fBuWRle%2FTgmAlFmqPWxTYGG%2FqWYF7pcj5Ff%2B63GWKp9U7RG1Rn%2BUSMHtEMdd8mutlWVxQOQy4VjQRZ3ee1vMPKD2cMGOqUBOkfh3yBjsKsNrT%2BumCoMwhOSZFGiaDIGNTltejq3gI7Q6ONj1%2F0ZTmhb4TsRHosBXs2ZwVbYMbdI5qVaOybxzc5ij2xgW3HVuuqC9yvs8KYwHDBzvICROB3PlGsL9a%2FAW4FdVMxrzG2oS0X%2FlWvHmthB2lNoqROGhOO90f%2FOXukB4yWuWtxGKbfGAS%2BCNojXKF4W3dJTm1Zm9wYLw2A%2Fxpj61tE7&X-Amz-Signature=cfe9a54c7521a91774dfa132819e4189f611cc76a246d21634f420b29c0059e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
