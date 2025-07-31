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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYWKNPL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiQlKqlTNBV%2FBa5qxpYdKav16b7a4J%2FUmTcvPHi1QXqQIgafTs5MzpBFStqAWXloaEoP6Icch5e6OFkprYCCSdd3EqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWdZizi6x0JrjXlySrcA3mMD%2BIcjCnpqZ2As5lkJ7cRpvcr19JibhsQQSmD0UYrO2l3mNaLTEqpYsLqMTH8e06rz%2BPRphNKawo0KO3DnomvNe7ZGWtDSxfxL%2BI6jxDJfIWYSokRv3AEpZY23dsGNLUkPLCYV3uCjjjfdHCQWnSkNXyRATa%2FyOno%2BfeWwTOM58q1Pac4TZ%2BOu%2F3LHhmfsRnQHmA8YJFE6qpLeyDiZ2aPObB8hhjZkFM0Uk8%2B%2Bm4Wk%2B1psJxpXcE9lI90GSQ5si15S5wDDJxrmG2Ke25V3l87QYb%2FasHEtd2Cp8Uod1d9lJBkZ4gwJVqV%2FNnDHs9Fjx9Bv%2BSMDGWv%2Bhjig%2FSOybVtR8%2FwQEdabqi1nQ3LvwjHrYpqZzqYuTnPhaWk7Ah6Up5ANXTveXQiNy3WDbLMc%2FgOfCov8tjaiVCfjrQlP%2FK9PjwxIRooR%2FhkTWudZ2Zretjtr3jFossjvszIHhzTojwoWEJU0CHVCLj012N0z%2BmD79Y2qKsQHvlrJnlRjzhn40R%2B%2BCseY1wK7Q8gAneWpsEmpuCn5whbQluVnzkdTTw9acsnAdlb3BPxrvWSLH5F5fJ%2F9IEftfJOogf3j6Fu2Mr2ck2M3XhFhKPsoQvjcNHw4jodDGtnM4JvMnvaMIbNr8QGOqUBYSBXDfD%2B%2FCB%2BcCTRnQBIjtlw0YrJZIexovZucx9KY5Fqj1vBN3zWfjKlVl6JXSeDzLXSZ%2FBJm9GnP66KFu5xuE%2FSpIpfh2NRHVOnu6KSKfaXJ%2B6%2FSrO2CSDYtdOTSNt%2B74WTokuOWe%2FmQ%2FKs46qvbN%2FcxPaUqUkGAhVfTecrG30p5Ud2hrD4qTJS8RQUVrGJRFnicqZOQy7oyhB38GFbPnUmB12F&X-Amz-Signature=fe56eb648ff5a6834a722c3ae937308d1383baf84ee03667d699a7f154aaaa9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TLK4X6P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaNBLs4uKiZrJSWleTldCw0a42Btp%2B9%2Bbk5XP%2BmVlYuQIhAOwO3srMYaw%2F4y0Jfi8C5x9HwYBK0IqvB4mVCaNojyoKKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp%2FtU%2FVbhHCb72qZsq3AOPIANPTL11XIwPDez6FOCrOL2S48GfWF6ftlT05lsV3ziyt2DR5CYenzzfXydDZu4xsiVWlJVrY1MGJcGKmlB8nsFM5dE49EcaQ%2Br2%2FVg9B3kE2opWj6pZIcavmMKawRkUNYQi98gay8PZ5be209qeNnX10ifgkW3Fgdc342A7JxZd8B5lK6m7XTz2zll5b1DlZartrfneGy6s6llhCEToS99J5gIsDy5jKjpTYFJYnxHo0EaBCIy1VWcnxgX1%2BImRhmWi2zVyWi7YZSMekQDdKUbyCcW3GXvdVkvRCfsIihtIWtlBeQ9hXu0%2BhcsFro7a%2FGWDD0u8vGUYRLLoz6scgYmwIUPfu7XEMMz1hVX5MclH0EoncYzW%2FxXwuWczaiYJwzUIFdzEbR%2Fg%2F6vcS2b%2F8bv6UyEgHSWjEizOZypnFpbyFad9eC3NbAEcLVIM9qNkQ%2B0jmjTmlPITOAt%2BuOMV5Uy0LhwTctqhFLIBWi7iNWumgGbGmpI%2FpYDzgJFCpDRMZj4iTsUFRXopQJKRfJvpQIHPmV%2FiYjkGENxEdoQKmKjXNJ%2Fnn8XKSLgjIUw2xXtQk26R%2BaYoElslM71RMsk1uqhnPiaB18sK4ZMsPMh6ynxACtlLcaMv58SqHTDQzK%2FEBjqkAUj8xgjMrRbH7Njetc%2Bhf2Fth7K4GJVo1e7oHvcIlqgoUtYKF9bmSYxC4Ltqfn8pHqps6lZdpd3QKN6fAdvderieTcAFof7VEYfJwK2ZghaFJi5ZfZac5%2B9%2BJfHvhRGtO%2F%2B%2B8ik4ZSfULCUHnqejdKZkNykAd5ObRL5PCnnAZJ12Abcv7eU47pa9G%2B4rYSW79UE1vZQ5ad47ZJRDEgHgGk8Lesu8&X-Amz-Signature=f5accc407eec46e9da940f7b20a078dd379ffa141051a602ca46cbf488666450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
