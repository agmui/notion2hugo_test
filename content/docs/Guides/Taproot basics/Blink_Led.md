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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4TPIDY%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2QxQycfFBSDt2EU0A1xK0JXVmDHeWpqZHb%2B5%2FP78BwwIhAMqtzIzEy22piGlDfkGkuxICyBEc8JD1skzkXxCqLPybKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0s3xaYm0SR29j7zMq3AOo4RjYLZZALZUbq%2BJ8i0G8xxi1SMD3%2FSzADyrBWjEc9jlT1JcPH%2F0EdkYhsgp67N1ON7nltmfH6kvTjpyMqLpT6K%2BlpaoCqecewKUPrsHrJnGAHONXalr831KAPF1NeYiTke3fs1%2F%2FF6tyiaJ3bj1H4QtLO3R%2BGd0j9%2FsibVgDC25rFENTmO9Su3bQZM5GJC5b7Ver%2BGzQv0fjKBoLpHw%2Bug9UGpNIW4kx4lRJ4AsWq5Ps82cCBYaLNbf5DTMmTtOkocB7qnX6dGdh2NRqDH5yYdzdaVqBz1Iz%2FHuy%2F3XWAswmDoApSLKGmzgvhcOxA5d3hWjfPCILW%2FQ5eD4r%2FSX0dpH5ijNtEhVbjoQH4Y%2BQk8pI3u6Am8G1OfD%2FF5J2C46cx%2BDLeqpgSfff1lG0htex6jz%2B7xyYgQVH4QL%2FXwPvvIgK3xhfq55Oiy9KX5NsqnncoXH0z88dLq8OQlm5IS4FMqoGg8WvLTBUxU%2BBvrT3hnWCsiTZzidcwoAv1yjeOfUe%2B%2FsNbngBgCRanUSQ8QhGHuE64f5BfpLEqjwkuNPQ%2Bd4zt%2B8RFBlYInudthg7xDzXIUr376zsv7eY0Uj0liuGa5lUBjcvNIDclqnLShrjDbqHkl9y909tVzsHozD8g8bDBjqkAa0T8rCfuxQxJsGOm709FzHh2P%2BrnQBCCR74IK3BVqZoht21Ku8pe7i2VH1tzUFc3bUvDckoWFapwgg6QpUFkpiWRcci79mp3ZYTmtGJqi8UopRZsq13HnHOXMdxL1qBqo7v9YH70dEu3F8wvqSaifPC6TpHt2FC7KXG%2FZaW9kQUe%2FpKiZB5zLxi%2BTxh95uXDN0YghZUwGioFQeD3SERjUl6MBPo&X-Amz-Signature=348c90374f9443849bbcccc7a69f991245d25670cc801970801b533f617643d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SU3KFCY%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLe2ioc3wCxOBxlHBTIyI3qxg7E151C1FW9UF0C8q73wIgSixx%2B%2BXNRxMhQ4Zy%2Bx8WTeX0raSdw0aE9zIcCZqyYHIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOMmW%2FFyr%2FnHRGxCyrcA2T%2BjlDXFWcS7TCrQ3b2X%2BxhoXkolRn6IIRpyHr6qjZY6B01I%2BwAua3BcpI8VyCNx48lnbA0iS15ONweahEzYwDG2XeILah5NKk%2BOAHRDUaYud6yrqeV6TOyRALfk6c%2F0pNs3ycxVviucua5eFojG%2BWNOwPV5UlYksHZLMiaM9OHEUODq%2Fr9XV45mBtlc4sau6FwAPE6xqLfK0H5%2BiF6EBUwmAKdrY3612f%2Bf7SbK3dYe%2BNRL9V66d%2FnDZEny4IpWma%2FQxt2YCFBJpPl3IVeYqs6nXpblUyVioxGbIKYibK5ANF9X%2FP1taJl%2Bu62N5yQAicF9aHsrOesN6JcgKqJLJttqxulORR5GjkalIo6SYXAo1UbpwxQCpZE1HEP97rKXPKwl%2F%2F8tFYT8D4gkaZgnTlPt89Nf7C1syLfL2%2BtuQumyqyu3xbi2CGhc%2B9poePrgh%2BJppOndIw8kMe8KE76z1ym3jDK8d3aoUDqfgLtKe0nqr%2FFG6LSdkKBsIOVd%2FYCa4bUcoZCgeyHpFPF9T7d1aqc0Mp6a0kaqHhVY8gli%2FA6sylu8WAA7D9wwVszN9VntVqRV4eqSwhEDGomaDWROg4r8fBMEO%2F2zbdk5b9oRzGIjPNiBRHMX6kniuDiMJiDxsMGOqUBtpFXgvI%2BamT5JACgzP%2FiccoywzSqnvY8CPbWcS3vAevyfUcYZn0i4TCU75wpEo1PCDtKGmi8An3x%2F8XOcLcxEEzZsCOZH%2FaOv5asnmCMLNrPYjz4l2C03%2BcjbuzHpc31TknJB3Xvktld8uVUPwBujcxdWkB7IHjHdEpYoCbc19x9tHD0hAqZTMfxRcDs%2FuY91ye0nSVsxjgBmIsZ8%2BBajiVvuXTs&X-Amz-Signature=f922ae705dbf6a568d80445ca8e11042c0aac5a407b9c242cf4c52e700d966cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
