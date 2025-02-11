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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLCS6NX4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc6C6xaaNQcWqG%2Fdtl4Uzy8YRnTUuIDxqjv0JBeZFyMAIgSSchBKROu2iN4%2BmvNEkpPvH67AB2CESVE5ZIEYaiQpIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwkts51FwNZYutXyircA%2Bx5gDRLWOlndUxHayUvaPIfy0y5sbrotUrVTStKnBJd0vIkZFG7l9ZfFpKwSF5F3wGfavs8chh7aFh2xnJ54IIhd2ATy3TjLDv%2FvdRFi8ocVvJL9uY%2FxPkXTlJ8NC65ivzDxV7cmK9vv2wqN0EcFW4t1ywkEycQ7h97XizSWsovwbDMGW763jRaMgCYgPtKwi8Z2bza1wNnLgXUMyS5lCtd7j5KFzIcMe42OAEW5ZkRZK%2BDPnL%2BP2%2FPG12mz3Mg4di7mn1WpotmvRb5HjGDx%2B1VamS2qJjIbYHjIyzyHtwNpFqM9s96KHMYsOioZm3rxYmHWFvUB%2Fmqwq91k7nkahHSPXSpFr2zi99LBNJ6MlkM7Sak92VDDT5c6wc1GOuSqzhr2V4Cewq63oAwl47EmurIQEozb%2Bde2TI9jBBHEfkNQvNvrbGyilAK%2FY5CBMD8kuFj%2Bj51hMi1uJfIVH2j%2B1NIqYE6T9QrtHuu%2BCW%2FCwwcnsiDbrA23ntoiZzBSYC1A70c03Lrnepvyvad29OPmUfhoYHPag%2Bh0KT76dmHXn8ZEd4BrHbIUd6vqeEK9LW7AR%2F%2F%2BgsJWXHOGYAchmz8ryr%2FhggnXQAbCKbeJwds%2BIN5k%2B36salA853FoiK5MLPKq70GOqUBhkWGoBf0nUBqp1pYOOepwwiS472NP4TEWxXkufTk%2BGDxKwe36esYbeqIINYgF9lVDLvL6E1zsIFEVDU3ynGtLgcwtyO84%2F%2BoxMaEfvvYOgPSX0ZpmZiPt0uWBB14x1MTyUMSjqNiqNTvLliOIxnCaXHi72y7NAF8pQ6%2BKGbRM3KMn3%2FOt2swwhDPldmz9w79tXaNXJ%2B5Ot5jyaROJLAiprSM0USV&X-Amz-Signature=949aaac9a5cdf0452336152199a0139d12c921ec489ada0e928311e155ee82cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKLZHWYJ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX60KZSZboPand4a%2FE3ulpfs9Tig2ftvdoSPa53gg1%2BAIhAIMbEsWpXB1VD8kvtr7flj1YEMScLknk1xC7BroscR%2F3KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvb8dollwBSIdsIyAq3AN5HEPoaNYqvqV4O1htgXjk7CEqI%2B%2FbpFsKAE9LYE3eKru9ZNBzNjukDMVJ42fqITdZMGzFOIf9rClE4PuGXIgbdO%2BGQwXvJdqJaKTdxg8%2FmNHWiV3SV4T4PbEPrEJVue0HrnDW0okBMxKubESeN0fQ5pJmQMHNiTmSaRJEhX5DOp%2B4D5iHWQG%2FQaDTtQcIewAr7FFfz39LlwvgN1iFHPNwvD7aohhp11epf9cO5rtbrD2SYtAVmXADZejenJyxKDE9yCz7HFgxLitHBvu2S8NMxE5ZT1BlPx0QlGB5spStzDLNcnsgMxVqyYoZdXTk%2Bll0oW2wOCVJFPW8vuwik%2FTGn%2Be7bveBeH6ALM7BdcSZeBNs3In9aFCV3mKVeMAsCly3xDPKwlbjJ17TKfQuUXrZoIQiKhePASbJGP%2BckNw916vysv5l9m%2F77Hawj%2BIR0z8PY%2BAo%2BHmx86Q4ASiCex%2BioU4n1Xf9wF%2F4rWEmvzGhp7CSg%2BnnZqjAaYtAdI2bnyRmvZCZzCVtmSLodGNIVht1AMZTlEM4Q8W8E0H4q1f5sXmipy3DMz4dAgQkWvMKmzXDnQAl%2BWoOK2d5roFqqAPMtrtsQJGO7NSOgN69MYj0ALEJxTkFLW9xhypCeDCyyqu9BjqkAX9gG8a0K1%2ByCLagEq3KPVhIJ4CWUI2fDWdqnPKdU5oVLtrN0kFfZsuOJ0KcPIwISU6IYxhOYl36ribAJLiL4BMqb%2FQUG934LGNpnEdAsmgNzdebagiyNfKFcOQH7auJUp95PorhAdcPXmdmM17Z8S6frIptr0W4FO%2FWly%2FlvZDq95I6tM1guJJmgVQkeFbqV4wAXlu920A%2BFu2QucldnY0EpPr5&X-Amz-Signature=b5cc6ad0fb464834f24f3f74f33d662599c58ee5b74d79103fe9ef4a544d6fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
