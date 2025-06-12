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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423YCR3H%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFTh%2Bxw4MpMdivyXLieFWXiRXs85Fdh2U%2Fy7mj%2BwuajYAiEA6D8%2F90SQeXCHDDUQIFnPzOFqCwUZJI%2FECA%2FgBaOsUS0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2B8jcLW2vvZqPM1FircA9IlC0bEId%2FLCq3nn7KdB%2FEYQ7xMkekfNa4OK7C%2FJ%2F1RvesX1IhUtAEsFnOwavTHHpLux5GEs2Dt2TV0DO%2FDKyGmFLMYLKyzr2RLAyPu0v3jsHVorK8pS4C0Ry%2F50hvRWUcjCPrc1kxeQzbsoFFcyBXgSzDzpMIeJ5xcY4FUOKmZg6%2BNxOJDatH4y%2FFFQrTpPakgK2ANbp6dwT5nl7M5lhL79j6GEOa%2FJGh%2FZXjJDnMY61jZBuGuRPkJARfPOkdFya8%2FbsaZM1%2Fa%2FRQrnY3abzcvl35DDC9kN2ScUITlHB76knyHf8cLgCcYrCXRwREPm%2F%2FCDc6Pdn2tCSvlgdAI02iQ3oCoCGOhn5LLjQekDBiT%2FZ%2FdvuuFii1Ec6%2FTBXfhR3q5qsfZ1LZNeX7pFX2WM0ygbAYuGNogbiBJ1NNGxZCyQfMzgtk9zmBx8DXLhMVDAZ%2FgS4IivPuefJyi5jst3p9%2FElJT5CDJurtYXVeLqm8M6WZHt6vJH7O%2FKAwKjWou5cO5pOBOljNhL0wFrNLzXp9YYuZQOSRZygrbhOB1u6qlVdaERHls11pkD7LjHLMZRi0tsf9h0shg6DP2eI9bSPyyYTavYj9vVRP1GUdVGX5pUOGgoDHr2E9%2BqGdcMPeIqsIGOqUBW2OdrSCv8cvH0gCOZbuBYy9dDuKIIAiIqY1FNvZWWKBbZEmgw%2B898K9vbJirhxyFH9175u9jRVpvmao0E1lVnWzVrV8Cg6Mhw6sLLtt8ZQGjRlY%2BXVahVy5rtKooFlAyBLum2zkkTk77vQOx6CEhIfnVW1rv9MD0lJwCItbErvWWLe6l8PGZiScon84ssLWoIAIkc0yYjfmW9jC%2BGJL2RsUXOLeJ&X-Amz-Signature=d96d43f81faaa3ff65e0a472117ad178f44726b029a8a4f814dae59be234b330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXATSBC%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICfmmMUu8duwOeVEqcr0MoNTGC%2B46%2BuVvyNQ95mB5EuNAiAjLxC7dRnSbWCdxFnOfnjkwOXE2XbSkOBai9KFrtroDCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FiLP%2FwfiouhkB8saKtwDgX1Yr%2Byb3uJVZuCDrSvHlE7F4EKcQVQZ0JiZlb6HKTE5S%2FcmWk2t8J6i2BJeVP99ljrxxu%2BO1mvitgmKOqn%2BTN5LOLgfuNzI7X9kTCK28pI6XhSOtq%2FtLflF1uTn8FtRNIigB7vMKvuK8IWSZftwHymR%2F1Py%2FXF32vDs461juTshF1%2BqTN8FJMsoGRN0aV5nrO6cMLmF5EP6EFaQu7ptPePART2jXhrNMlOVHX9OiGeo6MkMzUZEmg1ItioUBtQIhH%2BSttAJqGtqaVo5C2ameDT%2F0Tp9rC8FOqKQrWiDVD0cBBkDJl6eVG0XQvpIBHCCAUrHT5xkSLzHih4sPs5SJ6r3VoijVKAf1naI6uh3%2FgriJMiuiv9EaQlmRXxM%2F88vaiiwKCAnoSI1Vv0wKHJwwB8Z2%2F5AIT2Klm045liK1yIMYcGEgPCxFTLPva6bIBcg2Li%2FOvXEh5BUa4Xz7mDbRTWOud5i6v3%2FMS4mkF47GwToXDDrhK9JOZZXIVJCeuBQGRcP501G4n7MNAXcd2inTGF15Odn2z7S%2FZYcH0%2BTSbWutLPdJYTsDvW2A2uQAAtl5S0cGWaWnArn%2Bq9JIQ61D%2BUERwaNjdO837cqE8rnsesO2vns1pC5hAqzQi4whYmqwgY6pgHoZxMb6zRUe7wdq%2BdJ2UuVjv6ijEI6EkTjtnKkH3sxiwNrr1%2B3q2K7CS7VYzV7LrTrbiPSfqGlZYH%2F9Hi8zIzCS62a3%2F9qaiF4bLHPs7PA%2BoDyknmjUFCU7dEwzOIcvjWaUgCnDb%2FsFvKcE%2FdJvNnAZPswguaF05zpdd1foxdd2dcrWv61CTtiQ%2BUFHOrpZvzpP%2Fqj38hsXRLrjKy%2BKJzggW2t1WtL&X-Amz-Signature=f5c848ee93539330f6a0630c07c8d043372a8d61ef99e4d055b43f876156d256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
