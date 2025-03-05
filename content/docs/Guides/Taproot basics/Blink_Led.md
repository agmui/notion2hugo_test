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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGI7NXHE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3XJhgQBDCaBB2yO5zFQCyhHAbfWdI9kI1qeurzBAjrQIhAJGUU3UP1UmBcw67yp9eqy0ZCU%2B6z0MFBo7qrCgysTztKv8DCBQQABoMNjM3NDIzMTgzODA1IgyAs%2B%2FZUpsrAInEA18q3ANwqwE5AUMm3EovCEmQoGoMCFq%2Bbikx9XV0Ygnm7tbvXAdTqXPTLf9vBjoRcOktEZ0v4ESpTWqOrn2W%2Fe9eCKp4jTT1ObeJXzxtIc9NaeYCGIaemQcsWLNtkNxS63GbNJ1LtnVkWKCecQgqxFV1ThUYynl%2FTrd8c0V%2Fva41YV59ztOv4rXKpqGF2U%2F2Hsc62vKbPplb%2FHIjmRq73%2Fw5Xbapqz32Su4qivaP2fVBvSW2WKz7SgsEJAyzaBNAcc2R1%2BHfcjNrNkucIv32qbWHUxC%2Bac622l7%2FPzEjpHAK0un0XQ45W%2Bv%2FQpNwQsjVdFaLbBJ1zZMuplElr1Wqofn2NqHG9F0OjOKeHwTES6zbh7LgDW%2B5uz4FRtzmdgNCSLjjj6956AJ%2FN2nDggtv0cIqRzmKcffxbeb%2BhCki1L8zYwKhnqCzNwXFByMW%2B4e8ILahXjBDi2M5YY%2FEwxZuOnOoNxzYvzqb0nvITMJwmh2RMQtAeiyrY36Jq2exH6HQQqzpu6wNFxYD7I%2Bo%2BLtGtw7EFP9ZG8YBFexuj8WGe7qRDRkLTmUjN%2BM1a48Rgci16mDPM4JInjueTnwgoqzvQtCGI2vYdcfBIcM0Ke1LQv1xEhYHg6r8CZhaYkYTOO%2FncTCL0qC%2BBjqkAXrpypPPqQD1rMzBfOebFLjXoSbfzkooR%2BWP3pl%2F8MaBV594gYX1pHX89XeCsStgv3YcVwfYeF4AENia9X5wW%2Fo2TkpePs3Hd%2FCIYPIKhIG9ZXS%2BKx8JvZXPSlrujppC0C1jDsUIam%2FIAFDIuqnBhT9WZ5tdXf1Zp%2FgFUUfrd9%2BW70QwD3%2FsPgof%2F3hk7VsGCSpeXks0Op9H5eMPVPlk1YuFI8l%2F&X-Amz-Signature=f3d7a863557407b1d234ff69f562eb3460e159e906b0568b58aa975a6de0bf9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAU5WLSS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYMRPewiwck1jvtfhF97usHg0pHiTlBu2IYTsLrMo21AiEA943V74gXsIcCRUy8di7Gb46Us%2FYm3MY%2B6oR88E6VBCoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGepZ7IZJhuYJ5dXLyrcA7yhU1X6Sq1p%2BPpftkbYYQrMxuGi4u8cqhV1nggH%2F6dJaFhmh7RtPETUxBVddAwC91CqNsC3U1TnqKph0Ap61f4ylN6EhS2VkuxmFRgeENpxxugE48TpoqFM9TM40hsLkeoNqeuO2Uq7vN0ZqYvBfLzmkIsey6q8uWP34fWA82q0q43jtzQRL9LhBXoa5uELN8OJ8fMFZDE0UOxZscCt%2Fd4ryxZI7AtGIcuDtaetP8%2FCM05Nwsd1rEYm4bTzsxFKMaOG2Id5y9g6%2BvQ5fR9GDtnR4w3IN7%2BitHZFQmwp0k%2BCSfz63Ce9W1H25SKRHJUvGpoWM0%2BIGKoEqEhWZo2AVmwkQ76NgFIrTorDAMvo%2BLGMM5Tgny6I15nyCjx93AOQ39gn6n01dTdrGn5VCtc4vHUMp12no3t9h95A7HSHd7PLO%2Ff9puPiw4HDmM3yHASk4x9MJcz7vyoMi%2BplkHkUB687gUtP%2FA8DGgR6bB0YsuLnbKr87aQQkJ9qQRNyJDTN%2FgfGtRK7PPQQLCtJpyfqPefFCX%2BXU7AX8KWZgJ%2FFzfByhCGrRJSg3mEurPPCI2JajnUfOyMqw%2BSI%2F8uXyzwJ%2FGJZJ%2BtkOecAjbqcO0%2BDUqaeff9GvaKhTKw%2Bua%2FwMInSoL4GOqUBCIp309A4E9KDGye7L0kFfd9EBG70JEbPPEHyKNXiW3mENwNucxxCXVyXraPTIyqeWDOkG3aG%2BKrStusSPU3GmnTUevQDpmEMBMbieRstCNHCh0RSnx31sx0RLo%2FqsF3lNiGiRmgCZyf3JJ4QTzRo%2FLwWrLs5tZMT4d2N3FPIJdbrAVQrStpqpaTuxNEDW7AHYtZ3YP6tXLYfVkEemFxrpeolnSgl&X-Amz-Signature=8bc9ed3ed1a5c76d1c4ff84cef62ba9cd9f735eb50cb26cee39af7ce73cc3e49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
