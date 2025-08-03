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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRQSVCKJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCilFubNQey9yCyYpP4bnq3Z9g9k4UFV3EvVUkrF962rQIgY3r0lPManHZm8UJsNnr6TA0vMh2W%2FpAoknf3blCADrYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEBLZvAf1T12NvSu4SrcA5Uq%2BXe7VVZzROOOB3yzuIHm3INo1tKaa3xBZRDRnf%2BTQrVg78RypIlFYT2trt01fLZLKJJKQok8TeMjkApI6FOIm1YQt5TsOST4fr3uz4Uu9S6YCoyVniTTiBh56jHGiCx6fvcaCl%2Foh0q9abyMW58AtHYnPcZtecLbJMNj9pKEuhP9EoX5nqqs35dqkIgV6cLLhlXPg6upQqWus4maZaK218TZcFgzSZoiwzbBOnX%2F85uBUD4rVaj2RkI21A9rHKbmU8a3hRZleRgnqtdBnMOwu2zmog28hNqDedAm5g5wqthA563CFHAdwkvnlmpbQ07%2FGjKuRqTxa2W52S4W0xA6KFvwGnm3q9ADOKulfhNSdVSMYo1J0R%2BVJhvZCmZwP6AaTEWO1i1Qv9yhNbYs6rnL8NULPfARBUtWbau%2FPt4E7dWBGi%2Fh7ezfHaid6MUFlC%2BZJbvqoEBwlEFLpKuWn%2BLcYRE8jKMcdMD%2FsfQW5n3u3ItgFJtm%2F1g475jrIL1uD0iQKK1w96hwadoWCYMVFWyrZ7L0kLOT7fzPpdwGjGqhipfyfouAYbOp8PZlW9m9JlEiSQtHxnUvbkErp2trL7oFeloqjYw9f2Qv0DRMOmXBM5gwMFkNvzgY%2FFR9MKCAusQGOqUBKzmZpxkfKXjaNNjSsvbR7xhTKwJNqW5poM60NeVg9rLJOGo8bVoPCBddO9D%2BETF%2Fme5skVLGNcuBwtuGOIkA40NWDPitbj%2BIyOfLntGM27aE8zWczUE%2BOf%2BMnHI6P9niJfhfXyMrM%2BY0YiyEwzdCyv7sgGHQwsDkthaAlEHDS8QYBe%2FkKsElQx2cokDcu1v14LvNBw68G8CtbziLlqgeqkJlsDZG&X-Amz-Signature=caa88faa4522e9daa4e3c36967417c6ffe38cc3bb55dfdc224e5f09af57bccaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNUBHE4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASeIGRY4d0cwYoMqHPmI3E5hNWP9k5WU86K9jckl8UPAiAGEtCvnHY8C34tsitaIfV1JA0azxB1Q5a0LzHNyuxyQCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMiCoBCuHepR5gEC%2FlKtwDLt9%2B7Xy3oIjXR5Eaz0jRGBDyA9R7%2FcYxC6pVAL2%2FCoTm1%2BsRM5BJjw9WyJ4mP3upMSuYCd54hoJlr3qDYmgcRrMKAhCIVkg%2BeAd7X0P3%2BUGUjwGTMhYUgGoTkqiHHWch4AssAZEO2LDAai1JRAQj1UNoyB6Dg%2BIDHzkiDLfhffp6AYOaX%2Foqg98SIrf5Kgh4VwyG%2BdaGL%2B68juqOAjVbhT8zfghggE7nFiyPFuBY7BCYmLpDs4b3dHhSW06op11VNuvqlpmfuLVodr9h5ot6cFu1nyIOySJWypV2ayro3jXRuFu81qzWTK1yTN5Ss4%2FjyJmqzETd8Dqz7XsTecxcDJnuissgltgQyFHmCA9MIDDiGaqNj1gMY0UmFI5%2FvzC9PCVfltl8MjKxnibReJufwfXqBg5w34zh1s8UiUdSYdtnSxxqHm2FJqpoQ6SsP%2BId7GA8tytl%2FD9lo0xeqpq8PqmuL7WDxsHHhffi8pUB1Wzxa7twJHhoSugvlXR7Pw0RSk%2FO969aOtmbmyV0%2FQPExGlbsz%2Fts9hv0hFplhMB6AHhgI4aAxeDJzKoOxsHZ3RlStRIK0DKKk2S6sYZ9vzHDnkouTKUAccFA2RPKo4lnTPMMT1wa3sE2tqN%2BugwnIG6xAY6pgHd9vwRcP%2F9jRdo1XFpv8kTuydIpx3tpdoK9YAk0dv9mH4PH1EFXOZVukgzWMaPkONKFbaaTEa6%2Fx%2Fx6giPrrWC1vUPhCbno%2Bber1qHLVV5R9vK1%2BSLLGQ0FvDKygiAqxGfi6Pl1vJXksCFlBnjxqAMNIpi%2B7dX2ZbUWpZkbZ17yft8MWSAAquufr%2F%2Fa4Cb14FfErLVI%2F3kzMm079yiiQUB0vy2axP3&X-Amz-Signature=ba0a45fe3931bc23d2dd15a6dc69dbabd293718353c1ea9a320c5f65ca943523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
