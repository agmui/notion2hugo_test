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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOGWXUBM%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIB8DR3YC38KqwmWAvnmJy84mmH83EryTeU9KuK1vbWeqAiB%2FiOMyDXHKD7HwqRloY39VPP2jUwdnp69aTy9EN6fICCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMUl4L%2F1bjV8g0DzEvKtwDVvq97O4Ntp7WsuybZGlWEYLBEvEUTsPbfBvy0Q0uyCBvfsTAfq2p5CyWaHi12FVOQUmttIK7DLnGUAfQe8aBcZ96z0OyRniIaGVKAxrj3WeTreklvFd50Sz02tIp4Wgo3Nn5D8D0JTyYBbOAMJJ9%2Bzv8PwD4BvLDmJqy8n%2FoCcQI2VRIrH7xv1mFOwaGxQeoCLzeXeLAGlCIJ%2FngiedyKBvtBAyhJeLbFrc5ebYlHZVEE3h92k3w%2BkaoTQuJONgFxF9MQmBTsVzItwJ%2BYkMk9oEL5OP%2FZIXqs4qkMHJPTgweakieabevubmrCfYhHfCBdKpDYvR9D7kJQCMQMofAiOqarcS4PyUC7VqeNb8jtoRhR2Y%2FkASLhbdzMPNcr89JXp9D3dWRM50ZC2aRBefamGNI6eIBlUEIqjgShVshMa8Rve8Ae1nAoAQBaSoTCRUpzXGzAKDrf62%2FnG8sKxwp5d%2BVTkdPXgWsyRmZrEYU97T5AJdABfBTAcs3KjLG0qxOj2caqgLycLamNv%2B4Dl%2FTIvYrBr4IGnwLbK8y9vWOfKxNvajRGjr28DioogRl6tstM5gFHZLJqXy%2FXB1fe80XGhh7dVTZdBr5rp6cwWTpKbwi2EixCvet33wCkFow3fqUyAY6pgHMER8iE2CbeN%2FfzRsi2%2Baj00szXlc0uDgp0xNgzjfhSqQEO0yeAgsNcbKbAC03WCRUW1A1RbrQGRYX6ioQjsQvzceFi8SZhtZClG%2BB8bn015PilmXhLvpu8XTH557Kl4fLWQknAjpSfKbtoNX%2B7d8W5pA67FZY3bj4gsIT0i2uBUdw70m3kGCznycu8n51cvGwiUtmdit%2FyAD4dseeZMbkjzixAhd%2F&X-Amz-Signature=f72731c208e2efa4a2d94fa6e2e766fc70e462d0b75a991b4c8608ddeb2969dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOGWXUBM%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIB8DR3YC38KqwmWAvnmJy84mmH83EryTeU9KuK1vbWeqAiB%2FiOMyDXHKD7HwqRloY39VPP2jUwdnp69aTy9EN6fICCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMUl4L%2F1bjV8g0DzEvKtwDVvq97O4Ntp7WsuybZGlWEYLBEvEUTsPbfBvy0Q0uyCBvfsTAfq2p5CyWaHi12FVOQUmttIK7DLnGUAfQe8aBcZ96z0OyRniIaGVKAxrj3WeTreklvFd50Sz02tIp4Wgo3Nn5D8D0JTyYBbOAMJJ9%2Bzv8PwD4BvLDmJqy8n%2FoCcQI2VRIrH7xv1mFOwaGxQeoCLzeXeLAGlCIJ%2FngiedyKBvtBAyhJeLbFrc5ebYlHZVEE3h92k3w%2BkaoTQuJONgFxF9MQmBTsVzItwJ%2BYkMk9oEL5OP%2FZIXqs4qkMHJPTgweakieabevubmrCfYhHfCBdKpDYvR9D7kJQCMQMofAiOqarcS4PyUC7VqeNb8jtoRhR2Y%2FkASLhbdzMPNcr89JXp9D3dWRM50ZC2aRBefamGNI6eIBlUEIqjgShVshMa8Rve8Ae1nAoAQBaSoTCRUpzXGzAKDrf62%2FnG8sKxwp5d%2BVTkdPXgWsyRmZrEYU97T5AJdABfBTAcs3KjLG0qxOj2caqgLycLamNv%2B4Dl%2FTIvYrBr4IGnwLbK8y9vWOfKxNvajRGjr28DioogRl6tstM5gFHZLJqXy%2FXB1fe80XGhh7dVTZdBr5rp6cwWTpKbwi2EixCvet33wCkFow3fqUyAY6pgHMER8iE2CbeN%2FfzRsi2%2Baj00szXlc0uDgp0xNgzjfhSqQEO0yeAgsNcbKbAC03WCRUW1A1RbrQGRYX6ioQjsQvzceFi8SZhtZClG%2BB8bn015PilmXhLvpu8XTH557Kl4fLWQknAjpSfKbtoNX%2B7d8W5pA67FZY3bj4gsIT0i2uBUdw70m3kGCznycu8n51cvGwiUtmdit%2FyAD4dseeZMbkjzixAhd%2F&X-Amz-Signature=70b3ed95219c166d657642eef259afe2012011cfe593e25ef1ef6ac749b4c096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
