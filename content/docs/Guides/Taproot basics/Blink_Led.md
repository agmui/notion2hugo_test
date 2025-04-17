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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZ5BBIM%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwF%2FJXfNtOxRSKwRQXj3iWGixkI8SK8zKQzcHUP7HbygIhAMBWari27HHTYcOA8s8jbB4r3K3leOV%2BTbtZfKEYMLl5Kv8DCFkQABoMNjM3NDIzMTgzODA1IgymieDi5ouNOVHINp4q3AM9FpGuqbg0D6Q%2BYy46dSMmXf9rLU6O59GYWVaWzkzXpcxXrP6IPtGY9gYqe3eePlhMTIAudP7gzaUg3%2BOYlxREGhNnk9%2BLGVpAtW9jkXbbornjXBDU%2BkMqHcQsE2ut5pZ3Q1Hc9ciWHB6SJ2k6kiA6KBWKq7%2BU4w9vMM%2BQ349rPiMPD3e%2BcFtSzKgOp1oeL9DPbOIrz%2FKL6YzxDk8J82Akit7%2BQddK0VN8%2F8Sl2sETC6MxuVuEYGFJ5MbfhD8vv41xUwPgZ7mSwU0WRf93YNkofo1%2FWMck5oQsyDQog1CMu15aIIR8cK5vJy0FWDGJL9DYy7oqmhKQxjT6knacorM5YisUVNtHsZJWv%2FyEmP8%2Bx1WrZ0%2FW3xjmSboV4gVNrI9BN29zb%2BjNP87VAtX48LmMY8cbTQ9XcGOFk98wh7fLdKHhq6Xqi4%2Fqbvvk822cuJWBKqiipXgzj%2BAUOkPJW6xLQ9P4L5PqJVVBMwGm0itpkpqWNy52BtbMvaVZ6dz4IxQ827lJ%2Fb%2FAcHMybJBa0p5nZzADS%2BDaH0SrupvaM5sXa6Eh1VRN3jP%2FkK%2FsCGeghHU5w0%2FTLarwA4KX31yrPGDMdSEbrjvYzJwqbhHGMr3S08EZEOSy1lsX82QpGjDI4ILABjqkAdB0yTwB2jUmuhiq2g3k53Dk251Y1ZpSs%2F393vHux1JT4qF7P7shS1ooDhSQ%2Bs5Hw3kIHAy6SU7AM2gkGcbExwFYELWIeOGesHlIf0k2cHl8WAsL9GxCWum6MyM4Rhpok2%2Bq9Lz9XxjSFHF4iDh1ApMsgkp7fCtPPozabDlw451Msy6erhN0W6aVrjP7DF99nBzpkq05nH82WFcs9pb09bI0Gaev&X-Amz-Signature=eb610fa04d0a06ada569e88bb308ae1b953d84baa91a78e53c2439cb3e711118&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UTLVCG7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqzdvBmH4AFTyZGWjJ%2B%2FqqOwOO0sr1xjN2iGzdUntLgAIgc8hvzTEej884KZ%2FyosdpPAA4xXcW60AFIeI9EXJ71Lwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDEA81qllqcigrUdr%2BSrcAwceZKZUDnnn6CuK1tbc2B9HUNL1JoLh2tQgGkPNANR%2F9rY5kwB3Fr%2BXTvXJ4Nfg%2FtHT%2FUHL6rRNuXdmTHOjMV5TuAbOQrZPYAgjlpEuICDffoqEU80ikzGODLWu85k4kUNbKPCvVKY8xvZk%2FojYZPtNN9OsbdqFGdSzTiwm93jJ7MXRTYDBFiJCRwoGHvRU5oeBN%2B10ZR9S8qrnwLPvNq3bkpBc%2B94tBWz6DrQ39THIXE5NbwfTqIpNZGPIHGssafESJBr2Xh%2FP87NwjuJ6AjIiBQOWhW37B9w1Hc7C%2Bbmm3qcVucnVHb405IJdfW1c9EgXSj3%2FDj2SPUVls6D%2FxZoSfoo9h7LUePfVcL3o%2F%2FxHLmg3x5YI7wQuipw6xOFV22OiGGGiZurHpXyBvnLOH%2BNNMZYAK1FmkAML8aNdV9%2Fg8cvwz5LJ03oRM7W1CQAJEyKxD2ecFPJ1PSX9qfqQf%2FfFMP0DnHDcG0ZDiQDgeY1wpmvuz8zRBjxSCsLADr73pl2tjWhS%2FmNvqo1J5%2BvPSdUNfxVsd8pdxuT8EQaBduDThrA3clZMtkBUfEM7kuLrxQK%2BFXeAydZFRmSTHP3iY6KPsaP%2FM8ofer046QeRjBqK7n5BAfql4QaaiakeMOzggsAGOqUBPwk97j5gc%2BBvu8i8bE%2Fo3BP4q9NQhYZYuAUa9lnC4Cq68wZtLB5WGY3mEiOvjPh4Nl2BymSQWqoXFSp1smYmx19aKyK1ogq9xOk8rDWpvVCUiwLxaD7HaWOXeLMvxmVhtwIV8OafG3YmMGIvLzCuz%2FuHlU1Xpbqlsyi4A0CQP1X0AI831caN9AXNedeQcE6uoOREiIx7t%2B5dODXHUGy4ioHAPPPo&X-Amz-Signature=b3fd94d7c397233c9b52382c5bb4268e13c75850d3dbacebb6535e3c4c6d3b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
