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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYFSFHVP%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMjXAonCZQ%2BvwMZtQrJseOhj8nTjVpE5yCP5UrtCrNSAiAZYKXGpGtKiCNiYeTEOrR1hYVp8rH7cVX%2FNuC7S1criSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYQv3YGNYI1FDe3CSKtwDpmAS2gL8Yju4ZxgdXcPXdmc4XCOFup7k18ZqxZ6CzjxnOi%2BmSCQgx3%2FXfP1KQgEJhW%2BNkVyJJI08yJkvuWKlptvBrPrBm3JhHI9Z5FRLzy%2B9fnZDvz1YEbygvKZ6XQVjp02KXcB9KfYQxs2gCjH7J9ZiiQ6M6TafYHIaEAQky5GQteSr8Zpih%2BrmarDJ0o16PnxNTPzwDvwmA0xr4ERIde8%2FFVSjfzuGO7z7v%2BBIOTknNRQxWkIg0uo%2B5aYNYcZe0dKYKvInkB5ZQ8%2FjTWFoq5YlEXC3vWjtc%2BctI2oCgf2SZt5FG%2B8geix8H%2BRYcTCPEzzzLhY7qmJbIEAKVtWHnTlOWQEvug7NTy2xiMDaawSpbgNdit01l%2FSAZS1YRswYji7u54%2FdilCD0TRDQB1WdKaqMIwUFGOnrxboOqHPvpajr7XvKjB0ExAByfJF7H4iq3SD8qN3UWwaUPzJ5FKepNyHgt9RihFDspDsvbdC3YN83cGdKmhvBKJNXHtVlT16c4JNU5aJAo9VF3sOykXQ5R9DWgEk2bU0NWvG674rvFWmdXy%2BiWwY%2F4vDAOq7zrmM9QJKiQj7x%2BjmX%2B4K8J%2FXJITQQT4A9oRBi7xugfOsg5SempiFk0jEgRJprd0wv7%2BY0QY6pgEJ6b5gXkrz%2BTr%2F8ttPhRY%2BJJtFvO%2BlD3z2pEvQ6vl7chivamYT3mS%2FasTaT6iRZjgk2hCdKKZl1qOsMhRAQRwJt1FWhHHKf2bdngJTdnox70OBotyo%2B69GTVe9IqADMv70Nd0NIMGd1WkEYJULoIJKT5k6abusHp%2Fdm6gue42%2B3Kc%2B8lZ%2Be%2FIiLLwXrifdYL0XsZcmqUZqDN2PqDZ4lxRtvfQ2MXS%2F&X-Amz-Signature=f1b3f412a354001952a7c66e04d65076b8059c9b513b57cc8058732c169f0ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDZXRRTP%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4%2BZy3i%2BpysgZRf23cdRq6wHc4nka0%2F8tSO9FPtaAiNQIgSUA3lt7k2TOnXme%2BlnhVmOc3xfx5mqPHKidTC6bSWI0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHlAElaJTY28y1U0yrcA5tBBytrldwUoOKM7%2BYIYszkuVC6%2F51p635mtJI8GlejtJxlRrzH8j4tQ8nJkkz3V3JqCVwarbTpIRc%2F5mKK0Y16pU92qHQhjL7OgUGhdd87MLvFESRhjOTay1oMCLoGTt%2F%2FvRD6fkPUhUqScfG4o%2BnAnERcWQ4OGlYeLRiKsrYMLjdmuyPs8pQ%2BQGPy0IeyljjdE4ntT0mP9GqYy9nuQLeoZSFSCax95x%2Bontf9dlNAEtdEcXzqrpik4KBEzOnFYQrzymIlsC4eyHyortrz1kxH07szob8AjPuZuQ5R4MdI2JfBk%2Fq50UlKBNa8A%2BPpYsv2qOr7tKUe9dICF6ZLV5l6xPoYU0dzpHrF6kU1vshUGqcICIkAwefPzq6fGDohr8c5jTYgr0SXbB3xOIvIL6uS21hF9Kz%2FMXSrqwHQhgNjsuu9N4YPH41OaXUQWIeUD3VGtGvd4o%2FN%2FwwthM8x%2BsDrCi4q11kCJRqnOwKG4iK2XdGvIZMyf%2BndRl923wRkzL5lUzsRP8J4Rx5k4wvyoph2FpkVdg02Ge8ocOa0zv8U9gUdv1dw3YAhOlEWEL2MeIO4%2B8i1yFkSUfcCumnXHZzjJplsSoe%2BpYX5hysKPlJlbrhfJZHtG4MgdRMoMLfAmNEGOqUBhSeGfuZjs8sCOlGmEvEt%2Fso3JxOvbxNeOS41UI79k9ON4MBpgVXC8kAnO6ERS2M%2BcNR3j7PqPJHptJkNbXJYBK22u4l0O0rjbOfS5fhZY9UkVhVne1eZH2JOrFqLut6ddBRu6DfgK0UC1V3XvBG1v4ujgWDQD%2FBItvbTMiBXRUWetdQIsLsotOL6q%2F%2BW9YYIF37umJdPKm3RoORbNQN3Br8D52aU&X-Amz-Signature=5c7d52c7158724b98fb99c0b24a3ed83c97e596ae8bfecd57301cc1f65b03d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
