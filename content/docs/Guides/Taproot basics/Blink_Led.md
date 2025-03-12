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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636C3XXDJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBsWMOMq2XnZ2wXtIHfX3V1G1wHBftr5vPHwG6jQdhVLAiEA4uR%2F8gqOiG7ooCGGB6YQoaakq4cHzV1jOYdzPSwbSz4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPgJMiE27ksMtYUGSrcA%2BlIIjw5rLHc67DMF3TaRw50d5YzZt6gYntqY8qfiRYXFmhHFXqPanQ9svsJe%2BkiWXRGKkt3v5IsV0GLsdKAyMImpFTNHZS%2BT%2B2%2Fmae%2FTRvVA0bYhrbxGXib7neNrosNOznLtaU%2BPxBO3SL0LLddkYE5HDTR4SXvrpnokHJktr1K0D%2FKmGLhVN0cP5d%2FxLycXGReJc47Nzs5r8GukHmnaYhTjllwKDRCvPU%2BKra%2BqWek3ie5zX4%2FyNpnqkQWOT6YBOiGVjrq%2F4IJ7Jq9aFxtwpIBpdkyZkOl4jR5z%2FCJxMAkADNCiPCJReZtJvS0LXpVPxSitbExFoo4oBhAetcjFYG9f4GhtwJtlm7mcfyZ%2BbHWOR2kFJLOhLC7ynRFCRG2qBNuyORjcf9kQiPcBVQ9thxL2RhujjRVwgH8Xvt1LX82K8%2FPvD1c%2FPS2p7UFDMcuIGSbR8OeldOnwiiO88lW9l4G4wniHpKhS6XxinBi34BO2duCPz7W5nTdgXKEFs3TFcOQMvurSW9wSht54h%2BBl2jRahz5AuAuduNqZ7jIhyp6cd9EP97%2FSxGxEa1c8CVLIIpPPlexZ9rcBSWI%2FMOkWL0PK7sc%2B0ScuN5Z%2Fbj%2FFyfp6BTZBf0o35DC8cV5MMyix74GOqUBf%2FuqSGZrCqggLsZC3YMZmid5A2057fXRHS2kmWpZl6iy0GhT7CLtlKCt0TMXWFRPLICYqPYTV80J9niQVaaM2%2FTZMPeD2Lz%2BzIbapOuoYacb6U6tJxe2eY01HYyivCPSme9dpAUmLkF0aHLf07Zx%2FARLdwK%2Bvm%2B6FH5BRT8SZeiVrPnjErazl3BzJpJZtBw%2Fr38usz66YkF1bEvJystjZk93Dnnt&X-Amz-Signature=293a2a80c15bf7c4b90577493346642209849a1e8028fc0a61447ff6404bc9cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BXYO53%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEJMTFmO47717%2FW8CwKIiNJsyDV4iAPvPixH%2BdftfILpAiAKsQ4c3bRfkvIQn%2FnM2%2FUTycvLuXs3ib%2F6Gm3WbO7pOiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T8noEVYwpy1wnjYKtwDmlGr5huKL4pBM5fbD3YODhLvmxRcexWekB29LTwBnF999EOfVMjdHUPYS3KSZcxohw%2FVt40VAlhLDMOASLzhks2R777i4HL8zdIgh%2FUTqp%2FqQG76%2BC7cJC7khwrkGdJx7yPa%2F6hOBjdTV1c%2Bo0Dl4i8ehqS0Kh6qRYTYAwHAAkKy8KoNv6jkexfGVk%2BhbYmOwpFfEidh5cKflT%2BW7AbqFWkRciqC3yJ62k8j%2FNfy1DceeJZw6n4zCxYeS103xk5HQ888ZOUwBbHf1cZ%2F6yewTyQ3oZG2WBh0LwlcLBIP6HJhf5h%2F2y%2Fb66ryl8F5qUQ6JDpHTLwryaV5yduAJx4XybPuigSUhDqSL0%2FQ2aDCgX8RPH4EmnM3YQ%2BATdBxc5ya1jBnvOl6RgC9AvPB5Fa1H67XXvfWDZS3xfxDXVxHXpKp8Krteg5x5TUFIHIj297Y2Z7KmgKvQBVl8thFRtjp%2BFs5%2FafOZTZtrQaikb3hsjSj0Jl9SB0%2BTV2X7tJqjHInLwTKyrpl9DByfvhyoj4O0o0srVzzaP%2BBQxw1LeIWqEY%2FPFzgOKLafAa8%2BJo%2F2sRnvPfDfC56cPYaHFtKUZQ2c6bnZDY76eTT1Imgiz4r7CFudEF0JygoXT9pLCswlqPHvgY6pgG3flzEhxkS6QS%2BVA6lQ2F1DgEaDL1ty1qHRyQgbl6Qc602iiy0FfKgidkqHrOPHt2%2FW75dn19QGzm%2FbSxsPpSZK%2F1WR4f343d1lhVFjNZ0YiWbvz5oV2HP4DnJeEZhXBxNO1IwmEYi%2FPlSpKLmDpusJZUGaWiyECJbPWcmEFJ0t6V%2FJCQWKfqckgQ4StpwgVg2uOQEMl6L5DpiBdI7jx8cdR0NLEFS&X-Amz-Signature=b8a8ed2d54760eec9dd1cd649cca0c401dbc6d943e56e9749847a40dbddf122b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
