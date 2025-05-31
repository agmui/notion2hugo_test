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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFQTVRS2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZZYGsd1YskItmz7h5PsJTIucjQX56N%2FLF4gTQaUyRgAiALsEbTmDJXunxf8PoBTiQ0nINeUFUkYMSdMjyNMeRbmyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM90CiVqrkF2ddgpKWKtwDAlkKdskP5g9H4xkDLKLYh7GEWvTMto8Xs9BrnULlUF0744cQC%2BjJLzjOpgbnQezWnx6xoTdSfYLbfVUryinUPhsWi2Sskc9o%2FIRSruoaBC2Ynj9QCU4I8RXoNqQX2KHtZjXkWAfLYnuDHXg28hq0nI7iSrMh%2BT4sGVYFJp8dVZlMQd6%2BCVBvGCJ6CJY7p8jZEaZhQiUEv6L1mQ%2FO9UX2ARqm0DaxSSimWyF32qkppUit56gHlKsQTx%2FeaSdzb0JtD3e6yi6zgtlGVN%2FPVs9uhdxS8q8sJvOTJPmnBN5ivoi%2FYqhTpo253YGBw0RpX2pGhxBg9QpFBsqhamY9SoonRPHt3guhq%2Fv5zZnxQ4oqdpWrqQdUtw6aPAs1A15I%2FALr7o3m9J5xrZ2CVMwNwpxUBNPB%2BMfuycoeSCih7L6yi2MIsoDe9mBiqpSLN%2BguzUZxXFGUg8z6NFRC3rrAHPttSECGmHrBNWgE1ZQi9QXOfEuJ610Vwo5sz7JcDDLnZJoRSNu27ciOc81iCpjSPtsXH2lBE5tV%2FFUtgJXOJCM%2BzbjDlCemRyrJt0X6gw8yvb96XfBwL0dEl6rMO%2BMF0LaLs79j0lBFCqPE4RaXotfI6HLfXQl8HNXNfdSjOlMwkuXpwQY6pgFPQTWwDWNTdqvFw3Ovi4tqiIW98fbqmnZTCRo4B6tMGhTk5Ss87nD10l4VFJutCHV5q7RcJvSnLzV44Bj4mWNdzG%2BreZ%2FxVofzLBX3%2BnzzLs3%2Bc9Y0%2BSs3ReW0VdTIxeSz1zcYXfXiZirI9PiV8tAS8RO3%2Fxo3ByoUfnIyPKfD%2FRzSaZeM%2FveAhKSRdxkXbnqnmervZeqHKDIqCVW9gvYw0O53obV1&X-Amz-Signature=a79fd36ecea524f4841b4786e55a77695b41849b7c164feff4f1b46ae5627b90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I2RQPP7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG8R%2F%2FfY9dd7rHFcge7yQO1IDzWdSy12piEr1U%2B%2FkAuAiEA9GZadFEM1ikL2jzOfFkvkdy%2BmjiY9H0K%2BMqWOpXdI3IqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMm%2F5IAF8Q5HuvEUzCrcAzyfmcFm9ENtbG9lFukewcDTLXo1YMn4Fdo8x3jFix6K6BcTYKPkFV8u2UfWT7MFAYhAeLynUODqy1erkLXKwecQQkzwMVCS%2BzBd9bYgmWbPzzIusAqb%2FBvVvpxSaZ7oJgahO%2B9OAtpApNnYT2RRJ39J85%2B8azRkO2CwPRk7jEX0e96MRS374N2H0dRY%2BDf6UUo%2BacYWyD9%2BraTH768%2BLd9jIxIMltQljhT9%2F1Fz%2BBcGUtP%2Bv8Au4%2FTRQdOydR46b1YcMNG1f%2BiezBSBOSvrm%2B2nFN%2BnZewe4WryHUCtIWsMYibjkTxtsXezrmK7r%2BY8dNDG2fVqugchje6wG6Acp7ZJQBen1M05tmX%2Fih8aoHfgvKGB%2FDQPdkSRKVC4fX1SbvUQmOa7%2F8Xk5WZ9fcF%2FXiA2r8EdD7BLjBKld6WShfVpi8io49O7Yi98jkMDhmAdOx2%2FeQpvM6X0JP19KSS8OG%2BSKoDFblrAr8iEeZhefrfnHxH9jVdAqvU1LIZMNiB3VQfVeMdEe81PpfZi38t4%2Bh2fuwKUO6lp1Httedwg%2FrnWS%2F5uLLPZUPn1gVUFqlmjAN4X1ZbBAIIeViCpzNSv1Kee8AXNUcsN0ixZVcMyEvOrdmVaqtkvTNARv3bJMJbl6cEGOqUBwTiX9oW5nSvyqZJq8f%2Bj1heiiiYKPkv7%2Brzl1m1Ewcx4j%2FcQlYH6A7zxcVqPkyMZPcco8PVgz%2BHCK9U6XBVdoywopxLGgcmb3YRyKEVQUrogMvt8WCFEFEtJT6CLO25PRnEuyy%2F%2FEoi94Nlz3T6eJ34TWotpPLhf%2FAa0%2BfOMYtjaCAWT%2BbPQkXUrfGMZXb4dwQG16uB3a5%2BFVqbfSmVEkW7U4kJ7&X-Amz-Signature=6206f800057169645ac005c3b88cd3a974ae2d396aed6da7ba75614f14edd201&X-Amz-SignedHeaders=host&x-id=GetObject)

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
