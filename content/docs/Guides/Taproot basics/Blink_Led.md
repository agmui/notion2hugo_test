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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EH6XJUR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDK6x762lLsBvJoRRT332JhKfDzS2XFwJzW%2F9g5npKvCAiEAjwOKI7EhCZ5HOLwdUnMS9FFacRKnViTEFXgnTeoIfaMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9dY6ta2%2FjPi1IcbyrcA7L1JtfIUA5rbH6FY3hczE9QL4ic7Zoq%2FqW8Vf9zPSq3JcaXrKbx9XEK9%2FW3OH%2BeHxTMeDuAqWeblMSkmRghgsD7ZGwNxVMwc%2Bf6tipu3T53nNfgQGnq5ImQjVPgPzpJpgSMIJ%2B%2BtN1CDc27XNp7%2FwxE2xKrr1rAhvfWuTDizkstFPnz3maU%2BoSuftlNNn9dJHL08Am%2FRkgkkQbI%2B0h9AFaw5u4s%2B9wAjAYqe3y4dm70wbTV0eFt0Tbm7aVfcs7Jvu%2F2X7x%2FlQ4rCvsINxKt08Niy5Z0iUM2QY3uNWvJ6auyygjPxNy8eI0h3AAt4af%2BuTnthonsMSrt%2BhRvgUOP52X625MnKk1mF%2FuQGt7y2ODbLF7s2NLrp8O2XoK1aWyXWbs8QMrnxt3ZIEMayXIJt5jIjVkFvDJ%2Fl3Bj2WjhwRdIoulvpgPu6QpBpcEaP1ZEF9nrnJ8ru0CmeNVkMILajB9ZIxQalOr8qf6X%2B2lwr%2FU9kPFJ1MEkKQ%2FKQYywAZd7fhYmp4DCNrHkm0FPBzP2hif4Cv%2FkRuC2hqAVxfmg%2FKrsRnbh3VE6KIg0YTSGUfBU9V0IMXWr7wl%2FkHf3FtMCtP8NVSYGpI5Yq5j6lBHztrowxulJMtZ2OTzUGJpXMNzLysAGOqUByWMfTGU2HwobIOaSkA1wGU88saX4QDfEhykaQnMrWLoF7f4SWJ5rGEi9lC9BTTK7ZjW9GtJgWWzOrG7id8jh9gcZGB%2F9KFb4a7aqPm4wWCh0xDQx%2FI4qMRStAaa3Ie0UAd%2F4oH1SvgfC5WyIgnbLHU4DyjOKD6WcnDqyBoKglIFs5usfYMHXkhROVCZBSzOTdWHivrvStuT92CX0VxVh2taeUIo%2F&X-Amz-Signature=3231c41af8b35b350a917c58da17ba39efe399c8946ece0a79d4e7e613bb6abf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657A63G3W%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAw0xbQsbu0jMveJ2ldFQzppYUJE%2F0Y%2B2ifsKcro72HLAiBY5Brsb52FuVzk%2BlPxr1BUrIY1CrlkLNrabkTEi22sRSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu2VwlvPQ%2FDcGx4PIKtwD0g%2BzX0i9Na6W5%2FFHaauSUKXtCzSSYvhfPfSz8i0%2FWkWdJcXjGbJ3fiBqp5UxWzJJCpdkVhZzrdrCbV2ia%2BfqQ2JAtewvQZb8c37F4IH7Mi8guoQt7ibL%2Btx4FBFHS0af%2BC0vRXBzSaB9opXh6XsP4%2FtRJfXtFca90Znu2ZRGYOAKeobs1AXy1JDIhV3I6B0mZMkeqXzv3X%2B33C%2FbT8VCm%2FvYTZjFKGReyA%2FAFop2yHPZydpavStUYBcXNehkUeJzAp6vn%2Fm2%2BNznngg%2BTppOqKNLrSKS3qJeLzQBxEoB23ky1Gc3eewWH%2FCPHZZic%2Bn66zP5QAouKEHa%2Becoif6naZ38kUVL8TLF%2B%2FpBtKl2BwOs7Sbw6NHplW%2FZo%2B3dW%2BedEcsh2Nu8L6RsrgaPHQw%2Bvj0Q0Mn9r6OGRnTAD47Ue8fIUZs6VDdtqOQRnXH1sx7mcMfcDN%2FNoD%2FNaIVlWRRGkBteo6IWpicc1hlqEt1ZlY2d46qyk%2FtGOSZWRQ%2BXM9KrMy9U7tSsRV%2BQiNRmSZeklwLVXgVxhi8o6pwtdB7PKnglk5DzUMhltiDaG3lM9Wa9hPH4Bd1b554SKbWpHr9HGWwkyvZNrr39NMZFPRCI%2BUSAg1QxhmW1lhnUzgkwm8vKwAY6pgFxR59AvzaMOmIow4%2BGOyaShNW%2BANz%2FKhc800pQ26tIu34AacthwAg1w5kbO0GJNUss8brm6djLXxtRK1%2FZAha%2FlGGT0zYLdhxiEFUSPe1hTxKEC6KdJH5w7zgjQSFkWyI0dQzXb3MpXHEY2YQXQx1d%2BmoBsGlQJmPfGcCzSalkc48kRCvbsMyRv3HFvE3pVPtq5aTKSCbbM5xXNhZMdgngR6fnipKL&X-Amz-Signature=a88e2e483da5aae00d0d3bff6aeddb492dad088db42a473143fffe6e0066d80d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
