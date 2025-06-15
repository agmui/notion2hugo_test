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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQ7FTCW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCJ4nQskjz2W6eUy425QxURcM4jxNuEVaKsAhtyeA%2FYLwIhALuq2OJIFl6awUEfNYPVfylteFJs2EbLgFOF0ORbysAyKv8DCDkQABoMNjM3NDIzMTgzODA1Igx0X4cTjBDo1KIY1R4q3AMJAgZXJ%2Fxb8QDm7%2BTUKCjcKjI2M57mafPJz4tD4Ed%2FwcQj1yXeXL3Dx6iZNk57s5MBeISU2ODy4FCuGWuvCkzzjKdNMBxoqhyoiJWnq55vHteWUzGCL4j8q8NRxSiAjQ7%2Bk%2B62g80gjDyVRZBbAru%2F33QjXFTlWZnDl%2BWfhClHgpL4x%2BSx1aIov0vj7bvC6Ke9x%2B%2Bh3g173EpiQSWkn5UPSoxIcycziHqJPRXi3vL5x6Wl%2BBdHacffGJ7nfaktNLRkbRhsdN3FwPvdlpYBMQbUFXdq7uo%2ByIxaPJ3zdJ2PgnqMmPQZuw2KUIseemEP6iwe79hYfnycqeluCApaZqOyDONp94ktSepD9J27aMZ1EDtdN%2FbzBsq1pYUapdA0rWt%2FzGDVUYbW%2Baz5RCDCEB9tkyvaGfCbnilXaSOlnNoSHYNxtnMijlwaxxOzfJ4%2B7iBFbXKOd2MFOizSSar7xaz46XX9p8oFViJubKCFvhcLj5Z%2BT8p1RAG3v%2BXv3YnDSNbZecSL%2FBxOfLUG9JoOVE1vzc1dqytFrpw0%2FysrS19yYlvZW8AiM4fkeqo7jnPgJyqNNA33QDC9BjAjqo4cwGCFXmO0pUcj8rWdYjKxa7LjWFNxdYeN2Y5z7ARnDzDAorjCBjqkAdIsV9r2sMwWm95ZfDgDRXAPmbeMTluDJTi3tbETRjbdDCoplD9E9o1Pq%2Fe52B%2FYBDLegkjyLbscbWZt6h2uua7If4dIZ1utDG3xUJcNUfrldevSU7VZDolB9CbcnIAOU7WLi1Hiik1%2F%2Fheir25RsRchSBA3RZHiezW8EyyBgl9LQD1lx3j3bTyasYYYfzBPWztK%2Bka0uG7YfL%2BcGbU9a00cwlAa&X-Amz-Signature=032631466e416adc62ce77e80ce3debf7e62ce806db0a9d0a71743a51e40c086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NQKQSBV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCN2jdMoWrqPgZHrBoXZ68NMX7fuXzIapizp5cdsaM0%2FgIgAU4CZ2drpFlQv51N8fwB1DcySdhOJw1CE67l5ea4P4Eq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDB9ERgn4bdTxJRQOKyrcAxWtsWott%2FAGHvJKvhfjEWK5jFzlN7zg6BcaKJjpZWXBFRgRIMpB2TJYqIg1WGmzHZqP%2BeM%2BaldNhelERGfk%2BDiEWvphypAQfJt5%2B6%2F33oB3B%2BrH0ivVzzykM%2BkF7Yl53Qlui55Fr%2BrImXmoy%2B9ULgGThDZB1mVTja8i9jcElAGvxSqQ4ibEKpCe7avvYf6z1m6Uf6SGbFX1sm68%2FZlfNDNJdcG4VoM2uGIEC159ano7yiEv%2Bi90WwCVT3NXoUoTgt%2B4BrA2YQuSp8wdMguDVj%2FSaT%2Fh6vWyjnVwGOJFD%2FN4Ti6oi9D%2FFwZrVPN4YGEtsK4QQDrdk6p6ectZ718pTTPEuSrC9OAaPw2DMQIcbl2ipb4%2BSQP684SrZzHppcDE%2FGVhQrO2AtSH0RRHY1sS9yc9y9IqyHn3movk8xKDkCaza1tsQWcFgcc2xRNLUS%2F1r2k5GkDMTy8xOw82rF5ItUMnDBd9KT45aHjItrZmzrIiL%2FkBuKRtoVIbKfsbFFFVXlOP1I1Wx2tl%2BW55%2FFcR3mxuxZ45Rj1nPVy3rqg0AM12fE2UB0wRo8JTsJznGQeGak76zKCxJLCuaSwA5N7QBCfaV44nm1zVtNVl7OpuoYxKnLx%2FR4x33FMt2dPTMLaiuMIGOqUBolCXl4cjCSmSl1TBO0bbs7GQt8IpUr1nZ%2BSUFtI30%2B2Rcl3b5dzGPLL8WmkKT%2FbPkLhqgPtZtr3rcVBfsQezUglGdVPHGYSs9YDxQ8ltAB4kwMhEGMa%2FDc7uge%2BR%2FKJvbdKCDIoKF7lSAybxmcUE4IXn%2FMbDY84YjdnBjKM0MjRV3l89xGlKi4ojpDkfNEMEUaWfuNWtW2L74o1nJpci90HlMR52&X-Amz-Signature=5c648b61fa3a0027418630a47ec97309db7ab98491e72a1f4cd4bb469f215c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
