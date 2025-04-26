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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667TKLUQB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNVl4HKTCl%2Bgbsf%2FZwij5n5McUMCmAbDdjjvVjVB29VQIgSbpRBhkuCm%2BSn6Frh6KhDP4TbmiAo7gU%2BBv5b7j%2BYMMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDD8hxPIZ0TsQCxVqPircA78vZKqCBoz2YiqGSyXd%2BXJnjoP8rCdj920z%2FsCHwQA2uqEBvgGIPve5jFNp1bCwkoCgciptIGmW5Z8NlwuBsX5fKxlpsKukhd%2BjAchBtsoPLAQ6gpXG6XpVKxhS0nyX9qx93IPsH1bAilasth26LWOpIpHzLhlXBZ5n9B5%2BX4Y52RxEsRiYW9HS1gBxL20KgjmjvZ5nE1FzMD6xzMWLmlUCEIZQRBFQOzyPe31t7tOhYPzAL%2FQhhkClN%2BfyeJBqxWCGiHzgARdTgsV2%2BLeT5BauYoRZGZ3krTObZZtsXYkJ827OrmPRKEqF4TUWly4swqKljdedENkAuoA29eVUxRB7rMJaMiypVB5%2BuJg5iSZ7oM3BNPbwtvHvJ54x1VvdqfVJH121D6uqAndGZI%2B1LwZhO8Qlbh3QEYLiUXoNGjWVxaduPeGjo3rA8wzHX1PLDXhr%2FHOE5pKWoAf2Ahyppz7mlbtnfTiOv2gyALn%2FFX2yG6t5YlYhMm1Ka5eBeKgV84C27mcQ3%2F8%2FhdgYKN5P%2FIrjRIb2m4A91UjdNmGBlpn0vGkVBNmEd1c55rQnq78GnaODfIbU8ibJAKul8D9puOdtDycueGjlPdw8lImnGoHXPuOGtqKplnnxuZltMJzkscAGOqUBvkdtgDjkP19QsjKb1RT6aLCTMjyHSPK5wXFizusJYBTJJEn2iEm6xYvF3ndNSMtY%2BVchZ1YATrUuyHbVK%2FRPkFqAcSDenGs75CK4CiK3rRgW3Yj2FxQt%2BfLey0C4Z9XibitVROplsVsNWxOixQ1jpFf2l5WYAHw13rKkb4knYi7VRgFX%2FuXIf5l3Gdon%2FkeYCXR0Z3tAXF6IBVX9bbWJ%2B3YGVL8O&X-Amz-Signature=713d6981f75f6f533d6456b14bc5b0a6ceefd2720b539ca52f27d9defd1db384&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QEDIIV6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9iZrkxB9Xc0woL05zSDpxP4oO3IKNIrO4uN%2BNZvYTfAiEAvVXQ1cP58IEEdC8wBQcGoexC25ZDdXHsU%2BVuhjXeB14q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDF4ty0ROyV0ajCkbLyrcA5KJ7Sb%2FzS9VD80qCXGTtf8voY6rDnTWbepN9BVhUJecgYMi4eziOoLIKB3sq1WmaeSctlKkJRnRbbQvGHB5GCJ0OxtVwbhl6S16ug2X9Ivm%2BuCnGdF0mN0KQwF%2BTFzmSN9%2Fj8knKpT3dP3UametyIQFPu41cwFqb283ArbEvQWphmCdrXT%2FvFBnBLzmj26KfDt9ok9PZu5WpIi%2F4PIAHVwE9H3QVoORSeAvCl0U6ryBzEtyn0bSWcMT5sUSw0EkGfl5WnSd5r%2BDnqOxBBG5jkPM%2FoV1X7uLol788YtTBmiRjrwhyyAyI5UCSJSmrRbF9CyPMG4igaoeRtB9j8jWNJjjV%2Bg4ZRLlxxp6vjI3Kn213RoqwZOCi3wRFgrcKmHu%2FnE8KRqZ5%2BNRW2JuVrBOifBfDSXXTcCqW0C3tziotBv8AZpt8%2BLXsovbkZFDglh4hwTyqbZSKenLvH%2F2JhDL1%2FQySR3Ob7Hs2hDX9X8OeFZzrWjqXKs8%2BMC8GEhx7qrk26jn7l4tvqR3x%2Bdn7kqwGmFtTOLEOjkhN%2BzthSn9wLfS9cn0iq1Dux7W91JXcWGsRIwRZO%2FDPjFCxuo12zPhYPe%2FYjlLl35LFPN1XS4K62ETgMNfoD0ys7871oSfMPbjscAGOqUBVZEUCUWR8%2F7eWwVdReEVbsy%2B19tP3dPzE%2BPoeAPr2mFP%2B%2BA4wj9R8AymvzXLKADGCshcQx12TFJI9vpyPRLv0aedTgfX4%2FOXF0aKi69eT1OFjDDnAYaeK2D5jkEa9%2FjpmbECv4WwVS7fCbnZq7tnZlK5wyKj6RT7wFA%2B4pltCvd5EJsVrhmx00JjFzdRQTJxogsDJk68KH0%2BBC%2Ffat%2Bauf%2FPU7Ly&X-Amz-Signature=3fda40b68ead4678b829efdb788a153db8b64fb966ef9e261d3e9e36b5df59ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
