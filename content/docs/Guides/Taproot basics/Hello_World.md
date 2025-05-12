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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHXSVYAC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFbHotPmjf1YFdBwLFvhGJ8ZuM9cm%2Bbu2cC1cDI5eKHdAiEA%2F46mN5cywgjWbfuK0S3CRxPkuxTEnj6dNSLZOrI3eBAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZxH8LZEbIbW1WgrCrcAz7HeGdRQH7xs%2F%2FmYv9SQaGBzVx4sTa6PJOoKU7cj9gCAHGpKqs3EyAcjnO7J09ADA538XjjrW5lpiaZnZmxnnD00C2I5Ww9Met4MFLJ1CyFhLseavUs6qdMvoH%2F3C%2FL57q%2Fq7htpZ2W4pMwHijWaQFAQAqqGL4pNTGbYQzepydtDxNsDPLVteBPHrcJ2lvZRwHEqM38isbg9lY6PVUhi0GyGEXkEpBpSi3DmOO5kcTYUbEcBmkMNo9GKeuC1TRSJbP8%2FkjDkzAvNT0%2BLj6TcKLmpn%2B7GdC63PuUfNU%2BhhyGRq%2BLO9wY7354SUMyHcYpkqp%2BtjM0i%2BuMWkGZEhLVHVe5ccvqEJ153pjHwTnRzzQiOd2mQroBZcG5odihHG9MghNAjKv238J6pUqZ02g8mBqZ%2BxShJ%2BtREJk6kd15QiRMkoLghOXZLyDNDM8xN3p%2BXc907KtKg1iC%2FBORb6h7w8%2FbA6gmW%2B52NXVbqFSmlCNVeMZjvsty%2FgxdwxPC966gDAbwYFP2cwn9v5pY5%2BvY5J%2B9ZrFuN%2FZHuMn4nYxC%2B2K%2B8qGhKbJupQyvI%2FXEZvmOC4ltK6LOfoE9dloNJhnh7NEyUOKyaW0Mouoi0uDIq3%2FP%2FB6PEN9U17wqptC1MO6EhsEGOqUB2mBPIALDiycen82SmxTx61a%2BCn%2FFSyQYcJ407Id1Ti2YStNHtEWfWXj3HEDqdy5Npa1HUgDE3R67q2CcSKTOLofCC%2FEfMdyZ%2Fg8DLyGRkBnOYcO%2FCGdiJ0RasviaRluCNfQ4odE6c3mHV2WyKCD1pqZmfil7lCvRT%2B4gywi4GrkLbVnWBQKac50epjtuvLYS%2BxITqOSSz4PjFiKx5ZQ83l%2F3qD0k&X-Amz-Signature=ef2d111825281a8da42b41c88cc12795c260fa7187e808d29d3e082016a338ec&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHXSVYAC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFbHotPmjf1YFdBwLFvhGJ8ZuM9cm%2Bbu2cC1cDI5eKHdAiEA%2F46mN5cywgjWbfuK0S3CRxPkuxTEnj6dNSLZOrI3eBAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZxH8LZEbIbW1WgrCrcAz7HeGdRQH7xs%2F%2FmYv9SQaGBzVx4sTa6PJOoKU7cj9gCAHGpKqs3EyAcjnO7J09ADA538XjjrW5lpiaZnZmxnnD00C2I5Ww9Met4MFLJ1CyFhLseavUs6qdMvoH%2F3C%2FL57q%2Fq7htpZ2W4pMwHijWaQFAQAqqGL4pNTGbYQzepydtDxNsDPLVteBPHrcJ2lvZRwHEqM38isbg9lY6PVUhi0GyGEXkEpBpSi3DmOO5kcTYUbEcBmkMNo9GKeuC1TRSJbP8%2FkjDkzAvNT0%2BLj6TcKLmpn%2B7GdC63PuUfNU%2BhhyGRq%2BLO9wY7354SUMyHcYpkqp%2BtjM0i%2BuMWkGZEhLVHVe5ccvqEJ153pjHwTnRzzQiOd2mQroBZcG5odihHG9MghNAjKv238J6pUqZ02g8mBqZ%2BxShJ%2BtREJk6kd15QiRMkoLghOXZLyDNDM8xN3p%2BXc907KtKg1iC%2FBORb6h7w8%2FbA6gmW%2B52NXVbqFSmlCNVeMZjvsty%2FgxdwxPC966gDAbwYFP2cwn9v5pY5%2BvY5J%2B9ZrFuN%2FZHuMn4nYxC%2B2K%2B8qGhKbJupQyvI%2FXEZvmOC4ltK6LOfoE9dloNJhnh7NEyUOKyaW0Mouoi0uDIq3%2FP%2FB6PEN9U17wqptC1MO6EhsEGOqUB2mBPIALDiycen82SmxTx61a%2BCn%2FFSyQYcJ407Id1Ti2YStNHtEWfWXj3HEDqdy5Npa1HUgDE3R67q2CcSKTOLofCC%2FEfMdyZ%2Fg8DLyGRkBnOYcO%2FCGdiJ0RasviaRluCNfQ4odE6c3mHV2WyKCD1pqZmfil7lCvRT%2B4gywi4GrkLbVnWBQKac50epjtuvLYS%2BxITqOSSz4PjFiKx5ZQ83l%2F3qD0k&X-Amz-Signature=0173fabcaa58e8ba8dac9ae086f8dcf8c26abb4f110adbce4153704d55f2330c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
