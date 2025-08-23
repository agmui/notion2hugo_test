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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BE27D7B%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ3o5NYKvDBA2jtVDBaNCmlNaKIgiiqAtV0NY6uDdRaAiAOp1oKW8Zau0WwO0F91mtJzJJ82QtF9hwocxfGc68lKir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMl7sUxvi4OBL8OCLaKtwDPTDMs7S9tenNrhxdb0b%2BuqOTqzEabgtvJbV2wCr%2FytYzF2ofvdt3owYP2kEok0mE5jADR8OClixMJtG4ebXndoACO8qgVwDHFTcaB1a5oW6LdHl2sZNz8063er1soZlYwkyf8Gtj%2BZ3y1Pokys%2BBeT%2BMG0IOHrDMGyjCNBTD0IRXWIY0X87xcMdkHnhWjlu0AKMNhqQhpx20hlrdW6tSHvBlikiefIxYwtBVjRNGtnc27j1r5s%2FyMzlyre4g3djgRE9BWQsjT6FDhO37lhUc7geaeiU726FMaPvhhwVeZIZ8eonMLpOpt84sa%2Fa84bEqt7EFDeRtmTcO7QGxI2m063D3mXDMmTxAjw3w78CmfhTbWvGaVHqfv8S%2BqY4vEzYJoHrvvxxPk1vePAUHIUsEg5H%2BWnPhoWYnqtcGxxQF%2F%2B8%2BuIucXZeLhTS5NqH0mdytCdxAVeJ5D5QCsmmIY3bt3LVJ3AeIUtQS996iN0ipfm78aTe6J9xfWA1Dmd5eene1Rl2Y4RRMEB7AuSY5a1w%2FnMeeDrjsPxSdDfh0DuNdObvy3YZpZVvqtjudXdTKQZ5ykHKyPwOkkeEXPJEJYRAIFHt1krqLadkz3dhudvi%2FE%2BC4I%2FsWB5yNFoyPQAow1Y6kxQY6pgHYz1KFkS0x2ah9Ur1MnJkK5Gr4IC4JddOsm77Y1EJ97HBfinspuxe4b0HEGMm75IEiYaWqjRA3ZkVLUJ2BuBqImwVmnbou9wqzvy3RJ%2BPZFx3rdWbHEFSwnlsBwtbIX4owau%2F%2B6eyDKWemhYYshax%2BH6jFu2svDHYWq%2Bx7mJnietSi5GxoPiiyr4sOHeoZ%2FpY8dAhaT4knQ29Y102L8EuJBCJAi3D3&X-Amz-Signature=52db1ac5654d7363f1d96de24beb1ada1b9cf16a492f904b694ebb51bba4889e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BE27D7B%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ3o5NYKvDBA2jtVDBaNCmlNaKIgiiqAtV0NY6uDdRaAiAOp1oKW8Zau0WwO0F91mtJzJJ82QtF9hwocxfGc68lKir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMl7sUxvi4OBL8OCLaKtwDPTDMs7S9tenNrhxdb0b%2BuqOTqzEabgtvJbV2wCr%2FytYzF2ofvdt3owYP2kEok0mE5jADR8OClixMJtG4ebXndoACO8qgVwDHFTcaB1a5oW6LdHl2sZNz8063er1soZlYwkyf8Gtj%2BZ3y1Pokys%2BBeT%2BMG0IOHrDMGyjCNBTD0IRXWIY0X87xcMdkHnhWjlu0AKMNhqQhpx20hlrdW6tSHvBlikiefIxYwtBVjRNGtnc27j1r5s%2FyMzlyre4g3djgRE9BWQsjT6FDhO37lhUc7geaeiU726FMaPvhhwVeZIZ8eonMLpOpt84sa%2Fa84bEqt7EFDeRtmTcO7QGxI2m063D3mXDMmTxAjw3w78CmfhTbWvGaVHqfv8S%2BqY4vEzYJoHrvvxxPk1vePAUHIUsEg5H%2BWnPhoWYnqtcGxxQF%2F%2B8%2BuIucXZeLhTS5NqH0mdytCdxAVeJ5D5QCsmmIY3bt3LVJ3AeIUtQS996iN0ipfm78aTe6J9xfWA1Dmd5eene1Rl2Y4RRMEB7AuSY5a1w%2FnMeeDrjsPxSdDfh0DuNdObvy3YZpZVvqtjudXdTKQZ5ykHKyPwOkkeEXPJEJYRAIFHt1krqLadkz3dhudvi%2FE%2BC4I%2FsWB5yNFoyPQAow1Y6kxQY6pgHYz1KFkS0x2ah9Ur1MnJkK5Gr4IC4JddOsm77Y1EJ97HBfinspuxe4b0HEGMm75IEiYaWqjRA3ZkVLUJ2BuBqImwVmnbou9wqzvy3RJ%2BPZFx3rdWbHEFSwnlsBwtbIX4owau%2F%2B6eyDKWemhYYshax%2BH6jFu2svDHYWq%2Bx7mJnietSi5GxoPiiyr4sOHeoZ%2FpY8dAhaT4knQ29Y102L8EuJBCJAi3D3&X-Amz-Signature=ddd282e41eb059ccf38a3e506f661653117dc601ed343c0b3b9221c549c82e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
