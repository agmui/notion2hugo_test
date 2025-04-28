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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF6A3WHF%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhVubFr1STRLO9FcVMtrZ3KxbISYLCSDGeDacsdSaurAiEA2LOB%2BGd8CLXIZVe56n%2BPJVIK9NBDYk2ori%2B62D%2FkOIEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNEdb62hscFugegccyrcA8RP0XFCdBRCsPQ4sfT9AsTjaYFP11KZFVMXGVe7TN%2F%2FSScogshOwg%2FXwKoSHmNHoVu39uBth9BPiKSTMFTwvhT8GeJS80k8R8N0%2BHHanijTjVxln%2FXZ%2FXCOlyILTLWHcmqKIyZtSI9nb2czb0e%2BAGV36LUHM%2FqNpwDX%2BdRDOhhUOYHuDbQuUiYQZ5%2F0piVs9CfO0QN6Ly5r0Q76rl2D8Jo7KIMOUXYeResDWGbdjj4qoumuC9OiBdzXsr2tvyD5Nf2KaOqSMOAeQw0nhIfLZFhLig0zbRsf8uP11faRpHElDIClFxqZy3Y3Low%2Bn2SGyt%2BZN3Ae2hcc9Q%2FtTzZj%2FeQQmpOts0R%2Fh0juWDviiUBUSvXIntSTvy1X2ZCDZg2Mt%2FmV2A5i%2BZEpAaG71VUv9llHxX63D%2F8CChgXSz3eXKTYaYiR8bY7qCpCjGO5uiWIT9tuKJ9TOvfDi8hrKg7BUTLPqinu84do7oq1kbcfslivA%2BONsbI6BB1ojtHg4ijTAqUrX1HJS%2BaqR3pXGsuUGz5zlqoiE62WbloaUoQ%2F%2FbsLsRlR8%2FtXF2y6buH%2BLdjw%2BWvbx4KyqbQRygOTRbIf7YB1Jc0ctvAdWqBvXH%2FQQ0f9UwYPkTS4MftfehKwMKL1vsAGOqUBk1LaAFD67EjmLiU2jwph8rJUnPPd1P%2B7BME5RUKlxAsp%2FBydXXGJ4k410J4feMDk%2B9FiAZKmNL%2ByJTw4%2BnyKDA0f2%2FdpAPRul2mD9%2BzSpJijEqnSOhJPt3BgcC5eK5TKhujE9X%2BBov7LVgj2mh4MwhLgJ6NbcxwyGa7gF141%2Fpp8doGxrmrAwoWaWsUmytyhUAk12CtPFrt%2B%2Bc3we%2B7gzDe2cyyc&X-Amz-Signature=5806243b80118a73d65d2ddee8b2031884506fe8793ee511613bae4e5d8dca26&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJKTWMM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BIt3iH9JWyp20t5LVNARtlXhkLZRFaaJMCsdxn205bAiEAkSQlYq8vY9zFal%2FeuHEvPTngP5%2Fa3HQqIN20Pt8C1eIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIC8c2FO1woBq7PyYircA6w%2BWa1lxgmQTSEhG6qvsI1ZCktPqvtXDkn%2BJilEJObqtcSdb2AJ%2BMaamGMy9enZZsWV%2BsA%2Biy2OseGeZtzjArgC8qGcmanyC9Q1h8tJ4H5%2BoFkqYLjPBrf5HUt9j4KEG%2BK%2BVGDiW%2Fbfe0987%2BflQWDosABmo1khxwSJIrsahqRmxg8OCkUVjZHQ2dCRhmkAqZA5zDlwOzNmzQPJOqwPu7Mj4eRnRseM%2BmUfijXHC2Gm%2F1L8c%2BD54x4jSyORbdzpexiPUJPMlrhMV4pf%2BI30hbsJyqC0Y74BfKZl5TRPYY5%2BK8q7TTJjZICSQ%2BwQYF87ugShwibcFT5gI6GFsYoRW07wEJAbt0rhydB4mICGy7fosNFFagXUrBHe1D1kVtPOinmTR%2B0362xWlt79NRCLsr8hFtphkvdmG%2FttTdjW3%2FrloU3mMEwagrXHWk0eOlO1OOC7TGTHmNOMRwcE4ebNAufXS9d1PBBaoM4OUlh3dKaVrzBnsKks7o7egT%2BQm%2FiQ%2FmnHSb4%2FhmmHSJtDJhAHPgh6s5aEHpUk5iTc%2BiyyKca4injNXFsGoZXVZfBvAaB7n4zgjmFv7XhxokGQZaRA0HxwEWcgktlswHJrZNRo71Aph5xfi2yxV5ozeeJCMPj0vsAGOqUBIuKw13JpiGwnZnIhncSPF29tDdwHTPHuDSuT72WIa7BrQOOM7CUBxQpoYvlVOeMyaxppouqafVFWw84R01WcOcgtQAIWNOYhArX7L6n6xz%2FbYVkdmtM4vNqf4QFTtnO2Of%2F%2FPjEsDliWHrh8RgQzcwURCimscYmH%2BbWIXmXoGsjd6xeBpq2zwQZ0twmXlrzKH%2BBTflRMo%2FA18Bh2jaP%2BVHIhZwpb&X-Amz-Signature=ef65f7736d49708a17cc82300c37a7489ebcbcb1383706e992907e2c4feed816&X-Amz-SignedHeaders=host&x-id=GetObject)

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
