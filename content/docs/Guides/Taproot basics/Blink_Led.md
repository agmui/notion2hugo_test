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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667POERJFW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNFLXEFfAZWqf62ZRfYEPJIUUqwNmuVjGAOEwqzBa8NAIgNv0FEfCLUfNdQU8BWz%2BNBP%2BEJnI0CFuPMKUUYDBXPkAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDC%2BYJa3d6lairpQU6SrcA8wBUt0zyJ8PvF%2B8%2BpP7OP0lpoYXV9ATJCx3nysSh2%2FEjnBPvHNXAx7N6CWXHPH6ukRabBV5uU9yXqxku7FpGBV0ycCQOBdl0DhSGcMwAZVoLV7NLym8aPPlQ8OBINVEogF%2FzudjpRhAGHwvogqrEKjDOR4ek6gjUgW8EuGMZ4O%2BFx7rhyl8p8FropPHJYAZK%2BEZnMbUOP4zqVBxVkUNvSBoz4cfDWyHai70ItSjrhSs5KWMYktM6Y1EOtqs3MnBOlsEdOwAU%2BqGDV0AH2xJDngRKGDwV8FyOFI88Y6jg2ZDeDIeIwOp%2BWkS6qTEWhfnUlN8MuSSdJRrqMAMvQ0zVLf2MIr37q4N4injcNDABvh%2FrXFZBqHgykydg8p%2FayImdFIHmsU1ic8oTvtqyxVY6wNRf1t2jDo8mkUKe8MvVnepOYfYJWG%2BQ0NmUY4c%2B1wI045wdqwgLJOiqC9VFtjF99IBLm5cOQ4zPFLg5Z8%2BnwVIo6WqnRI0B%2FIIhd8myFexbt3ejeeaqZwYST5lLBBanEnv7xuMbrpHI6CBjjmImcCyy%2BtGChtiqtXlEDBjtCSb8A0T6pq1wL8jOYr5MWIUBvnZwzp6mcQE9bvobvZcfRbz9i3EOL2X8LzXfhF2ML%2B6zr8GOqUBpbwpgYY8xycrpxw9d9uraqNdT4JYVsBG1S2AmRjp87%2FV8LkBh4pdjqm2ZcqGwJ93IDqDFe7GwMMJlKwk90R7nm%2BdBTu2n8e%2BneZt0EZ6KzvZNL%2Bab2LPImVYCmxgg%2B3V86HWEVDuYFrREtwoQfLG2dDziQ9vjQnaiJ2jHlHDkgW7sG0jBi6EjudVjUQf8sn51%2BNbn8JDM51aCASbVFvFI6AIbCJJ&X-Amz-Signature=e0f6f0abd354cc75b542a2d166ff63226d4ae016ae2dea27576e8ea9379437b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RODEHF57%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtBoreMWFk417uJsj4jT1vmDiBPU%2FNyTvQao3pxp6pcgIhANSB6hxENcWaZ3WdC80VGwaF9VeFy577CFE7%2FJGNqT0PKv8DCFsQABoMNjM3NDIzMTgzODA1IgxrvbbtWt9D2E5IykMq3AP3vBl%2FuX6Oox0VJz41W1208sqcdB6HxUWM2hYw9GPwIlT5Bsl5FMBYWRzwSr4q0x0vGosskT5a1KcX8DiievVkI7ZTtmYnyDLloYgHCeXyetSwn2F8lVaNWMqFVa8X%2FLhJKxnzq2au2foURC5zlJUq0WntYB%2Bg4XMwo5SQeR3lqbXMQDBxEGWJQlxwWkD1JoWvqUTSVIUMOimtB8StiYxpBiVCJt1vvYBdbFSq4k06IfXd0Ze1Ejwyegcfs2uJpu7ffokJrS1avgOL3AwB23Rr7%2F6UF83%2BQFoPW0BiDTldhO6lpBiFF7oQlT22J0BYhXMT8EnI0PIJk8RUn71pALRZiT%2F%2Bn6KnJbx5os8fXXRgWnWFfJdLDt11wo3bbTqTH9Vqu2cO6p1mg4Ygtymw1GwgCxfeBQ%2FKPku7%2Fa7dTlCUD7CkZZRiHyk%2FK4Or%2BGnZMhj5WQxIJ83xr%2Fsq%2FwKUymNdomiR9fujVEaAz%2B7TNkrdgcSReC0Mo2%2B7MlrBis9cVAQRN%2FfNd42nGCR3ZXVHtlFcEEHXVOvlHhntNOp6ZUvtVtz0PtPGzx7Zso%2Bk5zjzdMMVlHuq9FyDTbzTb30DTXfVsh9%2F7p1JdvmrmteYSY1Svne37exrmx%2BXbFKCMzCtus6%2FBjqkAZ519Obr%2Fhp4668sVXXui3zHRMqFGHsQx0Dr745dVkdJ%2F%2BHZEqL147R5FR6OXaxyppfj%2FeaO6uteS68BMVQYiE7fYYVaU%2FlVsiA7Y2%2Bhnjk9WC4vhMJeNd4OZxm3Dj%2FJc4kmd3q4iN8NBcgFORPNCaj1fAvUP%2FPE0a9OJy%2F0Wl0uKEnZyCY0dJ8N39JepNMtnqN%2Bjb83GfNvJl5K0cnfE37meHD%2F&X-Amz-Signature=0a73f47a210646ecd86425ff87f23ebbc6ea8b263adc495546a644577853e9cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
