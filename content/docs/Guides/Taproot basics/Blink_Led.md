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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN2Y2EWF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfNpMmlF5ulwpoTNZkrRRVKtSzNVLtH%2F9VlzW4JnS8YAiEA6Bh8yrcE1xnTM%2FYym7gcZ1UOriADUDOpnjOP1ZhqR9Aq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDI%2B18t6HocqmInp%2FUircA%2B6Wm43RhIBNOZ13pqeKYyjMuEEUuABWTu1fvuEcNh7u5JeiNcdRLN%2BiBvRVhzU5tGUMaV0XJFY74G33znwEQc4Dr%2BppqevzhlIp%2FyfHuB3v5wB88zXj0j3VdJbk%2FC29o1aQcbutlHA3OCHfWXiv%2B0o7bqhSNVlZ%2FBePg8yRkrLA5%2FMaJTK9iUCUqdce8xAU0Y7YOQZ9OrQy1vwrreG7Qbfo10Q4oIbpi%2FTCUa%2Bbr6lfRclBhdib2gdPrqcAYX3cnTRA%2BGI8Q4ZHTOFEanwiTc9ccs%2F8nCqSgfbeeD%2Fv%2Fkg37Mrsoa0WF43NBrPT7VYxElBEZSjMpwQ0Mv3gmO9rGjAeN7tHWp4BF%2BH%2Fjp%2BK3dC7GYeaEXmfkUcq01gkNNqFFkiFayd34hKQFGX4yyDblHtoFfd6knt%2FrUZzwcSJr4LI6VKwNut0ljuX697pjKNTibjwdKybqHJzOT18coE%2Bhz%2BJngMAf7mq%2BB7Qsop1lQuGBlnKc5PjrSnkVdmJkEJw%2F%2Fkpo%2FRfl3afevAnmoqKXeyg9auG8pHEbEsgdRWWbpK%2FvG1j4pGWKMVRTExMsubY64fb4JoQo6l97jZIJnmvQXbOJRFe3khstEcCW4eCqi85JoIV5qmuiG5SWOGAMJ3P4cAGOqUBeMsxFwdEI%2FeLD4bh%2F6YQf%2BQXw9VlEj2xcKvTD01YVbUBNG6aHtwUA95cvmt1mi26Lin4Pgp3pIkid2i4N050INAX9wyD5L5CZr6P5yedfSpLcjwQXBE0mg4i8lzceD3QxaNjBB2IwHJhhq%2BYXPlQkDWtZ7iLi5aQpB0KsylXu0FitLOp3FyPan6UlYqnDDh4mxWCe%2B1q7NTNwKEmu6HLgOAx17jk&X-Amz-Signature=805815a4787b03d71c6ac8e279a187c8a13820eabfef38e18d094a9c9135ad78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BW7FAS7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzKT3etJZDK1%2Bk6uHQA%2FkK7fz6g%2FdzN22qmN%2B4jSqqiAiABV4J3kL1JRrqtV%2F%2Bqw%2BoQoYn9V9Jp%2FP8IcSIvQAYM0yr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMXGzzWP%2BedBZF6E9XKtwDwXIuueu55Pi5f2ZuGHPVreuMARsmalUvtm%2BbQCYn0%2FdXNL65hhZrTEF6Kp%2BZu1G0CyHIl4H%2FrPHQIuQAy%2FQHU3aao6wXVeZlRkA12xjmJeOjfiui9E0JGHhvlZzih3jW8kgQAfTStCtbcB5xCI7HFdXMgtygxRizGHOGba08t4CX6fVjmXEt1EA3EllN59UV29GmQs8q2xr0YGA5DQw2kfDCu8Mu%2FSuZUpFSerC8tWz%2BVv7dskdaf7aupAEUjM7ux1yRf0TOfHNywCp4V%2BYY6XNG9uI6hRQk6qwsTNMw514T6HAIlJrj2LH5IdWSlA9gpUtY2hLejnGmaYgx2JROnrQNrjmtt60SZvt80VVLhJ8Z4OgpvAPvjyHRuqNmTOb5zu6ooVTXTKwHfsPE%2FNlxhRvatEIGlrQjuFTAAkd03xzCMSy4ZiU5N335Z7H6MaPu2T6EhYx0cqo9WYvKPoWdmKRySAGO09ra0BzPMMr74WVSfMXt0SKlCTkv4h7g%2BtMGS0Qb54Vhg9l6D2RAnMC8W5HCg4maDW48eu%2Bw2neSORDCaQKWmAHJ4moWbalWh0b%2BWEtv2ZaKNXo3yGL1GhHTfG2sduYfzOOGSEtPR6vdvDzfNduzRklABuCvytYw%2BM%2FhwAY6pgG4z7QP7DmDvW18E6dli15JoI2R9DqxMI5R1FajQhfaB3lph%2FyYmNcrCLYEukJZfJintlPTniUvamf8FY9BZE7F%2F0KCFvPDNxAus5Tn5Bmp%2FzcIrDCtraKfZzTHdG9bZ10F%2FZy30IKT3zQA0VseF5%2Fz8hK4d2%2FDvKo1M%2FQnM0f8cjY1ziXRLWb9xBd9GdlJfZijrD0g0QC%2BeupIlzJS2C6J4PJIqTPg&X-Amz-Signature=e8cf35f6ac148639e164621e131c195efabf235b9a05f1222f1384d47d655597&X-Amz-SignedHeaders=host&x-id=GetObject)

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
