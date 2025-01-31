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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O77EG57%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjiF3TSYkUgzsrlSWuYorH705S5AfcDiCQfBbmJMeH3AiB1fUZV6CIH6fvb6%2BHkdx2F%2BONbOoovqiRDf7fFj5QfCiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FgassoroYP70avcKtwDxkVlAldAoVhvXUoqcU69ysei3X2pSfbWCLcLCPTm%2FDjHubZE6Wl5s1U4U3zIf7iRWAxzKYBgRh24Vw1dz3pi6Aec%2BTWZjyhN7Em3aw1hFLLxyzP9UC2UOQsHbKtvI2L4T9lIRKA6XSwVDIdRdDqPMq%2FD2nNzGJSsxEa8JVzkI9ROKipcxh8zm%2F%2BHNQAtj%2Bu2e5f%2B2C4C1V2Yt32FhA43QaLCX2XVZwcJiRktL2WClN2Fw7aOp4S9f9q2F2TTH86M5l%2BaTKQdOlg5phW5pkdfmc8yP0SJvJ2j1dcMknhNpFYWIlE9Pu1vZsVcWiWweGxJ584ArpYFJqCPvIUT2HDuKvGXf559mbSU7VmhHH6Os6AYzriDJlw%2B8UxW%2FLHT4uqNbZ4uQlN5mS75XzYGESPJa4B41MmyIzSKFvPtG8870uhm9NDlxRQBpiOT8pMpXAANZiu7uJNyz0rcbiiT%2FK%2BIBto1Sss6tnkdMCEOLZi1wDCdDaQCcw1AF4Oe4rr6PM8OpSaTB6OTHm%2BZ1PS3X01xxVXTj5my3HYfla7LkHq8WAS8Vof7oK9%2BJGjxxScM3hr6sXGp%2Bqt6yzXuInIuXFfw74BHsjoeej2dhSrXxl%2BBfKxnm6nWE0AiBTpSWAEwlsnzvAY6pgHM6tIpd20BzcjgYBSGhu7Hc5VXr%2BHusYhOJgEFw%2FZO7%2BZvXoXtsRNS0ogc9vFVeQdjTJtHgistxyWQGB8AQSaj1E2Nl7XdE8o3Gs5H88dr2IoR84azHn5MFiBUG1zpNiR2Asvin4IUKkkbFf9c19cyPsd79hFUn7AdrPcPvcyApabCc2UP%2Feqq6cIiGJX6U0%2B4Z68fOlKe2OKBcRMDCR41jAxduptK&X-Amz-Signature=f6ac8ed0ab00495cbded6c84b478d982e857b533c0f6a4d9190fbd46f3602bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O77EG57%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjiF3TSYkUgzsrlSWuYorH705S5AfcDiCQfBbmJMeH3AiB1fUZV6CIH6fvb6%2BHkdx2F%2BONbOoovqiRDf7fFj5QfCiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FgassoroYP70avcKtwDxkVlAldAoVhvXUoqcU69ysei3X2pSfbWCLcLCPTm%2FDjHubZE6Wl5s1U4U3zIf7iRWAxzKYBgRh24Vw1dz3pi6Aec%2BTWZjyhN7Em3aw1hFLLxyzP9UC2UOQsHbKtvI2L4T9lIRKA6XSwVDIdRdDqPMq%2FD2nNzGJSsxEa8JVzkI9ROKipcxh8zm%2F%2BHNQAtj%2Bu2e5f%2B2C4C1V2Yt32FhA43QaLCX2XVZwcJiRktL2WClN2Fw7aOp4S9f9q2F2TTH86M5l%2BaTKQdOlg5phW5pkdfmc8yP0SJvJ2j1dcMknhNpFYWIlE9Pu1vZsVcWiWweGxJ584ArpYFJqCPvIUT2HDuKvGXf559mbSU7VmhHH6Os6AYzriDJlw%2B8UxW%2FLHT4uqNbZ4uQlN5mS75XzYGESPJa4B41MmyIzSKFvPtG8870uhm9NDlxRQBpiOT8pMpXAANZiu7uJNyz0rcbiiT%2FK%2BIBto1Sss6tnkdMCEOLZi1wDCdDaQCcw1AF4Oe4rr6PM8OpSaTB6OTHm%2BZ1PS3X01xxVXTj5my3HYfla7LkHq8WAS8Vof7oK9%2BJGjxxScM3hr6sXGp%2Bqt6yzXuInIuXFfw74BHsjoeej2dhSrXxl%2BBfKxnm6nWE0AiBTpSWAEwlsnzvAY6pgHM6tIpd20BzcjgYBSGhu7Hc5VXr%2BHusYhOJgEFw%2FZO7%2BZvXoXtsRNS0ogc9vFVeQdjTJtHgistxyWQGB8AQSaj1E2Nl7XdE8o3Gs5H88dr2IoR84azHn5MFiBUG1zpNiR2Asvin4IUKkkbFf9c19cyPsd79hFUn7AdrPcPvcyApabCc2UP%2Feqq6cIiGJX6U0%2B4Z68fOlKe2OKBcRMDCR41jAxduptK&X-Amz-Signature=fae3dcdc264ac2492b331952f62313a337036ec150d3f7f1a88bff3b08b2eb31&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
