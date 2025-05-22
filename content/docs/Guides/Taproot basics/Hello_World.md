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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B35KHXB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCCffd0wiwN72b1PaW2iM3%2B%2B4vM6HCWgWYOd22LKAzQhgIhAMIK7hExi%2B6td5loULhMUKuC7zFRT5SYlGGSB82WTj6jKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwzj2V6gA9XP7cZ8b0q3AP4oz16GED7dFw2rGSJhSyAFqbFUrAeT1fgWiM8PAqoHtRtOYdY%2FxmH%2B1FTaU2N%2FATLECtNW3FhoQsztN38dEmhvWflNtnrI7VPwR%2FpK%2Bn5rA6w08oGQN1HcH6dMFVWsoItRcvwJGPzdqvYS%2Bnuu%2Bkh03J0eaBDlyBarY5opppqmhOgLd1v8KaMaPbuhhDCkaqVjon%2BRMYQ69yA0yaoFke7bIVtB8XaSGNJQO59CoZ81IvfNAjEc0OTiS%2FDtpVd7Wi0y%2FW2NVe%2FknTWpoYxwZvDueS45tARXDb2aGIQoPqxnk5d5mdJcopcaoaoVt0LB7thXYmW2QeizJkvNNftTCjQIF%2FUhRlsXvpT1FCWyV%2Fv9pTxKt5Z6BrkDXdihdUClJyIXgqDl0PMhwCkEFLUfv0V7ELvV13v%2FgRu2fpQ9%2Bz%2FFssIgSfSuYaeh9w4a0XfwLwT7fw5hUAIIpLkXYqUlbrqeb4qjUAlDkFZiOnffvzZfCqO%2FQiTUvcu4FHKqHAFyDbgRNOCGdbmwxlAWRMqe7tZfxVajMq7isLDOjauNSsBQf73BvcD1zc%2B8C%2BuMKkN%2Ba3oiNMR5unL615NJOAY5LxwEd74H5JAT6UMLzgSGNyCp1WpAExOMhUdZK4ntjDP4rzBBjqkAfbVfgtfXx%2FnNaZlbkS%2BRtKHMF2f8ynj0gT6Ls1eie7oiVzFZV61wlu8H%2BRvOPKDjunTkPWt7EHGy%2BeBoVzMJ1rV0y01N49MXCtby%2FlZ6k0%2FUx9ntaE4GJpzr0SeXpc1NYrCgCwxgmnTKq%2FdGhziQsUI97arVJ%2F2SRbOq4U4aj8shFJXnWzMbBASIJ0XM6BUEaGAxXnxRialzP1pivZ0YHg6qdix&X-Amz-Signature=0ffc3d323d012f2b76f6406011709f44e1d3d907d315ad05f8d522357a789c09&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B35KHXB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCCffd0wiwN72b1PaW2iM3%2B%2B4vM6HCWgWYOd22LKAzQhgIhAMIK7hExi%2B6td5loULhMUKuC7zFRT5SYlGGSB82WTj6jKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwzj2V6gA9XP7cZ8b0q3AP4oz16GED7dFw2rGSJhSyAFqbFUrAeT1fgWiM8PAqoHtRtOYdY%2FxmH%2B1FTaU2N%2FATLECtNW3FhoQsztN38dEmhvWflNtnrI7VPwR%2FpK%2Bn5rA6w08oGQN1HcH6dMFVWsoItRcvwJGPzdqvYS%2Bnuu%2Bkh03J0eaBDlyBarY5opppqmhOgLd1v8KaMaPbuhhDCkaqVjon%2BRMYQ69yA0yaoFke7bIVtB8XaSGNJQO59CoZ81IvfNAjEc0OTiS%2FDtpVd7Wi0y%2FW2NVe%2FknTWpoYxwZvDueS45tARXDb2aGIQoPqxnk5d5mdJcopcaoaoVt0LB7thXYmW2QeizJkvNNftTCjQIF%2FUhRlsXvpT1FCWyV%2Fv9pTxKt5Z6BrkDXdihdUClJyIXgqDl0PMhwCkEFLUfv0V7ELvV13v%2FgRu2fpQ9%2Bz%2FFssIgSfSuYaeh9w4a0XfwLwT7fw5hUAIIpLkXYqUlbrqeb4qjUAlDkFZiOnffvzZfCqO%2FQiTUvcu4FHKqHAFyDbgRNOCGdbmwxlAWRMqe7tZfxVajMq7isLDOjauNSsBQf73BvcD1zc%2B8C%2BuMKkN%2Ba3oiNMR5unL615NJOAY5LxwEd74H5JAT6UMLzgSGNyCp1WpAExOMhUdZK4ntjDP4rzBBjqkAfbVfgtfXx%2FnNaZlbkS%2BRtKHMF2f8ynj0gT6Ls1eie7oiVzFZV61wlu8H%2BRvOPKDjunTkPWt7EHGy%2BeBoVzMJ1rV0y01N49MXCtby%2FlZ6k0%2FUx9ntaE4GJpzr0SeXpc1NYrCgCwxgmnTKq%2FdGhziQsUI97arVJ%2F2SRbOq4U4aj8shFJXnWzMbBASIJ0XM6BUEaGAxXnxRialzP1pivZ0YHg6qdix&X-Amz-Signature=aefe2a096b6d43927e162c1dce3dc92c1281c74e2b502a77856201cb21ab196c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
