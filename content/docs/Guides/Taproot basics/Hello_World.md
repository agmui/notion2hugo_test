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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMDZS6RE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeBzvOt42Nl0QayKGEfEWCMrvEe2gGtFJYmCUQNH%2FiWAiB628%2BU1dM5cRNELq9qgDvvkufH4VqKiXV1FHfx1c9Ubir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMUVozEEQmbUvX9UnyKtwD85X9CVK6qRNmLZrmQfVsSF%2FRCTbpziReoZsXiuoDlXcPbeu3%2FKztHZpN2rjzHxArAoNPCLI%2F8vD5V%2Fm%2BU1QEjPW3NVnSNHMo7HcbN%2Frhi%2BMVQjzoIsWDEnvpmmbmMHcAx0HM4JMj4cdBlhhhHur6%2FLX%2FUtv7ZgNKGcygbEj%2Bb8RTAv2z154Vq6ZKiomk6P2kkZSTlqorjk6S9PJ00R2PKQ%2FQtK7u0YBvtcBi6BrspXzifPI90yPsF5u4RCX57zXj8XLCc6QEVyNwu324B%2BvbYGkO0eaXbJzWHE6Pth1LLvDp%2FyuJN15%2Fgz39oFJO7ZJYukZjrnBXPZ0ryiGijLJTJYGbeHMPw35IpI5pNO8kbnB9jaTfMjGDXYmVC%2BWhvIu2bc%2F2Jy%2BIcJ0qhmc53avsPXdkzk2dMlVom6iw9SjfZeIPCeFhVhqauHtF4OS%2B4n0vxpvfHTXNtagNT%2Fpteo3cs8siqlzEEgu2uTjGN6b31%2F54WndgtSehi2ePMfOIp9y00klR%2Btvu6RzNmJ3iVlehL0F90C1V%2F%2B3xwpY2YQ0S1BljxkaOmJzSs%2F6ofNcRVfxdC2baSs%2FFxC3ieiSNAdF1CUfoaQN4ForOM7swInh5Rfq7wjQVAmYmM9CQ33cw%2FuXzwAY6pgHeqItlVpIYrkDKauwB20REeemUsquJZXLC7w9oIYk8DKWBiItKdi8RKuIt%2F5cDZYZquKIktCZ5PodLOV97DfxbETX20fKH68VoqZ0Ef4Np6uQu%2BDGu1wAUYgVUhCJX6JxoZ4M3XfaEpCiacg%2FgFS%2Bf1j3sXnmEYlK6qe2Il%2FMR7s%2FVZLbu6%2BFW7c5%2F2lgsL8PyDMQd1fU9potEp%2FW0sN6qnpZlEjiS&X-Amz-Signature=dd208c2c78145dba04bc391a0dc5f2c31a27c4a30fc7af92788a7b386ee06d76&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMDZS6RE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeBzvOt42Nl0QayKGEfEWCMrvEe2gGtFJYmCUQNH%2FiWAiB628%2BU1dM5cRNELq9qgDvvkufH4VqKiXV1FHfx1c9Ubir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMUVozEEQmbUvX9UnyKtwD85X9CVK6qRNmLZrmQfVsSF%2FRCTbpziReoZsXiuoDlXcPbeu3%2FKztHZpN2rjzHxArAoNPCLI%2F8vD5V%2Fm%2BU1QEjPW3NVnSNHMo7HcbN%2Frhi%2BMVQjzoIsWDEnvpmmbmMHcAx0HM4JMj4cdBlhhhHur6%2FLX%2FUtv7ZgNKGcygbEj%2Bb8RTAv2z154Vq6ZKiomk6P2kkZSTlqorjk6S9PJ00R2PKQ%2FQtK7u0YBvtcBi6BrspXzifPI90yPsF5u4RCX57zXj8XLCc6QEVyNwu324B%2BvbYGkO0eaXbJzWHE6Pth1LLvDp%2FyuJN15%2Fgz39oFJO7ZJYukZjrnBXPZ0ryiGijLJTJYGbeHMPw35IpI5pNO8kbnB9jaTfMjGDXYmVC%2BWhvIu2bc%2F2Jy%2BIcJ0qhmc53avsPXdkzk2dMlVom6iw9SjfZeIPCeFhVhqauHtF4OS%2B4n0vxpvfHTXNtagNT%2Fpteo3cs8siqlzEEgu2uTjGN6b31%2F54WndgtSehi2ePMfOIp9y00klR%2Btvu6RzNmJ3iVlehL0F90C1V%2F%2B3xwpY2YQ0S1BljxkaOmJzSs%2F6ofNcRVfxdC2baSs%2FFxC3ieiSNAdF1CUfoaQN4ForOM7swInh5Rfq7wjQVAmYmM9CQ33cw%2FuXzwAY6pgHeqItlVpIYrkDKauwB20REeemUsquJZXLC7w9oIYk8DKWBiItKdi8RKuIt%2F5cDZYZquKIktCZ5PodLOV97DfxbETX20fKH68VoqZ0Ef4Np6uQu%2BDGu1wAUYgVUhCJX6JxoZ4M3XfaEpCiacg%2FgFS%2Bf1j3sXnmEYlK6qe2Il%2FMR7s%2FVZLbu6%2BFW7c5%2F2lgsL8PyDMQd1fU9potEp%2FW0sN6qnpZlEjiS&X-Amz-Signature=cade670c917165642030849897a0007095ab790a2ca0511cd46ba61aac7cf3c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
