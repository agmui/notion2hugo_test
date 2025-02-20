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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKU34EE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKrZkx%2FEXP35fq530tFvckpTBc%2B7QG1nGEG2%2ByBXL6jwIhAPenVRsVN%2F08GLF5vtdt8Fs%2BuJ3lKbxqS%2BNKeeUT8o%2FyKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEScJxNhBo%2FcfLXbYq3AMB%2Bc%2BmVhmvpU03oUIHYLTG6hcg6ieCybzDGJTNeWPTZYsStTgnDMAR8rGQykNq4QhhI%2FdQx3FkPijoStj8WGB0pghe%2FgGwoMu2REQRHwv5JAlsn0NxTz0YQy6mAK4NrAo%2Flkneudx1hfgGrURB4AgjEtUDhpmcZTAH4nTm2jw2QKjN0jNAxdPPsOkk5vwz7pViuO58L8YrQHzRF0%2FIsmAcNuF0ASTw8MZmLtXNzLm443iZdWGCEUi4Ps9Z5richhGEzowkfBKOE2TGWR0Vs6segKqAg0obC%2BogR6e4LRDDpPykekYNKLCWOh%2Ftxp64HSyo745HD%2FKKNd%2FfdFte4LBXRLw0DqeIRILvKx6qYwCUk7ILmTb0977Ldg4zBOXVo0DifiNDGIyyjDDNWJ2XTq3tad9%2Fg%2FRWeMDkzECHKT5ns4%2BOsCWjn9pxU7B2AFge9q1VrR%2B8rLfblpGEMi3nEFeU1IAk9D0fgDKCiVYIEcEOLdn7RWuovvrwG9myiGuNx0qB28oHwFlRRAwplZ%2BeZktIWN3bqpL%2B%2BCwRpnSulEZy%2BlIWnwslEhoKFpcOdo4%2B8%2B6HkNjNOua2%2F4%2FSZ1mKilx%2FM6bypF6uAFgxOd1ptRsshCm4KGBrx21wEJsyWTDe%2Fdq9BjqkAaSPnG6mXwhTxb%2FIjmGzWB4VisztSVjpbEvkDEwaSTQnUV9Y5YT0Z4W6vMAMy864t9yV%2Fm48rMNc6BypxrASttBkWhk1x81rVzOvcCX3rwRIB%2BTsyuaMu3YCTllwSmgU%2Bq2DM4zBoUf6DHadrvg6GGdmCKSYtDZqbQvCfQ%2FU2BiCTYgFhnKp4j0dW8KiM5u9QaL%2F8gcLihrvzdwcINT71NfaoTey&X-Amz-Signature=af26f756ff6cb5445cd8a85cb6bf400dcbdd3b4d40abf0f8496f89cb68f32bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKU34EE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKrZkx%2FEXP35fq530tFvckpTBc%2B7QG1nGEG2%2ByBXL6jwIhAPenVRsVN%2F08GLF5vtdt8Fs%2BuJ3lKbxqS%2BNKeeUT8o%2FyKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEScJxNhBo%2FcfLXbYq3AMB%2Bc%2BmVhmvpU03oUIHYLTG6hcg6ieCybzDGJTNeWPTZYsStTgnDMAR8rGQykNq4QhhI%2FdQx3FkPijoStj8WGB0pghe%2FgGwoMu2REQRHwv5JAlsn0NxTz0YQy6mAK4NrAo%2Flkneudx1hfgGrURB4AgjEtUDhpmcZTAH4nTm2jw2QKjN0jNAxdPPsOkk5vwz7pViuO58L8YrQHzRF0%2FIsmAcNuF0ASTw8MZmLtXNzLm443iZdWGCEUi4Ps9Z5richhGEzowkfBKOE2TGWR0Vs6segKqAg0obC%2BogR6e4LRDDpPykekYNKLCWOh%2Ftxp64HSyo745HD%2FKKNd%2FfdFte4LBXRLw0DqeIRILvKx6qYwCUk7ILmTb0977Ldg4zBOXVo0DifiNDGIyyjDDNWJ2XTq3tad9%2Fg%2FRWeMDkzECHKT5ns4%2BOsCWjn9pxU7B2AFge9q1VrR%2B8rLfblpGEMi3nEFeU1IAk9D0fgDKCiVYIEcEOLdn7RWuovvrwG9myiGuNx0qB28oHwFlRRAwplZ%2BeZktIWN3bqpL%2B%2BCwRpnSulEZy%2BlIWnwslEhoKFpcOdo4%2B8%2B6HkNjNOua2%2F4%2FSZ1mKilx%2FM6bypF6uAFgxOd1ptRsshCm4KGBrx21wEJsyWTDe%2Fdq9BjqkAaSPnG6mXwhTxb%2FIjmGzWB4VisztSVjpbEvkDEwaSTQnUV9Y5YT0Z4W6vMAMy864t9yV%2Fm48rMNc6BypxrASttBkWhk1x81rVzOvcCX3rwRIB%2BTsyuaMu3YCTllwSmgU%2Bq2DM4zBoUf6DHadrvg6GGdmCKSYtDZqbQvCfQ%2FU2BiCTYgFhnKp4j0dW8KiM5u9QaL%2F8gcLihrvzdwcINT71NfaoTey&X-Amz-Signature=d16bc5be2015760c7faac53e3b017a1ce56f6a828f3b7b2bc68d572e31bf5be1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
