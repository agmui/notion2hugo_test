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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSFPFJJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvyTPwmMj3TCpF2EQdSagBJrk23%2FS4i%2FFoRpQIZoX1SgIgTZX5jHstflEQXcqlfPTuj7UcSivrzju7QK2hk26%2FVLwqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCs%2FWEeRUnFxcDRFCSrcA%2BLF%2FWEHhCxM4vq9XN7nbE1%2FMMNwlp0XL8SODuiNLYH50EVnWjuzF%2BECse6VxgL5C8te2JgrcgA%2BRb9IeFxFltlbstI5NVQlCfAMlcgykFGyvQLMVlZZZiQyV8PIhxvz%2BM80Y9up3Eqx5eotMnByqFG%2Bg0Iurh7%2FJkWMdtmv9lqX5yaSz0gVIyExsVehqnB%2FjhCr1lc2Z4cD1gGQNkwK0fh%2FB0sWmoFhIPRbl0XAO7kBxhh7P9%2Fi5VsekqLCQ6ZqEL4t3S%2FJeWarR6IzOKQUqVeyWl9tRQIzpe%2FY6IjgwyvZ2dEVGFQzJU5PRMlkTmpPIFIPqQXy3FH%2B0GEV0bU8JZxnbTeiz5rKqAEsMoBbCqXHBsUMVvi6QbqRukDzaigijy2y01cQwIhlFBgPlCU%2Bx%2B0Mv7xgSGqzGLIBsPEF%2FHJREwrf%2F4l1uKYpX9fgNkL53N7040kf%2BfTsclXzaTWXnW0zSpcclu1%2B%2FTaPXOLEqIV61hf0FmsMmxQWCFH26D5TwYhT10NR0DpBLEcGDCyWW5GVwYMIaLnWXy%2FJTHwLA7HSphHvUAw6QYQwLg7ivG1%2Fi597wPcSw%2B%2F7q2P0dmdlQsjUnJasGWyw4ExKAde8Oaej6vrCITEUyJqt1IJhMKbj9MAGOqUBB%2BNCxkeSCpYuACJDbh1d%2BYhfJ69j329mY9xz%2Fa45tGDKOnobwD54YXhWfJGH01T4qQogWS2dW0jNMi%2BHUYRyFbhfntH2qMULSY%2BHq5V%2BoKx452DeNdaM0VrIc5TTzbPd3ub11RBG277eLvwOllbKxIgulwJ5vONAkDHQK7Y2L8deULgh0XsENDIKEoE%2FEK%2Fysa9wYgVkH2YcR2atLoCX0Jezpk%2FV&X-Amz-Signature=81863b2b09f40487e394d2be440a5ebecdabb7f26cb1a5eab75aeb1d8d8e4dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6IKL6QI%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRKUFX0QhSdnuUKeJoOvr2D0Xr5CP78XBHXOmJwhnczwIgDvsTaTJF2GDji0lLUXlQ1xGZEgL4eadVOCZU6VMNwuYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1BWrdtBiyiMKOuiyrcA3MA5yaqyR2tOT8p3tLZx6Nk8NkmELg%2BC0vodkJWF9yBSlcHhp4%2B93iXCzYJTtAVRlxrU0yQTnKh8nr4raVCyqJH%2FbNBqJoYQ%2B5%2F2w0JEPvIebg7Nk1y5CsLSbtkwttsQsodUlJiqiOjHFwvbJQawCV6avwnaL4g%2FQXlrKVz3%2B2%2FfLsBqoqvCTX0sJXD2HBU%2BcNiNEVt4yPiq1B76vBO9RwA6A1GDjkYDmVjwCvUBVrvO8nN2jOtqS8ezq%2FWznrsgAhe%2BF13V%2BwoctLvlOjr2psPA93dFY2Bro6vRviiX7Bnx34EeIIz5aLBlAnMuNGYn9oy7cnJa2dmdiN2WQGSFzSYvyHLW3sFWzpfQ4lnXWtN1TcErjnkddp6gbT5Kb8PIuUchbWCRiU%2BxKjoVbI1uIgDuJWuv1NdGII2VPUVv5lZIRF4eR8vSm1iaFATVfKzW48Uc4HhKZcxuK%2B1ZmlbjANilCTCxG2QsarZC273U8rjEFejmtZUWxlm0PHA99fXHNSUQQ8bjbOOz1JvhkyzgZ1fARPzRUUMR1zCZzjtKILe%2B3PX2IwQloBwoexYeRNsww8oTGytkso1w10yname16I06EDDacg0ZFZcbXykTzA41BMKnQaBTZwpzdyvMNHj9MAGOqUBqxAdCr%2F%2Bs1sQw603P4dsQBf1OmLubukXYK%2BXls8QbxQy3mYp4uyFsuiiQkegSAW9TDm6aqhHHvrjhC%2Fw1IDxXWinld0mUj8SgOrbifVwsko8%2FxJ8JduNSl4tGk9AiT1YYhdkLlQE4qivGV9rgZy2btXNIuJ7HiCVywmil6lJQlndnUucomhxQOoMexueFlpdZ%2Fj1cjW0NFXEOxMGqjn1MSV3m1aW&X-Amz-Signature=6d12115b9cd89317abb36e6e3d3174bcae8b89dd145138d0b9e2bd7cdc37a844&X-Amz-SignedHeaders=host&x-id=GetObject)

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
