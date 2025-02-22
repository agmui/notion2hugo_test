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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z44JDRC5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDaxor4%2BVmaUgfPT3KmqbdULS0oKsa2PmAYDWpcGfSzgIhANs%2BTzaPSLyX3xZw9vIURjopo9QIVqNYgJGITDPfKrnkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI%2BtB181P%2BWGeVRCgq3ANNnjMjbFn35A4OzQJJXrHRo%2F%2FfsBEZIcmsXFa9w9sOahgxkCgQq5zJ2%2BVDxxA2RrFStdQlWElod2GOqHS6Fa%2FcQEL85tYTOrsYwiTjqRwLLZafGJuqccEUASb9pguUzIYKxPTrqQ%2BH9bkBD7%2Fh1L7joodHfMAO0WItad48V0CLSdd2KmGJ7gyvF%2BmSPkojJX%2BgRaH7r6ZVF0zCYB0OJIE9gdiZ2MNjaEopBGWsg8tghgkA4QRzhNO3aX4pRwZo95iyNpM5K1ZceT2kXAzQhYko0PQs5QN7vQIrAjLu2jV8vo22HmKsKhQG%2Fku1QCuRmWom1FZHxGgXNnNhd9ye4MYXm57bFj04h7DFp6XxvK7%2FRBJLeEfdIG6gotliZzwWCHNmFukGz%2B0BK2%2FX5%2BnIDKdmyfyjO0mztTnmiLGc4F7ZlVWUkKJTC6auIjR1FiSCzhm1N8tgJxOSj2TNOBmHzH9E%2FRAvn9b%2FSoXH6zMLrDlGzSHGRvfTLdq%2FSZ9bSAhga0tbRMd4s5HCudJdt74VpsnQayN%2B0fkdQXSkBPIZnKV6%2BPkMxj1TDyS5kxRZFAoz8%2FqOSrRSUpYrJoQ6tjvaM2hHvQMbyUAmOoaADJlyduIlruXV6ffnr%2F9j4%2BHX3zDJseS9BjqkAQUJw2TjApjYBa6oJa1BoFWXhL2er7PkH6LEPQbSSsc%2FxC2WSr%2BcJI3zyZBKx2QT0EmbjaQ2mlXq7QMxT5%2BBpOro2OdlBDZ%2FHK5yx02UFHpP4OLdSiMaXuOLgNrXUNNGLc1ABm52qn8n2SGZq2G9RT9Gm2G0S93ddbh8F9HstKrDqp0yjT1vTEpB0ghBXRl22cvAEXUzvTpDaRTmTN5vThY2%2FxhQ&X-Amz-Signature=0a6df2c9ca5588294ec881b83f764b93e6f6378a77967e5e744a80023f95555d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R734O25%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIOyBBlCMvN7hO3CDZCduPpd5uo51SVDcYXvPP%2FxlVOwIgEMtQ2sUl35vtnoKOVdpHFokTe7dije2Q07tbA56T2usqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdiSg2Z8LH1UuOIPyrcA%2Fke67DJUtaXuF2iLLOXXaJ3RtgFbMzXJ4TO63oLb2Cq%2BkmhJhZyUxj1gvCjR60Vxqvu6oQ0c3b0eaS3ZtFDWZKEpqmojIvhuBS1iEqlR7PSNMn%2BoVOfLsCFu7rdKU45nOl%2FGOxauMCzLjKvqz6MBFnbs3wE6M8oAKNxzlpscaglL6ekU87DWTjTTNFi0T%2B9D1kasg3o1HBoUD56TKI3dQA2fYDSwMORG%2FNM44umJ81RUjcUHpNmvbeiznelRskQu4QxoQ%2B2xuKFxyF8eG7%2F7dtBlaNTGBUmqw%2Bzs%2Fkd3%2BrcLYQkUUvff%2FEQFlbfYe3OlBMZS5CvbZx11ytbnZsYRuWVYxmcnFtOlKGHRHH1j9%2FxosBhtBonT78YZZlnjX3dGEphupelcJMg6n3pTVQrPHvBI9gqqEXbV8NbES5cjqBfmOcNKr%2BNLLPfpJyY1KWjcA2yzW3cgGI2em2Fn5JzKqI6eacuAUYdkReel3%2BaHterSSXJiTarL8oG9N2p%2FY10xNAzRahKjJ5bz40tUUrNs%2Btz3NKk0BXd0EG%2FXGv43W0jHjsa5pClTcdMOnW0Ax5tGLjWiEa1Pqe2u7HR%2Fpo8buiZhypEzSHjPD6RRWCPjM%2BfyI5rW4xfeqMRVxbxMJqx5L0GOqUBd1P7W6%2FY5rkEhYa0E1vIJTh1QGgz9RDKEwcFbLEyHGrAp47LTEtrrOEaRazn40v%2FpQhvSivDHpZKv6IVL8%2BhNVNdCEoZxuexYg2s16cNnstP0qGlDTyFInEUHCW0uaouvJCj%2BZscdJb95TwaLn%2BS2PR7RgheHAYHYDxyD7wt3rpJ0i9ogPTnWdoT3YuLjJbarolnfz5uOKUmrwOai9%2FRpZSaVY9K&X-Amz-Signature=91a847e0d63144d75488f05f5294aa4a5337195f9b6ce52aff45b1b6be0c5252&X-Amz-SignedHeaders=host&x-id=GetObject)

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
