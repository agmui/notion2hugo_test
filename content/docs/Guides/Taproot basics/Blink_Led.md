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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALN7T6K%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuRqs6THBn7RAXPkNjP36OIVFKGA%2BetPPhvIEp%2FxlgTQIgc7NL3MZLw6jiWrvuy8mVaW6wSZtSFIhKRyFO9l0nAxIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpX43n8WfxrGdZsCSrcA3IQ7YxLU9ZtugfqNrSLU4DCRXLsrPuru7gGpTbhONn87wETevvdMTADZAd7yzemKAQeYrYAvGJPxDb46GoWZMWmamw%2Bj140dC%2Fog5McoLX7ktYbVilxXRA7jpEvVr%2FW0T8VUiKiJsYPxhS1JIBG3H5GyaYb%2FumUJblvcVbS1j5F8W323XjWSJicwaxXQNzM5Hjw%2F3SFGmZkr6VBLHFVxqg2Of4UYuKIO5jEheZm9lUdIENCij2LQVDe%2BnjA2le0bxXWeUQrvUmutQmVNrkrvGfxOK0DUvgV8roDLNJyr7hx0tBVAndHFLJOIyAMlS53sDRoiXbno279SbEvexlHnuZNaPGAdh%2Bko%2B%2Fq17I5IVuROpg2dbMCI60o6ed1NBEi8SNbOjasHf0Q2cIAqwrx%2FBUIqdm2tfQqd1F9vzMxMtrn29RWfMiJ8f9R0QW3dc8FtnHCBjDj5%2BRIACoP40Ym%2BdtuLQTqcoZNyE4EnBDJoMJk6lD5G9zU9E1y46xYZ%2FYVQzUNkcRd4jnadD5cela7lD2ZW9bDyT7vO%2FMm%2BrHHQLLiulYOpNajitlxUUQRj%2Fr0xBzRIaCqPlnkMH%2BC7ug6FzP0ri4wEnuQKYVy7FCABzfmoYV5GA0SKFyScDwTMNvF6rwGOqUBL4DW57fU5%2BhfP6B2mWR0ZO%2BBT%2BvYc6oTcLObKIE1ADrjVokunuvoAmmvyCh%2BSFSHoySRbGTEEd2JlzwGzROL4rrYyGM%2B8Qrys7KMT5FTGEUA0Hj66EzXGtX2hMHhiyRSCtRSLsPWqGZB1%2BcrwBN4zXd15D%2FFVAgtu2nmfpALGBGTFCqGMGbaO9Uh7GkV3HU30e032vA9Fx8eZf1u3MqbNhkONYka&X-Amz-Signature=75053d246ffa60f2518c61fc2744205762bfc4abfb893e48e78c111101eb5731&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7HYFIK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA79dCwaT2Rd3smYd%2BwqHfvc74PiXVNwNYWgi6x1nWsuAiEA5RrYSehhcVgmesfXM4h%2FKVpN61u7ktFRyPkputxDTpsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxbUIPpY7YxzRbnUSrcAw7JbmNch2I8mCK84rwSePmbQw7jsZj5g53g2qiBqFBD6AnJQ4Aw0JaRbDqUiTkbuUhHzdZgboZHcvp8rXUESl0NZ8q2ZI4mo4Mu9JcFyFsI8qSg3d0avBixdV6NW%2BX%2BtHh4Gd1Sl6Ta7S6VFHgkIqseNmp%2Faw%2BJuOfNEct57UleRnmEzmYg%2BYSFHQqGdbgiL6yjNnMhgKpdS1h3Mivs5o2sQwnkcHYZO2DGzW2GEm6G4U%2BV6pN1Go3QQeYGAUBuD2ub2Kgh1orAHRue45Y9A9rC2wXMxzSSV6m1Vi4qlQDEbk37jOECukn95Sa2qEwiyhnWS5FYnE4Y1l1%2Ffy6m7aI21Yc83h%2Bb4Y9tZbp4PJLL%2B3OQ7PBByMfEWv9gvTaZxVS4lnfvbhKlbTni6til8ErGB5NNP8FlQmxzmn0OITzxt%2FhKcBFv41Hg6S4Rm74M1FO1qRNlzC3N83SMXjn92xVAJgFwxUWaXzcrTFAGXLXaVO9KLFN8ey7Z271ywAIacvjP5DsjogL%2BXetaD0pemhh90xNE7pHA9kUfYSHDnl8%2FA6BsLJ58Fsl234uZGduMxeGPf34P2Bq6c6IwM30uP3i1QkkMjlbMH6g2cdXRcJ6VjX2K%2BPlxSioiapXQMNfF6rwGOqUB4Ev556uao%2F309TfLrjr670RFZUR1Y8T20%2BFKyJvFqqR59oOvi4GQ0mkPshomn%2F7I42fWp0sNlln5E2guTzToNukB8YitOdgDDBIdNP2ckW0rFAxR9v3urOTbvKVBesiseRsD7GVu%2BrbEpL0FbK9zVA8nHcsdH5rqf%2F9ZRXMQb1DSH86wK1tCA8ht1edZJHTd8othh1GSzG%2FeS3aAEBBIg56M4To8&X-Amz-Signature=138938732a955b34d6458bbfe7cf2b9c22f0bd50eadb5682c90a83917c3d277d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
