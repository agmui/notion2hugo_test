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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMEE5LT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDEoPT5t1%2Bi2pdBmGMYJ5zQ3IlMVjSsA2S0eTfQiycKsAiBrUWMLgC9IiTtuhIBM3%2BITxEn2uNa0kjdbyGaM8lxFtSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM314HTHS7CBTyog2QKtwDwQ63dqRXbiGqbZDTti7382rihBRzPRahpFa%2Fw615seswmvQSG7Rs7MulUmV9Q%2FlhNH1TsqO55xifyY%2BfQ%2BxDsagur0wIPW7%2F6MT2MSdp0yrRoCsJofYIFF1g7FmZSagavig8vY6sE5gAgNs3jijeewjhu0CFOn5ocRks6%2FhkVfvCW9UVti4ih50OJKjVg51QVDwrrC25l1N1MvdoDoLRBk25MnE57gTvde2zrLjE5ch2CoSM55TJUDMvYYQWzsrbQIe%2B7QA21%2FVCmfNw8VbfjfYeqnCKsv8mWyE%2FRdZxCFhbcDH6zYhcF8sOHTwvxu%2BWgxgQrmRyp2wL9b3HotBeevpVyd1E1xBwDLrsbPiOggpemz720WIi4BHIHq5Z04NOr7jFsOYCxH6jzwljAwzcr9zB%2Fn3yakhyOVm6t3cYYxfyoiIQZZ8jRlU%2BHkE2fOHeKAmfS5ZJiIHoLKy2KEhHbhF8pnBD4wnMKoJu4irQEr4Z7TR1k3M8XPnrHqHepMtSoh%2FIhPHsiDKcvpme8u8V%2BE0CY9OQ6n75vmMi2tRpJr%2BRo7IkR4yUPMRAPlCdKR6bI9pZmZt6NgH1dKmj0qw0U%2FkOfkX33F%2FuPjodtkk7Bx3ql7YvxDSWr6QMDFowiL%2BgwwY6pgFaqfeBcDoe7lIxHBO7Ug1YnPYhwSgtC5RHyjSuPOYLot3YLR0Kq63ftcrzj6Jj06ZNXdaF5ETffV8ANajWXuvcJ856uCTRFx5LX4xilXhzx6cTawbxVJoyQAaIx6RTuuqLRYvCGNWVqdXdZCa76bQwSsi9kniVDAPan8GpNEdF2jLRgAfWpExp6y0HMOqF6jWCdsvoXIZyhz8jD0TDC%2BRwiIyupp7R&X-Amz-Signature=e8ad169f4545ebab449583e26753153d1f27c8d4514ae8c7a8353d3f185356f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MYCM5T%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAlvSPBhucBY4L4FOQ1I0Q%2FE%2Fdz7NCAHqtIE3jP5GloqAiEAnqxxZ6tnTa363THLU5cuRWD%2BK0TP111l2K%2FXyUiLe8kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCsKLw%2FGAfhWVC90oCrcA2kPXUHj%2BGTvrQuA1zFg%2FiecMdkSTtIZywaOoAzqiAzup%2Fiw7qHnokHahFu1VpPCbLpglGhE4Wm6FdlJB%2BdtoNZ5eo9frMVhhSGGZ8CvTbMAMTxRdfuKWgGrH1RQVudfZjtaHpONYpbOrUZnPCFGfl3j3L2vFOOucA8wQmV%2FdckmZ%2BvgZ9R38OT0wxLOnhcyDUQIt7WSeH%2BV4rWeBhz8LP%2F8wsPerBHGPao3vZVuczQEc0U3SbYQJIVy%2FtWtIyhP5Ag34cctRS%2BcytjnE6JnDbooT99zSGme97GFxaicb3LvO6YA6jAjqZNbMa04izOzqh9UQ%2BiQnna4kA7yyofH2n6BZzCjgnWYWiRx5hLwL%2Bj1EQQzA4XVhh76ulMjlOrIj6H2I6LGuJEfd779bNsFQkOmbPzB%2FEM94sBpHnQ9ys%2F9wCRr4ToBtgiC4vzCqlVCVgYb2PgVeLEPFRhjVU8WQbWK4Ti4cgGriUeiLVpzt0H94qW5gmFKJ18zOdvDLBAXwW5XXnIxiCFq4E%2F3NJg%2FQ7g3Ax9eQhzyn0A82AxUq1cXAgLeJBrhAO0Df0JewfzA9WkgiNpcIFIhu8C6J5Iav1hJYi8QRHZQdu7CPNCpTSfZsgrElxlr7B1PJd3TMJ%2B%2FoMMGOqUBwMhBVllih%2B6dJNtSRJD8YoH9fO%2FQvH930BdcZPwaHkl5QhYyK6OvSXO0z023li4S5FPSH5bxfL5xhiOvL6U75Me35iU2YAWrHU%2FzMD4xkb0yP%2BJvus6e0J9yjf%2FTKeaIAJ8qUQGnZRz5rxFoUQeSKqo1lkjrrj2ovkSx%2F6mtGA24SRv8BalDaiUFdtja3eEb7xZokUV2a%2FJ1Jox4H3AmvgmUQZq5&X-Amz-Signature=86964a6bf2c14e7dcc11f6e6e70e7d8f1de65fc861b9e112d129bc338cdeb189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
