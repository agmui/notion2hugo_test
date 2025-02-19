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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRYQASO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLYaYSdONJx7uF0MPu0ydx3gJRjm%2BnDJ8bPy4PNU1XQQIgdlIj89qGmoCea%2FNqEvutDT43PX%2Bes2uXE2vdQ%2B0%2Btr0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXaqAKbC5as1ICUwSrcA1Cbtewk38Izub3CnURE4dpCthoF6%2FLtoWwQCQHwkShz6ejVEevMbopDRPWvESlLWYNxKTUI9gQSOuCGCogJVBIIykzO5TvO2%2BKdXuuuNmp%2FHdoxgC8DrGU2%2FFIi92P5%2BauGrWQoCDWfdVQJkF4yJ41I6LAApwmUVT0V5%2FLtXx7%2BayCG9X97BmUYei05nGX%2FY6iEDs2QrtQekQRA%2BHKx4Pl1tyhrQh3dmAyp3uE%2FXRHWSyHtJq8XroirV%2BTcQZuHuePSWNcVv%2BOQVeSpPmuLFCmJ4SQKFy%2B4yY%2Bdb1UlJgQQXWv9%2BXheg9sR087IMpNph0JbH%2BZ6lbBH85O9YiXL2E%2BMU92L7Ds8W%2BGITCYcCJndvqD7ayXg%2FMPp7%2B6FPcTlye1K5YPDCO%2Ff00y2L6y3FZ4IO6C0Q6T110V5rkNHyoKJfzxgmNt49Fa9DRkxgdAlBlLrw1fGzK9vvWbDh70zFFVNQVv4W5U3zb82VCiwK9yaXILrmE1YrNrLNHYCFYQbkuHQBW84jS6B7C0uAGvWYD4CD0ZuafpLhicw0C7eOAvmw%2B%2B9h1ZJyBsvJI7an6P8YTEYvIH9yXwssASgLLCrKthoMwRHthiz8ybKkwOO1Y1aOJdXC%2FxiYJciguilMP2t2b0GOqUBiadKlGbWjgDNWa4mb3wepkhZ6HcDRLWscnJ8gvO7XxI%2BVPOZOShQMw6xb92gI1xNofiIaj6dPwjWvtxsDsOAl5OGkVWuBeK4ggmd19GufDvko3YjaMNCfGX0FBFMeqa%2FLX%2BVhwUvpcTps8sTQcph8emoox8gELRs7H4vq7jQX67ofKz%2FLlyzuNMHbcnDWKGmERTnNm1vJn%2FpHPYmgNOpyKgWmaeC&X-Amz-Signature=17b5e884e382ce082bb89bc5f5092727a91481cabbfdfbe5b5ba820c8f51e8cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJQTUSD%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLSE7C73hifOtpFpgu%2FRUlLXmTqteyw6yEXtp3JHQWsgIhAI0tGyjqz9JlVTW0sY0kA9uBRbGvFWS9UPYsThFN0TkrKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5a8BPaR3ovS4iSkgq3AND1Q1%2FHKzHgGimEt%2BVQFt%2BjrUhrQ3PC0n8g5NasILy36U312L8fu0WIjVPJL7sHGrrYV8jJv29woHd9Ahlx1t%2F1O%2B2rkEx%2Fkj7uCFacuzp1VnVRROqQbYx%2BJ32QC6gVD9dhDnE6YRT1ZnW2wYKd26k0VhMrIaIlxempfLF7tWa%2FkLVghylsKkwHUzt9u0MVzKOlIUX81BCU%2Fp0UYSqcdImtAbqu3eeB6uBVVxH7vloPFaXTLJVIx%2F%2FizyKNcAwauZZuGVE%2B6uheH8XG7fC8aZJU6cDEdl2CXwRC12o%2FTxjKIXcPCIUNSc%2BB2oLDvWbsSSeoHIoIelOGudKc%2BJB630f8pquayFgAgO8KZWk0KiV7G21E81BdIBVqesk6xlGP0zsT2v8cn6eVJogK%2Ba4bcWi9WMKQtft050XCDN8gpthEwx9SWadz5h43mQdsbNPhn0ph9lnyIVx6q1r3w7h%2FWU6QoFlpF%2FKDwsi%2BIh4sa2Y2OJ3sdMOhSLF6Cq6ThPd16f%2B8V2m5pi9uTBJPQTJUTJBs1BTCy6vqmfhsvqLT63m236TXNbubK94eN9WJGt9bbtj4lR8HPgWGBDeSgugKJ0PDvIlP8e3ojhRzX6zj6qb8sF53ITzsU6aziXr6DCJrtm9BjqkAbsllo9tLqBW9049fyK01AIi0kn9T09VxFijfsHh6SIPcS8tYvHUJwAUw0%2Byjx83zdaNoQgiXgAop63Gsg60MPGZzHOZ2xzTo63KM9Yd4FnJXUa4IzU69eYFwkuItrmQ0qrZJtagR3kiqQkclaeeUXNN9fOhS0b1J58beG%2BYHl1vTNIKjrWwSLJFr9nPOBNAkP1OS0UhaOcas8uKjr6gJzKNjcqG&X-Amz-Signature=bc9a213c10dd5d0847619e4a16160c7dcd508bfb8ddaa8b1ce6ca478a723ddf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
