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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5TZPQX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl9q3upx0NByw2a%2F3m0ONO8WFX7YLiPL0tAsS3L2zhNwIgKOcrJr1A7wYy8tcNIUN6xkZPqJfHHCPkkGFMNa2IwPAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqobQ1HIbyE9O23wyrcAwIIE9b4Vi41U2v1R%2F4yGFklxDhVH10K6XSXxM6DrUdazkyce4IzJ%2B1sfHxU%2FMMKF3A94Lx2l0IKDv%2FrdKfZSiSY9USJ0NS2%2F%2FBOPhC78XpXarGKD8JrAIpmOk5gC6IESu%2BKCJ7uoJZ8FiIib2fJttIUD60aymUhJeyh4DqidVFEYiSyDcZjNkQrZ4shKNm8uGMOya1ffdDhZLyoA%2B5SAEkXeXue8auyOmUXl%2B85APHNxqZ%2FMOsB3lQSErlfORtcpsw2ME16jseyryv10HHqbOQoJ9RaOv849hnjDyvYOSbZhKXTZkyYOESwDholLsxWGTDQtM1nlYtNC6gyRHc1JXxoef2N7yhSFDlhLe0%2FAY1jun7xaBIzo9dtijfkRGNUXgGJgUiE1WtPWybvcSLRLGSZHP0ucgsXQIa7gfOYCHyzH%2FGRMl%2BL024Yyk2HtI7z8Nmh%2B5GpZIeIH0bk8FsR1u2PYrK4tb%2FymRN6fVNAGqG3qI%2FkeLDPmmXx2xdU%2BFH6ME0sHVFdPDY9dz%2Bc1Mkd%2FN15vM%2BYaZfVYt9EuFdDIoYm1d42e85U0E8aN542WsB8IWLrk3WHrsGCnK48jInUXH6desmVALxxqDWAIdHK%2FyneV6bFr89gInBQLrutMMutp70GOqUBiAMyLVReQA2jD2ALWcIjRTaNDiRpMezbIG2cF8DkQFqmX79gtEClxRX3rUuWRaomZU8J476%2Fsv12qh7fNxY8JzqcN6BjAIuq5jRyOMrWoaiDJD027rzsTGpe8L2DQV5IKA19KBFp8S9S9GsDLC1gJsBV6XYXiFzqBE8MkR0Ts9MbNUArnGOCoMBvivcJALrYCnbOD%2FR6ZnPXDNQrjzKOxsaFxLtN&X-Amz-Signature=d137d3dbd7260c920f7f362e5ae001e0a0d5add50c53e8d44bc3b5dda401cada&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAEATALX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOABi6dqU%2F0XjAfb1X5o%2Fyxvp49z7F2D1O6WfIFxMOkAiEA%2FOW9XFlvUyadVhxzlynkZt1HcHQ6gmOQkatpH18cZFMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5M1Rk4czyHPWquUCrcA8s7IH0qIJvxsEdWS5Tk2hqtIHGfEpZ7ucKwPvbqrvWo06ulqiwGbO966Riz8G3v3UBFSa8%2BYNNzOBPDY3ZyTxCmUGgLF81aZmbQrDZR9NNZK8HoHS%2FmNNWxfAYA20kn4s3QwtTdfMeLBQmGoteV0HWQwmMJ9s9IaIFbKoKOyhKq5yniLS8w0yTYFEo%2Fs2IRv6z0EjPgZFgF1f1ZTjadLCHs9NOSMc5KqT0vZxpTtQzJGrI%2FwCdwDmfPrMmcT1rbQ6e9MX9ryx9jWqCLG1ThM5%2FudcHzTW9mUryqQOlrTCE9GW7HSaFclKbIB%2BHmC2aywGrHS3pyid%2FiyK9W7aGEX972fKWizPaXTMeLe4dJ0dNi8iSRNpcBI89z0DDljJZ2Tm8B5OLGRwo84COF%2F9CPwBDzdYiIxHQ4fnac1UFtWxRv0AtrYB53HxIvg6OH92q3M2I35BF%2BNoiyjrEnaEyY6eUxBR%2FBDaN19o46bfRN8f8Z3w2bv70%2BrKuk%2BjI1V%2BIWuq38vnxWEPLT0GkvW5XDW%2BvkZNYYJsLk0jnTBZsvgIcun6F6np5jjphzdig%2BNFQLKyAdtgKe6Fwj7SxDLwvW5C68LLNF%2FQbvIxonODBa4p67emSvJQUzjeJDZ1LeMNetp70GOqUBxJZWNQOVU6Y8DHY%2F0evY49zjriwcWw67swsHnR5MyISMLSMfav%2BB%2FGrnaV1GkIkAr80e5%2FI3CewsxfyyByDm1aGaG66IG%2F2HBJ%2FRirrTJbO4S1vjwlBqsrZOj%2FS8rKRAApIaK0RoCg0z%2BnqSb8vEI9C4gI4nrJ85JGWeT0WlmFP5wDNmv%2FrLsfxUU5XlS8TQxkNbZTVF9ZXEdushTuq%2FxauDdE%2B9&X-Amz-Signature=42f0922ccca6fbdbeebc308d6c4aa74821c9a79485323b2f7333669e493603f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
