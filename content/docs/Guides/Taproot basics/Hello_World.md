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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3M7QRM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCmKyh4bJa3GadfcCAK8ahlUpJprTfVJOevY2h63cB7WAIhANWz6FPXwrUHikYu27d90oV%2FVriJbIde3Pt5EqsPMmB2KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXFMuYePEGy8dm%2B3oq3AMvXpj4t6xf6QgZHVZMD5BmEjWbYX6rsmVezI%2BcMOtCalDoh2AY8fLwf2iYwN0fNPJgmZGta113SYC7RZaBx02jqb%2BzU2izphBykDx%2FhZ8EC330OizW0IAaT9sjjJY3Mj5OfGZdZltMxU3HcE%2Bg9jr8KkM64UXYxsWBNsarV3kKDUznBmtyvo3vIra5RIsLQKiZ%2FtUqyFYf1z1Ueb8CpbK6gxtPWhEQG3adZYhUXV7UniiWh49CRxrJk7xRW1V5BvlxDrOPvSAGzIwFt6%2FLSnSBSI8iFxi1v1Lyv5sxeJ2QU9Y0LOqW7RGzY7Ei2H%2BXgvuI3tCvRIsigyVmoksuK99vzcB%2F8j1AfqzoavAOhF6hZUqEDHgorXzqFSL5YzVIYPk1Nn%2FapeIpcRRTOcbjFxUd9x%2Fc7EHkECizOcTekMH3O0MqCNM22x7awfxFPFz%2FSiWiV3dxY1FpjdQmqQ%2BqV4JCVxPXYFjwtNPv4YT7yhJHtP0T03SFLwyzKtXO34uZEttjAkJ2LTAUr7DwqeZCMtXJD0%2B59oJQUM52y%2BwbxU5E4v63MxKc2bs0hh8TQp5XTr9svr91MWo1bu%2FYCVcK8tYBPzXY3NQQdzfHaOiF67uWfpPFlDqx79izkdtoCjDIje2%2FBjqkAXMldWOrEQhzlE9mQKcuzbu5ZCbl9Q3I2vfldn7EyvDMFDVj9dbjmpFKEvtRhsk322uiNj3xya%2BUA8vVcLxOBX5adnmKyix203dxHxy4TH%2BFc4gBBXxI8GpiCEfO8SbcCx794Ia6rNET19k42CN2ooPK%2BSFt91puTaEg%2FJ%2BZuh1BJx%2F6t3y0UlPUcEfB00mSNNJdq4ki1suMhhlt87jHD7fsnNti&X-Amz-Signature=9356301da5028cfa660e755320fc12764402b4e43b378438c39846414931e802&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3M7QRM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCmKyh4bJa3GadfcCAK8ahlUpJprTfVJOevY2h63cB7WAIhANWz6FPXwrUHikYu27d90oV%2FVriJbIde3Pt5EqsPMmB2KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXFMuYePEGy8dm%2B3oq3AMvXpj4t6xf6QgZHVZMD5BmEjWbYX6rsmVezI%2BcMOtCalDoh2AY8fLwf2iYwN0fNPJgmZGta113SYC7RZaBx02jqb%2BzU2izphBykDx%2FhZ8EC330OizW0IAaT9sjjJY3Mj5OfGZdZltMxU3HcE%2Bg9jr8KkM64UXYxsWBNsarV3kKDUznBmtyvo3vIra5RIsLQKiZ%2FtUqyFYf1z1Ueb8CpbK6gxtPWhEQG3adZYhUXV7UniiWh49CRxrJk7xRW1V5BvlxDrOPvSAGzIwFt6%2FLSnSBSI8iFxi1v1Lyv5sxeJ2QU9Y0LOqW7RGzY7Ei2H%2BXgvuI3tCvRIsigyVmoksuK99vzcB%2F8j1AfqzoavAOhF6hZUqEDHgorXzqFSL5YzVIYPk1Nn%2FapeIpcRRTOcbjFxUd9x%2Fc7EHkECizOcTekMH3O0MqCNM22x7awfxFPFz%2FSiWiV3dxY1FpjdQmqQ%2BqV4JCVxPXYFjwtNPv4YT7yhJHtP0T03SFLwyzKtXO34uZEttjAkJ2LTAUr7DwqeZCMtXJD0%2B59oJQUM52y%2BwbxU5E4v63MxKc2bs0hh8TQp5XTr9svr91MWo1bu%2FYCVcK8tYBPzXY3NQQdzfHaOiF67uWfpPFlDqx79izkdtoCjDIje2%2FBjqkAXMldWOrEQhzlE9mQKcuzbu5ZCbl9Q3I2vfldn7EyvDMFDVj9dbjmpFKEvtRhsk322uiNj3xya%2BUA8vVcLxOBX5adnmKyix203dxHxy4TH%2BFc4gBBXxI8GpiCEfO8SbcCx794Ia6rNET19k42CN2ooPK%2BSFt91puTaEg%2FJ%2BZuh1BJx%2F6t3y0UlPUcEfB00mSNNJdq4ki1suMhhlt87jHD7fsnNti&X-Amz-Signature=03eeea19b263e1acb4fa0ffd6f5781f4e943ac3812bd3817b9c2e16ae42093e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
