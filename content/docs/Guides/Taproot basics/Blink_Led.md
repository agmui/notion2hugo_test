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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKPAPPA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8SQQOguPPfPsVFTAJ93u2X1sghapeyk0KVWHf%2Bg%2FEOAiEA1MTfPVrxXowziVsVSStLAHsYxOwRV8AiRdtrCU0P3n8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FmUvOVELIWohUV%2BCrcA3AE06bkslVqD5KnF%2Fq5%2FZxb8PqjcGZWfDV%2BSt%2FQKNNN%2FN3idXMx6Fy2dvNgpJgfwn%2FwiEqhgJLQAAgJKq6EtiAzClA438uz0sv%2FFrV%2F%2B5sfPaqtlKqICJl2D%2Bx2b05MvDwugK8%2FV9vbZdFkD6Ulj%2FoyQ0vAD3AHnMmtHQANegWkSaDuRZHxdWcp4CXTzJHtHO3Zp6476oYPDWaLfjVFSEZTQOu0cVBmvkAQnhJWo2Bayi%2BRrUfpaaQWXGfl8%2FQJqy%2BGEYMbHOixOvk0C0T75rlVyqPRJDnYINV23U31A5Aj61X0HLAefuEXEZiG1pdlJDa4k9RLFYBuan2YGWE6JmeRi%2F1TGZhrVnOVovdcp2JYSbHJ%2Ft8XanPX6lg4Lvb9dEVPDg%2FeT9HDgM0EZa7mRnB3iEsDWjE7k5PccQmDATw7%2F000Xt6X9ewy4NJJK06LIc%2B1Tvkkz%2FzuiP5Ub%2FzUDvaRo%2Buchy4TaDgt6IRoANYaWPtKkgTEqXvh8PSAPjuvDm9iaVy4rA8%2BtV489uK3aM9hME4QTwUjwLhWbRhVOzqi6aYfeaAEVtjkW09WQ4hNVhGcY%2BEjpC%2BuNbkKOG29ntJ%2B33%2BMhBiGQ6grWvXSqFV%2FBPWF3DLhT1JSrHSLMOentMMGOqUBqFpVP7cRJxCRCAyFxe83wRQRaBAnUw9zvZdajrdLYHhGTSrE6j6SDmDZOyx3TREn6MGBsJJvtq3yCEKkJ0SDPHjnn%2FqMCQ76Ypnayemz8Gnw2gccxecAegkBDd2I59iG%2FJnI%2FYtKXfCrWqVMzBeOsQrn2WJrT%2FR%2Fhm22QLdBBMFgAf7wU5Xt0jZ45y9Q31B9zvxmo%2Bw3QOuajiZRhpBTd8jMMnMF&X-Amz-Signature=a70296219df259466778e9dca548ecfa958ffe87f73867569aa2df138c8783d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2S3VRS6%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC12FJk9fPo8wVWnIqJGbikFbSyEUv0HqtXr07ji1NnVAIgCNZrlJMx02mPKm9H7SWjO8pB7W8HTDquOAn4Gvk9PykqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUhI1kOjDG3Tr9YoCrcA1u83a%2BUZkjAKJlUEy5VXqslE%2FVAa%2FFmCWoM3mO3Iv%2F8%2BdExLgd3xsJjYDXqXNEsynmnim%2FA1kx%2B9%2BDYu0InAG0G8G6FuUdsC7LA9suJ6fdxqLWPM60okqHhvT8RgAd%2Bg2yTR86mPb%2BiAZrL1Ed5jxwxU0SVEYyGyklMhhIdnpUbZx0Rahj4p6nqT5M7rxEWKSaZZQdyc4hTgUqpyzYXRjiXXg%2F3WsxlCS1%2BzbWIA2YRkvICu40Naf%2FdnjcbiWPTCBRJpEcaVFh1h%2F%2B8Ax5%2FBYs7YH%2B2BsYO7zUf6GPDGsVTevqNC3jiKAQX7UwoXUcQ%2BKZ85k7kc47B4ijy7LXpfskBRaCtnDYCUHA5sraF5I%2FwTIGAUIdHUinsYLpzU%2Bf%2FQPQKGKJ%2B%2BQnzSs%2B7FgMu3U0U5BU05J9mq62h2d%2BsMsDbkZq%2ByYzeMLZ%2F5YwxVP8xOgPNWqKFvJD84d7yjJ6xNySuhvYG603M%2F3NXfRUrfVYpGd9fz2msgCPHpY7mRiFsw%2FK2M8hn%2FhiaDUdxFUIWQOGKiUCxEkYpgMi%2BYWIyKiEv%2B1VY2d9FuRZyHBGhm5aEUHvuUbCQsZocXu1v0y%2BmLg76RnPXJOuPQJjX4ijgvwvULH8KCfPaqdsVc8yMMLemtMMGOqUBHbMpLyYktPCuHArCvLwxkw7eehMtnEkZCyJnRi5K5Zu02OBqGmU2rbN5yatotn6qXyZ6vl1tX%2Fu9fWsZSUMOH%2Fcq08iyxz0CFrH7Z9BksJQO6479uv1BGBq5yJkbv8aQ2v6Z8AqfGWc9ExQBsKd91R0fHD0Vh%2FAyjCpKJBpxSyJXQaDPhWUYJpql9dgsoC6WiC0glV9YTYJF6u184ygcxEQfohn9&X-Amz-Signature=fb1b2ded55bbbf2915ce0fac3f86adc02ed44f1ce309198ad5ec216b28a2a0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
