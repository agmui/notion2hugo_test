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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6D7K4SB%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFJZzh2JXKvt0c3UJsfto9jPVRwalJeNXFLqmbAKuEtwIhAJzw856sx7jC6rAeIp%2BkcASe%2FB5V6mkMWYwQbvb9c%2F%2B8Kv8DCHcQABoMNjM3NDIzMTgzODA1IgxI%2BDcwD0gf5RVd9ZQq3AMz7VBYC2Zugce%2BihcZTyDV%2BomzJMENHTnqS%2FQK0u8sbtNQ2Bff%2BDTpzCNm3GzFD1l%2Bd5yRSR63SRcK9ENpR81HhKumSmqQg6E80IqMRDSiUKeRZcMp%2BQ10fUJ2bL%2FJ6aLkHDiHwQCbr9kTv4JGMRCrxPQYyEp8pF3ObG%2B3BzfMWksgwZMf30vfMlWZNAZXnvDqTTpX475ZWCYoohLglcqY3zEi7SaK2ZgSriJWjcbf5oh8OUPEcH8EXxBlBFRIupZfXO4Q7P5UjVGLjLex2%2Fg4nxZNLd3lCB7I966hJEFyGITF0Kgsi2JJEHuU%2BqI%2BjOOoyyqLo%2Brnd5IXvC1K6s%2BsAgb%2BscjZP7A%2FZvkd0O9%2FAV1HvyyDKsB%2F%2FVaMHQP7yLja1JK%2BQuaHRXVhC6tGQ6MqWxDHbAFRQEa1osu%2FA1EFMXk8m9fSmVJxPprMhPuW3uGFgydYB%2BlUNF%2FjpzX18jYtChg0v6VruPgh1%2Fb%2F5tI%2B4xK0lVWMjaiincFXqVDAOahryILs3Vw3U%2BcB4AXJSil36Xgr%2BsgqHAl5A7kuNYpuwtJzB9cB8RwR6Jlz6so5Sbip9z00rRRjJyA953cE%2FlOjusQuVC5MTQgA3GfG2vY%2BrwPQFlVbe54MleRkRzDexbvOBjqkAWoNO8%2FysZq8O8UVLRjoNabSWBSVokfuE11%2Fu5Bi%2F1CqLsG7OD2MaLfp8RZDXei2BcpSAjFQQe9h0K%2Fhj3eYAfy7fNU7qQV%2BxCoR4USignDqyKJrU6yCg%2BvJ0ifMbs252oOMzPhP10l%2F7mutrZO82RWqfRc%2FPAcZPmlpXeNL6669XLgYfGckLOy6KudUw2QyWq3Ya5meA0ZPqZIYsM9zuZseiWC0&X-Amz-Signature=50d17ab653596a3a7c00b431164be3cf312ea91db370d9ed87c5d93a450b98f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GNKWRI%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxX%2FQyo4pc%2Bca7fEImYiSjYqhVkQXhx6jstg5ypNvx6wIgGSjYK3Y6SzN6%2FaPBsO6HYerThQJqjFP0f%2BlzM91X02wq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDD%2BL4D211i2KW34F4yrcA5h%2B9rrSNDdYRyZbkqgi36QCcg%2BScJtMSnyeblY7U%2BYwH9iwyhtNyhyQyU3D8Fh5qVK0l4wzPviGPp%2BopdwnbPbXRFa%2BFWy3v11NqRuexHFnJEgYNtgef%2FxI%2FfYN5jTs%2BT0B7bo3C2OExnAhj%2FJOj1YvDz%2B7ffHtpW2Wq7wCBw2vi6tlMUHIcOLPsdN3RZL2B9fL4LQoGLyuTUT9A%2FoKGykfxR%2BsFD4ccnHLk1rShuzy82%2BiTsCsGbbZnG37zuLDwTYaabS%2BgxDuq2UeI9gXc5FhljoVwhUYBBAVpCSG7e93TnkDPlxujMmLFpyDz2sl5Ln0tVyu%2F94nyn9DtYpK5djVCux9JVnNUz82E6KX8K0l86dZEIITH82CXa2Ig5Xfeng9ZKLFvMxkdvz4OaSphIV828WeswDEqkUi6OM%2Fxp1Lw26MFp7FXQVSVHCnV6aqcoVGfjntHLaV%2BnppjHUk2KtPdS5g5jGEcJM6lfnV4LXIyIYrc73tSdWq4rqwfw48%2Fg4dgKSBpEULdPhK320M9ygaIIUrSx%2BIeg2Rh%2FdR2ljrsbpESxishISEVE0DIlLmDRFeEJN%2BlNGKjMYYYNI8MaSjfcjjN3hqCBNyOYfS2XJ8mis8vKcYbRGiKgcxMJnHu84GOqUBE6CXa38owfyQYdZ69bQikRBo9zfqogDg5xsHQuojY3uYqhqLlAgs6IQXqEfwVd57zKYSeRpprbBp4BW6dk0JGs62za32aZFlu7V6XdjL%2F7n6SMkzcqdGIRlhiGV2gNqcUgB9chfZ%2Bk%2B4cN7tcr0kEBaB8BWQv4Bh7%2BUJy92TOkxdxgaHQWE%2Fj37QtYY5yoqtzxpuZZIqbaocnqYvp06XkrZKeeGv&X-Amz-Signature=2a3cabb13f97c56a12ed15a9e1f400b1390a5808e67210315a0da9e85c316019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
