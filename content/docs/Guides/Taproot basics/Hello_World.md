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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC44SVOA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBrkCPI84cHoP%2FbxAyLf7%2FXn430eWZxS8fk5JapC8CDAiBVmeJ1KcsO8YIDxnUXqJSFeLk6DGCZAeDG7ZNqqfebVCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBY3oHDctwN1W41gIKtwDOb%2FHoYcsVAyBPUxwS7my4sjqcLOZWXHc70113vhte7NSI0aNR5Jz0Re8WiUJUYoRdbtlgIs2YjrmK49QW7Ljci%2F%2BQn1o2YnFNRr%2F0WHZXgQmvfebEt4BIVtRS3dwxrY%2F7c84ijDb9BscOI%2FRHmPv8g%2BZy3opwVkixTJnE15Ut%2BSoq4ezHmTdYW%2FjrlPU2Z9uhwop0AMaVYluKO0vOA09LbbmTukj0mlONoCqEVmiyWFUxSjsf3KwVH%2BAlm8CZDEwO0hlAnkgPCznzxCyJUW7qseMVT3QPxCOgCKj62IxK%2Fe0iIEAomog8z4FBJBbG8kKMKRx14boMVjD2D3IwTafXTeA7oF1W3cUhjTAz%2FZ%2F2vjpShUuFubjNHWwtF1e4pxlTfMwKYBPvtwvI3Jkkbce16%2FxcmPmKnAftrg81LekZQa13hS%2FizoXjODcaRXJOJi0Ugd6cE7%2BamVWiugO3ugNyPgvZMyEX6sC7t30EZuS6Tp6%2Bu4endyD3ctfTMFKxxuvT%2BqqtD4Y4AGbxaSgqDZ2OJ6cFUEKj%2FI8VmOc%2BDmJ%2B1Y%2BYOq6yiARAMKzAP6CGQlU7c5ySZkqPVduNawGmxcGtQME19Web%2Febw7ilnVhplhEzve478EqAOSwounswysbqvAY6pgESyIW3vTLe4pACrswal%2FNZEm%2FxpKP16WApRRCGE5ElCHIxJlhSHhMQzcLRYSvaAZqlL8%2BymxF%2FwrljIbkA56pvCjWSr889DhC9Dto42zj7GzUN2FlW1NH0vt8lOHLA6y12UqLL2tmye2qg%2FqISu3k2qMZAIpooNqHsAYbKil7e9lWNYKRlbaWw7rhvgddU9ZWnAmlS0bzmYvriigJPEvhm9RmtzxFj&X-Amz-Signature=ef27cd77fff0c7aec6f14add6c6616884c171bece8ddd32742615822b8ba1508&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC44SVOA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBrkCPI84cHoP%2FbxAyLf7%2FXn430eWZxS8fk5JapC8CDAiBVmeJ1KcsO8YIDxnUXqJSFeLk6DGCZAeDG7ZNqqfebVCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBY3oHDctwN1W41gIKtwDOb%2FHoYcsVAyBPUxwS7my4sjqcLOZWXHc70113vhte7NSI0aNR5Jz0Re8WiUJUYoRdbtlgIs2YjrmK49QW7Ljci%2F%2BQn1o2YnFNRr%2F0WHZXgQmvfebEt4BIVtRS3dwxrY%2F7c84ijDb9BscOI%2FRHmPv8g%2BZy3opwVkixTJnE15Ut%2BSoq4ezHmTdYW%2FjrlPU2Z9uhwop0AMaVYluKO0vOA09LbbmTukj0mlONoCqEVmiyWFUxSjsf3KwVH%2BAlm8CZDEwO0hlAnkgPCznzxCyJUW7qseMVT3QPxCOgCKj62IxK%2Fe0iIEAomog8z4FBJBbG8kKMKRx14boMVjD2D3IwTafXTeA7oF1W3cUhjTAz%2FZ%2F2vjpShUuFubjNHWwtF1e4pxlTfMwKYBPvtwvI3Jkkbce16%2FxcmPmKnAftrg81LekZQa13hS%2FizoXjODcaRXJOJi0Ugd6cE7%2BamVWiugO3ugNyPgvZMyEX6sC7t30EZuS6Tp6%2Bu4endyD3ctfTMFKxxuvT%2BqqtD4Y4AGbxaSgqDZ2OJ6cFUEKj%2FI8VmOc%2BDmJ%2B1Y%2BYOq6yiARAMKzAP6CGQlU7c5ySZkqPVduNawGmxcGtQME19Web%2Febw7ilnVhplhEzve478EqAOSwounswysbqvAY6pgESyIW3vTLe4pACrswal%2FNZEm%2FxpKP16WApRRCGE5ElCHIxJlhSHhMQzcLRYSvaAZqlL8%2BymxF%2FwrljIbkA56pvCjWSr889DhC9Dto42zj7GzUN2FlW1NH0vt8lOHLA6y12UqLL2tmye2qg%2FqISu3k2qMZAIpooNqHsAYbKil7e9lWNYKRlbaWw7rhvgddU9ZWnAmlS0bzmYvriigJPEvhm9RmtzxFj&X-Amz-Signature=c95f8331f52b53ce376ce650f6bc49bbf238abb0228b3c6762521d270be11b72&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
