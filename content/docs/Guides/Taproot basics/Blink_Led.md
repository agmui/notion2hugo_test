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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V37RDLUA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqyU524Rc%2BF4dJgTDZMNFhGQnw8TaSS2%2BMHkB0qG8xSAiAzTs6uWRATiUSB4cKJfL3NTfkW49fPanwrJ7Mai4H5RyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGzLq6uB7fXEtWrLFKtwDdKheq7XtLXAV0yt2Eholz04IL0zFo191IEOw8BQ3b%2FcvBbadjtZ5MVLLadV6hFuBi6qKtmSRUGqTjgM8Vrb5t%2FyvLofit%2FLH0ysDspPQcr%2BxOQTnVlbAigd3uM5PyINh3solFfQ5XuVphYSvWStWgeJ%2Bq4SWQd2rHH3H4JuQfqNbg5mV9JOoakeU6mgh%2BExCYLBAtvsM2ASxgkWkiKFUsG4%2BhxORnOwjIw%2BS%2BpzFqCDmZb%2B1QWLmY6l1Ke5O89o5NLTSjcqpGcB2gvFAwTju4pTZAfclOUyQIIBPnHurRdvvMTLEvF5M2NmBO%2Btrtk%2Bs%2FfJLgkoZMmvBTUiwPrsz%2BgsvEETmXlfXQwXD2zWTl%2BII2l8U9RoVZVwcxcBQQK9sA1oSLsWik8vADv4KEn7imNhOtcLI2H%2B1wzkN0iF7o1K8vqZS%2BaLBZ6j8R62OSmmf9uPeouYXmnh5ZqQYwo4CUmOUUarM3sn9QPZLtV30brTZmlIWxC6OSbev551%2Brlam9imG1YOeo%2FgO%2Fc%2FxwkuucsEuMx05cLdNkaTCslDRhSGGt8AP8A%2BN66Ar0N7RCKZSfufPmm3E6GIkA7AOt53RO9daisnTmEDARqzYlt9AYWX%2FOW5%2Bst0y422DSnIwqPS3wwY6pgFngeEjkIoJE2S2f1WnmkvvHatSmYV%2BrgE%2FFApcH%2FWftMJC3yZf9sruopU27WX%2BXrrM4IjU63vAux9kjN0QTJw1kslSuN%2FKZT6ORzhxUEpoLXTi72mmkMxroT89GlYeclmrK%2FtKdPQxKYDsDwc3nZiKCWyAKkmkkKQ9pa2XfmHLaRzE%2F%2FV34405PHYqpOYa%2FmYfdrYcl2HwJukvL0CiltfFmWssRerV&X-Amz-Signature=ef08492a69368e2a100d76194af66a258a38f59d1aad398e4bacbd1fbd778530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3XYPTMI%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHosCMRfG7VGMs07jUuXVX2dh9qkZdWhnVMrBujqZHA2AiEAxV02gQMARJKsQOJnWC%2BAdx58c4V3lQEd3TSqBPlX8dcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNamYZWL1riLXZIYuircA7laNBLa9VDVMbeB0M6K9N%2FGkizDupDceyy0eh2N5nRLTaIoCR%2FQOEU%2B8LixtlzIWWKSc7SmxhE5XeenyF8C5KSP8eRdtwuaHkpVpNV2CO1HwdpOiipM%2BCAEDj7qFXa0ZUuoAKzIJ9QYWrHu5Q%2B%2FPagw6LtdGRJWaGJ1cdted0v%2BpJ0YirNKkHDGtlOy27cptCK%2BHtNY2lDpOrADvoMe3pOc4bJYFbWahNL%2FE%2FWg2FWA8t9DZnDJ0fDVj3qHzCxpjgilh%2Fs2kTtderYGH2ZHVU%2B5FQQ2IgkQnQChBAR0Hqyd3lWw581epQhMGFXfXPUPjOfK8SKQY9kUxaiBME5im56fZFmx2T%2B6X%2FafjGQl3JtZY2TLCpNCR1D52isDnFO64jWNY4wufldFgDiGAy2MA0bN7vSVGSgY9wrZ2i%2FeM5RMwn7mcRSQ3E5BU8yeMSp8nWP2oZfz9LjJpMAbwJyn3DTEjvLZVvJenUdaNXMXCG6Fv8kLY0TgwzILXn%2FKg1LoHrEuWHo%2FXIaHGLKl7aVqVl8dO2cPiSx6RC64Eavk2JiDwQE9YKf6eRPjWC7JGNd2OCewF5CydxZSoH3pMgo9pQFrHUjpaW9TbKSIDhJhum48Sf0BWEoCZWpgOdR3MLj0t8MGOqUBAf%2FNg1Ejf8MOXEf9prD%2BbXl0HbAqqlPBUn%2BxBE7fI8KBDUF7ogSF06aEZtTIwoiPtExRgJp4UnR350NygqTdGGQZ0lIabb7W9gvISZCusKJOHqd%2FxX29iV7i7lN7AdeZq766tx%2BJF4vxEOCOKoYIx3rp9oxfxEU6xAhDUDpDV4qv0feBWPFPCSowzSZE6Vck9KMzN2YMH1fe7ClM%2FSQZPykl1uLR&X-Amz-Signature=2dda2528d8de92f271adc3af8f063a5957aba1498922b654e4b25a7c6a6a5a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
