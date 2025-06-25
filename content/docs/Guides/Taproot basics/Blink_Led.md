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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDH54GBE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFYjjpRG3UjiK6CYP%2BgqQkypOUTOekYwDXA6ltVfgqPLAiEA4UFjzdWtZ6iU5r%2F49xRWo0l0rwawzs6HiNCkyPGqCwcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLwBqJwJEl%2F7SaofmCrcA8xtD2rjYX%2BiVFElBX6RSxGwD53ZjGLKZvOn9KwumGh8sHRuUO9l52wRIxel4lS%2BkyzRArEjFz6NOSR6O7xtCRhQiIOZFKrw2oWjc7a%2FnameCM2OPW6JHpoOVKua9X2Q23%2FAdqFkmwF%2BeO806iYDBXYJwRjT5wwElAt4zcfLlzh7E41CvEDj8iPruDEjcu9LQuFlTD98MapIj5ZH6bYLbl5qpw%2B19%2FnK6khUmGuj4wnKVORDsIVmIgQaDbg9hso9UjrrOBHSbND%2BJnQGrqB%2B4U5xTLuq7ephPEnDDyAt3zNhL6ap47RQp8RMMP%2FVOTtqGapIkYESOwOCNjNdz3XIHxxt45Uymb8iGbu42oamcb7KiHmFICG5Vkk9EyeuWnFJKLfitdBV%2BWnRDRBLVycjh5clgS1tDXwMyy4QVXcHK1%2Bt2yekdSqM9pnd5nKA5z6S2azdxGSN7Nkp6HjoCY0cIfZCMZEptfQ%2B7AXs9JH15K2SNenmzcFppC8fQY8QoUCKYr%2FKxKKYpeWwRCGu57UEytu%2Bmy35fivjq3ZVKcVjfokltROH00PigCtZNRZJGPDNnMhbpDWscYZj3vRqgjjwbQYYdnOUKYKiIR7%2FwIFEjYqiIwHSBVsBwRh%2FoARUMMrg8MIGOqUBu248uUi7Cph%2BpDWcLWoZuxaWxHGRkF0RFupDPOOH9S9Sz7YiBT85qFfy6txB7AYH9qk1cm6MGZX7FkL2tHgpciyRibRfILx2jai4ke8XIr22JGZ1eOfMv%2FH6QGE2IR7TUZyGD5Sd3%2F0Yd2xk3O8oWaSO6f3QyMtfuRwA3Tvzh4qRJh2stEJjLg8zB5oIaQyt1AxugK2m4V%2BUg1m%2FeXSE8wTiuouD&X-Amz-Signature=5ee1564ef6bf4ee83049200b11f50c8a3fdc86bc6e618c0ce4db040df80d6488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTT3OGR6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID1P5H4YakmmCe2y7a3PDWlnsywAmhRrL3vu9C3phsWoAiEAqJH0M7HV8uLYdUVbSNAJ6NB6YbQKmD1UPW%2B6iM%2FPjm4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDErNmYhZrPNe3fC11CrcA15rqnj2QvNGvoX18syls6LM8e7qDWzQq8Qq6nUyChJKE0xCQ8pWXyWmYcFfJAcBL0OZ7NuiWpCCqJ6Z1XwqUj%2F8baekvv%2FUTM9NTQK8nloIKqX%2F%2BfWtasD0qKiMCSgmgX6hYKsNzVGQlArayqoD9ZbHd9laqfcQoa3xUtqBJgp57loTiDTA6vDAcIPcy%2BgKXaL4lmGdv5wmXF4k02SPi2tJG%2FKTpnjYJGNqtbDMEnE2KQSjJW7i6nJ8dflaewiB0w9Fmoy0sKNWPL1otn9G0iwGPUuMq1rhn8Yfc6DBiCVmqRvCujtUI%2F68HJWfC4w1OWcCEZwTAkEtd9keADea3%2Fb94n4yt7%2B8Ge0p73tJp76ywzjmvvrgyE2gn2VmEhfOQbMyh7dntbCCBPz%2FPvSq3Romu4sQG4Gagw%2FUeJNR9GsNEuxFjMecTZ2v7JMfknmgJZFBalF8s88CljDkTetHKk3pexwvr8Yd2cfNp6eQdLeeAztVDCqzm90jTeWMB%2FTXLD0Ltt7o5fYgwZJN5FQrxQXBB%2BtX2zsQKrm4ubKIEtwKBm5D%2Bcq5p58GnmzsTz%2BwjfIcunMMp3ByCJtoIxm31bUGngX%2BhgM5Gj8d%2BB57XbGI7oFoC%2F4swmRu9IK6MK3h8MIGOqUBSnxkJ2jTTqkajn8iA%2B2AiBfjw8I0br7gpdxia%2BskWfFsDV78ikcdZhOMwq1YGg4hRspDtPvwM32UtLoabAmLYaD0EiQTJRkdnKwzdYJdK%2FSTrF5NQmx7c4Hy1koQZB3FKt%2FcrwjCwn6jDWRfAK9%2BN2G3POq11eGeyHH9X3vrpAROxPXw6bod%2BGpg%2FDY9EOo2S7Oz13saQPXEZ6XN8WPG9RgNPfYA&X-Amz-Signature=79e51dae31419c20d22724a310b0b038ed204342cfa7de7ccae84d016177335a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
