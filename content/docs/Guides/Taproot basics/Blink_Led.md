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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNAVLME%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADfMBUmoEAT16gj357rIiPpHsk212%2FCQZAXA9MUEDgtAiEApdohGzn5cmChTK5AJNTkPWh%2BYymLgGuyMYVqOM8alPAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BJBck3jIunWjHj2CrcAxmE2kWZ3YIyC%2FPT6SZUxHbT%2BO0YJpdsYsKE7mmwa%2Fe0b2%2F2LyfEXVPT3JdEawmcNn7fLH9uQvvbyTI8yqLhyiYyNK6d1cHST9FsWdRrrg2Hw86HLXAMbmk%2B5qXuyMcuw%2BX6fWKqZPNEbrLG1knK8T%2Fh5tCWifeyLQcMYsElhPwiR9%2BBViNs80%2FD%2FzDk260VIkG4HqmAsZwKltvgB48crH6aVivk%2B09oRnaBd6Kqhn2CHDlGpsHwSO25tZE4MUwwfKC0uciSCqlGYcLOj%2FSwDyfqaJYqWSGeorWjaMkDzTfpDvlcdmp1bgEGEIyeZWhUrwZnx4k7lG8%2BtBI9JBb7Xr%2BcCCOYuE%2FF7iUb%2Br%2BsXRB9Ftjpsfi2%2BP43XkjUKM59c7OpjRwm0tHdYGJWc0piUeBGaiLJx%2BERrfjPyCP3E%2Bs4z%2BxBCThVGI2Qq35x%2FoOwK858NdjPXlEcQ6%2BhJxibhALhB9wNej%2BKQArpO72P91zMj6i9wZ6JMhHGXjI4yIviYbNmBF421G7ZmjNaqz7luzXJwvBG4cntb8ZhMg07GGLvcZHYpnn5blYEJYtHlD4TtXcJFFGAyfhrPoSREIXmd2J4okwYxQDfivgjjmZrVJ6Bq%2FKy1IUJScTELEpCMO%2BMp8QGOqUBrSHiVZukjwglLzIbnOd6035e3F5QoCvxNqPp2hvvc3BxLxwC3E05Pd9MXfTAvjFgyDfK0BwtPweuQ%2F4Z7hrH0SCeBwpSmSgB6kP4uwJRhaTJvanI284YVbYcCNQxxrwrkWbWj5VvRf3cyGNpj3Q2TDtVCWPKPQlb6gJ39ORHn%2FMNO6%2BRlYO669SbycC5ZiaGXi%2BnijH%2B6Ajncc7eu%2BhkIPp%2BWXSE&X-Amz-Signature=c9791ee112472102e40ddbcd420e8555f673077ab1132d7c722c9c48fe35e862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXHVJGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0wrwc3b0ROQu961s6aIuxYy%2BJIt6vitaBULFteMbhwIhAJsXQPa%2F06xsDicH%2Faz5IsuWCOTtsbiLSdy7pUbwkJO5KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkJK%2FL%2FCWKF5LyO%2FYq3APZ527L30ijiSRl04eRSaam7ztO8SGhnoCe6EC9E7%2Fxft4ZkgPCwXw74ptcMTr4vS0HQrrUFhSJJ9cDPqFCGEl%2FzK5oX5RDZ7b05QwWZMzQjkMkWacpb7xiwgqvZBwYyJJ0yJABqmR4pzpu%2FgRRs5fEF%2BWhWDsozeBZIFmAwuKDGUGL4aDULaq2RiwbwOUJpZgEaRMtFVfcvA9LTf0c2wd6Rb%2FVvg8YXLy%2BowwLRs7jrXuuI9YXEN%2F2Y%2BxmKmUYm3HJLYzZ82SbMvqB5UYe5yIgI43pm%2BHF1msjgGhr999mah4oyt3SX7f8KyDHeY2IFfMwF3%2FIJkkVVDQqPGXUrYgIQrP3RTe%2FeHYyHky0rAxyou7nFhu17heB5Uy3ro2dJs7o%2BMqYmgxHYgBP%2FOeTdpwfh8J3ICdTB9zTMTPaDAlzTI%2FI2%2FtCw0JUrSYx7%2BjAbXf2Z0CZPn03cIyPdeEYpsxT%2B9YzmGNAUxjKRYa5RxoOGQQZNIVAnkIbxD2ipjUofKT3hK4IVMtPc1wb3APofqikUk8IK1PNNdROsYVggUmUcqhkcW9Ps06uIGCCN%2FIAcz%2FDQx6zUmHLiGsIheZ855gSfKV8kx9a5cUUPq6X%2F8loh79gT14kCp2vdz73dTDOjafEBjqkAWeQ4z6SqytbC7zk9oBEeWsp6WzPuPM%2F3IHL5zk2C7Ey9G5SLp8Nl9MkHdm9pe6%2FIAqe%2BU7SrGvlLq0zvkk4h2jnS5B5gMU0rQR5NNuxT7w6fA1vdpYt%2FHCtCNqUAoVAulizpqC0zdjgoXhuhir5ToOoSNyujSNupJ0Ccn8OIK%2BOQNRi1lm7iLDO%2BA4KujZz36Odu1GTa1L3GIwhe46iEn4UO4Qz&X-Amz-Signature=64386b60f5dba8e25b14b5558ea37fa3252fe853b959d78007494d39e3f6eb97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
