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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LLPP4U%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHCkc8IVziFfnSlfJcanv%2FzJBUV57h6lsS2icjGLxoolAiBUVUK1at6h5lVsSRuIGwe9lvi1OXpQ%2Ba9gmjbiSH1ibSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMjngqD%2FAWdkFc6puVKtwDw0wqFEFYyg45DuuJxY2pOAvCU%2BYmc5hA2Xo6cPD2e1In8JF8cinAmK%2BaVEKwlZ0vAgsRJAN20%2F7esg2c1rRGXBLo4bwswzorPaVp9Nis4NTcrqfmv7Nr3d1tegH2%2BbSXQdrpa22IJtMG0t47CokuoE52uEYgFdlKhp3bdX1uOqTiLwfDA3H5FGkNbLOEjek%2BtoclbBZIscb2Wz8WG38vmBVO0KZ%2FS0JY2CQaN8zUw%2BvGlODgZL8eWYf6sp4hJEzlA%2BrZV27MsQgy8%2B2v7VyZwCCWelwnHYdPYGfPZeJD7TwGyZc%2Ftw860sx8c%2BxhGrueQqBuPh28kMUN0QgKtdejJ5lm8PbG9pD4tLvVfW8JormhDlbKEmhf6yEC66Y4x7cx%2FTPKaG1dESTZHomUvOUmgBo8%2BYbnlExVqN4E9BUkCfED6I10%2FKhJcGjRIcOTgBTJymQ7nc0whX1aUIoMcDZxx5H6ecrClFeR%2BK5v0qRxFSOTyZ7CtWCDrzrmZwPPm9M93j%2Bl%2FGCFH9SUCUIF9%2FAIEiOwKinHDEiSjPxxjt9HKcZU5sXyVbdp8QwCSJKWJuOMh11%2BzPL%2FK13O0W%2BKVMQZxh%2BZFA20QN3em3%2FWu%2B%2BeEuw8FmFj5tdj11coHyQwlOfPwwY6pgErBiUwSLr3sxkr8tmISY6WJVFfDarCujMt7m71FClZ3%2BAOiAGDMLZ87tJx9dvvshshcdF%2FtUKYz6Q0YEohlyzz4E4fy1kcZZivFJq0viGIOtVA1VkpKozhKl6JGB5pEOQi%2FuqKaQ1JnhSEk%2F5%2F3xrfMyZcbiX5RljlHISHNw5MCgzX3ku7jZARQwL11fRelVrj4VTkVsU4923lopfHQBHW2He7r2he&X-Amz-Signature=aa6b56d430bdb2732ffc0c9a06dd3ac9254e3746b41f849c53cf829092583104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QKMHLEV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCpc7htAwFwiSf2vJN407RFpbC2soDhPcurWPLUcDrfhAIhANvNWeSOUbNv%2BcEXRurQeVGE7oj%2BRYGvTRELlNd%2FJrtbKv8DCBsQABoMNjM3NDIzMTgzODA1IgwtfwGUYn3VDRfSXaoq3AMAv%2FK8ZSTbWAMUhhMY7eXSHuWyOxMQhBamjYSfi0X8H2RTZoST%2FExQp%2BycRQCBz8fYd%2F094c5uu0tHXXrAG14PBOFBsKGmu7AjIVQe0ySOJ4O5RbzCKkjrRyEfUGO%2BGqCKLJdGT5XU4Gqd9kOO29LoOW6KzUV4mrmhKFeRDSm1XMDR7wh6oWliMp4UNo4WCaEbScoWCyCrNFiI2tuZqGkyOaLKIUgKYV9s8Bwg7PYZjLoWGA8mUs%2F0%2Bm3QQ56nXf%2F0Gjjol3ND5eZnfOLAkbQGwJxtZ3F7prbiMIG77oE%2BpMMglbsm2HDKotJUIZfocxbXGIrb4MYj8dGHBjsAM9ReS7MSpD4i7tN0OkLYs931NjVUI5SB6rlvIBVbXwyW9qw21eBcujtjXzWB3yrPvrvDGkpzevGHl2gWGHqCK7cic76fwbOWM%2BHUO5WkWp0PFQnI2L0lOWndX0VGRR32cdrCCl7TwHcANFCgziY7cPYwy9oh1h2Mikd3UURlOXFjugvq5R2cJi1ytfoTFoL%2FUGNC8XcRTDl9JoqP9b9GZOqdwuvYmsG%2BVhScNe%2BOtFTifHbv%2BjwfA0AtBvpqamjm85hogTw8S29Y%2BKV%2Be3%2B%2BCDJs5TKAM2P%2FVA9isUtPdTD65s%2FDBjqkAU05dkoAvVeWkO4X2fhadeuTHbgrY1ZYySSVfW3Pe0lTDr9LPR4twoQ9EFQMq%2Flc8ZlAhUXxBAwvkEq%2BCKV516ee8Q5ZZFHXp8pLSY2xOin1FOOv%2Box1c0NORp1Anw5emKlxCYhASd%2BvJDX6nVYXuh94b%2FRZfKFr87OWr0FfkfEck6s%2F0KHX6DNRdDjeqSHSoI21PU8xDNG5EX6fw0wOSAX3kdPi&X-Amz-Signature=925045f178db3bf5673375b10c99d5bbd6e0eb0ee4759685eae72c17b6a5bd4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
