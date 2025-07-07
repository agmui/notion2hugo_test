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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXG4QPM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFK9YZ4YlzgSrKSFJMpq20Lh532ovhNFHxMPquoMaqZfAiEA43NHSOd5ED1R1KnY%2BCpHviNWY74DJL80UBTGUhp0CJgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF3R%2BQn9nXIn6DDksyrcA7QjRUxzKz1E18%2Bh3V%2BCnLsDSpykT3H6puubaV%2Bfvx51fYaNuqMZ5JVeqI7MG1%2BJseSvrbFqQZ%2B5cA0CN2ekAWQ3yGYvUD40btvER5de%2BmlVhuI%2BxQOUmDWuUC9zrUA9rqnZOkf%2FoteMlNyfnHnYC0zR8L%2BmeFKsCF2t9L5oIDrNPuhqDZ1I6aoywjmJs%2Bqv5BCPqJXPr9zeO2Uy6WfxlDyxZ%2FZRwCMI%2FWeynI3FaHS5GGe9K5ZJ06ZtiILfjSRQjkD6ShR9I0MjVfyPgw6rbuMDti3mu3ThF8tOiv6LU9RsNrRfibxQxaYL0nFiSd%2FlETdLA0RNxzrwrqMsHphSaMS1lOwJhxdGhURVFpVtNFXYoKLIWM5fEpaLvS9Ke1XkrsWR9jVStCih6BG%2B1RF4XOLkDupwqOpp1unKdgoEwFdiYXNSuQbd5rqsOHoXGInupc2smcjIrOQsuhez1E0k01OOVE4WYmuAwEKW1dLcXSqtbmkKhxFspFL7z%2FbY8RGkTCIkIuUnlnNCjyKpCfuUFf7JQwOSAjo7MurgmK0Uj3CtqhhWy1H6gEgG0lgIFNeyQf4%2FZkX5Jd3hyFL1%2FrY4RdVsWoTluv9Iox3qUdPCiyO1sVL0D72K4Mr5Tjp1MMvpsMMGOqUBC9pcBliSts3ElkufshnjqXZcNPQK7LTLPpNSLpeuJOK4eZHkTqcMAwDaFbC%2B98hvQMgs0g2zoSjEeje60ij2y8CZrgSRq8gnfaTlL0VGxirZX3Paixbc9mdJssDopABScndHqXOcoYLaadbsV4ccHYZ%2BVm7ua%2F%2BspH7HLaE4tL5bL%2FHSflbfbo4JH1q%2FB9x4sOQU8qfQA2cjymNpGK8Wmzq71JeN&X-Amz-Signature=ae2a14064f622386e66ad346020a32c12d9718e53888fb3c0725222e551091b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUK5B27%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBW40IzxIMD6Fv8S29xtoTH7rsI4ony2MCc7PDEN9GlGAiB0Lrp0bZKbp%2FOqnU6op%2BFT5Lewqko%2BiF4P2%2BReFfBLUCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdMPpQ%2B7pUHGC7zcMKtwD7pV0o7JID69L91N4dioINsDj7NR1IJQIBFmHfXfwSWFOuET5MOHe8dwOgoYpY3mBysdFDEcLV2UGrygK3CI9TQpC%2BS4%2FU5AUD%2BIMQ%2BWlp0m%2BpDwOJpp1CYUZ8%2F%2FBa7LgAe5WB3LHmustKVar5vgGtKZrJI7mltWoEV3ZQNgxr4uWqUjO5dR1tB4OmgnKW8zdlPd5ghwwBsqFyI0h9UGM%2FmIr%2BF3lTK1bjUTHJkbDRrzN9FEYMYuVw5TXxiI%2Ffj2WaHQnVHg%2F%2FHPD5Imol0E1U6tGOn6hh3kScsBL8ZZBiJ%2FDIRpDf0elZrDM9NjF2pkUQHlU7K6u1O32kcmQPvemVR83VjVl7v2IhqFFQCG0s9HvrWNFw%2FJOB%2BUQMcUByZNuMwsSRHCb8%2BLBr%2F%2Bhsan7EZBFCRrSHtVR38AhNlSLrwi4qe53JDTpaMzSnt22UnYsZLIP7smJuovwGHP00du%2FMjk%2B7wVpmcrW5Jw5GGRYRoqkQZp6wLkDZhmko9USfur6rbomGyVnIyVEncBiVE5jzYgRUCiJUrDuwhrV2IZfnA7Hm1KPn7dDPvx1JbZ42%2BD%2BvhCCC9ZyNrWpYib3rM4L7NXpoWxxvP1xpCKjhNzVKV3dMtxUrD8%2BwoZckgsw4%2BmwwwY6pgHy5YX290ouvDfTIvutRprbcdydBCDZ4hWA1OpL96F69IabY7TaNGoycBX0xCgSXxpjhAzUX0VYixt1iJR7HgisuNykzW93BAWwar0pP47CB8wnFo26y8%2Fs3Bya3Ppq%2BlO68052eYhwjDOt6LIAuSx3zegLctz701TD21Igv35UvFfsWNqFY5zfx7qu0%2FiQDe5fI0RqsudDX1BtN1%2BxNGPvOTPtVh%2BH&X-Amz-Signature=7da5265383e046aed27b7c61f7e2ce86998aa623011c96b60a26cae2937436c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
