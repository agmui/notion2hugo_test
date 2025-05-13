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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBQGFNKV%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDh294aWOtfQVj%2FbQMfIu8J6D6B0ImJerTl4VdKyRfyagIhAJjBWEsDGyk41b9N12jc02BgcDlUBoq3cIl76qx0hdZgKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Fh4Bf57UtN6dyr8q3ANu1A5IByyuuJ3CUVNfeA2WWvOzVmQ6m487Vt94yVm31KNCJzIR7rbVM9bCrog1faWGjOVRhdNEvKCUpE3CBeamP0aqbaFfnRlDCe%2BSRVyrNMbFsPfZXwL7veahBHHGzmN5KY2aErZjqtAbWzB1oSxD%2FV3%2BASL%2BFGpz5sdv7XqcIP2159%2BOcIgB%2FjBV6IAg8Bg7uwcB6BK4g20XwnD2TKg%2FyLvEiL2e7I%2BaLs0oR53fvGeWAPksU3iYe3I75t4zQacMEJG7mXj54jpVXs%2BEkJuPa%2FPx5DTfw0%2Bvh1%2FsTV7Wb9DIkO2PcTcoINY4VKO2mrB3SGqbn7SQzhF3gOJfy%2BO%2FHAE0C0pdlPspkzlPARl0WkwD8g9fM7klFd0ylr2xclSfcww506vbehKDG09Lta5sms4B58iAsWhXmHLcyfdnFhY4gUQsOwqGPp026UOEHHVVO0UPA68SG3KxiH48N9BlIBxBXhL0S%2FxWu6NW7LWximIIEoq7SQgnvy6AZipQ2%2B2Btm2Sj3SahbSu9fbUaKe1GZAfhnvTbrFwnNlrgIqla5C%2BrLVb1OZRsusgDCj4E7tUQEQITH%2FEknQA0k%2F2vnmYHvbJYQHBzw6U4hOH69Q5WiJXfaA0oHdAYlqUPjDvkYrBBjqkAWJpt1W6dFnyxp9U83lcfeSoQjIgeAFB2zbLXrYMdLdZZGRW5aMZggStQoCI7BFtICt0BHzighRBw7w%2FdqL2T6GZ1g72cB9uaf2H89NwlIrlyIy%2FJbvtVTzbeVTLJj0QxZWhqE1fXqh3wbiVEJbkibIem9QgGUJBwSPNXBcSCsHuR1NvSVoJ3kg9n34PIZBJZAmqhAtuG2YS%2FCOSJeDqspOg6k%2FC&X-Amz-Signature=f858ad196e6ce2a0ecbcdab3387a765e74857fc2a31cf87d4123fc1503380662&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UURMMAUB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEi9mOmXaa6Wbg0QsVkyrejXaQPFcYKGls3XTKV7oVzVAiB%2B50lw6%2FuStmsUvl0RKi1YEEhfzMYkBlzQuYzh5XwJRSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzpgBs%2BbOw0zc%2FEL%2FKtwDNox7CnDVsqSYIXWI%2F%2B1UCrN5WZXkcMUxt6EfpQPEu1NSpMAoq55X8YdGRb3%2FP8VUZRRNjL83WfHRyrV2lEyNNT9aNyte64PXEY%2BDP65wOWyqsr6JvSDCkdf2uSbmW3Gd627EzOSArDArgU8eUM%2FAKsLJAjxVjOhyFJPAdBVYPKIT7SbjTJ45vYuxoaDmLbkrNSvAgu4bFC9PjFQlrHtjpLMA0kd8XQiD2JQx1F7AZsRDxVwqipSpf0ls0jZ9Iwq%2FybsfY0qbO3w2%2FfqEWxc03lmqov6A6%2F7LpB55oG1c5NEi0shYiFNyuaLiONKRrzXcoXceR1K4ES40GsCv7mh1YK3X5BdZxlRZrJETp8p8m0JVqp5a%2FYKsVXlS01Bw4jdyJF06FwrunzttyaQkrdTq25HRsNc8KzGXTv1EnAkFwiwroz8E%2FGyToDb8n9Ztf9MZO3DyXam2nQ%2FVMgEV6sLu%2Bfxbi5tQd8VWIgGkKVN5uXY5yNVvR8f75ULnEQNDjJYz2uWPIfSJ114MlmXQxk%2F31CXrE4SOKQtpJLxtu8zINc0DtJR1pFuugIT1y%2BwOZaoaGakZGnjZlRQOOyzotJfyofT%2FvJirdQyjQrgzr86oN%2FQqERiElFWZ%2B3gkdocwxZGKwQY6pgGOQXbSUDyEqgeCBU5KFkugLSsDvBRdQYcwMnUMTzuthNJ6AF3MFlGk46yfu%2F4YcWNvwY5fzwdiZQVlMg6sfIvs8TQIcltCHH4jmo7rbu6%2FPsk%2Fvd53%2BrnmP%2BBHBhlet3Uv4HUDr2SqOAT7Tc0vjk2sC%2FnHXDKPE9JqAdzaxTEAV0HVC12JigkrFxRilIM0GU%2BB1ZgzIW3TBmbQa%2BSJgbm6QZ9bwawV&X-Amz-Signature=916b148f7b328b9e7cc5275a9b174f836da6a1561f980f81664d22ef1567d167&X-Amz-SignedHeaders=host&x-id=GetObject)

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
