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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643Y6V6GX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnYKW34m9BGUrVwgSv04kpUGeZ9OXZ9BHRkasAf3qQ8AiEAj8zssqSBycCkCH4p%2Bartn8qnurBr%2BUtuHXIOk%2Bv8Qrkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDP3T4S1ZSBNadr0koCrcA2irm4438ivDVNTuVc4KoL1CDiYPhVA%2BnzpIaQza8Qr0kOQ3y3EBw%2F3huxEb%2BLVlz4FMJE1y8LpNN1FLJ05JkU%2BF%2FWQgQ6L2OJ%2FtOsk7HjJ%2BvyrHUvR84e8o77mVnlQXj%2BmDsw%2BlAUA8Ru%2FmdrkxOzvPvVyi9M072BIUPJYZJqOW6mCijrP6KkhYEaAPmh3s6J9wG6mXM8EM0Gh98qLPaQq6W%2FtnZRwX6OSG2Zks498FfxIYMLMSjuYIGcKvFyvw9ZlzK%2BmBKGGp5lVgxaJ6GAhioAKHLWOUNT44HmY%2BVWymEmcP%2BsWHeZydG8n%2BsqyjLlSzfExtXreW13cFP8xPbhZrliqtG2Dr9%2BGT5ID3vQbEXtVjrjgsPGgZN7ADEskWphk7sgWFvkM%2Bu3sJuTztjYC6%2FM%2FO%2BwlIT0spzIoeK%2B43eSbia4t9qYY8ven17ocWqNcD5dPrUiwFVyZhibSiSj6Fb0hIW37SqVCHAbZi3slZW%2FdGeKBlDZMBito%2Fg%2F%2FuaTI5oUj1koPA%2BZf5PE%2FJycP5dHvWZOys%2Boj5Cmg6HNImgErSGZFZAVpSCAVYKFbEGwnsDzQuOvuXsHI%2FZLwJmY0JSCCo76CdxIzS1w5Fhyr0roetKMFn%2BKH9ub9iMJqK2cUGOqUBsG6Uc%2FqyJR%2B3%2FKbyLpxW5j9EMVKiMTqzXKK6GA2J%2BWn4h1HC%2FQCSFIkzrodPcWCVILDyGk7gwW%2F6fSwZ5%2Bqwnw5GgH0JtjLMNNDsamnn16yNNNBzE15B219CLzL646RgzowP%2BO6lrPVenTiqLyHOU3mSaomM94WTMAqtazQ0MeMOiwM4OuONLLfqg1REN0Bd48fjmowR3QxpEcqFcDu3b1vwGBAr&X-Amz-Signature=8aa5d9746cd9a0fb0e09553f1f55e659ff9621af752efc105f5b6b6150ffe1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIXOPWL%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9WKnF0toQhOnLxHK7wmy5YpGrpZGaYxchFFf8heW1pAiEA40wVDN0Vaf%2BMB2RHw9A03NR%2F5XUbKyHY0iL3eykYHWkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAG31hQliANYOblP6CrcAz4O1vMk6j1rB2zTIKeMiswApVW3D5%2FfXrrh0kv5Xyb3FZOyBPgUsoCw7X7TNlRME3KFT5RmLtLkT45lKts0Qh1twI%2BDwxR7AzahFg9XZ4UaPG%2BgQZXj1G%2FQtgOTNSGJOHWuDJ7qu5DleTcMCcbkl6N%2FAax52PKdSDH5E%2BtUpbm%2Bzoq9nkLxCIb9bC6huX5dvwDTsQzlqYumWhBffW%2Fq2VeaqQKBhtAgOHnzVCBxydw3ahVrWGMvQkLkvATrZPX5cXH4umj8GfRlrcasndaFE7nbh%2BUYilWAfVAkFKUzldEBzZPa9wp2stTzmoQHaQ2QBvcqa5W0C%2BX0S%2B2hcdRmy7x1fGwoj59%2B9x5cx6IeAVfYlXuiwD9nkwUVC3EjzSlUb8n1%2BcUItW8qPX%2BxHxX375t8KhngCdh6C6t%2Bm%2FE801gyFHBX7reUXiTwThxafONA1QskUS59wIyP83AeBNsbZGDRDNsWTtjCv4hl99BU74FWLTIyEmfPMl%2Bu0KuG4ZsixQ1mB6ue%2BYRut7c9fvS%2Fi%2Bqg53bxxY%2BRDOS04blTkRHsn5uvEKsls9hEIiqY03Ho2lJgKMs9PE67QXF%2BBBGhznZClY5nRXkvi6%2BbWd2OAscF4f3ol4%2Fp2%2FO0Ei82MPmK2cUGOqUBVqyqRhAvlAGqm5Qn4ZwfYz6u1ilB3BHF93PlcNa%2FyxdfaSdvccOiDCaDH53xe4ee%2FiSeJR7tCQ%2BbSqNFTeLfuIZzfgJRUQRS6nPiZPW9%2F43nI7HdteCwpX9kIZMHIrvQ5h5iXL3xJGug6ve%2F%2FXBs%2BlnbVJykjDvwuU3pU3yCq4zMfCOnSCbMUVVkxNbygSSEAs8Yp254%2FteRJWJX98B%2BK90c2sdS&X-Amz-Signature=98725ae8336c6707857e4c4b55c305fbe0aca79ebbf12b7f68ad990be7a752d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
