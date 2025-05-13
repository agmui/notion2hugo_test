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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PS7P7X2%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDI%2BiGle0aYNJ92x50BG1SA1L%2BXwT06K7g0eWZowlzMKgIgMM3Mx5cO8w54QDeP4nIz7zkvtSSxCzugSFKh3QUeglsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCri0K2CVZ7Ig4oeircA3OWOCjXteseAMR2Jk4GdrBc5IsavmgEAgJJyHCCLWiE802mGoSFWjX4AdDg0UdfxjqY5Y3l2epiMzo8io7bdihJEjYX8YeEzQ6Mtk8zcG9TQwxAQ6vs6oajtKYHMo6f2wuhyROi6HcNRfsFYMep9vy7lnl3nWxUhffeL5u2j2wj6nOr6wsMJ%2B1LGRLD8yV6KeIUIYH7Fr6trtemmSNUNlHnsO1N2WJrOuqn3219TO0%2F8eqYhY6KAFKWbOpgsy9lAFSo4wM5in5GIOsu6I%2Bjc85bOochp4lnKiErC8oTwJZzLYhDaZSuVKRuTxkoqMLa3VofrlrB9spnntbTEY80cBlGQe3MCjHsHCyNmIlVnoUZd5k28nxLMHQnJTlPCxwF8fpIQRM8H2Ys2vC3lq0KHiiUgJM2%2BEGYyQruAvOVl4EN7M4Jnd2qoERmdSyY6MkC%2FaE8YQg61MXOaOqEKGcdaStGzJ6FRZHIU83CmokUR6cnRa%2BIS7TdYZfzFhgtuucfxXYgNcph4P8fjc2OkVLb23M%2FEuHohoqtsZrvrtV0BKf9%2BC27y71V5Y2HZ6SxXZCZ6QsyRSE4esjWaBxwhPy86NjEsgHvQjqMDtEvT8sbXNGER7IDqZTE42RpA%2FXvMLCkjMEGOqUBHwJY9VQjujv0cMZ516hRh55xpaLI0EtDzNM9ZuPEQaM60iRjjc1AXNJqF9Cc2S%2Ftmk%2BB1e1YnUrJgsI9OciDyduh5Cgzfq6mmERbP6JUFpEA%2BsxnxG38AlgNwgQZtmG%2BnfnC2J3Pw%2B37YJQw%2FYSpeHWHIM7tNEdpbkGtTGSK9CNDBSIBhfz6tCm27WECjaHi7b%2FSHBeCG7AAhZO%2BW8lLowZFdZ9t&X-Amz-Signature=acee5fbe172aa28b9470ea5ddebadfa935e115c1886b7a63c1cc4f103b5b7446&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6MRZL75%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDj21hXvQcWtEORxiTV9Iyeq8xJWQ%2FXBiOvGSzbNBR3xAIgTekUXN8WCOUaw%2BGht9SK3reWCrtuKO73AZt7nYxMphAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOvqGU9mlQluGK4qSrcAy8z%2Fx2ZiNk%2FUzW%2B%2FJO55TpTujQus3sBxG5fIeaABQpmnzuvlR72e%2BhUKVjkmtLK%2FnxQuFmABxnT%2F457Ajm0r0%2BP9x8JRt75c9aGalB%2FTLH6Mo2QHBiGnJ2hZALrxFEpQcpVLnvVtZF%2FKkaA0Z9e5PxAKIwyijo1kSiAcPCSfju5%2FwSl2MJaoPvRUqdMkxo6PwPlk1%2B39dKF6SX%2F76wMRzmKAa0DagH0zCEcH4%2F1ub4tMl2ItGB8hAIXIYY9lK29l%2BrgHLSqk8HvdRUiJL3NQ%2Fiyam%2BtxAxDtRuYqbd5mjW1%2BKsKbM7RPF8wkF1CvTtya8yIEVjuLhNw%2F%2FIY5GDeiT8DloYrkYxoGcf2zh%2BO1G30s1qVgxfxINH2hLYQFlQBd0BqeKVK6MRCAt8t%2B4aT0KAfpHDWa05zFrg6bMldk%2B2w9T8oTZD9rGgbVI0tJV2VIQnfCc%2Fe6YshpqEDCIfJC5kChOL5guW8N9UE8EmlMrohGvf0cR31EYLQlPJIbeEy3%2BreMdXkcQFKBwTy87VVUB7mZHDcdhLokVLVs88ZtgozkSXBlziJm6IZ8xFbyurzRsCCw%2BBaFqnO7BZ2qKenHyJEIOMlKEFMLvh8sJYwayamuUtBOIsFgLtZEPMMMPCjjMEGOqUBpCjDDBkFODm41uyFb1vJE1n%2FOe14c6cK0aX9a6tPF8d6YLp0mvfa12BaW6J4v1kCMPgmbSOaTS8Aok4RAtBNj8D7befqWzP5iSHdT%2BG8nNxOPAymELHKAYcEiGM12UrCxhFLqAtHvtzh939fHO39b9FJrummE9HOaB2wuT6mW3ZaU0liR%2BadxyApLI0zaIRQ5cpNh6bgDJNou7IfkeWCm9iy3jcu&X-Amz-Signature=80b2525982b28083459bb782ed1983726923a2c5558f6e4ac71f98b700241cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
