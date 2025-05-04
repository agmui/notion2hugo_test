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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US7ANWVO%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAsjfyKo92wXMqssFDh0dmMX%2FzsdpiWXZ5yTwCmm62ZWAiEAzbU%2F7uafjDTAV8kbgBChCx4vZDDKdq7TAZBouifsYVcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwYAPFQHeQw%2FKvNhircA65BLUk2oGOZGgguORVtfPt17mzK0ZemI0kldDUFVs8KijVzcC76%2FKS7tEZbGoP3kYWMx078CY43KD9SWmGCp61%2BylX4WQd63fSizVbOIioS%2B9683rHfXonJcCd73v%2BeMcgTkoPHWmUZVSP%2F%2FDz5ND6BjwvQViW%2FUn1fqB1dvWcBshtnGWp%2BnBDXcgd5i7zMrMjeIACLEcRnTC4SAyKKyAUdgzqKfVylqaVtErYRRMRBMg9FFM2O4tVK7T9B9nkJhCb7iq7gGWy4gUgUcQRU4p%2FBkILuvk6Xr3JYOKRXv2rWNzooubCkZU%2B7WNun%2FZpUM35v7E33Fxzwrp56GBD4d0E%2BwtqrvG8iP2R3tFQlWpWACGLD4eMT8xeob7lahPxPNZIyxi54XwMgax3erC61Utpog%2FJ0817iV9lo5PwZ7IpvK9A6g37G50BwghNuPM5t2jfirTEKBjsjE4cIZ1mm5tAd4j3tBB2Dnv1xBgDfQ2GMiSH7Xnafk%2FCWlE3RgYFlJ8N26c7OCvB2L4xcpi4zKybcXZ2o25vvV8Z06se6OkRMm3hzzkP%2BCH0Mm%2FYXZJOI1vMXp3i4su2%2BWfsOc8Zo5jSHstRb4G8PzCBel3MDiy2MCPxcHesG%2BAs4FQVoMKTx2sAGOqUBSt3sxIEcj9IBS2YzE%2F0Gb1mBK5ONnAZ2hQw6AwmXBWcDYiq9mMpAt1aAgzIY%2FsiZ0gOtZuipV9FQUdLCqMYnTJ%2BkFjzJWAWiyvFsD%2FeTM7w0bNGmQh2qE1NH6sxbIrwLY6xywGK%2Fh4DfXtTcQ8Y%2F2UDB44QH93O2FpAZFEt0%2ByZEF46BlMGnyExB%2BBu1iHuYHX4%2Fe6c2bAVOYswcEZ6GQyS9PBVF&X-Amz-Signature=3225ac7f604743070d9c23a84d3076eb43637a33a2f8adb1c6ae142e7651d4d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJWZYLD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIApTkKo0aUWX76wOhFSrmJAqiWmkXq7ojZugkYHb74CEAiEAie%2BTBg4xByANZFLqhZEZxYBPpRO83b1h0RiYIqyFjg4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhIjyL2l1krUDGxQyrcAw8oTXTkNlaB7pQgU%2BjLItXD7SpoZhSiGkKS09FpmOwHHb8xN67G5Vx6mSAPa5LOKQRPjAyRrbLWaQLhpB4Qsdw1UOjBH5YEK1%2FcGSmTZkD5yIdg27H%2B5mAQq0tKrSOihi6FLEHUiZtyxArCvt5SPe%2FrqrO62MRQO9KbLJaT7L2yE99pTJ5rOUevGu6l1CZgGk02neioU%2BBb5bhwIFpoh7MsgBKdugK2CZiP6LmWdt1A2EdgjVOU9F%2B56T%2FKB0gq28kz296VIn1oUS7PK7UDiQ6XMaG%2Fh0QnfuGXqXQCqG9tKidg5nnSy49kk%2F8z2aawTXMn4bZo6c01k%2Fcd1ZvrRW1MfWzpozYcFdnsEkgcmoDMet7dROs9CyDIsaE3iW6sz5mUpCwM1bQYEJGG3LBsZgRwhKqhfU17cEeew%2FKo8nq8OHDb6vsOKnkZvKXCkyLYi1Scun7GvEoBeuUXj%2BtsS%2B4P%2F%2BztnU%2FFbJEdmorWDdaGDuSHcviT87xiJMW8XX1sOXWUfz11wjRe7TmGWNQGr9FflHOnVxfjVp6sI%2B%2BBQS%2BXi1m8HfwBTy%2F18ClprkkjHnBaPaapJoSSv8QJNFZp1ZrLQX0JUJKa87a5dINMuBy0B92qebYCtnlkdaHXMJHx2sAGOqUBSC6a0uSpixLrvRqKnwGenzWmxG9IJsUyJMGOmE7BUCCBMcrX%2F8wybR1H1ijp7QwFa7WUGE%2BLNgMPuigksv7KN1%2B4pOB%2F3w3y6kgxestHQkY3fx3fHdMEiS5%2FBcizc7dQzgy0MMw5dKRHReWLu9WMd0FIBzcl64fKsz5URM9FCEQ9vR98v0HRL5i39y7FxhBPBtioTIgtFZ%2BS2VAapwZyOsM6qu09&X-Amz-Signature=5d70ed560a37aa7b4fd93919ed0f2881bd8b9044c5bfd27f7bf2f8cda67750ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
