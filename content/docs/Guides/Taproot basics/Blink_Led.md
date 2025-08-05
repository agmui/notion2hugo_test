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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4OZJP7I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFQCzdseF4dRagIT812MVNQGwDEqHmMfahnka%2BjykwozAiAD9FWtIbWWpBvVFJDF4p1%2BgFvs7t8%2F7c%2B%2FhrT91TvgYir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMi7RN8Uai1yXqhl6eKtwD8c2V40XqaF8iFOgJO6Q4owBKdloBuRLh77RXRQ0VWCtQc2Kri2%2FD36rsj8lgmz6k7r4QvGzDl0b%2FXHuO4XrNLBnyfV1dRosjpyLHsj3zKt2CpLukRhrmEfZsNW%2Fs%2BNDx0mnUmFKFnf0VAZaM6txngn%2FvCFySlvOKU5p692aZGn0%2BVpOx44RcXI%2FrFiCVD3PlTzuCIIZTfcjJ5KVd80YMCkhELfoClTq5t0yygkmWJaLtkyJgGMld5WIk7D4H%2BYfLbtZ9zCUPKf1uoBDkxdV7eI9olRyGm5bsPWl6brpDgM7ClRjON8RKIhbAlsfNtBKIWKg19msAECrBfHXz2pDyW%2BnJkKITAcJc%2Bb%2FCUrFHLmK8C2s89kFK1pO71csRmJMcXGwSxiTUN2EW6xlKXMuhHQrZSAIehswrvlkY3oW92zGL%2F8KrEyoUeEbLglVhUK70DUpouX6szegJYZLXTA4zlIR%2FO7q%2BY74WtkARV9Ar6bMwLq9n37gWqcQ3u57H0ztoMnu%2FEThE5eFTupYK02erNjjm6yMGGR51nEOI2l00y81Ao1N3yGZCOvcMcgFK404A0whkVdHDzWvohfZDOFAS7M%2BAj6mBjYBnJwpeRS8nR7Qgg3BJYpxopWfFIpkwlLPGxAY6pgGLvhsH6CPUeFTJGg2hSA2nLS3crMEyxgSSMRKwu3jZn2ixO90lry1uR64I4VYMBqLBaQozFjyKi%2FuLmIy%2B%2BcdpA5fxj2BN9chNckoF2O%2BtkeGSunGzoEyecY6X7Ybk2emNJ5V72%2FlEzgjQMjG6%2BTzh3IG35FcWw%2BJ1X50QXJjiXxvM9C4ZGR7TbP8zmerG5byP2AAvfJJPx%2Bd%2BJEx5ds6jUyzUShlV&X-Amz-Signature=a130f51e79b1ffac43f4f1f127cf68f327856e42a097eeeceb6563c48d4159ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62EKRDA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEy6BKDkJunGjQFGSO2Vceln3PWXg3zQ0Mvo7SpB6RO3AiEAydJaxMNfLgZBDXwVezdvYQac%2BMjbkOuW62lbCgfucWgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOsFtcekK5dLNZWQ6ircAwf2sfd4l60pK5aemPWpqOvouPRXOkPIxIQsdaWVAaTgscmjW%2F0Q8tAf5wRzbtT2naaHFajnpgFzepTDLMTvDYJrvqm0iEIlP0u0QzFCo4Fe%2BTZoG5lV3guB2zVqrbOSZNfHnxK4Ctohg8p0bhE751VBkaVLiIm%2F%2FLiQG5t60TDfzvgg75j%2B5nXd37aT4P7P6muYvvEkSnA8VwHS8IuoIgpWlY9YPOWIuK06LiCQwg7EnnckbAFufjNQwbXErodcCMxxrmLjVp3gBT9QU%2BbF%2F8taCasQYz6vokelq2keqePLMBuWkWaW8u4u6X1wsYzddPYuTCTsdrBQcWCnJGijchbHAxNLOlsHNY3qLSLixjIRKTsGOe74uTDNFmY7vFOdNwXYJbP%2FvD%2FFj44AyshHucdvYhCuIKbQFoMSU94yCQPG6NwJn7k%2F4mbBz%2FQGwk5VSUD%2B0TWmVSOrMb6ISn77wEx17Izo6Mvec4NlGGQP6SR0g2e0AxQnsqnycGkuzFemb8IpwYr4Hc7hmcog5KMHCY53CiFUrXDknWMk6D3GDioJlCwjeQ0J90CFqEcsCs0vkO%2F%2F2OBOk5xILlF6APWpwsl1Ru%2BhpapCxqMPBQk%2BJi0AEqE%2Bvrf8KdXlkaPsMLyzxsQGOqUBArifz5RRc2sEZzlq%2Bppy37gON6EY4y4PdBhbYjgOB%2FFaD9A5rEe%2BEDjMhkBVRnr6kQewEaoDUmHejuPaYhYZ8c2PkefiL3KnG5fYHPBkND%2FS02vcfcQ4WUPTtMkmmM1Y3LyqBucH1VvtgXCtyDjlIroqT7z4XwI6D2PDaGNCG99VPjfPhrECztqdmGMFb%2FwKNriB6cS2yQL%2BC9ZFVOY7Eu%2B%2FF3d1&X-Amz-Signature=712b2e4e25150de70fbc98792b8519a8d86a6db50e16ab1c000462605913f421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
