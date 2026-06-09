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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XFJZFIT%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6toDPmumIfFjEGbu15KmGLSgJQ%2BOdYOIjzW9vp4UWGgIhAJPwvY%2Bwi0TuVAymDnXYUXvunuBiC8dX8GW0JDVAYfutKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz94tqBHOYzPDcpzEq3ANFU5DGrQEHoj03H1WGb2TSmN2aF%2BiwQm8rmCL%2BeqsTSW4Uyc6YgaZjAzbTwt7E5P4ecnvhBkC0jawZc848hlhuZWYYkwzn4bxg%2FbAhr7dIsqSKv24tF6tVqdj2BNDk9mUFAMug78mDEUaAhdMpv1fN0MD4z8d0Vrh3FzKwAD9SOnIldAHWsMJnXrLGYIFXerJDN9X6fQK5uWnYu%2F9hEWurRijJI%2FIeGUz2uVqK8GxQSU0YW%2BAWq6Ap1dMcugwwmy4XaDLVFRsH7if4femZDKe5yaQc54cD4WQaBgJYMjAf0vOGAaiGLKSlxNzZWmUu6XAlO1%2FwYAxXcqCMUX3MkpSfiE3go4%2FIjcEW5jrGCxYgmHj1L%2F9a4Vmbudeob5J3Y1BmA3L%2B9yN3zvGpN%2BHxDwQzfXdACd%2BFQQOJqbk1i%2BL4XQ%2FDznzzPHmCluINhR0Dnsuj6p7nI9f%2BC5vofSyKYJlNmZgMcucw4dCda%2B63x45BbPh%2B%2FXStqgAQRhfuj%2FvTXf%2F5JyrGIw2bWMpYr34mNR1p3F0QK9rwDubTZVt0Oz%2FNQXOCmq289sE%2FTwudcAQgeXBb1PkPPIaYn%2BG1v8Tyief1D6LgZ7bKwPOh8yt%2FcpEWhBYr3cgSEMgGphtFVTCFhp7RBjqkAZDZO6W8v2jNYnwCJO2eKBxoYFktJtIi%2Bp1gJ%2BcSqNKL0pbhwxanMZ1pHqBmBpBKokHhFyqE1f5%2FsrzGIdP0UaeW991geVYVdiM9Xk8U6XPK28IwfYg%2FdButrs3av0IKDKMoByTlZqZZPw5fLjg3yrYs0bg2VDcVH9f9y7YrGPgHAx7ygsELChBZLu%2Fyxknevlj3h2jLSpA4O4v8JxVdCMUbR5F7&X-Amz-Signature=94bd4ee1e45fba5d84a15d36e8fd0724ef26a1b4af3557697d7e408af9ec6af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNX33FZ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUz8Qd%2BT7Nxwgnc9a0EqIE4e%2FAhOPVvXH66dEeRoU1yAiBUJuZt9w%2BwVFF14T%2FOqH53MB04JVqABLpZIH4WjM7InSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fm4sOBDJSL1mojU5KtwD6S503%2Bmsa%2Fi%2BHSckOt8TyocEEYLVwY63jxqoctdAQUEkOAdC3hkcwdt82WcWmW8Lv3y8B7nuXxGQUG2JMn6cu0dmypdhMGMBGbhOPJGkhdcf%2FojDCJ2LSh4JsOIXfeev%2Ba0kFBVYjUszrIZ%2BVaW0THT7A2TU7tu9BIhNZqeB7D%2FkHMF0AWkk73oGsiZsiA3LKcj4YVsG%2BKTseczy%2Fy%2Byi6dCArvlQ1FTp%2Bou%2FhJ5knyJNWs65cn0Ho2Ay%2BC6tkjn2VCsS8HPpAWjzOUxBtwQAROigd%2B6CKIg9TkTdraX5p5Xu1EmPfCK8lm2vdznGpHD2Ipe73zfT3ZToPjQONXuun0Hn6ILBXt4ifJy9tQB0tCBxfeIArVbj%2BVBjDKUu4NFIssVO%2B0nrYEi%2BEdqe2YDr73OJq49Yqx0LdK3WmmaSq87c8TMMG7FNWurLpu8a2YS5MbNg1%2BDfLb6TrK3llnnZuq08D4P%2BzXyBWbBjSJfD5sCyPofk8BZFTyXiKCSRzNniqMFH%2FLTMCI7ycBs2ccYb%2FH%2BaQ3jipFDcxcFbM410wJ8SCfLGgJX1oX6R5bl25E7ZWaUqM51gszZsYSe502QxMIVS8aWJnxcLm0rG6Hz03PKYIkFUKZ3n16q0CUwjoWe0QY6pgEYxrauW3ajfQxNXB%2BcOw679yhsWFvkF6xEu%2BX0PySCRT5ATUwojJyJ2V%2BXVxnMmXaHooieJV5yl2PwtGyIrq5NkEkAQmn9GDEusy54eoDiXW7uhWJyc%2BcAQGKqeywtPBFdXONZoIBd%2BeJB5cnnVphdpMQxGABe1%2FNrt0lp25DRTpHUqpM6MybHlOF6pdy9fPdMh%2FZahq9evPUR6tfaAVvtY3aoJPo1&X-Amz-Signature=01f21a8d5853ced40bd3a90703a2e8f907d7018e779ef52cd4a9ac80026f8c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
