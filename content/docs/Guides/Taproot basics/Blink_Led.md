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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSMXVM6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCB2VrN6y1JJZfGVf0BGqlctgur%2BHFTqL2QckZ%2FxRJGQIgZ6oHsgWwAZyAWooc1JajjUHHREv9Duv3QXa9G2weCw0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG5gJE03gTGIDxMX4SrcA5kUBF4bsSX9GpIvtiP16A7cAF4MTPvd1NdfQpIE6VRYcxV%2FXziTo8sPG17NGpM8OsG7JDPyGwFg9PNw4tvSXU1is5ASGvW%2Byg%2FEo9R4DeAW4KcUSgfM%2FJMdvbJbJ3TTRiITwe%2BDRPZdoF04amFamu%2F%2FLObF95lqoaPJjvYC5oiU3bhggvx4VEjHRsFd4jUM4ucbYq7BYJEALQvdHrz%2F5HvhjHDieTORgTs4pESnp7rpBNRn8ZjjwP7s70Y6S0oyffe6t5T%2FkioJg9zJsME1h3ng7dS6vYe41J99FQ09G7vqCZYjHU8l%2BoVSmUINXAH3INILAcNnuStIuvI0%2B5FF8I6tlwO4qKWTnHuF0hll%2F5lF4IYwbhRKZy5Veh786Bu618VaZJ3MR0cTjJ3fcCLVWHRHYyJLHdPhNBtGdfH%2F%2Fx2I6tDm4yuo9yDllwpRzNNZZvaOLjF0Yycep%2BkVxmpTMonXl3KUNhzvMZvoKFJzaMh8V%2BiPtJ%2BSA%2BA9HfjKBNMmDLbvsRAmVCWHl3Y4uO64f9EofyIBQijFsjZPHTNtT3G0nDae58trqI6q%2FxwmsIlhiiPI%2Fd4DKCirvbbOm%2BUz9Am%2FB5gaQ3Ffkld3fayzgfzlfq5DHo2cuRedXWmHMNmvqMMGOqUB20kFfkYejiblwm4%2By1cwojjEjJBb1dcrqYDwU61LoxyJm59akNg1wrBsV%2FUz8BGj9kp1%2BYV2BoHhFtQ4l4fZpLy9Hd5gHlHnR3A6B1qlMY0KwaQHSfmMMHJz5pp3Kitqp9hcW5KsDuqSbVZDdiC1W3r4M3PKMDZfB%2FCr6rXWGTz7r2UDmO80mPkRmJD8%2F%2BQezgHQGxKoEzaRR%2BCbX95j%2BFg0bh51&X-Amz-Signature=b8b80d0c26d0cc85488e6851e4c2b1103215805663942e8eb6f0e076d290a87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIAPZVEO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBHr%2B8kQIrsq1N7dlfmKPeGDSeZzq6sQREI30nvI5ACjAiAE3%2FtKhD8XqHHxpwWBKdr%2FoG0RU0VpQgoVNw%2Fv6qdt2Sr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FFL9QihcUUu34x2hKtwDbE3gBplBzqzoEOvTOshGtrIJ9i3ayTBCBCkiGvCXOzmOVgoTeOxiEMnNHOjTm%2FcrV62MJuahMXzy4BXfTsDySkHCN2VW%2F7MnOo0KdE5ueVnExNUSlmoP4iMMl%2FNbj3czEiHDemp%2FlmnzDkd95KIPZ7TVSrnFqX9icb5RgbwmL2xUAFpcpjFpMg1IbvhLWCTErVC6b6vSYuSrYUICCNHJ%2BbCTs4f2P1HHM5L%2FLPZXgUEI6PJAm2D%2Fc5WHRUW3rK3EnBkxvqOYblW03rrEiRWS2i7xWtSyBRyBgkZb2yrGGg4iB5GxWZv%2B23xSF76xV3GovK7VD6ce8pwxzAKve3i7SHA3rkZLIOxsBXUtFHmUnM0QdDWWdVtNN5fFCzL8gGqHMqOIFW25K9Bbq8Ln6pRNiluMqiZ7EejW3PnnkeXoKsXq%2B7AIwo24cE6CAk0JLXVGhBI6FnaKUfrOdsRan9hUHcIwxZba%2BtWKBEbPdqnfv4onm5u%2Bzw2s4a3Z9m4TlFkkfmyWxF98WYlzf82ho5nOnSISBzX6Waw%2FEfyogPds5DIVh2Frd%2F1EOx%2B1eWZxNwmlEJixLrUOIioosC%2Bmbt0JWfKrg7w4VbuZAhq6iMWbu5RpqtIhAs%2FUE0YO9dAwuKyowwY6pgFZ7Xc0qgNRRGh6%2B94xdq33WQoMUhO8ozYeQLEs9gmeWQUcVlSHlvv9ovVN1j8R4OMmh6TOEaD0sCG11H4Q%2BA%2FKtJJGT0Q4bRNMYnyp8u3xx29SV%2BQFHgnOsPYRaxTFCbyXyC358RS7Aq0hOXcoPJYt%2BBPEiDVqFNdy2HC4F%2FHK4uOvLzoen%2F62vVbusD%2BOYZz4kvoKF6np3BJ%2BTle2mj0QwttRq0FV&X-Amz-Signature=5b0aa06545c69bf3bed13f5731831023a068dfc883b96fdfcb8a75c7af29b911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
