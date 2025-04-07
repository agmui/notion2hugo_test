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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z77XZPKU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9Fsme54h1AtyiNNbpVA0OBdPJh4uUxqVYFvMnTojj5AiEAzDn0i46PlGjbYN2BKkESy8En2zwACEzEHgzduGSbjXwq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFzFpw%2FlXryJPAmJUSrcA85BU2TdM%2FadFcg4QIOY1rZ1BsVS2xDAvlnGaAjG5L5fxPRiZXucohWYr3aiGpiT3z%2FqtjDwVqr0%2BgFKrgqGwwfvhVIb%2BopxTxq%2BXrSeCv8TSReVXLQuCAvCfo9NRECWhVhs4GYyipLbYjhmRHXulMT3%2BFyiGqIzVMneNpcQDeX1QPi4rSXu%2BHJxjirpKdC2dz8PQlq%2FrYL%2F8WXeO1I6yfU8qnwHPnRKGO8eazJuwq2OSKDVvjs88FI63WANFM4kTsOFzJJBqG%2FrK9LuTI%2BkXowlf4bgiu25xrVCipsd89j%2B06xvaF8hKKCCi%2BRl%2B4fTuf3%2FN9JQCcujrjupLU%2FV1sMsNyJYpCha2JBAEh%2B5zHxFzDoIaw%2FHMC3XzUalg3VQk%2F9B0ZFfhOf9snSFOeLDQb3U6AuKk2MgjopUACAJ3VcKwW%2FuMXT4risYDdMk%2BWI%2B6eUDFa5qADyr20blqbTsHMk0%2F5GR%2F1vbq23p4gZvKYpz5SH24O2gDutzQorkR0HTTLlcJK5ZGjhRHzL87vGNtCWZcog9pdPyntAJ8VEU7SgeGfkMUnIn13vFKz5cBaW5JQXZZLLrirBKfCT50dODE%2FabDC6A821gYASSF%2Bu1qsgz9KHng0q01zJrdehGMKnszb8GOqUB0Tay8UtAMdIl9gdOXrQs5VexLlIIeMY86m5imurWgYWbYChFniWmHwn9HV3shKKtYMopbo%2F%2FvmPZ%2BAUea5C6q3R8ZlUd0t1onSzHOKsSAs%2Bf8tptlEcvEGIBEtlnh%2Fnfx0dFGLMC%2F1L%2BBwC7GCIYk81AKWb9jlD%2FHrYcbJSuXJwpAzd1NSpX2EJaheelJwFG2y%2FhmDgAfHR0%2FYFxepA7cNWgy5QQ&X-Amz-Signature=dd630b3068a00a356f655087caa765f85d14f04f7b616aecc61da95895755a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIRFZ3SR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKUD8bccgPsuv2O0ZVQWbwwMlUWhAK3lpU7Kxx8YCj%2FAiEA4E%2Bfyp%2F2FATKXpI1WczVMfFF9EWHisCtzRxeju1Y%2BYcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDC%2B5yP6kYc2Wl%2Fo3NircA4M%2BhEolFnaJhWfb8FZC9AqD6pnithCPTwaS6wso2Ua0UPWPgXxJgzF4sVqoZqE2tzO2SK0wY8PYds%2F%2Ft%2BlHUKiRHWqkert1njFCdoLKQGtbf%2BUXCWo5IKqmkwETw6i%2BREy0TrDOjhePWqPVInKA%2BRmPt17lijS49lrxvHXrbl5LrwIvDuTnJ4D9LyLcvu37atFjDd%2BCfqC6%2BDNxCnvxWbQEJuILSGU7q%2BDJFXKVRI5AsRe093AeFW8AI%2FteBVTqoN4RsMQpP7uJiSuF6AwHRt8%2FJVz2TlnkBi8bsLZpnnuvXq2D0BjU%2F6QRN6vUdDjVM9wTYAHNnjQ9TtRVT1dUuKWhAJqmcD%2BflWV48DdzE2%2F4xdCyqTwD%2Bg66XmgvukGjdp%2BHeVK7qNfSpGUabeiyRlPCm%2FuDepueOljT6YyK%2FThRHXn%2FDW3jliyusbjzG4qrRc5wW5T0FYUUNojgTMsVExRUOg1l1hWO91dqS9381AuolmPXA0DNbDHSkwU8UoQtBB96UnmRrPRV2TfJiXwjktLo5K8x%2BlFx1v%2BdkkIyg5fT9yQI1QMm4ofD5qfUXN%2FO8ar%2FIwCQJTfkTzZ7RNeYT%2BL%2FJzChIlLjNkAgYKiMABZYDKMTgts50IVd5LayMJDrzb8GOqUBAjn1lS9Ll1e2LlS2bchTwX1CVEbryhTdPUdlvGo2582DdGzkHgJKFUGJVrBL1XgTTkc9GAMm5zJGe1IEnUtfyCVEVSnwRgAc6WGozvg7THbtqVfdZS1Z4KYNk3OBlSwzNQ37UbYismNYXXYFczAjiUg9HhFpB7Zf7xpO6rKa%2BPho50YDPh6EmQvHj8s4wFJ4v3qeQ7Z%2BnOLLm4PBzJYa1r9qcQNJ&X-Amz-Signature=283130d0ca5ac3f7090b778f14c93a8852c80c84c8ee4d7ef2a69200364819df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
