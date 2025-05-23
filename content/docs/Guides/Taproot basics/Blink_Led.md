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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GYZQBF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDEYzP3NmzgRXIYo1kXXO6ZAXWb6%2BNfAmQZcNGBak%2B%2BXAIhANMER7DF7HTShYIHGL5EAuvlhT8EcjpEc1mZRmF4YVI0KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhebTWaVpwczv8%2Fm8q3APAws%2BDqscjHtNBYhEhydQfuNSYIu1ou4xw4TnyQckfTwVgC7rmmd6u%2F4BlRabW8ZLORouN0%2FyYyPl%2BSHIYD6u8FmR1TIRvB4OH6NGBV9Am11QQz7TGEDeVNuQlkvMw4NXfLIgJmbhxqD4MPx5DH%2BbdKh3Me0xZuUNq3OxP2x%2FxRAHwlK6k0MoD5GlQUkEOhfMgX2iN%2F0KBfD6vOlFNpNIDtiPiEJCsgcrDTByQeD5w4jyxc9eGW1MuYg1ahEDxBs9L3nFvifR4Azrcng13BZVZqJTQ9LSf5dR%2BTH6%2F3eQSShSSnFMV2aN2Fonm0YjS0qp9kd9jf0g0%2BiwplnzXYCdQy8tThQFMBNYi7mjShHPqkcx8WhEom93Z8AGTY1U2vYaPV7a%2Bqy29YCda4S2NLhzJUxe2oEQnlK6fYaz%2FpceYBLTbOwNDGUHNmXL%2BIt8U0PjF%2Bw1GN2DGKkU3cv%2FNeCLzz2o0dDuaEfYetPh0rFvqdIWLihMCAJfhjCmw9ti1%2B968q0cj%2BogGz9XYaPnts5eBX%2B58Yw1q0xrqlRJ7MK7nMC0dO%2FV%2Fb0zaQyIk8ldfqynzojnbR%2BfOEJLLITURb%2B5DcP1z7Uqa6zRPdozWvXSOAWs6bugv2mumfyfCITDQwr%2FBBjqkAeHElJEP5iQk0CsKJiFixlR3Jxlif2gDW8mJE4lWkEq02li90dlLogdNqejzDNRGqkFwoJs0tvcfnoaxvgCEBeRsyE2%2BS801bhbVMG7CobJspwpyDY9I0DVJQ%2BFAvTT91lE57t7UDky3ZS2ePQzhSsdz2FY4Mo%2B%2FZjay9QyaWerLYywTHRYHgK2OaGCXB%2FXEZ5bHxDIfstPPyDAKtmh4MCBTNJrv&X-Amz-Signature=3333b07a2538b32d052f9c93c1026dde697131f3d960271e02d73281901bb3bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZULCBP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIEndDfB9ka6ViJILv%2BKd%2B4aq52K2BbJo1w5cReJga%2BB9AiEA2eSEvDSCx9m0cDIpop7ukrSrS0peNdrVaAYzrcJ%2Bvr8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARetYjTnQHZ1apW5ircA%2BJ6a91yEzI0tfMpoMkEzK6AD11tduAX0O%2BGqZR4Ewp4nUfi4VUeddQS5zYk9nXWPcxtxy684Q6iypk5kdacLIaz32P7jBsXlMrBu0%2BhfjwFfp34hda8R9PnGbcBfIJScdocZLomhM5ZqBut%2B0%2FtWCpKp94G0ySv0s%2FIjW1ZU9bVjB08ruwL61Den%2BmUIuCgJV5vLdwk%2FJXgYzI1y5%2FCtjx%2F9a3SQSmFTJAmAevazDfZYZ1251UwL%2FwHY32%2BB8aDx6q381S58FAUzo%2FzjcUeDnxGt8OBe9K5JhtSL9z%2BfC46eqXSQELsdaZeI3pWQUMFgW5OCAyLuHua6EQdgiyGBbYlYlpEjWtFGoHJffYdGOfh1Hi43dxTJlaaOVcT1AiUt7K%2FGilXaC%2FmAL7XH8BF9OKJyt4sDPfC7Mk7ZCFeSzw5gz5mgVszpuz%2BmoNGfuz7zaHbgVGxrHlyY%2F6k3UY2s6HxQJOmEUVjAojpCkvSS897KttQa3hIdVhfaBOC6qu1cj914cwmjYNCB3GNJAmc%2BJjB0z3jU5KfQmLvB5avsyxjjUhbSkLeD2ooGAkc7sPdL52c%2FVybaMrl2DUpvfWA4nCmxi%2FHvBkQPLulidnhWwsngPnm%2F7HoZWX4vWRnMLrCv8EGOqUBn7T6tqLo6ctEx5DdT75Hyomu0rL4wOsu4wdc%2B7A46G%2FZt302h2gySxHY2Vc0PECqHjNDDSFhD%2Fs2xH6EQXkjKxU6B5wTSklNaZr2lffFqU1wCdYZLUrcdYsBtHMML72%2BfhcA7aLfvY072f2XLSO7KVfgyOAEolNBCZxTq7GLRBNpss84rwEiedQiK%2B11son5ZxK8hqicJxjKHrhkBFL7LcPIDjoW&X-Amz-Signature=572af5e583a57818444035bf11b0dc3c9bce8627fc62ead0021e0c60d0c1d5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
