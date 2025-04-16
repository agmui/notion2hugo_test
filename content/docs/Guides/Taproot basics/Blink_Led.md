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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6CSAEH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtZy30MGBtrwWwzCD8ADlYw4dKeL9QGzG0S7vvhTI3jAiAPQ3tOl3F1VlOksz7jXnCWZOIOMSis3Ca5ENKZMC%2FdRyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMpdVW7Cl9Chp4CDFJKtwDD5tKKWUhQg66cctclfXN8HjxwzZMqh0%2FIGudVTiQXbAQLveTAyy7PFqWZEc%2FuGA%2Fq7Fh5BwR7a%2Bj%2Fq9jDDddaMshQHW215gbqoslBdTmssRD7eh6FO%2BkDdQwnDAznBnAzcilnd%2FeHPMP8xFvSy77nfFjTiTTe2rjpp1bGy7AuPMLMH%2FB%2Bkh%2B1ckXYPawAmWxm3PwwzSsqCRBYh6vAumsXTXpuz1l76FAFDuZLGjXUgP07ca9Bo%2BOFRcAPCDnKUNE9BzM%2FIL0Bbdpy8rCzV4HiMoAbxWCwUNX95OAyJAeuEf0P2%2FZqsY5YlGqzI8wRE10uwjTvy4NHAZpSiqSwEyKVVJVdGAY7uiVSfGECsUevSkZqjOzZ%2FQyzPacCp7blwMIG8%2BbuBWQYiWtevk9Loc3ROjKtSblPmNPeJcVnIjYv3FC8lzuMEUcsaQSmYsZ1Yykselx1RO92QMEN7hK7I%2FnfmpLis7RNn3jdnvO22wlZrTJrxFGkgZBi0FWftjH48mY27anmZibPzR2m3y%2B9BekZr2HKsRzPBLskPgnR8%2BKoHDRTfszCpGTH2%2BYu3r48RXiFasbcvxGReELbkp0mu0u9WRkJ7dBvC33dRqU6RcgSTzXrhmnolVdYatcz1owq%2Fj%2BvwY6pgFJPFC1kn%2BO9ngSK%2BEXxBTovVd87%2Bn8fbwBihD4ANeVum%2BU56eN4yRiJrxbGXY0SJ%2B9XAW1Uat1W56LqGl9cc%2FbUfIqCpTkeVy9Ev6BELFQvXvv6RMty8NLOWSumzfosIPErrX92R02K9EFjFP9tH13AJjepq7kbZASduhD8HFIVqJTwPz3TDPs5fzNCpTr4r23sJqTUtvQwyvQJ3%2Bs43VUDICbPRFk&X-Amz-Signature=790c53b3130aa219d0f3302f47e0862dbbabe8a99383fee14963670ef58e1997&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNGE76I%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZW%2FhtC%2Fq%2FDhTeZ%2FbTqTcsXslJg9g2%2FFSb29VJ8rgtQAiEA5MJUKucNDQ0v0ln%2Fx7NlhSWF5%2BWhPpO%2FXWAjKlk2%2B3gq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGogxvV6aAE20yU5dircA%2F%2FW6TGjD9TdfMNHhXfo7I8sbmBe36qRYUDRKHeRVQPDp%2B3ZZtbvOpWDiUQjxCS7aEB0c%2FFaYPRXHErGFkhkyDey504plS1aTvCdeythJH2%2B5lBJ5%2BwVwebF%2BHQQYWQ4ktyRyYcDYt%2BnLs4MQBaRP4IwWMSfbS66foT%2Fa738rtsAoi%2FR2ChElwlBCX5IdG9HmeylNxVVzska3UebSBXvdREN9HKVEvFGXE3FYey8O3HivQx78e35%2FWAic%2BqujIOsJqTUVyLhOCM0tTopsAaYoPlkSwbMk4mefkA5t63evCz1ImfB9kuXlZBjlynMnc4kcwTM%2FJNWYES3BCVE1zvbe3aRWWjYSSKeJxq1SukDdWLT78EOVY7WY6ojuOoW6KMspMuu5SMoDk7IAljZ0cYMyrudK2K1X1euRFl%2BwrJLIfdsYFS%2BxukR437kF2JC5E72C4k1Yoz4OqmL8qpCDeieKnsRpXrC23kigi0wMk1SOgSNfSKX1Xh4G8bHod7C6i%2Ba0DrDYUIqywVX%2FNcQ917lK9ciR7UwqB2GmHcoP2K4ObSygagxY%2B6SlrFfMyZkYDlRDcJbXvPPOqG14HbsPUUYbxFUpmuuW1BrV1i%2Fuerog4p%2BLWoMrBrZ7MMOzo4DMIL5%2Fr8GOqUBIgGpb5BCdtzVekAsPAvuFtaCE%2F5GK2t3aTW5v%2FuNty5441Q2tP%2B1lM4TADozR8uN0KUlKswhZT6NGInhdQl7p%2BZ2CaqbRInGcUfV4peUw%2FK%2FEIG%2FO60UWMWl4Nv1ciMUDTSWzVJ8ffu4cl4RXohfksUUO0BAqe87EnpCqq6vArGQeWWDTVb6pJE8HmTRIzJjoYYjqh18G8s1JuctKgcB9DA3TxfS&X-Amz-Signature=839acbd1bbda33532a7ab002423a65589bfa4f8c39a48a82125b5155485d7abb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
