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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIR6WNR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7Ccj88LwGwGZGH1JFuSpSBQlLLf1GtDcXxhOWllqFfAiBWOUXGLPok2itZ%2FDned9kW9vCDPse9SMiemdn%2FwKnosSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMus3JNiQTJciS3GVJKtwDAzeYnJIxCnaVyVaT0%2FHJbNhsgtXwIaHBNkUp1KczF%2BAK6shsMCDbZzqYJFbfeN%2Bn2FyMNbFzV%2FCw6jK3Q8b%2FFrX4iT8tKWADHwcG%2BmfX7AqNyixClNpIlMszP61s5yZm1eRYRHopY14nVrhFsFCmQr1y1x2aHLqI3VI%2BQwsesxLahxem2R8mzAXf2cmiJc%2FjpgtUVnJPegzd8kPSyw6cRObZ9A2jZ6bhAxeesqDppS7E6V4v6yaeqpz0ANTKAqSJHnqY%2FvXmMrqBNDuStKaG0L5eUmzrAfjCJFUtpEjTfgTMGxX%2BJaj2U3r7mExrQCfANb6Au8bYWixcPZ1qChg3i6y4XgvwpZvNZt5b4MdotvKjAm7SVMU6nqheOP8vEQvGuCF536FXFPMjcE5Y9dD8zeIcpvwY72xINciDqb8Lksw6EE27bywnKO5NBcECFeoN6XvwN1chpBtacuBheQDoQcMcEbDf8xQXYNaQENaQtDcF%2FZJeMWxOG%2FZj%2FRAuHHxh4G%2BQTJED8VSiwh7vhyTeBwDIG%2Brwp0U%2F12nCU782gJmpMmxGsPTT%2B53RzGcbLMv1zuj9bo4NILUZFoYR4B2r%2B8W%2FeGFQtYmERzGwQ47%2B6L1BlvjtK9%2Fsc3ad5pUwr7KqvQY6pgEYMFiInfhjr3TNPFG69fk%2BdqFUEKy%2B4OaGyRS1g5Svc%2BrIEFDay%2BYHXq8pL3ZkiNf1cvlQq72Lkz5UnKyciGWr4rbh44v1%2Fi0H9uKMDcwYOgRXPwkN2xTyrnnuL9iyq%2BVGtA4mHYZi%2B5ID%2BhzH3Mg2ppyzSW%2Bot86wnzLRoAHbL8BFOFeZ0udj3STZf%2BXcp7q%2B%2BaVzWbB3b7xsbfabQjTIf4A4qHMO&X-Amz-Signature=1893593b59b32d5365ff92a23d3f9fc38cc21eef55d59b946d91016e77b4f184&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFKRQPUQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjG%2BeT4MbbDAxr5krnISFtQ8j4PXMvZY5BxjNwkuEARAiEAqBKq02c8HQTpb2%2BI6WxVC4k9KVeqVv59IGTJfaoh5lkqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwsmbhnMuMXSuAU3yrcA6YS%2FxZqrDW%2BwFN4z9NicISC1Ql4as%2BW%2BmGRrEMDOBnMhOYhzZy9yd8sp7DCa75t9Bs%2FgukKg6DxfcIZgcDrJaQjAvPB4Zv8bMgB1vRxJ%2BylDhPYJeniOlLU2BYxgwwejZWgT5fpm1Wpx1VHCRUi0KTq2WEs78fjXU2s85v81Z5fN%2FfeFoxkyiMI1WXYXh60riwbI7RpvaTnaWwV%2BCk3EyL2VYrsrx6T9%2Bik2BcbLNjSJz5ekIYO1%2F5BC7Ty6IB5ABWrCp3Y4ip4AzAckIF6pWhq1Eah8y56G5gX8Nr90wExniqMr8fMG9kImxuTFRz0MQXDxuwXoypqUX47EjfcPLDKM9FXD%2FnSm%2Fwwt3N8SwMy4oLb6vLAvj3HyCg2A5LAkB5eaRd86ok9Hr%2F5KFxoQCsGjw0MVxnfGeOlWVsWu64cKXultbN6Oja7ILXqpEHWQcgMUXEs5apQINwsi6Hy9wZ2dN2GFSc%2FsC7CYBmUuPcFgRaTbJQZt6bflmFQudE9ti7GakV7pZuBKqRHoishZYeMTEcit0WvvIczjM9etK2Q9R2qbncPAvIKlnvJrfAf492y%2FrsETXCne6iasm39hZfa27FV8z2qEAnyoZqnkEQ3byIOIL71dflRYJfIMJCzqr0GOqUB3O4ns3%2FEE%2BDZOiD0nqDbcitrvdyqazu54PCpPzsbq12i8whkT5ClOghLEjBiML3lcBN4DDKW8vMJZA%2B7q%2Be0%2FcllxGVC14s8mJ%2BQJ28Dw%2BlzAC1Rp%2F61YwhhyDGGwcLiauZpPjiNFzuAVfrRlW3DCtDnvdvbNZafTl7fT2hNRXNWeugOdfsN2b%2BGoiRnklKNSkrhU5sMeGT6uUnsXCo5OsQPcyx3&X-Amz-Signature=0528b814f92869e27e45193d065ee91d6be0be719931292f2ac9dd9a873ac185&X-Amz-SignedHeaders=host&x-id=GetObject)

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
