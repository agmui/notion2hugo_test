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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655PUT34I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCKgxh6svNLMEFX0V8P9d0AZ2GzYxoS4QgyFy%2F1E7zrZAIgFR5OY2KFT7zVkg9Znjop0DMKluOJlKAUWj6kgwHOd%2Boq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPbVFio9x16AlPo02yrcA9SmFIClNW%2BGTg65sI0l2wGvsHh1OCqETSdDR8hrYqlsBU%2BmDAiN0ANsWZzAEPwu3I%2Bm2t%2FohP2%2BZSkHtsiFRSJ%2BivtM7Eivd2Fx293sl9ua2e%2FQULxlQP6MRrUQGfVFJbbd4o8aR83eWZpHMC%2FT3GDGjEJul9vmaLYua7WqwUdptoU8RZmBIRYZfaTQQ5taLxK9hR%2B%2Fjgp5izlT9iLq1gcbgs7yNV4D1cAOUljlLxgqoM6hR9Rxz2OvzN0eW9oLv1k%2F5cl%2FC1phNZVoN7IV9mNIlGzGYAQ2GG7Hhy6aOWACtmzLl67W%2FKWr0nXLyKDlSvzBWxKxoNBo5n3s6cGB4w2DALRjcWXcn5LvDQLQ3d2Jn6TCEXB0TmlCM4y%2FrKPwRXmmbDUzGgUqCuR8L5AI3LBwVyfm9t8%2BKj9khl31V19pZWdihCWV4YFgOVZQkt4fYYxxLwg5%2F%2Bzu2rgG9QaCVUGvUqGNoV7XkhL2%2FwR6X4zoc9jRP9cMYDOWTF8yPfax3IF2%2FUjyb4sPyIY%2FdzqT24sHDntoMJq3rXCtu71BpXhAT0%2FtmTg14AgIBaKXT2dk3uMSfKRp1ujyE8U2OdspgwV%2F97BfKGJn7ocnxyOLKkkd6bWK2%2Fodg05DixWGMKTtwb0GOqUBTDoX9YR0wzLJiNmhr5kZvB%2BWYa6a8hXRYjE2zMkdoxOYSkB8LMp9%2Fc12SJ7iwrqfMJBNc4NSdBBwW6NiOwLtcHj5Aqczp4SSa5dvix2j80hQigZADPdTS2Fhtcvme5mnl31X9hJ8gGINaKEtT2w2G%2BoOi0wZDRQqESlA6VA4L1vcALAsBeqgs8GYvB134VDOsUbXCFhbZRPnmUEiJu4EIWwTm7R%2F&X-Amz-Signature=905a3db86a6cd01fe36651b0118f23362adc3ffefb72cfcb79a56c8235ebfcf0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655PUT34I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCKgxh6svNLMEFX0V8P9d0AZ2GzYxoS4QgyFy%2F1E7zrZAIgFR5OY2KFT7zVkg9Znjop0DMKluOJlKAUWj6kgwHOd%2Boq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPbVFio9x16AlPo02yrcA9SmFIClNW%2BGTg65sI0l2wGvsHh1OCqETSdDR8hrYqlsBU%2BmDAiN0ANsWZzAEPwu3I%2Bm2t%2FohP2%2BZSkHtsiFRSJ%2BivtM7Eivd2Fx293sl9ua2e%2FQULxlQP6MRrUQGfVFJbbd4o8aR83eWZpHMC%2FT3GDGjEJul9vmaLYua7WqwUdptoU8RZmBIRYZfaTQQ5taLxK9hR%2B%2Fjgp5izlT9iLq1gcbgs7yNV4D1cAOUljlLxgqoM6hR9Rxz2OvzN0eW9oLv1k%2F5cl%2FC1phNZVoN7IV9mNIlGzGYAQ2GG7Hhy6aOWACtmzLl67W%2FKWr0nXLyKDlSvzBWxKxoNBo5n3s6cGB4w2DALRjcWXcn5LvDQLQ3d2Jn6TCEXB0TmlCM4y%2FrKPwRXmmbDUzGgUqCuR8L5AI3LBwVyfm9t8%2BKj9khl31V19pZWdihCWV4YFgOVZQkt4fYYxxLwg5%2F%2Bzu2rgG9QaCVUGvUqGNoV7XkhL2%2FwR6X4zoc9jRP9cMYDOWTF8yPfax3IF2%2FUjyb4sPyIY%2FdzqT24sHDntoMJq3rXCtu71BpXhAT0%2FtmTg14AgIBaKXT2dk3uMSfKRp1ujyE8U2OdspgwV%2F97BfKGJn7ocnxyOLKkkd6bWK2%2Fodg05DixWGMKTtwb0GOqUBTDoX9YR0wzLJiNmhr5kZvB%2BWYa6a8hXRYjE2zMkdoxOYSkB8LMp9%2Fc12SJ7iwrqfMJBNc4NSdBBwW6NiOwLtcHj5Aqczp4SSa5dvix2j80hQigZADPdTS2Fhtcvme5mnl31X9hJ8gGINaKEtT2w2G%2BoOi0wZDRQqESlA6VA4L1vcALAsBeqgs8GYvB134VDOsUbXCFhbZRPnmUEiJu4EIWwTm7R%2F&X-Amz-Signature=df1bd2974eea4a861c77fc5b67ea04b8824deb0c31d5c14486839f6ae15c5d30&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
