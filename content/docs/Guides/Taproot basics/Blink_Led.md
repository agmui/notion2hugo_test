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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GOOVRYX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChU13JYrPuu3PsEznqBhv3p3AXI00QUVNYiq7bUJ8o9gIhANqRErRgfxzKBmfxj3RYk0lSKrOmN1PUypLvTbBk20TOKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9PdhdHzx5ITCnD8Iq3ANIrLU0kKPNbPA5P1FaYjEa4lb1VSP%2FFAV9itqj%2BQUIgzgwweA15SETStvJ2%2FuulJnhq756RO92tZtX7ZSx7Suu7wBr5IuLBHFN8Fmeor0wXE7MW%2Br70RMpo%2BD3D1V5JnnT3u25gcWTlO6nZbI%2BhcYf3ee5yYAPM3ZIhXzHRA8B0hQBz2plEfgMxYXhStLodo7ze9PGstKr3L7QJzWrf%2FZTfwr2m9Ab0PB%2F8ebWxihtr8KmRTEYJmGrw11TKtOtvM%2F3a5FJYSaTekvr3lX4%2BC4DksOQPZfn0OQMnPHCAlNE3FmYvzr0%2FnvE4Xx453dNUO%2FJAZRlA6bdsOi0LCV%2BSuMcqv%2BunKPL%2BduHuohFc8WBIySWv3EgZp9QRwrulVFFkp8iJn3kJxm9zy%2B7BCm57qUhFEvbfxenADoNDEWd2CI9ghin53wY8iEsPmPoLT5baAaV5Bcio11LqD8RSBfhC3mWwzr12Ib9tNbSrAnoch1pT%2Fxi%2BqDqxGO5uG53ti%2BdIO%2Bv%2Bw9cSd2nIEcm8jYdvIlvDm99vhoSKTcjyGNFgrqQ9nKGDrK26gmBbN2k0nfm8nIgjjJLVprPm8jrp8LqLWMgHVPHJ0CV%2Fvuh3%2Fj3vi%2BTnNUHLBgSUISfeyYX%2FDCm7ofDBjqkASOQIrhjuEKdH%2BCRASrd%2Bq%2FsOJbHKi1yfM6gxbZxXxNoWKpSIXDSnaT1MwlwsLwschmdT8Qf8vrfrJecLSvMClhQQAj2BkuCe6fl%2FrssG6%2FnaSMAHAip641211Sv8pZMs8SzVfrtX6o64vIY%2Bzn2Bm7fxFoDjCTDlGfKIIFaSy7uVAJdqLLfaSZu0O%2FR4fJFUvqvz4NCiy8SYEamiVmTXsSSzu5Q&X-Amz-Signature=7956373bac18be46b09676466a28337af41fd5e3d19cb4192cf03af7fc8afc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GDLJTWB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmDwTTw0fjAo2DtGv5w3ipPExXc%2F22J0ME1jSc2QsLaAiB4q3lRgdhdF0TZcGB4uU%2BLVz5ishH%2FT1zMEVVKuwTd6yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxRZ8hnQ5O02PsCjKtwD%2FaTkTon6gsbF6UIJ3%2BSwONXbunnHnFbfc1z2BA3m38DnjcFNeXzmtPyFz0kWehkvdCr0p2hqXST0Q2KRYgKLYIPRCKUE36cVef5iITA18c6nOyAm7fgI3aCKWGj97zPH%2Ba%2BGW5oCreK3fOiIo3XeVnOREmCUwDoPmqmK3fwVCUBktf%2BGB7CznAfhuTVbEklGjDqAfFMu%2FxqKfILy12VmYOiElS%2FxoqW25wqzvqksuPuTHqu0DLx%2Bv8%2FgNGA%2Fw0UFwQAeEZxmli0NZQUvjCPw8%2BIi7O9pe8UPdulhHPLSinKIrCWmLFaMIEzubo2D%2F4ECJTHcq11n56HVgyG3txkW%2BwMqPuWuqSTuOipUzlJa5BIgrqMONy190Bwz81bc6j9tkedBvPlfF7YTac%2BG2gIeaUBRoCecAPbDchNOhgoBZ%2BWISiHLBTu6iKqaVvGn0SUFAJ6RcFtGCdzvULTld0AD91enPTON6I5mcL2rJzkK0YfmqJ%2FL7dNZ6b7uD9wAyiPeyUW8I%2Bq3muq9rPge5LhfnpOb8%2FSmiTkhK9alHBSXueA9vYv85NeUZeDxg31qVZMegmPAkLtl1hM%2BIfdnQkS9JLJqSFdEgB6OiCKVLmRqHK8%2BVeKG1CeZc9G9c%2B8wsLaIwwY6pgGVdbZqTh18pl3HQsEyhh%2FWeP5qopbUPt3GIujGf%2FaFJtBPibwK7ypCoCHIw48wxZDxUpHD8epMgVMBtwM7ToimyrFVh7qSBz31GsV8hcLri0e4JnAz9L7iNOLs7ClAf6Od8yu6AGYVFu%2BN%2FgWh4wYn7hacDTHxTKyb%2FLXiMhkR7HZTjQhSA30MUBWFCBvqKdo6RWiWd%2FPiPAl1XFHyHGHEs4HJdj%2Fz&X-Amz-Signature=3a4b3e57bb3d7b4ad51ea2478c2e2b1227cd1a62ac9f7bf4031c4aabaf69a5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
