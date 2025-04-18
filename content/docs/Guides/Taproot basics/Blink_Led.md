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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWRITZ4%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F81DaMz1R5iT46smnJveeqzonMsqzlSdHkk648ieCAwIgCx5d3B72XNXvaKoxLJqJwGlS8GBzDimKsLRoX%2Bn3c0Eq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPY1%2BHxFGXVhWxadPircA5jP%2BVsrrQJRyc2NDbfaYtHd06xgNzVgSApDX1ILcoNpQqGEW2OGqI%2Fs5d7GNRY5QFthKbtA0AYduSspXBeX0c5SG0pQVL1YGX3vJ5Nmiuha2yOeVDpgRlTmwch%2BHLtmcEQByh5Y4S2%2Bz8QQm55o7DyPwkGw1VrvuPV%2BINY5tK6AZSNJcqPUrvFv7T7SjC4gwIbupXXqjwNM5bFuu5%2Br55wWEyeERjOsvKeu1NK9qX7vcKanzg2Mx%2Bs99ii6M%2FjbOoPg%2FdGwIykqlK2S6B2xRNUvCeX%2FSrVSCTPIxnFzfnvPELYNRqxtN6bwnwLVY1IljiW8WyWewNH9ZqLu%2FgFAZPYxEF31yqxBq6n5LXpbWkLQdEU%2FNDHVg0t2VUusEPXYb66GX10YeQlmywKQ4cORUAMG3MEnc9OhJVvsbCvCf6HQJe0wcxeiQnbEQc3%2FLDu9B1tkwZEzgZyHZHthGB099AmzMzZNc48xyApDaufZQ3w5WP2vxjGvyyv8dl7gjNiNTNLyw9YunsYxcRC0ikgzRGF1fVrtDHDhhN1gXdJwz471VvRpqrIZbIE%2B9Sqr%2FaQAFE8AUxro3IYFzYMHmm8iii6euoTAiPh9LiiFmjrDAn1a9nIm9QE412q%2FsiwqML7YhsAGOqUB5K%2BFtSUex7hqe284RsjWhAoT9PnrcMRpt0cJx6T4sBdaz%2BnDfjC5sy%2B9nszNh9r85exNRX3YNPEYa4IR5wEFnXmh8KqzbzYVFBdzhgdRScEVdqri5eiEycfFXrYxF9%2B0%2BIfEVQ1nnVI%2FpE4YAKrpmfN6e3bJKVTHmLudEbQCMtirXHdJU0h4Dku84p2KK6GRwcAFXBtktktUcEum7BJ1lv7R8prY&X-Amz-Signature=108406d736c038a52e0ab7d9a06e35183685bf0a67bb1386d57aaf1aa3071cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX72LSE4%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeg%2FvCqsbVXzE6wEqN4Lp%2BRweEAfgFQiCsxKj%2F9FC%2FmwIgVgkWz21PSHHMMh%2FrObknZktJgsi%2FwmoiKKsckXU%2FQvIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMJpzpfvi4wfFb7dNSrcA6eI%2FmOkaxbxRsWy5XVNXuQh7gblvI7CYzL3GGa%2BYWafQ0sNbH1wJ%2FxI1qsqR0HgrEM7d4X%2BLayWFjqvkqaBTF0gBHgTtcUmzUTDQMWT%2B4vpYvpZYGy0upRxzkC3qdC07xkUoZpPbcSpDjLv5NMJmZYhG37gqiN427QWXSiXrFms6s9Rm4HZnF57S1gmqmP3RlMzCT%2FJ%2Fl%2Bv8G1mcFh5HjHYxAGyVrcJZXAFrJXoCtEkKc1WrXlBiKwvmwSeNhGwz4n1RzvJrXpjhVuLwozrc8MASkbGLxXfmhN7G6UzhkvrKQOQyO98MbDb2nGF0p4aEoCiS5FPgy91AmD7H9amxGRkwntCoIiphKFPuMOiI1BP2Bpovs2ivYHuAt9Fn2vTwdzWsrKVZ7xY%2FsVOwjWqVctL13H%2BdtDYiOEhPVZx%2BAEHmea4X%2B13TVRQfX%2F9mFzzWNAZZjRGyfBpjcn0dPr9EpbV5ZpG%2BYrS7PTPyzrnwVUDYTrpJU4MtaX%2BvlLjl5XPhmxtC%2Ft3Gcv5PVWpgF30Sk3wPG8OlQ9iv0FKL0%2ByxTneStVrbdndNuFr2hTGn0DeJLzgeWfsfrXnJQvqTAJ0SGh6cXdEkOczEEypHrVujFB3y7uKXlstSh7rg0v3MNPYhsAGOqUBn6uxYJYlQrHveeZRLgtaVPjmE9HjkQLV9Chf6WU8P2WNC1yJx50giJ6XpoUtHw1NQD3x5E2FS%2F1Bw3JgNF%2BgAGMnd%2ByXfge5IGZnNvtztm3PjtOFv2u5ee%2Bvazm0sbgiqrynwIGMsawmFT71hrQ43O3pziDd%2Bosqw13%2FaZZ3T04zn%2BpTaFKZ%2FwfjUrtC76aArXaO%2FXnmYQPxRTory5y5xgiK%2BRyM&X-Amz-Signature=c22f1735ef4bc049a702c8fc4c34d00c89d8590135e4266de3183c7477541fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
