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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHQMLTGI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEEFjr6JcajpQFFXdxvUkPg1Rc0kUIwk5XMu5UM6TekdAiEAyAR%2Bt3IhRjtNX3mtKjtXJVOpSJITXYLxxdycUXJDuVAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUP84bnM5IN4tWu0SrcA6stWtb1InPAHFiI9S%2BPpjUDq3G9%2FiHGGwPqpkvMdQLE6uWgQpGBmuICaJ6aZabSUHp6hbuJjgu0TKir1CCbqNPRnzxgS01Yqie1T2GBZihjNXp%2F1Orp1MGAvHbGcuiubZLnHPoJpcTruxA1y%2FD44Mi%2Bb%2B9qewzcVnFviBMtsDdVcXr%2FqHKahHpMZdXo8ZEx5C4hh75r845jI9TLPeF8ByI4hVStl39fTmYqRz6cWF9vp8bWnTTzY%2FaJfPxzoWmMp4ga7hktpy4tUGMEg4Pm8vLrq%2FwG8fffiN5Ol7OAWAehDeQp6%2BX4hnWKagN5e5bI0vzk3Fi%2FHnv4%2Fp%2BtHMbq99T98uour6nE0bdVQiRKX5aU6fK1HDB1bT152%2BIfWeZzWgoP3zkmrbEdcj65Rp978doUzKAwexYQ%2FxuVS49l10zAU7lqf2a0YQD4jAbQ3J8%2FrURvdrzdEa2b7H%2BBTDs3XyTDZehb0C%2FKz1CWE0wIL0N%2BxmpJMNsYLN2LJiVQL8qxBw4x5Ljkcd3x%2FFbbzxfVFdNd1giUaSCuG6dQJH8SBc8SiVafEzse8IlsbUO4JK7XF1S7Qu5LitFlc6qIelcwwRzuO1%2B9xSV5KZGPbAR51hJ0O3zYt4lqreGzKIMVMP%2BUqL8GOqUBh%2FvasDovTCjkTgAql1SqYKJ6i%2Fqg1TcA%2Buwhw0yrEEc1tQU2UuHnjZf6YqsLyYAh0iRTfwjkAGxbIILuY2XIFx3czCkm3ZP6xfTBI81FXVywWnRab9b4fCRaaNC%2BQ%2F%2BJXWuAT6B849okzqBLrHM80V4qukQORAjbIAgWw53oQGyANtW%2BRI5WdiJIYN8U84AJHUcha3K28xQjqxhV%2FqqUnRW5450a&X-Amz-Signature=ea748a45bbd9ad1b003d0c18c630881d3a61d59d00164c0e362f6e44c627dd83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NESEKL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBKO36U%2FRDAgF4rITvV0aMf03wuonAaFXQ7b9RpUwfhxAiBk81m4uAPWvAW52KUnzXsPgL%2BM5uVCuYKd%2FKv9z2RGsyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBd%2FeG%2FTukJZM7EUfKtwDIYfGa7DBRxay%2BGNXQ4gha3OxwI1gxbOCSGhSzz4gE4s2ltThufyBLiHdoUEtyEJZ7pTFzqffuKsU4omxNzXMoFBWf1mxyktBj4XAkZbQVetR%2BNUGBqz%2FRWtE52quSQrCmeKpRAN%2BBEjpy9vra3%2B%2F7TBZLqD%2BjhiFQ696WgRc4qgffWVDYKPPkAHwgFlmiOAPvs%2Fb4O%2FRc4IA7eTt%2FsQaxSYjOlX3rSKv%2Ban%2B3zlxRLRFxAmgv7SBfCLghSrrhhMY3pCwaALGEWcJ8I7p5Es5hWppyepGluD%2Ff4DgtWidS1bbkf%2FxHsBO9678EClM3dTDMEf%2BIkYLwneBz6fmd5%2BXRU44YjoRRQilRRV9fmUF%2B%2BN6LM8aKZ4Zkx5PH8sjxr4LYetuF1OX4k9hjovv%2BjH29s2fJaHl2KBHQHYFP66Rt1o9HXelvOX8M3jlutN0%2FDt5rWmATSWOC%2Fpzj9IxLXw9ptGMMdHRHPcxq8Sdd7kmp6hPlVyrF%2F6r0gnST8gGO6ISjscE8TqOZ9elIsJn5cfjKDviEQspIkd%2BrdOg4aHag67akX43T6djFPwLP3H9HTdaS2aaFKwjp4boE1x1DGxMgWVcgFg5kMA0U5vEtTkYZbiqr96jSh80IHxG4G4wtZSovwY6pgEYdnWqyPcwR24tJ%2BL%2Bi8F600W%2BwKMwQv85V9OqxQH7OntiJHwYlCF%2BW3J2Q0z5uYf3hZFJ%2FK4%2BSWvCmvYGy5t7N66rnZLMmgvZ1BtPEVC7DVlAKbO130eEszrgcTf81BAW57WnwkDP6D%2BkyN0OZYMYMSRBwssDnBfqAOuleACX7x1SCb1M8jJLjmQ7Z4lNYmLIFpfS9PN7qCfR0WooltBOdVBs%2FdXt&X-Amz-Signature=25483f7b67ca0260aa60d9d445f3c9c351475f576056e48da4022a4ae085c549&X-Amz-SignedHeaders=host&x-id=GetObject)

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
