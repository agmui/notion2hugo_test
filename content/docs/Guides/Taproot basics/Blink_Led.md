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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BLJBJCJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAG2j8UQZoKcfjpjGa33Yt%2Bvrz2qcm8rOyTUzoq3lAe%2BAiAomVlyqXRw%2B%2FC6jxOcz54gfsBFuPkiQFhJU4rnSv569Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMiEvjHEe%2FdFfLNLK3KtwDBt64AplSPZOVoIVe5IruuvaIIszjb5AWW0jcZIt75qgpha3VzzKz6cfz3IumF9%2BXUadPQN8ShMsDnVwRg7U1U7ndjDcbHeSt5cSL1S1IHLPXTnlSWuADSG%2BXZsglqXw6aB6Vqh53InYf0qV294DLlT02OMaYb42pY0RZmPRKVUaCw2TKuILrC4WN%2FswLsIT7u7djf%2B5ntJ3SaSuADOA5wX%2BCIR39WOrAnHFhJAAEdTCKc8mlEnKg0LWPVMaTNJDAG%2B6LMBXz8ERMAs7j2cSmrASaOoi3L6ol1WpPCtlTNk%2FD6P2swcQ%2Fj4JzSkbcW%2FyofyvQSB0r2VmVenXCKiG0N%2FW0lZnE6NB8TohW9AUo546W%2FKyc0ZmUBQv%2BbpzaiYKyeP2hFUp6BqhYTHH6s1xoS5PxdFpAjOefI9sj1LmiawEp2cmqbifzM3Kak6wWXDLTj7eUbmjd4MtfwOvAAW631hkg%2BMaQWdyOSePRwxeEkFWfXxp21hdP5CffDKoWWfLjFjmTdpqCQgYqTrumJqLLO1cEXT10F1zrQjtfZrTHH9fZDCwODAAavkoXUnjvGNoeiHzUvsRJ8iUy7%2BbyhHnHCBB%2FyEr%2BfNdD%2Bv8hF8Wp4pp6KqDMkoVR%2BSYtPJEw9ZSRvwY6pgFh%2BHmrglSjnw%2FSRdVHsq3pbssA00k1FhaDHdheBCApbvO41KfEzf2HuKvQjpDWUaxl6v6IVQIAT2OVnoG3yBZjmkT2XH6Z%2Be3Gm0SkpWf%2BuVSSdZIqKxLWarOF1A1GWjwkfEwL%2FblCXOO3ihX1Gonr%2F0R5ctYOE49HnDtD9cd8LsDzHOdHNGhayeNZdVKN7dgFW853899kxhNxt3sm2fowXDE7L8ab&X-Amz-Signature=3c6b8fa7067ad759554a3e62a918e77ff49da365a7868c9da17672fb5cdc3330&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWY7CZY6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFoHQ6ZZYgYz5o3PxYLp3eIVAb5SANHsNeiwTfH2VAbgIgDEC5sHT8u%2FeNZGZOdYDs1VA8SMfgoGEIQbM6dvzhsbQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGoe2Ijm4nVqQSRAVyrcAxamJgyn3BW5YXfxnZQkp%2FNSDfXHVblgxbSyZLX2ZQk9kZQweu0Q4hguCqXB3lzfbjWTrh5M3RJ3mPVG%2FFe1yOi07fuVSXlmI%2B0GxIEkSmWvUtNulosCvgKw2wzVJBy4AByvgXlhfzcqhQeFN3dDoZakj%2BRv1gzIAtfrRiKRgkXxXTfA96tZEYtrukRxYYDcE9h%2FxYRlAVJ09BPcbH5ojRCYS2sHoCU%2B0xO%2FxJ%2BRc8%2Fnjj8kJ0E5ZWIrpaPy2%2FpyRyRJl8Oa20FvaOUkg9r3sYVfoyZJqhLVAJ7sqT85wXsB%2F8u5O2gyge5SQNNpZtHeFP2NUWUiz5ZiWpD84YnvIdI0s0IU8N5YjqYXiunRYMNsuUkrEaO9KFy5NbLK3Zla11NcbObyRSwpWoL5f7j86w5O0XRVSO%2FgO3PIkqlHDkRR7GHWaWkOVz4oI8mc7uMt0PEBmvvQ5slZWlN6M9s0i7u8DHHWT9aHh6OVWk0yVKg5DHQeUMwinXXN5DuyZgi4PVcJ0nL%2FbW%2Bh1u%2FNmnQG7Za%2B9DlHb3VQ5K5vpqFmC9tR2F1eciUak3IbOl1Rkhh3GqZ1mCH5Xwy2Un8MHQzD8NNH76x48ooxNQgwaXh%2BX1IlEz%2FI0LBg%2BXZTJaEoMOmUkb8GOqUBUcng6qK5FtoYVQjfrNW2p2RC0jSUDvzDJCuq5uuh60UN%2BLarRGPFS8LUbz4gPz3p8TCsWPo9JrrXPD2AVTRHdS3ei0T3XG%2BrYF1y53wHgR%2BD1vX64zfreJuc6x91TSdXLJoN7kfaju%2Bj3i59bQHrcHC7wD1hQcNlERRAcpHooAgBSdfsNtLb%2FjI9UB3aXKjeWlx28PDXNrpxm%2FBAc4LkQiTXSq3u&X-Amz-Signature=a918a971903174cc0bed902bb1a7c11bef7054bea1b5b755e8742d356449a0de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
