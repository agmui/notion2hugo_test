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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CABAFO2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn%2BwRC6Th4fmrQ45Al8LQ04qX3BeWAtac12Ux9kPS0aAiEA0PHD83txbny8fMPeL4bPkusk36eWursOhgUN%2Fu2YeWAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkRGm4zfmnh1aANfCrcA3lw5LKQ3VZ6%2Fm%2BvW0XKiI30oWputy%2By%2FwUJaORBAkb%2FsS62ZP4yGft0%2BLZV9z74axt%2BTNgx9mqZP4lrxlCY8tWQCGFkqh4hujaEgW4SyezDp0dI%2BoQWzAelKzvILmIBTMXSGeHsXJLpzQw8YKRtejAxY8c1c72Vx6HdInGsLNsmHlPyvILdrbgy7UnHIDqP6njixmEVb1htP%2FrLo6iMPPRvyVTYdm7Xlf3bv1LaWU6OWwucFMty6Bf8rhDdfKVckJ5r%2FDVvYBoFE8NwEpKat4qNtEX5NND3CwmyyPOuu3ehtIVjVUcPn6QLGGKzad%2FgnuIJVOQvXaBcdqLxvS9wmzLEU17TTbB6J2J%2B5Fugc73puBSw7o8gLBjSlP2v2sPmwgzxClzC6kEAI7edO8UzmLqgvvfeXEmtLauJ0jLlVK%2B6TWaSUDoxGGDmnu9kO66QrwV5R2P98Im4XXPkLkD1BwlO4etbcud42LtYCjS14ULGUOw3hud1sx5ZZcbVZyqPeLBz4e0DBBQeXR4k9DpZbQ3Di0ySQybc4xD%2Fgq57xy76bX1U3PFXVEbbGNhdSwMaqHCLamZiHNGBQXoGHubx68XiKskHGGZxztz%2Fb662isgK6fSxZLz21QwtSNxJMP38lb4GOqUBAcQQ6ytZcTasidxVxHwJ5HY9cP1Day%2FDw9a%2B76dl9bWQpMvhDvS7kr5vuR9ZRflQZK5UbIg2evJ%2Fg2pir4AV1Dur0uljPIAL2LxpTKUzXkbEpo0lPtpQFVnbxRGSgG%2BBuyHX%2Fdvs78zOIkXB8hdV0aHtIlDl5EASzwHbnLvbbBPJZj%2FE6HUNd8c7hadCzz7vIkHKiu8lPoGxNfv3EJuADeCqdDRx&X-Amz-Signature=d1f996e79062b2b3dd942c148757c3d6150b7299f6288aec0638fa4a18b6184b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFHSUHW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkxLCnIM7hQyBMXCmNBcx9baAyI4a1jJgIf88Y%2BdBQ1AiEA%2B7SoW1TZDcI9FD8HZm7rARYs0WDu3e4%2FZ%2B3CkDNTHxUqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7xzfwkxiJLE2oKmCrcAxoA5zRQOUnbDL8ruEz48lewO6UUWFsZYtF89ou0iJbFbm%2FVxgv9Aj7Z9pNA17ytigPH6z1GTnJVD2lRZmFNh7%2Ba%2FU16nhIC8p4rRXJbvNVwuIP7FSz1Z1PpaJewUDG0aVb6ElShRngpkPFVvI2%2FdySt52C23Wnft89JarH5yWSPtn%2BkhhOfrV3SK1pxxsarfLYrY%2FTU%2F91XKiemDN%2FNblySsJzuoXdGaSUaJiPqfHocn%2BdL7L7s8K0XglYlL0Lj0TcOXGKKfREaGUEl6NsyzgN7lO6KH6rBCRUWDz3sGdZc0RgKfmUM8jAyKB6biwbK3xI5Bc0VbuWV5LVK1t5rK6rUtQNW4HQ%2BU%2BB6v8KvuRCN7gJr7%2FSg0Ng6zuAGj1mjeXsPlQh%2F19WrAvXwWaoKUfaPR5I4fdb7f49lGAW5WTCeg8GAlh95naCrSWPbbvgem94IgiFdpe9ZX16%2FHqCvMjxQatVtWTaNJePvocnEO%2BWppiNgV6KIpBqIzm7%2FbBfmKMDBr%2Fa98g7WXL4cfjil4p4hMoxNkWSZAhopf3dppF%2F%2F1yIM3PCZ8a1pK0oD%2Fd%2FnLctkPim6rk3tQDSYLFK%2B0%2BFqxZsjK9t%2BJ8uK11MR5T0s%2BStcv8Se4TeupyUkMN79lb4GOqUBAfY4YC%2FRKWc12APqH8zia7W5RfIbKfom%2Bh4jfK0CBOJlFpoqmh2bxeZz4hkEeF8BGP5bIbMLUd2Hxr0Dz7zxv7VQK1hut%2FaDlbdcCicLjY%2FdcgiyCnUx5DrG4HUZ%2FZDwpbKg9ZxUaYPjzwOp3%2BbTEuwaCtO3yXbWGjDj1FNu1YjQwIjOasMkynhl4JNP6PyvOGq9ohw1xNj3IqHc8h%2BlkgdA4FDa&X-Amz-Signature=f776ac8dae35e4dd92b6f956ece2b8d69cb954262cecf27b5d9d0c680eaab2e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
