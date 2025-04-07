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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXEEJAI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOjAAYEd9%2BOD6Ze3ROcBZib3iuB%2FcJkw911KhA1%2BxbUAiEAyUx4XA56Acj85Lh6cAoSrRTU9GEiLDFsIWlCje06ihsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDUJWmscSZ6lGieK4CrcA8mger7gDp8UfuX1GBikd%2BWQN5Kwh9Ka5fVtmkdWNFm3H6VrH0LrIYoA0KaQ6PF5mzqTMBnwYkubjS5DTnlJlPZufka6%2FBOd2AFc1rLNEzi3j%2BlPGc6Pp97gK2w3XUumxd03Gwi5NoWO6g4PGmXhF1FiRxE60YXYajdeuwd7whkJ1ZOu%2F1iySHMKWBbttl%2BJzIPpWJRV3j8SN%2FNNYwQCbpxQZ3aG7SMeMNmtLtK%2Fr5hVmTXQ3HG5Ve0pVMbmdONPIXj2VlOqJbo7R9sCIHdiEFH8bOlnLq2Yl8OtbxCiaSB0%2FMTYZvl7Tgor3Lmh%2BxkibIVtFjTKTvbFlP8uTvaVF%2BG6dlCZP8LnNZr3591MKa7hJsBK20gUw4jG20cF3yMHXJf490Z4TDZ%2FXvGafx9d6%2Bt6UYgc5xvLqFYFeNtjEEV%2FPsFvQoo2bdjNKZP23NnWbpyoV4Kf9iC2kFDmNmZabuNNdjWyG0lyKhnVPB1GdmJLK%2FsJnEwBCzCjhDZjSu4Nt35P%2FfjSbJW2v13Jjos6zGG%2FaGDTzWK8BXl2ntqzEP45UHndMv6K2JM%2B8XP0ExqvDPnRwpYbM2Yq0IgE4z%2BJHG3Q%2F0cace15UxMSNxamJZgFBOiFdIo9l3U6VRWqMNKDzb8GOqUBMZFp1%2FBaB4fTrI00Ig4i%2BQqa0oF9SlO0g7DLOr7LnEfOb2nM6vZXnN1SGw9IM5qYW9fbEzXEPZxxqQYCgGlCk%2F1sldFoB8eyj4m%2ByOgb731%2FbODb4lrL4dZdqx%2BpzknAtg2fbj4VjPIjZIOLqtJx2r2oI7ULxosF7Y0inoQENxxKPrgn6SOHXj%2FJHWiAZZmjsJ1rL9VWr%2Fnum4ewbUZNVqEoAJeC&X-Amz-Signature=ace4cbbc4899f526c9ea7620f5c999bcad427b4a8e4f6548e6d7442228265b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HNZO2Q%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsFym%2FnkfxtpWt%2BefW6YE7ztHT%2B%2ByKcL6hpt%2F2j3AwUAiAD6ptrLom2rnzgoa6rh3rHG5Do3cyZnK5TDQyfzbhGqCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM5Eo4QuPrlBMv9jt4KtwDfDb5wcpGw4nuZ3RbnLDabwbgLYYS41Qr0Oc2Cw5fpnoZ56pU3sHk6QlQgl%2BPVx18dz14Hy8wCpQPSkjt%2BDUKT%2BzaSwkVC4MIOCQyAzYs3l7mHeemTAXhG6%2FdhP%2FLxNrvZZUcMMv56qy6S9hQRODkxo6fLbL%2F1FXBuNI2LBkEUcm7ECmcw225ORJJHzg7LIjdTfxDp9BM1GjgHdcF904N6KkeJl%2FTJPOoHt6bxofo6tN%2FJYHSM6BaVtTCqIroMXU8wsAjV2BngrssDPFW%2FWl2kdXDchiog%2BP073fTBbOSsXwwcwmEtUIjXk1%2BSX%2FctW6Gxa8xrp%2Bk218HWGYGUQX2uqzF5VMhoasO95r0fWkyxa%2FKnKFJGZOFKBn%2BBXWhoacpJj6loqAs6Z2ZwGXs%2BB3HwJEzWhmNOzzeFFsToqZngGKPvQRIjw%2FB4clGsQEPUm3Hqx35ndwL6L8aw%2B%2FZ2M9mPJxHE5t4LkmdPUfc1%2F7kKRiVjU4Wg78qNfXjdvX6EiUBkFwZ1JMW0cSqe44oLJKggQ7KP5El%2BDeiZHR8npnWaBjztpxTNjZYP4detQ4uLIIRHZCMEdlBdDF1o2Arf9lL3Bnfh6dbqlYpTxYzsbLQ6G4p%2FnKKNqiYgzO6OoIwm5%2FNvwY6pgG9TewwJwXO0Ty5d2omd%2FoSXd04oWiWVZJUiqRmez9gXecrKi9cLuzc7JrDbHW%2BbZdO9fnRFkB75GFqIYRfZMM7oJe2Jv2gJfTb4EZhMGtiQCdy2j4o37MVxXc640f2OEJE0Qzaorqp78%2B%2FH6RDLvvNNXILR7Z4CZAQkssPAebbwFdZr31kKYnNkD6JFPRGcD8ewDORbOrWdoHF6NOSzxa%2BQQDPwYQw&X-Amz-Signature=63a68d697e48cf7681ee287fa4ff219b28dff559cc7e61450365468ea2a9eed0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
