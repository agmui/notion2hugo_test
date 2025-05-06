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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA3OTQX5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BC4bBSUc7UXt5AFV%2BlNoRJFyOWAZIBztvbE573tDkvAiEAxaTdYgPf2hp1J7Y76IdztkFkQWVuqQzFXMlgXY11Vxcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOqb7FiDqB5EflhYByrcA%2B1WC74lUayp%2FpMSEF45KrxAqkfRbWqtIYzTs%2Fc%2F0lRMQycSeZ0ryTHbSMEujB3LKaetL2ILFSHEEYciGtCvYYdVTnZ3%2Bfjm3GGcyKLhtHYzo4XzojBOA8dEVtoGFTbZQxYumNtH%2FtTiKWuvAIPP7pZNZJUeB51ei87zdpF8RBTR2XIoo37yAypOKY8JwZVgdmkqnJwZLoFw5EAKFUHRC2kHKTkCgKW5MTWZtDdDLq%2FvlhynN2TVUFsWmvrHHHTa1wQy3GOZ8osFle%2BSJmAhfcfsdzfWyvVs3kjPoO1NrGEAL%2FD80WvYPm1%2BtACpR8R8sFKkLvwwdNxYx8WhushQbvIRyf2lfVkX3SCbScbkl5UOAVK0WU992L5q%2B1JyGe3ILeWEg5BLPpi%2BV5U9WpgY1PUv3GbQB013COKrZw5BEmxzbZ%2F5cgppupOi%2F5heoVOpD2EdBGSXTDO2nEhtq4UIr4YEpNndNvId1tkKX9%2FzfuNdEETBVAfRPFkPsLPPL20zL5GAg0w9Op64x0Ts33LkngRQgmb89NI%2B9%2FQZijhLnkqJjWkugU0ehs0NU1zqvY6aKeHuvT37OXBgaNx1rIVJ8abpiNgdh6L358MatPL0vUktl9HNV9HnleeJfQBRMO7258AGOqUBXwAhMUcC8gyiA4Jc8YONFE7te5umRPgylwox1Tnx3yKlUTfCI4P5VYh%2Fv6gLDDTY1c68jjsFHBpAgkiTdo5zmlH%2FKYcdrJE3s%2FJp7IaiVxbHX2WReRcaHRo4VAZ8g8TqCspPAOzog%2F%2FRXpc1t12SEBVsTGVXaJgITEA5oKsSALmoY%2BvUYUC6KafFaWld%2Fdwj4vtHK2vqqHTJw0KDwIzjqu3hBfg0&X-Amz-Signature=a66a4c81821730a8cbc4f10e105e3ca9376c875428e9e730600d05c99c9bb593&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA3OTQX5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BC4bBSUc7UXt5AFV%2BlNoRJFyOWAZIBztvbE573tDkvAiEAxaTdYgPf2hp1J7Y76IdztkFkQWVuqQzFXMlgXY11Vxcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOqb7FiDqB5EflhYByrcA%2B1WC74lUayp%2FpMSEF45KrxAqkfRbWqtIYzTs%2Fc%2F0lRMQycSeZ0ryTHbSMEujB3LKaetL2ILFSHEEYciGtCvYYdVTnZ3%2Bfjm3GGcyKLhtHYzo4XzojBOA8dEVtoGFTbZQxYumNtH%2FtTiKWuvAIPP7pZNZJUeB51ei87zdpF8RBTR2XIoo37yAypOKY8JwZVgdmkqnJwZLoFw5EAKFUHRC2kHKTkCgKW5MTWZtDdDLq%2FvlhynN2TVUFsWmvrHHHTa1wQy3GOZ8osFle%2BSJmAhfcfsdzfWyvVs3kjPoO1NrGEAL%2FD80WvYPm1%2BtACpR8R8sFKkLvwwdNxYx8WhushQbvIRyf2lfVkX3SCbScbkl5UOAVK0WU992L5q%2B1JyGe3ILeWEg5BLPpi%2BV5U9WpgY1PUv3GbQB013COKrZw5BEmxzbZ%2F5cgppupOi%2F5heoVOpD2EdBGSXTDO2nEhtq4UIr4YEpNndNvId1tkKX9%2FzfuNdEETBVAfRPFkPsLPPL20zL5GAg0w9Op64x0Ts33LkngRQgmb89NI%2B9%2FQZijhLnkqJjWkugU0ehs0NU1zqvY6aKeHuvT37OXBgaNx1rIVJ8abpiNgdh6L358MatPL0vUktl9HNV9HnleeJfQBRMO7258AGOqUBXwAhMUcC8gyiA4Jc8YONFE7te5umRPgylwox1Tnx3yKlUTfCI4P5VYh%2Fv6gLDDTY1c68jjsFHBpAgkiTdo5zmlH%2FKYcdrJE3s%2FJp7IaiVxbHX2WReRcaHRo4VAZ8g8TqCspPAOzog%2F%2FRXpc1t12SEBVsTGVXaJgITEA5oKsSALmoY%2BvUYUC6KafFaWld%2Fdwj4vtHK2vqqHTJw0KDwIzjqu3hBfg0&X-Amz-Signature=214b3e5f5b6760c923bbebcd9a345041bd4c6f4fd3756b0b201e5e433c902292&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
