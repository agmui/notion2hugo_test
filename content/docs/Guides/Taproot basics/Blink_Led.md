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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYMYOUA4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAasE2t929Wtje5LAAxdacyEEur9Gi%2BmWQ%2B9oZMMzanQIhAJzudqo9NbLy5zRXf%2BJysoPStCZyL6jl93YzEGbsTOkfKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx87bMDxf5Bq7J9tNIq3APnrBS0iYUKgxHlMbi2cd39LPStoFW%2FCbWao8IChO5OCZSinaqAYdRFczqr4qdcRd%2B64XWZLcjQbFi29SuM9I2%2BKpWtyhMJZMOme9X7ztrQ9Pdhw2xSuiEZwjC7STXy55pdB%2Fz9gDMb%2Bua3T1ql9yyR1Rud%2B5ABoet95Ruxws9Y1AnYLuWxZ2XVDzZkZOR7B3UK8hDBe0qQPw9RMgAYDr79jBgo3w8aMpt%2BklT4LpCg83APUjJHTf8qHcDGxPnqEp%2BSohD3eAVsR15pokUsfwgUK%2B%2FFxENOO6oPxIi1h5de9eBQJmp91Pg%2Fbif8nPBbrK%2Fi7h5AoIJ8qR7pVpMtcNCREl6k67F23pmOYTzqUYToEAVtmbDZxohBTJxM1PXbhCJXdqkWfjcLrZRkRkBNgpRH1%2BMXT4zEC38C29md03vxqfk9nvRQcUGUARdv2wF%2B%2Fr%2FBsPX1LdE%2F5fw6vTZPJO1YYpiVG8dFTP6uX6PaCKinAF5nCvwr2%2F3kRtbmZWvF8VAhEBpMvK1OgpM07G9xFxVcsuODIEIIvIWfVHOgqk4EzATr4Shyh7MpA1iaur1X042l7bWKQbbUFs59qeTsyZjPIrALxeWWcJ4jHFCySffjTmpFD%2BtTbHsvh2EIYDCe9IDDBjqkAQvNIOgl6%2FiQIT%2F2nQfMZdgbiiUeYZqrMGh5w04tDur0lM1qlCfiiBWJzqXTPp6oqr09MJ8Qao3cG%2BiP7H4o%2BWNDqoRGKoCRZ9O8r53C%2FxZwWaCnwGt2vywHGW14FDxC9iMZ73Xyk0mdR6PBCIyBgleyuC6almNsvNrNdDJpp89gW9BHYen5FPgSXldGIo%2F8ypJE2RbcX5mzByjhE1z4B1Adrkik&X-Amz-Signature=3a2a132921f5f584627fd632a7014a87abea3bc3ac05390420282208bb8b5d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7DVX4U%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHHkak2lXWVO9mwCODOdzDqVLjVWEQ3AEun%2FmbQwq2jAiEA1BF3b%2FilsofNpZzmhOq%2BlJM3b7ZetBL2kvy4JfqFGlEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZb4nh3719y%2BUwRACrcA4XI%2BVzANGfflfaRuf77xT2rgB0Bj4GeJEoxs2cEPPG9O67NH7QLOo92gJHu3%2FoZoI%2F%2BosO%2BN%2FwMOtrDypvO3rakThQGmdLfT3clR%2FZ01dVRjnMylEae961un1zEg9%2FkRtQE7sy6R7%2FRtWQJDtc0aiB0Zs39VrS9rKkh3kl0YmTWqqnpcwJsfZLz7nG4qWxRGhx4VSR1QKf4ZzRp0N%2Fh93qk%2BSAIQnU7C33FHqlBMa4SYt3DbNQ65QAqJTME0Ch1ZMu2AgdqGmMA%2BCtGVzdSf1hqvzwCIFKDaL%2F7%2B%2BE2xia6gHBTeat8MYiRuK7plv%2FvLrccRxME7ICg0Q2ShacdmjJUjaL4O5irJi6BiD9MjdKtHftS%2B%2FjrQhh6PuuzNkHuRqlJFSBfmNgED1y4fBi5tJZlYEX%2BGmDzaoBITdpabwI77Gn2WEmET%2B4EHoYIlILCJfsLaR9J2xODNMqJq5gzoQkcqnKyjCx018no70%2BgWWXqe1zaDb4v9Je35BR3tvVF9VnyvT2b0EbSAAxB8DujvBZvb4gLUtlL6KyTEXPmNZxd8w67e2hbQ7knigfJ3jbwJTAmtfpvmoByRQchny%2BspJB9dt7QzXgbxMleO7LG36a7ld%2F4kwgdof1J0iQfMNL0gMMGOqUB9MfryEz8PiJpe3xquzu9YAhlblLKNqPVgslAsZH9k2SbCCm3tyOIrVIUmAO30C8%2Bg0S2LwbCkFfM57Ux94r9dyA9nI8Pcy%2BGLjwdXyPIxYczajit4vQsJZVN3Exp8S%2FrXv%2FwzRVk6JJ5WzBmBTi9jI4NeK5YgrVG12bYRAqB9SWJ2zT6mr83o%2FkuqkBntBcDV3lgI3m7BOU1LKzH1ezO8ByXYGvj&X-Amz-Signature=34fcccc750c768b3e19a53deac9fcaf8ddc0b2937abefcb75c5ead0c1c3fefce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
