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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6YXIDZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzsNZFOKAZomclIFx4SQTTozunA6Apvh%2BDN58YR6OFqAiAj5aHY6Q1%2BwOONDkatLp0v3FED2HFF8r6DID8w6Q6Liir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMePQJakRt7xwpZUjIKtwDphBxgOCJUq1mXFGkS%2Bc%2BzIrSv9BMbNNjVg6blRCXdz6i%2BeCwxQJ91jX60VtzEDy%2FajNZsoDGl1H%2B1H%2FIDxkxRwFWG4Mazf9aAOyY7DiDvO2nC2R4IO%2B%2F0sQr3MkaESgrvPhv9tGkKg9DQ9TALDNt%2FuSRE%2F74jROQeDg6uqYUn07Ko6i5jZHywsAy8VBDGIQ%2FkWIK5TxumoAFYyD5wI6wgOse2dJE2p%2Ftr55gekO0ASWL4vxfAWzvGlcYf%2FB2NAFQzA81mZlFVEiFgf3EqReKkkwq5S8TSXJL5ACuYejHPt%2FORjnLIB8Sgzafw62kL%2FATL9slxBV8EYSrlwFgn4RWKm1jjwcan6WqssMuM50bCPCYyavK1I4rtsv%2BmM1eq%2Fb7iE1sXCreGjlzFIa%2BAYMn7njoileMyXRjW%2BnPuryd1xtv18IutID2ETA46xpFSa04ovrz69MXiVMqHkCCB%2FjSBNxtob0wUcPHxKhdBNEi3PfID8M5wxA3MABnMN0bVFbjezFuR4La6paap2jCS8o9Ow3BY4igNDMqA3JO89MLaRdO5B7zjcxjhHrQCidM2HWZFqiCyArGL2vE%2BqptqBIno8bJgvz2nBJRn9%2BDQkKT5ny9K9ohq5OLt5qB6sEwltLNvwY6pgEhH%2BOC4FNFASW%2BUAWO6APFrIarb8lc%2BTXyBOyJLBgXm0kgqmPEXpj6sHrcgJEABEQSxklNBRVqqvwSfYEKdv9ytoJbjtPG0q6gc60ifimw8zwR5ZknwWSatcNXWW7qlwK3fctCttd8X6T7gZmmF1KiFmM65%2FpOCKzv2Rrqz%2FMenc2EAKWe01PDkUdhgxhCeZnG8pZ1ko1Dcfw8bzkKid64QUSRY6GQ&X-Amz-Signature=1edcb2c1e3861b2b7824f997ac16fde5583c66db366dd4bedc27cd75acf72397&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRRYX2F%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz7fby8lopzLHFnCHtVQlNwlEGEzvUU6gV2YdGmqtPAgIhAMjXoaRZOK6EkarSj9K0WZ%2BewnrhzKJYPTgq%2FBcaIWlXKv8DCFcQABoMNjM3NDIzMTgzODA1IgzoXEkjD81RCOwPiMkq3AMXnzHxwThbNklM58Sj17R8qhZGjwrs3GzFEH%2BLoIRAZdV0hZSNqVAdahvTiqMD2bTiiB18AE4eLBavBwdrvi9O5VNzK4J%2BhzeuR37hN79PPRkHUz0Gd9t2245jIy0mjcD2ihmkEk%2Bt%2F8e%2FZDsnokh23P%2FubYDzvN9OI%2BjQGXWFV7cApLB1y2FFm8eROiNAjLFUt1AHJFXBZU%2BbCrFRqmtGjQX%2FqRLbHN2uKKRK6RZA6HhQz1PSHZaRDcWTEjEA9NzmiNXFpRxizgPghmxA%2BuiyKvR%2BqvPoMTH%2Bv1tNWHBVEB%2FS5Gks%2FaEu9G%2B3B5ZCbStHie90HWbxIpwu20SDAG7N3j1Os7izc2S%2BLX0Uo9icppsV70uH6GcVVtGJatDwLp5IRpESGjJyJ3xRWGzeHyZyFfk1o0OenzJzXh%2Bv9MUKNwKf9MBgMTCsIQnCFkkyxwiCS33S6JKoAtPQZ2lonserEJD7x8VNK1F40dxBOgqSqu%2FYYzQE9m1d3ve69OlcfiIn4bq3UH%2BIjKJLB1TMekO%2FQZxIoQ33LB7gL%2FxIuTqbWLmUtKHTp8mmgXk75Zx9aNqFaZWgdrGS0dzKUro%2FClndUCC%2BIgVKOhd7B4F7s38bb%2BhS79PAxtEVL%2BuBxTC%2B0s2%2FBjqkARb8%2BA9ZgtckbcsuQsRjgT9RfqN31J8F6QElOWe81an%2Bk9vVIP%2FjSkGql0pmz7D0ilJ0UieAoO6cEls0mNb8xf9La03970eVJPlL4N9FtaLyxitaJT2rQOOH34EmAyHhSjV%2FFQ9nfPzleTr34GHyiWXab2riLRk74avIuZusXo29VUqvnG58%2BxiSgD3FqNXK8RR4L%2FB3OLYbifkuXguFn7dtBls1&X-Amz-Signature=a99f24c373dce302d75c83ff1b81d15f8fc82df40c339ce8fc1bb320d55787bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
