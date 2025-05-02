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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGQAK2V%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCwywbJs2zbB07%2F1ytKJV%2B8AOu%2BczIjGBqvPswO%2BYfh8QIgUX03q1bWlG7jQFQaeswXc265EufEGupA75g3j7cJaxwqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5aCmep%2FR01mdwWxCrcA%2F2czLGNDJs0kmYguPDtMM27g%2FUj85BLwn5XoFH1JxYArtpC5hencSoIpVi4UXaRR7%2FzJS0AzaeGELNSHaB0kPe%2Fr0yAQwLTju25P8eQzIiydGnlaqYLh3MpSvOIT1ktbpFPMz5oz%2BE6tRWywDu6Z4ZcK7SnJxx%2FpapCOTbLpykEsCxzyoXLCN4V48jWZDSlHd2zjGeyPmUrp%2BaZA40Jm%2FwpZlfyw1RRQ5AoIjR%2BS947DaV5iHpsFOR%2FH%2BQdAjLQfGQRjz%2FgN6a84PE6uzIsLpUcqvet9IQ5Ade6%2FfE66KqSKcbjm2gUQJNGgqRy%2B%2FBqX1VhzzO6fMIpMPXEVHFyOEDaMFBqHDtBDKkbPA47fPec%2F1g5L2m2ngN4JGxqJ%2BhxINHB3pgr4s16B2vup3SRF66TCbfrWZOJMC3E2gelyhNo01pLGBPQU2G0fPZg2iC3B8nteW2qKeavt%2FB%2BJ2osxQYJMTCFPkFDFnHUTX8sar5y7VrhNZCnmph3X4DwGZf6zKc87ECbWtO3EGdPI0%2BOYX9YoYE8oBKI%2FQBnVk4Uu5CwPAurkkzcrxeCaWGrdvmys%2BPKJ%2F8Uu7xLh0tGesDwYnzY274O0qFPHHUY2Q08io8aAnHaLOTmDwP2X7eIMIzZ0cAGOqUBugqf2MxfEzI41lOSGRWAa94BfJr4Ns4XOITTPau3f4VGD6hY5fdoea5DdhFvMbPgNu%2FKGd7Peq1t3%2FSBnZf5m9Qu1f8gtQZTrMuY%2FWaA0Pjf3ECOqOqqcZnjOpzxc0pB%2BndcHNQsfOEfVUyPzOo7Up5YA3h2sFBokjOTthec5vwSb9HYzLQ3VuCgyzwHl5%2BgEuh8rsBWW%2FL8tex5DbBb%2FGEDPlvL&X-Amz-Signature=15c786486095163a41b8b93b2dfc10ab78d726e8a83fea70d0596ba5ddfba125&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROF2X6FW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCSADAxeF3knyrDxPnSaCztH41crvm0EtDTaV8p2UhhzgIgZmR2jvH5XkRS6YnYkObDTecfh32F0sh73chRvtCnW3MqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxwbsaq%2Ba8cJ2yzvSrcAy0feY5goAQZNzObM6etqa61eoj4aiur2E27PK2jzqx%2FP%2BJVAr4OL0qJCUMPWPiADHlOYPQ7gWNx4HLLfqP1QBeJQ8Gi5DvKavescXc9srhMso2%2BREgNGM%2BK7xC%2F3XSuqUkKGrOSN0SZTt5nMvngAJUznibqnESTH4boL9iZf8pVn%2FW28o%2F5tBPNiEK4xXu7Ot0KfrneRy5Otjp8XWKoNYYNZ5iqSWdjtfpnSa%2Bju2AIcqi8L%2FhmfInpKMaV2e1LREhzh1VHtGCDIjWbZK1n5XnXZ%2B%2BYGiG9dVsKjyttdBbpkX%2F1gi3d8So1KApLZQPmP50bLti6qDQZop4uVyFciqv86%2BVfO3pqC8tQ1P37WScoiYb4hBE%2FOEExUWewwO6%2F%2FTD4Wa2r0B6ZlRyhZgaFAolrwk6NUIf8FwVF5d%2FpLfHE2am3EJZ9CiD%2BmvJkfMyBPGrBzZAMnNhB0b8ztSi32942%2FxY5DB%2B%2BKwPHBFQWydOCoRCpzv%2FGNt7f5xSWnOucmW3tl1j0KoqGDbbHRUOBYO4fmn7rnI4QbiQy7h1W%2BsJSWO0Bct2Wv%2F7Bda3wJH1ouHcCnAwS223X7FWgkrXpVdeAAM7ZyjJeCNFJXBEQf1wX%2BehwmWlA9CNmJBYXML%2FZ0cAGOqUBx8Byl10PPdPwx2TxJ7v8puhuAqRPi%2Fj5%2BhWbxH7DNQU9iRiYxP7R57oivLw5Fm9WJCgzz%2FjAIh1EcatbQtYGs1ll1DotCozhYoo6NhOfgFz%2FxAIztEA7wXkY%2BKU%2BXSJ2cozs%2FM37ifSEUbUiDSEUC5nf7RYYpZ25SeV5qs3odQrF%2FeBPou5yycnsOSbFrFPTwBY7zNH7ZVazDW1aEJ9qNa%2Bp%2FQxP&X-Amz-Signature=3fe979c17b4e424e0f92855ce34aa3ea3bdf88bca888547f014afe8dccbc5a55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
