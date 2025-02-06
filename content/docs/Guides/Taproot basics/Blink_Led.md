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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NIDSIH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDC7QB4z0Cs%2FR7wVcj8RkHxPX5K8IKZJkHGKdL1PzkMhQIhAOK7ojg3OM3njT30mCgc3ClUXgNKLCyclFREIUezNEqMKv8DCFoQABoMNjM3NDIzMTgzODA1Igy3f8ilOeGRA0%2BwXcwq3ANblDBaraYXSxDJcNB0ZAMJtGU8G3kTsAxn8OKM%2FszOdhBUi2V3t%2FT49dzpY73eYGB9eDxSJ7Z1lFViqXj%2B%2FlXVBPpdPDilgikOLa%2BxMbtX7GwEEQolJcHP0zMYVty8%2BSE%2BYQzl3ZJ1t%2BntgSGYoqPJOzAst9YCyofD7vZfC9MczkaA%2BPnm2rb30TGMovMeI%2Flt1PG528ZE%2FAVeVYciU3WZmrHct3p2cIFvaWWjGZCpmCKQtrOQisUw%2B5TTejXFrBNYMOYonxpCQv6c1hrml8WFbkISASArXPJa%2Bdzj9FOFhc2bhyWJLIUcQGQd0UXZ08idclkl5j62tSzvaJNo%2BOmlgthX8fCF4K1vuKlGhPvKiYkDLnS5bBayPniYzrpgDpYljWmN9IWU9fBhpO0zcxgkAiCcQEo7SK5J2mjAcZZkDDWQY%2BU071cuycJ3KqmqlRir16CpCGQ44Z6di6S%2BzHSeiDahIAGhXOsXZ%2FJN%2BEFoH9r6eBcIKQMr9KBDhrucEFWoX15RVQyHLr3xjqJrYnlswDnYjnsoKlbJbjgf%2FVVxXITyg5wkN17rXd47grkMgbL6n9GF1OHhgDRvJ7Dfc989fT%2FkjDj%2BaP0TWsKVtJaY4kwISPX7HX6SIglVzTCV7ZG9BjqkAXIaaygVDh7nu067GM%2BevzlHTI2wz3OBsTXkBdmEYyoM9f5H%2B3h0Ucr6ZXcYhgzalYZvQAxcOygIvP2aoDpAMjuGXn%2FOxga0Vh7NUl8s9G%2FxFrOqPlec57DMjKSdOeZvv6JnIVWdGBE5hP1CyGj7xMRsCrZmRfFDyaDXPQBmRB9KdrSc6n8KjedqeVy0%2Bxaqjcho5mThxB3L4zMrQ9Eq4WM%2F68Xw&X-Amz-Signature=c8584b6841fd0f03711d55651326cadfead3f83eabd1f42ba159c8277deab0bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE2XFM7F%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDXHjqrs5aoYzJIPhoFpdspbZPLHB%2BtYAPj%2BmEVgvWh0gIgNm5qhaocgufCIB9TnnctdTf%2F0AVt%2FFw4UB0L62VzrN4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDA9Ej%2F6zn%2BQqbGcg4CrcA9TIir0kjfC2FqK1Gx%2F%2FTv14RdjlH9wAfHQVkayD20PKLF0Wby5VqS%2FUUb1vHETOBOpm3APA1QRejZhFg9DclIUj94jV%2Fh52MhiW8aDZL85hq%2FpjnHg7hd7FCwADVSigYOxZnGEvhLYnYTzQBepCd6mEVdy9ltu96o0VHUaW43KtJzGyIu%2BUi715a9PxO0C4kkAx48Pxii8k9AobIZRFX%2Brof1Q5z5k1jh7y3e6e7JlJrv7lR%2Bb2MaZFSHrKIgDN7ox5vvZRx29sdjQKAuJcE2mL6fXV4cO%2FKy8XB9tzfwDUWPKy5NtZn130HkDLU38poWjGeAzrNHebNB%2FRQr9lvS38uTGmv7BKImM0URCPVsa3Hb7NMNf5JJTVUlwnNJ4P1hvoNiZXkLDkDmu1vp6lgUqfktJu0RcaDF3PZ3Y3e%2B97mfi81Gj5TnwtcaLVmfC5X2LiA8F25PKcduLdM%2FkoK8VYXKcgpOc9F%2B9kKDBJsShS6vJKi1ga1o72tK2lXYARt9wxtYpq8L42CDbGHNR462v1VUA0hjNcUDD3Q5H4SC0m2rSJqxbKwxRDmbGOSISRFNT70fUD8jPUspTQHqGnBTicEyaNQOq9ELsfvjJsZCTbfoVWgqSYaNC4MsRiMMTukb0GOqUBrGnwEpn88Wy99eZIeDysCaHVYdhe4wvJnbK9W%2BiF0dadZOBD3YqpIQWpyIJjcCp57CZ5WTe4YGxyb7BlWpA7hXh%2BSRBlXvARs97A3izYm2AUe0w%2BOG640nRIIG8H2GUY1s9MCvYBfPRibGh4ilawc7zlbJfc1J73YED3QrPCFvAWI7whzRvLhtGkDcFqpygShNrDh6yNhz8rfiSPFrnhzscvwcim&X-Amz-Signature=96eadc6f63f1744de3ab7745c0b5d7131a1243e473c71ff887486c6373a75b65&X-Amz-SignedHeaders=host&x-id=GetObject)

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
