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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNGXERH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcXDG2nBPMBcyToDiK%2BT1N5%2FbFdUhYY2506UwPvw2ODAiEAv1bCfFIBqci0%2Fn6fHrQYoxLAqD3yV0oCpLttF9x4HKgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMymfEbZh7IU9Baw2ircA8K%2BsUQixHqftDtJWWJR19RKwEPv9GmYApNY8YtRhrPDnlWD52wnVxaO%2BCtMHqc9jKBEIwp1EA5fflAW0A3Z%2BYFr1skiZ%2FJ4XlmfU4ghL2UrKfiGT7ks3YzmPAKvGFlHUEEnRQJn34Py5yUaPLDnLta8biKCphfrR%2BxKvAMe%2FVPxqaVHtdUwobn3a2QboM4vLX8eNNK%2FLKC%2Bv%2BnZ3RJJJ50bXD7Vxocwq9hdWE6V9tMFRk8O85P%2BSAlvstbOGAQoxlG%2F7H5V0Pb%2BUYL0lW0AoETt4VLtMvrrqWrjvz6t193xAGNX71tnIRDIxY7MiJTEmGetx7RMJU4PXTHIKZHQvIVW2JN93Yr3k8A5FgpLa6AjHb%2FGAuSSwloZKfFw6E0P%2B2tk2bNNYICwkyCb6a1oIgMs688AOWZXaLXH6goBQX%2Bv%2B1I10s9m3n7xQMrsetisjM9j24Ct9wj1qVx%2Bxvr34jc7UYUgAjL%2F27vJIcQnLs6jopgnsj4WIAgFaMJuanppxz2JtrWOFDtQKKKuQwTnaJ%2FLii5s4NMf9JbklZbtC1BE%2FdPRyMVBlyUyLkh8lRApgPwAZrSxPi07iOmRt3XKr1voFoTtU%2FpzzvICTI7DMK5NjFnuS8mLUZaev7jiMLzLk78GOqUBBaka3ZAPtye6Zyp%2B%2BOAz7XSMzcoBaGcAPxY3PFPzITpRlqVc5D%2BJpz2CKqWpb6T2zMw7g3qK2Dn84w%2BXRu1nY9yvhlu67NrMpbc8W2CMG6yc98yao2Mf4d7PcqJZR6z4L%2FbyyOw19u2aLol9pnHYVr3qxGiR1AZ%2F4S4OZ51lUtRgFUiXlo4eQ3NtUDje434wO%2FfANFdoNn5ZjWE7vrljjRZ9l%2FeJ&X-Amz-Signature=a51f7cadb76f9f7e2d5077dbe73cdab4facb20eb4bf4434341eea5c1793a7589&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662276PXKY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9ZgEU6DwlYBOgqPWfw94QP02i%2FPzkWoaktCYH65ks9AiBOu2%2F9y5BAe804C9ZMsg0FSAgXq4P5S%2BrIhtVyFCKT%2FCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMa70UzmEDg1ioQO%2BFKtwD9R2m58IA2xtpRAqZOn8%2BqxqVAtNk207oE74yZqkcrytYuDIdAZ6HfF3Z5KFYtB%2FQ6zLXytllW7nCmx7HJkIGgf44xoBf4eQ0fz1E2mXE4%2BpmyfTrYBBd1elxez27Kv2728b5XTkWpIz7lDQ5PsZmo5Bdb0n9VSMIXHzrU1N1Ru%2ByFSQrPOSaMtDoFxxX%2FOFmhjZWKiHr%2F74ceiLoHVE9hVDSOMmo5TnbR7oOIUtKVizSjEII7Sx42TF1RcDGTmflWR0A9PnADwCsf59PQFO12sDZsaaXHL9WFVf%2F%2BG%2F9LC9OJbFIpoCqJO%2F7LzmSVEY%2BvZaRrjwdjFdKE5qfOEGThlDgJrWTURtdqeiQBkuVHqehuho7Py8bzBwfIIQvB6zhHETBuhBQteS3s9Q4ANAnnNOoieFHDnQhCSbO%2FBCQeQQO7L3Y8Uv3o8HEbRQV%2BZX3PTyv3fo9Z570bvdhjdqhtHG1ej8NW98L7%2BF1%2BsJTlQ%2BLvQkM1QRbPRQYMWdNHk3lH%2FQc1P1cLiPhodt7t1CK%2BB3%2ByKUVom3gLrq6MH17PGUXIBA%2BaDWv6G%2FFhUXbrWeomWzCM4GHBZvgUzSpIsAHZ%2Foz2vNH3iQgqHEaBitSNY%2BFLmJWLOVBXW7M6LswwcuTvwY6pgEIop5tmY5%2Fedx0fBC6gHoQ7yLAh9dd7b1IN4%2BVenjsVFmiKhf1R%2Fxtp5IMP94ZjEYBL1PmeY180DiISeMNGP8NeKf22dAcTKjbKCC4pdcpXJkebvL3Tlcg5PeXQVPlM8Y9aQ9d67mjlIskAJaaQ%2FkPBNuZcySpQl1zP2%2FykyXiA8rTPi7DXXE6WPKWkBgkWAbmIlGegFC6ayh%2B%2BF2GOKE%2FFBxnp0rE&X-Amz-Signature=3f49986d06c5547fce62b36b87c7b14a8884225acdfc68cbed97ea042503a75d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
