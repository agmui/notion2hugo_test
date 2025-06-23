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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZMD6MW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDmUQVMJAFwA2SOccH5%2Fomj5%2FFuygej%2BluJ%2BmpOgYr8MwIhAJirlK5uDxaCAfpgbUi7Kyw4IqbL%2F1XPV41U3PpkfaI%2FKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BpCXQ%2FiKISTOt%2FCAq3ANTMWJVP7BdtnH5vUjOEbvNtruVL2gMGAfUqZFXccH%2FuGHEJjArSyV8I9Nm9fE4aiI1eOK6zG2vlekyIM6JxjIXdx5C%2BQ9UF%2BymdoCv6j6fk1fDqnMT%2F06gcxltmHq07APdrLnExNlp7glxZCwVF403Ivb6drnUx2HzIbghjbSf6V%2BJZq6aUJBvV0TiK2wFrGiUR6aXIuIx0KJlhKpEu3AQ5xhZ400JkGWw5Kvn%2FG0Kuf5Ao%2BGbmI8hHMwvHhgWEMbEM7rhnKe72iM4CFTsqq2ga4H7vTf1Es8wZC5LutgbN8aNPxY4MtYd0ZBMhqC82h8hMtuvDZFKair7EGRvOlSrfuciI7dE9SiLf1NFOJROAQ3xWC95bPuzY6FetGII1KIg1QoVoRJLtUJ2osYdODY94ok%2FwEOM1%2FIc9v1eAmDDIyIpzJZ4IM3uY4%2Buqo1uAWkLsO2dBwi69MzcDLVFh8brtAN07YbyBuvig5vXrnY9FGWdmZyqKgWnWaKcV2wFK57I4i3jcIfW99vqF7MQYAXP%2FVOWB3h84Y5OCPaFHbt2A%2BZ72%2FnLpDHwlFZjJc%2F1FM%2BsIYZ6efiUD7IJKEbkUcJEJEKDcJMkTwuUj5raURfE27rtNeAjpyzb%2F9e6qDDdp%2BLCBjqkAdziRCi0J5pWmG5zCrlrjZOx5IaMeUv03Iz7GBQx3H7Ci1VXPTQLT6PZF3dsikrioKfzyvRBG5jcuiUSGwPoLDgw27C65RPLewthl3tRhIlZkZ%2B4qIgFnSx1wPg9qS1QieW5mAUrdnXsoYggy6vq2o2HG6FrtpStRvlVhed7SpS7eywFqCwjKU86%2BwxN6itB1yZXktTTUoLYtFFyx2Izp4a5ukt0&X-Amz-Signature=80688bb999dba8c84c828d8e7787fc15ecdca58e9a40de6a2d7d29b806c7153d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZMD6MW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDmUQVMJAFwA2SOccH5%2Fomj5%2FFuygej%2BluJ%2BmpOgYr8MwIhAJirlK5uDxaCAfpgbUi7Kyw4IqbL%2F1XPV41U3PpkfaI%2FKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BpCXQ%2FiKISTOt%2FCAq3ANTMWJVP7BdtnH5vUjOEbvNtruVL2gMGAfUqZFXccH%2FuGHEJjArSyV8I9Nm9fE4aiI1eOK6zG2vlekyIM6JxjIXdx5C%2BQ9UF%2BymdoCv6j6fk1fDqnMT%2F06gcxltmHq07APdrLnExNlp7glxZCwVF403Ivb6drnUx2HzIbghjbSf6V%2BJZq6aUJBvV0TiK2wFrGiUR6aXIuIx0KJlhKpEu3AQ5xhZ400JkGWw5Kvn%2FG0Kuf5Ao%2BGbmI8hHMwvHhgWEMbEM7rhnKe72iM4CFTsqq2ga4H7vTf1Es8wZC5LutgbN8aNPxY4MtYd0ZBMhqC82h8hMtuvDZFKair7EGRvOlSrfuciI7dE9SiLf1NFOJROAQ3xWC95bPuzY6FetGII1KIg1QoVoRJLtUJ2osYdODY94ok%2FwEOM1%2FIc9v1eAmDDIyIpzJZ4IM3uY4%2Buqo1uAWkLsO2dBwi69MzcDLVFh8brtAN07YbyBuvig5vXrnY9FGWdmZyqKgWnWaKcV2wFK57I4i3jcIfW99vqF7MQYAXP%2FVOWB3h84Y5OCPaFHbt2A%2BZ72%2FnLpDHwlFZjJc%2F1FM%2BsIYZ6efiUD7IJKEbkUcJEJEKDcJMkTwuUj5raURfE27rtNeAjpyzb%2F9e6qDDdp%2BLCBjqkAdziRCi0J5pWmG5zCrlrjZOx5IaMeUv03Iz7GBQx3H7Ci1VXPTQLT6PZF3dsikrioKfzyvRBG5jcuiUSGwPoLDgw27C65RPLewthl3tRhIlZkZ%2B4qIgFnSx1wPg9qS1QieW5mAUrdnXsoYggy6vq2o2HG6FrtpStRvlVhed7SpS7eywFqCwjKU86%2BwxN6itB1yZXktTTUoLYtFFyx2Izp4a5ukt0&X-Amz-Signature=cf307ed73d3feb2371bbe6d8559acbdd554a006781aa679b989f6462d9038026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
