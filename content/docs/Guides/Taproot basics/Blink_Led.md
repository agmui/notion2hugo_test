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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF47M6QC%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCjDvIftqUwuK7klsb6y0BFPuMTXXo0p1d905CnPzY24gIhAIUwul4violIzNgnNbJ3HGath%2FLlAvWWGCrE93El5PwKKv8DCHgQABoMNjM3NDIzMTgzODA1Igxz7%2BkiSmYr1EoDcckq3AOWVB3J3yqRYh96Pt5g%2FcSmN17VOsbtAykwQTCDTkTCIR1zUvDpzlrQx6NwJ35PCOFwmtNuuPG3Ke8%2B21o5OZo4K9MkJLpeQGbULfhu93IcCXGEUkQbaQZ8G%2BtezTNlCam2CgxuD%2BTVu6IjULTBfRco0P7ZNImAcOtf14uaOLeM103FwpatovJVayVOvNpI54NdLpmksNYlqPPXiSYaISmBsgri1NjVOvIfetiN93zUIaoWwTJ2Sdg9o56MoZdii5AHCj3nbAy6C2qzt4HSZVzm3xck2FSPewtg7Nt2gVYXIrNhNfvscc1HirrP11IA11C5HQBIAGKRk95%2F7ZPoAcD5eeY34LSbTFQQEnZ8q1DOFOJf4Zywk0GtC2SaPvhZGoA3LhfdN3PrFhL1EWEvQEgXjex3tqbyj7a64%2FubKhIv3U238Bdj0Vca4oezI9M27ySkTtozA1MVSrQmlCk%2F%2ByLiTK3C7eoT%2FK53P4NODs%2FOI2HTPoKAAI2OW2BkwgDm6IzPiiyHC%2FwNj25JoVMwJdC8DT9JjXa%2BYXyWWE93iPRT%2BvRmp4%2BEs6gAvd6rn9nhX16pJJJr2gJfk8kBHttii%2FSPxhyVh9aRnW0T3aDgq9NxHLRJDfMlRT1%2B%2BmCGHDChls29BjqkAb8vkhvqwMvX4GKUjnFeasl0eMn8c4T6J8nWnQh8zcjv57Xas4z69oagzHTaTygYZCFwiyve%2B9%2BUG5UD7yQZDjK3M4MGF77Zzd4wieONKMEB2u%2Bihyr%2FuB5UTUVbs5ZUoQ9HY6Ckrudw8nw60t7ki1jA1f5NGwkaehm%2FXVM89%2FK1pJoYXFT09oxhFZYssq%2FUFP1%2Fk19005dxRS2o1L39lLLKhv25&X-Amz-Signature=645d776cd4ac13dfb30991161f3090920dedfde09a05869b5cbb46271c85d5eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KL4CFRM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDEUaZrGTowjib2icGevANjvqZbXx9USSC6VwS09ZCsFAIgRvCE7uafi9kr5xtY%2BFvFJ4ujkUR4y0yAVWosLQI6oaYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGzvHNY9cWfKTsj2ZyrcA0etK%2BsNa6%2FoKStNB4X9SCTZTqu1eEBHA1s5%2BCjniztaAX6b6CV7QTlUAlnB1fhS%2BCB8aJ3BwJPSHlehxLYNhDh3MYuVAXfd%2BmNbWgKvJUnAqldEG8yjoh8b1atWlPjolPw68L%2B%2FyIRd0cT5KAtadkAZsY5R%2Fj9SxZvukPRBa4CbStkXwKWxhZRjvVg%2FbaCfEA6mbvKsQ4Tdal86bnUgsCz8D8hdYyAUT9U%2BPq55nH2XzYsNZjwH4S5ukikoPwuFw0VtGPbpvDdjkW5o8lHm5Hx69K9E5IPlRKKQqDFnlpRBCMdeEi1Z9mpwHk0v9xOzwlOEy50%2BG6B4lL5Ki%2BNuz4%2BuVwCKGg4wpG0yc96Kly6ifMIpAATZ%2FF4Lty82R4aFhMHnE5BkCkkNMHmUBMlDoGPSGfKFHoUHjlD8g%2Flqjfnxylor%2BKjG7rl3C4G9WuhUe4WOIChXSqrti2V4VJrqkrA8nMHjgr7eZlMz8UgWL1yLmt8IO73t2OuBUyW%2BLv6KXNe2Fe16ev3%2F9zzU9FpOFjEQcO5roUaJyZBbLoBEbe7%2BbmkMQV9rgy30yeUZc9Fjs1cnrbFKShA0%2BVt%2Fl4cq9SrGLdtSG2B1h0Zrle%2FTQR1S%2BWeGYJ10ZBmf9Y92MJaWzb0GOqUB4oChFBdcHcKREXwrP8vt4fxMxuUqHdUDqZTxA0pS6VqcJvU%2Bslol%2FZIlU%2B1odVOy4q7nEMa7HY3Z%2BGQsluQld9sjQWT7RE8wwOSju%2FURONZPYmSpr%2F0ibzhVYQx4VefP%2F%2FTVovEldhY%2FbZiAlQNlUjhR06siqG1R0Ly2jgjGOnAjQpTKyk7vkk%2FJRdtnw7F0gxB47W0Cbj7QqC6IJGr7USQH6FuF&X-Amz-Signature=380ba499be5421ad69ab36118229f860fd423d6e39d01f1c6d661e9094241be5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
