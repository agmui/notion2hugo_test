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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EM6I6BG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BA8Z36FIQrUMMhh3bcZUj%2FI5hb8vkOZ4bBda36U3eRAiAsmtuIX3W3dLVpX9FHjlDkGvyIJGecDS1LDmWivwg00yqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ogUjy%2FLXkRDK9eKtwDuiegXCCujeFR9fuBULDN35wo2UsnyGu7uA%2FpUwnf9qmJ41p5ZBGQ3wuStN7O3WQiTUTB3rNm%2BezZmFhXXFVZCF93Dz%2FxGtLNbWb4%2FmAtaRE7BZsaInc%2Bi3pvd71gJrvHD1eBi0Lufxq4UAx7DBsikd%2FVM4MxgkfKloFER0BKZtZNxVPtb%2FX6ysSZDZ5ADUILIhkh%2BuAghRMCa6MVasv9mfe2CiC%2Ff7HyaTIxpP0R%2BzdETPwbPajx057dFTUF4xyCHnOxNDQCD6OUnzRrAEDwkdWvdrVlwxt9T198kAZIZLHt6lGQh0SRTEZerwJlm5Po5nLFOLlxJ5Rjmlvwj9VOvinVQ6YMUb4qNndapKrjLBHKLjItvkA83Ir2tJVtrb6CosG5hubZfA36s4lTEB0EZud0BXAtQtqbrAjuZV7gzuf8grvP7wKf8Vb%2BzixjznTKJ1LFeNpfUrNN%2BR0aUAz9KlcUMf70qYb5b6hPp%2BmhDTq26U9eUvkZA%2Fh3DXGq%2FrmgijAmssmyA0N8rSQnEtAZDI908%2BYkF8UjxSuulKxGZqY7kKNcIJDL8NAf%2BnA%2BgH7pjD9MFdRSihnd0L8NoyfexFnUX4%2BL62uq8zAIE%2BT%2FU2TD10XP6OCyWLSbXfMw48itwQY6pgHUtRE%2BVRIvXcNXn2uyUsng%2BXbkf2y0yUICIO5ixF93KLZYHWJDDVphpt7RB%2FqpyTVYhB3Ck1YiAO7hKma6VroR%2BGEHlTeugZJeI7FZznYDlre9Q83KBmwPsGnjet9xJSNkIYrBaA5haLRlKuYUzCUq4WsXldBicqvl%2B%2FJ2TP6qy74Hj%2BtHYTT%2FEdsPyCm7cVuLJbBTbnXsi8nBLq4fvts9zOeYbC1%2B&X-Amz-Signature=5e98b4f53d61e11db484026fc95f2749e6f8d52fc1bbf5eacae7f76326215a11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G2BLMND%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNBJXitumH2zeyY9nIR8r7awpxRurhhov8B7AuT7kUbgIgc4b6gKIC28gJ0oYozHKwpxufmhN8aC1Mt32pR9oW4HsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxxX0NeB83B7LZ3YCrcA5GWfhv15XfAC5%2BjE2kBnMRUE%2Bo2VShZuSbm0Y5LYnhLr3Shz3oUpc5%2BOkQ5mPp4Z%2FzoKeq38ElCW5SJv53txbuYaAUiIogpDu3SDM5QDKkEzS9nRcukYpvyydGXVzEwFMAhdPDmr%2Fi85GgLDkapkvjEs0qO2XB%2FufWFNI%2BY2Aa5Zv3EHDkIIRNspOeccLA3i44OlazgDuDJcVinQDkC%2BSfl%2BNwJNEXQjNVD9gGqvZ8H%2FEU1vuVWFBtQaBsL5uYzJjF3r4G%2F1uGB3lRcnWDDqTkzzXTXG7HVbNfB%2FPiJ4XHHqa8LraZRR%2BnRhhYG08sFMwRtlj1NoyjsitmUDWEkcdnzAbP0Db%2FcUJw3A8MHa58B3BmRk9vKQxdjJM1iUOhO1bjzQP7BZZxHPp0KBmGdOerv%2FuKCvYmH7XJyDb7B1dIZ4Bmg8ANzksb7JRdsfuUiQq4P95C%2F1lOidxkJmvecpUAMU4rrYKf7UFXsp5ZXFGqpK76kmYqASCL8%2F4YD1xyFzlNfNYGcRRrp4il4oTN8iVdWhj1eU2gAIk2ndZSz8%2BLAfckteZ6%2FhcFBDfPlS34yFnwpqXap32ROrPwVnKRlOb%2FAnzhIEoRk9RIOU3MgLyoiUO1RLpHcLDqb84%2BlMPPIrcEGOqUB15Fq%2BUZIYBGfTHxqPQUxAOGfDDgBFIb7OEJ%2BrZN6%2FFwwEqFBHqGMWFOfKrjZU1hM90mgxV3OTGEioF8Iab%2Fqv1Qbt%2FKyKE19TpSdlW7r7ZNAc5Xq72DHSLfxw86COj4U5mvhqWU%2FA51Gx1xYbMjtfmHq3OxJh4GSjXq9Qj0TlYOmY7SlaWuRzGja90ARY%2BIVC2H1czPdU2WW09%2BwcH69CmGiXj5n&X-Amz-Signature=bc2bcba7713f77b72a6d60662fcda26810849e3adb2721180ebc79d9d85d34f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
