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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466373RXHMF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET7qP2x6beAOqviUxabzeoW%2BTBT3Ijcxvsd1bqGtGatAiEA2k7h8JxTbdzoFcyyWNWYY3KYVVclqRsg6b35nRokK1Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIt6oQq9YZBKfAOKDircA7Gn01RX6i69ICCNy8%2BqxHtMelAc775XhzLPVW8gde1co9a5mwiq9zuuSda8IhtiSIJNi0nK7FEO9KJnUnmG0s%2BIMTAj9bHU7EvJchZmw5%2FNfFsxfh%2B7ZJQve7Ky27ykbGb6kC4vorY2Bk3%2FebyZB0%2BF5MpOqce2pa6p%2FNS6l3Y4m%2Fl2rl%2FIAUKRR39OjNvAfqEJtTsIcmYJ5uLS0cWv6UUQykA8FtMh3M1xel7N%2FHM8C2IlZEQJRy5JZEpGtDJKH7O928RW3z6q2pMCLUpsGUm4fkmYGjGTunan3nSn7MO5GIq8zy15cqyMnrWHuIi6pYElMI3cjBL0U8uzM%2Fur%2Fynvd6%2FGrOYfznr%2F5xA2nCYK%2BPzEvZj5GYsFYYTTtQdCQwsDt7pgUX3AS60kEtCnLq6SXnKfRXhQ4LSRf4NBNn8IjPeLpyaS1Au8sJx8n%2B76Y9Gu3z4tlCO%2BnkUrjozJttqRuGFloKHg7yok5ULWyphUZqF25tOatIQVD9EMDd%2BhJuG8Nk8XqxXbtBbjSH%2BqijDl7rmlKtt0LiNBNiHEbjkgRW8zUYx6SxLRkppgleLw5YHsYVGlmM7VBb0SOkBaf%2Fy2Q74VJAlpS9Hzom4EDwltAGP1BWUiPyxlGJYYMN7w2L4GOqUB1tlwpi0372f2xXTgCJd2U3ytKEojjzK%2FkAU75fJrM5L0a4zvYwaq3GwYNXyIehLkIF%2FuUyI0d%2FwnA5O2x9%2Fz6RKBh8pqxlLleGh%2FY3JrTshIQw4E2DdUrmXcK2xch%2BT5iSNmK2spueZRJZ4c%2Frc9nES62QXkprAOytQyrOnEz9xYs%2BJPYLnMlY9nfpUWM0X4mghzevBCtx0XTayJ%2BG6zEqh%2FaOQ9&X-Amz-Signature=741f1bead6a0c4ee10d34a32733111f6a54ed1280ea998e2df79b2f61254d31a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DWCNCKW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3Sx4Tq%2BHN2LxyLJslnCwpuaWxZZQM8kvx08TFOv7HTAiEA2AUSd3VifJ3HR5JndOl0WGzo%2B2HJsEc%2BV5WKfYKfsggq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBPLAA%2FP%2BivjKryyDCrcA7pc9ETZhWswLivy4bFXIvrKb%2BZAWdpaj5vV%2FWYYHHLGkyJKB%2Fe5a0YSR1CnyxWNIYtqk3Hx9STAJG%2BBQFJMSnT1YYBV6JviOn1mqn63oBzOAbSCrIAN%2FE2koObYjp1jMb9G2yF7hpV6syafDg6ilD1uan1DXI1tQgZjnXYRDRBrhiZZyJXFc6XCq6uTt8tUGNNqA5NiVFbM%2FGDMnfLd5jM5tH1%2FRZ3JrcMus24E9J8BtvFrYptuNrN9MZGdbiM9TuUYUsgLR4JjR6r3MchxEb3xpMgXwnzkrmfekvGn9fvAoOPVVG4YaIPj5QpzKpcjnOonI%2FAUigqulpELoDtMCtsZpDPGAjzY7dja8ChfqxVGivS2O3s9DHBXdWOfaX7TEuhZ7aHB0Od7hbRMQhGSz4UP7D%2BJ4ZZZuHrN85oqyg6R9FSmSpxLydJSOiZPdR19n%2BMcS1BN5xa1nu66H%2FBBmwY46pdGCqAPx6181NoE1wKjQmkGfW9YQBALTQyTOHY6E2MOvwJThsetSB7tGG402gMMxaROSHKxKlBzULDa%2BNVv%2Bv80mFASS1xWERVLHniSA6E4qYzFNPyf8U7dmU4%2FSkusjVkxbwamdetC5IDUr6j1rSn9%2FhnAYPBmRwuCMJqm2b4GOqUB86gjHfZekG2VmMuSYZBOmyUK1JMT0UMlfg%2B0q7xh6gyZN4WbqyBCE4lP1nBW76VTP2zHPtn8J19av6q%2FrKl0Q0b8toOqvChVuDRjULQQ6v3%2BedOcTO8G19dbDpQt8ps647i1h%2F26tm2OxssIrPPEHuFmPvjP7Mwt9HTr7km7MLgb8ezTcUAy0a0RVTBBuJd%2F4hj6YTGl4MgMaL8UJI%2FjPoG2oMvd&X-Amz-Signature=851d7dd0e08aa9ca26290f9d620a5530415a9d32941eb67144a3fdadb9f2dfd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
