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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMI5PZQH%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOOI8yKhroxjhEx80iXa9fyZES9ELTK%2B1HBjv47cuuwAiBE%2F9YkO9LYq5Qxctci0CBc9d1foAw3LE9LiB2r2mfRqCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhElwgHNx6PPIFnQ4KtwDXiLfBk6dmHjBSk9dftfeUEAePCm6cmR9CJyHj86Tnkpu4MELw6YB1tslySxqMYurpaOFR951cOYJJRDjtXlPB2x4wt3fKbrJAfAMlsXioTAno%2BIiDaM%2Fi6t53tyEM1hh%2F4xLqwJEyAahO98jwGoPbM72N49E9ZHkTKkhbWIwlyZPOSi%2FZ9rkk3PJoQzwBBNPTDQYkBIuor%2BaHTq4MdHdskBYk05uMnNFKWGnu9LmSyyYdV1mdiMQZO8tGzBD07Q%2Ba%2B8pVGTsNFdbfVFc7VpEUpdC9fVSsrYfWJVsKKiLAgfdIngPIRfVKn%2BygVU5pVh1Vj2Ain92GdazGVV5Ew8s7ajpG%2B91YhIXq2S%2BaoDm9oh58APGm7a8Ol3pxwAdamzobT5RsJenxWmUm2W6cVHPWR9XsSAHCjuFXxgeSzaOPIlut7pxVpZMypBRDWdhrcGm9BcMQV%2FDYkbVScQgW6xxCtarlDVSvAcqQetUZsMbdOA1CyEkymc8OBnavE5RjeB40Q2rKPQ1pDhfqdqJqwakaoXYas4GIJUHOQPto4ALPNrJQvDria88XOIX0NtwduXOs2D0fzJEi1nmYlvMNGhq7V%2BJn1KdUPbclo96ljex5PxiF1c4o%2F%2FJ7JVF0gkw%2B8CgwgY6pgEPBmjoytJ2HygbGxx%2FCBvYq2PmeCtbHjNnpRniInBqTlb8%2Bn98ux0Dz4RsWqugIJty%2B%2BbMw5WE2XZUfXcapCaLggL8vUFASQFesO9%2Fn0fMxlyig44UmyB4Uh9dkgnsNHEbcpgW3an7R3WNRHnzdxctu5yQzD6ddzjpvhyjEYxJLRT1V8AuZ%2B2Qg7C%2BCFYfP12YdJYCKb7JDf3e3LxQjA%2FciFw55fIH&X-Amz-Signature=75d81165755404091861505745f2102117c945edec7140bbcd280962f12c7fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLRWIQ4P%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNAHoY2snMvvRCx2yD0rJhshmIBYsbQJiyzKO5%2Fwi7tQIgZ7nEzxywpT4gCtu%2BtHPpj1SwX%2Fx5ZzAUD2M7asK6tq4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkp%2Fxi%2BPxqAKzuu1SrcA5NKJ5w4sJpV%2Bv%2BqdIIEz8jf7EwMs%2FcsCi6hEZ%2Bkzkd0NlJs13UCmG9iAYSjLAhWUoR2901wtDshg61pGpNzOwgHc1pdVJZLpf%2BgcimGwCAMAO69ec%2B%2BwQba7lPulbTtmcryMk7hGeD68kK8hxSxJrr7zCQhEk7Zu1%2Bl91wuc5lmdBt0VfPMWBSqsGfGr251C32ODr0hzCRF0A7d9PipG3%2B0DIX7OieTRVhE%2F8kpOgi3mowxli38i5HT1bs%2BEZ0q44NpNCPQm3mizmiL%2FSuL%2BJzBcQih%2F%2FLUoCbUBllPdfxARsCsL%2BZgfgNquCfNHaipZWYvUEVqMtUalye6IFy6trVHBgzhB2NZM3xlWmfKc9IB52oIf05pOp2oYGA3fILtp25luGhDEqQIpWxP0OytNLsb%2FkQRyUr16ztY3Yh61%2BrqE1LlN%2FttsfUUu0Mufb8Ri%2BPpVHNgDOosqAB%2B4btXR8GEPouCrW7%2F68TDuu23AKHMXcwbK%2BHO%2FHiTpkdR0kcXAbKw055qbvToL8M9J6BL779DOIlEwxIZvXs5H4hsRLVMuo5fy%2BYUYe7Ok5IujuFAPeUZ7mAdEX%2BfCNJVjy45%2FVJeKqkEfDDI8NsEw9dlKpD4gd8Cwt6AuC%2B%2B1sa5MLG%2FoMIGOqUBxvoHctWfdpoybQpdVFRez0Fe4uFxJtExyMl3Z%2FWJURRv6N5s5hDW%2B%2F10QNaT%2BBCS5SyrEGHJsTGUXMyOJw9qISBC663cVCSKrmn2J9cVlanPAyduncW1HJt60Ew2Ku9UPR4ESRkZeBUJJSjQYg4Zvb5H4aJN8b%2FMv4wy7wvE6ak%2F00ZF31pKJ9qtEmNsIpPZyMUJryP4WWmqt5%2BL3X3pwAfo7F02&X-Amz-Signature=620e76c63eaf4a32b3f885d0a3d8a27c6b4fbcedac9ebbb036a28685e6ff4791&X-Amz-SignedHeaders=host&x-id=GetObject)

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
