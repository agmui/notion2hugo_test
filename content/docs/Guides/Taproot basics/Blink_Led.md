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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5BISLY3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvTISdgGGEppQpxvfoy1ymQZuR2A8Fpz14HQ3f929iCQIhAPko9QYmo580PoZREIphp9wpgrIbjCirTWcTJmjUQ04GKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLURSlPHvlsSV5zv4q3APlD5g%2FFCppoL3CDBGa9jVOK9O5TC0%2FKUJCj4TgN5sOkXEJ8NYBfkK2aTunXuXK8P7Q%2FfZdeeLA%2B1ydBUrLyEt2Q%2BgpTqT6t1lQ29ZX98Mcdp1ko1I%2BHmJ9uvqc8n3p8S9mcs6H3h99EYQwQa%2Br7PME%2FoIShQNQNT15NqWRHEbpI0ovu9KiydoKg9MvKpvNcKPPy7UbzoBT2nW9WGBjRICmuerXYsS7KPn3%2FwRFkBML0SnLlkCjFYl6y3uwmAMsHi9lyiCQ0UXTfzy6L4bQuJJaLrx%2F1WQgdefeWhOATSxMdCvZ6If0dnr8SNul%2FBMriys9BigwydbBHCuNTKRL04NQBNtSYZalEtsKn8YxKF9TIX%2BbqkYJbO%2Be1GDxh9zi2%2FavFeRYJvCG6zUMMIEC9RDN21eFpAaC7WzFI9akRyyZVPoEJOy19fbIQLnPOldtgCeEmbbYOC4ZY%2F7CKHrBIsCMyXNzfrmkm6vTezF%2FoAQSKXTU5j%2BG7fxmYkFL6VKod7BnYbmhKXBMNbRQZQwYABx6%2BNzbpkCfnjjCd%2F4cBLH0mpUqhDPh8hu1peJAJrrOLu%2F%2BoBYhG0k%2BhK5M%2FrdD79EATFu%2BkB44WeVYT0unxfyOPIutIk0%2FY7lOWbBXbDD8v5q%2BBjqkAb%2FHONnzZKmLr4xajPRmyXwkDVaG2u%2FdPlKJO6imozKC87PGFOY7kmdvoF4F%2B2OEmBal9QK1d8H2MpSC6XBl1dyWIorf6rG9l74kHZgpJ3hhUb2oHvQ8k2BeTHiepR3rTgUnLZMg3NJeHjGWQkdhlysLedjFRklFamkG1L1sfOxhTswwiLiKlgThceSArWB86x3GQbCgqmQgSxy74GN%2B9gWxzbMt&X-Amz-Signature=7b65aaaebd7e844a93adfef20c48ecc3c91137d1870abcfbb8b7dc81d15c23b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQ4A2LD%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdYpqARjW6SINKQTVZg9wlEvDGEone3yjrimhLBH9%2B4AiANnHLVF%2FXo1OPrwBeirE7pjtE%2F5DgThu5FNp0sdqaFtiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F8FCvoKlILJcxRueKtwDf%2By%2FUwx929BmVjpFVRIOzELfku4ACHCs4KpnlVq8bWkJFgWLcEZAwZb6zXtSrUfKSzGVQp9oQGG%2FnHw0%2Fzri5ap2%2Bf5XM%2Fb9NCQ%2FQtpolZ3AO2yHiYTFvhMbBMjPSCt6lWBGNps%2FANPkIJwCezB6lRbnfPxbbqzbZexkyZxFU8zq5xwbqjQTnpESWezk5K1S2WUwPvwhgrWkTZ%2BLLubhpx3Y%2BkjEWhr%2BxXYhJ7M2M2t%2FS5YxjjOevnXrRiozevy99TdC%2BmMCvTdaoYpwUeHkOGXEYs0NKtdTJ7jWhhAgMzgGtjgi3ajUvCo3Tx1onRmGaZ0LjK4bc%2Bq885tMqixkFs3NvtYXqzcdevaF8%2BVOkIOQ9J8HG5xYMU%2F0P5HLYOzu8vREGfEs0iNS2wM%2FcUUjVoPBlrlG1NcO6ROP9zwAaMDq6JAIKKwkH87yIAbFVr8Z1LOLuNw6UwAh8gjvluVNBQtFHs8D1vBxynuacNqr3g%2Bw6GpRgmIE%2BPW6mEQphuhK1ip0OXjpYIsKF8QHEO3dRvndw3cPqOT6DCzLGWEtiw2o9BFmRpLq3gH%2FGtITZIRPKNlo0oQuTlT08v9xyPV6Y9746uicAYYTfXufDfuFyZNA6URcwwYwzgbdPcgwrsCavgY6pgEyUoqCd6va0wzMaOg6Z8GZGWuudQBJM6IotYwooIr4Qd%2FSvJJiDHy2IZ5hzBiZbXNKQV%2F6G7c5z%2FvmldRi%2BQBQzn9VqRKt%2FVPU6E5nwtOWJh5I8VFGz%2Fq4y0UwhBKCk8VqhsdGx6u7mtwaglgP%2BJDv3xa%2F0bylgr9J1SElWani3PQNtX7JpawGF3d2%2FJdo0uKP7XgXGD%2Bt3X2AVzbynefI%2BwWpbRCl&X-Amz-Signature=394aec225a34e81ac19fb3e6e1d6ccdc4796c6986c2d338ea11de29afb89fdf6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
