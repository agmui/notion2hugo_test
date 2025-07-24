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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3JZOSCV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDi1GPY71TlnH07NxZFcT6VKv3loDEX7iZo12xWhBKe4QIhANG7wE47OXd%2FyyBOpYE%2FP3XKroLRDi7yOGUY589J5%2FyUKv8DCC0QABoMNjM3NDIzMTgzODA1IgyBvzVJzIaEij4zCBYq3APTUWtViP4E%2BvCZS0OqNJTO%2BJbUuJGhutoLThYH%2BcVDvffwOgExYYZ7HbJGgci1PUvLnL1CobMPW6flCdc0%2B79BflVhwtW6C2%2FJ4iQfGo7VH%2BIT6OCj8EvOUj9qIff6chcP3yVafm4nJmaW9QaYCb29Hb4bjzv%2BE3f8y3%2FP36twaeP5zgLAbJA3HFN9NCv%2Bdyov760%2F4ur7QeGZ3HB5s0%2BsCSy1jGDZCKC4Njpn6sIigirGyQkT4eFJKfvJ%2Fp%2BhDt72%2F5qZmU8p0dcKXWlgdRK4jwThc5EGlIqYFZ1yOjhzjiJXz1CQ3dkWhhRluWA8z2d9u79H8k4Q%2Fx71aJbXRI6Qc%2F77Ak0Tmno78%2FjJhsxROk9Cq%2FLCbYt5QDD85T8fl%2BaTnHCrGWdFzEVLL5%2Fj91jald45q6HGxmCKvCxX33PdF2HxHKktWuaHf2LB%2B7Zws7vHKSGkxTi%2BKojwn67L%2FlFB02feU%2FFks7%2F%2BvF%2BcMAOoKcw9tKrNNHZrb11tIdryy%2FKNxS44lITOjkU6PSsQSf3H4A33gHKmBPZCfdARGB6x1QdplWGZtQiENLLR5%2BVWHjBTPaCYCkLE89%2F9Aa6aeF5dcQnvHYmjqlzhHB5f7Qiumoz0Xh81Dn2pgiCvzDCotojEBjqkAUYD7f6dObV9j2Zq6efgPIds%2FxExYz038FHS%2FlRsw6grj4U2IWO3XZNoXKtWwCFOIk6qdT72X2ouyZ4E6y9C%2FCo6FDHBx%2F6TWNDvc9WIB%2BlB3uTL1Cu6fKzeeVPpoID3RmvShTt1UpT78emC0GkFhN8mk0iTOBJSVfbThVapqGTDdr4bMaJBCJ5NNL3dWuPQsper4oYUOfyuesY31ey4UrDfeDKO&X-Amz-Signature=ce83509c01f7d140d56bdb290295d02a7b32dc04b1a8ad43101ade698925858e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWH4VIUF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCpkNPMk42kcUCed1X25PhDcV1Z4uy5ph1xefVb2m12QgIgIAG50WDGIkGREXofyyDyUw0079vvze9gBQ4ufFy7eSUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBXmORgTRoJ7uXzqpCrcA4uYBaXpUHh2vHuzguOFKzLQlcLSFesIbXuhaMGPGzkS4fDVbUp39m5dXtYoJSyCkvzJxF5L9PY2FoEi0pcppM%2FRQaLkS%2BoyUBIHllPEPK7fNkJGLtwY7rOq0e23V65tE61w%2BwmD3sGpdxl%2ByPOHxlYlQf45g8jh6ruuIxuexE3maPI9AlGMwI7yp79DzvEhGQ9tAV3p5Z9WOLL9gLX0QcSCl7tR0%2FKvYKmIn59OBDcSNFe3z7CrktblLuEJO2AQDDhmrJBnK9W453D%2BXv2tl6fddgGvw012fyGBlffGWw41kAUIRhZKdHqmSgl2xny9Sr1W9qpqboeo25qMVFKJ15v2Nm4EZHTIGKtu7VcEpDvcNzBXYGQxIXCIf%2FsuLowG%2FVKAbZm0p5wUUollFNyJrd8%2BavVPom6Yc04xDZfZbaKr456K1O60fbHtTUHqH5umiz5Jo0I4TNJxdVadI%2BUHLGpOPOY78EPxbIGubTs2aBbQoe54n2I65i6a2h3guBp8APTTUjse4%2BiVabZh1Tuezka1QRvE4Bd0eRWUvNO9jX1oUGEWgTiUCl2h9ScgVeC0%2FCKSrHC%2FJa1gceOnBBFkJpabvTo%2Fux38ip85N7AAlPObPaH2FZHt5bG9xSrxMIm2iMQGOqUBZOgTIcvGSuJocUFGnZmsYSvvIQoOz3NHmFUYZDJIb0YSumab1SDqa58VlNj3EEEzG%2B8QDqrp9OgTMjV3zGCAZ7qsKed7NLtWEh5PO1TFWVBzIm15B9yi7EUVJbJ%2FqyZmhWayqktpP8RdVPxr4D9uQgGv0GZ%2B8kh3WusCnmrlpZw7xnlhCbMz0faDNcY1R842TJ0JwClVt8v4bEU%2BRsqUGJpS7Csp&X-Amz-Signature=09829b8fc2b13b0b18310165ff23c45db7387e68170dc72f460bff81b80ed669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
