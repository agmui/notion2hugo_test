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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYXB33W%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQD7ULU%2FhpvAvqDhlvQ5w2iLoanSUyScVkEuDbDWH4R8LAIgaflcIeLHckSi%2Faa4%2BKQJgEzLhTJMUZTs1PNJHXraARIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhPgbJGnpRv0oZ6zCrcAyk7JcqFNI4s5DQOCTiZXcgU67EDnh5hNNo9tJ9LM1lFPccLRabHAJl%2FK%2FGe81dm9Wqk1CvmXRWRfKt0sVOK41XHTYE8eHLZeF4LfNq9rkGvh0TjEUejyrag3mcAwQVEvSbLQ3pE9fJsekOQ8vFBb2CXMOhUU%2FX9OHj%2ByD7Qr90Ee%2FjJOqd2%2FvAJTnv08T255sL6X%2FFo2TQ9YlYw%2B76C0yv97Da31J6JkLhue73vT%2FNeBy%2FNvlacR4cf0Af7BFOM2mt1G8m4feMJGWY1Qy5ef0tlSymUcZEfYehQlCSj5MTbnkErzm9eMy%2BpW1ix9rmc%2FXn6FpqPyvbJdOAv23BphqDUqcpqDnPoPTOJbFWXDVqT4grJZnfSsjrUB0KLV7jHVVZEVtW3A1vWygVXvxd7v7kC6DF%2F0L9zncI%2FakjykTXYoz6h%2BnMmc96J57Nq4Cd1%2Be%2B1Y4nfBYwQvaGfleCJV%2FXWZYEvstfwfPW2MIeNzSiXvVh6Jk%2BJYWIPuM0%2FWURGA%2FX2bnAx66J7zZQE8NyW5WCTmpHxa00wibzwTtEVH3eAqjPwas3J7QIchTfORrHk0bW8yb44wN5JgQazQAyu9gVtsUQCIDt0JT0De2WyV0DMPe4%2BxPwdcqoSYr%2BuMJigjsAGOqUBzGLwG8CzVJuAg%2B%2FH%2F%2BStc11ORV%2FfSuQ9AKeiYQCTsrVnoA%2B2xT%2FkjQTDqehwO32x0ylnhXGw1z5CRvJCGFjpsnRQ%2F9YVoKRxz63B%2BxwCjDBuag3p225IDdItl7auGmyr9f8Gy3PG6NCsDAkDGueHYwfckuqAKqJ6cWjlR2yp2SJfTkCb%2FArTsb8cIXzQ6RKg%2BWLHewRo9i9pc6C8IaU6TT0aYRig&X-Amz-Signature=3b20445c73c100d05daad7c0fcfce3b3aa8e97e4781245c7f0551edae1f101d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPAUXMY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCSBNjOO3YjN2tnUnLAivn5VrdEAYBTPfTgnTge126gXwIgKlkjRxvztgSHpqSVFWvKGdq%2Bf6epBB%2FxatJJzcHK4x0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRVDE0mRr2tN2D83ircA62NUNkZr6AJn9EYO7zpYve%2F54gbVvHegKLv%2FtjGCutQ4rkSYadHILoCXSbZysESLaLVL2wFESvg4%2BSDsdkbzq9jzlqC747KzidUILPvPQ87WsLiYg0oA36l9Dqh3FoqMyVqNQ5oLDkcsfbGlYzBQesWfX9Bz6g5DrWMUHM6vUbx4Nt0hs3M0niiic6nl6k6ddMMKdRls4%2FHfxaqmqsVhtJo00z05CISJQFmgZrAODoigP3hx3QHTjeVguEnDzK9PTh3zVOGtJxalG6ILbTM2hSpku7bLSQqxHy3LZlEM3lh%2BWiAxBJmno2QGW6r0TZQGpCsLsPqCvxQSgj2ygbsz2ApkoBOeuWOoOf%2Fk0n1%2Fvs%2BcLbKltiqH7Qm9oYlyrc0%2BZ7NLPHVk%2BaaU3qXFMONrNS7Qbct%2BuqNJuwUtG6Fz4KtkKUxLAHYM%2FRTxpGtw5hHWyUEyfIcchl8uI2IJvyIR7Abn0o6ZoK%2F37pyPtmNhsjzke1xvffjGk%2FP9dp66%2F75AMq6GLalfav9N%2FcHUgBLwSEmx2h3B9MGzMm6Ho0c0wDL4OIoGq3o280zz%2FRWFlmh6IAYBVeQBjpHox9FgpScqM6CcSz285aC%2BNgp0asfLy%2FdHlHTuxz6U0RNMJdhMI%2BdjsAGOqUBoLT%2FSjWTUxFomMjtIW2Ny8UAgShQLsTBeIwMls8A3mLYEvzwpZQO%2BkILE8UTFet0AOAw9mwYu%2B3o6DlpMLP101SaaVLpYk1Iu%2BJWhjPPcneaeeJtzvPFzVtkiRS2K9o15Y2%2BsObo3D9q1MZBZxfoewKYSLZq6BTI6NVOCA8CXgzChrtjZWFwCvlxkiCs9%2FDjlxI4bdeZVNhivtl9vts3vnhUMaJM&X-Amz-Signature=24afc74b12c0acf0b8615a477404223bca17508968750137f32a399273819122&X-Amz-SignedHeaders=host&x-id=GetObject)

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
