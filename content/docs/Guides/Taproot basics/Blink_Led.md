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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOGTNFV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFQSw%2B%2FwoZj%2B%2FYlTvj1Xg%2FdiD7bG0khtp1raqpZVF8YeAiEA4qKIohdI8BVOCSk9fIcT3wuXl7JsF0SbvVFLFh3WP4gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD98ipr%2FLVMpg6UolircAwOe7IUv7aySA9LycZzLNe1xhuB7OzwJDIDMrqR8ncznQLhyE2LobZuVrFbrS5oXJNmGrturh2VTLulT0NAgjivc6MvHgHanEy3w2PHmCcHz%2F%2F8ezw6gDF%2B9kAT5wg%2BQcGbEqw5E22wMu21lQkxHAwmKrmiQk0spOWdrh7ZsDhL%2FpK0CErjZ9GxJfOMLUtZpZndPhYyTcKnqKhsHlhdXvVZTz1NVVnga%2Fa%2BJs5LUdSwIiAmwJ5k1KwuK9szSr2W50baMVfmG1emjKTBQntgnU4AHbkNzhtBNueoFTrrEaCnA9%2BON%2B0%2BTecOkNnndtNhQShg%2FsnvF61f9QtAtpmD%2BReiqhTDXlvvUyMOj%2FVeOGTF3%2BhObqAOK0VdiJmD7AFR0sD2DnbcE%2B9ffIQv9%2F1XU2pTKkluR2900Q3sJwceRrIy3tulHvDyLJ7t3jidnP9hUpK%2FC5xp1Y654NrhUJNIIoHlqlpF9br9QB2yAAy1bihCiqBH2KEyaLnM%2B3m7H1YOeMk6ZOMMgbVbZt%2BZcz4ZGbJUt0ow3sxhIexJrLGM1mBdgEn2irGfAuOR4XiilOB3eP8VFCxJu3x%2Bec6VxuctwSKNWMS5G3gFpfcawKvtPD5AfJIvd4mg0HORXEXS0ML67jr0GOqUBFu3hRySUn0ZOj%2BGEyfQxlCsLZHELSMw%2FxKM%2B3DRu%2BqHhS31MDvF5iTLp%2BU%2B9wlZUfhpH81Ffi8%2B5cJXUoD7cF0xwVVsEMk7eE6MKiXtJELcGnlcPQvwTCFNelvMRnvtDoWcGdWQ3jZ4BQTi2NsIZvBlp4reRDaiABLdKRUIf9X5TxZoYafUiZ50aC64I5qvTkBmaU3gDz3wSHZaAR2r7b90GdVCR&X-Amz-Signature=df5ba716954c8ed884b0ec2ea5f11a8f286b6a13e07be7f98915a5fec6c5c042&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO3WH6AL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICzb8jya2LyMJrdTrzacf1UkHpO7cuWjKqHmMFRi9rrnAiA06UHohqnPohta5pG6nvucZyFU1bw4dxMmZfbjh9LwTyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMuTq3Qz01OrqwbNC3KtwD3ixoYG%2BsFYuSH3YhElHxR6DqorjlYw1NJcB1bIE7dYO3aReSOpFGn8SvN6Ckpi6hp6kQqtENN1vaQ3RRSqlsccik2K582m9UHUgcdCGKZos0tbNer8H4N%2BLOMcOG21QFL0NffUll%2F8N4q4cgV1O9AKQrXO3l%2FbM%2F%2F4g17VXT3kDRVoXrhx%2FlM%2B%2FRlrbH8%2B0F9EyCA0p80JzySse5RTyCvq2YlT2uGmCeOXw%2BjoqPJ%2BdGIdPc6evlEmK0e3A4NtHDgJLON1M7pyxjTT7ctgmv3lXq3bUa2ZCO17HAuZ9PcJRdZt4rKNe1z%2FCrO88t0jdxXSBf05nSyzJe3%2FQV6Aesnwwql7XJrwpa2vNbxp3YmL5YyTPe%2F%2F4UnjgQBfFWlo7idA%2Btgl2iM6QJm1uzIeGK88JFocgW6LEgQ4zUs9RpJa43sPvJ%2Bb4mmsCqEs4IOyI42e%2BXPBNFmZ%2FDJZR7hZiU70%2BXpWImeVG2JkmySMExOl3MGmCb6zR81uHB5%2Blwb%2BLKazFB57LqXiU5KRJj8AxL2TVj2k6B%2BimAZ9uHc4O0AOUk7gpQtK6NJUEUPTkm9lDDmmK9fYY3V7CwF0fScgPl1kWPBtJ64NiltZts%2FDwpvx%2BX18DJjZcia1%2FmixQwy7uOvQY6pgHKoCbm7KU9ueJ5H4hbpGfZOY%2BpPEN%2FwnrMQ%2FGU4%2FwFYRZd25NyNUeFp66d%2BqJyFMwT3eL9xM2j3t%2BzlkZ%2FWKnY%2F%2BLYg2MpwNKLV6rXTsS50TCDQb1qbSJL6q28bcedexdpW%2BuS6%2Ff6oXq4jQYWIdEKR%2BABEH8PWNV0tRSLBldvNtYYI%2BqXwbpwz%2Buoj0cpPqgOyRQaHjKhuZh8R0%2Ba%2F53TSgglmKRi&X-Amz-Signature=26aab47ee03c20a5242bec01c089e99a7a426974a7b9a74562539bc52ea38d9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
