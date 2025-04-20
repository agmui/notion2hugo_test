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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMXMBHR%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAIGZQSbet2nYTS75pOG5Wz7fdNVVkurVWynaYARNn8EAiEA8ncytYvis1NXusrui6mBtAdKYbnkL9%2FWs%2B5zRvGv8tkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPG8GBR9t2ASyUe5NSrcAy%2BAIn3CGLC3Biaro5fE60Lw2gX8HWwwWjBxtlukASTO7dendULbVdTb9eRgRsSTQXuJ6JeG4%2Bz8Z70xcSqTpNaR%2F9Ol0ifZ%2FPQKSg1zGiOHKM1X8Q%2BjY9TsQ8Tuqryx2EH9Yxz9%2FzNqJrX9LXmsKUH89FqHXENA8FQjPs3PLocaHBxBC9jmAh4bu7PMQsYgSHW0IPxk8AP%2FuAS2ZTCgkUq4RTcScqczDMK2ejHKBfa8t306KLtii1cQrhkCQvt%2BmtaIlmQByIfwf3S7ZkTYlXiU6FguT2s2lNNum7Re%2Fs8tJrpR2ZMYKrX6hmUhif8NKtmxYUu2k8D493mIcV3JJufFITyOnVIu4a1wAI9d32PsdLd1PVk5GqS9LcINNTg7jsFX5xgf7qWc7wUFGx0eIbPwsF42ISZPTkCgLlC3HvH9g6AiMOGumop22zZho9U0fLIvt3yH51YpqzpZb9PN%2FNlMkQ9yWCYsJk6sopmAiEfaTLFfFWICrN2RIsJAx04v%2FkJOuDrJbIrXs3R%2F%2BIHfqz%2BPzWnFJmUttfpgtrV%2BTPFz%2B%2F9OU5YW0Nf%2FJCzbiem26XrkLDO2yM6vmq4xulvTLCrw3CSWl7wOILBJBU0qMQq6a%2BQp3osYUoleyCliMIbKk8AGOqUB0keSBaftGN5M1WHF3CMjHHBECAZvjE8OiA%2BU5ZfrO53Y8HTzx3kQiGe%2BsTyDMwdQFq2XTds0SVCJ4150ei6NWO2%2F%2FHqAAJ8I%2F5vU16uWkskOZWHsvGkQ6TFMjFX9BtVtyhgrjmqdZyUcAVBXGNooylL1Lm31O5YI%2B7t6nAf%2BLvoVqVKGLagpbcqZ9kVm4Vu6%2F5mLGfFFVuORTj75M9TDSHRfeNSl&X-Amz-Signature=d045175f8f83321253e4632fca4e934e3fbdf8701d07cfb24bcfbcdf4d166f45&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPGLATC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIH8QQ7xREplCTiYnKSOyA%2Fo4EmYp9IAS64lhLvauxXijAiEAjhEKnzHHwgBHUPgty8EzR39IwjKRIVSrFS%2Blf%2BOzAPAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErYnGytENpQuRb%2BQircA9HlOgP5UW%2FSsAV%2FuQTDOF7Z2z4mgW7rqv5iKHoLVrRPNv8aXZX5IP3kDg4QNWbh2J1T3Hlq1GDnJXEvfoxxtLYrDD9fWn0QeMwi5ybfFrGoNgmXrMWMbjxB9oZUOOWJwq38%2FkKAyT%2BZ8dDIYexhElp1agFPflmMecMhx%2FS8NFhABzgShQer1u84WypFsIN0EWw%2FlouXFkDs%2Fzz6Xmz5kr54tDk1BpCLNBqNapH0UnBtESOKx%2F5UddHi3HfcTA8eOLvDkZm50vlSNe6%2BglG6Cweh6SOX7rJQJ8EWeCy5NhAzsvMVRB9NK0NPfTPtDUFcJbLfnOzKjMtGthoiVnFLmpR%2BH2fCyHvCreKSzETFqsXGzIkomTePaObDMGP44PeuEfKgeAjKzvlQtiR49HaxCeBhgjip3yk8PCpqIROaKM7zW39AuyXFj0H97pa0jGFIY6DIhz1BAX%2FGCy6YzfBBkqMCT3p5itVlYEcFb%2B31tpdG4re1o3lnpnK8AiTKDqao1hPYlc9kyuyJHyR7DLSIBOBbM7tcPwvoesM97nm%2FnIsNDGIZe1GyVdnKcU1sk19cl22dgkQjcYieG64cuB9j8IhSw65ZzUgvcalkPRmqjlcJ2sz7WIhzQVQGPoaaMPrAk8AGOqUBzid8xH8V%2FhVkMyX4ui3wyGzzVKHCCVp1vVjShNtql4gpeIvBQA8SVjc%2FSja4abiHVq3kzZq0yh5olIWHnzD08zgDKxklm77JZkwWKErBWaxABC2JBdIoQeNzCdhupNUw%2BtZRr8vMPfs%2F9m6LuXPgkQOxMvoJmE7YnEhqiOs0Uoe0Eg5t%2B2Sw6mjTzRx1jJumz%2FJ0ZV5ttSyImK796tnEcIg9b4Kz&X-Amz-Signature=a24b3b793ee68c15dda3e79978e8573920b5c968c6fbdaff75056f8202bc2a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
