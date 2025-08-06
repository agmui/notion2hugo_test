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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656HVQL3Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDnpsnht7XUTG623hF99d%2B3bhuE9whaygFfMAgp8Ond1wIhAOFMO2lt88fWtpLWEqoNedmJ8yqSG8LZOdhfsfr9zqikKv8DCHkQABoMNjM3NDIzMTgzODA1IgxHoCrUxMff3XDvgasq3ANFtYpZYlIiqZelER0ts9tS0L2HapqIjL9nNy9MvXx%2BzGXDkKWOLabsDAB0MMfDt0jz8Or%2BHMRFAvNa6GDCBI7UbJe6nh70qGFn6oNxW4bl%2FizBVvTh2rcyn5qa4kzIJZUCW2e%2Bve46wEC4TXUEAfflZLlrN9JaetqdM1iBX4KIRHQSdEzjlP%2FuGdd11qTLIzohg%2BW4NPmxuMHoSF3y1rv4YewHqvbx1rqKc9jvrv2YoN%2BE4KNnL5XlsVcXBrW1qpQX%2FEKw3Z7g2Ob%2B7RygmD8FY00CGXoGL87nRaG2TkgnP5Ac2dmiwpFBs99nrFKRPN3l5WX3GDzTt49Es5gYExSUFuA40gdeEi4FfYwzkifuTrGWQtTNQLarIHW%2FiUF%2FI9c7x8JzqHfd0a%2Bjqcg1hPgTQUcERWbMLBsye3tikSu904HmZ0bBj1UBWZ2SZXVGSMDxFq%2BoHvgDcJhM%2BKJOk7%2BN7GF%2BKBzkQLF929f%2Fy91XvrQbkloFBHH%2F9y28ZczsKLfwtjMmE33yrvk3biIpTCwqr%2FUUpRW3js7Tutifsys7lBZAcTn5bYGAoBnltFZQvARb2TLGQoeSl3JiOLGjYncEsmVUL9AlkB%2FFmbUVqZnlhgzmChSNcDCWKPXzeTDO%2Bs3EBjqkAeu9tg%2Fy1RYmQVWBwJ6u4%2B6xDO6bTq58%2FdL7LL9k%2BCjX9EWTQlP4ygvjbx8IfxHN%2FDZCLsMfnCVHrij6rcqJcJeCbQXBpBnSFa2p46IL4OwCFCSkcLbHxi23oviMk4zbs%2BR8NRurMOVEkv3B9cVB5fK8NVgQ%2FgGWpvRxUy%2Fq82bp1IMdxV28%2BtgVzgm52ExMOZOKZAcAknjCx%2FzKsT%2F2vOZa%2FG%2Bi&X-Amz-Signature=5455c034520590f4eb722ba2d9a2d211ca2adb573d7469d2b2ff94d6ee8b7896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKG7MAI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDuq5gZCH9Dr6uD3d6K%2FW%2B1%2BP7MWSsEAltEmktnm8tnuQIgLRI%2BAPjy1kAkaMTbEzDdP70tRxXGGW5cGuryb0ZxniQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDE4R2AJ6mLWzS31FsircAxekcHUeIJtaRqpc8ST8qEPO4PEwiH6rOPlxAwKyjgGdON7Ho3%2FTe%2FwOVcoQ%2FatMjwMzh7HGM0P4bRuKdC0Hp4BcKXDp4Bh8Min2LeGGI6DxDr1dQqD6VPJym7xtnVyWnE81PdFktxMV37tT56VeR3tZgXtbckeJqv7IUqX0WjKIxyQnBZkfNsy%2FNzSMTlzII9Yi6mJWNLMa3enMUI%2BvxNFsLqsvLIpBEkRoGt4YtwPvXVSCj5TmVXQ81BQBLkzG4h1LucZL7oYV%2BHyqT7ZXrZxHA40NU9GjSkgrvQilABCjQMmm4cHOib9zfpa7nPzOx%2Bz49UoYQnVLKnaBdrHml%2B%2FdCejSUhMU%2FgOeOqiFjiLS7RcA2Lsk1wwQoVRaXTEw2WOinAtkvV8E8%2Ff7UOJBTgpPxsB%2BAj7DmkFvKly1Jqzda48NRJz0VYdogM81jUxXSPUa9QQRxW%2BY5RJ5F1A3jTlHJVSWngYW4JM205nswRA0bBJh88CX4GjTw5HRIXnz3Z58ZzM%2ByPLtleX66L%2BjolinsSHQf6jafeu9GTplvlEQHdwJTWUkfPQ35IQvoaRz%2BUGzyH0ME7rHsvC91zEhr8nXN22rEfCmXogErVDnUI%2FLyOpyHE%2FLPxDsK3q4MNX7zcQGOqUBdG2XqKaihKbNFtCg1iiIIYH3Ti%2FuyLRO4OAM1bB9cQ%2FbP64Js9ZBPJHfmYpFjfDXH69WFEgesFlk4GI0XFwx5zEhc%2FrpF1U1sQFSkQsJ1pnbJ3rMhiGwUBydQFNO7OkmNvoSyRnjJbUU97S4omJtS52%2BzZXkFAX3YIgDY7L7ENwkzsGfV4CqVme8znAVTU4ahKqrHZEg3OignHk2lHYd7JKuqiHh&X-Amz-Signature=e15c963daf910e71dd23116aabe90176e3d527cf28f5671c64303b0467e4a00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
