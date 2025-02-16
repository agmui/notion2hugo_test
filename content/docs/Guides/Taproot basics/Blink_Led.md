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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7DCVGZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID%2FDV4srNPI%2FAz2YWPLkBJ1zYQaXGMD8fs8oqGTY1rVSAiEA8irLQXheyphdAc3eqKtSsDmCCZn7mVWurSBN5cy4gFcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDL9JKQRThxmxbn4EJSrcA4kAg2ZI%2Fq8WdU0awYFFAZPgW%2BzwhbkOyDV0Mfbmm2wtNJE7I5zZ03Ttt554a6Dj5wjIamLYvKPnE5X6jw7TMpc1OdAHYogiU6%2BkmzOXDP1Xbz6IVgoJvaSQu23DI8s9mRYPz61NI7NHltyndAlrPYTd8n9Qz5WAOSyth%2F5c4LioTC1t5YhnUQKgtzqoJuOBm7WtAq%2FDRVpeVI66iUw4kqFjEP%2BGeZ1STh3e92%2FUkMJD3i0IR5zIibfjkDCLtx9g%2B%2F9vcBxmn2xA7muvFZsYRW%2BZ2K%2FMOzBh3%2FcDRyokfzFyPCU8wBJUXPlc60kSqWgBqoKtgDMmlFXk04KyWZ2NYDSibrdPV91lsWnF7w%2F%2BDeOB3sYHCBrJOnTQrYQMlynWiwO85rPlxlv9fQ1fjE5HWBBoPkWuTzb1q9LU9Jpf3RW4fQ8GR8ygQEoaFdFlmxAmsYxjj85oM%2FBTfcZQG6OjNHewW9Ausx7DQJ5wIqXYmh52Qu9F%2FY2Plc%2B9WyIbyH%2FDX0uSNoI4pPCoOK5t15GVv2P%2F5kWbC6J%2F7knX5p%2FAw75WYzhypIP1TcLoc5RDIYXUnOCRKRFl9efmMw6J0H3V5A%2F6rWlK%2BymJ%2FSsmFogdWTy5HtmCM%2B7qH7z%2BcCquMLyhx70GOqUBxLJAhdm%2FiiYGxKxodNDin0Be5XT8EhFnGb36tUM71Komgq1YT%2BJ2oGYtU70oebYMaZC9XyAlulQNRChu1whP6Y92sQK4b9fAeMcMO6zBxxv1RyVdmWXKMOpZ5PYmDlM5qPRz3P4I2xSqfpfdvtVr5rAvMkgzQdRxgc3SzsbPQNQmwHPoolHrmn4uqVKmgHOthtL1%2BhhCyXQ0Pc3vTmYL08JjmtHo&X-Amz-Signature=bbfc49365b7a545ad51696a17a07fd3c31af6112275e9720cb58697af2e34c26&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPWQXPUR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC1e7ZlHrptYjbKU3PqqBqEJIijzJ7DANONZytwt01GEwIgZUQD2h6LtLpLGyTooj%2FHTmJeCs9Pm%2FnIyeytZIi2ykYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHlDlTnTHYin90gMMyrcA8R4Xi%2BQ6jUrjXb43wrtmtpb85U%2FVhJIVBHmr5GQOawArranNe63dSzXqUudZaOvx%2BA0PiynpsEQmKRISSJfYSVRFvGy7Ig%2BKRYERscA3CpaY3h2EBSb6CxizCwcukKZ7LKzM5oJJC7oXz%2BsnHZOBtRwxHwCsX2%2BKYyaimzIM5R0k0TrpI94ZsXIdE%2FOdAZ7dTXvJnzKdRz05wYYBol1J3gDNYmnSqyTufcxUsxSoAZboxmgeWs6%2F1GkssKbyqs3UPbsxHxTwU4G2xhEXwZXqPSTPbsdLhuVsDXwKiAx%2B%2FXIrraeuaWYBwWQCasFU0xYP1r2VyiTM12atnLQkgxYJHLI6osxKYmWxvoG1Hb2qc%2BcLk%2FNuu9ieAU6s%2F0135yDrVxLzBd6AJZJcwwKoetjXv15HibyGw4iqXufzDzh0s8T05GJ85iQZQXUOBJoLFKnW7dDWRg1O0jp%2FyS9zR2WRqcRPUbGshKBoPGsL5qDyHNeGdy16DG3NRR2DvyNnqZADb%2BZX9RRyIv50BGq2infjtnNPjokclJiea8EBcWHvN47iYo7xliCDSh%2FyrUdBoU4gYJgR0LMO7f9ndwW4v%2Ft1UeZoV9m4oYt8yvu9PS6vA6rBcS2tY920y24KCoOMKfDxr0GOqUBJq9NzxtnqYiixZ6ztrirnBVFVRAWdTe1JzE2Qxn2pC6U09XyDB4nu%2BU0bS7mOXUDyCTTMVSJEj1WTlkXFZV0i6WsqcraOiZOITHWydzG%2FkH%2B17xOXKIvmIg74VEsekke8tRCHBdrBUzqFisrdwExYbuhgUAnhIorkr%2BIRxrrRvfEkRDXIQ8kXutWb7cCtyd4GQNZwCmmEdJIH53Y%2FfkXkvp0faaI&X-Amz-Signature=41e9257f68de0a6a8797d95624c29b98d848ed264ef151d9edd3a8478cc2ad8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
