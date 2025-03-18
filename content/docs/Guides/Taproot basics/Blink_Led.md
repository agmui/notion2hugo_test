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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLG2C2KT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDa4lN71NvGBVnTwEriJyLuC0NJX2TmZhWf346dysPFPgIgN2caVhpJGwpo3lt1yAF4HfJgYHLwVj0v8nM4hreNbVMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNJoHK8Ps9SVf%2Bxx6ircA4nGhbgUlQWp9L99Whg4K5Y6rJjGau7TM%2B7xrfJ0waLdteIbf97BWvLJ234n8NfaQugqzgZZS%2Fi07yXP%2FMcmxTXDeVsUn%2BVGPbr9Z%2FqmfV4OhlhwP1fMrx0pDqPwHlYZRnC3MtRbthWxtWohHikJxrAP8yUduQkXDiVoya2ho0gcks2HKbJcLRTRWi3yl1%2Bu19SLyFv9GspfiyMCoqMgG1uwaE2FYOyV8J4P4iTJu8pxvjfvthB7thEoNYwC9oPlQX3Irh3hNKuUrmmcILC0sED4gCHv6ks%2BIH6Z1BgHnhiwLXnG5QlXyQsmvDNrwk4F%2B0Y1dDCscc%2FibcStexvA5AKe9hmoHvKSYTYXF6fsWL4f%2Fxi6SUVIxHbEIZLJM%2BeTbgWzXsXqELWPDmnPwwzc5%2BI8bpaIiBbBnp6BDaXyAiPofHw5m0j00aTQ29wPUh5DTCRmzKE2ACn8PcGHqcmrdJsqK9CYeMb0L4Bb4LU4rVPIYsb4PhgUIBu%2BUzK6ZzVzadxIdcTVqc%2FrKK%2FrEPj2pFGAYyB%2FyBLZTb%2FIGMPkrGCiM5FHGXr4k3KtiUxL6ZO2QcLDQlkctT7unweg9Iqjdq27BCA5M7vqo5sj%2BoqEtgXYKbJ%2B45FTSSPytB08MNew574GOqUB4F3YhBKQx0iW%2FcxvXAQen6sqmAdtz9be%2Fm9J%2BRnIOKoM4JHiq8yqzphgIuf0Co%2F356HUrGfQFyQH7Zp4VJMB5zKhZvzHVs%2F2Z1PaZt%2FBJuewKSu9JVfYCgV0fm2H719ZnGBY0sc5uhaCZOcNeOXyx0ubIt7E7w4TyLbf8KkVQwfQlibjxXN2E5cIjw2wkJF9sGIE55T%2BiL4OWuau1qJAHmChzIM5&X-Amz-Signature=4fbc8b4f05025d44c37955b7ce49829eb94e2933bd7087ff21ad50b708334062&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PLYHEFJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDWT9kfDN3Ixtlw1ULSekQqWZ%2FhIO%2FqwvHmzHDBhLk7QgIgZGTCjrxDi4OiTTu6WTCHv%2BXWnuAfiFoUpxDh9WAH8KUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDB7pcCQfgyixlnKngSrcA5EWf545DJddxudTwcEZyQuxuEtJm8dWV7SY9iOvwHs9q9rMHnOo8DmZR26zQiaYuQq38i%2BqKXW0HdZ2KNEVS1DOavBUo5fbvM0OiBxMUHYCB2s0nkN%2F5fyfsA0dQC4C9mSZoCXsem2n2RFkMxsSBsKK%2FP4aDM2RukiULCvEr2sgOTk5%2FqvdQstd463pBpgBGl5dw1LwArjN4%2FiEcU5eJERXpXSCd7aFBUWrxp34Nksr9iIKQg7xq%2FstNMi6NdpnbJ8XD7Ld9nevhjaQQvEAoLmYJciWhfdmETPTDIP21b3nxgDMAj0BJBMtlbjzzbclh%2BJnk%2Ft2TSE5AQ8siLsNy1obsdLWnQjcGRMuOXMRwvfS2raOY%2FV7jc%2FarHFBGNXCALhjDB6%2FG2gesRaWzb2Ws%2BpLNWW1NcTrM28ogXTFVtpl4RchArx5Kru008wA9iS%2Byn2T6kkWaIwdAnq7oJuVjxa4wTaufsT2VR1BWyJwxOxzS%2FOLGp9KhXtCF8KqbhPpujBbIVzRyctaRsBUX85Il8kplJ%2B7GwP%2BWrwrv2nNDTMqjcUo7HyWny7AB91nvw7xRVOGcUFqgIox9zOR3ZqEWXOwBV5i%2F%2BYnMUMjKlj%2F2rzSai0NJot2vGymbtLsMN6w574GOqUBw4EvwS%2Blew0OaJQXGoQKRpqqCDRLMqPQPt7Sw47df1bMEXrX8PuSPMuw3ONJuExGLt%2FjW2vJCv2gIgDwVg01mYuMvyUaDHgqvd4ad6TXA3RwK6%2Fg6YCOKCP1ZqvpmuHobpWnMaQtueEYtM2wZkjbsxFiGBa5icMV6Zx2Ogb419eozH1PhLkBJERqCtQvGmMCEYRBnSrJk7891estFP9PqX1pAdmZ&X-Amz-Signature=6450500624b746984d6e7484b5a684008ee5b866fb4deb3c38082686f6e4b411&X-Amz-SignedHeaders=host&x-id=GetObject)

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
