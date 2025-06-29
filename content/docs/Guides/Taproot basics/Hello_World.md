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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG6NBF2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm5LyPt1preFaspk5tbHiMHYuFSUoWNQhUOBD7%2BQZqfAIgRAGeAxuYgjaoVALWY1k2j4XRr4%2B4y2KpnnBpuTPnXqkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwP0mJE%2F894YRD73yrcA0kQ6X97gloaoq%2Fw7ulnhoAEiSAOBGPfBp4u%2Frk%2Be7RMeji8gQ6I3bfHwvccqsz0PdEgiK%2Fim6gmuhms0p3tgyi7N6a5RSQg3BkzGsP%2BBDuIU%2BBHy118noMpC0CD407qHQnpcmtY7FyLTNS02GmaGMeS%2FTtf921yxZgr0XepjRw3LdF91dZMcoOVWZ6e5hsEpDqBwMCe7xBsVCJSutGX9uQ9oXGslk7SbHcFtSrXN3bMbdax8CigMbpXa20vU5CqIoQnJBr6VsT6Kr94UKJ6KsQxK%2BjmRTmMNpazK%2F2usMQMTpNBo%2BbF8gOL3X%2FyxJgLT3bpQUbHgSznj4LTEDh7aCQ5CZ62lRPx%2FSoYkXH0X%2F5AcWgo6W9NCuzBVQTxfiQcGE1LmIpZuBXiec0r%2F94r%2FB3f4ntXl%2BvNHiNWtTIZT5DP8KY9OMEOBqcBghDJG0DMJf3%2B1aCv1El%2FyAb78Fr7avS7wpzSrsXmtLORtrsArvILEg2O8y2I5JdUF6j9R6dVQmfbcuPvCuhy7ZQu74q44sHouLhEKq0fGY8wOHxKWCrlx%2FfdX4q6CxdxSoKeq8yVDvKLF39x28oafRoWTpwrVOTbup8OTAaVco2V50Oolkn33OxyzmzBDoeQo7CiMIvNhsMGOqUBLiI1NGKKdI3t7dQqg7JcSRN6V487s41yXVbMQv2LxQ2%2B5jdxv8DS0sHHkjnQ3R6NPDeEsaLXZpN4XmG7df5zhBAeeNmlsBqsfnbeD9Q5DmP2VZNu7KT9RKvAuntml2mxjdkEy9YiyGP3HXEZ%2BFFjGt%2FB4BsBYXiDnYL4Z62pC1ZCKQGr1AQVuR8wLtT2rwBhtofadJUyeQQoTkYf8EqbS3bDKltT&X-Amz-Signature=dcfc47e392b45f8fd7c2b43cea51a91f98d3f7b6c3f83da1388521a66be404ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG6NBF2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm5LyPt1preFaspk5tbHiMHYuFSUoWNQhUOBD7%2BQZqfAIgRAGeAxuYgjaoVALWY1k2j4XRr4%2B4y2KpnnBpuTPnXqkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwP0mJE%2F894YRD73yrcA0kQ6X97gloaoq%2Fw7ulnhoAEiSAOBGPfBp4u%2Frk%2Be7RMeji8gQ6I3bfHwvccqsz0PdEgiK%2Fim6gmuhms0p3tgyi7N6a5RSQg3BkzGsP%2BBDuIU%2BBHy118noMpC0CD407qHQnpcmtY7FyLTNS02GmaGMeS%2FTtf921yxZgr0XepjRw3LdF91dZMcoOVWZ6e5hsEpDqBwMCe7xBsVCJSutGX9uQ9oXGslk7SbHcFtSrXN3bMbdax8CigMbpXa20vU5CqIoQnJBr6VsT6Kr94UKJ6KsQxK%2BjmRTmMNpazK%2F2usMQMTpNBo%2BbF8gOL3X%2FyxJgLT3bpQUbHgSznj4LTEDh7aCQ5CZ62lRPx%2FSoYkXH0X%2F5AcWgo6W9NCuzBVQTxfiQcGE1LmIpZuBXiec0r%2F94r%2FB3f4ntXl%2BvNHiNWtTIZT5DP8KY9OMEOBqcBghDJG0DMJf3%2B1aCv1El%2FyAb78Fr7avS7wpzSrsXmtLORtrsArvILEg2O8y2I5JdUF6j9R6dVQmfbcuPvCuhy7ZQu74q44sHouLhEKq0fGY8wOHxKWCrlx%2FfdX4q6CxdxSoKeq8yVDvKLF39x28oafRoWTpwrVOTbup8OTAaVco2V50Oolkn33OxyzmzBDoeQo7CiMIvNhsMGOqUBLiI1NGKKdI3t7dQqg7JcSRN6V487s41yXVbMQv2LxQ2%2B5jdxv8DS0sHHkjnQ3R6NPDeEsaLXZpN4XmG7df5zhBAeeNmlsBqsfnbeD9Q5DmP2VZNu7KT9RKvAuntml2mxjdkEy9YiyGP3HXEZ%2BFFjGt%2FB4BsBYXiDnYL4Z62pC1ZCKQGr1AQVuR8wLtT2rwBhtofadJUyeQQoTkYf8EqbS3bDKltT&X-Amz-Signature=bdb861e2c9b3c43b20d7ac80eee1127c67047163470206dac475c9d4ab309e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
