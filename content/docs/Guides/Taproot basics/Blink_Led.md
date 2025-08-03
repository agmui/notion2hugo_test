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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SWLSUP3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4SknfhE5dc5bQ6dOrdvP7vZMNqb4pRLuWulN8sbpppQIhAPwGPdqiUg9HxtJ3W4l3vSLU8Yga5jDxBPvwGPhAL8KaKv8DCC8QABoMNjM3NDIzMTgzODA1IgzghZpMmo%2BHk23CHRwq3AMuv0gp7daGrYjZaCFwLmI1mpdNKgbNiyIseJD9k%2BV6MXUlBavSUEYYq6aptq%2BlcH16iRH%2BMAVyAJIwv0vSiBi2RHrzgUFdIdQdE4GHzeUbTab7ZRlJ2ZvgBPIKJ44W7cY2Gu4RnD4QbqoAUI2CgqME1UdsEV4oXuHNfSMVCG2OV1FCm1tySWoqTH5G9PBFS5OKP%2FdTHIragYq9cOfpIomJMbBNx6Fmo2SiX71UZkMUFDmLV78Hi1U8YE5v7ueO%2F3Vztv%2FaaRZKEcmwGdZbAPIvMJ08x8ohoSEj0eQR3Uv97QKK2w%2Bqi3DsKH0GXsrmJUzbWIkskBdJAGp1hPKVTSqzAtGdgdwtVq6rVatllWQveXXkOmT%2Fyuw4WiWVmm3ickd1Y0RzqsdGlO4nmLx2sCpIKHXQlSQx1xXr3bfGFV9hhPT4pZ0iNinzgHQjvr66IQSa9GNxsB%2FKQFLW0XzxcUFc%2F6lxZv4Taa%2BgQk3QrA4GvaIg8OEyh2l7qnbyCDcy1wDIEVf11eXxGB%2B%2BDe8nQWptavhA9IdJT%2FfqqcvyVD%2BC98da8XdLZXk%2BVGcq6zaFmyI%2F3G%2FhVEFarxeJGT0uexiFc49MlEidhcnEtQjCGWWVUekvA2dP3v9QX57iJTDx0b3EBjqkASYCMJ0%2BuhZ9f6FG5OCleGRuv8P6gxa4JwfWil0o0MI0Ux9ey04cvAGcFaLqQ8ymYq007r0ZFYH1cDWPJyl7Dv5Nh8PnAhJkB%2F6%2Fh0Fb0%2B6w6acPSbsLZHDc9AnhNqFgo2zDdQWLlikuRI7fiyXkMpEUht%2FhvbXScWFPwvbd4ive9DC0YFQqr4I0u9hDGaEEELn%2FRoU7sgky36C3S5O1yJeGq7Nh&X-Amz-Signature=fc6c0fe29aceee102e82256e99ad19b0b0cdfe9e6e310ec7d6139fadba998840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M55PO23%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGybGGf1vBmAlDdUnKdX%2FED7ivDuqD0CYTpV1mXR%2FdAcAiBAFyoKAXaa06GR2eQ9ARq%2Bk6DKGYOKk91AzfVm7QNrtCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM6pF4AIRWTXWavgk2KtwDf80SUkK4dGcJ6Dwo%2BNfZRiHRXUrzSXWJzaAOV5vIM2QvqGLtutJnABF2PbPmNpHZoF7FEA%2B%2FB8NAm%2F%2Ba8GOiRZTHgHkdupSLWOZioG2lF%2FS9wklguoEPStY4hAHPV%2FNTtYkDXH%2FMFS70d1RF0mEe9vGsRdW0Bx0cMDNzMJ4h4Jd7zKqLlW3UjnZ10iUjzZiD0UfHncdaMBPOKR9tzUZobdluIxBT6lp2v0LySzmiUvGBGecnUdtMIFI2NJspTxwoOEjQFCzdGsYspoqo4J8Uk1tDmBHzn2MO66UhLZppOGg3G7%2BunFW2ZbNt92pFt8pN%2F43hOLlrj%2B8FABY43I%2BqjZJOni7atIukkXH4LZRLIlfQLpx%2FnCQKa3s909RV8PhzVqQWl9ufV2FSxatJLaZRMiVpNJwTZNUjkPtM7dzvSTCfJCgVm77zNidFNp02AG1ynVbztrNP6qjtmauj9U1AecvdVTc4SiPG9aBgfmv6kKszJGLxIGBeSHYROvKhK%2BgbBQmKLIifdbbfVN%2Fi2xYS4PQKnmjGPJedNB02GhBc7n1ZtpNiUDFPwIdkNJAVSbtUt6l0d1ktS0rZ4JZR2Adyve6ETOIv6qI8CDYulM0E08O%2BCBtK7Wo6ggQh%2B5YwidK9xAY6pgGUd1YQ%2FUNUETepIi1imlpqFLNXdagIkBBs4XX0wiI%2BT7v44tBPD%2BtgH8On2%2Bvx%2Fz6mpgPQnDFiRDr9ntLsE9Uu7kHa8y%2F5YeTYXy32nTM4TcCUZISqgXdp%2BsoaBzacqQfls6GTREgy4Vp0h0sGBhX7n0qxPVY2HHEDUknHb4gRGXF0sz8KxBKPAkJKHF4QK5S1tRswN6d9%2FbLogbYYeG0Ab%2BOElK1U&X-Amz-Signature=0344ab838ce9fad2d178b401d2a38c71ccc4c74c54ff575a9cdcf775184d0a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
