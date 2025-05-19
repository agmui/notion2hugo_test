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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY4ZEKJP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecff1Ai9zmu9b0z4%2B4Y7jqzplo3Rgz57GBoPNetqDmQIhAL41BB4ZT%2FfnYvs08WRDQRhvi72Xnc%2FLEKaek1g1N2TaKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjSMaJep7LR5PlB2Yq3AOPoq7we7FDcA6%2BTVZ8dU3wk%2B0NrBVsv%2FjpdZlN%2FCEfoPuVfhrh55aglYX78na%2BObdM3buS8oEA63E8Pw066%2BRXPjFiDmJ2ljXVBYO%2FH99xD3gdckf9zQ9scqXJx1yZXXRiUdKzfQefsW3RH8ULRYLZQxuuRsH0tcetfb99DVBhlxdrkLE8J8eXFaA30MTTWwZQBbvhMP5uldFzCZjG9BOXNsoVvBgtz8Weu5CDlxG9o5o5nVE6ePwobIhHWokILEkUX2Gc8xxqMGz6MhLIshNNptee1mR5nzSTngJoGch4Nzo%2F2VEEZ2v%2FWbD52CuEGqSS5%2BVeVdzr1ofp5UQopyxC8xntB6LmDsXGYkh6%2FuLI5qHTQtQgRmsyFiWrlqY%2FWaPSliAVICBVyYC6DOZmoSvCVSF3h%2B15%2B9WlgGvn2aO6wf9OHjVlMqJBZCJk3x5PK9MaKtOFttp2tKarfZi0LCR6oWNH1mZduFB4OflGOQqemdSnEBleNFS%2BKgQC8m8zVLvUtabwsR%2B%2BMCQ6qVx%2BuA3vIF3A0XY%2FNHA95AvtanH9thcujhbdsdQFqZvMyHXUChprULaV7nAA8b7RBCnUY2bwakDtfh%2F8HCHHL5VB1gOYqzAt2qOR7%2Beo1Z1QijC%2B5azBBjqkASUrmAbnqOdOYUW%2BVuQirh9ot5KGFt%2F1LPweESly9dFpFu8MszXNrTrBCYA3houg%2BNLqA%2B4rNGAsEFATA%2FLZN5A%2B1LAZoEVIMSTLlaPOszMRkd1VqUrksvfu28sssGnhswsb609h33l1p3r%2B7wkMtKwILk2OUXyrUDRrS5lXyYb3jXb9VKAY01xAMb0GV3VQL3oKY4R1DFzoy0RN4dKlyg863pe4&X-Amz-Signature=ed5f31812eb1e8a06828cf8384d6987f1feea128cd696c7fbec9d44d38777d84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ENDC3PK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ2SniZ2quItFjbYySqFWa2xBywHBkdaqX6n5A0m4aEgIgCXeHgOQB0tOd%2BeIeGFmeRKxhVTHhHPMBQPQNrx3rNVEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwZt%2B%2FaoaRqCzjQ7ircA3Tg9708q71H6J%2F0c1ptKLIf9Wuolx7WUrcJK9q4zveFfPzBn%2FFglsYY7vgjKoknZRkrI5HVglKg0rfAqsyNnXuO0PnOVdj%2BH7P4g7hsHF%2BKylnBFpRkF6YZZaGoDx7QVu4iBx2F9afhNaxyT5TtB9xq%2FE%2B2kBQ%2FwDrUU09cWYnHaflRUv3SJMUy8niYxiU7VPZMcdBnCZBeBVz5KOPv3SsTcgOApIitZAHE39H3%2FatU3lcMxMWIsNE2Kx8DkC29R1mRZ0hHxl0A7MNZi5s4ik9RmirklqB36Yw2uhtxmjfGHc0roSy%2BGyNJzk%2BXbgRWgzkRRoyKMFU2W4N9Ipt0lwIwHRIKyiDwIa7ABleIayHk%2By8PYZ%2B3lFidnRDiK%2FKXDyUKH6VTyFBPxac%2BEeWNQUUWIfebxheWsqZ%2Fye4Hll0XaYpxsiHoCrRN21kBW6%2Bj51l6kjXLJAsM7RodXlkUP8C0CCkHW5L%2FlLVJa7QTWjGOafzfcg4yhpcweuF2Vf4JuvWTTfIUntK9pkMaSw60Js9FOq7L4QKYrewRgUawSOgN6lK2jY9aTGX0QqOMTgg6ttAP1Mzjih3ugvbHos8rYWLyz2oSLYMqQ4QbqBKmMDpDjxA%2F5v%2BI9RWO3PzsMJDlrMEGOqUBCuVS2f9ddC%2F9cORRZJ%2BYNlnWwstD28TEhUWIgAmLIU%2B96MVljsYr3sUQhxOkmjZPFfbr8FYKCjfXaBmZyEzehUZ%2FSVSmxasiTci4NL0K%2BQ2Jx9P9F5HjXj3J6GGm%2F48SEojPKIzH2SC14%2Bpw7JwEdXgLd6Z%2B35fq%2FdE57O4TlAjS%2BXuUlD9bkiTxwCBmKNqkYshiud5xtWIipdIfP8NabEoyyddF&X-Amz-Signature=9f326670247be1091f99cdcc1c63425f8e94459a8832625bcba442e982e8fc1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
