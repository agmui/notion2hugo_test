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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QSDHFL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIEldPXUWRP%2FSPjHB%2FLsOOFXGPI4Rc%2BJkng1xBEfWxI8YAiEAsjc%2Bo3IOW5rIJyFVnQCIwv3m9%2FojJ8Ct315iAa7f%2By4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmc3g%2Fyg6peHfZD7CrcA5%2F9U8uLuUcPj8kFkZG58HrdIm%2F2FDwcmoMn0f7ns6O55T7ODr421V99PU4Hoy4HyQ1ObvziVy6NkHiMg%2FzU3E5wx%2BO1qrMuqCu0bWs9MzcrTE4W5%2FBD3z5rBFY3vtPkALu6QjS5sC5XpUll1sNKxXN%2FZRfdsji6lcwrEM4sX8CvnkGQHwB0iCw4mfX9wGQGh789uzDDhkHJZiIfwbZHdO6uh2Egvsk27yb1T%2Fffa5tZLV6pNXUYELdKZmMHsxNIdkrlS6PwfD9luaMrbRu9nwYkp9tRPaTxp0vSS%2BEW60CBzj10k8IgmoEcWCcLDJWJjg0a3p68LX5kZq4q92EVAcnhPUwkn7ErbwG2koZFP%2Bhy1TonLZ6IhLjI9x4rjvrXR8M5UsTDFZ0B41P4LlmioWqTMX%2B0NAq129Cbn18rxZGkb9gdOy1YC2Ob2s8Gu3CBvLPrbpx07NqW5LKMjKf9Iwwg2dQ9uyM%2BqNhnwA4bIVsJzvZI%2BUThX8GEl2LE3I2TbyJC20JBwSg5YlkzAmIxeU5vvHQcRJvpVo7JnOimekSI8IHOcsKXhKn5wzkYo94U6fnTtciBbd28wxmT5l%2BbTEcgjtl9ybootETFNvg6f8xk%2BCtf%2FQo7yhsJHiFUMMWv9MEGOqUBRttKl0W4Vi%2BH0DMCFa2Y7ZKadifDRE56MnVNHhaR878ZgglSlIfmh0WMM7GWWpYU1XO2OmbiM6Bs%2FrH3FUKuLGOyvG4CtKet1YD5nbJTdVuulLLb5fWoKLb6Ewt4w8KjTKo2fqjaxV%2FQT2bi%2B1nX6ZT5wgSTn9rz9Nvn0ErT2%2B%2FRZaP3eHrKKqO1IId9osS%2BAstf6Kfizhau%2FzFiyVQl3vVYkq6c&X-Amz-Signature=bdcae6d534a7c5a0f1fcd81f50132231d6a4f4d57de37c4454225cb7699765e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLUIOB4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDt84PGDavruebevdwP7isJpjUQ8LEWwjYSW%2Bb7Qlvx3AiA59VTCmRgCf%2F5s5dgXVktO4PeTc9WFlZspXUWqo5cPfyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5bStCLDAQVW0cpZkKtwDF6b4qx2RI04U7ji3BK4JMYV%2BIiKFBK3o%2F5ww4YQ7PTF00A0a1SNHtwVMRJqLRXFWPLcGjBrr4UT5KFy2YSIChMBZfCFFa8CoEAcxuG1f3%2FYgguRb3CCpvkHUmugxv031u1nXESQliaXTv3b0FJghI5b2rM0PwXLahgrtJ9Ez3XwEui1dOoDd4ZctGGjYyr4AfPzH%2FuRg%2BZFYoDKQx%2Fd6zm9hUdgrGwZEHlauvUEPWzl527ousNpeiJmj6c8aCwhqhTaimEs5IkWpv2YO7Zy2b4fRIHG%2BnoPKiK%2FFon4WDfqgtO9TkHXniX13QFkYEzpP8iKLDeKBBRY%2BL5VbiTtz0xguFtrLySyTV3nD7igZ2qSnrClpOaVk%2Fl%2BzQyIBVdhOqCCo2Vaxs92vpe486kjKGISRQYjKdxnv7B%2FZPhoGm5BQRruYLdNrBuXIghMNnY2%2FsEL9xAQjPzwoxtYTT%2FwaqR4mkEu6vgmSpHg4SxpZ1e7HUBx0yoYjTLs3%2BjUNNpnYJxSU%2BFg4dGzel8%2FqYPF7lSq5yPCvgVBhL1psOFZm0n9vKhkqNlm4gkqZZMNQk7eIpPwx6ss%2BbYdOpISP%2FTBwUb9fO6iw7yMEperx6WA7L0jW7stk%2F2extFv4rSww1K%2F0wQY6pgEMViHQZqPuU7%2FKr6CvFfcrXP6HSCqhic10adhydT%2FE4BPDUnfZv3Eu9WwT6Sb%2F%2FMgqPFbPb4qEqVFKcRuZHHnqttKMXZeJmDqEXp0q9gKJ%2B0R4rCPl%2BYpL3j%2Fixr59Nl2DtWif8CJsOaRpPReVDhTQWH%2F5Xvh1uDrfARhkIBnzjeUR0zFynmt0cnvpNk43F8Z10tBlhEFatoI%2B8nds302UfQtMtJNK&X-Amz-Signature=e6a0687641fba8ca462234f92ef85e17485e9b0e1f72d0670b10d386b2035d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
