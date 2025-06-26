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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNTN6HM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIClsLQLA30gf1Hkua4dD7iizioLhxQvNnlFIwsj%2FOz0gAiAwvmlwLb6mkNE7obxoOveT8yHNbIy1Z006Bt54qmgxaSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMlEi9OHUgcRcjp6i1KtwD8TYah06uVQLUAvnOUpylib9pNV4y0GVmLx%2FKiWyQxlW6FN33G%2FRAHERMxdD8FH3Ca2t89MCZQYIfYO0mcaQVyz7Ch2jhPCiWFQG9l0x3sqVVC553DpzATo5xKgFeSGoslaiKg9nREFgjhZjIX7HTEdUWJMkHtNw5mHGuwIuEDBGrQPoGUwDlUlaKfgFT1POxdixtw2ICLelMHrnBclOBFRbGi2rSfvTzjfmc8gT9HUXNHmhx4ZJNPTDFJfLTeudn6GBEHHrfBonx4wdB0NiNbPjoKUGBShnSbPY0yJILUMz6vWbCCFak%2BIE10e47aYksetsFpiFdGRPJs8dIgo4drQh%2B0BGC4TtudUg%2BEMdPilYNk%2BdZsH6UEhKmh0GGg7zFa%2FHvzotKifJ7A0Pn9BR4Q6yJeCd266UCuN%2Brry3r9tS0JG%2B%2FY3dWxkMk770SxhIHGPR50NNmRPrG84deVVci1geMXeStZy22%2BDok%2Fehbg7yjfXpOoU%2FfYoiCwIFOetYI2Cb4n0thjEk6yxAt%2Fqtorv4QeTOUVOVwZ7pTFq%2B%2FAHl99NaaiQ8DZ1YfWfETor3Mv3Q%2FWS3CdVlGb%2BpBKlbop9ejUJ%2F13mm27JFRn2JRtePRw2MhgjKwsZi6FzAwh6H3wgY6pgEsQ1cwYDEyi%2BZmkwUzzxARkVcryccBnCZss5bP8NjPwSKrpngpZXeTyc1XjgvLeVf7zxZa9ohUJoB6uLJ3mvYgs3AmW%2BbV0Up5XCrl0cK3I1in0EzXfqCKXeIZenzz8WxyS392g97DNmVvzjEePIdTiAGJGtU708lv4MbTaIEHVm%2FDiMYyzmB4zPXZFuRrcbPKm%2FbfYwkYBFjWZFgZP3PZ4tJ%2FNGvk&X-Amz-Signature=e5d2c3b059dcaaf1c9ca3768f4357a4d2ea78b17d7b2a14f8dabe93226ad2f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5BUE25%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAz0Ia%2FsJii1mxX9Q6N6OxU2kFifhnsFptcWhZgFzggDAiEA4OhajqTp%2F3y0sJvysYzKFPsa7Yk3NShe5Pk4iI%2B3OUcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDO2oA%2FLzwT01cAJ5MyrcA3z5nJyGxj35rMwUFOU0QDms%2BPxgTnOT5cpEjGNy3S7gXq2VxXtL5PxJBb5el4zmJ5Y3ax0w3kTGzAzwH2lovkVO5JrPJ0RoGgwZS2XnPKzgWwYkaw4Gmad3di%2F48cdBhmh3fyQY8I7gaSbV1XJk29nTix8AsDstLszX8ecKCFKFDKq4QvvhIgbC50EFetGUfWcC%2FIvzfK4JZ1pUriTXsYNiHbPcdi%2BqM40xSLCo6jj8EnqE1WRilpI49iEu2aH77KImXy2uIbFLDY3LaPs8e%2BjS5%2B5Dsz7psdI%2FrU4SiWtTFjd6KxEsGbUQo8QCgp0YaJHli0hkRaWSgjNG55hL6FwNkX6Vh7nl0TAbCVb1n2DBVS2YC65Z9gqqlaPStpSwPqFTrOhlzNRbjmKz0YFmdb%2FJbEP%2FzkaWbfTyCi7c7VS8OZTAiMqJCpT40KvZr1BrqUrhcTPFKxZ%2Fb5t6Nvlm3PwVeL3p8NOA39UN7lI9EODw8Oxg7HIoeamAItWAqQDlobYB2S%2FyubCCF1JZr7wlSZMSZlQeix5LF%2BbFilW%2ByZ9J%2BbJtpsFy84FPlnOihZeun8PR8q%2FOP7lr%2B1ZBpQWc7DbXcuBcwAJC82EXlqepMKm1pmh79w8TQePY%2F%2B5yMO%2Bh98IGOqUBeQz%2BTdBSr2Mlryd5XC6nOcDzOIoZ4VCSK%2F2%2Bensz65W91DumhH9Oz1jthusgV%2FZUFGE2jGnIYTDI8rfqf%2BEUda17WP5CgnnF%2BffF9vuiv5q3xS7D3D5yeAAGV8tD2FKAmY8%2F3x0EOqoGLOQFSJqLMWTUjrT3glYDjOSujaq%2BaNNfQfXJss%2B4dd5gv9NaEn09zRrWLhfgTJLglz2M3Disg3B5%2BzZV&X-Amz-Signature=b5056e5ca0d853a448eb16e607690e5e9404a60a40f785f40a95bc682576b9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
