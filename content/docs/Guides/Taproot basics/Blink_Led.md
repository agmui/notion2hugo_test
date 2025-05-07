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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRJUVPZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBzkCcSeJ%2F3astCGqiDIX2OYJc66%2Fk8zuVryNkVJM2fAiBLa6FYPR1U3tnGnZYbptbCSUNx%2B5NZ6m8v8M4E%2BqY8wCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMulKGyW1W5w%2B7NfChKtwDJZ6B3Cj3S9RqtUYl2ryWPU9I1ZLni45uqk8UZknCxcnurhl8hoaUsTnFiNP5ZYt1uUoPZfrtM0EYfEYRLWS14nidrtNF7IG0ZhuJrMs0h27lEVsUgAaZ5QG3arU2FKosJP8y7%2BwLvUdynFIymifjGOIwGnQcH5attTqdPqe2GuLo9bTQkopnwMcB1YoIunQQeW7bJ0Xnazpu%2BmbEjGYpEeb%2FR0OLFK0r0%2B280rr9QdSRqP0%2BFwio7bDJYm%2BcXvlSQBo1lAyjd5GgusYXyD3AzRMakdW7px%2BrayJhvE9UXSM5SpBUsqZELQSj4muDGjkjOLTg5%2BtMSUYnSn6fRbbj%2FXEZYmj4IiEQDP4sx1qpUnTjhhrilH1CvWIp8w%2BTl393q%2Bm8bKhak9sH752uboIKxqjuAeMFvtILea75m20AcdA3ZaBg1zoSapzW3YBM%2BXO2UXSLgRkGx3%2FBN%2FUrBWy%2BiXKgTRzdmwF6kz%2BgvsdPV55lWaAFbZWnAPAMLEe5riwqP8VknI2S5rY5Bcu%2Bskk6BqzYrpg24nm5AURnRIrtHPkj%2BZLvC%2Bvw3f56HBZX%2FE5lV0198AiCVhdK5MKsTmaca2Ica5%2BTXXexyN5I2RiKgbaq41asqQJVmC1M9hUw6IjswAY6pgEsTnZsncPilCHWI9g08ocxOIYXKxt%2FOQKLxQVyjTuukGqcGgr%2FeASypFCDGWEcVIxByU59OgXH%2Fugw0cPVebcAnvSLyGXflkuXDq3jXH6clKGgrVuKrI2q0Gr96TSitMlEO%2Fm5eCix9204vFmm%2FtnT78mpTG1XdT9XJoZ6Np2UGIcRBDunOvFtvyeSYkOi4tEoBC57pgTMMDK4jQsD%2F4UDVL7Mexft&X-Amz-Signature=f57a4f2fde661da5ea9f577d3fac6b7fcc9f560f47397596a57ecd1f4f65ce85&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG4LDIA6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrfsADao2IsegGahN1D2GiqRTfPWYGKHTg6IyU8IM7mwIhANcvYVGGmWFK9gTJchbz%2BUNWCVeyk7ndEo7ividtc5yFKv8DCFgQABoMNjM3NDIzMTgzODA1IgyZjgO80Renn%2B3i%2BUEq3AMiWVUPqOgR9EAuF0SfNHOP1TFaplLK%2BJS6ST1yoD8658Hc6p07%2FFYvQW6Fi%2Bn4osykG1c%2Fe%2FjZpyA%2BuX57sDZo1CUhHPmyLkYggWnUOUc25RqN%2FNFd8ng71D2ujLKalSPSaE31T6zQ5VNYpWKPEsddDErY3cWuY7tGu8xkQJB2GlH2DpPRb4o20OV7KNqmPlBqtDo88PAj2FXeSmWrgazi%2BJnoip%2FBoIpG5iG%2BpfNiLE1f04XBaNBaESri7AV8XdVG7zxuww4m%2BnILUSR0Kh0TnF1rrD52ddmQmUwh%2FIERNYI8VQXtDCxFgNXk996GXPd0928FQyeJKjLIpzP4XyhqNWvYMCGEQ%2BGx2%2F2SEfOw9RZAzrP1dUiYDInNsFZpHMJM4W%2FKyPejEl9sxGBh85VSjP5eb8Rl9g3Kafj%2Bd547PpHXb%2Bvbe%2FhQwJok5z0PqYZlMPec5CF6XXB%2Fa%2FaSq3vUgtEIRV9x4M8JeC2sK9nzOK0T643%2F82Qevz%2BXxud7%2BfP7CbVIpFgyqASMKUZH8I02PeYTkuQ9LZUTAth%2FEpI6w71H75MPbLcE%2BsmYPIrDkMcypG3WooBVZPr9jjytDtAQVR%2BVGF1ELXTsoQuaW7ucrYCbJU6G4hJxH6CAzDDziOzABjqkAbrJ%2FYcFQC811ZBzPOi9hIAjfwmCU144GWz11cDWdZwzQK2H869s0Ge5JkP0qRO8ORQKfDTTWnM1RmVAfNfW%2Fo9ntrnUvg1y47spB%2FSNJh0gQH517GA%2FYQLQdx8Lph8h2z6gplD5ow2i7W5NcZn%2Bn5j%2BTHyzKwKfcVUOK%2Bu%2FUxo25eFbBGQu19ZCyW6QWjq1mVLVUob7e4xo0G4JULWene0jsOeL&X-Amz-Signature=2488c9d4abda20d2c35ca2d75f2678711b7c32f32209ab5d5e5dd3b8c78c02f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
