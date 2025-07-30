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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3UF33UL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Bcpi4YuvR8ZuauQnEDd1LBMlSrp7X9vgFr30kywKSQIgMYI%2FTxNfzn6jbCENm4uSOSjRveI4dJW6lFI8UcDf%2BqsqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVTxdHQ2d4g%2FoY6pCrcA7fY7ntWD3XEORVMZhNrbTzConx6DfT%2B0hEfhQjPl%2FIQgm%2Foyp9Bt4njur%2BLLKM0BbFQkVL2A2t3OTsmRKh1hKImbeSCninmaskalaWJbs%2FcDxSN%2BpmUOJgw7IZXpiGXJyLUxgCZd8Fex8gggGAm5IjosGuYyYwxZVKNMFjpoAg3r9M2EAXg0OHG6ZhEEXV2uKEgzReVQKu5mVeitjVcJ6A9nUi8UqijFSYFc1Ug%2F4LKNbIYDBVhYaNditL5QAghqdj17WVuNVGaaoKgDopUzdnYGywCvARqJ7d8KrRWG0z5sQiWFbPtD4orbGiuJSkxw98DDTtf%2BfMBQ9E4O8g%2BZUIk1CsBJ1A9%2F3TUBHOfJfgME%2BV2WzGy01eMzl%2BlEdQyAaIWUoiTBFYip0PbYjPYTkdL3aRV5T7wRlQNyNw5ulOHRxcrsJOcj0A%2BBlvBjGaFKBBNcYoWCFtPtbKbrdJ4G7Tb33%2FAa859irhheLZNANviO1JOa7pkBafJijTwxvaXtcYxN9uhnum04KLwiIxGfVHJ129G19CYJZcccAQExFGZC%2FyePj8ntj%2BR%2BjFY4EZnTLgwx4fkLjJ4xQhDfmzeV3vYHspRgRAi65w042ljPvUqFzn6nzkVQ%2FPc2uqgMKWJqcQGOqUBWa6jgpZytQkxGoVEWckgR3KU8wu75ICftpGKD8hOMS%2B%2FGK7Wv2S1spv82gLNjxnEfVIdq%2Frmd5paIw9xhgXUOV7iPdnYBgOV0aZ7hgALXxpB%2BahNKcG2ApmhdoqpT4pavAPmTbvTiMka1N5p%2BmZqtUoswXDjHyBdW%2F4f1igiFQBV2yZV86AzQQB8qQ7QhmOk6Ji076kLCY0jF7wX%2BFcA4SlfySYi&X-Amz-Signature=524ae30df90636957f8404b7ddf3565a62f30ea34f39d6cba70fc7d09e909fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFYTWCZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnw3ol%2B1pEH69xr423CLGqlD%2FjGByHQazcDwQw8qBEhgIgcn8p1RVsflMX4d2Jt8PmKgobBYCmkTcrWSGGZ9e613YqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNrXV9uw6c0V9QTIircA%2BPtR8ZUmAYs0x4yPPane0%2BODKUplplZ5QjyKb1M4rndkq7FQtbIyZpBD0S3tKYzSqGtTbTiUMGq9f0CvhEsEm5xPdoZNf3tMHuXlycMdUWY7nnqMM1H3OhdceH6mmRKFASRHy48dTcfQDsQraMMzrrZCk8y4r0JaUuy58xK5DiWp%2BD5Y7%2BNXTtIPSvvHly%2F3Q3fDxzum20fgQHbCCeL6ufdAyu%2FpYu9iI0tBDBN%2FJjb5Z0yWvlidJirsx2ygd%2FAV8DhPLuiVQsU%2BTbAS6vZRAzowo9x2YerpECdSjWOKe1eLrqDzVbJEf9yugwMXcEXcZCMHj14OK9Au8Awhl1PETA7cqpaFdmsQE46PbNUYVZdUM1zNSTaCr8iFdyFw59uIg4YJuQyYOQq51Upe8cUnwUnuRbYuuN3%2FLhFIbOUR%2FiQwxA4zS7TmLld6nyDr9j9Yky3LWHwD%2BK4c7b7iGR20omrn85KNk9W1VwOTsX66EP5ql08ZXfstRvqvWiHYXkJxHxC%2FsJ0BIyBTJ%2BCAPhOW2f3UIlB%2BSbfAKWr465Lgpt5IWcTwBziilWOwWWIvkcCsjB7uqgNbiimqVnXjaLSJMJx3d89rH7WGVcebDOsPLDAYf5O7jlX%2B9m6x7m5MOaIqcQGOqUBBZDe7cwOZffYXEZ2B5D%2BJxAToXRTLD0CsMEvzGV9%2BVE4xATAbaZZ1y1KmAJgLN8hodkDU0TQKHXEw2TXwgC%2FfL0472FXx13je4HzUvpIaecYrK7afYggXCmbPCeU1OhAxLY6Q9O6Wlmurz3tskS0zfJzHXmfNyvQOcNGzSXATTWT4nHVKquz4Ne0URRwxs6Q%2Ba0kiV1NPioZ%2FTUTdmTn5i1KWPty&X-Amz-Signature=a9197f4514c88e7d14c21451edea965f3fb3c4ee0899510231656f5452f7882c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
