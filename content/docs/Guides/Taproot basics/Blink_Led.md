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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZV7V5B%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFctN9Ugv10guXCSvlvS4wLubSqx9DQvsqFzxk9XN7YHAiBk4oFMQwhxJ1memD8D0o%2B86H%2FHMd3w9RFZRJMP1lmonyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbifeR9dTf23azMO6KtwD4wBjINAIKR6Y9fp7vKrHhGkxIsTPhm0U587Z3FlFIHOMDC3QsoWGy4DYa2aWluCOKXlS%2BNs0S3DHvi0Fr6Ik7vUIu1KX4B7fzXqiKDkF2HRml3UzqTlzrf0vlRZ6CyJCeyQUP3%2F8O5FJdw1Xd04gOco7XvGQ%2B81eZc%2B5PX1%2Bnte3EN9%2Bve9MnE1V6Vt3qQEaS4808W%2BrnfwEK%2F0dkOwdPs7XAQVjhKZHyj0TgVq0VQRf6QfxtCiUctwlQzKu7UHZ%2FuBNpJN%2B1FgAK4Ffe8jFvMGL4d4f4K%2FVU%2FSulGTnC1z69tqHL3scQAtrJ63%2FyY%2FutEmVIEOoW8xcACda7ARCym3xz%2F524q7MGpaa3S0YNHxXKgWNkJWsxQPuWwUTi%2B14Zj2Lf%2BOeYVG1mZ17HT0kX2%2F1iSH5y93JUG%2BnuYo5DVbvFBdWnsayF5L%2By8%2FePUmkZBGTLCsRJalMRULWJgiwJo4ugLXfKiiPZBLUVVmglVHhaJbVWm8yi9vXyX9rugunuaC08VsJ5%2FqsbQnKt4bB6KTV8%2FBY%2FFaU7RoNeyg0q0SqCKlD1E3sjKF3FfDo%2BsHod%2FLk1DYOqitomLPHBs8IeLGInn2KqVu85XAd0wlM8c6zJO6bcJC%2B4ebA7sQwo%2BPbvwY6pgEPWoc3TG5Z27pX0HmNaokpqGnwT4QHu82aCJRIu%2F4CFxDd9sfdLqyGlZZ3cmGyo0OuR7FXifaP0WOCYWAGS4DvyQo4ZNryDneUmDO5GEdyOcP%2BtuE9gOcXus5cykIdomx4tMj3qFjq8q%2BCm%2BheYtXdRrhmj7EJEQYvX1SWsjHvvKiyO61QXw5O65Urg0JSI4Kr3betHayAZC4s9yyRSUZ1bk9wtC23&X-Amz-Signature=229c810c8d02a129c57f75d97cb756d626030c108caeecb57a39a36a54cb8db7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRNI2TXM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGFqFjvFlEuTeMmApQ%2FzPyMKR6puzfaL0zkY%2BZpgxUApAiEA6prKYLn4LYrmkBBzRBZvBnsXwVFr5tl4DBg2rCCv7WEqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOWgjomm57wCSIcuyrcAzWKy7ajFtkr%2FQDIk%2FhFlPaKV7MBsKqq6uqrwjivu2j8org5nQ8nX8xMa7njk8ofypEPd2y6jPqLI5M%2FO6%2FtAkMr%2FJhZ5qhJ63PBfSbjUUwRYS82RUHo45uiSBaYn5%2FI6Jbx1Sv%2Feu2u%2FoFdYyOXXeGqYNJMF5rn8L%2BbqmJsOYUFxXEymJkHmPTRR1Ni48rkTnJ%2Fq9koaHRJcSh2Df7v6FHgI9zqVGBLFC9QOCkCSeHTiPhc7OsCn0pG2DeQ8hVN3W70nPebvr19hQQ2XOMw4VwfVcP4Jb40cTQ3YoWxu20HJ9Rtff%2FVMCJN07ACz%2Bm0oS%2F%2B223Whx8NcqB2Usd6LVj804DKOdZf6frUYabTZtCc8sJ4IO9PCgTEaztCzR6KJKW2aeE1beffQEjekejrRqfEEkU6dvQAT2zMsDBL4SuUC877VFOFHh21wWH431fwjgsaMPP%2FRzBFFa2CrK7VoQQOTxReKexdiZWPZnACQ9qUIbOHghyzeQcqPHyQaFX0J279w06uMcneTU64JbUxxRQ0pxQS8e77fdElBVb%2BVFnKJ0Er85G2%2Bu4zyGziKSfXdNKQ5UfeeF6QKU6IhjenguFAYepREK8oo273wiMKJLKkMO9U46FpVTmV4lBlMNPj278GOqUBpuPdMTkj9FDoY0YNNtmmRcWw205ugK8sw8c1LbufiNhKkeC06tmK%2F64i0aYWqr0kKo8hhtq8VUywJVSkR%2F8g9QHkNtSwAEylcO5XWep4ydGw%2BFDGNAftkWPu8x1VkAs2g3qGgiKe1rOlXDDr0HyJLVZm6IlY0%2BqV%2FYCqeMktMT7tjHzCpDjzEveaBthsuieCY1S7rhuGlHWpwQAXumaPGwOe2VYv&X-Amz-Signature=b6be7a75bdf37d6ab8d28a80529045dfcc354f06b65bcdf9184040e6289401d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
