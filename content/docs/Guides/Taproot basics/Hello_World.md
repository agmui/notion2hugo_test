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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662E422RA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgC7VdT167cc2xmcnpE7FOkBw4oOuatWgqPFP6DKFC2AiALBuxed3yJXTOWWilaDzxsagU97I2mI6lolTZq6L86USqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngAc%2Fb2U0ElsGFhWKtwD4TRx2kETSYIEEP%2Bzana6jPhC%2BlNmfm1lx16QWUE4cVvl9xH06N3LPYePm6EJKwqcyuwpewtxs47J7xv7IBcXORrDprvUn%2B1L7KIhBzpp5ZFUBb%2FEIqn%2F7k3fnTgavelvga5fFiiPAuCRXRHDL%2Bjj6b%2BWNevmwXK9u7pcGsisWdfEL2%2FOO7ZXn51GRcGx%2FEO9hGGRjqNZ259lZQe6M1zPXAN68K3HP9HERDyZoyU5f5%2BtSwPVTkXzcGa9bWfJu1jylHS56TeJFdqL%2Fgsh%2BqzXV6KAjZWXdW19db3aaRrd1MgNG3PFCpzLPEJ79hXj7WZKSlAKqSc0fupMPbQK0EHPZRTOjIHnyIY0djRn8luNEbijJDchxxvFCRgiZ9fZx%2FB7qsQcJsgJxVqSrK6KmlxNy5NSf411pQe4gM93WuLPR6rXBvJx93%2F6DWIglQcNCwVUP3Z%2Fqvq%2ByNozvrX4gcuv3CPFIhykDJwT86Ze3DtH2jau9bRCFkdJKDVHu1PcexpNQOAyzUZtKApIElp0m1e0wcdkuU7Uc73LsIfIDSXIByyRqZfyBhkbZX8NXmy10GL7QoFNE5phPXpA%2Fl6Uy%2FVNk%2BT%2FtKwbzACou%2F1TKSLz%2B0LHFEPNsBKRtJDjVk0wh8zfvQY6pgGjuz%2FdOMVCYwVOsN8XOunX57qRjqAA9vh6qfSdn7Cv1TlxTq1F%2BJIhmLTVPjHzDyY4%2B35mqVZTwre7jBNFtymOxel99z7XmHdOh8WQrPzAz6nz1aF1dKMMiCrH7fTMaL486Ym6aZzOFkpGmTtkrwILVewTHgLfhL0sCR5eStWmJCyboOIw%2B2EqysrJVTS%2FVu%2BP%2Bu3bcZUG4pgr9P0kOV7OuDhqAurP&X-Amz-Signature=acb3d04def951e25504f4faf34fbd8f5860f4d67b6f58376a5146439fc2b3eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662E422RA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgC7VdT167cc2xmcnpE7FOkBw4oOuatWgqPFP6DKFC2AiALBuxed3yJXTOWWilaDzxsagU97I2mI6lolTZq6L86USqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngAc%2Fb2U0ElsGFhWKtwD4TRx2kETSYIEEP%2Bzana6jPhC%2BlNmfm1lx16QWUE4cVvl9xH06N3LPYePm6EJKwqcyuwpewtxs47J7xv7IBcXORrDprvUn%2B1L7KIhBzpp5ZFUBb%2FEIqn%2F7k3fnTgavelvga5fFiiPAuCRXRHDL%2Bjj6b%2BWNevmwXK9u7pcGsisWdfEL2%2FOO7ZXn51GRcGx%2FEO9hGGRjqNZ259lZQe6M1zPXAN68K3HP9HERDyZoyU5f5%2BtSwPVTkXzcGa9bWfJu1jylHS56TeJFdqL%2Fgsh%2BqzXV6KAjZWXdW19db3aaRrd1MgNG3PFCpzLPEJ79hXj7WZKSlAKqSc0fupMPbQK0EHPZRTOjIHnyIY0djRn8luNEbijJDchxxvFCRgiZ9fZx%2FB7qsQcJsgJxVqSrK6KmlxNy5NSf411pQe4gM93WuLPR6rXBvJx93%2F6DWIglQcNCwVUP3Z%2Fqvq%2ByNozvrX4gcuv3CPFIhykDJwT86Ze3DtH2jau9bRCFkdJKDVHu1PcexpNQOAyzUZtKApIElp0m1e0wcdkuU7Uc73LsIfIDSXIByyRqZfyBhkbZX8NXmy10GL7QoFNE5phPXpA%2Fl6Uy%2FVNk%2BT%2FtKwbzACou%2F1TKSLz%2B0LHFEPNsBKRtJDjVk0wh8zfvQY6pgGjuz%2FdOMVCYwVOsN8XOunX57qRjqAA9vh6qfSdn7Cv1TlxTq1F%2BJIhmLTVPjHzDyY4%2B35mqVZTwre7jBNFtymOxel99z7XmHdOh8WQrPzAz6nz1aF1dKMMiCrH7fTMaL486Ym6aZzOFkpGmTtkrwILVewTHgLfhL0sCR5eStWmJCyboOIw%2B2EqysrJVTS%2FVu%2BP%2Bu3bcZUG4pgr9P0kOV7OuDhqAurP&X-Amz-Signature=914fbfda433241a73982a77026d6545be7b44f929ce431bcd8441c258c7c43ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
