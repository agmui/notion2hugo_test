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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7ETYDY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDLYtVN1pw6BXFgikNdtSbPvw9WhojMJmBGZDxTo6eU2wIgRqrmy3uAxAwu4kmuVrbZz9%2BOgqDf2yCRxr%2BKM0UYIL4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyQjUc5GnIwZaAySircA9UoNmtQQcrn77%2BX5dwEOTV5TaknW%2Bxk98iTYE1MQA7sSUI4S55WwLiiy35zQD%2FS%2Basko%2FYJmtbvmxjRtXkwDesrsvO8x6K1TkBlX3Rkfm5q12FVDU8VHntU1Ci70yrM3ZuIypXjDNspfHaQ8p4m%2F1RKt1v4A8R2lbl7Kt7grn45U1y76cpHNoBefotAfZvFckD9kS%2F6%2BqDap%2FpbRB364xHtR%2BJOcvX6QLAbS4dYEbuJ7Oo%2BWCVtBVtqTr9c1SGYO3oaNyCc6V1XEfkRMAayj6qOIsp0ro5xKvr6gLYdVeq3F28Pej5H7u3jyBh0Xf5ZAX9YGhqLAfGN%2BM%2BejS90k1YwHUK%2F9AfGEUhHMUPiykgeXbD5TQ7cZqo7mvMLOfjnU79fCk0ZXbfQrUCQN%2Fq3mBzPWo9463CbqBb5eDiCaYjec4YxG%2FFTy5Zow0RRkqXnchYmWKZKNqhZlf35zuUTAXWwtFKP5SMl1p8zKQX39lFKZnH9LZCT0sunXSMkhS7dXpYBCT2hiCgwQ%2B8nLfe6kYD0zBkGlWgS6JqUaWGJKogETFkwLLSUKozEwMfCQZYrRnmcJtUW%2FGE%2F4vCGAYgK9ptzGotgGqzP1ZwLiwxi5uvSfkGMwA56R93RbF0NMOqM0L0GOqUBG2bg9gX0wJCiunAjFMG97fSYquATmM84EYIBmMp5U3BZ8MlEMRwLh2nMNnmwa9dYjVQ0qvMfCiz8slDCdMjfWBUnI9JLxJbFYYd8vxJDglOjhnsFxL6MUqdMAgyv9s1u8Joa5DmCtU8w4lmcmSlRJlr7xAfFziP%2Fc3EpELcL7StQ9QVWutsKUHbG9J11Vc0TlZLL%2F2Rzpoie3KmW160BDY547%2F4s&X-Amz-Signature=370e93d571174cefc48ed13983abb2e3ebf976b52436f33ed2b56a77e5ab95ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHRLYQHO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDJHjLysHjgWjKeB%2BOQ7pTlFdu%2B2MWPo1lYmxIy612AAQIgCl5m%2BcBlK75fgRBH32YZTZOloQcpKl1UVcOOJ7gyk9IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeUSf%2BoosPMoF9R%2BSrcA2nJzb53aE2%2FvI35Uh4d1lZynDh1ycAncEMezC3UHBiBEHSnCrZWd6CWroPpgSjTum36Ilp%2BNE7sf%2FFOzALPYRqjib0pUpzkMMUbHDJmqoVv%2FH3PFP31rGJ14NHW%2BUG%2FB9h0rY2JndT%2FyBgM78dsDvB7tO1e%2BDwnrYFy1r0vfGBw9CeqmoWT1Essl1tFdQCACZ0HlwwCCrx%2Fb7L5IOIIEGqEC7vx%2BG3iMVB8aLZ%2BG5KbGeDuHsZIw06HQ0GT85muUzKzVAb1PR8vRb713WM0AyleSLryT6Rfl50oy%2FSGEKdxQ1tRlz%2Fhm1RSVqCljjjBuAWIcUMJ8evApNGkS%2BTaWkHMZGUrggYyqmxduc%2FSo4RdjAsN6ov7HcaN6MImN3YEDFcFGcB32uRBQOulwx4Pl5HpKJyULSRKdNSSKXhU0n00F%2BL6mGbykkyU19AX1h7CG%2F3OFQNAM6PdNRnQe3KTSBWDJFuUcqVhsi62AYCvRvPqd3A2pT5AYNsK142wd0NqnaUXHHCGAgqQq8502kLCHM7Qt7Fsxa7Sq6VQB%2FtV2IkUjEmGL3Eyx2cjcvwMRZrrFmmK8YcKGnw43Toa7ZrWEiJKBReNG5vdtjnq%2FcNZbmqXN06P2%2BE1tbf%2B%2F82uMPep0L0GOqUB6XFSizRgSpjql%2By3tko8Vb5bH8QTTLsg0%2BNyQG29rbpyt6pMV35RHLOPVdgd6zvysIlep3unE2wM9U%2FIY2UHBkbK0U3PPDE%2BOmX7z1Ta4uoQn3zaVHeIdzXtrD4sONQYuOyo78LU%2BMLVYIPnMB0EUrfYoktF%2B437tMhq2MWcOMIUkHA6EIN0YqmIo6ilt4PJyaKr33XGpRkKL3ScpL2nhrn8g6eG&X-Amz-Signature=42cafffdf4e2b33ee99b5f0f94a78df5163ec17d049e99deaec00d556253ded3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
