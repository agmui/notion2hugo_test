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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7YGF2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEdIPUA%2BNxDZgSMLY8WMzdSu9%2FBPjgRIbKLioKTh3t%2BEAiEAj33gey6YvbDpBtO1WoFohXxyMFY8xS1cZ1sKN2Wq4Eoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGW3lspgBwy17uDbByrcA6b71%2FFORaWBf7n4h5tAE5E7jp9D3tXpxYKd3U1HH%2BYKRYPDIOMxtbbfgBxw1hMuc7hLzLF5cPmRXOyc%2BO6FYCuVlVwdw5P6kvGtsSlI1uRa4SjftIsB1CNnbB0V%2B%2BTlml2vhEpUwJsRXUhZiM%2FMg0b%2F4tyugzv3FdDbGQaoKLj1sUc33OQLra2eKrZEO9BJerxgIWxJh93pL8HaJN8xu6krunIVycKV8eXRCkaJkUNPLvFLvGLsKbBx41o%2FIEYI%2BkmXbv5bzZgfMQZqcXpaX3r9rwGL8Mh3mEJe0p%2F9Edm6PQXtT3n3bIvr310szJK2cSzYaCnb14s8PiqcRDIKC0mxzlz1Ut7vBaA%2F4HOWn0ocxX%2BZwUdUpaag54Y8hL1KuDATAuCY7qUSMvBPx976ciVEEFnmjBTdIDXhc0HAr8ftiyLEEw1hOzbi%2FvOLhanaUjk%2BiyZB%2Fvhu7AocsFMJSSOHCO4fhi5%2FbLL8fhleoNhT8WB9NkkU%2FQNDNs%2BkRQpvjFOQmh99GGLQp7hpiwtYkdqhZoqQdr5LKijtnyOE8JgF5NPaTo%2Fw4c9FygtvBeBBXw8Heg2v3JfPT9JWnEHSibTM9ouUcbW5mxgl5bcPOc77AhAqtMlaXCKzdrr0MJC8674GOqUBIDTgGQKIpSHB%2BVp8O3SpOVWwrUm%2FoF5APwdKwpj1sIGTcGOoKiMfByZOvBTu83XVO6jrq5d%2F7TqBTryjz6PIJokhszYHkX5mNnJmiae29NkoTDlMtewC3rGOot21NPsgmdrZDeurINd3rpL%2FjX%2FAQwkQaUAU0x8e56gCWLMt4su8ktm685OuOoGCLaWniZqFtb6h14L1SmHdiyIhKE8vhFYRJujo&X-Amz-Signature=4f623f37bc263d052a14474fd162f10e8c9f0c95b845e591c3c152ef6a8c567c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MPRRJR%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICckEnzLJF%2BmSQnlghurCCzkk%2F01MhXtRugHhPnm4g8eAiBQnbY%2FAWY9kx0hw3r96%2Bqky0JEEk92lUOgDf8rRakUICr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4sRD4XybzjBMBjbzKtwDyc7I1LPPBBcqBEKAC9YrHepERHLUuZAD4R%2BMBUXhxuCr29s%2BjqQBYTD6JXKPWZp%2BYclG2bRURkP7QO53IHUEGTZea82I7QpKOP3QhmNOIbf1%2BR4pE4qGsvYOS7Hu7UlH2%2Fij6r1R8237x0vsBr2S1HosdJTjjKO2mE%2BtaoFUeMnKCOZbG49V0YKoEoVway30nKSd2FNo86uM2ch2r1SSicRmT7SinKPbvQYuZLv72aaN9m68TxIoWCTPm%2BiVQCJNfMPp0%2BMOLWt01ev%2BzyUr6oQsI085Md%2Bii0r5HeAqTep6aPLPhujS7KABMSFwQePeC4QWVo%2BKTKyCMp0CCxSK6sIyDaKqm8E6QyxMGs5f6MAiQfsYxrV25cC1IxtBAE3TZpp8pLk4usdRAoMBT3CQLIa%2Fn5u5TWypPAwDhU%2BoNnCUsB%2Fit2ISEAalzhJ%2Bkf2Tss426Px17o9pqbusM%2F1NMN1Gk9GZtBG%2F4RocnstHOirUD5oT9TcZ%2FM1TAFx3VI5hVt8w1ETqKdfX7cKqGX6yKA0wK8EowmBqPbxpfpv2CREWCvcspNUVbRAMFy0ApbbnHCjmnn3Iq68V68h6IbU6x%2Flg6dHUn8lDu%2FEsaZxQb%2Fp1kqvf74oOA%2B6ntGcwm7zrvgY6pgHy%2BLcb5Xmu0SxMLAZBNT1L%2BpK9xKBs3Y5HyaCH36pdft%2BPUYlJgACFDlIx5oAa8kvosoET%2B174ftrvUtwCy%2F5SSkwHKcR0LaRl1%2F9B9%2Frwyo2%2BDcknkVwJz%2BlDSPXAKyLObngB78o9oUmzYCTZUwQXw8voVav3JtuWutkefTVzsBnLm0Usi%2FXbgiI6qDFl2PPLZyNiBr4JRNFPFydQave%2Ft1QiILnA&X-Amz-Signature=5073d28108086fe4782c5e0debfa1191fe5f8d7776f21a40c0585896eb4079ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
