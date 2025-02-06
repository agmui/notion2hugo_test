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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFDHLIA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBKaMUx5XiOCmNWwMYHCkEuXvrDtOrA8a%2BsEEyNBVomPAiBf%2Bh547YMNjQt1XNzE36tD9g6h%2Fp3GPLFfwl%2B%2F81svpir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMAeQxbNiNyb7JBDWjKtwDorascM9fxXx4T0YYcWlHAnOBYifqqp63e13GenIWGHbKoYmCZWA%2FUNWzyZI4ZTH3EioXwB4ZSbec8aJvWFepZ50%2BPmihfI4PlWFCkBlK0gDvvqhOsgdpG7a%2FvA1MMF1TLwva3z5IQRzBl2SOQms8BepaeVdFZyKQ9OFSo1TVIeSjr3q0kebdPrXrtN0YOdi7IPn6MBIKj6wd1V1QQSwCzvXSu8Qae25GWiPKfLXXIyRfq2RoNiFYfOSSplRZZ9LsHFbWPxzaD6kA4ChpUctRZmGYhTQWy8gWdGXh6peFpcPqV0rSItaMfQR6FHtFkjngwZDGf2i0yQKgwjHiGCYolQgNMz2Uk5qoq%2FKCArvPZ4p6ry0tupkKZ7myFm9NlfWbxXNsGVONVDYH5pZ%2BtBO6h0HCECa4aPPleZd%2Fobha%2FpSzVNq3GfomRLzXF8Ir3prLgTimg7833%2FuEKFOcqTg9RhsOyN0nO2FJZONaxGFU7uqcBCqnzOLC1ZIPVX9QmrhQqTUyUthtdBkp1sLHZxkkxnACtNUKYQrz8AnflmYqIh2pg7A3FJMVM4uDiInxVTJ0x9nWkpYYt9Vnv2mwvLsOv%2F4X0eDa41Pi5SbkSIx3%2BVbCzkkhRD53Yf7tLx4wysSSvQY6pgEc84M90YYolPHstnco6nGYADdQenv79XvasjxGijuocxtqtW51qpnrTY%2FCOICaPY8ElUaM3rIv9dFwz%2BEnc8X%2FJJVyDsYWENd0gYbEQxb7hf3TcKUq6ZdtoGc2uZaiVtXf5aTLKJrz6BFUxtunQi43%2FiDmhF3XAzo1I%2F5shXkTvqr5kJHCVBOGi89V1wvZiV2QFXGivNhuG95sX%2F9XyLZZ34eNwWxL&X-Amz-Signature=71546295a9edfcb91ab0133fd7d2db2061741dc9810781a515a80b5148ba0365&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG5FMELT%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIE%2Bc3EAsY5vLKvozaq0XPp4KRGjIq20SBHfdiykE0%2B9vAiEAyMim6p0YPYvjL0cy6yvp7mOsi71As0EwAZHmS4mtCVcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNkEX66EymN1%2B2dzVCrcA9VGAMRGCY%2BhAI4dX56ZDP57l%2BpNN4JTFbZtORx2d%2FUus81u%2BeYqp%2F4JFywL5%2BGL%2FQFk6tpp1%2FswzLCf0zLoC%2BwpZC1ja78KQ6KsRjVqNIb%2FMlEY2sJiByYzBCKTlWQFcRTpRV3pzZa07gIEnNwP2R7paWJHXQX1KArcctgVw33SayoOBPzJK7uq%2BrJhpStwzChhzaPlDsjwtfqkZiY6OZN1LBatxl2VUkdRPtMt6sSAvC3MZ2NOQNkdwaMIhdZ65qJFspWp9zgNEB821cXLvpDyPFO0z29gmOEolc72fLkOwFXZAYFy1JdP2MoXSJ%2FMyUl6Sb3liASL9Ohv%2BJ2H1fj6ioEcD7MN4N1wjA0WsrsvO3zV77Vog8U3S6urEgtShJSB5gktrRbgaZjraXuQou51l95gMnKBbyy4J3F8%2BZ54KhlN55E2ynrEOA%2BQoqVdfy27RWkjBTiKsfxu4cVgbIkobr1oN%2BT7k0w0wVQqo28F6ZmpAyAyaEyBuuFeIkvi0S%2FGSrtdDes9LD%2BoROsbSadO28BvYGnw4uJMK5ZKEawNJdojP6%2F7G%2FNJ5hwdhcEC6Ihwfl6392z4A%2F11Ag0HIVX%2BXyYDXCYDjg5zZhJyeap2tdUoHG90yS7jNGTZMODEkr0GOqUBrXBvJ9r6IayxndbkqJ0vUU1aRPdZ74eHHiuGLGpuT%2BFRKGhimo4HtALO%2BEwtuS1FX062OeFOQWVRHOVOzUR22XsLJSPB0eHBy9HtXUmMz1P2gK8cYINFOfkYzsSJXYsfT3ad7%2BZLWl36euKtPAKLSFW15pQU3xrNEBJCEU3bNiUl5E6%2BIMmWtAHP8Nb3ysaHL7%2BntA06t62odCxOCJFIC5GO6GLi&X-Amz-Signature=0f786e5f0e7d3ebe32fdcce6a1c63be74c02d4919e860d07e3c279b70aa87cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
