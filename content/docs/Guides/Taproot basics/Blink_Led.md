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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNIYZ4CU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn19FiTAF7h2e2nS8Rz6iVsSGFB9Wa7%2BrTxdEv9LK7TAIhALfOPyQmUYiGDeE74BTm3Y5PdgxHf1fg%2Bna%2Bv8ga20Z%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgwHbFDzUwmeDTiF4Ikq3AOAu7eQvV2DZ06n%2FsEltxjFsbpxhtO9F6%2FWEoJhD2ddb3O8m5KFGZJDsLHLd6bd%2ByYjfmTIo7dshCk7hC54ZMKtqh4IPt21YKLMuKqNgGKbmiKn%2Bahnc6CCp1F80%2Fpr6x%2FUuSkIlKO5VdGwD8Hc%2FBPtXlPuQwue56Nv3%2BjcsV4ABTjSkqg819ZhtVHMx25L44fELML0llubxtt9OlkznGsNiAGymkhD3lZVUD3%2FnEqLzgC%2FKxQ%2FrsR2ON%2BcCPTu%2BgMgi0jfIBE3o1ctn6Drl5L2g1qciyL4CVEkmRo5XO%2BjlSkgmpYxfpzahdP9Y5rzDXXmuRhbSp%2BOJfFKMPsBiJ0xtG%2BVcSi0IopZqpRNIwJDiOyTTGwMmz4ALgi1YQEsDZ6Wrx4BbWUhfGHtsVGundeAncdRfQNODI8jRzPMGZvzoq%2B6djtr1O0wvszbq0F4r7WlAOMduL0Ta1wnql7K66J4VOzf6HT3LCtVF3BrayAoC5F41Rilxx8b%2B0lILw4yC%2FwXxBcCecwQ82rtML%2BXR43JzUTca9mIMtjz1HJIXybLv95yBH6Li252Rh9YMpVx6SHgXnQTjjspmMohoL2TxAHZ6qpAna4WFBFhzGtunxVt4crG7Ot96PUZ05XlDzDuwdvBBjqkAXocv9wBXX9%2FqAKRx%2FrPX60T6y6aq7klWiQCkWButSXJhYekKuEDrJzrSd7DjbB9zBFsmtcyawkBm8Tq2x%2F6kdvnzqEGU65p6fLh6YwZbhbZcRO9o6NqFSimsTpDd6I5y%2BfzgmpWTsZPbT65saIAH7OoNA8v4qTlxnnANpJ38l0p1LS9Rl3NAqG1Zhi5bQzryfUZUBoSPlIdFGskPQ8zeu0qL9wQ&X-Amz-Signature=2bf8b95562dc1f328ffbf2596d3366d8c97366ced37dc379a5ed49f9ad1368d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTTSY4T2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2BjIqhTgukiKZrN1R0sut22gFjdrgBTyte8LJRsNvfgIgTcZmW0d52DBNtZxAjCSOi0AC4Po3YPof%2F0OWw3Omae4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJx%2BoepShNfMrc%2FJaCrcAyP9ezK21RvZg7ysQfIQ6gz%2FBKGDlgB69BjklsByYrGggtmJwMnQQR6MzA%2FZ%2FNOf5KhqgTK4CRxs%2F2S60LSRQnu9hph%2Br0c6mFu2tcVqHuSmH9Pg1hV88Nm3gpBBhiA9%2FD4rlzuqGLNFQoxmduTAmCSy53xKauEyFH352TI3w5O%2BGaUcKkT7NMmbeICIMgEoUYHdOMpMgWCvIxt33DTV51UFJ4I%2BFIsZf8pM5iF1dOIDRmGenTzEHwqHtxle4WGDNKSP8X%2Bc5zIAlJHLUSO%2BqpSqgZqY3jG8b8rrg6BmpNfdjm2GIAvgdhj13%2Bv8yeuJalvjzgkRud%2Bp6uWt4uSx7Hkjwn9Iynb6RO4QYX01e3wYiAkG1%2FHXEGFw%2BeRLXfCSjD9Y3MaR7XUhsOKkD28bYniOs1tP2txSgtkRD%2BKxRtW1fehjnYnQeRLJYpeu3bB%2FiBF35faXmW0YIG1yaBO0ErpXytS97yzKbaTcf4fQb12NITw8ylvBcGMnr7Ab45U11MGoWiYEu1vMKROfLv819AwHtEP0AyiCflrNjCmPO4aHzU3yXIB5gX3Zw6RF46HRvdaGZZdXbSa3485MtKgqVfcSj5nqnUJAVZV6nlMEbLwkGDSxtUoA5i1wpCCVMK7B28EGOqUB2P16okbnFuWggi0J36cBK7s8IBsXDt9vJSKkUs%2BVy%2B%2BspAQav%2F3uSxPXW8oFIOEflu15j%2FXXQkZzoHVPnrbmw1oX8ImVnjqqYRf2lHF%2BzKWLhi%2Bgjx6bEEU%2FFMP0LIDWP4SrePmshivaCRq1QUBnl3fZuXNnSRCmEa6AubkgzlgkyaX%2FhgV%2B8n7gC4v5YRq%2FqW7w%2FUG%2FwVLlDLUKWuGAyE3pL94p&X-Amz-Signature=4031e2945d26c2c180b838247e07ff7247bd5f969d2d27fb0fb99c57d1c0066e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
