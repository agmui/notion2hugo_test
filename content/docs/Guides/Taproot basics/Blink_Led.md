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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VBWCD3Q%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDKDJtFD%2FA%2FE3ccwpSBwnsAeLrc5e8LLnJt%2B4KmMHZJ%2BwIhAMZXIZZHDhQrWomaSxjwe%2F7mMesaCN1uUVM1eBe9nz9iKv8DCFAQABoMNjM3NDIzMTgzODA1IgwD0Wi%2FUDjLNOYym50q3AOrujurGpeTDlymfFFBGy14azN4GUzZcybaZFbzV3dG9zSNmxN%2FPaQVExBHPHSrMEeklT6lwsrOE6AUIdW2B1HnKfJaaNMKSh%2FtfbuSZL0LxnHjoqCwYqeYiOWbzpaI0CUtX3PRBOZnsS0W9EA8YJkujZGe7ZGt1Y2S9usBeHvpxHd7IdIp3cBasndjIpVyffonL5MzPZl9JTJZVljas22FGVq8TjjkCIYTpy%2F9mTAqWlSISvtyKMS06%2BSlkA%2FjPEU0cmCAdrhTgE%2BuNBBQbENpBirGrQ8d71pzTFLD9kjroAfJF%2B75cQ0zytBFOmlKJkz1jHBgzKO2HFIvCafd2N1qQS0JM%2FBxjKpuZoyeIZYnX57yipEaTxzGe5px9GfVGwqnWiECyy93ETlD2DnThhLFd09vNfq8ztvHPJhvqmSJTJiVsqLOiOkSslE78FWtnEHVfgegiyqoN5g%2F8mjaSKGms5bJGKUUFLIhUSwuDiyPzo3zUaxX%2BNo4q4HhnNFKrjxXqvo%2F2LP6ht8ri8c%2FncyL4X80uLhdd7st4NXSvraFT8S11%2B7kFcjJXrhTrWGpG6j%2BQMM3iW%2FgKYjsrx9iGvbhcZkhym3tJCI3%2BA8fO6O2sNEPyvJaByCe%2FIxUwDCj%2Fq2%2BBjqkAW3GimlrgHlQIDsDhC987QVb7FwF7v%2BeA5QDiZB5h3M8XiSdIwVInM1m0e1aJdPB1S17%2FIW4ozucGYWyK7xfJwnRHANJMhmy9ZHQBveJIO%2BOJ8ne8ybmPQxp8DHZ%2BL%2Bs6%2F9%2BeYPs%2FKaYN23%2Bzd1TcgjHBOVONflx5ldURPpQr2iK2z%2FlViv%2F%2Bf%2FSIzQq%2FjCkfdjO4PdvaiRxg%2F7boUNsedlC5M9Q&X-Amz-Signature=62d40aa8086eb314b5013984deb53aa55faa94cd5c51cab29af5ef14eef400f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJVSDAPZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDFIro48QCKturZOOfF3vp9wPHbUqC4ROUhX52Tm7N1cAIhALIu04%2F0f11oY67rjhQLR0SaESVHoYSOmWHNRmCEjNJoKv8DCFAQABoMNjM3NDIzMTgzODA1IgyZPuZYKz2PSHfWvNQq3AN%2BzpvLCPm%2FFe5GwhrzwDUa%2BzfLKk352TERYmrwcWzf%2BTKLQI2yCES17WwwOlpw4LExZ5A0vL2NX6M9GOUUqgiK%2F01GZ9%2Fw93X1s%2FDdljMCDfHvw%2B8IU%2BbMO2eDJOngeErXqwGJlm15HO63SGRnMBShics0UM%2FpZjbgvVT%2FaOPAiGy7AGhfmB8ENiUBBiJIOYn2Usm6JoPc8umuz04xXzXjK7dk%2B9Zdv5huyFf%2BnIvnjWzx06V1Ur4haqm0EIhcbX0627HY3wfTOU60Zk5%2BA14%2F2DsmSJDW%2FYSRhm9uX%2Bq8nD0FwUBSGKkz3ShBl19cCo02U1jWC0c4alWCRynxVll7nVDph7heEO4Uum98nA54ah8SIqjmT4GRUD3Z5TNl%2Fmn8ZOcpqmGd7I0emR1i5uiQGU5%2BZ%2BEVFjb%2BYFpyuk0HF1FbBCCQ0qpepHf0wE4eCTeyFHwAR17hT9QIBOuvdo56KNgH817aolhXzEqLddBciSWmvmNBM5Ss8QgatgiQI7qpGY8eJ1hlNqvtNu1Cmv7QePcQcVPAXzcpFBgay3P0UIEgCX6O%2FLQ%2BITsLBpbg%2FgBTbsYlbPcjBKiUUPbw2gsl4AZMsHfa9stRCsxU9h809Dp9GFaQyZY7YxyPxjDa%2Fq2%2BBjqkAZ4BXZg7S4e2K9DDH8%2Fg3%2FAhCJMCfWCovK%2FhgN0ZfLsarjKWjVz5gllTGnrdoY9XDqiDp8NWc2W9q3FtUgsn%2BSgkcAbJqs2%2FvhXTgcsg47I6xRW5%2FD83NxvWMlhBo5C0%2FGlD%2BVGGPI0DVx4eatBD7CFWU8Uvk%2BuiaXriGBW2cGB0E3eMjHlYWFUrmIjvOKQLnpAcbVsR1d0XbayvKiQLk7h8MBFs&X-Amz-Signature=5baa550456d6d30fd4b5abffe01bba21843bb0f7c8a64ad9c548a27086edd8d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
