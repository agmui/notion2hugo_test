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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYG2ITXB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWnd%2FoCphSssYwmDdNffS%2FPGtvX%2FiyXHAOzEr5WdjGXAiAVLXQhK2WWy5lwM4kCUm9pKtst8JYOA3z7kndyKFNszSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK%2B3QUcNmhUuWjTUOKtwDgcyQ%2BYomiYCirWiD3%2FlM17LFt1ZKu0k3QzdzSq3iv2ZjAjaCBR4wnGw%2FkKyJmDyQcp45olWefsh%2FtvPnTAHGfSJnlF5b8RMSUgyF2zr0Utg82gTupBsk1Ipf7v3bJaa8J1y002Uh5kXmip0Dkd53IoQMu%2FGQUn9GxMD%2B8nwnvGVjITQoXzkfZoMyL4%2FnhjDyZAHul4Wk1%2B8OdGJozjjG0%2BF2R8Pdr4Wj2wQLdROKuLR3aoVi27MqGdqMN%2BnEXoS6FpBjy8NRkit7BEbove7KuDwUKSEsZOQGXy88IE0VAzH2hSd11Y1OCH%2BxmlskW2EsWc4Qp0Mn1DzQ8MP2h%2F3we39wqyHG3RmfE6G5qrnKkkAaQyQb22cVoEXzwjjupIQWBpBGx1zk9ZaFpTdtysYKltaepUm0feSPpxR7fFdn6rm%2BLcJfou5s1ZHiY1m56uwY%2Fyz95JGSMlGfqllT1%2BI%2Fvp%2FgToHSJvMymWuXzAiV%2FPpvDMp4Ho%2B2bnHTi6BMwsjF9fAR0SdaqpnTtOLJpEDIMNlf25CuXkPnsT1AKrlwMw5VuaJhq4KLl%2Frc0INMx5ff%2Bj9CcSR3Jb1wH8en8sqT6Bbx9BxZxi8%2FrCxXq6QsZHwmgAhJgVGT37gDRqgwpY%2BFvwY6pgHwgiPrEsvKGpZvmwb4pZXolBbidvbhzd41HS2v31Rl0yv3Zh%2BZ86XDB6B%2F%2BqHvjvgalc6QeL11gTwLDuncrFvt43oGAhbeDEHQ5vtm1lhrc6OqpTdFegzXMY50LGRI%2BAzj2Vz%2B0aVQdGc5mhY2IZ22mIltIGJVZXnaltq9NViHC753ysYUGaxOZkwzjDuKaXkvlP%2BJi6Gb3crlTcrkAZidjVJTbZN5&X-Amz-Signature=ae77f2200b31fd78d66e8bb06ba56b08cbcf23bd051135e0d08151b86080038e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHRDO3TB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYuT0cDqUHnjGWEo7QiCv6j3HIe8GAoGXTQ1wVmclygAiB1JxoQF4K0DeU42Pl5SvLBfmkb88Qephb0LsqBqXc8LCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa6XNZ0QwAukAGZ0jKtwD1JNK3pdrzpFn77N5141J%2FoC5lwhiSfoxpBJ2MhEmpVjmVnQlGkAATVAMA3Ay0pJFXtfSRyW9kFlnX5M8rYSWidOJuSezsEQ3ePWT8JaBxTZ1ROcpntzjx3WpXl1ePyRT%2FzIMiEqWLPM9O04n1XFYn18RlrE6PSARLl3N5UDuLnjN70zpRDADuuVQWk1BuQ3QWfvmJ7A1QE1iPfMwwUhhA6IbJAtP2BPO1dFrWSV7oln4v%2BzXh51dXoJtAS1x0%2FXUeMxp7KkBY%2Bzexux2jtbxCk5msDKhBkmTMxGNbWiyj1kXAzSHhpbTxtuak7OdBwtoUhrtfUyGZVSWJF6ukIm%2BFEtn6hgXHQXTYPwYEWSLvp70XBvbuLaJ1AUwNFsnIlOpoBZBBbpeTbSJjZGJ5utyg%2Bvbr0RL3tPexgU6eEHK%2BXG5yUz8x4y4ST7o04av%2FnH9%2FhDT9ufhxSAeK5jDeX2sDRnOD6NmOS7SF4m%2BtFsGWdReywe5qPlY4ueaMdNwHbbheWqDh%2BD4Fne8h1WCQC3n0o7mULbvvHXZXW14AWbohNK3XClxBaHqpqu5dAU6I2VT0sRG1vlGLonNNOZf%2BYxuk8oQtOQOBzI9FX8Oayp0G63vV6izNpPdUZ4S5gQw0ZCFvwY6pgF1dhKVe2rF7ktZm5GoNQ9Hh7AueN2PPT%2F%2FalxvU5BmBdT0LUlOoDwsHdmt2ULgX4kZ2jDnaXl5yjj%2FuAccO%2FQ9paamEjcFZNgjwcwa7hHEDPJ6fkZ1c8OCN0gDz0AnjexAoJw%2BT%2BRESTz00MOivgTBaRoRWdXr%2Fw6o4sdZRGIGxtVti%2BgJe9UDI6m1eKQwl9rSh4QMaVRCEihXErNAlCTC4rK8k0w3&X-Amz-Signature=47ce53b9fb8a5c3dbe38680e6953eab8e07d99c11b7e3bc7fb8faefc37e4aa8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
