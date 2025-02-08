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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOQT6E7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCkcQN7EXk59kZOsSb7Pix1I7XnowD%2BYfCXFvDt0ghjlwIhAMchjpApFPbfkHAOZ5VNtv8WK%2FcMg7Zg8SCFtYBSqqtRKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNb%2BD76f82AI0ZgIq3APtV6SDx%2BwkN28GBhkd1RLPzlcWtZYAVzp4kQeqUX38XtvqdUHKrMAPK10i%2Be12sW3IKn2e3S84X0IcuiQaHU2jNpYRE1UISUHMd4UjBWlfDsW6b%2Bu5Bp%2FehFMENzzXE9TxJATVtPsEryYACu3lWdRzHmpvcqPeBhzDzlf62EgcYw7b4HaHYWfGsqXD7bU2HhLxlrrAdgCG1krDfikCeJHB3z0tiW3Spc3sJs4QN3qRJ%2Fj6X8YvZNsl7uqGvE129ymxOK6yAphnM6kUKoTVsytMGdPjQ5ejlVhWrmN3BdjFgMp8BP%2BPvCwIEQ65RcqivOWJn47RM5HNst4geKz1GOTO0JHzWtJl9iFpWkE31gUp%2BsNoM6ZPw4zKu4ZMt6C53LVbyTezEd%2BBDgy8l8wA6gqM1%2B6X9Ue86uvXKpChKee9qnnJOh1%2BjT0QLsNwylQDBCVB0GlnO6ppDXKGrA6r9t5yhxWeKLyKWb9aNT5961DAaK5%2BPouRh9%2BP1QbbUVhxZGCTAlHzJ9euOEEyZD42TzxQHRSk2VjqdNchj4av5E90eiDwVbNshLsCno5qD4z4YhdknhAhaplCgUcTsvVtBF8LaEPFZXPDPKkF85B4IJUtvgE16vSUZbEDJ0eKAzC8kJy9BjqkASlSJgT8sK%2F5hA7BNY2PnspMRsn45adIiE1qrDLgd7JRkkmi%2FkfJXsGd%2FYIn40J3uXRnUHrzDRdqIwKAxUo2oWnzF4bOplwwENU4L1XNwtT7kKr34V3jPmeJA1KRfq2jlKOwTKB8hTUR8%2FWaWq12zOS3vGwzIDc%2BAWVgSf8UqHtw9Vgr%2FbeaC3cjDdnHg1tJdp8optxsBjwYT2bKx3qqYB4%2BRynb&X-Amz-Signature=081de3fb9f7f8ef9801273d3828cd14ec1a068c3c7afed4bfd06ab95da487146&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOQT6E7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCkcQN7EXk59kZOsSb7Pix1I7XnowD%2BYfCXFvDt0ghjlwIhAMchjpApFPbfkHAOZ5VNtv8WK%2FcMg7Zg8SCFtYBSqqtRKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNb%2BD76f82AI0ZgIq3APtV6SDx%2BwkN28GBhkd1RLPzlcWtZYAVzp4kQeqUX38XtvqdUHKrMAPK10i%2Be12sW3IKn2e3S84X0IcuiQaHU2jNpYRE1UISUHMd4UjBWlfDsW6b%2Bu5Bp%2FehFMENzzXE9TxJATVtPsEryYACu3lWdRzHmpvcqPeBhzDzlf62EgcYw7b4HaHYWfGsqXD7bU2HhLxlrrAdgCG1krDfikCeJHB3z0tiW3Spc3sJs4QN3qRJ%2Fj6X8YvZNsl7uqGvE129ymxOK6yAphnM6kUKoTVsytMGdPjQ5ejlVhWrmN3BdjFgMp8BP%2BPvCwIEQ65RcqivOWJn47RM5HNst4geKz1GOTO0JHzWtJl9iFpWkE31gUp%2BsNoM6ZPw4zKu4ZMt6C53LVbyTezEd%2BBDgy8l8wA6gqM1%2B6X9Ue86uvXKpChKee9qnnJOh1%2BjT0QLsNwylQDBCVB0GlnO6ppDXKGrA6r9t5yhxWeKLyKWb9aNT5961DAaK5%2BPouRh9%2BP1QbbUVhxZGCTAlHzJ9euOEEyZD42TzxQHRSk2VjqdNchj4av5E90eiDwVbNshLsCno5qD4z4YhdknhAhaplCgUcTsvVtBF8LaEPFZXPDPKkF85B4IJUtvgE16vSUZbEDJ0eKAzC8kJy9BjqkASlSJgT8sK%2F5hA7BNY2PnspMRsn45adIiE1qrDLgd7JRkkmi%2FkfJXsGd%2FYIn40J3uXRnUHrzDRdqIwKAxUo2oWnzF4bOplwwENU4L1XNwtT7kKr34V3jPmeJA1KRfq2jlKOwTKB8hTUR8%2FWaWq12zOS3vGwzIDc%2BAWVgSf8UqHtw9Vgr%2FbeaC3cjDdnHg1tJdp8optxsBjwYT2bKx3qqYB4%2BRynb&X-Amz-Signature=0c0f2bd69dcfbac12c499bd5c9cac1b02c5abea38e0681b1b88170f7f9462737&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
