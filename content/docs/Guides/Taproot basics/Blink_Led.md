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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q565JZCJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAPpvX44nM7725UMScueuSsHwelYklYS55gHBKSUxzVWAiEAxwzXTpAr8%2B6hlSABofbR4pR%2FSEJ0uysWt2vClUBxcvkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDG38Am8gRoMgLyTF8yrcA2O1VNCvOKYn5YY77a1uIAm5%2FVaK9WiPs7FEL4miIefniiBP4kl768AyTsXhC7BL4s3nRibSSA8dedbmkbpqHi91J49yK2IwDdNN06%2FIkL4q703Bt6OCeYCGEeegdOIVtw8E5slezrG%2BTJ044x6cxiwZZTAYVAdur5RUELjdR9EgftUyqoYkcBlGLYjCMr%2FTdOnaz%2BJoYtNHdD3KCyhz50lFFBpGbJ1qzjXZ9z%2B5%2Beh86m8qCinwEUeH1dg70apwI%2FsbIip4irmr3yOd0B7A6%2BpynOLTsbkzrf3f346c7lTG9MmOgwYEQmiLdWJhZzr5vlS1T5R5o6S3jiqynjV5bXtspFcVweAIQrQQNZqpsqyRunTJ5X6jAJnJeQcs5Z4R%2BmBZ6uizz%2FTmpf7CO3FMBjQeqKmUU%2BuYGIRnpQxn5v%2BN32Lmx3tqz8Td2VXXIm4ifaKPkWoQWTYgiB8ldNlkFKM5PZoxk3hPH2ide2ghi2ESa9YidH9q%2BHw3b%2FEQdlecYbE6jgZkPgPujylvgkBN4Z4TsDJEJ55HxIqBkMxOpQN%2FoAwPcIIxS4HtBvTxmOsVsAzKAf2KWv%2F77MLcRfNEhSbBHjs9l6GcTLMAodTxUpiV%2B%2FV8MATdmThx1B0MMI6z58IGOqUBkNSQePqs%2FOtUbPI%2FwyFagTwN9lBTmadG7zefIIdqBztePfBUUF5cvBeYm42j4k4FJoc97%2FmDvBn%2FrNJkMJdeqXTpf%2FlGs8IfGM7w2ZPlyhK1PwwivbffGG1EWcgNTdNHKb15q6cEvo5pMoSLys83qE%2Fs1HcYvrExNjsDSsFCeS8ORFrO5hpVYc0BsIKE0ld5ROV%2FhQAf5cWS0x1bvB%2FLVshBm%2BDp&X-Amz-Signature=7c0ade68b137ef3ad15e105d7aab3f40354538fdb8517918fdeefe6242b7e810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VEYS3TB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIH3qnPVNQn0aVnMDc8h5hK%2FKzrJ7%2BheEtLrYwsrMyNRzAiB%2BtYEdcJk7xrAggeUd30JIt13lBLAUkWQwCQ2lk9JuaCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMYZJqFNE8ZBr99CRGKtwDQHAY10%2FD606s1LBKhGXaZnQjr3zgjR49ZeP6saRWPTOqe0fFqfyUwtI5qVZcx%2BJ%2FZ68QAvt3E%2BVM8Ju8IG1nz1M4W0mbzANGuOOiK1lB%2BmoIriZHnaUXrrjFz%2BgDjR%2F18xfKhT5mwcVnyC%2BzF9HRRb1rDyuNRBezqMVV9WmFGPyhcDh1RVb9Ravrcz%2FGZO0r8UlMWbU0c%2FpwO61Dy2Z7Avc2XxK8UjI%2B1mSZKYPIxpuw%2FZkup3kiuShe3ONtXnqlyfwmsauCTkulaUuj3n8B6zaN677SAgBh5mIRDp5WR5c0eRrue5vMkN91MdSCtR%2FTTgjy9IcyBv70KhgVjllBVYcUNBJEfomb8a8khGTuEpT4%2BWW17qWNi%2Fud7QpsevBbyOvknS%2BfR6iGpPuFHF1S9%2Fbe6yS31D%2BfTg2WmmDWtuVWPFAE0yEaV%2F2LkpDjIjM%2BlzeJPr9KawpgvCmKl2ePpfeOQd6UKkMMKEVcGYh7MoF%2FMfpc9i8jLi%2Bdi98vXMHz59zMp%2FkJmoP7gDnuJYKfX9U%2BEjSyKGFxGFauU97IJYiKPjqMwMhsQeHpEM7FGdroFqVDGP4Uaf2feiRr5uQJCPi7rWpPHu1hxwm8ABluYfAtOywDQYjGgcjqeOsw%2F7PnwgY6pgFcXPDBRvkNXXVex763vEOaymkkG8p57l4nw3CHvEWcAc4WrxhdX3hXdgyoh1Rfs2ab960Mska9W1mWyY%2BtkFAmCwUousQnkCZJveGPEOYTbJ0ovjTE8SeyYT3VlvjHdT%2F%2BDGyG2szyHmg0Me0L7RP1UIk4Cgxd%2FUrzAqKMUKE5j1qT7HhZkASfdjX%2F%2FJDcCL0hAeDtIY2MDMjiiIef8r0JingKOZQB&X-Amz-Signature=dccc8caa634e030e7bcacd8ac22004ae3f434b6789096ce613c537f4ca24f46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
