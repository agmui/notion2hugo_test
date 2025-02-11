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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZN44WMI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIORJ7Ms6oZWeeBCMXYJPwjD0j6GGUrprnJtVag%2BKd3gIgZzgCXqIJMweazzN1EVI2vRo6%2FpCWUkWPKuA2rClfqmcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrpR94FddWka73mZSrcA6iE59hwSP%2F7im%2Bl5WqpVyLP1Aqwgt217bAUCJP77V3JuPnVpaCaIzt1rMoFQ3mWF2icV%2FLgKSQ%2B0pkRZbbW4hImMqnw8XGwEzsP5K2iVgvCMpgH4nIw5ufM%2Ftuw7O%2FLpkqNG2uX3GCFbu%2BpOEulVqsAUkcLD2XmFpsq1P0qtBO8XbozPVixo9iftPBSio7xxuvqv3I76PHf4Yd%2BzPSaXdFkbZx%2FYcSX68fRKOerqj%2BTKL1l9U2HCPCyYihsHiEVq1vhvWII4wvMAy1kHzKp1Tu55UF4lGlO8bUzEdHmMlWxOBCO4Y7S5PmChWJXMhq4qELB2fK7ZWnU3yiAbC6VFRS4ieGVEUQ2QhbgNPKKlrpzWfxFTY49BmBq3hAjJ33IHOwlOPja4QRNOJLgFjiGoA9WRnzDDjBnEL3yk7odPKy%2FUX4HXOtZ37TFrTcOQ0%2BlMEWzAsw%2BD31lvuymbavbIrWPFNoAXTPTEStwOhL9Y5P7tjgEFYHvzsYwGCK%2FOJIyh9WCa6V5RReACDYrmY8q4ugmpRGI9akK3Y4cEldh47DxGr61J0IRgkLoLnatK9rZaCr76rlL5B70WP12YDO%2BaeiSwqLAy1BNfyRyahJNZz0tOU7EdmgRMB8rKCW%2BMJn3qr0GOqUBt4M5JchJBjTDE5YZeYBiNp1BuloQFCqIuajK8%2F%2BG7rq1zVVp7LjUJHvW%2BQtggOsDUFhmOj%2F38oy0YdlCSVX%2Fakts3hFDdriWEtHW0aoLh%2FLeT83J78WF4QxLT4ffLKjfteEbe9Dui0THXzI%2Fo3g%2BJPhbT4hnCC4DEXTbvHylabgWFawYKwSFfqNn11Zf4AxN1pjGzv95VQ4Ae888RGOEu%2B5E22w5&X-Amz-Signature=c5650422d068d06d5e71337203fe732fdb2f92904d5aac29a620caa5ebd3e6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSY2IACO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGd6YRdgDky75rGCFdZB9c%2FTzvcWKFLr4Mp15CoHYLyJAiEAiyb8Ho%2BlZdTbJksdzxhfrV%2Fq1w85cH4I0IDvYNKrzooqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJSQIKH958hJVnLaircA%2BJ3YBa5Iwa2uGNW6Z4gYKPMISUpP5dwQ8mIxlXw23iE3KDOiz52LXki6cKiqXJ5X3pKE2Wdrq7dkCQqsdwZ%2BGCSP%2BQr4XgFP1TDzNVfmuOfAQJjG4kzisPk%2FTeFNsz4nZItx30IlLFRU44dL9Kgcw1Qih5t6mfv0a67DV3pf9NY9aljhIcvapXbXU%2FUkcN3FneqK1Pwl7Ce16C7A1bjeRThmi%2BLiKbr6Q91mB6nndUs18r2rj9I%2FPIEIs4K3tZOOJSfnltNrWkk6XU%2FYLOMjRyCx6K8Wzb68aIisWmB%2BZ5IzEyujPjOpXyBY1LUWsz5je%2FZHKQLlMqZYTVToyBkBh5d9en9LIVkElyClfU8hQ8C%2B%2FyoSdGwoIH2Ub1%2Fy4Y9J9RinnaoAPFVN%2FWXC%2Bk2ZYWHzwW7n8otRoJe2u3p%2F9J0MH%2BOM2ImRXmeWjoSE%2BIIf9LsgYN9UTQQfgAsTUO9PvUGLt%2BOQau1I3Yz45a9q7R3O%2BGL8RPuQcuePCLRR7kg8EFhbBednTxcc4qVwzYrjrqXTygkvLYCUWYiMW4g%2BGTinUdEzAagFMQndVQWrJb1i9dLd3vAaqXXCFOGzZAauF%2F2AqqJrdtqVAVjrtokL2xBLbB384ZZu3HLrdMbMJr3qr0GOqUB5FOG3cY1v31tMO6PPd0dGHfdrephKyEvWt5FW1akbqNSyCfZ4vssrlAaMSQdc4Ur%2FNHcvWPW%2By6kWgQq3T8%2FImQC6lvS1iHkad6KvROh9zqPDn%2FXa07pzNfrzKy%2FSyXdzNZGGX4aBipGGdR5rT2ZOegf4Ut6sUV5Tq9SJezHRrztCzdDdg9gODqRQZTWD8ENcIulUI024la54O8E4zwvZ70VMAPe&X-Amz-Signature=60082571bf5fee657fdf4d88eb0551e808c18f6d2361b242e6c551d5fa50f98e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
