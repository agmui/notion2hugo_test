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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI7JSGRI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHgYmMkpIUenDT5i9%2BEtNmQMav76fBWlHdjZIsSFamvAAiEAyTnLf%2FW1yi%2F6ViFQrDe0YDRy5QvHEZEyK10vvMw1tf4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLy2HfunW6K51rIm%2BircA2aLhlIzcAcolV62j3dCOIylzi4TpgC%2FnuRDr41By4u3uh1dqkGAxVxxVnSYX1u4WoM%2BbN%2FhvcAPCiQqrr38RFxR%2BeYPqAtGmr98c3k29HRE8iz%2BUT0HtVQVH44wMWw56GcBRx7JtQnQUAwHxPMb5i3jyvUSBb23N8rnZtbnVUu3q%2BxvPBaH7sNHyLeehPwTD%2FG%2Bt6GnF5KmWxqrniYNJOBmro0PQm9k%2FCEWc1WvD3QF8OypMbh8riTy3A6nZhzjn%2BPo2VAsjxBt29XMyGS8YFG3BYjA790M52GnZ3bjnJniTlPGmtDOUCOFmvs%2FeHqg40GeXk5rhUykDHJdsLk%2BHN2B5fXABmRCsYKyGSKUZxwauK6t3j4ggvXO2UNLUgMQAHPK64VNDl4BeRRTVK85pE6bDcxwu6G4sJdwirWR0yuZDzqOd%2Bmjwzy%2FEMXDGpi1dwZn3iiP8aI6o80DyllZ%2FpafXwXH6SO%2FMzRkRcIMcfdbmuF36fqi%2FYjLaoK5s5e00SZUuy53ewNZ1YDrCuSw7JYUt%2FVCXrToGVqodw1YdkPyZEH563u5qcYdRTxffLUzkgehpXIgLtZIUPLipYX0VY%2ByeOsEHMahDFGS6iNvUeG7%2F7lojQJ8N5cGlFl%2FMNiTtcIGOqUBK%2FaeCxRqZwf%2Bh7bTxfODiZdgAIYXq53L0xu2pAZdDy4J5v8m0qzR66T%2FC%2BLL4Sq99HjxWMoBZF%2BwCTwEjYPlJk66AlHadaM7Cb0%2BhkG%2F3mTY4lNtVUjssM5aI7qKjlSygD66x1BUNC9GnWZ2w3j%2FmwpzMbRg%2BtGBk88OpZpJEcLpL1q7MEetv7aeCgsdb6T82upo4riefQJsHElwq8U5sQo%2BAGM5&X-Amz-Signature=21105ec31383c55df8551ac3487354ccb407071fc449c063a39494f087ee0e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI7JSGRI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHgYmMkpIUenDT5i9%2BEtNmQMav76fBWlHdjZIsSFamvAAiEAyTnLf%2FW1yi%2F6ViFQrDe0YDRy5QvHEZEyK10vvMw1tf4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLy2HfunW6K51rIm%2BircA2aLhlIzcAcolV62j3dCOIylzi4TpgC%2FnuRDr41By4u3uh1dqkGAxVxxVnSYX1u4WoM%2BbN%2FhvcAPCiQqrr38RFxR%2BeYPqAtGmr98c3k29HRE8iz%2BUT0HtVQVH44wMWw56GcBRx7JtQnQUAwHxPMb5i3jyvUSBb23N8rnZtbnVUu3q%2BxvPBaH7sNHyLeehPwTD%2FG%2Bt6GnF5KmWxqrniYNJOBmro0PQm9k%2FCEWc1WvD3QF8OypMbh8riTy3A6nZhzjn%2BPo2VAsjxBt29XMyGS8YFG3BYjA790M52GnZ3bjnJniTlPGmtDOUCOFmvs%2FeHqg40GeXk5rhUykDHJdsLk%2BHN2B5fXABmRCsYKyGSKUZxwauK6t3j4ggvXO2UNLUgMQAHPK64VNDl4BeRRTVK85pE6bDcxwu6G4sJdwirWR0yuZDzqOd%2Bmjwzy%2FEMXDGpi1dwZn3iiP8aI6o80DyllZ%2FpafXwXH6SO%2FMzRkRcIMcfdbmuF36fqi%2FYjLaoK5s5e00SZUuy53ewNZ1YDrCuSw7JYUt%2FVCXrToGVqodw1YdkPyZEH563u5qcYdRTxffLUzkgehpXIgLtZIUPLipYX0VY%2ByeOsEHMahDFGS6iNvUeG7%2F7lojQJ8N5cGlFl%2FMNiTtcIGOqUBK%2FaeCxRqZwf%2Bh7bTxfODiZdgAIYXq53L0xu2pAZdDy4J5v8m0qzR66T%2FC%2BLL4Sq99HjxWMoBZF%2BwCTwEjYPlJk66AlHadaM7Cb0%2BhkG%2F3mTY4lNtVUjssM5aI7qKjlSygD66x1BUNC9GnWZ2w3j%2FmwpzMbRg%2BtGBk88OpZpJEcLpL1q7MEetv7aeCgsdb6T82upo4riefQJsHElwq8U5sQo%2BAGM5&X-Amz-Signature=d42e41e9da7ebeded7ecadbf6f134566e75b30f434798fdf83525167a4c027ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
