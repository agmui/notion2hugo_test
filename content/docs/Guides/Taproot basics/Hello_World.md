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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6V2XBBK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUiPb69fU6EWcdhsHZ8UoZJgTpcfhBzY7S9c0JQ1nM%2FAiBiHJVT%2FQV9a8d6ENJTCZzZ7WQQ0Q87H%2BByGycMsrMhfir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMr3AkHRKAfIqkWrAxKtwDj1WzTneMyTsSJT%2FuXpAOL3847sOSJNOSDBhvJDzVcAQiJ7I2BApSwuVEVg3IyZAEJ1VfFC1Tay2wzFRFfaEbRvHI4Om897wNOtWLJ9Xek03CbwTd2h6mYao5ydtwrXqWSe9FLFjLDd7hZtujKs4I3AxaEu5NGXmKzPuK7woDlg3i2x2L0us%2BGunIl388LceOfFcoYDBsaBrgAmXMQYda3CdEP1RX86FSKfrS40XIeHMDD6dAQdiRoIX%2BPF1o4EpHSe87eQEg4c%2FXT4Z9iVN2vekEET0JvKy3wrKpMcFAUPnhGqqS1ol8GpQfVHzeDCQBM9M%2FHc4JaAlHHZtehlIxU3kEo1YESXtob2QVA3D%2BZYFDpq0lpijDJ5BAZg%2BlJVYm69E4tRPk1DC9zGOc%2FD3PPBuUat2DvoZZkIwGe3NbcmqpEbCMjJ9PYlaOdIyTGmmrj7lqKka%2FRE5PWHXR9JeK0OjXIGK9DA1xZB3UrA4HwDxYW6yvV87McvoYsI3%2By9SlWwZAlhNhpgUY9sTJmCFCZR612esZ%2FWBR2MlksZuPs66g1ytAJCf2AardBcoi377CXkZOTwCQjGm7WxwlRATgc6hi85vqSwFDYDU2C4HlnYsIv3HaWwpKAyKF5e4wm7%2BUvwY6pgFpatZ8ldKORdRF6ws9TM8ucEQpT9%2FqS9EptO%2BNTuNjZR1S6JMO5Bg2kA%2Fo1%2FdYttUyjrESLeY%2F8Kp0JnvM%2FK4FKbmxrimXh7%2Fwcq7aWj%2FBCltoZhIW%2BKulQZgWxsW5MuYALtZ6dfw2vdxjzZ4vmArKlQ7sTCnM5i3ya5TZCQhZf5OV11N3ElzAMo1NTIyFzE8femqybc2uT8pYoSKiQHHNVQr%2FUzSd&X-Amz-Signature=88c87ac5f937988de6fd0ae019324e99c466b9a3c1de975db5558e1dc10cb51b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6V2XBBK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUiPb69fU6EWcdhsHZ8UoZJgTpcfhBzY7S9c0JQ1nM%2FAiBiHJVT%2FQV9a8d6ENJTCZzZ7WQQ0Q87H%2BByGycMsrMhfir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMr3AkHRKAfIqkWrAxKtwDj1WzTneMyTsSJT%2FuXpAOL3847sOSJNOSDBhvJDzVcAQiJ7I2BApSwuVEVg3IyZAEJ1VfFC1Tay2wzFRFfaEbRvHI4Om897wNOtWLJ9Xek03CbwTd2h6mYao5ydtwrXqWSe9FLFjLDd7hZtujKs4I3AxaEu5NGXmKzPuK7woDlg3i2x2L0us%2BGunIl388LceOfFcoYDBsaBrgAmXMQYda3CdEP1RX86FSKfrS40XIeHMDD6dAQdiRoIX%2BPF1o4EpHSe87eQEg4c%2FXT4Z9iVN2vekEET0JvKy3wrKpMcFAUPnhGqqS1ol8GpQfVHzeDCQBM9M%2FHc4JaAlHHZtehlIxU3kEo1YESXtob2QVA3D%2BZYFDpq0lpijDJ5BAZg%2BlJVYm69E4tRPk1DC9zGOc%2FD3PPBuUat2DvoZZkIwGe3NbcmqpEbCMjJ9PYlaOdIyTGmmrj7lqKka%2FRE5PWHXR9JeK0OjXIGK9DA1xZB3UrA4HwDxYW6yvV87McvoYsI3%2By9SlWwZAlhNhpgUY9sTJmCFCZR612esZ%2FWBR2MlksZuPs66g1ytAJCf2AardBcoi377CXkZOTwCQjGm7WxwlRATgc6hi85vqSwFDYDU2C4HlnYsIv3HaWwpKAyKF5e4wm7%2BUvwY6pgFpatZ8ldKORdRF6ws9TM8ucEQpT9%2FqS9EptO%2BNTuNjZR1S6JMO5Bg2kA%2Fo1%2FdYttUyjrESLeY%2F8Kp0JnvM%2FK4FKbmxrimXh7%2Fwcq7aWj%2FBCltoZhIW%2BKulQZgWxsW5MuYALtZ6dfw2vdxjzZ4vmArKlQ7sTCnM5i3ya5TZCQhZf5OV11N3ElzAMo1NTIyFzE8femqybc2uT8pYoSKiQHHNVQr%2FUzSd&X-Amz-Signature=c8b8e18e37d78f65192fae7e773c5b788fb0496e57ecc478a419eebc3ec74bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
