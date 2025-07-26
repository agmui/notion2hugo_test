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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REHYYEBJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCUTMuQYAy17B8if3DV3gaHYaPu7fkCJgxHJqHkRwGeegIgVBVTHr4TNWuOOHz66y4%2BOymn7vBJeOUmKiSebRhuFMcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDTMUde6T%2BaIXJqwMCrcAym%2BH81VdUl5mNYb%2BjXg6qVuwwddNRdN3Ep8W0iqo2qHeeCYWk6Bzp2%2FQViaLUdjNF5%2FYVJwBOdFbkApBjnmc4ar%2ByD2wzVuq7caYAl7DEYVxzXV1PLqwJcWOApdhCLjoNJqn13zTU2kh5qtt9x4gl10yYl%2BI80rjDYWOzai%2BJczQMPW5UQWEUp7g0PkyWPbAxerkMwGJ3LRPtFvpTkBCJK3ub2NCDjYkKBJOtWy5BJSMhR3jx8RQPbprEt2tmbun2FBomZSd1C8VZv%2BkPu48HwcAe7UchNix1wkYDnZBTCx1O7Mdz%2BLriD968ENVlZA5BPT55N89dUr%2Buax9MV%2BeoTsWc9zvzdANJm4VD%2BJsB7D1foaMyFn7s3gkPm%2FZUK5jzDyrV1MEa2W2OkbDusXa6dlHamB4kuZJRXJCCgi6MMliRE%2Bn0G5GnH8%2FjgwcF7D4mevvQLMW1rWSzfexuQ37OZ4vn43vs4xE%2F%2Fm8XEO%2Fj%2FCvk0jgeXlMj5HbdiRcfLrmNkDJtxKwdNj5MLEOEDjsE%2FpFsjFiZy9rIgaibmntVxzDQPz75RUzhxKs%2FyzL59lzs7Szu5TU0n54o2Ejj%2FzWtOT%2F15vju2Y%2FDsmRnNUPrztPTJbYFAgIJZzn8KXMPH%2BlMQGOqUBBy2blo3pk12Fu9nt8m1%2FSe5Nj%2BBtWRsW5hWhv0TtXG8NlZdsB0%2FGGoEaVpXcWbEkky2tv8KXhIIb8l7gE9lQDLNiuph5oRCt2031fp1ilJsPJEJnyL5GcKhuRh%2BNkXeSPCVsIgXQ6ZPGPo%2FYXOs0IScZgcjxe%2FuRJrxk%2FRZleLNAXmwZTlyHiykjMI9HVdNoibHolr5DNV6jtJeMHbf5RL1hNxqb&X-Amz-Signature=e5fe542b178a789f351f9972e452487c1546b1c9521d323b963e7bf3364c7153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDUB3DFK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC1JkxrQKUUYCM%2Bw%2BTnLOo1WFy16FSEtiOsCtBLTH6E7gIhAIvAj3lqKHKZkdqN75w%2FFItEsu8i%2B59Z1OtizlXkFbMbKv8DCGYQABoMNjM3NDIzMTgzODA1Igyp5bxAxW6j%2FzPEWRIq3APSh72whUkXQ8fCjWjBrP1Lhy9r%2F8LuIfF2VMh57jtmxQ2WipAJbbrepaxPETHK0qd%2BSvdOZ5rTSoSJeouyktY0GgdXVSXgKQf%2B1e4NTx7%2BsmwBpKGSYR%2B4oqVlBag0Nw0AFyS3mgYXrlZUKpc9LCbAxR2c72iK1p09XAn9kC7ATh3HqHXQffto7NNbaRiMOF95EevAeyBL3JfE7MgOHl7exBv9dilSfv3o1E%2Fm4qsJP1Y1MavE78okiZHT6pK8dLpZdQ7JpiFT2JzYmvz7kJvHGb7KHVcxHp49DuocIijAAUI1btoulayiMT3Y2NlHTUplG3xDrZQAEtjGcxDfP2GhINSE4MRHlYmq7NHCsGT%2B%2BTy%2FIERJ6tYXhH9%2FaAJLy8B5gfTwxh1IX8WRx3OWqM7zP%2ByAS8lOodZy3flr%2FOH0o6L34Dl3TUnffjq%2F7WcxArbQrxtlXdQT5MbdWzCTb1cRKQOZqicHspN6nD4gu7fBahHSGdCGJ6129TYgfQr%2FpFyleL0VXRppipvqYEdeyHy9WZq%2Bh16oQbB60kH5sVGxH42DH20UsIuT4g7VX4UHzEwkr7pxAu%2BoimyZ9Ai0rNCU21Zawz%2FsWJDikStRqoSQQU9C7euQR1d2Ya%2FwlzCc%2F5TEBjqkARBXVqJMWsUKVuIzXA8Zl66egJ2UF6LhrFW3yR%2FISZWm3Eq2IXpZESgleDFSTxwLbthHeF%2BiX3Kcy7ncmQRrR6%2BTywBFu8Fq4rrVPMRGimEkVWCNodGgznQ5AlWqStJvfcCpPE4nrJyqxxkoVQ9GFvhYfGVamHGXv7ep59QEFsp%2F%2BzgsuP%2FM3EyEPEwtVJC3AkwP0wr0G0%2BFmFCA4o8H8lEWsjdg&X-Amz-Signature=4d62dc5793dc45bfa5b5daa256a5afdf0b70839658989c56bbd02c58171b531f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
