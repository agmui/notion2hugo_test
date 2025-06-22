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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YGZWEC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAzEJSRdYp9qLFdk6SYSmKqTFyDmm7NEvWQKmGWrPZv4AiA9QzuE1oMC%2FkPgqSC9lURa%2FLhzADy2dRnWYhP4Fp%2FC6SqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoIT5TVghKSLjfH7FKtwDP4a2BDZwfv81TG30%2F15DtnPnYjwPafRXV7F6Ikk6gTVLvWx3As2QZzMAKSnV8PVGZFojZt0bTmMcfI4F0IMszRidjuY78V19FG0gEoy2o%2BOG4jeVepV%2FttPli1FcmL7gaxttL7CKsdMeQkOszkbvI8goWqcADLKyL2zCHAd0NM%2BMhQNXTSojYVqdPuKTU4T4XGCySvXWCdMmSxF%2Fq45hclNCXp9lVaxTcmPhwkL9P0yB0q55mK0uvm9wey%2BDYa8GmNydl3%2BeV%2BiYXGYj%2FYmiXD%2F1P3NafVyEtuSGUxHQy58NUv%2Fv%2BBlhJZpyV7nCmtJM9oDn4WCh1IP5W%2B7f%2BVc0l0N36kiy5ed0vlUn1jdIw7AWEbOqT8%2F2umwiLMux3FkAnojH%2BfO3m1Zhf%2BccxVw7t0erHNzJS3d6v%2BXLdA8g2tzXXeoPKG4AEmqf%2Fn7QuK5%2BE%2B%2B%2BjsUt81%2FFaV%2FCJHNW7svMRV3MYPDTAnkBRvX7cJ6vRZrL%2FcXpUpSoRXTEilWyFpj3venLvpGAnHfl9a86BTlslAvnsvYtW5%2Buvvp4FzWOCp4PWkhTEnWlfWR6Y1x5jhpuurqVWtN55OjY3UFSwK4MD7P0j1%2BCVaV14s01z1g7lGbfjOLIDVlndLwwg8jhwgY6pgGH46FyURVpNmS6W%2By%2BJDL6Puse4P9JnALCbTui1KcgEmE7r5XBxWFqWQRShm9Tg8GvJQE1oYJrP5KCJjmWwz7YZ4PQJllHb%2FAz61cmxqZNA1yIlCnGF3i38Rdmdx3imYX724upx22ctGzVwZg6AanwsIv9H7VDX5Z2IWBUjl7U3eDBahRGLeQja1molJpNhAcMVIytiLkzjArh7xCk2E2L3FGlNU4T&X-Amz-Signature=271acbb47f6b509c4410ef7311a0c8d01c89b301cbe00b30b195243637453616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKNVBUR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDZqT7syXlqDfdJhxlMx72FNHjAPF%2BO9zLselQT3gRwCAiA2IL9rh3QnvGDFbQ2wfvrUuAq3hx25GAR6hZF6x%2FAoJyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjo2fy95%2F9SFCqRREKtwDD0RgyCo%2B7gn2%2FyBu%2F2zPqsyj%2FE7n1zgXCAErItHmKsdTp8PhdKXrKh7M8VUVISWpG2vHdA2XggzhB83qOT7CP7HU8oOgXMs2TqYb3s86IrEWiEC9s4dV7yfmHyhdroRQDpzQT23yMkuMxSYCDgtvjaifKVk9HH74GPH1%2F2WkmmsQ0JQM909Bp8CQbqH5wqDJtkzY15KsbTnnAm3zB7OvANsKTVyfzsqilFeguoAuvKMHbclexdeS7AzDwXdEp7T9YsrPrF2PTufftLfAcxkaRZSdgN9mZX1cmMuXJMO1Mf31ztojFT7g9AVDulN4Mly3htbcd6%2FIp4rpg2KnQIv9U8QGlPopY83Nlttf5%2BERMk36%2BhOIQBLcTys8yC%2FUjOZLFNRJlBYl482GKXHE%2BQNKDBZXxlBO4f1PMoTyhYAwcXDPzobn%2B07HvFbYDw%2F0rI3BuNrhcPSHQlrXc0XqI8h7M8%2FhGB0nnKSbsoOjPt0WnBds%2BR2jeoV59%2BqvQ2vfjDdDOAyrCD4ndxgXj%2BtTLZ%2FaeNA%2Flr950w3U%2B0k8EHWDZfTpFfXzvCiqw3Thd8hsTwR1Ezm6v2sRXqIjPJVDw975sPItEYkc1Pa5tyRy%2BH5%2FS8CIjBx5WQZM629hV4Ew7MfhwgY6pgGGvSAQLqRBRglfUP2ZhJ1t9ggdSHC7HL8UkK%2Fv9vE4ljVTLZzxfizOdE76NXNvR1iM%2FBLj3mOq4Ar6FgNB7YThD%2FNwgc8SboOqPDeKkpLGwkH8jbkWMn24jtEKObya5%2B6WSMDxy2BXEV%2Fxg2fMZZg4NqqvYzQePYQk6qiUXDYgJ%2B%2BItqCdXOthIzLTtuqlaku5j0pMI2jd9lVCzd8%2F0BG%2FOrlo94Xb&X-Amz-Signature=f3ebdf7aef84ce7fffc21f1d8307eecb600b169f2dd0303a4fdfc066b3d8d58a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
