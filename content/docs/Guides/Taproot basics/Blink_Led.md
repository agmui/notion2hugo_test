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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIU6TFV7%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ooM4Oco%2Bs8DenNIMinYtkQv2FAL57U%2BMNURvLnf81QIgFCBsY%2BN2yjH4ReRjk0Cu5HJOkJ6XLFIDMoJeaad1qcsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDC5dVyY8dKNCFNHqcyrcA%2FiBRZG1dvuMVI2oL5NQe%2F62XgLs1UQL0XqbSJqbiTmFNUK5lDJGVxIK4FAKepOzL1YmDxluiXdBauYYa5Ajq5p2ZkwbPmMqaBy7PyxWz7ITY5YAXD1EtIMs%2FD6WhXBOCnZek0W7zXmd2wQXtb3DsPViZj3GmF8D%2BX8qIwrc17PCyKyjDXjThSZHIUqA9RPto5rSvY5RuuTzrUjeFtvdUnlkOyKnnwc%2BWbTDidgw9S4ba438V4ur%2Bm7B%2FVV8YoJpciTMQZMUKkZo5Xw5QgX0OO4Dh7VJMiXqq%2B3JaYkkkC2k6mw0IHCjg6D3nJQrLxmT3V7TalmPujlJkR6nkm%2FWmTFw2cJCMChNaaZ2w8PZ%2BDhrlPbO9PAXigLX2zd6R%2FP7uzVDAb1oQRW6XWbDjPnAatzKv2oP%2FTfgtep8dUEcndfrY5KvjEBzTSzcNooCW0yysIcFYF0Qk4OWjXXzad7U5%2F1x89Phgk4Z44wp8SLgvtEpRie5%2BnUi07cdqxPTGQXUJk%2F8URSgQhhKFiCymaQ1nMqrI%2BHZ1YYPt7VqL0Thl%2FWXUk68Mt41RcUJRki5e0s%2Fw5Piv7TCn9SeXT2Rk%2B5WHMZ1miUU5%2FfYYVAy98N0vtwRm7V61X8wplotMzopMNLj8r8GOqUB7HlNC34O7cfECQYRZijGnJ%2BhRcBpRt24vJXTWywPmgWv0au0lkbV9YCDRxxopZJ315jWKm77Y5OsOCscXlC4q5GCuHmXKaUg13Mi1cV%2BzLfEue4t%2BhwxoialQ2kibkLJ9mpywm%2BkXP9YW2qK1MdtHzOE29xByhYfmUP%2BFry5ziix%2FAnbhLroqhlgyAbYIRAaowH54UR3gwSUWCHc7T4X3u14t4f2&X-Amz-Signature=17b11c3c78e6002cf863c2fc5d8b92af5af846c6d1da311d2371ad36af61e49c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUECXAU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHZnB38k1JQbS3vpUuuLnV0I5eX7nyg87SyhzGvgZKU4Ah9dNBO4JlqeTepeUY7DuGgJMgNj9NNIiueTItKhy7eUKv8DCBAQABoMNjM3NDIzMTgzODA1Igyn5gwTuVT4yi1qH6kq3AN8x%2Buf3AjkbWcp5xmp%2FNXNPF5zc%2BNjrSIoalJRPKOSBvggNwAEzKCxnRrk%2FT85%2F0pDNw%2Bfhj30pbG%2BvuFKIP4CHYGNx7y40QZqWNz6DB23a7cZ9%2BumuR0OmTMw5SbeOt%2BrrjSI9g9cJPJeNVofQXWz3hNK0qpSSpR2NJ%2F2zgwDufELvIAKXbcAN4Vz8unrpWrARl%2BbhpdRCrdphq6Wxjqb%2BwzR0UGHDc7SHIPR%2F1LtDVCBDm7ppDcJ%2FjyT4BdEsMKXYTIC1QhozLmqbHxnBK%2FtZK6LQ%2BghpvrwYgMJ9mMsZbGT%2BGI7CbpXy8fjB%2BNs4fQb6H4KUpTn1EYBYYsz0kEALA2YL%2FAdcAl1CRKh7M6cRinsKogoKWwwbD4cjNWTUbmHmnFFC%2BojrQPl6Tabvx4clsuJ3GDGMaOnI8Af%2BvhMstxDBWmj9lPlilAfHxrCeScF4fCZxZyMG4zmVhYV6d4OtXwXbrjImCXgFCSB8gXFsARjDrJ591PGbl3wDMyWEUdYff2b1Q3msJv3K9N0TtEiKpiOKw9lwTAqkcX6qgR3HxCsPTe9i65MBCoUmxRAPLBaF3GIiq9imlVZCXLm8uJRBPJlkKgeV0xEldXxlUEw6tSiy7goKS1ymjJEmDD%2B4vK%2FBjqnAZItklmc0ZvfzPQ9zD6b0tm7OCfTvdgUy9IvO2xM2uxu%2FqisnZvIek6OUBvAAyecWRhEr7Hnx73GI1jEzm2A%2FiIZ1e76fNsO8gy9WPxx7f2ndWq7XGFz6lEn9UTcpS52A8axiX9aaCZfJwHRAjFTDNtIvjXaKGwUCzUL6A4snqFTAOi%2F7V60GVTb48V%2B0lj%2BE%2BjDPrFvVGupFYMpECFAi5kS7sf5ED4y&X-Amz-Signature=732069852792f601946d1e4739827335f50e94713b5833b03e8386954a368bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
