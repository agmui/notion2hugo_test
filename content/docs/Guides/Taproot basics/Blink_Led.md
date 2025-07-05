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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHA32FIN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEiXQknNl1bLI%2FuKMwTL84xEY2IlerGbHWrQDpCAaFz0AiEAtIlI83CnXv2jRkO8zLFLeIKYVsDGxLrmltaRGrbKsXYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCLXjzkfedbgPWHOpSrcA5YWmZ8nE1ZZ6g6ibMSeKLgS9sOkMpLh%2Fg8fdN83fxLs83ptdGPuw2FcsWkO5I39FyibOt91qtDit1K3sel1pTxV4mYyv%2BaemVN50f94xU3hiiM6ilM4m8RcSix8qRTlnGRBvvf4W19WfZgmwMViwwaC6HkJnvdortj6ERKL6pkXMMSkONB%2FLPPw50rJ31VOnxJa0F%2BM4WMk9wPZlJN7ZZrxyMtOZq2WrwRKW5K3sasyKEJUkLfOYovxwgLMdLaBc09iX3bA972oMFQC5a8f8e%2FKZolv7U6lGp44yjQDrAg0nyCWKiFMAceSpU0ABYgB25jWcygBB5%2ByX3nbeFl00LTVJD29%2FtYVohxLO3Hfak6VZd3o5qO0H%2BOZM16u2X9uVnWLGFlJIz8nV9uSH%2FWbx8PugNW%2BzPfRUZCCTiJgd9nTM3SoB8dBBRpv0Kjylmqu9qjCJMmiWcpcXtBOF4nUmqN08C2WuREB18A7zkC32LFih0DP4hZS2cnusSYHMAzJWf738GLhpUG7y5lagOcmc%2BSYJdFqanJu7KkxasADUROcbwJ3Btn0aVSsmd0psKCO9RwLLGhntylwPUOHa89G5DPqJyX6jdnxnSvMUhHlqu5MmuZi%2BZjGzaGna3M3ML7GpMMGOqUBFf%2BVvC1WPqjXPPRasIstF6sXY%2Fuf7chfGfLKrGDm1fjBdm3hn1FiCmnny%2FUsO5IfjrvkuZasNKe7RxcnGIiEvDUPGv6xJdIreOCxOkCWgnmbGDYWzrPFXsJVHWN9cnFE7w4H%2Fjzi8%2BuJr4hOOwng9QfnTyrHvZJ3%2FlFwQyfUW%2FV0dDgYi4FXeK46YeWLbg8Z4lL0IuDVbqns7QTzfU6Nnn2n7V0Y&X-Amz-Signature=4f0a3cdf9a184de3cfd406f72dad99b9aff02309550ce7cc84cebc3486d1063c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVYYGCGE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGkDq%2FK%2FG8clu%2B27yAcrj5iA1C0FdI%2BW7%2Fe6j5K7gGtMAiA0XXTp4P7tGucK9HJAilLynCSd1hXHu4s%2B7YSFWKW8%2Fyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMD5%2F%2BmrSTK2vxet0PKtwDAQIl6NnjEM0Ux9Jy00YGrvqT2ZkwIfw67XhZhGLgxE1d%2FRXFCWlTvCkrTQM0QblFdCzfge1Bz0Gf8BbZrdSaiFFZndFnRJ6fyLXEtxRwWLXW0rlYnGA2Cme5ufMQ1fS16pxB%2FqWXxJR0Q7aEliXMNRkDhsZCwqwjgQ%2FstmlO6h4Y8I2m4NGdpA8%2F5GvyqkaSJL48vwH3Y2zRShgiRG%2BMtPVZnPBs%2FjN9PGgHfG9Y7d8%2Fs9UTu5BJRn4gnQOgbsNRScitmewzw3fCRLtL0j35fRztORGV3RNwpOoP0mvUi3scN89U3g3knUTe9llHzhSznHSsFLoYSWeRhCK4FX0Q72KfDOLhoZD%2FywsMutFsXbMFVh%2FphH5smk3rZ%2F0CzshUr%2BtygVRdhi4uiK0caGs1DW5B9Rp3f%2Ft8t7Dd1L8kh9VqFVB0ppv7HRUCyqe%2FuQyi4RAvXIK67i0%2FXJpmPdE%2FSInSgkZEt0qzNWZ55P3w5p7PxxPrh9wm%2BoZJZXSDABF75QtC5N84XYdmwsrWyM%2FDSd%2Bh6prEh31i4Mwl0inZyzU9FdTz2WtNMLZZxxWHy93qHJ8onTlqqyVXRU6TR4xMjA0tzBTB1QzrRjNk8rXvtXE9BwL1UHRlGBdvs9sw1MqkwwY6pgGsmejACYCM4fXhEFswHMJd9hSy3Vc%2FIyzwawDEJ6U4574T5v8Yz40zXXr1PqVrMIa7IrEyW%2F24MorjnKY6HD6Tljx%2BClTkzXxnCfkB%2Fy6ak2PcAnmoXJo8HHOwScu7V4HKNI8rhBRYVGbIQK8Wp3R6QP2oAQEfWNt2je3uveV6VuFZQ3U5EJmxbRJpD2iORi74B6slPb5QhBRuyWxxccOPC6ZoUSHO&X-Amz-Signature=4da174963f1785286096a47c9d467fc0880c21a401539c6392fecf52b3af3aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
