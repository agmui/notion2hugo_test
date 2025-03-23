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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IV37NH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFXV80NbmYCiEA4W9EzD0NWnvMSWF38EYdcN68TyT4NGAiEAyosY1kEwnekJPfGpqV204ysxY99hQzqS0oZfCDtEaPgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0RQcFSgsbmqVYNcircA9qPAuz3sBhsjC0e3SKxhCdXABcJc8ekxa%2FfJpRqYK0kjjUELcxBZgzXjblejJlmuhyUmGJbwl4UsSZlnJRcdR0ZjnRnrjKv41JQHXQPDRW6bVa%2FOazrvpe7CxYfLUqprJtw18oegdbwHhbjyQsAvlVITxnEKzWmp7tIAYF3lpRC3DCjoeiBIQHu1VZXxAc7CbQFjcR8rou2q7YfJgUiusa7n974E%2FckLSMe930a18cgGyGQWsxXzRF2mejysuIdTj1P7EFfFG0Wy%2FpU9dnOaZEfOaqcFcd7btrxq8pfOfO87s%2FJjJ3NjBE5bUiYmAxtkp8hl2WE03NdNOWh0HcIFYWVYeiHU%2FJKKVlEtLhaqVXu8cayr0ZUPj9NnXpOE664S8DrsCfGJgVFswrLLWZbfazoe9GkbtbVuGUp7m8c%2BZwG6hzzuFA3GwMu%2FI6bHkmIpGzzzVFwjoSQjbDQGQF%2BWZT8NdS8%2FZdNtCY2RpnvF%2BBzDV3q29cROXP0l8s3HS1vrpyWWXkkSeYh7unA7psxAHJ8IWjlYiYOa1Riv1rqbdH66MPLAGzbZm8vYclKzoZ%2FGDH9%2Bw4c%2BzubyB5P5HoEUzOakRf46v6mY31DuyUPvnsn8ddQl8M%2B5oiFcek7MIXN%2F74GOqUBa08JH%2B7WCOIF1FhjQLoFbHU0tFakH%2Fx98tKhIfurAgLYwCNttuC869t4iDl9yLdYQcmcwhPE8%2B3TOj5yY5dwkN7KQs1RMJOYm9rDyJbI61KIzJazjI88%2FGlIVUvZ73VecJCnCS8FNtCYAIDpZuvbdzO8cXB3h1waJuRlUt2jYl43hutjwEp4V2OUTjNgghg3zFUZn0RfIO1hOf5N%2Fsz0hVo1FHL0&X-Amz-Signature=293095fbd95e864de234b2109ab0ead20fbd999f2f5a3c2fff29103ca214981c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZUPIWV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCrgN3nggORkqUXfxT1Y2UKBbRNhpsIT90J0RIqsiX9XwIgUvfO5Q9Vx%2F0lBNcBvBWOA%2F7D6gSjzG8grKhNhqGFVGcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUnMdLkbCdmYDH13ircA9oHZvUVjGmWms87yBgP3wTjX0wNrWmrsuFoYWj6HTEV%2Fi1cJdCzwqllFm4fvmmAnmjWvASEZEtMT%2FYaq3lPMPf8BmV%2B9pmje0KmZu1Rn12r0HdafAz2mpHFWuNWY6EiO4T7fc4l1I7KEksgU4HmejU%2Bb57sCggeqlutwOzed2Eoa6I4R6KAwSe3EBryPmqteT89s09sk0A87y43OtNGEn%2BuNdSDFAKIz34384HO%2B4DtTOLPt%2FeMUOyZHJ9YzJURWYBpWEgHiG8AHbbJ%2FyOSn%2BNYxKzoydynByAadGORK8QjfWSZaSSNMz2QtPEtMq3E80InQm45rl3bRZnE%2Bc1jQAzXL%2FnGCt5kXLIgyPZKBeE9a6mylooZEtErTIf4i0M0a%2BzoNmE5m0TA3aPwMRDDeMoFlykHjNqUbYdx1IRtP4qYOXTFBwcBQinFd7N258o8PNXWDgT%2FJudirPjgwfGWTQbbI%2FYDX2WB08WoZkYi1NBazFJ5nvy1l5rN02s412qM8AlyhC3FHagJeG6%2FVCerlfrppchxpPHi8Oels2rCx225ZFqPPknhiEXZVCFPED%2BBbURNo4gs9m5CYypfkQ%2BycafsUfbQjmVzd6BwU4pq1gjY2tFlpkwwlcGmQ0XoMPbM%2F74GOqUBYx%2F8pFWo4hvv1D2xyJyhFKPuDf4IasHiWi9lbLpSamUlenf3s3Be3D0jjf8aoFHoGw6NNyjFx11iTdoSaU8NzA3EmC84m1IgfQEmoMsRWgtKQm5m%2Bs2A%2BRZlRwYwcyX3m4GlY7CtygX0LK5U5%2FCZplEWw1LK37Ly7ebqnpMQ22dJS8wglE51XRLEECmB6hdXB3cR1ZqcqqTf65Bsz2oPE63XdmJ%2F&X-Amz-Signature=4cecb60bb26237efd0133965defdc7c33ae2b41662029179905bbf72ac43c94e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
