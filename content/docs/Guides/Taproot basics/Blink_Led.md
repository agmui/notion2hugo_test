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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647P6AUMD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCR6tNHEkzH%2BoShh%2F3dw4pH3pDpNP4QOEncwB%2FBBDzZJgIgXtNCct901RihJpzP3DFO7nGu278Dle14JwIxx6FkDIUq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEaMqyUTHIngvwxTayrcAzQFTyepOgHWODgc85ZeAw%2FSKmTmroi%2FoMnPwbyWiVX9yvq83YQzuDGdeWI8IWz8lPY8xVQxrkanA65hHRFS4BNClDknPdNHXEkXYMDhBh1338n3aEAy%2Bcisa84jSF6c8qw973Bu1j29rpocrPXtUjzYspNYDo0kT1HupvfVh2PqI%2F%2B3qgszW9dGJQXHewOLGuOfMSFfMu5Rxiz8JrKmPW%2FKMV1FfyjmNcf%2FfRRPo%2FjuCTkearUYvEDiVB21Y1rmCWNgIUEXtW06jLiK8PIUg3npCcOonDGrnB3V8uifYhpRjrLgZYwBsFGEbqb5KgvN6EL0zjCCyMDOsFCYh910obmg0c1pXvK8is5g%2FDls6ZmHDaZV8AUP9fGQkmzqElaO%2FiqFf9aKmOF0uWr27GR00SO742I8o30C3LU4Vpvf8G%2FQSm6hfC7isxaFTWgjMo6ruSM5ETgj7%2FxtbeZJWBL3UWBTlH%2FWJAGpqNjpEG%2F6CCEBic8dyQyOVFpjEtzWtmHrxl4piF%2BYPC4QWyMAcj56Jq9dVr%2F7f9hbkZfsjqs5H1%2FrrtM%2BNYsToKP0c07FwPghswXsJkZpXjymbAJi1RQjhyd5qX6bmTUmvZ%2BTfYewIRYlS32zxPhcdm0SqATYMKrQjL0GOqUBNy6txjMFjpf69vmp%2FVizaO2P3fNQ16HnMPIWB6D8E9eP%2FOzH0mBLObQEj%2BXmTt0gc8sd5TO0aJbvhpWL8zwIMh%2Fw%2BfWJwCLESpfsxGcqUcI%2Bkdro2jcymQ97b3RP70MkFzqZWEd83Lks7lhOMceeEGNukiACKiFKFU3RiRUQumid3rs2v2O7D7f6UJH4Qr048MVa8YGFv6Rk%2BMetSujHzVOYyaB8&X-Amz-Signature=fce41f360c28df345416a1678819f6787e466dad619580b20693c77b08c3d5fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W53RRQY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD3L20jSts6sS69d88EvQfYA%2FDI9ScZk8qSq%2Bs6d%2BhIuwIhAPStOSmbGcifr333yK3Do5LlUp6rMJfzLYHllFi4%2BT8QKv8DCEIQABoMNjM3NDIzMTgzODA1IgzJ183NYrcfbHCbk7gq3AMuyBAWwUV%2FVQ2ewpRgI75zjWhw6a%2BM7%2Ffank%2FN1dIzh%2FHkQo0LkFg3VfO9K6GxNtnB%2BC7Shr0sQ7kQhuzmWQzFJRTv3SRloakflJrFWkV%2BDeuFp4X1OrE%2B%2Ft1r9DaqNIRK0ymc1WRg3HA21vasH%2FNCZFLgsDDILOLfFr42TYvtJXTMGk0y9KI%2BE2pJ4EiAyp%2FnC7apluRohXdp8dzPVyibtjsdV7cFngJdz7ks8ueynXLzuJD1RSPd6BPTH5PF4r25wT4Cdc86RvAbyQWy5RYL%2FRAf55qPcZXgbXu2XhqMk6N4xlQW%2F%2F1xkDiABwmujt3sPCIQ6DL3LlTb2A3su2A%2FXJ%2BduuoETyPVFEnF%2BS6EGLL%2Fxfhcb0auUX89ExqtLNCqVnY14x3JDIl5yDNkLZs4vsaLei6yRmevLC27zESubFBKZ%2BErlxeiz0klYDCS28v2Drp5QlLS%2B2KeHouR7MvgU51i%2BeGyK%2FSTciYOfy7uhYac6J%2FXsJ9zg%2BtbjKUEGxf%2BtEV853Xxw92lJc5zzuxM5g4H%2Bs%2Buxa%2FZd4bAyy0urgkqjJP1Hhu2fcDReQ8iQf%2BKjMEAirCnPXPjMNxtH6%2FY47jhs8D8EczFWfjzoLbS5aq1bsQxhiAmmnn64jDT0Iy9BjqkAV7GSrY7vg9MAmRU%2Fner9cVaZbD7RbppK3OIlyZlAiFQzu84EelDWSBcWI2IAHW%2BMYB%2Fi0Xs8zUZtnQ9YLn1c2POct2kqU77EZ%2FkiD86qOnVY9%2Byt%2BCnvQVS65KXPG4NFacTE7J8MDE1Mmm%2B4jVAm90n2XIzj6TGkBEtke467Z30nhhDMHb1PLg5EH6Ojf%2B01wHuyQd%2FYjbtoypapDgZEyI2%2FE%2Ft&X-Amz-Signature=8749b8ab8b036dc13e50ec3b01472d5c0dc0c44ba2aae805c305ab11db12e120&X-Amz-SignedHeaders=host&x-id=GetObject)

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
