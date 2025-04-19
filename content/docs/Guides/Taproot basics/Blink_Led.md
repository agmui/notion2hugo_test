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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BEEMYTI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDBXfTwgg%2B5n1G4umTc7EATUZNOujOmO32RxMKDjBDikAIhALm09NcsrdtoQKTHd3zztQcINrsN1N3xhbkIACWimzGuKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMMvrFTUe7jNiTwoYq3AMLwLmv2empVek0mcExixmVyyBGOwDb89Rh1Gu1wqxbem5ahfqwgR3NBSMoCHJMqgOkGIx91AzymHOw5UDZkRPrSzTGP3qNAk1VNNbTvaj75r8rQeV71ZJGxbcKB9Iwp8nzVy%2BBl5D1s7TsQ0umTvbKUbyOIpl2T%2F953duBwE0DEEfLBRih4KTzPMUrngNGYKCu1zjDfFf3tkEianx8LJW2Ho0eNyUuxCPMEqof0ZWePjrwWFDu%2BFDl30WjDvX96ybu5B9pz6A%2BFd1ER9DeeSESbSkEwLJF2kzzWX8%2FB7XlkKQqKKc6vmtmndPh1tZQegGcNYOJuBCeryKDDx3Om%2F3sp%2B1RATk%2BywpQpbHmtHgVkLrtjNajqzygHZEttFPgJl3ACk3a4crIgh0BrFVqYjFr%2B5mgK%2BYqiSExacTP5keZVkRO%2B7YWjLDXIkiVkB2cDp28SbEWJELnjWWVZN4omIygPrKICdHxZITHS61p0dZooK3eh%2ByGJLzr0AX0Z5HVHqkvVC15Pb6OS6b9GbdNiW1jhTtJvONZggtJEoamuvJq9Rnoms%2BTaPkI4BLGI%2Fl11b3oaiNzrFr0c96hD2hDk2Aoc2DZ%2FdeMmgaaNCx6Zby1HjvuIgfil4evDEGRuzCano7ABjqkASyfFhzodAd60H0ao7Uo9sgphIAcpWs4KxOYYwHNdySCztsJHj3645TwWujNIbO03IspsPIXJmWa3sCsLnArSXZdwDpMv7LWMdr1FkiCwdISnJ0yGNj3dGQ9eRTVYbix5ScIXVOp%2FAnAxl3ogXtN%2Fst7b%2Fa489CoWWfQjpxzlZjdUxRl6kBbVbRj10EHQRbkKYyQb5AerpgjaJwnTcrjiY1s1zfi&X-Amz-Signature=24b37083ea8d62ca293eb3b32d49bdb15b1c196447acbb2756562e4b8f4f025d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZHQYZZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQD3BbY0d%2B1a%2FixoEVbaAtgcy9FgcLxEijJsJs415aExqAIgf4BF4oZ5WQa%2BDEuV7uQTvcoReqlJjorWFRviNTzrFKMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdc%2BIRkxFeHlbujCrcA62RezmUzHRjmP0LsoWX%2BBR6GaxWKj40AH4B1oZ8w56LJnyIgV45%2FubUy7DpuNyi%2BYzTrezMeqnlBuhiMCtcW37QzZjtZM8JGQLuNbBZrBHUyZHYZOmuE%2F6xjn8WkVYiXg93n8CwvlZxKgYkdUdiR%2FebDDjcnz1IAUPGk1X09tmO%2Fy4gnAqqaYbtDLdC8heuA%2FYO6Lc2Hv569Qz5zJBzmlgJ2I0MCmprso%2BGvB6zYgdI8PigBGgwR0WKh5DWM8LmnMJ0Jg1NJyuGkLkxOrmCubnEcYCU7gTKo5ZrDRDH0pQMmELRZOSZsNlQ4XD4tV9vGs1DohYz8XQQsfKISFUPJY6TZGRrPHVg1eZs4jF%2BrbHSBNrlO%2FP7nL0FJi0WtOOnRFmjhTr9LZ2B2RKbT0k9i48CMzv163Doc7SIKeTkYGle0wYqC5vLBItSZMHWDPI7oXMlZmIrs%2BdXBWRGvgVNVu89Sz9JgufSmJE1Vi43vEyuNLitr1fFJoE6DagY1mdCaRmWLO2EiZRx9q5XQoZugdhC14V8TDOPwPL96B59164pJ480IVtF1oWXUho%2Bn6L1So0Mt7KKfsf%2FhWWOjKXZ5KVesuUGyrdpkmPs4IPj1nfUd%2FIuByne1JyHmb7jMPqejsAGOqUBIT%2FZIkPQR3GN3CZLfl6gkS%2B%2F%2FVDYQDIGcD4cj1ggvBWen2b5o2iLISHslU62%2FPy84dbRmWrWElEhL%2BVD5ZQekMNvJHCeMRkkA1PJ0omnC%2F8oMZq31C6Tb4XH5a2ZQ0qa%2BjpXZgVfmq8%2FlZ0owOdCzNHSb3PBrpbTKCm%2BHtDQ%2BMKhtlaIfaaDx8WGbSgI5QxDhTNuC6vaSZ2Spm%2BszUj3zCdVgF0d&X-Amz-Signature=352fca2bfaeea60961745c7f17904ea73b113e77f4b1b45949e4b3b307d8365b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
