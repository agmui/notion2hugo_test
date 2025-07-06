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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGFD2GP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDKKi4dBLJJiDSUsts9%2BrqgZ5iETvUm49A%2BgztLXDcELAIhAO4%2ByjBYYc%2F6vlcHNbXCkY4f3N3xuSLi8mMb4J3uNnMzKv8DCF4QABoMNjM3NDIzMTgzODA1IgzMOYJMorVb0j7gq5cq3APuK3oNCBultj7NK93A0w7CHDfEzbQDo1tRLZ1YfHlxdr9ouZa%2BOvGaCJVjdDsM9IxPtiHN4s9MrlJG31hbUG0hRt5f3ysxmSHF%2F6pn%2ByQNdk09FE478sIV50Y8AWxihVM0MkrqvB0T%2FHrvjJtlBz%2FVzF0ZVFK1mqsqv3ju%2BJ4uYpcWg1B8o87u3TN%2F3InDxhJRH3Xao4JSO0%2Fc5Lbexs%2Fu9exAhx2bPg5iwA6Gi6fh5TSyZR%2B1WPMd6HxhXriYYJK2%2F%2BFhe24zjhMCKkXtXEBbo%2FDVXU6f2b451Yol%2FyqcqfY27jIRP2AYT48OS0wLpzuiSu7gy7ShFpEYlLdHcrmQUmlk4tSibS62CbURx0Tbp6JO6QxxYhcxUVZMajybsgHyuuNHGJO0Cb2CHKIr9PD%2FWBX86K4uZeJVwoiUBDQnPlFl3p4lZmrfVF93XdqepIFifcDWzeOfRnGwoxw%2BrAtp1y%2BzvVdwqeCX2Lm8LIC67eaYQoYRPNq%2BNEzBj5PSJG%2FVo8qcf0OgR%2B5dEemVwrF6%2FtjIGxG5rNuc5vMBHWzH832djs4gSY0jubPgdYnmdniNGLHF%2BoqKKg4ccU7qoWUPFluzdCLaIkp82AIwgWX4xiPDKT6AWvfqYZiFPjDm1anDBjqkAV%2BZ550KZvy6Dy8KX6CNubTp1qJGsj1F%2FGbpmku%2BmzpE7Hed8crANSzgLk7Oez1mAF7MVUvG280CSb0%2FvTTHjoL9G4isgSTlfAxYREXUI1XCqwHjsiW4WEdy3y7VYWkAeAicweFHeEciMYMKX5UOolv1qqHSCcwUVKNUD9NSw5Wm9DxCtGztPaRUpcEvav9LE3hIAZix46GsVGNL3qrc%2BGBcmFhl&X-Amz-Signature=4157a30f5d9580f4bc47df6e87fa46404b7f61de9a575f32e954d8f1483fe276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPYLXKSM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCVooUv2fkoa4YGIiz1IaqXK59coVEM1g%2BIiB18m8a%2B2QIhAP0PKYc01UB66aKfwYTu9mX88tJDoXBwdokCdSFBnsqzKv8DCF0QABoMNjM3NDIzMTgzODA1IgzdZnyN%2FM4%2Fzg97MwIq3APbRoa87zsCLUY3VnImPei22ZV1ZLXrhZGvoVX%2BSNWSXbU0LtsRk4N%2FYWn0uI4Dbv01SJW%2FIxuFlal%2ByR6ZMJjvQ3bZ6bH5hh6wTw%2F2QWqFKt0eDPlzh4Iv1mHcXDKl2uJ2HLwCEtL2WCl9%2FAg42rboMVwdhyivem3YF77S1PqgWtbZkJK1DrbI%2Bxmz9s4csiXYiOMTFlOwECAxBP2STDSQWWbiGLfvuGXMcsbgMR0SrdKw8jkJMdNL06j8Iyre1nYi9mHPvOOOHTEspdRH2Cy1FxQ%2FdaNDgGkLje4K08McupwghY%2FolJHg4TGj6QRZYntVP%2FBabgqfi8cko0%2Fiz%2BINtyXPHylnE7woZ0eWqyCGaPRBvXw5fSui0bBIcQnbJEbpNyAcpZq0ikC%2FNVl4TXk6pJRaIf1oUsyUGfoo3GmOk6MXLLcJT4M9QkJxG%2BxbpMhN5WAig3GYigfgqE26T46bMLWcxe%2B0HeKOwSehsAIDgEjsAbB%2B4eVsPnbqn%2BWW%2FvUms3l6mRkG2Pi8NFr4lj3aPlls522RbTSJNAG6ExTkL2my9HswVeXgW7L2l617qP%2FFtCsonpr%2BLXb01hu8K1ilEQ%2BUKWUL0VAet8h7m7MpxLDH8d1IDjUCLMS15TD0wqnDBjqkAffzlFucDd8IuU3ZKjwdYZ0Y3NnOSfmq3ytTcfl6eC02ulhX69r9yBrckXqD7VyAZlvXeyoeIAL2Xt2AWZxn8J0fj%2F80KCdKZnY0F9v5BnPqdf6OldJEnGB3uWyLcIAWy7ytBPKih8UFzHE%2B0rXDED%2FBAWbVpHDyTtkxpd4V8B1nXWasm%2Bg2DC25DBwwzaEabWjneSyc%2Fh0up7OHW98BsEE72uT%2B&X-Amz-Signature=3f29094051846c31ce6de86fb498f63c0afc2ddb3bc48d88fc9c278fb63921fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
