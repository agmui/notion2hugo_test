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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQHH6F3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BVLsInXUI3MCT%2BUFCygm4dMbvVl%2FUbTmdti1HbCEIDAiEA3%2FL5ftflMjmXUo3ufYRgy2YRX4PY1VubS2lLwDT%2Br%2BYq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDO3O5zyUroDkzVpZZircAz6O2tvBUqqMAvVG%2Bw5zN%2BgihrtT5Y%2BVAWAv0BfHM6Jl3H3lsJ3WbFi0mz0hu298afX4HQOHPjRtz9mWV94XNZPG0Wg%2Bj%2BiJ6TWw3BWstk6M2XK%2FWD5cvXYROlqs7h80iJb10B88B1KuSlsy4WUCz43F0EH1iHtFy40Ngdkyf6cG6yHvm6bjHEXVkmEmNMsc0pAOE8rZ4NUePxQONf%2BL7h2OVmA1IAyDUTmC40vMYaAcD8Lva22ExIJfN9lRHl8i%2FsLtanZJrSVfLoB8ZdX3QevNacvnSMkno%2BqGUttdKwyo8689NI%2FPaTfGV9N%2FPT6Ny0ef3V15ulkikoydfB%2FLWCPYw%2F0UGM0m3V97E7jaAnkxt9Roagt4uV8yOMAcYj4Rqp9B09d4Eo29xnBtyrR9N1whO76Gtvm0jpPlTgi4iPfXXZmdyzKng0JzujqnRKopb%2BdKou599EjpODXWUG9H9qFqxY%2F7OuE2kk1A3MIMebxW8oUvtcXmFH1NMbUfyJwmqUQUeFOwl1CngOFyblhnsypuLjBi1%2FHziRMEKtuRyAejSyFA7kssG3ms%2F4kXpcnj%2BvC%2BtRDkmkJBSKyFtSzKZVEsjjikYP65czYp%2B%2Bp7zy5DN8uvkQYsIwB7HaZOMNbZub0GOqUBsPnGV34%2FkgedFrIfLDeUoXbgrQv%2FxSWbGKYFolc60Cuv0sR3jcp48MwiYadFwTpTJnoBRPiAPPcSJwR2yCp8Lr6EKqq9%2BJXPMJ9ws8rM8%2Fc6%2FwWz4sAIqzltUoqg1aL7zB7mAeByZ8MjKMJy4PkfPBBqZMRCUter%2BLCrM5PKF%2B%2BRko4BL%2FE%2Foq564doKAnElAqMMe3H5NKqW1zI5ruhed0pwpGTV&X-Amz-Signature=ad62689b5b8804163a159f1039d20c7f31b0df98e8f1e331a48838615582a7d2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQHH6F3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BVLsInXUI3MCT%2BUFCygm4dMbvVl%2FUbTmdti1HbCEIDAiEA3%2FL5ftflMjmXUo3ufYRgy2YRX4PY1VubS2lLwDT%2Br%2BYq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDO3O5zyUroDkzVpZZircAz6O2tvBUqqMAvVG%2Bw5zN%2BgihrtT5Y%2BVAWAv0BfHM6Jl3H3lsJ3WbFi0mz0hu298afX4HQOHPjRtz9mWV94XNZPG0Wg%2Bj%2BiJ6TWw3BWstk6M2XK%2FWD5cvXYROlqs7h80iJb10B88B1KuSlsy4WUCz43F0EH1iHtFy40Ngdkyf6cG6yHvm6bjHEXVkmEmNMsc0pAOE8rZ4NUePxQONf%2BL7h2OVmA1IAyDUTmC40vMYaAcD8Lva22ExIJfN9lRHl8i%2FsLtanZJrSVfLoB8ZdX3QevNacvnSMkno%2BqGUttdKwyo8689NI%2FPaTfGV9N%2FPT6Ny0ef3V15ulkikoydfB%2FLWCPYw%2F0UGM0m3V97E7jaAnkxt9Roagt4uV8yOMAcYj4Rqp9B09d4Eo29xnBtyrR9N1whO76Gtvm0jpPlTgi4iPfXXZmdyzKng0JzujqnRKopb%2BdKou599EjpODXWUG9H9qFqxY%2F7OuE2kk1A3MIMebxW8oUvtcXmFH1NMbUfyJwmqUQUeFOwl1CngOFyblhnsypuLjBi1%2FHziRMEKtuRyAejSyFA7kssG3ms%2F4kXpcnj%2BvC%2BtRDkmkJBSKyFtSzKZVEsjjikYP65czYp%2B%2Bp7zy5DN8uvkQYsIwB7HaZOMNbZub0GOqUBsPnGV34%2FkgedFrIfLDeUoXbgrQv%2FxSWbGKYFolc60Cuv0sR3jcp48MwiYadFwTpTJnoBRPiAPPcSJwR2yCp8Lr6EKqq9%2BJXPMJ9ws8rM8%2Fc6%2FwWz4sAIqzltUoqg1aL7zB7mAeByZ8MjKMJy4PkfPBBqZMRCUter%2BLCrM5PKF%2B%2BRko4BL%2FE%2Foq564doKAnElAqMMe3H5NKqW1zI5ruhed0pwpGTV&X-Amz-Signature=abe09f469e988faa7f494ca191f3f6c2a43281f70a06767f1869b549f301e91c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
