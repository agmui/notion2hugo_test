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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOV32QFU%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfdDw4Rz3vWX2uQToAfBNrky04mLL1BRrV20ldVElFRQIhAIcSoIKea8ZH5A6XzpJ%2FwKCD0bUb8vnvDJvT7ZQBJ45JKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhjaFmzkfWWfJG84Uq3AMfuA7x7MXfpMkglW9R5%2FpS3xDi7awXx7tPCI%2FzDSgR1nljq71qpG1AgNrX9AA9uj%2BeoqC4ycpdPFPGFT6Cldre%2ByoJSC0us0akXRFXrs6Ez%2BDMWaf5XljfGj0HoX5nXVmEDsI6plh%2FeaLFz811mDrE%2FTu1NrZ78YyxYc%2BT6I92oGeSPkpPwSE3SLUo8bF0y77e9FmvgD5VOC0ZhsXUJ6Hwl6kNkMvO64CqQbptAT9%2FVxgw8a3XjW7TAhsEjSUyWcUqBW5dDPMqEgGsdgltJqoIVQZvxe%2F8TbvUjmVcEZ%2B%2BBjlTAjwOzaVeIAHROitaWx6qoW9uyTjXcJ3ei6XPuE6%2FU3s9SU1WP0mv42hySzg%2BakGPSieaIyJUZ6Bc1c9hsrUw2OFZkMBmf5doenqz4STBFy1h40ON1K6QwbehVAcoGUzASmbWSGY5rxsgFVb0ikUR5sJxN7gHGv%2FRFRdVE9cRQzhLKJkmZLv1Nz9X8A%2BVBja9X7OYWjJrfutnh7tgWaNyfvHHjQ6NJsaJFBGUY3t%2BopPQn0mUSUVgbXh%2B7xNOHJo73E113NIeqObrX8S2HsAepAQoispext3CTFHVZcEq44UVoINx3iKVfgMuEelpo3Kyvigbz%2FnmrSBoDjDkwYC9BjqkAeuB36VNM6RCi9zokCBP1CBjG8Z7PF6bvp%2BJPF18lH4zSbzPiepsd7Ip3C8FxbFHtwKLpIvFIr49%2Bi3%2Fxgh9ej4mx5j3%2Fzf2PUUW%2FSij8jVbg4KTdYVJf2OEVaDBMiNvsilmJEPwxnnYb8jKeNO79w8JYSQZRHeQ2PY%2F4dKcZXa155TlABwOcU235KC91aeiosv%2FqY5irLaNhWBj5go2H%2B6d5Tm7&X-Amz-Signature=89d37def8af02308f994b6a4aae33518b87408cad4154e98424dfd96e1b7874c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPY2KU6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXN5nzI5X0fs5Oi0Rt4lYZ%2BMmSsRpZzACrqOMWF74LIAIhAPRDFFqY4jwkSg5YuMlMmalzCthCn2tCq9p7LAhNz9lQKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAVy%2BdhvEpVZbg2c0q3APNt8cEeYnRjQTXCLvOYRHUnm1sYFJX7D4CVL0qaYMDWGD76jkwW8kocfhpty1fCrrv6bYJA5zrCyai3gYrLMoI4wO4wE0p30J%2FNaG5GneZu%2BZDT8n7sF2BrXeQI2d%2BdZ7QEByT3PmZ3jJq7AzNeT8yDazw5a5qL9LWcrh49yXOSMhh%2FdG1z5diYRP3AZcHTLJQCQlfPE3SvIOMflE5IR0F9PWx5pGWon%2B%2B9iRcEFAVUSCN3%2BjK3Vjf8ZMRqVcgo%2B3c4WxfB%2BOl3IFoscMyO%2BO3BsQkwG7fu9u0Ui9eKTDmHUdwdCv8PGii5OMXNez6ODgQCHVftrd9BDBcsMPotYo1vI2a3j9hb5EtA5400W0LQhmFybU8r4hMMNFkkl5Qp3PQiPb3NgReQqzlGFu%2BRyVD11uxts1E%2FpGWbWdSH36ObU4Us3MFqqtS7PQX%2BMUwBnF1hhW3MSnjjdbTXqft1iINiGWc8b3PABmqxgls5Mg6drzi9%2FJX8HC2HctPIrYrYy8pHPvUqFO%2BzrhfkSYLj8mm6ttfGZ8EJ4C6pMT%2BhsneO33HKR86tb2MijU1G9X%2F6MgExLUaAESN7%2FA8ACqkI9ZzNcvBvKMbhuMGN%2BYVHTvXbl%2BL5xTu1GJqe16HlTD9uoG9BjqkAaq3Th83MXnUJ20dRYFgQytBQJPocAx0GVIVNGYuzOC2NZ6AJqjHPzy3%2BHyyZREF3eCinKLePGJayx0GtrB8zaSXhSHrajr5hms8BLAQRRasyUZQIogCZblFW0UScaw5IziEwfeFj5ZNuvRJS3tglN%2Fg%2FhySA70zLpFHDhZM1SYH6ID5laKwxzdvcgha09Q7sn1Cz3alG3J%2FOIwRa24FKKII%2FOSK&X-Amz-Signature=ea03527e76b89f67194a1b9e2e77f26d0ba327632a602ce08fb165003af43d40&X-Amz-SignedHeaders=host&x-id=GetObject)

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
