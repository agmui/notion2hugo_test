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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKM4XOS3%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBI3gueRaSFQ3nhifLo0dPS9UABZbNrnLwQDyDiNKH9AiBpnVT6q9oiSg%2BXhAo5jzg88IDrFylx5Eba8KZ6Fo0e6Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMn9O7EgVwjZ9%2BltjoKtwDIxrFHdASlOv44uHW7ghW0qSNnI6GBYr6TviG6l4elIpa2vxH9gmW0nvohvNis08ZJpJVBYHakWJ3ISZIBY7B%2Bi74gIyH8w2%2Bqmdrh5mFwcxxditOWco17HGCx4XE9XbJgu4X64zKG8MkFy%2FCKXJc352VeKu5%2BpyFQ7OdBhF1JGLmRFPz1tZV%2BAd4fd2DxfB%2BWr4UYUyILKLN16KLMihfMzGEY7uZoqbHSM9I9IIUCtWXzCzaq61sxrDCehWpeqcLV2gEd652nRwqEMr99mXh7%2B3BPeaHaNsKTYEv1RK9tg8867%2BNvDcq1KO24hKNv8jWhrb%2FreG9%2B60b29H1JClPhzYbLdUCqE9R8r%2F38I0KZ5ItUMwXNG5l7JVWj%2Bjkmf%2BkVOfAFOH0TtslcwMNq3ZYmOSuYZ2JvL%2F4IEXynFZf9prnKBsz5AJMkOxl9THhDSvKs2gjwrd49JjodWN2W8O%2FmrMhHWt2vXFWC3q4qlMc89ukxG82fksj09ikTdteBFsMmRjoNU8Yc2VqHT16nb4Wx1KqGHRNZnvayqxPOrsKfXr1%2BrS50SIxcBB4r2Pta%2BCbVgNbJ5ieiYqiMX3Jibg0THsFzS%2Bmn8wAvjy569pvRxo1Oh2WUmx3js8Pb%2BUwgvnT0AY6pgEyLbZdKMRwF8PJxoVB6ZdS%2FfPFJnaigWc%2FITMhBpFOqgOG7U9EDQ8bsz3iCe1ZtQ9J8d2Ri6v4OrpVn7LjYeAyqnH6l9TzxuOimpSk1tXzHTum18Uk8rbFvjQgOl1%2BkJk3i1JDUUDvHynHPAaJLPxzXDYRWIsoYAaupsDTmMIaBghJyyqYNI6OW2NXu3YEOWTcjXXXoCtCUokswgVp%2FzBNv0ERyN9I&X-Amz-Signature=a96f01cb0d2ad84d703c7a13b1790417d50524c0c845d2d931da25b0effa4a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664MQFDM7%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKmzsqybC776npga%2BHRMoap1d9SKPi8Y37DAspOqj8uAIhALdROgBzNyeV1OlrIZbD8UbFP9v3Fl%2BP0zitN6hG%2FDwyKv8DCHMQABoMNjM3NDIzMTgzODA1IgzA0DlkzeczdXRyTN4q3AME8XuQqO6hTttrKcLFEbLQXO%2FgCXowgVBaDQJXsp6InNy7qzKQer5Xvtz2YY3ju3Qnhy%2Frw3feeIRmmN6ioWxPhikkFpg2kbnr3AtavCeDzhOfOykY1HQn%2BCkw%2FHPJhbXNCXESOd%2FciGCF6RD6lUcZNO8KWcYpA8NaQkaBtnIvsk7A7mCHrfvtoWO0UXOPO0dUtYqF6jXX%2Bd6cb71ay0aLAh%2By%2Ba7I4%2FgMEudo82MHA%2BOydFK%2FZ455H9qoh0cPzO2wMQ2NU6mG5FeK4tL%2BeL4s9ZFxwoqQqMxdNT8lrIOXUL4lLd3nRuUmG75mSIaqvEVk85pw%2FT7JhdFagiIOO1QQyeJDHrH1oFZGMmRxZJWrHr8qJ0EWSRD4ZYJ8Des2oluNHreawElqKj4UP2Bs5d1Mk%2BctorVRxqt3mB8EePbSDzMvbPa9Tob7p1CuKeikY9HnOybKmNnGXmp%2F4bXrzZODwbz7yhoCVWyJeDeKJypgZWs5t96TepMqnxVdqOjMPTnA6MBWObbGJz0AnwioZtdwnZXF3ciwbcd6%2FjoNdTS11APfY%2FAZz4xD4S26AmuoG%2Bnp8vzqPw%2BmT%2B7euRGgL4w6taAv2KT0lyVScVmf6yP2R0TEZ7bC8LvGhAoqHTCB%2BdPQBjqkAcDQSgjSur91vpuLvTZ3V1AFzekZ5rpZq%2BLRL6prdogJYsEsPBaZHE68pvEONsrRAlNGqnpf3zX9SS0%2BrypGkDFu6qscKva8SJkJ1eosCR9BXzRtK81D6JSjOxhZ%2F9dxMr4dZBQA8ssQWo5C8LYlhzziR%2Fmilp%2FnHE3kVhdwVnVDEbtneOpruQObHYKE62gHO7mjv5ayJG6f7uZASoUXlGXiEZQv&X-Amz-Signature=1631adb04171a6a73300119d3d0aca23817b2b6cb0b6352f5fe6f6a4876edf15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
