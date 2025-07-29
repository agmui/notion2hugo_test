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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7ROEKLV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCl42l6FseVtV%2BOFqWfS%2F0xTBTFhhDzUvJT1BDBcNSEmQIhALjla9y9O3YPQH9OxkfykScrPmq%2FmsXL904g2riFlO7VKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE83Gf5%2FLSrgHoMIQq3APrEhg8AyNZ6soiiVv4I0je4IkBml6R%2BO7T1fL9CMiodilPf5%2FUoyrbJ4trtz8hvbQqib0ZQafaZMLZuNgpr6lnF09YH3Yw6jCdmYsm8%2Fvf41k2JwYaCv9KeQBKRtMSaubMaDw8bquFEfF%2BOql1at4is4L8X89FfbYxJ5duaaGL%2F%2FxpUZJXVaTn1FeFJKrgU7JYm93yi6%2B09%2Bmke2tmS%2BHFzVfhp%2BcO8h25%2BNZN4jprdbNyK%2BOeuByO0si9osrI%2FOzpOW7quD1jonQ0hTS%2BSvM%2B3q0ySl8%2BbjNvvCtfHaJn81wbjyQVUtHnyKoOnKmGmHABMyZxP1MD30vNfTV9bExIcCnNsqNsZRai9o66G4Yv6BVUIVZQEQGlRPFWNEOVnaAsBkqhKXjyG7C1wGDCjOl8TUhbp8nEf3CuuNjHFWOqeNVLCbfTCo3H1peTHhixmOBmWXRYdBS3dcXVADaZW79p3KYxIpO342QFvexZrTET7A9nCsVNliRHXJoItUyEaGYZXX7RIT4MXfMiQeZddqdW1%2FHhZoRS5EIYqs08OqUGkRKX1ihDdgpaq7Hl4E%2B25bHFWlDFY1lRqT75kbH7qgz4ETXfo8kHfrw8isrTumU3P6I6BrNmJb1%2FAEh24TC1zKDEBjqkAVCxuW7AVT3DOuNxTOf27CkzJPEiKp7TQeHDLy7R4IMcQhm44NnKFNszZB%2FXW9mRTAoygUZSW3FXpUnUcsIA1EURzl93PebPvpj9%2FPf1oacpOw%2FGKuzA6svfdL9VEsEW9L%2BePP5%2FmemBFCelNaQEiqQuVTeuJJTnRb7Qi%2FPgbvGjPED8lTnvX3xRV6YOSIszh%2FeEhnDlAiZl5Y2eu2etCFuxJAGB&X-Amz-Signature=dfc44c0ef6c35f791f832984cdce14b85cc6e9e6df236f0825df29798177628c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPSRJME%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD3JeQkinUNLQtqwlA7sosZjUgETM38jH703SHp9yOWRQIhAKifASeFj%2BE8euALFgRAGMl%2FKmnAYZehW%2FcXxXH%2BFH3MKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxduzCll5PrkZoSohcq3APbMMvajMjbS4IkLgo51vvYmbnT%2F7E%2B3W1HijKXsmMoE0fb5pFHB3Ncb5%2FMlEpKHIK%2BRRLm9lt38ZLUqS7UAcN19SMbQ2%2BgEeOHtX23%2BbdgVnCv94e9J1X%2FoimGtVSFpHDpA7qti5LqLyjsxpBZ%2BLyDaPS%2BmYU%2F07CByfuwD8Kw%2FhrD7MTvVeNybcCyWaOPO1aqR9T7p7V6JjEb9o4RnaKQPCY5ohaiW3mzfhuJ3fQKzcuV%2FLs5EUIlbC0e%2FTPQiOK%2BXSsv7al4QiokbFtqaKocPCy6NY24REZGOj5%2BJLE4b5NjtFaEIpHti%2FYiWq4XVBgDqWjp7t9Exm9asz9SUYL8X%2FXTV5q%2B%2BMUcVDtilrNC8W4nvhHg0icY8TUNedbzIh3cSGn8sxE389Id3VlyHXoTHc6e4y%2FZKSUr6jqwCU12tAjsOFK5ia0pwwJbHXdTTlTRuJpaMpC1IEOZbaDnumkB%2FIdt%2BA3WvidTUqTRNbORoD2c0D%2B3sqEnMD1%2BMRw2LJRJknM9cP%2FiR6LdlpkphVW5bFRSp%2B%2BFylYlZIJiZv%2FXBfewTlU%2BVXZ8Tr1s%2F7EKXnrZXYCMGW4cL3PRkfLYEE%2BdUEok1SUqxeEhD4h8s2MLh7%2FCK%2FhhBNH2ojahsTDMzaDEBjqkAQqw6PgoAYZpVr3vkvtxfWBlMbxJNR%2FsfSASjZ14Ns9Jk1AgP3hwTrYmG%2FV%2Bhwzzr%2FDY9tTQzwBrxadVBgrNj2Gy%2BX%2B%2BNRZWpSpHtI5s4QwP3gzeFrjlBGyOdyBk62WQY6QWJ76fAa4QuDTiwqPgIrma6ZEzavJEdfLkJoOfVZdL0IX7bJV1F4t83NCBKodpV4DpoibuHG4chkrjXCYJ%2FDeLUSUq&X-Amz-Signature=ccc0fd82b34d1863557aee92635202a4b9c2de5f8d0b879a575088c38546e8af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
