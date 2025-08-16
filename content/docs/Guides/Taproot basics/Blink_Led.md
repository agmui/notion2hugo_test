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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H4O6P2W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEUAzHjqe%2By%2FdhOmoM6yPyDAgkWUL6tO%2FuqZcaomM9HWAiBmZUOtLlz%2FGStwe6VbD6TZFSJlXyKuOSpgtVDYcL2W7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMN7Vsd7exMjfotaK5KtwDGcZP1rfeqoYkZf9%2BYCluCGXfGaSl5%2BfZFGKIhzfUYl6UY%2FFyC4pSSpGAfALoah8osGyf9cHYxL83z7CUxxQK1mpTZHGfsqITX4CoqitOnBDw36VBoU7Mhe%2FLxVXiwQEYn7DPsC4ge%2BwbixMatnhX6kMDuJ0zcjgUXnvO7jfH6ZKrag9l%2Fs2oP%2B%2FCTTO4Vl%2BuHT1nQaFwNgQv4L6GsxgVIxgzVCARlpxMoZkpCalDWfLsdLI7iBdA5d9MY6LpJr8V3lvRzugY0f8bCoJxxOYHKUVC0QAkQG2A%2BMSVcWZIHxrT9uBin0Nh0RW40ZLY2KJ4RMNo%2FcCNZ6Qg%2FnL5uoGfOYof4JsBX18Q0wPb1u748gWEWL6dnxP5J2pJl4x7dLwdGvPe%2BSEbJd2S5bUuqI5sfcwDfMUDgCmiGIOQ3Jadol1DpyC5ngfy8u08sgIXFpiJP6uOgI0Dlgtb%2BOUZCu3xb%2FVc3RuYOMoETpxfarSKeN5Zr%2BUMh2c%2BAhzVXD7TqzvkAid2AG%2Bj4bb6%2BlWy1E7lfuPSY0VuhuLETCIVeC9hLIZhutShf%2BeNo88AYKaxYNjVBEpD55extF6L5Z4Zad61eVCEAWoAo%2FbU0YSRk8iVKFfF4xsN971RkgkzLAIw6paCxQY6pgGnPZAFkiwucOi5RWkGPA3Q09Xv7xYB31L1EV64Sjd0rTVUCW3P4fqGSF%2FZQ4zTQPYD543QUgMX6eXLn5NxOEBVqPa4wl6Xu35A%2BGl7OCowOJk7xSGhQ0qj7Ymy7yjjKQnWri3HG05CkPpGyhuqn%2FZ5Dkqzqk3NQUgEyuia4PMXpSmc0SFL3210DPdGOIHg9jcB6SsKK0tw4xp%2Ft49AQLGWTAEEImiE&X-Amz-Signature=30b24f8915b5d2200be2e08c26f612f03124a643dc1ea89977dd464c116ec941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHPEY3O%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIG0K85jj5DnTezmtGYC1sfLGN6zUw4sT7P221xBgtOB3AiBykjTwQXF73%2FrQ9pWkeXCay1vBf8ME6kghm8Khg9hWqir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMbxw9Ky%2FF7ovtrn2PKtwDo0%2FfcXVABn64jzzBDnzoCAfBM9Ro50xZ4eEyAECxVeTT%2F2VV92nE%2BGacHT2OFRV4mEG2SOpk6pEV3ZdjcRis7Ot2U7wblkQk6l8JT%2Belkb%2BBW0h1P7v4U8FhtCuBpoRV%2B5I8SZrg%2B%2Fn7hksuiyiCma2swBFCRtuwDaAixk3GE3Dpk3NrQXpHKSVVTH0lcAOb465kZXvbMvSNOFfAYM1PqLao7G9fYDcLeh%2FIYlI8PzCmXRFacYslvkiCfamGIjSuIlwI%2BlMrLJISwzy%2BbVqNcG%2Fh6DOCBh7VQZsDm3bFw5lrArGKDBwk0Dj6R2Dx6%2BhiI9p2cIKzGF6XOEibEKO11gKA3dVpQuk68xKQp0tVOSb3CAhQzyXzGGlcJLVs5vvEWNyg1shY%2F3INcDqNbtWaOGbczbNn15swpquSl%2F3P7Vekoh6bY7S302TYGy4iQMR10k7GoIsJgOFpLWKbaUI5WquVDcBSSCljtGlSwoFmYfCtVy5wdkMQn1V0fruzhy5kjpohXXUybjTh93ev0gVF6LRQjQ%2BbiC%2F40wMY2o3pS8Vkm1ZmGXspv7CS7nrq1JMHyysSIjGgK0uBbtx1y%2BT2Msk8FLlW5jwxKhOmDjVeSwFZcE3d4FA1c6qbYlIw6puCxQY6pgEYoNeIxctvL6pvHHpD102zFBhEQ%2FBFmvfz3C26SPLvXiq%2Fg4W8K7PhbwheIRkX0%2F5VPxpf0aDkuEOFOcS7yM1CY5kJQafgwTdwGoWduRxOE%2BTGE4WlzP55iJEWijMXc6PlX6R0u9qa8r8HZfXvQzShV%2Bx8HwTpK5GxJu2MJX7PdXq0ZJfMoyfSaMylCupxmoAdXb4offYcXCYLXmxxBO%2Fav8M%2BJl6q&X-Amz-Signature=dba1b797533e3539050a3e22f105464878057fb325c8e0a6b0a1edde751c4cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
