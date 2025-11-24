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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDUUEDT6%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmAn4PcPHcq%2FJv6HBJ514GoTmAz%2FfJamTji1Y8u0%2FjTAIgbXG1ZpavKKqBKXSGGEHouBK%2Bi0bn2GM2Gfrkc8z6x4cq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHlDavYcVPnJ69%2FEHCrcA%2BB7er%2F0Kyvt9%2FDd5zY2kaL6tZ5s6ahfXWBJN5SzYcQCa1eRtRY1zbzES%2B2oRfifFCuyQsRSjQ5Qnlx2NCpe3aN870qO362WRTuECRtQvu%2B8gsISQEp%2BP5JJ9Hp%2F9ZUHQOCA2NcbqYWmIym3Xp0%2FXe%2FiVp1cZCq1PMXnkWKWcsNyrhUn2w398vv7s9pvStHytiUSmncrgH9yZFqkhWz5I5mhlrCRyWSco5HXnoi6P1MnMqbR%2FXGSjJpbR3GX6G9IbY%2FaaRZvsoQBuJBd6R4GkxB5PVrQDhAZ0YsmKNwdfxYaK4LuKRupCaLHscVnDYAHr0CMgHxJs9wTdoQ%2FYFkpKguXJfPmciBie3jmTMmjEF9iI7v62K7dhg498F5bLI49JAZMP6jf2Zn7lm1bT91V66AnbR4nWGsCe2FuC%2Fxz4iugwGWS7TOAUNF7gvAVO4uilQywEHpjTkKN7MhVZDqUmXYG4LU2HiEN8HW%2FtK7oXsSbiVtTdulSWJNO9J1Aj3FOwuqwiJ0IzkwpxV5IzQKiSEfg0vOzfHLuYK4VyA7V3Tlj9TaPfINOTBBOKbi%2FoLG8ptGfpzjTFb2haaq4LKidQr5yRbFrAibDUK4mns%2BIFabWbUyKkhycXTcCHfqfMMfcjskGOqUBdF1ykndRlt2qJlHUcZdNJjc25uyofh%2FgivVTZmFtxRY1%2FpqVmRb0szeGe1rFPNW1%2Bxs6D3lToiVZFw%2FWEr9PyXJ4klTc63R%2FRlvqk6TS30avGHw77hSY3NGqZDXdgDchpN72RJ3DYDZyLYbXjvcfKaufPbkm2S5W5rUvEWjk9l5LXhA8etEjU5IncKRhzHOTX%2Fn81U%2BiL1bNeTDjfUs%2BxcCT3q0Y&X-Amz-Signature=0ee135d88dfe3d78794e16c14901dad5c293e3c190ba9be42f25a0d890aa5e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDUUEDT6%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmAn4PcPHcq%2FJv6HBJ514GoTmAz%2FfJamTji1Y8u0%2FjTAIgbXG1ZpavKKqBKXSGGEHouBK%2Bi0bn2GM2Gfrkc8z6x4cq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHlDavYcVPnJ69%2FEHCrcA%2BB7er%2F0Kyvt9%2FDd5zY2kaL6tZ5s6ahfXWBJN5SzYcQCa1eRtRY1zbzES%2B2oRfifFCuyQsRSjQ5Qnlx2NCpe3aN870qO362WRTuECRtQvu%2B8gsISQEp%2BP5JJ9Hp%2F9ZUHQOCA2NcbqYWmIym3Xp0%2FXe%2FiVp1cZCq1PMXnkWKWcsNyrhUn2w398vv7s9pvStHytiUSmncrgH9yZFqkhWz5I5mhlrCRyWSco5HXnoi6P1MnMqbR%2FXGSjJpbR3GX6G9IbY%2FaaRZvsoQBuJBd6R4GkxB5PVrQDhAZ0YsmKNwdfxYaK4LuKRupCaLHscVnDYAHr0CMgHxJs9wTdoQ%2FYFkpKguXJfPmciBie3jmTMmjEF9iI7v62K7dhg498F5bLI49JAZMP6jf2Zn7lm1bT91V66AnbR4nWGsCe2FuC%2Fxz4iugwGWS7TOAUNF7gvAVO4uilQywEHpjTkKN7MhVZDqUmXYG4LU2HiEN8HW%2FtK7oXsSbiVtTdulSWJNO9J1Aj3FOwuqwiJ0IzkwpxV5IzQKiSEfg0vOzfHLuYK4VyA7V3Tlj9TaPfINOTBBOKbi%2FoLG8ptGfpzjTFb2haaq4LKidQr5yRbFrAibDUK4mns%2BIFabWbUyKkhycXTcCHfqfMMfcjskGOqUBdF1ykndRlt2qJlHUcZdNJjc25uyofh%2FgivVTZmFtxRY1%2FpqVmRb0szeGe1rFPNW1%2Bxs6D3lToiVZFw%2FWEr9PyXJ4klTc63R%2FRlvqk6TS30avGHw77hSY3NGqZDXdgDchpN72RJ3DYDZyLYbXjvcfKaufPbkm2S5W5rUvEWjk9l5LXhA8etEjU5IncKRhzHOTX%2Fn81U%2BiL1bNeTDjfUs%2BxcCT3q0Y&X-Amz-Signature=fba6b3e6946862d74146b2cde9bee8aae17287716cbc5ec614111028d42ff92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
