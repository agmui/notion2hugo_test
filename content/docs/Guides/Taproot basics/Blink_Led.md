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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7U2NOJ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGFMI3sqHKqEcHmbNvttz3gCr14Rpjx480T7cXFYcJ8QIhAKSP6sTOnD8sLF9axqFoAdQ57G6AMlXV9l29ZD4YMReJKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2XrT4z%2Bpajq50D8oq3APqKFCeNempnl5%2FXS6gv3prRu6tOHDZ2QMdnZA8VbRILqRMU6vC7Mzvzh3frB33g9tTHFxRwU%2F%2BI5mWhQm%2BnLGvY%2BMQJMputp%2FHapNCHs09ciZMxvhEhbZRsosZH6pUoBKqtkL%2BnMbk46fHdR2ASQGXS6axWIY5a5VzQz0oNFn5Vi2quuLDPE%2FBjVxcleNnP8E3mjtBhGTZIpzXwkum9KEXXAuznbAkmG49PW%2BqruI5wAJddhE0sfnzQN77uYAx%2Bd6JaK%2FKgceNVHlebvgxZufcTHl4RLVxG%2Fpti223o0xwANqepglgXD%2BZYrJW8kIyko8H31mpOjSMH0Is96ipdaZf5gc2hbqV66EYVAF9HhCcfAmE%2F4L6PW8hDzl8l3JIjag0mDMuq9rkfpZ6dTBc3pE44dQdxMLe5KiOkHWB%2BFjqqYzgzsoqDPrbgNKkV40V9sLWd4X7fYaBErvGIgatJuUXSnv4xox7S3iTpSPNeOpYFcdSIQXB8XS74Hky9YNiddQnoqrp1ZriaaiIQNZnOpB1FgEaJ11i4XPzQFoJEpjzmCcHAv1CJEv4FukndNAyyEEsgE0rgZnjAADr5b1xaOKBSvFoyRMvUPMKG2v3XDrcS%2F8fBwzjuaQiT0uVhDCChaO9BjqkAf5L1zoI1Dd9sHPlKS4LFd0Z1Nz0%2FuSZabB%2FcJSJ1fvl35HLukwZpNq5NV9YztnAJsT%2BZn%2BtGZpBfiQI4PgbwflrvulgEcrFm0eHW9hn2egcvSp9oIbrkoxuvbc3Nyxgqzj%2Bs5jtQ%2Br6d1C0aCxciqqI%2Ft02u%2B5iAE6n5sN0JVAO4Q395flvvi1CARON35SING6kOrn%2BhRmFgFGo%2F7%2BlDs4W%2FsqN&X-Amz-Signature=2471072da3b616bbf0a98d59132a1cc967a2adbc12023d15129791b83600726d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ABYKK6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLjUdydZX4ma3E0dbosYaJgSV2b0nME2QQX9jpPYityAIgZziwVpuVph7WybFgOXCOSgWmRj13dbNWTP3vO6yJYDcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWDQzBCHNj9w4k7TircA%2FC3wKdgSxznExQoxGsDVn4w58JGY3pYITkcJgcTAlC1Da%2BtIiS1AcFscPHBc50ksOP8AfKrm57XcwHfiu31niVDVaDgrhSgm1huV4jLTQlWpyb%2FA955LQCjHvF%2BPI9S2uNBnqIn%2B2SbVABVM2wShwZ3aJjArUoMbLMIxrmd7sQJ0P3ex%2FL87M8OK4zB7NDyuWkzhVZzLw2%2Bd6umvDGJXQd2y4zdj%2BHjonj%2B3P6TNCebIq6tfexPChPvOhawdq2W9kyHIgJ8pm3l8D0Giv4%2FdaTNb%2F226nVXR1PP3B8FjILhSquBPoeBtB1Vx7aEDP1HilZndimGuN3S0YooTPvSYFYIUrkAiWZjaiNiz8%2Fuxmtsos%2BrLdNTJCLTobKc4i4xOl6G5tZ5sPhGX4aXEpwPd41fX3MHS04%2BFYaiszTrTKToUwEAwMJxuh6yQYRDtkAJsAJPoKSWiOWu0DoSbJcj%2B4G7rICr1PnyXdU4fIlbZ7QsJlS10wAijqy8aP5Vcdw%2B3hIvKWO9kcvwLIddar3at04v4RtK%2BUcX7I3OkWvFoUACSJl4cAxs0HdJ5fQSEIKmvLEMDbq1zeZFDu646ihfFSZ%2BD0iwOeB0r%2Bl3NvX9CMTuHjaOZhl5C7jaVmeFMIaCo70GOqUB6NoGlPWmi4OmTtKFS9Hnvp5%2BFHsZ4gW9HnOLDtrtswWSn0zHpGXvCcMEabU6ic7V9dkpA1ZY29kay3H%2FMh4IMOTFUdkkbiHaoKSDi0su5P5DuqgST7FnGzimDrM2fm3SzaZnDLoJ4fmgjITvYd7AWszjARLrf4rA3dCE%2F9yglRnll7tOy40vIj913M6cFe%2FBCdDpXJkT63BmSrKFAB1l5rURn8CI&X-Amz-Signature=5ef79c6fc7251566cfec8179a1f7bccfb135f20122e4a60caa0ffe6714b4280b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
