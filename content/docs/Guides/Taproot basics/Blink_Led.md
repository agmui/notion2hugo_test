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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SH46WFU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGN00Copx8rtcQ023tfnDP0zXiJKHaMBS1vo8LVrMPxgIgeOQcjsVLIsKGbXOh2eqq8Ga%2FZCAEHNqT7Bg%2BiXTOrrUqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpqMLA0XzNWGnyYwSrcA0KWY9akxb38GMj%2BsExWuudywrVn5RgaL%2Ftf89daoFCjOBr%2FQ1CvSyDC88mjYyb%2BPZPDoRXsuihkRgtRpH%2BNJkNTfveyBdpuczhWYPaLQbD%2BwJ%2Bv1QVaKryAWZDNnIgnXhzxyt5GamXmwehms2ul%2Bg4JOjjbQG6ZFl5xjaijErToewUota%2FY7U%2FnXJSvzidlRbISemcm2uf9AfnRheQK9IAwCiSTvtGraxhAaBjEdCK386lsz1izbQ9EMkIVuiHvyRLngx3Kb8x6nn3uNUN1d1n%2BUFsYS30sZRSuVtE1jgI2QXCawy0F8BS4m4O8geWk2%2BSGJq9Rc8Cxl%2FfAxXltTKQXhnf%2Bp32DnZksdPhB%2FIM7J1KzzKMDFtMUl%2FrrNVJ0eHfQlBVKpE7O4tfQGte7%2FwCSM%2B%2BpQQe4B6pMthldYwv3XWXbPk7CikUOP7H8tA%2FxmuuNkO%2BT%2FRK6Z%2Fv3ZbwQGZhX%2FuHVJxd95IrxYMewats92Wh%2Fi%2B6eHyNDLl3OYgXDeQ10wMylbH5RwO3jfLDoF%2B%2BY9aHCCewuQgNZ%2Ba8RYkQT8UFZ2ZkQuWrIrEC7T2rP5vexaMuoyfn4sHimPXqZpyxXuTtkkETG3moB090LMlPEqY5BuU44RpILH%2B7RMNKyiL8GOqUBq31BtIbfMOSAoDUg9hWQh2guOmWl5p66zsHAtHzUia5xdn4KaATTe%2FzzlsEnGkJafcXOFsDcKBmm3DxQsCXbguxPAIA%2BrNc7LAP6CGvt36UUbFmvan5mAqPnz68xbhNI2OrzxJqX9pbbBvOoC0PBtfeYd4dvP6517lbzYAHa0psRV%2FhcYlkxrAa0iw5%2FXmyDAysdeS9MRXwvElDNg9CKIaTvRsNw&X-Amz-Signature=fd699f2f71531b0c1514a63becf173220a5e0d80217456e305647d65851aaa0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UNXIZ34%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxmvOnDwQqqdVctecoIbCCbuAbsEJ4%2BGb9BGGhCbZ7ygIhAL5TyQdj3%2BK5UqKjpD%2BRTTFaIeD11KKsowIIbRY%2BXJiUKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySrwlcdk6WDt8a%2FxYq3AMBaQD%2FU2ds%2BJvysd6v1T9MR6GE0ax1DW%2Fxx5prcgXOb8u0Y4Z7K4F8MGjh8AY2raoRua25hu8%2FJmuBkjeDB77zK5N%2BWpa0WAhCT%2B1pmizDnRfcuybL7DMnWWS9jImy7vvPpB39mv0EkDfj1sQwIRDkkF7MeOWEZUcoCDM3OzfIk4PbMUTRxNiO91roR50xYcS0ZXGizczpY6pVbssOCNIPH3bfj5FEuI37Zam55ja13A8o3X0610%2BF60y8glGkOPneJrhLnNnrK%2B%2FRHW56am2PlYMGWCQnnE573CrC%2Bb6UqrmzqZCkJ0XF66rdHJZtr9avIV%2FrCS0suwZAo%2FC8dMCiC4%2FDu7m7Yc6mmf2tRP4zsEN6Tz5yUlxKz557BekmL5Xte0yYEy9%2BaaqeEa4e4Et1dPczOLpyvLfP%2FaQzqsYu%2Fn%2By%2FRSAwdPFz%2FWVggxmVNFUiC0dz7l%2BJvgRhjtqnxfGCqaWwcxWUl9QKT4DN5Y5Rla60cSqZKe0ZdJ%2Bqn4Nxr98NfBRXtZwwZAHwHh8%2B4mAnFgsTIo%2FWoNZS4u8jWNQiiQBIXTwc2f41mG6TT4nLRdPsNDApCh8KLQrLK0ixCs5BzX2yFdfI3POFcD8kPcPxcZg%2Be35FIKLgn0XRDC9s4i%2FBjqkAdGRRGaaQK4hvbJFKTGaJ2wnHtfC5Hx5AXwjMIoByQx4mhRxePICQXRZo8ysf0cuVOBED%2B%2FwBeyrfGNsaMlv9OskZ3saM%2BJ%2BSOX5nXnMV1P9Ek50VkRrEkVQRcsBdNlZfUsbiRwWKC%2FZTTLM9oQQZmXgJ6mZj0s110fpduD8Pci6XDuye0NWfLaaE6fSR8wMZGAldPbS1RgnUwy62ZgcFTzjAbUd&X-Amz-Signature=edaf7213273c3ff0ad620835148f6cbb142426f8b5b018d450f9b04e1349a3a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
