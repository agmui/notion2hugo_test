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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZSTGISE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCmRc3rYajGH03psp4B2xWT4AnS6cEJFlFWrC%2BorHz2xwIgLcihX1VGp6jFtVf56nqko1GcfDBGME93XymCWEUdjQkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK7wxaKmv%2BOSYLFZQircA86c%2BYD6zr0idnMOlAeXvYVsoB1x4JwWHBOAcE0N9D2RBpq%2FARSUY9EGuarTNIAyn%2F4eX4z4%2FmbUWodHuFmYswP%2FgopNaRCS8Dlb89hx0CICgTmIG99yYXYMtgE6H4Sa6I56NqmrJgpKyo7zbO%2FaYaO6HASKkgefTDMkxTK%2FKk3qk1NsTF7b78W5BU2sDFBW9x4w44aUu%2FdLyRIDB%2BaTHRafEY1yg0YZx4yhzKtxpaKmoqnMX4XKfMQtvrk%2BaqOBWPq55TTw2MYOup3sVDRudA%2Fd2uGoQxWI3ePJKrOqdOJh9XTEojTGzajIimiq52V1w49yNzVMfdaOS7cGerxsk9FMFAhGx15b1a7EQJDjrCoYOOfNdle77KexFO34v4Uhs3jjniCDdB6DnnunSDxeUEA7H3ah6fZyB2QBS0ewkg1niZIsdqWffNS4Pi9RKgC6asRsvXdEW9ly%2FqmVK5bV2tlh%2Bb%2FYDePbVby2NbUHhIU5iKtslJZ0TEh3EU%2BydSko9UK%2Fjmn3F4JT9eVz%2B6%2BxYee6xzWxdultUCSWXfTEgMo1GboyxfB%2B4C0HYVVPB9a6YgVUsSGXOa3i2ClVEkbY6dC%2B8esY8fNAvfrGXdlffCaKET8%2B7NbGsjF4AGEGMIWG%2FcEGOqUBMqlQY2NYciy5PDULdyTl1n%2BjPR5pJzUuG3GjgQDqef6DkTguPDhhd%2F21TywfoXk2SwRwnMW0wUsXRuKmz%2BzrrBI3Qez4o1rVHJBRb42%2B9cVBTBIBAEAp7QFpApbz5ABAP9fIAJ8PE3Qe9aY2mUI%2FxAAnAFOPsuZu0hiIoarDcELFs2%2BocwqZzqRxEoe38GrNV7QCkqBJDB4%2F4qPrli6jGqqvXMXO&X-Amz-Signature=c58b543d2e89fdacac58a78c969c6f6355701eeca33408391563176978ff9401&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZSTGISE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCmRc3rYajGH03psp4B2xWT4AnS6cEJFlFWrC%2BorHz2xwIgLcihX1VGp6jFtVf56nqko1GcfDBGME93XymCWEUdjQkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK7wxaKmv%2BOSYLFZQircA86c%2BYD6zr0idnMOlAeXvYVsoB1x4JwWHBOAcE0N9D2RBpq%2FARSUY9EGuarTNIAyn%2F4eX4z4%2FmbUWodHuFmYswP%2FgopNaRCS8Dlb89hx0CICgTmIG99yYXYMtgE6H4Sa6I56NqmrJgpKyo7zbO%2FaYaO6HASKkgefTDMkxTK%2FKk3qk1NsTF7b78W5BU2sDFBW9x4w44aUu%2FdLyRIDB%2BaTHRafEY1yg0YZx4yhzKtxpaKmoqnMX4XKfMQtvrk%2BaqOBWPq55TTw2MYOup3sVDRudA%2Fd2uGoQxWI3ePJKrOqdOJh9XTEojTGzajIimiq52V1w49yNzVMfdaOS7cGerxsk9FMFAhGx15b1a7EQJDjrCoYOOfNdle77KexFO34v4Uhs3jjniCDdB6DnnunSDxeUEA7H3ah6fZyB2QBS0ewkg1niZIsdqWffNS4Pi9RKgC6asRsvXdEW9ly%2FqmVK5bV2tlh%2Bb%2FYDePbVby2NbUHhIU5iKtslJZ0TEh3EU%2BydSko9UK%2Fjmn3F4JT9eVz%2B6%2BxYee6xzWxdultUCSWXfTEgMo1GboyxfB%2B4C0HYVVPB9a6YgVUsSGXOa3i2ClVEkbY6dC%2B8esY8fNAvfrGXdlffCaKET8%2B7NbGsjF4AGEGMIWG%2FcEGOqUBMqlQY2NYciy5PDULdyTl1n%2BjPR5pJzUuG3GjgQDqef6DkTguPDhhd%2F21TywfoXk2SwRwnMW0wUsXRuKmz%2BzrrBI3Qez4o1rVHJBRb42%2B9cVBTBIBAEAp7QFpApbz5ABAP9fIAJ8PE3Qe9aY2mUI%2FxAAnAFOPsuZu0hiIoarDcELFs2%2BocwqZzqRxEoe38GrNV7QCkqBJDB4%2F4qPrli6jGqqvXMXO&X-Amz-Signature=d16e3cba5c0189f51f80d4d7b47164c5ae128bce9dc4efc31c6167eee35ee659&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
