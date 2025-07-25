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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ORTBJB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBmfxPe1wMFceXAX8e6iapSbMu40QTxN%2BBWIcQll7m9XAiEAvQYpmge1JyLh9ifeNJS0rfe7DrTmqR%2FZaSn1R0dYF%2FMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMacgiZmBQ19lJqQ8SrcA%2Fq7C9Zz26fGCbxSSmz2kYQtjTplP%2BOt9ArJ9DHeVNUzKtdXwLgh%2BMNQj92qBroNWaGqtLd0Sh9Hwu0N9padkAaYrTuVmjdVTcf8%2F9gD%2FHSD1Zv3gF9r3BG%2FJ1hO8aCILcoONvwVx6mgQiW7Ljl%2FQSEmiOkMlBGtYtemYhApNb13qb5mc6ZLeOPoH73St5mL3TWPhI6SZ87nh6S9UcuDlb1SmNTy0vdP92fVWw9bpRpJe7BIbrn45YqDiYo6K4bT2xtqQD519%2FipD1I75HDmFY5PrQh9rJfx%2B2GARuAgKmL14UFyLBQzRPH9VxRmWQQ4UhzhIm3lMpAzq8mYZyPRVAsHsRiQgEuobifhF3cMk7tlv%2FH5hCrEosUookTDrzHB1S0TybRChgfg4EtIUvEJxzTz49YcZLinEWheGx5X0pfTYWhOtMc8TcRO%2BsRbkW%2Fd7Lswu30ID%2F2bMfEeo8YuzsIxQ4Wb%2B%2BxtiKLWxPGZ7BJG1mYA171qIVrXT4D9%2BDxOmWxqnMm3xjO3pK5B5D98h3DuYuaj%2BsVVOKZ%2FKQFD%2F6onk8KNJWPoN9P77XKQ41l2l529lsshFMMdomsSgWrxIzIsazujyGl8QI6%2FrVj2zNK8GaObMWa2kGs%2BZTDTMOKMjcQGOqUB2%2FqWTfCQW%2BSByKGC2ioYh4mUC4yTn2vPnhL7taPyp4YotiDiYX2gkr6LydfE%2BBMuMtnh%2FjckgmWR4LoDFvNDWj5ALWHqwzzSbyhOa28Hag4mUMdGaIP4ROjX%2BvvEPm91G8iJwPPgL%2FiO2%2FByr3oe93%2BZVrzch5Yk%2FdecSbuvu7vy68CAM4d%2BpGcvDKNo1Z35q4%2BEbWfpOVMLZGpdUHuVqAM5LXqB&X-Amz-Signature=c274bcdaa9d404045779f6d5c01c39077e783145ea91d48c5ebde41975685fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ORTBJB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBmfxPe1wMFceXAX8e6iapSbMu40QTxN%2BBWIcQll7m9XAiEAvQYpmge1JyLh9ifeNJS0rfe7DrTmqR%2FZaSn1R0dYF%2FMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMacgiZmBQ19lJqQ8SrcA%2Fq7C9Zz26fGCbxSSmz2kYQtjTplP%2BOt9ArJ9DHeVNUzKtdXwLgh%2BMNQj92qBroNWaGqtLd0Sh9Hwu0N9padkAaYrTuVmjdVTcf8%2F9gD%2FHSD1Zv3gF9r3BG%2FJ1hO8aCILcoONvwVx6mgQiW7Ljl%2FQSEmiOkMlBGtYtemYhApNb13qb5mc6ZLeOPoH73St5mL3TWPhI6SZ87nh6S9UcuDlb1SmNTy0vdP92fVWw9bpRpJe7BIbrn45YqDiYo6K4bT2xtqQD519%2FipD1I75HDmFY5PrQh9rJfx%2B2GARuAgKmL14UFyLBQzRPH9VxRmWQQ4UhzhIm3lMpAzq8mYZyPRVAsHsRiQgEuobifhF3cMk7tlv%2FH5hCrEosUookTDrzHB1S0TybRChgfg4EtIUvEJxzTz49YcZLinEWheGx5X0pfTYWhOtMc8TcRO%2BsRbkW%2Fd7Lswu30ID%2F2bMfEeo8YuzsIxQ4Wb%2B%2BxtiKLWxPGZ7BJG1mYA171qIVrXT4D9%2BDxOmWxqnMm3xjO3pK5B5D98h3DuYuaj%2BsVVOKZ%2FKQFD%2F6onk8KNJWPoN9P77XKQ41l2l529lsshFMMdomsSgWrxIzIsazujyGl8QI6%2FrVj2zNK8GaObMWa2kGs%2BZTDTMOKMjcQGOqUB2%2FqWTfCQW%2BSByKGC2ioYh4mUC4yTn2vPnhL7taPyp4YotiDiYX2gkr6LydfE%2BBMuMtnh%2FjckgmWR4LoDFvNDWj5ALWHqwzzSbyhOa28Hag4mUMdGaIP4ROjX%2BvvEPm91G8iJwPPgL%2FiO2%2FByr3oe93%2BZVrzch5Yk%2FdecSbuvu7vy68CAM4d%2BpGcvDKNo1Z35q4%2BEbWfpOVMLZGpdUHuVqAM5LXqB&X-Amz-Signature=a22b90252d0112f68a5e3001a61773d0cfc1ff1c5464d88cdf98a0457028427b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
