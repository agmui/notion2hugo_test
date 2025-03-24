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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4IFPKK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTE5LWJlbdCxMvCcxRrasUbSCWdpOUbeDUKuNVg8uVLAIgWtRfe6mJ1tovT68Ck8Rbw0qbetygKY%2F3LIzMqfPwIwsqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVGJNsJDs9o9Lx27yrcA4Ab5nPNxxeNaDC7dNRSEYRur3bOR1n9farAxIQYzdPIea%2BKcvl27NLSmTEGI4HL5%2B1r4iHdMveKklYxTRCrYHhk6C9Oroz3Qjc3FSmoxlCTRtLT9kLo1cn5LFsOQ%2B9obiYnXfiPZ%2FRrpQgnWys0aZj3ya5d4SlBfG5EqtBmuGy9n9J3mgQxC9snj9u8aQMCiHMzbd%2FUWrUGsmTn9Ypk59rtbzoAGv7lCPD8q3N3xpgvwRSFX9Pi1Kjd6SBmNcYNQp9%2BnpWCHFA1fiZuR9WXDfk4RX04c0maIot9yp7wOkRYnAMIINaGEsCuXaMes2i%2BXmmvwXAwWK%2Bon15TothGTWi3t7yId4dIT7WdqCzp0JKUFT6QysvokIc%2B11KTOXT4ded5ixtYENiiFGS8906O5r0WZsUXdQRPGFyp6TQ4%2Fbr8LuRIeTVEW4wCw5CpqzD4Ff%2Flr9fmRIv5Y52WookYLcOSkw0nis7CI5wkJc8KDjbN%2B3vqDiMMWrmXy5ozUWU0pTZmmFsdiime%2FOcik5ZkOHgSecaEqEIMLpcfcO9%2B379osRflaq%2F24EacVLKpFC5mfr1kWIe3FGn6xfNO05B6aTY4A72HgE4Q616d6E%2BHA%2Fm3Qw5KxA%2Fs3BprmvHoMJKSh78GOqUBby27u1%2FkDW3gV9fbM9L%2F%2Fu4pHHn079qrHyD6xspa28qCpaMQZEx64mKDzUQVLSmg%2F2PX%2FFRR%2FCbk85HLCY4EfFyuBx36oAKAiWQLIY4sUEzDtLnCfs5WUz%2B9j5mRNkcoCO6IhhBtl0tfFk6LK1B8LFaDjT16aEyWJs51zm3CfN8GYXJfH%2F5Cr5hQRHgbmknmmBtxoMZF31l8HbNPwxqSAkrQ9xGB&X-Amz-Signature=a8e15cb9a10d5be6f9d52637eafedbf234c9c7b42533007a3814762999702bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4CR4ELE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCLBtHef5IxINq%2FL%2Fx564PlDy%2B%2B%2Bkj8UwRw5nJeh31IgIgWCpkWSUi4YmhjkPQQbz4ii7XyHGGVo%2BeRpQsexIYKLMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7STCOp0wcF5uOKvSrcAxjerNTpMXbYyMcj5CtQxhY0lLmN6AeMTqhYxlIsBvWFgITj9qj2c0KWQZK1moGh4nwjsPFo1AAZhXRHSbeqpdU2YhiPRTkPYhQesuOwh9QffXgtoFTedfvfoPZ2SUr5H%2FluEzfVGXJBdXlh98XygxsKBo8jsTPHHsalI%2F48cDG8pIovTXXWn8Lm4406gNbkW2ibjODtTcMNbY8i0vWLdBPCW8TlfJMaPK3zlCxExF6I%2Fv97A%2F0csS2RY4pt%2FHRLgcxCWAnbx5HOMIJ4nRl0AQ8%2FAOktXinhVGcBMEEOxmOaBlgWE4VFM62S667fSK3GezmZz64jGQJ3kwbtaKjNsM4WMlOEVgrZ1vaCRq1xoHfSB0o%2BmfOt7Psdka51xNkhvwcaJJ6PgzLJ%2F64febu2YChT803EidxCq1veLR3eq6WLRgGi0aQKgacwu6XtuuSiuoZv%2FkHo9RbPjSanKioq2q8osjYfzx%2Fe5hnBlxZgaYRFMbINM7CcIXzgBVTBsaoK2Hf1OYnFHVLx6mQQHZeRRgyyva29WtPmO24rSXIY4kltCeHiOeBJ79puzOMjUYKNmc5bCfxhjc3AWJT60TrE7tWJa17zhRTHjXKo6fvnn5Zel2zks0OGdTgoFrbPMPyRh78GOqUBFvy9mTd154kShFRBWpFcuZk%2FhAhXEPSCLC8d%2B1V8ldYnnAKbIxzfwOmGkv5hzCQplI%2F1DWX0tRuCIBZcc9tUxY0AK1QbeSStIQdUXyT3eZ%2BfSCXg2jr2kP8%2FHRFOmYz%2FxhX0wSE75RcFHG%2Fm%2BoEBtMRI0wtR1Qpo6Dkpsm2iQNCYdWDx2anM8BASIdQwJ7W2JxQA8Ohw0eBo1cYi%2B%2FYhRCXCHY7F&X-Amz-Signature=8c0d783fbf55c91e99d83850d85cc8cc5d900151c2ce45b9da162c071956aae0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
