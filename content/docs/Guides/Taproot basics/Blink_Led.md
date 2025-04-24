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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTXQZX3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4skongnZxnNrm3xPRDt2nAyLJHB6CwtxD1RLhEO9MMAIhAJE2I8N4Ra8Y0UWPgl%2FvZ6RpxsW0AFK3Jxl9r%2B9rgxisKv8DCBwQABoMNjM3NDIzMTgzODA1IgxFL0Z3bWMBp3lpGgIq3AMfw8BhtdLLd8srN3KQGLhpHBhIyq1wbmgxeFXX%2Bw8%2BOfDOsli6mj0GOSMiPfbcS1B55EmLP85bpsiTWHnyI65%2Bts2B3zg6F6ZmqXvb4dCtat1ivd3%2FOZlvFE8Gf7sMomwfivLoUGQRpJbL7Ua016CSdcoPMPD2AQmWo%2BCtiv%2F%2Fjcw0mhuwGajTDM3fu4iS6JCOSlRgHkqbqHWlzN04UShL3fhYK1%2FQAJznVKNW5RYoTkAzof7phW7G0tq99EwVS%2BOtYe%2BUEpyTPYgvAguSplx28w2mIcUHU160GAQhm6NZ%2Fo3UZ%2F%2BflL%2BTn%2Bo4Tqcpt0zuftLgXOHoK1UPmM7iCyO4FYvzZdUglBNFzMcb7XN6ofUCr7h68wv979FgmmHw7SAkGzohUaTAWXJ6G4w3N7SI2lYSpohCYUwi%2B8Apugdo3klhJyE4o7Jim%2FyoKFPgWaxfYjZ%2BETa9CcLOSNDV6CYHvdhtbEh0DHtnpmMv8SazlS8u9IoWVpsyKrYngI8luP496o8ZrJQ1xGAUQ4dX%2B%2B5ZTAxkDOHVlDu5hQkhyJmeZu9%2B4FwDRCVFkiZyiDIBX6gFFavrimUbAZjhJoPBhIGNPnRyL%2Bw3qTMOpZ6QrN7J47Zd%2BHjg%2FctGOyPscDC4iarABjqkAfJFTlZ16C4GYncc3bOfr0EdSqSMdtvqvXv93Elwje%2BYbLRvOn%2BOtEThhi3zxFrJNp8R01wT4IZo3m7qSxe7oPtb7eDEgkSXyKsiHtldgOdDYn7VdJerjOkslOM1A3kaURPxRHOWnTEkKYxUjC7ErA9lNtDWE%2FoAQwDPMs2lgE5GP5h2FZdbEXPhAMLVaW0WU6Rt5pXr8Ki0Xs6n7YpAjaE%2BIqkP&X-Amz-Signature=d553ed400a8526410609daea94332464c9373d3e23d77941d6321a20a71ac63d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SZZ5E7E%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8zZH%2FUMIny7y3bY5v6vak31pYdwGRwG3eaKVXO4okyAiA23YPNonJ2CREJ3y%2F6zvtn4Ixh9NBtum1N7AhlpiRP7yr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMbAfG8DcH7QclorjAKtwDIMxLDyTOkW%2BsulClqFvD1ClTkW4KHXSmq08%2BBUjXfCve2iskuU9UkA3Ti9vkzd0oGUcC%2FkyfFSJyl%2Bz1aD136FV%2BwpdWhONXmjFK393OHgF5KUDreImWVyl4EcNoE4bWSJeZ%2BV%2FwavuoL0Z0lm1OqGYAO36n2asoVyBsda3rFL%2BGjlqrqRLN5TU0MH9dYk05bPZW%2FLer5PDvQvHL9pF6qZLTW6XHuip0YQUgYhsZlzks%2BvxVXk0EHYWK4wSD0mDLbi%2BJLUKMntvl4kOPFe2pK9maQKxcOsKcAnofoF1XcSj1h5dcgV9S5eaUgVfJ7tgfoO90F613%2BGt%2BowQN3j30f%2FaZIBecxj%2FmAQbCG3%2BM3%2BbdYmJSZNjc%2F8no0srn0umVdPl5aOO%2FObnwjXZDmKUfHZ5gqsLgx4Kf6U%2B4925nHfrkPYP3xH1L0nktTtaHC%2FLoRTFq8XiPjpdmqLJ9K%2FAkuFpyyNjTovqdi24m%2Ft9q%2B7nI%2FHi8uN36gAOR%2Bxp3TKoynO3OFTjD5m1sSFSX7%2FzuG6m2doMLQZPGmGitKBdix%2F7WVp3gFdX1BkoCoX7qj2tjdgVR82DeaaxFUzzMs1xc%2Fttt5h2B3bj491l%2BkbyVdSfex4%2B%2FSLMnXiNDTzEwyoqqwAY6pgFdAUGOz7xvNu04%2FSG8hla89cLSzwOkU%2B01ByAvI95FweD9e52Wc%2BCAucHjvm6le91%2BhxFyJF%2F1lv6OHl3BkTLegp%2F7TQsTXdNoQESStbJRA%2B%2FIUUcF%2F4TEmdZnV%2FgGI8RWHNzKU6veVPSZaIlnjHnAIDhBQJHfDax4cwAKTNLIB7Q6GO2PskDPVdfyIpixG6gxKJNOpS7B31%2BVRXAOrwchP9MbTqN%2F&X-Amz-Signature=08a64c56167106ec73cb715f2d4409bd35d4c10243b0a4187087f3367d4df79b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
