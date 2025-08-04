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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJ2NZ2Q%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFMIID1pkiZYMEkakeFTixHMsmEzDnwadlWeqZef5iLmAiEA%2F8MTN9RvlFcb9YK%2B%2Bo524MyZtfXhFYwSmqvXokF%2FebUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGYeVx%2FXzWu3t%2FnxyyrcA0v%2BRI8HgxodxaNVw2zUYCVuNFZQCB7S8N3%2FW7230EEIc0Vt3Oh0xpqefqt9hynHLhoxQtsIjlobEcmVIhUesh6Ce6zIqaugIz976QRMCvwebWseFIhsrpWHPZP62R1kaTn3M9STxi5sCF5VDd1JjZ5pBZ%2B2ztg%2Biv0rn%2B0m%2F5kjkxqV7l4IgA1nqq5P2OBPzvmoYgUwEVF%2FpyYxERia5h5zKvupm2WQsRI5Wh8zoj4tOC6oi%2B5r%2FB9yf6qs67kVKJch9NZyf7HT6xUNmqu21L0OkIPHgatKuAr7EYfQlnhanweHu4QL9CV6RvidcFxMX3xoi6F9OWSKAtPRh6bvdGpBevg0fm3T6kJQSrQrlie%2FcAKxWaBuGhQrhUOidINDpR18R5VVV1t6Je198SYaeXsPNRWEcvB5a0tWHT1g4CFRd5cwOpL%2BPio0uAt8kGm6W7ixGCOeYY8baOw4mMmIp5NOad%2BznK03hg1nSEef3BfGL1%2FfHF0IrkDoeGovBdhdvLaLoAn13gfytQSFL8CUHkMaNxeNbxkENzD%2Bkw6Mn4r6ukDq038GQRZ5rK%2FHO9uUA%2BgDKFi57Ivz7CvthpOR%2Bjj8a5B5JbEoMNUHESy6CYlYRaUXkk7GKlHxcZ95MNSBwsQGOqUBOoJtJ3wSk6e9vVIsanO7JiFRtWzSshEqS7ARyEQpz5HPkx%2FcAxrmOcC6hxT%2FuC6l6PQPbk7OWV4ZcQZWtVJP1sQRWiJRoGZ4aySYwwEsPVuh3bzfPDrHttrrUtA7kxn8SW30%2FzppjzsR5N8wvxBMFkHTwCWOY9dWOmwntp2797%2FQSbjLO5ZZCSnd6DkTANsqE1LjJeL1BjAeeznmczBaotiH9FcC&X-Amz-Signature=3c8cc1a6ed9fa47890754f12721362c24ad0e73e43dc36129212422b76e5c281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PT5OHVZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTATrgP%2FVWYpad%2B%2FFre4%2F5arMdRublZnj4%2F%2FFuUsMcQgIhAMkhsQMHP8Aat18VI9yia256obev21clGkC4Y8hWtPDoKv8DCEMQABoMNjM3NDIzMTgzODA1IgxCeISkWLWLMn0r1%2BQq3AMkr6cGDdUDSivHeM8rcOHbaKYdbKVE4arqAbPoFK53wifMTJOrrPW3Lzz606p%2FSO4TrCyvn3JHzPQaTHknlvjsmfyrUHU53dnzLB1H7kKWFvTXvby5mPgjPS0QWqvKjFg0fadcMOG1xCcWzscfxyPX5MzHgun%2Fb0TdzJn0nQPpivpEQ70%2FvRwaenCQxelURBLpkCtBfkNwqvYP1xYauE0xVe4IQ9jkexe9TNb%2F4aFAAWhgp2WmsyAlcQ3aU9%2Fp0ILyyQHqtTY14Qyt9Pik2mJ49gVcoA0sbx67OEFuJ%2BKjg2NZ%2FNv9L8L6l2g%2FUA8zJFfIswR1933PfzDYl299EgcpFOnbV4K%2FaLpWxp3KEp%2FE2IJzOREo7sZbi8TwVp9u9mjQkTws6PF8j%2BNky%2BGrf4gfIqG3Dxb8jree%2FeR%2FV%2BwcpAEmQbzwNXIwIC2EMn5B9d%2FbebMK8opyWbdYP9x3YjNWUcqSAxIdqJ8%2Bd77ElC5pqnRvUMqVzungC5aCe0Go511LRkysYSS%2B5hVFBE7T8Mu5SdXJNtWOiiBPwxGX0HO82jEvpCSUJwOBFiTbFEzB9TuKP%2BxVpEmgGvL5UP%2BHrPHTbLAIi%2BFlRmSq8VFP2CK%2FkP9yBEP5lB%2BTY4h4ODDQgcLEBjqkAU0zB2s%2By%2F4qkJc3j4JqXI8j69cPFtUqW0Imac2sFxWZs3UVGaZGLd4Cc5R86EbVFqeYzlpkYZvuv9Nflv3423Srk02%2Bzes3VpYu6Olb8kroHCgUEMXBc8%2FkmxAwG5f9y0D2bhx20jtEu3qnnVM0%2FL09v52lkg6ObmG8P6nU5oCxlmfeYYLP29BjGrOQ13qSm%2FokK6VneH%2BJrtSGTNSMiXR9ob0D&X-Amz-Signature=ccc637fd188763dd2701fe9e1b4c53ce49dde06d8e42c161f8e2542e3c357b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
