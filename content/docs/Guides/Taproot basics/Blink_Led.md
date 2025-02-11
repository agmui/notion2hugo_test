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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6GWG5AW%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbaUTcNLTJ8TZRr3WV2ixna9wNR8QMj%2BTEEGAiVUKYEgIhANGkMK%2BVh0jsLdcMZoH4KMbjcCJAy%2BmpZ%2FkNUarsNkbCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5CE91QqiFd4Je9nEq3AMcSP%2B6ZZk4UQDCb8qUGGDDzM225OvLfE4oTvzaFSVcEbJKaMyxIWkn6IVc9uhc1JpiKvY6%2FgRaR7OLAZFPWGd8sCptuKq9coc%2Bdzkyofc8JHL6yWfCdvcAIzAxPdI05N5%2BbGSDrtItBO0knNWIemVRavfkhjp75E9E6dXwe7VtNvnH6GbmDlVmswCn0IO%2FEDcpD%2BLUhyauUsTcIcIPaik8YDUx2WUsBcgKxkrxKqoPKW%2FZInVa9FejM35syhyC%2B%2BfsRTESWUqGN2cWqoaPHRomXoQK2uU2kgJilFwFw7F98XB8ZYqiatu6hv9tgSdP6OGXcHaQ2%2BthVTDDIka70FaCMg7fsz%2BACdNJ4r0jiR5Hn2BS4CKW2BlaKYTo6YCKsiXveoLOYN%2BRyyr63oWRbX%2Bc6ZjgmvgAQ%2BtdLzKeoUVG8TAFs2LUv4rwJ7LvKr2ggr29KfTlGGlc9qoLAdERiXaKEzfumH2iV5y6haIfrOnJG4pHJiYo99HGJeB9%2B79eDxjdvRdGLZmS9bkyb48K%2Fs9OfuAVadei7DDXmX%2FErWbSk2NUxvpxemkkso8UA5jYL198%2FQ8LHWr94pWhaQtD3FNhkzFg686cc9OkBGUSuUaKGPEXS7%2Bmg3RFAi1u3jDu0qy9BjqkAWyiZjhXhj3kZVixZh9ckR5mRCYQATnGdjjBXjzY9HXe0zCDXgI7TV7gg7jE31WoyH5XiOFi3Xa7bcEwqKOKnSA%2BWtbAdz2okLVk9Al%2FGDJagNksenJe%2FU1oAvmBgbKZ%2F1EYkJQ654NwevW%2FaRkWNql6eGMat8tBlLvTMDoOh32jm0%2FKkDy2YD8jZqAbBFL%2FyVoOpZUZM%2B9SX1LrT8Y32dukzDfr&X-Amz-Signature=cd68457601691918bca0b1257147d3321f5c36a79effc7ff6c6c5972c9d0b02d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DTLSIU%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxSc4eWOd0v5XaWimiSzcYYXapsMGv%2FDdrgklzQEDPMAIhALTZ3TORLed8%2B8yzc%2FJIgDgf6VOnimC9Bg2sBY6pjLfjKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG3D53bGx8MrcNlJ0q3AP0fyH8QcI0qlBX1hA4ZZHJKtkszHd0EWkc3DLMj7MRgxxYnqE9ZBBHxF2zb4rs9wAjceP2K6Ywd1mPuplvbVCO7ku428FM2sOdvU9suv6rcr6gr%2B66uCxN9j4MrlSPNGJJjhewieBZ1EZMsBsPwIGMyFKKKOb8i23Xk6Peib3YIHgaeRll9bmFYRg3ldGcC7N%2FwqeCeUv9kKZuJqIHiRjt2URDga4xc%2FVjMfJEjDAkPYZI4EtESjY16nMHBPhkfupXUZhlzjnRLWUmn6NQJ2Dqiafd1gsEiIEyJviOOpP5J9DEbAVbdx%2BAxX8FxP52Tk6Qzwl2dZfp0q7ZWeFP908tuERSrsNUMpxPMY8ua9haWcIb7YFmC4Wit8WTNFhLRgs%2FGnn%2Ba5igjuDy2W2XTU2bT01u4ZXw9mm%2BXb5ozKshVcLPJEPOjg1WNlf4A5xtRDUk2aeieZ%2FB4iz6FTVT4wF1vo8tkIV6EXvyNTtnTP73TNAnBMl4clbW1i8nIFN%2B5L0MnvSo6BJCrpH3gT20%2BmD04Pn%2BL1YgutDxtBBZIR57XQJSMYgYR7nanEgqxCFbdgEUItQLLOKwxeh2mjCol0LlpiZyRZF7V%2BnN5nbUQE5Zk4IMCpQWxlzDA8LT1TD30qy9BjqkAcujn7t6mR8yC1bjq0w5WfyqhPYOLeKe0SSTkalDRgYEXoSYo0Ndlg2NCBsqKRffOempWXiwRvvcgp%2F6Ro3k%2FO5ZeKTwFIXngIBkFYYGF8JUevpzxUwY30v4pXixDFWCtAFxKg08DZKXHvc4SsVoIFtnSVyElCyv8KGizlUeYIG2TAU1K2eMchzJ3CaswHqk%2BACZmBt8gpR5nqoE5DJ4cyT6Ovdx&X-Amz-Signature=a91989dc9a9b34df328924353b53810154f7a4c11c8500208885975640ae9a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
