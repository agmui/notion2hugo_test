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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HYXNCXL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCN%2BbUNtiBD7J8XkwtN%2F1cfTCJnQ5htUeJDmZGsNXa8IAIhAMPUF9kULS5EwWeGJzEh%2FxvMC3TqlmnJgX5hXNLnu8ZPKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp8%2BelC1LRLJogeDAq3AOP6%2Fu61T7lWjAa6iffUHVRXYLV5b32xF1u0rAHrnxmCpK8tfV%2BjoFaV0YDBaDoERgbiKgOy58S5D%2FD%2FBlr5Tsk2dA2wXaIddwxozdHEtNtY17Y7zdsgJubb%2BPfN6fwL3j1c8gQU%2BZa%2FZQN%2B2nOGRlv%2BxyjujLE0ZCDaKcDlpI9K%2BrLfyy0KZrX16Aht0MLEpRXjF5xvdSoE1fCw62P9T3b1jWq8jeHcdax9fzd3XFUVsp82YvH8OvGXVdrt0EXtVgLBcNj5WSwYk16x8gDn9Jqatw%2F4nj%2B3cd1yKDFWBAis7U%2BvcAoHTj%2FVFUfCKUSaJbw7ahO2cWpxuN7ybL1OfltAbSCaDvbFd7IpEgPD4n45W6ZFCEEcvjyjPEaQFEEfrbPOw4JSOLftRTKh13FIcHoYIqKtHQAYj4iDtamrONs3OyXvXZPhG5DeYxyM9uK1zI7NTcGlmeTiA5sW2x89uhdYsE5ezb6dyK4T34oChWuFKAY8rYqCszmjGYMPk3Nmh5y%2BMrORuSfTvVjbmIanXteOmqZgCQzL1Ex%2FsWkGP58hXt6qOi0QDQXdHio%2FyTffMseQACckjk7NfjRhhGc9i2DpgLpgNpnUZPPeLImoIWmq9DWdUJR8jj8i44n2DCC2Ka%2FBjqkAUoPmW5uIp93cvG4xojVvRYALAHO6JXZY8PucKwW%2Bx9j9DUF3ahCSfRH5rzAhNsH9yUlYoKufzMa%2FemHvKKU%2FXg%2B8A5Yoz5RRJjU7%2B0vUFwlMpnBAgxalKh2%2BvE59L1%2F90YoS0NWuF3Sl0U3EKAOQ%2FnafB91JQynYG2L6%2Bkx57ZpIXOXbJYjUIoD0kHeF%2F7ETeafiUCgUNyGz2GgyQ9cXY%2BlfYLw&X-Amz-Signature=b2c74339ba6b41ab0b975c33a8f531fa53a27b4d216816ee5495aec91c79e3e5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HYXNCXL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCN%2BbUNtiBD7J8XkwtN%2F1cfTCJnQ5htUeJDmZGsNXa8IAIhAMPUF9kULS5EwWeGJzEh%2FxvMC3TqlmnJgX5hXNLnu8ZPKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp8%2BelC1LRLJogeDAq3AOP6%2Fu61T7lWjAa6iffUHVRXYLV5b32xF1u0rAHrnxmCpK8tfV%2BjoFaV0YDBaDoERgbiKgOy58S5D%2FD%2FBlr5Tsk2dA2wXaIddwxozdHEtNtY17Y7zdsgJubb%2BPfN6fwL3j1c8gQU%2BZa%2FZQN%2B2nOGRlv%2BxyjujLE0ZCDaKcDlpI9K%2BrLfyy0KZrX16Aht0MLEpRXjF5xvdSoE1fCw62P9T3b1jWq8jeHcdax9fzd3XFUVsp82YvH8OvGXVdrt0EXtVgLBcNj5WSwYk16x8gDn9Jqatw%2F4nj%2B3cd1yKDFWBAis7U%2BvcAoHTj%2FVFUfCKUSaJbw7ahO2cWpxuN7ybL1OfltAbSCaDvbFd7IpEgPD4n45W6ZFCEEcvjyjPEaQFEEfrbPOw4JSOLftRTKh13FIcHoYIqKtHQAYj4iDtamrONs3OyXvXZPhG5DeYxyM9uK1zI7NTcGlmeTiA5sW2x89uhdYsE5ezb6dyK4T34oChWuFKAY8rYqCszmjGYMPk3Nmh5y%2BMrORuSfTvVjbmIanXteOmqZgCQzL1Ex%2FsWkGP58hXt6qOi0QDQXdHio%2FyTffMseQACckjk7NfjRhhGc9i2DpgLpgNpnUZPPeLImoIWmq9DWdUJR8jj8i44n2DCC2Ka%2FBjqkAUoPmW5uIp93cvG4xojVvRYALAHO6JXZY8PucKwW%2Bx9j9DUF3ahCSfRH5rzAhNsH9yUlYoKufzMa%2FemHvKKU%2FXg%2B8A5Yoz5RRJjU7%2B0vUFwlMpnBAgxalKh2%2BvE59L1%2F90YoS0NWuF3Sl0U3EKAOQ%2FnafB91JQynYG2L6%2Bkx57ZpIXOXbJYjUIoD0kHeF%2F7ETeafiUCgUNyGz2GgyQ9cXY%2BlfYLw&X-Amz-Signature=ddc9f75b495f0003614b310423fda2f289444c74a7cfd22ef8f634f51e6eb7e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
