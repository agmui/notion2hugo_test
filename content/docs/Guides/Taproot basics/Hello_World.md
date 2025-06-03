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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636JRWJUH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGqJOJtRznRYQHeYLvaXu2notBFNtTNV6phnLhL9zSFfAiEAzTHcbIannRNqcTQkDPqtDCyUSbhOAF3%2Bph5Rme9nPJUq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKvFwbaK%2FGxcZwtHxCrcAy3iSXAg%2BtPI7XPGyb5QbZvkPfE8dK0B5WBZRZNxyEc8UjtP2hKzJfIGYZbhRmXJ6Ykc6HFO741Bum%2FI0vsH5EXXMMsAwg807BCXl9JLjXkXl%2FEuBLBp2QscGK%2BTuOxbXng9aCZKctywRYaUeDO5BVatVhZcv5fYDt%2BWOfahlgaH%2Fej6lSwghzSciNmxdPeotJh8oc%2F1kixvIdmTIVwiqqMdVQJlfKdq7C7Ul95tszFlczYdaJgRQ00D0MnkIYGk64oX8J1RzvdhKu6EOx%2BHa69YBmf6gmVNQC1tyHjHDlvu2NPDl1NglWPhO5AI0f0Nf8oqUiiKPCUE829eCqzNP3zQU76KOyCd%2BXM4Qs7BB1NHsEUZnfBpc0%2BWtctWp4RHTijZWK4xVThWywfeB0aIrJMgD8xIKM5GSbEzxFpkr8mRbEljxxSY%2BXsL5re8xBNVRzIZPMk4%2FbcbZ4qlBWvzXA8ngAeaY%2BMIwsFA81E4rvkdYL%2B%2FBDeorKbTh%2BRNyZ5MGWRzy7my3Hhx87Ml7KEQbeuLEqEdTN9IWtyaeKLEGc3EPAvQIRizI500KWkrQI9yy1bPIhwHlHe61sjimAHTXUmFCdXLtdQ52VEJ1iosD0uIJnFnE53A1XbPDMy9MMjS%2FMEGOqUB9OhZnQ2lTkEO0lxSnh3k5Fd%2BGJLBzY27v%2B9I7VJEiK8zEhFCSf4huJUUr4Hvr0NOEPjkwJMMCdsoU2lwzUFsXa9aS1A%2FkxmoVUXs1AvVSp5JFm6DMd6jazCUVmZvDdolrSmZFvOG39C5GW5TI%2FHnF0BIduACF8mYXnwB8Cc72JGm9kQxxxKtYNUFkHO2Q6%2BV32kRPLwjFnTSSKNXy5E17WTyOrk6&X-Amz-Signature=c14f1a2b82dba98522b8886e3d8cb00db52d49e48a70756f36c8ef6d75f4c8b5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636JRWJUH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGqJOJtRznRYQHeYLvaXu2notBFNtTNV6phnLhL9zSFfAiEAzTHcbIannRNqcTQkDPqtDCyUSbhOAF3%2Bph5Rme9nPJUq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKvFwbaK%2FGxcZwtHxCrcAy3iSXAg%2BtPI7XPGyb5QbZvkPfE8dK0B5WBZRZNxyEc8UjtP2hKzJfIGYZbhRmXJ6Ykc6HFO741Bum%2FI0vsH5EXXMMsAwg807BCXl9JLjXkXl%2FEuBLBp2QscGK%2BTuOxbXng9aCZKctywRYaUeDO5BVatVhZcv5fYDt%2BWOfahlgaH%2Fej6lSwghzSciNmxdPeotJh8oc%2F1kixvIdmTIVwiqqMdVQJlfKdq7C7Ul95tszFlczYdaJgRQ00D0MnkIYGk64oX8J1RzvdhKu6EOx%2BHa69YBmf6gmVNQC1tyHjHDlvu2NPDl1NglWPhO5AI0f0Nf8oqUiiKPCUE829eCqzNP3zQU76KOyCd%2BXM4Qs7BB1NHsEUZnfBpc0%2BWtctWp4RHTijZWK4xVThWywfeB0aIrJMgD8xIKM5GSbEzxFpkr8mRbEljxxSY%2BXsL5re8xBNVRzIZPMk4%2FbcbZ4qlBWvzXA8ngAeaY%2BMIwsFA81E4rvkdYL%2B%2FBDeorKbTh%2BRNyZ5MGWRzy7my3Hhx87Ml7KEQbeuLEqEdTN9IWtyaeKLEGc3EPAvQIRizI500KWkrQI9yy1bPIhwHlHe61sjimAHTXUmFCdXLtdQ52VEJ1iosD0uIJnFnE53A1XbPDMy9MMjS%2FMEGOqUB9OhZnQ2lTkEO0lxSnh3k5Fd%2BGJLBzY27v%2B9I7VJEiK8zEhFCSf4huJUUr4Hvr0NOEPjkwJMMCdsoU2lwzUFsXa9aS1A%2FkxmoVUXs1AvVSp5JFm6DMd6jazCUVmZvDdolrSmZFvOG39C5GW5TI%2FHnF0BIduACF8mYXnwB8Cc72JGm9kQxxxKtYNUFkHO2Q6%2BV32kRPLwjFnTSSKNXy5E17WTyOrk6&X-Amz-Signature=bc1654af45a6a923b542ac838c679af1d483682d670d0f1e01d727241de48ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
