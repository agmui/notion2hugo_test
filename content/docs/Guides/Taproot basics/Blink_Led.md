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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7NSJ62K%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDoxKYO1llsyfJ9QSDmEKlvpKFgNxtzIaLtQYkVt3kiiAiABS4zM3SqrcrSQEkAsvlguv24QzWMSUm1E92yUXShtGiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWpNKRpdYbVKzzoTZKtwDt6iopAxayElSOXd6TcOUO9c3CENuNLqR8lwkVVU511wsnEyFjfLCuaQu47tEA7%2FIX2I17Jdhb0GfL%2FMuQOLgscRTyY1kp36j1%2B2M8AjRe2K7Y438YROqmdJ0pyj%2FO8t0x3sZskvaJ6JFy1WTB74nniaTkbXsoOYuWdsrVlpAvzCbSKfzavRhdm6d8WNE8N0Ld%2BFQsqm3X1ajAlAs6wQy5ugERrvDtNmeB6YnKiracJ3qYCcYoHUCER2qnwZFBcmP7C1GvNN9tlQfNTezhFr6wPFgJgg%2Ft4CyQ0S7KDicX2yHcsR4W%2FftUi%2FnaI1da%2F%2FF4UpxuviB0alo1wxR9UMX7ms64RhQZaBN8oMeuJeUpvIsLHn4IvlKJTT6ibtNcyJGt2mSEB53zhKU0u0QVqDOtgUs1MGcDW53d3Aqxo4nuecsfvQv0Bb%2Fq6GzAEn0mLnUhZUJG9rg6WVKLRHjDjyhRL9YLxtHkt6cXyrCQI3wbQ0UfLJKfu%2BfTKolXkNWd4FqAlzQLxMFyg2KofiS67mlYmNN1ra9eLpJ%2B0luAhRUH93MU9jYH7RS7Ztmq9Gv4GpM2cOidVO5YJjIfbQ9tyq3NAns2MnlEY0msO%2B6Ynhj5QNpula01hEYPCYnPBYw0vravwY6pgEEq2C9CYZ%2F2yJj%2FuzQd37winFwKtCulnPe%2B9vLxDa0dOv5z7iOYNgCbf2dkNBlC1FWXZwd5sQrCU3NMEoPNEJoBvqtSFawcb6Q1Innk%2BXGmPT00mf8ZphWnX88DG82QZSQccWSRIhWEP4ef2iiOYXRCLChCuN3X%2F6P4PxXguGbnEb88zGKQ5HZLrDwdN%2Fqb7tCUB2SYV1SnsyyeoMsNlrO7tpQDYwf&X-Amz-Signature=1f7280bd59cba89d01d3947901980d1781ad86a637127f1dced8564a0b0d1ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CIHCKBA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD5h1X6IeWKoKr3lig5yPQ%2Bs3e73vkeKgUm1rgPziNlbQIhAJhkBd0ZWCck519TNvyfiD%2BGsYokJ4ANYE%2BH9hCb%2FLt%2FKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWx7XZmbukYjkqb7Iq3AOVZfRH4OXpAnTC2kc2wjIpFHpqJ4v6k35U5YvTHVRbC1v4uAsp1z67%2FqQZG6Zgy7hceWZqVxUkmcz2D32KG0rhguec4YMF9n2N3A7F3ukwSpsN8%2FUjmaudyjyjnAs1mkcthevUE96hdgpUkOgOsbUVasrctAu32%2BMirNMBUAUpH21Ht6BYtrsW0frPbRCjWxVjpmooG58E7ECKSSNNFBM6j2ba5dFFOxZ5mi9zirk5ee4Xu9z40BYtEu1ggJRqKoRYjBXNJUgpjmaKFWcU8nPUwKooW5RKxNonBMsiptyJDGhxobV1EmiGD%2FBKZL1zTO3KZbdp0XlY8lgsCvJJ4hjb6KDe464Pm0KcOVTgb7VhSWW9HE2zdt4NDefbPEWwMmFnVZEFV7KpndJ%2Bz2HOKHssrtunEFqLJpODj6AR89YkLICrRCIKej1LpbcgFkhwBI1TihjfkG8GuFcoPB4eSXU48GoOY92%2BYX0MiiHfmjbrG%2F4jKC9%2Fu9vaFGe7fxzhqOBzjjGB6xAHgMWOIdtVCCUupo9yFTtgfyPehXDpT9W0tsLYgRKp%2BUOMelX0qzerK6JYw2GbPYds%2FIL72wU0H7iWj7EGNgKQwKNS4h%2FgMmyPN41XQWK91mSkNIjEQDDI%2B9q%2FBjqkAS%2F%2FvWU4ktaFOSDx6awEb2OX6sHi%2Fktd2YoQjfoLvtQ6itL6BuRCBsmkjtdNK9BWbo4lCXxmhgCx4a8HMcKccgRWv8%2Fw%2F0AmQcbqggx9Q%2BAGAcZ7QxiEBqQxH7I%2Fnslp6IDcbwFW5D1z%2FDw15A3hl7dtKGWy1qF%2B%2FGimmcIB4Ba6RXliGwSpgdhZVMhHwkbqqHTi%2Bwl%2BN3c%2BuD3G6goI%2BZKq8CUj&X-Amz-Signature=edbaa491d7739cf58290b3a13bbecff69791ca61dc0d87e8e3c2e790b46b30cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
