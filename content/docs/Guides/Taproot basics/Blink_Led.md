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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTLYZAL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDQbZf%2FLg5cSqW%2FdWpn30uztXKqRfHRniYPZm4gEZ3QIgbYQZ5J3jnyqFskaGSPWnGXw3SmI8tJTbG9nG4afJBO0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANWunoEbVqjrpYvnSrcAzBEdQxhExcpDZV3XAXKwfZ5DxOwMz9b1E4mIfCjhdsuAH0NArkRAOA5055uNmBr5UYMoKwrAN6%2BBpPs9SL3ocR3CrgqgX5%2B8o6uPY2x57XlufX9Qqp1WghcM%2FToUhgIuAzCnrDV64OGTxux2mFWy%2BrvOZdj6kUjfFKv%2FQJm5sbJXIyHrZV3otjBxUqK1mDYJfRnXuwM%2Fb5aAJF1TRdZ83qErC%2FfG8mDbgBee1%2BykFUUrqH6EJ6hBoZEAcU4yU2X6ERy8Wv9wni2cDgOgdWZO2el5zH9GlXuNraWUg5SJjKkBifXeVBcXuQFhmSmfIq6GnyLTeX%2FKneCjGaP596j5HtKeWJdLHXhLZ5QUHQo%2BeVPl96YQzak8NW0PNZtdnPekEK5NvNDfyMXjtwRtJHIOqMi60YP2OJTu9lYvVO%2BC1KT477mWetBoo%2F17pBTWZ8PD4xhTqrlQYunybFE8BxwYvj0IAL%2BEXKP1EVPgjguHdnurwUZLu1eIlDnyfVj92r%2FFZ91iKOJp22Blz4AsQfuU8N5o9gEPdoc49Q1eZfVMG2MhqZGX40%2BpOFv%2BZE6WQGpq2Sbh%2FFn9dBTMnwE4x%2BWfkgyJjm85Xpf2yaSqeJXEhh6NtVFtIWAbqEYHZzzMMzc6sEGOqUBcaaJB78PaLI2eKEIEjZ4sAGH04CX1tnfI7c1jsoBzrR3vrVv5BaL751LxOJaNX3F%2BiFHljo7ARWO%2FgWDH6Z4Mn5OR2gCTUY3psu2ioXrhpehZfuKqTEu6aJJza%2F3VUaxm3rsQKxU6Y0b8Zuid2Z3X5Z331HwTyTbJrlmn9BDL8YZ%2BerLpMw%2BNKRPzgoK2f9645iR1unq0mdAX9QNVRplxYxW2SsC&X-Amz-Signature=fe4190b4c3784899181115ab278ea116e0d2e96b270eaf65510de9bb113793a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD46OIWL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaltTNLqYOjo2uqWd8olSi9ox2uX6SGmiSI0S%2B616mUAiBV0wVFe623u6gCY61ODepfxWEvsG%2FmIuNYHMqxB6yx%2FCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJ2KkDewpQ3scUFFKtwD%2BWENkx%2FlA46vG6z09bUOlhJ5tYPceOPL7wRILZ6kH8vM%2B9ZEYHDn7dDqd9tNBkzBQqvENXWv9waH6LifoCuxcImXhJPqXqCnPqICVsXNAyF%2BbJ6gTwl5XguiRd%2FqtvXnvo6PQSoslBpoAsfOsem8tcmM%2FHI1e77WLwboeCbyJlQ0JqMeem4idK7Ma3pBmBDJ2mKPqcUjJSM71c7kcwor6%2F9n8Ft7jG%2BAreRbMrUu%2BW%2BoweHl%2BxWcto6PNIvOoE%2FKc9b%2BjwgXLSERj%2FPjULTfFeXewdVOGihsfuD1NgP5ZdBaqf6JkXjA%2FJN2WV%2Fxi5G0Q2g87kCGWuPl4y2%2FjeSyEa7Ec8RNPGRfjn4WJ4erRYWiPqXD83BUJMz41QcNJld125Z7pPmiSFlyuT1lFm%2B8NMeykBasK7QmOlR%2BVSVkIguoyYLCwCilz0z8enqM1HKLndVBeBXzf5aeq9JeCgxLKLmo0drI1JBfvkzx9tcqpzXt81vWOiL1kU6Rhbx6Y1WHGcBlTo9O%2FKbYq2WBbbxobLWwStB%2Bvqmg23PYuUiqEZ2Irizho2G6daElmFIyrZp6ByC0lZsDg%2FcTsu3BOFQzotbIfAN4F%2F1s1P1QB3Vykp7jMpeGQoraRnYCTbkw393qwQY6pgFon4VBdcLhSO4Li0IsgheVISGk4ybYM%2BNIABDbaJPjM8gYBAzT6c0PIuBiywoYOW5i8sfRnSQrf1LXZCK9lhE2Xva9FuZpWryAu9qDmHqydZzYorFR3Fi9FtW1h4q4jyTitJx1Dj6osXuYck3q1L22QQyEyv3JYLbgvme%2FpGAC%2BiCHQv5Ir%2FMlQ50to4XHkDoQXfTn6ElU9mg%2BybjnPyjgx%2FHU1B9s&X-Amz-Signature=3cabb35a58abddb95776690dcc1f4f5ff3b4ef6950fdc7cb2c6f9312d254d4a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
