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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XRMCFX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUULKz2Mv8ijHZHjjr2RdYuLUih%2B91gMiOaETqa2PwvAiEA%2FAFKY8wIqdqKjTlFojyo1dsU3fn0yOS3kbnaUqyI9AUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDgLUxR5ZK582JLuzyrcA98g6ee9xCLQ7DbriWhaxNzokZDjZweKUXu%2FFDGmHy3YbwG9flefF2N4GyyusQTaafsam9VQJRQB%2FC4BqDG2Q9mgFM0WbDzFlpsm8T6rmL0OxC6N68RtGtCgVZFp%2F8g6BnojTgTULRFQQ4ua4ImaYlQwsFIm3KXooGj1od4lykNXKXXH3ZUXBTvwxIL3NEk6cKrsMEPxsy5MzxjiZI%2BPOU1ohxZCTdQ%2Fv5zYttp66YQ6DpncCld382BuVPcyowEoEq1UwcQ56%2FIqcaJbukD%2Fo4BJ8XYbJ1GalKAimH0PJzOmDeUde1HWFRgN%2FVxaDoGULI%2Bf8%2BAstE5sJK4oxKMc2rraL5PDqajam7SrmFR2gyND0qUA96l1ROJufLC%2B192IfR01N639lOKkrSmdNi8B9TM4baCWy4qjTBkHGwfTXb0SSUmmJu6Gmq6jo1pjK3axnMFAK0TPIuev3RcXr12KvpMAPfrL9NxNmAaimeqAy9uTMhxBvSyntOl94fYJUfkVyDacCz5ClDpw4ciBiywNTfvJ%2FeBvEDYu0w%2BM4HJhIKh%2FaUkyTkphqC1ckuso42gVnqkGMFcK6zdCSxV%2FKIw9eDrmW2TTjTLCGufO6i10vfuZbRBVLuAsaOqvR%2F85MIbW%2Br8GOqUB4Cb5OEwf5gXwGx15zKEP9TSQbk0mlAqsziG4nzV42TIHQOkqrmf87GJ%2FRdh%2FEdswGeqalGGhOiidzylLm%2F4eE%2Fb3miv23Q7wMHFeV01udMrsA%2F%2FkP4y2NJ94QzLVFTB9AKZ16ghlHCWcQjklKBaff1lfNYh4BSerDtftMTOLFb5sKmarTp6rkE9Mgw4hh9idiIRPT4a8tmfX76HlP3Oo3BsNa2kU&X-Amz-Signature=5eb7cd81ba68b910b668a0f3e14c7cccf92af612b2fc695d065d5e72ec009a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBLPXNC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSye7FRWuhrJBYjR0m6W%2BMfLZ6svXPLF9uS4qBne5T9AIgLOM6S8hllkcnmQ5F%2FlQf3xYthhTrACPxm2Z9Jzs79uQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMP6XeqFdhiBc45hayrcAwpUqMcACJyosevWz%2Fk6O92UeKTNAi3RDjph6n9ytCfJigjy1KM3SSXd%2BAhgGfqGRqZ83vrGUkp8uDuoIDzY54WCFPLR0qgfNsE%2FCECB8CdiNYHLM1RxKbWeE6eujeUCh10SAhE3YVK22btxuye3vzWsx0RedqF7zS57livhC7rGW%2F%2FpghyNXfNX%2Bs2aDOO4WGUVLx9P%2BkOQU0s3YzCpNMFf%2F072vt2PrQQRgXvZjvPISmaiTC6zFKfLphqw6F3CrUeSjqmfvcZhR9CpLgjRQvl2KIxOuUJYxRSGje81j0N9pwxgplBpLPkqSIiUDFa5HB5auy0aSd6npqqGTBfK%2B1fMHovkQ%2BjL23bZMEcjnsnHXpjRN7eowgxFXTVJgRSk3E9PjMBWL7CwBCQtknWNpAUhpKU8SRM9WuQbKU6LdlWVbIuspqJHNZx0zkgH6FrmrAYeVJHxCZ4ZI4tgRtiH9eMdKxhjy9r9p7dtpl75XOnPxQJIHH%2FVJySphf0px0ApiQLucfEhQiGWWlZZFk9aV0hJYiZsrrCEJn%2BUpSZhIC%2FRE6Rk5JzBX%2BzYkVWqRs7B%2FYJb395S0PDDJ76%2Frd96IpQqwvdov3kRZWauWVAmwSoxcN72Nreb9AU1dhkwMPXV%2Br8GOqUBX34L5wu1sWMy3M7FJ6XAFJV1qU9mttbuddDOE8pBX9zIfaL%2B%2BAFnh%2FKADih7CVlAzlfagn2NIWAZP6DweHd0bEakXP5evWfgNoatyHdCg1Rcb2Dl1in5qTl9fxOp2fITrvsEr5OvzqstW9Fww2a9rstItb2g%2BR93AY19RwwxvyynaNQuIuH1kRW8EXmRHnRNztjTr41eQPn%2BF9yhHal9YByxmeWY&X-Amz-Signature=d3e3796d34a97b008b02bda6ddfcf00a59133ecd75f75e88066f451c2046372c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
