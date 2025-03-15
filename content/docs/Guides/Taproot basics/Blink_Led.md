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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NPCXOXA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bmy07Dnaf03nbLP7bU9rssTcb2ZgVeP6VlXM5E%2FomNAIhALg8GEK3ZH2YGKQZ9m50zTFReYzKkefDWGcOq0azD54fKv8DCBwQABoMNjM3NDIzMTgzODA1Igz5%2BjQpRQtsN%2BVx8t4q3AN80bYI2IrSPjZuP5YkSYzA3xpkazqTo%2BynINrOfNvuZwZ9lP0affXnO21EuBKYMrKFf58s%2B6lRNrSeZUZKqZf4%2BGQiJ8d3fcdwIL9onS7TR%2BwZagR5umUNHjNsopQUpMzKRUo9DgKf6LqFEBkHEG8NC1k3ZekxRYKx3x81P4XSwe8%2B0L0P%2BnVS0k7biA4lpUwJ4Vj%2FFWEuI%2F3qP1Y38C6VxT%2FVQQZZenKgSFvAg9g2pDD0yeJImE3BNyj6sL1z00%2BO3jTjqzQKwsPxlMiXTgQ9ZvO9wUGjZGOPYmnGD9PqifIRl2cyWbZQ8JSRTN0i7xsq2Ejy%2FnVtzBfvbvtRmI60ZEPPvtknWE4Y3qbdjK74n5XCIui4OAyPXxX2o6FVnkUJSs4e6iv5aCJvFa50KPYMhz27MeFXUbzgn3QNlcUkE4z0OWicMrZhsvkvvB42vVC6Oyg5hRqg8ih6%2BZ844rrjJGqLx0yPQb79tzc1h1gIcIq%2FLzx1ychZ4bkHiNtAzTJhc%2FoQmXTcU5cpDrDZqVQ5ZgzsrwlMt0cQW69yA5n5lAkHBodFAJL%2BKDMAxgwMm9XRSWyF%2BtYUSgG%2ByJ1gE1WZA78LOHEUBQJpNChrSSkfKiqUs3Tlpc06xYxp8jDojde%2BBjqkAWOCr8ikzR%2B2%2B%2B6%2BywbEPraecfq4HIhvcSEJl%2BV97Yu30IOQIbJD5rg5kZVeadQpU%2FkEBF3ubtmxK1Aa1hW%2BUZYM4l3y1EXXiIiBWfyupq%2F4q9gcFTmridwkYSPZ3v0jte%2B01ZZf9l3j8SsfZBMu%2FWMF0cGXYRSnOJQ6q%2BRygYkSrExcv%2FF8XQV3RRwNGPS5rzG6dvRQ7uFZ9rngYv%2BEcQ1BcQNU&X-Amz-Signature=f50c4d8e71211fc06a960dc788b5cfa694833a0ec72dde755924133170bd5523&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S3BBLFS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdkgHGAt6o76akVhLn6orK%2BjtqT7QIvR7I3Rj6pjLW9AiBTF37eFrZCFc%2BNyj5B6JKYRhFK%2BZ9sifFMGtLoP3rLZyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMX%2FiiOaf0fqcxJxsVKtwDW1HajLRhz0P8GSVHf8w9wB%2BafUbPMBb1%2BJg3K3r1NV9zxHtXwVmElzh%2BTFtlclHhH%2FJJWPjV0NKPSREsG%2BSK2QFzP4T3DzF%2BzCze5LP2VoHXQll5zbpmZy9Wo1kQLZUPmfLZS51AkDVxk4TmauuvK%2BML4HS0yxUwK%2B%2BUNuCipYouPe5bW8Q1LfRVRBLAh9NRCBFrLOEMFRwVg7HiEIyJenkmWI9VWhQJ5JM%2FlVPqp2Rdhejo0E0ndUKrlA9cr0jmC251GkC2PvVIB5wV2kE3aSoTZjIEk4%2Fw8We4JDjDX8lgEb19wcAwM%2F4S9d3aWimuMufHrhTr7eIcr%2BAeta%2B4u9iP4HHM6difnRKoua%2BekSqoRBqBrGFDHyWxSM6sFReFL52vmSs%2BntwiIPpZFnKzGUZPihN%2BYL4DcHpadqOue%2FNxWKzjnNypLd1x%2FQeZKu5fmRKk7lBZ0c%2B2BT94nEoZon9RNHzaMwYmewAFIVHearYBoKwQ8zwwoK%2BT4CyCHv%2BuMaIZOr5lHrNpEkg3E2wGjKSYjlF6CKKlTVYwODxlUFzq%2FbAeopgGm1vwnPEfyo71LVZd%2BCgBmkGKyTS2JsaiHKocwIrTn%2BrH1fX50irS238jSMVNdLNvAGKpmQEwkY7XvgY6pgEjB%2BWQ8WqzY58ln3uUYm%2BkYqY0Zx5%2FUgqXFi7JBH%2FFYOJ3iYDEX9Yt%2ByAdxHEUQ0nGhq1JBum6IaAt10OlPh3qpIfh5LJ%2BmronSZHv17AFpFBSO%2BQAO9tWv5P9E6geiOXJ7D3ZEHMYs1jm43Qo7Ty69w4HazLd4zFcAyXePyBjGv2FW6nJH9xHtPKzEuEbBs%2FsjwATBkaDtKCwXgk8QFY9j0K43%2Bdw&X-Amz-Signature=0efd823f920e0184ed21ea80ac2355573f63ff2583ee85bdb3490bcf89465226&X-Amz-SignedHeaders=host&x-id=GetObject)

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
