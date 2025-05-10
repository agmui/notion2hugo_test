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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZ5FKG7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXG0e5Xt25c08Xg%2BY%2B5F%2Fb%2BtlY6BI%2B9TxlwOPAMe53BgIgOT0ZV5o%2Fw5%2Fl9ztll031RaUcsoG5qwEwlgr7Rj%2Fwjd8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6L%2F%2BeiqVf0yhvhLCrcA3p5tEcHJTCLk9S%2FZBeAbq505X92O%2B1kHFYiAZf8K3arak6EU56DRbVjCwraD5g0Jbc4BA5llLkvghLtq%2BOjcP8xdqP19Q3HtGRKIJizDJielCRvSYFk%2Fm6IuTLubPcFzws%2BWjpUP5v7Nh278zwsJJtbEKJhs4heh1nlJU9KNKmTaMNzTvGGccanHXQNJB%2BehRG8UGLtVNnvYu1qh1trohnKxZ7eIyq46MkWeCaYpmykQlyHV32EN7l7W1I%2Fc2TcfX3uGC9hYTQFr5YzFyVpb4bnj6hllMLECvKN04Yqci0l%2Ft9qCSoOXJ%2FQnW5cJJwNubqcdd%2FeBSB%2BJF47H4nUcELqVEVUt0vxUATcn2rJ7tfNOEKAKezCrPm2CIlt%2BFNP6vi%2Fmo7Rio%2F4ZgJty2frpDB%2BRV%2FRcmafuXb1sHYTbNae66hD3Oim0YFo3nuxxITH5w9XXKWzwoOv%2ByszOkmE%2B6HejJFbjr1ieoBU9sq5OJ0MfDKF2HyHzL%2B%2B2KOzrSZvCOotFiYFcIkCXCcF2TS5pTDclwYwWKbsKhUSZwnfgCV%2FTG%2FiVpzu3VYiFI3%2Bz3G4xS93FdKyf9XHP7nrjeiXTrkjI2zlwu60CYUqNbGxzxm7Myfk9MCsWdrS37o9MJiH%2B8AGOqUBXWetUIGKkxsgBQ3crGkIkOUHt8nPqBZ%2F1d9MvuE50deL7BDNBQIeTyGlsI5DcKmlCzJf7rehmTK2NdV7xhCLX6bPrZ32M7mihw9a7qXxUZMAcI3SPWmXYARbQm1%2F7ojk3ouircDrICtZ0p%2FmK9fzgyb3xEa2fhb7BeBHsOd725eKwbQwLeArw5wigouj0kRP9A3dWDPrxvOT5j%2BT4posGIjmGtYp&X-Amz-Signature=be5943dd32e5266aa4c10f0515be61ff8f07d30f2be282a5dfa5768da1e78673&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZ5FKG7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXG0e5Xt25c08Xg%2BY%2B5F%2Fb%2BtlY6BI%2B9TxlwOPAMe53BgIgOT0ZV5o%2Fw5%2Fl9ztll031RaUcsoG5qwEwlgr7Rj%2Fwjd8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6L%2F%2BeiqVf0yhvhLCrcA3p5tEcHJTCLk9S%2FZBeAbq505X92O%2B1kHFYiAZf8K3arak6EU56DRbVjCwraD5g0Jbc4BA5llLkvghLtq%2BOjcP8xdqP19Q3HtGRKIJizDJielCRvSYFk%2Fm6IuTLubPcFzws%2BWjpUP5v7Nh278zwsJJtbEKJhs4heh1nlJU9KNKmTaMNzTvGGccanHXQNJB%2BehRG8UGLtVNnvYu1qh1trohnKxZ7eIyq46MkWeCaYpmykQlyHV32EN7l7W1I%2Fc2TcfX3uGC9hYTQFr5YzFyVpb4bnj6hllMLECvKN04Yqci0l%2Ft9qCSoOXJ%2FQnW5cJJwNubqcdd%2FeBSB%2BJF47H4nUcELqVEVUt0vxUATcn2rJ7tfNOEKAKezCrPm2CIlt%2BFNP6vi%2Fmo7Rio%2F4ZgJty2frpDB%2BRV%2FRcmafuXb1sHYTbNae66hD3Oim0YFo3nuxxITH5w9XXKWzwoOv%2ByszOkmE%2B6HejJFbjr1ieoBU9sq5OJ0MfDKF2HyHzL%2B%2B2KOzrSZvCOotFiYFcIkCXCcF2TS5pTDclwYwWKbsKhUSZwnfgCV%2FTG%2FiVpzu3VYiFI3%2Bz3G4xS93FdKyf9XHP7nrjeiXTrkjI2zlwu60CYUqNbGxzxm7Myfk9MCsWdrS37o9MJiH%2B8AGOqUBXWetUIGKkxsgBQ3crGkIkOUHt8nPqBZ%2F1d9MvuE50deL7BDNBQIeTyGlsI5DcKmlCzJf7rehmTK2NdV7xhCLX6bPrZ32M7mihw9a7qXxUZMAcI3SPWmXYARbQm1%2F7ojk3ouircDrICtZ0p%2FmK9fzgyb3xEa2fhb7BeBHsOd725eKwbQwLeArw5wigouj0kRP9A3dWDPrxvOT5j%2BT4posGIjmGtYp&X-Amz-Signature=a7c5f7abf029de3572fcd61c3628f76a8b6adc868e987b04852d3c05c600aefc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
