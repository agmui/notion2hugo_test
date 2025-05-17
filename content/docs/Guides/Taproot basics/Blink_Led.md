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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5B2BSKJ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn6pB8cKyyMeCB8MXieseOVA6Sc9fJWtjEfw4alKshqAiEAoEPcSaWXLzJxTGL4UdrgvzTIaFRFf7a4hNyn9tdWVpQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOrRB6KKpzuwxQ1EISrcA9kmSednik5SP%2F%2FYMzXABWBFF%2FPnn5fwpVPEmC9MZMQCkSFvkhpftZPWTi7CgNXHQjuFrjCzVtg9fi9YC%2BxSrwP6RAJQfNRFM0npKM8XOqHr4sfZhrGF29MLI759ROpnZ2n7rtiH02WNTSxrhkkRy3iyW%2FDim3CTrRp9QjUVwBK9GwyaOmk08PHdl77nrS%2BEp6rfvqf3rtoN%2FA69NnU%2BUPc6bacaPkWfPVAdCmMs50Dr%2BkvEgQP5gvB32aEMjvPMzrSKckW%2BpUnirPcCFpD32Ez5nyGp4GZOODhd9FsGo%2F6bs3HQvGFKbVw7mZfUuxAuBNRwxRiCqbUhI0JkL%2B4utpq8EwUoZDM2nq%2BUgU8riX0P2%2FazEyj634CSHjhVMasrhxQjR95c50h60EIHwpmGqxOONSgYBNwE%2BClsmHKUS398dvBjm1QChr0FkEmzP17aOAj%2FeoHtnh3iLgaehleCcGhkhnF7DnK05VvxSxy%2FTJbXSc0%2BvxQIx1tKipyHdLdnFSBPc5dtONMVU1aB4AzZjFa1rI0KY%2ByYKyBd7qx2d%2B1I28mVKidtR2c6%2B4CqWiISKmGS0hdeoMFaXiL%2BQ1QvtK6Tjx9XJd%2BopJCeDubnfWB6vQi0A0r7CHH7sWGQMM%2B2osEGOqUBPXohdBsjR7SVD3zCelptNsqEKhr5xmESqxI%2FYMetUst7PcAp2FgcPZ2crXqfBLQxZVYfuzVo%2BlctuGAFJc5kY2e3%2FIxNKH3gho2LyylR0R7tj11YQsynPbaKqXilIQrsW543trHtv2KoTjIWVsYBYuM7cQimKgoh2ljn6BdZMXcbOSVpAS0xVAJhdxd99i6bLgKaeAZbMisbVo7ynJNsysp%2FdBaa&X-Amz-Signature=a786946c7ae3c0e7ed337d16ee9e879a895651a2e826e9a1c10903bae1dc1717&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIIKLZLU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQrXxoBtiP50lHEWcF5IjMz61NcL7Dpe9FBWr7QycgmAiEAkMg08xRNUDWATL%2BEg8Y42SQV1WizBRuJMzrCIRM4SZcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMjBPuDdBvSIy7jb3CrcA43BhBnebaYLX0Ym4oYoACtOmBU%2FgkzA7fLP2AA60UXd0hPppiSK0ccJLw65Rc1KNlo5HTSOts1TTofUvTdmZ%2BnNZWJKHype17tf5WHtyVb6IbSxsBD3uRi%2BT977cOnIZyRhbSyDrE2NDGa%2B1qP0iN%2FC2Ll%2BEtj7%2FsjJuXAtUw9HBoddhs1%2FMOK5XFzvUYO0KXdAPMLuMZpxHjFLErYRdA84HEcMJF1pQRke5Qwax0y7jQFSJYT5oBr8jt4oX7Y4QL3ZIghrBpehvGPsBZP75kJZAMuw7DpTb6I9Gt0WPOAruZx2cI6l2Q3DwSxBmOnI0kbwDazGfQxFM%2FFhvH4KwDDf8n2p3SGm48VgPVYDDwRcq06AFpp1sJencCT%2BG1RO1kkHKAoZaMgAkjp%2F8A9vsrnUF8zJR5Dz85wI8GrBNJzBX2%2BMbOTZnG97kFW%2FN4qR1I%2FF6%2FQelwclDESWhQENZthl4x8fTzoBHyrAyAyEp27DaShkNiKJ43NIhl65F0VdyCgfGmYCqE2ApQ2Sf1M5qtRYzhJi4Rff9SVq4EOHNkhvQGLvsNbhxFNAGSeUIqiBZRu9UpRGgThJm8OZ5r5qgaZykitn8lvd%2FxA6xhlv5dIiUEwnAFq6Xl2ivGzyMPi2osEGOqUBebVU%2FVARQ4Au86XHC8%2FcwHBUGjGGWkrC1%2B9lwXe7KDtpES8Ghq%2FFAgR5X5ZqINzYSN57br%2FAnqxKjISQY2N7y%2BgCqB5BxnKw2so39DGJMLYgjO23XbFvptpolt2YD4Wa0%2Bbjl9ZrELKWX3UG75ZPFQCA34a3OuQYRQS4m519XWR%2B7xKLIVr1omd9nXG51Ju3a%2BSTsISxy3pfZXl4GsI34N%2F0UIc2&X-Amz-Signature=3a38d954f97e39767cf0c8be14b00460bb2c64efdbd234f55dac7d2f12a847ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
