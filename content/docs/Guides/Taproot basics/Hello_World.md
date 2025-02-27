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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSTFGIK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD%2FVyXrHxruhecsbAUc1KuD%2BAhvoMqRgFskCsBCv3FocQIhAMf0yJeyq6%2F7MCZw0yi6zq01TFxaH9Wp%2BMpKbpMEhzNVKv8DCHQQABoMNjM3NDIzMTgzODA1IgyNtANT8jz6l%2FAngIkq3APh3wGrrU3Alc7r5labgmYdwv9tSuwgzU2GtOyLqZ%2B4DO9Veg2yin2i9p%2B1o6H9nRv3yS%2Focj9x9urD8Teo9cTkM9RdWeCiGtGwgD3GtHO1FX89fwaJRw3kZeMbw7SISUVqE3fXfpg9r1NATHgYsranwDU1U2%2B1BNxf1vNf74I4h5rtWzl7f0AttARAzZR42Wba78mYWK6y2NY3h5%2FcpVgqMuWPLTvmRVQpeAHr05cZQojJoyjrgrefqD4Zo76k2HG1o1TMs6O3WzkSp7k0WaW%2FAYuftNHBvD0P4amCJ5yUK8rh9XsbA%2BsyZdMdH8Qr4Wo4qbDiXs0rMkaHBAoPufH5ILWTbIkJ43VHbB5l6uzKcT%2BBB%2B3JeQhjgtzyWUV%2FfjLblqaJp7CG3ocbTy4%2BJfRGo4oiEWoMCL%2Bo7UepGRgwF7douBKFmaEWlzNqWqwd4dw%2FDw0Xs8mHFxIThxxW8WZ6MUvlOk7me9DOAojfOpvDsO502ycbWhFtso5M92zpcftcNRXSMtOpd1TzMqQRBOA9Lkd43hwtMKoMgjdPI02fM3aZDLlH903Gz%2BN6UuSbqgtLACEFc8c2PegtSkV%2FKTWplLuuoMFbhaJjymYYe1lz5wb0vNt0y2HXpO5GZTCzkIG%2BBjqkAZzLMcpDk2XHco9V2oh8aGI9qPyZVGTKxikKwyviVeOkVS1%2FXB%2BmhhTIHk06ft9nnCZcp9T4qIrRVWihvOzjey8omD6VYkr0HwL5SWUpvYigZRE04a473N%2B6LUprF3fwDRSBF%2FgZZUv0GEjDNBxGgVgAj2CRPw8TMqlXVszW23lOqxlCjc6tbYE1G9Vfzw2fTD4T9M1psz3kJ%2BEv%2FHHI587w8tZJ&X-Amz-Signature=05104f0d524a71cb5771db1830ca0108420820c47824c1a7bab303df98f9c097&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSTFGIK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD%2FVyXrHxruhecsbAUc1KuD%2BAhvoMqRgFskCsBCv3FocQIhAMf0yJeyq6%2F7MCZw0yi6zq01TFxaH9Wp%2BMpKbpMEhzNVKv8DCHQQABoMNjM3NDIzMTgzODA1IgyNtANT8jz6l%2FAngIkq3APh3wGrrU3Alc7r5labgmYdwv9tSuwgzU2GtOyLqZ%2B4DO9Veg2yin2i9p%2B1o6H9nRv3yS%2Focj9x9urD8Teo9cTkM9RdWeCiGtGwgD3GtHO1FX89fwaJRw3kZeMbw7SISUVqE3fXfpg9r1NATHgYsranwDU1U2%2B1BNxf1vNf74I4h5rtWzl7f0AttARAzZR42Wba78mYWK6y2NY3h5%2FcpVgqMuWPLTvmRVQpeAHr05cZQojJoyjrgrefqD4Zo76k2HG1o1TMs6O3WzkSp7k0WaW%2FAYuftNHBvD0P4amCJ5yUK8rh9XsbA%2BsyZdMdH8Qr4Wo4qbDiXs0rMkaHBAoPufH5ILWTbIkJ43VHbB5l6uzKcT%2BBB%2B3JeQhjgtzyWUV%2FfjLblqaJp7CG3ocbTy4%2BJfRGo4oiEWoMCL%2Bo7UepGRgwF7douBKFmaEWlzNqWqwd4dw%2FDw0Xs8mHFxIThxxW8WZ6MUvlOk7me9DOAojfOpvDsO502ycbWhFtso5M92zpcftcNRXSMtOpd1TzMqQRBOA9Lkd43hwtMKoMgjdPI02fM3aZDLlH903Gz%2BN6UuSbqgtLACEFc8c2PegtSkV%2FKTWplLuuoMFbhaJjymYYe1lz5wb0vNt0y2HXpO5GZTCzkIG%2BBjqkAZzLMcpDk2XHco9V2oh8aGI9qPyZVGTKxikKwyviVeOkVS1%2FXB%2BmhhTIHk06ft9nnCZcp9T4qIrRVWihvOzjey8omD6VYkr0HwL5SWUpvYigZRE04a473N%2B6LUprF3fwDRSBF%2FgZZUv0GEjDNBxGgVgAj2CRPw8TMqlXVszW23lOqxlCjc6tbYE1G9Vfzw2fTD4T9M1psz3kJ%2BEv%2FHHI587w8tZJ&X-Amz-Signature=fdecd32d1f2e41f929d33c0305f7c5276e30f5a2d927384fd1ec84ac3d52c81f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
