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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6BCR5QH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaSvcyEE7hSWP5wa89JkS6JbDPSEG%2BA7lpWgGTR7of6AIhAImAMhQO5bZDqQIt6p7tDyXmKjX5Yp5ni5kzdsLGPnO9KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4yyQjVmLMZxKlKU0q3ANx3cNvDnsCzU7GuMQ7SwO%2BhQiSZ7I9Jw3zP5uu0BoDRrlYQu1Azu0qOhJq1EWsdAY8qOZUsDMY5lLvUvARgyFbmUqJmFCdrREQ2Mp5giw8kuiBApnQwHDEvr8Xjp9BGTaC7qg4Lce8iHJ9ERLdvZoIuRdty02c4kvJbP8Nx3bnXUrpAVSCBufkq6vm5Qndf7E7FlPtnK4ebcCNa5HH%2B8a4ESTc82bmDXXwNPD7VvD%2BSh6my34Lv2jtnRhMs5iSk1ewdjxRs%2FoAmC0iHQD%2F%2FsXJJwErPAuxNjNkuIc6s60Vm6Gvz6ZW13YZn%2FyIoxtZcbqStvz1vH4t75%2F66yeqHjq30sxyrYKl6WEYjhtps5tQxiQ%2BTxVPQ6DEG02PH8Kww0MrpFqELAY%2BxZb6O5UCoTb2jVwTizINBMqpUdoqxgisBNT3D5M7Yyn3ONxdOeZnD0vX86s89Eqqq%2FokhLXxgkgz0kp2UuWAZ2j6p%2FJ%2FgjoT%2BShVKdo5NiCxDFlvXDri4wiBQ4nVw6SR3ekbChXw3qvJUn6Io5OzCBnCvme3gqf1hezJCjE3DzpUrvaQDkWXcbHfAbYT0V18riY%2F8U6KcaXpBsa17gy4wbxADC5YViywwvHN6j%2BdouVWcOapFDCygOi8BjqkAdN01nEwex4u4htejFTNFOLXs3MGhiNrg5owo4h95GLfX2ryZQbRyM1h4S7hqQoE9GkcGDmbSXH8GWadWvYPN1%2FHaEQYVZIjB1td4n4%2BlNxRRwk2%2BXFez0ZVF6Yy0z%2Fuf40IcW5AcZmt%2BkzoIgsiaqSn01f8KYnfPuZNyc%2FhrTe5xevxtGooUYjUS8NsHEVUC2n7qSwusGtmjUEa3CW6%2FjVaWPq0&X-Amz-Signature=038e88a6c9aba8605528beedc0ad22523481ca3d71c60593ead4a2fd98914fae&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6BCR5QH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaSvcyEE7hSWP5wa89JkS6JbDPSEG%2BA7lpWgGTR7of6AIhAImAMhQO5bZDqQIt6p7tDyXmKjX5Yp5ni5kzdsLGPnO9KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4yyQjVmLMZxKlKU0q3ANx3cNvDnsCzU7GuMQ7SwO%2BhQiSZ7I9Jw3zP5uu0BoDRrlYQu1Azu0qOhJq1EWsdAY8qOZUsDMY5lLvUvARgyFbmUqJmFCdrREQ2Mp5giw8kuiBApnQwHDEvr8Xjp9BGTaC7qg4Lce8iHJ9ERLdvZoIuRdty02c4kvJbP8Nx3bnXUrpAVSCBufkq6vm5Qndf7E7FlPtnK4ebcCNa5HH%2B8a4ESTc82bmDXXwNPD7VvD%2BSh6my34Lv2jtnRhMs5iSk1ewdjxRs%2FoAmC0iHQD%2F%2FsXJJwErPAuxNjNkuIc6s60Vm6Gvz6ZW13YZn%2FyIoxtZcbqStvz1vH4t75%2F66yeqHjq30sxyrYKl6WEYjhtps5tQxiQ%2BTxVPQ6DEG02PH8Kww0MrpFqELAY%2BxZb6O5UCoTb2jVwTizINBMqpUdoqxgisBNT3D5M7Yyn3ONxdOeZnD0vX86s89Eqqq%2FokhLXxgkgz0kp2UuWAZ2j6p%2FJ%2FgjoT%2BShVKdo5NiCxDFlvXDri4wiBQ4nVw6SR3ekbChXw3qvJUn6Io5OzCBnCvme3gqf1hezJCjE3DzpUrvaQDkWXcbHfAbYT0V18riY%2F8U6KcaXpBsa17gy4wbxADC5YViywwvHN6j%2BdouVWcOapFDCygOi8BjqkAdN01nEwex4u4htejFTNFOLXs3MGhiNrg5owo4h95GLfX2ryZQbRyM1h4S7hqQoE9GkcGDmbSXH8GWadWvYPN1%2FHaEQYVZIjB1td4n4%2BlNxRRwk2%2BXFez0ZVF6Yy0z%2Fuf40IcW5AcZmt%2BkzoIgsiaqSn01f8KYnfPuZNyc%2FhrTe5xevxtGooUYjUS8NsHEVUC2n7qSwusGtmjUEa3CW6%2FjVaWPq0&X-Amz-Signature=a4451f826cb612cf6075dffb6a1e2352aeee7b52c46a0cae81704695075bd0bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
