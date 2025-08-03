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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UOQ7M4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYySAmiFZf%2B61fEy8MXV6oLc51qyfGjG0ZHtladjNmcAiAIALBtJZR%2B1m5eLJfkJi0kkHywrbGXbIKxRTc%2F6i%2BmOSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMUbFGPpjlXyo8HRKtKtwD1EH0rGuP683vYoqBBRILFlm0cEY6mtis1czsFxh8tPibK1R5YbXIwMppJXXaBODlYlP6HNWugE2xkRnTorlhHRbI8KwotvRgfMfCZAMe7LaGRFRm4nPAzDu%2FxVneNh5UR4L4JvqmmsrKa6taMa%2B89xaIFbILNDz8ghJM0VxOc69onldLbghUkqnvwYBzUJ24D4GVmRGeCPmNNXykIpAN8vTCIEpPnTv8grzg8%2F7TYtD2%2BjmQgdatqkVWY9NsSWxVysO8EjN%2Fzgmemg4jBMWUDzEsAqzfuGt%2FidasGBqKIXeiJurKWhNYxAu84hxPua7Eisl7jawTuTW%2BtvfP0JcbU9jaN4FRBt8G7b6DOvDlYniOkvA24Q6yNn5sPG9N%2FU11VpZzInRux7328RgEcphA3SU4vf3WM94YQf3%2FMVaQjdppaVFdlKEChpnMZvU54V7mcW8ThYfWlpubagMFwLinzQESoBvG%2FMBQXHsI0G1M63HGM2KPx0EDggHv%2BReHJ%2BxDCMBTu6rUOpWt6LATgY227By%2BU67H9Znu4bPXLC68O9gssWasSLOUkKLeJhJumDYcqZEIdQoMkBgTB4Ge%2FAGfO8I82ViC%2BC6QARHEjxuapiIQEU1C0Wvr67NwJdMwztm%2BxAY6pgH9T37pAc3cT83t9q%2B27oflWWj2AkLqngEwhGAfBW3bKsahLZFQ8RYHsRgvziiJ2ckFeW6vPvRAF2syJxnWvsCy1gp%2FCYsYgMFjj7Q%2FE4TXPG7V1XebAxTtQDT33mHibT%2FSPH6CNldiYTcS4aYxXm5jtmEsM9l%2FTUloS2jjTxIpCx5oxDWD6GkqMv%2Blg5w3BWKXPF18TxBffrEGIEpUa5CLpqLLufja&X-Amz-Signature=2a233d97beeb68978e11a8bd24e6359364f7f20f6d326cbb23ea3285942b41da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU44JY3E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAqQxWEqtfGp6lbP2cMrBDxzPq6617uJEsWMGxQMhU%2BAiBVc%2Bu5mwzpkSRRnWo5Cl6LyeO3zp7Q74%2BmkEZlHveI8Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMUOo0mW4kNN6SidSJKtwD6yfsUViOjnqoIxt%2BPdhO8klyyjMzICEqrsk5Yx4%2FWVJXwOaEdEq5URbnQ22qxlyo3%2FRU6Cd%2BCRVIFVNkfrvar8Sq9wguptGRb3Q7SWOS6S6IXL86yTzt3htrKd9pU0r%2BL09bKvT2GJduWg3W67Jw%2FUQsS9dGLe22CaLJ%2B0vziZTF8UUQiU4tbGO%2BaODn4OBU2jJoYzbcnxr5BkIK2%2Bg3ySvevP8kkPOnPZM%2BsElycntX0kgx%2Fd3llQHLxmK84EQdR0tuydEOwZbNpkx0gRt8ovtzHTSGLoh6w%2Bb0ArcIhSL1wePrum7Bj5joaBOsf%2Fedcti2O4zWG4EoYNa4AM2uLTTsOV8M3J8G%2F6%2BGRByEhEGgMZDqoYT80K2xSrS%2FunuvZSSQsW3QMJLY4VYxT0WquVNN09kqS%2FaYt7q%2FHsmPeHC3kE9%2FumEfPRk0HMdN2KguJTJcCvAt2eG89AKb9KXLJ0hgrrcQDvBn8gBGyp6EQOAnXJukhEYtaSlhsRqAKcSpXZupDjrQpI2vZ9QZNik%2BK8auFT71JCHj8aupKbUd7WQBxkDYMdu2z7vCTwz2bWxVAvBwuQJmcjvZwy58sDtt99fg5uG1kRpbXK%2Bh1XIfiEyx2g1XwEH8154QT6Aw9dm%2BxAY6pgG4hgBEUyA2Bf7YbrRsIT7UbACcB4sBPe%2B8gMy483iHPsktPidZBlmnWVLzghvA0rqetguMmC3SPqLHZttz4B3BUYt4vHl1QcOyJfDfvUa%2B6oFDrpVwlbrbdSEy7sCvET8Lvhi6igdjPiPixhXNpYQ6s3C69TPaAZL3ot2nH9HydBeE1wQTB%2BVfl8b8BEWfDEw1Sj8x0KjJW9vY5%2BdgpuUGCJ26Tt5I&X-Amz-Signature=05231cd577fa9f1107b19a42e88c5887f30845f72807afeb87ca16b43e5613d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
