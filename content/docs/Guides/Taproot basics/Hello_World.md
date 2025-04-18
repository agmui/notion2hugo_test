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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5G4XGX%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0wV9IEtyegWuf90mVuIVPSvS57T7sGmqW2g%2BPFsJL0AiAL96eA9w8pMZLoWLai08hHyouyAcn6nhGE8Xmf3KDW4yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM3O02%2BUyrQN%2BvXFKKtwD7hkvsUV4WJRn4gDEjYa92aLMEk8NjglQXS0fNwHFa%2B0n%2FKkZbOiMvFiXEoHpz8Wr3uDYS6vZdpUgGtvj%2BTXiMUGpukvDANgke5KkmjRmE7rJwgDPDUwesOeFdPBl9dSTdBGvFWbV%2B5Y7FbelR5vd1KBpxFWITN9IwoH6Tw179Ok9VD1uTruw%2FDxdq%2FFK6Ocvd88grgELYX2WFfmy4nil%2BWzLE8TPggWF49%2BTaFmV91IKJqGOAW1vdjsNeevs9I5HPadnSqJqG6Lxkck51hmiUsY0LPRW9hlvNLaJQkHotiuAcp2mQrfQAZ8tGQHNkR4A9C02rrzZEADu32xX8woVoegBaK%2FjIrGdlpxqKaTIcZ95OI87SQlrtw8gfaaH36NRqCmN9dGgy6pNnUVWpZ3beEZi%2FEudkyc%2F6rZ2Ik5DXEO5YHP4vIHq97%2FTulM4kFhc%2B6nPadlXu0XwY7DtDqhqjJ6I%2B4CFWsbu6W0hOrmMnNS0neomEJpx%2B%2F2K5osD6BI87axrWpLOK3EiCg259r%2F2ZIkz3Knmy1dp0zMsSTY3uWCLZNKsSmPvo%2FlrInbS2SlTfUh%2B%2BDTSjuZYQmUG4bhwS9bfY9WZtQpPyUub3aD%2Fu6D07GcJcpflwt4UuCowyLOLwAY6pgG8ROB2afg7RQ9IwBJI18Cw3%2BJv6eOGvUz8GGkqiL8S%2BARBG8DjZZ8%2FDMToFVcMjFrT%2FtuSz7w29IML781dBR7OALfc8p0p%2BDpHSPvyqDWF98JjoJkuHbA%2F8wogcB3R0XU7lM78e3BuoUBs%2FxvZNN3qxX1AbLO0ojrTtRed7xOX4myLOZCkkKVS1jVRkdn%2B7nJDMWfyN0cXgcwH3Js%2BZM5W2wpCcT4m&X-Amz-Signature=dd2ce1d895f18ae03c92e1b9b8068fe26db7a2a45c387d4613245ec7d5b6ac56&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5G4XGX%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0wV9IEtyegWuf90mVuIVPSvS57T7sGmqW2g%2BPFsJL0AiAL96eA9w8pMZLoWLai08hHyouyAcn6nhGE8Xmf3KDW4yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM3O02%2BUyrQN%2BvXFKKtwD7hkvsUV4WJRn4gDEjYa92aLMEk8NjglQXS0fNwHFa%2B0n%2FKkZbOiMvFiXEoHpz8Wr3uDYS6vZdpUgGtvj%2BTXiMUGpukvDANgke5KkmjRmE7rJwgDPDUwesOeFdPBl9dSTdBGvFWbV%2B5Y7FbelR5vd1KBpxFWITN9IwoH6Tw179Ok9VD1uTruw%2FDxdq%2FFK6Ocvd88grgELYX2WFfmy4nil%2BWzLE8TPggWF49%2BTaFmV91IKJqGOAW1vdjsNeevs9I5HPadnSqJqG6Lxkck51hmiUsY0LPRW9hlvNLaJQkHotiuAcp2mQrfQAZ8tGQHNkR4A9C02rrzZEADu32xX8woVoegBaK%2FjIrGdlpxqKaTIcZ95OI87SQlrtw8gfaaH36NRqCmN9dGgy6pNnUVWpZ3beEZi%2FEudkyc%2F6rZ2Ik5DXEO5YHP4vIHq97%2FTulM4kFhc%2B6nPadlXu0XwY7DtDqhqjJ6I%2B4CFWsbu6W0hOrmMnNS0neomEJpx%2B%2F2K5osD6BI87axrWpLOK3EiCg259r%2F2ZIkz3Knmy1dp0zMsSTY3uWCLZNKsSmPvo%2FlrInbS2SlTfUh%2B%2BDTSjuZYQmUG4bhwS9bfY9WZtQpPyUub3aD%2Fu6D07GcJcpflwt4UuCowyLOLwAY6pgG8ROB2afg7RQ9IwBJI18Cw3%2BJv6eOGvUz8GGkqiL8S%2BARBG8DjZZ8%2FDMToFVcMjFrT%2FtuSz7w29IML781dBR7OALfc8p0p%2BDpHSPvyqDWF98JjoJkuHbA%2F8wogcB3R0XU7lM78e3BuoUBs%2FxvZNN3qxX1AbLO0ojrTtRed7xOX4myLOZCkkKVS1jVRkdn%2B7nJDMWfyN0cXgcwH3Js%2BZM5W2wpCcT4m&X-Amz-Signature=0ba74574bac904f03d826f8d1f75c2d08d3fcbfad9c65794d3ba9d7a408f1332&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
