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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK7U3N4E%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHip%2BIxp8B9IN1M0Q%2FkIDfwSk9DmWgTc9aXis8r3F4jzAiEA%2BY6zGdsw7qlCZVnKpqoMXak0M5qkg%2BKPe%2F91cXF9B18qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZEuR6yUKNsAF%2FerSrcA2cEoa71hKCRnFy7EVm3z%2Fihvb%2BQXd9YCairsKCqPdpkm6AufGfWbtpvOHKAvHQIEVdU5jaw9jtHrc5xcf6Lh0tIls%2B8ivFhIt5MnA1%2B23o9gIOV7wurrc0GJKC5v8AB%2BacncaSKrdwqEmc94cjRzLybM%2BQ%2BPkdu6hSR6rXTEt2CyA%2FRXAw9LtoD%2FWwZIzQaFsbEViBnXRLnXJcCUGigdJ1cCdE9Pfn0XxUYAuZEi2Vd07pG5jVyFe0HqLFqgP%2BOS1qwszS3V%2BpkVqdLLsvFwwdF%2FfKCKzr7qOc9f0nobziulB1WywK02K6yMTujDFKMDOnpi2mjzBOew%2FzQuAiLDgv9xwg7aHfDf0HsXqnKe9PH6vCZgmqlWkuRFP8bGwPEogPT37ErMWiLlqZtQw0RBzc%2FAmueMV1FNIXRx9L7m3PqZr5VX9DbbLTaj%2BrYkBOi82RbFU8t6Zu%2BHKYfQSGu%2BG1c%2FB5IG200KRiRPJs3wHTkk%2Bg%2BllaE7EDHBew2E8c9%2FiQo3GJUnQNLqrgdOwvvAWKNUVdAOT%2FvF7gyUUUnYIqUneS2ihVVh5kQP4OFicuoue3TJR6T9xfMA3HVVbJd6qbMkkQsQNHNe1dFfyeFpRIjS39VKeaqFwi0wE1sMNmDssMGOqUBk6%2BwInMpr3krqEtQ1qdkaJ%2BTg8cL%2FN7LU%2BXzIDZAejBbQkZCG3UMXaHgAef%2BK8%2FmtCjufw5fs0b79meFi%2Beu%2Bl%2BEW2pNh2Dmy9Lnh%2BBqU%2F9vn%2FNniPlUVFwm8qdjdrl0G5QYLmkCcLnM7IpxOposoBEZsTbxuBtcd8lwQQ7tcMwGgSRVV1sXVoynHPNC9FGA0YAMZkpErKTGHuEezgto2rhBro5s&X-Amz-Signature=b8d7adcd667972b65c9483f2180609b88cc7978b955423d2c3de615a8a361772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6RH5JN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICCMB8r%2B0fUoydPX5zgfsWTabZVHwMJ%2BDRKtiTnbocPYAiACSnk3uauza0IBoq6yulplyWtC%2B9ve1H%2FyC50oopyS7iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbKgdGITmSblL74vgKtwDELdRV%2FmfQahdssB4tCRlafQY9sFLR0lmcrY%2FnMPCHNdP0%2BCu%2BlYUD2dIxecFwWYigkHdvmibyS7YxNoHr9CrRMTVQyveque0AgMJBRGhYbTEGrcAp1xXha6ubmNL25hH%2BJGfOOvLAsV28FvHRczkMM8PwSk4YO6jbv23mn9w4MkCmGMeBApuGqWQkejLDgL9fZudWWbWKIoR0zegc%2BExBg5QCBq76%2FE0JWOnTWhpOMO9dqD1IULnJd%2Bc%2F848ijoEMG8kTXp%2BkXyl%2Bqsdk4RhMOE63XPLvO4qfGqOC9c9Cz3%2B26RemrE2KXiKmMPs%2B4lUQqwtn4bhWrdJnXndlxc5bvi%2FrMW%2BhoQoR9Sv3w3W1%2F8eWdYHKBa%2B9lJBx26bHJ%2FYSafJ8AolUWHV2jf6q5P7r20dlJ0elqxsI8u8H%2BUVI75mldigIEp%2FAg3ld4pxE0j%2FvI4%2FqEVyo9S6ll7gl%2FqcUs8iMmDQaxuBwEBxcUUJrZ4xHI70Rv%2FC8yrxMj%2BiUVhDoHER3tFRLtvbeumSirSjJS4m8mt4tY5%2FzhRmm%2BtN3nJZg61dPPq7UFv3SaTKQeYtxsYcAn4RDQSqYHdI4aDjfmQRAJHcK8feAuX512g%2B1CJuX6s%2BK5BsX%2FwKDH0w3oSywwY6pgGF3S%2BeBfpnJ8oOwRPd0QGAvp5Y2yKczf3pqJOhJCWdVryp6QgJOEuAB3Pl6CyzRh7fhQt6pq%2BgStMF%2F%2Fvpf%2FMtYbnt%2FwPOcV30%2F%2FkHfxYfCpGwVyrzm8bCm%2BVGaMesI%2BsgIHhnYqNZCbC0jRKmmV8UOdsqDtI9aPRQvZsX%2BdbyDAeXAOtxZL0NUWKuWRgzCzom78h8P8GAATObSNDlV8cUUy6OEDEf&X-Amz-Signature=d6a2971f4a88687d7d2590c52ee4a46c225750ec08bb30d9fadfb62e4ec4e196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
