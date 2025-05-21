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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WTDOGKB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD0DzJPB0kPDIr4j2M3xXEcF40d1inRT61hf%2F5xTtrddAIhAP0S3vMxlFJmRDcWvF7OxSmwkZeByggC9bJhydTd%2FsrBKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8YLW0xqObcyJIr%2FAq3ANOAM9PjlkimhMti6rYVLNFQQ%2FHvB0fo%2Fqwob%2FHFtic0d2Sg2e9teY0o9E1Y8cFBT5JJNaks2AcNNByNJEmSGFsQIdeuiRtrpOjatuC7TMLQsSeNiRuV6GI6btj57B3e6tvptFf40q1UwVG4SDF8xgup%2BhUEtdZY56p%2BS66Hdl9drtXYztiWoGoHTb%2BsoohxTNI8vVHOlV8vS3l%2BX1ZkFHcsmOP7CgvjyaoW04ZPBikoNYTcEASxCwmBrFoeZSzzvueLRmXpOybcFXP5idm%2Bby1PMp4VyoE3HzRh1vwrchDtkSU2ngX2NyPMXk%2FSm6A%2BlhBKOpiOjrHw38WGyDH5cW%2B%2BDVkR18XPQJW0WScmKAG1rumFzmoqZPwPXWCXv%2Bh3KfoXwu3Cor3JLZez%2B%2FD0T6I8ny7SxUddJPy7NgztINSTk89%2BoRX43qhNz%2B8l5U%2FvtVv21iAirOzLIBH6Ri%2F0WOfjML0kbA8YeVnTQQeUsYDboWL9I%2F5sa%2BoWf3SBPOU6tyjorhaE3Z9pW1jCTgj8IcSp97Rcyt8RuAapfd4ac7adsHHeWRlv6WMIU7Q50LllN0ysz38ymHkevVerM9CqJJdWL8vlYbAPHWIRMYxq6oLaA6xwRZSKYDVqnCWLjCd1LbBBjqkAdIKNJrhEfr5mLVRkv3bblB6Jn2kadv8KdC%2F1ISN%2B0G6JL4hBfhsQqafWqA%2FhvxQZFeSpoNmlp6t4EA6rGc83s01jB629Bfgrn3nxoZ9UXg7ZVkzP8V40Se7c3CaJOG5IBrJ0pNsOSgAaL%2BOxJCjgl3VyposAYqEgcdlCh43epDBchdwSKP%2BaHRZP5hZg15EZ8EmeP5nDejkzZyMXX%2FN8fpYEJgC&X-Amz-Signature=71cc68eb44273a36460681ef0ff32a32473844ac0f0aff7f8127ce0a33f0d714&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XWO7I6B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD8xOkeVs0vspGyNpbG202qSlzMEu09yN7SavsmkL8jTAIgJp8gu%2BNYc7SyWk5YaQenpyAvDFMsYp9ZOYHoMu7hQAkqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUmUbNnlUct8sVOjCrcA1ed7UzkoSq%2FV3mFnxpMGRmrjAosagf9pmq3mmoiyglgW3cYDV8C9iZxS6QyfZOPPtfmBYWS7ECLxk8OhBQDLnvBlXz53FS8qulixXwtvzJKVg1kw2%2BdTBWZk67T94DgT7%2BQZHS5KkWTthzElsX6VznJaePSWqN2O5WFWXvXUBLezYl9N49YryACz3eVc3k2uuquyOGKyAxz53OkoCWDNMld3KoC5PSDRxZ8iGcL%2F6mo%2BR7vtcvg8L5qevTO0edrIYYmhKtYApo3VHtQZfXYkVFLIUSq5ThKstG9Tn5HGHm%2BCc4mUC5B1bqfjKsvoCpB1QK8qXCUKVHo9ygINPMm3EQWlRckPtdj7VcxjTaWl%2FmKfsVAYiYxVVEaO1cPFwlBgT%2FOa2i6I4zsCMoTHE6PMcSPRwAgCR5F3AZEILowGd5HY0Ht0H4cO0QBhSRsdeltCA0fuAynbZAnguOp05enzfDIE4LdlX9Stddf5Q4YZhlgf%2FcXrju3vxeIX%2BZ8wemLUWLjU%2Br0jReXtOFlEloa0%2BaUrgElklJKOCU2KViOKXMQed%2FUnkSxo2spAZaqYE6ntTDExhpZ8dHdV6SRnVWb0G9I0Ujp6HZvee7rKUTuRSbRHhIx%2FaUyi%2BMOFc6sMJbUtsEGOqUBUJYGei02XKRudN6EJirmX9jqHU%2BP%2FdjX27dN9L5iSKYjUEJ%2BgTAiXEQOVXrEVbDQXJMFm0e9d8VaDQ4cxwHdLPTqYqKej9B%2FXXeaZmvRxeWi24ejBijScdMoZPixVHSgL%2Bs%2BMZb8iHDXC%2FaAJUUwipZOjQ1Vzdk3ZjIE6Y0mJ5OTaCL2u6Xhyryurr2wG%2Bisop8J520N9i8rcNPzR5Qz%2FTHrpX1%2B&X-Amz-Signature=14649202b922ad5662177f45f30622ebd2a8cbad9bd9601960dbc9b3a2059dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
