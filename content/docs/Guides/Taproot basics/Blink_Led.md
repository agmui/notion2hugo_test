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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GS4AMJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCoUMlKgBTzTP9L6WuM8PAMhRa7MV0WZPc89SsYj%2B%2B%2FAiBMTnCwM0NW%2BFf7BM5QZ7obVMSxA%2B4BHCG7FcwgWuzKfyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMl9p5oBiTsetcojNtKtwDIQfBrLb6SyFroFSVRhr%2BZqPWQ%2FbPGRobDBw3C8WQJLe658urOr5COjn0xUOqQeGclFvihXQNXBrmlXttyud9n8kN2PH%2FTMERYSs1jqlK88GiwwuyO4c1u0Q%2Fit7J3HRa3oLpFVGXNu51PTtFJ8C%2FfID5H0H%2B6t0UHzwUUyF5igqGaiETG3f%2BFP7rrRZTWbNPwBUjko7FkWq7NXqIgMG9DD3oKKvAbuEArnCcoixjPmNRe04rdp4XfUbDu8z2lkJjAtb9i8rjg%2FtMYFMvs3gmEYTQnaWAPFkWxbNWo4ovJVypFy1RWpU11Fappr4N9SM%2BMhb2ZLc1GsYU19YzYTqmJMCjdxQEqh3L32iCVDvppOi5k2dDHNKJi2dfAbuYROc6HzZ7BgMNpFx0ln4EclNoAw0n3VHDx%2FK35za41QXH8g4okdG106%2FQKU8uSCkjfE1wLX4stWW5j4PEjFVxN2DjTsTqerAXOE7GYJYW%2FFRx2Pwv34zG%2BeE6aTwEUlWCgUccvgiWZAOVKymAXMfHu2NZzwkExdP3kqTEMu8dNZeiuHznkqtmmwJjJbaxyUIYjYJHWPWKHhsILK3ikrIqkrVjvZvapZXYbPkg28yJz2eWiHTJSmnrLBjmlaYnbxkw1M3wvQY6pgErpV7gONAKijT%2BDTWxFUBJm%2Fp0FdkwqegVZ7F3Y6rrKLfN9p3vgJRvGEoVEN0VBs2tQDrygfM93Z3EHMvqcgxi7UPDovQFBDPcnFtw0%2BOUed2nfhRB3dkZNGlynyU9hXh2miPSZGWGc0Ajuw0hRpkauF%2FgDxN8%2FPz4lNWrVVhWGJ%2BSzKJ50VOQ9xzQNAJ5p8pS5IaNyQaRcatrU7hisBeQSCL26dXU&X-Amz-Signature=c0cb3a55d7d47e70590362f9b33ebe521f74320419257df8fa054e7bfef53192&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664UJZREL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7PkNMnNhhy8tvj4kHvwc%2B4cW0cidpmFMf4DL%2FHU1yxAIgXXxPoNn95rbBmcvXrhc0a14xycpNw%2BRVO7KsjjXNzkEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDI37MtyWO5AUyZQZIyrcA1pdgmoXvDt9zYOey09dBAN%2Bn6xSs0H3xRjdufdFjTfX32Au9bke6a4F6Pw3bzWTAe%2BHD8xTsBNsvGuQSpqeGwRrt90f7huPSpneUPmWP0tbH0vdUMcTTK3rxnte4XZRFDbD7HF3QnbbhTlLHp56B5z2bhQmRR95CSOcIFPKzJYtQ7%2FuWK%2Bwjwb2vvYA5JKnZerrZ14759Vrgu6JNeJO4EbjKbYcayDHeg%2FDdSbRIkKE7sCJ%2FNVXr8%2BfWeRFKzH6CiHR5w0AyXOZUeUoJJmKVdBdf6s542wzUOjO0%2FL7ecsaYyxy4Eh4YAAAEhoMckpttlHQ0K2kz2UGBwpvrjAVb2ztWK4SADfRHNWQYEsjm8DEfe%2BLdgizOKrJOIw4iDGu0Y9jzppxmGga9DNi9zC9bx8oumZeT5%2F4Lj5esdy38wspeeL%2FlvjV0k9R9NpdjVDGMkM3MSQE0FJxUNtHn6zDtgZojIJMCtqgCxr6Cigl5%2B6S1p3XOVM2G8nSDgRfGOl3maifxZtevCZpyEVs1Q0%2FnKnaFSNlk3I6rB1sRwMp2qvFfj59BSAl1E%2F1gndtLNd7jpMk0NXqInrYJ1CFqp8QM5i%2FMhG5yvCrGQPlEkZ4WhIbCvGcMYJiJ0BJHlJXMNnN8L0GOqUBvpQwj0ZI4M2l9G90MCxuO108Erfins7mzG0nulhBkp4EFq%2BkxD5syCgkBnkIYhswg1YuFK27Ip%2BEloYeBZ4PkIAnrSYVuaCykIOX8SVy5KB9qSMH2ZmfVXuIrfyxxmPDkYDeiBQx7g%2BeTnyWVKt4MNQJpPcg3bcb7xywLdaVZdHW1iN0%2B4qR%2FX35fWmMFcIjpwhRu8hlFEKXXNuTgY59DVLA44Xv&X-Amz-Signature=22b1896818152ebfc1dfe8bbdde5123a23c7ea940f12898e9770d49d332d378e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
