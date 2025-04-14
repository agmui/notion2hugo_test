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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3Y5GVIK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEI34vYKN3Q1oQ3FzZBUizrC2WqhmH9tJYVcymRPjQNzAiEA%2B9Il2viIfsLZRcAn9NwHXyACEeTsvvBPmaa%2Ft2QalZwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLrHWrRwKdBqSCWa%2FircA5Ij2OujxiM4hGOHcYFNs6v7HhUgmLnEaoFbsvvB84H%2FtmSeXjH1%2BkMRqp8TEV9yEWwOQeyLqk8cbBrrQttJq9VpABhbthvFaAtF1YDm0v%2B7z7mC6DnWI7fIUG1oidFP6AKbKTVwYYqA20IEsLQ3f7wE8dzkcXgxc4g%2BaKpd2i6QT0kJKadcGe7368XRuvvVsPsB7Rw%2BlofMMDeyrxce3qqMh7aMv3yPfzw0gC3ZkHvYXm1q5CrI3rKjyn3ohkW4sU1Nusnm9%2B0UVI9zKVIMqQ%2FuS%2BbE%2B1LtItuGbS83OO4RDhzduxhgzzMvaTxTRmy20jICmGEDa4pxNlzloR9Q%2F6m1d3OlAuClsAQUAPoN%2B9TqK78pxQ6xvCAcPODicqCBw%2BtPkLEjPjs8uE73hdEYUULdkO2gkOVtmy1Spi8AjiGUE7ScuaQ6TrmwW2MyCk76l4K50jUqbVhHXg1%2FNcs6rs3WXE0AwHoybKvff%2BSEAdFGrH6XTsVTA29ehvro13fXtLHEhPfBFbKDoHUL7slE5yO4aTkdzysr8KsXxfv%2F%2B6Ytbd705q6M5CmDnLiYlcOJp5NgCYkkFqezbXmA%2BN8lPAarmnueCvCoDyQqhFsccNeiUxwjT93sQTEn0CkXMMmN9L8GOqUBgkGB1MnGriqBs4V9mB3B%2FLnPTj%2BPCWiI%2FKB%2BDMTMoim3hH8xDbEM3Di1JNug0cyy0KVQM1Tfq5VCBbYMhDpXvTx51VZDzK44sNJywEbdbLK7YdbmB3EaJJIIij1Habi7wdd3QyuddhsSjQdj3BpbniGp8Znlmgx6QXVl9CffIcURF3I6%2BnjA8sl8IZeK%2FOMhdEgQbMQaB%2FYHP6ckAcNA7NIuoaJA&X-Amz-Signature=b064329f216bc55a2b645c3a59aa2e18fef92ae5d66d2d5d7df810d51bb9c2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLC4A34S%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHq4pJVZRpUZMeRrwzHQ%2FVXVjXI0HZvRBRju%2BGDm2LQBAiBkqJDjD8cTrrprqYBa8aSFCzWSjdhNCed1Oupqsb94vir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMom5dB%2F6B%2B4Xn9cjaKtwDWKvAUE6FhWQfJRKv3%2BYXrVZi2S7fSdj2kMua8tD7RgEq8eiTTsTNMEB5BnYI7Vv%2BxY4BtZOB7SItXbuLjWnQt2gHeJ%2FIShn5oEOz%2BIAEAGi739g9mYfE3qpT1oivJHmdNlH3j%2BY4IN2IT2aqcHnKZOw%2BiVZ4dW3uVWoPHOJy7YDGonxIY1MBQ04nYBEnl8%2BCpSZQ%2Fs0ZtdSJYmUbo9XLcuie5oaYZctDh3IbtaQAfEIhS9Uk%2BKZTWMOmuYhwLvL5UVKE%2BQke1rywORQSo9YrGGl5lBavNaqPGGmHDTLKQ1slrL4cRfopekjZlaTiE5lq27Pztj3tytfG8edLBhi04KN69P5LDtHHQGOksSgHvHug5zmGztQsVxqcsegQIg%2FHstpRv8MW%2FiT14Dp4ExB9Z%2F7Vsmb%2FEkgTqH%2BOKCEQIqo%2FU5t90hJlwoVCifpb%2FD8OTGt6JwUQuIIXrJgLCcKKFYlQZd0CTAO4Nx9N4grgBn4bzc4hBJo5Cr0k%2Ff4Tj6%2FaNGYUPIj2JuDoamADR2HwcCxI1dytdMfhpA8hgHlJDiy6IJaj6zsP9dbnskZbhSRHeD9QGAKj2tq6lKZ%2B%2FdWg8FlQnsIn0%2B3Uo8MOKYl7pcxjkyMkWPpz3W0UB3Mws470vwY6pgE9Cm4H%2FlrwM%2FJyttRJNicrNQnKcDQoLfBs9GtFqWtjY75nwiEYnqQyTLFalP6WebJ70E1O%2BNBVMzIqQ4YFlWuGIp4Qz4rj3dkZIUc0gNRnZUbY%2BGpMV0iqWrTq4Nn6YjiV2GCRew%2FxicG8oNXDBsOIlW%2B2FUL58qqC3Urp%2BqzwZqDFkBZrw85B0TZUxD6GhARU7KGlxggQPUmZ9DyspqqmjZluMgZl&X-Amz-Signature=001fe203248bb6829a6a7f008c7ea6bedd6e778a3fb0d8d3bf88f6ef35c46301&X-Amz-SignedHeaders=host&x-id=GetObject)

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
