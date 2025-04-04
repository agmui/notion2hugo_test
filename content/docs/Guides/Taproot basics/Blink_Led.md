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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLFIEBVL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuKhtBCwRJkhafHrPpsA8e6tV09OrInOD46nDBslgtQAiEAidnMwYxLbYRBUIcq%2Fj3IPc8M4iyX0KuliHam0DfeDKQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDOQlg7mPheS4hnb5JSrcA1s%2FDaivhdp6BRDl219rfrWVcXVBqWefXCW4LoRSztS550UtKBHUx1JzCDZbqaLvGxziYq%2BB5h46t%2FBgU%2B7ycLGNVdbxO%2F9jLT3WlEjEALsm1rQzkpKRyuyFlZnkPU5PrXmuz8bBDBbMA8nCySZRI08ufOSgo4dRbmc7MYqaYcaKjB33oJsWyF%2BMXe24N7yEEnkdS7uK69FClvy5Z6QG7x%2FgzYcwLMCddDjqXvLSR23goKW0JVhs6hRIK6i5DkE1x1hv0FgtLPIr6tUXJZ%2Bi%2BsQuvisYkWaiUWs4ePSkhf8Jb7IynJbsn5Nqbs2Qvo56%2F%2FPkKVRf5o61GmaUltr2pInvNfRHmznARHiryhUHAqlhyL1m4XbRZISGQBkkvm5uw5Jb8%2Be0Vv8di%2BjUKOOVXrdHsghbB8BUQoivw0QPrTBTA8AVzNf7j89mHdrkhIN%2Bs94VEnGJU9PqojPc2uNx6PorDsJxLJrqQ%2BmMsRrsBtBOt69UDdZB2sCh2YBKXCB8Bf3cEzjneL5tY5ILcJv%2FYoRyhhg0U%2B%2FkOjQO3xq3kY56oxkkN00nLJLLc%2BkhYA%2BzWtjsmIgMSXi6r%2FHHKxWfrJQqe036iqMb1Xv58nfP%2F9e5ovpvyM9iDJll8lY5MIeyv78GOqUB2hyZ0jbpKs8VKtWYKkeXgJwMMXp4id3z3GLPZUpQ3MufkzTFYSQWHAEIWRFyjhGx6fYu9Dz7mZFnlt1uJZrI2j1LMo5xSKcfAcwNqIq0sP%2F46rpYuHgF%2F%2BHERg1LsKuQbh%2Fy8bjEeAUeWYM2ry4jMe9HdtSUSKFOL8iqByRJrxD%2F%2BRUfQc%2FuxibzElVb6amTSwAS%2FORO%2FDFwIS%2Bql%2B2%2Fp8w6kEa%2B&X-Amz-Signature=d0ee7d45f0ccb9d1a7bc3ce2f809bcf520f9632caba7ddcb391191ec0aedc537&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP5QABTN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4n%2FElUJCC%2FzJOfYvkerAd8jBtSPq5kTHVUARmuPu9sAIgTPbAHQysE2LLrlNRWUlhtqcnFqDD1YHczcNW%2FEeCag8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCzPkSngMfJH1dNdoyrcA5blPKe9MqeFjYBKHW1fZUsrpbBAjXDu2vcGfLSD8d5%2BcXp%2FwXbADNrFwGL7GAfL2ltMOEB6AR6XfBLvvi22kbcj8C%2FQzlSRekt%2BSF8HnLqUJFcs3KTj8tR3RwD6TGk82ngEQrB4IVTQhuGQpRmjoKNe2vRDlwLPxC2Rq3HRCf5RzFQBbMctlLINBDwOMuqxiTcKN3kbHib3II1%2FzHJIwxEH9Hjl5v2nyfss7nMyjve3oB1UG9kkLNG%2BPz3Q%2BpTYagfnk1%2BRdqWOAp6g7fQen4AZf6VdPuMArfqambCDTtEOfreQqY6tNnRaeMSGFZyYygGvzEn%2BZZZhPFnf7fKXv%2Fq84RwSW4564iWdpojFKRVFh6seDk3R2q8qkmd4w%2BEPOMuaHVQk2UcZE5bRpKB07b%2F19bO%2FPmrFWl3m97jgsaBuZO9Pj%2B867gsCR0xFBjSbjRzXrNxC5IsnCTomtC1L5Zoj2j%2FbubhBF1jgpF2Jr4bQ0D%2BKDZ5Bigmfs96zyms0BZiRSG5bB6ucguOqzUlkIuJOLA39HpjSbi0atSBdD904nKkoEdfVFkFI5uBLd9sDi2mhnoQOtU4Ax1zxbdjFzsQ9ezTKEt47X5fzGn7LVDTe%2Byd9eaU9pG4ZBcvLMNqxv78GOqUBacKCNPgP5rp3JipASDU31vxZNIIBv9P4gmS68b3dqos%2B9vxV0pvyFTGFNgg4Si%2FSkR1fqJWZnRWjKQJNuFinJp5eQhMeSHQipvnud%2F2DCJr%2F%2BQdhWK7%2BfFUBV1cz%2BUMBBfpKua%2F0aL5ze%2B%2Fm2O%2Fte4p6jCuxggJr4cA0me9qu66HMlLBfjLh8NwC80si9xlwW9lZRRPWvby2%2Bf21fPHFcUSwHHAv&X-Amz-Signature=753972e021cbe89bc7e97180868dbe5f09872a67c8b4f8403cdbc57c26fd2f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
