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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BXWPDM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDapY%2FL7pyt1L6IVyNgKLbSKDS9k%2FzDl%2BXHwosXcUym1AIgAf1Qj1pvC5bnVFyNRe7COCzlymEV3ZLMrSg3g%2Fn0oTEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIYAQTkI54XAGqO%2F6CrcA%2Bd%2BntBXp5vNIm6OLwSBdikgb8D%2BZdkE3vVvIasgK6aX4wycEe%2BJcwRexJqyflNhvVCH1MJ5rNt8B3noJF1VG9symSg6Cj7hFCFUH8%2F18sDYfO8xzp8Nfghj1c8PbxgYTqyYEiP4qjf8QzSRP8SH7XGASno75NpoQ0l%2BIvUrqIqrOOByPJ6BEUAXpQKvwlzmiUuZesbWE%2FU%2Fi7jVDQ36oWsjFs%2B2JjFQUiB%2Ftpkc%2Fj%2Fi75F5BoN323jHGl1u4xfUeE7qfzLsv1U5AE6Q%2FLMbLvBi1XPxmC3DKhm9gLSy0KRo3IM4IPg%2FUU0cuZoaUP0OeS%2BukFsZeifrTGmH4Me93digidQ6ELP41mJgJfkrsIBx0I9xzomPE%2BIWDXjg%2BMWfHtdU94%2Fe%2FwgXicZ7MehjBH9Nm2GLOQMxAPRb81sJBWC2Sg2DojieQ%2FY3qeQ46Yn3fduO57VZijSQzF0LShoB2iDbvXM%2F6Xd3iBDOFwlk%2FQpFIv85pcyZeIeiG%2BwXIUK8%2FOm5i5ZEZsuWdHqVreS1kfkbw2wQrQHSaddmtSiroryDWnzlOiCaGwOdfcB4ZQMAo%2B43qQMc45Y2hYQ%2BWBXMDf%2Fpd6%2B80JXz27AejsgpVkcyBv2EWJxBDo%2BAusPmMJHAm78GOqUB6CiB6PciOtTBnetR7q7ygBuzqLoSOZO%2BmAHCziuKqKo3ko4pPGWj89hiiH6yOv0IAbkW0T6M6y17KSbd00Pvkcwpcfd4edto0sNsjHloT8e9V9fEGWl6TxjRjiv29xHkr5yxVy95FZgmk6J9MLFMCoyVMwtU%2FDfZLGVRofFrmLTwNijtlNogIlmLDeZHX9OR8cIT0dFBo2yWasJgPG0b3eCAIMk%2F&X-Amz-Signature=9a96945379b09962530084c95ac8411e6dbdb6d9f406c5ecf0e0889aab2ac0c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WVIZHR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNbIz97dS4Px6z2Li8tdxUYg1o1R%2FwrTdQzvHPHIwlFAiBezRavhWQoUwe8VCnu2PB%2FLzFyQBDEbiBeBeE235cS4Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM7VHoVOSGwPWSnF%2FVKtwDrcyMgE5C9%2BvDXK%2FgTeSc8BhW2A1sFaVBhPWTtoQCcW0yCJQf4ISN6p5c5bRn1BqPyVxADRJH8byqNrun2QsaLiPE4Dr1emDka7ypJGFhxwJQ3nTSOp4qIyOIHd%2Fkur1RfKvjOai%2B42%2BJniIr8R8qGS2L0vo%2FvhyJacoH0gxYIgPjKaldKgqH0l8a4Sh2apFiU5zPgDjXay08BMWb5MuLqlJr%2BO7UFbxAgc%2BJemGznks4MSCUfEs7uKHKOW12eutWn8hZdQ%2FIw9VQmTyUXd2%2FE1443VrAukpGg29sRG6Csw4a9gRyFkhxfJvPkjMmrKyR7QUOJL2NgNmsQC2qhOWzux4CK9pQp4UpwVyJt68CuYPxVSThjgTRbyjaMz4UIDkWnunCKLfa5YfmoOwjJZaZt3B1RQYTKZJoHmMxCoU4diKqY0EOO6CSqseiMNmX%2BCW7%2FIydOPjWTipNqxqbbML%2F9ZgZjheo0iDobyt%2FK8K0a0IB2058nn55dJo3X6HDVSS6rvK21VDfuV%2BUPmt0szc5z%2BCR59bjShbEYtzeQaBHLSmcQAjB4ftG9lq%2BzVBAuo1d05N3Lu0I3HirLzpBWyXywt6HPx2gELszRiiOUb1yakQncuf6xqita4rGg1Yw9L%2BbvwY6pgG7r04nWKsX1DmXC7iw9vvVFhuyhOx9zvKxkPSwmZUlB6rOXgT9twn7L%2F2cqDdI28yzsIZNX9KABaGRQMMtIVoch2B898K1IcEde8K2Zp2i5D4nMaX41ec97B3TqiK0mDYyVwdHXe%2F3V7cAzyry%2BBXKzxfFQfnIo2DHpnR7ZgWPdxudrUU%2Ft7MzskzC%2FrPOIAFACnhtPUEvDdMC0sfR%2BHoFR%2BHv%2Bx81&X-Amz-Signature=5ba9df1bf163b5e7c59e19134005ff58230d753a390ab8430e7b47d9e23d9664&X-Amz-SignedHeaders=host&x-id=GetObject)

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
