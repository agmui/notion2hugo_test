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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SLKVQP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDsrIcG46bckDIGKe4SCAi4zW%2BhNn3VsS0QdjRhaN3T8QIgH1KdjL7IpsGDTmO7GVPYMIuPyiTRYwCoeblOzRIh2TYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ8Fbx0Vqptcarli9SrcAyXx%2FxL0PsdOYOCi9hgwIffKr7oBTbU3uDzu1TLr1bbcbCykybHpU3n5T3fCyJUspv9CNJopotyXCOHtn81LGagwYYxiou9OGYSGAuBaGsJgB8WeD2kNPv%2BiLZ8l0LS7ZpHKvnxGtozVdUL17p9A9wcSC5Vky6w2W7%2BeKYFZBPBiMuFIRRZMM7AJAJ2yEnGOIAfaLFedN9HV7qHz%2FclxUJuabMBKY9gC7dLD4sN252N%2B6kpTf8vcbFWXBVi8r9H20rnZIsadfw5hyHEJpPN95vo5mPvwlHJNMGM1lKlxqo0bJR729cQSpqtLp4Wb%2BrK8uFnW8womJrPlgpKZkTmcKLXIjRnYovcxqTdJYcEUr%2BuKlf8t3DEIsR3rdY6HQcxQ28oqxK7Lmcd33MswRHYLO2sqUeiGvgai957nKBNstpIbbvEjnS3kdc3lLp9rALLTVCyB0GmnWl8hfa%2FeiLQU21W8%2FZeAuC72nHGrWBuWvJ0HnEGp52o3FtNEt9VNBqGPfdS%2B9K4aN2%2FJDG8s2ED4FjcY3H1ERxzFGyl4jPipMEMITYBfZBFdSM98gp7VtRcuxNpSDLyhyyKn5TuVA1EvAVsdvXtsQzS3M4I6V%2BtugACBDcJZ6tqLXiIae7ESMNeEusIGOqUB%2FxVLnbXuVonC%2B9eSJhR4W1rqcBJb8msTlrhjG%2FEN3YVKkzTy4vnMhPO9DdCf1sh3SRWkB7lxnyiWP8HsDvUdNgopUebPaxNZ9abdd%2BCx%2BCtyJJMo5ST8m2oY0EeBIRSB2MBb%2BF%2FZ9JRJ1MCDvlVzdYnfhZ%2BetCuXd694RaH9eKHWe3mWpbQVeCb0DwLTPPOnztLieGyoZTtspr%2BuYzm2OgrIxgCT&X-Amz-Signature=0f09f674a21c06f442ab472e6aa7891380d97146dce77058ab983b211aa6e97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SLKVQP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDsrIcG46bckDIGKe4SCAi4zW%2BhNn3VsS0QdjRhaN3T8QIgH1KdjL7IpsGDTmO7GVPYMIuPyiTRYwCoeblOzRIh2TYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ8Fbx0Vqptcarli9SrcAyXx%2FxL0PsdOYOCi9hgwIffKr7oBTbU3uDzu1TLr1bbcbCykybHpU3n5T3fCyJUspv9CNJopotyXCOHtn81LGagwYYxiou9OGYSGAuBaGsJgB8WeD2kNPv%2BiLZ8l0LS7ZpHKvnxGtozVdUL17p9A9wcSC5Vky6w2W7%2BeKYFZBPBiMuFIRRZMM7AJAJ2yEnGOIAfaLFedN9HV7qHz%2FclxUJuabMBKY9gC7dLD4sN252N%2B6kpTf8vcbFWXBVi8r9H20rnZIsadfw5hyHEJpPN95vo5mPvwlHJNMGM1lKlxqo0bJR729cQSpqtLp4Wb%2BrK8uFnW8womJrPlgpKZkTmcKLXIjRnYovcxqTdJYcEUr%2BuKlf8t3DEIsR3rdY6HQcxQ28oqxK7Lmcd33MswRHYLO2sqUeiGvgai957nKBNstpIbbvEjnS3kdc3lLp9rALLTVCyB0GmnWl8hfa%2FeiLQU21W8%2FZeAuC72nHGrWBuWvJ0HnEGp52o3FtNEt9VNBqGPfdS%2B9K4aN2%2FJDG8s2ED4FjcY3H1ERxzFGyl4jPipMEMITYBfZBFdSM98gp7VtRcuxNpSDLyhyyKn5TuVA1EvAVsdvXtsQzS3M4I6V%2BtugACBDcJZ6tqLXiIae7ESMNeEusIGOqUB%2FxVLnbXuVonC%2B9eSJhR4W1rqcBJb8msTlrhjG%2FEN3YVKkzTy4vnMhPO9DdCf1sh3SRWkB7lxnyiWP8HsDvUdNgopUebPaxNZ9abdd%2BCx%2BCtyJJMo5ST8m2oY0EeBIRSB2MBb%2BF%2FZ9JRJ1MCDvlVzdYnfhZ%2BetCuXd694RaH9eKHWe3mWpbQVeCb0DwLTPPOnztLieGyoZTtspr%2BuYzm2OgrIxgCT&X-Amz-Signature=7751ce5fb1d6d7cc2b828ce3f277bd9e50483ef373070d849ade0a408d7d2283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
