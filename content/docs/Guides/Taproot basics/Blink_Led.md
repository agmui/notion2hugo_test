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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFDU5WK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDEIPJVcgzlyyrDciEfYRJxTtYsiAHuZq11C5PRoqJWcwIhAJG2VgwzysXjjOFRZ74olQgW2aAy0yY2rUGdD4Kzh9g6Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzIU5rfaj3mIr9m%2Bocq3APjdQSpFxXtQuze8xvzpKJ4z3dL2g02HQgk2%2Bj4EvaNG5kmDrxpb%2FHkCaVJa8Frvr8E6E7VzTn5UKbOnRj4MMXhD%2BAQyYgMRcYwLx6ZGA1%2B1PoLUlT7iiRyEEao2nutNFq2zS8XcFQGGqDn4Zpk2RqE%2FjQ5XBQ5lGIK4GxObIwo3o%2FuM%2BldhiB0AJ%2F2c%2FwoLenaK28jVzsqR7CORBYYehrzPueH8DKCsGAPuO%2BEk8sKDdOXfpvlPFk0IgE%2Fbli4PLGEpSC0LPrjd9OCGbE74IE5Q1GsHv16CAtzulan1oerSAOad9rSSpAiSdLGvOuAEhxEDW1M5e1ouiM5G6qyuHkxwWLdTGO8I19LrS2O4Ra%2FUMVOFZb1j08moyPjv8fZs4WJpqeeLBG2tCFzOVZnJdl5WGcJMOv%2BvyPCcLWTPSXsRHlAq6iPzyPPpkfXmTkuOh%2B5St6q84nzx0Xhj66wtnFV%2BhZx6ZZo0ri2QQIto5izk6EFhFCXBUsKzrS5kSe%2F3GlRAnP%2F30T2dmFO41l5V8vnc%2FhMfRRQEWAWHlP8EAaJ5kH8%2FAotqkkkC0N10hla2PVyU1KHqEK54jbg0DYOCBqGDPuuEbgf1xCWkI%2Bq9Ys1m%2FqyJH8Cg5nvazyjjTCs%2BIDFBjqkAbveAmoTbm7NUAQhrvWaYoMba8dAIM6iACFo8EQ371aqAbPyGzPRzGXJkWy5t9qbZdBlWx5SQ88rGK%2F2qdkohK8ZFp6kHx77ITWd2VqN%2FdTpxfSn73zqY0XqFvFdS3dRodjevesaAf24G5hdd%2BDytvqezXhlWUQBGOts%2FmbM8PN%2B30ZcaCuYuKV%2B%2FVgh7jhMzGAA9on%2Bd1cAMfJmEgc8GjGcrs01&X-Amz-Signature=f158bd6b88981d64c765f7ce4df7a8ce78f2eac5f7fcc599c9e80b98e0c578d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666H3PNJS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFTa4Blox4Xw76%2BaZBVT%2Fg1RpMWWdPvANJawnyxCrhFdAiA11oMGwqK%2BPwPSrOLwNqWZkqknXGxgNlJc2Aierw5yxSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUvfm9Mug4zbtLXlUKtwDKTKHwj5pXGehuSgcZPdWbLPwzuQnkY%2B%2BrxzU78A9Q34h310Njcf8Pa%2Fy2fmowhvSmMqvcXorwUjPf00TWsb1tmtEkLASYXtn2dpKpfoesaGDTqwL9zV5LcIbDbOBAt4yUxqS9i3ZBPqnE7W860bvngIS9XtDtug94mEsVp22pd5guNRbQT0BJIEOsoQAYCpNl12V1lPBKCgBEfCtSJ6MYFRVwE6EWj1ov9H7QH1KQ6d9dCfK9dMRQUv5H%2BTUm1Faof5Byp0hEX9MQzYRwWWqPFcazY0q7fGMnK2VVajkgKnTKP9voHfsQTtIMGS1tlq3PaOwxbidBaXbLmhCET7sloa0U%2F9ULw42t9J4bqbvfzSBBmxjTjLzMcQK8k%2BpAE6y8%2FzgWv4hvv05h%2Bh7L1EJXwZT9RxX1nWIQi1%2F4oRcVDUWKqpeVa9v0PfcET3g1f6bTmp%2BtZJkRJKBKRayUqz1fQaGamwq4bvD4gdrMyUFaUhCjeRlSEQri9OlmNvzA9XsZpw5ThoHpKYXEyiCQG8fxqdFeiKPqvjTlbjjj6g8WkiOft%2FEvVFc18dMNdFaun0q%2F6Sa5aOab8x4MPK3bvBAPOgBx4dP54e%2BIVTANzJhwznf4sL0FRihzFKSRKQwzPeAxQY6pgEtd5ch5UeTHteUv0ARKsNy%2BJ5ogXMVHjAmXa31iugGs3WLEqVx2gGx90V34YVZcn0OX7grDDNec2p2vLrHeciVaR6ek%2B7Q%2F6dOLjKrsEg6wMUda9OJhH6i9mfbSK2uG0hQb0ZWU1e6qnaTxUXp5I0mmU6tdKRxnaQwpJuEklcc1yjfwcdVXbg%2FXroMyWdUHDW763v9sDRdNq27SkAmak1zqvlExkFZ&X-Amz-Signature=f4cb358020d04dbfc1bdfa50666d8f0cad39512a6a459e5cfe872dcc4d2dbeea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
