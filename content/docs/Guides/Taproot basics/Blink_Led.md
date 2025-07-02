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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GM6QYQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFiIhlyCG82niQqsxn%2FR4U7XbqbF3q8ve4kuXC%2FE%2BsZAiAI106lI3pd%2B4w2%2BYRCPL%2B%2Brm1Ky7z8LSsp3L5ULtgmliqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMepEkdut3bttp2FDcKtwD5INXKViK1CK0m4hbLx%2BE8Pwk%2BlYEoEyoI%2B6a4%2BxXca23b1n28a4LXRpzy73O5LsTc9lqKijmsSiN5Ele0ZoOuV9%2F7yLoeAuN0se49m%2Bn6Zezmg8Nv1ifOyOvzcK0aMNtVUinxK8GQBpZT76OhV%2FARGepgAFOuTOzM2Q7idFtO8wdkYdFNiXh9QelOxKNng8%2BeuCjwnFM7M4DGY4zMkjJW5HTNckDw9MLMgAr9i5yQWLhV2LWLYxlkSpqYEdv8BiGZybOSM9vv4bA4wif5FmBPp1cpWG1926bvPyKF1QuUu%2FWJsWqmFuMRi7TwI%2Fg2PpLTknFPegzGnv%2FiYG8a86j%2Be2B4fqQLK%2BHKVrKURuZdDHw%2Bp2jk8kGigapRJ1kAGPtO1U%2FMu9%2FMSQMHmgRjVaZa%2FF1emBoaqFNVtyMFQNWchLcAnroq%2FnO9b4TlJ8g5tEYomXjUv86m0tnFQzi7tk213or54qZwRSqFZ7UbHxgBKuThrnA32NJ1VLTocDdUkbWtZE1OWK2qcGBwDVmWNXly0xibBMjQJKBE6jsq3HSUxWwckMVlcXK1CvgFH4hjjEz56BsXM8UxAvQpiIDg89z99nhm1S3%2FUoHfyAw0lwugFejqPEXP1th8y5pP2cw8r2WwwY6pgEmq8eW9dYsGHRdwFbHcqiNaTj61NxEosSG%2BlnsF%2FSO6Cb0s9fHnNvLwFKGPMFHB73fg9yNRgdsHnbhokd6HgIhFmcRcXXO1FEdtGsu8zNc1Vb3f7sMGTipTtzM2bpSml8NjeGSd9bvUOkH40OeP5EcUf01s5zK5dZftzZSZcQFYkyCIYyqME%2F3aP4v5HjU3ka%2BiZgwFeBhqgvex3uLtEyXFQyi6v83&X-Amz-Signature=be0e08eb340155b3d7d3d018a2b741375afd2128e95c062651d03cba8a85254e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKR5KEJS%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu2zejF06Lfs3GpCSqn03ba%2BzX9lpwEr5z8X1BoO3mAwIhALzs3h7XK9Igm%2FS68YmaUXSC%2BEAPhHpmv6%2BG9OzJeY28KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLfuWmsMFMAVGF2hkq3AOoG0hlq6zQwkzbFtYWBJkwB1j%2BR4FZGFqpAGDCf%2BD4FyI4c8JUWvAFlPWhN9OjH996UX5UyRfH0glBvDVecv2bQZX9ETEptH7w%2FAG%2BmDxkynxZI4zQMPQHdD5045dplbJcdP%2BRr5uMgjrN6D5bEzX32zVkLhGCB94kNwzQ038oEOTMI9VP3%2Fv27IY0XyCBJ8t2n0PzgPePIDUAfOBkMDGRA9U%2FP8mXd5xlJua4%2FvyTIQoz4kuZv0sAACz2APWaKYdQz64cjIgf04Ev%2BoAhAFDw5%2BFkwEAzvO1X0zsuj7gWtL3eDjGRsD7fKEmU3o0fEOusz0XcpxVLurWc9%2BK1f0tw5NNVs99BxFXeKkDdR2sBcZjtz4heUemE4CUd7rVnsP2M772XewVywnHAimbqAhM%2B%2BcIdd%2BqzYAhnmZpMp24Y4EqXDBHNwgVgRBrYBqKILy5mMvScRhJqUtibmCizrx%2F2mTDMGabu5I4Nl7akBNZefMwiah%2BJoc4vLRk3oh9%2BMWHZJ6%2Bp2TMwfVNX5j%2BjAzX0dpFHw0x0WOFrTQD0towK1BtaqVo0jSb4b7sF7z%2F25A2NPXJ86DYpMld%2F7OcAy20EHhp9%2BsqVD345TxWXjZ6c5JczAZPZ06oXqIx66DCbvZbDBjqkAQhPX1VFRfh9%2FS3bMa%2FX1Bj1Eg861f6XHmjCgh7BYBnEuHbuGeZmIJ4ootKUgSsfEcb%2F3kqaFpTWCLXKP9rKme1AO9bo48YwCiK%2BV23g2b9PLeqNIRBoYn5sLvfQDys6O3ZikZORF7oV3UOReaRYtQh1EwHczUYSgMSLTEZuKt4muDktEiBVMeI0KbSwLIk%2FLlGZbqT6yIcccsby1eSpZfiWW5yb&X-Amz-Signature=dc020c3bb50629f2f228a34fc0927c0e8ed7151cdc26cbe82f409b7fcf9119b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
