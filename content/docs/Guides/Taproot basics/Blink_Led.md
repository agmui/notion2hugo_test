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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRIL4BHD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCFUwxX5vJL%2BPsiTPJWPfx2BnoFpDw99B1cVtOJawgHxQIgQJX%2Ff6iw2YYAiKfI%2BsYEGqFDPUpUoTdfyKJUk0CJnIMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTxlqzFM5cjEwyy4CrcAwOs7B%2B4uYHgcynDCQFhOArD7rV6OaRJY9V4nN55MimDg2v%2B%2BMOSEs9U6a2mGAr6b%2B0WFaO9MCiQdAe5IDHx6dQ%2B4few8sv70cXdWKEYam%2BqzyYzwBihB%2BdtEVlt%2Bwzmjn62aNEemz4bpBr5BvY6703%2FZ%2Fwa3sZRba5Ks81z9T4CdUyzJImAm2PYhj1J0ODttxkhsLCM3UsdoK%2BNwEvhAFjERVhZ7thkoAYzhI%2FljzXnOjOcfXrYBEZgn4AOlZtRuJCxukhjkcp6%2BpHLs7BgManiRKQzm6tHBuUqh0E%2FCJCr9UGNqvSXGhNLwB%2BwnyoHzvVWXtJWGSXRZWDza3%2Fu5AzLrLt41gtSHS5iJE6HR5FDhPB7pVySB67pG5npWLPX%2B60y4u9w7FYBQSA9KhRMd%2B7b3WAZas1RpLzPqj%2BuPsW0GYBVpnw%2Fx94rRKSgU0MmenojO6TGqZBA1IY2v33RMNNsoozKB6ZPk7JGTLe%2BMzCZyZY9XEgCOJugwVvmIqftqybtmTbhUYbF6LwHGLDc2DSyrOgTT0xRwPxM%2BWRUP45bQRDRbwVwBk823lZlA2u5Mx225Lw%2FR8oIw67jo8PEF%2Frot3YHGSOnKfp%2BFaESQr0kbndSmSy4cV%2FF0fZyMPu4gcEGOqUBnzh6XFdWocf9eRC1UpnZ8%2FNfqbtXC12mh5oqm1eKBFp%2FDGf6aDxsl5k%2Fp4M96elBn0bMOBv0OTvubvh3JyN2CxhfpZ%2Fw5pJZYicr%2BIijNlxirhsNG5pzhJKnuVtbW16DiNix1zpJLXCuEtuFbL7kyCjO6y1OTME4zXV0X6Rm8xSrrw1sJgZeLO6Wrvsh%2FJ0lorL9YnIZQak9L%2BqleB%2FFotN4BHnd&X-Amz-Signature=e2bff216b6eee80f8032d9e113236a62bdb835f62f0baa37e81e6a85e685a597&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVHTOGF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEVvXw4j8MF8G6xWo6rabqaE1q1dH2FyNGGrNerR%2B0leAiAZ3TsHDExNkA1oEBWDYf6hrJTzEEFK0e%2BHxlN6Ll%2B3byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcQ7YQL0YmYE6WAPKtwDc6v0YYif4z2pM4ktbosoBdoLX9TSGNGWChRlfuBr%2FoZ%2Fvwi2346hUIWt1XmCo22W6J4CilTpMG%2FAaoYNunMj4BbHdPWv7TrWZGZgqcvCDLDLHrc0QlOk4w2OHQLTeJoIBHAjDQspDonv%2BYXHFLbbWYIkG4ra4Y6JzULfF37qiPpEP597906fT9isCQzh6rnvzr6ry%2B0UVqWosWQug6%2FpcbEXnAtF0bZoQxuttTQn6C92wVSekBMz0UjeFxhibLnaKmrX%2F6jiVyGBE3OSK2OrMK5nNU6%2BvFbdEq6ZVeBVxw%2F%2FSoOf%2F1e0Uj0i8iRE3IlDxseQqOM1STi91u%2BWRUd8S9RWo%2BPj6jniOiIGDxIvJXobRtIFcvaYB6JLG8I%2FnDPDEErsTsEr2N57xEuw406ZYRJefnWImyEI%2BBKUPA1PPnDcd7LEb0iD2Jdft1g%2B%2BvNd6qIEaHNHLR13Upe%2FXK9UnWawTL0nJCMTa6R85vvfksZD1D1Sp%2FctD3vFBXF3ZtnPkGBWk64GTvuEguIQI9EFb5SXfv9Cjb89BeHlVjD%2FUW6NlxfA%2F07UDvjgxYIrTueI5jZU6iIhyP5N8ftkMcKrzw%2BjEGZ8ZIj6jBk38YmGcKmW026w%2FnlSsBJJgyow6siBwQY6pgGREA%2BXnvHQUDh3K39g3GM311yD6pQKsDhdTPVCLxOEzS%2Blb4K2ID72Fe3vmkLohTVwxi%2F438Cr%2BoLMTlyZE2PEWY%2FslVxhvndA4rFH5Tz1H%2FABKHq%2BoPTWZbAlY9to11VBg2K98%2B%2FggxgJyWhoIy5elpAJLa2Q%2BFdp6uMW7Np8oBWrXxiIojhtnHg4Ej5FeUKiWj6%2BNETXcp7EsxPuALfsv4URC%2FSI&X-Amz-Signature=57d2195517afb3c1705593ac5959a3ef1b917327d63c1b146b412a449994a49e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
