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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DJTBCDO%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCRM3VukRyrVjnzZyJHYaLhOOBDm02p8%2FsNetsiwgS13AIgOQWNFVt0%2FT5zmKVbhjuSCpLYIHqg0Dww98KJe%2BLu0eYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPefgIc24JqcQUnscSrcAyHq6rSZJBuSCoyXA1AK8Drl88VznKSvMGfSEkxy8bF15l9%2BdeXuUGLCqBKxcbBWHTMQexrCr%2B3jrKhe%2F0sThzIzcMW9FMA3tq9iBvjNr6%2FV5cCYT7QC6MP4Ztk3FEddUr%2BgSyzGbhCa4E2xrOWOtYISV2SUQMGuK%2BhZ5VBl7zvWG4yzF2%2ByNs46faSIe8la3OP8gp84zGZt76W3F3tJD3YScp0O8GmrQ6EXM2eF9pB%2Bwq0zs7g%2B6dEGC7eN04HcMYHvVoq3CZerm28KP%2FRdtA4WimYQ0oGS5GqlYRBGJ9tN4imrl6CjdvrMK%2B6aDrCFYXezC%2FNONUVZSMSUN47u6i%2FTnRtMBYsaCoxC2g2MwrAoH8xdB8AfYYQsFzLhgQeBLqF9OJnWrqOjyeofHqhgcniD%2FYR%2BKd2eV4V%2Fm%2FcpKzLye%2BUtNBZ1rbnEymR%2BfFwSmoNHhp94FWRfT45NGRLOGUEn%2F9p0FifNBAOvjjnpKHZBbaCHD9%2BcY5SKNU9xmBrlgOeAGNUGLTX15VAEZqvwX8AuCg7AMtRtcOh1AO%2B1owlUVpQ8UP2oxmKBz%2BcGdg21AD2rSQEaj6fp7IPueuzndfYGloAGumDWdRZ7N1xZIvfjVW6kyH0YG3c7mmztMJPrtL4GOqUBffZjpc5pbdZNHvrkEFHizgQpLs%2B7mwDA%2B3tXymR9TWN24OZKYAzpCDbGe1aMv0el5262t6s4IKCr%2BrZyEw3DF8MriEN3N4stLkeyTgDL%2BpV6O3mMLKviJDnmctGNDjT91Azpgo87glcny1is%2BsnPULBa16pSAucAghLFD%2FFzl1IdvvYop9AJE2mvmcYvQH6l%2BLshuMBbu9xbdId38X6xWr6eMXfe&X-Amz-Signature=0cd08826b8faa5f63fe0f65cac210cf37cf14365c0c4ae9dbf3981ff1bba7462&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS4GHSZE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIFMpsqvl%2F1bd%2FuNL5HCR4J%2BktoqNUkPLGQZTtiCICVUiAiEAksSdYDrhvbp3YoXAh3I1UuAthcv7oyP36ZgEZSM5Nqoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJycfTTeQ3o6gsbWpircA%2FNMXK6%2BnkT0VMp9Atel67jX0M0PG5JGNlCzY3kGIIZucF4vZgYn4PrMpjsN1rn6lR5au2i7iGEgPfxMk9cMTfq0hWP%2Fe2bHknFu0imigreVEU25Otza4XuwT64DfN4VyoT%2B5YO8VfOV0ry24ACMfACwAtl5JPxZohoUB%2FJo7FqxbRsdm7DaujcB5kxp3Dn%2FhaPS%2BbhwBCypjH3VZ9NLRIkt8k0gv0G3R34k1sy1acXBGIehtlgWLlZom1yKdK9R1GCXdc2QxFh38EbwTAPtguiEiUFLOqMkJShlac7l0wq0fzpIck7B5lZwBOdISg2jddT5JSedqvPDGkDPPQSdzpi43Nddm%2Bo%2FS1BcD5tV7fb7W5sCQGKYIG0bzJVhTF0M1zKIjeNLigFevux98qpn2PaZJ75allWgdDNxahwrKWkIZtEhkZIHsdr1ejOmQ4wqHNg%2BUlBvqrEOOsPVNNwCGNIMRm7ZDKtubsqs0LKodJLjPEignmtisjx2rZkTjV5X1PrJgRt%2BDeKS6jLxQWvAQPLF8ATFSXZ%2FsRjhcus1IoQmkLU%2FFhIm1u0sd9fEoJya8U7Y%2Bv%2F6dovL%2FUFXPzaC1RKUvPK6oWfxzzUJVupt8sS2jxTFyc1TmgZzzKVAMLzrtL4GOqUBXOxWoggiFV%2B0kDx0fC%2FrquR1fHOx%2Fnz2VwVIWWtRqDfs57evEeFvRo3fps4fnheAvdPn%2BIeYZb0COMQD23TOV%2FQUlJayaLVPEdh%2FrGD5CFLtr8oKHv92mjBqhV9wYEd4jN3kBi68QpGdcjpoYlGEhVItTVKxW19ce%2FVf%2FQBMqgZ3rzNN5NXP9Xs7GTNPj8wqYvuEJeZGYdM4hoZYzbr2h%2FpGFLLf&X-Amz-Signature=c6154bcfa2bf4c000f1396000350c2ca096cd86c172f2f81b8b3e12836ef4712&X-Amz-SignedHeaders=host&x-id=GetObject)

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
