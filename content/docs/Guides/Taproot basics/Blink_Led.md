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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNW4NHC%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID6kYEDg1S4c84jN0MMQ1UuJtt%2BD1GsZcEz77ObJpdriAiEA4gpWI0iQGR%2FvsCAosKYyYfAc5Dg1%2BJszT8eXqZBYZG0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBL0loFvBvA1f1wgGCrcA3shErAIF77KA0vbbLe%2BvsyDp4O35b7E8TTHwtwsc1eWOYxoSx16tkGJfPYtm1WMa9A2Mp%2B%2B%2FoHbRL3PJQc7yWcs0NcAiLsRVdnBMOEwEoaP2tJIrKy00nrPU1Pjigit5oKPTw4uydHKFytf1o1a5BvvX%2FsKFBG0anNdIFtCZVgJPLbghhLVHQk7bR8t%2FjLHwaTr0W7MEYvIJiivrdvv4e7tny06j%2FAC2O78oFiILvTpsK459C7aKHxTyEZAkl0FEMdBdazospCO6pKnF5JMZ7kXk%2FAoX3vjLM0Pwox1OtYuqI9SEzbxSPSDToGv2yvJL5PJFLDqZpGFSZfZs9Yr1iSAEfIv59VASCDnOFbm5vHC1MPvbqn4jeIxo1loj%2FD2FqmsjPzq4dKuYEd%2B3%2BarpAHzcK0LGe3go%2Fp8MLzeVb7qqX%2F9%2FOzRCGqy27Oi4ERkS9GNZ37d72WfxacEWznRYlTOmpoEYiPYK5xvz29CVtV0ObDcbP1wpdZqpXi50tSGSCvLpcizLQeV61ljQ%2BHAifjRG%2BmUUKS4x0MmeVwTVv9V9Cc8pgV%2FqnWMbT0LHlYnaL6XYa9kwykpWJBdARdecdYJ9jlv1WpgMWMIBMhZr1UB6axy%2BCI9PyQMZTC3MIWJ7r8GOqUB7%2ByObbnJEBmPedqQ1X3MxJOT0rzl8W1cp%2Ba71DwaPaZZUwu%2FI6PZUUfbVkFp5v%2Fi5RkqwQ5j6%2Bo8pvSm4Prye83W1h%2FcV53j8rwLLVuDuSTxiSVg190I%2Bt94SsB3aY1qFZfA8Kf3IWLjWZLtr3P5oh9yWF9Wo%2FAKN%2BfVnfw5MUKF9aURNehB3ngUxquSwtOQyz5jjQYBzR5Kidql7jF1IUBr%2BCjy&X-Amz-Signature=b5104dab797fc4dc06de9cffca75a08d21a85eb2b38fdab223d791de72e9f2e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAEZDOG%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDtn%2BfHPP1T0DNVICcLyiLsVesxzVkQKXxtkgAau56jhAiEA7JRYbqO5TsS9gRvtvh7K%2BtbJT%2FVQVsZppmc2UxV1Ql0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMAUiXhB8uzmxhlIircA3h%2Fm6gFXaLCKW1ogFjXSOi5j1LfFT8iChLdpfqAkY3ITjefpDwM0VwtiSTL4im8VLqCtoKPEnG7WXHKVfUFOccxqtcsgaUFoRhN8%2FSjt3Y%2Bl%2F0fEWK91M8WYKle%2FNqwgnKz8ZfJPg8bte53ALNOKY6FgXla04wBncjryEcpXqIQUVxon48lxqryhrI%2FYXt6JfgE2oAcNhR7%2FEiGUcH43ysah%2BmMcfG9PXbTbsmal2VSDS2SR6tsEHPzvxc%2BQTRVjskpZIkGLNhET5K%2FCeqFBfN%2F9b1HlDOhm6q8JsSl0kVNyXudz2bsje%2Fwr%2Fflrk2zub4ZcF31PGPZlKNvIIP6MQkfmUgntt3pgHpcCk3qoRYCuBFuJAkP9%2FfcVQbf7%2Bl5zP8E6RgkMY9zFVnxj576AXcglCPfp6P2De3GMvMEf9v%2FqlnSGrV%2FvnNHVgU8bicsln3aMH8P6n8pO5kTkIdKP5PfbFSfTNjieNCjRBM8cc7PnV%2FKXQ6htmO5A17Q2rj5gjDA8mVrTnsUst8vEqjzscXFZX6ymY3s239ZSCaKSaPVgIIPq5txYqG%2FXQEcyMHmSiU%2FiGWN1R%2Bur1g%2BiLLqiOzqJ4EHGNFiUY%2Bt1vRvRS%2FC9veiiGAXRtoOUhZaMPqI7r8GOqUBOjsZ8OEcAGfT3ecVbMJB85zMCGfARzyGTmjWKtTfNjbdepGH7wK%2F2GirVG2zBmFG0ieWicPGIni4sMOhgX4%2Fp%2BGGs5fptfTn8mB%2B40Va1ykk0ZmlkfKib5YEnbkdKIzwP1f04dMtzEbJ9t9ljBmQKPf7gExMTpE%2Fq193FDqajqXYzXZWPuQ%2BSqfjnIGM6U2c7KpHO9tw%2FxEb3%2Fl3vC8S8AqifmcS&X-Amz-Signature=bf41c51ecad736a04e21f942f4ffdae1cd739430921d15ca81e8e5e99378cdae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
