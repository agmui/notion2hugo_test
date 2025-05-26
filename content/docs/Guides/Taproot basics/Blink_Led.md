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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK6CWKPF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDfhbmS1w8QDMB8SdJQc8AsVAzzP4V8gLIw8V%2FB9U2hEAiEAqrI3OuM0fenw2d0AxgezdEXM1ydov8CptvDtQtJA18Eq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCQu3ibKtwkJbXZRvircA%2BLfh62RC9HaUgmfu80mmA8zAeveG04pTu38ATCIGiHyluvoUeBKXo9Jpjf%2Bzw8CDPTSp3P9EwGiTZPvZOTNjve73Lf6OzjMihVgRrkYrPkhL5TOOX004bWNVCA5RfTWalLjT7zXdRd20VwIA5lFb3NSJnJeKKmzpDF5YqvtaL32OotTNGq3ndibLkG%2B0PTV4hiojd1HOc5t%2B0%2BMwUhqyb%2FvE3RZfAkbFLsdqpQc6WUMXVe9LdqN4LsF8aLvLZSxuuwjZ11ufyR3jYZ4jYhnEL2cx9mc3ItCG7sgkoZT6tzArCNy9FfnoADBqAHcng0pKd9Hc0R%2Fcs1DEc7FmHMJ6znG8ecCD6%2FpNeSVyAcYiOvaIGPqa6mTW55CxHYhUUluOEg%2B8AqhZzG9mA2G5LlATypuWsSM7Ba%2BKJQsfX9GlXClsiRjv%2BdcqcMu%2BOz4hxRhiFHHPb3FulmIgFJF0WpVFk2ncelQDRaCeAoP76BX5rwuReC120lbnK97aL7%2BCbW0t3wZKeC%2Fn1PvxzGowg1PEkPJ4oGr9%2FniqqIQJdrXLuGbHrGsWwXwSDYkwBsGgXKV%2FSQDL4rX4RDm0jnK3kzyyHhRBpZqeqsHnuZAH43Zv3ik8U6w%2BWaYUNUIJ%2Fa6MPvl0cEGOqUBbZ4B9i1ZfAnytftUl5YlyaTp0S5My23JaJKMULCf7RytuhFxXfRr2%2BjEb5whJ66YygIFjPJiqqawGIbcdZiJwiYHFLawpJN%2FTgtQpVzmjKoKhIgAPDDBcRzKqCTS2ot1Aq%2BBD5DouF%2BkMJblyJt527oDnU6BjJzexHAcSBg%2B%2FYD3ZvgfzFSKJOGVkwN2ioD9pN65gGehhhzk8FEUMlzvkyZ1JDgf&X-Amz-Signature=76c0fd19695cfcd183a44d4859daa121a4678e56dcde7469ab29617847583bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDSPVLAK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIE2JCPaANQXm9T41gJZ6bg829vZ2jVzy73eT2flQzkwfAiApMb6r0Y%2F6Dm%2BP3HJRemJWpliKnt11gtodrAWLL3Tpfir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMnaSvqEWpIKM5gfGzKtwDDHG50zO3pjf46rTkUZgDgkJ3u3KV6CJ5cYXVXU82oHARON3ZeSH54oXJI%2B3W1hUReSvGcZWarVrQV5UFQBh6bltOTDa0S6cfR2T2COuY2oe8C5ZqTzc9%2FnRuR9%2BcxCihfd53Kf%2FWTFy0wDFFiygsYDLx87zIa40qFG8qE72%2Bz3tt1C28%2BopsoOYBVXkhdD8XUhAb57YkLtESflMKvl20QsEKx6R31ZZKmkPKiUsTbsEz2V0RyeQjSaHq0DFY%2BY1s%2B9VrbkIXjOekHT8xEWGzf80jW66m%2BqD8%2B%2FUI2bqnHBIQP5DXAz1RpFIjZkuuHtxkxw92aBY6xQ8%2BCxbQTCpoQRTtwg3JdozN1VUk%2BfLskvy5MEhkf6kYtsRtVsNSSQVXW0lBKLa1Y6sZH7EBZN1hUS1LIhcCdNQ2F2v0wIEuOs2vHeKyrCbNUuKBBrVK73ffgUplgPO092Jwe%2BVvUC1Uw1rc1PLgbsDAcdWRJCEADD135OX%2FS6XZASrmbMwiPHjxoPeyWn%2BEJy9JAIYMAmuLTdVBtA4A3if54GVDlqvfFZwj2w8upkO9QOwKwZnDeRwE78%2F%2F45Xj0D0e9BX2VKDsDZTuEH2p0J988h5BtTj27ysrxtshAV%2FYRN%2Fz0n8wxObRwQY6pgG7Zw4Gl%2BmLkmD0E7r%2Fdl%2BN85hg4nFtBSL6tLcJK8PTwmTxltqsptTbhQqHsSgQXQDEy%2F%2BcQZVW5agLAYd068QvlU%2Feahf0jUTxTIE8I2bXXPh8F54JqnjiECFQlv8n0Xa%2FmH08Csx6KFeP5%2BC%2F44Us0vcwM3vsgo%2BGwjiQRT5%2Ffd5KsAPbSngHreT4iU4ubfUB4X93a1q2xLUh4TZ%2B5hdHkqe9cr3C&X-Amz-Signature=63c2b609ad796ba9bae7d8d855ab368a24ec630aa6df13f5558fc850819c6a99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
