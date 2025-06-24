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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQG5A756%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICBs2AXGB8ksvKSVyC1SdzKvhcGxQ2dW7Ms4QA1Ki%2BiPAiACma7lXGm6E4sUTPH4bwjgsAkpm4cKvkqfqi%2BtQ4X%2FByr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMorv%2BuHf2lFmnjkcmKtwDlwOdxayepDAm14QfZe12S%2BsgopB0zeTA3BkA8fWErIYe6pGqoDmrOjjHf%2BcX0tjnhrFvhixgHRuhKOX%2FUaccEyKbwahoKoLcdEPNpfwipu0Apttlng1hsUebX6HWTZKONgxraXxf3AN%2BfjKY9F0EkDTlC5PZC2S%2BSvqm36TwT3mSABt2NyHLmqYtWfA1CiSzmfkjeavtzaRlk15nhiUluptH1BmvuwVqFDAAsPIoS6%2BZJUoTAjVTMRlult3JCkA4jlXgVRQ9Zm55KvEhmQ%2F%2BPVG7rH2i9GXAZO4btlUMoMx8QVd%2FfY6WsAndNFvi4lLl6lINkgf%2BVpD9y1Unn362tUDp%2BkLIZLQ24W6sgS7AAAvjhaqWn7vO7rCegMIi5mvM%2BAOuAVXe8Ft6qb4wX7Eqg%2FBJQ%2BkRvR7WxL6ePMIG%2Bd6Lwlbz%2FVFHSkQSqv%2F%2BpxrUUtyF0rEuu5XaTM4OuTQFWt2Tgs6KZg14d6Md%2BLnUf0qte2HkFbYUaEdeuIPR1meWz%2FThJZWpsQzQdpmj%2B%2Bi%2FSkDCn1TBtXr0XBecTuVVrJmB6wC7r6orR78KoKnd6vGYL9e42gtte2YkrCSPzgPLF5HRjfj%2FMi%2F3DRf%2FM%2F8qgxu0cNQ7s2ia3hjRMmQw0NbnwgY6pgGxcc4jRLdwx8PkPvOIl1I7PeV969y1bFXN1nTzx%2Baaa5eLa0af3q5rIKMoKKHvdJr2v02Gt%2FuJNKYQSa2RsYyCpbf0egtj06HAHKAeX20frVs91uscrcxVD3RQE4g6w1f12y3r8mELzElq%2FKwI8XaS0LriRaYOmlfVHAuKPnzVyw3N3Ycv1Bg9UivXgiWbPSv4puvnJX9sC5a610gxU61sNKyKc2h4&X-Amz-Signature=89326b484d39063b07e48e1048a4722f2263674aa0ec9c3999964b3fbff58579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCLXDRV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCN%2BJT5Q0haF%2F7r7IjA%2BXStkdNT%2BcF0M6b1t661ZQ32CAIhAJ84osAZe0OhU1g23K5%2BzBXOf7ExnUnJifRjnE6yPUjXKv8DCCEQABoMNjM3NDIzMTgzODA1Igz8AXdl3CvIuHnshtkq3ANvGmNx4j233sTqc7eDl2hd5uemn%2FClIfJAaPx%2BqlKm5JgVFjU4WCVrW47QEac4QQzdX3qc5TqSu6G36ol9wZ8gzIqqWvZxRAO5eor06V6yAa6LiAhPBX%2FNSEvxWXG%2BGCiVKRvIKt08vLZaHT6KY8yCmoU%2FneXP%2BeUGsjcwdElsz8kKPJvbzm2T%2F4UqUlS8ATxBjrbZaZJEeUTPehaZ58wcVWmtOAL0OhmEwu%2BrROeT1NWFDlEVQiACiFO0TNadYv9BfiT5sBn5jQctsq0p%2F1xI1j7OGkpBOaLXjdkTfX8DtlyuHIC5ssDf3JmLN2v7DndkKnMhBOPETipHB4IQMe%2BNh3Ut77avRMFH9fi5aaN2JuNawyB5EPnKQBc0zrKi2sXI88whglaLrY5W4ivKIPrH6Z8fGEqCuvbXKrE8tiS%2F3Ym7D6aspnevYt35neEf7X3EoZmgLsGvzt01Z8%2FfojDBT%2FIkydLRmq%2BUCtU3AY%2Bl3%2FT0GofbGV4p%2BOiWO92GeT4yBaMfxaZ3z1PUtYijSLe9dpVpSBd0NFkkrJTCKKCGtXZje%2BjFyIVJ0Oe5i6tUfT2reNM5uvnAAhCuXbZ5%2BiygW9agaQbSrfd%2FLH68mtZZpPpdt48F%2FA6w%2BA9FlDD%2B1%2BfCBjqkARw4M7rxptQh7olFeUAfe9eUd5AZcBgkUEVk9yVh2DRF70DgwMBImQG40Bw8v%2FFgy2k2SP%2F0hS0TbpUFKZH4z6rEkE45K94Grs5hLiKRGMl%2FGhiuq96s91QcQWVoLEOGASE2ZOstIrSlLVTWDmcxjTlhEeo642ocUbH6swAz0ztBfwRC62Ffg2tc1wvYBK3mHJSKAtE%2FL9GDQjIbAXYPp0Br%2FWbh&X-Amz-Signature=79e176a9f2dc9cb3783927d659aa72e910fd73b5a2d9cb3e41fa30e28419dde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
