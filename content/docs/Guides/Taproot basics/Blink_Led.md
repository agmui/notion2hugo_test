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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NJQG4P%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCkJY9vRzLi2Gd5lJqHaGZKARlSO6UQvWU2505GbnNYlgIgFU5mROCUnkvOx8avmd9VenREvhbMNS2C7HogdbAPLmAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKhEbgUu8K2jtG2vGSrcA2%2BVkYn99IDqxsCuN30FiE1g3fP5dCGySgn3OjmVuw90IujNCs46cP5quVQ4ft94wumCry8fNIzMAmvOqa5zO4j2rgb%2FPmdGbXA5K4YIv6z5B72GakfVtMczP0GQAtEnTp6u7uaxpsoO1TjTCDD%2FBwpEyvg%2F7%2FKt8D85CiggpUGYCT41wg9L%2BV%2BF%2F9Z8gNvfRo1sIe1yYc7we5K8XzHbJ8lwuOnP2%2F0%2Fp%2BOCOjWxweETEcH%2Fb0pqK%2Fx6ciBcthUu%2BMwxBRSsC5odoo0OdRb9Q%2FGw0rTHyRE5SvTcO1R%2B%2FqZPlzjp99tR4fUfE4NGqmLEP4aTcxSM9SQzBadTILXe9LYlr3cRD3b7SnDsgDSPgjAU1u%2BjgmwA2oovcqVdmiMOjzDEBog6JjNBVbpXVSg%2BRiUWW3pA%2FzZCGs9cyFRNDfKu8K%2FbRXrhaRgR6PWoqTYln2c%2F1j5lp2n145rv4cubJ2G80uxcrcctHE%2BXc3bOwGt4Uf6EoFMxNsTbifP4KyS5esNo8IIuJ5KFdcZq7T9aOlUOIPmxWNOerJ3HBHyYULeiVsd1AqxMx%2BNe8zNHDl8yjRQ0wRPuHK2aLH9jYul7OIn%2FIaoYVHM3q1SlvwWh%2FLlrqZf6fElf36cFYanmMOqVyMEGOqUBIjPtYivkkLZGJOXm3skZ0dlrV0pxyEE%2F3cjNTlX9gjzdqfQdYNQ0nK%2FdqqOAuq90EPKEbC%2FsiP91cxGAH8YcXeN4%2FdKGiIvMYx0NcsHabVqJ%2B4SGtgWnNV1DwhDuv1yIEAAAHY7Qk%2FZL7JBtnuV8N6qyJgBsvv6qSdqKKUT2B2HREE7HMR9HJRPLyzmEnbETAtc5dEFZ5j7WGWSHzdB7in1J69Rr&X-Amz-Signature=e4bf714537e30370927f6367fa57e4469b54c875fae573524f72b88ce78676a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEHZTOM4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCGHKx88BKRtnxPFHtzviPmIU1FXUWOOXRtvg9%2FzSZgBwIhAPx04JnxhZt8qQxlqo9GKk5M4svC%2FiIoZGhNhEA3J6MZKv8DCBsQABoMNjM3NDIzMTgzODA1Igz%2FZPVHu8O8mJp3r90q3APqJl8DkDD%2BIEzvA8mMjKK1glps1IRuV9H0F6jJ8xbafLEmqMQfm8%2BzDo%2Fajukd2T1XlDA3BkpJVcJeTT7Hw3ZKLuuknCRRa57W9DGnNp3h8GYwphFXcAk4UEDagcxLqQ6WOplw5C24YQ0CA%2FGK%2FghUTZk5dMk6UKb%2FIWtxN2u3ymmAC1178yvCkanNHjwq65752ROtVKTVyo2LxrZqjRauuOoDZbNQ%2FEK6%2FCgeTYQFedvCAm24QOFpCbnAzrdJYR%2Bj5DUune3355pka1Esl1J%2FTzqHqr%2FLhfxLzCFbzEpJNIbw6XrkYTlc%2F0MfDoyOVdUczJGAznv%2FEfAH6xiKvbBYlZiH%2BYqIgNg6Yu12js13hifIxCRPG2zm5Z6d7AfZPuGjWCsL0GqTtJ5BVONdTSfHiC4si4VLetKf9VBO9qUYZYwGP6QqgTmbWzhCjDpnjNMXE1adz3albTrVC92vqtTFDDIOJ94GwDtMWkHX2EV15wOA79OAX8NRyehEY9HhGSACgh0XFfPOIeYYDUUizk8Uv%2Bw4z9vdC%2FtLWoKw2SmF5kFgn0NPn8PopFFKBrT6o3mOQkhxp%2FNbk2yTzreWwuIR6%2FfC6td8EiDB9okpAzZiMszLsYvd5C%2FKjR6SgjCzlsjBBjqkAehWYvrH9Hg%2FzSx3x3i6ItvqkKmV8UkYXRhgvDtLaFCBllnk%2F%2BFqnMpsXfLXFpFV8hL3xEWxJmFBMVJc0qpwekeBvegjSfx2lPCaOweABmNGhQ4YunPXXjUOJmI7Z9Ogb%2BLHOS5QaZ%2B5S6700NwX78YHtvSmSwMdkrRMrhPP6vpaAyWacS6RtqZD9Ykzb%2FYBZDnD0jdvt2DgSL2q8DmCjv0KuDY6&X-Amz-Signature=376a69a8a326534f7918e58916e6782e5ba1c7371caab2e8230830200bc7bab6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
