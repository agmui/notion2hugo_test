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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHC3EL66%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD6nOdolbALdypZGq3UvX4a1PKxha247PfEVIRebhYbTwIgfn4oeSvRgTwMzu6qKqeYUNH67%2BVQAXqMhbOk5bBqGEQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhbHqzsGGM7dnOs1CrcA5bS7vJ9kuEptld9CqsC2jVilPonJF%2BFkG2prfrj9MF7c1Y9FIjreElqa1d13zao6SysIMd6tBfTAAn%2FITYg7687nuL9xX%2B7eYfPbTB4OinQJuUNKm2O49GZzuWE%2BnvHg5wYctu3maDacvPi1QmBgsIfWT3b0XqLoRV0fIRMFfaFhPTQ7ucZZ%2BoWnH0dGkdsju%2BSo29eq1sAbUVnxXoO5oh%2BuKZFTxdojGygNRyOm9wuXN3qkqVxDLYVPLzTbgpU%2BBq3WqrKrf1lV%2FDQ2OUgZTqzx1DeQoQYtL6SnpsdUfb0mJ3P%2F%2B5kmKjOokrJhMu6KcWWn3DWuJbh59SDGtJmNYQNYN2OZ3YeKjhfxevlAn%2BRkz83bxU6JWjBB%2FT%2Fjlf3KkryANRs4OUwKUCbqd66gQ%2BpIvQX26tsk0BORKxVRkigyFvfg3A%2BAN7CYttj%2BvmQHLCfYjoczxWsSXyRVUzWtyRW78lMkaOrfCXt84Y44rXHcPLeNqlKVc9ZL2QTuypk0PRX6qIAKAC%2FNCRsb2icjES%2FiCrEZa5%2FicBXMWO2M1riRLVnRsL0q926SCMSHF3vrRWbQ%2BvYwdtxekLupYL2m%2FUA2DnYVGFvmwdgJcuQGOXuzaXQyyGmWSGDJx%2FWMLmr08AGOqUBPSrPTf%2BoqQ17JFhnas5k8T45wSHkQuebwW09ma9Hp%2Fq9mrs3Hu7wV06GAztOnOBQUIpMyyyq%2F1q3Oa9C5bHgQK1VE8szBYP7ebmuI9XmzIDLqRhqjWeylQP4Mjcd6qiGIzwm8ecwMB%2FBspykutGmdEzEGPzcKkHDH4IrRiq7g8OtyfOuci0y5lUqF6FKmdZKVo2PHojc1YON06UDwRxsLdOsNbz5&X-Amz-Signature=63b0c0b6ce6fde9df0737dcc5a56b9f5f885b26667187d3c6a4ec9b8580f181e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F3YABRX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFPW6MGuaT0j7gkVNpCeV%2B74R7BcYCCEP63KpXk6PXHeAiEA0YQ27%2BgVaf3hwnr9bpdmAN0RRp1p5nG5YwDyaHMW%2F2kqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOR9SBOFXiJZPgazyCrcA9SHCYzIMJ%2F%2F3cPAdObVKdThZKz9IWrsTbOmbGzqIk5G7Er5TACZD0zyFo9JCcGgzJf887BDj3mbX%2BxR7RD73pwLFRXpW9yYpsbLaKEukzbZglv1xa4I2cUb4uHuWWP3OP5TacrMw5grdCKF4LoAYguHC4%2FuMNHvBbXTGyOweNFPew2JkMu1wFyQz%2BtAcj7CUBGQvFgb9lH%2FwMnGGzj5ldyjkhvtgQg3J3aFNtPQkS8L8kI5861ZwNKAdCanvPOwvCM%2BvjHhOUc5AAFrYJYSnmdkmjUMbsix5Ogi18LYQIyVLvFpHItYSrLdEVjoUYYftLRr5Ar3LK9uQ8MdFefPm5ctJ5sShDq3OfNiI9ESWzvX8m011wIR9ow0A4n7faWxZO4jDbnn38xloConfhR1kwiorcjuvm8sISZQo7KiP2X6u35N4oo93yV3UcVT9HFtTy2s7mXTW6jnC%2FmLXNvNzIr%2B%2FeFnZNBsz20J%2B4Wa5GM5PbJR5vaj3rIhYUQW%2BVTtndvx%2BjnGp9kJcf89opIrNKZ4kmPYpTC8PhJmoENtIohIVDVW8dQqA3X3zmJ74iF%2Fwl%2F3Z14YftaWkwGINBiIYxBlgITAL042Xx339y4cDCM3bnxwK8dn9gNQuegFMLKs08AGOqUB8baQS4cNdvsqII4OxxLo6DGCMXWINHNg1ime%2Bk4lSU01MWwjeLwJSUZGFSKEcw%2FBIHp4hFgGlJYJiCDc14rBCAmRSMyVAdq5T%2FDUA5YbNcM6w%2BALIcbaIEWrTYyuw8KY9aG3tIsstwlVBre3e7Zvu8ZmWqfHoAR6xt2TMY2S5i%2FISttXvDLKPRsvGv7lz8It8SdsuqvG8JvW8jI1LQuM1EmLtXUQ&X-Amz-Signature=81eab47b9276568c2eea871afbad704f1a1940760223ffd4ab50d31b53b7fecd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
