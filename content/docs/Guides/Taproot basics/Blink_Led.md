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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C326KSL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4xyUy%2F9yyk3%2F%2B0XlA7QH6JlslABLztd6OWypn6frwiwIhAK4RG0QR3bBb5NxFMeJeQZtdecmKc6Vq5RBocfk9DPDjKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM0vpmGmgayNs%2F%2Bf4q3AMr%2BMGq7AuK%2BCXho%2B1yTdoBB2d3nBfUgIaAdK67YpVR6KQXsnnR62XTQDKtOtKMJR815f7y%2BurNFP9e2E5r0GONJ2NFd%2BNTQKXmoBGuiJ8eJ65SWne88kYD2qE0wVntnZC%2FkXXrkhPPvWzTStZ9MemQ%2BCoK9iHJb1qACSAK2f95PKWf3vU51AX3nHNc%2FubumvzuDow45yT%2Fd3OIcFZ6%2BwSoP0TvxhMAlPoV%2Bz%2BylH5bRyd9MD%2BlX7JX6xm5RjTat%2FnuE5xtAMu7EsiWSOp4UxhYOxPRgJx1Kf%2F5qRe2%2F03NwMNKpFeBZl4oNxQcMwMLkGPyBLcqrUEfAbGkfrd9pion0Za1XgRNQwt%2BMwx6bzkdJzjZ7vvpHTyvgHmh%2Fl5NSoT8XeLKwdJXaFMtavO8OnIwlj5iNBYqVpCeC8mdZXAs7i3TeEIAbFgC2McWfE2LggVop3EwuiX6fJ0f1LXzCHXRhHahGp0GH%2FplbuH3O1RPHDRloyujZ0OcYlAUFUTtaZFkE9mpfxn9RQybZAw8cgfH3zFqvrplfx%2B90jL1z8HsjStAwTpb3B42BXSMkIDqrKQOBgoU37omBCZ2H92sw7gZXml8wN8MZMASyJahvkNnMkvxH9QUjHdMNaLCzjCd4pfCBjqkAX22JKgOVcOZX2s6f8GNek0wpOpCvl5df%2FBrULlD3200XcNvqnst8XS2qaqXDmIcZznTG9Fq2GPYvdJ5ofKXygbj8FBTSMMLhVHNoFvRNJoLAK4W6AbAotlbtI0ClRjLrSwcRfSWeEDAyjaU2ny1lzLvIwgC1dulQRF2PmtD0tR6vgaudzCMSUa3qHuGJmm8dpENF%2FRhF9ec8qzQD1LRostPTxGl&X-Amz-Signature=0724abdebda4e2e49df485439e9cd91c2a658727045462d2c0102f0d07b1b233&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFY6FU4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWs0hLDESV3%2BTERgvVSa8vK9q2yHcCg2CF0bVPsl71sAiAMhk0mDxEZWpQQ5rDT4qizASYY9QkSmqDSnOkW8ix6wCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBbHI0xfdx92ibYEsKtwDlTtx0FZLNnjYCdWR3pLUjOkXLi0zEGfRfCFHQbVfe3Xi99HQ58eOA%2BUXEHa2d%2BboTm%2BtTl4Oad2ZubEuTuMVsRITr9D1i9VbZnL%2BM1eICa3TNqpM1Z%2B3Jeho%2Fds7yReNEv5mIFk%2Fpx1dwEohcI%2B0EUGmdo86Boz%2FdqOS1m11gR15H76JAYfijm82CZjyGSXUNhu11njF7Tav3P6uIgOGRNofyfdM1gPH%2Fw8bgKDQwsPKhpQMIaJw0KMg9chb6lM7hhmBQ2TsTd8QY7QAXQWw%2F%2FzaFt9LxfXgqlI%2BQZ2sDBcDmZpLv2SkpbVmxxUiObLrFagDPC4MadpzPHiAjymNOa1ZD0LEcUOE2m%2Fy90iJPIWpFmtPZ49qbzaXKjaQvEk5DfnedT8BRcDogiaLvQc7TALkWXqEa9VWtawhg76a2LZ%2Ftqzkxhl2YQkKLMyUDWiZslyRfoxkREYt2ssZjDjGjZFeLdJpwQFtFTrHm88dJgBH%2FTYOf4iU0qRwhWUBDcJQICu31OXJ8ByDrwx0JqdDL%2BGUgHycEqC7JrIWfdlS1AmLjFwZZnbeZwvhRlFtw20MYGvbYNQdMdW76n5sJiryBrGUn53lCfAkEj02ENnkuBfYSEY3KYCHLpBZwM4w%2BeGXwgY6pgGpsirgRJwOk6wU17WqIkNTvifOxwv6Y%2BpgCpzruh6C5iGBfEHC854%2BzKyr8Ty5agPj3iFY8w9YQZxnE1IRyiwVBGdohS70nmVUgk7jjN3j4UrJbrSokJo425FZGSwPVyT2YUW1IfJptRNlFJtUkZaJmKozraYdRTa5oupkqNTx8U8sbRR16lmoeBPdFxp%2FQQpEWOUskQS9JSe0FcQcbtNiIRGntbbY&X-Amz-Signature=f9609d7ba9c2f2e4985a0146c2433b1f35954daeb40fbf469c066df4197b9ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
