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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q426PAXV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkcFHWHJHStPsT3Z7aTeJ6quDHUHmuTv4%2FEvKPMCCSfAiBHDo%2BF%2FBBu4r8K%2F4wHW1Y30B%2BeecHPs80T201n4EQzhCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMT7co0urkz5NAF71NKtwDkLkZf6pKGWtXzVSWjrxKgI4JKrpAAw98UgfuiLv%2BF%2F4p%2Bb1gCUYsZJ80E8rEsHWCj9t5hCpzRCAhB1s4LcJL8oSr1BSqxoHk09SQKttTNmItMWhutsyUKoIoIb0oBW1y5IxxPjrBUyuk7aRIfXJIr8IRlf8kmc7Omru7qtVSJOSwg4MRea6ZPZlWUOnWamIDRaZKkwTcPzlZgbvcNalM%2BJ9U0Xup7JXo2HT7u%2FmUKNsmHL7JeTwz9tuW9M3eyc2nW1ogPQjZ37XAw21CfergjzrJNx45gMZx0z9YYkdWPQ%2BCiliC3qgmFc3M48MEa%2FGVLTLp0n3Ac2j2%2BiP%2FJaS4d1iqj59py0E4OzlkEYj6LeHMOcHksFqXIMYlqzmJWPMEw3qzjTRGZ5X0sSlTxr9rMcdO5vKNqN7m29tkzNbW%2BBLBPAweV5vZYDCcYtLZrHQC2mJZuxF7eLo%2BRmOsAixaVVJSiDI13LJT7RSiyB54VJx4LiQDVsymYq0V3bmG2thFXOfNQSOfNMnSQaoldWRokf6C%2FbwxUmJgK0ldAuEWtE8F18lhOML8lTFRHpzCpgoNOQPJIfuSHuzE3jmZLrdQrS2QjnISH5scIO0QJZR26bRB6YvUbdYqtWO5lKowwdqXvwY6pgHp9u2qD2XmHny2Wy8GqPVBiDnNH2GgBLwUD8nyFhky%2FX0JskJ8wVTxyuNz9gk8evyMy02lcbKPcgBj1UaN8%2FXlb%2FYJAuolcrFZbmrKwYz72l56%2FgRoelP4mnR%2FpU%2BCovYzaQc9CwWbBoBnL7hkZxaaskiVKj68L0ZoqAS42eHYY0Y6aSj6dQJbOKJy%2BGwhL4MI%2BBdk6oHtalfSyJs1Kq9u%2Bhd5ayt4&X-Amz-Signature=8914a2f832496a0477bc89cf8bbceacdc754300e41ffdd11c0df68746814def2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ONAI7G%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmZSeQp8U8MxOfD8PEosOptuSze4T7skOn%2B4vb4kLqqAiEAv7TCb9JFISjuN242OaXwjvxGnRP8g%2FwoXJKT81FnjgYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDtdtOIALvlh4HD33ircA5xqRltP0WbyXpwiptzyjbrItmB%2Fg%2BJJeSyrk8oAO8rSPJkwBt4G6WMuC1T6%2FBN6wuxAgyLCbp4WqM7zYti75tSDu%2FI7UKKaTqWdTAU%2BL8UbL5Gz4brbXViyRw2x2kZ3XnRHKT9RcpyVMxjXmN1ZZux8FYqTnPpP%2FQybNhSbKUzPYjCdDkLQqx9sz7H31EqRxAPJwI5r%2FJLKZGae8n6tW7xzmEFLnLSPM%2BumBtj8cHX5HpiZgaP7ctoIkm7L2o4%2FEC0h4HVZNuHqaGmHygImj%2FQ459ETU3hSs5dsyCX0Nj35NBE23N7r8uUVDiwRheu1FD%2Bu7jNB1Dp%2FZUaHODHuxvRqj67AaWJrhwuH3etjnrDiSQoBRW92vn%2FK%2F7ofmRxQggoSKHobXnmhx1OMPZeYBkrN8lGZYjsXGnsi0dsfWECvgGqy%2FJ9c2O75g1RJl3qPAP9whJpEv98AvaOl8Fqa0hB%2F5C9vCv1U0vk5aMV8dtwYv8oUWM7mM5jAYhDF6o%2BWIt7LPqbfomGedWE1Xqjcod7aD30RUQxXw%2B6ocs6Q8ZuGIKXEeWieYFC4okal2ELPujyCoU6XQTy%2F01pOqrEJKLvfjoMHJ6FEdxlMwSgpELHRdFJwYECD1A4xEHcKMK7bl78GOqUBpg8Lqq1P6KcCU0IcC7cxWSxE%2BxJgBAm4ymAQWK3Ct70xwmQmx9VqqamD8HGsfanBL5O0vrpiTRfASli%2BDiJ7DLY51kUr%2FrwOrYS8x7BAvUh6CRy3vLq4GBo7IK%2F1Z8TaqSYkSKKZzcVCicRhMpOQX4Jft3Jpe5U0IY1LmAEV7txF6ZkTZDYIjQ7Sq2SymEHq7ntryY%2FPSDDgXAHvc0AmawqSbMQB&X-Amz-Signature=364ea2088fc7b7c9acae9e8ea7da0201c3ddd2f93e3c5cb8e434e7784667d44a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
