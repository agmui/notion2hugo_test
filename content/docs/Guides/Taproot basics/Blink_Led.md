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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNB2UFCO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCQkEdXvQTtuSCxmmpck1mw2sHlHjCHP4CtNwAiSrNo9wIgCTKDkNuH6HT0d4He1LfVwC9Y37I7Ubr0JBkGqweia0Iq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDmO%2F0FCImteG0S%2B%2BCrcA8SYJFXjTbYxcDTcbhH4xagTN6OdDBt8Z%2BuOWKetZ4LyivAYRtxQp3mxs56anpb9w5mWtbU7VCPsDV2aMSYxdH1%2FIdn24DPKH%2BUML%2FFxPaaT1d2rUGdA4g95AcsHHXLJaunlceSeHBTlhG%2BwqN%2BUXfHuXvxZbZiND6fPTgi84S84an9dumZjl9zSI1W%2Bb%2FEYKo4yWfbSQEph4pXvC2HyB9VfqTV3RXkSI%2BxyxmR62uNkmZHXvrntAfjHgTJarWW9rpQsP%2Fe4%2F96VakWQNJmJ8r1HiFIubU%2FcYHCCSY2klAdmJXS0iif%2FkRiYczUtVr6%2BBgGOeGBm2Fc14%2B9rjp3NqK8jxCVWp%2BFmBX48zZpK6NeQHEfUgFON7GLgp8f1tlmNKRgsuJAA2wCz3gWS7wqO%2FO5QbO%2FT1%2BCyjbRRveMyozJilmjj1QF6BNvmAbrhI2Jo7rbJhs7F2NdfY7mWZQry4n%2Fivxg58k7t5N6Z6tDC%2BJVrY7KNKZuTcihsoR%2BAB4ayQHt1yJdDR2B3XXR1jL9LHC1JBx1O7dlwUzQ9rsINgOHLyg3bJMALZ%2FxnXcmv0I7vORjHFQd%2Bz56ufbbrz81O%2FWM1F7P4p3HJnG%2BSfaowSG4Cr0cj4sqPJ%2BJGAbnfMLmLn78GOqUBB7b3yNohheQex88LRBYmmTzDVGWaUgGGS0RtU2zc4gLWN%2BMYwbQhn2i8PDwxemJpJkFAHYIUXXKYW0%2F0x93CNP9DgFnhPBOGD7jyF3jkq0CFIBBAyFARz1jzJrlMQlwfQ9etbFf6tXC8QGvfS59U7CWWJDv4Grrafyw2I%2BV9f0AoPTX3M7vlIi2y26aY9BvaA0xXrgnKxhd9Xbn1HyZjBtxLpMMa&X-Amz-Signature=7bef71292c7f6444386dbd89d5601f3627c553643c0ac513d9616557fa15e5c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VADNOAMC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHk3EH%2BAGAOCFDlp3p%2FYREnZkt7LbJWHhJLCwGkjO1lXAiBbFQDIeR77LiPP3uWx4ehO6%2B80pvq%2F7LDdUKOQ5bg0kCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMudP%2B04TIw%2BwKB04%2BKtwDjccLZqdzHbw8i9qSFk3FQtKNTh%2B4Bt3KW%2BxIvuhxlhmeBV8IzOGnAM0TP0Cgp%2B%2F%2Bpdg17M%2F6r4wqJuGvJzxZYsHrJMuY0EWo5MQGdon4jI8l%2BR7iEs9Ib%2By8HKxRg5LYWHDAb1%2FB3l2pdihUTioCQ9G92Epagn2xdQtfYVZz3Us2vM5U8khyAgrkKEz3PvjnAZBU%2Fh5R7tjtyB73zkW%2Fdrgul3zG67zy%2FVaeZSmJ%2FSjvheezcl1Y7Qu604g089PkjyRJ8QzH7X%2FRkUyE3HdyqVX4a6BMwDT3cwrA%2FgjRhGUcz595tNfoZk%2BtyFbr%2F1qNDOZYBCm9OxPsmlUGcQcxRnSQuTIEVt26uKBiwj%2F45MKQrDu02r9Nmf9y8Ls7VIWK9Zn1VIeAJMa1We%2F0w36eVc1RD3RHOhutuE7SpKX5CCBc1ZGR03ki%2BjlfsvMmytOOlRXNL7FqpC9klultdk8BuuAoEF%2FIfdfyxszdAs7ho4xE75RXoX0DSpRRduOAgTedUBFHXGlXreidcFyngkhNARgpKN2g4W9vqGCDpwAg0jRMalWVmmw4xEKrbySRGyrGT7cwWZYxlOZzjqt8bYkPgpRSpX6y%2BBzxe0%2FJ%2Fvkk2CwMGquwvpLEQhJxzNQwuoufvwY6pgHg7K%2FlCfxYGvYzrEoV8WBPfjHaZzIkaQcUnBTJUa5gBU23h2Ye%2BzvH5zgpOjA6rNlIof3XRPGbytNs9f3o0QEUJ7FoPdgpdsnic%2BGwKgkPb9ooK0tPndLd%2F%2BoQV2K%2BckTHOojj2CYFGJeTFLpqEMNRIobY7xhgVMV6JIx0kfspSWOJ8ShTJsmxU3gZcz2MVYWnOO%2B3R7bcN%2BdiG5f68ZPhC9Eukq%2BJ&X-Amz-Signature=c4a4d93e5a6c895b9972db7dea2110ba7b63c382ca10da412a446f8b134d2244&X-Amz-SignedHeaders=host&x-id=GetObject)

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
