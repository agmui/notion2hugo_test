---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRQRVO2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDGn9i9qDScyWNPPoBNz%2F80mJx2UZds4fURUYI%2FCZ1k3AIhAOo4uq7bz5XqaY8WIY2L5H3Or8kMr%2FfoCwwL2kagjwRyKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG9%2FBds9Mzc1cw%2BKUq3ANO9PLK916tNFyUBlUKF%2FkUxS4kWDwrIGv2wGZJrUbT7LaX26RN42Ubsknre6aiPQGC1j80AjgAUG%2ByYW3g4XgBVL4ZeJtowQpFdx7rSUIkMNv16pMJ97y9ybaE1HN4vSaxR8f0i9Vhx8wwEVo1btVNmcEG%2F2n%2FwWfw9oDSQbNCLVHPSw6t9fenoMQuIGdUWTbZksvwxBmo8fQEIzHnNk7b9sWyvKi%2B12HFYI27T9ms4QSXXKkJxLLYaGHCE1muhEsrERfrNyAtvOLI54HRioRGCPAxUwTA2s04vf7uQmO1xTBUAi6mILLQH9IEk3iBAivc761Bx32r5LbePND9zeHz6r5sjPFCG7T9GORmmjeCMoqLtbbR55rw05Si2TmwcFftErvCMXQbcnXBKO8W5%2FLNxdVIM4cWrNJTNh%2FCrwhWypZCAeLwVTcs8nxJjeqGRwH7lRLicDKA0YOpetmotTnGx8B85sLOVtPXM99mWPerwCO4ZHZhzk7Ffxvezui6SbkwvxWZ6hKhg%2F5byjL7L%2FfXDwHC52enLDTv97ilGTc4wGnZww3Ci42uTHWdf%2BPPHcX0DSASvhvcDnnsh5EaqNYN2XxMCsaY5R6RerC%2BqekoqW9oniWfGKqqbNMkPjCAhYm%2BBjqkAZSFRij61kN0Ru7IhnifFZ7fps9%2B2kaK9TsHaMtP%2FGwR8bIeYOMr9pCmRg89qBTEC5hEyDtQzCK9kXswsV5H%2BlxuVvKNsWNH3yVFuTgflJgakL%2F2rTnZAbdv%2BLFz%2FVblfhx4nzvpFYhRxSdmByHjYjCoo%2FfHHp%2BCFPI5MzJX2IwYRSQqjgrE3Vz3A0%2Bg4MfwrVLAZkpSeUE4v%2BDm4FIvCxD0AyAA&X-Amz-Signature=40134d3ac0b70aaf04974345b3638f59cbd5e7b702e8071dc92e72aac94fc3d5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRQRVO2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDGn9i9qDScyWNPPoBNz%2F80mJx2UZds4fURUYI%2FCZ1k3AIhAOo4uq7bz5XqaY8WIY2L5H3Or8kMr%2FfoCwwL2kagjwRyKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG9%2FBds9Mzc1cw%2BKUq3ANO9PLK916tNFyUBlUKF%2FkUxS4kWDwrIGv2wGZJrUbT7LaX26RN42Ubsknre6aiPQGC1j80AjgAUG%2ByYW3g4XgBVL4ZeJtowQpFdx7rSUIkMNv16pMJ97y9ybaE1HN4vSaxR8f0i9Vhx8wwEVo1btVNmcEG%2F2n%2FwWfw9oDSQbNCLVHPSw6t9fenoMQuIGdUWTbZksvwxBmo8fQEIzHnNk7b9sWyvKi%2B12HFYI27T9ms4QSXXKkJxLLYaGHCE1muhEsrERfrNyAtvOLI54HRioRGCPAxUwTA2s04vf7uQmO1xTBUAi6mILLQH9IEk3iBAivc761Bx32r5LbePND9zeHz6r5sjPFCG7T9GORmmjeCMoqLtbbR55rw05Si2TmwcFftErvCMXQbcnXBKO8W5%2FLNxdVIM4cWrNJTNh%2FCrwhWypZCAeLwVTcs8nxJjeqGRwH7lRLicDKA0YOpetmotTnGx8B85sLOVtPXM99mWPerwCO4ZHZhzk7Ffxvezui6SbkwvxWZ6hKhg%2F5byjL7L%2FfXDwHC52enLDTv97ilGTc4wGnZww3Ci42uTHWdf%2BPPHcX0DSASvhvcDnnsh5EaqNYN2XxMCsaY5R6RerC%2BqekoqW9oniWfGKqqbNMkPjCAhYm%2BBjqkAZSFRij61kN0Ru7IhnifFZ7fps9%2B2kaK9TsHaMtP%2FGwR8bIeYOMr9pCmRg89qBTEC5hEyDtQzCK9kXswsV5H%2BlxuVvKNsWNH3yVFuTgflJgakL%2F2rTnZAbdv%2BLFz%2FVblfhx4nzvpFYhRxSdmByHjYjCoo%2FfHHp%2BCFPI5MzJX2IwYRSQqjgrE3Vz3A0%2Bg4MfwrVLAZkpSeUE4v%2BDm4FIvCxD0AyAA&X-Amz-Signature=6aa145c9d6e87604ddb80bd0d3311209f5813d6675d830b8674593589f235dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
