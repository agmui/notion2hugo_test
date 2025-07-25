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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635C5LJYC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCrpK0UcoRh7zIP1f7jHJ5kySvVg3ronnboEE60OivM%2FwIgOKSeCDhsZiWmEIEcsmNKGQiiqfPnxoG9ya3D4uo17u4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEgy0iKBrZnH13CIsircA1TTGra%2BE3xnl6HD86hyZqhqd46Newl7VoHnmevCfG%2BhU2Js4wg0H9PJrGlB9WsyGWjU4FMSgU0rpk0I%2FGGF%2FG%2FYp69NCOAAoGnJCvV8ktxWepul7F58r2LC22YmYk8tLrM%2BtVOyjcTT7gSBeAInBMDJgXzdcYsEhJ9tHXJZlJhO%2BI%2FFRaMc72L0sQzM5PPy0m9PQTKrMEJfn11I2XhF21rl3Vkc5voIL9I0edE3oXk%2FAZIaxVAg2FvIsoQRKB6XCRZvuZEBjwooWiCBE6vixzmKNO%2F18rrrOKTISK24ADrY5MN%2FwVcdR2IxXdopTrTgwqHWzoH7BAkgk2Yn8ZdvB%2FR4Y%2Ba3p8UEFmGcSXDEz7lkoTXrvyjna10%2B1RvQ1M5%2Bvu2kX9rDSBkeCVwrnbLTljMDg%2Fj5dljmMzww3un8689%2BsxTX0yfNj0pktSwcta8oOLtEDOyiMWjhPTv8QQm%2BV3DglwT9AO3q2sAP91eIJazuB6YS6ct2V8GB%2F0Ugp6mqMfUvTtvx%2B27tp%2BrQ5J9zfRvIwku7UeL6t0WzpdWxMDvAuaADSr1YePGEVMGau65Ct2vTeg7eqHOpIKTSVGVqIo9rnrR2OvH90OPFYL6JNn04kdSKb4JZZ%2BNajEdtMOmGjsQGOqUBRmEwSMtXaXBEyawD1vg1CbVWw%2F80sY4HauhOXJSHo0gfohlGSOO9JdOJYtxXiBV%2FWMM0rD5Lf6v6AsDf4Q0oPz5dIdsUwgRGTCRdujxIkF168r34LL0635IOAKYs%2Fch508IXfbZhlrTvpgXo8womktO48LFkqcYw3OB%2FDdGd3LWW7p9kmw93thHBKp3CCzM3KZjMX69k5xD3cHX9HNZvX69otbU0&X-Amz-Signature=ee14dccff5d21d82c6c5f77c69c14871b74c42af312ab46365195fc3b44833fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I56ICK3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFrzVgNqGq7aDouCmNWD0D3zhpc0708sa7WUs4etkA2SAiEAkg2k3ggpx%2FOcfohH6YTP1FeEUXsiNqoAePEQIv9sufEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDH5IuVEbzBrVHrkF4ircA3qZGNAMixzNkURS%2BHMjuBF7dOULqBJ5yswlrnRb1XIbFTOnhK6xLkwt3ycRA8TUPOrMqzMZMk6o2qEDnlrMq6eoXok%2FsKS5X3a0gL27dKuSg6InHCNEYl4JpnaYwJ%2BZySpASbq3CCsvjzzNnocDoNqejfPEAcO1RqRJNUjF2coiLFhioVsr0pMV%2B6cQRAtxIQJ7HCHoAfXOuUtAHxKYnBiUhfg6eU6FIEFMWyrnMy0Z83VoYRjRe%2BFbGTxz2wAvum%2BRxWw6ocP9oZsAlV44ey0ngSy1HnFAfNAjj1UX8SndF%2BKpJaBIb41OOskIgomoL4bfI%2Bnk9lIymxsuN%2Br5XoJnkxoVVGMMxC8HE4THferAqSaonOgXfUb3tAB6QFBigTLnfaEG7rV2fTMQwcb6AHml848DIF09pNz4z8JaTz2%2FArWp4v%2F4kk3tJU4nqLzjgWmc0Rqnce1nK5SaRTGbpuyshzPAZ30P7zozjIpYNsmAY0M3XNnkXE5I8n8HWzWjYzuL3wL6k9b2ZoQ7%2BBKmF3VjMKD0S3hVLvbb%2BGWq%2B0fTCTpag%2BBLXCnLoQSkWx6X9dcBsjHP3AzA2pYD4q6Yfld%2FOpA%2FVhLCCheGZNo1NO5Lxeg1FTd9%2BORykDT4MIuHjsQGOqUBGAuRI5OSyVEFuQGflzBiRDAILuCAZW3he63bw8PjuTLKr25mI5KQzkuY5UDuI3NNd7J90ExTIR3mCnYO4kXdBCzSyzczVHsdJR9n%2BvUgGI4I%2BSnv%2FeQsCAj%2B6BYBT1ZhzWKwjDYZk2nOyfFq24n7JbjGC4JNieneaSd2SYCh2x3sswssqcqkzzub2CWzTJAopLAHnipVZfdP%2FllTACfLZkKKwrgL&X-Amz-Signature=2c7e964a655e4dd132d0834871281037d6c480088d390bb9b21e8ce1670e07e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
