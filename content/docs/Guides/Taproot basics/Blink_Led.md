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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMF4BJA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM11lbry7tMk7f6psifZDP3Sy%2BFxpmHDxlnk3xHPDC4QIhAMrgF%2BrUE8xbmkhiEDTKaQBG6hIvamFhIEeJvm8s0RRPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySgadTTCAg%2BTNhdYUq3AORAL44J30Jerwv0OjbEsGTTa%2FpPGR8FFtre%2FsTXFL8l3Zh8qrOTEv5iZxyfIa4IE8IO44RE9T8bTeLNu7TV9jVqFO2svljI5EzDfaVmwrii066AJBwQ9migSAQA7H9bHhtMX9vBrLs1fCM9Ad%2BTPEf5FrQaQPNyMr9YhyP6haWeQ6vkmDOg9pCh3oyBibtse2cQMalRWlmHu7ki9BbvqDTDbQjyfnVInhxYpyUcZPOL%2Bo7TQRGRMH7RhNg%2FxdARBcgqzbvX1c57tnqdu76grtknKYij0epoK66TarO0ElT2FvrNDvZm69dx4omu7N9nts8R5Ix3ex6iNVXq%2FJOG1yLwuSz%2F0YqG0EqLXh1dP4AMMhVeSbcRrt6mKW%2F%2BhD1WGoe63Yh6NMHiJ0jXz5iCt7YMOO7fUy0pD7bieL26%2BMcspCom8LkjbJyDjB4LIGJ%2BKseMO%2BXG9VGoD5HAliKF6WGz%2F7UMCgWmfCfiHYoOqgU6prkeN9Um8wWyA9fhPf3MP0kwKgU26dXhHXMJ5QpNdDsTBe50VAJ8NVQpvEfy%2BeLw79OYROkYWO6Zar2xwXxEpiC%2FPN3AeGeWuydqpT8jv6In%2BlIhVdfFZB%2BHgYXE5jA64ZEyHVlSCNWz%2F90ATD5jdPCBjqkARXoER52XDERb2yOfeS%2FJwv%2Bw8U%2BNzdslhWVOl1%2Fck3Sk7RK1iwGWh76AOLuFg0UJrJiMjt1buTswentMG37%2Fs8vkPJXxpGvMyLUgDcEfKesIBJwO5Qs2MFdNFs%2BEio7pxHE9n854S6lk8yd65hWinugSPsYMJOt%2FT1oej8gdWqEc9SyuVMXjvVuaxJg%2Bnq9mbL%2FHFV8BaGnywjzn%2BJrYH7wHKfj&X-Amz-Signature=61834038352671994ec8299ca000373d3d4154714b3bf0a4fcb5ae648ceaee16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X5KK4JY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJGBtPkhol85z1JUunHKS%2BXO5nK3xpAyG%2BDbxu4%2Bm47AIgLa4uK2XXnFNvc4yE4cuLtbTmc10SDQEIUijzjB8hFDQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENAcazcKpc6Q%2BduqyrcA1bWf3xCT%2BdiqqyOiEWtBoxCcpyLKdqM1ELlQk3CjMmTHA2C2V9agdMd3AIPRF%2FzdZAylxJj8faKklZPkbS0wgRmpGwo5KAn4bOBW%2Bt%2BPgmo295MBqbd2%2Bmvd7KrwcCcIVdZVjFksYDew3FqfqbMkpj%2BNsgs8BLGO6%2BI1zZKHWmjaWUzbmq%2FkbFC2e%2FEpeYVhTn50PVCjyhfAldtZIYIhbphjWZeSSz8J0DyxN9xadUXBsOWCwhe1T6WaNC90FggcTHEZ8yA6yFeC8BKA3HDwwRdzkGodFQaAKNiCA2Gj9dkZII1V0OZcdQf686yJYsiAdF1N2HTt7A9M2pnrpaLLS%2BtrGx%2FwtggHcV%2F2rnsI8akpLI19O8byQBQor0jNjP66Fat%2F6S066%2B81jSE%2FtnZSZjZpDWZj9sm4ChjbYbKVwM1DEQ0DK3qiDrTnPd8rXxUYeDyXIc4NTJoIXQk9rtKYCaERFfUzEAzcQHWdVILd8huOiZgW18NluNHMcoGYOoxctAinjyp6parZdJD3AGbapPhjlujrJY%2BIxHl0VoFWwoWJWgfSPYsAy5IBcuNv7kaLw4dB2o0MVvgZmG56h90U%2Fik0jyLLbKgN1T2xyhvboPKZ%2Bwxu87z4kqhwjiMMJeO08IGOqUBK80p2%2F1Ow2WqHsCTqJi1TwGbFO0kwBYXlsXHrdEbvKDPa04%2BDMITscWueJ1E9CCC1fujdWsk6KItjI5o7cwNdzOvPNqhQJprZO8psr%2BIp9IidL3XkHiYlC0ag36em6Dws9saXu56GtNI4lf%2BNys9uG8p4tnVBdAa%2BGRkm%2BCIGyIuGo6zuwHsc0AIAsBe3NGKbYWFJRGp8%2BjIrRFCeheMO%2BWogBVE&X-Amz-Signature=812c5a1d07f64f78923f817e38ff97e6c7301a4a596124ddf5fc96a2369fc4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
