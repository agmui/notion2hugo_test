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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3DFABZ7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDrvhqXo3UyK2WGOrAhCLJ3d3xEJtx2anCBAGQ72ZxTYgIgOIySkf63cDvgcgblrXctdkTETSwWiDiUtA%2BVlStu4C8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGNFdd9YIAxIJRO4DyrcA0kqMG1oCFqaobjpJUTcqNELor9TVpfpOw67hxphhgVndQuuPet3FtIbzac7A88vUxvGOwsebJU096kBdOgTF6ibKyGrsL7XEk9YRtWyxFFc3O1e9qfBqIs3sq8bx%2BNLJjw0ykVjcvFvsg7YLoEFwSwLoDMM5bkQB7nor0U7xt0z7FIWnagdkJQGjMPw4Ctfhzxqhrg%2FTOqVya8POUx7BQCiypqHIyEdQD0wM1hcp1munNqNO5vBt3pN4AXQ5xz0l8hi5Qm36sjPxuBtbSK6Jenn43UEqReqSlxalOsEApQ2rjDP1ScqNhUbXJkojDXjP15GSo%2FcsXCD9qCpeaRKP1R9kifcnytG2r5HM81wnosxN%2ByWobp4Ny6kkSVrGYkA5irshfW3TKbyFAnTZhu93QKuUVQk%2FZDTYYz%2F3xi8CIZ0j9%2FBTNQVOW9%2FBzbjioeTSq4lbQkzvbmOr5QxsAxc9W3%2FP7dVon9o71cmzcQ5SJSE8FGTI%2Be5fGoKMui8bO02lGqltYdybdyhX3E6z3841Yev28SiMuWT1rwTla6SCsr92uJZf9UynBOK5uSk%2B5CD1bA000IvoPSCi9UVLrnHC7ayXgMNzdYkyEcbhiarFS7%2BJA7AUd%2B9%2FCzKVMwOMMrYlMQGOqUBEBqDdoiaB6dnUfkBefOYfg7%2Bwj3QrYWNDE%2FrXoXvrXuknXzMCl%2Bz2MultSZ5EK49D%2BhH%2FxbARIJhrMrzzgEqC3sYXpeJRW%2BAzoBpxu%2BCZj5IIo3aQBb8SgmWBcTH%2F5DU8ocyEQU6aBurqWFVnLCG9z5JV6zCL9mfcvwtADIToJzLF3tCU%2Bc2ty6UubrXwNnD10hBJZW8su%2Bsy6BT84zsUY9gCVtK&X-Amz-Signature=4cf41187b5ad1a16c7cfa04f767f702a096ded6c785c9f4633cdba61c6f063e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3DFABZ7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDrvhqXo3UyK2WGOrAhCLJ3d3xEJtx2anCBAGQ72ZxTYgIgOIySkf63cDvgcgblrXctdkTETSwWiDiUtA%2BVlStu4C8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGNFdd9YIAxIJRO4DyrcA0kqMG1oCFqaobjpJUTcqNELor9TVpfpOw67hxphhgVndQuuPet3FtIbzac7A88vUxvGOwsebJU096kBdOgTF6ibKyGrsL7XEk9YRtWyxFFc3O1e9qfBqIs3sq8bx%2BNLJjw0ykVjcvFvsg7YLoEFwSwLoDMM5bkQB7nor0U7xt0z7FIWnagdkJQGjMPw4Ctfhzxqhrg%2FTOqVya8POUx7BQCiypqHIyEdQD0wM1hcp1munNqNO5vBt3pN4AXQ5xz0l8hi5Qm36sjPxuBtbSK6Jenn43UEqReqSlxalOsEApQ2rjDP1ScqNhUbXJkojDXjP15GSo%2FcsXCD9qCpeaRKP1R9kifcnytG2r5HM81wnosxN%2ByWobp4Ny6kkSVrGYkA5irshfW3TKbyFAnTZhu93QKuUVQk%2FZDTYYz%2F3xi8CIZ0j9%2FBTNQVOW9%2FBzbjioeTSq4lbQkzvbmOr5QxsAxc9W3%2FP7dVon9o71cmzcQ5SJSE8FGTI%2Be5fGoKMui8bO02lGqltYdybdyhX3E6z3841Yev28SiMuWT1rwTla6SCsr92uJZf9UynBOK5uSk%2B5CD1bA000IvoPSCi9UVLrnHC7ayXgMNzdYkyEcbhiarFS7%2BJA7AUd%2B9%2FCzKVMwOMMrYlMQGOqUBEBqDdoiaB6dnUfkBefOYfg7%2Bwj3QrYWNDE%2FrXoXvrXuknXzMCl%2Bz2MultSZ5EK49D%2BhH%2FxbARIJhrMrzzgEqC3sYXpeJRW%2BAzoBpxu%2BCZj5IIo3aQBb8SgmWBcTH%2F5DU8ocyEQU6aBurqWFVnLCG9z5JV6zCL9mfcvwtADIToJzLF3tCU%2Bc2ty6UubrXwNnD10hBJZW8su%2Bsy6BT84zsUY9gCVtK&X-Amz-Signature=5771055a2d582c8af15a59136d42b9ad50bdec9049b5341177247eaf96b0bfe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
