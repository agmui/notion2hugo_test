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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VR4ZZAK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B27YRCXgcmhNVVVv7yXRlcZ7opeFXwsjo4792GW3wxgIgUkqN19jWb3IxFdnmDpn6oSUL6c3xlfDu6qVAVMWj6rMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNZGyHqBfmAJJNscUCrcA3UygpxT6vWIpj6i84iiWj4lqEwsa4aLBeLZSeQ%2F3%2BmqZu7eOyLX9kJFtIGCZR4JpzsocyXXLdvTgkXs1nPxDTTrbchwjSKJgxq9J5dE1myisJlN6P4TQsvK24pkbUg4FTVkD722YertgnhHiDq%2Bda5tMnAcaiga3rkTi9v52O3o%2FuUA4VMm430u9hLc4dajLD9Rrgf0AOMtmSlR3ZK4BU3X137%2B3F5Kj58oTJo3y0v3D8n6tSRc%2BL5tezPncZQObznfdGD8AfNKeU4CQsAZmcQ9oUjyVawX5fuvVFtybQHwrKsQjIHXITWBLTrt3Ccdyj%2FIBdci5EzGT0PWOXVKlYywQRTwY5hPJTnKLz5rVrUnOw0HoPpfvXaTVcFZlD2joZOdzTPGr9NuJ6bxcqVR65LZPFwGwLuluEbqUdP30ss5JBPRj40XqMsIjFaivOUiw%2FD5pJTkcXVmAnPXaVT1KgWwG8e%2BWes3S2bYdsiomN%2FzOaxLBkVohBmTNpKXjTKwhJYA%2BL3U3j%2BFF7LlRNzW8rFYBZd%2BVZFD5O7M%2F8ktuMWHVxnOw3t7EXV2m2fmVsBOoCIaLNfyzARgvw1o6z0NjCZaMeXmJUivJgWF2wDXQnhDrku%2FCZdCIx3%2B0sleMPaw5cAGOqUBLG0mO3h9Fj8sFncc9WDOme3l1z%2BUzMQeJIHCSTirHT8tYDf5SGykZUGoGz%2FgpWEZlKu9iz%2BUgg1A4edcTlnD3iW4UNKGgE2%2BQXPFY95OZV7nSqCq7QJc%2FmGfbr97FUrD9e02SVrAKeegVjqaTvZRHDV7o7jI3Ialm58yqB0NWMggKS7YvQvYpXxkTEoYhz9V2nMCN98PF7WHr3c%2FxNsu%2FljMsVkD&X-Amz-Signature=30fd933307c7a34aeb85d97afd9a83857f3a5d0cc0ee1b96c3b98510a6dc24ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6K674IZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUAb8xwTOSYU5PFvgTnqUcOeEW2y0qQsTxIqSCstgHzgIgERRpH4HnRVE6xL3sJF55ObJegZLSFLnuUucKAKweK68q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDB%2B%2BJEx5hS0yN0z3SSrcA%2FKDIdtPcQjBaVNDCS9n%2FK77C9xzYyzquRzHpFfnyS0Mj45Of%2BXKKkTz%2BZf1XvwhK%2FqhEsUx4SpniEK4aoctPHS1hJIj1YunxJvYd4u%2FSo2Kgut%2B2CGXUXX%2F4Zp9BWGaxTRnteG4ruDyNkn97aXBqU%2BhZoE1UWFJY66AZULd2SUtqhpqAG6vE%2BtH7onCJKkiHozzzAScLZs3%2BBqjOklJZvOmqluj3h3FMawpLAl%2Fo6MIZmE9riEgigiTpO4JbpBjrQ7JnwycS6Q8qqu0jpP9uMspzgSJ7P0WH2KlS86kTp2sd4H3tM0BjBpCIHEZrW0BBKa%2BjU2Z1v1695W2pAe0KUmr8HyxQdAVCXFzCdXWU0HSdpsGVYntG0NoSMwEYjhwGNs1THugQkCZIpHYfi7CFts5C1GfCTcyRI%2B4QclqLkDyxPx%2FUwuf2ZlWXkoDPRw5vMkUp%2Fl7JzUc9NxYsXdn3RItSmch8FjGbAb6GpamBghcqv1FmRk5UGz7OfZEsCujwuWF7jnc%2Bv9agDaJYK6I3EzTAs7LZ0aN5Iqt%2B%2BdoZZOw7XN2%2FWHbmDFYHyUXNP2y8GFwbaf9Xezvyz8oLPB6dK2%2Flh9no1xO8oEUfGiLWyxUZkdu3y2J5NXgtCIqMPyw5cAGOqUB2HgAUzhjx5sDgydRG387T2Uaq8uH%2BLKN00h32I59oMwzPgTIlWx7KZifOuhn9VEOT2QMJqv1hJcriIS0QtARJKStecWxgfzMjD0Y3zGdxqL2E3okKmK%2FXGq7MGzjpCnEgeAsb3%2FbRBU18bjP3nq32otimbQ2mmFh8WjJQtXqaSn82l%2BhZyVc47%2F18tDnPZ6pDYcFcvQ1wvYun80raPGikUZVDkUa&X-Amz-Signature=084c8875a6def0c359ff582b3df4ade245748fd1857799be528f2f79668b55d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
