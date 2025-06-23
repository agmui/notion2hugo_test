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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZDI3TG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDYxg49VB0COJ2sZv5NVYwEkWHGbK4xQ3S4bWD3nuh5dgIgfUhOjzBlMORZOfGa6UrEx8C07%2Bcj5vc1cHyYfJY5kUYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1MHQJ3g24qEjSy7CrcA9GGKMrxQZiYCq8RR0yP%2BwpBOd7Jl80vXKaCnp8e4J5Eu17tEXgKyzR3zIqUA2P8BI%2BkYrCUzWlKLrls8N6aNUCzr%2B0Z2In1T23SexwfIIyt8Nb1a9KRDCoejOwiVxl1bJRbchPNBJ%2BSH8LtwLlDAyjJi5p%2BqLePHhlDDMF1%2FdsndHF4XPPRuCqrIKHqelVEauzNwXgKMAOQC98cjW6FHUPpZ1RZSGAt1%2FyexbcLOudMvX39KqBKqpuSjSVwHpd9aHckSBB6SHtkTzzs2VG9bRIb%2FJc%2B8eFOC5oCuotCIwSdhFlkizfEorrQ45JXHQHTUgbT2Ilat4EO4LZI6MGIX3dKiY%2F2Je1%2Fb1Wh4dhKyX9c86Pi2JJZonEpXJQNeplPAJanvgoFW415W0H%2BW4EpLJYZiXS553FSmZHeZumBCVtqtJErnroLWfYYsfLZIhbYrkI5OCSabeDVDRkDF4r6NrNyzA1EElwylYyBvlEPXUwlC8idet2f9whD6wHQZMRBJlBAHUU6h52%2FSPJvLKGNdP%2BEYTagb%2B4MAekKX8N2CoPYU3yYQXzoCJgOPMlEB%2FHRnHHCEHPJlWBnhmN3C9V3ZI8v83G95jEXc4ZmX63qVZwKLbackVUQWAvmCzaHMJeo4sIGOqUBhgbv6aDq0bvLTePuL3RAEg5RsGDRyzeYQR6kYs8fzooUJY9a%2FGZIDL6jYlmTw6P50LXcMGxtR%2BhGRYn7qjFxd4%2FkyEYcm%2BVrUjvGwcBDtltOPgTUzBAnwNMVekoefMb9O9VwokZGdqjQAvb5YgEmjJJurR9knOr3NLqqLwvTuBMjy97z0bkIr6HysdijALOLfcsTf6y7Tjz6%2FZFnhGtQLz7C5LlF&X-Amz-Signature=554c9a660296b7aff48a762ee9b47f913590d0da574d27ae7cdf2f74da1ef1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3W7SLD5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDlraUwmSmvMY1%2FOGap2KMo5u7zHfTtbo867wT72TMHsQIgXNLUjwY%2BIXpU8iLzwyBz2hM1Iw5WWBRyZizgg%2FdqlHoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp%2F3N4fL09AoVXP%2FCrcA%2B6HgzGyPvFDdpUCcFp5dUXsNFFuw2fvekwsqNz9aj8jcFpjmT01TSED%2F8ZbcXClIrCtkHnM3jeK0ozX055s4mZmyQj37ADy740KCXmPWWoNjSFBYS41A5%2F6vn4GWgWLSjZzOKUu7EMBQ0eTih61EB8vkrV%2BMAw1CuJkbiIDwe0VIBdKsSAVfhKv5UgHYpIptuG5g95xDX5cVWmYz6wlL7MF3%2FOdhXFNNQOobruS76D9n3S5qWyj7I0H5Rl%2B%2FWrJBKUGy2eo%2FmlsISELBiq4si3FVVMpRqJGe%2BtXWslx3byHd0239Y2oncApPPq4CQV8AxgvkI9JS6HmXZfcS3sqX3JGAB2tVzPG6AYIldG678ZnaTfQmJu8gV5jcLCadz9RKcsWD5fWIlQ12VYJjx34kDqIIThB0hiyxTyKmQY1Kfl1SfAc%2FZ7Ck0QyFT1o7ouC7Xuv%2BjjcEJRgaTud2gJ311XOlAwa5s8KzcyfAlvVtO%2FO89NU%2BJAUCUDtyXlet3KeUlljCpSzdNdm9Z3AlrYFIIaf9o%2FVOCgDiYyrBtNnI3vIo6u6w4uxe6kpplv%2FK%2F1IbLNUsUJ3phwL%2FQHM8ggbofibDxhICPyiixVgkRtkZ5C3rvyZ393W69uM9J5DMIen4sIGOqUBrYfKOBhXmmtKTJnF0%2FoMNj6YD%2BYS%2FLOpzKZO9wjyDRcGaA3BssZQkdKLys5VnnXX0o%2BIpof%2BF1ApXY552xBGwBI2EbcdTkTeNLS8TuLCT6QWezP9fv74KonLh4y7xMBMr93U%2FTuYpbdP2va%2BdrpTV41l%2F3LCuGOJCRRrKEoRAjaNfvSID63CPHtGjy3oooTWvizz%2Fyy2qFWdjw%2B%2BncGM8iyT7NUk&X-Amz-Signature=71c15433d0175fa761ab96b65b6d7a2af58de5d45a1199d0b43209adf9dece30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
