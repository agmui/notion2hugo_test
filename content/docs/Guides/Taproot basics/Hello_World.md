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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIXBUAE3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC%2BYiWaQeU5YCGm%2FoRHo%2BHPNoLoPiiXPYdMulw5mx5skQIhANy8qQF2WzoGtVo%2FCadv%2BZDAPI%2B7MXVhqqYkXc7xEFJ0Kv8DCEsQABoMNjM3NDIzMTgzODA1IgzJtgL%2Bs1M7JUdUkasq3AMuQrmVRVPrZL5gYSVNB51%2BwqmBd8IkrLInA268pahMOPrmv2jm%2F2WuFuR5awMCZ07L7OuDyQ%2FoEK5Btp9D1gof0w4fAQY9QqvZQf%2B%2BTyW8sUQe5DfacYQLAeqUOCQmtUptegjglEsVyrmXGNncUTlnmQOXosDD%2B4SpkFoMAh7%2F6ct96Pvei3lT6HRDEpjncGFyQZNIvvQfEk1c1QnzVv%2BNWTcofLr%2Fb5HxC7UOAcbaSAb56zXk53DatbzcKu7HacQWcjT2oUHjD05ZdaoTBJ%2B1T%2FemYETBFXAcDVdLm7cEk0yc%2Fvl8uoywoSRu3J9zNGoBUJo6zuo%2BtvSXBpg1646lmrni2cCt%2B0IT7BRMlghskkWaSRTrG%2FLXjgtmgTD%2Boi00P8jA%2Bmquc0f84kv8H1l8P9V5w4rsva2yYE5Lff%2B36h6MuuEeLp2NhE2MeAXW2jWDhZ1hLPV8NghIebb0uRmfgofv%2F%2FvfVGaN5fNjeMWZwpQutuYlXFokxcGd0H0pOjV%2BF1T%2Fyy2%2FvIMdj%2B85NKdQQm7dJt0cOdAwtDzBUWrGpPU7Yuv4ddIxdWMAo4sn%2FYqxNrGyEfBVF2wueDRKcye0niY%2B%2F5pny0LQ2oqx3s6zKx%2FxytJEpZNQQGensDCDnMO9BjqkAVlFAdx8CuP5E90W1xya8A6nPNzs9W9bqQy0%2Fw1tWBJtPfjYyG%2F2HEg5K9R9DiMni0LYM1a%2FMqoz5HSlWbDnJGlqp11F%2BleIhL%2BpvcR36x%2BXuoWeX7RSIsWzOxxCtVNA6VHYNFtQap2hfAH04GBjFJQcYOM33iwew2EiZBVDd6O%2FlfKLGQAMh%2Fbqv8RkoDrxYlTc3PQLmpvTKjp5MkowI8MxfkxU&X-Amz-Signature=dd86fdc9c6f110df16fdaa70b27a04b3d77564c34bd0d06760ab1a11adfe5c07&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIXBUAE3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC%2BYiWaQeU5YCGm%2FoRHo%2BHPNoLoPiiXPYdMulw5mx5skQIhANy8qQF2WzoGtVo%2FCadv%2BZDAPI%2B7MXVhqqYkXc7xEFJ0Kv8DCEsQABoMNjM3NDIzMTgzODA1IgzJtgL%2Bs1M7JUdUkasq3AMuQrmVRVPrZL5gYSVNB51%2BwqmBd8IkrLInA268pahMOPrmv2jm%2F2WuFuR5awMCZ07L7OuDyQ%2FoEK5Btp9D1gof0w4fAQY9QqvZQf%2B%2BTyW8sUQe5DfacYQLAeqUOCQmtUptegjglEsVyrmXGNncUTlnmQOXosDD%2B4SpkFoMAh7%2F6ct96Pvei3lT6HRDEpjncGFyQZNIvvQfEk1c1QnzVv%2BNWTcofLr%2Fb5HxC7UOAcbaSAb56zXk53DatbzcKu7HacQWcjT2oUHjD05ZdaoTBJ%2B1T%2FemYETBFXAcDVdLm7cEk0yc%2Fvl8uoywoSRu3J9zNGoBUJo6zuo%2BtvSXBpg1646lmrni2cCt%2B0IT7BRMlghskkWaSRTrG%2FLXjgtmgTD%2Boi00P8jA%2Bmquc0f84kv8H1l8P9V5w4rsva2yYE5Lff%2B36h6MuuEeLp2NhE2MeAXW2jWDhZ1hLPV8NghIebb0uRmfgofv%2F%2FvfVGaN5fNjeMWZwpQutuYlXFokxcGd0H0pOjV%2BF1T%2Fyy2%2FvIMdj%2B85NKdQQm7dJt0cOdAwtDzBUWrGpPU7Yuv4ddIxdWMAo4sn%2FYqxNrGyEfBVF2wueDRKcye0niY%2B%2F5pny0LQ2oqx3s6zKx%2FxytJEpZNQQGensDCDnMO9BjqkAVlFAdx8CuP5E90W1xya8A6nPNzs9W9bqQy0%2Fw1tWBJtPfjYyG%2F2HEg5K9R9DiMni0LYM1a%2FMqoz5HSlWbDnJGlqp11F%2BleIhL%2BpvcR36x%2BXuoWeX7RSIsWzOxxCtVNA6VHYNFtQap2hfAH04GBjFJQcYOM33iwew2EiZBVDd6O%2FlfKLGQAMh%2Fbqv8RkoDrxYlTc3PQLmpvTKjp5MkowI8MxfkxU&X-Amz-Signature=b0c9e5d7bcf7dfff8eb1332b56d0480aaae7fe8ab01a741b5eface01fc1a844e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
