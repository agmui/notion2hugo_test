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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHSAZ2K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH5TV0YJdUprwpkcxuNa%2Bnjsf4BreZNYvQugSiD%2BudfXAiApa3zcWEHCjt9rtVbAq4hCPFOPgA9PtNzG6nWlzlz1rir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMGJ068ZjXEI8AN2g%2BKtwDQEWo6lb8uwc6PHceeXEM1pf6yvhnhVRbELbvJBQ%2FZXhV%2FsyjP%2B5z2awGhmc2IXNPPT3J3nZg%2FkPF5AadMxu1G%2FZGdYkMmXkaaG%2Ft7ermlGZsh3YWPTJybpIWCY7kqlM%2BpJ8Cn7EXREEGVFkM%2FZj7T8rjDMj%2BE94k%2BFTHBARGLAp6ewmwIZwgR9l1zmE0Gvk4fKbYGOc%2BI5mCAuQwrYP6nkx5csWXIAelJu5tt6mP9oHS3FY0x5k4dEGrJvVWllr6wbsMSEUs0dRWrkwMOk3ZO8FHbNA37%2FF%2BsRC%2B1DBcvkRimaBqdVxjNVQc0p5do4v%2BiodwlR81hNc6T%2Bz8AMAB0C3lRY18fWxzEnha7U%2B51a2SEDUyAnTJdZ9mgAxl98%2FPoR2EztsqvQoA7xEeflmC4AzlhS%2BLTZ4xj098c5%2F%2FmWse0q0nVtB1T1eYaZCRT%2FuoyVBaXlx5vjB5umwrA0Q0SiVxe59YpFGbYqbKcnAmsWBhybBr7aKv85OameNG%2FfZLtiXJ3GtvRDJ6cpZzlt25%2FP7vNzsvDCpDJ20qGfaFlUcUd0WjzpxWkZVeBk%2F4Ak%2FkFeJ%2BaZg4tJnZ9LFGEYoE9rqZ86ryG7Rpdko%2BJuRo3O82B6ER8O5oBHQK6yswluiowAY6pgFlV%2FHzbk7EFT1W4JZiEWa%2BAocoCh9JDh78J0nnxxGD9xdDttcnC7NGs7CMCnxh%2BZLZ5FHEP9YuV0RC5PIpx1ZbJqu1MO56mzfhmqmLSTTYuF5PH7XbkkB%2B%2Fslwo4stxy84%2BbDsqNcD5X2j%2BbfZuRFusIt0JPTN0N78fXyga6YSNok6W567Mz1PuFL98RC7CHuqbOZwNuFL%2BMbPOcVsYiI%2FnSsob%2B79&X-Amz-Signature=abdb13a90950aaf0d676490cd6c38ddfe9951c86421252f5ece591d3782cf4b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVQSRKP%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIDrokY%2B407UlKp8NQ5pUmtpB24SNKe83JMVT41TlPR0sAiEA0e7ggvCE0r%2B9ZkkqqHsWaO%2FvnYwImGjlI4qKqNfILV8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEXYHceijtPSBl%2BK%2ByrcA2jKLMpgPYub6eH%2BdF75lS3clVYilowa%2FBFoq1Ps4NGXtg4l0Lpt%2FYfjR%2FZtA5o9uQNT038knq15eRDwH%2FWdgIBhWJCGDBx9R%2Bz7kAyQ1eBLVJOT%2Fg%2Fdwph40wHeeyeVpXGU51x5GsoZygh2vxBFj490LwxgSSuqu4CbRWqaSDgxzoQpjuIsTbb6FMkN07atxRFNOLhnLoIGg%2F1VIpSlFObiu3GQvSd%2BSM4RjkO9Jbg5HbxDgFED7IoI30xy%2BnDzsI7c9maqM0G472jcGBNn2VWeHnjIWsplu1NRrdmt35%2FcMT2jjECud%2Bzop7VoIboIx3LsU4vUGqTccuLIEaQ7TcZGqKEgk5ZMb7I8fp5vkLhD7Ho4eS46Pt%2FycKI0kwtRSSZ6H%2F2l2Vs8niY%2BGTKv%2BwmcPfPaoUFx6TsK1I%2FCJi%2BCWMsxJNm7OB6LjkkfEkP3qii4drYURzeDjtNZoEU29XdF%2B3RFR%2BXc1w6N2OsUgcI%2FOhynB3yP2RzswRP2HneVmb7pn%2BIovOWOsZrgEyN6uK1DRY4qXAf7zhuLY9e7aLxNeXGfMGM00Hb%2F9zHKJYf%2FaQzc3fNVGVVvC5fcVAIiWzmljl8Wmm1KnK8Nn%2F2q%2Bo%2Bdv%2FgpbItkq%2B21Sr8nMOHoqMAGOqUBBCNTr2BcXWQI2gx%2FRSEYCMNe%2BxdoIx3o9d9OezQVSoE%2B2dfl%2B0Noa6%2BqGwG3HY%2BIXMX0lHkpCSTejXe5tf%2FbmE6nCRd5ib9Wv7d2%2Fzkzyy7aWJnh9MTFWxfu92rQQKeXhNH3ErxNre95B8XhaeoKvn%2BxCjNrZy0jNimAko9uy11804PnkB2LplpGNTx8llinuusBKlEfFyWQHI70CFxpH7sxyTw7&X-Amz-Signature=f1c270c1ac25607edae3715bf684dc5a62de3fc107db63f6d76a0a6eac4730bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
