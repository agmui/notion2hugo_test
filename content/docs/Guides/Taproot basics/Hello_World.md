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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCY7ROB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKjX30XtBj4NOzx%2BJLiuT0f7LvEqw0cNitGxRtPUJs1AiEAoPktuiCM2WzskOY0Pmybb8EY1w6KM1wAsOGhO9zHqK4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDEtQUbJkLhkWElGZoSrcA5wLVmIIu%2B2jCDr8IXzUrsjPt%2F6O%2FQPov09BWmQUuED5GKsJ%2BjY%2Fd1FwA4WP9lPpTJYHUsRpshcu9AXUqDUeDs9qlhASqSAfTbOMJTQTL3A2ppG2FvLVtInDefpwd6Uv5jj3HtYl7z9Ve0UxgwvYWA2sSUAxPwV8ROsNNZrzNaVNAXlpWy%2FdWcmmE9anhdlsM3bVVKyS1WfzN6RfY1Em6ZBGrhcZ%2FNndwe%2Fd8lDAbrA8jbIOyz3qFzIdxtzBqLto5EajL8Vral1F5BCCBrg35jRmLe2wzwTe7%2FNkEfNZSSDsBQZetBp2F%2BmIWt9x0KbTqhRpoZwZKr8YdGUn7p78ugPY07KEBmhuftJi0zK7BTINEnTohIxlKEglQM%2Bs46PR46BFQ%2F8%2BLL3Ew%2BEEiTz%2BMPXIcijRPO1OKGwmeYg21WHVZ5nHEAN%2ByOG8nr8lbggRlQPVGBZaHVj%2B79%2F%2FL%2Bgfokgx0bL71jHeV88gl2h4duq7Z%2FBmwH%2FCLWCtgX3yg5bO8lMbLhnh3HVnkgAcM12deMwHc6%2FUZOWFOOXJ0ScyWk1DBDClQ6xyeHv6TqxVQbWy7ksbVoC%2Fh62Nt24cjSLhoAvcCA62a4F94HlU7kFA4TJ4%2BHm19NmpqUte77A%2BMOuKusAGOqUBao7RMYplK6S5GdCVBYI%2BrWBbfGUotvRN80mirhIkWJ3gtp3boVcQMBrs%2FzXClRlQh06VXNe59wWcLi%2Bxf3ylBU9o2oe%2BFsOCqtjvzKZNDg0sbMmtU5%2BY3GgCLuJBDnuGPENgLvGjyJfgiqbVD5kqegrZODZAxB2xBx%2BP%2FleDp1erWyGcT2IBpaK40NU2MOFtahe%2BSMjeCP0ADqSIDoAUePEYeIno&X-Amz-Signature=71a93b21e4b64bf4afd9ce5934e3445f8ece1629019ac7b3a63213d8a0480a89&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCY7ROB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKjX30XtBj4NOzx%2BJLiuT0f7LvEqw0cNitGxRtPUJs1AiEAoPktuiCM2WzskOY0Pmybb8EY1w6KM1wAsOGhO9zHqK4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDEtQUbJkLhkWElGZoSrcA5wLVmIIu%2B2jCDr8IXzUrsjPt%2F6O%2FQPov09BWmQUuED5GKsJ%2BjY%2Fd1FwA4WP9lPpTJYHUsRpshcu9AXUqDUeDs9qlhASqSAfTbOMJTQTL3A2ppG2FvLVtInDefpwd6Uv5jj3HtYl7z9Ve0UxgwvYWA2sSUAxPwV8ROsNNZrzNaVNAXlpWy%2FdWcmmE9anhdlsM3bVVKyS1WfzN6RfY1Em6ZBGrhcZ%2FNndwe%2Fd8lDAbrA8jbIOyz3qFzIdxtzBqLto5EajL8Vral1F5BCCBrg35jRmLe2wzwTe7%2FNkEfNZSSDsBQZetBp2F%2BmIWt9x0KbTqhRpoZwZKr8YdGUn7p78ugPY07KEBmhuftJi0zK7BTINEnTohIxlKEglQM%2Bs46PR46BFQ%2F8%2BLL3Ew%2BEEiTz%2BMPXIcijRPO1OKGwmeYg21WHVZ5nHEAN%2ByOG8nr8lbggRlQPVGBZaHVj%2B79%2F%2FL%2Bgfokgx0bL71jHeV88gl2h4duq7Z%2FBmwH%2FCLWCtgX3yg5bO8lMbLhnh3HVnkgAcM12deMwHc6%2FUZOWFOOXJ0ScyWk1DBDClQ6xyeHv6TqxVQbWy7ksbVoC%2Fh62Nt24cjSLhoAvcCA62a4F94HlU7kFA4TJ4%2BHm19NmpqUte77A%2BMOuKusAGOqUBao7RMYplK6S5GdCVBYI%2BrWBbfGUotvRN80mirhIkWJ3gtp3boVcQMBrs%2FzXClRlQh06VXNe59wWcLi%2Bxf3ylBU9o2oe%2BFsOCqtjvzKZNDg0sbMmtU5%2BY3GgCLuJBDnuGPENgLvGjyJfgiqbVD5kqegrZODZAxB2xBx%2BP%2FleDp1erWyGcT2IBpaK40NU2MOFtahe%2BSMjeCP0ADqSIDoAUePEYeIno&X-Amz-Signature=deb99c705c4f1bd5f620b1e10dce079f96b83fd2eb915f1ea0d70a90858b4b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
