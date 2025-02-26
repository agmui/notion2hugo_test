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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLMNCJPL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGkcnjL%2FdWQQzI9xcDhjkzV6u8tul4yfz%2F6hxbJ3GWfuAiEA73%2FTO%2B%2FIJMkSERvodNP0zq833kkM%2BU5OPpfD%2BxqTxF0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFoFtMT8GTBH104aGircA7Wml9MvCaNN576e36IaM8C3gGjNfodQ9oagv2jhnyPYpW2SQ9V2cGLptZeYVJKSfWjjhqVNNoAeXPCMNDBKUPDtvwSrU07zBtWeGCKkuVyz%2FogXztHD1jKm59QnCobpxphn6wujyC89M%2F1X44P4jaMcp9PVPb5LHNueqNhknPtkH%2FJoXGctrykOzLVZefrB0BYFa%2FDsJZrpBeqVz5JvqqW1lE3kHVaopKSr%2BW%2BAhu2yY%2Fohzu9danBqMMtEpnDJJ3uPVaU1vP8JoM2PwQnNOEj%2B5DR1GQSzokkRZ0gpilpl0Y%2FvMu3q5hMuxMVAWRd%2Flh9tXmln6yGgYJFpi%2FzKxRU2CbMNJCmm2h9al64T2lCzWvHwnRA%2FcMtEWgXSffPWKe0XIIUBau034PzuUv5BF3UJBCLCWz8stooGr8Zt4ekkQNCqvO%2FLuDxxNvsF5cNQSeRJrgaJJ5KuLh9RiKb8yZMYTGmXFLAWM1bmjOXz5pxvNhrVdMJVzN%2BS%2B%2BIPb5%2BP2oatCse7OKGmNoTz3LRKHLZZ%2BOJ%2BhHrRtV1xcINXRThN7oUD4X3dYVbK6YSixMCWiCcIY9Snfi3zK1rHPXmKcxnJCFebCqgSuoaRJvE%2BxXqGXBEVlHBfgUdaBRZNMNKo%2Fb0GOqUBbNDctLNQ9%2BHb1YAnm4%2FXmQTcdMuF%2Fozv1O9DXh9Fngm7OZ059bg4QOpeneBqvwHvnLGxDvzUYYFJnHmE6pEDKtB0wstRhv2uF4ieCUhHeSmiyU16JdaQ5e2iet60vFChVhLhLjKMI4ykCbMBIbLJGiQqviKwy4%2FNOvmbrVdG5DEP0LAN4VjWtDIvvi8dHt53QP%2BV01clklaNmn%2Fx8AMhZN%2BIPZ6Y&X-Amz-Signature=c08c5b975057e11dc3d5748b989041abb73c42810195b8a50f4dbbb6e2fd02e5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLMNCJPL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGkcnjL%2FdWQQzI9xcDhjkzV6u8tul4yfz%2F6hxbJ3GWfuAiEA73%2FTO%2B%2FIJMkSERvodNP0zq833kkM%2BU5OPpfD%2BxqTxF0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFoFtMT8GTBH104aGircA7Wml9MvCaNN576e36IaM8C3gGjNfodQ9oagv2jhnyPYpW2SQ9V2cGLptZeYVJKSfWjjhqVNNoAeXPCMNDBKUPDtvwSrU07zBtWeGCKkuVyz%2FogXztHD1jKm59QnCobpxphn6wujyC89M%2F1X44P4jaMcp9PVPb5LHNueqNhknPtkH%2FJoXGctrykOzLVZefrB0BYFa%2FDsJZrpBeqVz5JvqqW1lE3kHVaopKSr%2BW%2BAhu2yY%2Fohzu9danBqMMtEpnDJJ3uPVaU1vP8JoM2PwQnNOEj%2B5DR1GQSzokkRZ0gpilpl0Y%2FvMu3q5hMuxMVAWRd%2Flh9tXmln6yGgYJFpi%2FzKxRU2CbMNJCmm2h9al64T2lCzWvHwnRA%2FcMtEWgXSffPWKe0XIIUBau034PzuUv5BF3UJBCLCWz8stooGr8Zt4ekkQNCqvO%2FLuDxxNvsF5cNQSeRJrgaJJ5KuLh9RiKb8yZMYTGmXFLAWM1bmjOXz5pxvNhrVdMJVzN%2BS%2B%2BIPb5%2BP2oatCse7OKGmNoTz3LRKHLZZ%2BOJ%2BhHrRtV1xcINXRThN7oUD4X3dYVbK6YSixMCWiCcIY9Snfi3zK1rHPXmKcxnJCFebCqgSuoaRJvE%2BxXqGXBEVlHBfgUdaBRZNMNKo%2Fb0GOqUBbNDctLNQ9%2BHb1YAnm4%2FXmQTcdMuF%2Fozv1O9DXh9Fngm7OZ059bg4QOpeneBqvwHvnLGxDvzUYYFJnHmE6pEDKtB0wstRhv2uF4ieCUhHeSmiyU16JdaQ5e2iet60vFChVhLhLjKMI4ykCbMBIbLJGiQqviKwy4%2FNOvmbrVdG5DEP0LAN4VjWtDIvvi8dHt53QP%2BV01clklaNmn%2Fx8AMhZN%2BIPZ6Y&X-Amz-Signature=6dd52035f023c9d6bc9753f7710216896f2b481a276930f9a9a8adbec08e5f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
