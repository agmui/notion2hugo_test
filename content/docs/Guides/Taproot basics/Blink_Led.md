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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357JG7MZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2BKIUI0lRjqP8gwtFLXuu74whDU37JUyfEErtMaEquAIgaxScsjuJ73UTee5HdYbRjomT1vZL%2FW6y5vNXpkO1jcIq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOI7mN9DDxfTWTKOqSrcAzpPuTsb6PAHIt9G48FoDcpZmGvD9PcACvryk%2BsRm6D87NP8Spv2VILZXZmvVX4wxga%2FUaJvbo6KPSt%2BTXkElMcYyLaZsmEyX6vrjPU9Xd0nD6ESo8ATLTs0gIcCG0VIbz9VEDFy12LtarqfTit6UqNK13qfvU7kloAUphj4o6BrWW96rRIsuRVSRfRc6%2Ff0X9bBcV2ANVV7Y6eqI23s1M%2BWazoWOYaSxlabBudZus3qFYr%2FZSoRV6XCu8TmQNYxpKUHoBpkaNTaNyg00MeDRCsW%2FWkZRiq1YfpKVfUvIBSNcDceo%2FVG4lZC2UfinpajOJLS2HRo5bpKoS7LdhatQbHJiwyUFSmJ%2FaYqhktwcRrmOmiJ%2FBcMQqQXm0N%2B8l0oB30neo07hr9ep86v4wyaHW%2BfBNW6dzGJXjTfO61y46KqY7nMzzWdjEWW5lW3YiLrJhkkwv9zzik6UtNMNoxGbU6lva1VCv76kvIh6%2FtAs4XXS3ufOxS%2FTXyV2bMA%2BG75gHM1VSce8dqN%2BXxV9VR5TK9bg4mj7DmN3RHOaAchwXxjwjpgOwNMRubfKoIgT8JRZQCZW9llLb1XpilMHaUytlAHl6OrIIX%2FrZhYDc8vuiDXLD7jVnx8IDnRdbsEMNv0gb0GOqUBkKGB5v2OcAYNGi10wBx85oB31MJepaMfu3KldEq9UhbvMCuFAE4%2FtBA53D8O5lgxAl4oQPUmhQyacI0PjkqOAl8S0QShVjzxewI3QRs5AhEn%2BC19H97GJx1m5H%2FVWyhsLF1EVFWy5tOLGp02lmDjDiQaoTKG8EjDUBLNkcmZc3sQybfihjz0SkwvCVj1FmuzUvc5bXCaeDlVbjrsnvSHPdUKU4%2BX&X-Amz-Signature=666d615a90dfb0ef871a8a314acf006248d8bae4761c2eec6f29af5a83abe617&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRNVFKIF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsjGiegkdRO12t4kzWiJPoRqy8R3UqUC0KYgUNNeQGdAiEA%2Ba01qdnsc%2BXSpEw8yxCPCh3Meb%2FhQUhgzVpzbbDnZ2cq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDI2bkRLWo5NbOeLTASrcA8xDnG4q626Mj24yi8L1NsAtS3dIr%2BDDD19ixtozOEG5dHt6HoSMztMNiQmkVU8pJu7b3dxp4ybrFeUtLKPNj%2FAjXJcKPjcF%2B9nsvTNOs6vcBgHP2dlHD8fcJiIPwVB9jiVgt2EiaFDECF9eX167l7Q06u0BKdLy4t1C2V7AQZxQE9%2Frtsx4hV8f0c%2F7K4BQm9SROhqnZEIhLoeH5B11uHsP7lqe5KayXXGIXzX360%2FwkhrLPhMJSjS1G0b%2B1Tk0TqGyBRWnOIiPC%2FR24ks7GhtVVQnkl%2BGMoJQ2XEfoe38YJs3KQW4OMvgLNKdoGlSlnhFBFI6%2B%2BlQLj8B2rhEDEHa2i6nxR6YuiwL142JZaoLohnJDe6EhYJ36DUDP9XEzJAAgG9tM5Q25erVKL%2FoHA%2Fi0pJvB0mAQ%2B8tjL%2BhKurXhSCepfdaSvC8QLHIp3lbxTIyS0KlYujAKXRRjT%2FuaDroAmBrL9%2Fz5on3fS6cukwup8H0lqi4Vj6lvJJ9pWWklpTRW2%2FbsKWmMrct%2FyZAypHKiIsFMJ6cw4HbC3aJpUm6RDrIIZ0fmSvt5RcLogWU11DZbnkTwSr%2FIz9hsG8yCs%2B4Q%2BrN5hucdDQreAqIoXqhYDMppbBf3GJIVOb%2FFMJr0gb0GOqUB4FpLo9t0hhiGglfKMMWY4IdByICsVmF5nX63uxq%2BhLPG2Lu%2FJ3%2FWUNiHwXCX%2FDyPtj3M2WRVPvwkatFurTiJ22NLZQ4E6mFU9uyzK4RbHLYIKMug6Z0NXBIvGUpP0h1FxfH4xDQu5lWVFdhiH1vdmX2c3bF8jUUaiK8gATt3CeThSJORzizXvz4q31kwNIu9yXo5gQtPd3lGPSZqDhS26JvCuH4y&X-Amz-Signature=4dbd37658e7b0d528a5ddccd6bc9a47cf69916ee75b1007f001244defa55cf78&X-Amz-SignedHeaders=host&x-id=GetObject)

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
