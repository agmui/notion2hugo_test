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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW62RGA3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIB%2F6dqzT2VpEHEoRWXMo9agnxc5zUeVJ6g%2FIlDmDgBq1AiBqaNgYLuQuGeAOsEE5ueNNVZzPXOQ7vjWA4m%2BuRckS5Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMjnUn13BeMQHGP%2Bf5KtwDThCfxuQgTXXtPPJoysMwbeiaalqoH1W3tO2L54nI%2B0l%2Fmrk73k4dwQpoWERqn8HGgXAd0C3N55uOQxpgBep7mO2861pdrn9Tl8CyEyXsFuYafodqOv4ZUDQD1w968CUJ4ivJWTKF%2FoTMfApdZLcwfhArGMO15VdFQq3R6tHAUFGWiHIq6F5MO9HL2zQKg%2BRFMUyy04KKTqGIR6rnzcYTYpDhAjpVngstWcStq%2Frj6qU0hFrqL4LAf5GI%2FoqF5e2f1WKLVB8h%2FNUIusKBsPlm6F6rlbQMNrpyJXrUstDmVV8SyTSNYujYl8O24TqflToPKO3Eh9i%2BZDMHr23kQkXaApptTWHjDpV6neQf9TU0eWMwbdqYDE1H%2B%2FG8B9RDXY7W4EoAfNp5Sz0fC23VF32LgXElcET1zAwte%2FbxaK8SnKmxNEcnA57IVvbUBVC88e%2F9RvcjSn0zyAdcLR4qw2gp90Vaflksk7cP85LFkbat67GlMmRpSfmL7SSDYnXu%2FHvRQtlJGZGVUpoAD2soMZdY5TGgMSOI1qAwcNexSnI0sH9ptMKDNhYlr%2B3jNmgLvxyxXK%2FyWBfC63%2FahN4WHpQac%2FZySW%2BNbbosDcy91hzRevyk1aADXBLMgGunqPkwmoyvwwY6pgEU1Hxknob%2BP7uEB6lhwN8mgejQlhTbc0%2BllPyWEaMi2JbDjDwp4Ja%2BvrCBampqTTOjF%2B4Np5y1aeygIaukpaVTJK8kUT2YTCT4Du1bvFCW7oWu6ZtgPbiA7pg2CSsvUJWCia1gOT3bXbdUUl3daL8H2pAahzkyzFfyKHDpXSe%2FXSD33r7thLiN9Wernho0ofJPfgK0Njl4P%2FlQMBpGoCGuVy43hgMR&X-Amz-Signature=79129ec6925ed25cd915ef1b555540b65eeb56f2d50b7c92ff583dd64fc73b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OK72FXO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDBf%2BRuKRrqnuH535K4NrC%2FWyA2L20PIioJqI3wiJOuiQIgNINLRV%2Foy%2Flb0d93mjdDXfQv51nk8r2vQjM23nT3dr0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJY%2Fera6hTDA92ZcXSrcA0IX0wAVLttBQfUqCupO0u1jnbLTXfGwY%2BCHgu3XXKbP6AG9NGCZNK1scavEHs6cu6OMBbeKgdZ2p%2BzWSu7v%2FLiy8RKIL3mie4HOdd31mxLtQRsxKsbGaVM4I4zPHnucakbcUxTMd2CfYx7p4HuPo5HJOnOPPlgJtP9AmDXjZk2gC7%2BiSPFHqS9de9TAFD46WDZsl9iZOgiBGJ4E69kZyjI%2BBtGCEaIMZLQMLSEPqQvRw%2B4N3qBUe88iBN9Rwh%2BLw6x95NxjtYyygbXfXsjHN%2BqOHBsejT1kcROn0lKtM1UJU1MvSfYj3khDqB5scc8WASpHFI%2BZ%2BjH%2FGj1Ghz6zO2j2SaYorDNLaPR0HseQtPs%2BswIPO3Ktr3ZRt%2Bcr9WxokL1WLlSIBpKe%2BSkKK6fDERm699zB%2BgGj2E4PnBrCZy%2Fj1Zfh1Lbp4W4K2lqRseSR5Ow2qpTvoHUXfzFIgCmJ2ey0%2BOBy9XOmBuPQQuq292S0j9JWYC28bm3RAAexlEnv%2FbBENeUcXT0RxyLNzXCP3KAnCffzyhdfhkF7vMOY3VEaNknzqm7yzxeEj%2Ft6x2uYh0CTMJDrfOTywtl0DX77Sg5wrHBKkdKjhepC6ZWa0%2FtiWd0vUx%2FZ7ORyFJs7MNOLr8MGOqUBVt%2FyD9TCpJf3Dw7bNhOoGRnRAKlCIipsn%2BpJY%2BBr%2FPuIDvVX5xslPTlOzddwYFmpfXjib0538s0BCDDdQxlF42KIfJpf8JFjIEKHiQ0TlI02b0zS2G6hbK%2FotAl%2BBbdnoBjjKbBN%2B2tA%2FoIruks3GtuEvEAIjMg4IaJmKZwKV55Tq1eS0YPTIutW0vzawA1NFCX0RikQnJ3lx5zN2PXcQPLf2jMY&X-Amz-Signature=e09c77d41cb82eb2407dade272d61eba0e144e5e729bc9b843e773ae2f8d9ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
