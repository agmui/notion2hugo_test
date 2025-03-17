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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNDKAKT2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1fOLXcqpJOymL34FRKLkHedIcxGjt5GifyWQslGop%2FQIgPd%2FpYeaVhb5dChuqUjWIcZm6BWfZJmHKhHEiZs3bx9Yq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCFlWTomCIh9ewh0ZSrcA3dTrCdXtI4sLfnKSi1%2BwxAwXTl9e7GWWPH7WhJdXbMOzgZSfUBXEGyZpI29D3EnIx8uWc1L7o%2BNw17Vr%2Ff5bkNXk%2FA2okEmjmAw3fTvUFzoGv8mn1sTSplPnos8lb3vNjBC9TxFmLwYD25bWYsnl3%2BxApXZdmNgvDcVq%2B3%2BKl10GEjJZpxTF1CbUu8%2BZG5GYi1JAP70k8U5lrSWsZglfhBLtY5eGSqd10%2Fn7X1LBKW0inRPhAZU8b7g38yo1PMKYv64gtwdbJZMBXZ%2B4pPJHPxULCEz9g8ERl%2Bz7B5O3tbsM%2FmaWYevd7O0ZYutJRDCWZ9mpfiOPgPN%2BbNqrunj4l4Gfd13wjshsyteMOWcpbJKRMNWLVVcWCj9E4%2Bw4JjMS1UvSWo%2FNV0FFs9rcMVDLVMKZ%2FSS8hKHUWZeVGGKP1ijoLSfbFe8LMXuf4Y2aX8q5PXljrgOsGAryWZII7OfFVEZw2u9GZMfi9SViuKxFEj6zk2hR%2BPVgWQ6q%2FenAulze8ggBoGeYHQmIZwPPvCZPEqweyQxdxnHL5nu4vWUcSgF2ptTGWatu5oqgtRj0YvO8X3wvGPUNSAXZ1MUyaZ04h2Di7PiMlyGvLCNlBUrTS7FDK%2BWypujmy4zJDujMKnp4L4GOqUB6pEXh8v4dce5zunI6Dq9hX3KBmus5IquU0BE%2BbGAzhW0z%2FKIu31RSU%2FXNOiVAZEgm6nJG7bv7cUIJcmaKb1GhGCLj73FZXjC1%2Fn5U2DdRp2ZgHEfsgOe6OB7680%2FS7%2FKd1qWkpH4F%2Bewv3HkpYV%2BO8smfC032w6qn2J%2FqNbvr6XtAC3O4UW6sumL4vB%2Bwl4D%2Bh5xeqRT%2FBGAxC%2BttEcqYZCsUyd4&X-Amz-Signature=8fb61efb63f1f6de583b10a0b6e86c1ed9d27eedbb58e4afe12a39fc6b079c88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBRZXMBA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWNLcj8y9coy8xh3lBOD984%2FWD8rmr4EcMCl9nqgobNAiB5bxVwNxmTDHWUdgaj5076BwZUbxWRJwDwVefMcU0d9Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMVC6Y09HjU7KAF3WgKtwDtPrQrhcNiti0dTa%2BeqrLyXP1EjOeekDGN9tf81fmFjXUm9BYk5ypPa0yJjVUa5RH27dmfKuuuVyd6%2F%2BoDqPdJzdoah3Aanhi%2BgCxPQRkcBpXH%2BklC6xDthValyKqKcvXBgPYdRCBkJgcaIIlb%2BZq9gViXwtV2%2BIFnJk1E35ACx2MBE%2F2wVJVWp%2F2minkuFG7X1uR%2FjTQvysL36tqIg%2FzOtbBMG250s4cRhkSf%2BHMn1JnmBSherGHPCylVtUKTJegNvzB8Z76RHQOBQQb7gfNl%2FhYsjoaW9bIIfVWdzor67F5DwQX8fuc22AYo9QEh8iMvOsgEOaA%2F6ZVnn6THaZgLvyOHKjoLjUAC1wg4zp8NJ%2BlmN7akbDeT2mzHlJ%2FpRt1DnRnWcYbnPAwp8W2BVSuWMy9zv5g%2FUMuG0x0VeW9mJkhdC%2BnDashUtPKbixcjgfUXAC8yXxgUNU6gH%2FcheK3EoFqsS%2BgVAaapVm84iTeBQKb4uN8eYaPWuYeoDi5pj4gFw5z8pTxaYzzKDw2Zz9zNpf77PQD804E0tmtbQsWhNWu2QTN657ZjdJHcjv0mdVpIBoazBfV37N%2B7u3UFEa3OdKb%2BQwFMFZx9aPBMt3pntUhgGX7hMMPfGqn9lwwj%2BrgvgY6pgF1Xmn%2BSp2Q%2F1VqJ9I2EHm%2BeYSvhtMV07PXq0Tt2tF8uZHSWYvw%2B7zW6IJFSBCpXODOqg2muPo8Ks1jQnDi9NMc86s87RFc0QGrMCPuUwa0H0Wc%2FztkQ1eOxQP9E6j%2BMTg8qBVk2tscuZy8HkRJ5Hhq%2Fz8t054cUqN7CAXb32nuexeGF142NoykRFg5HebQbJCWSPjhV9SJbWsLCXiTaSmQuiBrnl%2By&X-Amz-Signature=6eaf03ff91d32d117c869ff06d24a954b34563d7f0b5c7c2d4834bf43c4f261d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
