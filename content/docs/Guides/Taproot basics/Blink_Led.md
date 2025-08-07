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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJN37E7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDf6VyHZXL8wMkWvT%2BdpjiFW0La3ZIau0J3S6gr0DHVqgIhAOtlBDCExPM9du1dzSexsvSzdo81M5f7kzjVXOtLta1IKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaA%2B2dz1vtSSOwfgUq3APaAarHSr3j%2FCL97Fp9fLI2Fn3mIRU%2BwIddLyi3ozGwXFaLCV%2F6z70nHnYHpqisinVIdwo148keHy%2Fzdy4%2BowbzOcqCk3p52e%2FwCxX3csVPinQiGBfqRhcUeFPr9T2RUhL2I3PrHqYFnkVA1LnBq47auU%2FZGGbjsviGjRKuk69%2FpqeciezazZ%2FU2J8rGK3VgmN7KS3FgQIhkRCBcyDib8tjfsBHWU042RdaV%2B1Y2XtMBg8DUWr484Ny69JWyMGdhqUKHdiJx30Lg%2BY%2BFaUH8TciYzhtWfloP5Pt%2BrxviGcNZZ%2BRgvxj%2BKSTpf9Pxj9%2FmqlRdee7sVn4mSDXE6BFLRGmLaALUW1qySSzAQnlUlk2Kedto%2FK1Tm5hxEWYjXap4OUFUvndJ0cDzllN4uyL6jMz%2B%2FE23%2BrD%2FMBhFOLmskfYgcnYyruo2jYybiqYgwAUw9R81D6bgejkLUGoFnGMdzlyBpaE3mWMYtXbUekbf%2B0aCJ4FZxbv6TrelOKbemf6BuKSo2ZaUAVoqZJtm%2BysSUs8yqj8CdZ0OZ1EpjKAz61HLyilmesjN%2BE4JgVlNpYpdosMLDOEtRiRCn3uov8tiPtIXrN%2By%2FvVr9R7WtqHNgBrqd%2FoRKb6qJngcicecjCvotPEBjqkAejmzoEDI2oe%2FKYvzSbOkA79tNLIb9MLuRH1Q%2F7SuSdIoE8mCVFcyklxXVhYxMj%2BHlSBEk1IvoX795%2BSOikr8mQQvysNsowmwJy8zKu5uAjzULXIe0iHqUGyPbJEeRhz8wfaFiD0GaryJIduk4DR8KQK3S3%2BPceFOQF2ReJja%2F%2BEM3dtdO5sv57ceWHNmmFrOYbkz%2BDHvpAzP7%2BOSB519Npfjy95&X-Amz-Signature=1f077b4d1e84c5034f1f037410864b2337429b16f29fa9fec6567eb954494ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPOCNGZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC7dP2ww3eOn1aAdKX68aSDxnipMacWAcDRh1LqPuxjngIhAMaDSuHWn3Yd5%2FKqmDxwnLRsHcgBkP%2BjyqEqsdWjN45AKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDe1MUcLQ5YnKCG3gq3AOuXvPqi5jYT9s%2FVKaLYAhzoc%2F7FHd0vo8Vtum9pjqURTglihtp2L1WWQVjs1ApcrQRARVTbGBQnOX4Zq9KgbefyiibHAMLA1kLVPDnAtvurn8uZ9Y4sSloL%2B%2FpmpRxVaZYE3pD3Uz%2FCKYIJSe5lB82Ojv2PXqYpK0RJ2tbQN3iCNmqeszUasLh%2B6rxiAaQibQZrVBvvSO9U%2Bzb9hkDpLn2530UPMBD7sjCgOcWL3ITT7%2BzYWvhGP2bpQmcwak7gEBiwt%2BxK1hgNyB3qk1p1WGkxdHpAK3zZpVVIIyVM%2BmlXUr9tZEVZ4GlW7yQL00hgvTHtvas6gmOgmGkI7qFgOTPPDDFY6dafrjOx1nm3oL7HbMEGPsqHJaqmXIUGSjyLJuD4oS1qKNFYVI1bl6TKJsRmMnQOQ7wQYleV%2FDnux9Z63koTwE2SzQuyiv6HtYKM%2FlQZrdThg7F8vxSZKisssBONvwQEFue5AFlQZJ6BEM4lpobiwTUllSfo3WGIKVnLdxYxTVK8SHgH7pUJVJb%2FpiH6B2H5IoyaKBRkxYgXTyqfPOR665urnWwW9KIx8SGGXyIrK33lBLksmsHc8%2FDWE%2Fx3sJGas4yojl5an494absBJqQIqAtBTodPzSuHTDcodPEBjqkAdO5gGNo9heBsMrUvVMw2kFRiBKt8m9RAGD9gozdv88WECUzF7ev6MsvYAxRzk22a6PtVK%2B3oeOFSsYFWg4VJbBjzpZd2iVgAe4MX7mHscrzYbPM4%2BVWfloL6x3VrzS3OY72VGmxdJD%2FANT2RKX0rCjJi0mE%2BeqTDVBfJUQ6cMUkG%2F%2BB9EqY%2B30pJ9ZgW618KOMpLTH3wzNBkKrQfn4QUMf5lETV&X-Amz-Signature=9b11cacd17671af8f2ab3336973c7ea45c59d5746ca9b6cbc3d1e007ad9bf4a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
