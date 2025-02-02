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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RXN72H%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaF9kxAcrQsox%2Fmxyq5ZidY3rX%2F2wSbx3aP9N9KOC7QAIhAOK28H1PRQQ0jCPOu%2FwL9b%2F7VOT1EoaH4UV6WyTZo1wNKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMvZxyrkq3ouR8BCAq3AN9LH78%2FoLFgPhzMAmw44yNPguSQUSnsEcNOT51U0OzFyncOh1yb%2B3o4MTCem4YBMZrGdkbdHadgzEw9sCN89KFadU9N8E5BwxabX4ICio7ZuRrPgIEsMkmtBzDKhcq8TEoO%2FfgQ%2B2rIsyKq3FXsZGBzAidb3wuTCO5cM9WZGGjL2l4%2BNAxagfhsBVzPCEU1hKTl3YB9yVyXuZUYQCZRcaWESB9uLMIHCS39RH%2FrMLfKs3cTlLmqFfSXK9u%2BSUW2zvwVeokRrdDG0bpC8p3c%2BTVc%2BJomhVKfIsA1SuWQcK8d%2BrPdnhvsfFZ4SROjfmKTZFzydwdBHxgj%2B2mgdUwUxG3Dzz4LXQPbNTM5NAcSeWDYNZiAwrCS1A0%2FjoXUS28DHaUtPt5eh4F%2BFMsdgqJsqF7cJzKoaVKxXS7%2BtsAZm7E0TVD10rygLb%2BwkzA4g%2BUnysL2aG0WMkfx6TjwtLct%2FU%2B8fuamKLgwrpRBPSre9qtOAhh%2BgcgmOGRHpOSdgwwaLCqswV2AdzIQyF50KuxK%2FPw49aS078m1imKLFvkbsZEA6bGFNX89n8R772kyChqQc5f51Ykr2x%2FODlhJwRIgbhZGh2s5X4k%2BOBSHFM%2B2zGXaMeNgsr1jKLcnFoiEjCI3v68BjqkASHLYnD7Qagcg8x5n6MNTxx4pN1zSjrpS6S4%2FGZAtFHwjzIXISUplm%2FREY3r0m%2B5NMgQBXg1cijwxjqgTFi9ts3BEsANGALktoJKpFTfb%2FGk2%2Bxg0W7ryzX0apeNXYoaQvBK2vPlyHS7JLvD57Rsci0c5HVJTPVQhUJUuKIYXP5HGLlnhe3Uxs2DOffID1Xm%2B0LJUG91EE31sV49RPUcTir7opG%2B&X-Amz-Signature=649ee08b07c41769da692ca72eea757a79adc72346b6cce92c37a1c769691cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RXHUAVT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSU9Z9thQzMVPN3eDzYjVCIuhnZTAjQusFSgm2aiBUZAiBBSQfrbhSwbdB8VzOblLrzfq7wA4xUqAtxETKSyEqR0iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0GPny0ICgUX0wkEoKtwDwSoIi2%2F%2Bae3pJxdczlVyElXG51vLKn8yW0C913lctu6vZK%2BSRVkxskyKYQmkgZSnf0haBd1HSWPR9jcl5hFP4I6hMo9UFYw%2Bza0NGs6%2BmrQrk3I2F9GeEHJUkZg5UlZZm7NCKp26h%2BML03mgaEt1xrjul%2Fq8N1Fpjq0FZN2hDkg3nUZ23q6N665WdDmDNfqk5ZeC64n9TUtdr5dTqoIPAcy0YGD0HQ3Wpfuu%2FKBP%2FaX3edGtNNdtcpS009%2FxwXgT1edxVVCWShqASkY15eAh%2FTazxylfW%2B6ItpnAjUZFWHrTi%2BQ4OAI9atTgCdmoLwRDIbOnX2bquJIj0CDfF9ESOPAnXx3773ZUQKIn4vmomcr%2Fmu9q1NPGQIBxyjPnlq18kDt%2F8%2BYeG2%2BTlBByHV30wjZB4RWnuPT5NfHfpUg9l5q0O%2F618y2vYuLtD6fBpcn2sQk6R3IygxQ17PWWhJgp8igdS8RcrmZGSRnC%2BXqpdk2I%2FQLesQ4gX5W9%2FfPlRWiQk%2BNGXjfwT0AfKp%2BZqgXdhYbmJypbtVeLF4vj9yOlb1OZK1c1wokEskhNdX2q7EwJDvcCPwSndkz4tsbVJY%2FY2soOwI%2B8YqtxN13IAyycouEjBzM4ZyBxVtP2lgYw9d3%2BvAY6pgF%2BjjHSlsHnp0CCEiS2LF3ugRQQcrN35BTIC%2BEyYvnM3zcaaJf4HWOFts5bdOjZV9vhRqht%2FQ4uwxUWLBYhHhdtko112zyviDF6ZoVXtz78jGBJNt9gSaPoSYkPac9enh%2BGcinM%2Fujh8KxRA%2FVBUHeKCuHdLds6t0VRrhICu%2BrVnHnSFXQtzfr%2BwBSorgwxZbofabUV3i%2Foas8eP6WGgY7vGd2hCl2D&X-Amz-Signature=21ee303294cc492da5b7d0bb718830ae170ba55c2993598179e7e0c9b7ad91fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
