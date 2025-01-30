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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWZXADS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb4eGyrSTCB9ge9MSrwtiRQo1pSnEDfVvKB8yVd9N1UQIgKCaPifiXl0KnszIhLzKQzoF3MDyXZ5NzDqN4WnFFT34qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLitCZDwkGAyMCOEOCrcA4btSHBcElop%2BcbgJtux9tTGrmd6xW783VJsGUyntjiTu7Mn9fDGlrZsFPllhIoQfegEHgs48JQUsBfsX4Fwaymsfu0HgilaNKKqaqCWVIvOdO%2BZoVFAtkv5FlJIFwg9WUyPHmXP85aSOoPoGxkYZJLF%2BaYDaOgdH3slF7IXLlNpMcEPvRUIKXQnbTeYE5nfYotZ1mDJT0fIT3efaWA6L%2FrCJS4W4J7auwtSpdgkghnYMTTCRqkbbW1k%2BPnK8itMA2FGR%2FA2LAfgKdykBT2Ishfgssyhce01peelvBfRp1Z%2BvY0JKbclkrI681LjpwIMFl5IL2iBnt9XlGEukgf%2BinGo4uqHK57gn0tX11o7mOqk2bMjCnrnKseRPwSjHc4Yl%2BdG2LSeyjjR92j6kjTnrPJ%2BV7bn7nwJdes0DyqUacRgjS0JN2z8fAGXFNY2NIbMgLRix%2BtX8wUfZ8yF72Nbs0P3ctEEkS3GHLzmZOdBFUWyiHckjxuwDC6PMHnjdKjqIXUL%2Bk%2BFBmpUS89MtKn0ZbDQMDco77ykjR0116HEAKTYyPZkfXvmkosn6AkwbjZiOKKlPt1PXwhHmyVzZvjg%2F9vRFrENn9NIbnoX1AXlPO5E3t94OEbgwDDDSFaXMMDP67wGOqUB6RA0MIhy2l%2FyZf2qu8DorRTrhlWt7GAxpa7PA0uOnIxPZCq9W3ZZbTZ5eF4KfUOTnmFL0QMDYcMa37aMm%2Bb3utbKmIih3HyOULIIMMDwrWuFiX8m4mx1dMa38inyb1jrFwFKHnPVP6%2F9LQAVDKnNsjSlfh66MdvfYCurpvpBRkH3bhfieI0V%2Fbho2w15Ku3vzqCr6zA5wtXjC3SQ7GKO3SElloMQ&X-Amz-Signature=2305271da30f6f802bc8e6814fa7db70a4e779815d805a3866ea43adbeffff2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDV2PUJJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKTbk3w%2FK6KG4yfHnA4omK4Brq7BR3op%2BgbzPjPfuObAiEA4Fsr6tMJV23%2B3%2F7ycWvMlywVsyS1FQBqkYKsuFCgFBMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaow9j%2FCO34hAXRfircA0AGkz8p6qHS2kJDUeiWljK0bsOceJTwbtWWtbPu01IQ6yN9frW8jk8nwnzAk9qqhuyHm4kYTvfxXfeeWUhsrOrNIqoQE7cWf3VkyBJupoQNulxfcbRWGJFBuLV7Ju9oOUTINPKgnmE9r5mmNt6VMp2h1%2FkkgV8i%2BSIybChoemO3znWsVpsuN7z%2B%2Bc5Y%2BmaAJTMIZDMC2gbS5m5o8LD7Lk3dkGNpprB%2BO9058zVFCbRmAjkUn0jxj%2Fapg1DpQ3L7ahsNhwXoeEEvmyvAjptjGZSYYuX%2FNImDoL1EKu25S1vFtxPnsWG6Q1KUo5kc7vFNK4kHmLSnNIaAoujxofuI%2FsouLBulQ1Aczivx4jGW3DDLgR%2BgsQJ7gVYyYZ53oIgrgLJodUFhaJW%2FcqAB6jrcuqTpOxr8MmERPp%2B09Hxxeb0wAprJ%2BCI6HGXRHeESxEdk7wxCzAqYp6zAANB72MMWjJ%2FEKKRi9GK9BV5UkPZZXYJyKKgjbZMtTeX1%2FgGNvjXFeXbVZE5W1evIrCJ2yQXBpmjJ%2BNEx8Hd7FMiN4Z5mDpbc4xgB1hM9k7SQAdhCiYT4sHLYolAamFnW4msqLNvgqB9yMbXOCj8o%2BP33wf9avP%2FVO%2BdWxdRPmaScYVVAMJfP67wGOqUB7w5%2BBNBOnKAG6hve6kXRFWeHSE5S5MTdURLN3ZkfZ8LBe88lJjmWmChtYDi4PG7doWK2Amx%2BNRkiJUkRq3pHlRCJJYk52zXD8a9y3Mfz72occ8wfMRoPLMI4ThjB8eAYh3EyR6wCjZBM3pf6QJCJr%2B2y7B%2B7X28dBmShONi%2BADTQGI82H%2B8EuKuiFBul4BKciZzo%2FaPoGALZIJlAJz%2B5L1MDCp3l&X-Amz-Signature=7012365c4b98f9d5f7c47968c1629f34c5aa9dbfbef73115f8f3887b0671f68b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
