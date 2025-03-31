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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMRVPTK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCj1wiJGeGxqt2m9qX0pYsSuGS0G0FZQo283iD%2Bp4Jl2wIhANUFkvrorR8HST8LjbT3vUlhDZkmX2LGtNJSOfdCLxzIKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR7xir3ptSgXjQh4Mq3AOEcxzDGLUyXVjzRssISwJwv9keW%2FGm2Gb317pYUjhIky9ZusR1dq17%2FvMXmEut3txabGMMQrubJdI1gaC3Utti9JGK76C%2B7E5u3hnz5XEd0r2QAx%2F66BYORNZ0bpSpRe32J33ZzavOYv4KMbd%2B%2FEFR%2BCdftFm2Rg6bfCXNqXMCuJR07XG5SZj9WJKvCovydIQVoQ2ECZYaPRqHxM0zsji%2FjIVPYA0crq2n%2BqFLFLeT2UuPO7nXygwG09xuuipbpdc8GJ%2FJ%2Bzdd6%2BKMwPdH1CNs0hO3NYlzn0QocX62XdzKRpRtxnv9%2FwPy%2BeJ1epE72ILLTysF5HcfpgwHuiT%2BBmfK%2B5TgkrYVqz%2B11VshwpNaolY4pSksIxffaYGZxCtwjVJ6Th5DOVBVOvZa2%2FuOWtxXvCMAMcBvLRXKMVWNEDuZcFA2G01vI1VVL8dEDs%2BP73YMNqhhRbuybeMsUWXwAznmuo6zPLiUAe6sPr9DwBsm1pfYhldMQmOqVaeQnCEMe9lQqsx0HtQoZM4hmWd05xraDNhIbfSWDpGyqyLWnWY4riqmC8xJPspvV5jyhaQitIkcMI3DlyMA634RnKORYqsGT4QZ03nEhcGFIFJEpS0mQkPuv3vjWOKZPxeZUDDDuKu%2FBjqkAReVPgwiY8Y%2BTvSaHWVaWxcUKEwSJOkm39lOWfIGiMN2GutGkHqeFnqTR56O2UrvN2dbxFRMB2Tn%2F4qzIBk6gL67%2By9FtPs%2BQ65%2FwQ3I%2Bp8USZ3a5EWPr3yC80uVIdHNjMfLWM9CoEHLsHfWXrDmqHRw6WjyjIPBJ0w4aItBUkftaHwUR8bjgbo0RY7XUTcfN5sBHqAozSImlanjKazRbSoCwlvk&X-Amz-Signature=da2bc5a5b7d9e229da82fedc71951d12baa6d3233dbcf59f609d2e2f1fee5f82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDVOH2N%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDvf12%2FyDS1qI3EWfBKcec4ILGWQyUIVlOvLY%2Bmn2JSzwIhALBXTuQvMNVoC6fRqSgC19PBf3gFenu55IGCsXReRDzJKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRk45WzQbzhvCX7fQq3ANZ315iyDAde6aPHiL%2BieN1uQmSxpZCtioShMwzunSyt9txJHMezhZ1K%2FlDvdtbW3BEd8OoNOc097mhMnF494vdQWA9MTULbblHoeYKN8lZZY9btuTNn3zovAI7LxKwwa2VNsz6oNIQPZwlMcEqESqiq4MM1CuSL8Qbgx6wjI3h4fl6i6jqMq%2BF8ysG9NlxxeHMTPogyJzLsQoJzsN2Irr5iheg1srjov6Tlg4R%2Bmnluohsiqvj5jGUUESPsda3bDopJWCSPBrhuEz1TiVTxlqOpS4Zx94gFzjjX0a6tY99GWQt70L8Z5au9iLllsnSWvSfB%2FEhSTm1uzmdaoTqJAi5xuvbwuGVH49OeHR5ZA56W%2FQQoypCCezaiknkG%2BFYeRlbOcNrx6kCb1FG3weyp7dlxchCIeQVGr95C47sjuVoapC0KfzcueTcxrMXJVQSfSAaslZxnq%2FV4M%2Fqwx3YgaVHN9fp2Q6F5EF962R46TDsMrZuK0HcWMN5kYBt6kQbof%2Bw4vH41ZTI89qRCS8SowlYGt1TsYf4xq%2FpRmMv7bL3Iwx67w4ivqAhYtZwbcWHidKv9JUokXgqdw1dCmVWuu4tPz%2F3LVqIOa9KT2FZPDxUUXzYagzuuHcD0yCxxDDLuKu%2FBjqkAWQVYkpeTILsaT5IdlCwYkazuMsr%2FvRPt9XFkCmBQXINwJOcxHpWSC8RxHlDFWqeBoC4yY4eRP3k4%2BsMUyxXnuehqgGodaX%2BDngcsfcDqWSBjGAvKMZT31FY91LqArllkB5plFm9u%2B1A1p05bT%2BxLgkHqQXeuq7WCfbCr9EcHcMmHRMfII8RA1y0HOdLV1mKOnrqbJKqFoqbFShfC7gXjeBwPJwp&X-Amz-Signature=d027989d5f8b3fe7653ad854cd57462f3c65cfd12abb0b8179304bf0f7549300&X-Amz-SignedHeaders=host&x-id=GetObject)

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
