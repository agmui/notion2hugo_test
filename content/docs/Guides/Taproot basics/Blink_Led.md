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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIOTENT%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCqQeqEXAHckisXLokDXWG%2F8wgBX5w5l1mXRPyD4CgvGwIgF51%2B9WJ7GaTAh%2F8wglhJPwo0VjmwAT2kDFAwHOpgo4Yq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHgz8%2BF%2FGOMkqV7ifCrcA1tHszjf1stv1KcHzdhF5u4AW2IhlMUtjTaRvH%2B5o%2BG737ov84ZqR0wCV%2FfClx18JotmvV8IFG%2BO5f3htoC8WgYyRBq2Sln1arqXhXFlRIRJvzUqWSxD8j3XJ00C5i9VM4LGxvB52iQAUGwOU8ZStNXh9JhF4uKoPc7XoC%2BSjg8MAurJcANRaCkJchopyn%2BjQ5AbN1gl82q%2Bwc5fw287%2B%2FZ92c%2FgIlQpGR%2Fd5zl3KcbwBJSlM1nbdKlxrHn%2Bj1OmJIOEjne3AdQt6gQljrlisU11wBaIuiDHZ392mgdWBsh2GRblerhDIeLRV4bT0A%2FbcKru7U7OTG0mM%2BDHVmJ9JaMKFyr2WL%2BM2XuY%2FN4g3nsX77foJpECLt5w4i3dGPsFh4D0LlXHpjFJSYT9DhcXR0LobZB1dPPftS%2Fx8gIHMt%2FNVwmVMRTxzvvTqXvK1bmVRY2fksOfRX0eJfuZViOSgygNfaiqJIvX0m5PnV0oMVuMgzZkKSQ35izbuaYq51YVu773XI5i%2F8y1jduOV2T2ggkEmMZ4rdmJtryMQ7fEhvYWgAeQIm6wDKtRTOUeDf3UoZ2EPGLh7vGRiRNavxGPKs8shHp%2FwwyhefBGMn3tG8F3FdpA0SIk4MF%2Bk1xUMIyy%2BcQGOqUBLGVgAdkohneCGMgfR%2FGpJ4wb6GPAK%2B6kD0a3wuP54639%2FOacZONmKlLqIw9D%2FychM2P0V%2BWjX5w%2BLilZjItEoTIe63gyeJbFuDhK3k5zY1ntW9cA7VbR6hVoMzYPGz125hRSwgJ5dWGY%2BGWjWfFhClu%2FEC%2F1BE6qpoBldqA1wR3w0l2TIN2DBgbDeeOtBsO7jPUldLrcpNQnkv8PMsoUqZ9nw6iu&X-Amz-Signature=5f61a0920a76b5e54092694308d5ad689b08207bfe34d4bc47a60fc32f47bd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSV45KP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEnbMvqqxKmFce9R8U4jb1GyL6MHCRWyRN7VJHXAqK3KAiEAtHEGXLNrNIbZvdBoNvlUfyLq9r8kIsme0KRffni7geIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCeJC7Da4G7hcAGS9yrcA%2BBBVitHNC3FZVjhivzNT9MNdlI5I3OHg9qZu8LLJOGj7M6RiPDPSssOkMK%2BmfDIRvnWiUWE6GLQmfb4sTa4E5xYeB0vwYjfKXlwqvndIJJX29X5n0URFGf%2FoW%2BNa7z2Na5k44qzm03QhQhjwFbi%2BS%2F%2FKTzbKjfBxwgYu3R07VbP%2FKEK2oGyabYRromLtsBdkmu6viV8CN%2BV%2Fx%2Fh%2FgfN3zVWHRRgmwRdLizbwPs86Z3i%2F1ubfML8Kg4FfPMNS9nhLYOd%2BTZha70E%2BY5hSCTITBdsUjl9NS4s3UFlRt%2BLnvlzEngUi4VEePKoXvRuglESymWSqjjyE7UWhJG91qWYFXsgHqP%2F76YvoOcRpZTZIKisfbd3%2FJmInhGtVOMTu%2Fc5tCQIMRlQnkvl16JxQtj0R0a%2FwGNbq5V%2BHaLOPWAc5GQ8atHAFp%2B5PfbvzprAy%2B4qaGFJz1nqcDCWv6BnV8X7cDvGzvBS8FfUMPIBcI3y%2F1yBNegRpdn6zILYmDW0t9O%2BxYma7cevjyKVepJ%2FSjUSHNnBjmrDMnJHZs3ewGbgvaahnS%2BFtM5eL4fehPqnFeGs5c2S%2FpUWwllQs5xbH%2FK%2Fxu9K4Yxahm92oNwmiiyXo%2FVT%2FRgKPKKRdAHFZxvhMJS0%2BcQGOqUBu9izh2AF9uqFq5XVdZkFL6fHMtUKCjeo%2BjDlLj5s031s5obdYmfFYa4PgOqs0J7nTDTetLkivFFEe2I%2Fq8swpBqeZi9FZhrCLCn8Ed6wdXtOIEpUpbEVWOumGwvK4hgznngjUKNS6SgYqY0fZKRwrt3xjU6aZBKob8QJIyNp1487M7qjeWYZWwx62W3aAnUUsmLKG%2FORNIInuyZZ81RQ7xxwlaEh&X-Amz-Signature=f998e1e7cdd636974e1494fada32603d814f5b96236353d4859c696509e8accc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
