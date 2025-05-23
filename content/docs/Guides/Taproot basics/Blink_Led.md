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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB45IZLG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICs%2FgyPxIxroSJFnLCl0s%2BawO23mvkAqmDoc6btzjPa2AiAMzszo4QGT%2B4cnz7iQKmc3t7TspV%2BYrIk6eJqhoBDYJyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKA3TCTsScQvW6glFKtwDdP5AOnj6cSHgh0I6jx4hMRxII4pem9213CRQiOfj1wirhYFr6zZ2MHbo6%2FIzOtuEcnsBnmghndMAYDbx1f6aZE2E0FRMnV3ehueEb0H9QRsUo%2FB2MAAp4QGzpI%2FKsVd4ts5sxdxwx8dLwlMRXeuETkqe3NWLrbrMemVKSqRmwCeaMpSVbOdOdh0gMG69NchbvPmDprmCu4cZdv2S36qr2ggZpicmwfreYs%2BlIjv4j1bgmXVvj6WaHQ%2BMU4Xts%2FuvFLz30XkIFL6Nmmq%2BfYUhR4AhP74ZrO9CV7akba3I3E%2FOrK%2Fen5iUkc84xZRQ%2F%2BUqmkpMQb0JeAYmMPsv8hFl6oYkxuOaBqouChLa%2BcJgdfJdyOUxodPxNioIh8uL9Wb3wvnrO3QDT2LgTc1a8CdlauBB01AMZGvjDM5pQqexcLmyCGBJFI1gEIGkMtdK19rdA83b0jkvwKwJgKvF933S3qu34eFXaWIOWShzRCN6rPVBXopjT6hfbXllUt4fC9%2BB9TiNKiU%2FBrhdXydYNC6e3pmvWtwJRZTU0NyhgG5K74axsjXT98yKadSG%2BSOINuoyDqA0Ck8euPmEcApjIPqhMz2Oswqi0xf%2BVLmR5CvaIz5v81VbPhA1A1aFSPMw%2F%2F7CwQY6pgFCxpGLxDKW1U9fXYasLcYwZA%2F0rAboZ%2B%2FU3XuaeL3spHzrQTfadRIczFF5rFjgQw5AI1L81xUuhVEZjMEIoCJupnD2C2XBxw06F7oRwjgU4nrUgXXrFBVAzhuEo%2B12HFaJEoGlIp1td5zE7DwK6TN9qedWDzlJUUvTnGVgrkC3oECkVgBzd3LYjkdrG%2BPoNHu1LYhGdG2X2zH06qDBcsFtRSQvoZtH&X-Amz-Signature=b06993671f2f2f772d728a2004b2e3f54bf1b61830d9f843ad8c7e198e075e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGAGTJKR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQC6TtXVsJRRHmYxanzX5a0S6pvwjaefjB%2Fc1RTJ9sUAMwIhAL9kFgmy51DUHayXGgUSX3QPOtDrLprnC17cx3WFJikuKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FLHYFTJyL5hXcuP0q3AOuoVxbXx%2FJUf0VXW3fPWFGflp4MOJ07m05S7y3WewxcU6h5ppe0NHfZN6IxMC%2BWvEXho57bOuYegkRUmwP2xL2IzrD6762pNIgl%2FJMKMKclfy6UyDQ%2F6A88vgLHVLpBCeqAGX0rQ%2F2Uf%2F%2FzoIen2G5%2FTwgHHJCjsJ2hKDy6mYsbav%2B8P6lomUL%2B2x0yWcdmiZuLzhLhSbpw%2Fsuo2dLYzm9ihKfwQ6PthzKyZnzRLV%2B8bR1T5iGJQ9ZIztF7mX1rze22El49NUErbDLjYM16J355GarRaMTRJJbgRikC3PYXrpdwk8WAp3%2BurTLuBjrwY9YgZoUJFLlOioLbcodM2sqxhOzWNxCQBspslqc2WS0WCJ9%2FuAFADlaaIHoLcDLILQZ5WCJzgv32dxB3%2BKtUgfv50xj7UoRMJW%2FB8PToZ7H4FZLKHWZRLj3AkjWAtkMjZAWUr29GzJ3xTwCVL5y1KiK%2BKQX5pD0vb%2BGtm7i6SZJSaGCorQfeUodpMRF0rXBLzk5fysawaEglxPSIx8lHi3AilZFdBwvdmivMGsfr7ltm1v6iPemARgopMVKa9O6K85qBiP4WFwM0v0uF%2BUBxtc%2FwrdXsDKZiGdaJpK53W67c9KaZly3MO1t4osKAzDt%2FcLBBjqkAR66gebeIiA0wxl5ua4CGbLxIkpq22xXjscs92J%2FrwlhwzLX99di5bxu3oSS3gmAXExjiEPqyOV5Ob9qWaGCQYijC9gdXddUZJuYhlZnjIbLZT2AUufRxrw6zdt%2BYnwhkipf1hytHOu6qFXNiGUzokWbMKL7qZD0fb4W95zaBM9o8AfjB%2BKG%2FMmDW0A0nwi4NxzD7SJZ6vSWEbLDTFS7rFa%2BGTxQ&X-Amz-Signature=672b970ab58b18db47bd499f18f165ce1abc960c3e62c5c5bb64b1491ff6048e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
