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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJWCLXL5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBpnJLQwYy%2FiMUPjnQG5JV84X%2Bu%2BpBBJUnSqnKf1PRmAiAzyITU5Yg0IbBX5aj9LkWYe3%2BDKxBnfI3nq%2FOwjL59FSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQRFZl3Ezu7yDDQI%2FKtwDaKS1n2xv%2FvLVVQr1fU8ci%2FU5kNNTmY1LpXlZYf9XfE%2BwQiaalcmOnOvdKmt0WiPBi8XfY4xDQ3gXMhgK0Zgjxem8fUrCHqhD2LMM8MgONlvNeMg5%2FHq8jc5HVGUk9DCQVYnn0g5UTTVJEM7eD4i3VRomfGNtgbstP47nUBMfCEkXCFhEKKQ7TXDYCSseziqF64tEi4GY%2BFyNHPGSQp8WHnGEd2IZN8Iui%2B60oY%2FkvLSGP%2Ffe3QiYtateojcX4qcYFJxRt0St8pegD3q50L7qRZ1QZO2NYLDDrq%2BnZMM66Zx46maHj%2B2pruT006aFb3w5dmvO3nKA1tBAWDJgELY9Ffgo3wHm3xrdPcQsr9ccqhapMHF0rb%2BGJa8otTOQ%2Bo%2Bi11qqOADIzbKwAyYT6sr3FrNXbuGRTzOgVO%2BnEhobeZPufMQvDECc0t4nwXhthtRLummc0n2tF0ipVafIkkbgOLqqXNQgut2hFzsNptiBjP65%2Fe55bve9WU0Tii88nzMdyXYHJdhriovNwLEFkQW4iQlcJrJFMjeGfOf3GtVHFNgvLd5LKCji1KyEjVdjiiRiZOtLhkinfgj%2Fkx%2BLZyCEpcWSRXVCmc7pUrlETRYzJFgzBJg97aVQ%2FkHlwc4wz%2Fj5vAY6pgE2KEpt9IkNxj%2B6nrr0ReADGVz16nNh%2BENAjGKojQj3nfAdiR1NktvRC4o%2FqQ%2BuyIP8%2B%2FgervLyxjmUPBqR12FRR539zTtEh1BC%2Bw0UG8lFHPDiDIO0MGr0dOHpAyB0bKo54RqmSOj8Xl5aICWGRQd3GTlG74%2BbQ%2B3h%2Bd86il2Chc8Dv2BGUJldV2WOa3QSg%2BX6YwiQmhz5193vRenUFH7FOzfTsU4l&X-Amz-Signature=bbd9204704a0dfd52d5fe1b7d57e656052dade1af4f060b812624ad21789e12e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EX77G6W%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOomLCIEw6MG4Aw0JjqYaddACZYibZN9ybTUfsRA5PGQIhAM5P3DDolufgoUjq2JvYjItRa81RZYvWuaEW9QWZB%2FbHKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIzaEC%2BNyjUJLJpBkq3AO5D6Q9gP%2BNyAEOdaWEJA3NJLKROcIe%2FaIgrXIAXuCBqeZSnuMkKtfvmYdDUUtIhQARbbbT5tbcVZR6ljf3zUOXN2JY36QCPuDmm%2B%2BCYBBAzwUbeMG0YLSQDQZVdyppSN3ww4cpFXZ76y%2BOfwhf2NBfRaLaPoriVUQUgzDm0v3Z8kc5Hq1VUSvzMh7F3fJMOAXAVrn059cIPQswO7pGd4TwoPT99aXixgknnVR8qYlA8KvVBmK60NChO6C86z%2BnIKGYDY27woURkjj04xR8hNqzsiNFU61OguVAJitY%2Fp0nNe4qgeBrO%2BQg62f%2FW1wycfCwLO1KYp3zZdz3KKFSxMKDIutTrqFUc%2FujxE%2Be65AmZVpIrpTSimmw8Gak88bOhCBBJbN2cvOCI6RnI4VIvyIOlKC9hjOz4BssD2U9rRv3fI%2Bgd1z4qy2EmcIobauFJacSKk2Bmqi%2BXPZXR%2Fj%2BY7lRUwSGlqM1bQV6AYmbpNbcAKS%2FNY78R%2FAH0ybapYIzbaB3vsxBiZxA4gnlCKydLFqHHwXLtn8DC%2Bq4LVQsIa2JbUAWMP%2BUAAOdqk0P4c8ipHxTjkawZ4gouqLfK%2BN9HEPAyT0JzyzoxiWAtFU4k4NeqLLPGiaiDRAbHKsG3TCh%2Bfm8BjqkAV1Pfqpr%2BmJv2HTSXaGTgPFQIheRcYZflMKoeNUUabuZYMGJfPy8hLuZlX1w5cqp9rEji77%2BEbcnjb3sE41dzLwY20XgWB4DbJoHpWkoAguHEp0XWpkwUIbTn3FU6K%2Fz0NKHAd4%2FcVdp7xqkoV7Tm6ojhNxZ9Fg8TU0dH5UO61IrUyzKAfzFzFmpOVI0E3MuxIpRa9jGh1GJHtz20kVK3tL3Ds8O&X-Amz-Signature=e58bd07d1880a4ace3b00995ca630989bcdbd8400c952f16df5d7651cd2260a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
