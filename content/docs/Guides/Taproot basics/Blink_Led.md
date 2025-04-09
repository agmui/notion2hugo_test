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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFKFDI5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICo7fAo4NZTS%2BBnmd5rG%2BD9hEZgdYjmdQ0rJDOBnAKPjAiEA3weqiVXqWCBZZfCAAjEC%2B3XKDc%2FqrpwohgsrSABM0HMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4WFLo5CmUvT2%2BWjircA0NrbDO4x5LfeWfpURxZ8hCc1bqTksrpMg0MMfuh5oBkMVkcGGlYxlULk01PCs41n7og7UjSMFFB0ixEfHjT5zlY9AQ%2BKehqZ4zoMjW%2FS%2B86v%2BmBndeoK8mtpbEZC0%2Fdu%2FkyKkT4WtKlQ8AxsKffeAap%2FVOYKjfUL1D%2B9ylF5r11Zxfo%2B0NuiYQxVylZPvGfmd6Xvv7fqTsw9wqAE%2BHvom1uE%2FRc%2BxR4IaOtF450pwXOOFIpLBEDd%2FwRRQBN2mr6iWG4hr9BxiSPEZusXZZDFGAgOqM%2BT5lXbqq4xoSa3s3z2eqcktkIfQLd%2BXkkDYQQnBmYpN%2FIH6CZM1pQeeIga2riFT60OOD%2BPpsgbf%2FNjZBVe48rAiOyvP%2FYgqBrU0x%2F6H5STZjPyhZ9qE2xlTfOxOyB3c6NQSJ8nNxy1A2Cq3kN2qg3LiEGPwEMxdNBRMVN2jKJsjNiqPVt33OeuENuQ5XdR9ovWlQ0hvn56k33iYsr93jeK6FOVLJdUP5qTXZtiV250DqHFJo0A7TCKKG3691%2BBWX4%2B9EAI1x4sHcyOjveqty9qi8SU7eg3%2BztZo%2Bryhz3BSCsf0Za87ygJW56KMyna38I5%2ByWDbvMW9h4P1UlnHGCnF6BosV3DyU2MInL2L8GOqUBRxmQcHOu%2FTsFxW5ReEhnYyCPgcw02d6jqsdxNH2XDeATVu2cRRRN0Asp9qz9hEujkEfF73cSurxCfouuSwWmsC8HMfakN2tb%2BNLMFigjk107IdBqLJRXbJ7isDurhcfZAeG1s0o7gUz5Z3RwJdyRR%2FLQOG61hftaKqjJAGrK91T%2B8XfbnmmEH%2F9RsHTphRCqrjL%2FAk91DdOzpXZM3SOVxbfSO2i0&X-Amz-Signature=279fdb3f32d2c1368db7221fd4d36069d6b94542ef505d8f8a6fd36a31f60c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GATZOU2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHRVE7fO%2BdL3uqLikr2k15Qq6yHJpg2QZHKzr%2B4yQ8vZAiEA7YjBqxcoXIz60TQIU6FjPBoi48R%2FQdLRb065ByOfw6MqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrkdwwLB3B6QOdhCCrcAzvn3teEnGjhHw%2Fxosnaf%2FpbPiONZHqKmC6j%2Fj%2FbcZ%2FRDlPNpV1iNpfs55T01NIiI6x7P3Hpn1uHrvAKxfqBkI3jQgKh%2BhxLa07d3kb1%2F7GJ2el4BBy5oNN4DrxqYOM33y%2BWZX7VJogvbYgn11U1rxtmQrfYaQlQNIa%2B%2FL1bl5XUZrJ4Kqqw7zZuavQdZwaXZIZ7cAVJn0ldP0qdROa4ZwbRyw2ayznSJgzEi8eGEJGt%2BR11bBnsDraSHsSyBctf%2BoCnpYdq0bpXp12X%2Bh3zG2jX1S7F1LsBFMG6DsS%2B6dAR9gRgRbWCgA%2Fe84ibkSWzDMGd%2FxSglwX4n5LQEtfYlUyMoOdRJm9sX9FdtnJ8F9UBzQufzsx2k4tlLpH1Q6EAvgG6VqknwiyewGZ1SNe9OF3fT9z1U9GIE0pw7%2Fr9F02uzyT5tEV9ari9Y7KzkM7w9jFSNiXA1S2AISoDi0mOEzy%2F3gQcOdbDTnyZeQTDB07fZeY%2BZD3HkVcxZHQCHz2b24viKTbIRz7HXQqpCfHRcCpCCOgwNUlWELgmpaF3OiHaoCV3a%2BZ9RCgRLQ4%2FJG50RD5pcUlnOPshYeS50gmCGJdQbrRkA9YHO9PWgCanhOr8OGN6fOfFo2VASlwFMLbK2L8GOqUBentePQw75pG5iQRfBU8vCgcWXUgj55g2b4QIJPm2ewUIWzkXryz6SeQbRr99jivg0nOu%2BfGb0gBbWoonTBVfK7ev9%2BR0YvJrCzyOyreQ8zrZWnlaF9Sq1agP%2FTN7X5QgnLsQb5AyJVc6ZpbRd1emPt8iIqen%2BXaMFOCOsLvql0Y70%2FD3KSWtDw%2BDqBc8UmiABAHGYWWYwlLRd1MYJCF87jvu3kjS&X-Amz-Signature=c77ea5803680ca32089a0b8f012d2b81affcf54349c5b540378e182c0814f5d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
