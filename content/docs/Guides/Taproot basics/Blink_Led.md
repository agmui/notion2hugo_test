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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PGW5RHD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIA8k7JA2CmpkBMY0WXK6O3ys5AvlsyO0ufh1ghUg23AjAiAU8qczgK02Nn7aJz4c9JMhzcuTcDbFqAPPIUNBLOwemiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrRmGvF9ADWrLGG6NKtwDRucX7IsxgzxjL%2FwI37pfH5uAdMqpjk5R6tDhLLGwX91xg6CaMnwC0Xs3nAbh0bQsSAHoz4vdQFIFfAujOZxu2ymckBwYrIou2nOHIBzzUtVylpVf8IOqO%2F9MsPGvR9%2Fj%2FPfDvJgK8NBmP4q8OEfS95%2B16GbQhLwm4sDvNR18YwNywJLuuH77GZqdyyBokhor7smAGrDjfTAkoHUkTWC6nx6sVKpkCXAJEW%2FRZ0KcO5G9PnBeambNez%2BY1LQK1MlES2n%2FLkd8mWz5fil3Tn0DmpfQEDtq9UF87Wow5pcjLWOHwk5NhMHyAcisXG0Bvl5b3VRioAiZYEyy%2BclPAE4FwSzJ2XpevoCmh6kVmXDFJ5z327KEkM9gAGbMsl3xXmhKKQAdO253pyBtu4ZW9blE5Wgy8g1u0nscX9xFe2twQ4jw5YYlAAcb4gEsnuGD%2FA6wCR58FAW4VOF0a%2FGnBLL7oXxPWhPIvxIwwz9NafBMLpZmBrLZoJhuwYPUa78Mk5KWpMoJgqKRcH4wQ5DNwKRVWHoMy6mXa5w7rxmrTqwmLMJcnSBKaApEUj4JT00DSXvthFNkJGPoY9KR8wWKvsjC8P1kd98uVfvlqKyFmzqUA5Z4%2BxgNqYAGtZLfDzswirPHwAY6pgG5YzzeDxgTf8Fy9P1SrXgPukizUN8W6kHfS4qbY5j1CDFzfm2gv0pEjfILC7PqsdlBi2gpHKp%2BR4xpFeazOUJM9uEfjK7nImfFkJzH%2FEiZSJMyCSSQcrv8nq6qyMKhBDfoxY5F%2B%2BE1s3e9XjdfIXKaWJRl3DF8UW45WP0RqBu4YB2vfS99Xg%2FnFAQR6Td5a6Mk2aPlE92t2XLu%2FjVPChvmNfpjM4uJ&X-Amz-Signature=ed26c3f58ac93e93297ab8cf238896fe4d89cc8ad7f6237df714fbe0cbebfc9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJH2Q6IA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIDgPh6YswpM6W2nnuPeHWrvx8%2FBJ4kL55wwUKlce8OBmAiAGSfSFiQdB8kdpOoCOZANoj94DuoHcGr0UwBEiIDGkhSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoB1uigPIHFfjIjLJKtwDBV3LVNb5Uwdnfc3bbDgOJ3CVRLRjLYkOV76i1UsIpaRZ7TmM07J6OVdnlVifD4ME41oP5U7WHLptQF7x2zD8Rh9XPIPFl8HKYQa4ReI23Q8ntmoC01%2BqE93BJH0II1FHCXtnx7huBpKbqKjrYA%2FFFziLoFu4yzIG82TWjkwaOyddULVTNI6WozMa91QcP%2FYq34DQ80U4BN%2B7x5%2BocOPnQql8MCFmPwTpMzMSUHxih9aeMYIgVF98xJZJ1WCEz591EBdigxIA%2BzMVxlFLoY64s9fB0a92lyW1sIeue12gxeKCF0w8RhMPdE7aAQEzApAVfg5p8bOVb5EhxL46GK63ZkVJvaufUINMwEowLNGwdEYdGO7CTHsbQrj6c%2FttQ2L3GTa7K3DbXkUHBwmDBHWlm2FeVVeLYv%2BveEBEJXe%2FRqZKiTLd3xNMptiNnTe7I8uXIbiEPU9TQBgtgSWqjFQadHxKvsZSAU2zmmY7jmVrzPKERzkgLEeIAZg3TWPyfv9PnMRTPrwvsK3dksP5S%2BVLeQLxaIrb5f6szYyaEr2dnWtFbmvs9fpDZYN1i2AmoxdnLkn%2FGkYNd6jsyVuZaWKJ0OuYl%2BB%2FXeTBtSk5QMq5LF7LUaFIiV21UWpHw4MwxLPHwAY6pgEvBBiawO7ueJXZDi82yjExKxBcRNSj1PiAa9EQ9es7aF6zo2dp57Fz8yTiDXs%2BPCf82LsK0EMgNtHfJG9yc6DDIiEJv5IgbU5sBU07V0MdExmITHMWncE9QM9K%2BYCSd9yQp6BO4XSO4gytNnaiJoqgiaD9UtAQvguoE%2BcqlczVgb5lHqlKMkZ%2FflnXWSfe17ELPcPlz1RQLE5rqRQp%2FT0IKr%2BTGx5y&X-Amz-Signature=d2c21ecc5a379f8532b69b3d91acea730cd5a3339cb16f7f3c3e0324e7827ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
