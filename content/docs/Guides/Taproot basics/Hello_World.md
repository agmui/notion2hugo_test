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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6565RCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5%2BgIXcPZnynKOZgj4A3mRxiKiB7irGZPHbKckfPZpcAiEA%2BJANMee7dj3WkBl2uVB0I8TAl7E5IB5%2FoCO0Fqz59dEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGOD3A%2BT%2FUixYcP7ySrcA0ihufa8AiNcMeeYWfT7NKqkWhqcdHk9g40Gwse1%2BHB6ETlydDCpaib%2BYfkdLtqizGvFxa1lUhKFgjALVYjZ90C3KVtHuxB%2B6ZewxZ7%2FlfIZVpWBIrnaVxD7W2cxDdS4wPgJsBJNWpB83g9ri93xN5c38oFC%2FVYfZOETaVx52WqSNaZQ5jKijjVrx65ckHObAP0JyFHndXK0Owt8JNTTc6s64M990C31xdSS%2BxlTAgC5OWepFPH2fvvAhg%2F%2B9vNka5a%2BuTD04j2RVj42Opd%2Fa7bvnHo%2F2Ryy0IDwAuWoMfRAigFI4iCYCrJdPtLveat7oFstEB%2BVCId1a%2BnA4S2UuaFqlMvbl%2Fy3GQID7ylmuTb50C%2FkPTlEhg39FL7h205zpS%2Ftc69lJEIikNBs93jMaBTsgvud%2FhPd97iBJH0ukVfzTk0bhmnANr3FNFBkkS0%2FQ3h9h40z4u0ENaJJstWyr4l0W2KHwbrFPa7tCJ35Xo6awPHiXLBKPLZe9Szk1uCmDV5p0o2f5UjiSJbwEW%2BzC8Pq4lN1S6RxiW%2F3Z9rtqojQvfdndVYivPfer4SIQ7SCC0D7A4Nm6F9ifnb4jnDs93ZXuwhqnCcajRGMr%2F56VKbImhrdzXlobm%2FTBHJ%2FMMGeucQGOqUB4sFe6jzh3t5w3W8WuiPZfBbC3pD7XAyV%2BqEqoIXuWyiE2GZqWfvS2bEcXteubset%2FayHkqlc7PTTBSNXMoCSXW%2BpXOuGpMLp7glklKyDXMWB%2FqtY13v690hIRnUI%2FG6iuSr%2BqsxmeKJr4Q7%2BkwpMiLfhlzxz9%2F3flg4p7vl2%2FXy6VDFvTsnUVp%2BtCGu9%2F0jsvPHVYfSP2jxtimjtoKVT5mvTzCK9&X-Amz-Signature=615a020db90521bcd2315b96e1494cc0395879a777940442ffeadcadbbf15678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6565RCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5%2BgIXcPZnynKOZgj4A3mRxiKiB7irGZPHbKckfPZpcAiEA%2BJANMee7dj3WkBl2uVB0I8TAl7E5IB5%2FoCO0Fqz59dEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGOD3A%2BT%2FUixYcP7ySrcA0ihufa8AiNcMeeYWfT7NKqkWhqcdHk9g40Gwse1%2BHB6ETlydDCpaib%2BYfkdLtqizGvFxa1lUhKFgjALVYjZ90C3KVtHuxB%2B6ZewxZ7%2FlfIZVpWBIrnaVxD7W2cxDdS4wPgJsBJNWpB83g9ri93xN5c38oFC%2FVYfZOETaVx52WqSNaZQ5jKijjVrx65ckHObAP0JyFHndXK0Owt8JNTTc6s64M990C31xdSS%2BxlTAgC5OWepFPH2fvvAhg%2F%2B9vNka5a%2BuTD04j2RVj42Opd%2Fa7bvnHo%2F2Ryy0IDwAuWoMfRAigFI4iCYCrJdPtLveat7oFstEB%2BVCId1a%2BnA4S2UuaFqlMvbl%2Fy3GQID7ylmuTb50C%2FkPTlEhg39FL7h205zpS%2Ftc69lJEIikNBs93jMaBTsgvud%2FhPd97iBJH0ukVfzTk0bhmnANr3FNFBkkS0%2FQ3h9h40z4u0ENaJJstWyr4l0W2KHwbrFPa7tCJ35Xo6awPHiXLBKPLZe9Szk1uCmDV5p0o2f5UjiSJbwEW%2BzC8Pq4lN1S6RxiW%2F3Z9rtqojQvfdndVYivPfer4SIQ7SCC0D7A4Nm6F9ifnb4jnDs93ZXuwhqnCcajRGMr%2F56VKbImhrdzXlobm%2FTBHJ%2FMMGeucQGOqUB4sFe6jzh3t5w3W8WuiPZfBbC3pD7XAyV%2BqEqoIXuWyiE2GZqWfvS2bEcXteubset%2FayHkqlc7PTTBSNXMoCSXW%2BpXOuGpMLp7glklKyDXMWB%2FqtY13v690hIRnUI%2FG6iuSr%2BqsxmeKJr4Q7%2BkwpMiLfhlzxz9%2F3flg4p7vl2%2FXy6VDFvTsnUVp%2BtCGu9%2F0jsvPHVYfSP2jxtimjtoKVT5mvTzCK9&X-Amz-Signature=82c6bd0172ccdba5651eed0d0b6d80cef0350a3d2cf48855af64e870667d17bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
