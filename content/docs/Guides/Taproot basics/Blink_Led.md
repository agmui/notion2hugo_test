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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JCZYH5D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDpiOK%2FdC8mbwOsh1hAqDhfm8Xmbn2e6dOryFBHLKt9yQIhALkfZfrTk1M3uN8t8PVQYcs5aoz0q6bDW33M6HBOs1rGKv8DCEAQABoMNjM3NDIzMTgzODA1IgworEAl9NWXIixkPdcq3APPs%2FEkGw%2FpEKgwM%2FYsJZZPLrSws3r1Fm0HeF6azHWZaI61MrwVi60ruoF7KQE0cX3tSTrswcyQ9jsCD1XH06nN0fcVgvN4rzeVdfqYB2RmN7P2s6R51Wx3Dp2eig4Dw0afA9%2B6R7xd88ii81doFyRmPYXoVOdv%2BPTBBrhG7GHO%2FrhVUjXfqFgtx%2FiA15DaEge%2F6Q8kizAblYmyadkrj4Xacnxw4bGWiufYgMBVCluy%2B5tEtfO17v%2B9%2FYHHDpaT84Y07R5ilEmOpJGawKBh8ILUQvkyBdjoVpNIMVwR%2Fu%2Bv%2BqtVhg%2BvovWmkYzRurMNwX6Kb4diWe%2BIfUHcfaqt3duU3U8S766NXd3TYwM9d8P8TK7ECx0L5jVFYnSOs1c8FEgfXxGtZIe3sRMgz4644NjQLVLpJfdbsFsy47WzgxDy5hPq8P%2BoARrmYqvdiKcbSFL9g6r7egcUSxdLn5keMrm6GQQYCGLr%2FMXGLVSfuDyL%2Bj5e6JH%2BOnagEKu7KbNgocCS7bxOeFYllAmR%2FeTluNnuSJjNzt5kZGJSuuN4I1hQQLRpp9H9%2F47ZlXzVVmhE09zkJE332KtwJSjDUrcLAhwzIFqslQQdAtFh6hG7SGddhXKoq9QvG58kKWaw3zDOtsHEBjqkAUNuEhIluUALs5eQ3Zu8yRexiU1dtJvjSXQgGDlQhgOvIM26HcnPBAAx5eWGmeXiPt5EunyLrXgPch7z%2F%2BTVdzo%2BNy5NMsAR3zlDUZEqYV%2BTxqJit4pl0JSnmoixyi9r4X0rjivKPmU7J%2BvALU48%2BdNjLItWsianeJuj8IpjO1YQby%2BXHYpJufi2XtdqTwJpMSZIbOcOGqbV0lwUnscC%2Fse5ROs%2B&X-Amz-Signature=e7d422de2ac28743f3d41c17b5ef99aad76867ba7891b4511e63f7b888f9bb7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKEGMRE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCFKIeAw37bmT%2F7oisMSaTqpnYcMpcjWogkC27Rvq2iRwIgGanXlTFhz5cuOMnvylfvQxvKRn4gDDQoC2%2BATjx7aHAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMYPg20Egeynsaa%2B4yrcAyvQMNheVwxYijEvg%2BlHuXWj2PNRBHmCC8IvHicDlBZT2HpE42u4rOWgHCkgCEY546abky2qscxs%2FDxWFfxxm9GQZE6JWQXKj%2BDZDcJ1fkNGHkhxhAdkQoq%2FXLph6sm8F2oJiH8qeD%2Fh7mvX1bytsxf4v%2BjLEgT04c035qScLX1RZhJZvb0KPXzcUMn5UySnkT5mj4mGt%2BzzPFgkJSel%2Fu8dcuGCPsu2mcEiqL%2FE0PYi74jyfQs2KqP925f1uEF7j2WHU2UkJXQKHBZFVgjfv8VKE%2BdZZFJ0XZQ84l%2FTGGjsZtee3prvIBBfDSRt78B1gMV25DdpI45PnvZAun%2BAQ20xFQqYb1QBAjkTmT2cWPY4%2F%2BXnXcmdgC3abhNeT4Uuc2jDYQC47t%2FLYni1WD4OIsCooA73%2BTX8jmWMqDNFi2TaiIuLUmAk6XnoX6Xq9gOGBBQBWbXbxJXAWSWQrGRBEPb5CDfSSFLzWpnZ4LxSnL6QzxXwD%2FtBfkfP5nLsRtClSfHdIBRxHOYKul7qMBTTAJILJ4nPERABMNneG2bv%2BsG%2F9X5d7jwPqk7dD2YnuUT6oxgcOmZ%2FnlT2pPK6APdYrZqQY7kOSQeYroCPTGi%2Fvaup6ciVb%2FSkBz3k0dGjMKa4wcQGOqUBRD7ukVPJEzXA8gRFTYmRP10fHHeJ1iIxm3bNgVwOOenqHDs%2FccREFFV8i8eDF%2BxcoD6X4Uf6vMGjhAbsCZa6d5JWL3a%2Fs00yRVYi6wLTWYFRkhndshm9bnDXxNx%2FJEHxDgixqNUPi7O%2BNfDYrpcepUqCg4BTkdMYf%2BqDjDAfOQ%2B36CaeoV0qQR1eUSu30qMmQ2LtLN8wNWVulJIxlEFh22aNNAQ1&X-Amz-Signature=e976663769f9ab6686262cb4511f7d6c007c4368717655a4e4331305c0cca5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
