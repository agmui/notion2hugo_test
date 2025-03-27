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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VHA3NMS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFl3qxSHIl37NjOL%2B9md4Lbz6QLOnRvSf9CbDHS7QhDQIhAIYBCyi6uAjrJIxOazY4Uqi1cNSlVx3ymbCGhe5X6X6EKv8DCE0QABoMNjM3NDIzMTgzODA1IgyTR7cvBkXidcCp0L0q3AOGXjsprsytbOaclQPEJClN7S%2FY8mkl1YpiQXJ8J5sXqOS88iXvazSlSWjfeXzz1g76CxUgu%2Bx5y93DzrGpo7ziPRktaImZhxJxrouXWSvus9j7TYs%2BzuOzrtXqLDzDSzYJQmjSmWUU5%2FqdX%2BqVii8jT%2BGn%2BiFgplGUHlrS88V0ChU0j693lpVzoBqj9t3Mq7ampu0A89i2hQlqUOxkbkAzQsRyuXybUPlZ2RhAFEfytcsgUqPTnnvbkxUayU6d9RTPgA1K01A959CxclunXVRvW7sNsb0UVjZGvDlGcpJlQaDtSH6y6zCSt7%2FdJHt%2B4WlzLoJbVh4PKRR8Wtpx0rbpFHKftg0dAX7QktJFTHO72gG3YwR2H409T23d7kPhQrvNVUwGujRx0X365xUT5kBYxwN%2Fm7pGWDZs6jgmi864xVWCMVy0%2BBrUbbgTZUahQ7r44%2BPWWpkjY1VtsZH0wdHPzA2K30q0HSHteaqEawvlkFI9RBiyCmhPUPZgc2SqIAq39TcZPWTTq1B2hfO21r1QwSincZMs1sl51f68G1k1oN%2FFHsXIaObjoDfS6vfGbqYctucRpuaxMFmojW5h8RGLItEp3UD4ljZuNQOfo5prJGvC3K80gwNW3OPD0DCb3Za%2FBjqkAer25Wv5riYkh3zf2Y5WLa03SNkOjSDmgQjosEVWrqGQnak5cby1rBC1cKfDPqva4KwpOA%2F2kWLMBihG9N07ehc1q9gdweYODYhoxJtniK3KghbDNRVIvI%2FU%2F29TJehinn2%2FqD7FanM4Jjmt0NiIyagrr1VBlzAaYlAnGX7C9GoHeq%2BJ5kCvsyCGuy5uA99c81E944YQ0nknSRA9JQy0AsUQCOLD&X-Amz-Signature=b2bef2f29bd4d60196fdbb9becd7100e66aa0f84fd27d3c37478a3e2473c1b48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZBH46DD%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9LWKeDN67dk3OGwaat3FXU4LhsuySdCdI1m6MPPfTUgIgI11dranmzmYc4fk6j2su%2BUKwUR0wjMR%2FAdwrQzhdjysq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDOX1tci6duxZ2QeTyircA2LmLO8Zrt94kUUy5Z04vikQQQczWeqTusw%2FQyuYilmkuyJqhi2kQZOjuirddonfLZzxByIY6Dh0DHZR7OxPCJ%2B3VZOQOjc7j3t8v9Uj46VqYhiFEGyGzGaq30IPHY86W3xMMDsUFzEXvFqIZAQqLnTdjX%2BPRLLo4%2BERnLd1n9CyANCIXOIIItbQOMXdzwVQCGvJ72pdezzro52JgzOm%2FzGg%2FsxnMShWUvrOgrQLMcXhqwtq2jIJUwAsNfle9gAf%2F%2BDVvLlFXKbpVo3s%2B2zGKLh5NER9N3OgZ3LjRLQdmvo4VA8SLzl0Q6VxmElfnXrt3%2Bq%2F5xhy2ECo3jIRXFbNXdwvytevyrIzx%2BV15iwh7Rn3cZn%2FPTMOFJ4%2F%2FMDOAGH8hmxBTh8xh6lcNnstAiB%2FIgBtyhNSrPgR5QjpDSrGeLAA%2Fz956lNowhfb3yTdkbvHE1k61zFUC8AY92Z2kT6Bbh5honoZMpky0eGNo1wWvJa4GSnEMnlzUl09Rxl8QmkiFj4OhmS%2Bx5D3ZmNAeFcOoSLrTjUkrBdmJNqwq76w0FcP27uWm8amOxKPkvo0O0fbq99DYkk7QZPEu%2BIU6bVzxHtgO3jhkZAGsDEesyLJ6K55%2Fy5%2BCdIa25pgLEXNMMLclr8GOqUBfKNMyizm2ueFuU5pADGGzOxJmNPvBHDD0sqfL9fj8eqH5dZAS3M3Py1ciQn6P8FQf2I0aglLhh9kIVHCWbpBjOdTe9t3UcgETNk1LXMtrSxcqP5VJY9cjTxqW3ASuxU9FofsXoMOA8%2B%2BjrHVRZ570LDojw%2FObQtenUD71N5Y59L9L8dIUXXvT3BR62G4h4Q%2BlQfTpcx%2Ffkg5f0TUbMV44dTtqF7l&X-Amz-Signature=116192c19b8cb8e5933a5cb6fdeb00552a841f33fdd9bad1450232b2cb79f666&X-Amz-SignedHeaders=host&x-id=GetObject)

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
