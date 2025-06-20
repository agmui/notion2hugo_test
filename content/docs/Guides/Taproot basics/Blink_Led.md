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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CGZMVS2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgZ5pIYspfOTfCkKIrdNw6u%2F13Dc%2BFXSFisvucgeMTiQIhAL5iR2w5YEjXgpynvnSeJmPDixswMW4XL8wZl%2FvfroSdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYeigjBfd%2B6dtQATsq3AMsFmp9RvWNZbzO%2FtZuDVe906Zwq51RpAu1nViZ6GjfHGL6pSXm8Rx5mFXgiPj6rNC%2FfaSAmgoJtNmZFf2nutAhwZWPiYJUKqd1JuMh003e5PnG3sDGmpvI5JCjOMc6%2BcU4ZPW%2BRwi%2Bv2GlcuOuAclxnHhLx%2BkNtEhYZMkUA4SYInrCNMMdvoGbeRsWj6i0ddY8P%2BZH357EHrrk5ZoDpuKcdS7eihzSM0dGN9k4wFfvuWMz8rmJ1%2Fg7V1EDLX1w9vfjz0qgAU%2F0wm15MEu81uhdWsT8iAcLGV8C9UIWwHbd6Vi6bHtRiTKpwRgqu8oKYQ1Rv6urfXJv7yE2DiGdwYqZxxn1PYm5YrV5uKtKuAov6c4vvBQKtCW9gYTIujpDWhGUZAmp3wVjIxiLcxt%2FR1fei1Fzcv2Gp3AIX8dL0JEhwmSzHcr6NlCFPm1AC5vSvyZYiD4rpeNmUurNTiyCH%2FHfJINqM6vS%2B8%2BA637c3S%2FzvYxp1QUJJPb%2Bmf6VHrtGEapU1NeOVs3VNH6pPU5FiAeFMcOxzdkdjZnN8yiXa8R00EsCn0S3UdCdrF5%2Bd345bHHWGlgRnWanY7HS0%2FtFHXsmXK3QGXBK3%2FmS8RAOY6o0wmN0EZA1Nn01SKAzDjCW2NPCBjqkAYIdnjPmTsm4lrMCQebrNOSrhwcffFMiMvHFIQbqd4MA8aOZGDxMCpJ%2Bfzhc5I8DVf68MqVad2cvyt6RfTiFX8dykSlb7BwVZQZDCv%2FwJpqDjmJNV78iW8wOxK0FazPXHc6Ov0qf5EIh%2BOVDFC3PPAfWhKIB4ReFQtMm529zvO1ZzhXO43%2BjAqzsCsQI2EehsI4TSAnPLzP50ENhs94lH8BUCqQ1&X-Amz-Signature=61cdc9f9534ce980792b2a1c6479d43de15151874363492bf3d5e1cef7c5bbc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2I4JKN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfND6qN9Y8aJvepN03B1Ic8QZKdnUpU8JzlfmmodWqOAiAhAXhT0pr%2FeMJN6k%2ByJ6sW97lNkiXgrY7p0MMjtUo0FCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2F8%2BVA1j8sRz1DeIKtwDo%2BpX42Ebs4xgxl2wwfTW8v%2FLsv9tGLyP77JWafpYHVQoiSuTNCEBtLTvMr2%2FPLNaUkaon%2FpnaPTltPIkUhWL3aDe9fIDukeXJj4i2%2BHuGhiNY7bLPyL%2BkHwmkGxTdbK6p53pmBpycCnZouICByJQLQenIiSi4gNAznVrmP4vax2LK0APM%2B3nXvQ5gjk%2F1wr5APQcxqxRbPCat3dON6i%2BwjoxL%2F19Ev5m9G1yMBLcSuI4WckixWAAWEVTIqLBSzc1401SKsOG3PfBUhLnRVUHZ5M5LIU77noWLvIuj0HCYTUrz5GBNUzGmYkPCY0onOZYvcOhopVxI6S2EW39HOJBuwEyBMJYmUzC0i7UFHaRbVOV8fKBJoNPUjyCks1TksE0s2YmNgornlPrzdR4Q35cAYsX4NPLfbJHoBOlYToQBaH%2BNvs9dOVNNZWnuv29BXqqWUxmNkIr3gqi%2BbXA4mMVV0ebRhCBNK2CL6XlcRf1EQOQP%2F0fhoZZSGQ0zvWnQcp2ZZA9KF%2Fz3NSOQ%2BUzPGtRRwqckhWpNfaC5iqzxF9JE%2FC7MHMc3OjtC2Aj8MpdWGYrSGdvBXJGtkVeG2MZiXHxr2rNHzxCYfpFKzjzQIXOTXIWPfLmcgBUET9l5x8wgL7TwgY6pgHKRHEsjqcIHdro97IG7hgOgr8s%2BlzDbecQZY2e%2Buf4XZhE0jVFOcQop0b4xOJs%2BsUEsqhEas7nf4Y2Vn5OMbV7avy%2FHcuXaX%2FzXhvh0hgq864gzZzxFu6pA7JVWpNioE0VOV2Zt5lDUu4YVb%2BeO1iw5jJGT6UDM3JhLM%2BRyK4CRMQ%2F32j8kqomJvY9qzEYx4PXy4hccU00ltWKHaFv6dRkoseAWbXz&X-Amz-Signature=21a305cb29d5fc08e7048761c36300205f2d521d76284a6ab1f5e27f4ce6b976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
