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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XP46WKH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICYUf%2FS5iaSm456V1wbvvQmuVeDr3appaU8JuAVl2HtlAiEAmjVx%2Fc2AI1zoYnTE1JPssvjuV1Y2utgjLE%2BIQOOOjeEq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGyku24G%2F%2BB5u37ybyrcA8ebhaiR9nPneSFPie0dBKcXMOoplh8NrOMf73NfV%2B0uKODX1bf32pGOMJ2jl2nnbOnwdHanTy%2FD%2BZWYOItKE9460omDAAF2scjCLv7AybJHweuqnB2e3FtzUzL3jfeUzZh5CWkzHAptwfBEH29hg%2FFPaQ9rkfBqxuomYqPs6TvwYbZ6aSxphdVKds8Lj%2BRa%2BYvT%2BN%2FZ9pkNHwrWxg09WKx6MjVTxTUevHEbipUaljpca%2FyPDnHYaQshyZsui6Jw07HV738M%2BvcONQLwk4j1MTizx1IEAfmSTryvMaEm7mKZhCI3VyhlmvAnQN9Jbp%2FyXzXcCm5m1cUwksSjLZ5XTZZLmC01LjuB9v3LiGZuOXeJSFPqtAyNNdYZpQ%2BlgesLr0ZZsOWGmOxeUzG4auZIVRnDlAFoG0033O0fXrFAdedDUxDl%2BR83ncE3cL9nWmC06Wf0mnKZiVLMRpG61DODy%2Bk1Yyr0iW3L1wZ5siOu7QyDXdc%2BdN%2BpfzhiBsEqj40tBIuU38sM24XpDBMtFr5BAXGopX7IMoOCG5m%2FOWEgvLwrX60Y2EoRZB7ib1njhA9OHOHkKJ9ZhUBi5RdmcxDZPBaz5dmd0T%2Fmrqf3Xa5wkzeHlM5OP9Ktwn13u6JVMJiEyMQGOqUBioLk8Ccsti%2Bwnb7lc6SRtXH0mDTfndV4fuvMxR1UH5YxqS4dgEIQy7PIHpeHD27sX3tHDrE35MQ92KtsG%2BcGOu02v%2BFAio4AJHeI4CAOJ%2BAw1aoYMm0Gm01xvdTOGZZ25gAhNoweRkpC9iGIRuVBdxqT0cScyzhSPSGoNq1RF8MoEmWsEXBOa39hpHmrdCRpRaTNv8aDEMflHy%2Fzf6dYcRr8q%2BK%2B&X-Amz-Signature=d681eb47a35840d1ae09343d6c2807655ae5b333bd04df29fab4ce116941ad65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54O45WE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCWi5HJqhrjuy1CLAEVtiDR9UAxxzPetbK1QyAL%2FukHEgIhALbHmL1bGI4rNhx%2FPcFEZzbLgHz5X6msZX5%2Fd5q0UAiHKv8DCF4QABoMNjM3NDIzMTgzODA1IgyoGSAQu8lbhbfSbS0q3AOZyn8pqYVO1FUuSRRyEMBRhu49GAukRJjVYRHygrRyB4GS0sd0jfr7AwM8I8QdLccWRe17%2Bq1hlwU7VFDn2FASBxcuyo8dw%2FXT%2BOilnebj60Qg449ET%2FcwkXhcuZOsDfg4kbr8IPF0qLy1g7f00wdMW22CjIyHUDvlPzVi38OkYNbcSoFAkrj2cKr2MoMdtNUK3nW0jUmXndkG5P78qpd%2FHY6vVOxU7AQA8NxJlbfWj%2BxWoRBHNxeFuCIgPcsZYia%2BQtXpl2D4POVPxUBK7EYS1nPkAih%2F59cnr5s7lG5sXD0X42km1%2Bkh2G8wGglV%2Bu9ctksF5CElhVfmIEd%2BXswwOs3Bq%2F9dR6zSQY3zTVOszZAThQUJ194xg8cBLS264EuEqwM2CzJXtq4%2FlgNC%2BKRY5xRnki55tQaUoT2aEe67cQvPYgGBdPhjHmsiwS1acawjplkhpu9hM5TvfgWU3AMoqaWIcGfpQJfZu9PxWP9E1KyYjQLUtCRROry%2BghYJIWslF6JwB1idcOYOCnlyk7qC9sQQi5BXuN65OoBFdYbORFLcle3hZ2%2BiYv1L4jU63XesgcLFH0PhQVkUsRMMEyMhkT5U5gs662pea9yAJah8RoT4%2FKZ3Zjm9OTwrVTDpg8jEBjqkAcEIvIG0yqy4DG1iPZ0oJVm7k1NgAU4mnbXztPDPdMxwXWKSj6jWJNUthFkkIfF%2By%2BUpz13jjasuwxSvYiyLe%2FjUP7ll30zyBKMr2claLLyQUb%2BgEb3JCu9i3gvSsaeuiYtHe1r8AJukBaPKi0AYAKrsTO%2BEQX8SHl%2FW%2Fesr4osj8Hr3yMrvqSxMpKg2T5rpa%2Frs3VJeXbRhOPVA74kiLI1uqaWV&X-Amz-Signature=e335895692a43ae7c56759f3dfb7fa7edcc84a088566391bd88c9a6e4ed93e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
