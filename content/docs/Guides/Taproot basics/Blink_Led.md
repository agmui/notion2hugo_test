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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNKRYKN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBVPXxidcNqCkBVo18IPnvTj4W9RDU8F%2B0WP%2FvTMHGmDAiEA%2FAA9MmmiFkwUjwTEq4hGfCG1LzfhExn7Xgur8283yUQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBmtXVgUDaDBOSO5BCrcA9dwETglIYM7Qh1FntCjC4%2BNPZhlwdfVqo8fyH3dQOr%2BZsgOVLfnH9TbH5Zy1HsD4plVrMBENHO%2F40q11v414pBGlURtuUUOO%2F8noWrAyUAacKYC4iSm%2FRIOSw7dSJUToJ%2FD4DI9O%2BwTy5Kjh7TfbG%2FNca9hny9f3GCMjB0xCr%2FCzW5grBSBSIj%2FCZL9sN0OLSb1S7%2FvJ5ymrgbu3vjyaESVi0kTgnbrwmxzzXzLhejdXaVSHMskOQIY7oS7WHCEd1bVfpBK8kBBxEiIBNQu74EacoW0znCOOJFcNFd7nuHpMRQdFyUudlXDHx6ZzRLQ%2BfWVYQbZAwB4VwfN9EIW8uiHFkHYkGW6C%2BRi9HAgqkbTnhwQkW47Tr14dleISoN3g5kdEDuU6LbRgK7fSHwg8U5EvpjE2%2BZWMjlwDVUpvfi4HVYa7By3Q64cOBRsetuROibiUHuoWK%2BgEg9pxt9KJb7xrRcJ%2FmX3o6abs1nyQ8QExz2NHe3zmDXhaOmdmwdl%2FlOYCA7wBM8%2BET%2FkiuEhcbUtP14DAa4hAVasTm20WQGU8dRGmO3JYit7F%2FEw6mgpM7FF69%2Fa6XJtZYx0rT%2Fz2L6uq9tuqQxEk8vpvALAv3th3GgXsV7SF0n2oDXvMMb22sMGOqUBLu7BZ1RK8kuRK5%2B8BXT9HaLKhXlHzqAxw%2BkKcFaw1nBc3V5q8STUQ2hwvxJfv%2FdgqLCw0QgdVbOo%2B2hKqGQE3tfH1c7YJ8PyruhBcFnZ6Bdvw4C%2F%2BmKBzvsKZICcykXRWe6pFB8rVMIMSb6mUe52EcViK24aewGAv3Y0MTD71HPwUaWi4h7YGjDbIextUgeN%2B7MOuUTnurp32FSXTS2%2BnVAAmNu8&X-Amz-Signature=14d35cada19fa72500133509a7b6eb95a05c1d501f244a7bd068bb5238f3ac4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XOKQTGJ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIFxnAfJHpJa%2FLsA3sSLs5k2ZQlajbtZrTgQBUQlUJYrMAiA5QVuJEjeM1PE4Az%2BX8Nzf6iO011Pvvmo9cZKUoI5msCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMd0CjEvxRW90ClsuIKtwD8rmexBSfqSLipyyOaXNeMPZzGM21s8sxQ%2BMFJbvf5vvY7PyQiHeWK8qBHWWzMMI9IV617p19tjGKB5kW9qrhMQKLb4RdsH%2BOsNvg4DkGl7ItKQ0Kjw5KbSqM6af9C%2F4ptiNZYDiILuxLSitY7uPAkM1qgUK0qVhgdn2zB71SqMdWDIGwrEeLIuDWBITBm5VjaZiUFFwBLiwu24KWVO80rMZULZwTksYPSLhCV0qH4lsL2WIs7LJGcTJBExuHgXX8%2BQQspJ2%2BCRQ%2BKe5AHMfMwURh17IXdm0dT12%2BFCUe1wzB3VqksUiSfMxCXgqTq0coZrE3aQoNgnzkWwZa9E5tE3aOaq9ptrXxyTrSJrHF3VLmsrCu2qQNBxaCOex9EiLtxFaijZF5W34SVoSlmOExkjsdvtvFE%2BPgUGKZOail5k74ottt48NCl2zd5KwgSGhuq0NFkjqls8mb0%2FlZsBltBQ0I%2Fp1ocmxFrQqw2JrpxcRXToIJe3p1DV4itTlN2rQ3uXIgIDAdNa4v3yytyR%2BSvT1KZ3SDT2%2FVySv9xCCyapOyTx%2Fpk86WVCU7aNd4mbXUFk8D%2BVxIb2hR%2BW%2FGThE2F9x%2B1cGXzWpxqze34asYILSzAc9wylrweBkZuuow3%2FbawwY6pgFiQnatQl6JppEhTwmz8GwguCHi4Tc%2F50gtL42Z6SKLAvuxu%2B%2FITJGwpkv7kn3i5CiWYjrvpB9ZzqZUTQGU77hMG5QMqRSlA4ta4ttaw6tbWPL9gWLlD1yCWF9%2BEalLAaEsaymUMGS2jGmbQWLgnpCL5FaVu6Fuk1M%2FLw3NdkNYhIv053IHeeKoPSoAxmpayaB5lmjbjNHLRpiiVwUppnlhJ0hbcUc6&X-Amz-Signature=8d01811a5e15e372892b0c515be2f99784ea6eae5f42b9d91506fd435d62b2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
