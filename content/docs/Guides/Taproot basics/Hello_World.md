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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HGYPMJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFDjdZFO6NJ%2FndV9L0SRj82v%2F8TWQSIgft8z%2F8jiMHZVAiEAuBttwOcnjj49OfD47Vq%2FInXn1O3NYhcoIkL%2Fcroeolcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB0%2BUQsGv0uswtLhQSrcA3ulM4WgXlJfgHwgZefhZyO9FUF4eGzqDQgcn0CFxcwznXFclbctbkiW4wUNTEALBvBtQz5wiLID%2FVFOEjHywIp7UnLXl1I17UWLjQZ7b7%2BZUZSuyel%2FUolHewCdtB9ayU7SaZPHA9zqa57AwrrHS7b0L9ADToQcp66bU5eO3aTxoDKENK%2B7NulcDSfMr5fDtvTkJmq4Uv47og%2FyVnCZ0TS3uk0Q7L8jGqq7cXwLXvI59Awji8ffbIuW%2FYsbHBE3f1xE0OqbaMWqxMnq9O5UIsKimQMbm9WTp1%2FYxgWPP4rWTeja6HYOzICYASMFbVuBaUDqqxgapIFbj5Cjnd8y0qubMQ0E6F4dioVeXG%2Fi1Biej7UaOjjaRr2kOwommX%2F6JZRs3OeoCYkUhy4m4gq54rTVH4Y0XG2rMfMY%2BcRsNoIJsYjOkPJKplOVN87zEMvh6aDYJ3sPBgcxS9J%2BMKSNX%2FZiY%2B1xOqfLqcRkSphrJ188xZMwziMrIl%2BIJmvO2%2FTPt55%2BIhXeNgNzKgm9xBFGSyL3%2FnMwwFo6M84WB4NZ7qryo5ExHar0BXt%2BuAcGu%2BhA%2B6lYWcFIjZ5doyVWsophazR38%2FE9Rrr89z4t3WiA%2FZM28Qm0IVued9uGfqt9MLqzv8IGOqUB7t6dBb60SGO%2BAyATCCGxY%2Fa59ylrhZwsn062ceSFrNlACCfwr9DoM74v%2BYI%2BKUWklW%2BJp2HX5bf1tIRDLdnyJHihFEgQSR%2BsRdtrdF4HikjvYSXM1%2FqgrJkh%2FSc3Gos%2F1Cxuf8fDSIbOoYE4bPH8b%2BdbFxQvtyYkeEzC%2FtBHmF1TAh9%2FuQVyJ6N6sXjIoN4HpogaknlHJHVO8qe46MT9gglkUSG2&X-Amz-Signature=5ebed75dfd785e164803728aa6700f2ccfa185190d128fbf4c485e59614f7f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HGYPMJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFDjdZFO6NJ%2FndV9L0SRj82v%2F8TWQSIgft8z%2F8jiMHZVAiEAuBttwOcnjj49OfD47Vq%2FInXn1O3NYhcoIkL%2Fcroeolcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB0%2BUQsGv0uswtLhQSrcA3ulM4WgXlJfgHwgZefhZyO9FUF4eGzqDQgcn0CFxcwznXFclbctbkiW4wUNTEALBvBtQz5wiLID%2FVFOEjHywIp7UnLXl1I17UWLjQZ7b7%2BZUZSuyel%2FUolHewCdtB9ayU7SaZPHA9zqa57AwrrHS7b0L9ADToQcp66bU5eO3aTxoDKENK%2B7NulcDSfMr5fDtvTkJmq4Uv47og%2FyVnCZ0TS3uk0Q7L8jGqq7cXwLXvI59Awji8ffbIuW%2FYsbHBE3f1xE0OqbaMWqxMnq9O5UIsKimQMbm9WTp1%2FYxgWPP4rWTeja6HYOzICYASMFbVuBaUDqqxgapIFbj5Cjnd8y0qubMQ0E6F4dioVeXG%2Fi1Biej7UaOjjaRr2kOwommX%2F6JZRs3OeoCYkUhy4m4gq54rTVH4Y0XG2rMfMY%2BcRsNoIJsYjOkPJKplOVN87zEMvh6aDYJ3sPBgcxS9J%2BMKSNX%2FZiY%2B1xOqfLqcRkSphrJ188xZMwziMrIl%2BIJmvO2%2FTPt55%2BIhXeNgNzKgm9xBFGSyL3%2FnMwwFo6M84WB4NZ7qryo5ExHar0BXt%2BuAcGu%2BhA%2B6lYWcFIjZ5doyVWsophazR38%2FE9Rrr89z4t3WiA%2FZM28Qm0IVued9uGfqt9MLqzv8IGOqUB7t6dBb60SGO%2BAyATCCGxY%2Fa59ylrhZwsn062ceSFrNlACCfwr9DoM74v%2BYI%2BKUWklW%2BJp2HX5bf1tIRDLdnyJHihFEgQSR%2BsRdtrdF4HikjvYSXM1%2FqgrJkh%2FSc3Gos%2F1Cxuf8fDSIbOoYE4bPH8b%2BdbFxQvtyYkeEzC%2FtBHmF1TAh9%2FuQVyJ6N6sXjIoN4HpogaknlHJHVO8qe46MT9gglkUSG2&X-Amz-Signature=81e29132cc994e86cd175bfcbbb7b5059285e9f798b908f7e87841899bc323aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
