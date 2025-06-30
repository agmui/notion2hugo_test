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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6J5RJS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Jvl2l%2FjtTq34ECMoxBA4eoi6c4654DY0NrrE%2BPqXbgIhAORRDtqJ5FEehMJE8LC58fSR2KkiHI7CshbN5aKBDQ0wKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjeHlPN3rnIEEdBqoq3AOZce92TmEhJXZL8qa7RrsfbSBVUXRugZQritgydCn0R2LbvQ7A5NPTSo4pj%2Fj0%2BcuyyrLY4dvwVf48i8GYnZI6zcOUzUHKcTSdisXRvPKkh64uAE8HNXmzPQVKGOzMFuufecxunhV0IWU%2Fd%2FQw11HF%2FdBRk9qOf1qHQjCvW%2F42gEa9fnlChJoMea93m9domRLip%2FvFcGg43L5IQ1%2FKNyRwpivco8FJ4sKM0ZWR0S9myDg6xFcQCSrNZvbR17Ezbmjw1vPgg33vaSdo%2B7l8%2FnSBBDpC86tjASAuhKuJsIzzV8ThZ%2B73gyUsKUB6HUts9jm1nPi2Q7tdQGB218NKCPn78pUUXQNE4ZRL6v0pUQ8YURjzc8It2dkJZtZfGDoIKVG1%2F29jwRs99kp0rB0Hd3ABqWguRoovDVdvB52yqJknJoadmfTZ31WcBZlnOaX4%2FqLAwjZHujTGBJFEzp0bAm3N9Jb%2BbP%2FMyJjEYU%2B1GEhvABMWeV9sEFU2PFr%2FWoEYoWVbolabp5MgQ%2BwDBuaA8qX2cLXzaD702WI5NgqMkWsNFLFixc6x7Okl5cPy1GABCTiFA5MzQSTvpl81t3sViMN5Bm5rVM2xmy8ccsU2ZxprolzEBHklOMW3WsMqrzDE6ofDBjqkAbONGb232QohxS8O0C8IhmknzBiEXHk2B%2FjHOceyZ9bOde0eRU3fOO6eN3X2u7Q%2Fx%2BRQVndtKDkoYqG%2FkxfRr4pSFJanqtRgjIahhUUnxtGJIyroJ0mXCwzoX%2FosRy6P1WBcuqhSin0GcCUyaw87cHd4Omu9ad64YAQb%2BC9yOhQcviGBejmYJNpIOmirhgyFqShqFp3Z8TPXd%2BpoCBCiRhQDwNLu&X-Amz-Signature=4923b8bbc4b65314495f2df2bb03279f16faabd5b7beda3d0416f7a4006ca1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6J5RJS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Jvl2l%2FjtTq34ECMoxBA4eoi6c4654DY0NrrE%2BPqXbgIhAORRDtqJ5FEehMJE8LC58fSR2KkiHI7CshbN5aKBDQ0wKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjeHlPN3rnIEEdBqoq3AOZce92TmEhJXZL8qa7RrsfbSBVUXRugZQritgydCn0R2LbvQ7A5NPTSo4pj%2Fj0%2BcuyyrLY4dvwVf48i8GYnZI6zcOUzUHKcTSdisXRvPKkh64uAE8HNXmzPQVKGOzMFuufecxunhV0IWU%2Fd%2FQw11HF%2FdBRk9qOf1qHQjCvW%2F42gEa9fnlChJoMea93m9domRLip%2FvFcGg43L5IQ1%2FKNyRwpivco8FJ4sKM0ZWR0S9myDg6xFcQCSrNZvbR17Ezbmjw1vPgg33vaSdo%2B7l8%2FnSBBDpC86tjASAuhKuJsIzzV8ThZ%2B73gyUsKUB6HUts9jm1nPi2Q7tdQGB218NKCPn78pUUXQNE4ZRL6v0pUQ8YURjzc8It2dkJZtZfGDoIKVG1%2F29jwRs99kp0rB0Hd3ABqWguRoovDVdvB52yqJknJoadmfTZ31WcBZlnOaX4%2FqLAwjZHujTGBJFEzp0bAm3N9Jb%2BbP%2FMyJjEYU%2B1GEhvABMWeV9sEFU2PFr%2FWoEYoWVbolabp5MgQ%2BwDBuaA8qX2cLXzaD702WI5NgqMkWsNFLFixc6x7Okl5cPy1GABCTiFA5MzQSTvpl81t3sViMN5Bm5rVM2xmy8ccsU2ZxprolzEBHklOMW3WsMqrzDE6ofDBjqkAbONGb232QohxS8O0C8IhmknzBiEXHk2B%2FjHOceyZ9bOde0eRU3fOO6eN3X2u7Q%2Fx%2BRQVndtKDkoYqG%2FkxfRr4pSFJanqtRgjIahhUUnxtGJIyroJ0mXCwzoX%2FosRy6P1WBcuqhSin0GcCUyaw87cHd4Omu9ad64YAQb%2BC9yOhQcviGBejmYJNpIOmirhgyFqShqFp3Z8TPXd%2BpoCBCiRhQDwNLu&X-Amz-Signature=80007e64c35268ca1292120d175eaf4606d62464bd0daa4f60c149af12de18cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
