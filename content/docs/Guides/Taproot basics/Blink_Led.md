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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILG6LCK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEFZCMBDW3FIfPRZ1ItPzen2UW7%2FbuqLebZF%2FjngKOXoAiEAl%2BKkFS0ZWwG9%2FSjYltgdHBrkvilfxBooZ5LJeaiCUmsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYpOch3AInzjJEr6SrcAxeM8RzcABC1JS9LoxhMEZt1%2BC5umcxZB%2FCSa6ABt%2BXtFT9c%2Bga4kcyvBaD1lKXYoxzEamJ8rhvT%2BYzhh905RGJQtVOiE%2BZgHMoa3j5Hr7fr%2BOag9kVK1W4whOTbf8csQVYGBfu0RvEqDwnzph19KWV2I5bZ7DXy4jCoBQ0HpC0638%2B5CYEtMSokGOtgySDtYQn86NcwioGyxttnUfKAg%2FGyQQdTn%2FGB9HHRkka2%2BwJdtZjFoW0t6V6AG4u1WAYoAPCm9aFLeLDkvYJ6%2F%2Fp4QdIosfMlZ6truGGpbwDfyRNEabDf1JwI1inCJhK8igWwO0tevVCIgzn%2BpNO9vQUx36Hl5I8Nj%2BX7E8jzU3L2koz6L8tbo9tAbspg3u3V0hgL1wPZ9SxsjnawR6OGQqXRx65szOqeMMkGDjUCJAE4hZY2SP0a5xY2B8OUpM08wWwbsgn0c1Tb8IkdE13vOfZ9M1jdlIre1c9kT%2FaVJfZdIQhn2K1f1MigLdCqde50PTlAtI8x0diUrUtmTR5i3%2FHYln0dJr8BNcVxxDWEK4PbigK%2BuvtWUMaZN4JhtvNcJzruiGpq%2BZA9ArOt0p8vW5Q6OOqjR%2BF8sk4ubj3NJsRtsOncDfI9NN8RIpLQFbFWMIiz98EGOqUB0QOM%2FmHwc40tWeYJS9g6Ona5okzUJj8ai1pmwYCac%2F1%2B2dUiWBxEsaDs8tSUEt7YQisx2uYJGqOCQJGi%2BobMbajp4V23VV6edzdrpIaZqbeGvXNsKIZJKSxpZ6%2F2xlsj9JoXNhbUhj5BQN04gxslTBIrEzX%2B946%2BaCZh2LU1qwXqyzvoe0Xhh7twgtOkSZKAjQqBZY2CydhyTPoInl4RVzWR%2Figl&X-Amz-Signature=b1c7b7d2a17e7a6c10cd7d9664ba93db94eee34aa4cd905cb92135b04b616c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJKWEGD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGNjilQJelD3jkWcNoRyNocHsJBY%2FKHQ3loGacM7wtqRAiBlARwTMh3c3owwrvHzTCYRjSd1kDiOIrxt2rJLE1v13SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7hNkFu5cEpbZ7QrKtwDQRNqWo82aFQuH9cU3gmZ504oDQClumf5JDZdZpJ28KtH30JuQax12xXlOCh4MvDqKr8YZTbajTQEBsH%2FeXann4rAQhz5C%2BqJas0OuK7IdF2SzcyY1rbX9qDQ1MjUG030%2B%2FEJfiUJR6nr81H8vK5Y4GDRL7QQHB69d1G9x9iEmcvTNF8upUPvFECsEcM5w5if%2BdxyhXDC2LvxuIdW1qK69uydcU2POT4H19nOfuHyFSxjBXCczoGSAwRF0044k5CMVaweN%2BDSqJbhSbsqzlnvE3ZYB4Oogd3LRWYnBARsQWPENYev9%2FeHSNdiFU4QJZAP1qBtdpFDmW9YKz5QDE8cQeYiI%2Bo8JtDwmZ6gJDTF%2Btyos8NO1L09AY0%2FkRG8z0U7vkwQI%2FomtghHiz2IwJd0Zt9HTnw3DkaocJFWfgtMu9CfimPcwmWsK4s2caUBLr94WPV1FenWciNMOYl7DiOmnyl0B26ezJMLGYU0wVjJP430GObi2PbIBNdMNW56nzTIwWLjZ363URGQlhEwwOqujI8MEz63ETAuWJDncdPKqQNqjH4PFoZxMC4Nc5k66Jk6IXuPbg5H5CaKa04VWrXVUfhn%2BANb4QVrwdiPSu%2BsUrgR5klc0FesfI4C4a0wwrL3wQY6pgE5VtNMiYvuTaonhXy7rum%2FXZLD5gLinsVaExtPHNLhZ%2BWImDex0mOOYxonvY2o3Y%2BVFLjpZsWHJe0BmyrPrsxGd%2BWh4N%2F%2FDmMqNwOUVcZjab6dvQFopqEg93WHjxQEpzFimusfYPtqBe2%2Bp%2FpNDYQjNqnpS2uMIamkdAcq6e%2BBegERtbjQsfxiqT%2FgOVL3tGu31XgfwmBIJE9Y4ILQfFChCFA1PzU8&X-Amz-Signature=082d29d8b1262a9966c1968ae46266a9f85dcf7b2f147bab195800366044fab0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
