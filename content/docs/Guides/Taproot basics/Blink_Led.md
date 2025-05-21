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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XE6EKIH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBeb8ZXmBQuCHaMaB%2Fb%2F4adLuMXIm1%2BiYsI0uCYmTWkpAiAOwEjquDqiMLXGgCYQ53qCHVghwlrIy%2FZezcCHCd1axyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8mnXDJ6y3yZY1HtkKtwDYSKS0OOt2YmUJe1AKvNLtsC%2BijSiiSrnq%2BE%2B9A4P5zrae4jCYtuMMnrYU3vSPMaiKWEviMsmeLonWTJf1HsbuPGIY54uWX%2FcLScQFWDBzYLDcGPVdGeq9uhjUt2p7QoMgcljwlv8N0IT%2FnFbKXVUeZ7EsVQkD2KfAqDG%2BNli12JUVI4pfMe3kq9KUgR7911y5Wa%2FgXrn8vGhAeesyHdMmbBGTsJYJqLgXpocZF8oVDbQ3%2BLTBJyElk2KR2MXcvAiveL9Y2%2FA%2FAkbGgLTqyicGMsdHdDbENV8VHopjHgR%2Fx9x872eAbgGl8mxZFyYS6lxhYHsc32QHxdCAHEB6du19UrdudVUWqfuLzMu3Gv6WhteGOaIUuxroiJUytkrLfLOtFr%2BfOiq1oi0i%2B%2Bgn%2B6MKJwpdEqWiR7OZ3w3n3P8ZmEL1B%2BntmQLn0VAxp%2FNdpeahQgD0%2FnvDOwNznUy6AG7NNRr7ysao7uKlDCU8puavD8sfe2lXVZlnKlPcrrSc%2F1DatoXg3qn2eOXF5mIuIPXhI8G%2FLgQ8krh0Q3aeVamjlOuTc%2FJMwvuccX7ZhlwN2wxwiIVnk33lduHyT%2FUftgWasdRknjBfzK5yTsJ9qH60DsxW5CQA0dMJ3607HYww%2B%2B4wQY6pgHtcuM6y2UW5Nhd7JryUaTYvMi9E11r%2BEZPyBxvtGqiF8L88F8L6YuS8bqUO%2Fm3uAFQrqlRR%2F8mfH2atd4mJ1Z6oErlasAhyUQuUAPuOYqZ3PsTvo1scL0FIrmOlIT6md3yMflJFH7ECZIkbI5F37G%2BUvyg9rYL4f%2FH2FWuByTEWoQXWsm%2Fb%2BI%2Fa2q6xzqqVu9%2FvtHieEawmsDDbEHVBDv6BN1uAiWB&X-Amz-Signature=53c139659fa435f5e605aa0770b6dbb291713e1696421f20eddfab4e9e29d125&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ62UFAV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCa7U5ntyzIgZIst6mquXwZO%2F9uGFBjHkbj3IcUvsOttAIhAOYfP55er0B1UFZaqicHNCAmv%2Frq76pJtwHSlnYhiqB5KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8mvFydCNRfryQtfQq3AMmZGN7SISvilfOpk6CCexUpAMrtpRO%2BBzn30iNrzGgbalQZ5K9dDcUSeX6lMNj3Ixb24E4HE%2BxpHMF5GpU5jP6OeVqDszFCjLk31wNeWOpp6RRRF5b27gG400R%2BR87T0J%2FyxaVHrmwDVofW9x0%2Bj0QdrHFkQCTbaU%2BqVYs%2FNrRLi%2Fmq93qBzPyrH17tsOS4DjjpZqMI73IUBl99QX4cSSBzEVacSJP%2FH0syl1bizf%2FdZ4xZXq%2Bym62alRWyTFpuQcMrSCq9ji%2BRSCp32%2BKvSWDFIU%2BS3s%2Fg0ZoS7hDqSiBFMxrr%2FAK0OSypp8fqmHPp%2FIX6wsMTudYVzgqPmjG5AVMrJL9ec2JfYYTaEpuvAGOdgTkbxQlQHDGGox99KqZVfBqYgDnaicw4L9bwM%2F78LEVaxmH%2BBPCKrmiHQsWMqZ925qJOe%2BwJXR5egJ9MAp14zrrWsAMHUl8VZ3ogD4ezbdWb%2FPrQPDo5qmu5cw0vBgNlPS%2FuYa98rLeWcpIcThr2WJ24i9n%2FUq%2Fdlermgr6A42sLqceh7Ge0cTyUhXpHWnTy44aD8pZJ1%2BkHTbTtJozKrtni%2FE5bGTWTtSpIngdn4WdWY28fxmvg9TeUMoaANz2PvhZHbCA%2B9MW5cL4eDDM8LjBBjqkAaI6uYFxPICR77%2FKPkHHE3Og5wuDu0kRaTCZKfMLWs4Fyn7%2BmXoDqDoPZ6peNa2MKs%2B4MDhs7UcZoX%2BAdz3CWoT0kAttQCX5L2jYRveRbZ%2FtW4QMk1ESeEETuvTZE6xJA5CkqTcmslSYMwQtVWeb%2Fg6Y%2F2Poz1CaKD66q%2FmoQcBKq6WIdJjtPIFpCo6cW%2F7hK5cglrdhvHkm3CmkouWQexIelU%2Fi&X-Amz-Signature=90c70842e90903fcfe256bde419bdd939554d4590880dd4aa834349a8ea94398&X-Amz-SignedHeaders=host&x-id=GetObject)

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
