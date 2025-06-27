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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VEYUON%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Mon7lsmt%2BimNItSKt5XVVTguWshP%2FmEnF4oq4FgwJgIgFoRMdrahBZcskR%2BheOxmwhSqlRa7E1OJkchNUUe1vZUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEuJkbNCZUd6PGY0UircA2Yakc3eoMn5sQ9MhyL2j9hQJ%2BBURLWwdH1hh2GZu6Np%2Fxb6yqBnA2rAKcM1teuemDqeGn4BCd8FiMo%2B0h6F%2FeQnWlLuVxWfsVRx3RaNFKRz0PA%2BSJ1mY%2FxRyMGxlJ7HkZZt4MhEQOXvXJw0mJT%2B4aNpr72IiJtAGoYI08piqlebrd9khR5PheEE4miIpRIz038of%2FcEWO1kh%2FbnMpiS9bY24cxObR8%2Bj6cNg5m%2Fhpj0Q%2FAJC5KbZzopJBL6rD4snpWFpGEe0r6o%2BR3tCwRUi6cV3VLM6tLK6uP2P%2FH%2BEayWJLp0JIZ7hOiCZhcnv7buteBwrz6cK3um1tT%2B3V4NnOKuUX88abv4GaeXw3FL9qrbLzi8HuUtjnuK45ox3JnmtJZRtJtMgwm1XsWvaFP%2FKrXEa7mtki0JeVGecEwTXVLbgdkPWBUwTV8jgKcNPyDT9euEAKe9kDM6mVpWJJWrnTiG4JbSPsMweGodhRaYIDqMMV4tVVxlObmq5CXBl3hN2PnEQx75JZEPrVTVBriKob7vHrWLJFiRH6dNxxwpfl4v48P7oQgZQpJHUDjfvgUVNdPt3H8QyvCbKEYLVD8Uz4tKrv9BRZLlfXuWtNg4FyP0svaJ2l58BHqGA8jgMML3%2BsIGOqUBh8Cm%2F56ao1rmkTmqembm6NM9VpfbciQ7wGEMk3BlgULSJQ5n4ZeLttC7yqqGTmOwU7nvMIboZeIzbmLeIz8jy9zAYkmATVdLniNNRnfwpmKh6dYs4YG4r9wlGiLEnp32MjGXq%2FvHN1lW4ljQ6KjacSDky13C1Mwyx9A%2Bm7Nw3ZAvmToFxJe1MML7Riycti%2FmNlnxT%2FXo7hwGNDeWLIIn6nnRDF9Z&X-Amz-Signature=5af7ad08b530b60b946109b0a48d895092818fc528830d1a726ce23e2e0cdfd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VEYUON%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Mon7lsmt%2BimNItSKt5XVVTguWshP%2FmEnF4oq4FgwJgIgFoRMdrahBZcskR%2BheOxmwhSqlRa7E1OJkchNUUe1vZUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEuJkbNCZUd6PGY0UircA2Yakc3eoMn5sQ9MhyL2j9hQJ%2BBURLWwdH1hh2GZu6Np%2Fxb6yqBnA2rAKcM1teuemDqeGn4BCd8FiMo%2B0h6F%2FeQnWlLuVxWfsVRx3RaNFKRz0PA%2BSJ1mY%2FxRyMGxlJ7HkZZt4MhEQOXvXJw0mJT%2B4aNpr72IiJtAGoYI08piqlebrd9khR5PheEE4miIpRIz038of%2FcEWO1kh%2FbnMpiS9bY24cxObR8%2Bj6cNg5m%2Fhpj0Q%2FAJC5KbZzopJBL6rD4snpWFpGEe0r6o%2BR3tCwRUi6cV3VLM6tLK6uP2P%2FH%2BEayWJLp0JIZ7hOiCZhcnv7buteBwrz6cK3um1tT%2B3V4NnOKuUX88abv4GaeXw3FL9qrbLzi8HuUtjnuK45ox3JnmtJZRtJtMgwm1XsWvaFP%2FKrXEa7mtki0JeVGecEwTXVLbgdkPWBUwTV8jgKcNPyDT9euEAKe9kDM6mVpWJJWrnTiG4JbSPsMweGodhRaYIDqMMV4tVVxlObmq5CXBl3hN2PnEQx75JZEPrVTVBriKob7vHrWLJFiRH6dNxxwpfl4v48P7oQgZQpJHUDjfvgUVNdPt3H8QyvCbKEYLVD8Uz4tKrv9BRZLlfXuWtNg4FyP0svaJ2l58BHqGA8jgMML3%2BsIGOqUBh8Cm%2F56ao1rmkTmqembm6NM9VpfbciQ7wGEMk3BlgULSJQ5n4ZeLttC7yqqGTmOwU7nvMIboZeIzbmLeIz8jy9zAYkmATVdLniNNRnfwpmKh6dYs4YG4r9wlGiLEnp32MjGXq%2FvHN1lW4ljQ6KjacSDky13C1Mwyx9A%2Bm7Nw3ZAvmToFxJe1MML7Riycti%2FmNlnxT%2FXo7hwGNDeWLIIn6nnRDF9Z&X-Amz-Signature=6fb24b449e56f801264bdd844fd6e7d5d8bc0a6f2cacc79166d379968e300218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
