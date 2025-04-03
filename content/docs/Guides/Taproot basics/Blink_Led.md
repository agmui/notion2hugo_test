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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DJGPTA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd4198%2Bd4sheQIqxo%2B9hYIs%2BbSJZK9Mliw9kP4HsGbsgIgFhcVRyLgnREkx0w8xwJ0ErMhpNkyWuQ9NXeB%2B4HDwxoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxc%2FyXM%2FNHCrzyc8ircA75LoI4C7qs2We%2FLz3Sci%2Bhlc087YLmLrqrz%2F3fuw49q9qfHJbfVqd9JmRdM4dLN6XaY5EydH5eQ2FBs9riesVZtCBf2KYGXMOfRtk65gLkyDgPDnNszYLJFjaR7H9BG7BTX0C2MqC3R5UGNcWTLcyvPGafunQyjhwtqMGHnUZ8kYg0Bd99efHxblgSNY5RZrPuq1hADXHpd%2B%2FYQithM9gi%2Bh3UlICxTbUdgEwb4ExKSnkvu77rZiOxxpqVfP8NOes0s4d3WIVV2mUgm20LK31AU00bO2HZ4FlC9DBjjdR2NjjsydaG2pP%2F3O4IPsrHGIYfRh0t4RNe104zzNQ%2Fkm0vnia1jt0q6CzcQ3PJ3cV%2F7VzNXMYuteGSm0X7T2bSjnIxW4GqK1%2FndZBRG30BT6Itk0i28BzdTHmVg6HOrSKjJy%2BxdygxPpoIc3bdx5mVNABRU96ypc7oRjvz6CW6%2FAojPnIrCuHlvrqWX%2B0HQWXCixkruLGxXITEy%2F0zg1zgaeFXmIAhAl3WsxO3rgZzcvBUo2WiyHDusOunlKJYCX4P0SVbk1TiyZMV%2FdgveHbyPbIZwr%2BNwRn1BMAiJZKPjFKCRt5GR%2B21Lbon3SLkFKCBPqLKoVI7WFr5BYfPGMNf%2Bub8GOqUB%2Bj5dTx9VK%2BvqMu%2FUiZQclYdmADHT4LcJjTSKQ%2FkbsIofOovgOIh2e11OmmpaIgJmrRc6CY35vOMIYHX2jqEFr4LR3tX2XeGW3VeK%2FF55T0FUlAjfrVmR2dAlIFMHDTFnzBoD8WlVs%2BMDYO5cLteqX0LAP7sJz7hUXC2iF6T%2F4UJaUqdXJY5cNj1exWEw2kaK%2BdYmIAzrOZmOnXwiU2Sgbgd%2FIUAY&X-Amz-Signature=9e90b6c80f76deeb070f7537f0b6b47d841ac4b06ceba770ef889ea729715132&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7BUBCCC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCil%2BAVVT%2F4OXcNZLVSwEiHrvX%2FTaTMpXcydsJgRf38%2FgIhAKm0HpMO3gpZ12rOAkgCtUH%2B2T6AHyw16EwmPbdPARSoKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc%2BtKW1%2F3B5XAAJRIq3AOG3YcpiftaUwVnN%2FeivFvdvTTH2uoB64jHcC87HMwiqLGsIUCGD9qI8L0wsrLy9pkD7AVZH4FgGnLF5Ij8tWQfNifurCdnbA3dbqrGv7e4V1XttTGHwOgJ1ySRcO5VZwxvVsZ7yR70Yd7AnEqKDhify2JDqllvX1pvq7qODjbp1bf%2BnkmDxzHatBX4YC4QiEKYEeoWrCc0BsdgDSqa90Mwp3Xa4p%2F1eXPxLDTqe6BUlCvRyuvCoGW54BZu2qqbEppTQx6vouJ10E146PkEHJWX8wvJL%2FaAf%2FJ50c07esw1QTBY1LPG374XRm4rhI%2BvulMvwZ5nA%2FNaLsXD6BLkfJOFJtOFr41oTQsVh2Yc19bJEGodWyOTYDnUPj8cSklGqu8c5xDpcSuzByWOti%2Fcxmhtwq0%2FyQmRvhmw4%2FEsnBZpNXdZruEwr8Hf%2BqRVWhdlZCqehvDdvaL4Ib1GxBwiOHztLRTptmZ5Absiz5ySpsTthkdv5xFClmNmJLi96cJtiMcQJIwXCIiGXOuGLSxKExTUtmnNt%2BkBnpbLFVNpNhuvwXfxOtHi3zuz%2Bpn7SWe9FYGcPw5FMLfgOuCSTA0hmteVnGUh6B0ZzmP6fbptS5nrmBGkXNq%2BZwoUhu8sRDDQ%2Fbm%2FBjqkAeqD%2BDTwiBjgq%2Fx%2FDdFz6WxfRe6pDMq5w4p967VMtlKd2FJkS4OlebPLRO%2FIL9upuSczOuxHl2zEdHuEsqQ6fGgvysvbkCXoSYB5u1qPqgcCn3rOUgLZP3marFVnfhTYWbNvsVYUKSH9FBukeOa%2BYZz5hq97o4GLvUK0v5jOdecvunFBU9P%2BhqaCBi8fplkVYoKnZdJ5u1LUapM%2BRzNbwt50v97U&X-Amz-Signature=4bfe30afe33502dff5d3b590320b22888a740dd84f9c30ef2d76554299679b65&X-Amz-SignedHeaders=host&x-id=GetObject)

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
