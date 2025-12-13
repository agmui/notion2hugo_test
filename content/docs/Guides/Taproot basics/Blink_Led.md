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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767RHBVY%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD2l8ns0AE3Bqp4XxbbfEDCEMMKjd%2F%2Be%2BRyRsUB%2Fz3H5AIhANyKal4zAmdu0h8hBr%2BhGpCXnDqtFZ29JanugecXMN6fKv8DCBIQABoMNjM3NDIzMTgzODA1IgwgC6j5fkQawlmjZL4q3AP8JX4rso2YEjdw0PjWg%2FFqc9pT2jdlw4zm4U%2Bma9lTDRxIPSOYBV7nueEThesxWT7rcJrc0SlyNo2gcDgAEaRT4TWD8SjMHumdtG4RxkoSBQ%2B0JEmYE77Z857%2BGAViyyWuphw7QXthT7Sq%2Fg8F%2FB5ZYIi9UlMjpFbNvJ1j7kzWzGdU%2FGSWXl9FW9RtG1ZqabXVuDYYkQCbqsrKD4jOAps%2FMGnU82TEMzEfSe1oWffRsSzHnhsaNwzB1jfLUWQme3ZhRZXmvhSpZLDtvLz6JYUpHJCKuR%2ByUR6yfy8znSz9Ku5pyGnpX%2FGcgLL16bnFrLU56NNv%2Bbt3nMB%2Fg1QqTthTqFTPJeITboh49hFqHIP0G38CDGevsweC4qhvG%2B1aobicBzPB3biBPQTdki9QgLQ4%2FBHn%2BTIiN%2BGaKYhOcEgFDmPysEsy4vsetRdTf14Fek0E3IuHjZiadFG0Bu6%2Bn%2Br0OOPhjnxUOggI5pSkeY0vhNYJQ1MMi0lFf7sv%2Fqp7oJzKs3sMw%2B2sMLPK2x4GyM%2FDPL1HaeKx5G%2BysE2MSSsGLdQ%2FpI2%2BwQojUTY9n0m0eBi2PJos1jIRV0o%2BoM1cyXaQvZO2fxPfY%2BPEchFfmv5wtO88OCwSGJqj5jN3qDCr8%2FLJBjqkAUjxO3o9P3PMcOX4DXmejZBmFaVQLagATBR53h8O4yPVfemLNPqGiKucgYfmNMWD%2F6U6zPjc5TJDLnv0X6MRWa%2FXjrXas%2FxMsHRRFEg2AqDzypMjrl3Qpipcyzh%2FvA7sEHA%2BmnJVJ2mUjzQODlyPCEhbwYW6TBgu9KkCeHsuiCMdRegb%2FKMTP%2Bh6f%2B%2BDqzPMQEiADL%2FXzUq5oWJybeHdx9i%2FfcQ7&X-Amz-Signature=c75ff2dcf539839b1fba20948a8cccb2227bae004068027f7e2d4efc6197702c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VGBWSOB%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIB9bYKmSBu7bwPjkDgkTI4S9SD1ttEFxTQZq2177QQLmAiAiuccSep5Gx3%2BudMPsND7qGMjjRZ79ppiJL%2BtG8xX4xCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMR0j6SC%2FodYKpQSBYKtwDsS6%2BcmOs6j3rPKrvfWzIvHqPU88lFWBtJLYkOLw4mjiArP98GcLwErjtUOsAW0XdxRDKyGrA3Iwv2FfdAphX1afIZwDf38ISVBm6b60zRxQw3TFA6vbVC8I01JW8qNusoBoaGPCYlTSuimVy2DcPn2U9gmZxLlV%2BO2M7qC2759OxH1fEON6KjRveU7hQRIKZuonI4nIq6LjLjX7jSuF%2FlvPElYv00c0LxGmmaL242gRkRcp8ry3b2GzRWMayPw8Cmt2gsuMYe%2BzINjPiZ0caQ7EG8R4UB6%2BBoOnwu4IqxijwHN3pnnc0y7ulC4oyKhZN7URvl7TsrTJt55Fj%2BBba8hMe6VnI1%2Fjsbdw1Gtb16CtTn86UBua3Du%2BKm8YRo%2FEZNGot2%2BeQP%2Fnejo%2BE8TCYi6QIrFURJ5fKebU5a08eDwUDrAohu%2BMk7ZUiVJIlT2BQ8zybcjNWpRlnu3aby5VI6EI%2BFn8h3OsuYYe%2FwvYS9aEHBwcQN2pUNr9O7d6Z6MwTyNWT1hnwjrnKEiC4JRpMrB4iZQ0yMlpgEGUT6rATYp6Ogd4JLiuFHHjNWFSCbrQFKqgxvzbkOU1rqz56lmVHAkbMxVlGBTWLjvC4hUoZ6BK9U3CBiDX2VioNdzQw1PPyyQY6pgEQ%2Bc9ovrlmJ4%2By%2FJK212MR5Kd89GP%2BfeU%2Fy58yKz7ykx%2BINSXxxtinHxQ5QxaiSEwjKLhkkNq44S0bP%2Fs98UJBTlOMrCnk1EB59HQfqTP3EH%2F%2Bfv9LVJD42MpYWoXLUl3kvZUwM1K4zyAY9zZH33K0pZG%2Bn3J5CeJugMYdRU4xp7%2BICQapmF%2FUFfi21bM%2F096QHGNsW8JfiEyICkL%2Bd0A%2B5n8PSXg9&X-Amz-Signature=a4667b9e9b729fa7be7e7f122301c5b36b61937ae27cb4dd33b00b20ccfe13dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
