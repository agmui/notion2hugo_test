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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHKB4Q3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCw1pFwndoIYdbFoBUoWZuDfQSuOAPvTAlEsbHoGX8chgIgSrQDt3Cdr28%2BYAAxCtzQ9iwSvfd2waiNLvHIKJZoEX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM7l0%2F4SOYLszqjaNyrcA%2BGVmBebQuH5Fx4hfPDcj%2FABuNalLljo86Li9XIjq%2FIaMLZOlHCIbqPhKFnO5hatfGn41krpJ%2B1kw3OpL7wvNX10YH6BWNjTx7QWLUx9uZykYEaD7zGL31cQw%2Fuj%2FF15N7yiqShi0p%2FVLn7VI401%2FBngVj1P7g5TQqYxpL2RpW8%2Fhu8xX3U10TJ9zWhy8mPe%2BEjBmNDBEgmifyf41%2BZgvKIjfNG5bc%2FYaFSBVNjrNrFph6l%2BTu%2Bagab1ubZbVqxUK7LUZ5WE%2BDwdXxNIX%2BiQJYS%2FgaiQ27NicyqR7NFFzuAMiG1TO26LtLiG2xw44IHR3M%2FTwzVLPUsJo%2F4xZF1fMMaTdufl%2FdOz2mL7r0fCKlyOUNHaaE%2B%2FplCbnt83TD5z6Z8NHivXEfVtaF8EZpmG%2FvFsk8C6B3YXYFadTa5ulVR1f5nrgYkVd%2B3Q2oNTofp7MIQjboyGTRxzyvVIq%2Bu%2FCphNTjB79jYlJgfQxl6ie3dI6BOp1%2BnY9%2FHKSTC9wgOGgI95JmKdSWqYc%2FP%2BMwMcSR1d6OYZtkssKtTcS5IPPO%2FKQsw4WSEYuaJcCsL285I%2Fg8kBqnz%2BVIngA%2BEmijmTwdJssyPNO2dxS1b5x4rIBa3GF3o1Dna67dF0uY%2BwMP%2BPm8MGOqUB2L44h1fXWySMgqWmccqnEjbkkXBtcf%2BYdST120krVzJHiAlaGp%2BLhfrVFWzp%2FuAXz4myl4xal2O7oaBSfay4%2BhBV2OMTProL%2Frsc%2BXvYBNWLrRkGw%2F6Tc%2BGWZlUJxsJB4G%2FPSL6VJskyc5k0tNzjCK%2Fiq4idpj2%2Fgj5Kf%2B3AZxDnCxCdpDqL7b5OYGUy1IyziEw2CzVjqiihRfWZGQUct%2FC1GT8V&X-Amz-Signature=bf431defcdc9e4c008391c50870624e10a74b0f643b1a4b3f95eb2879cbe12b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFYDVCVY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCozXq%2FXUfSqrWslWyGEdRfz9CyJ%2BrMNOQDDNYeFpWydAIgEPlnDxdu4ATf9N3xlLkfJvc7SuIbMdI3yNXXlbL6zkcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLCsbgnvgyxK8tiKbSrcA2LSH%2Fs9rUKHdqOyIdsZnZX9Bzw7deXMnTIEn5gGc%2FdMk7Iq9f%2F32RfrOgMNV%2FVfsSVI7kI0VqN3CQfR43x%2FKK6ZQ8U8V1vt6O6lN3ozy8FmBJXdrJ2V0C9%2Br2L13IwZm3IlvDzLOjxVIo8TS9F%2BSZCXapSpdC3DE8N7DgdG7mFCv7F%2BElo8CBK6lGR9mRSNAABVTaUwhE8JWc6BhePxQGfYQ4AAAXk5c0iqJ6EJOAICrbt9Ta%2FFKpQPtzw2B1xv20P9E7yBJIWaovUkwvFTm0p7ExgaaGM8fN4V3R1o7EFl%2B%2B%2BAaKq%2FjwaKy99HYxLH2tCwPxwFC%2BcNupjFX9h0pqDHmHjs%2BqN%2F6Q%2BRs9wG80IvnWTqgGBmm56kf8tBsNS4ehedVhivVxks9wItVfy%2BJZ2yQb8uZa%2FTD6hKr%2BTSis2Wm2zzAwwk2%2BXzwK%2FNfGUhBJwrV8YwMIfKmP%2F9f8ZyuInzc9vZQF9WBV9Hq%2BCYWK9kCIV637PVebEZ1zFZqDnTtMmGjk5bm%2BTFCtgP4R5Cf8Un2YUOtP4NhKcs7VfxBF%2Fl8WCIS%2Fb0iQnVocnv8qESF2MA0eKyRWQuXpNmmVc8ASxe3iYWC%2FZyRj8oSC8WpvrogtXlN1j1krzZF7CyMPKQm8MGOqUBVx7OnsqZoQocy6yXXMRvwfCAb7bHqyEyn1DpL2%2Fb5Pd9YmJqM1YL%2FtGOM9KJyXYzcGTzvt8SXj8ItmynDEGYcfzdxsnWunX%2B075i3%2FRrmsZkiVN%2B7zLrZ8If3pDeLSH22SUXQEan3v2zDF7Th6gYw2obJQR8DimpGN9vDZy1D2juBfwr0oWjr2sSZLwuyJKy6ezwCSX77%2BNkVVISnqNtdYzSN48W&X-Amz-Signature=6dfd43370cc822e087776fd48cf9ec43aa3def977d28bf1be201c0dceed73c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
