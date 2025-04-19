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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ZWX3ZP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQD5x%2BYCNFjQiovG3r%2FMKpaQJg7YPdHn%2FmlKR4YhOih6YAIgJzZj%2BrDRRQxVYLI5UssAGQDdtWUP%2Byc2m8vvHSPZCdsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjxPSZRhBiSfFgZ%2BCrcA%2FHDITMVHYWajZvKU7xVW5zHF98dUkzoo7ph3WFS4R6pTdRNnuT%2B6IBm3cDoTJUXKrauqFtM2614R8Vt0DqRNjhTXr11VPEMWLD33yQpLoz7E5ZJ1wirfwqUknYWCoTjHBvB%2BgW4RlndqmQGKuyptQgW8kX299ObDYVq%2BhjOedWPvTQMXviZQ4nLpZaCwey%2FbFz%2FaaBI1zgMpas5MdQ3YeXG3COelGqD6SNO%2Ff50ks2UGf5dr6jStwfwKxAyYAGsEQ%2B6BT09TfoeeFcsDSm86LZqS655j9%2Fs6VoQUSn8cQ1jsWrctqAorVMdNBseXHO1lYuo2HssfONsqd6h50o9XEHSlS1I1aOvm32s611lQfPkMmeUQNlK%2BuJ3FAh7GOR0O6DA082NYbSoXpDyWOyFWsLzyaM2MIlYfqYortf3du%2FFVDgj%2FvierA69OO6dWU2pOpVeAKAQgU13MvDJzJWjVQas3KeZS2BOw7pxnx5s7Lg%2BpNQoGPA4rlAV24JVP12VfZjxo4wqmhPOsRqF7f0l1vNYYk6ubE2TW8tzOT7bF8%2B0Gjjj3LLpG0mCn2CYwyXrbmdiUzHLxHTtTAjUiTyxoTb%2F7Q2IFMH4TrNeHN974pap6%2Bx74D9leBZ0SKpqMOOfjsAGOqUBPP%2Flm2rR1GgHmeQHqk4UypfgfOjPHO%2B9VjBO%2FNquhnIiNH6fx%2FCN7gPnq80PZjD0o4UTJFbp6ONb4sK8pXqVqj%2Bxy%2FqBcG1MzgsyHcki09rOscuHYmD67bf5vQPGfRTRbmwPI%2FFsAsguZ9rAZhNfT%2BVQPIWMJH1yiC2AJSFeP1BUG9bLXgeqGM81HYr%2BFicLDJUOTLnEAwbS0czIVGAfch7Nr8Hq&X-Amz-Signature=3d7f8631b89da5718b9e91cdd18fda2bd339f6563146a458139897995fd95c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQHFOFB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIETdMAjIRdo9LFCb7uC9CnWk8NHs47eJJ4A6AEPd5DHEAiAV70ad9PrZUwv6bDV8BDCaTlX8jXKzPzbnA0DfonATQSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0v4rGsh%2F20sI4H2wKtwDxLVMg5Oe82PZ7rtxSk0GHBwf0Rrb%2FCRyTunnv5Wmhk4yVnnkmLdMMO7pSlrwyX517jPhl0XkiAjjmppMrVqPJPapz6yrqe%2FlG8pd7XkLNzQz%2BboW8sFAxu%2B3my%2FLQItMGbypy3YRS4nMb4vlROXplEngLolKNP81GYNexpMTVPvV79pb%2FVpnFpM0%2FIHqGaX6Dpq1DfS4rG3CrXbPo0xin8mYH9SVx0YLIfmlZh72%2B2T6hHghBZBO6CFaoeNp8Ek0PfpeAehkRnshJumKN0VnoZOifPxfj0MF2N7n9HRMBtEnD9MdZ9oOSsI2OonXASsoPxOWcD%2FbH8XxpZ7x1zDBMJASPEuRhZN2%2Fe9UX2PAD02RRPZgMvZNAipTi2%2FtNKO31EOqfOFC4PZhRnVfKmVg%2FhrGq1mCg2J5CNLipEEWm0dqt9X7AXRyxwkc%2Fn%2BoJ%2F%2BZHjs4alCz8yaTmASRoh8RDV52FN4en%2B7LAPmZ%2FjQZFpQJzrCGEQVBpxj0OP6bsfKxq4KBVul7K41WadyqLGP3Q6ammaICCZ6NSAFw%2FJyS5tId%2B%2B3v8yc4TwlUczExMtE1Y8HF0Bha2ICsmx69bUHU3aVd%2FqUIekWsgnpG0Buuy4Xs%2BQ51ZfKJMx%2FTEfUwlJyOwAY6pgGjtupvYhAS0AcJZrR6pNFkpCoflF2ryVr%2Fa3gB9ha4%2FkF%2BsjWeK4jwm%2FpdDOBI%2BVs1e8fZ29oS4WeF%2BVEEqmQNjvHAfEADyBg2UjOxcZaJA%2FjJMUK1HPsHE6KX5ysl9yyamN9pGoe1EHeqjBVE5hrX37Dfdoj1lVgQKfgu3%2BlcUTGFJaVLAOt1M4bkROg8O%2B10Yx4x2aom5I7IH9iBAKDOkI9cPBpx&X-Amz-Signature=c78b3d095779e8eabd2b0e36aa1a1fa00531ce11d263a1638f67c2d2df2ade88&X-Amz-SignedHeaders=host&x-id=GetObject)

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
