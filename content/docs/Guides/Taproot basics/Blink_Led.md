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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YEJVRYW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEA7CLT7RIiKS8Wrbxn%2BTFW5UAmQR%2FwvGAh89MKz6jSXAiEA9FFpLf9k09SL3Zc0EcFh%2FshebOzWIsfvOQ0gzSo8Wbkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAUXGqgF1AiAtyw2BCrcA2oVo318p85yYA2qrBeu2RFO%2FKWsYHp4ta7B4FR%2BPiIq1krK3jPRdnnQpDUTJGgNAgoS7MhLd2WWWpliGT93PVq7iiMzcOcmaJ54A4x6g1AXSETE%2BWIKG1eGaJlnjNiaUtEMIcVHDxdCweXX%2Fyy5BZW4iseXl82FZthZs%2B8bS2HGATnq7fGjdQHdaRiBW6HrBPp3jbpKZHSRnO1nOvaEFSUmf%2FlGSo%2BwgCHRcX2pgga9dXI%2FwCB7HjVa4rojZ2WynzBX2bUlUGnnCQA4E4OGbbMEC1DNJwBh35d36TtrhTKjQDawbFnFgUS57vtjBaqtHsa9gLMQ8wmU8pJYtxSZfxf8kuZPwSw5cs5xiQc%2FRmh%2B4rOxKYoiZTqZOVepXtKNpiFgoWi65L60fHyaLTkq%2BYGl%2BjqmOoHGx1ll9FCGA9Ylx9iSaGv4KNkR%2FqvY%2B8lSCw5gxveCUm15mGKekNNRjKt3DIOc2zUj%2BCF2XBoLsc6svN7ZwuTViDax41E0BJOAQxnjRPms6o3rBxvBy0Z3jUh3cdNNb%2Be9JryFAexMHQ0wtejCPOD2YA5cXvPRMaFVUrrqKv2wxsjkAgbEFaM70eECNxGGJOl5rIdK3%2FzFgaVixpl59ffbmaJp%2FZRiMNLBk8QGOqUBLNbbHYA66v4QM7nsLas25h82s6t1tmMR874zBphSbyHHgqCa5pHqUweOGM3qPGM9kycWwQ%2BsXGxrkft6Ak%2Fc2hdxdwv2nTkoGyWHFnOCJ6XTnJeSsieSLQi0lFx3E8wWBQyIDM9Y3E731izdUVvBZ5V17N%2FQRgnaeASQCjbBjjDH%2BDSm0uM4Ca7sPHHU2TVLOLloCZglIXNGu%2B0dX0JO%2FidQ402L&X-Amz-Signature=6429296604b4e11f8d8c0bac2c2610826f33e688a4785213b9144407355be34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LR5ILHT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBkVq43CTFe%2Bh%2FG4rQiyNRRQ6G81Po2%2BLdUUyLfGCEW%2BAiA%2F6B%2BCq6sRjSjdn4qbGSBseyE%2FTTMWWyTzcYJObKVHCCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMeBBFXaKOOeXWOPTaKtwDP1ynS4Y86Z%2BxblDqW4qbBLLgDVyH4G2%2FmPqIFlSd8oi4irRuRrpcC3ixtrL5JfOSmhHab3svfvxSWfaVY5%2BX4vKWUQV23YRnJEoEC6NcBnWtzrJJBZ8YE8DKy%2Fmt%2BEMVctmgQwl19j6wzeIXVq1eh7oJI%2BpvdMralLzm2DunCh2SwTf86ieiG0pa53LxYFWyNMxt2CTaE6lVEnC7myPN%2BpgzqfQBNYR%2FLfyw2t8YMC11a4XKiT9ieqNL%2FYFC3VHw20eaALNhP7%2F2V7atr1apqC7OlDqQtxM8mxwjVgvRGpZKefz1PAHcaQU6qwSYvwfpNfbt5%2Bm7hRKWebmmDs12zk7YAXzMxuxWsCc9H6WacF1aVyWv0X2e%2Fbwwfp8Z%2Bbb1BbJIKhJUF6fDcSFRXO8%2FQgb1iHQpfc%2FB5eNJRdVgWGo7DQ4SbtQPUj1L5V%2BSZir8lDrPt2V86NyqKnJhx%2Fd%2FvjJUSlmumjAHJuBLZ7VzIrUAX%2BfnYoLthiSNH%2FDdoCMdpyRUNZPRfg6iVy2w85%2FMXihaEuBwmDvRR68JjBHFRhBEtB920xGe6oGyw3pLVI6vkTDNlgn4KjV42Vhi1k2R%2BZjZ%2BB1WkyLLCR1ElJAILu8dm%2F3Sh1mmXrgSUK0wvcGTxAY6pgED50ypOMS6bnKtoEqJPamN%2FDXc1DVD94nUcB1ONOQmNR6bf7NCJmo5rIYY2NrqQASx6F%2FfQ7vOf%2F2KwLS9tkAUe%2F7ilTUgnCOLjUqmF6XwAO27CgukjXchqp4HzBEt8J9C1uIvVqp0n6TQ8npegg%2BfO8u2aX5hhXsu6MAszLBtVqIbz5ARzUZ06dv%2F%2FiVklGEo%2BGDx8zTmo0gNXzx0f6X0P9yKvokb&X-Amz-Signature=5a0bed610242fcf75237faebca33f997ba2ffad7ca2e2e1f5e3f4e182759ebf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
