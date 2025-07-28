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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO76G4P4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA%2FgTFPUErXeOYFqmYGxNtngLvLd012PT9XzkQ%2FhCuy0AiBn6qFcRLsnnovl7WmbIzgyIcPshPVZP%2Fz3X2ehW7EARSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhviFZv2x9bt%2FmNBKtwDqjJMd2CkSJJLfOiEz2ySRVx7D4FCk4eo6YQnEuGEzhXUAshLHjpFEinDbrz3CVNDGCyd8nzwkjrpTL%2B5g4Wc1bnNhDxHyW3%2FTZk1BHengxS3DGjsBylIopxK1%2B3qK887RA5uh4AKs0R5J64J%2FEqD1KBJe8zzi6zbgQfHuKnrlmy0kOXsSEQ%2Fr8oIlq%2BCnls5T4c%2BrOM9Xhe%2BbIMHU7E2WjuuVK04pTVg36YuRg5oz58ZJ5PMB2PAwJq%2BJoy%2FisYyLISUHPwyGx9FgXM2Vsl2dFxV9nlEEOtOORFeIXMhZB%2BWUeFHW3DkjSZOcgq6n83%2Bj7poj4NKQjPiEL0v6oeUIq7BfcFHp7EyhJcFtTJ691M%2Fw2jk6tVo%2BAZfdVP%2FqiIDGWAuhMMR2bW6EAj24i6zSZ8thIaL0%2FxuRRcXRtFcVKOj0mAwPgF5YR8%2F6iP86AfGrrMSiUxvhh2aX3SzcyQJAcc1kWJBM6lSiOPNK2jObMQsR%2F31VUqMq0ZGl7he2Tk7FYO5QDHB%2FnxCVUva5K%2BmmbRu%2Fw194Xlr6I9m%2Fnyr%2B%2Bl20Z1EdPZM2sV%2B8gw5xZFMW8ZJRDiScDAhmoaI5xRoTt87Bx5QcYMg8ICdAZIEuLjAmkQxxGjqqCEwpOIw%2B7OdxAY6pgE6aLDrUSMsLOUpUq2BwRf4KihMrpL13uUxwB3%2BVfkMRMuyf1TxQHUBYrNzTG4MOxYK7avjxY3vKq6XHOLZ4j3NpB%2BMCWeO5qWKIHkBZlsWGXbtHHWYmmjYJle25%2BDhnrQJ78jKPK%2BvgglgHzIkv%2BWl1VZe88dEveD3AaVDmTvs0%2BUXewYNfk8SBmPCGQIsbkG93rmn%2BZmg2Qzo9%2FUabyW5Sgegkf4a&X-Amz-Signature=8bb3604df3735aaf25351918ab18f4c395b8d8c062b7ea6654285906a94ebdfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO76G4P4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA%2FgTFPUErXeOYFqmYGxNtngLvLd012PT9XzkQ%2FhCuy0AiBn6qFcRLsnnovl7WmbIzgyIcPshPVZP%2Fz3X2ehW7EARSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhviFZv2x9bt%2FmNBKtwDqjJMd2CkSJJLfOiEz2ySRVx7D4FCk4eo6YQnEuGEzhXUAshLHjpFEinDbrz3CVNDGCyd8nzwkjrpTL%2B5g4Wc1bnNhDxHyW3%2FTZk1BHengxS3DGjsBylIopxK1%2B3qK887RA5uh4AKs0R5J64J%2FEqD1KBJe8zzi6zbgQfHuKnrlmy0kOXsSEQ%2Fr8oIlq%2BCnls5T4c%2BrOM9Xhe%2BbIMHU7E2WjuuVK04pTVg36YuRg5oz58ZJ5PMB2PAwJq%2BJoy%2FisYyLISUHPwyGx9FgXM2Vsl2dFxV9nlEEOtOORFeIXMhZB%2BWUeFHW3DkjSZOcgq6n83%2Bj7poj4NKQjPiEL0v6oeUIq7BfcFHp7EyhJcFtTJ691M%2Fw2jk6tVo%2BAZfdVP%2FqiIDGWAuhMMR2bW6EAj24i6zSZ8thIaL0%2FxuRRcXRtFcVKOj0mAwPgF5YR8%2F6iP86AfGrrMSiUxvhh2aX3SzcyQJAcc1kWJBM6lSiOPNK2jObMQsR%2F31VUqMq0ZGl7he2Tk7FYO5QDHB%2FnxCVUva5K%2BmmbRu%2Fw194Xlr6I9m%2Fnyr%2B%2Bl20Z1EdPZM2sV%2B8gw5xZFMW8ZJRDiScDAhmoaI5xRoTt87Bx5QcYMg8ICdAZIEuLjAmkQxxGjqqCEwpOIw%2B7OdxAY6pgE6aLDrUSMsLOUpUq2BwRf4KihMrpL13uUxwB3%2BVfkMRMuyf1TxQHUBYrNzTG4MOxYK7avjxY3vKq6XHOLZ4j3NpB%2BMCWeO5qWKIHkBZlsWGXbtHHWYmmjYJle25%2BDhnrQJ78jKPK%2BvgglgHzIkv%2BWl1VZe88dEveD3AaVDmTvs0%2BUXewYNfk8SBmPCGQIsbkG93rmn%2BZmg2Qzo9%2FUabyW5Sgegkf4a&X-Amz-Signature=1fc5a3fe7e15303b8c13cb881ad553ad281e814b971162dad6d459a5c6d6df10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
