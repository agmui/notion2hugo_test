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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJ7TAGJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUVXedJFJblenrxVfNPdYpq94RLrJQ7iM%2Bbnjs3nOf8AIgG7tXXcMMDmWZnFrDwLLi8ue1WHka0xTKZrBf%2FsSgeqoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABU%2FCFAqYDDsN8KdyrcA5mi1QJmCC4ReSzfni5a4iHt9Q860V3SwFJLF6SQyI7lWPMG3p6zmFKwaPnVq7PNaCLPWg5C6Kra43h%2FhSFoEiYwuEVVZn%2BdhZmoqbUqs7Rvu%2FeJJmwhuSP7dnn8fS7RYOzXlEvYrZ%2F9pSZjsv3SfyyZt%2FvSBN2uvQJ%2BUT0n8HGwbRnJWhVOKkleLSWrRy8oxrOaMEvzWqDFOYenTAkiDHYqMwcoDAC1P2c0qI2UzpvtzIszk%2ByyuKjZN1yfB1kwrLOdZVLLr19faAMSJJrvS1NbbMkDA2sV0SvFdluyHftqujaEjco92oTvvWiUkROOIQWCrTe%2F8PEMPwnvGZ6wrRfOzJEBKbBeQb8q42%2Bap1fc1LJAfw7vHG5NVXfTnOuKlSbbFSZu32ddhbIbTa7XEdtyDHJBAeie5nWAT0S9gOnIOIZl3Gm6EX4PM41askEcVj9X%2F187yZT3xWcwF4RlPxB9rUrRwhOISkL8Li2NX42oOzXnSp%2FbwIAAEvrGL%2FvlX6%2FgnyC8zUzc6250NYTqjLIsCePQPUSwn3jqCCRcIwX83Tp4jhwfVQ%2BqMLLb0I0LlH%2BNg%2Bm6x3lQ%2B%2F0H8LLpiI1lKMZguk7r0Qx3zddEYgCoeaDoGtVnAOHnKrwZMJXWvcMGOqUBujmCALHg69cxB9LJnETyiKGEs9gIPJ%2Bl6NObTWB%2BYQnTJyzihxm%2Bmdw6rxKD1LbdE%2FQ7Q6xbALTJ5K6j7Qv%2BBYuA0WLXhl2Qg9gEYZ6i8xDE1Lu%2F0i1luVUYrkmT6%2FI3X7KkMpWHIlTs9EHQanCHeREmDt1s9c%2BryT8O9RVPkzUpKavfWrj4J%2Bi6019ImaYmRuOvwvRXp0hsDXO82jn4VHxJnpAz&X-Amz-Signature=8ef50f9a47801e241e445f6b19b749c1082386c2e5589c1287a09040f31185f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOJLHSI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPVfTyh1y4zHM1u%2BjAOOU7MybuCAmisgaVLmlC1wjIdgIgEBnl5OLCIFyoGnGBfCLNk3jOXAFKkfLq1FGMB6icEaYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNabq8pvgI7KUiARSrcA4mvhoQrLidArnkUtfaEXzYJTFCN3Nd1OCLdp8CrJqVl%2BsZqW1bR5rWGdkTLcmL9k1OfDyDogZKlr4pEbNx3zwEg7tYjAu0nGlUKDB6fB6evRFReKppUtRw7TYA8X1UJ7V36aTnEr8TBeWKd86UNVvWbTM94fvDnN4EJEuEwM0hZYRQ7vsCBKzlwzQa2cNolM0twQRcq0rp4zApVtHXLVzFGsGxuVK3GhSBS8yNoR7wmPGMtgCcOlEk5UVz3%2BvcMpeIiL1yJuJnxI2XCfmbZoIP73opVkuwDkz2pE1s9yZEyoAkC9gwtC0TW0DRSZOHppOldL5xGCeydrVfDlhj8ZovLq%2BIc71baT0Q%2F9KPWUbRDRp2%2FEmylvp7K63tSaYTgbA0egL7tKNfxSeTXdkv4HQBoK2ANZBG2XggchrQtEmuJl6aeSNU0tychfgzdGMhMBw7NFmrzvcEm7d40d%2FwLMOZQ7C%2FHkIztPBkB2NceaeCps5vodB5Tsy36Ln975cykITNb2mSR90FAAgDGvzt1x88wtFViPvy8zOi1xProceRpMYvjCrCPuVqy86Xu%2BZkdQwa9Mu3MrcIDNSehXh%2FG4pQa9LtqpWty9WC%2BGSF4Gnk7%2FzFvUWAdpIvKQYVcMM7VvcMGOqUBgS1uKuF86T%2BgmYnvDn%2F4MfzkT1c9zkXe8FuBDq9%2FD9xZKDRrM9%2BznxWgnL4T62DFFUWjiZM3KMp7z6z77OdPlARP84wcisdrryaPsP4h6OPedGhVW7LO5I7J4wQUTcnUTQL0KDUQjNTa6Eqx96CR7kP2CmcrKX2KnLiAjkHOfnzByG6OdcOGsfpXSBNY%2Bfs%2F9kP9mi4olgaN0%2FSVZxP4j%2BmuhPUL&X-Amz-Signature=6d84f140b6476032122dca4ea17dee9b9436878b5b184f762db6e4782a7f27c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
