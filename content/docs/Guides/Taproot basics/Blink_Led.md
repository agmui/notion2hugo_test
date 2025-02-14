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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUWY4YW3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdLHJ%2FByaB19jlXNxivxAgP0HJvQKDabUrg4fHY2dXDAiAeK6dfgdorpZ5H%2FaXTY54rsY8QUw4AufS5aKoqUc0G6yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMTlE6B0TfTnbL1hd%2BKtwDszzPFYPKAGr%2FnGAGr52rQE%2FNUw4lzC55ND6xugTkRlYQ5gkJOYuU34YS3Spo0GH4f9iJVu9ayPAPRnPNMMm7uRT6%2BJNe47CXejHhYEeTZpKjwOooSekUsXXJrgkzUDmmlWOexLcbP1NidxgIuHhSFam9HQETyDAVvsPIbQPXUdfW3l6aouBB2T7l06QEQ%2FpNpNSzzG6TZUboUjRHn2q0Z32iBdxmnHR%2B5USiAUXf%2BHn2js3WNzRhNhRkWxkdWBxvoNh0hFQ%2BouUtu9oZOaXAanKabKpRp5QLWfGMu9LHHMk315N9t1%2BAc7suWef6b6NbGsV%2BDPkKI5solLYWo7Qewa0zvv8apLbchYWT%2BseLC%2FUzCvKNX1g4mwgMRnBWYPaeL6E43X%2F0Fo9btn%2BDefVF1qd6zkCUx1BFtIDCw3MDZjAClCB7GMQQnsG2C77tYMrAgdO8B9qglCnN8c6XpaFXU%2F9MQ%2F8Wv4pCoT00fdMPB0K1NeHKcUmCs0BhfuCUpe%2B9voJhYHG9WEqav0QulXWKkShTHPEzrfd2MK7zV4T6Tt%2Bt2yIgZmk6DaiRWqZwvkk79e6G1mDtbhRA9z2HJdoxg%2FPrq1CySSJYvzxvZQQvgINs%2BCuUodrsbC5u6d0wpYO6vQY6pgHu4Rvwl8kQQPvu%2BIIJs%2B79J4Khxhlts%2BWqvwMchQS%2FuHrSEULMAH4kLRkNxYaUI%2BK%2BemYQDzA89cgDHyG3AHOhUZfyjEB1L6q8fGxG%2Ftobrj6ro%2BVMbBPrlnfeyogjLTRrYZQJ%2FsX2Gr2Wx1sV1iWbHIfLBqZjZBa7XyMrM%2BcDlN6wAdN9jisMWlsxaxE8uolVJ5J1llRza8ZKQtpc4HwiSjRpOHXJ&X-Amz-Signature=642ec64c52ed478cec221ae816d13a714873bc1cb6c9d20934ec26227cd26ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN5FEIBZ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxMTToA9AV6tkHfXUSOc0q0Mtafmv0ZQIkHp6j5%2FDENAiEAu64UfMF%2BlEbX9LJe37lBIoFSBBT%2FcPYZydvfBg%2BQXiIq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBBgpVqSBr2qIrwfsSrcA%2BJwdYg19J%2BMlEoV0NG8pdmBuJunZE%2FvymAoAsCKThpuYQsCkmTbs9AnIELLkinIiXkHTswEujFO3QDZ98Bs1CotdmySL0u1%2BVepqdm%2FL5tZgviYKkkwLaU3nOmkNjny227QubwB43o1dLTb1yDJqBiOBBPxvZbRWA04B6GGdkJ%2BMimIY5Cxa4iHB6bblWkTudoSSAtn6T6YyyF8g2TSvBu5nGyoTbKNA7JDmNNAVL%2F6%2F%2FOiUpXMAQtysxzjhLJsGh%2Fni%2FrmHDbHXa0Wp5aJjRxB5cdxHTSFVEaapIEBqQW4FIEa1lwVOB1tJfchm7JCM6e3a7Ctzgf4NMuHLEsTptO5s891gLqpG5fPJZtZL9P%2Fk%2BWkieV%2B9GiCAVKMM4sVS%2BXrbcpOD8eoYYn5WZzW3foIvYXq%2FRlqZWzHULEUj%2FETVcYVXTdFa%2Fx7r0aM1jNqKDWrUOGYO4tQy2ZRvHUu%2FKVnHG2AvoP2pwcNfjDUeKrkAsnI4uTxN6yjOhQJeDPtZ1Y9HcIFF6Yqfj3WxmsnABdz5hJIM4BuxlcRx4I9U5hK%2BdtHvJ92OL70cDztHPPPbT52DtngOaWKZ4pPRiVjwaXs2849J%2BT0oLjBAAUM7fCYspOiGIUHLQBDPNQ3MJyDur0GOqUBG2VVnoL0kVkmSaAp%2BSVzCZaCacEGQPy9%2BsszOVjiOYnsWeME%2FRC46yOT7Socn9EWrDZwj4e%2F62DT6ybdgyCSqLI2OYuJp7gyXB2MqRaArcOt2W7xc15UTf8xnkjndxrQie8YOTQGxPXQxs351t1RCVptlrLiW7WFbjyKJP8Zfousz1g71v9Dm6XBMOHq6BFCLaHXmfWM2dOkNIm5c9mDOpCKzRC9&X-Amz-Signature=9d74dcc14ba4b41ee8cbe57384c9c4680d867cd51754a87c0a737aad5b58090e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
