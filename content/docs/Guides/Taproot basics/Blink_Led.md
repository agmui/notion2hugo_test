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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFTCENW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDnszESIBDcp%2BU3jRMGdF2T98y3X1UeuOUOVg9CcrUPLgIgZ5kFM5ajd%2B9e4R2KhF8RL4WrSmKKCqktwmCphYH0apUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIJ4CgRVXJjbZWbrLSrcAx1Z47ihryEvQC7qIc1gabqYYXjh%2BdGHToJKljDbxAX0nqB4O3giwiVXZSSaZ7ZPbmwORvW0NdcHLVQxJz%2F84efKePJ%2B%2FB%2BSM%2BcTuRMVN%2BIT0ztM9oHJJPeBvNRMqIf7Hpvwpkpg3YKmsROr1SLnWWAv9z0bNaDlbOWfCEcbYppLaJG5TUeiJNViJNY7l9kliyOa4fj39Vk1xvwOvfkpDZK2bOdhSfbxrGocBP979pA8uRF00CLGSG%2F1YTxZHfsK6TYgmuQB%2BfpJPULIVaUOuD3LAsAwsJbvYVclKcVj2PR6Y6CzKjN44zoXRd8qQLu6Agonk82V7BU%2Bz2Fb2%2FUS7tIupOiwrt0CamJ904IlEzJXqa5EE%2FhvFsDA5snssnNWjng52jIdhn4J7tK%2FI8LSm9Qd%2B8G%2Ffh1L0jcnelqTn0cgABKfFF%2BIcQYxeC61gtZJYrTQUoFIzpe%2BsEJBvhf%2BMszkg50ryapSLd1ecKk1dNCavzu4k4KoQMo1FHDTMk2sfY%2Bhhm0g7TEpg6YsxDCAst8Go2rMfZ9MfpY12z1rT3N0UW7YnDuHRZDL8ImvZwgzfDdu%2B26Ibr78roc%2BBIbLB5aoF%2BGGzk5BakLIOD3uHO11eo%2BDHk3yoJvGKUKAMIat9b0GOqUBQ67dVQ4UgyBcaHAKIXVPkoCPvG%2BYgqnktyTlkxpUPjzkU411WDuSrT4EVxxasKVfXF%2FlWNvKwL%2FS%2FoJ17PD7%2FF%2FWyEGhmNpjGNF%2BbICxOMdFdyYWUCUNDtJ0Jws3CicrB4A%2BZqnOpwY9QhbZHlEn8xr0FJtuKxTbE4XuLDZVJesTl4LpERsFznVtqD4VA1SMIWXNbwOQsP5EBvNfWTZwK6JIeXaX&X-Amz-Signature=3e2fbdb9f7da9708577bbdeb020a225b9685192691f31a2a360e0d21b6b08074&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53JJF6X%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC9%2FlBFDwFkmgfS7a%2FPbbIUha%2BQCzQOhiA3omL35ovWFwIhAJf7sR8JYuyiWE7rY8%2BVOuj7VkiIURM75dzeyzZk%2BoeXKv8DCD8QABoMNjM3NDIzMTgzODA1Igwy%2BCMLJ8AClTQTUVwq3ANu64Q1OIQ0KUCtL3qZha8TXOgpDNN%2FooJUGxRYC436rZJ6p4C5M%2Fmyyebo18i82GpaRwwDkSw54klUrCJ59DOLcmoFNImWC%2FNk3wVulbX5s%2Bqo%2BQDYz6GkA9KjxdaZpb3NgpCUR9uyUdv9OiXxmR2SwzPwvQ%2FGxyTPVeOx88deEabgHxYJgi1yRA2KhNjhMp3FiU6ni2gyZRReUUxQzEIEkEMwL%2FBtQhfke6tGwHPAl6eyR1M7PowGKCJw8ejp8a3ccWX%2FWpsTR4YetcFxTbhri5F%2BJNJ1Gk2HOMLkzZCKBwR20Qr7Te2PdRnk9Glqr1t82xX6M0iHTMg551A%2F5mmZbH3BA%2FxdEXCns5%2By5RhYhTw4%2FLD61KGKXPD18YP8yotR19FN5tR7GjWIW20YVmXC64pOy5nGlvaxKqhMDhuY7SsvicIfb%2BqIBbhZZ8KdY2uqnDgqHlUs05eIUvl2B5%2FrS5rJK23d3FPD7gm4xv2fX8ej4dlty%2FTnwToeKk5WaSK2c69d1RjMlde9WXpmQ509Kb1KPI1J7u6VBfDVorpkWuKCUWukyOcN88LvwDQuK10gKRfa%2FrCbNEcZss5Mx7lh10nCE2bZAcWiIX1n08tHjEfEVz0alrEmkSonxDCYrfW9BjqkAdk9YJfTs9PiQLp6T6xnd7BZJc5ZYgIu4Mx1SphYoYlkywjeNxjWnT4WIjtNje5o%2BKtmP5i1G9KBpbDQSbPPhcNIm2Eep67B%2BfhRAZ61popeIPkZXYXXTClPi3lXXnvZIiXlu9HgaeGJ7OieoLWx88P1pOgCS%2Bct3Em4pk5R95%2FxlWpDA35R1Bi9IilVKlY3MrC%2F52iO2L33xwm8l7HgYRQYI2s%2F&X-Amz-Signature=26d0934499633f8a5e578154fda3a31f0252abe16667ad7ab831801a8b9621b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
