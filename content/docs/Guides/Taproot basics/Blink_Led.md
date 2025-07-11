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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AWCTDSB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzStNNBTNGZZ5rmuWVqgFPYQaYVnAz4XIn7tLcWt5KAAiBOarMNhvvRqiDVsxekiOlj13cMREr3N1vIDZXd5gj%2BcyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSEO250znu3m5FRVKtwDFJcwOZHMn6qs6ZBLiIc1GsAK1JvK3a0FoZMN%2FSuXzbRzPErwAN%2BxofTHWE1AQnulSOBpFoaUYhxVKzMGnSLErvqk3JrJYInfdQIZoW5GvV5hymLzLerjrBnfE22Ke4D3c4i0B2AIKEfgccrqYVqJbG1yWqlMUh7khCcrWb8qjX7sbeL9f1R7blWO0p44OWCjb0%2Bh5VbndRDIwP1SFYFHdl07%2BKmb0hvgpFm3qUcHljF86RzRMClAAbLJ5DNVynp6iSPMltENDKpjyreMFuUyPO7%2Bwv%2BGS5kYieSQyme7H0zkqeqJEi%2BVSmVJ%2Fz3c1i4%2BZudsU2syleC0%2BJPeDqoIpG6Yppf8iuWX%2B83pC597WahZC8eTY0mtocv3fF02XDT1vQVq450gdbhnkdE8OXexBts0BKv%2F3R75RGVPnm%2Bvlh2oIQFTJ063oWgacUuDY8eHGsinRoFLkNt%2FHT%2Ffs%2Ft20TGn8a0d4lz%2FceNn213dVcZWGteBmVsb8ZtDH3LfLfi2aDMj8pjB4qg3oXJBb8ztTYZ4ihdtgfHgQAyya%2BBKOXbb7kemfj1y5JTCMfKCOQSs1zsOR4d%2FFboHdRCJMZvccxOzmIe5AkGoBCeZgdYJ26JpKADPw1Bjm%2Fqh4Fwwrs3AwwY6pgGMnw6%2Bv5axGPdljp2BkG%2FMRQcd9WtK89XCIC1Em7R9vn7YhVuzVeNekJBM%2BOrGiQS9FPMKroqymBBLVexN9nlGZdYlzcrcdl3LImuMCuEhvhdlkW6cHmrIBN97cXMS4XSBP6hbqVyhQ2zvZEF%2BAJTwRjo5aMr8LfXvRLv9UQNBCYS69kljvI0RXNofhiu4WN8rG7%2FkjBcJfqnCCAakG%2BblVylNqBxC&X-Amz-Signature=3ba1f4f1a8d8210af0023fc3372cb514aa6652edc573060afff964eb03ab424a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKLGKNF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENiMQv0%2BfPZ0wcNdUPdFOeeYf44PCHHYrmoM3n%2F5kjvAiEA%2FWV2QeTGBJI9nYJnMmrmuT1rkyTpKP4K65uYG%2Fdcw4QqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDApFsku3wUyG0yNircA%2FqNgb4y6SR6eooAumLWt%2ByrFTQPWqpo9pPaY0yA0Xa9U9Ug3m%2Bsm5nUGH8CLnHZAHAk928hrQ0qM7n6UUH5lCfkaWubPbflI%2BLU2z9h2jK1ebORwNJvGue9ABE%2B1g2f1K3%2FvHxQTBzpWD1CmvBxTC1HEsYU6Kb2Ncra5WKqiJ2aW3mpV0ai%2FIQddxKKpCHwcT9PnogYIE7g03TjQMhMl4y5xutpC%2FfoXeRwKmRqjZ0V5ggobWEe%2FeHmyVcotEh5hyBPl01ja3V%2BlY504QJZaRwfQbhl1l198GHkC0eBV5dY%2BQvUSzY5Wdv6yv%2FAvgq1ST69tSK7Kfe8IxLYdMJl%2B6Blmvfjur38LXHGup%2Fq1N4xNVy9PABA5V2CwyBIMXut1oLjwn9PxHhFc1SGq2gkHctI%2BvRUFJat9HpSbeYmLiZvpXVwgnlyyWcsPqTx8pfydTRYNcWT2EOJWA%2Fw%2B77aC7RG1jQjCHdpi5kIXIiDvrNwI8MUGN90b%2BH8gVng51p3KKzxTmo8FLdSyl45XL9EFWfo9MI2vjOGFL9XBYUOAtWe98%2BtOex%2FYmVvH7mR0zV1W9%2BHuuEqA2vDGmnZkw148D3qabthlJtsLnqsTehCGCrolYGBhZ2jNmTZDCZ6MPLNwMMGOqUBdUdmd4OGq%2FtIo7JCFuHe5L1jo69O4ULnsNSNa9u3B9dvdJn9GDG2vR7krbpZv1Yb85CNS1UZpCPNIFMTo5I%2B1azvUczj%2FEwcKNDAtSkvnqj%2BMTtUM6lEbFDmz%2B%2FAi1A%2Bpfc5UoRvfIm%2FVMgsdwbejl2P6cVPDmam68TpMgr2tzzV2ITC0gBxht0TQXH6AE9Dg%2B3NfrTO%2F0%2FPzveDYYvxfNFaUveD&X-Amz-Signature=6597bd9a644cee651112f2c4ec694793835e8d0aa1ff8a55588d76cf69a40349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
