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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CLJZMEX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCMvq%2Fq0SyX0Vv9CUE%2BnHpIiLiXLKzrirqO%2BwmgbZ%2F6YQIgC4EV1qNPM8dlwWUECs%2F%2B7DjxyMzqVbovJuc0pcqXbAwq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHkKQa4R9GfSMflpqCrcA9iDfggpNQmoNRRutntDJ4CvusWpelXEGVDxWKfQ6E9DH%2Fr%2FyGhhwq4f3GDo2kpbSysmRApIP4SYCRtIfsCGzdL%2FFF7zXt2AHt1kfuXY8674xgMhRJoddREVvzlzihM3mUrJK%2BUGyJp0Q29YeSyfZyBw0%2FVNoDNBd5F4HP461ta9Lpe914TnpB2uicpc5W3lKlEvXBJ87w2FQLCBvNOcPTEuXtaiHTQBvhI%2FMhmrApWcn8pRyctJ1klcOR6um%2FoWrn9CydY03dpGqMXJ8xWZI2oe60wFsgzyjhV1z6pN8%2BgvH4q8HWddYZ5xOBPPIBX3PC5OABI3D4K278f3O1pACRiCLMQa%2FUwjDQRlr1a0Z66cIQjUt16erYwV%2BdAgZ2G2UnSFxwU1tZ0gQCgui%2Fa9DM4l37Yp0bxvZimy3Db7JuLNhCKnQ%2FxgcSQHTfHSEweXDP9X39TULrrvdVX9Md%2BRJMHFKQXLqJ8s4lQbE0FgyWL3rV5N1YQ3ZieaxugLNoMVOXKantA8EEyPkP%2B1WFXSwGWT3W0UuatqII73YSNeoaQ3hh8SS%2FYRTNNMqBvq%2FtORn5ZjxX7nO3ichuHoBTBV9A2X5nGziujLR6I514L7kzBbGCcylsVw4VqhFf4dMNS7m8MGOqUBF764a50Joj4TMZyFDONdAkU83eVZfLnAT8IoxzPyWnCcJSc2U5MLrpaReZwWniZ90klpXEOcKAUHrXaRaAkMr29p5rnWNSHA1p65ZIRq8WT6I1rkLTVMjKYwXjhoE5Kxw5ZlnXu45VOkZMWgjmWtMsjQQA7rvY4wOedWBoWmElTr%2FNdV5NjKEt%2FnZBas1up845oTJOczK%2F552ysPouphPPVKG3xT&X-Amz-Signature=17b9d2c604a7e4bb72e605371f792fee8fbec239825ac037ba206e01dbccf23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC63ICAJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCtX1x0bWb%2FA9oIXpLJ5hOk88oAu4iqNRAq%2BTy39NnLEAIhAPuEPm0lhCuydf%2By0a22LD9f8f4gXaS%2Bnq8ixOFptG7oKv8DCB0QABoMNjM3NDIzMTgzODA1IgzvHk95jeJDYtJDWAEq3AP1t%2FB30e%2BZ1JSV6mpCOcHkFIrXu7%2BNjKoShcc0gusfLFkAbXlmKaCdRfF05kImiv4aEuv%2Fc3qEYAHIag2fueLJLMeWhlVT6tWHDlog5KxQpG3NrxrMYBi0yLZMayTeUe%2FCeMwlKGN4wQ4X4kSLEmMASINP1nu%2BVVoWrEzGyZhdSWaqG3DpvJi7uH13tN%2F6am1owPsYeYwZNTLILx29LfY6majpGLpXJ6EKMixltcb0gSI78cIWQBnzzc9DnEce161OdMUN5Txo10oiG9l4A71KQ9vVVhBXEMKpHQt27n4jJlDy1F2dyqZQz1kjvswQbWkM4P9ykz0OFgQ%2BBUzRyWk8%2BjYEMYtFfbQqDgHzDOd47gFov88gdpZCO4bp7UkHyahIXOQd16eYR%2FNs%2FD6%2BJ2fglMZetnIGKC%2F5enzKO5ELhAfJZldaCBRa6jQTbngrg3GaVcUPYs%2FmIQoy6dq2kWPyz0B%2BNaHs87d2MVV0cPzcuu%2B7TILoKdV3yzjRL6rcvCETzP%2B6OEzJ%2BfACcgoRswkTQ5OiRfN7OOX%2BtkrcE%2B75R0WUza67q2jbPydtiWc2W1iQW%2BUyLByWPETUZ0KSyB82pt2fublbyx2dWrye98Gn%2FKulafq1n3IcyZrm7DCFvJvDBjqkAU1fSUaSwJKqwWQxdTCPd1etseYIZayKdjWZtCP6K%2Fbw8wbbtQoSbs46h%2FcFg9c5PF%2FeyMbnYZWFEqpebj4kNgA%2FUTeZ1UpqUcmnZnVhkv2JHdSgM7C6IXpVTkizj%2FW%2B5zeYWNdmj7vfQ1uBfTW%2BJaCGPYOaGCUdF0vFMygQ3%2BMYxNQxtY1435S3ZGHnes%2FEhvT24LuSKIcJw%2BdjalSUKvE5fRmU&X-Amz-Signature=c901bb8d76d66b7204e7d4e74c73102a590ef7f81517b3ef54f4c17cb0043864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
