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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPODBFFF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7dXK41Paz5vptxi14VkTPo3lJ8%2F2HpqjBJzdZJDduOAiEAnfYVLggV3DfHor1rzmBoxw5gLyILTdiFbKDzYaBmNM0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEKQJdbXHW3A%2F5BLyrcA5wNfDaDd45yc5L24zEfNFSxVaCZWIGuDAfPc9mAiCEFui6dALqsceGLJbWs%2BnKL8JlXDeJOUvyGBwqxlA4OQnLb71qcLe2TEEx58NYltoXG7bT%2FUk9U%2FGoiZurwgShHOf48O26QIyKf3nAf7XMZeHGBjXY9wUtXbXHMZJVBWEVYztJmJakkgjai8SIk7bn1TUHoNUZ5RTQhh3YWBnEjseQi2UOjDkfKVnZoVAoRKeOtrKIZORB0f71Ou%2B0BUNOCKmnBtY%2F8syQiexktKeUfHj5wbSrculNNpHOD0L2X7BH%2FQjXBQ3i684%2BaY4m5n%2BpuAXHgwMrCHq9%2F8txJnpsAepFRfrCW7sU5W7XpNZwZ1jyJoAv%2F9uCwwXf4SWX6IC6d8uF584OFnj5qLqhUFU4Qrexd07QfECd3MSkHaKmSquL1xSRB3cwjFoRUoe4BqGrQYlFlK0tTXr0lboitdHEd7EW81taa7DgDcSx1BTVboJ3kjD87K%2B%2FDGhV855tnYYbG9AaAhmGMM9Gh7LDrsfzveVyawqetdJ7b%2Fv31RjIBVL%2Fsit%2FrIdiU5Qu8%2F0skJjYsdAHPmrod%2B%2B1igtXjK6xlhR%2FfY7PfpoL9kq90DrEXyCO0h31Yx%2Bw37lk%2Ftf3TMNH86L0GOqUB9fnCUwNS8FCIvPrPbMxjL1QIO7TbQGvDx13pXym%2Fj4OhRlr8F0ZUcuj%2Bly3k%2Fdtr6MArWabBqkXZ3hV2qYO8YJVf3jbWFnidj2T82PE58govhjr4GXSOL%2FmRhiepLJUNH3KiUpZJmxFM3q78v%2BD19YAfn2X2dzwW3XCT9W63ihL7xiMgZQsTyYroMFCTuQbOEzO%2FBEaw7zDZsclWDu%2FnJGCp2lcn&X-Amz-Signature=b51a289f6eb828ba8ff4e9a9cf4557614b59729c417e3956400319c45b2ca8ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOBEPILK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoAVGCG3TvVbDRp5ztv49PHm3OixdkJopd2R%2FgvjkT2wIhAMh2NRZU3XEjHfxxwUQdMl0QLGErNmAzjIE2uNKltCW%2FKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxywEzODExuV1LcfMUq3AN%2BX%2BXPd1a1ZiwUjFwPMHpyIGwJ3kfmIkWkyFH8jz%2BKnc%2BB6xJslsgapD69WJ3hn0S4js7Aav4rSIpX6USx%2FJRBa8VamBO11CjFHOPmpY72CAmjhA4WlEOB4GeAspe28mLXPZUo8eom4Ize75GAMh1eeF%2BtBeX5KV%2BJyEJFsReDeJf5xbSBHlmE2EnRo3%2BlVQ385B%2BVp2vV16nOZLDDaY7oENcnWd0WOESCkjeKRpjebqCImXI2EIdnvnWeWNX9OWVlhfeHudOV4GC4MhWH1GFM0zb6dL2%2B2zVW6zowibaxaeBcQycU9v2c5eRi1n7I%2B7KPsDaqmL%2B1Z8A%2BcSGmGqcQ1PeN6mo4z1pEELhB2gdZqgL05NLJctiMgnVuFURCMxcY8IqrhjjNz%2BeRzD7UxlSVA4twl4Vc5CTOYSorxvCYMuN46wPwPL1PYvOSsG4mrjXNsuHeP7kWmZ0Da81ThQ40%2FHv9PK7HjjR6w%2Fo5t1gcE4z31j2SluSGNZoQrAYvJryMyFhwQ%2BfspQmdnT6pfAAea7ftNK2HvaaCywI875TtVepoEqB5i%2FEV%2F5FJf2oOQ1Ao0DMiA0wiP%2F2PDFIgg1xamBa44IGgBVOOZlBY1GCU9SP6zPhmr9jDGlub1DDu1ei9BjqkAca0aLxZfV7%2FLjtHLbT%2BFSKP7pLaWcFUSLwgB7zY6f9pAVsWqr3r7sv0NNsokuiBxZMNT3tirWpNLRssF7AmD55KhaOzPXxUwoxE7QP7YtuaYiQpqXgicKPe4dEOAka3sZKYvxAhf1hxUAYArJl0qGQyfsi%2FcVegjZYRqR5EKgkRJXhPoqxXcbvBQvqSKb2cyhItPR%2BRPdyqQYZ9cUsXR1LG6%2BjT&X-Amz-Signature=c7480ee9ae99db4ba55e81d640c6f70248105c180245b175d6fdbfd2cbcaebde&X-Amz-SignedHeaders=host&x-id=GetObject)

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
