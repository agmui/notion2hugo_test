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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SKPOPK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgEY8jDR6J1HxTbBTxjYbZp6opMeBFFGXWUQ3xoXrv6AiEAmYEOaqshuAMLRCaSheJIELdypGRZKiZcYlO1XCN8R%2Bsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDZcEAZzaC5qBbA1RCrcA1BXV5ujiBkRdOBeyUbWRj96NqKgVjzb4oFQCIHILcdLigq%2FvMKHmrBaScj2z1PP6lWIbdnDkxGBGSyiylFkD8v%2BNFcLt7%2BoTs17dxdqnPKkOtXvQFrzBmy%2F6GYQv3ZKC3EwpoVR3zpSX4525B95Ss%2BTQslEHVzLVf%2F2KfpGgN4kefu495egelbHo6vWP1v39Pjra0f4gcOWsi1S3Wf9ljKbQu7KQ65X9JsB%2B55Ey39g2%2BN59bzF9R6nhqAwlHs4eO2aYMf9zw5tk0jOc5713EX%2Bv7aBdHtTxD7nexBvlbp%2BkxHq3op6%2B69YUOYE%2FBZ8BXAe4%2FmueCRUJ0Eu1aI9O4371R181Ysc41ViRqPoN0hwKEtZ155%2FdmUIacXjUp0TzM8UJQzuPbeIt1OvFPMz5AqUQANns4pgdnD23ymgI6Xi0kWEBpXmHgKDo4M2vGH2BKv%2Bj95yIDqxugW%2BLYRlRlV6uFGLkGQqPI5rbxN77Kp2jK8WOLrlizm%2FUb9PCTXQn1BJCJa5ExtvBh%2Br5mjR6%2FK8kPOkmLo0dpUpPQCw2GQ0lja7LBrEXs%2FdYOvAx8MJJgVx3RLWAK3J%2BczW9NYZFh%2Bof2%2FfkmYW2iVcZxA0r0htavpSeFhShkYEORGjMLSNuMQGOqUBrFvScCjQJAaRyZxnb88hhXZGvbrVkBwGk1IGDxkeHZTzMzI82yWE58tSYlSdr%2FfOdKKyuNWdSdbRDRx0CH1%2BAADRjukzXEetF2ZllQ%2FGePFYZC2382CDVY9fYIpcxkJHN8wVP1CN48gcaWXdWlknN1m0R24M%2BSa9PHlEBdlZuIvH4brh%2FU2aYds9EVIchJ0aP7QgNDlH1sVoR%2BHlRYmOAWQ17KtI&X-Amz-Signature=ef3a724aa469429820ee7d6b815f4f63b35baace901857196ce984a5ae1e2326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SKPOPK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgEY8jDR6J1HxTbBTxjYbZp6opMeBFFGXWUQ3xoXrv6AiEAmYEOaqshuAMLRCaSheJIELdypGRZKiZcYlO1XCN8R%2Bsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDZcEAZzaC5qBbA1RCrcA1BXV5ujiBkRdOBeyUbWRj96NqKgVjzb4oFQCIHILcdLigq%2FvMKHmrBaScj2z1PP6lWIbdnDkxGBGSyiylFkD8v%2BNFcLt7%2BoTs17dxdqnPKkOtXvQFrzBmy%2F6GYQv3ZKC3EwpoVR3zpSX4525B95Ss%2BTQslEHVzLVf%2F2KfpGgN4kefu495egelbHo6vWP1v39Pjra0f4gcOWsi1S3Wf9ljKbQu7KQ65X9JsB%2B55Ey39g2%2BN59bzF9R6nhqAwlHs4eO2aYMf9zw5tk0jOc5713EX%2Bv7aBdHtTxD7nexBvlbp%2BkxHq3op6%2B69YUOYE%2FBZ8BXAe4%2FmueCRUJ0Eu1aI9O4371R181Ysc41ViRqPoN0hwKEtZ155%2FdmUIacXjUp0TzM8UJQzuPbeIt1OvFPMz5AqUQANns4pgdnD23ymgI6Xi0kWEBpXmHgKDo4M2vGH2BKv%2Bj95yIDqxugW%2BLYRlRlV6uFGLkGQqPI5rbxN77Kp2jK8WOLrlizm%2FUb9PCTXQn1BJCJa5ExtvBh%2Br5mjR6%2FK8kPOkmLo0dpUpPQCw2GQ0lja7LBrEXs%2FdYOvAx8MJJgVx3RLWAK3J%2BczW9NYZFh%2Bof2%2FfkmYW2iVcZxA0r0htavpSeFhShkYEORGjMLSNuMQGOqUBrFvScCjQJAaRyZxnb88hhXZGvbrVkBwGk1IGDxkeHZTzMzI82yWE58tSYlSdr%2FfOdKKyuNWdSdbRDRx0CH1%2BAADRjukzXEetF2ZllQ%2FGePFYZC2382CDVY9fYIpcxkJHN8wVP1CN48gcaWXdWlknN1m0R24M%2BSa9PHlEBdlZuIvH4brh%2FU2aYds9EVIchJ0aP7QgNDlH1sVoR%2BHlRYmOAWQ17KtI&X-Amz-Signature=027d7f5d7aa4cfa499f1ac9d13c3f01e57cf8b5069c197837ed882ab85d0f786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
