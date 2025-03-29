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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CSGT57C%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBFae32TNivujG7tr0KwZEuBUYe%2BIub4p28txKqUavViAiAvSTGY4IglVMXQcCayAZdchJIC5gdTfJeRr%2BR2X9jnXSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM%2F7QYIWJuwwGWf%2FF%2FKtwDRV0SzHPN%2FtgMrBrCwGcaUReY5YaN81APt4qsAepDSQm7f8Dd4i0y6ceDPAxB6AW1665f8hIhwP%2BtjTkm9oHDkblLXxvd0YBJLAg9YoBngf%2Bxidc6wgTlEaUwnLC3wlnj2QozNGQaPauKEa3MZhOGbof7OvelJT0LtYrdN3GSciheR1VqT%2FwMgRtUSaX5qc7FS6mCmwAfv%2FHyQ%2FhaarDbpKULthrhFwuUJBNTe6%2BcrEaUdrGoW%2BpijUqkftmefiJ8ivNuJk5hzrC4JyIUYLZuISD5qv5rdSsGGfRxSY8I%2B4JOYWamFZYzzlJpqFBOO4o%2BBUH8QqaaxRbTrlg2mQjFhCQCyLQ78ajFMsIyQiBQZowjlgsVmmTiS8RdCFImYq2u7TkpRu73o%2FO3Nd2DEPFIcGiFzZqXw0TxfC%2FdGE0gozymXvZPqXy4tt10TgL3x570UOO8iJXYzYq0BXmQOWA59ZgWhnhWTI%2FE1z2jSUZUtrWRrQgdXL%2FCJMeZ3I1SrITlTNK82A2hzlT8ClpGdME7cq7ObSLvZVgNjoxS1NDUMJsa8DFCAfFZ8U7EGyyha3BeFbNb%2BclGKxR5qfnKKpJyoT36EgtuzKVl8CaUbH9QXzgPmfS%2BhHaZiVGCQfswvN%2BcvwY6pgFcqhXhVBaCdyko6LmD53LMSbqWkyXNXrwqFBvjMWdJzUaZ%2FFpxSbNrSGibL%2FmwHicdGoJLL8vwEXuEb%2Fl71Ip4ywx3Bo7Py8GF2bLcUPcEpHrsLTlrCmTIbBTw2DXACptstsdwLjKFsnm34mteHUb%2FefOGICg9dqwhz3DtbUWrQL%2FMHcyPAp3utaS7DL0FJyQyxJjgtiy%2B9CSOrzzIBa5Lz8qTNrLh&X-Amz-Signature=409591098d77a0ea76b6b19c38a9e6624ccba2152717ab5aa375a334f693e7b6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CSGT57C%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBFae32TNivujG7tr0KwZEuBUYe%2BIub4p28txKqUavViAiAvSTGY4IglVMXQcCayAZdchJIC5gdTfJeRr%2BR2X9jnXSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM%2F7QYIWJuwwGWf%2FF%2FKtwDRV0SzHPN%2FtgMrBrCwGcaUReY5YaN81APt4qsAepDSQm7f8Dd4i0y6ceDPAxB6AW1665f8hIhwP%2BtjTkm9oHDkblLXxvd0YBJLAg9YoBngf%2Bxidc6wgTlEaUwnLC3wlnj2QozNGQaPauKEa3MZhOGbof7OvelJT0LtYrdN3GSciheR1VqT%2FwMgRtUSaX5qc7FS6mCmwAfv%2FHyQ%2FhaarDbpKULthrhFwuUJBNTe6%2BcrEaUdrGoW%2BpijUqkftmefiJ8ivNuJk5hzrC4JyIUYLZuISD5qv5rdSsGGfRxSY8I%2B4JOYWamFZYzzlJpqFBOO4o%2BBUH8QqaaxRbTrlg2mQjFhCQCyLQ78ajFMsIyQiBQZowjlgsVmmTiS8RdCFImYq2u7TkpRu73o%2FO3Nd2DEPFIcGiFzZqXw0TxfC%2FdGE0gozymXvZPqXy4tt10TgL3x570UOO8iJXYzYq0BXmQOWA59ZgWhnhWTI%2FE1z2jSUZUtrWRrQgdXL%2FCJMeZ3I1SrITlTNK82A2hzlT8ClpGdME7cq7ObSLvZVgNjoxS1NDUMJsa8DFCAfFZ8U7EGyyha3BeFbNb%2BclGKxR5qfnKKpJyoT36EgtuzKVl8CaUbH9QXzgPmfS%2BhHaZiVGCQfswvN%2BcvwY6pgFcqhXhVBaCdyko6LmD53LMSbqWkyXNXrwqFBvjMWdJzUaZ%2FFpxSbNrSGibL%2FmwHicdGoJLL8vwEXuEb%2Fl71Ip4ywx3Bo7Py8GF2bLcUPcEpHrsLTlrCmTIbBTw2DXACptstsdwLjKFsnm34mteHUb%2FefOGICg9dqwhz3DtbUWrQL%2FMHcyPAp3utaS7DL0FJyQyxJjgtiy%2B9CSOrzzIBa5Lz8qTNrLh&X-Amz-Signature=8d5a88b92f0f79e7999857a08ff40a4151240c6f9031ab8dd85733f01f16a60c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
