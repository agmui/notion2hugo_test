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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YY7DDM%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHRjYOoip%2FLkXFZXJ0DFUF1ZC4cgjhaqqaToxSed4BR1AiEA9ihq2tUwmqloEVzr17YP4qWly9yunyPx2AZj72dZckkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDLEvZheyB3oEexwrircA%2BE%2B9vnfJDOoWVyKHJ%2BKiuVc2XInFku0X%2FqWTX7K6R1ZnDGqdTcJSEN18q6YLMZ14WIXcRg4IZYCxk1gS07PXUf51%2FIxihTldpK5WaXXl8ebrVUgcyYoCg8wI3unxR%2BzkeH0kT3CAQOSAk7rlse9%2BJ%2B0lye2EfOlB6EyCne5l8Sia6PLCMj%2F372V%2Fdf7XXRHK%2BJNTOI1JbeYbCadlSTrUh2%2FVC9k%2Ftoz0%2BLfCEMUq%2Bz2jJob3OhWileD0Qd7405gCo4qJ0vtKMAf1ZPzBHgug6S0NQkqNsqJqiScMzfHmLBPn5%2BUyUpeM4EyWXDslPOI8GmHe7oDIYDB61AycM766lEsKv3HMv9nEvOwGYo9qtV%2Br3HvLxr%2B7IuEfadJihSprbC0fgO8IOXgH2syvBhg%2BgIc2uNKOUqOVR9gI6plNkexg0Ob35%2Bw0QBk%2BM2oGd9E3w6rOVRmV339GQu48S6pAzQaO%2FMJj%2BlCjeQSISYZGPLWCsYYUdkJ28upSlDGSrgQKOPFnul02wUYBRII0Z7GthIrZNKH9eVCwWeFVZVXJXTKC8htqUx6WndX6W6j1ZGP0ZxETHcQH%2BzUu9xwRntllkSl%2BZbnx3yzPzTPieRlfGb%2FWxYsB3vzpO7%2BjIzrMOWMhsIGOqUBu4X%2FasMpzzO5%2F2yItVAJXRiKPuzzE%2Fe45GUgUTMBZa7fxSRqoVL6sqn5tjsaMZGzO4AvSeEPI0PvwVqih10%2FGWLV%2BQbZlVrOe7TDcQ8Lh%2FxcBOyB2Eq6N752QFOe%2Fve8gJ9kAYmMFxuNE5puu3PVIo2pqCgo099dDATvoufYb6daLpxOpVAjCaxz5PjbKVfHQjGE36dSQKRrJazquRFIlOsYZktr&X-Amz-Signature=ee30cb722f64f03697cc4d20c20799cb4e4785915dcc2db6e21ab282a697d8af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WA3SIGD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIA5C94AitiJgMXXEvsD5Uvqp7InI91XCaq2q53TJZURoAiEA05OzKN82ssRq5TQco3GPwuOllLSu2e1LpsS1Ahr3yMwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKq47EF3rlKnS4p8oircA7SQ0fQQLcm5CeZWOfDamEOzfxX0OoG6S0wsSzuWNKf9NUibGvVoGHbZ%2FrxSkBTz9OqiFuKjYjJkXyJyhISuZrmOdYn33okAupHK98KmQqugt0dNNvWjw3DaY1Ahdxf3inYYmUISN3tbRLtfCnOgCwP%2B8GgJNaam%2FpMLEZNMbIuW2R1knwiml5NccZqCrRzZmXsavhtsfI2qGD10WGQcUkhmGgrWb8x4JATkVUzhCEDi5q8z7iX390HMZkxxcq4H2veyWPeQ7aVd7VZuBM%2FZ5CPuuy%2FvyAdpjBILVWa1tTtjMB8OW2bEQpzttF%2BGu5HX5p%2BkghTQBKiWGuxkYY%2FXyqmYHgDVDn3Ow7RhtqWygaHIXrGuaoOvlKBVNRUzpCOGJ83r3WuvqPrZfY%2Bax1JacSPVQ2X1Zo1bIBOBEIZShiDBgb6RtZ0AkIhDItd3tK6x7dCyXZdi%2FpfIB7v4KLqpUAztnUNksTBUNvVuesysrn%2FSY8mmHXbvB0fsRrv1SwsPJP8KTKQlsb%2B7VnuP7bi1eZGkSpIgEFDwaTxkUb4ORQsECu6HIx64aQKFqcVXBEjXWSZc9YWglddNEnUsAEDvhZQCnYtUfQdVF9wYyj137RjtQ4BcUOn2A4MgLOSlMMSkhsIGOqUBUezykEKJAGTlyAPDCf%2FRXxBLdPxyidtqoe0fD2jN5rRu9bt9d5ksMQpCrHOJXRVwgO2zIWcu3MKmYoGZR4gtobHCgxV8s22Mrf7mY6WgGcNPE1TVm26%2FQD4BWbUS8TsuTBDmjo3Ce2lMOSRAJKnZg4LVz9PZxdWseyF5%2BH%2B9D2Hu%2Fj2hfYVaDkfGu90me5a1vCyF5J6PD04WIK0oPkekfvd36%2F4k&X-Amz-Signature=e01e4ffba86064439e833a4f609d0260e1a93dfddd04d52b645d72a1815b5f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
