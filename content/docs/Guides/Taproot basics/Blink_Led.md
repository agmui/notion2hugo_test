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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAKLOS7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtYryUFG5NK1ZNmbpNoXCkisOC7BhNuYrC5nhW3kQGvgIhAK1nXZpuHLfTZAMlqY0qriDshR4Osd%2BOJR3c%2FFeI8zz5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKyAlP9Z8NiTZS3LUq3AMGRdXErqpr6At15QU28XtfyestacYQsWg2d3erNWns9x4YMl%2BuUYncG1iCaStclYG%2BAxxywOMwZuCf1sgeHcCZLU8X09BtdSezH6gzTosQm6VgZ0cZw5cNN6CqdZ1dvwPlUBLTY8dumpdpMcFhFwUqE2LVB1ytZvlgUhOvKHrHKs1cInjgH5B7wHgkZ13tkaoMkUE8EldsiHux2JevIHku84qRynePU89ls%2FtjIXkStdkO8olVTK%2FedAVsE5Y0yBJH1oVMpzggoSGtxU7%2BqdTXVXGcR%2FHAU4D1vNeN9am01ssy14sPA4mHNnKPJbqb75llPDW2H8hIlKGkCNBw7z%2B32VNS2TkepHYWLfb54sxe1wkelVUafzhKkxTSz0OXWAQ1jnFL2Rmk3QgNW9NBdJgg8N3P4l%2BjBmoW%2FFs0HNwmRVGaowXsSYDsDHPyfnnV2LoVKv1JXCH8ZQbsoiXEgvsBXohlGqieOOaumRLx1aic5iIwuHSca4zLu2%2FLrF6jHet8ziLQbNt6zjj0W7OYuTcV86ee6zMFEjlderVlbdwpx%2BF7ADUtIflHAFUfZw0CxDWtk6aMo9ra8Z9nhmEQy3ZrMWIqZOsVLTt7sHSI4RzxFG75ruKheehG1IWE1TDV4%2FTABjqkAcDWLVTJt2CDtogIopGMGD4Q4rUtZvEUzB%2BLGUlhHQE6mvIGeDG7U5GS9WiQBwLabCK2%2BLOJcE1RnHYFtqsTaqNsQ2bCxyT%2FDEKoyBOEf%2FUuig37YYE1TUhuCYYZf%2BmfGWjZda0CNnF6dCf5NGNweqkj9tlyXcWl8ogf4ccmFi9GtClclgqN4K90ISm2E0ULFpsupNfO5%2FdQ9S%2B0o0YDPmGVi7CS&X-Amz-Signature=4f99fc1c54525cf6fe27c61dc245f6d969dbc3204828c6e2066b045d417b398c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFHZEPO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6A%2BG%2BSKCPATKH%2BUjcJutaFGTp%2BN75iUKH9kL8iUsG%2FAIgImHGpY6JVuzjXf5s4Lzw82RdUikbwkqRqB0GwBugWuQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEM2Yku%2BMtEb0jHaOyrcA7HsX2m6v6tkttCjAr7m1tDwYeHyjPkVNsGK0yvJY0fzBX%2BwHLpYXMKdDh3AdGZiaWsGOO3fqY4A3r3gOMakSgrRzMachvGtw3Fi61ZPpTtM4KfUKb9FVATb15ZHt5pIEIlGe4OJXemEU%2BZein8fBZZm4Z05pwh83J5nYXKkh1Vf9KZ4tCMxx%2B9flTANPxVJAO1Hb7oumcogb6nbJ0Gi9q07bSZGUQenj6hUea4q0jZePEXyB3eZ3Ok647lRdn7NtJskR035oSjUejyXcL0g8DQ6fLs2FLH4%2BpvEDMo%2BsuYNuL%2FrzYXEuBxcMQdSZcmAFG%2Boj8BL2IYS2SR5vVdcWjQtyQ7hg1n1H5izp3Ox6j%2FnyWXJWUq%2BQg0RHSk0MeBMEm9tPJqE2czPyBJ3oxDq%2BDe%2FFvWqYw%2FjWHINnLmHQuQOXJKZFYx4Iau9IlL%2FHhm4iChSL3xw22FOpcsqwgKFZX1rbeThOC%2Bz3CpuQkqm4Pod14dpiaFbEZe7yHOW8VxaVBDD7%2BuQ3zivosBV3gk9WAykiUBMIZpXfHfw3yMV9pHBbV8PDZAOHZb0oK%2FP%2FJ0d1wrkLrDMlZD1H3d25RUfKJ%2BU%2FYSegnH6PZMB7eHGl3Pnu5q6udaun1rPrl6%2FMKnj9MAGOqUBzf2suj3L%2BII0bDk8id2i%2BzQ5w94Tq9KI6fzcw%2BmTeEJzMIQxmUQgCdVmM6%2BEXghw0WFH4EkRqVb33Wtd%2FHf2FuXAcVOnKHM9sYKoUOEHq3m2XRaVjZSBC%2Ff4HlKcjIU%2BdjWXsb6pOSKNeXRGi8o1vOdqrquAXcANG14qbUtkzZj%2FNZaRGuTLCT9%2FOgI3iA3epQ3ww1XWkPXSxi%2BLNnO%2Fp%2B4cyaKK&X-Amz-Signature=009ceab6340096f7e0c56a513dc265e937d7dde30edaf026ff55ff8d59cf53b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
