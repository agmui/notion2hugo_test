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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHGBFXE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpxTZnS1PEA0zRW548yIgVH0hitYP1qmSF5oLrpQCsdQIgVM0RJMSI1B%2F0sv6N%2Bzt%2Bpd%2Boj5ji5EbmZw%2FIEY9%2Bksgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDO7fv3bIpnLEgEjopircAyEpSCTq%2BW7cEXs6bGVVCKK%2F%2F6vaaC5sBZ9rUDzOh6jZf5Z8F8Cpw3oike66qZHOkhinAyuMm4zOkSdI5crT5GWXsbt9cyi0mFNXTTASX%2Fq6T5%2B1HZzr5I6Wg6VBfWZcZBuyKZ2EDmCxhCgBD%2FJbucz9hc00xq0MhuMo%2B8mjOzwMo%2FsEvK%2BZq4YOBJ%2FTf5KrTgrP6tce9DT3dAvH%2FZ9EICH0yKDRzOPaoHzf6YYOqXdMBiGS5lRCRLju%2BRF1PL8WQzTtpOxk1mNtEYzbaFNPcjddZOePC%2F1c2z%2B46i8LvTBZV5Gc1uFeiAWtVe1NxsLBXi3yp%2F6h2HTvfmehxSOC1h4OtIUANoUXJvByRNGTr%2BR1AUwSrovDHtbQgmgK5qZmQ9ZYoKGru9P31G4JwvCHBnAifWmtW3zP6ESpWBmhn%2Bi4tIgTvd8SAJkjoKOFBHQxJgSoXq4X41CB%2FvHGsBhhgEtZmoJpPzbYv7QXCvCTm5FhqeTJAghYONzBb00Gk%2Fm5OwDUorDFwOle0l11iuXm7qlBRanBarRkboyWLOW1Jqal3R9DJ7j81VrmUCDv72CdOZ95iaQwMR%2Bx6hK%2FCVvA9X2FQOaDtS4ZFLqKPNYfusNnA8cZM3xuLAaJUsaIMI%2BijMIGOqUBxipP2HxPLHensX7ePtmqmYL%2BboUiBYfFFEe3qKLtG%2F3XvUp9DuzrwsPK0Qljr%2Bo8jhaTMzPi%2FlPMpXqOSarAyB1VJbqiVQCc2JcLAI9OZ8o6teDQLH20KpW1%2FE%2FEINRqen0SLm%2F2U%2FosOE0TyDxCSWdtD868ueNGvhxbLBEYNden3Twx33yWg7l6BuYwJ%2BuhylS83eys2lK07QlAdnoi4jWjiwnA&X-Amz-Signature=a190795dffdabec1e40326c46391718e3b0bfe95c0514054a5a4b21e89dacb5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJ5WRMC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6MeYFXS1SO2xk9qwqiYD4KA6helb8pp5PzJZPDIbZ3AIgJjLbQgMe7683p6U1YRTKTic368032z0FZVO241hJUUgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJGdb%2F5sCswOUM1thSrcA%2BYPe0%2FV6uhjg4SVSjb6PI4SJVas45X9veD%2BG7fK%2BI8qxoGA9fn15PwVo%2Bpihf4StJCdrwz2sBQggxSGW3sZHX0vMdElX24TIsryS9o1horROCHysg9aCcXVTlDMdCE%2BdwBK06BK8wKwzdZNiI42v1h84N0C5wZFsUORAcQvAqAAy%2FrND8M%2BFvH7oI2mmLiLq03ZNqT4ti8e1QedjXriHDfcPgXh6gq1T6ZQqmp%2FwclQVa2GQloU4dYrASC%2F%2FLpPqEQQcZ16wbrC0whFidr%2BSub1iz9ziqaK6n9qiKhW2VveN7ZVJLKirKSRP8TN0GqMsefA8Jb5%2FOgxIGlaVzYqT8VB3xxvX6qBay%2FTR2Ea5fyw43OyXDZ6MIj28azsmmjYps5XK0ZjG1rd9jowRn1syc2rcr7U%2Ba%2FF4NuXq7Ocj8f1iDLn1zYGCrDJVhgCff1e4C8AjFrs0ACkZSBkPJTZPjM%2FS4oU0JHW9ANUYx6yAtels%2FNw9tAxsrWXkXaXgmPuH2%2B9G24EWiOwhZ2xTUdbXaWIn2iH4hE0EtW134E0C%2BhuRfH0sviUMUU7V36SHY%2FIz5qJ60OvV0lJ4iM11Zyu11mjZWisUbAkxfgrQmzJxMRisKW6TYvWOdciqRQ6MNihjMIGOqUBMjB2%2FG6ZDwHrZcFJ3rYU%2FmYHgUNMCt%2FUgK2fFV2GuZamT0vfzJO3ddW0AMlvA6G2lPb7f7SFLBraQXA4PWUmCLBhBdLwBjlZ9kzI5q330U8rkR4HI3N3OBHm7ObFyh%2Fw0wowk7WQzISfnHe4a9jlCq0umqivPrH3n5MCESiyibAoQeS79FSv9rkxbkzAIGV9va7ybuauMx7jN%2BFDoEzuhRWnCeIA&X-Amz-Signature=2cdad7e917a345628dbd08bd23afe219f808d274dfb0c8ee72588eb0c49f502e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
