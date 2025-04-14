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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TB7KWH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDXiLd7LaBBS1h%2FPRHWObKIPvk4Hl5w6inU0B4wffpzAiBF%2BkuAxz%2FX3zWjisQOBWYKzOEmyIBdt6W1CTYI4AJMgir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMlSRYL1WxqNdMmuy7KtwDcnGcvmA5Yr5GKv%2FxaXJOOGnotP%2F8MKfYP0IzCd8NpLrRjLpYjNbB1lH8oA6p%2BbervGjbL9d7l6FskrscErnBrRL3bsVcrYcgZ%2BXIokIF6Vg0t2lbk4WUam0bfn8qj9eUJ9bY9H%2Bae0V6eVPk0%2BZqcGYOHEcIzBykoDB5YA5Fo5lICkvFsiIjpDjI9Cmuq9nLXBV6yiWHABn%2FT%2F7FGAB9Ma%2FlIyCO6wblGeHQrnG4EbAoY0Jlcs5nWU14%2B%2B4%2FvGcNxuumYeKUWX%2FKLnZu6KwMTqnwdCk8PMbG5RnPcsEA1rrEgQLbcd1Mx5%2F8gwv7iITm%2BmIyBEkoQrp25BA7I4tza2qRKgdAMfuTldOoITeMBEi2eKV3FKZTB20CbeR%2FJLWEhs8Al8sAe0ATEvmSZ6G6vngHlXnWRp9FJ2F9o07LfzZp7QPINmRYytKKwVZLDrBPrXIjrf6m0ldF%2FdgMDPJSdLQLpffeqh8rmUz8Tp99MT6jSUECVSzeikBmeG%2FPj3gbKvJewj4gdKe4QLmzhyfyoNKb8%2FXlQhvd1BqZlOJGwoqjIGq%2FtMMlw9kE9SjYnV7ZucgNt5Vw99jvdJDnoukxXKVTe%2FZ2rRovxdytMCN7GwXM3obnb0fnXuh8lggwt9z0vwY6pgGh1H2M4Ru97C9SsrxlY0gkHTFEBuLYLFGZSqVrmkxtCo2%2Fsd453wZXIYXmTWueFyLldNimmh9oOwvvTVljYQtMnTXsEJjhixMHdWPuEtxXcz05qoDUyQkpOShbX6FpTic7rXkvv4rMnh5A26fsUT5vQyam6egjlXtnN%2Bn1ecz3QF6Nx132pL%2FIKm9SrAdPBLXXbWMi7OCg3ayO9foiHS4MsQJ6T8Uh&X-Amz-Signature=6c096811eb6b7f7e66816c7664a145351d565d018e7d1c659abcb01f3253297e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WROK2MI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCliC0L%2Bu4Buc3qSIvP0IXzGNAD9TRzkIJuyJ7HfdE86QIgUn6UlRz7jnRWWmVaCO047kv%2F2%2BUKw8zh2voCuu692fcq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMdBWKcSzQzYlkeiAircA2XcGPPnoowln5jItNbe0ei5loRvII1iCz2XeyfsIZV5vNppVmntshBgx9i%2Fcl6B5YryHqF80Bx%2Fq4lmU9YPOTpVqfLSkONkS54gRW%2FH7eJLA7G5g74FBExy5r9kDR0SJ8HTcwucAeKQQkbb%2Bdagu1d3lvQ4aabQ9zs57STl5OovwnwzcJhaTv7uhOF2C%2Ba4UeJUxdVgkZGVgor9aqB17v%2B1xmA1w1E0GaUfR5Yv4gz2rmWQXz9%2BvvuLHOmN%2FZ8yvovOw%2BKw3YnaSBEb8oCVD01KhqFKUiOoyEmWuMxA0xhfhDRIE2cUOC0%2F7ZkQ8A9qGdSLe4MqN7fmZ%2BBV7c99Q9QydJtFCPu9aaeHpn%2FtBO6qULiIiko1bsKz1ItDdFPrqMrl31l6b7d9ZWdiWEMu6GsH5oY89jdavMsN8jk3wmFCBctOhIgx%2Fo14qyIRR%2BDd0VsK9BIzwNqjWYe9%2Fz5hfDRqpNI7uKy09mh8yluVwgH8uR8PySWdoNxXEH9t0r%2Fgu%2F5zGQBauS5HJVfzVvML27x0527CcYCuydEzVMEuXyl6MT3YIwQTS3n2qjSALOoOe98lHwb9cYU1zi55Bx4D63BtmLU0mn%2Fot8TTqlBacrJrO5iiFrByLkeEpJDGMLnc9L8GOqUBCrSB69%2Fzb3MYTWJsg2M10Y4t5lHw%2BxGFis%2FET9GRkZbJJwYXEEKS0oo7OlzrEcjvMHodMAL6M6DxKP%2B1%2BjPzyMkwjnVn8zqfo7lwcgtN%2Fsn3V3pJ5vho1f7y2WIX6IDEfP2AKl45espe4eAR5pma74Mm0WCwmsTTG%2FnZKdeoBvzv%2FG9Rnby1wXE%2FTXhEHCw%2F7bVS9RdiFjnSVbnmSbCRsEWfqHKS&X-Amz-Signature=9ddf77a4bd90707e7231eaa1c35e82c29e52df6a3aab8991b598712a53c380a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
