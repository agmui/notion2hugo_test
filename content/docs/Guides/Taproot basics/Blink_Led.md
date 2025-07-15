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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWY4E4K5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHj0%2FzH85VW1jDsX9198bnk88gxmF4rRHDaxuwq6%2FUiFAiBaWyQfl2hWH7V%2FC%2FjqgE2kyo7280D0Oa5zl3dtKDPyHyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMJWKi3kHkaFWFsaueKtwDT7SoKPaG9YgZX7mKRGz9hM%2BqFwneegVRJSZerKCSYH2Fg2NRGkGB3g33hnYuXYB43cS5FxU3Kp5x7aYghGTRwotqIJs9sOgPvV96Dgo31sfeo2k8yJPXaYhX2Hy%2F15nhkb0AExFFc8AwMaX%2B2n6PeRkn00H%2F8n36Q0WwgonHXSwYjccwmxoE2QC63OrPjq%2FVNY6GZfFNGX77EeZdUXgKvmv5v21AQPDUdysvhYMEPq9Kbiebztv4shNJZbxbCYw1VsIkHzMqSXEeEZ0L7%2FAUbDbqRGqSEFbwwFaP9cUu7ixDolEYkS6%2BqWXqweNESDq6XW7eC3pE6JxbmMcXMMznfdhO%2Fq9nU7Vpkb6Gyq9ARR0Nj3NmBUI5wx5HQ%2B6w37yv5Gne0%2FrsKPRL1SBHK70HNzjSz8FiTZSzCB6b3pa3B0VgqivUOHSy4vlzViVFlbuEj4Q6RR8JSyZTZ%2Fl%2BFZyEscceWfRLSRWbGnYxWlK%2F29iI8%2FDMxoE4Df%2Fg081cuhAj%2FDA09JoTX%2FClG70AqtTec%2B2nFLrfkTQVCApWV04HzboypzL0tQt%2BQRkVLaaOExTEQAU5UnTnbZ%2FX2BKQzVVOexzCv5Sr7JRIIr3Y8BaQ8juoAvD9weLOFWH12qQw%2FIXawwY6pgFgcNEI1r3Ia2qA4rmbtKSgSkUFLO%2BMmI4ubJAFDFuqL0xZueiVO0QjD5tdDfITyaOyKr16RHAACRWWsqFP%2BhX0KWdTCG8%2BjGHGYsPnL3v792L5SIblPNWmYl4Twd43G1SzNbJ7X342rGPswO2mUtyeDbYA41HBUXP5csfwhUnJaei6dD1aNkKNcRlyjt7TDzAdCQ51T%2BLP8%2Fir5uSmuMqmuf4%2Ba1us&X-Amz-Signature=1803a7881154e6ea4f84fdd5e47aa86db30bbf5840d82686dc959a784e0cd9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUO3W3EC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCk2fZ%2FOFsvLd4MAFxb5dk5ykvYH1Er4VVtDVv32Io3AwIgcvrRXPoSXq8MzW1bmtIlwyE6QRwilKBWWFDhIjixYWAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBf%2B0vou4v6TdoCOySrcA%2FetccdHNFkKM5a22MtWNqWI%2FvGhDM2hE8sdUvjLou1TaXCHLYpUtpL3LX68rShx3sf%2BREnhTn4R2oxU4x41CoRZsYdOI4zfonikfbcAdM8V1AQf1DGYiCn5x6dQlOQNIp0Mz6U1mz6VCvaEXxExpmjP7HQUnMe%2Bupv3SltqinCgfyaJHsczHzSe9i6A9SYqHkBVTGP4uUFu%2FAqll6ST8AjfdAZvlrJGSQ3AXzvzWewhwyH5JfuenA2xl9hwkHnFUtE5bbFCmEuY5Gepln%2BgNW1XUreXgy6Ov9gy1C5HHmTJvuRoNXqJKla6g9nOEvlFCIFHCbskAEV7gwmFpt0wMxy%2F5mHs3XRd4P70oD5ToatEI6VWdvZHfi0aG7W8xpr9JcR9OgCDyJypfsNB5sFlJfKxmcaSyKh%2BXFGhNvBDigEFi04kbkB44UhO%2BIQWe%2Fg9rQsi6jVJWEZYmd%2BcvkoHlpJCP5oyw2FxAymQyrGahBF66tJLtb9QpPjL9Yo6qMdT9paWCWqCWp1enVT09snqKv0a9gaxi6nTh6hUnVSPEgIoiwH%2Ba1Cw%2FiwPx8nuLsZwZKJOpL4l1jIhXoCNIQqHmjSUuuouKz6QE6XapUGCnuit49qnlVIckWYzti1HMK%2BG2sMGOqUBZXJwqq5itCnbLA3U1rYZvZkP7keW1lG2yo4WD3rXwBuvNCX%2B%2FsaVQFQTUK3O9x1hWWmwf1Gzrb8ul2EMYrdcgVDSKRd%2BJfNZgbNQVZHWDSaUaZ%2BEfZUyGNkCpzgtdcoIWBMiV%2BQCGbZ2BdasBW9D59O8CM%2BXY4MXIq4kuCUamHG7rfgT1hi1DSnk4GVxEFtxjNVG95ZJ9vb4tVpQuCkLRm%2F%2FVFay&X-Amz-Signature=de5b19fa9f708652d2fabf05366b0c0f83825b38f07ef71665bc262f3fcbc543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
