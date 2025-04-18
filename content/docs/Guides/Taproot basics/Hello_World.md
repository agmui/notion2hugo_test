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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYVWTTQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeEIJ3lcHWHA%2Bo8N%2Fyf6LgIsLOGDPAQA9BxFv%2Frx0eIAIhAJBrGI5DDr9vzBRW77Mn4eV2Q2JyOOSpoPm7qHPk1kQmKv8DCHkQABoMNjM3NDIzMTgzODA1Igzpxz3vEjFiHlP%2BnPkq3AMBIRoJYOm5einNPxE%2Bs7Tgfk%2BwM1LxtFbDH%2FU3KuvZbDnsWiCIiQO9Nx0M9emI4czHvs03lVxR8rr7rcibHwFDhR%2BkObBFPCIGpw%2BxtjFMkU%2Btydj29mKBfQPbGq2%2FPiZtP5SjPt%2Bsep792sxAohAXOtuZjuPbQBRXBlXDNo7j7Re8eJ6eKyiuOCAj%2FtAH9S5jnUtZUGxEj0GeAk04y3ruQbTLCkJXJxllR%2Fsfw6DteysYLrjhz5Ad%2BpjTJM%2FfLf%2FKj79FKJfA%2B%2FZDVwDjnC2%2F1kskUxwY9fQw4QVTcENpKyt5%2BNggGW44hZwuFSbBkymGIJZmqParXon0rcM3nLhIrYBqJ6nYorABuvEEJpS0%2FBjCeixnPRRmOynl7%2FpiQipXo2Smp3WE8MWwzLsmEs8bhfLLJTDap6a2Oeqwm4vFRKu5%2Fx73vxbDBN0tquovYmWm7kbIFrobSaHvRIpduZU8y4GJy3rAgcEeWkz4SmQn9j7FS7ZXu4q40BvxuYyeeP%2FU4Kfx2AEYRMsbZc2vGtI6Av2jGmKvFtce%2FUVnckpNVF0oaWrC2h7VCJhpYKMnNimLeHc2NcnkU8S2BDw6QjpB319wE51m74j%2BW8NF0DzAVioSNplh6zysHQ9xGDCF%2BonABjqkAUeUyxRxzD5SFWTmSgSIU3070Vtn8GokLC4nZc4ANJ11%2B%2B%2BZVZRgo%2FLK3Opl%2FlxrZh84Oeo8n6iDkzXxWA9crer2THD%2Bo2wzd4glVCiG9i8S25v%2F4qGJaMABv964EVCjlG2N%2FlMKc2AfcTZUauwaYH0XXfDRrKni0nPAdiW6JTB1%2FYgkL8dOZdeHHQ08mGpMGqPlte8pbWPpAX3sT%2B%2FvD3dz57ot&X-Amz-Signature=3a7135261ffe238bddb8b32c7564e70ebe776e834bbb180d324335745ae332b9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYVWTTQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeEIJ3lcHWHA%2Bo8N%2Fyf6LgIsLOGDPAQA9BxFv%2Frx0eIAIhAJBrGI5DDr9vzBRW77Mn4eV2Q2JyOOSpoPm7qHPk1kQmKv8DCHkQABoMNjM3NDIzMTgzODA1Igzpxz3vEjFiHlP%2BnPkq3AMBIRoJYOm5einNPxE%2Bs7Tgfk%2BwM1LxtFbDH%2FU3KuvZbDnsWiCIiQO9Nx0M9emI4czHvs03lVxR8rr7rcibHwFDhR%2BkObBFPCIGpw%2BxtjFMkU%2Btydj29mKBfQPbGq2%2FPiZtP5SjPt%2Bsep792sxAohAXOtuZjuPbQBRXBlXDNo7j7Re8eJ6eKyiuOCAj%2FtAH9S5jnUtZUGxEj0GeAk04y3ruQbTLCkJXJxllR%2Fsfw6DteysYLrjhz5Ad%2BpjTJM%2FfLf%2FKj79FKJfA%2B%2FZDVwDjnC2%2F1kskUxwY9fQw4QVTcENpKyt5%2BNggGW44hZwuFSbBkymGIJZmqParXon0rcM3nLhIrYBqJ6nYorABuvEEJpS0%2FBjCeixnPRRmOynl7%2FpiQipXo2Smp3WE8MWwzLsmEs8bhfLLJTDap6a2Oeqwm4vFRKu5%2Fx73vxbDBN0tquovYmWm7kbIFrobSaHvRIpduZU8y4GJy3rAgcEeWkz4SmQn9j7FS7ZXu4q40BvxuYyeeP%2FU4Kfx2AEYRMsbZc2vGtI6Av2jGmKvFtce%2FUVnckpNVF0oaWrC2h7VCJhpYKMnNimLeHc2NcnkU8S2BDw6QjpB319wE51m74j%2BW8NF0DzAVioSNplh6zysHQ9xGDCF%2BonABjqkAUeUyxRxzD5SFWTmSgSIU3070Vtn8GokLC4nZc4ANJ11%2B%2B%2BZVZRgo%2FLK3Opl%2FlxrZh84Oeo8n6iDkzXxWA9crer2THD%2Bo2wzd4glVCiG9i8S25v%2F4qGJaMABv964EVCjlG2N%2FlMKc2AfcTZUauwaYH0XXfDRrKni0nPAdiW6JTB1%2FYgkL8dOZdeHHQ08mGpMGqPlte8pbWPpAX3sT%2B%2FvD3dz57ot&X-Amz-Signature=297e3d850f3d5a2887fc77cc5e494fe8233a60bd3f1a4c675621dece7a7fc626&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
