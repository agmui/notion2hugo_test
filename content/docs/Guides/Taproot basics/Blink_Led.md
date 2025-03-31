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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQU4AGZM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIAN2CEXZUuGQCKDKFnhfiUSeTfgHOC5XyHvxMSmaMHj8AiB%2FBRdZWZTl9umY%2BXLe9DfQAvnbwee1vvdvEtU9pjiIkSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGP3XjyxdafW%2FsYDRKtwDsbu7GmOB5VC4JFNaFwYcAbnnD%2FVOkB0rzWp8eh3l%2F7vxQk3TTRaVlc4dUh%2FTm9qKLyxxRyU055e6qEzoPlH6xK2TM5DOtbCyCyqOs8EcmUN4e1jIXdTGfPrWGxb%2F3BSePWR%2BcjZbBC4GN5QVdXxlTHYlwY5aCAVKbouN1YPSe9HsIZgdg737gTvl1LJ5FiB2J71Hqfbpi8bNgKd1Mi0c8s9P3qvwIJB%2FDMcsmwu7cew202Y4mqR%2B6mAmcJ95Vfx%2F7g7seo%2FixaXDL%2BqK0mTNNIZIQK6z7MS8GDFZlvjEtUNCgeX9pyhogtuDCAH4ZK98hIRLvSgbfPKQCdyWNf4gVAKtn8tPuUIafMjqNqPwdEI2BI4yEl8CJzGE3b0hjLquarEedxE6a12q1YXXFCDP1zAcBK8PgF91c1Y8tKBxAsnfnpbxgMcDKOH7tPYw7xSaLwi8dsXnoVqASFRYbTcKt4YqEhrbnd49cZnOvgMQQw8WuJNzq25PQjBpXe780oO6RaOAMKSZ37vq4usHJQ5PUuwEXIr71a%2FSQOnwAYZI1nWap6np94E%2FWpFZV4yn6mSRHJ77ZyJGuy8l42dStwdjSxJtH0vrMK7E%2BgVuD8ew9n2BwBUuEyDdLwhd5qEw3c6pvwY6pgHtKAr5BE4xC7ATBDde9moy91RiyAyBpf3tEnCWQ8KsR%2BSc0OYsfGnzEn6BXiOT%2BhVlX7MoiI%2BWiDeGCbxR6IK1SLmdFB177gxkC4VXIsqxeuubAEvJ3gyqpultn%2F32AHRh6m0qGXsoFbdz4FMKUxUNcc1xByqK8Qli9TGkL4PdYddbuk%2FR3zs9rInMY9sZGa8LTJfq96%2F1%2Bionrrissuj2JPJRp0lZ&X-Amz-Signature=7d78131a69270fe3d38e7592c68883b7d8a4e4f300748294777e2765ad12189c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U24C7YJH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAaTbQ2DN7h2%2FnWIi%2BPHLCoAbq3EBxv%2FpWz9dwxRg78VAiEA7EaAMVOTfVR6flRKTYAQE5xUv1ZT67ypQX7Y3HMYfa0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FrA%2F9Ra6jtpkK9TSrcA8Nc8k461hoMiui6mWaqMPU9EwXaCDMn6aHy%2BaooSZ4%2FuH8UXDn7ONGopOGsdznkwST7OCm3hit3kHE%2FxRMMgPPgCFnWQR61KG%2FlZewMAPVIVz5Mg9QzEgPIlO0UBf3%2FsZvc9VB4S%2F%2FHSWC8sHzbd708T0fOnOPHLN%2BeAFUCHajeY8BQwOnJJVh7JKh4jR9bmBZoc1sS35Pq7LCLp98EDhX66sY3%2BGqPkLPsmgfYQ%2BvEuhHk1VUXNzbfdqXI9tx356AmW9tENTOIV3Wh304zOaiYD1lPdEJBlwpnIKfGINfkgaQ3cAxqC7j9nE9asmsmR9r32JuZ%2F%2B5cJo6MprgTuqUJKUxujQUQQicNqU9uJUHv0XZAWbi3%2BMUH%2B9tJm%2F0h%2FgcQ7zElFqN8wrOHN%2FflPQlW6DLnp%2BqdffEKR8oLqlr2vf0taHRh3LpzbxHcRqi9jyNsL4ah7TtU4%2FZbCnIbpppW0KqjCCGvHaQ97jZ7VU7k8tK%2Bo9X8q%2FQFB%2B0lD1eGybRd0z%2F%2FY1MrsziYGFT%2FqLvkqg1yNinSc3DdPJ6lVxDUpY%2B88tcHb%2Fq9YKKPTGF9cjMOiFdhOb6MEpD4A36AVgJGvWIztz8CI8bPvZ3ukZ65iZYDVjvyn6uioDnmMMvOqb8GOqUBbhwZNwIouSkId5YT6GGTIc3WLRGNBaqakN5Aqiky534ieCoNqRdOKsCdVxnRFao6IvziglVcdq07OZG2cw%2Fjgi27uGLKxj0R9IlPhPmgF%2FFKDg33%2BNMxaJzEqJbm4D4OF8w5StQMrN%2BWU%2F4cMdvggW34r%2Fi%2BAZfiUxUG06%2BMkoFf0VxVej%2FZQwKeLWMEjCt1Ij4035SCHu8jII4CWQLrPQv9AFcV&X-Amz-Signature=f32c80e3af82fe738a9cdc96bb987d8dbcfb46fb3f341f929fdcf6aa8f3b401b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
