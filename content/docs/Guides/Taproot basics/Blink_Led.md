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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B5WXTWO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDMRHyEpRu2djsRFreorjcXyvjlFHuVacpP5vXUJJ4hHAiEAxGWJ82kNgEiLF6Z0UOBQDyKtfPiw%2BIPfEjtHBLiLubUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDD6yPHGAeZCdU44yrcA57gKlFYVs%2BVWrmG%2BTiUqRB4LhdmjZuf9drCY8Ue5FRiYQkdtwnIsEhdsXB909%2FRL3cHxL%2Bgq7yzdlDHZymF%2FizLw8VAhfkjAX7BG9qE0nI2aPWxlRbI0kyXhkx6ScLWMHURfXp3EQ2dQoK1aFJyLjQblpsNj3L%2BTYiu0pj5q1QzbIh8z1YV6YsB4lFBQhvlQ%2Bvt080yVkmWk41Ef7QliZcMi8VkYw1dKz0%2F6E1RIS9i%2BCxor4V9O9NmYUOJtUrc%2BshJf0Nio8ZAZSBg3WWXR59bMe5PXe9W896WnsjSlKhG9pN4MQrUVzBXo3jOrx66bii%2By9vhaXQ7jLfVlPkY5F1%2BEFnUag3fSVho8CDWbcIr1ujVcTy5tELaDk%2BQWQiAlwW8uU8ybr6ZJTVMKpZFj0m9443GGZGBBMZ5yHpJHXf7KwLrdDuG42weh0ICvSRly0%2Fw9wjQhngewOvnSBsmxP%2BdPaAZJuzd5hhi%2B5ej%2FCqLfpuLKTg3lXjgfGFb%2FFfyWnUzdva9N3n5F8Ka0rl5fRA9BtIeNTRVzxdW%2FCWAnJi16n9DeiKvsi%2BS1VSfuS1dB%2BhPddXJ4k%2BoagZz0VYAKeLRNXnjIAbWiqD0pSpmM05jz%2F0vw%2FnalqUBQrj1MMuGnb0GOqUB13qUI3kfsqJSSpAF%2Fbi6Jmzy2pG4M4QgsWDkk7Lwf1yNfWLDKZWwfNq1i36wifWBpikcgZdR%2BYjUfPsh%2FLO64WvCpDFGgf4qbitbRQsK0L6gE2CGM1DwtIsMmT50aDxfinTEKlf4ksHoB5sVBcuOvgKSOEHmnZJ7Ora%2BJCfoEuY6AJxhZ4ROMe3qQJFx0Xk%2FP6Thg1dsRGHSlqiANwfadXzZEPlX&X-Amz-Signature=7abe2345c965f6fdd3ea347b63fad363eb97a27d7b8156fec194f21f862e3f15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MY7GONO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDVEUwOuxfTkTmNJYB70AKKz3%2BiTiB0alh4dVYY9Hd8YwIgLHaPLxcmMEPwzG1P8ZPb6uUuoq8LK%2FADjSsz5BqGb1oqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKY3n1u3F3HIVMrViSrcA1Dik5T3u%2F9w5kXRHzoWPzHoo0PKM8OfH7dIl%2FZNZozosTwmG7kDY13CaEsxVCXx2ki9CcZAyh%2BA93YQ7K5TqFe4Y8rNbV%2FxkOjSTbv8AKWtYs8a7Quc2N%2BbiwQeew9jH2Cwc82L0PnkUe5tnkHZ3YmIEDJ2d4M3sfFZ6qLzKx8gibeiymq0Ge6Bm5%2F0TMS9VwPxZRR6qP20ag9A3pUfjC8Bh4j2xPKhWD9tsycPbz1mqQOtvhiO65IuWyihxsscz6T8NCt%2FxgMaRpTZtViEIGaAkZb%2BOqwAV5x%2FSpCanUv%2BUb7lXnIzJ9SN5CGvJF2UOgi6tiGMV78jftEs8r9GzWXsiAhL1aXy4QomaySWoR4pmNsoAOT6Lb5iOveh65jkOWDsQN5IDL%2FQWS8XP5sAf5LlI0hIhxUZgqu0E46Ne29N5xKFeAjY4k8VeRhjJ4DKnGgjb0WtVCya1MYr9qdQULFcLkTYrFWaTTXV0xXkrKqXx5KUCjaz4N49V14vOCGky3g5JXykjXWkuXwXEc510WjFvCLl1AOKDR1mKGYOvV5S3TqjGYomaQyWss5y0FUCg2gOrG7u%2Ff5LE6eOOfuY4xu4UZ9cXXGc1V4mHHNZAvjyg9bh%2BiRbx7eh0Og3MKaGnb0GOqUBjGvs%2BzGm%2F27N2gKGL0QtsnuV0QzRb23tuoKrL21zoYn8B6WK%2FfGDdx8VFDB1%2Ba0B4w%2BiPThjb5BnEzlvVEq%2BE7SIZFOIiHV%2Be0tuHdBQmCbccjk2zoxEGwH4MLKv2kBLhMFLl%2BpUhrHr3euSzJDUBm58GfFE1xSX3hNnhsiRZRUhN1Jtg1l12V1oozOV6ChyR5KtGJ%2B1R5ZD2%2BuP0sB4Nrk2zPa1&X-Amz-Signature=e72736d3ca36f8760ab07d17431fd87bd1398702c3164c12dbf3d608c9f1754f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
