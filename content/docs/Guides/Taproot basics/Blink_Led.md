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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVD4UFF3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIFJmOKWBk5FGz8LDKAkmqcuk94jR4YvsaJ%2FRV9vN1zT2AiB4WXUhgrB%2Fu379yxjZ5bq8S8DITnyeNYJzo32EWRLUtyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTg%2BIo5kZnWxa0%2F%2BNKtwDTgZikzlAQeR8l%2FS7sO5v%2FzSP2ljY2b4RuUJ6%2Brh6ZIgxeuhPQDkSr2hRTzFHS6VdJITKhQYRqgPE%2FsYl0dt0sZpPYhF2ymMxm%2FxkPPf1y%2B8oRiyblkVns3uua397gTAwg4gM%2FpDhEEaIlHKSfcyx2yoQ07Bvm5M%2Bm0OaIlQUJeuO2jKx9byhMIr%2Fr4KRX6lFty6wSLUArFt8ugDGt9F6aNr5QueW5xkYB7w93IcCpVH9tlW0ZmdFv1DP4VCI%2BWDtErDkdYLYfVzmCDrHT1u9z9%2BhWTTzG9%2BZatgSEMrRCH9LgPZ%2BdQ4R7JJTfUSldl2XP47hwWnMOeMORhA7VBsKlEatibpuQvUUcNvvIfonWjr6Sy4Ga3AjcZ%2F6oqBKoTZFId38naWDjq66vR6Ev0bYk45e2tjrnnRojJR3Vvd9kVf4CPDv9Myc7M1dRZsGp9cFt%2BsOPHTLXJyY4muvHcTNUh72r9MBkjOI82%2F44gqlcj5Lnt15RGv%2BYwvoLVLYZT0DSv78OrehOUojMMJ%2BHz6q7MyWyNonbD7ApECDqC3GSA0b8UxvyenVhuIO8D4Yjw0ug3fmQge554jLBiWk%2FgyJwhSeqct2cTUt19ndEQzsF%2B9G5Ht%2FKsWJKYy1bKYwu5jjvwY6pgFvblYT%2BKRsZiXxQD%2BFHtSrTlu4qBGaveOV2XPzJyAYIr6%2BzgEwl7mR1ADK7W4SflGwvkdwiOKd%2BvAShWnmXgkCqstFJLNPzLHOf%2BiJ2ueREi2S%2BFQxY7eO5Xud3bzTdL5lt%2FhY0SWcfiPwjTISro2QVAxd9x0ncN8yzrD7mp2p8%2F%2BhnvTixVjT%2BJXVBKeAm9lkgwAS71%2BYcqNOXXRm0NseVN%2FDtBbh&X-Amz-Signature=ddbcc60b7efa061aebf7bbfef49abeb1f94bd34702edf610723474c8124808fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUEK7R2Q%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDJqL5d39MjhTVpVIIm1krCjQoU6a8bGSGNFT3wMqmKEQIgc2EBAYHldEcwdgN36yL2yP0JmqujoIrOJhU0YBSe1NMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBT0sefg16N3RnRr0CrcA7vLV%2FBSelHiUyDJMnccJ5l5ggHlCQTBhRpFPNAYlfB%2FhCgmEBbk2fwBJnlzrb6PNeU2Lv6bxZvv5eCCV1j%2FeiGvFRrC0oYzPo5dlCuIblN5svgP%2B1xSEJQXurPmDjmL3BcrEz1KLbclthg632ZXDS1Qx9%2FK4Kfa0GH%2FOKiWVdQVKA%2FSK4uMiqRmeED6dRtnsn0XaZiVM38VSD3OeZ4mCFglI%2Bu1SANi8WlbNXp5H66QWS1QmTmFMnkl6S6SOCMVVErZidpiRdqjGZzihFKuvixF0UzCmm1Bmp80m%2Fp%2FdwWzbB8we%2FMSVk7V4IKk4FJPtqPgPVTphNcYUIWPivz2PK9s%2FwKSLwVr%2BKaIp1%2BtqMFieeswbwSChXi4ePdZEFQoZZwIq8nvX8Mj3CXDHRGsjKvZhW63eN3bQ2wtVOQRqaUcOGzmx6tIouS5HcRoaheeJd518cttO88RKBJgiU7Mn%2FuvMoeN6Z8f2uJ6mPfAk82CCZkVKP4MUcBNzTVapg%2FbX699Pp%2BmmQYgF4OzthTMjktrwBesc664kkLvLIGfI13uagPtqSvzVol0x1mZgVZiuZgzOx0WG7SJ4vXfbVnxd4LQ%2B5QEzzqSlqniwr%2BQkcFgvQ%2Fy3dXN4DUqWU1tMIyY478GOqUB1OpxjEOe3qmdXSc0TBGN%2BrfZh7eOjK8W80hbP6R9qXagjpzEKnCNn2GYz269fvS8b%2FopXTDU6UBZy37hKmadmdOlAk16uINf6rXvrD%2BECk1p3xmLFW9TIXs3smo3BQlU8pAv1D2F6hjxoGPhLga4rAMvOhoonbhUv%2BT3t928R%2FD50RAHfLJuH3oTimHsmoA0s3ZDolvaOlksxIogjgbvgEP2Wm3t&X-Amz-Signature=5a1a5ca68029e556af2292c638e05693811396e0202e59ea58257189c881afc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
