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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFWWBIBA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKvJfcjskZq2rNsnaKZYadYMQvmeXtfySoKaUUlBuplAiEA0%2FznQSje24noEyT1Aa%2Bpj%2FsEnQhasy99S9Y%2F3izkGO0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeQIpIitCJY1bSm4SrcA%2BE2hS69wHUjFFIv52cU291VHrSN4lyuJMYxkS3I%2FZXfjDtoLUOzHBOUgrYQ0qdCBmikRmVhSOU9NGZMDP5C9asltjIuvwO3CT9uReqtC1MODUQvSqvdZZjmn4tRvyKi%2BgKRh6yk1INVHr0v%2Bba2Iz6GuSq6HKwt%2BRaW1bg%2BcC6bK%2BIeCzIBKRrxTxyx0sAEvjfdv726G48hFbV81slYRlcpOKt%2FCVm2%2BvJn61n2z7uXDLvVXqA2MEwN6ZOF4IRbY1ftb2rkLYfqsZ7s%2FphnrCd%2FKeXVfb4EB6a9f6iq1cXsTAirXrIFs%2Ft597glum0bCoI%2B8krHc06ro9l461sZ6uYIy%2BQMjZLH0fKYVv477wdVnQ%2FvwWLQxqLNb36oKjbpXOT5YQ8jspVOEFX98I0OK2338txIk2jUo10MIJwdP3xBUSJbBGTWotJ5vGgObGGZuho98L4kjc1%2BG6vJiUpqiCjUyFJhAJ6LU3GUWn8CU6yHFar1WtDaxHLvNz70GtTy05GJjOPDZufSb%2FYI93QPSBWv6OGnz%2FN6usF9XEAfGwj5HQumAZeBqKzHQtLiXiXw83mZSTw%2FciDgCtIlIwwb7dhdtw0uMnLZbpdQfKfoo%2F4Jg%2FnhsYxjQYjcALo6MIiw9sAGOqUBsvuDlLbussBdBPtY2qOseMLkRxw0OSVtSRZz8DD5fFTEacqAgRh87WgjXXTBg4nqduYfmWPXKWwd3dkvlhYu9PyeSFByOqyEvH6eMiezWdOlbpVlUycbZhXMRm2cJmzt9EIilWqeITAvHuI%2Fj0jAzzKk0bQrgvFOfhknhIT7JTA66DiQdGLjlcPZmODnCwV%2B8QEDSPQNvVOV7%2BGJqAj54fjOWWcc&X-Amz-Signature=698a72be45294c590cd0000742036985a338b03f84752f97858dff1e58b8e5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFNJQOCD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCidzCHDCR%2BOAj8wz7yaPvNnU0DC0HOinpOMP8z%2Be1zAiEAkffCHyyX6G67MLPzZ2PCDN%2F7MCTDmVdlszwQABcAqtQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3zWLSFCZ1hyq%2BuWircA905FwrwPjuhp5dqj9nKspC1wKi0b1470%2FqXsnhhMhVoiUcQKBmrziHWTVJ2bGdQn7XQ9ygYQ2bnzTftkcrSFqxKX196Hwp77gIlV3bj7PvPOBNlOk%2BNqJyUk4jTXHul1JhBL0W3hrGI3fBesmnImOjWJZkUDLdF0ESnrAMjCK%2BEnm8%2F4u66%2BX7sOurJbNuFQ3K7Rhz%2FTAfOXmEHbJ7wxjezG94FreGry4mkKZihe%2FWhMks49kR7OValuZXtqibUr5vrwElzrFfboB3WqXgnslUoi%2B%2FQMq5u6Nqes%2Bq3souC35B7bMf%2BuXs%2Fn5WMF46uidXisOqW9ORLTowzghJvXm8swndVAdiCSBjDIZaq0TIvwTL%2BguJFgyzQNnPqugdlb0STd8DouqvkYJVEhs2WdM7Lwbz6LzlqK6M9Rlfp9Zc2oCsNqYK2z1XhufoY0NeygSE%2BPWRBs64gjo8Hs%2FwcR9g7DmdmvoDZlc7ceG5V%2FMXq1EPk6Rjs3LXui8DCqWzg3iOaE08e4hM51XBlsy0ouBe2usZCb7xAzzZHQf%2B3J62fdPfKmXJ%2BtlZpScw%2F%2BVHUyY%2FViWeuRKfcawJlBW9ZP2kOtpK6MXJdk5z%2F2tqKXYWZ18j7QJ3CyP62FivmMI2w9sAGOqUB%2FXsR2PEGUm4R%2FgpzgTqwQBUZ8g7LyTGEFlytwlL6osO6nr9%2FEc7Bpa2ajYWfucp5eECfdf%2F%2FnKdWz99waPwgvZdrYoECf%2FotscQxg81OaC5IFE1e4KiF7jvIZ4fcMc9YtqLWERdQZfwencrOQ5wG9OZ8IGWGfqlLC6%2BZvHLBk4WkOT1O2kzNOyqx4XxBKs5x5Lfjs4YaBgVdXfE2A0VSR5VZsUbv&X-Amz-Signature=a7509214d09db216eb7f511230dea9313252d1651ffcf5cc43f0fac5342ed467&X-Amz-SignedHeaders=host&x-id=GetObject)

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
