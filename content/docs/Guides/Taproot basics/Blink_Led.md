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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4MS6JD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwEdXpcPYpDMMfDVOUrU0K4zN5eZYWRDVa%2Fk1DoR1uOAIhAIdf3G20UR0i7mvGFZiIjUy%2F3aiIpbAweWB%2FdPUzEmfmKv8DCCkQABoMNjM3NDIzMTgzODA1IgyAREs3R1qRu2vj1V4q3AMk6b9QGvTVjIr0nKQ%2FLwb6V%2BDtwDwj4Ap4u2xx9nOM3JTXGU5tc5DKDiwBggxrr5urrdkqVOwOpz0TxeeFGmGCCDVUW9pjDnE5qSd1rQEgcr2JCbmVJgGcO1WGzBZVi%2B5pMwcms4c6O6rxdPAYnIjeqQCEcJhDMlCPb27rYXQBUNad0LrQpsjPLCZKIjk8u6UXshCOJgvOdtIF4IdIFZwrVJQRGjR7RYMlMadxHFQWs7UtqInb3xJuzKGPfywd0rtgdCLCqhk8eXdQ%2F16wYvZs1NgCrgwC2nnJtYv5XU303cRRxeJuuFZanAjqVTJklbYGCTc1pdcJRZMV053%2Fh1m%2B7FIg95vABGdCl8vPdAVhksQJUOZN1A4XeeAVydjjyyg7jvRxh2f6VoHnd%2BeN4PEWJRCVyd53qs0PrghxLjM6EYcZccyQ5pIIn8D4W0xnGWa15HB2VaeQCYmS926rO6aO%2BE%2FYHeqi6OvGkXp3vqFVCswOL%2Fjx0tgXCRZ78OJRven%2FT62eV5mOqzsmmdW%2F2DGSx5mUPCnbaaLpsHXlDAwagKEum8kVHUr%2B%2FpdySlL8aHsZ5iDeWJ7QTWpPhR%2BJxFY8X%2FWs7oiDIb6MdXbJZukYszc5wM6Gjq%2Fp%2F9mFRzCu7Y6%2FBjqkAcSgkY3iaR3ysD6QG89V3QT7lgcEUN8Ti1XVITgjM1QKq0JW5wJWSAtMsQE0FDubuweTCWiJEeiwLjegMd8N2l9x%2FdTShrCt1G77TmC1Lfag6TvKyRz4pgTyegUipRWgDxCEnildpZA5OFrWkuCLz1XFxm4lv4%2BBU3E4nc2GLb4L7utaMt%2FI7hOFRT9bemvT4jrMTRvKwX80Zmh3WaPOoUq38SDl&X-Amz-Signature=0f3aecd6e842b781eea63f8fd83152dd40d46318ecca4b145a733bb9c80fba3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PLYP4J%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCq0dl%2FL2Y7V5m%2FhXRdPlvzxB51zPUB5t25DsNkvGxYAiB6kKZP5%2FyJRLORxd%2BwDQVFDdjIENIQid48%2BJItTC6RHir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMFEvL4AcS5RcjDgGbKtwDSc8hZGFPxG%2BP%2Bj5S5todjHb9vawuvd6HqpBsMITjLPn0ABsDPltNeLFHRIQqfwL9Cd7YaTabrUyiO306re99CJLj0Jj3dJ7vZIrom1y3uivrFG%2FZU7rW3xJo7ynhuc%2BobsNVM52Vf40CW8E7bYTiIwlSGqaETEAkXF4pB%2Bo6Q308Qe6NrirSPy2T6QNfYkeqpBsLwPyd8RLgk2i6thMzQjzD5XRH1T8rQx%2BOQG6OKrIBKJ0qXuM4Oe%2F%2B1MRw4EQ4ytbFGkIE3MEQfO%2F5lisfev%2FwZN3btbi0N%2BzvLxEAZs5LCiRHNtLMyT7VfKoj3OpLD8Z%2BFm9Nm0P%2B2UpAQkUlYMOzCTGvTRehybyV8TTeU87r9eawRkGuAJiFSc1N9%2FqPHcnOyJJzM6T86tx%2FcV9YlkwtqusE7XPCzZ5IvwKxnGhwM9xXUQQPJ9r8rpCzIoQRm0SLu0HUXDTeJJVOXj7f9aX7kNCcSDcAXLJgcGnv8tWS34R3UzsVd7QhGUbfF5nq%2FlOpi0rNIBv1%2FdoxGh%2FdFdLFxCz9Srly6wqYbJQOJtFqWqwhqoB9cH1sIBcan2iLM5CgjpkHc84P8Ug%2Fkuxu4D1VtTQbclFVbFxUaYxgB%2F%2F8flGvfie9ar72AZMwj%2BuOvwY6pgGe5BbTPaDt9bsA%2Bt%2FXd7CLdAjMVBv1W2BDn8UUFbTwoXJhF5OxsNLYuayok4djuLg5xhfh%2BNQZCfSubeT5B0o6rBi5mREW0WXzVKzOfaVAlVnAMQN1pfwyaIkQC%2FqBFxNhllcELP9tuyGScawPZ1zRG1SG%2BgdI00USrBzyRn8dqS01kLfFUunxGWyu6CNSQ%2B9rn3cZStlXaoeHz9dvWNOyJ7JNgE3%2F&X-Amz-Signature=19346341bc771139d22016ad8db4002711e329f95162bd040d029ac50db26af3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
