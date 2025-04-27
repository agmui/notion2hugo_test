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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TXQBZJQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuz4p1F88ee2mba%2FBur%2BY0yznvw9ohSm1ESknG%2BIY2TAiB9PkvijAuV6MofiwHRFoYSNxV%2FOTz%2F7WYqg%2Fa7lIMa8Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM8G3MpVpmzdeXFjCNKtwDQ3YpA9Y5gv2TpsK%2BCx0iWcEG4iCY7crWDsnaT7%2FdmBPBbK%2FJOcbf67mndFLlu3%2B1uRJzBLNVYgeNxOih91Pe7L21pMvcGHczDMqLl95BMv3KPDmutS9pXuMhQNx0ewsLrc4iCMnL3PWGBKxd365TIcxj%2F0AXYYOVZB%2BVPRbITXk7TjTccKdvSjAwJ45%2FJuu0kNxCSkMhYfYwAUf1pZPSZ2rvdfnuZN4K55rb7OI7J6v0szQVEiUSUZzSokGfjrFZuxyb%2BcxKTqMVAxE9b4sTJPayhsHiUburyhJUutWjoxXTEdeHS87FGq0kVgAgTWXsTHTwiVa%2BWsUR4SyDy6Lx7KUQMv0fU%2BSz%2F%2F7qMzyAuzQaOgUX6T%2BTy90exr3xvOw4HeYfen1694CUlHcv8Qf0%2FmsQePotaldO%2FxjHDsGI7EJSqapJwP%2B9lqydTD65I4syuuO0j%2BJ%2BFMtJLlAWJ2bo4spI8gIfXqJzKv%2FpBVgOwY6ArvkxG2DQPMsLzuxQmI8%2BoaFpIzn9V6D6FVcbjSj%2Bz7Zj281nXLs2OjpKEN5y8xyIYgKI%2FQeyMzfmV%2BTKVZJLQiyfyNGOD7qtbNcHfHGoeQD644fjwqkxiyMTtTMCuoWjg5PB8Lvjoq0a%2FgUwrIy4wAY6pgFnZG7n3yY%2FX8DwGGEPDc%2FoS8FWvFudxocrLcldhM1TYZ5vtVd3xeuBpIpLWHczSPNWFNW8pMrfHwgAlEh%2Fbder0IwNu8um57ez1XYlw2bzAn9DyDnk7MuvvKtp4FRkRQzcnVARZDNRP2M%2Bk6nbK1wWt1C6Xl%2BTrqpmuNFgpcnoDrXCWb9hkQQFj4zKNVams2OAfu22EwPmUvbZD3bwdWzr5Ji7LdbD&X-Amz-Signature=21925e692ac3b7ed5394ed5b45258f9ab1be8f87994494db96e7075d50acf05b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIJWH5Z%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFIzbiAUArz6hqiXNGfFpLWzIGip1utBDcxu7QejY%2BwIhAL8E8TEisVUe4TeRHxM2%2BiaRCNcTavD7a4s4rDztc16tKv8DCGAQABoMNjM3NDIzMTgzODA1IgyIEdQwqjQJUlIh02Qq3AMrmmcf%2BVZZLq%2FHyO6vUETxBtjOgyvJjBdLp%2BJAf7dKHlOUAz5SccgTBExtfpx0Qk3J4fMWGVyP%2Fek3MD9EnLXy3j4OFwlptJbFUdsRHZ0JcD3HOOKbH8NB8hL3VcNEtr83lcPvcVOKWsZtixrw9%2Bl5h6xtiJLy6CQrPG%2FUgLtm8soynd5F3p9v02oBYIFm0L7kfqlrCi%2BR1Y%2BmKw6p5kAzJ2wk3RyUx3JDLdelrUoRwpzxXNZoEexpi1HmtGVoO1UmqwOX%2BK5KqVfZgELuI05whCgo%2BhsOPCmx69smz7eaUGrADta7hMIPZM4JB4PpLDFXQOwvTagFy4vqBAMw4yOMu60t0Ax6gSnEK7wFu5fKT7UWhFuVIh9QOTifiPhoXVyi3MhTur%2Bb0JUm9oeeRjxlX1Uugytg4FMCLAfLylsefASPoZk2TbRAlTZwWFg%2FBafCoLUPnmIWACFC7cJjfhiWR6ihguALk4ddScQlVOfU%2FatvEf6Gkpzd3lBjbb%2F3WW%2Budi4nWE1jnCkA1ZYxbwURnZCRlzXVBV55UAIeo1z4L0C0yaFRk08K%2FDe49nBYrAvYTGhHiYENXSYV%2FplTnsULkY1zkCwvWzPTIeyRhVlamdrl%2BxHM40kg4x0k7zCP%2FbjABjqkAbVWlBNnfZXtdjd8ItoJsbq00XyhO4BPWYUvF%2F6KO76y7mrm9JKaJcmRknsqG84w%2FNcJPFft%2FSPllhIR1V0AVTareRF0Udcazt7viuVb7KryjW3m2uFMRLg5nPn30AlIdRRMnX9EGjKMZzQwyz3dLsRf2Tyoq3YFJZNZq8puKam2w95BgHZrL1V%2FANO4hsfcrFO7OTBQaHWbsXard7z5QGgE0d4D&X-Amz-Signature=50e1321b9cf6eaabf8f91eb845c7a10faf7f65985306d6bc1a25c895249ca526&X-Amz-SignedHeaders=host&x-id=GetObject)

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
