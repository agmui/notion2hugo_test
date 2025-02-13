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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY6WRPH3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3bkJ216Tnhuc%2FWI6kQzLlIK8prJWfkura64sYgfLPCAiEAwHeu5N95RwpkZW5Vkajk%2FRTtj7614oBVtaAiSz8%2BCNQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIyS5lWtwS4hdvpPtyrcA7R16QGSeT24wZzoRqbNQyRkdCnfyqB5Jd9nmcCZT3tfW4wa1LUoO9Ys3XLnBTx3RwTMEpsr%2F3a0Sz5jSg%2F0yBF3EXeZbUY%2BVRed4uEMeuXXOAbEZhP8Dl876n7kWx3VP0jeZRG8TCooEQue2ebvNi0l8g%2Bw0X6u7UBojXvs%2FeuXTIYyQR1MoOenZ0n%2Fqe26C7bCOdJABDQVfi0rQDExBR2PSxgmk8R6HDyg0o9AyOVJFNGPBXFqn1RqnUP4LucK79n%2BOpoe6G7K50woUnzaeKUPIrdVZSRIvAKwwisV39idgJ55JRbP2Vle7jnKJOZ8pS65lPGOiFUE7MfjvtMmg2J%2FAR8l0j9Jm7anUH3MmOG%2Flv%2FsxbIBFVcR7vLb75xzuIhXUFPrp5DWy%2BIu1Re%2FqdvsCYbeWGBoCcATtO6cP8fJd3CVwrlbj76QKbsMjKaco1zrh7xoNn3WAU6nUE4QPgg6gisj6vFy1siHxLSdjS9dW37ba%2BrM0QIHEJ0401Wb87JmIN%2BvAVWmOzEjRFbg3t0Nr7snZzJ%2B4OWoonuyW6kKnWE5beG19lG4LvbO9l2hS8Jekyz%2BCnvRFK6riq1Aa0J3nqY7XIfmAwxdh3YArirc3qVx9NfQmXWmUI2HMNuht70GOqUBsKz%2ByAMns3JhU9QrIHMFE%2BCHOOevqY%2BeXuvrN9QZi2QQYiB4VA9JKUoBAjwAdk3U32Jt1YWFbCqP2UbjuXjqJ8WbqyKS1b%2BnKtP5KZGpCqg%2FMjPqLRtDSTXkY%2Ffw5MnwwpwZ1N2xR%2FSFfE9BooUH1mpEP6DQW%2BoyjxUk9UfzulFic0qzgjAY%2BBc8Vy0C%2FwZ%2Ft%2Bo9iA37N7kZd9cG%2BIpEJiakxtIa&X-Amz-Signature=753d50300e69da3a507987b260dd34b58fbb0d1beea69f5f069b19fa74cb96ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SRT5SHH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoa641dLNPA%2B%2BtBsDPU7ek3u8TeFI9mK5XV8ihL9byjAiEAgJtSAqVOJIuKfHYClC45CD2dptmQpIwN4LkJG8M2Tkwq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDO1WEQ7TuRo0%2BBmj5SrcA55nF5Xs%2FA%2B9Jbd56aP4hlhPH8nqjv2iL%2FVCeHb7KkYjHJ1mA%2Bm%2F6nsd9%2B%2B0V4yfQ%2BY%2BIsQL4vAGOAcRFN2K8HdWFn1oF2qiVexAtUCOSXjz0HBQBSLqdNpqqvjda0izT6EeN%2FVVGXA2dxPLcPSNP2szUnh7N1UIPd6%2FleRd8h4%2FUkaiXixjDDzMYOzeqn79nIWGG%2B6pAfag0TJLB7jii5feOBcwb40BWtJo7s75od0xsoi5SFBAyRn2H%2Fp65Ew3ye4thCUX%2FCNm3XfRhtVUNrugDBjcaq9e63xO8VoeCK0HskHYPzd%2B%2FmHWqdFl1mh7%2FA8fdUC6NtzgfPsmefKdRkdhdWgc%2Bv3lULaAgh%2FGYY9o3QZyijPYQsqr6vTyH%2Fsu%2Bm2%2F6qFFPeKZi8OdzRiedo4TUQ9KoJTtdos9whQyQQjcHJnQ5cUu9%2Bsp7xq9%2B1J1j6B456S%2BMt4XmvTtT%2FaVXCLv4aGcYsL37Jb6sTp4eehozRD3HwMSZS6IzzWhVqAkgQjHJZdQaO3L1emIgTaVf7lf%2BZq0gPu%2FKAxK526zK0OjlK50%2BnmX2bo11aKZP5csm8YVOtP3zTcVcl5yBvPDI8VAcUyFCNMEm%2B7%2FVwMkxcXCK4By%2BPk8WOojm%2BXTMPqGt70GOqUBHjnjNl2sqc143XgL5DxU1py5Hbo5ZCIJZZWmxAxBYqETyJoQXT5HHaR1ZvQkVoeDNZ5MmAYSWYmcqJ%2Bi8Ab6mJFM2wSBKh79VGAjkPhuxaDhuKJpbxbZu1vjlwwnvvOHDgD8pd76u2wp%2FbdAOIdHLC%2BrW5jm2ah9Wwa6fSv6VFSqWB%2BsDQIS%2Byx4HY0T0DQz%2B%2F08xBVFkFXbciPSKZsns1bZGWmy&X-Amz-Signature=44d53fc416a389addb9084bd9b61f9694aa8ba615be82c2d0c04a6dddb01c5d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
