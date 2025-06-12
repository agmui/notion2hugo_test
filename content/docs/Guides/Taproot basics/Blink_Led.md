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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J2O4TBQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQD1fJHab9EXa6Zruyz0rKEIroKy4ca6lTsuFvCimHN3HwIgF41SmT2r8EEX9SiB%2FF5LWYkVT%2F9cMyet8NxkZuj3J3oqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOupTb7Smfk47k%2BPDyrcA9sSGAwlCRS2nBtqtWY8FyOuVPRF79kJD21B2lgINy5KQaA7EJ9pr6%2FJVJS5Ip9T5kq2oofdO2tb%2Bp8et5EehlvCzAHV5ev9ZVZ4vjZh0HotwT1NgsEVL7aslqihDtp7maUH3GIb7NPlQx5dfCWQY4GuVJGjWDWDUxBlUAGfnWGUEOoRboNcNA2YG97IQlVwajjAOcJaqunIy8vqOiB0As6RTgCKdRw4LT0LP1fWjEh9APmcW4hgpjlkZINYTLJN6JMpSTmyp62ht1XrDnxZYN%2FNKVEdy%2FtHpjeB7s8EjeeqaputY7IgyURcE4fMRBfGcwDpH5%2FRc%2FNX4R%2FknvIhMCiRVOkAmnG4b1XNGzHoOYmHjdccXxp52Y2uAEfSYEL%2FDr%2B4FVk%2BSn1V9%2FS0AkOW6r0I9CuaKGtDBcwnsxrztr60ez6Iq7h8P1AQjMmepsUePrpzo3POylrRv0qfeemrOylwl8HuK5Tc0Bbf%2B2ERbsKpK3UXfxAD7I4YGx050l0nqLGTgo3w3PyrcTLbAp6GMUR87abhSyQbgCdfRkDz9jpUyWH97SoEbAgqxwgnTtAYT4AUBMVlqySqzX9JY1%2FYqjORp0Q1V8Mrb9AcCBYvbBfJH2AJzGdP6WIfeVELMJ6pq8IGOqUByjQ5ESnRnArf5p6bfZfXgmZ%2BPzdP5Ns1m17pBYkRci%2Fm%2Fu9sUxcr3QqGa5%2BodZr2WB9uz8Xe5pitbgjEq05NYsMygelErO%2Fi89GT9jkfo8SBWpixTt60GlJH4ZBhXF7aLWkNrVYJ8f0CV1MzDezGnbs3mG9MAExZ%2FWF7XZ2NLNW5W5EOtcTENcZ6VeB9XgNMhfhzPPI5VCytAxDlHqQput66Kxu4&X-Amz-Signature=1dc2a0b329bad2336ce788904a1d3ad7f925f9de9150ccf51da570cd6d06f056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDBNWQK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDpx%2FNCG3ftsNnBX6ZEY6nOsjXm8wfFHz79%2FRL7UpyAeAiEA4ns%2Ff3UeM0VZta2LqwK58U%2BZBeAHu%2BxVeOOfhteQetUqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2AlFideWIjQRFPJyrcA5DboIEnvTKH0tFeWgaUZ3JPtGcosUUBsT94l9gLTjhPsfkkrE9TsXR8AhARJJ88h5%2FfONgGCgSCI5J6%2FHYwiTVaXr2rHnk6JdfG0pxdvHZpQBlgwF5YevHF8723xnd6IYcASb0oP6svhurUi5J1zyXbT%2Bx3oqt0SC%2F1%2FCWt26YjynyTcp99tTdEUBzufvAIFflqqM%2FuAvFDC72vIFlywlDT8RXXNVJw%2FW%2F5NwqLkXMz0evuDsFBjBI7a6gbfAK0vL%2FsUmvhpq1UYDDfgndWsqdsIp%2FcG5RSi%2F2yQYAWMIVxaW40pVUsBieideM3eA8UkVo8QsiMNYOJ%2Bo7kzXJKpfnvse5gCt%2FEoAwbFdtyKMsm6clvtsFv79BstnugIaFGV1K5Knpyg9a0%2BjDLSj26PxCqfIQ6DA490H0UbWH6yKrV1CYUvnmX3Ltdxh3YLIUmojnwDkoq9pZjZ2ozopggclpk3GtN5qylhNAvpSHiF6yGUeSewKQSu0kD78M%2BnMyuKz3bs4eNRJgRbPVI5hzvTApr6is6w0bo1MwrKzTcAuoXggoYmIlkZcWHtuvtGgRVqlakCw4K2%2FtiQUFKSvJ3O3qoJdHDSK63lOuZ3QVcYENZo7rNH%2FXj%2Fro776RKMPijq8IGOqUBDaPAfEHs6trXxYkNzO5DH%2B6mD5OL7OCjcCwmZFZMc%2Ft39Gyf%2BQomb%2BWuwV38OlxwOApG%2BEuOPn9HlZYr9IUBjohMl93R%2Fx3zlHJJqUvf%2Blt9joydE1%2BIr0i4wEi7TbOu99SZ9bFLiWOGfAqNCTPhaGgtZo9%2BwPaEMJ5AePL4XgjQ4qf29hP4gtHydAkIAdyUsbBUD9Ier7uc6z0uSFQ5pWCVnJJR&X-Amz-Signature=46f672f5d956498c7c1885be498deb0dbab3eb16dbba6d0bf9dd83564285035e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
