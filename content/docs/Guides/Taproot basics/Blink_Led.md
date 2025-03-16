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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQK7FGRP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuTu0XaL2xtelG9EN7SkvLvBZeE9cGutMkl50Upc1LsQIhAOJldK9tVemv8lODDQMCOFcB3QdsnyfjsmiSR8aIc1H2Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzEfCF19WkKuwNw8TEq3AMk1k6x9oCBlOY6JGGAVM8Rmwxngs1PSiUZu74eeribKGRKmlMsYUFPkvPSao4vZqbZHdiscmea93y%2FOmB8FZYp5xDIcDZ%2BsBd5hjVF1%2BN23UgCQCn3mzipmUkCjLtf4q298EuQqBcjMEenzKDwaBh%2FjowT%2BDtbiJfFMA0aO4%2FOkQQoQfXdlrdLzQFeS5hiCSxekmEZidq9e2NJRcm309eA0UNbVnbXayIUT8%2F1Dh7smlUopTZnjNDPSa9zt%2FPsivVfykQvK5QpZa3l6vmXG%2BcY%2FqIVqO0Bzs%2Blr%2FvNcrQe90bSCvWqFJSNb15Xi7Isz4vo%2FB088sGCXXgH31r0joz3tDI%2BCZxLkdi%2BPxRycNYGUKRpQSsOC6DeBK0rZkAI6RjmpkI3wCPSVek3T0mpGUau1Ml4uiQ%2FtJF8cZTA0%2FNZJMOzK5iu0s5YgZmX34ZaigQsT1GWjW7ersHdiJINMM3uXzAzAiBWxrqCPeoW0ZawuTxquMddx2VcNg4QOxvFAbEXmjeJhkWv6YdrS4sb3TA1pjW0zznUPOiteDkLZAUkjN%2B0c4Him%2BfROanuT%2BBA0eLtSLmJsDdoAVss7ffi6kkzNoiR7da6ouCbVs4lu5AJD%2FUzpYE3Cfb9c6YgtjCN3Ny%2BBjqkAQCrWdTrt3LGoEqlAGyfPXInHVZ5%2F%2F5gKBpq%2FuiHGRyZDhritMelceQ4stD%2FHFKolID0LCgnGj0J3kNxLpgRLT03HcAEO3YQDV6yonFBhHY%2FNw0Z7qVjEQ6VufMs9fki%2Bk37kaBecwB%2Br%2BIJMwcT4DewTBjtL5eQPceJYdgCDIZ%2BZZOsWG24p4UTGiRnNyPbS4RZ8goGyPKhbwqEWwpB36vqll5v&X-Amz-Signature=5f690a86c498c143039292b0881e917f3411d6d8752af0d830d0096a4e4f3661&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YK3CMGY%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FQS%2FeiHlbLKN4bLE0g6VMYIdLezNtLGdeMYHWZXKBZAiEArEtM5e8CWX8zRjxhFccT57McfhvNzP9iiANrvWsN8IAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDPAeb4bCuYl7vXgJwircA%2B1zlT9M7ecPXxRehv%2BJZjdUtvTJsGz5Zb0gH5sfKy1rbJBnFBe7u4b96i%2BR%2BHWe%2FByqqkKTI2kq%2BoE17xUf6udyutu%2F80GOJar%2BS6dufdEo9CDD%2BDavWYfn21cL8kQsqKLQaJ2urdcD9aQrQ%2BsCbqLX2Ec1AB8NeSDGmbJmDmSjKXH2dLLVzKqS3dR75X5wHYU0XTzMT0gzJUh4p2m4QnOI9A%2FrnJ261N%2FotB6GMbqyWq%2FEBDHKYchHRiyqCxAQE7%2BU632DGLHjPraZrf0r0WAjDTuudZcgJbQHvW8V7O9viu3wREZbP1e9x2a3sAquaLV6wBmVpheqfMUAKPjPyTf5gm0inyr8FJITjycbI7xdVstn9BXYkSmGBTPU926aA%2FCxiG%2F4mdH0e6j55VbDYlYntNyNyXWqMKL%2FPY0FxRyRvqeWJRoNLBaZUfL7dQ2Sc53MoAwllagGhXaCWKE2STV9KOUr%2BHJ%2FyfmJDGqvYdMqMJLPqsaHjxIyzCkTAwg9%2FTR0DpysdZFylvY5U0dEGqSs%2Bwmlta7Ar%2BmtnRj8UTk0fnCbZgWjx6wx5R96mct2sMsROAwtPP4etmvMd5vTVJLapQ%2FKwAsdtBkWFtEYRxfo5sjbtuXs3k%2BDkxxEMJnc3L4GOqUBVV80TBmStphKXie6nDVZfeEYi%2BLzonkV%2BYBCZfqzL34Bzv7BU1JmKUHAYg8j0h1iP079%2BivmvTLxhgrHR%2BP3mHaMsZNLDug%2Bl1nunvIrLr7QfxQ%2B9CQ8sxQEZfHtTQBOTvGDocgSeIJEurIDmqRhKGqW9dLz%2FIjL42eNghn6HhNygqvF%2BEeHhHfVaZkicGwmqRrx%2F21kD9oVVKQhkKeUvFMVFfB6&X-Amz-Signature=f42f3724145449a135edc7048eb81cf2d960e4c1c2bf8b25da97d29d5157017c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
