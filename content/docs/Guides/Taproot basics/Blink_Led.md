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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7BLBVAQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCH3%2F1CyZRgblhi3xd7ckp7XqQHZsWTc0bzP%2BictPuwUMCIQDvQ57g7mR%2FC%2FR96oRk%2F5Xk%2FXcmX0FDcccnurH4hAw3KSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHVzHcBDye4a8rLnKtwDdGkC1ejbuh7ySayYV5CUXJ8u40tpieyFdee0xEFVN5hbAIjqt6mxXpMGwa25L4zDyjdAZlyRyjvgKJikmo7zp4N8GhKwO%2Fz5gjcY7L6%2B5Imji%2FLzYEPyUVSi6nuSiPZCDpTyi%2FLBw2gbVYJ3TsB8BKMbLwPuI%2FODYrIe4JeWl2JQ2cFSEV%2B1Anrq5P5mLFuvLc6VXjjc8KzuRI%2B7juslXxWKCVv7eZx6rv4JrdOrdNPAyHI%2Brqw7kg3KVrHi4BHR5NjsUZpRVCAzmy6H1oaTZt5JByLtDsaUNblBVotKvWK5AgeoJVhs55jlSiloABErnTqMmBonGxZXmISNxcY4qvoh9xUv24K745fs1qAwSpVAa6AbqBicRqWhclGprDd8TXV2dKjmEVjq79p2E8EX9hEa4fgigPKw9aWNe3Ceub4vbHDlJH4w9%2FVO2dXEVpFDVXhSEbX3nViHlyYrRn%2B805APuqM9bdWnY89LcBrB8TydjP1URUC8in1rvAjVUr2EbDNDHDIaY6gnha6bYreE406JjGE%2FmE%2FfC7DVePDtpNqdJJpgUe8WO%2B4xqWkZH0lW9qE5IE9T7ae4%2BQHLx6q7TeTdmVAZuV%2FZStG3rNEWC4Q9si2xdEqpHzSPLPAw65rgwgY6pgFBsUiesApQTBdtGxzHMzwrz785hiXT0kb%2BHKz7wWwFDXIsrjwBGuJaT0eYpCZccM1r3i7xbaKk8l7o3o5KfDfLbyZDNAXznnKfRNDxaI60Xbh8zPgTniPqOTRr9ZUbquowI6Cwh71n0mst6TUcfjNlC1iERHIldwrYvYpP2Cv5UPcyLBiDZ%2FI9T8Bn%2Fnra1BLNLY9SN8OrlJsDijzKZuRPYpYQWW3g&X-Amz-Signature=b31dbcd366e655d67c3c2aa3c79c7f2bab042bf11979e26cf551d4ed96b20b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJVEZ5LG%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIA53i6WpmisNVsM5o6s5ZGqjULxEgXnenD9ff6SB3RLFAiB4EqDCBP5nKZndvlDlkfqV4gPgaAzzqCj%2BCEhq0cXybCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Pg6VXfyvTRI%2F7JHKtwDHtKb%2F%2BvJKYDXfOtXhsBLmYQOCF6t6ot31ePyQq0vHen%2B3HDaaiFihsJOElg%2F%2FQthJc4FwsbTGBLaFcGhlq1LkCWtRL5G4mXaDUuS5LmntvkSkvsTjt8ty7GY8xNlUc8A2ha5LBkIaOoypRB27eoFb6Nvjr4fAFTHoEKZreb9r2tW3w4XrdbGJAtmX3L63jhZdE%2BbIe3PFtAtNCOL%2BXYJRgpo0OXz%2B%2FH9rRuk%2FRa7vmkHv5Jyx6KS2kgRk7AowptIkjdUxfC2odjuOjsQ9Odme%2Ft0uMpSTbrdeVTz7iai%2BSR94yw0Qx7uMneOPfwxXX%2BLOSjsRGIMqif3HXtcHLfVF0yxx9hzazJ1UK%2BcFauykATpkSikobYWa%2FH6NDWYiGP0h4dn9GfITQ5GCFPk%2FJSWnLO2H%2Bj73O8jDcG3TEWgtTbY8yyoKU1RbO06FDw8C70%2B4R%2B9FGOdOX3WCFPeOE3GPjCSBo6dfS1K2V76trJ%2FAikye67nMh%2BZoo4J2gs0y89yjRhzBRbeokG7c3kp5w%2FlgVlV2HaKRszhO6y%2BnD4QVLQxhxTvHz7k%2BMcCN%2Fv27Z2ln7EZzJYGUqlUDb8I3m5PmPPXAgGz3m4tDwYCde%2F9wzCO0THSc4cERx42Erowqs7fwgY6pgGvG3IGyArdDnuc5OHZXvHd5lhmQx2O6pINsskyP6RaGdk7%2Fd8WqCCfGabW0pkCGcjEN7gBqzsChUDRLJecr5QrJJfM%2F%2F7OJzpBVhPmiwOtrr%2B5biPWicEWokSNL1uzK%2FHFFYNdECo7CJy0esfNRjAEYtrWSekVtcAuqe%2BHO%2F9Ly2YxwjpdtRX4U8bKAIPpImgR%2BJxgKqymZ%2BBDeUx8OWsz3xNuejXg&X-Amz-Signature=bcabc50959aba519ec429b00c8681264a53c50b9c37c6ebd9d4619a4778a6207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
