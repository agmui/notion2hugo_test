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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEYQHXW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2FW4ZN4eoQEnYQShGY%2F9yG%2BW8XPdlGjKkdeprxOkNPAiEAinVZ1aiauZpE6Ey%2Fhx320TIyKHWfDO42ujNrAibtN6Eq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGjZDUfTJYyw34FsoSrcA2YdMFltFjMbAEoc3NWwd7vlNEZy0iub56QY9U0Zzky8%2F63cdMVUJscEoqQCqUbK3w%2FaG8R0td%2FwtH8yvWoKCJlU8Ysyy5m5wZzka3j6wAdv7c%2FWquux2mBu7A2kvLoXmidxW9fSTDi7kz1q4Un7gUdXa1zAmnppqMn1g94ltQr66KhL6T3jh2nZ%2B1kHGA6H%2F%2BspCirhWyMeJLjXG12Jm8T3zzPrzy4301B6d2xwyNsfgXfhrFuVYHfvqiOst5FItn0cfZxmVduvp7asinN5emP2QzQS5wbHnG9r37x%2FNpdeaOV2R7okubuD9cfgusz7pWPfOrCuANZ5WqmyGwTvfq28V%2FfKu8EnZjRqv8eSpD4iLH4uzMCVPn%2FMKKf4iEG7H3qsm%2Fc14nfebcsbz8rp38w%2F6cH6RBqhqUxHmY7%2BGfyte2uV0dtk9q2f%2BpQmiFVp2hXhmNOJDKJxM3TRKvz7%2BbRRuzNaZvrgpbjZd4DzLDs3w6d8hrHZPhcQnsBGEaq5xHBD0GyMFsnyUR3O0FJkNc1sQCNh8ZpMLBRWOKH%2BEGiuSMsCOJorEeS%2BlVCbVZQqy6DGicaNqZtadZMUyLKIMd14wUR%2B5ROedL5ro6m2B3706Bnj6rQ0QE9JFrKdMKTx7r0GOqUBoZyt3vZ%2BAPK%2F172IZou5eKDuZKYELnq54de5iv8eh9tXQnkntrYSsiq8fc%2BTHkMEviS7KXV9wo8%2BSeSsoJz72ju8jT%2FVf%2BzKO0YsrPBa7TJtVXPPzr11kCsO4bE55yK6MmPwmbyFLCbScY7Ci0%2BBI7q8f%2FaWQcAaKpG730wtg1tRTHa8aGl%2BK0APkLOf95sTaUt6GO1C66gtJ%2FMJll5%2Bwi1hAQWu&X-Amz-Signature=392f6ca8265772b4d0d9037318ace7bf1f55c247beb02178ceb70578fe4dd1f3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OFBYWJ3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH20IBFm5naRm1U2KTSOBJ0CIXOdtuqJY0rM5ZcHdRSAIgZfuqxgat4UJESKhhYlnCz84Ymb%2Bjj9rQIIQfpC47VJkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDDkyU2q7TQFSYPi%2BNircA52PmoBOkRwfpXgUp%2FI6OTpkBYaz%2FQu47JlN1UNseAdaN9EHf4z8sWpd1iY5taRFNp0I05bQmUArF%2FZzl4j%2FcGIgwh1hpjJks7sfdrUwUEeEFcjwCEnEDhSp5s9TqGx0bOIthlgCkkIC9Hlh0N7GHgPIuil72c2DRucI1WkrJWhmyIfX15bz7OWbmslj7bMKKs7bSgo0Q5r8V41ArqHk2NMRJuWkAVXi8%2F0Tk8MSy9AMA2p9QS8H6T2kEj4hNncC%2FKirrbqcK02cdCn8z%2FffxwOq9vIR6tTV9So1Ra8WYl%2B5vsXXZ8lMtPVyNAwD9pKwouyf3t6wK1UTte23HhkOq2xHB4mw%2BYMCG33DeyQzym3tbkky1CPEDJ%2Bye3oSIICKyNilaIcfQSwSRAD8oaIhYAEpJW0G2WXngUQxJvlHwvETEk38EauapjCvIh3cpl1iM%2BL85hEy7tpRRGrTcsUM7JK%2BmUDq7aagIBnvyYNxHVMu%2FDpOWvCoQURwX5f3x99NnNo69UuPe6gN72AIgHw1wapzwoR967eUOwqYp5cu76MCDpVRZscgW0SX9vGAmse8vXt9ED7a5C6r36bkWt5Z36tBKc2P9yszAl0MiEMJrqxZkdL9CN%2FDitVvkqMKMM%2Fx7r0GOqUBqnpZx1n3RjdFThVHtaQ4grD5MgPqyQcNqPqPGdl2cAbKb7P1jKqwdP7%2B5ZepWg5mhDqijUZUxK%2BicrPWKMIlTY9r51yW7GN0Wk%2F2E%2B8q1bUr67I9pnpe%2FpU%2BVmTI7oOcfmzSZZj6zePMu6q8oTozA57OYvXsEFqa10etjF01zG3Xc4HyQybQputDfGf9oCREMF0hTcwdafIG5qsoUXGwsHL8IolE&X-Amz-Signature=204148ffb076be0367c82b51486943617d1a6998b42216299a6a2628ba67baea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
