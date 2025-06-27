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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RHXOVVG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhehfon%2FmPdhdNRAM8e80iFWsdibWs1lGyJ7qndTAbRAiBKiEKHNmqNlcIrt5DL3BBJPwgpTjSKwKzVCkxrKrxw8Cr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMSiCdtF6PBZjuodvuKtwDH2t%2FGW8w5WsXPCfSwrkNDHndKDN4OjCc2P%2F%2Buo5NTFsf7BgoQGf1IoTglZ%2BdsT7OF1WuCIe3mWg6GZSC38T0duy2bqWZfCJvoL8Ft1H2w22sSXVI3qP9maq4sX17tyIgkhotQmiHJSVeqQkENTL4SdjrpiAlFojG5spINYtBA7Ztc0ut8t%2Fg9zdmjpDZkw0hWWMroyNnIh6iRdpogt3aY%2Fk6Lw9KW%2BZh7JRswYq6EesSSds4IgHIJSqoVQx%2BEPanF8mj%2B%2B%2FscuSwGCAs8iHVUv9gEbMIO4UBpOqnLTH2F3qa64l6HZjylnlOM6IzX3LV2bex3qolGuvVsWAjPdsnHhKA5zmMOXe0huBS7DEH6VMlw6WhvBoB4XC0mYaqtpDMQ0CHEYGcx8OSiHUUWu06wfmy6Fp89iyrb4QMAKyK0henjJGV3Azexd%2FIlT09%2Fw47evDgu0iOSu4%2F79TjV0BfT112RHEbXe%2BzqwWY6%2Bpf5dOF7zGZJtvabmfT%2FNEXrXgQSlur7v9hiaH%2F5%2BhJuOcY93JYsRisXD%2FR8MBCRmJBpHcILYMV%2BWvpUvGX%2BwMcY4lRvt2fzgg027dGEld4l%2FQKMttLKYay2Pupdg%2BXhNNRoAzkfr5Qq8X8O2EyVJQwzcv7wgY6pgF2yqu6pHHG4tN7c8zk0h%2FvjaWsOay7Ed%2BCC4Jc92%2BsH0Avl3h%2Fk5Lu3rmpPRhdg%2Fg88dgAoatUq5uQEZXhpDV85Se87%2FMQpWnQHLvbNW%2FJ5QGyKX1Z2A3tCSsu988TBt47r95qdxuaZPHByTHaRqDdKat3Mk7wCkYUB1ihCUpQGVNS%2BDyylNuoL31PVgcvG%2BzMs%2FW76jnWbOJUsMtsKLGzj934lvDr&X-Amz-Signature=90f51382698c9b86235d779236286954669225d8f27b195d1e03828d13bf8c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RHXOVVG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhehfon%2FmPdhdNRAM8e80iFWsdibWs1lGyJ7qndTAbRAiBKiEKHNmqNlcIrt5DL3BBJPwgpTjSKwKzVCkxrKrxw8Cr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMSiCdtF6PBZjuodvuKtwDH2t%2FGW8w5WsXPCfSwrkNDHndKDN4OjCc2P%2F%2Buo5NTFsf7BgoQGf1IoTglZ%2BdsT7OF1WuCIe3mWg6GZSC38T0duy2bqWZfCJvoL8Ft1H2w22sSXVI3qP9maq4sX17tyIgkhotQmiHJSVeqQkENTL4SdjrpiAlFojG5spINYtBA7Ztc0ut8t%2Fg9zdmjpDZkw0hWWMroyNnIh6iRdpogt3aY%2Fk6Lw9KW%2BZh7JRswYq6EesSSds4IgHIJSqoVQx%2BEPanF8mj%2B%2B%2FscuSwGCAs8iHVUv9gEbMIO4UBpOqnLTH2F3qa64l6HZjylnlOM6IzX3LV2bex3qolGuvVsWAjPdsnHhKA5zmMOXe0huBS7DEH6VMlw6WhvBoB4XC0mYaqtpDMQ0CHEYGcx8OSiHUUWu06wfmy6Fp89iyrb4QMAKyK0henjJGV3Azexd%2FIlT09%2Fw47evDgu0iOSu4%2F79TjV0BfT112RHEbXe%2BzqwWY6%2Bpf5dOF7zGZJtvabmfT%2FNEXrXgQSlur7v9hiaH%2F5%2BhJuOcY93JYsRisXD%2FR8MBCRmJBpHcILYMV%2BWvpUvGX%2BwMcY4lRvt2fzgg027dGEld4l%2FQKMttLKYay2Pupdg%2BXhNNRoAzkfr5Qq8X8O2EyVJQwzcv7wgY6pgF2yqu6pHHG4tN7c8zk0h%2FvjaWsOay7Ed%2BCC4Jc92%2BsH0Avl3h%2Fk5Lu3rmpPRhdg%2Fg88dgAoatUq5uQEZXhpDV85Se87%2FMQpWnQHLvbNW%2FJ5QGyKX1Z2A3tCSsu988TBt47r95qdxuaZPHByTHaRqDdKat3Mk7wCkYUB1ihCUpQGVNS%2BDyylNuoL31PVgcvG%2BzMs%2FW76jnWbOJUsMtsKLGzj934lvDr&X-Amz-Signature=a8523d84399771f2885b63b56f9f9ef73b38157a8ac0229d0b29c75ecc40cd4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
