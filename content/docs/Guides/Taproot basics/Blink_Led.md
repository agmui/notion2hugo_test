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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQEDMJ6L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFVSPZMLF7mbezC92ridjE4iQvUqM3M5RKaC%2BfyKqTW8AiEAklpzlkvlVVtRBy0w3o48MNeax%2Bga%2BpM0tzbLhl%2BI6s0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLZpLnsPjHI4pnOH%2FSrcA4LTvQDcHptJ%2BpSC%2BNO9LBed3NBsoYWzOvOqoErV0eTPwjogqS6F5RHfHmPmI0eAxFPtoBQbgwcpV8P8WT%2F5OgUUyHOEdOoIbndrw5x3lLnLofK6lNbneFpL5gcMnZ8dn9hna3CtZI9FK0nonMrsL5cqQLMheFbqRn4Tto%2B%2B0ae8EhON6Qsrpo19PVVH%2F4eNAPKu3BHmc%2FJN%2FdVDb329gXaJARBGwbcccapRjFeIxkV492a%2BlP8YGJUbIeCsZG%2FAbtrCcnij7ErEGLQCb8ll2G0TIlquonkI%2B0AUXuGR70Un5omOrqgm2G3PR%2FSgjHhuFPbrfJWnp%2BpnvX%2F44%2BDaatYDPxtwFvHOU0D8ryksqT3BNb2w27PFE%2F%2BtLKLdNFSRV%2BFm7P91yPwxANGvGX36ZS2K%2BA6iTYJTIx5aT58egJvC0xcGw5YoMmRbCBEKAz8lfON8OArLQxvvfGtc7vBVrTQX1c6veDYMbhYjEd8TMP5ChsN9Vow9Mh50t8w4oheceai2YUAZ9Lweks0uR7KqFXoFd7H3SeTIRBVykAaeeW2De4T%2B6PD9PXre%2Bt9PHS4bsQmyoxg86kfO9SRj0IT%2Flt9ZI54S2QIewjAmpKQjSljnQXnwfHmvJ7CEXExqMI%2Bf%2BMQGOqUBO1CrzCsUavC8e9vJTFR5fDXyFSSSu3M5lNqv7J%2FmSbmlG3tcss60ZjYPkfTGcuZR7b6nag85VH0lSDhYBpNndJ1brHGn6V73edLRBFxdn4zqnoT%2Bnoe1q%2BJBBS7b5KuSQrKGVM0qHaVUPkv2Alc%2B%2F3yk87t102MXfkhEuFeOYFdSb2pLFutmBwvEiEffIOCJJzLqu9qZ25bWABbqp5MfqpUD%2FUjE&X-Amz-Signature=bd54786459b104bba3eb776b84988ff695fbcb946d58b3c68f2f58ea81e22fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYCDAWX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDQvnOZcr%2FIyAC9Fhh21u0XnFobRGDT82AIX3TY1UPUNgIgFnZpXsjF36UNy0GaJjlJAtgN9ycvziIwRpzNfHwSYWYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGPmuOtYRxUYLx4GfSrcAwszTMvk0H02CED9T9pUTiK1TUw0nlNvr60h%2FZ726qIUOL8mZjkXbhaRO6%2Bz3cpMIQXTW4n5XxHpO2OYy6cD%2BwTa43Hnzk2FZ5SIEnf1DdoEGFrPaGJq5qWN7fQQUA07OMVA2Ewxo34sWkpgejbivo58pdtWUn%2BOKZG6Vjhnlx2rv1spq3Pw9GBhR%2F8J%2Bb7JkIXNdzHfWhHc4slLWgYBXf5XBPJU9FhWGgLj%2Bcbu3AQpbJVwCJFFomBMJ5ECs%2F4Z4VIRv%2FKs28o7nLw4%2B%2BFZwxSiHG%2FYK5eF3t3cAmZKujI%2BC8yRr5zAGD4ofBhzwxZ8Wdun6twr%2Bn47oFwxhiAbo8XR53kQJ3oTKOvjY%2BWxojuEA6NlO%2BsLKLuQxWDily4K1DqjnJuTLJDUPfbFt2fGkLvzh9xOEqe5QRSXXYv1p9SkCSRv4M24Ue3wnEGcXeFzDXJG5c0lfndNZnyN1iZnvu3xyjoFIumYThYDXXQnZipZT2mE18R9JVI2lwrR1TKWxOLyiMZF0sqkAawpfzwegkC3lrkfjNRfeyQgXcm7y7OE7oK2eAiLkiWZdPuOL9vI%2BWi9VbJ346uYaUQ%2FrCuVJu2tYtW8DJhQOT%2FfEciyd3Wu3qUqI6LPP%2Bk1Y6C%2FMMCf%2BMQGOqUBundr5rTYmwdr2BqW3s5YCTFl%2Fqqkf6qD88%2BRo5GncvJmPMzVBver3cOFoshVrAxG%2BKZFOe0tLfA0otc824209BoGlvVPZy3sFSPiAMgItanqV%2BtrmwBCIyCLTOLqDae%2Bs6uTu%2F%2BSK9umEihEQKb7aInV5Qua7zEbTy4H5eNHih62bcbZ%2Fgx4zP8g5GWwxAzZ5DABehJsdM9C3fDQW80Qe9TbhzWk&X-Amz-Signature=a43f34aec912e776b120fc52ada67c08ffcca76766cde2d488f25cc50b36cadf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
