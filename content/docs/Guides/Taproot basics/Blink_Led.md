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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKEGALM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPGxFKSIMEhgZRDqK2caPOh%2F5y4PDVnLd%2FhwMMshV4hAiEAiYUWlZV8DwugY00M5fgNjBqMCJM6TNYaAUQ4nCf163sqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCs8eJQmfV7l3YgH7ircA8cF0bd9on8zTuLjlEWEWiwxu9%2BCo4K6g6IqsRLKsLKJn4THavj2W8EMMD5Ydmqr65467OjoMd5LJ0oyGV1EpqZZS4AHxbzrNSdsC1EL%2B%2B7TwKK%2FGgbp8mFv%2BONQ9cmZjObNUZi%2BnjYB8ZzsFvr%2BTGGQNmjU9L0k4RysP4LS5ZnfUwjzdJXfXY3oitPqOuDYRtqmyRZXzOsDFm%2FKJr4E2doBOOp2OE%2BbMOrPAf900B1DdnifRfoa8i46K40%2BS%2FEsAIbav%2Fp283sPyfQUf3MntQn7cbRG2GaiWIGWFOCh59Dqfg6zpIdlREhsiA51dG0AWvilI9QuziDam6pHDtFtkI65PjSBoCEX6P0APazRLJvmhzQPxlzRXl2bWP8xW7DifD0doq9qfXZHSBr8kZc%2FaiPRXUwugHHEb0vyGTyaAMhv5GEJqlZD8E%2Fe2dUBjjYTnfzMhSmlPA%2B5kc8mlaR0TidkH0lXHjdOYy06KVyGcEDFF8I0S7znmRmIhv0HAb%2BPL7PWwe1JfuZhdl47Bpf%2FEdb9%2FT60krvBnl796ACKMx4RWhu98ZXlr%2FEdVjpXibTnUsdu47iQJlsFkjjFSh%2FrU8u6JzNja8kaE8%2FGuaJ3kAdp4ECoBPEXFDJTwTRIMLOv2MIGOqUBvdYuypI0DGBuInw0LtOrtzaZirn2SugJP3dzNgdJynChogwVZuvBhbIMCDni%2BsuilcnZCjfEuNEjNTk7pkL71nPqzbU1yzfO4fLjyPxp59j9Fayy4CA82lzHrUgRuuMR50fYolRa4R6B7cWHUgPN2Dcsah7V%2FIhUGE21Z0sNVr35AxXzCg4aaQlbhJD%2BWh866zTvBZ34%2FaPX4iaCjCmD7zmP06jE&X-Amz-Signature=739b298cbaf220a6206716bf5e853567c5d5c828bc5139820f7cf198609c728e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEOLM4E%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKMMT31N6eYJq58b8xijkW8Lc7zL%2BQZ4YGVeKK5%2F44HQIgCH7wu6Nh0M4UW1KNgT8fAWHz1agt5sNvaFiCN%2BuAnMkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkUMHPWv0zHeMm9pyrcA8K3s9DCkXM4%2FWGOwIrmJA2lfeIncb%2FcMdonjaPTiC44Acxs8Yi%2BERTD4WwNC%2BchoMOri%2BBOQHgSd47doQCLYoK8%2BHxMI9jjRqtqMosNbsfAOiPZBPXhS6TK7gXh3e4WIMnqveDh8tp0M0WGbP6t%2BttKGYpKytD4zT%2FMG5KpBLcSi72yNgXu2KLJovpaPuEgRmMRHiq86RH0PjitEJsYAK2iX5CpVh5b63Bo5XHFzMlkb1Z8YRxy89L4kKLNYmLtDwDpENbw1eVIdT1MLepwB%2B1xkXEe%2BC8YXfxTewKU0lQEtSPeucc55UjdVeUHEMmvhJPWI1LUp5g%2FckG6IfnkEDyqNnAw4CDaDtNTZ79y6Xv2r%2BIVqlTO9qVUFsMgQy%2F1DfNCa2v48%2FbxIhYodAI%2FOBWAYwZhjgNPDMLrZ%2F1pE1bd8i%2F%2BNJQ3DqhqFZGI%2FJ0ph1qMGHI8d0gInHzg6zFtqUGv%2BSlbCupH4c52e5n3hej5vih6foTUSY8Nn9RMVj5pX3kadgmQbxHFZ6V0gUaN4p9ZflMPt7%2BiANG6LaEWxS5FxecGjg2GfagkQBLqjq%2FZ9kXAp7mWzi8LJeyn4aADKw5Nk2L6yZhC9xZxup1XWoCs97C18jOhp5OcgOrJMJ7O2MIGOqUBFjINUtTFOEdIip2ZmI0%2BVM%2Bm3sCQzMw51Ez7VRdnxfC%2FDVYvjLptrnIQ843XFrvMwxQpdRy8LePsCDC2CQ2Kjm5zJa%2BC7%2FZ8ifigTP2xjVHt0zPy6piwezT1F6%2B086BIqSh%2F98K6sAYnRxEL7kOx2hgIEmnUAOWyVAUiQC8Xk5JKKcwUUpwNzMe%2BfCC42voz77ABYkjSbl6v7HZ%2ByH8MI3FLEsNc&X-Amz-Signature=ec41370b3bc3cd3a39424f0efbb22de0d027e3e241a3781405f8cde2478734dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
