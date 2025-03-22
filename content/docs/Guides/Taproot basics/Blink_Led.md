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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHLU2YNR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQClNNhREKGDigYhzqJLqvi9CA6sFsPWjc6Im%2Fmr%2BoObxQIhANTqg0kCmghgdUA971R%2FYIm369lNesoigg9gMWcPrU%2BgKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUT7hJ1qzhJZLwGcQq3AMNdCltzfz9kc%2BkXXLLU8K6B%2FGJAbgB0w2Aio8v1Mf0kOWOjEiXU8H0d8VNurhgbClDE55Gw%2BRTL5x1gEo6RdZoVCbg4ZPooXWaNrSTqZnWcrYpNrniFTkaSj2PtXLPw%2FOn%2B%2BArWoXLXOwNdW8PgJpk7XVZSAd1TJ6vcimptVjxneJEHqfyS%2FpEnXkYDBJ%2BBC%2Ft9bszkHSus4Vbg5ShqGymJaDp1M8M85%2Fw1SQwhW%2FGNLGqHJydKih%2FPCrvbpIt%2BsoIA6bYf5UdGPlyzuQjEsBpfKWkgokODw50xe467KbWUtpkM90M%2F0fCKv%2B9AjOddq0uXf0XJtsMs7OlNUgRFd%2BrL9DdIchxhr5vw0G6v83OMLQi4lA1qkkIhfTDUAfXBBqfBcm%2B0RnPKx%2BW5%2Fypx%2Bk9rBI89g1fbfjwwlmT6zStHa0ILYhZ9fdtjYtqPU8kOj7XDBBgMd%2FAVoqnCpT8ik5vf1t0UMhk81giULvByKUwHbYUlO1asfDPfnWSwKcjqbeV2%2BtoHSsVfqgPnRzCA5P7DtCha3R3fX7RTE9Ibx9rev0D%2F49Tdcj%2BkQqgquPw0aZkz4jPjmg3SN5YAk2s5BOUaX2OX4VX%2Fh%2Bf604Jgr9JOa523c4SrSbmxzzpGDCjqvm%2BBjqkActH5wShvcQ0Dthr5fWHlg4aXsGl1voKqb5NvseN%2BCMnYQGRNUINSqHMEpPjD9rVYD3GgFxALmFWKNITRIa7cKxQFfvNvJ5F%2FELMHPtH92ynGLyUzSpFATmn9xS7ft%2FfaoQ1Yv1EXtM9cq1ICLtCnis5kekNo1AEeyYkM8Gvxad6b2O%2FJU4DLd%2FoFiWZmQHUsYwq38QZ%2FO%2B7o7zKCKWjQJltPE0n&X-Amz-Signature=30e28c5c377d937604eaa4a0e3a5aafedfc061fa4f8ac055eef3ddddb51289f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNO4Z4AU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDAZ56lTg8ffziueQI1RUuRF%2FG41mWbxXH85vUBL5O2jgIgCQh88zngb8FPdPe3m4WoCngyxQFfqIdUORJjsVtqD%2BMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9BFTLm0k5RSbl9%2FCrcAzE3cGpSXyzyjmygmh9HMvnDY6B64Z0DO6dVo1klWJzZ4ctwt%2F8C4IPFI%2BBQd9Dpsu5AKiVf4fXZlBMwN2xAh2H2liwRj%2FYOIgVdJoXyq%2F7NDVk0ZeR0UkGP83q%2FL6XV0s2aKfkluewMEn03P1kUBk4HbBTSaKaY8PmdI3X%2BfnXyMpw1aJ1CMeBkqDoqWo3GIyceckgeMxJwDA8%2FmMa5bMCj%2BIR8dEjFUX1MsiYUZQ3KZbb2rba3GubH%2BX79miRvKFVXFu8NmFBQJ9vw4qnLe7ZdHczD2ArPB%2BKIRO2DOq5SbkdeFmVzFykoQ9ZRakTno1w310HTRXRpqnmUEV6L1rt2ZSN74zmgucBgdW%2F2K6z8vALm7DLJzJNN7NIFOqdEvuIBi%2Fd4pO1kRAWhhR7fnHm07Oi7G5QPz5Vq8GTej3%2FjQHnmSRDaa3eN8weugP%2F5G%2BLxDkeK21H2yKHIUcJandoG9P8lc22XoVs90b3N0auLd4UK38yd3iir4ygJW5F2xKYB85ZqUGk9LS4quW4QmmyGH69RQiTDhyU%2B4kHmyO3hl2TdA2bwINofKNO4l2Wz%2BclivUL4FvehYGbtCAqQhzBI%2BM8OK2Xa9O%2FSMszhp0Xf1JFS%2BguRjM9UPxMgMKeq%2Bb4GOqUB4rCWU7wFueekJK64ob%2F4H%2BwLLrxH73pYjkul2EjFI9D04dUtw9cq0GXdkmKahyc3PcmFw8O%2BBFw5TvDPoximgJOOqDgKM5otggFYoS62T28z7m8VZJOpk5U91stk7V35e%2Bedb6izET2bh6eWPHDvoS%2BpwurPeQbYeSXF5gQtG40Tyul97oEnCGKTnSbZADMUU7cHP0kR5f9eWh9YsllEC9j5%2Fuee&X-Amz-Signature=e585f41d7d8a113b2bb27d360960183263823d079c37408bd7f4522c4ccbb40b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
