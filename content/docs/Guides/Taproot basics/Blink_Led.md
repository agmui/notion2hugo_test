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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L6NEZ6Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIF6WqVv%2BY5asjxlEIk32ite%2BIsBmRPMsEuNaG0cqu23ZAiAOS%2BJCYNMXPZhaUw9WQNtAtTJq5sxSGNDawj70LscY9yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM4excWUoYIzzZonSRKtwDGCc8YqRdOqp9N4gIxyb7LPoxGFWFi7uInxHiOwoYWUA%2BL0QxMJnoIQP%2Bb1W4lmuBBYnVkJD0ZXG1hpHAT3nUkbgHFes5%2FUU36zTZH5UJJktKP6wiCpdGBa2cVgFEX0DAYFhmNJV0%2FNLXPdQ9X6pjGynpo1LAUGB6vimZ0o74gxhcoXEnANBjaKJXDz6SUzANnnxsPjtMvH4e2LOQEI0odF%2B3fpchBuUx6bd3OxIBRRzUNpmFLpfpge8tTwlU6n4cJKbjNv7wO%2Fr6VeQ6DF%2Fp8aU7uGZXexflWdDJ34e0SNclIfYvFjH2McagKGYyjfIo7EdDVu6QIYEiN5IfyOcwzS1cmCen5RqY%2BpuoEUS70Aak8l3%2FvcKn0bJZ3aNi8AtxHYz0yHw29ui1Cm%2FKgYGDPgkMe09UWBAhUh6XpN6muDn4jo4TSPupGkaBzu1phcFT%2FAX7WXrMfXB0T0AFbpJ%2BdpkkkpMGTOX5lT8CYboplW59yBNn0irP%2B%2F2r1zfVxtVTcMNkXVqYTLXZlAq6mMgucDBv0CPfludRNAkBRd7SsW1tVH%2FHkWZsxITRjsVjVz6Nb%2FK98FXFTwULvDs92ZhE1PAN30q4Qvu%2FMCooshvuO7CgbsyljjsqXg1Jd%2F8wgsqaxAY6pgHxZww2i%2BogBXwZzfoymGWsBV%2BIHTeLpTnyTKvpHeLCqVXGf0%2BTwjoNkIIHHJh18fd3HC8deeiFij0eOYeNfr%2FcALpU4p7sjGtKusNKpATfFEYHqiwNfMMW2iXOvnyNBAdWBnXDwBQzoPOiT9WqydL9NAIp%2BMGZlwiRVjyZSVdCg0pEwFPnpTE%2FiGGJa145mQopmBReWOJl5BfFbwI6iVmDdKVMnuR4&X-Amz-Signature=bf98841849aa1b78f373f903c692809bba82cda1906cf71f179b2f12e4380573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DV7W32O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDhvnLf6ji7tacHjyhRmtBuinsoS9nxYZmEhUAOBMjuSAIgB26WBnRBB%2B9tb0GB8gDe%2B8QHiVS6PrFD1S0NxZUfcg4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDF5a9wdrOjMBBBkjWircA9SaRP%2FQ%2BeuWmPNId7iYCv9IPcHsmSvZNgdcxLDL%2BHUyOSEs8YdeWTsaNJfpTp%2Bm2qFx2FUUC7rgEvdbWZo13z%2BH20w9rir%2F7LNBJeQcs%2Bppln%2FNOCL%2Bwgi%2F4U5SMiCrQVd0LwbtY6OLsoIdWKe7YBB6VUevd%2FG9kDntiDL03dz33JdS4kmcG80eG9BfAfsL19XgYnmAXQaFroPccZbqx3Z0QG7lGUpQzwwFEsdU%2F1bMYNO5qR2pT5epu339wmV33eojnZYPHgRXcAkEDqd0o8gxgdZysukgwT8pFNwEPAobV1InyF%2B0eLlRzpce7381SR87Gu5QF1BEJ5uIsNCX1mzZvDqdHJ2N3rTwIfLUynv333re9KJS6FK5wmcFmBFDhbCPvpnCmNnRdHacOOAUuaxQFLs2h5YUGFsZneY%2FbkXDNyhTq3Qf5nBCfHja9w7qn9IyeZTSdS4RTqUf%2Ftq9SklKZtK9JMBeRFe4caUrwWnjSELW5H4zbo4BIc0ewkZDLTWP1a0Zt9yZPUtjC0tQSULV%2FhJhJCQBGn%2BhSPVQZPOqallcA%2F24mEEiaDlaNXJbxmcYaX7vrLoHI4%2FrFo%2B3B0cU8xRy8k%2FE0aF0XYQ6t%2BefLc%2FRob%2Bm83LbB6pLMILKmsQGOqUBS1Reulh4%2FSfVfxKJxhBojiYTbsRJKYbkRO37IpIWKPtB%2BJ3vuIXvhAiy1wCETIgdxd72IEgWRdYD593GAXsgXo%2BtmeDKEJSpIBSSWYwY8cmoShF%2BQ%2BQzCr3lNAqBDnvP6Kao5SRLRHtThPyDcCMNktRXCXejoU%2B7hCcYbh0RnnxIbnYi1da8A%2FhqtOW25PduuE4CuOGbL1Xps3HltfCjm3q3H%2FAp&X-Amz-Signature=42b51bcee96a4b45d20eb3c07fbf038c9a01ec65a5d6de60a25430636a0a8b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
