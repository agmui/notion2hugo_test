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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNKOO44%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz4fORiePigQUTFIsPwRpjXu%2BPwtRxeB7AK745mRIELAiEAo0AjkoMtAFWQussv3BQNncOevMvB3YC8FytHry0cgoAqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMwCcFkkx4JUyG0eSrcA0E9379siVZYKxZ9ZH0gR6bBB9%2B%2BhAUykHbC0vnJsuPA8SkNgKwlr9j9TwffL9SfZsAefZur%2F%2BayjfnGmtZ83qrdEyZ36F%2BICeWPsaqc3nBIUXtd6AuzXkNNBe7fdZZDo84E9Hv9oADfgeFuhjVBC4eipoe8GJiBLvrs5h0cQhidC60MlJfZubzK%2BHb%2FWPMUbSCmlnhHT0SKQHNNXFFSGkEF3DGwNaVbkU0oQiU2MUjyt5oScP51CUQmAJPo7eB%2Boyd0J93wlz0QK9et7li3S%2FtAe37KrLfet7iWR1FZvIQc4ITku%2BrgYzZL%2F48%2FGgTIc0A9EqORV1QJPsh2yHsCDTG97eKJCtqj9HahxIAPtSMRprcikyU%2Fj07m%2FOIZeH6gWKh3VXjOdfnbibePJ0YKG%2BpjOz7W%2BbD2mSQmBm66x08k1BGFFfxaWnqEYdcnH%2Bn5H88MSYZDpGmm3HYfn%2BL6kzuIIa1XBLqWSv8%2BDFVPJltl7dcBHBOysr2xnw1x%2F8WIuVw6TtvvRVrpA3ma7XPbU8oJEJl4cDF2J8Mowm9u5iJg3soVAK2OJmX%2BpUTbdWkVP5WlnZl363ijoTYv%2BiwBa51kEhzVN%2FS8PEIxlckAtaMsVG0At%2BOUdRO7KrQoMKnOocIGOqUBZBCFlELWlj3QpqtGux%2B%2B8DCYODK2dlU%2BDGZCVfQy7GN%2BGwaBnAJlB2PX5weUM%2F0dPXMJ%2FfFYBgMqzF%2FrDDhPsU4%2FTVtnTKUMxOfSLVOcpVlWQYrOEPIlk%2FN7XC1hOK0yxxDjoMXbcRPBn2wPcmX7zhhmAgqhPTACpLXFJmwdqp1McMJT4nxG%2B%2FX7FKOvr6LeA6De0KXIU143WvtEJKUJMDbAEVCz&X-Amz-Signature=26eabb9c4b01fc45fbcbbce9d85d3a5de04b694a72ef56dfa929dc1162cd0724&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77GPP2H%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMmvXo15SRulC1Fw4D8J6ozAX1wM65XUQwoQWkMPWT1AIhAL8rjlEhT11vYFY1%2BAOc5iig9MWmaPJgByHEQrPAMA6hKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxNEbBhnxhd1%2B6Rygq3AO%2BEC%2FFkWhn3Oo1uRyGVVquPAv%2FkwdLI5vXt6QxDTJz81BubDujWExjReWThEvZ3OyEW71Ak5kaDaHJY4P238CQ%2FCBT%2BdQNt%2FYiHGn%2FOQv8spUvuofHWB9Y6s1vbOTGIicgExZ2BUL9IjEgqVt3QYCQm1gHBbi3yTkh0ZzkE8nuenqLxwY2A9vUJjnsPISM0AQV2YDet9g8YagqK79%2BZw1cqsHGkQV10cy0KPCi4LsBaH2Z%2BdByftDk0QoRC57rLzg0yvD2fgUNyxmzi0nU2T5RIzTfvyMV%2B8dkJgfW93wKxLLorlXEAdM7%2FcHO7KgkO6ijpgTPN0jZQ7o2buQjaP0klvKBE1mpCYGdcjOSayR3G2a994J34XD87TTopiQhQ6CnS6FNGZYbS38%2BQ4RKzNC9qjttpuwB%2FpDUscXmrsOhz39GsprL1r%2BbxxdiJlCGX7aMDhGzagEhLRQuNg0i3YHB8kSaggLLJL6keco0diXpNXfFsxVZ%2Fh8pY6IWDXF4QqkItGjSlwklCjiNCEQgchIiXR7Bt98dl7jXM9b6xYFKtgeiR1iUAEXCXzpswXL7yM7Q0e71YHBYbjDAagbYaa13LPq6%2F5tr3U9X0GY5V7mULegda%2Fo47pr%2F92aJLjC3zqHCBjqkAd0n2FgUbksaAv%2FOesaT1upIJvbS60%2Bze5lU74V5TE4qZj4pJtnXd0U2IpmMIoJLT9gx8kJuYWzs2rIBFKsoYadXuhZyRpvHXws%2FElH6qttaajZy58I%2FBN73qg%2Bc7bkgH5PsRkhBON0UGnvS0vlJlmTggduK1siU4Qrldhrjlt7s62u17JPnf8Ha1tZPa%2FVhB4go154AoN1Pb0jq1Pyedqbif1kT&X-Amz-Signature=ffcf77dbd0df741c55d42879cf9ab500cff9bfbc22692b2b08d67bab664c174d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
