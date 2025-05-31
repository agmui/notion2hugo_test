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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7T67OTU%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD8Mc%2FBa%2B3LtMSmzN2IYl2GedU5ALyoF629yZX%2B9DU2AIhAOj%2BR11p2BduW9SF8jnygnIdQlC0kP0%2BVmRrHldRXgoIKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMROnl1MwYkA43Krsq3AP1K53oDxnIAYVmK0lV7k2TWiV35dbOUpZNlyg84b%2FO4X9DpFoHfVgZovdtB1pLACsn%2BRsVf8%2FggRCFwd7PXa%2Bye%2FZnhXQGIO5ie1BEVwXrqiQpPvYAodIkGpYS2cjGtqsyNNWJuwuf3R6kVt1cENzXMGEk8NEhL8yw1O3uaMzrjAfDfe7qm5lPBvM9011juNIWWvAmRWvdm31K2bBIKIZ%2FEWtpnbUvQR858647MWDaaMpiK%2F7M729faIYyTvWzOnP17aMgZDaqIjwQc5ZLNhMGeQqLetikzqXPpAOS203QBuwWrU%2BalEsmvpq3HjHUcHR939Wz7%2Ft0%2FfCxWTGxPp0Fp71dnfVf3DFExflhfNosSYCISRnPbDx3Hj%2FEnpYKDYNa42gi5ZhBM8ulTQeBmIl52qkaG1w7gUx%2BqVUCvTBI8nVkP4EwnR%2FudOz%2B6n7eIqPX8c3AQq2ly5tZ3i31npYxERuzIMtjuHzzkiPfhk9OqcqZx1%2Bt%2BEcNaFn7ghEg4OwUjXkdFm9hIQW9qVQIl194ZsWgiKkH2uj0opfSBdU%2B1R%2FFLiXsgsGYe9U2nD0W8NWJaerOCupeXSbXLI%2FH16iCRf4AlPl%2FjKeBeGWb0Y7KMZzqCZD3IIGcUGSfUDD3uOvBBjqkAazJYjFY6hbeqqeipcghWxkA9HVIiFw6C0g8cTFhwQeWGmPUxpEqcXfNgY3IbtWDvJ%2FrpKQByaac4RXZTSMy7Xy9zNlMEU0Wvm42EWGDtR4AmxXjUfFvL1MaSjmDx9ICW2FaYznOq7EoW9uP8%2BcS8JhbL5ksz85D1rMNVIf2DRlhjTvwaMTFo4Rw0iTerDDFnc496o3FgiBD43aREIpKk3wxxfjH&X-Amz-Signature=1aabea2f61b07b4433f911967494aba48d6a666f422f86ce36b3b32ac31257b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCGIX3H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHoAC60O1%2BJwMQfFBtA2Stmdd3w%2Bxoj35nLJKVtx8w3AIhAKHpEvx1rJy9KscTNARCtFSRSBj2FRdZJLaHsTuVKXhlKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZd2SZgjT66xlCxTsq3AOS4jqUFneTxYA68On%2F52XyOx5G%2Fxon%2FTlffgo75HL3iLSKlhkY1cwsdkPATlazJkFyVe7c0OT0vVlrmg8LLP8bjycinDobKkPUchbUDKNR9dppwcqipuT226296nl2AEHx4fikc2EcUytzBrCDHHHlXaNTfiqaoV%2BTLhTxC5enSWthHeCH3Ii9XhaJak7UZQFawDaSlg%2Fo1EuVg1YcPMrBNm%2Fa55esTltgxM3ZlYnLR5OZvWoN7r8B1CanVoYVzpTRr1YkQ1BYfjY453tuXZ3PI%2FlfztzZEoUGHQ6usxJkKiDz58V%2FQwW6tqpNdnj4DQjE7PMje0Ad%2FTpol1%2FkWVK3yMV6yAEjUrZHTnEGp0tKAyrYPTN2T%2BuPXFIz1va00ABT6IuU4VV%2BW2Aj20WclGl8X2Nn0vkkx29i%2Bjd9a9Oe60zmQ2k66zXjzOuDk3bfSywsNaA5GJ4YPFY8c1PJXBLELAIR7ResObYkFY6xXc6UboqHE5EwimGDMKJ8ZyUtcehhVcgq4tI8mcFWTWtrhmrvdWQVMGFIon8ZfDuiMUDFVDre9PKSfctYRG9GeXo4jRLivN%2FIQ77SZ8hoFpk5%2F%2Bf0KGJ1UXaw%2FYxrt%2FDv9BePHtzIg%2FZQGiS1Ta3c2zCfhOvBBjqkAXfhBDWfwur8DRFhZYBF0jD8XwdoVt1PvuBq3McN2N2%2Bl8i5xIYZssoifxv6W6Dd%2FM2CulvvzhLN16sMaOG%2BujssNZe%2FzGAwC8zlyCCEvkvHl9KQFkq09jPT3XKhxjv8fHYMucJI6wfEgYu5uPnHedjc6HiCXjZpdarK9owxCa%2B7vsW%2FkOYB2%2BcB64xczpAGx0TK%2BNc4z4ogPHUq4uFDaCtPrhui&X-Amz-Signature=435a32fdff2540bd7ec3c7fab2ce69b7dd7f64eadcba2192330552c6633e4bee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
