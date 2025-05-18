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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37MQDUL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwmaodbTg7SJdKJnwhaG3dAht%2F0T3zRd%2FNPRsmhFegtAIhANGoWGpMoVpbiQ2B4%2Bccelv66frhEOlJfUM%2F9jiYFV1eKv8DCHsQABoMNjM3NDIzMTgzODA1Igw7Dv6vVdb0t%2B8keYYq3AOJEuYZCCiJCFk7n%2F6%2BlALXRGSyk%2BKf%2F3GDbASNaxtluoArb1DT%2B7GRSYwxdw7NTxo%2BvaFzm0s%2BIYiWoD2G%2BB67JabZHcPzrRgs%2FsmplXdJFFnrow6GvrGKG66%2BL2L7fp0%2BE52h4yEN42sm4CCHRc3HY%2FUbeGSXZVIEVoB9rhoqWjBdjmO6e4urQkFx0hBX7vUur1l9eXKj5XnPKqt%2FfmnrT4Jd161XGDova%2FwBlBeCbz5Qvs6AOlsOSJPoQbIO7TNZKllfR5SUee5KSqLnkrVzckg%2FQ%2BG9%2F2Q5%2FRPLxNwmtViBd4Q%2F29feemo6SsQSvrDqIivnPdISjMjwSoRigLC0B%2BEOzkOUYI1wh%2BThxkCAwwSOy22f4MME21GMCwz0yGbgi0Uu7QG7M92pw4MZazpIa6oOLusV87CsANQgvSYlAy8X6qZCdUPgAHrfHxJT0xdVOqQTDYJYLMYVd8fei7LOL6ff8hYnSRlSLuiIJjJwgcUaNJHOtHX0IO0bRwtdtYVs5VRH6X1jTB7dQhsbPlVMOqeWs0l3azTBD4Q8JAu5sruNdjcfH6Zd8JE%2FzVLYk5mT2wsDSYnXZGFkNX%2BVuGArWtQSXxFvusI6n4fW0JWhghaUqmKTRL7bi8zxJjDgwajBBjqkAU5Y6062jpF8Kev4pA4WOuK45C8lGN8OG4L2YHr6iLfXQEvePF%2FW%2B0DusjHxWQbZCBiaqqJtej2Dfa9sqHMfzCY5761rnkNd5PatMFLRXq631xQP2yddg37ihzKYCsU7qXGkRAct3Dhb8YHZqaepn2U4O48GwmQSUf4f0Qtuvk9r0XM2pr8H9MyXaJNK0eP%2Bc8xfSzFGo8EtoTi7jAxHOtPxWJ8c&X-Amz-Signature=fafc0365026518cfe959699d1cc37f300e40cdffc3e1526e7592f7f7b5055607&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQ5CG2T%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFqTuay0uTiYRA5zFwn09ByHEA6y07iPAxP8jyj%2BoQCAIhAMi6vHVD4oeDZ1Hkyz3%2Fb%2FAnYE0NtlFFLy9EdeO6W0IxKv8DCHsQABoMNjM3NDIzMTgzODA1IgzKV%2Bw0isZinAvkV50q3APCvoXBqlFU%2F2fO4jtC5dmvmd5L2aRYEJBS7fJLQUsfZn78xcHs5cgcNn3j9QQKUTbLN0I2EGkWDt6k1QAbnyoXNgHmkQTabRUOIyIINojM1HEQy%2FJF2yQ94oI%2Fy4s7I1A3mkEz%2FjcnJmI%2FHiV8ihAr8JJdmaQ0zMX7msJ7TL1ti1wC%2FM8BpXNt0x9Gh%2FETUfD8ucavGyuC9V9E1AKGtLoava8FzEtFG0Kf0dWzlBqxHsveMYoUIJopfmjnXM6CgxCPAL0IybO%2Boasi3mvUPdl4%2B0ase5XHCtJdkP4NOFqVQXm4c1pZpOErLoAyji8Pb6uY%2Bx1Fhfpq0c9opcE7YyLx15qzBX%2FSB3pKjaTqM%2BzzgyHsRnP0rXCugY5WF7ZynBJKBmx1u1Hxrn%2FI6WbYplHgP7I51k7sRcZud0wXkvEsXm64GCO%2FXwQtOD%2Fg2EpGDh3cYK6SOodyw7JQM2LH7knFLlYl%2FXiXBE3cxfcXt1%2BcTclDUnAXWAEFVq42NagQTiDnFEy7JWhkFihD%2BSr12AenqzfE9ZO7vxeoQxQyLRJ4vKwdrhWwzns57tipaCCwhDy01Bgld4ZmuQQj%2FUZWzogxA%2FjHmtn3lIrFrbt7MABG3Ed2qu%2F3MVmuTacKvzDUwajBBjqkAVlVQqhkoI9XskYCcQ9yHth0OhS8j8kX8yEWjKcJ1cQnrLcSUYyPrX7IWMuK5%2BfCT%2FKVyadPSPUcjV8P8O1uRu61Be3Qheb%2BT%2BZo3S1t9ZMFBagS2NB8C6pLsnEc%2Fi8KXi40diz4LthUMdW98uzXC5m4BEYG6%2FwGLFjuTMbCQRMvGIsu43PDCTy3v%2BagnZGZq5aXpEUw2WtO0D6SiMkqayD%2BIhkV&X-Amz-Signature=01a49ebf94afdd5aaf35466388b9473e958f37f54c9277ddc49bca4b2ae4a60a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
