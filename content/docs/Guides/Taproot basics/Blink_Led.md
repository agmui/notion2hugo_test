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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JQXPVR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDMyV9SSlmW%2BQfvaPcXQVa7H2v0xeM8dfzeQyiRm3%2BKxQIhAOZ407P4grh5sZUYeNwlaZmEasddIsOiOxtg08EXR09eKv8DCDcQABoMNjM3NDIzMTgzODA1IgxGOkuiYdJ7%2BGRTzj8q3APJuI0r7fGUhMPwwOMg%2FL7LfP95ZwWzMXxt3x9S0rU%2B6t8LBCgzA07Oc8p8fUB8ji%2BRCwouxlBDH0QQvpP5O3GUaZrJ5x67rWBFyA%2B0I9MMsudO0iaej72uKr%2BGcWQDtVfltnNV4nQFRmvdH10kZuVDa%2FAiJg4d5x9SmrnXzXjR%2FJ4C1An2ERdkq1%2FghH%2FZXRqFesdx40C%2FAA0FBlXAPXqiIsfiRaGNoaR42%2FgEvr6%2FJhzIMLgVpz9Y3ZlkfVupzX3x9PT9FVIfSQPRZ%2FMnsJb1H92SzzBvz5NCz%2BEWnRb99JG2c8xprf%2B6GjPisQgOcGbzWDUAz1EtEkrwP7Y5p8uHwaCLyZfy3%2BF4dkKo3mJq415yD0PmPcLq6woXIqK0ascq7WnMV%2BjnolasA1lF8bdasR4%2F8QrX2If5n24jY3FuH%2B3qE2C3mAL3unwc89ybRrx5Dn1HJZxzx1XEeUIM4FjurPSmBOh4wgQPiSwUddu1P2CtSOa31DSCV3U6Qbxm1VO9KrlHxvJJjhAmjVyAhJgNL41csrNC5WnyaUCHxhKYie5zOwxTxLVpz%2FkBCSbE3Op%2BfhMAeFu9IeMIQ96YQHPKcyUp4ajXrQE7JZfPVZED5p33dNMZJDPl1Yc0ADDz99XDBjqkAXHtS%2BSZv5adgkKnPICAVnB1oUSLaNvmzdCiRfnB8NiEXkzF42EPDLhMpkf8%2BDSWhSkFlzzfYPeN4Z3dMkLqB3rNd3QtkCwH32b4sUBHWZe2L1tO4AoGxUawBPlKxUmj1wgSsPvPJoFtIz6KEc8Ps6NDgp%2BL%2B0hqbJls%2F9S3q2lrr%2FGF3WKeUQ5QJlL0QDEn4sN0S8QIVHp%2Fj1s5DyazFa79SAiW&X-Amz-Signature=c7b62344de0543162439332860d57692027804323ba7364cd1fa427b129be2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XC6OALO%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCD7B5gFAIzTYotaQkMI0WHCOy2lGYWMzXefZxi86jQVAIgVnA%2BSsp8ddvNnz%2B804XyudsVgkszDgYps%2BZYE90jt5Aq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGQF%2BYp9oRiYXbx4ACrcA8AdsXlYSTrWHFSp9U6BfonqpvdD23pzRe9MKhhuEzC46q1JOxnDNxylbpgk3j2Hz9%2FfT37KsQ66vSk80TBRgGMv%2FfD8VBTS5lwyq7V5YY8fVt%2BlegeRjfS6uwJ55Wr2AhqBnouWD7I6WLPHX0sG5R8szckUTqlCapJKW6%2FBXdWIK6t4ueDV77gdZ8Kk%2B1cZkh6kSJOF9fUy2ZvChIR4L%2F2s9SM2Tb9GZPHghFtKLD5p%2FRX8BxpzUCFaXLHR6461U3LIdCLtvzCbI5zTWGMMLp%2F1W7w2wNlugjVHIceWWyOkW24uVERmjxMok8I81KEyhMR9noOLed9gY5qMHcVrvUs7YyTDvmOVHNwREJapFBNWgVabgS7ffgVeRnsyANV6bCUcoavz9L4FCVA%2BudM4SISTiNh4%2FalV3Kuqr3sHa2rcLYSqW53ZsULHQGub7YGvqnq8OjNH8uPqcwvhmbcu6aV1adYtfs00FaIchtpsTe0VCyO1XlJLdb3DwKIEQsUZTNw4sJmQTEk7DOG5xdI%2BNFEdTPXi6Wsbj%2F%2B%2B1r6ske9ZbC8RHjbV8bXmNaVPVGx%2F5QhqooY9%2Bx6RLJaxiy7ZN0cyELRKTtxINGB8NbEU3FN0XebIox3PODKE3GxVMPD31cMGOqUB45ihQQusfeH8Zrtt%2FKRTWTjE7cXOEKYmnsPJvUiSYfCY4NPlfffgmDCYpkv53AhA66%2FZ1J7R80B9gsUBbNfEngAjX5cnzkzf%2BKQwszGwfbKxqnlPnCTh5s%2F4CPERquTfI%2BKTe0C819jgy4rI97zg0Cn%2FaGTQKVPUPFprqwMGG1Vljwg5OQJDtI2LqoKtfPMFvBJKrRetEExVXGldqLzgMc2%2Fk3U9&X-Amz-Signature=165bf2696a63bd03b5eb49a4de62ad2f9618e7c30742a2853bec25fd457812f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
