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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZA56HU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIA40wVUoWF9FTUdklyLf3HVKQ5xQOsxe3FdaTpVLr%2B%2B5AiBYxhE5InNWfbb7fK2p9HqRtuI9hGzSc%2FgAYfxqrRm60Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMDMQ4C2fzfi8BadwcKtwDnDsnnw5S3SBEkdlPAwkjoWswG2QpTS7Jbts80woy80m%2FKxNdU1p4kk5%2F5dru5DStAE6FpDoCWYq7A%2Fdl8uk7SRqwdKLWGFcBQHgRnEGmKJhNP6Plj4yKoy2EQN0bIbwVpKkSgyOkBc58JG0fp8pmJFT9WoSse0PAOVzZLleKrzPw6GvbecEvg03h5A2wWejNXXduOgNkri0IDPPblAfNXi52vBItUMjarPAZz0HnLC0JIPj3ml7aZZ%2BtoHNkJxhrcw5iP0aptSklSAgMsWl0eU3%2FdStJtBjDZ94hpoUjxhvS5oXWGscUM4qnoieey0sEJLFwDs7b0wCfaK39UkoTHOicHoELQZGsqAWJc12pLJRLs%2BF%2F71UI%2FOQtfQLLuyh%2FR4R2H55oCvv5W%2B8m13lcvii%2BCyrGUPrBwDRX%2FsnLBQVOXxNH2Htwr9cDsTABJ1rA0VJ9ecDSO4q4%2FhZP7vHyJMcigYaeTtMSBaFuNGLlPTCdCVrk96JwOggzYZ887agEaczI12GKKNDYNZOIg%2FRrWIBLNVC5jGzI4kKNXwKkDU1sHX2znyguAraAAdHGStvAmrG%2BDdoe83xfZTrTpxAP%2FKBlso1jOWXG007zRm9R1gWYNUfBdJpbF6AVjbYw%2Fcv6wgY6pgEptWE4fQ7W%2BVK0Z3nUkUwDBa%2FwMKnOU7ryGrKWVyccCWY0D1E2%2B0cLRA2zjmU4jgykxW66Llo%2FBxdkKVwz6e3Nw11hDxe3HwOv%2FQVyInljtRmjTbnLd8TsZEWuVEtCzVzlYS%2FOzLQnFhi8L1MlL6jsN9Uoy%2BDBOqGy64cYDc4EK1eyRvZRoR7wUlQzrFkG3EEGMn6GtXAu3QlrnQit6JAga4uEdjKT&X-Amz-Signature=165ce03ae3f2ca928279ed1c00d1f7c7448c316e35764d92cedbd644a2bb35c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZA56HU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIA40wVUoWF9FTUdklyLf3HVKQ5xQOsxe3FdaTpVLr%2B%2B5AiBYxhE5InNWfbb7fK2p9HqRtuI9hGzSc%2FgAYfxqrRm60Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMDMQ4C2fzfi8BadwcKtwDnDsnnw5S3SBEkdlPAwkjoWswG2QpTS7Jbts80woy80m%2FKxNdU1p4kk5%2F5dru5DStAE6FpDoCWYq7A%2Fdl8uk7SRqwdKLWGFcBQHgRnEGmKJhNP6Plj4yKoy2EQN0bIbwVpKkSgyOkBc58JG0fp8pmJFT9WoSse0PAOVzZLleKrzPw6GvbecEvg03h5A2wWejNXXduOgNkri0IDPPblAfNXi52vBItUMjarPAZz0HnLC0JIPj3ml7aZZ%2BtoHNkJxhrcw5iP0aptSklSAgMsWl0eU3%2FdStJtBjDZ94hpoUjxhvS5oXWGscUM4qnoieey0sEJLFwDs7b0wCfaK39UkoTHOicHoELQZGsqAWJc12pLJRLs%2BF%2F71UI%2FOQtfQLLuyh%2FR4R2H55oCvv5W%2B8m13lcvii%2BCyrGUPrBwDRX%2FsnLBQVOXxNH2Htwr9cDsTABJ1rA0VJ9ecDSO4q4%2FhZP7vHyJMcigYaeTtMSBaFuNGLlPTCdCVrk96JwOggzYZ887agEaczI12GKKNDYNZOIg%2FRrWIBLNVC5jGzI4kKNXwKkDU1sHX2znyguAraAAdHGStvAmrG%2BDdoe83xfZTrTpxAP%2FKBlso1jOWXG007zRm9R1gWYNUfBdJpbF6AVjbYw%2Fcv6wgY6pgEptWE4fQ7W%2BVK0Z3nUkUwDBa%2FwMKnOU7ryGrKWVyccCWY0D1E2%2B0cLRA2zjmU4jgykxW66Llo%2FBxdkKVwz6e3Nw11hDxe3HwOv%2FQVyInljtRmjTbnLd8TsZEWuVEtCzVzlYS%2FOzLQnFhi8L1MlL6jsN9Uoy%2BDBOqGy64cYDc4EK1eyRvZRoR7wUlQzrFkG3EEGMn6GtXAu3QlrnQit6JAga4uEdjKT&X-Amz-Signature=5a1cd13315ebfa4528077e96a728da4ef6492aa89191784db888a91685db2a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
