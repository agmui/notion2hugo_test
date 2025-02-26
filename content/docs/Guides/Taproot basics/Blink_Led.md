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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLV7ZYFQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH4pu38qFA2uWYAb1%2BAS%2B83xMzZr5Op15Dvce%2BiH%2B6LDAiB500ib%2BtMnfX9N%2Bq00dN6bh1peOgkAkzhz7SzF114tJCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMGWAUdzoUBAka8DBNKtwDdKqlYUPeoIweEXUT76L0eza0wkxN6oz739QEDPMI4UDk3QBX3Z7lF2CcH5fIhA%2BKziyaX7AfJNshhwbq%2ByztV9gesobD615B6l5oYWmaUOtUED7fIaKtgihwt9UxfVjNJ3DhewlojZTUxABlkEzIbdipW7cw6yjRObkhh2onf7xLZfy%2BsBgX53Tlp1qy72QSeci7kVKOmnBuXGY23zMTbf48o1cSfuJ77dDddv47fneZWB6U77BKtYlIINNNQq8AIBsIsgPU%2FFuG0pdA3rgJ53qwOvIUdCtjRSTMkmFk9BM6WA%2FDD8O%2F7jfRzKNSqBM%2Bxe3GiPTYJJaEaAGy0bzUjNUbkV7L3bHyu814vVXuLY%2BQnNc5h2c%2FJRdLEqUGnz56KQQamUch1n0gyyEOHNGPz35mobpRkVIgOlAFmFK1AWjdk7ptNSB0SZu4QGxIPrbWefX9Gqxf7wp1D64BV7c0HR3BL90JrTu2xPTeDk5dPL7MR5x1PfpHQhE2nVFh6IYvcneMm4SNCD9Ohir81%2BeBW1q0bHpbpMBF96%2F8pwN4ecBbXKaX9jy1A7s7%2FEKN9MSmvdR%2BlOrVUNjIHrOWJRjmWmLh2TuxviQT2hCbkWrQ4OfDHP7JIoVKg6nWX5AwoZ%2F%2BvQY6pgHFa7DyCS6DUUjIxGS1gAy8l3pESymkvarqAxNwbWKozdAbIG1rkoMnBk3UHkEdc%2BivQKY%2BsCdbXWri97PgYdQvBnD9aVbKHsm5Z0%2FcXREKaDfXk7t%2BwaOQ4gsUfMuUbG8ahknukvqIP0wTM8b2uLasA1fAVzn2MiZomeIxH1tGUcWjFpUn29ONBTS5CIMWeEDAOup57MTjOYyGe7k3wHmpqz67dk%2Fp&X-Amz-Signature=1257d062fed6ffd2f9dc0e1fd58ca20ffdff0bb54625cc8a44546e1b150ca81a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UI5ZXGO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDgbrbmzkJA%2Bmweti6tNW1Nq9EB%2BErGnviZdzuZxrtv9AIgA7gC1uAF4O8hWh2hjTP4tMsAC5RzWI24aj1s5jMG5Ngq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNgx%2BtPyv%2BR3WJtLQircA696%2FcKDfQy%2BsQIkdHX5g4Yw86VMGZSl5cmVI1G0xSwTyKpGRKAxB7ArPEPo0jZnwtnIreFNARyDy5DQu6cBbiuP2VO97GGF0zP2X9uOzc4KBVi8r7ajXBdBDswmpR7wll%2B4gP2zg2wcsHRoImEetUaPKFMaM4iVYj%2BgVCbIglckx6RHqcAFIQAWe0WJG55JEKFFOQkOpVz4z40OgV5e17htbrDm%2BVLDTfmNLO%2F94NrG6FuSIae%2Fl5Uc2xsOg3MvK4PmL%2BkUe%2BGuQyMbBR7vll2kxalQkhMLAHzSxtAfsLohY2Ee8%2BtPnxRoKksRAnw%2FvtqkVFgKtd8GA68%2BF81babE%2F9z0VqcJGOp3qDW7x9wFsrBew%2FL6YK6QmrMhKMpP683XYIoQNi4zBcp38kH1HjQWGgTrYM16tS7crKqkNNmBEOv70TxvHPwLGB8AejSyozWARHiRLr0jB5sCZQ%2FEku5GCGG38Qt15STwEeUOVTONNu5hIz0uFj1nXGM6njmjQb8Eeg22MNJxNhiwibiFc7AKfjpYr14VWi1SGhxkvyLXaZkW6zhIS0w%2FH015dFlMmXOsRqbtaoN2uWaLuYk2HWvvi0cz2kKQaXbLog5G8F82AjIjshwVXB6iAQIxMMOue%2Fr0GOqUBmZLDjQ%2BCRI%2BiXpD66GkMDyycpBh6HgEQ6ncwGeR%2BRKoYxCCcnGlXDFZu88M72ShDKFXhoJE2wl02aN3MGPuhDcDdSBZviWK1AcY4DfXH1zpqAGXo0jkLuTkGaZIyRgiMOJigotlX5YujHgajcZbpJ%2FDQXyLxj1PQ6ydn47advYHRYVomHsdvVNrAPLN%2F7MBzL34sUDCHTVtzsmYm%2BK185iRo33V5&X-Amz-Signature=585b02c0d204b0e73122ab00012354f0bdbd0f46de4bc5694fb0bc59cdec9104&X-Amz-SignedHeaders=host&x-id=GetObject)

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
