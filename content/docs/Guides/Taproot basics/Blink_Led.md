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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KRZOMZI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4je3%2FlMnt249bsweZg2%2Fkkx9J7WHrIdMz2Lqd8d9%2FGAiEAsmAayCdkZtCC1C%2F7pYh1F5BiM1qJUQ9v4IneNiwe4Usq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDANaHJHYawfb1i%2BXyrcA5QBOC4ArLm9U1vdWgpvCDu8r8jxBSDTQ%2BJ77OPGR3XoEJFS0jDB%2BCDStSAgNohsabrukU6MCzCejFccfsRHhuhkavrxtZjoJTEjEaqzWzqs1JISenioZbD6iqaGk3vaXh4KZCKmEZ121V3IgrJsL1m3F%2Bj5lkFtzeYWCVHlGu2aO6%2F6CYCIDYkyeIYCDsB84pKH7zKePcy2CYQ9FtIAEjVWqoi2AnCDf3VKDjePQT1UXiQxkO7IWOi%2B1Q%2BjAV%2B%2F2b7NgVZdHcZIHpllnrtjMGYEyeEmFPY3hvoTdcpo49bpgmossZggLZ3Cc2o2s9PRG3LReIprPpPSodJrChGasmfHtNvt8YHlUdcmA%2FOInZhmC8irkZ5smn6uQamuI7%2Bm5Plz2D0gxv8f68vYzatBOr%2BrCAexP0go1It1VShfeY6%2FYHwR%2FfdGpRNQhW%2FGbG7%2BKIRuR%2FfcsaQy9OKSOhvSudnJrH8BvCGVYU0OJFojEpGF%2BuqTpM8KtV%2BNev0lcJYkCAvTLplr51zHIJ2TjzSgLS88i%2FsnncA6p734S8fOH0%2BWg%2BrX0Exlp1xSb2WnzNdrI0c71QHw7ExDksqglrNB9qTt7pH%2FZ%2Bqf2sQbwI97T1avPKK2SDHNlfNeI7XiMNTx%2FL8GOqUBnCPgTrPv0hkMJMg5n4RzDzhw1FoQtpECPk8PYiZ6wXQ%2Fe1FX%2F77CQZ%2F1fw6lbiaM%2FrE6DgTI%2FP0taiZH2QQTX5vSgUzfCTQzc%2Bqw1oiyHcZ7Ro1w6QkMLeQbN4n%2FnR4Ls2Jbm5HIfzFXAlIRjynSAJzacz9nMKW2tzUs8KZDKWI2P8ajDfH4rzo%2FzL4kIVg0AY2tPddiw2e%2FVjF4pelNb5AV73%2FB&X-Amz-Signature=5d94527a0ec76e8bb455cb58ce16450d301948118bf5f81d978648c01fa1a695&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRF3Q2HU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF2pIEhgLGrd%2B7viukQsaeP6RX935RLZEQkr1%2BommtuAiEAyw5ta0Ehs7Ku9ZFaDLm6TfZcX9GAmftuGUyCVn9Ooesq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAx5LJeUMnZUThintyrcAwej2giOWU4050pMOb9CuoILSXz6uqaL9BT2UHLi6qXCYdubuYlDWIQysHkqbGDYXHF89nGXivVsS4q6ABXL%2FvVxh8BBTMXiX3%2ByoKyS42ILpl3ZsjJMh1E3we98ggDxTQnfbGvlMM9DjdSSJ87RaT4us5%2BTVTnTkTYs7t1dFRbNK2f1jcaFrZ6BrX4s5ahXN2ifKvOvXiMSjcUZiCfHAZ9r1tXCC3M1VMG8NmoM2SK0ehpF61ZFYc6iyKG5zxfUzW0MyR%2FMAr0NMoHXhKoP8VuNuFwpknE4XKFMkUs1YrVCX2EBqxvwQt8xrsO1OnnaI06UvEgc5BCtwL4PA%2BF97bJRzxS6CAOEE%2Flc2e8m1JJhE0%2F7vLpSz9PyTi6Baa7ES0lki1obeE%2FzktVWLIqPcmlwTmu4Vu%2B3Bp2eYy3AQKHAgOtuxcusYsNASOeWNyygcJUFrHQ8FQhnGldhrIUwyBFfVIsb1j5z8et6ZmwjDLc9y9KRNLBOv6SP%2Fa3SVgganPiBQFrKil3Iyh7AXtBuU%2BxxxVT22EwbDACTtZECgMb0OKcRLadcDMSIcUPGe63GfhM8hBDIA%2Fg1Ulcla%2FEZ5YlurSvGNgyzpVslD82X%2BTsud%2FJHOscfMISKVYsMMOfy%2FL8GOqUBIc%2B%2BkSZ1rSTf7Z4wX5UW8o%2BlzF6Ad6nMBZVNBmRFGrYlbWgEZMeJN9LjIsFJKqpNi5WUEZYxBBkIhx%2Fl98Kui57GBYpbyMzq4JNNOW3HyRAf0PoTrAgRwgDGp17Q7dFbdeSFcS3EHrDMcfXOKgy8ruMaxFLLkI0MzvIqEdqZ6TbU3TUiD0OWyGY1IVofgNDJbpTDyPKZY%2BuqxeXi0qiVfpt38At9&X-Amz-Signature=620398a3c012ceef0ffd0981836df1fbe53295b2f60cd955c7a572b9be9064ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
