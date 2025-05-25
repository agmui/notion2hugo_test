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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4EPU4YW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQC%2BrGRGBKQQiLefLX05rKYKw497SCL5Muc3GC8b81%2BqBgIhAMlP13May9OXcsPPnO9VCh%2BOPvzzxodZoaOs8ctMsibwKv8DCCwQABoMNjM3NDIzMTgzODA1Igxs%2BzqGnFOZegwa%2BLAq3AN9de0xFVDyJJ5%2FTMs36Ot1EhBeWCkN1GSujW1JkhX%2Fqtms%2Fy7QIwE2f144GJL9YW1dZ%2F0b9QDA8N7vV5lMIb%2BLBkqKNHKIgn%2FyHaGrroRiGgTDHBsEHpD8TBGgiGYGqz9uEOqJrT%2F%2BdejxqNm8%2FK2RzLkpYkZsCLQqwV1ETJlPa0wnyyfZ0LrqY%2FKT85faKbu7%2FHOc9e8caAdKb6ImWpJUy6SXRcmUjeeIj9Au%2Bo3rfCIQG1V3Sk7fuJU3BN%2FvFO%2Bzd8QEME9Zd3X2RXkNkZYfW4uaYVJenGKdlH6Qx36NzcezGhWc7GdMj9vRmdsc8AO1RDQMgSOE3FK%2BBBfuOw4yWhf1qp6XbYhIGhamIRICOjj4%2FA%2FLbj3bx5XIhkpxg4OzRh2U7LD4boF4%2FeJMv%2B2vi8RaVslRu6diXEqddpit9lWe0Hp4gbTB1aMhr%2BpI1N2TlqfUUVIUM8euev0K14OG6kdoHVckNT40qA3ENfdfSDMFEYlY%2Fi%2BS57bqcdxcJy8wPiSjGa6LCIjOEqZ6WGCXXtknZQ0oTFgfGja9PmTywDgXDP3iui5vz%2Brp14dFPZmrfxTu7xzseQDW3hFiVZnE%2BKHulvLdMGih%2BXNsDQ%2F2sc%2BtzpPhPhAlRznrWDCu58vBBjqkASNM3hX4yp5u4wo84JNdsaqssfLwlDI7CTvMW9rzgkitKg2JX6GlKrFJ6z99Vc8vOqdWW%2BzNMu5RvsOrL5CwPzoFFHXfXxqenibwuDtTm8CvC0k3h9dx2PAPKhwNewWABeUZsR1Q3V6FxWdIzDagbaIz4m9cNzroRDqFzzcZy6yIkoR4IT1ef6NWSCO9B4qNnD%2Fsf9iTx583MOiKvr5ul5AVyD77&X-Amz-Signature=2b0c7ce850aa7c598f6570f23dc29c198435adea7b20ba6b32cf290a33bc139d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNJEPEBJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDNcr7l0Efld9FCG1PgV6FNLT6fLT8ooBQO4%2FuBB18klwIhANUYeFfcKr0tzfcgzZehoQq1ehOc9FZ2KGMWelLMOV29Kv8DCCwQABoMNjM3NDIzMTgzODA1Igzhu3J%2BL03wP9pUDPEq3APepQLlJUMDsHrzrM59U8neOTjY5YkmftP2m8fIXPTYmzwa1rjuUrxrkshtgYXGTzldhuT68QB2TC653PJ8yYoEi1e86wA0eyjnUzqFBGJRY6RlwbeDFW%2FYXL0PSFgVe07J%2FbM%2Ba1two0KpD2CtXFTg0aQv1m9dFkifc2ij%2BkAMoMmdWnYrGN3F8ItF7Cw%2FEgt1TKscvLgL7qXMKRr4DzEvEFc%2B%2BuuQVCrykpqk4n3m9ztXH%2FT821nZ33JKC049egqjR58YjsS2bRGdUizrRQM0l2%2BucTpVjA6knnHypOBUQqhypO4Im5CNkVxqNmzO4bh%2Fcf1EV7kUg5%2BGWt%2FvfqAjz9%2FKj2K5xmQifs%2FxYgY1jXm%2BKibMzpVNxFWK9%2FQg35eRvHKulGDNCfiuQZqo2tD3P%2F3Fsrsar%2FCJB1%2FMu4F8fTENO9SigzGUZQcAno3Kn3kkegnQB6TSLW0vDe24BS5dqIsQpvCEUK8EoTkfbLad2P1QqfOU4izfu%2BVQ9RVAjkS%2F7XAbOU79J%2BmtFzkR%2FOf6XalTR6rHtZrAqj%2BtUfRPzDyzjP4cwz1UeiYOYnCGuZfkgqkp32nzFkVzkPQFMHUU0jZlPu1JtrAJgxfxAKaWOghBDEp6AkebeWjekzDb9MvBBjqkAUzf7QMXEoAFL8h8wCC3tAcGD693dBf3DB5kvqbyZRsjud5lIix9knjIALlkktUmpakDyORt8w2YFaPnUIdj%2B%2Fa3X4Iwg4nzZBQyq7NMTld2y0iPAkyD5xYFJdqHiM1c6IfhpnttG46vtLliZFl3HyP%2BMgtmEj3q%2BHL1VTbUgsUxiIYIrn5GCX1gF9siE%2BOTQJdsNPUIzNPeItMAoxV6xOAjz3i9&X-Amz-Signature=9b2c817f03b76310fa4d6452b8cd83fe2df0c5ee7fb493823c565d1630364b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
