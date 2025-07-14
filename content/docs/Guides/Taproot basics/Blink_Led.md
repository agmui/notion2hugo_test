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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7GA4TH%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBDVMJAH6PT6gm1eC4tMvBVP9N%2BrwtXE0CcqSQYVQzwuAiAhnzjzh%2FfMmhJ71LzliwBBX0sH7KP4d0B0o5xgqpUa2ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMOMhu9%2BSF7XYyOYn3KtwDqszoLPdM3ONI7g2Y5de5fwfS8ZmZ37PRKp65cyIZs%2BjfGiChtC4FLiwTBBQZSGPziitPP8E%2FEjoMko1JDdNg%2B9hFtNBFaQ%2FYXqUVArMjip%2BRNCzwTwjJbh7qXqTf3FDrJzam3Imb5tr%2FvXXgjSM1duzMUNzY2tXk7QfihnciTREDFYMS1VGByL%2FlPc67lGGOl5cJdhInjLSt9Bxxz3vCq5uXUe8mqmqx46jY7ABlHf2oGPbAYiggmt9B5FrXTI1u3HujPR1xkM2rQ8BLC3J%2Fa2nEvwD%2BmJkd9W8ESKJ5l0n0oTgGYgttkd%2BqBqnkFBrWxudMSBLhFdSAgUGBlLOBayVTmznuJlnXnpDf9yTPtkjSZ3A0b0M%2FUor6R92TP6amdAgJWvSdf5Iala7hsnp1fLWr2n59DaxR9BQYCG1pTuMA1fh4qh9YvoN5pXcwxWvVjhqwKE1%2Ba8QTt%2FW3FVhlBT5vDjJbR9GLMDwOHNBqil0G2y7hZYH%2BStrof74Iphfd4%2Bc7ZmWY2N6kT843Ikc6TRLrfLP3Tx%2Bu%2BY18his6CVT%2BbIxwT13wE%2BGkN%2Fu6HyItr4MdFM1n2iq2lwMbqG6fXrpEqXfBTZCfhl%2BRKT9M9JthWYNRE%2Be1lpFrAdAwo8zRwwY6pgHTjxgmsRPb%2FrXxJiUcCREnKJcNoNFnMwBPv4NFjDEh7%2F1mzvbLP8Vqd1djBRrfjRcFgmG1PhO7GPwanlyC1g%2FSb%2FklgMNS2y6BkVzZFFe6oI34VqZt0Zacp5z2vwmOsSpxRlpzjKgYkbtnuwM9MYA%2BR6dt8bsm08Oxei1yaeZ5QF%2BWF9PnEbXyuOYtWkbHDlLRBW0ENf%2FGlRr3mVIWceym4LzCpyOI&X-Amz-Signature=6bf52a82c2ee9d5e359cc4425ad859cb7b35c32a8ec199979e9d8e6fc99dc659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2NLXADZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIElwd68H3%2BJQFsL8gGr30Pxa4g4gSNsLQrzsdbxJKHRYAiAxEvxwIIoI4DYbzYSjhEm5rFdECMtFZKJYWIzxPNh%2B9ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM4cLNMLYagSFsJ%2FyMKtwDB4cGYKTL2%2BVFCKl1MJ3aefUS8dG0LJpLCpL%2FGrDGgRnzYc6NKrMNPQOgUU2MoS9G9wXyTT01t9uDLYI6gxl84j9zNNHa1dxUV9N7c6VLn%2B6cuj7zY5sbGo682RpSJsTwzrSgFPuO9S7HlMvfV6lkc7Ts0xwVuIZ0MJHXtaEfSWv9xGSToI2yWFUAlkVQjb3bdcHWATejGmZEtA2qLY2KA89XEgI60yCenqLAKJ6SwPHqRs3JcwOWJkNNE8kNMVhEFH4FztsI5eBt%2BChn8ECiqeQT0EaCqV7vQNaq0r4asJdacXov88cRCbGInZY1NIvINDFesGirA25Bo5V8QF0lDwPuv21qnLyeDvmLKSoG3hsHm%2FeGB4TuIo7365tw96FB%2FDIgzczSgzLClwH4HZyGx3hDXYYyybG3EHvQaObL91YYcR838zv0%2B212P0ESrN3y2oATP3CjgyhVouwMh4jYfo8Fi%2FgL2H9FLPOE8eLIh1t1VXbC2piKwy%2FzyaitosY%2Frfz3dOPdEeqEwead2VfXBRpcDpZtHd5FhOi9x7to4SUBkupyD1KD6CAvOYj8P7KNmfjCIPRjITrkvHvscQ0K%2FigC0dzqeozohKXmhP7YyfEc0j3FRO3T6tR%2BB9Ywmc3RwwY6pgELb45LCTR0V87N4Zf%2Fhgb9m%2FivGWGmdO9YoQ4tiyoCcJF9hZxEDOhAD0InwQpO3M0QubcOPl97zgBkWkeGdgs4ekhj39e13PnKuUBLN0M9YFdseffS5D1VJFUJx8UOA%2BTi7J5Kv1MOwPRLZizdri5Wb%2B1sradhEVAjdeHuSu927Ob26uFZ3uB3Elg3A2ysGjnVBSNAK21vIHdW8880LauK6%2B4%2FimNS&X-Amz-Signature=cf5b7d0e096dc23788fac92313e75c775cb8c5f528e6d7a167d9d1f000b9cdf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
