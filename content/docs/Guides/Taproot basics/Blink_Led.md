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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WQD6MH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHXplNrVLRhUwPCrxq70tb3O1%2F1IPHYWOUTYPWQIyH%2FbAiEAuvyz9nTtNxp9qRhAAsyPhPA%2Bov5UPsKe%2FZnQI%2BelUwkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKt7r8R%2BQtmoboRdWyrcA%2BraOER%2B71TSwoW1eRmanb5qVnCDo0UvbptmcOkoiBOn6So3tefiNOMbxl7qlBCZZFu1jklCweWAgyo8L%2BwEUQP1PJ%2Brg5bfDkkQ%2BAKYbUynHyNB5KTtENhh5kpqyX3HrvKUrIExvqUooGHxbWgEF8U2oi%2BoQ3Dsl6ETzlO%2B2LDHL4%2B95xnjCh2PyycUbYKfFEkVYO7FdtoOkB59u3THaoc2R9cFS4duXN3lF2qBbdq1Pl9pGRQbca9q2Ii1giO%2FAhmnQ1ixzPHHM7wIBQpQKOLrZwi7dojy8XG%2FdRsXAIUINK%2B76U1TGoPzIPLy4YPzF4JJO0W8KsJP6EfGp7MsrLKkurt2iqF8hkA%2BzzbZlL8AXSR9z2ODFtsDahLOW6aEZ2Tto0bA12tVjKafoDLBmqLSZ4%2F%2BhPDc1BE2MuiSuVr1frUNeIOyHwdCml%2BWo3RL5EGJ4pZW6gbL35nCv2CancqD%2BEc%2FiKmsQnxw%2BOVrErMq1BbAY7%2BgQIxuOYQDFtmIrDfr16dLoDS%2Ftfze2uvq3bvr4bpY0WkzaPW9LRWsZ4PYP3jOSujuuySZOn9xpmy60ldSwOJcnRiCTwx3OBpMJj7srl0imzsZC29NHSYtYs3dArmRXXILuVvZ3J0oMN68jcQGOqUBpu6we%2BkH9oqNSqeJBUprIJUk0oL3ofVokDWYsqCNAuTgmryK%2BmTo9YbfmVNzne5x6EDwoqRHxsYD0FbInXQik4oMv0TM86n137Rvbb32X5DYxtyL0%2BKzy8BqVk1j1R8AmsPEjb1FFbQZkIoN0wSC38XI7G2SXUUlxRz0bj%2FwgTMUaguo%2ByylXCVSLbQUbw7q1Yfwf6chqyRULrW92rnzWecSlPo7&X-Amz-Signature=367d0ef17c524da01ae53a23a7a4ce4b477b00bd9f017a482b39621d499e8175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGWI5GU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICxnysonGnvN5RVqzZy2ge7FQfGtT4NRcLViBrZqeZ9QAiAO05%2BfxkD9fjS36uPjAwcFeXDfVZ2dAgNuXh0rjkZKmSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUScoxi%2FZZhBOkuaQKtwDJNJTJYShQ68NM2AroyRukadmunCjZsXBLn12uwqLyuv11OkWuwrEImrciRuWHCew1zTJr%2F1PnuSc0gewVOqOI9UgHaSUWkoFYw0j7CvMzT5AUKlXTDmoGW7zORIIH8ZkJze3kCp%2Bj2TYUV9d1f9NMM3RCdeaaD50SYny7m89O1%2FxDyZ%2BJwK%2Fwk43ufx4MD2plJ5t%2FeqLQSUbPID734i%2BqNYm%2BWHvhnNY4nlXQPIYPPF%2BFNzSKeqX8iyEqhnH6lsZscpglgZ74%2FyPb%2BIOVYYKZKYN58UHetew6XYJtBL1VHbN%2BDFeu%2FP1Vq7jufumoJuYWiRNKbzTrDLAIICWbbQwBhC%2Fo8fFt1nsvuBc8fyg%2BHr0newCNlIJ%2BxOlct%2FXAhbcMqGlJZ1uD%2B5DhmuNZIHlJjOm%2FbQDFz%2BpN2YEgIrRCFlhb6PqARMhUAmTMszaQ211iHU2SvhOoK8pfA5fKxqg0Lhst34riPHI%2BTGtGoC1X4WUsJ7rwG0LhBzW3OXaNX1xd6Q1fquz7Cz6I37fx1gIxKr%2FZztmGrYlqz2SSN9kp63JCMKYHOk3McWZIu3OBBdTaUM1SlfijWQXFDK6oCM0nC2ukrFK4o8AyyrViaAzj8C53AqCKNJelllKVhYwj7yNxAY6pgGfcgMoo%2F2DQI8FKYY84p0nJVobZCqib0kadjuomu%2FQzW84%2FINzYf%2FhGwjhafXK7tsr29PfVmTXe644APgDEQseKDr%2BvxIpBy805h%2FCCAMp1I97UjIL6ggLuAqcLqj5OyWIYlXzN2Q02TT8GyAXtoEODWkT8ObydEv%2BmH0knThtBJBUFvGPKPtxBJcl3J3eDXnkQCfek9VKaHzh73fxhqqPrvkz01G1&X-Amz-Signature=7d37c29099bb7fd46ce6580298f276a4e356633a1020c70a026896a616ca18fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
