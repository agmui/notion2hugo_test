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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZU2OFSO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyLFyPLk3HkIdix%2BQmqoNvglcgDOsCOY4ztmCOUosCowIgLQm48rBMWoH3T84prH71i3fzDVQu0OhJ%2B7IS6ItKSlsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwv%2BErzwcd7zCwcLyrcA9d0VE6LnnUJMBijYkh1du7MuJANFG%2BLZaF5ajw8hFa5M4mjPoYzL8qS98m6JoNRb4sEkyseSGJOj55J3IiadAn6YCetp8PldTqDKkvk4PhdeNIYJtjyn7GocSyWpm2YytIv5dM2iHjxeFLL0Tpt3OgkrXkBFBa9lXBirlG88yQ2zK%2BHtInvZznC2V7qz%2BPjrmOk1N8YvuKhPUeNZ2Wk8zx7HuJVwmyEFYWRqeeWNXaf981RVFrT%2BGd%2F0nTD8NjNDBmjBwpc4WKjTUiENblUeYuWueEoTCcFV7lH2kgeGt5I8%2Bphb26cRzXmv4rRS2kxMJkrwqvRHidQ2T5WxsXAAFisK3fky7bdZ9TPg189M2PQ8Yu1muwc04ICENAZqxYaeQmfO4xqEmFSbX0QHh1C8hbltAhbLz70GxDHRfwMGll%2FKy9wZ4OEiZXMTuslfV6wIqPGPQZgX5xWtq6MmR76qslTgZplCty%2F0vjp015jrH0LYPkjZGMEQhcBP%2BHFquQUfb7lPY1U3AgCrnSK5XZpJ24fGqC0a6HzZcvU5XFdJC4MwpUQEv7xYNKNjJNe%2BcI0gIkfNnRtRWFmZx12zNEi%2BVYTdmMgD8iVZyAhWleivMkCYz3F3krn09xO0Q5aMJDmhMMGOqUBH%2BF4MdF4o%2FqzZUaB3B6%2Bq3xAJeeppwfqo01ozUSkyR9DdIumz66efxO4yS%2FScNr%2BTfMktM%2FRAxTiXmdFH7T29Th2CqJm3SCBUmiUQSYXZYuapTGAx%2Fiz8TCLohIv%2F%2BlRp7iUzsZLxhju99sarNkkfv0l0J3amMqC9hFnpgYcBFmjXnkWbti0rFCjfy7Etepnci4gAF3jlwgaMdh0X1BkParaDAph&X-Amz-Signature=11fb4e02284b1bf12ee88acce50cb90308543bc6254425766842646f69992e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNH3LL3Y%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm6zeeyQBLbF%2Bf%2Fd01UIkjR7KlFhsRNNVwW4dcReOo3AiAoEoNlVNSrCusMm8dg1tyB%2Fa0Rr%2BKLzjD3xaxV%2BlBBHCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4YddvtXD0pe6%2FhBKtwD%2FlBxFhelP%2B7mtSSTyvfDNoViP1t34yGW56ZCXPDppDuQjIzRDZEJZ5Y1i%2B%2Fxfhognee1J7Tl2XBomCezqHrf5I7HCDJQCWJ6K%2Ftk3z%2FiTNGLxTrLfIj23yK6VdOrcZrwpbqOgTxKR00711%2F4Vg93nJHyQIF01EbUk%2BANvw2be331yNspzYQZPOa2Z2suwiMX05RAIA%2FKHVa4bBxk26nykiliESE48z2e8xXBnqP4NEFXLDH0ILfZt0UsvLJLwfRo9KyCXx4UmWGpOvoFPUjCdtwWjIfYApUAXuEDzn8cF6cTvsH6ZwkXkkaDStna2AYg5LOQjRHZbBVHQKZ59aATtuyEJ3jXEpdTkswdEFirRTykIIbpIxWkomWwAGW06GEin1EKKZl5NuqeYNrumbNGQ1e6VQaZBvOi6Av%2F%2BeOkmqlGMPeQ0WmJfof4hm7okka7dF0N2KsjmCUXAmtEPVAKV7p6OCkMYZh0nhDHeAJFRrha%2FI5dahOJDgnS8r9dKEMT1oJ%2BDXxVM61ouzCtRRPHh7yGAenpcFo%2F9c91o2QL6VgHBYuAOd8FgXePgc0NntKCE96NDRLVxm1m3XGN8GFlKpKwrSaH397uw0ThQ3%2FFp3FU6y7KSQ68InZF2tcw2OCEwwY6pgF4vYLDSqv2cplGd5%2BHCqeIYdQ%2Bqy5YClArTexfKmWr6SaCoQWbob9yAWQEeo6DDWnuAna5U6M9ncsC63qZsfRqT1xvKTCIdygM1r9QNn0N1vQUa32MPuxbHKBE8IGDxq1DP3bmgripOFnaqi5tPAmUs7XWvkjwsTxBRxWs0sV0wMUhs7G7rqcFjPdjAGEgvccGSdWcfUGi4U8iqDnXVmCO6hNdzrSG&X-Amz-Signature=cbba444e0d1ac3b648bb0c8da17d97eceee5ee1aaeca10f3a8eb2860e0aa8694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
