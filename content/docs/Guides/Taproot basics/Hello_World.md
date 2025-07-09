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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WMITKYW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEbFei9mZ9HWt62OA6lQUMI81lXlbO92GlBlv%2BO0Wv7QIgbXnragrRww%2BzZn6baHzbwAXjVSasQGr50Ifinwo6kEwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD398R5pZIXeAJTAbCrcAybClOEWsHo4JxCHP9K0WOUcHPLk7UUb1VAV1PtuVOQ9PwBcAbZWqxW5cKzpRpIs2Gwu9J43JN%2FW6NULomhEtthmJDOL%2FOYAKBVuAJs9masHgE1B9mSIcrgA5wumGv1m9CZwR8yyc24KUjfmdvRoIvO0wawbw7xIyfZwBAVT6O3JGTKyype5Ery1CVhv0imY3lLD%2Fd1f6declWIXCoxPJJtc5I40wxEjiHnItpHl58Ganxe6Eu75tzJ3xEvc7mr3h86eRIkUVsD3YlyROsiTeAei9f8x1b2icCriT2L0vwx057JUpyPX6Z2tVzRLT%2FTdAj09GxZ6j42PP6Y6IPuyP7ORKJPzSJ1jU2VQfBVLQnkHy2Gc9dj25P6xBck4gAp%2FY7KjcCfHFJcrS%2B3s5%2B3Dznn3LwsrNoX8N2Dj2l8jfFQmKOAXPLk3g%2FXCLAhU%2FYZPw%2F6hqVhdeBz9JgxxaFkT8ZXPpcItzPpYQcwNKqk43P9JjT0GZiDsjrm9UOlnZ5X9uCPHm8PP4cjOb5zQATzA%2F%2FTQO30Ek6PJSpxSgerjlGLdZ76E6Nm23qgy86Md%2FtZdQcwIOTmiOOSqAwKLj2nGZI8zvAR86%2FP6O3UJRSLFblWizhLihzndPPi%2FYXKqMKLrucMGOqUB3caqQooA6bFvvcADI3xHR9U2NgjpGR9ZtGKWhgC9RbCWzERhabNVSDnsdor58bFQrQFONmjlx8lDSD1W5sbrXwcogmsdKsb3MEQ4mmRmCT1k1yE%2FNkZxgAHlNZflZlftMb75pASd0c4bLimLyOH%2BG%2Fp3TfvIHaxmtwHINtCeXFhTOn9z6oVp2M3ptwgHGN9hUrcIxJAca8WNR5YYuRESI36x4ReA&X-Amz-Signature=ca3deb028a32e672e207d52ccfb9a8f62235b706a3370508bcf172c24ccf52a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WMITKYW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEbFei9mZ9HWt62OA6lQUMI81lXlbO92GlBlv%2BO0Wv7QIgbXnragrRww%2BzZn6baHzbwAXjVSasQGr50Ifinwo6kEwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD398R5pZIXeAJTAbCrcAybClOEWsHo4JxCHP9K0WOUcHPLk7UUb1VAV1PtuVOQ9PwBcAbZWqxW5cKzpRpIs2Gwu9J43JN%2FW6NULomhEtthmJDOL%2FOYAKBVuAJs9masHgE1B9mSIcrgA5wumGv1m9CZwR8yyc24KUjfmdvRoIvO0wawbw7xIyfZwBAVT6O3JGTKyype5Ery1CVhv0imY3lLD%2Fd1f6declWIXCoxPJJtc5I40wxEjiHnItpHl58Ganxe6Eu75tzJ3xEvc7mr3h86eRIkUVsD3YlyROsiTeAei9f8x1b2icCriT2L0vwx057JUpyPX6Z2tVzRLT%2FTdAj09GxZ6j42PP6Y6IPuyP7ORKJPzSJ1jU2VQfBVLQnkHy2Gc9dj25P6xBck4gAp%2FY7KjcCfHFJcrS%2B3s5%2B3Dznn3LwsrNoX8N2Dj2l8jfFQmKOAXPLk3g%2FXCLAhU%2FYZPw%2F6hqVhdeBz9JgxxaFkT8ZXPpcItzPpYQcwNKqk43P9JjT0GZiDsjrm9UOlnZ5X9uCPHm8PP4cjOb5zQATzA%2F%2FTQO30Ek6PJSpxSgerjlGLdZ76E6Nm23qgy86Md%2FtZdQcwIOTmiOOSqAwKLj2nGZI8zvAR86%2FP6O3UJRSLFblWizhLihzndPPi%2FYXKqMKLrucMGOqUB3caqQooA6bFvvcADI3xHR9U2NgjpGR9ZtGKWhgC9RbCWzERhabNVSDnsdor58bFQrQFONmjlx8lDSD1W5sbrXwcogmsdKsb3MEQ4mmRmCT1k1yE%2FNkZxgAHlNZflZlftMb75pASd0c4bLimLyOH%2BG%2Fp3TfvIHaxmtwHINtCeXFhTOn9z6oVp2M3ptwgHGN9hUrcIxJAca8WNR5YYuRESI36x4ReA&X-Amz-Signature=1d7e5224be36c5ad39a14a8dabf7b8da17d3d40c25cd06638bf421eb723f98b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
