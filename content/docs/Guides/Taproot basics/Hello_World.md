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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KZ7XCQD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICaqsohoMbdVipyYTX3GPpiOQ5DJ4zJMi%2FoESRV0f9WZAiAf6o1pv%2FYT6SN%2Btna7I34pnu4bNZY7bIoWRlnwjPK3Sir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM%2FvXeRsGDIAGRxLLXKtwDe8Wyu4xfPqm5xUhFJG2ksa4V%2B5Gi%2Fj1%2BaPmEReFm6BoMkWiAeS564w2yOS1IGa7g9R5aaUS5zWPdwVcTqL1%2FSKwW8TNvLKkgnOd0EaCOQerr0MdbnpvBOd9peWp2Lvh7AaNV%2BQ3SMhAiXLmtXwyyCZqRUXEabVjflFSyW1X%2BU6P9oJc6CkEupfiE9ywYF6r89JvO1zNEBfmjUf1i%2BwOeNlYj1uK%2FfcXaCHGF8BiwKZYfuS8eUb26Nn6V6L1PtvX1R69lzcPuynNWdkJgpvhYqudZUqOqOUojEqZhnTiy90BG8xt9RWBVnhoHGcW7SqKjzptO78jgAnosYFWkKJrwBoqBMnGihFuhYq9IJyYK4yQz%2BrF%2BeamoK%2BRsIY0ab7nD2cG208iyFG8K%2BQMjSqiAKiqqV%2FgjLBfwDRlXFfeafMtzuJsfNI3Kj7EL9lseIY%2B6WcPkMsywnd5i4ng04zaoOkc%2BsMfnYElgCb1eyDcADbUtVpjxKyXFZLSQ1jb%2FPC4UUPMSvwFBHO%2FW9P%2F3UiVZiBDbHFiP%2Fx0BOE5brbqklSOGrQ2A%2FchiD7AAzdp6NXNm%2FSmUMGwviRq9PXdWzk0o5ZY6xzMz%2FdWaUOJR1gTZ%2Bh%2F49dCb%2BdVOamKw8xIw5qqIwgY6pgEwY9xeOMrv9Jm2dM1oknvMje9Yx%2B%2FXFgQRV7qPUYxDMV1mIVcUvlHDFD8dzGnN%2FU4eXQAhYpiP5nCMUMPVnAiN21XxW5friRI%2F7qnXBcRVaFWTdfw0dgiq5Gzq6cmIrNUGWLDLmakaeDF5mF1ZSl3IHsCUwQCQLRFv3XzzFBVOvEnuSnSQx8hU2SC3RdyRw21HLt5p4T0Cy%2BUd4iVrDv8paS1whyNC&X-Amz-Signature=67f430e8eba40395084c5aad3963db040b2105e61d5de3edc8ac65c7748c882e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KZ7XCQD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICaqsohoMbdVipyYTX3GPpiOQ5DJ4zJMi%2FoESRV0f9WZAiAf6o1pv%2FYT6SN%2Btna7I34pnu4bNZY7bIoWRlnwjPK3Sir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM%2FvXeRsGDIAGRxLLXKtwDe8Wyu4xfPqm5xUhFJG2ksa4V%2B5Gi%2Fj1%2BaPmEReFm6BoMkWiAeS564w2yOS1IGa7g9R5aaUS5zWPdwVcTqL1%2FSKwW8TNvLKkgnOd0EaCOQerr0MdbnpvBOd9peWp2Lvh7AaNV%2BQ3SMhAiXLmtXwyyCZqRUXEabVjflFSyW1X%2BU6P9oJc6CkEupfiE9ywYF6r89JvO1zNEBfmjUf1i%2BwOeNlYj1uK%2FfcXaCHGF8BiwKZYfuS8eUb26Nn6V6L1PtvX1R69lzcPuynNWdkJgpvhYqudZUqOqOUojEqZhnTiy90BG8xt9RWBVnhoHGcW7SqKjzptO78jgAnosYFWkKJrwBoqBMnGihFuhYq9IJyYK4yQz%2BrF%2BeamoK%2BRsIY0ab7nD2cG208iyFG8K%2BQMjSqiAKiqqV%2FgjLBfwDRlXFfeafMtzuJsfNI3Kj7EL9lseIY%2B6WcPkMsywnd5i4ng04zaoOkc%2BsMfnYElgCb1eyDcADbUtVpjxKyXFZLSQ1jb%2FPC4UUPMSvwFBHO%2FW9P%2F3UiVZiBDbHFiP%2Fx0BOE5brbqklSOGrQ2A%2FchiD7AAzdp6NXNm%2FSmUMGwviRq9PXdWzk0o5ZY6xzMz%2FdWaUOJR1gTZ%2Bh%2F49dCb%2BdVOamKw8xIw5qqIwgY6pgEwY9xeOMrv9Jm2dM1oknvMje9Yx%2B%2FXFgQRV7qPUYxDMV1mIVcUvlHDFD8dzGnN%2FU4eXQAhYpiP5nCMUMPVnAiN21XxW5friRI%2F7qnXBcRVaFWTdfw0dgiq5Gzq6cmIrNUGWLDLmakaeDF5mF1ZSl3IHsCUwQCQLRFv3XzzFBVOvEnuSnSQx8hU2SC3RdyRw21HLt5p4T0Cy%2BUd4iVrDv8paS1whyNC&X-Amz-Signature=0ed887671e1a7c8390d8604874977074bb774b917781152c5c30d9a57db63923&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
