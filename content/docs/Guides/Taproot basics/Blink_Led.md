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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLEHLTIL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQ8dUuw1r7huVgn5M%2FIEkzTkRYe5i5Ai9gucMrp3gZAIhAOjjbUGhIibiIM2Ad1Hjwb8HN%2Fmm6EraCti%2BPgMARI7SKv8DCEgQABoMNjM3NDIzMTgzODA1Igzr1wNQF6Uqnak4R1oq3AOMT%2F2O4MuscwG7%2FWp48GC4jOr1gY8bS3QG84yrMiJvK3XYDyTq8TC9I%2B2ob%2F4K67wSSwb6RsaVPClbonIIq75Kt0ZKoAN%2FQZycUMinUD4w%2Fgcbi3V6BnZIPWHsOtSNydVuOxtmngY66zC7O4qpNrZsDCSGRG9f5Pmssootw6G8BP0etPThFua7E44Lzz084ynDEOHRdTIfpWzkyCWJ%2Fz%2FIJtKkpSBkUNXqlXuqr1P7PqjVU3hEolCR4%2F%2FP7v2oqWGma13Dp4U0SmxxDtLOy41BMgdIT3QHeetEYrLgyEh7mmxU56uS717o2BeC%2Bg%2FDwhU5osmIsv5M2UsNwVDoKuUYTb8IzoZAwTzJCRfYHX5BVh%2Bcy%2B3%2BvyXeCbAZZ9xDsu9IPMALdwV9vi666EX8y8%2FdBOAgcb10RCM9fg0BToGhweYVeStT5bYRw6Go2hKTgY1fIXc6pmGY9QSXk754QMxYOUk8j2ehv95Bg3Olq%2BlQtSqsFzCpejL5KoGPI5cJw8vBjq%2FGD%2B%2BY%2FcqKM393JktJuK1nwNztdvFBeXk%2FzJ9K6JNKgloNwnksayUnhrwBxbypEcPqrlSjtgPYDLGxvWQVXu%2BuaiKPEQWNVwl64Dpx2gwm1iVmhqoJXoIGfjD15rPABjqkAeuzg3kR3EJM%2Ft%2F%2FQRJOV%2BR7Jk%2FJ2BL3CVKyH2w6tkqHqVdG0NeyPcKtI%2BYhjA%2FM5oqKxdsAlwFTUxgiM19lqci7sAJYA%2BjubzgbVrfgKRE4t%2BHi%2FOV1OMAkZwO3iqLa5hm9soAnjI0cKVQWWI0CJAYY5GSHBrp%2FW%2BB3v%2F5jpmMVTGyL5W7VOPiDi03a6aAB1Vk5xy2ZHT4pIK8cRk2UDZUReoUd&X-Amz-Signature=dc5efc5429757c374ef626ee2d428037bef451bd766c749253f0d2a0f2ac777d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHC5KT2E%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARPiEpQbI7BetHtFSuFhptaWWxlzzkCEDIth9GYYXcxAiEA2iWCUq8Dg0FTNaGP4GWfwsmyE%2BTl1dSnJ%2FLCijTRjaoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNfsUfx%2BDdNeuxII7SrcA9q26C5ybvwYk41soKx8tmI0nUqu6lfWNS%2BNRt0QOUa2xrTx%2FiSP1DMmDDC0ISmcA2SU81Q9ESEm41YWGdF5MOwYKQNUMq0Oj9a4Zge374WNPq1VdUOCUArIlma8%2BhHY0GvFebc0pGqHHq%2Bv7moL%2F9%2BAIJd3S%2BxCvA5uKJiLyMTpwEnLLtFaW8gSX0qPaMcM%2BU0qj3CFggVWeKxd%2BTuBX7B9q1HFTVF%2Bhis5aHS2%2BWvEn0zkYSMK369SKuiOeAgKaMJvGP8AGieJokr%2FmA45DOTHKUyNp8S%2BOCJAdpJsNEqyNFZIM5Fzf0uitkKnK4PJwMj0hkPPkQib9MjOrCGQTCviwJmgSyOVdi4ZvxskwKu2V5uRvwJHn0ZJSs490KO%2FubZAyTBv0pmAyqx%2B0JhUnOMoYnYflGB%2FiIUwSR3DujogX6t%2FKb1PM32ZK8iHl5KheU8f0pym78XS1%2B1ZpfKGzH4S6EDbsrO9HgTgrZKpr%2Fe%2BAFfrSSnEOx73kC01wugy%2F4cSihgOvM28XYfi6Uytajeau9A7d3dEFcANdAqv%2FUWJ7BZOtVJ48%2FBgZNcBsZZE3HrS%2BbZLqC%2B8a%2BC%2FUC0FpkP9kl%2Fao2TRdUyaICSopVh9Jn4yFn5zcXUmu0%2BaMNHms8AGOqUBFchbniztYF8luRdTOrlU%2FTTTPzXJDpE1xvqjYreVdBsrqxf1AOsgtlbAlbtTCkyGSiUnsg6exZqVXgTLu5nJFFPXf3ck15euSCNpqf4SM4P12Eo%2FaqT60LruXfFmRaLQV8o4VJsvEW%2FCEZH%2BgOI5bjrD86dke3ecaCjTNunyWOeAmiCIh2H5JGce0nepfVqkJfPbyusPGoJlKbMbkpKUMqbQirtc&X-Amz-Signature=7b4dcd750bc7ce262014f7f27d6ceef08ef798c8093c60db7f823392b25444fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
