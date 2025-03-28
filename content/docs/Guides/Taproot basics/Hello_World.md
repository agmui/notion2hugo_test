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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HZXKJM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa6QljwzziGXVqAyt2ga9ov998W9PWci%2Fdim757QjwyQIhAIto%2BcGmDkCDivD498dHQcE9sIlkQXaR3MsSyFJHg7avKv8DCGcQABoMNjM3NDIzMTgzODA1IgzKpVXgXgn8XK5pbTcq3AOWW0UfWlXXAElK2qBf8cwwkZPiAIbFDyZ8E7k9Tp3OBaJEsmZMvDUNER5WhjDqAXPizISQxyYoxPRpMVoYQbGOiu7Dgk%2FPYyig3rghKGRerMsyEFXgfKIryxbsJQeIEzD7ExSApyN3hpwsQoJnOrbTpWwf1CmR2qpYhv0ae%2FqIwB%2F2DelwxcArSyX2Cz%2BrCFckU6RXNFqRwCBuX5DjXPt0X7ap9sdvl17IpDCrNmotv8CxdKwprK4FsrvaOEJGhjDoWF8pd64mSOk1OSuOsHgE6GUEAmqhKoYiRPUdKw2mO4v3InWo0bhW0E2Fmyb2hAUDQVWQMCxifB67KuOQMHY23AcbIwBRsAUptiCEokQ6K3zl7%2BdbQKJZZHTHaSTCuThtFtX4POtImGzNgeBRoCV%2FE4DotiSpHh9k0IMQRt2YkA3YqNlTUooUB8YvN7cXE5UfgNiFaSBZIW38zksOI6hyeyKHIjfziXUiPUeHdPUTw8bmaMx%2FozVHQAVPf81baiVXQtZTpfR52GgKIwAQbIlOdw7qNa1%2FhfK%2FiUwwVITbfOn33fVxs0CShmFFgTDmv1t0enzS%2Bjj3pTcMThm5P0pXDI3nG%2B1cgopFN%2FqDeH0tDJJz7UGXEPWSFEuaIDDTw5y%2FBjqkAatRMsaF1Gr7V1T2Ts2Cygi%2BmpXSEIbrlg6QvbcQQSJAj32kbD3Kf5LPRz5EZPZf2chcdIL8n%2B4MHHLknhsRCP%2BeT8HtupmIb4wdbqhybxCwmU9Td6LBI8VmoWATWoGVG62hBOgFiXGL6YBgmBw%2Fh8zRhpZOpxx%2BrlG6S1xPdrL6hWSXO%2FVsQrBqS3GTlqV1YvgO6J6jIAnDrmirxVeW%2F%2Fx6QaR9&X-Amz-Signature=56176d583f30da6009587b64e691e3b87727e50ba8ebfc17663fafa19edde991&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HZXKJM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa6QljwzziGXVqAyt2ga9ov998W9PWci%2Fdim757QjwyQIhAIto%2BcGmDkCDivD498dHQcE9sIlkQXaR3MsSyFJHg7avKv8DCGcQABoMNjM3NDIzMTgzODA1IgzKpVXgXgn8XK5pbTcq3AOWW0UfWlXXAElK2qBf8cwwkZPiAIbFDyZ8E7k9Tp3OBaJEsmZMvDUNER5WhjDqAXPizISQxyYoxPRpMVoYQbGOiu7Dgk%2FPYyig3rghKGRerMsyEFXgfKIryxbsJQeIEzD7ExSApyN3hpwsQoJnOrbTpWwf1CmR2qpYhv0ae%2FqIwB%2F2DelwxcArSyX2Cz%2BrCFckU6RXNFqRwCBuX5DjXPt0X7ap9sdvl17IpDCrNmotv8CxdKwprK4FsrvaOEJGhjDoWF8pd64mSOk1OSuOsHgE6GUEAmqhKoYiRPUdKw2mO4v3InWo0bhW0E2Fmyb2hAUDQVWQMCxifB67KuOQMHY23AcbIwBRsAUptiCEokQ6K3zl7%2BdbQKJZZHTHaSTCuThtFtX4POtImGzNgeBRoCV%2FE4DotiSpHh9k0IMQRt2YkA3YqNlTUooUB8YvN7cXE5UfgNiFaSBZIW38zksOI6hyeyKHIjfziXUiPUeHdPUTw8bmaMx%2FozVHQAVPf81baiVXQtZTpfR52GgKIwAQbIlOdw7qNa1%2FhfK%2FiUwwVITbfOn33fVxs0CShmFFgTDmv1t0enzS%2Bjj3pTcMThm5P0pXDI3nG%2B1cgopFN%2FqDeH0tDJJz7UGXEPWSFEuaIDDTw5y%2FBjqkAatRMsaF1Gr7V1T2Ts2Cygi%2BmpXSEIbrlg6QvbcQQSJAj32kbD3Kf5LPRz5EZPZf2chcdIL8n%2B4MHHLknhsRCP%2BeT8HtupmIb4wdbqhybxCwmU9Td6LBI8VmoWATWoGVG62hBOgFiXGL6YBgmBw%2Fh8zRhpZOpxx%2BrlG6S1xPdrL6hWSXO%2FVsQrBqS3GTlqV1YvgO6J6jIAnDrmirxVeW%2F%2Fx6QaR9&X-Amz-Signature=ad9ec6c0a99525e4d4a12d181e4872a64acc66604bacfdfc88cfd19f5ef75be7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
