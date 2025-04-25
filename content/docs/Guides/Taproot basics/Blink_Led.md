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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQJHKG4L%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR5YTPPgv4pGQqTWCyG%2BXyYt3D9R9%2BwsyPlIl5GUArswIgK9heYkKf98hNVWJp8bOi1aHiFZ3OzqZRm2vKKn1O4tAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJHUSN67Qm15%2F%2FbcyyrcA8alSCBe3ihgEUyYWtx4bb8Xq5IrQ1xdKEp2T5vWXIUXobPcCFj6Dvh%2F3QqwA1f0CSVgYOXCqCnub3lm3kRiXLCrXhq4dgfAjxCyNYLPdlIrnHg47bX29UoX1KwP2RISgvVu2GHr5SsDt%2BLdMlmrq%2FNIgMh9D%2FGqqWN%2BCsZkEQfeNndWHtDo44i0hK7JN0kBrD%2FnvCNUafI12X7NcnPrnmA3n9QIha7KvQm7cyHz8Q2%2FTitnHFyX3DlvkmSAI9f5PxZP2gK2w7iY0L38ZOBx5z4Ik1JC6EA1SjwVyOu1%2F2ltW3vfpnd6nYi9JeqmNgavXp2ReaEA3Ei00FJqy4roCX6ynkrFqUr%2B00lZftcxstwxt%2Bq53smKK2ZG0hsJYzNzjubkDPk6rRyw5xNkBhBIfsjH%2BhHfVtdWs4Y1xCpTbt5uu4g79NbONP%2BrKqzV%2Bhdwl56KagiE746D0xclUw1dBm3zyX1gxDb3pka2SVLrv3X6%2BzBLJ0KRkGA%2FAUvB1Y4JDDqQ5WLj%2B0evOXOI3HZzbVwB7GHak8UQbwLyS5%2FpFeSpGWjgXrA4duMF8R8LRfrQYb7OYJWAM4aiNAkOceB3RU65hSuaY%2FsloUFWQfmB4RbXbGw%2BqCWzivmxVRIVMMn6q8AGOqUBh4nqyHciLl24sBLwkYhH9OqpPQ6gaXdKM4gSTZf2%2BsfY0gP%2FgTRx6%2Fx8dLE1rwHYgLqRyu2%2BB5ijHpdC%2BzMphpSATdwJQLw8bqWdjjq%2BJW8uGetw8DDRgzomDrwp9yH9JWXENJYpf0JvxDiVKAyPz0BHOTooikN50xwFNzsOrmy3MP8v%2F3CXGmpc3r4CRm5s27SPrMPbRaWdlpIeECuM7SbhVD7x&X-Amz-Signature=fadd929afab8abf0b416fdea3c7d56514991aa5eaafefda087129e21db223f92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBASJDVS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGNvvFfo1rgHt3t5v3Dpe7DHnfW9usWHROCuY7eli50AIgEB2VfB3aT%2FTJJNpMQfGXaZ0knTfReVQUS7up00PG0Gsq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIno03BIroT6W9FNsSrcA1k%2BuXg3gKqrUe866i7TYG3NdrI1vUUkfwahwOfyIIlqtIopoIzMl0qIq3%2FHeJGu5C7HZOROaSXYuuZHj8AZtG00oWRGTNXFd%2BELmDdTb5YN6h6rczVlNgcukoQQqXMd%2Fffj4uPG%2B08BJEl9iX56hzn7%2BhmDfi8MynSuxXc2%2BvhBon%2BOgDt25bSDUmGuAbq4ti7tR%2FlAkhNWY9eiHZqcQ2b%2BKkusXHIRlrtWOTnl991EuRQO7W%2BIfXWUWlhajeHkd5X9S8XdEBfROwfWcBxI8%2B7PQ%2FjZdOVM1DlGofSLzXZkG8RMVhj8Q7ZEu8ngODmdh%2FEjSrm9IQioB4RY6d8yfXiLXBNJVsFv5LL0yN0CpkWr9f8DmlIF8po%2BKVQuSxzoKGR2ByzCys6SyyEqR2fDu%2FQ0vZvDuI6HGvGPYJcopnI7qYJuW2jmrQKPoILXlCVm61DbZ7PryRD%2FlObHbUAbwVknl1TWbBA5KBssTqg9Qu%2FwwiCCRl72V3C7J49BsAo1ll%2B%2F0QbiWrUMKXN7YH0Wy7wVDYxxmb3UPRZEaZ8RGulgis5S1hN%2F6cRmBHgFajGDFkMJ9BNlQfWHvrUS4Fd5I3ShploKWn0QpokyKeVDj9dppZdMTJlvcHU%2FGmQfMOmVrMAGOqUB2T25GtHnPf0J7QxaFCxIUtxtAlUt9Hxk5jTHnzTPD1NPwIP0UxctODZKtSrXB0wR3FqFH4fItnxYhrBOIGY3GZc7HItB2bg3WOTrq6OpmqtJsRaeprfybuL9TEdQFMCwmcRCl6vdWMqhqyNKX68Kshvi%2BipV7bBtkNwTjB9sdXC%2Fa9yvyFb86OrNR%2BvU48cnpOxhs%2FWGjxqzXI0pSgVM2GjRdUuG&X-Amz-Signature=c91fd1834074aa7dcb7b664106bea2b7c8f4b4fa9bdbbc2d8b14990bff8160ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
