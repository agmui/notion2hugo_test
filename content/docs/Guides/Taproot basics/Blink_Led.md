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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSKJOJS%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCsAA%2Frd2sEPx11HY3DaV622veGmAv9l7RGIDe%2FresHWwIgLH6VhC%2BKxJq8mU2YshyDXOevJ2N4H0NIEM9ak5S4W9cqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuYiKIi7V0IshusVyrcAxUqpcOb79lU28Dm035OsDutPokAl5O3h9CwhuhTFLO2WWHoanaXjpsmsE0VxBpJvr8uGVccf4VLPQ7CJ%2F%2BNLtRkpgc5Y%2FiHUIcI0a0AHWfAf5oaJyFHWpME6PnMjBKfh7x9GDBSneS6GFFOschrcURXaqkaNzYWuHOzjv5ziUU7HVVWhw7y%2BARHdP5bx8OyxPDRY0LZcau7Z%2BKNH1ebqWEvRXFiulGvB2bRzwY4cdhZjaZlUhnZX2o5zAsSmrDry9LveSUZPOkD8houFIZBdPV79H%2BXGTndtlXj2skvJD1Zcoz7TfqpgVOED9M8OKPfjKH52m9asnQp%2Fdxp8%2FP9LYecZr2aknlNw5qYWi70DcklqUlgQl2Oc5JZISvG5D4tJQxEtTYl3d0zwJzf8ky3jUtKDsaPUhj8v4ju3h9joIzuJpY6kAOFiQOVRSXGCkCDq47trbNbfszDRYfx1MFceMojFRdAPHQxvwL%2B2nrOI9olWhn5gZhpoeautt9ZB58u4lYNNnh6YIRtPwsyktaYiSuZw7EyY3ZrogtC3uzUrhRKCzXh8ynaUkbVNKDeW7vHoVDyOlR%2FHBvBWMqbm6dCVbO%2FQbIaXEi5dvXJxs%2BshSDDe%2BE79o4JQr9Wu7VyML%2BGnb0GOqUBRz2fSJ%2FgNzTYgYyRuzooIZqOdMkIjHP4vPxVc%2FPEw7OhC%2Bk5jhCXfVW0TsWwbJuRlnTNMt5w49CPHyaGncy7EkYxSk6iz8FP4CE2OKm74mJP%2FF13AVl0U4dCuwtZPofEfQfBtjQdUB%2BtU5pzSE1bABlKE6XWu6N2AwCJSTab05Y7%2BEgsYW0fxdoRhZab15UoxmEjt%2BIe%2B58x%2BsuVloN1NjMOK73x&X-Amz-Signature=b37804200eb34d59a5f64ef3c645fec4ff2f644f5360d37076c24514c70ea178&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN7STHO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDPbgWcnBhz7PwBTOsb%2Faql2TeeqJoh3dALe1TbicRJqQIhAOUN569XDcfq2I38q6s8orUVLkKhNVzn8pyyH8f2QIUBKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwITkyQ3QKG7kqBJKcq3AMdFCodagoR4Y9GAr3hu5bU81U1mwqU0uZBYqkjn1JpvZvT9rKr9oXwE0Cgql2w0AHn4rHyie5n7LpA8YoGsJZ7tXixrlFMPwAp7JHjUyJO23iw1ZT9fgVxxM4v1b9jUF3DDERpisy1f8U9bXzStDV3%2BiKkB5zjox2t77fZRXvwpEmVxwOMqpBOQA5n2h8zc%2BrDaqP6qaVg5IKWS9vd89%2Fq6NpORxYz0nBIzXSGZXpvtzUs%2FRw%2FVFiujS3Xsxk%2BAtHQYhfghpalWE1%2B0CZVD22vQbXceAdmT8QPiwy3MrOpLqfCIjh3VQCoC3jP7o2bBlgl1uX%2Bl6OLIjJhc7H9QBQf4y7wAOAeVeRgupbg13UrhHmMDDze9lIxspFR0gvkLx1Pa414kaSUczSxtsfzy1RIJ5%2BUV3yUQ8vJFS49cLhq2H9M3aQV3Ov9Kbd%2Fl2ozjFzjF1IPGNiVmwj6FlKjwpVxrV2p1JpqODu5dglUK2ANaNyMI%2FaoWhWBx71nNu%2BkaJs0ykN%2FTZ0ZC69z7hUOwQZCqLN9yx48KRIhywTN8TcGYWiwPU2nL8tT8CnMsHzu34M%2BpIRm8E7CvkstoU%2Fh3nLk919oK0lc8M8aAgPAqQLg6NtzSpnUXD2Vqu1HZzD6hp29BjqkAUmRuOl4VhRSxO%2FWG3%2BWaCeIKcAFOKOV133tn%2FfxNkUAv8SVgOLpmQOP9aYtzxPlMvfxX9Qa53%2BQ8FvC7daawMlMjZqWvBr0kx4LS%2Frcj5sbR4jnkAJhjj4jSSLNoAx7715QaAwF9Sg%2Fv8E2kvofmj3kVYnu7Vtmz05sIMMjtE7iy93S56TFuZNRmsNAozU5qTNIUs879cA4NkM69BU%2ByVdumX7V&X-Amz-Signature=8c20c2519a49e5f98b86796b888c897fbeb9ba92fbc471119e7f8f3d4c3c12ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
