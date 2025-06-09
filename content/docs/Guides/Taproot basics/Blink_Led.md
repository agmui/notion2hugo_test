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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSH2FFEM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDswiarMSLY1ACezv7KrKisXakjLXVsCyjyqHFE8i0M7wIgXtJyxdDwOthpN0ZGVwh%2FqQHb2LWV%2FVcvQ%2BFgIY4fxxcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf5opG1t5ngeAlAvSrcAyu7gJYa%2FfE9Egkr%2F1TkE%2FBlJB1NUjd0rmhloG7maZ1XU6a3DNV5Ynktgcgl4xd1gfkpoUmyt0hHWxeu1CDTU9uLkck44t1QHeyUnJ3pPE01ipTCF9Ig9qCPv9KpQUzp%2BpyxSkNBO2v%2Brnk1YVLAYZc%2BGpS%2FNmuBVvvm%2B1bIU4mm8MnDjobHA91LZy6vhmIFYKm0s%2FibxGDtVkVjRtjbvZQtW8kKA2cPmVPsk%2BCGb7c6r9R6nquNXI2%2BT4kWHmH8PefBtwkjDRCNTe%2B8ZXZ8vZ2ukA3SLqQZ3Fi%2B9FOya6Hc4XIyTFei6EYLq%2F4Xhz0CDlYPNvDWwwrVtMpRF%2FgEIJ1EUbAbjHd9csCTOGUWwGJDoZmLMfyWE2RfQRtdUQq3ruVJ4WI3veQg9%2FoZLf24BS08Oemx%2BvN4p%2FLiUZw8K%2FHiPQ%2BiPY4xSh1EIkcpG%2Fm9Ed0oPFsElaJCBp9dJ380qt3X12Zpq%2BSmG7VXCUL4hwf7I90V0O6wk3osSaVudwDx4fkkpA8fPiEHKvnlyePVYYl6H1ZW4vejVplIykXIg41oaQKI1clMx9KNW2lSm%2F79CjaLYDhOvpKWjHubtdiM2ctrOjwuvDzcRNe8BsSm4Iq3Aoqhjqy8%2Bnviun37MLvtmMIGOqUB2CK67p1aeQV%2Bf0MU2ABRzXWOXzKn29iJIeFUC3YqU59dD39HNn3swDZP0OKMtVoLH8bfzpsu%2FzD6rTqhkLRp3hJjhqr0jccH72r3hbydg6nRb2wPT%2BGBgaMaOII2vbBbkx3teut2DLPlE62B09ATi4uZ6rdlwBxQ13xEpXx0EOZ7m0rXKaVvvjPGnjK3wtcDk5I2Ymv7r9g7KdIhpjVhTU0pfRjg&X-Amz-Signature=ac0572e6eab773a7f841cfbe78ea2f4fcf01fdc7e05ffefb66009d975ec40eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DZTQ62W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf3oPID6oJgM0Re8cxvzN9vEKROAyQS4fZkSEFcd28NAIhAJkuXosk%2BsXqOZ9db17g3kkxVlt7THo0vKIUUZmmha40KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP2XWfV0THFd1wVC8q3ANjQEfejrHuT%2FqgKJreG5uCmEjsUD5mXwjUX1S7reqNo80L2FO0%2FeYFEQoIJLyuQazQvzYPLLkxs2h3iuz9G3%2F5VRiTvOjBdiyuEQixEBpEDRp7RBKJE3bb2HvQaKpkJItdO%2BldLpd%2B0RxrTPQmT8xImMNIpjDQtJ3tLFdN8mtZ2AnJENV3ErZVNgixPmokHh5lHpbHoXUQoaF1aBk5TLY3Fe8bhi%2Bkj7kJoNHd6X6kijkIIQqpZv4fr8PZ2l81kQcG43oWEI9j4xJIRbY0S%2BtawSxjQQcMfyT%2BL0Yc9O6qFkltf4nWRdzU0XWii1lp1uZdTXpAx6lqmdRFpLgTx%2FH6JsZXEDf6z4OwFaUiRnAoHRlZhKW98jKDeFemhaTHGN7c1Oy83TU1C626pparDRgDBbib6x93h4J4ADdOy8u9cUC%2FtDCh9raE%2FpG3WZvtqoMujFVe%2BwyRgop2uRo51PkecG%2F5N39EhF82Ctpgk05cNxrVmD%2F9gdbw7YReJ2TZCaeD0gNEPY4K%2FtEYUcPiJ2iKZKjc2aoOI2zvHj76vV6Wd%2FE3gOIZkBaecf6wYnoc4yTExyCWs%2BnkBaHhJLFL0azyeeaO0QwZGf8HaIQd0RsC3OUgScwuFwNoK%2F0KzzCx7pjCBjqkAXom46bmSeRF8ylxQKyXvJm1QXOmX7%2B3cpATJ%2Fij99U8QSVOLhQRzRVDsBZCnj%2BKEhao9NmNd5eroTaP2%2BXgVg9k%2BACcJ2qKMAgpHf8DoO%2F4HWbEPTjHLrsll4trUl9F6DYXaF0t6my4IJ9gD%2FihiaLlVKojLhhWSnV240X8mUo%2FuyYEFFFZRZImuSv5DhD%2FbEL6oLvrZS7QaNC9Vg0PLoHNNcx2&X-Amz-Signature=83ca50cbc407192d7c6e48bf57a57bb8fa64335284651efea6c878181f673333&X-Amz-SignedHeaders=host&x-id=GetObject)

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
