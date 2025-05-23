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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVB5W54S%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDGqd3POduvNQ5k58oMtdfBrxNyLMGYd861Bhv51%2FfEdQIgTpSZoKhlUqflw3sqJ290%2FTBF8H9tQ8aCjFhfccT7DxoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtP10n6N3HX2c5CKyrcA9VxJPx5Pk5RrIz6mfHDH%2BJ43L7AMLIsaKDeZUcR1Ovqdl5SIQXRbWK9WukuBNE3w%2FZLAp%2B81S2oZxQhBQDf3bkaN1Ti2wHtHzm0MgeSB%2F9qc4lPYYlXU6HLVqNRes16Mx5VI868p1%2BISNRIukhkRz46qbM29pDi9m%2FEuq5NC%2BNAiCn7irHW52ImyROI8R2W61505tE1W9YjQXm5MYhRSyMWd7A4k6p2yODQAbZFwf51csRNAbamEqQ58ixV7lRF2YSLNo1UDzC7xx5CFCbNgCeuGWefv58s7J8uycSvI0XI%2F7v2rzqP0QcCBUtQvwQrhKbgY0YBtCL6OfjT0dbBHiVsRIoOyj4RGMtSG6u49EdzJCL%2BNoq9YcjXiUAqdIkJx0i1AdmK185c0ir4tQx%2BnVp8UN%2BLBGVp0I3SbK7Np6JURO7d2idmA0saD32q9rwVjzmwvqmJB40buB3hPc4EJ7WfHk%2FLbyuNWbgFbhZqYYGz0BDeqTav7UcwJMDXHRK2RWkrw85cRq6WKamPENV9%2BnO1mI03J9ZEj7rFP3qgfeUQEdsJ9IsIp6In7EpzijJztivrzmTVfN9sQAKy598qBO%2FMpiRHb2aGtaF5WNQKjL%2Fq7RfSCHpUHOoYx4oMMN%2Bov8EGOqUBen4%2BBuOgcrxRRcesHRyRYquDoF47cGR3PRzfPT%2BO7Aj325EPjE4w0F3EnqPQqYZ03PesAhrYjCZpwihZMbV5p3diPe48IO6q0LjFn1K4dmofv4LpA1P2YaSJXj3hbazVC5uxYxhc%2BIvx41k7tB8tWyf2QhM6DmM0mIXnDoLNuB%2BjYumDw0XoF6J0kJv8PiQX4QF6fo7CwOWAyeowP1HkO8WgNHSB&X-Amz-Signature=b0bfca488633dd5e40ff907543077b437c072be03ca58415810f0f1a9dc3016f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVLDP3K%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIHM6dV9ZNkE2vWBDD6OlpkMb6aGnUp67gQ7%2Fjc92vSkWAiBOaACh4gE4HecFyrCdL8VCbGNKjBZ7VulbgRfTsbQHmSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWYtEoxPLBGZ9wteKtwDHTE%2FnJEK4hmPZdJlGY%2FhtpjI8qKYymqkn5bHbsLgoHzhu4jDYMnBcbLR%2BeUA7yz%2FQ4pLO%2BiUfOHnyTeIg19v1IKQ8LM1cvfO2O0JfFNbPfGaDBmLa0B14C7G3DAFZ4gZRjtjLbtodtOabEFvDb6WfIgxgv0%2FHZp244M6I5xN8GXRrUnt0k1SBJwszOR7E2A9VfmW76tgItqwPLS6f2PMTx6v4Fhr7n%2F9lckIfokJBBM7BkRMdTrIJxjZ5xlQFu2CEvr1kp4rXBhw%2F%2BTknTqjzJo7XNhkiRPDs%2BiKfj58X42IkXYVvToCslWBypc4PxpEMbdUYH4tReos8IgCQS4fJwq84QPvtBf7tZzr%2FtWIh9F0wcCT5AL0r5TqfUweeQ4ZynVS%2BxpzSTr18dVqCdH%2BkLdW29oxsaLs4ZSG4Jmcy8LOI9spUnbBgdxfFL2IW6Z7e3tB4pBjc5T5ek9TCcgz%2B17%2FMvi1ck6z54FDVM7i1gQwwpqu7NiDAvnyUK3qmsr%2FyXjOgMIGCOHk64FkCwNo4woKc0aAlDCH8JYeN8ePntwKgmaZNgJPkNsPAMGQZU4kKk1ztSiu8ivoRSFvDW3%2BaXw5HAgEDSTufcgTLkk4TnNcalVHPk1rqe%2FjyQQw6qi%2FwQY6pgEzQFhpf1HqDJPusn6p9hv4TQt0U2%2Bz8nkALJ7ie5nPP9z6GpFYEqrDGCkHEltV6MGe5Oe8mj%2FItyaD%2BzhdhQ%2FS8gyGi5k5X68kA2cMpQuZaIVKFZfkT4S42iKubm9rAvF6Fe9TybccZB1Kc4n0TMiKQ28rzqpHFMbA5ngXI8TrCd4T6G70EJZbbR%2B14HUU4rfslbFjnVo2D1aHHMsPLF1a%2Bya5r8F0&X-Amz-Signature=ef8124362bae4171e0443e620c692da982ed70e80a9e244bb28271b5b6d40709&X-Amz-SignedHeaders=host&x-id=GetObject)

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
