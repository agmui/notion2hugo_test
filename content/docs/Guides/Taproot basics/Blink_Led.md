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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5K77RVE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIH18s8j0VqN8v56Sk6fe7FKsEhcBY4sB%2FDnPiOkoEHz%2BAiEA0rLM1vM0Fe7Z9i8C8Y9Q%2Fg64N0lqpnVlNZE7Eud1ET4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDO2Hk5G4tAN1GKfIcSrcA3uuNsP9L9giGENJHjYDY%2BtGdIeFc6JbYKW9ojE6Fgec60%2BEubiGtsQpTFkASDgJq7KOXV6sZQk5KIq9PjSLeMeja1fwyqHASwUkkN%2BagGdMdOFCcVYxUfefQ15Bf%2BkWcVuwlxMRXd92d1lMYRqV%2Fj8ACuz9ENk9bxQgACq7IMVHZRLrIPk6ZvvhT8D3WQ6kftHROv5cV8doye0AuUJBYpwxCWR3NuP%2BvdftlCvLZO5VJ%2FigwGm0hhI39kAYcAK48PASJ%2BxBm%2Bl%2BQSJ%2B0ABgng3ARTH2Z1AKV4yV8SSK1CZQDFq4NcUQmh%2BNhw4qnadbRmHwWqMGQ7eOsYuh86r043VFynU%2BLIGUcuX2CI2FVsiczQl1bx%2FfKKjBcUWdmSDU6I7E4o0ArMPzN8X81yaJTrrvJCO6exhIiEDNxIR3JE2g23MLg7CVgZXW0LHcG%2Fa6Mmx8lU3YBb%2Fj6VjGp6FqY2mvJCrf0tsw67feTLMYvu%2BIfCynSNBmC0plEDAyk7%2BovG5PtHQ4VDrYtYF%2FYz8LI5K25iRAx5A7I34v8zNI3yKAORXnucft4MNV4w0e6PnR8UhZ%2FzenIDcdqrx0YpiO%2Fiq72hN9WanQya3aS%2FZTRoii1uwzOjQWL%2FEmT4ZSMPas%2Fb0GOqUB%2BU%2BWhy52DMrkbhGx8iBIqPmItbEgEDvrK0slawtRBHgAhoaKEHTtola4GeLkuM79Ak6gLmhTZzU6OC0EJaoJ8BRA2NBCTuWL04i4HEmyNoO1xe34Nvwn5OkqO7pk%2FKG2ZGbfsgNhr6pSLu5XmB%2FZsP8%2BHsJiCFz%2BC8xsPbrKZJ0h%2BPaU1Rk%2FE3XcKvKUjHA2WdO7Yduw%2FSMbCCUbs8VxvlWQJBL2&X-Amz-Signature=a4eb25cc56954efb1d15790bc0155d21c68aefc6412bb3b2c3d79ce129c7b5cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZVZG4R%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDrccPfLS5JcbEh8ABhXyhf6WY%2BLZZl%2FVKPgVaBCIBBPQIgCWCU6%2BBX4npRb087oPi49uxmnxIpay956NjYIaKnOu0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCDyIjvj0Zn1Bukf1ircA1upM1EQJCWLdipBRzFmIuAH54yO2azpV1atLDFD5m2teekYqyQm6ckJn0bBfjoCdp4SvHmDW0eI%2Ba9%2BFOGFqNdckgkGg95A7%2BAbUcQiMM2MNU9rkJ1bG1G%2FP9RnoR32HywmDPzp1o5WucCFZuqjc4F4QxfLM6GDp1%2FJAv3BjnADsGtt7oA5w2iIrLYJwqNl6wrsJJzn%2Fb81iURYhGaWwk9L%2FQcTvQUNAbe3iVXSLEKOORee5LRAvbWqB7a72g74OHaKOEnFp6QTpmOtKA%2F7DG8e1C7yEj9gnDA27tfq8EQfu6DKacyRzIfLWiiDKya3AsJjyVzkYMIry8bMlhmw58X7heFIs4Dg9o9lcI240WcbQy096dJ4EiCtqztz0%2ByigW36asBva9P0P42eBE0ZxzkoCov62OmtrEVzrO38jOHSkRvBgEkQFeK528L5zeoqdrhbFabsNwsSq80YceVYwc9yKYFtQUHU7FrUSgGIqzEMa5FqUcQt29ro6WfYHNpsVFFeRnV857iDZdSmtVIdw%2FsNi%2B6BLxAHi3dVVeGcggeRlOcXkO%2FXPIYrXWLK5WIpo%2F47r5lf3dhR077AuuoCjPf%2B3ZEKRbbyQKcr4QK4ERRDrXxZzN87yECeNN1nMNyr%2Fb0GOqUBhnzzIiYP0Oc0VNhg4T0RuisYr%2BzjjKlz094fAmSf0AfaIgjY6MNwaYL%2B6NwFMzOjjXi34BYvVkDuXxG4pd%2FB8gREWqF3uztWc8obNS4SsRC8Ya%2BWWbOY8oEUqlN90OI47dJurbeSi540PcphMmOVXjckpcWrf%2Fa0jVK%2BbkEaSy11LpiQl%2BSoVRojoHZvMaZIVn0V69cGyt%2FH0uOC2KBQ%2BIDmxC1u&X-Amz-Signature=573bb5968993760cfb116d2dded7a45eb38ee94478eb9d6261215cbb7428f3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
