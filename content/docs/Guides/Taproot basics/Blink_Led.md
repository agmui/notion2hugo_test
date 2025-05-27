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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77P7RDR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMV7awNXC1tYstjPzoqmoHNHN5u5%2BSubMELY9d41iiZAiEAhw66XRIHrtChnh3zBB78vuSVY7P%2F7yMdWGiJwZR0l7Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDApeSNk9kfMS6CrZSCrcA%2Bla9o3%2FDzBz1NVmqT0wn0KNG03ISsg7db5XhBDSzTZXM9Pr11lbhBvQ5LmJUqvucvGaC9yms%2FOT%2ByDPJwE4s%2BXmdsJPejdB6PVdNlpg%2B2yr93yJf%2F2Y42Tv0tA%2F9C8Z6VrqjrvTCgyceg6FESfMkxAI82nnbbH%2FDDvLtfYiZoelWzafLI7OlYtX6xN%2F8V6aoBPCvbkQ%2F3NJ49cpMi0XkW683ZJ9ka%2B8L9OnLGY3Wor2ENgOsghtXCB3w4qTS0N2Mh7CKj59EjaaHo5TUqOVmfoJrQY6NNYW5DxC2heOc7y590Z24T28VPLd0PpJ0izClYsGoxLomhhfwmp2H1PAlVkGXBVsWJr2022zdV21F%2Fsbnd%2FcYTZitV0xrQAkzbuCnahz4hCvVdHBb6xa%2FzVzQxnBhowZQIAk0SDkHgNWhXZBDDfYCSbfPLx9DxArl4EXVOeiHjDIbTJnkCyVqN8Fk%2BPLW9ZeL7PY%2FMWPyP%2BI3kEj4QohGS1InyG6akN8OzguMDrBjFuomGfsV5INuWVDS7MNIN7qve6AxpBZpLiuiyl99y8qDgfiTkUghev4Z9cgXJI%2Fk0JDPqZxcRB82KzENutcOmAINrn3bLOcxb9tBzaUwPiWtM2dFZCYnvFbMNih1cEGOqUBoTOaDNE1%2FJ5Cqh%2BdjGyLlxtmXM4t9Wp6GdfuoUmTkTHiLc2tplCvt17gxYgq26Ovf3BzCJwcCtS1uD01PiRLXnRgltMAvKBKb7T5b7JtIKWLw8VHqLLQketiOO5QIgr9J7rs47xxUl1WBGx8A7fmzfnnW2ZC%2F6cvzkTs7i%2BSDxmvhpDjA2qX%2B9CKLvj4dViCN0vPCP%2F27wF4IvZuToEYQPOOz96k&X-Amz-Signature=e7f420582a6cf08e35a2ceff638f637c8db90d8d40b3596a90f3f70aeb838020&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRV5IB3F%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWIOSbgy9PwZ3b%2B90261UNWPASzHRFh1%2Fq0%2F1rm3x8KAiEA2lkyZm%2FLqd8FwWDkHSpoIozroBmVk1RQ5pzClMVun08q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDKvFCgOjal%2FSl2jdsCrcAxejlVXxT09Zg5H01jKZi3NW7kKUCuHJCyKpHceN%2F6hoJ%2BjFAhyWztMGI212WCuZA4u6EmidpOGoUwjcHYhEHbGfFwKdyuWE0%2BPPlEy4f3yxT2%2BaSCjwZAFRXrRQu6DLzxZ1%2B%2Fam%2FNplWQ8etRZbz58yhzeCbAr2CqSr1JugeCsG3GNaBqPipmcCrrzCW5Bry1GYOZm7CSvSG%2BUdUCpOEZ4jUCqTr5rylhUukAaH5lFv4DbbOROZjDU%2FsNWTIAjGUKLLi8JxrZqHVnIm1bPayLd2wadbHCpE3JZb8l78x%2BNa%2BJ%2BH6DcLprFiW4d9GVLTPCYKMlcXBX77WwZhf6LoZbkb0nyZc1URfhuyCjhEZ80PwKAsP0dWcnG%2FpAHW4Y9A2%2Br46ikfoJ7nfa56FsGlr7sqBIzgYrAJV6LnkbnzVy8FphnCV6OBhA7gldD2TJ0khutTEa92d%2F8xOQ0OxDpgVhzcPBNDP0HWocag5VemRGiJggPRVeuhb8xTasDmxJ7%2FH1XH3DV%2BrkZ66HtfNxT5i4xI9EO9Uk9w7ZvxHnZ205V80mX6AZWe7GnfZVaIF5N0KThCwiUqkwx14hbiOqGLZLuie%2FYE%2FruMRVPXAo3rOcB9JcQqgq8ppD%2Bo%2FJg3MOaQ1cEGOqUB922ltTyxM%2BvZ%2FxEH%2FkfnObBY7Per%2BTeo6PzR7TaefzgcaPzV%2FXDwrYvKVsXiiAjLhoxL9v4pj%2FTZPMg7AXH5%2B4%2FX%2FWBQ9r05%2Bx10Hi3GW%2FfWYyeZtiSPIzvTNXXBbfVFSFFIsCOctaKt6vgezWlvTycqLrkq7VqlEYFnjneyVmHhiCgtI02YfOoHdSULjoFfuU9NK61jdDtXBKcJxh7JR8fUZc%2FB&X-Amz-Signature=ff144ccb4199a316304673cdcaf7ef1a6cc81b8de995690ff0da185d10aaf8a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
