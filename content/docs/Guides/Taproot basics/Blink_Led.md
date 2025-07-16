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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJR6TRHB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDdDlicFFMpYs4%2Fyw%2FBZAUFKlTt3rW4uHSmn3kdBpA6xAIhAJRrIWWmhdPOohQ6oPelEGO973FwqlK2X9yaovffQoOKKv8DCGIQABoMNjM3NDIzMTgzODA1IgzSIkr3diyUlyKzmyQq3AMabN2cu5cBIuBSsTtzQBxfagSBMKBiaX0OA1io08c%2B6W5ijHAYWn052EePHnNmOhtXfhKQXNDsYCKo9Ku6hn79Ch1zc9tvrA3vTxu%2FEJbNjxtv%2F2byLX0tQ7MuHmZ24VRmAZcH5UiESybBinpxXBuG8HWbeqdAqiOpxLLtlsuin1OG1lLSkrRYXbwri9A6FBMuGfRHRd9xCA9QoJ0lFd0OxwXd25Ax84l6JbzXsAhPHiS1ztwHnh1srwi64Nc9e%2BD%2FQdugKD3dL4EYqHRLYL0AurdxX8ujHmRm1crCzDEvM7fFo%2FlR4FT5Dom%2BJ6Zdi3qBwFYSd9j0iS7TleGqr1TqMBsu0JUXArUmV9%2FDB1AijtOX5ODZxBXiR0OA%2BVkOz2QM%2BvjDCW%2B098rEcoPt8D05o7%2F2HBvMrX3RMEOeabzN6Qguc0xytoGN1zZBpgR7XPNhF8OXPR%2Bote%2BlAaN5ek7X3Zdd7%2BpT9RMWYs8Spb2VPs2j7jLN1uL%2BXgsq%2Bdgq8739oqL2DFUjsQuKR0cR04H5o1pd25%2B0RIPzfvZ8%2BCDP6YmBrXKXtLSCpf6kwWmry1FEmyZcRwyQLOB5C4xpAERRVQshZH1609LQ%2F%2B65OfXvueb1lYI6WErOVoe7mjDWtN%2FDBjqkAZvdVLJNhKKLf2ollPJS2V1OEt1FECNElVeXP6MYwNTcBF7feLeyGoQiIjdpKo60gkAvjEwUIVsAuafc%2FJPeMdq4ZtOxi1KEhedVh3bZBrWpKgVRRHvK1zC84VImhLqD7r30zbk8mldQoC7aG9b0OOArse6nQ7X8KwdcVtz5qNueMCj83pErLISi5eNsWsx%2BIEX16Uv4dnwQbSPKDr0h16AdL%2FfS&X-Amz-Signature=dc681e822a48d097020fceaf48b6c3bed7247df5636c58952c854deee9a1e200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQAU7ZU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBavmJq%2FneQWl4wsVw%2BINJWk8OtlwN3FTBGDQfz0azCFAiAXRRqHD0wB33pHn555ob2pSCwIfXvam7keFPNiJGgchSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMmOP0w9nXrB%2FC7J1kKtwDRkWGpmHA82S5X37mQz1fr4dWeR9w5apvk7ne2ZW2uFkp%2B0Vsj1xQc6m6b9yKeTmG%2FVLJqJbgxvLdFzcgOZsyrdr%2B2gBmg9W6dfwB3BH2PLNpcIWxJvKZi40GlZHitS2hrB90vrc%2FNnLNV5ygnqTCerKU3MJ83DZ%2Be3HWfC4SdgvFbmTiQ7gOa9M2H82RowkZj46I99wNfzdzmF%2BECKxYrvbyRTRB52rwmY90eX83y2OP9a%2FbDVg64HnyVHPncMwVYV39mwiL1Rv1N8sAahkoi3sl0wYzVc9mxl6BmPDycv2ADn%2FoTCTYdV9Km5AFXWmkEQKxgJFDej5Eb1affK%2F6r7eI4LMkB45ulbY1trFiwWPjL2Hq3PrP4qTNOZ8At2BMO0fw59B26v81OH2rJRdWD3iuyJO8b75M3iauVIoQgkXhOJGmPSrxpcEHjFSoDJ6LHxxNvHBwVk%2FUXW6XCIDT4I%2Fzf7Gjfx4nPoSBsQtAruuwf1YcFJQQB6EJpPVyen6igewcAz6w6zHF2wjKnACiQCD3ZfjZFANcUwrkTe4fQpX%2Bd8zMGUZTyk8eaLwvM7Eb7chFM9vRqTaIPhiuOObmUE%2FO8tDwy4G6%2FnHMnzTCCZmbpvFsYHF7i4KTbIAwhLXfwwY6pgEfpWBUR1vXmXZGHvy8xl67fS5gnyC%2FmdpJqruqKyCvi6FSjrvHVKb7NewgMn%2FMMyv9wnRsHIQCN7aep4n9F%2Fp0wMBEAV%2BWacmyQ%2Ft70gKEZCvZtbVKk5FXNHnqwgkO2zazM2pVVv1YSbz4m7Pb1MVp0HUEAkcXeYPETdCzmZ46kdv802H6viHz2xojbU5z3uGPOmwAlFvJj1J7QlWXVGX7fUXYkTAm&X-Amz-Signature=c9d7888b106b5b86db75925f1a5ea0e1f51ccd24ac07a8d222c2595dfdb5c7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
