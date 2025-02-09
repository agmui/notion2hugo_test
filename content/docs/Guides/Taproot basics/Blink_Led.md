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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSASMRQE%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnc4egFqFxJxI1j0znlJoAAYRU5D%2Bkdvar5epZf6f1iAiEA%2FNXXkJx5WK4qqRArw9LgUrF%2FXYWkk58CQ5D6q43paqMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgKIlHq%2BKvxipVHWSrcA%2BPy1C4JRwfopd3Uxzvr89KGqrHaDSxK1liKOgtgWG9AiaMyAL0UfNE3lEyAxcDCxfQd%2BJCi6ms4QgRpiGx%2B0I05taHGqSWfVbWDks3iuLY9ZxAGH24GKgxJZoy9KMKbKavV72PG3JhIuMKxgQnk1o87%2B3hZUP6GahGe0%2FAqy7ErUzhgxzFI6UCRVIBzZ2sud5knh8EG8pk2vgphdio2TVotUHxmS4Y1kBJOSHE3cFCjn%2BU2zrng%2BFo6oSgCRZQtVcQthrcJAfFqCyxjCxvNkKEuoRLxggk3S6kaSpAianmgKKTeZTo8RFyAav0XdSExHnPIEpvfvcYEdjkdaKROQnXWJpsRO0dkiEYS%2BZOfUicoQbYvnEhm%2FkR60qkJeiz3myr69t23EA2dhlNlpEmWlK26LhaGc8fqrQxDqpheapqzOI9Nd6GOYukSk4IADmdYij6QV1f8eQTjkDfz4KgaMzsEmFLGXs2cjMcpmrBNk7LJxQh8TCaygBTrjqTNLvwQCa0lvyq2Lm39hOfuclZhO%2B6LnJhzUvc9xxYcwAgVw%2FjNOGpq2t1lEpnR9W7vHZBmvhYKMYOu6mqyohXiIJCOVIDx18XRXH89Emlz3jJYbDQfKdPQWKCqXtFqKrZuMKu%2FoL0GOqUBUtG%2B%2Be2txuZfV3mcUIVQchb95GxQYSl2%2FnsXqxqj0RBvf0NwjtdK9fuxwxOnbNFmY2wPh1mPnvqCH4mKz9GvmZDgwOe0p4%2BgVB3DWp076Wrc%2BhrDhMTjYyUGOa0J9Boh16H2f9u69QqyFHptzt63NRGyY7pZwfhvsuA0EqY%2BBfqa2rvwXxKA%2F8o%2FyHsZobh8oOADvOVlT8YcdeS4lGKGU1d9kEa0&X-Amz-Signature=e6de097219c76b1b00d1e6a02a051d9089673ad5da0e1d23243afa8ff7ae3d36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNKT2AAM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDczJv33lYQZxqyiAFygYoYuvk9JjBHwiXx8QXHWRUyNgIhAKlXyh%2FFguoiQNKqY3VwI4O68TTmGcNKO3jxjS%2BhW8eKKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5YCWCoKwYLA%2B9WXwq3AO7S8yG9JCBHS8VVPOm9u%2FTKQ6vAg8NQ0ZMzZzkZd4X2ft3oLvNW79%2FN%2Bgq39JqGUWqBzKz5hzy6S1n2mAN9%2BcG%2BAVjsiFK%2BUbYzR8zeHL0nAWJnBQK2FDN6R4UFeZC56slyXKeLH%2BkxzYLtu03gPczH6ZyJjhwsBMMQAluJg1FMMICI9wEES3yFvpRj8hEQu%2BBnf9RqNwuiZMETnHjLfzLU4Bc8RhfIQp6L0WShZitIi0YjHPjlo7VCEVVw8ElXerVIn3%2F8OEk85dNBFnogjPCyUGWbNVMKI0eS1rnxfAdr0jUqoFnr9dgQyTvAROIyjLFPIRdg7pCap6te5IHqifCC2XOwwx32aEoviomHcyLO7nirvAfgHv3C%2B9nZluKtbAcY7AlIhtlZY8oDwoDxRDS58R3iUxiGckQaISlljg%2FAfw%2FK4O%2BC7dA7iNzujGvl68oS8f4r3vb3DYW3hbOqFtldr3qjpMODfkOP8YR4gosSPChtVmmDbjFREUx0Wf25owU6HHvt4oT2ESG2MbCjOXGYn%2BybkEfTa7N%2BwQB9dl3%2B4JkrLWVAxqBZC9OyiO9iFDnyzqPrMn3t6W%2BLxASo4ze3D%2FJBJE2Li8Z6oBJrj7kxdCtwJgFfK9Loh3LnDDDvqC9BjqkAZKOULKKjRX2k0sOZ6XNc16qVmyMmO8guodBrKgG%2F0tcRVlf%2BSAktWk5uwCmFvTU8BS%2FX1VCIyUX%2FIFJERXSod7cDlV6yDIRrRvLA3qxjDQJOdt8QOzueW38QthBMC0AUmHEem%2F0PmnBIyunPFj6UNgaUb%2BYo0nq0n%2BQ%2B%2FgdEi32XhHy%2Fv5OG3ZPk19bFVg08wgNgstAziFBhBd1kbAZcMflrHSN&X-Amz-Signature=26f65539bc786e36cddf211cc5d13c0f52c6b170841d85ec83ef4f8a96558731&X-Amz-SignedHeaders=host&x-id=GetObject)

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
