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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMUAPN6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC74GqhmRZr%2ByIUFSrF6IbfpfNWR2uYIp4KZZd3LWZHbAIgLLQF8AadKScv%2BXm6RvSwZvtp%2FHp8M9yky0BhK8heL9wq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDKI6HIDL5WikUMsUdSrcA%2FnLAQn6BoAOC1ZuwVdgOmj9g3nRHDRfRyyeDSaMCvZmCJF8JTCdknhkLLT7ELf0ECOSwzt9on%2FxDmUDCPjZSc7%2BuUpDdt7pw6RzROjyRjGeDMxltkpPvjwG4Eum49scT8csRyMASvLYCqSpqzq5zuAXho57Yzq1NPt%2FwMY2ubbyQclx5UAo%2FhhYhwo9n15t0yS6aN2MqFzU%2BoGzD12v38edOpSlPAIuEu4nb22TSJhsTUxVwQp2EMpNNsAH%2BubLLozoNCwgSQlz6XHkIc6upEP%2BHySn8l3I2WOn0kkzDw%2F9NZb9UBVbfOrhgoq%2FGVMLr3s8d44%2BTOlXI1NlQwY7LDvTGk2iEf%2BWAqoBjcKc8uiXTBPTuQNwAwpOU25Kt71yII0f%2FvutRpela90PYFYxeG2kiFtlyudWBHvub2CHm9lXJ4x5CHJ6hScdvq2CmraXX7ngchikMMHRWQjbqzif8CmrH6vmPOuQEQ4JIAblRtGTuZSHfunOyrHfmI4pm8wPul7NhGD0jAI6o7gRNLWEZfxuNSvSlMECRambXciPMUDK9qtk2p4RRdyhdIU2370vsbeC6BKOfa9tqts7RwA6%2FulbC%2FqiRrYTsSrjHBoqT6bvFXo7mBMCu8gqALA0MMCdz78GOqUBNx7LXRKjGr4H4SSPHgQjQttgP5JcJ6ginG0oad8TUldhrkElKJKBWVbkeaf%2BpGaRqZ0Ld5LTN9fVfAU29nAItU29FrS4Tr5KYAdvS2F08RSEmlBqSfP3OKfCC%2FUwmgv8zx9vEqCPiw8%2FzcdeNQwDuwuL%2FCOZCsUMwc54Sds5M2fcLBr3wSbqqV9LK%2Fw80Jv5tmo%2BT0fHCIOSO4MKW66MlLxjQsjZ&X-Amz-Signature=4e49ff2bcc12cabf113ec5cb67feb26a31b6455f454eef0970934bd94d0c1991&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JYU3F2M%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAuLnLw7QEp7ghKhAVyYh5cleZD%2BAZXJ4J33Rqp4qELAiEAmLLPXxKR7GsOFxuMV3WB13yFtSgX1Rk5bEFftrBkxNAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDK0FwYNWdUtpFkRhPCrcA0J0D4ICfvSa%2FhZ8r7pbQNZ8gk8mA6JRaVQKIIOhzBQk%2Bs6oymd%2BJ1uCnZZQOg7lpG6vmSVKABMq%2FaoOZHcXrrpzcFj3UYMRKJ7YRdmfyEzhsThp1gcDu7ZXeJrouvWw0J3fyupHYMbECG2MxtGPWvIgVzVJMmxmRsz%2FaWGXJi56Nq7QAfzdURHkkLvbjbs%2BefvLbpyonfHMLEQZovMwgumqjErjTU7GX4zYVCUJt%2FVURag4zMNKIikmiLhP%2Fg%2F6PLSAwc%2FCYItYXCJJMdskUW%2BTpEj88NKAMhKx8N6CFM9VkkIiUHos%2Fz4mhm56WmzZGCa2JxaYN8z6jDZFczGyFh95z%2FBMNkP7ktP0TikC3NsWTYkh8a%2B3kXCQCGmMCoBWiyb4Gz%2FomGOzGWE8MdFgCxWpyvQtSbn7hioCHiV74F8smyR1uqKMa0TEKVjTgQeVCmAgg3D%2FLxmGM4KpLmppADGV9rbnEZRc%2Fba2D2wy5D0oHRFbmk5LYYfnbkxokdsgVNwdD8nwsSStXHh5xvosg94%2FUEViQtvWxgPOirswDLJ3I8X1bW3qwE%2FvVDRCDaBhuzYuS4TpNyywSXGVOuyOmFTfk%2Fcs9bgYzcRR%2FSYdh%2BXIBSwX6keJgsjh1zSXMPycz78GOqUB3q7Y3rNt5zW0yVT3fNyhY%2FWybTiZwiiAvzAzazB7KcmOeeLLNaEskVKgdjtU3jY7w7VX5jmVZpMu7w4AErapMHbX7Qyj3hEzdcnXITBE06lqMJFVU%2BA59QCLlFaTFLnKD2vWVr8U%2BmuIyzn9j0O6ZsyLnj4fPZyHdEC7zT4Cr5mAFimpkF3ajx4yeStCXRf%2FNFoNWsT5XyvkXPHv5ZV9c3TI8fpc&X-Amz-Signature=1d16fe82d9e2b50fb58752d2e04dff1032749dcabbbde58103de4ba388157bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
