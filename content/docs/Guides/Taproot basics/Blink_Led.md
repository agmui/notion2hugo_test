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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ5TPKME%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmcpD195%2F4k49ntQ%2Fc9%2FolhhEAhbyS9mJmo2OfqAu5eAiB2uM9Xs3Jt5Xuxc1yKDsteXbNnzrmGMNFEr1kKfGpJOyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fipl7KqRgdEiPL4zKtwD0F3WuqqgJT1sAyLyAJw%2BgcPmMdRsBtNbjF%2B9zRdFkvWAlRBf8In4qVMXaKZ1bTqa%2F9hFYK%2FYhklR0kXoIuIZAQuFHIXRZbcJGphVXvYm6YBHK%2BiG3aZKy99UXgZpXC1WRHmKJygDYuPDhnSeUxkzmVY%2BDx25TJBXBuvk4bAG5sxFcPESBZOpaddtTXLdtABlHsPU69KkOi2fDdsHbudEdy5WcASHrECag7hxWLjy1sSNXUnBysOUciCEhPylGFoWDo4dGCHrX57%2BNIM28jVaLbNUVTF0fENgsx8%2F%2FGIArRvDP472Zkei9DgZgRxpJcH0Nvc0vDMYyWN9ZUZ8%2FkM16VPN4Sve18wwkCNQ%2FlvQ5e%2Fb%2FmEZt4YYVwOMswErgEU%2FkpUo7iiy6skeuvhrztEZaz2u2eiW6jwTvjoOe11ciDfd2SNA0cmROU%2BGfNpk7e4NT2x2PwkOMYDbv%2Fcgfyc643oe0IN25n1QrfzPm%2BhGRHDBzJ%2F7N4oPmNbqHNNgy5R6uO4DPFimosQMNbcIIbNaZUnBlDx0K%2B9k%2BGREwwz4gh7dlA4mvIEPXKYGDcomzHWKOR1uxXBb0Mdm3U8vN6fDxPlzGCR%2BerP1U4VzF7%2BxXdm6r48uvlkHOS%2FKHwIw9p6ovQY6pgEv10ey1m3Zlc1P6MvAZ%2BZor0fXil4WzKwJW306YFoo8HhVkf1y5aB3g1URrIKNMM5MP7mB1RCTXHvA1c3KtFOjb8OTTdU0igY89nNfND59VfQckX3%2Fd%2BjoCKVt8kxtEn8d3%2BtKSG4ZGBYTBpTs%2FGOmYVntVBD8vkdNqk0CzGrEAKgqMW4xRQ%2F4puNIKbU7Q7YZfHUw%2FT0OHYDxKvlD%2FFh%2FND%2BLvWfk&X-Amz-Signature=c762029bc062a0354d5136a2e67254511f988c467f1f46c5529e5f23e8fff53c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CKHVPEN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz01qobWkobS04x8yoi2gsmgHxHHCInvPDiaQcSKOu0AIhAOmdYCLNBBKGtgh1VagHFw1o7WVVmTn%2FL%2FKG73h1F4i7KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaLAZhHhIuAxvXqXcq3AN0a%2F0GQUqTUbn%2BYLg20hR1KKOy79Z%2FBkmmIcuXf%2BMopIPhK%2BkardUuHM1Ev7RfrZLNRgFYsBjacIUWoA2yR3CDpVLpUlV%2F9jnodat7YkuzK%2Fd8Yooaq8QFnRf1JWVb3w4ZZLMMf0cH5YkcitLvyAdZSvKQKn28tGGQ82f390aXKup%2BrJGDDYog0zvYmqLsUpAi8OjRkti4FTSA0WpwnGDdTqQzO1HB%2FQNtn2FcQfu9tsTLXQlsaxq91Bip3mLlAoAL0DmimcpT8glh6exMKBvWmKdiT7Rf%2BENxGDp29Ev33kETCY9Zi%2FEwUejaOChSXPEzk%2BE%2FEc5MakCIE1V78REZUj95HTq6qKagBW%2FBIOe%2FnSH0EMDoX2oQ3TC%2Bxzd5W1HI1cj%2Fdz0mXQ6%2Bbd%2Bet9Rbu%2BsthGi4b2CYPJFt%2Bwsu%2BMBeCdme69T2Yg5SbrBLicQXoGYespYfB3n78BiwuJkS8rbcswNHWr0D48GjIj91TrbfY79diTEL3idSe1Gzxxa2G3vRoMWYhqTLXfDozgENuNwsmejjjimIyG1MfHJstwQrIfTCL5YXf1SX6MjZ%2FMil0tIQdzUggQ7rLTRTLIQuLJghagLqn958UxDYvqsyDFeiI57CbXTKkc1kbTC3n6i9BjqkAXvEDR%2BrValv7%2FRLBrGskjXYXd7O2jupwCmBrww39v02nNjAIlvkCk6qMM6EQ2tHa7%2Fl7YCbNExp7Ju%2FxXppzRVelrmZHTGPYVaWHMHTUvYjbV%2FY9CRZTrx2O9ZoQoO%2ByonSqRnEawW8q%2F9ol19lbSAXh%2FCyfKe5hfGXJOjEfQ0HBj4Smaz5UWhHmjb1AZQhaFbAWj0QALWcN%2FUcZhotyZ5KWgyg&X-Amz-Signature=2bc6c84f965bfbc05dcd5e3f66af9869aff56007fe04a0764dfade9f5c495a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
