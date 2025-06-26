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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQB5PLR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHjlEII5nuxfztqXuDMhVr6U49hEQnc%2FqaGuWJ30yefBAiB2HYgO7bE7jZ%2FanEsvRitqATWHRyvBiYM3IrAuO%2FMsZSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMErtwE4S2r%2Fr7CYr7KtwD%2FQ6DMliGR0oedrB1htRnt4pbX%2B2hnNXTIj0zB2wcD1iJ26Oeb7Iv9EOMgKt9kiRKIIZ%2FijceHN%2BPLc4GhorAZSLj3i7vTzkJuNJYlEz0VjlklyoEhwnFMbX64OJYz1hdwXb%2FIYh1WHAE4ZBf5CCwFW25rG4S5lOBapkULCEPWN6QueCBSZZAkMcspsigz%2FdnrieLVnIzTacXXCqIo15h0ZDrUwqdjF0JdnPldvJN%2FUs%2BPb%2F4xxUzH7YvntnhJkSFJOrRfxhDlkrV7O%2FcY6opv6MI2wEtdySgbL8JqNg7BJh%2Bj5occHeWbga0GS7N17sGHYLUA2j%2BcETzbaCotGBIDqlHzSgkwkRzzcjA5XRRQtUX4xdu%2F%2FHyMzW5CnC9T2mqSHE1tBcXU7dhrzkq7gSacHwjEiKcii93foxQHLxaNAqaEsT9DXNrLctMtDULStWpgAnbqBoGovtG2ZkZ6fwO9YHn2tmaSz14V698So5TLYBuyCJhOzCc0u%2BGw3MVhBVVYjc1dnuZJIIgYQO1T4uX5vBUNmWL4F04%2F31uZ7qADrANh%2FqKzSWy6MwL4IABtmv6rqBI9JDowlIt26f%2BrXMMxMjdWFzZqQICGN8ZmY1HoO3MYMRctR4bp03bcRcw1IP2wgY6pgGAciphg9J0z8In89Jgtx0wLvJZ40cGYNtYFr1CaJEkV%2FjZQ%2B5BSvIqy82GMb1EszerJhcfR2RGLGBwaYGAXmUbW4TYWEjJlshpP1xXLtp6TSBwotX4WezLZkVLnC9prX26uqrxxfssibAbcD3FjfssUxfhf70Oo1SIVAU49F72lC7PXJgHWTn7%2FhuV8gf7jM%2FfU37%2Frt0ye6gf1zMuqrVJAEknLSBn&X-Amz-Signature=530317e10a12b5e03ce9d768fcb96f4ef9fe6aeee95974da71be3da9c9cfa8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C65UKLW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDrsh23F4ZYFlkRO8Rg9nKezYG%2FhuRN9IIAy0ljerZIAQIgSEmza5TmRRUb1ijclwxOz3833zOO1InJsAafcaPHUzIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFRANnmoxO%2BHpC8qYCrcAxi3s1aGeEU%2BSm%2BeKp2c%2BEwQ1HOFytLnS58VvctCGLCrzsRen7GIWOmXpStkWzGeC2Y7FzAkJlibLxS%2F5zMog8ifPmxw7F6W9Bo8Vq6UQo9pE53T8kEHEFrkbedUWbOIL4kNQvszSvZnENlWp%2BqSLg1BYOVeR4dK8WE2Ie%2BDvAbsLcJRekDd1IBAor%2BRr13VILDa8FLk%2BJz9HdENXigQg72v4TOcWcRBp2tDYoN76qx535JMsfwELSqgeEuGSnDEktErKu2OI13aJIoYyiFqtjvAiJj1J%2BKDw4vrDMhYxe8w4D2KAiJCBsenuDM3jy6JD9IHsyzz7HylYocDYocFoLCgqq2SwSFvH%2B40foIaXiVIXMFtEjFI%2FS3KHgEH98Tcmenp5UBh3BivPtkvnBJVu4srzIy2SXQNCnGZGJJGEgZ4%2F6pJkuzbC2afJTzP4O5qC%2FztXcbK99K18TgxJUVE2IPXD2qxMUYGaZeKyZbXqwScpj14o%2ByEC6tzYMNym1zsDm43XBqfRl0NPAtWIyqHOWwh8b66L4LxHImIv3hItflE2CdVXTA5RlVpOHDrafyRw2rZwdeIm9hhMhVG%2Fcm6K4BNNJzbdzd43HclhooW2NEDHP57AR7Ef2twO5FjMOSE9sIGOqUBS9eZkV7dnWWEGocnFPRQ6xOeqbY8bpfWjDpL91uEVnmRs%2FBmC7fxskNurKvKnluko00sIX046361xDr6QH6l0vAE1ORVegQmvZ%2FxUAUWNySsXzifm8cWvbxuMR82PA4H6SDHltNQK9Z3qFFQFgc5%2Fl0Jga2FRrJwG%2BqSXQ%2Fli292mDqcTlc4X4HbU1XYHHaZJ0QEh3VSGKDR5KMdXuIYiP8XGmVq&X-Amz-Signature=f757360634c989a6a5681e6571ededd9e89450558352f900916f979bb11beb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
