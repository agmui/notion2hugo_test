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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTYE3AI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCJg%2BP%2BV2A4lbEgz4Uvsxg3YvqJTfEqW5IqpER4DHrwgwIhANliqxKbgD%2B9iKbOg81SGGLtNlmgqxWUQqj3cIxZ8eirKv8DCG8QABoMNjM3NDIzMTgzODA1Igwsr8ZGrxRtbuIhxAoq3ANYkAJqVfEgQ0mxSvjpW1WddyKRTBoP%2Fn1VFJNCFbPWr4%2FFUUv8F6c8Z7yu4O8aDwIJaD3OP0D1235XiEnMGtfMYiV%2FfQzQFbxSdISP14j1pI3hUumIBFYO6knOMn5MLg2aelg%2FDuKy2Gz1LGBKXkPfcAk2AUI%2FWgHf2QsrzlSl2KGCPP%2BBp9fgyCBR8sjESyUnQVV3QDmsDuR3VcJoF7gox3LllRDuamxmnOxVgDWmxP3qQLjNFMscNWYlYTrtfAr0yaEDaw5l6AvOl4yR1NwN3%2FeYkyR3o%2BrGSr%2Bv%2B%2F0solis9G2x6E%2B2eOJv4u3CM7%2F2JkzRqyRa6R7W4JxaluIOS%2FCspmD4GtmTw0V06oI0vpqlb2Hwe6VcF7K4%2Bw9Prh6VyeW6c4cIE9rEggfutb4Z5aF7FDVE8zZCI3vF7uE4qHQNc%2B273U6ITOFE5cMHR8HgP9fHH5GeVSzOfrUeNVpgc3M1ubuk1p2OWLxfCnYz%2FPSwHH6XAE26SJo68FvjAhiMAdGzINZ8Ktn3rEwj38UrSFpap0Qbp3d%2FPCORmE%2Bt5VrEucO0A5%2FFrBnlvQ0NVzspIZ0pTu1ph%2FueW6MVQFpLdswJl3hihtrw4V%2FE7dxnIEM90iBGi2hrbZakGzD8wJa9BjqkAcVJT0qHgU91jo4bNmjT1OZmksO2WqMowXDJJSexw86I6aOdwsXR38F5BKAJZJ0i8uu2g2uxAR4ciw7XnmzONSb3bLjTdZYbvUjgEzZTS1tmD7OPJhAjoVeyP2DtY3rEzMIGOf%2BrjvF3nZ1hYurcDSSWToDrZmPZrf60rbjLUqWQkUESHgwG%2Fq1gXpkhjT5f9iRDMVsp3Wj2M14hytxS5B1gq7KN&X-Amz-Signature=af0c0863cb5e38930623582658a89eafb3d7161d3bb6016b48b071a8234f3e75&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTYE3AI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCJg%2BP%2BV2A4lbEgz4Uvsxg3YvqJTfEqW5IqpER4DHrwgwIhANliqxKbgD%2B9iKbOg81SGGLtNlmgqxWUQqj3cIxZ8eirKv8DCG8QABoMNjM3NDIzMTgzODA1Igwsr8ZGrxRtbuIhxAoq3ANYkAJqVfEgQ0mxSvjpW1WddyKRTBoP%2Fn1VFJNCFbPWr4%2FFUUv8F6c8Z7yu4O8aDwIJaD3OP0D1235XiEnMGtfMYiV%2FfQzQFbxSdISP14j1pI3hUumIBFYO6knOMn5MLg2aelg%2FDuKy2Gz1LGBKXkPfcAk2AUI%2FWgHf2QsrzlSl2KGCPP%2BBp9fgyCBR8sjESyUnQVV3QDmsDuR3VcJoF7gox3LllRDuamxmnOxVgDWmxP3qQLjNFMscNWYlYTrtfAr0yaEDaw5l6AvOl4yR1NwN3%2FeYkyR3o%2BrGSr%2Bv%2B%2F0solis9G2x6E%2B2eOJv4u3CM7%2F2JkzRqyRa6R7W4JxaluIOS%2FCspmD4GtmTw0V06oI0vpqlb2Hwe6VcF7K4%2Bw9Prh6VyeW6c4cIE9rEggfutb4Z5aF7FDVE8zZCI3vF7uE4qHQNc%2B273U6ITOFE5cMHR8HgP9fHH5GeVSzOfrUeNVpgc3M1ubuk1p2OWLxfCnYz%2FPSwHH6XAE26SJo68FvjAhiMAdGzINZ8Ktn3rEwj38UrSFpap0Qbp3d%2FPCORmE%2Bt5VrEucO0A5%2FFrBnlvQ0NVzspIZ0pTu1ph%2FueW6MVQFpLdswJl3hihtrw4V%2FE7dxnIEM90iBGi2hrbZakGzD8wJa9BjqkAcVJT0qHgU91jo4bNmjT1OZmksO2WqMowXDJJSexw86I6aOdwsXR38F5BKAJZJ0i8uu2g2uxAR4ciw7XnmzONSb3bLjTdZYbvUjgEzZTS1tmD7OPJhAjoVeyP2DtY3rEzMIGOf%2BrjvF3nZ1hYurcDSSWToDrZmPZrf60rbjLUqWQkUESHgwG%2Fq1gXpkhjT5f9iRDMVsp3Wj2M14hytxS5B1gq7KN&X-Amz-Signature=4521e0cc8e014eb1c9a1b3d515d9938dbcc1744ff630b7de4c1cc1bf8b49ab0d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
