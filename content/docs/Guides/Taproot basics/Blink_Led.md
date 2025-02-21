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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHI5J73%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUrM0efgWbjt1SrvaZOwcVFuHejbWpkQHwWhvW35%2FIQIhAJD6Zy87gIWMjsCq6qt%2FTNN5EF1L2KiIv35srWVZ4ZutKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHqYYiieD4oB3EkKQq3ANsN64qO6tWhG%2BHIO06337RjBPXqoWUFMrJimZ6xS6T2vGnoUK66Ba%2B9hJb6%2F0rfrn9Zz7MKTSQ%2BJ7OxDJ06Z8qgmLKHRAJXbpeilRLTlR19vrnUpiFdYfYUlrcKMzjLTY0YdUTvfTfqxLZ19eC9o2z04u3o3Tpi2UXQWlc4jp8ojTcmM02icI48w3GKGkTggzE9u95Cr2CxgCFJTR9I5Zw0xFJrPXg4j9KLtkXE2reFrzTyH94Yq1T8%2BtswlTkBkuqBqJH%2FiWPyUaX4%2F31K%2F4CVIEdg9ZV5KGfXbF8MeddH8aFDt%2FJmmvQ%2BlolSM5ylKp9DNWO9%2BJg4juibw9Q%2FXS28nHo%2B7%2B%2B%2F66HsNtSSaCQlgEYcEp3rTHjTREpfkAnG%2FKG8ctxC%2BPju95evRj0ebTWI9RH9DapxQ7sqww52PsORJ94w%2FstFI7EVSnW1SLK2IGK7kepf%2BPcdXMVewZIvjQLhhlEM61XkrRWJQlT4if7Mdt3ycWXKlUg%2BySPoqTSvWCUmMAuFeo5RwJZlUUqqftOdd08t1rHAd2hvO0tkoUDI3W%2FpTHYVnXuA6nVNt%2F%2F%2FKc5nZepsPyoemuoZNtKaNwuKSdUgyxpco%2BzNyaid6ZPUTcTlgmiY%2F3mXvDFwjCr5eG9BjqkAZ8uqJV%2FdEqcy3N9YqGD9dvJ65yJ7bJuTJPjLIxepLMbxH%2FtS5YuL3GGEF4XHrSSvIMbzJCI0IWWZ4tMEwlmGoJN93pqjiHgm8xdBJQ%2FeXNooR9QiI3RmqPq7yEE6B3i%2FR9hPrOb3lOodYPDUojDccqQtIyu0kjI%2FdgIwYRGJS7FRmun82svSlvoz3Q1n65bQdFplyUh5w3%2Fbp%2BBLRgH%2F02C%2FKoz&X-Amz-Signature=81d631a1cf54f5573aa42bdfdbe0d4a32a25c49c8b8ae59635e77d9971ef7fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMV57EJL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcyiZnfPKywUQOfyn4OE7njnV%2FI2CH2wpjPRZ7%2BQ9SxwIgMgxqbOzpmwOGDBGkM4nTihVYHrbphz170t2adG9ma6YqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMps5gg9OGYHfMHUkyrcA%2BgEvbBmpX7OAspKQp10o1Xne6HreZC4T%2FP%2FBwmUMT6zg7ZsiBesyY5D1bE4IdA3WjLQaPslO5pRrYZbdx9qH%2FnIBVW3Ph%2BD8zYMNhCB297FvM6TEsjET1pj5f%2BDnaYRjBpQ6CumKPsn530xqwdgpClzgOdB4deGYCSPMIblo21cnDn08L5Iw9NVutRZ4aXPANO8PlfISYHApTstZfSN2ktDuJsZKzorjoBlVfbi3S0FhTWG8huhCtxKyqnNgqxLwSIL%2BFPE60JTdL%2BdaoKYQg5nTtMvA9pHGQct7leuahhJcYoWKA3aba0QlAxYNh%2FeDiM5FGuWj5mMAxfnG0%2BHSvh8oAR3RVjl1NGa327sfqO7MkaqQtWR%2FPTDf2REQQNntoy%2BYbE0IZiEg2eQbvkliFwzwkYJzIlN4Fnfalk2enTado1%2F1n79UMKJYHH8%2F7rhqKCXayo%2FnDUGuvVzpI4q9B5kw7EB2e9zjHxVLtaUFLE5Kz50qW%2F%2F48hriy4qZrsS8VkoMZ0t5c0BV2XqQhw2j7XHi1UAgA6vcGXeJxOW9idpinUgE1gVu1mfnGoU235MUM4M1Y5sPccp31tMLEZWX50tLmlqDD%2FfWNKmB2JaEyChuqNw%2FaCdZMlz1CpWMKLl4b0GOqUBFjKy%2F9RYrdeVkie9ajoJtVBKyBsCxst5wuf0jW%2BgAi0IPSUd78osABY4y57ZhSOjg2KH7PxRKA3lx%2BtiFyTgqkah%2BfLo4ZITxVgSdvRmtEjoAYOnNDIQ%2F9PfEmIXu4BPytvG6yvX9hMoSPO5IJHJrVZf2o%2FgluIB1krfFsJasxkNnnvrNBFYVfyneH7x4Lt2mvIhyZfwToTkhS%2ByYjIKdquZe7Ce&X-Amz-Signature=69c263c84aa65a6fab12d163febdecb7f12c98de58296cb7f778d0e5ce57f2b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
