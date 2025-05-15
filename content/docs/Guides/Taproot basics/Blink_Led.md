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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGSMHLM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIH4a5WZgjEX5SvFLmanM3w9zXUJodEAEMzeDUq%2B%2F1yfRAiEAqk8Jahv4l9qxMHyDoDJpCCtjI%2B1aHuVLRFi4Qlfi%2Fb0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMjhUuWHh2t%2FXWITkSrcA0iIuuOR9Q54GYO2MI0nuMCfwAIIA6PLLKwXOLIb9D2If%2FRJZX6SDVzujRHH4rB3oqpZvIEMP12aBb0pWBIobBmuO%2BWouHTEDkMbdYkW0%2FByDmvxo6mKAXb5NsjPBm8OniIV97dRtiiTSQJcFCo5GkDTP%2BVl9uX415AqiMIvc3ynjDBvd4wunupgHON9qZddf%2BOyZmFWjJhSkHb%2FJaawclNX7EnMoLnbU7nxXL1wHXr0JUhebAlYCjLiX7nJCvDlXfA5b4MGxrzXfMtORmEIlFT9%2Bh8Z85B7%2BtUR1HA%2FFMmUOeJN3XY9SJIgTkleCCDwdzuXg7%2FbeHm4zwAVf3MzzRs5xorsUWfZn7uXPHGnvtjlg2N7kCwrJUlIbK%2Fh%2BlIs8CPaEaPa9sy3bAWFj6ov%2FTpYXWVc1ehYAcFlxq7cjBGcbOdC596dv8GgZAU70gqWpyEx6ms3auDq%2BCUyv3j5as1z2%2BIn5ZL38fJph7vxEd7HyhLjijfAdV%2BFPJzJJD7%2FSwnq6wUXVQ4fbslpVRBoua9t8bVGAI7QXZpEqzPipK%2F0nYgZqgaIMiY3P4okVXvAYwAzsX9a5FwJnrXZEBDskn5V9QnJkMWS51SizMcPRV8I4jSNsRq3o7dPtU1bMN3rlsEGOqUBmlLqFML9bsHAC45YAM232Nm43hQvYD9t7Q7zk9lji3yqttApOFIz6jojeQecMavfyxaX2q%2BMU4uyps8GLvkBFl6WeG13yipY%2FiOobzDU9jRPfK832NE1UnTiKVCy4YQBXMylWUC8UIfIaQ3F1CFir2jwS32y3qDZbrXfb41ZqjodmtsyxVMqYa%2FHX8vJ3goY%2BeAPJX9LMByGDiHbWvFGSx7DLIqD&X-Amz-Signature=15484de0d13b01b96e2155ab3adf5856526c8ec3cd41b78a1d5552cc5b6fc167&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ53IPRY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIG1pvJ0gyxhy14mu9wQSUntBL%2BpVQTz1ZcaFF%2Fo3eEExAiEAvw5eqAH7hnCLq5sOQGOjCuLcnSIJKrn%2Ft5nzm4Vhpkkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNw0v%2BXHiqpN2rxaeyrcA%2Bp0vxj%2FezZa9gsOKNgxNByP7ksjR9IaQgqBAXv7XH6I7Pf88Mb8LeB7LuZlybOTSEOpN%2Fy1RHI3%2BFX0N7rlG56vVjvmhvvr9M%2FGvlbc7k%2BpSMA3UAEVir4C%2BwpoXHtUk074Lx7X4ZWjKKLTUtCgInOY5pJHtBrK7tgYJ1k5MSfP1eFCxylC1N2prWv7vfw7fmBoeAYTg2iU46ptSTQNWN4Idi4zbwi5z31aBnm%2FgoMZmTw3QKKFZHwCMj1xqTs0MIKL5Vrd0aKW2ieHPOtHsQjd0PoIzV9e0mKxfS3HkCOQ1%2BElfFBEGcn5qgssGBhREZdG7o8%2FY0WLBnj62VEWcQUgnUADdvbMsvkfq751H3qZR7Zqz8CCcZ0orM6EJ1nYB%2BgYKOj7g24mFQv3t%2BKE%2BFDcbjdYiXjddAZfEsWfTrJ81t%2F7d9VBb2DMzsFtcDyqngqAHm6ZCquTVs8ijLvgzsyXyFjl%2BC9u%2Fn%2B7vHiCh%2F1AJ7zj6isHoVi30JAWKceKut%2FJkIBbU5uXXyjvnHXKQhQ%2FfDo04OR46pzZhA2N%2B%2F%2Bm53AEyZ1yzq9H3oGg1Wwmw9PD0a2WrnO2sZjaBYG0Qf1qCuM3zqRfs5hBEFydJDDXXM5Ho%2B3tuY5Hrwo3MN3rlsEGOqUBeTHIgfvbEslkW45KaI5pzVYbEmmEPQObuAaPmyPgM3K5DQof6cchuQMjYYl37caD77kElXav6Xg2H08fzFAnQ6YcsMFI1MkZcAqxuJEP5nig6HTP%2BCLIrgmcwFL3I6OUfTI%2FAtY8aBuvV79j5gn6gXi6KN5u7%2F7M0rIPmu%2BHIdXSm4rGTAIaCclkMdDUTtTEqxvaw8ziDc1w%2BSGGloy5f5BlY%2BbP&X-Amz-Signature=0c2c3723a5b782dd8d0d155e7b1ebf7aca2f5caf923199a0cb14b81e1ae40552&X-Amz-SignedHeaders=host&x-id=GetObject)

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
