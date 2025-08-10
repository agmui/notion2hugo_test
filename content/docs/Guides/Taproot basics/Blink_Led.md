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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634CLYPVQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9VOMy1PJbKQrMYloKFa0iLIcVB9zMcQ%2FEmRrcALtKxAiEAqEPVB%2FtN6zvksbbdB%2B5CS%2BqmO8sac8%2B3QQiIEFgDPgsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2y9Ihi7czaFvTwvircA7U1%2FRNL4g%2BPv8wm9tejkSWLeT7lE34xXP8W1y6dusygA0CDeNj2cCDkURaToUGhKdz8FQ2zKoEBU83urpx1u%2Ft6TdB06VWnbyMBElGTyzu%2FM6ZMULiqZnC0%2B7YjT11U7nNhikViZK5LjeUOAg1Hg5wCzQZqeNpOYAklHAf%2FOS6QpdERLTrS2Z1%2FwcKtdhpFbqXp2x7ABPxbmuMWXDHDUS34cEB2K0Lr5qwcyx018ocDrFxV9nbA1r9Ncs9SayNttJTOWL1OnhRJsFuzPCxH2eH3cwBbvM7c4tFzJ6r1oLyAly9pl3BR4gubNZboj998COozQNKqY28X%2FoZQSjF4ghhi3zSWTP%2FkO5yAYH%2FZ8512EGDNz%2B9xgmPStA3BI9JP9c6cUQpeHjxEIQ%2BIsQg4lRe%2BXndDpvkJ2Eu184hNBuDvr3rUm5QxJp5CbHoQyD5CmW8NWJEpeh6pD7vmtwQlzCYMvIactNIloCg24PdARHtU86AWutWrMo9aTTDB6zRFJALZVMK39DGtjuzkuchlRpCXuDCwlh5e%2FUgCdmls626GHAoacnG0VB2hk0Hs6g2Nm1AKjGDK2rK4%2FcYUddYAEvBt%2FXjsnEKbjXyyhu0E20P5bII2BizfcmVWyOu1MOy648QGOqUBqp0PrPJawlDiyjS6Nvl3%2F%2B4pVPQXvclnaxpFzFQ9vWxJlQHs%2BBmG8%2BPJl0fl5yaLfivVRmCEhkOWBgdxHdkTYB5fUO1vWfZ%2FxpaN%2BbNh6XTqLfdMqAI0MVplSi2AiOrXD1ba5oFYbI98FlZhZC94EFaHS%2BMumr4QKJX3m%2FJFS9cWpVFlBLaz6Va%2FGOTtpKq8dqIdzBvJK8iiHWY6ZBPWMubaaHuk&X-Amz-Signature=29e9ba43a2479db6fc3a2e53fe6c5becfa2d18a5fda2d278de62764b1e335fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZVGPVQ4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcON1xyJ%2BuQ6sfz2uA5mXWZrcU%2FqMcyKdCRf67lVaEEAiA307IjhlqwOTppy8i8QfHEdxmqvMeqECZjOoA%2FNSOU4CqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQSD7O2g1YmoJ8SE7KtwDts2QQp4UXHwjkaA0mNeAhB9reTdSAaIDbIPbaaBahfoC7bbFD4CDuEWqYH59%2FBzvH5Ahh4TwXG6H1fc4VfP%2FuPJNW7sZc1%2BY1CnYJIMsJzzYk8a5Cq3dE87YaRQeexhMlkvYTl6N3U%2FJUdwImmX4KI2cT6J%2FgmKCIXwhUjLdCnyMzNtwd0JiOgWmGz6Or9ww1hQYCvlNVFl2ISaWgaD2ZF2KHT6RAG%2BXvUlbsA9dJ0TXX1%2Bm8DVx6AM7ome2oUQ%2FN1VBvmQluwIFF8PykNi9L6YHauD00BvWaJdJ6JH8ay%2Boc4P19fbolBUSfuilPUws4%2BhXkHV22bVkAGMKgrevL2z4qFLxiWnuPbbSLEz5LaVIVE%2FAYCbDyl1S4lRa9Qu06bTFDMHuFfOfaiKRZJOcGbFAC%2BU5rsWDeVPalENl3WFoJHrf9vPSq9SwC%2FpwUBqJHtR%2B2apOuu0iix1nhW2IY8mKE3vg9XP4zysmAHR%2BHiyjMt9guYnmtTPCdqiBCHCAkyTeum7BCY8H2nbXt4g4yjvJo9xVFg5me0rjFcBUk%2BQWqlVyy3rP58Eom9Hc%2BEI3juQ6jVft%2FQZcnqFkn%2FyfLrhJlh3Uvl89MG53Ghoed04qX45IkuCm0mAdzPAw0rrjxAY6pgG2nC%2BeEGnWyK63XcXPZoOBxA%2FBSRGvo0bbdghlwpBJBKJRYb5zxWHM2oWs0ETEL0j1lumf%2Bkt9BP86WgVivfSoEq1DgFsI66t7nzfiiOGpLBK0mbcjSGiQOhU5DszldYu1jfhqGeNAttw5JX9ZJVKdTtxWvNxMIhM7aVlX1bfelnIFc7vwexq31lW6P2%2B3eNfXQOQY7HINQ6ICH6YGVDoQ55vi3kkH&X-Amz-Signature=c691d958b8fe52ad342e91f3a15b96331dc530376d0ebe2d12467c7c6538d38c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
