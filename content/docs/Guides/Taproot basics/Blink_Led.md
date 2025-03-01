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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FPIV2X%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD9DIuy6y9iJCMUifL5uicofR9vInnmqBDSpTvBbsik4wIgeZP2Bt%2F4sCVkvILNf32YZNAJ9SXru%2BDA%2BhjhtoRgzNYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFMx6QSQg2XTmitLSrcAydz8vRF2YdgJqJrkbTnArBtqBuOVo%2B%2Bf6h0JYCZ3ZTMwgh6bCP5gg8FuXV%2F%2FUsgQkIik1blnICfyrJbN5YOWrlDF%2FELYvaJadA9pYI15f4RWdggMnXH3IwJavGExidXSMzoiUPd%2FTI%2F%2Bh6bLXuqjAUFFdJcF6nDGO7WQGZz0hjyFMpdyWIuUfYa8UqqJtLJfTZDCNGBjIKStk5k2r%2FzfWfM6hc60THzRsqvHEbsmUVDPJB%2F0wTwtpJS0grB4C9bpC5K%2BXFQjMm46s6JVepk5h0zY2aZH0FAxXm0rd0Jr%2BnC6%2BNy%2BjszytHPymGemT52My1LvFj4Qseco5P8akLkdA4Ek8AAziPZzmvNIs4MOop7AkSrA9EwIUACdxWOhjLbL%2FeEotBEKDVTSqHR%2BoGJvo6rGgI3sfT4hSgj8U%2F2sbtadSJVVlGkR9Tart5J0GKffqGoV2q3KO9zXSSm13BvvKaPNMeDKBKV8Z1Pn%2BX5jcOZv1J%2BGh46yT9N4EDtDM6PriazX7cwvplz93L%2FMjGfSloG8Gsv6NM6EaQ5Ky0QTRoZdB133lzIElsX4uddnVQQM4N2iGPZy39PBd1K2IbxJ1BFHzW4weJPg%2FvDozH87s8Ewh22kOMy6KE71uw7ML%2FHjb4GOqUBJCqx5OiHz18hhdUXuVzuWft61Kj5iJK7Reoz8XeWPRADwBlhb5bD1pPMEOSWmBBPoZ5p5UdlYicIQacT0KE6Tq4mwE02Vl6KRc41IXx9S0DtS9hJaDx5hlB3GQJWHHeiqODVUk%2FtYzyccEb32sU5bZb5MGB5HRawl5f8t5XLb1hw6KuUTtm59%2Fn5iJhAITmNIm0QSGyKZPaAakkiT45N6l%2BZbdN%2B&X-Amz-Signature=c87be796cf5cb282f00bf4a40f4585004a3bfef1529ad958112ca8cdb540b71d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDENF4OV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD%2B%2BbzBmDnfwTnEqXubqqdKTUGA1EQXMlpucsIFacHbSAIgTQJhSfaVAYjzCrDweayHLmHSoO1UXMB0N2s2zDarwDIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FTUk8moTTgOl55tircA3fMwL3o3ftnWZy9RZEILAI4LP90GKgIPlU%2FcHcH5ve%2BNhbY8DXKBXWibTIjDeYoX9hcHf2X70UB9LQbARjK81zObdRNCALhR12oB%2BHe7dDf3ocxM0az0QnikqPSg8d8H3kdDdERBiiZ4DT9%2BQTVPThVLG21NewaqGMlcRD1LVQK65R9C7yZN%2F4hbssvHT%2BQd0CDUTu%2FAQLNCZBC4C29HhJZyy9jGEuZju3IdC3V8xFlavceU3sjP7KZe0n8vGjyyevlREfpWAqMUk4JVa4KDZyKRTscAUz1hFhMrafXGwS%2FA7FOlQRrEw7T9fNauU83NPkCmsitvHSD%2FufQwioiBl2LlyU6333mqSOAHTycPkdvXPTBacxs56NGoba5OIN%2BLHhLSIH4B7xh1cexOEGsYBojdbNY5a9xHCYr2PW9DmlLcDgyFn2jPEkZvCPahB4OpUViBDCUtevBjvUeOq0p5tnEicLp7nFGdxSiaT9z2lCvAw61WrfJIfOqLY7Owb24YF83D5OT9ZH%2FlzEr2DO573dBXdHVOf1Cyj%2BmNYXgrGPIxzlfhL8NZ93RAzVM4g%2BzAiK0LzB5HJ0%2BUlazgkNqj1bWEX0b%2B%2FOwE6TneNiG9jP%2BAwxztef2ObpNAhNPMInHjb4GOqUB9LDnJb0JIbmN3oTJRrUj%2BWbLlHVGoIGNM0oFap9CuYlw1eicP2uZouNB7L0M%2FYJExyVMpfvLT7BHDX9C%2FHaRiJ0ZK5cwQu%2FWnHIMEnJ00oEGH2xYGRLFUVFQtyaF2jRwA5x9GQGSC9jOD%2BUkxCdT5eyhv3jb%2Fv1UIuraL74rfPU%2BxWVdPC0RuByFvfPEeaGnTyLtwQTkCJtxyfOMcn%2FqAq%2B%2FTl8V&X-Amz-Signature=7e6ace2a031ad88f73b9f1d940550e47fb59d19fbb4809a2a2da49a234da1d73&X-Amz-SignedHeaders=host&x-id=GetObject)

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
