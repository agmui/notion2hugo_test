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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVJRFR2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJlQ1eyTc0uRi7uQdbOheBDQFyUWVy8E2b6dmV9o9R4gIgIzZIx2niGROMGoQB%2BIOZGgeONo%2B7BB%2FCKanZkbt%2B9Ukq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDK8xqCfH9AzrXR8cRCrcA2YYGF7Ui8bicd84GB9jSa%2B5WkJQM1y0bnZ7rV5ud5Cd7TGbBTsFwYVUnmKu5TFhc20MShW4xiVlxj01vjOotb3o8fi4F8UflHnq4AZatp9Z47iU9hzgKV0DyEXeOs7elzGFDfCAjK32Xn3capF9Fhgry64%2FxdK2VGU9z4hGU99QXglCyK1OwiE1PumcrX81kzJdKYqVspVtIM2wlRvPaoYYHQd7W1bQ9b5CBACabc06U%2F2IteSKa%2FRd5tmBqWmOqBa9TkeWoX51HLy3lcMgSJ2BsbVDfLnygjVPoxpxagMdciAdyB3KvHyAYkX5WPjCvlPhXtr%2FSPrQrYEjrN2p1Qwse%2B1QZguAm8hsYb%2F3K%2FNRLmuXfLADBabdqemK%2FEDizBF3SKsVXWQIdDO9OgoJQqEJaaY3JjPPKTXwGVMzWXjo0RBEbrmoJvbqyHHcR4l6wW6i%2BgPHokwa1xE8nQMGZOyKsKOsaXNk0H3uy38b8JjFxuvOFNy6V1dtaIfU7X9vOR%2BiK0NpZPPIJiTR30lrOjexofXQjHMP8I6bZL0OGyLaqgXBMfxKNzIY4TLYTYWoFutMG3cOLtrYa8wlHqSHnWI%2FXtAbvgTzpU3ean6nyFJyVE%2F%2FEmW2ANZqZ6j5MNuXjL8GOqUB333ae26IU8n%2BliAIwFbL3WhFjC3%2FQeH3XFNnlV2d%2FSni4AOWnV%2BIG8IYDvrtcU%2BZ6Fcq2wzP428k%2BO8L9%2FvEypJekEkh3L1jRKOncuYZ9YG1Tm%2BDz0Qy0gk6ii4skGj8KLUtyDTElPCuMFrnCopqmlD2HNgsW1HhmMXPwKI1A%2Bzmd7Bxy8FpBzg0jV3nIIsmURwb%2Ff%2FmLEIoRSKFRI%2B0OuldOK2v&X-Amz-Signature=64aac79fd8aee724f3ef9fec2a03bd9a43a2f005241a2d03c5183b03d6abe20d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TOBR2W%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTExdUju1J9A0UAFVqVZFCcWIWA8S5OPEtIQYpMq%2Fg0AiEA6C%2B28D%2BA5JwIkfwb9Cks17tyN5zwntnL0OfVHfRQuo8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDCZ8PPHp%2BYYciefVTSrcA9FERxFjYp4uEX1zLxDJae9JMi%2BhFdptayHMTueDg0ZRFRVgw1IG4wuReijh9Fj2ZoTUEQFi2TUS4pNI1iKRVYJffXphONw7Cuv1pszd3VuWh0WwVzgiCNDb3KV77MvtW8l0huHyHLjrEU9YHyF3bCQBxs6jcYsOAn0qT%2Bao9W4ydaUJWAK4rO62TzNlcopa1m8GlV0IBFYfz3Q756kKAyyKWw1O2C83XCqT4b5yBUBfQkkpwpGBQFEbLdCgX%2B%2BfdLlCORBpsOG7LoyARreWrpdlNiEvViSbriHwWiJM4awGC%2Bwjq3vzhTbUCfZGC4hosMGBc0T7R8FB%2FcEwAi0beFrlMlxCO8HQ%2FbgpOChzWsQzFN3pmtdIz8fztwdj%2FkN3vNpifka4OKFAxTn%2FjHwnkUlMKatRKMPrEV3%2BEes8XBRhvq0b%2Fe%2BYfTivz5kpNci0z%2FpjDsvxzI6x7YCeOmFhBUHDEBZbxSqLg0Ek32VwNm%2BKBDq6aQPa7JecURj0Km5vrCep0FyXTWMnfas31faK2F2rwMHt3HXqrsO%2Fk7DEhHFQgchBIvhYXUD8BhLSZPIFLb8gr9EgeTRmlVL5gm0nH%2BaAUJYVGetHhotHZFXwavKgVJ5UrvQBszcioPzXMP6XjL8GOqUBlEc2FQh17WjaZuGclY6u2OXSdYusSDL3cwbyuBIE4o57P9hM1XRpLis3oWAxrKgMdbkhw2H5APGLV93zv%2FAMn41%2FNxVMV08ZCxQN055bIKLrbCu2jhH%2FRHHOvhn5BzjkTpwm87tvmvvbHLD9G0Ae9bEvnodmxt%2Ft%2BV1p1VYZgo2%2Ff%2FHms3zYms4ngdGA4Q1sDuLcFbqWupoxL9vfxS6GcgsOYPkf&X-Amz-Signature=6724df30941a952d824a67b383aa443d976c9e76888146a26818885e223de05e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
