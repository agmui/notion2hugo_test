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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNA7GDAW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7G2xTx%2FgaS9D3bg9WesgpB48qR5l%2FqCiin4I67ZA%2BUAiByr2MQYC1YsZzVsl%2F6JvQPJF1r1Q6IwifaG4S2KOxwACqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2BKshbJWOrKLddFNKtwD9Vx%2BH5TFatU68GiJgc9g64NeumxF%2F2kJ%2FszLaWX88q5kdSZgKFywikS%2F5simnGDSKP%2F4AfRqQ91Jm0BMO%2BcFafIZKJERzbyDFFtBv%2FHXnAt7846wgeLGsz3sqW3SBGORSurhFikpDtFk4Eim%2FPaGCBTRBhUzodg3ZocIBJlA9JAFyVqkOSixXEVUWFApbVcKVrwTo%2Fxmz0N8U3gwfx%2FwGjNvIisHGQcf3qe4KqBmg%2BU8tNESGKr7Zm7EF0or3Z86Iu%2BmSTxQ%2B4rH0jj4k8TJ9IEV7aaYUkGQnWP%2BNvj37TvUQc0qosTZMPiEOP1%2Brk2wGrayuSwAhA%2BWfpXwfWoQ8T6HJ2NXUnDo1RFLFosTzGBTSQzxpyslHBWG1oCLioME1pL9ZuGmQ7IhmduWxqtHuMxs1F4fs8Uq1b2UxsUn8aqm5CSh2Q%2BVDFCb4h9RcpeX10RKsg11aA%2FBOwDz88598DYdcRaKjXwSqfcfLWg7YQK0D6KnisnpQv5vbskE5IfdztlI722IHS01Hp%2FDTrsf5uwvVPuRmBINxs1dcCYNkUxoBC8KzxPuFJeR52p%2BrdwTY0UWYNcVDtbTPUOfdOb6Qf8CliNbt%2BLu0dg5%2Ff04xuNCbt7xPi8zFxJrLpYwj9HYyQY6pgEZ51qUIqZB0xM1d7QNHhkUGWW8veoVTdpHvnjdoHNzNw7oJHZYHNkfrmtV%2FVmHb9VSVUdN1VdPSn6gVgA%2BNy6CiVrYMP36SZNfJd2SSwAK1fgbUjyc3Zedqg0X%2BuMRIZed46dBHxWECMsLge8k9C9A%2B2xRjOuzMf3XQbvwDk7OBa%2FYw%2Fb3mROGMuFLsL0NxRytyZSi0g6wHcP2rOfG%2FzHk0b3OS7QZ&X-Amz-Signature=6b4e4f598d9855f9ceb5a0d10b2200363d81ceea5ae77196b8b175bbfd890840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUNPVDJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmbp%2FlDJb0EWHp77%2BCU1RFDRmVOi6ZRkGcvoaHKZ8DeAiBtkKK8V%2F7%2FNlq2150GG%2BGBBw%2BglDed5jqcr%2BdioX1PlCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYU8uhB2tVxIyprsDKtwDBrcH%2FOOW7fhyTPnIK71vo1uZtwMn40Mr1lz9E1EtCY6fYANSZX%2B2hwgXqgWK8yBWu4HPSl3Jq%2B4gpEknMQM69wVQ5sS%2Bh1TynBU0v%2By8%2BDtWFBkG9NweQ3IxAf1unDMT7Whu65OHG2nIXkYC3N9ymeLVj6uUPt1BMzErVq16Z2vfI6ovGtdaj3Snc5Ram4qUUxIJE6BQD%2FgS6%2FJG9HO%2FPVYIYS%2FXJaLZgL1%2FCBKVqexQuaTErTQENFrKKuWoh5xCY0Rgtw09g9eakaWq406TQZQETCNYDok3Aga8IlLSPRY16uJNCYRf2YRSN9clz8t3%2Bg8GeuFUXDMrQHAjS7Zd1vTWbk0iMg3Hyz717vTShKImknGM6u%2B3S8fwS%2Ft8JYyhQ%2Bh9hqo1tWR8czHF0LzBQ4fZE6XxdlK1AEiZujSNRF8oswVIFbsvA1nZjECWDsYDrAvzTekXljzoDYlE8TwEeFkUGfSq52GYgU3%2F8vVi823AMS5HkGUx3LbUdks%2FXyxcnPFaMr7zPYCBXnlAR0oCf%2FMUMApZllnTzIoixYsl5fVghCFhI%2FwlGSjb7L2%2BVe8vY76r5tVcrln%2BdUcR0wrN%2B2K9f37bCBmJA4ni3jVqJLdW6P7flkC1HEOJQ%2FMw5tHYyQY6pgGOAy%2Fp5KED73CMlcIaMwnJUTW3mlUJV5%2FTJetRFPOrFLqWKDziOLJL97cwVNPP36I9QNKsKGg853tYHwdzPX5z%2BgLMoLnDQmsdcF0nbcQaDtx6kedByXJNMSPMSK14V2%2BDTDPDVfOzmpdSvy8Cc%2Br%2FeU0qIqf1KVdjK1jDbm2fn%2BgYrtDUq5O5s3iLZGLdrByLB0uXpv2s9Auw1ONDd75iC3beX58G&X-Amz-Signature=430caed11d3c4ac0402b6759291ea24cea4c77b12665d2db1b2b34c315521317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
