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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTR6BMC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5cScMRGYLfMug1%2FU8ZSpbvDQSnO5%2FWP%2Fhk4Hl46OqTAiEA0mEVbpBMqy4EPOItTU258Pe9XJpB536HqQ9UL6JK3n8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOiWByK27YJ4Ja2l2CrcAwfjBrDGHeC%2BwBmWQJlS1m%2Bvjs8nQ9jk0JSKml1ZtcbztdEkGB0nXDnyxZyVNxA7sM%2F%2FwMkKDAude42j7ojfTnIvpQa%2Fw%2F1nzH6kN27Nrw1TmqBntBWcrsbgDoJJJVo7bLJvBo5UKf3KQv6gFlvoSHUSqYdTaPiZNviLDFcilRCz3S76HLgils8hLIQH0kLLYiwOnCD30e9SxtmyuZn7h77e5u4GVtfPzko95msKMzbpXvlC1MDzmi1Ut%2BabTIaol%2BSVP0yYKa7MAFyK58o5y7cpPxRxSaF2B1MkQl94i82lsphjmeZfRWO9aRTn2Ak4oQjXwE2Ua%2B5bhxSaWkMNA7omFN5i5fyGn%2Bm1PE0IQmwE9O6oRBIM9p7%2FXRonOZslD4F7TmS12fjpEfxqXJYxoQ0GYk%2FGSjVtP%2BNPKJnOaO51DMUrWEXFX6ut%2Bvh9Gx7Xx6c%2Fn3Et6hs8W5q9P4QriscaBtY0MI2btJfDPxiCrOxCyukakSjqr7eh0gympJJCB0TttZYzRtZiJg42DvF2oabRy5oRSg%2FN1BTQqpucJur4X3Keg2TyTrKTiATNV17cuqfG2V1sIS1vghmrNwo2rzIzcvVF9GRABC9ZRloFJwktfbvu8dEq6QVu4tM%2FMJD43MEGOqUBL1%2FSY6nS9BadO6hi%2FR6NYWp3HdKdrs7W3s349JTbsyWVvJf4acvpohiwJumLsdnUtXPVfDOWIEc%2FgdHzPk8PM30ijMlLMG6HweqewLROEZ09OXa14Jxt3eVDSWErZKdQXF%2FWYPWnDVXjbJN0cthaFPKOYGExL0L98kO3kZu1POHoKnILgyfApxI35WA%2FR3MWebsqIkD%2BHFVblkpd1OmQiLj9ltYc&X-Amz-Signature=fe0bb44573ba6397d3eb7e6698a7decf2ffc8a695ce4fb0625bcdd5ebbfff97c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55IXJES%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPmkPE5C%2F7sIh7bzOh96mCZpmJcz4O3NdqC534RllzIAiAgdcASpHm%2Bv45SmDcnhE1MJQEO9JBHO4X0Nd8xd66x5ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMSIo8WTVHIzHK4%2Ba1KtwD9oh76QSpdfoemMkJ%2F5ZhvQaiSiUNNTqEJKQ%2Bwvz1Y2yZpxY3Obsc1jKQwL4JHgNbWMPPCRSstyVmQM69jrkWq%2ByKpnAwsFpCTi6FXcq3OnsJsxlbZ5HKieEQNvirZrf4QeqoahzgeZvjZ5IFt7%2Bkk4qA43uGcFo5grNBFyUm2R9eCP42pqGJKvWr9Inig0FP%2BHf%2FBAZ%2FHEHKSRkhlBl%2F%2Bq0ZRGq7UyYjkPHegaIXVqb9HJqsVQTUeh6EaCy3c18KyFB0KbFPd8Cg2M7hiAeN%2BmL5fNmZA1n9faOydNbCQVMzOHfVWV5BJOreyM9j%2FUXXBVCmHp4qIDnTIrHJwKca0Hk03%2BhfBKt4SHj7yx3Smq%2B2GYZdzso6wOtu4TkQJbOR%2F6zK%2BLqJSz1hulkzdBr%2FU6Lj6CmY2K1y31H0OMI5cKSsdAN%2BzgeQ8E7icQB7YUMZVy0nwbwMRYJnfgla1%2BOk651yQBQTjpdO2qsnlmEKJpeH3JbpR2OJUJiZ77ioqZsM49jWhZBBBVwZwVmcC8e5nrr96Tb1VKrh3yOeYeZIr9yzSICfzfiMB3fJY2REheUCZJZohgtXUiw7HnX0xP3CIjRwP6%2F2ARSwawnozLRrIAValXys1MQ8fjRU5uAw%2BvfcwQY6pgGrQdXqKXmXTHs1gLGS8bmR6PbJaDAg5nHZJ16uApXqwR5ln5Mq1u3pezf1QGO%2F%2FI9bPweZ%2FT7IQ%2FC0F6HdGSIbRblWG0MN7r9qAtG7ZGdtzrAfwhiKnbJWq0sQrCTT1j35z%2Fa8csXx1cj3BEelqWNvKgZDQZLkqLfXoxza5NcYvB5dWiAtZBblUGEIIcVY31iEO65DRe4hsyDddHrzx07jZsr73FnN&X-Amz-Signature=16e32cbae9297e01541ab7b2fb2f9be6f8252775f677a6b609e944dfc5561531&X-Amz-SignedHeaders=host&x-id=GetObject)

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
