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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5UELRH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDtSEUO5wDO%2F48j%2BvDFQnqe%2FzcggLM%2F1alHwNovxndMBgIgabMphArwBOxfwB3kWBFk9btjSXNiLqKR4yDuJgTMztQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGRce7Xl7MlXxkDNYircA5qbOUANhzt4eUJH4%2BNY9WaC5L3Wp2ty5jxYoCQPGz6tb7NBq4LOjIJKgEeczZJ4o5ma24gFuqinaAeyL4VPxbEfzXzof8zqpiE8HtQO8sylA0UEwQ4jQ%2BU5LkcG%2BahY0%2Fuwx76fF7HuFQGueBcBf%2Fqo3XJ6BqjmRsRJ%2FvoZik%2Fk85APvyziYB%2BhOgTxrtNE71BHkjp3shNixGJ%2BtKgARDFtV4wBFQ%2BpFKzc1aV5MliaTbGa0NAEQWKPBCx%2FLecSfS30LMrdfI%2Fss%2Fqh4o5hzfpotYkhUidSraEiAEa69lAV2ucU%2BhmhxdsZe0BW1qicFQ%2B%2BAujP1cfOouB4RwdSX3g2vzUpjj%2B17TR%2BiVuQPTwuNiNxHg6V3p%2BDxZP69f8bGM3c0PqWAcPn%2FSUorPYYSxJ%2BdM67BiGZqIA7BEheyTCG65FES%2BHf19QMW2A%2Ffb8Ki0w4v1vlqGBOMR55EQ%2BOSTMGycvs4b0UxDdxN9roVKFObhxY4tlkLtI3isbqkRD%2Bbjb35MtD2qZBb0KLbgaHYzTZtUybYsgK63yRiuSxny6fX1bSkQNi1Pm2HJPWx32zjKkwD%2FvS5PpZncRmkm4IB8Y6oF%2FC9NSbHxi%2FBcnEODyiLvGEyfV%2Bro5sDK95MLPe8sIGOqUB4iNLsI4SP%2FCgp%2BFvFo4oIMMlYiZTg2OhJfb8ZM6fDQIEOShY5Gjj%2FYQU7wY7c1HDsNcTN%2Fe%2Bp%2B8yDCM%2FL7t2wHCXFV9DEo4Ta%2FhN03SU%2Fvbc%2BuSFLmlMi%2BlemBYQJnMQR2RWR9RE6zvjK6zFZY%2Fvve93aaGCRS42bRazwoNsOGRUZYouTciimzaymvVhUzz8xij38OuzPbzlE0OLZZGlxCdXKh7M&X-Amz-Signature=7373842bc2b04863f53cc1335425f1c0d3f57786e96f727f504701d6d31d45a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VORRHODR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIG%2FoaunHbjEiW1EQr%2BLOWb69pOxb5th44qMkwZ4%2B9qMrAiEAyI3Q9jCZwjIu87EM%2BF6rrKUbU3Tct1LhuFpLtuMDhvkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHDyFXz0yQByQCw7bCrcA9E0WRREYNO%2FbU645Cb56%2BCtFmie8kgA%2Blfnax%2BscPAVqxNdSkNAA5TyMJCy7rYLWg%2BKDQCavp%2B%2B7ic43sNLiI4V0MclRcBIMZuyjBWhKOSPuMp%2B5qcRNo0D2kkZqEVYhhwsUdtKrFFpDh%2FaLCQePIzV2%2Bc7WHus4gi9Kk3WeFjwScZj2Ghyrfk4BUjsZoF763Jw5jONz9dntra4Are12fXad8aSvjX6m7TrQH1bCRM%2BJV7X%2F2%2B2nGH7coJzQLnQ%2FXGHupuOum7WCmGDnbx5c3rJlIkfLaO4OqwCH8AcqzT84nP3jZNO4RFix7wJfAHdeM2FL6KuK7U1%2FpU%2BM7V0yH2Q6SuL3jLaNVjRLd%2B3VvJ0MaZnk%2ByoB1eSlkrZBAbAmvk%2BFrTkKVKAyGilDzYp8ZiqqBHSvzT%2BPYNWUR8pE3DiihhUT3OzYucJQnI8ARh4F96MbAPt3Gt397SIMPUVkMVdwTUqnhgqQQ6JN%2BPXhBa%2FZlAiSoQf13d7oIXmuXA4Fl%2BRPR7uwvTh5YE6uUa9VS5T7DfRYBxh31CVR55m1HNFkykCZ2MrxEfhhAiT4u5Ouq1eKDwRuXp2zc%2FiO7sk0H8natBKvATMuUkFOgapAp16DY%2BWrA67nMapSkibMJHf8sIGOqUByTaSZ5UV2HRNLbMCx5H0e7U2YpNcp%2BiQmqDmXKvX1eoe01DiQd88c9WRLcnsmsn9IG%2F31HTUPUqQJGehRYeVGOs1B9DLDAq%2BD045kG8fAus5dA8zUepYqWmEao0r16g0faCRAHdtRY6%2BoHImYwSfsneu8wf397Uu3DSKj8STjzSXMEA%2BLqygZYB%2BVLvB53v1LGYmkV%2BCVMyKWRZm%2F9WnVKW1JWnR&X-Amz-Signature=9b6f7cfd076df0e4bc608c84fddb719d6f522153ed014defbdaa4e03d59165fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
