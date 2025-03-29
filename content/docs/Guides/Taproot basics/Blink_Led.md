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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHHVVGBD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIDPWSzQbisHwMNGSsU8uvY1J0Lp8a4zBhp6Jne0Pe8GSAiEA6RoBb%2F2PYsU6HrARQ%2BEhePs2GbuGOG%2FmCdAh98yODlMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIQdCYjl697EDF34CircA%2B1yypDi6Uz2cdPXXceJ%2Blpf0%2FJJJf7yrs4ZOum%2By%2BgXcX7FgmZp4G4VkT%2FzZuU3%2FglD7%2BGaFUTKPZZTc3RLuh5p%2FoSTaspRPken9NiCfZiHPE6fYCeHeWNWGXkDZJyOVkdeoAh9vAadS6%2BtJzxcaBd8AnxBRMHrWFSM9vkAVGmDW%2B2T0pLKMK91jdebP7AxtGh2szM8XW%2Bo%2BqHT8abSsGAhxIE8Del82OcOzQiERJbzdkzuDpR7pVZdpgKuHe2TMEI3TUA5WQm4x%2B9B3ZQRI5ux0lOQUAJsGCKJJBDil4jegNZ5d0tGZg%2BLnoNyd1gvPbwAhWCVXbNxryHX3Q45oQmmgsQwbkGo5O1O7g3KrkSx1dMY2sVwZCQ%2F%2Fiqp32iVIj42c30WiPxZfUuW22z7g8jXrL%2BtIGaOeM%2BmKFer3eeUpPSqUvHPA3sLqtIRe5mYtU%2BD4%2FHGVVNqU8yq63Le%2B0cfMaZfbMMlAUJsGssxuNqFvxgKBlgTOUvRigmINgt1C70CBg%2F84%2Fwg7JonDTmBDCKNch%2BBNcrqhfgmrilqPN0fsdgJS4Y1nY1q6KwNegW6JB85ykq%2FVn0ktltG5vNfvVpHLNpXrB4QxtPAASvWW9AWJhI2x2Ag%2Fg4mlsbPMNXwoL8GOqUBCmzuD87K%2BgmaU5wSfVihgaiJkBQ4FqgUpjbmqTWEUkUH57wRC87QafHTbYhfPoeFSIkRphT2w8yJwbUIacTbeLm2UTI0lUs2v5d8t0O7HCjk6jPBT4Xj2FL2n1BuZ5c6DzGkUdo1nD%2Ffkq9%2FbRjkwKOlIyV6sQuxNtTqKJ2VoDX6vpjqVGj6Z%2BMQ%2B5Z3Ir6R%2BZ3IQ5DDkkXWvECUIlw8nMP%2FLqlW&X-Amz-Signature=df0e025286a6eebfa16f152e6231625294c863eeecb9c3d1502ae70fd818d6af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZPTFVUG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIDFNO1Y1dUrjyaVxEdOu1bR65soWzWxTiWaRHgLVySVhAiEApakBpm1LfCMuE521cShUWDMdtbPY03JIJEwCiCWYw%2FMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNVUirJwWFvwxDunICrcA%2B7HnGGXMl4OeA3rsHXlxiT%2FDHg3CCcMPu1XoDMyROmnujE8P7A7Fv1lYC5z7zUdOaBHdZudZn2ig1xaG5EAF13qhiMDuU321qbLdchx4n009y3Ic0IRu1oWNUF0B0U%2BUd8led%2FaRlaYusVVUFD8iIQG405OZM4r2Sh3iBLx2MOiKP9ygeTZD6nGfs33PTjxhYTOg8xWxoVNKv9b1aHnOrPhEh26vfP29KrwDztG1E9SXVMLXwdfFA8QLxEvmn1QWLt4G%2BoXKM44XGYuNu2lDF3H0GV%2BGgo7nLiIbmmtedNETLywZwkn%2Bams4ag42nl%2BFSMAcFb1kC0Bzf0MtmtajYMFNqF%2FZzKYeg%2Boo9wIcoLmyGRhRlovqMrt0OgPsRE68sp3FHBYHmqWllc3JHqEWf3gu8xc4iJcUt2lGjpMWEO6SEvtcDhsr7%2BdraBjA5IDut5R1LjFEd7g3hdDQ2Y%2Bj1TTbAlVVfGPsbNhvKW%2FU9Sfx%2Fvhqq8giS081moAIcJ2UCI9B%2FEgCuDBM15PLd87U8jVQqESURbpPuQbQcQZKH3%2B8H7%2FIy4SRD4mnmyBM4Mb%2BK3VGOoA6LXhg7FaPussEWJvWZz4GJHMqhAUgQyybXfuOxyR307MeNk60T2aMJzyoL8GOqUBD2O64vibu7ucHGYlHZtS818nkHgJt%2B2wYaD5D8Ptq2LJh21oCurrTCWi6GaYsj7W34wAEhACBS6PX8CbxMp8Add0Yv%2B5hem1hGgxqdELFhKMF57sPHD3DLISOP9LGobHGoRtS%2FU1ggBoJleQgp%2BAzA93cWUq%2F3SIwuC6YunQWko48fqb%2Fhjh5JP60zZTfv3M%2BEUn5%2BLPv3zqGPratBkMECVC3p5%2B&X-Amz-Signature=cdabe81d4dd46de11cc70d9e4ed4c6969a55ab399f652b36254e443511a0dbdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
