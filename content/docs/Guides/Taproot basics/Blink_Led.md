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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDOKFTT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzXjkzvwQdqc4bsQO0u5TY6MXAP%2FfTtb4BITUJMQOPrQIhANNKauAXLYo8lJ1l%2FSDUdOGNjbSRg2%2BgmN5RTE%2F4nJ7jKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSuLqGW04run1BYfMq3AM5yPo7H8Kpu7zIvt8l7fLRU6WwM7sJSupD9MlJMBkcTzRUxt0e77h0Mcd09nSK7N%2FGJz0TWB%2FWplG7RFet2MDuxwG4RKeZuweVha3%2F7saRsMXvfBm97IKyfA0kaiyJygRndJUxnvRFP2gXOl1FP0%2BwkovkE5uyxGdaIgyIQ4NeQJxwbvLKwl61P5f06s0xgeujfMNaLnyuc0eENGc8q0TynhPpKOSs89W2%2BOKgta4z9K78hcq03D%2FeD%2B6R4nXSNBG8P960UEB9lL9d63O8f0QfbIp8tSgaudFdkP5tw8FXP4V48ZUtwuVIPVckJYU%2BHt%2FHqN5mY7q2bQixM0jgEBfnWuzcp6kSnJ6lGfEmxuINMPpBr3aV962Bkyw8PWvSetC6XVK8VrQX8X%2FVBQXgPfT%2F%2BSbCK1nNejIU8uxpCOGMgUaCZiyWsISHZUErvDjiur1YtnNrYfuEiekgRhdlUCBjcDoXWz%2Fby0gltN%2BqMcqSsM9AxubQnj2YyQ7m102yWidzNwFhLrVU1oabsx%2BM6Y2YbPj0F8YTUn1vYOJuHjqq7wi5ptp0V5yVkiULIToPVzxMriI5y90V%2BSheK0uBPORaPmmwDaQwzJB757iCgGcItD2s8Ik6S4ifKAzG%2BjCQuqbCBjqkAcuJhOcrDSOHrynbg%2F0UGXuHxXU%2B1Jc01agdowtD48U6ZLKrsaSgs4tFUAYtO%2Bbg249B8CFWEQLPhkzEPTndOE1MtwgTyP%2BBAqRwXRONkUMJsDQB%2FgjnQA8a91KtarYOPjW%2BWESzG2VGo6qJ7DDOW610CurUPJnluPEfJ0Q21o9vceDXsKbX9gRI%2B%2FkUUrfqjwz7FG%2BQ9EixOfRh6aP5j1wB%2FRVI&X-Amz-Signature=8c95e957613adbe0061225ac22f8cf21b1987958db7055ffed332602fd061408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXTJ4EXQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVL5DIczWLKqQb1ITvLHYzwUMD0roMf6uSVhvrRIZR9QIgDbyPslufMa8fL8qtaUardBZv%2FMKKmlguboGwX%2By0f8EqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk2FKPreBr2VGxeXircA9NelmTxPrtZpw8kviLpqeL5wSrOI0whQ1rxTm53HSuQYj7033LolUYesAhp0yqsJmDOEMNaY3b4k8WXlKMNBVp7z2DiI%2F2S9%2B5rC2%2FA5%2BJq7FkK94OV2qbAPgIyRYLe2DAQ1%2FBC%2FgAj%2Ff7PODYtGF66zS2cYkoP2G99v4L1JMQ86KuWthHKaj1Tct1bN9%2FuMp9IQAmfT7nIjsDxH9hNa7a1LMXJkSTwhn1ZAfPGyDBKuMXbVo5wb5m9mGBBlfyP%2FhMLGBW1wyC3%2FoMFlIkNiY%2BE3A5aY0ooJb609LdhgBG%2Fnka6k%2Fm7%2FYvm2OBJAib%2BkLJ683D2EodCuNwF710gukD%2Fp87NBQZLMvxiFYZ8si%2BW2qTsEFNE6WyIYKyRYMznwm2ODdHS1k8Bvjt363bDTKmfAbHmZRm9%2FlsIfJvq9h7upOfkfzBgjXN2Uq%2FeYlY7yAkj6Wedoq3c4JIrg6iNqA%2BcSa66%2Fx0VhHzJUgIOGifBq4E9bdoa9w1zp5huAn5hb9StT1S1ZogVhp7EG0jN0JZwQiJ6Ns3ZYWnoAIdTwM4pyc8IZFy2rMjmDQZjulhRK0CqcgOwP2MbqCD1VnQMOn2vSRUMM72hWc7MeLVkKlRAr3LhmNagStnA4lrJMK%2B6psIGOqUBy5Z0X%2FPk6fp8TbyZ3cbmu3yXHdlbyH92hY3tAgC0tFgKqNyPaRtkIQmpSrhsonZrqQqvvX%2FjhQpDzt9faTG7sc1mc1rlSLGtWC4Fc3er5M%2BGNP%2F214G3XF1djK9eAhiXEyxwzjwJ%2BT4kqlY%2FSXcM6ATWGqfRC6VrTuyCIkoXr0jnhpARHeToLe7b25CeyMOWzvW%2BCPCdS13XuSJ8wK3Atl%2FiAMxu&X-Amz-Signature=bdfebee21149761ba91de3d8eb435ba33410671175f5aa4b66803348dfc31a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
