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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URV55T3L%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B3n4V5nhoYzJs9sxvVaFZscuYcVQTpGJoI4pSJIzAfAIhAMAuDLTj%2B%2BVBczo5XHPQMZbXndYtqQ1nZJ7uqR7hhdsVKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqQFboxhySKdhRfPoq3APLtu83bc23EuEZy%2Fkgh%2FGZ96RN8mFC8zk5MpOx7m3bHRrEn5J3vf1h71WJCY0biPAB52jvjel3LGvBAjJZ7e2iPP1BOShnEkspQlP%2FlyZ%2FvyTYlJySV%2BjujmQToR5woMM0KozxgCIcImJHCS9yE8fF1HyXrByUhStBBEYyZHUFWSEsDWXnWLt%2BWWwAB4j%2FMidBkB8rkDlx72D3YnsJuhGJRtHuiot7gVLTVnhqcvEKZiKhQkokvHzk7ImUiE927jynRvCWdCCP3Ws4j%2FvI%2Fw0mdDH8ge%2Fz5I7JxqQveUgmuZlZvmURk48wPhGgZZarSXMnft74r391Etv%2BaWGvSyUVDBiSz3wWqiKx0y8YPZUas6D5PZIfVAsem4kHi473pPXlFGAs3OkF1wsr0TNQXJO%2FtdNko%2F%2BPcKcrfWb10Emvv1SaGnV3FWFPBtYv%2BYYFZgswfexuYVPkn42lYgHBVLwIeTd93Jijep0MD%2FNKlmJBHXkUE4b1qD5%2BHrJAaYxqWocJpHVVx6jSEsl1Nw%2Fcv3rDOI3JInzlYHsZuNWWeFyFq6pSz%2BsoTVNkl2q9Ar3gEyhBoyOeF7qxBI14CJYNNf3fafbTysAJRnSQCu3Tbo8s5PKCnjio4e84f%2B5t9zDVwIC9BjqkAUimd4c%2B43oR8%2FlZBRDaSnn9KP%2FJnHj5Vp73Tori5zDSpnAy51jn21BRHkPEYGbkK9Cv0YTZIY6xyIh8zd9lUBnLAryO8ArUioZdQAgI79kkfNhnZOWdOHn07aMG0vqF4cRtC1n8gMSYUGKXLwdw4eesLrexcsi3YLaFmGAUJjf6KM92y6gGrdmgMHFyRKukwgLGUMLkUbUWAl1kpWUzuhT6MDlX&X-Amz-Signature=1d8b1223ab4c9cf5f5b6db2abf8d988577ce08980e42e9fa81f7af2fa4d2d7bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B6ZCE3R%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6kiTYaW60JUQcNlUNEpDmhj5b%2BJ2zV1T%2Ft1ZFuvhndAiBWlDVGmOXEcmtMbhOGhaFbKfkNiZXkERrdaGxFEG2cpCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgfDFVqCbxiydEDhUKtwD%2BpGK57cPyYLAGf19xtYmlLAGZFg9plESQb9hzKVl1gb%2B3hsLFsV1VulQuxdy67bXWUC0bTyTMXb2Sdf3zXdP721rdupzZkjsvVf%2B5kmEmzC0WFyHv%2BzvrCC6R0ngiT7dvpxC0VN1jfdxubXC2fttkx380dvo3TK7XMTr8%2FKFq%2FBWtRZnCFhoUxPQaMnb1aaR3kUMVDVngjtBeJeMxRUQUn4aZWoMuh2SgHXfJUbOExOVU6PrR0Z4dYU8mvRjgvkPmy2Tsor9myknrnLAXB4d%2BvZLrA0eq2D2P%2FOFYbckZTjl%2FSzNrSibscV8jj1csFR6laRuutOxairxWyGkHKKFg%2BY%2B%2FUkPT0M65v14RB9Fo3%2FMUvucoVlV92DrqgmszMUAZckhnOMr906GAo69oIQ01HDQAMeDK2EzWRJQ7zLL8y%2FhNsgxPQLutETEo9m98hMhxFYxNKH3R0eaP5OAT8nxrKY3y8F8qxATRX8k3ACDBD8Wcn4xgQpTb2e%2FVAt%2Fvi7nCPt3OZlfV8PLTJ6arBzrWY5FFBi2ib9rn8MPoq%2BiMp8pVSk79RHJTPBCr1ouEEgCfgZTPAV893xVxfnniNx06arsfKPw1h4hYFzHRddqbfD4mgjs%2BAI2QfJvdaIw5MGAvQY6pgH19CHO%2Fj0SYSpGTFfpNukR6ntWU%2F%2FSuNFxv8k7hx7cMevcONPzf1huSur6QCkbWnbhaXZ%2B4wIAmVzeSmUBc%2BMJN1jb8Gj6sY5OJCdio1%2Bkf%2BTupCiu8EMC0DzmtCZu%2BQltxe62V4EqZu1t3%2Fh%2F1Rz2FRdaKmYh7ocr2px%2Fa5S8ptfZWFgXIoNA1qMRSheaE%2FzwOfGLsmJlNFVGYS0MEsECo9KxXd9L&X-Amz-Signature=e028e9761b9f27547b8d8ff46852652768bd555e964f588db12b1e958bd9cc32&X-Amz-SignedHeaders=host&x-id=GetObject)

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
