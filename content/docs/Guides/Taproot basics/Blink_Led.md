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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZQRKPJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCactfCrhnHc%2FfnjMaFGwwkXBEM0T32iH6iEIgNONaAlQIgMEOXyURqFURwbwyzqE7PXK5AoeeGiLxUSA92YPX7%2B9AqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgsM1SwFk9RrCMwFCrcA4xTDSR2ucXBpr7AuA1J2UWqyxJWdyeqjmzSVsuaxKQBs1Z6e7yc5Biu2cGYDIvAYlceFaaxQNlKKQsY1Cdebr9k0%2Btpi0Hb25Msvgzu0F7VXX9bAyBnhOIjcA5yZGFHWBO8zHX%2BtsDNOF6bAXzdoFTdRGtv0C3GWPhHS17JE5CVXe81TKPJRcX%2B1IlbJQNp7P8HghegitpOD8clRB0opfbCO3mfgLZ1C1ef7u3u9yZPVYYv5GRIkeNTmdQsnJtt0IOBWsmS0Ie%2B4sMNo6oxNc2K2i%2Bwq634Pwky6aX6CuJeHQkIXhAMv3lxbANvpoQdua0KsGuyz7UAOCmP40uPA4siqrfnfaF53qxZwfTm7%2Bqq%2Fh7z0hWVbSDFb0GSmvYKc%2BWaSu5Tzr%2Ft8EtSZ%2BSpt5togCBfKbxveka0nwqcnfAg%2BKb1QpExc2qLgRZlZ277SLICeOtEdhk4DnS9Xf9kAPAxynH74e8tlvmfZmH2qYIpBl0qZO6RqVQsaaqQu9nNrTfERLZrvw9zBVUnrCHLiP8NjwvWBW0M1hOpKsUkhiMbjDqMMWJmurDDXqNpe8b3qXNEvtOt3NBhrJ8RM9JKBj%2FBjDoj15INWPwUjtXEdkS%2Ba12zDSP1pYkuEz1DMJ%2F9yMMGOqUBHUYmEcWKhmiGxCzMpmlcGOV8NRehVctFOLonqkR5cT017ehaRyApQ8npO%2F7sEfbJTp7lMC0RBnMZ8O7iutsRflRuDqlHNXBq49T%2Fig7P%2Fqh7kSpvIM5o%2FZ2nkNfqQih078hZvndqyQp2I%2F%2F4KItrLauDqy09%2F0V%2BZVvW6FjXb0oUyqTeSSjCI974Vhg1YM3N3WJ30rGEZHZJgsu3BENdHJI%2FV68L&X-Amz-Signature=36fb2228cf3f1ba03989a43a7fedada80a9d0b9a63f5c539762b4fef18b0a9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWSVLYR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkAQL2MCJMW1%2BgzTA62ITdH%2FT6QveaEj%2F%2Fghqmws41eAiEAp0ZqWrqe5%2FOZoAa0Rpjyw%2BZNVv%2FJes4bV7KloljbeVUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6fLBPQArdP5%2ByDiircAzUdrCCPMYWq5cx2HQ4FSPBjyZFzR81ni1zelUlJjAioDg4INnG6VVZkVApgvRRN3g6qcNyI1SdBqWe%2FnQIN8QlsdMmHylyQqamsRb%2FarlGR0E6Z46VbbrF%2BV7H3ZWIW8%2BaIQfOokKCV421wtUH4Sz3YqIAqEs5kPdscBIS%2B2maeGUwLPlwUd3eC9NY5TFm0RhYVM6jehZ2eptnxWxHVzIb0wyvHxpiG4vJDeKF1dZmOq7NYXByo7kPKgDBNLchw%2BmBEDsIIxdwCobaat47rpO2%2FTWfIAP%2BUa6p9TLU9VUmYMlDkbSWZxVeCkjwSbT2yNE%2B%2BbMxLMrWTdva5oBRbvngIJzHEIfonZsYlNzTBkLGWpkvT1qbFbmhovbsiQRfCbhZPkRRKqbIfN9A4PjB5R9o2dZQGdtZBvdVFLRhvWFakxn8wSoUD5KrfOIGxVBsIfiD%2BhlWpOBacJdpstFSD%2Fn9hXqcoAFK9qZKhKGpEUzojd%2Bn1Az21wDD7g3BDnfSUrGz21%2FK%2Fl7rEN8Jfk0SIKsBafU0gW9sgAZXgTFXdsRSFJsIf1vvHnrJjStwmXIBbQaTdTHiwi8jEr0vFg1T1kVkzR0NigzpqoitJaeKlbKTdVYLFhQmU2%2Bt8SSO2MJv9yMMGOqUBJbogRDq0IjaKUqiiNdMCQI0RJXOt9UgcXyQU9kQHbTaeMDYbmhiNyijwkMd6TnmaoMuZuhIYlP%2F4wsAUt8n8fkFpIWKd9WLD9P%2Fwty8e9OhZ6GP152fgZURHGziwQemAgyTo66klbKOgh%2FeuyJoY7kdHbJprIL5%2BDT6F9X%2BEkZTcwymxM25lhlcM4jjWILJVPbgh3uUOmj1ljBQYhy4CgLbszdZJ&X-Amz-Signature=8ae446695b5a604dbabeca7e12e949f9fa7e2d971dda209afbb72a270cf26ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
