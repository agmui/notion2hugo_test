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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHRU76H6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlUbs4BMcm%2BRQjuOm59FhVcSkidr%2BIN1%2FiOYxZ1rmPfAiEA15D3ZuEmBaG8mX5qNrllpMXMBX9K9lks%2F9%2FMlv5AKykq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDKQGwW9S2Yu%2FqB1MlircA6tp%2BLGD%2B3TE4gCaOV%2FnjPQQlC87M9xEXG2l8UCOdrugLzL33WU23kNJJTA6i5gPD0widw%2BPHbNagDEIGzSdwhXSM0SyXyK6l8Ho01SvDoV7BjRAEtRquwKKeZeJLxl6%2FS8PVpC33WpLFaRU2uWk2AAUoao9oFkW%2BtEq2oE%2Fcvg8kl1fmlBLFn9Mk%2Bs2fZiYarYe26QxrO2borIunWsR1LWFvGxdM7F444RUxU703rjXnRkWwzPKrzeV1rtI%2FVXvlWD3D9tgqx%2B8tmtNolgENy7gKnPzIN%2FVeAzibuu5IgCM6tuUl4OWV7ffyChO3wKym7WsAya4bE7oba%2BnoZBa60skgNSqxAYb5P2Vr57Z5GUdrPDNwk0x2%2BqGbu35X%2B8TFlpnKvm5n1O8Q1x%2FmJBMULxnU21aqvJFj%2ByMvoOyuuoPfLhT44y8v%2FhW%2BkNtiPEo5YY2VxefW138DKdHlL%2B2fbEFn%2BAFjpv3NeDmPz119n%2BVAqxmUqGugGRIeiuHBXAjrx6VwhJlSdW8KShnptEExq8qSepADtZWYTPmViuGYWREpngwLdDdXOL1Ki2GKtnAi0QzX2ciTSWPRaoI%2BWZi4vI3yt7DHUwqUp1izemowrvG5YNdnEv8DpDqYt91MJXR978GOqUBmV9B0%2FrIJU32CVNI%2B1Ow7qtG2q1TwB7kl7p1o2Yx6%2BDiV62tndHPto9nOQwzJwergjNP%2FEpS1YYxt6eHHxtUS%2Bzc%2BrHimwIN5yg%2Fx%2FCEksQCHepOUxWv%2BsbNEW%2BtPs968vru%2F%2FsF8A%2FDoSeA7owKrALznZyL6qUrCoc9FFc3gx0N%2B2PvTGqtst7uJ08SvCPh1jXnXgazzrvln7VcOu9FLE36dP%2F0&X-Amz-Signature=55e17a3633a9bb73d24d068fcaad2d2007e731260f81129b2eefbcc4eb9ed5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPR7K2HT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2uxnXfvCJC%2B3KZL%2BWT0IX%2FSrrwUbgTPXkTPzR3FUB0QIhAIbCl5iW8qaCa%2BtYz8iNo00GYC5KOscuZnYRhwSxyonjKv8DCCYQABoMNjM3NDIzMTgzODA1IgxtEdeVhQT8cpdc8Hcq3AMTvfUNvmaozAASqo1fYOA38vogPoRTF4pzf3%2B2EPv1fgEn4HmxDb84FmRiucFMn7k1ABYPNBMi%2FU9psVw%2F1aMtFtjhzrTvxFbPRYHQk2wj5%2Bc%2FakSbIdHqo84hUFJIGpxovrQVm%2BfNouPDDK7hlascBT8riVzQs3OVzhhuyRwtkkurQ%2B0psJicRSQT%2F3vyde7AGk2rG1AEzLKcOiYZdKpuS0U620GBRpd%2BdID4hmp3RmVecSi1iK9Rifp4R35LmFP2BokO%2FBzKc9zv%2F6kzAaOyJ%2BgIYF7ba0gDHnVGM%2BtDe8lSA0oi223EBAW5NWmjnlO%2FOf56cGiPRmPM1usjMDdK6j%2FFwLh0ODQEbfYGPsp%2Fu3kgsdxMve5nBL0kY8%2Bk%2BTbJkEe5BJeOyopWIQjurfixiMdTbBXPr2Y91j5%2B5jsIezTx83LkN8SEde9E%2FNbti2zWIPOQwsATzk%2FW46ko7obFNRCj6LREyhXznWOETJm%2BgHELZdaVXYJ3epBfUIP4E7wCrBqfvINGQg3Jk4vz%2FHsxd5rI4sDglYvrg0%2FznrYvpB%2BIx4p%2FWcCFDMI5B4e0syTJAdbihWhhv2sEuwSvfwUKj7VFCBMvTApWi%2FyZ%2BSqL0zWI7MddqQCbKcY%2FbDDy0Pe%2FBjqkAVA7ih6fdcoELLve1FcK4eNuuJNhP4Xv8D6qNd2Bhmt7Rbl24%2BcPwS8kRdNyVxIkyPJOm%2BYz5ydxxw7exv9h6a0coSswp3SEWDYy8zhEs8yeWGOQGNwh5AmIaKZyWplC4ozHRcvzv7E5TYmpht95Q%2Fy%2BRgGqZgjVNtxslxO7XvBQliLy5vHOdLZNsfxG9CFT721CfIsmjOWEwRO3dW37npq8qIbV&X-Amz-Signature=d25793e04395f07db9d01963a30c599db16026254343253485eb9ddadede25fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
