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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQKOFVU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfF3EbxEWMelg%2BTZQHdkjFnp%2B3t8fDbAsEzgjIWJ4eRAiEAyycxjZ1PmX2uucJZNpaqJqYF3nH3fBLJA6YqANVPAQcq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGKwLd0PlGj1Xgx9myrcA%2BQMvZiJeD%2BIX8tl4SGVYZfi2jS8rgmEZLeIB95mowSuprzcyvCqfz2V3wvlWiv0iLjpR6kU15EaI0kc64GZOnQuNlmjCOjYUaM1jpSl9eMcShe9pmF%2B5mftHKhmqo0GctReoxiKFCu4lHSEqzA4jA85qNUuwK%2Fdb8FPKNPe1MUfLvHXcy3ebOOnvrirMki7v8wYOHgBvumz%2BEoL2OSF3NoGTL%2FJN8Zfilrkh%2Fg5bMhh09UCJvz0XUEmyLy5CgW2DTFGFWCcqoYBj4ds%2FgcqyrwegrLGGFN6ze%2Fqjg7hdfrTZkC22HXbcauA57VMyqYykDzlJZ%2BTxLydHz1Q5UOhpZqdeUmwi4NboOxSeVge%2B8RDseZSznUvniW7DWWgxYXoW20%2F7J0SZTiukEEA8fGmKSzpL7mktUpHFRGzvdYgioj4hdJTEMJmj%2FW1YOJqlYolQhqC8z9txBjsoAXR1j8f7mJEdLBWZPL%2FuvhPUIjKtaSF1cQ80hDuykOeuetgtn5pg03AmcafSFwOc1ojkhILzZH2N6ZKHBpgqf9eLV7Hl2YDGMarNADud31dh0LL%2BK3dhuae848WDEoQSXD3t5GEZG0trSimxbKucfy6XgMrxkJBKtNah5doY9C1BIlNMKOtvr8GOqUBzmns9V0LHGo523yuKCNHXOfPnqsglFV3xPTMZXSGOPogchNbZdsVm507AB1vW80rI4max0ytaD279r%2FgfHw964WT8WVcvbhrDvLWJTVNjiWkKPAsgnxBpoYDcRy2cVod8FZZJxepzUEMBoPwtS9nmtsOM1KPi4XhuOu7KHDjSXRYQKv1yxnHhf5fuNglnTQ6fhEkC1sOyAffpPYNQb%2FAuJME7Xtd&X-Amz-Signature=6db9166985e0893fc1feea42270d3ef45b4f8e77d8a37d63ab054da1c7016acb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URX7AUW5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpkNx3QifoY7f2vn%2FkjMuU7OB6NVgR4t7pan5V8Df4JAiEA9Bf8LWA%2Bg%2BDmFH0nbWV9U7rlLzc1I9cP%2B6AwOPsVeScq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDPBTDyeMXwAedJ5RKyrcA2Iyy4KCXGERoOca1l8Yk96TioI3UiK2Vmjjq6FYbN6109JsThf%2B5dlxg5mHjnmyb62T%2Bn7Z%2FAZ5P28j5DyszQ7t9lLN0KZgwK1fVt7qHCYnlVWTZDwpqF%2B1%2Bu8bqrBbuCnRoqVixE8sxEex2JTZPcpbii8wkOYef64r6NanO40zYWyvyJBufyL8CIEe%2By4bgKJAx79oWFqX559a6IlNiKWW9iZmu0RmatFStojLUw4nCjQQrq8joMl%2BRHZOa76NMqeyyAUCoHAhHXAH7g1WFart96vy1S%2Ff0rAVZMmFJ413fjShjHMjr1rE0q%2FXl3jxQrY4p%2BWxx8ZOI0lkPIL1dcflKWa8asaWfb81k0znAZbk%2FWiTg7lI%2FNNkCQQkSRrnAS01NeaengkgWyP%2FW2esXdQvu9%2BsIkgmYTDWYoO8OUqZt20aAS20QGukv%2Bioj6AsSHGoyVjjpv%2BmhrPcSl0iFmWFxkz5rR8IJT06NcJ0hayYv6ySfaLI72nAuX9ggJphhNN%2BAKE483nU8NCWPZZHp%2BuQH9cthNAWBguDtKr%2BiNuqyZByDh%2FFZDgJXAQLMbdhN2fDncLy67bOB1YwH%2FcmJO%2F8YNnvvp0KaA1tpRin2bLV%2BvZ%2BLL%2Bzu1BJ1qyVMPCuvr8GOqUB8iDOL5auqOGkxW1XpRLUe7bkUKJXRKCbKak0EqrznsQEjYEzbkPnASWWnlhnxgOEEztblGY%2Fa4mBF5COkgyAd2IyL6XUxWI5SqSeGMycZxeqj8TYMwKTGJQXL9Uyeh2scvKJroFqtass2P2PO0cU1hpxRGv0FKdeqWly5CgIvjQhIsk8Vyqr%2BxvgeEL%2Bg70GKCkGZ5SSDlsgIt2rKYugtMFMT0QA&X-Amz-Signature=e745d64c2d1635c70ad12aeabbdf2f5e2f5d9fe689a847d34db02ddbde4b96c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
