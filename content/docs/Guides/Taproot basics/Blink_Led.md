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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGTJC6D5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICzuSzRIQzcF6nWehbkfFz%2FD5oa3J8n7QKUGylbcuVsvAiEAtMSwiI2RQxLzphwGLtUtTmfbdTzJfNOTDOtuW%2BXLs%2BUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJyMGGHbCKr1Zq9%2FbSrcAzqkuBTiI%2Bvd0PgfTmERgSVzwdGof3R0i3wsgBis6tkmbHC2Q8TYIumU%2F0IXbheQzJ1m3zyZBjiT4o6oeMfFgRZfO%2FwJOWuAK6QjglM4b8kcMBOsLsKEVDKfa%2FqkRh7UYX7VWeO%2BKtPb0gzO2Qe9Ko%2FpAoPsyx8U868ul7Ao42VweFmeOGjcxP5efZJd%2F6n9%2Fd4SHsc3rq91eICTk50TLvNQ3%2B%2BwQWnU3ivXFlGHJVwoKALJ2D0UujAX1VRUNwvGDSM8GB8cyTnv9mXewiTVE%2Fgn%2BGX0IapidWyLgixT057vsW882EHr23%2FGVoy9VeJjpRDbqdMqE5F6MJld%2F7bJU41T%2BHKr5tqeU4Fub5fzlxaQI%2BK25%2Bc7h0qYw69aEsXCn%2Bl78OAFSz5BcoqIV2KpBb8xd6%2FoB9FHg7E%2B%2F8%2F4bRyEAHowIP2zupDewvyjNkUbIVElkBAI1fI76L880t4N201FvARlhr49DFTYpnl3mR5kNj2si4qXN%2BnCQgZG8i4rWD3czFkB2RUN50Tpu7HQnTE%2BRZV7fBIgO9hD8n79VqUFaNqHeWvxK73i%2Bt8TLuRP1DrTGS%2FZEebn6J0Cn4JGeV8hDJtXlYb1SaDsbid8GXLiajE1m6iHG8IcmiNWMLnskMQGOqUBTT3pF9uZl6pBVg%2F0Ieat7Vou1oo76o7PJQqa32ZAspDE%2BVdrVFWmuqsSMX2aDwcWO20KZmwj0ky4PGzI2GhpGbmniLks9pTESwFxCQSAYhrGhhZ7kjSUVmJBABQ%2B%2B%2F%2FmWfWCeoUdtfEaQOPJuYnlmTqLRCR6XK%2BWijWfKqyooatsdZm%2Fwz%2F3uBsW%2BKJMUBPBkkWoxLh849A8AZesndt8OAKTzxGO&X-Amz-Signature=686aaf9f7c44a590785bcbc7c9e0e606aa19227eff783d177037384280f737c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MC5CPY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDY6jOjmPirpezwhviMfdIPI8VeYteIJf3kAzzVGCsDAwIhAIMJzSSr6kfFxc1JP%2Bgc85sPlvPdGE6BXDwNUOeK65Q3Kv8DCFMQABoMNjM3NDIzMTgzODA1IgyeawJBCUrMPLbSCpMq3APvtngjlB8z%2F1cFB3xry1QdrQqnS6IoE5EzmhKyPoG%2FeNSohkIMe8lNr4IsjSiQTzJ6PnWsXgqtqnI%2B1kWQEwX32pHLjnULqN%2BC%2BXPsYR%2Fw%2Bh3QNaTVYboUa8NJGfPx95UXCGbjxe3USaCb%2Flgo7w2aTJNyeo2WTVKtNJiadx90xqEnl8IHeJsYVWBI6aUWTHHt3PGHkJ0AxlyVLHB%2FK29i4ErLIzUJ7kUDDCq%2B5POdnSOwBHxy6FuurGFb2RPZix6ScGCTCKA2RgJ%2BP0Z2T%2FsRlBL4MJimLLQ0LPqAcbtIPkAz1%2BeWzUBknHZKKXJb%2F%2FUit3fTEiGx7IxOq0KjvFDZahhPGo95hYRY7xTRY7%2F7idKN8qBLYUYwPfA%2Fly%2B1f2sS0Bxziku%2F2MsVFBhzTfuQbLerKL5%2BYneCmggFB3GSetY2Svr3FXxg67dywi%2F28tEHZQVl4fzavdB44qNteI1W3%2FVjbq0%2FVmx%2BWIBIlGfqW%2BjRFy9O4SpUzUE9GqhXoYt4FKKQyu6gKLDg9pp4cHzeHNsgHmp5AxbFaEPfWODnn8wVQWv%2F8E0SxN4UhQglNDMttBsZlBOKuJZo79z90F68wOvThbydKteyVx1ep6d54KsePNsdvAVnV45%2B%2FjD49JDEBjqkAWYpV9oqa5fkqRQHbubVsm0JwVaJUJS2B02J13H1S6RBg1MH%2FKjVNMz1xa0xh1VbNx5FEyyR4DFeB3LZMHVnNVG5wS3FnS5vRpKbpV1RfOtjIMJ8C3hH9coXZZIJ1gUsjo4BOSkyqeYBaW7XCbvZA%2B91RvVVprARxU3hVCR29jb%2F%2B9A18F47LlyiCpHLF3pNJeBaxgw9S8j57FRK1lmVmAijlZo5&X-Amz-Signature=aa9e351eac816fdc4314e4d74c519daf11093dc8cfb44ddca0f7c78dad57bd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
