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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGG2AED%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAug86gNPUuFN8sQr2AB%2F2SeN45FBXKBrZQm5jRn%2FzAkAiBDDxmDHzncG7VOJjGDO8IK8KLFyVromeeilVbkjl6%2FOiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjrbaoY3f9dJW%2FaunKtwDWNxbIxsrGZ4snVcsdBy9KhiLzpr5job5Ez%2Bve9CDz0uvRiVWOwXyVAmSs729Ry%2FjnUpUXnQzo7aLm0Jsdb5nQhNbNb1rDM%2Fb1uVHLlY2XxgsXVQiZ1xsPZConFCs7t9ubllQIdfiiRnSvcnxPqWy1TQ4lgTzOoaGr9RUgbGaPGwYcIN0qvLiPEov0EA13wvv26jujiZ0PVV6qBMUVjitdOL6LRyNyI02R8Hd9X1ygLdeac7tQM0Tjfkd3rB4gt1kxV%2FnpsZRIZ7HhW5FPy27Xmm%2BLRTKofrsFmTWNJkw1aThJ%2F1q3MzNzDLGcOuDkg7eOc2eVaDmPJKH8WfGq%2BkIHM0KXANxTemxdTNU0qv%2Bcav7gl1IfNx2tysSwwFizDe%2FwR9rYAS9L7pq%2BYysiXrSU4clV2H23ZVtyYAzuaPPrAK0rsMq8tQpqS%2FQ70gZ0B%2FxxT98aIW9UiXs8b47nqfwqinXhQLemHxUz0ogN9DEgxSknidbb5mfhbeVG32iTlryGZ%2FNFhPQL8rxBKZVqtUhOu%2B%2BR6exGWHaoocWSWu172WEpP88267tyiRjW4%2B%2FpGMkr8wqbZD1I59TuQ7jlwlAt%2FUdJFiPpsvqHiuMk1%2F75GsVaukWvAfocX00rPIwktXMvgY6pgHvdfhB4BZDNx4OYM8tN4t%2B3GSVA7tHmiEciMMd7vSUMY4Dp381V2Cywo4d29u4PCDgzY8cisR%2F1n2jNLXF9J%2FN3BhNkooAiji2g77BJSsa4LGGjt39zInIx4zM58HZ3z7eUZlI4e8jXCG%2FS6xI2Rheicl62F7nWosBVOsOW9ZfPUCZ7rlZQui0WIEMyxIvyvYk04nvI4NCk2dhT%2FsKkO15mmFOg0c7&X-Amz-Signature=00d3980fbb269e36cf98b2bc519846e2105bd4d22c348ca5d2fa73855222bcd2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VVTAEWT%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqGKRDJlGCFjglCW%2FmWHIixK%2F6bh%2BCU835ocyg3Be0AIgF3bIrTsH7lqxDNVVBOenRSpVtqncXkLenxw0szKIRLQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaOcOk4Ns6Njjmv7CrcAxtIY5nAyMMCwcbjS8u%2BMG56xPBxyysBmAjWNTF6%2Fdy0Imq7HkRJoiQOvwrCm7%2F9MROlUW8Xpz9u9US3Y7CKaHSdYb20pYq89JA%2BcYo0pbnRqoyq5ZrkMl4DAcYca3G%2FGBt%2B5OOOnkRLZ4dvRJs6wf6t9RJQrat4UuT01oGsZ1Am%2BOOQJYPmSdONC%2BmHXHfbf953yMyzePfIBnQV30%2F%2FIUgfdFLJPk2VCmpjc93MiP9gvOIvE8I59lm5hs7Yj6p72pVjZgTQqYU4Kkh%2FYZLxOn2yzCYXNTQXH5H7xFiJVnl5Qm5Mjr3uXOFJqB3GuF6CNWIKO9mvrYnC4d%2F0qD6O6FnXH4xkkCS5Axv0%2BBy55HKQiHSto3H4w%2FGS1N6Q7zMHZsn7wWaBEig46JI6ptLC5nzZANKo7TvTf502%2FhS%2FlklF8S8g9gSVPdRg9ajrY%2FJl2cKMoouZTxDPcybRPKPdCWMdpPx2nsXq65tz1IKrJLsJ4ukI9ThjD6pyTUSnk2Twh4UTISotknUIvyP2iag8sZSod4rIy%2FPuYu5GJx7vvMcED%2BS6DUCp7XH0PHt%2BuYgCG%2BmC3XJTDaX3pthGjC2uxTLVWM17pzOu4MfXgBTVLk7Q6l1G03GVoLIi90jcMInVzL4GOqUBCRIpdlX7c8BQooElGhAh%2F1dk40c4nUvfHI4flLYPpbQLVjrF0tzzLjkzNSH8tMelds74w8t8lto5fjFxs2FUUDeGjqIVL8FiyI7E0dHjCCo27wSmVtshNboOeCGEhZMu0QTx4JucpO5HfXG%2BcQSAu%2FD7HEoMQhpHWE0Ck2bIetjbovpdaAHCKKzBHP0oJViISSYRMAy8tIcSTO9ujrDLqCrnhpEo&X-Amz-Signature=2cf4820be76c811eee6bc6bcf51f527f39b9054a432d049b3a1e9fdd8699e694&X-Amz-SignedHeaders=host&x-id=GetObject)

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
