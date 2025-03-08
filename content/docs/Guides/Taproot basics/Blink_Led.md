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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBIBRKC5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFQ%2Bj5K%2FJ%2F5HUitdaql%2F1KZ%2B1dvdpeKxizJbtgCRmUoNAiEA%2Bm00PD680%2FhntVTSvnghIaORH1gdX1rINGt7nvg0UwIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHs1Sf22NBYReg1DnircA4Xwc%2FVuiXchyBRNzdJfbGr1rWQBp8vacjIhPNEStV1kQTZtmQV6TeRIjsRlyymrb6PqwKsjS2496s%2Bhv4rtz7EGRvNUCXeB3oITlIFEL9YMauvTHtfxUL4Qpf1T6U%2Bf0rcPaZh9%2FDKx8Ungzv%2B%2FDtoD3kQQYUgZqBe1J0KDGeqXRFtnv%2B54thjW0CGxEUzbmYoNkqy3IAi1risJNIDU7OuhS0s5ey%2FdwppAQEWoc8rSCHjPRuL1VNC7cTvDxeFtJqvkf5xyyuOpWfLxKR%2F0eImwW4TJd7wou%2F41gifkvw7XeyHSU9oFQv1mthnKLMF9RYyc5NRtfDFTCR0qa2ymehttp9lG1zzp3i6nBwbU%2B%2FZP3F6htRLU8rrtPe5t9XNtrAYXnjklz2Q1hiExsN7jdrXq1mzzG35P2lJBkFl9jsy1ogm7FiM2MgkkFB40Tgm0WSZ2VpTgN7dr%2FL1vj3up4WQV3oT6r5sJo1cCJrNUpw9nNmRJkfBnEHxeKU6C24BcuY2HCX%2FKnw%2BSOAey9fiA7Rhi1k%2B2k98uokFHRlxtPijUUOU0PZokmPlW9YZ9r4EHSCm5GDsduIPAVp4HH5Py1VsWwXRHwUEaIUsjAI%2BuYHovzlxWZT%2BAHlUc7RaMMLq9rr4GOqUBWN3nKqOHs7g4HHHUOojTiZKEpFwMwIkKByNPT6YQrYmc17UBQjAiLAh2HADslwgX7LGUOQhPAYkr%2BrzShFoqpt4BFcNX6s1qMV1iPNwMVcz%2BHrj6KPdunNX335pg6Qej9JE%2F1WZhIsHHNwTSadDc0rr1sF3%2BtgFQrxT8DfNrCdue8AIZcV8U0nWaeNnSIBB7dq%2BWuyRWh7oZp5SOh8poaYMDZMPj&X-Amz-Signature=570fe85654395af05ff653b2150bfc953288ce00dab47259f6db21aac98e27ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YKESAVX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCA8oBqRXZNOfAj8iZMsLwnBBNP30%2FKFjYSxVuzAr8SAQIgHtxuUDooX15pgz1PYFOG7Q9MIc0vqlQW6j%2FsZ0HIEIoq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJGtrTrn9s2tCau1sCrcA8z1DySIMsJjqZOLWD9FzzEvqlMZ8547Ptnu%2FGN6%2BPCfgHabOu1lxkg8E69wDfvcMgzCDssLWj5OQ2Bt1wVw%2Fl8yKaTH0z%2FXmxfr%2FUKSU510b6SfQEtEthtUnWYBB178cvXztfmDYDWIjzBeF%2BexIb5fuU%2B7zpaFTnFpgqNdSBxndK1QWgyTFGLTw38nDDbpk6sa7XCbzPDrdDnJ5yMfO2ijXzpvEaq%2FcGDwZ3JGhPguZ7vG9weE23YBnUgkQnoCctAM85gp02lLAJE8mRhRV%2BygnXjqsSKqsKy0Gsw%2F6xwp26ySlM0rEV1hKGAUnR25Z9yArjdyM0A1gODLI2jvgQTsZA9YBemt9VGUhUVwrwnQ%2B9wxgBuc0w2a5iM2Y3a4FwUc1SIyacFIpYqFs%2Bxg9TPcfbVw4VFmu8xVKw9WiDSdy533RsRLqR7b61qtxkF0YSo4dveZsIOFos7Y%2FatIESr%2BHF6P6oQS5tWoYKgNdjZjRZiCBwS4IyPHVJo6HYY1l9XxhDxHF02nRQfgA2e%2B%2F%2BspA1vZhafAhdGf%2B%2BH4oROJLzkohr%2BY5QEOTJYqjIDsUpYDxTLQjDyP2ZKKFE9V4ewFXXbNr2x1TMQNg1Wxw8iDN1dA41IdAR8p2R17MLq9rr4GOqUB2pXTf2zoNW%2BKhan99o1r15nTmwt6N%2F4NVl6ZCQc1mJIA0up27vJ%2BEo%2BgJY1Q5uwYTXPL%2FlyNNVvmHSlGkZJJg%2F9dgMU5f%2FVR%2F15G0AEGH3k4eJnQ2n70Ep2loFuIbPfTBNPXhm1RVUatD0m9U8Q8Dlw%2B8Bx9MPFGc9UxgTYeNRTPqCFPcyou9Kwx%2BfGunvEYIGuqsu6SVOqDQrC3LowUG6HmH8%2B4&X-Amz-Signature=1dccbf8f81be05fdf0502991bec56a56f1cd28f0ee6802d423c19ffd62116189&X-Amz-SignedHeaders=host&x-id=GetObject)

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
