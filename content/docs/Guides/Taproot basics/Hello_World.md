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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVIHDII%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApCP76XNrtC4XDKRwimFPtlpRL569N8zuEjFidpqL3pAiArWfT39VHtBQdOPQvyx4oJYZn80J0Das9j8ksutGRKXir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMDrvGoX6ZNDY0rN6gKtwDSl3RZXmTEzloA06WMl1cU4%2Bat2V%2BHrkzJarEfOD7H%2F%2Bp5fFD2P6kx5VGLTpqDIRBBFLq0uNroxAJE8bAJqTQXmOWmGasFOteJ2K%2FdcDTn7d7wErvV1prx%2Bs3ekwvpJnSNdfdIoMAESvfekUwkGcfGOLcGGv616XKLT4T83fgLofZVRTGYbFNTXFgrvr3gFawIc0TPAwBndif1VpUi3tGETRAy43VqHIxrcsGS9E7%2BR4w8m45dJ%2Byx4yxVr6AtBq4pL4cRIY%2Bg8LZcGmnAVq2QlWqUcEnPoEve8TqWJWerEfFIEeA9nltk8LpFEFos%2BTsVZANIjb0IipW4wOfAaaiKCTn6A0saecRb8Ch9M3tevPNdl%2Bb149cFGCIKcaGgFKk2GluIa8DowlNzhuHqID0viPfug39mMQQND7NBo9Yg4%2B6pmrYmDz77wTEKGxD62EJ4cTLF7R46WjnrOigA2TEZEBmS0SgI7n2b37WcN0t34NJuQTMZMKdWhp8BU3r7syljefwNPaed9TY9B6AVP1qNVsot%2BF%2FkCg0PZZHaCNbNCuP0eE3wkvcr2MEi6adJpqicCFBn6F2bh5miTwC97V%2B3Hyxyx4xNmTzxGAEbE65n%2Bp7Dn%2FOfSJOjmTDXZQwj%2BCiwQY6pgHT9NA2q%2BK2A5RNyDdg8r%2Fe5qnbaH9znYsaZHMXggaxEJQ7tEkiCX8F1yaimNm2yKjF7oorfDPaYCsmWcOw2YGo%2Fb8iCfTHhU6qJkZf6lIWrWyBC%2BP6brImZmwSmJ7jo1DaiV4WZQhh1S7dASnB5Cetl9jTXPQT2CujsCWs4QVaKzbNPl8eVAC6%2BiSMMXigui7eqlpGJhVJYPAk2WuDr7un8KT0JPUa&X-Amz-Signature=94b7700dd4d7cad7b14005a056963d4b5007abed3c07bad85af602df116310d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVIHDII%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApCP76XNrtC4XDKRwimFPtlpRL569N8zuEjFidpqL3pAiArWfT39VHtBQdOPQvyx4oJYZn80J0Das9j8ksutGRKXir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMDrvGoX6ZNDY0rN6gKtwDSl3RZXmTEzloA06WMl1cU4%2Bat2V%2BHrkzJarEfOD7H%2F%2Bp5fFD2P6kx5VGLTpqDIRBBFLq0uNroxAJE8bAJqTQXmOWmGasFOteJ2K%2FdcDTn7d7wErvV1prx%2Bs3ekwvpJnSNdfdIoMAESvfekUwkGcfGOLcGGv616XKLT4T83fgLofZVRTGYbFNTXFgrvr3gFawIc0TPAwBndif1VpUi3tGETRAy43VqHIxrcsGS9E7%2BR4w8m45dJ%2Byx4yxVr6AtBq4pL4cRIY%2Bg8LZcGmnAVq2QlWqUcEnPoEve8TqWJWerEfFIEeA9nltk8LpFEFos%2BTsVZANIjb0IipW4wOfAaaiKCTn6A0saecRb8Ch9M3tevPNdl%2Bb149cFGCIKcaGgFKk2GluIa8DowlNzhuHqID0viPfug39mMQQND7NBo9Yg4%2B6pmrYmDz77wTEKGxD62EJ4cTLF7R46WjnrOigA2TEZEBmS0SgI7n2b37WcN0t34NJuQTMZMKdWhp8BU3r7syljefwNPaed9TY9B6AVP1qNVsot%2BF%2FkCg0PZZHaCNbNCuP0eE3wkvcr2MEi6adJpqicCFBn6F2bh5miTwC97V%2B3Hyxyx4xNmTzxGAEbE65n%2Bp7Dn%2FOfSJOjmTDXZQwj%2BCiwQY6pgHT9NA2q%2BK2A5RNyDdg8r%2Fe5qnbaH9znYsaZHMXggaxEJQ7tEkiCX8F1yaimNm2yKjF7oorfDPaYCsmWcOw2YGo%2Fb8iCfTHhU6qJkZf6lIWrWyBC%2BP6brImZmwSmJ7jo1DaiV4WZQhh1S7dASnB5Cetl9jTXPQT2CujsCWs4QVaKzbNPl8eVAC6%2BiSMMXigui7eqlpGJhVJYPAk2WuDr7un8KT0JPUa&X-Amz-Signature=165f59522592ab66065019927f8710c1685a1792c62601c2080ad2677cf26c76&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
