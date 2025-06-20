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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZVHBYK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLg1vNEAmnCAXOdkYixrbBNh8IVE3Q7LlPQSOrk7qkOAiANv8qDbbCMffCXWTiGpKXIvXwdhKtN8sI5iaNYcqBhsyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmu6UpoHy1fej1z5KtwD1aDmg2%2FgCswiWCGE8QI9Uc1B4KG%2BQOHE%2BAw3ciNZ64%2BqN1XWH3EOripPoVeLr5o%2BS90M9dP5Hbo88TQWA%2FYRs9LuoiRVn2V98v6NApf6zp0SNibPqHYvjD0QUmWZ5b63QSzG08Msx9CYn0mDZ3vDbjnnLbypARFMMqRtK2diyRxIB5l8zjZnM20I3L6bOr84b2DUFY1yaUqKtHtmYD%2FXWYd1Se8s8KuNX8t9sMKmGw3VqtHytmRB%2BMJOoZNVrRESfVuRNgokvUafOv6WtgesDWFdglFCGPV1Y5fvJCcXWXRjWKSO0Agfk5g7amwusc1CRbUw6Wvo8sn6oXfF7F%2ByHQAk2ZbIlGRCiw1RoM7coMgGP7Kw5rYNiWnLKxOL%2BroZLm3p4wrAAJanBuk7OsHHHhGvtgWVqouF2qbQvtp3myJi%2BjJcjqtvOM%2FJsCAsz4zA8J5ekdCed4keM4mNZ7ETIX%2FvW2W4bcduFTn0f1IKfYzxgLFOMEKMbGDxxStffay0mQulvvsRZApo%2Bog4qPml8BBbJ%2BlVqhVn9cbiwP0G3oI8YIQs%2BPVDXF1TFTw2DbkBY3Zma17momc0Xd%2BWGjuIchn9mVxx%2FgvqyYybktuzkHpih%2F4IEpXHFeHxz%2FUw3NbVwgY6pgH4PYUtgpsDesLHTq6G2YXB6MWeogPZ94PWvfyxgeOM6siRXPtrrYvWosWLwr7%2BErd9XmYltaeRykIt2njxZuVp%2FjvoJumKU6Ae9mELMnj5wuOrpzy9KCYkY%2BO4RpjHKaw7rTNAZ4yZBr437iFguO4C5NWqvBiU7ksPsn%2FSKfNFyANvuldJKsdzYoeidqvLi1ewFeYpbZ9AwkwZXEnrHmFA4iG743DW&X-Amz-Signature=c9a7a662a305ba92caa2ca29a16988e38ca4e3e270a1ab7018c312f842339d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZVHBYK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLg1vNEAmnCAXOdkYixrbBNh8IVE3Q7LlPQSOrk7qkOAiANv8qDbbCMffCXWTiGpKXIvXwdhKtN8sI5iaNYcqBhsyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmu6UpoHy1fej1z5KtwD1aDmg2%2FgCswiWCGE8QI9Uc1B4KG%2BQOHE%2BAw3ciNZ64%2BqN1XWH3EOripPoVeLr5o%2BS90M9dP5Hbo88TQWA%2FYRs9LuoiRVn2V98v6NApf6zp0SNibPqHYvjD0QUmWZ5b63QSzG08Msx9CYn0mDZ3vDbjnnLbypARFMMqRtK2diyRxIB5l8zjZnM20I3L6bOr84b2DUFY1yaUqKtHtmYD%2FXWYd1Se8s8KuNX8t9sMKmGw3VqtHytmRB%2BMJOoZNVrRESfVuRNgokvUafOv6WtgesDWFdglFCGPV1Y5fvJCcXWXRjWKSO0Agfk5g7amwusc1CRbUw6Wvo8sn6oXfF7F%2ByHQAk2ZbIlGRCiw1RoM7coMgGP7Kw5rYNiWnLKxOL%2BroZLm3p4wrAAJanBuk7OsHHHhGvtgWVqouF2qbQvtp3myJi%2BjJcjqtvOM%2FJsCAsz4zA8J5ekdCed4keM4mNZ7ETIX%2FvW2W4bcduFTn0f1IKfYzxgLFOMEKMbGDxxStffay0mQulvvsRZApo%2Bog4qPml8BBbJ%2BlVqhVn9cbiwP0G3oI8YIQs%2BPVDXF1TFTw2DbkBY3Zma17momc0Xd%2BWGjuIchn9mVxx%2FgvqyYybktuzkHpih%2F4IEpXHFeHxz%2FUw3NbVwgY6pgH4PYUtgpsDesLHTq6G2YXB6MWeogPZ94PWvfyxgeOM6siRXPtrrYvWosWLwr7%2BErd9XmYltaeRykIt2njxZuVp%2FjvoJumKU6Ae9mELMnj5wuOrpzy9KCYkY%2BO4RpjHKaw7rTNAZ4yZBr437iFguO4C5NWqvBiU7ksPsn%2FSKfNFyANvuldJKsdzYoeidqvLi1ewFeYpbZ9AwkwZXEnrHmFA4iG743DW&X-Amz-Signature=d30db306999711b3f36928f31449fa60116dc3de4fc03522a39ce18dba2b173b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
