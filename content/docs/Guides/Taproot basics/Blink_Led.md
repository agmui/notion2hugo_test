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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQMQX4M5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8brrIZwG16gjX7DFqjaHepZ998TTlgdqhcx1mPZDdPAiEAunAFcljVJDlBDcvlhgcunNjHmyIhGWiKEd348Qt8cskq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDPUbPeC7vGtocXjoxCrcA5zNPM%2Be7tjsabMQ20siMmXXSVcUglkfUAIlxp5hWzR63XA%2FncQkM4d7oKqeesY7HFQsEi0AvXr30Hk%2BVf%2Foo6Uulh2omQCiM2ipprzsVv7WXlqatu1%2BxKZ20BsYron0%2FmTIrxmjEignlABK3nmOMlee7Pu9Oj8I7KF9rZRcrhOWvPa1cvUHPWg%2BBbT%2BNecyKwBBMODLvkSGwI3AqhMXYf%2BhYTkrk0lkdKpjd554gzGxv7rlcsUZV%2FK%2F1Os%2F9SbbO4WHKVypvnA2SArsiyvJ2RGykbePsnBKYBEwbx85qA7y24XJhQkbgN5BbZp4e7vPfahP4RqymCSjmNspeJOD8HLJyw%2BUnWVVkwbmlByTrrmLxEYxdUKBJBAIGaVKonk6lodmzRdXZQfuJIgElZR5P%2FDotNnk%2F0QmniOQ5EW%2FNFJ8tLPMN8uyHRQlkDMeoQmxunL6Vj9i3uqgPbyWLriR2cD%2Fq4eKXa7Fa%2BK%2FJwhqJV9f68iiCX2bfXJkFhtzaxBAfHTXZ7ZaQlA92hcFsorbEzRDm24VjbFmCyiJ4Rm%2BMLIqjCmwP6W3L951QPi3x8UFqqZWlWh6kHzs2iD2yYeoAlnuQNH5guM51%2FwosHJfBXHJht2XA0JrL9CVOhOJMOGXjL8GOqUBetMHCnFV5NzYbvrk0UBB1s6ZAWAr9gs35%2FFfwXfitN7fyBnZkqIgKQq49eusDw6CeQ4qDPDOg4vHN46lyH%2FzbRbbGGimJHYFf3U86aJHap7CQBDKAqn8sSBdNyny4CapsZTlJPDFbU1keN7kpwMvcddU1lFkrLlXvHYaNuOjVxm9gUxrkneoaMy5P%2B4KAQcBw7rRp3XBg88EYXFR6r8OK8ZO32cY&X-Amz-Signature=54eb901fdeeb72a2c0c054f3433fdc5703c5122cdcd49f42425768436b7ba004&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BNVBPS2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP8rzXpadRc6Ad%2BLRmntdIcuQ97A%2BpLFVdyOeinilfzwIgXIzDWW8gOwW9TXov6ggqMRzK%2BRR2X8IoroJTmzoNFPoq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDIsFwc9%2FX2W9gVLq3CrcA4GywxJhrhKNVOP%2FfNYWDeaLKVlP5bph8GKH86S5ElWoP9E0IIug3D4nV7DLQOIGj%2F5EdHSQieXzvP%2FQBWvCDTVs4R2ZxPv%2FV7Alw2FPS85vgB9NEINMtghS2ZQ46Qwy2jjY3fYmt%2BtVL1ersFDbybuvpovRbRrv5XyXV5BW87XhIbGHzz2VK35477FDY3d7wEqu%2Fd1LaeiPrGCtQADZanJhiHJuy7AhbnnI%2BvF9i6WM%2BFhqIG2gudDNJJcainrWXYoLqJVjzCRJYtwNmibcoU22%2FKRpzolgHggfrL792exBjSyIPtVIwJKF%2FJOuPhjAHGbbkXApC3kDyb9MRPCu7CLUrqCdxgFrhV4ABYqpJKIRDjhXQpArnDK6tfNpSo1uGSsfQHJVF0QcthOfoD3jgNlUs5VcVjwsYLTJhtfdFERjAvT9asPWXAGifx2vmHi1uGJVr03Aj0cXmqn%2FCeH97LoYWmF%2FKSom2Y13QtBaNMM7C6ySXj7b13P54nTsMdHgKIG%2BhEuomqyl25w1GYdN5Cuwj3IPutqDxvSxH0h%2BHFcPDMTjecfCGAbsmQgY%2BkUhhJgTlslp8VFaTYVbb3HTpMMa8JefU5GvjcOZQkHDO9sn%2FnC2qdT19xQ7QssxMN%2BYjL8GOqUB9mdVZOBHeP64UIRENwzP5Gnx4Rs6hDiwwmm%2FBhCEj3zWeQemfzPLT%2FizHKBKBbJEt2HuN2NwUgG1HW27QprHU930%2FsNnSNeY4JKLzFJCB%2BqmruoaumF8VhmNlnUCrn0YqMrU7kScHoYXxuDq655sJx8V4tA2ncpffRUcQ0j7b4bu3mEvtRCVIu4ZLrYAOe01zROBpXY5aEexqx7KapKF59Ckxwl7&X-Amz-Signature=6b5b97b9f92a0f50cdee05d8c4e7e5a0283f14b494afefd48f5b7c1599cb34c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
