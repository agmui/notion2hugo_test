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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJFS52O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHnGtLwPdonHZQMwTQoJfbvM2jiUkhPqx5O2XetvlvlvAiAFoXg2zgExReDrGX2OOR6eWTg%2FQQgRyKYXwyZJcc0CxCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMsRi65LJnjUilfi6CKtwD%2B6%2Fd4ZoeIUvpZnlV%2BdfyXcTO7aaF2o1b%2BIgfrETNMXTgOVe5Z5ox8gMNUfPbMrCvvjQz9kfszBkWVrQ7AGR00tmchJbEt2Bck72sVQgMFGLUBQXlDI9LMvsfpmFnZ9C%2FhiD2rpGfwUtHgKU9lsAidSxX9xPg6FxlG98tcpkc1MZYfF%2F%2FDrJFPIQobaABQxneDTgYEbAoTFAzlE8gaHx8l9LiQAO9zi7cGVjlSjuDZdNxJmfIIjX2Oy236Gak%2F08i4c9TRsHOhPDe4oDpr%2FhdA9a43Z04J75DV1otflZyREP%2Fi0gcQScTjcvXEvEI1KvTl8Yg9y0yL838ogpKLS1n6MpNPGFrv7yTwHOyLQ5zgrymDc8ViYldq8j2nZIwGJUoC7ODmZEBR0QwG85ndQq9v9EeHAAGSrOl7cKc5aacrnI03sw1XVcd7pBGrFKTxp17qox%2BMiq8Z2J647sfHT4bKfkc%2BnqioMOPUGXxSi8PTKc1BExp5hqcCOmVo81tIbwrPp7sMsr5hbmACOipubJrQNQBP2Xqr94%2BlxFioxXqKsxXv0ntJ0V8DmIlqSR7wJ4K%2B91KLHqBpv2t%2B3zXsUo3JW1m%2FhOLOzSJbGHXRoS7DZIlvglKcIWLngfBDn8wraKWvQY6pgFYWy8lWSKEhMo7M2j43qj%2BIR5WqDhpdVe8qUTjBWQnsfqvHstrIV3DRQDoA4jQD46I2B7Bfoh0ZPUBCGYW9%2Bjxi7myv0CAQSBxWRLpLi%2BIlSvHcw2Cg656%2BtW7Loa1p9mmTabdqmCj3KFNf1CKDHndNGFDvzXsNg2glFcPiLZl1ye7FvomOinn0pAvn7tAo7Lg1UMA7wAQrLd9isCDm78SEOdOPcx8&X-Amz-Signature=59a8b22334fd2ec90d8d1772deddd8d8c5aa5e0bcf88eb23d754dd9a72c82a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSQ4HYB4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIANx2A%2FTdAglLDcJsXBlyk6ZDx8WSCUSasnqrEUV5Hc3AiEA9vAIDwmolHr2ByxlZDxDFoCs8T025ds8iaGvceV9u7Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFX7wML6X14EvMI03ircA%2BnlPr0%2BlmWHeiiyxix8WjqxvS%2B%2FEBDlwYU2Z6QgZevz3iR7Qh5RpPDufL211VvpFg2LD2lB8e96Q6tt1xizv0k%2BygPABRdjyt8%2FPAw1Lz0je09j8irx3B5NJ14Z0HS1r9UcGarUTXR2qbRj%2BbWF2rnusa6%2FiXpnspVEq1LKtGpMKLrD3PTlxK2rrXIdm50r4rhJz14SHn5IxUt%2BS00mG9e%2F5kUcNBwSIkInUnLbfM9mpuKTtP7es9vwlVzqf6d9Of4aU5qi1yltevqzSPeHhMueuzMxJ27C9CWb0jTVrvIBsQB5vfd0diyipk6%2FzMAC05AujRH%2BJ4eY%2F4JK9bHrZTNdEkQuMFC%2FEFsc2p7if8%2BTJSM99Soqkh5IxJ%2FQDs821I%2Bb0X5raiflIel1uNROGImyW0eQ%2BXpJOBJsDc9rldr%2B9WyRgHgvuwMizgsCiAsNRerKtF8%2BqEh2R4m3xGC06%2F3lu%2Bbuz%2FgWj4jTvjgyIWTmegVkxWLqAWzC1PngYJqGY%2FvIihREroMvbQUY0RMfJiOfJGpXm0Dn%2Bq%2FP7%2BN6xacuI6o8MQMTmRz62KDOdj92uEVoi7f0MPFIm9IO%2B%2FbL5Lb9Z2JRscvuk5K2gL01IaKBwQNbs2KBB5e0nC4JMO6jlr0GOqUBZCu7Ks8b1S4Cg7b8%2FOgkX6%2BOiSiahfJMGV%2Fcw%2FmRygx%2BaCwiOETvfxX4GF3rUE6Uj4MfRA%2BiFc2KPtcXRxwv%2Boq7e%2BLzfRWyvQsVqcM4WAe3cJnLowreA%2FST%2F4BN5lN38RlMwcn4gACbKieTYFCfdj7nhYDEsZmyjHQdUsmgKPCcC37e%2B8av3N9n4onPVXbVsZLuTsfz6aO6%2BhY0ZAZqhYSfluS4&X-Amz-Signature=5af35d0bb0344802ae3695acf8068e78e010e09025eed368fa5136a4c6756d12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
