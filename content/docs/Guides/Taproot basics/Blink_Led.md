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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQO4PH2K%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHdX2Br0dMx0FdUM%2BJkRk%2FBsQ2J3FQqfYge61My7E6oQAiBd8wY0LfO3srpVtUCa4I49cIpPYiz50LInl2wzuRHK9CqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIxBIOCbzrPJgM4jMKtwDCxW51MmnfG2Supn1QXoEZSma6bjGUqbuIlyGUWKN5vvy8w00CQoHvdq79x1DnbUMgjacgBxiwpVjxZEPXfH1OGa6UGp9hecXa825jarsavrbqtCZteuIQ4Jqny06vUm7OcdPrINrvK7xoVvjaipMXwFDBjyffp9abnp%2BSBUTTEl%2FfxVUzj4RJQYPJMSJ4f2J0aL%2BEh7agMu8780TMKwruVVawlew6Zus9yAY46o7lhl%2FImvbaBzRb7N4eUbiVvByzWpyex6vxYZiI1GUSwLTiuMvhBPjXgyhTsdHlZZ4sM4WZniyLwbsoIdaKTuwLLKEE7%2BS010ZRvRCmQPEB0Q%2BNyFbH49iAwb2fTrd659KIAaieWeNmxmzrsqboiAkhb4wRJsvA9gRVuVfmdAByQnRICcnIufY8LA92tfeUJKpPmYoI2C%2BcgqUc0ojvveIQgO%2FFZFNN3bGE5PyZX0NdB%2FKUbcE%2B0nTg1LQfam2%2FwzBXaKuQkj4GXOyaGIo%2FPclTMcAbmn4rb5gQ7zRNge93FNFj5d0CVOKzw3cVpDf5k4bVx%2BCkp8%2F37QwRXnxbnf%2FtH17oeZQe9%2FIk88opAx6QLIOpRw9EEVVv%2BfynmG0ziFaskYcWzA1yhW8LXyK7bgwraCPwAY6pgHSl6TgHkIPvB3VumJ%2FY4kpCHtMZjbqK3tPhnjSQBFvh1vcEBJqk6tu9CsO34Jr99t7HSapAGQgkziXvIqy25qIMIYhXbY%2BV6ZvobSCH1UM0OlBz2IWO5tp6VBtebGEG4tem75FZKRUMmd1%2Fym%2FRv4j8KMFgfF7ozzSaZx9bizRr0391XWGyiHlXQen%2FIAz%2FSZcaUvPnZQNECdozOk3YctvbSiS4hMp&X-Amz-Signature=dae13df35a93d7dab340e853d83e95d2e83e5ab512feb0874735031e4a62f0e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653QQI5BD%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGmWy4G3wwETLvSv7%2FneuwwbplNnAzLB2rCQbvRp6O6eAiEAnjLOCjAfdGo7WGnBivq3IYHC6ZhE6GM7mBEIvWiIvXUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlMMfcvDF%2B3z6%2B49yrcA59t0UBGx%2BLphxy6t5OCjqBO0tr7Nj2LFEpjJbhspFxc4bjN9qBfzxeX0uBfm0PXzFCkseoYcdIwoyCZmhXCN3DVb4fXxdObQk%2Ferc7Px6wso8FiqLfd%2BqVNDptOmNN2tNn0xSAn6bgj5yIfbhCI%2FAJ%2Bxlw1zJYv37EywfdCV3mEvdcMOOQVcKFqye96UJ0hm5DjJ9JrBvFMsxZybZsfrOBDG4pR4Tq9iJLTHELu80hhNK106N7rVQE7GEL76F%2FDDSzDeghepELieAvSY4Ozsi6ACkM%2FtxFr7LzTlV00OlUDFu0Es1R54Dei0DJNuUvkhvPG3JOIf3%2FA%2F0oUQxnvZtgI%2FDdH7Rv4UYnKF%2BJKwP6XQ8ifFxRE%2FtpMsFgYRx6%2B3RSBsGZ1zoNi457EDyOzQotsGyLrFypxEpmefNV6KJ5XsnasXrjzv2X2ypxpdxpdrrsaCdOjBCg5XuMo6HqslJHr1Sv4f1TqgfOemufJY5bL9iVTJCOd%2BqyI%2BepuXezbA799QVNWCGrNveNnRG9MtCnY1Cm%2BsWA%2FNQeleiiCJNSIDbGZ0bQYSb2ssdy8GYXNF5eqLgz7n0LXt2NWISPxD09RGJntRVmpzFphOkXJUUKF2HFL1vhm0BWXIPdEMKygj8AGOqUBzQiDeD68mMWdy5Hd7clnyYeCHMjG7KekLNRYPWsk9DKqAboJ8VIIicApcaKrppefhzRr2yNLU3532WwNQ8qnD2b3mgsE2%2FYfYAeBD%2BbpyIGzTKqyryzVtwcIbCBcQ8Iz3S%2FIvW8pKuvD1Bg17%2FhH55EhWxAkizsEK3QZY029kaFEWcT9M%2FU8wIGpAaSoS1AOXQ2JLNPSDFDVvV%2FkRFu49%2BInU8HH&X-Amz-Signature=235f7b851b23fa443613389d39ed8458292929d5d623f2c9c568100e83a32189&X-Amz-SignedHeaders=host&x-id=GetObject)

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
