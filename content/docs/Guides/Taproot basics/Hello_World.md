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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W34RNA7R%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ypmNEZnebRJlYo%2FQIeahEzpFIxQFzxt8lQHDWYmmQgIhAP13rYGgZpBH9opSIbs%2FLOfuXF8qtJX2%2Bd1TZ0c7n%2Ff%2FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBy9eRdKjhudBxgukq3ANieOEwuPlKNtUHyf8u9bUmfF3xGpebyD7DQh8SXISEj9Ec1X%2BE2B3OkLuAmGoyjjuL2RcHeT1KSNbo8mE6GoH2oxdbet0x2S5pTk8utUFHNdE%2FDh7kd1MSa0CE1UB1nTcS5PWBdJcpusx4Af5dxKkomTrkY2jwCZlNftQEZNuBB5NHDojQnJdoR3AcDp769nAcvWehTz3FjbLPrLUOTNqbXYvFNiSqnFZwM%2BTjU0r8TM%2B0Bu2z%2FQ1cnDLYTi8%2FJDFqdjc%2BWr%2FTJByGhWeG8K89gauP9XTFALdEKb2UDutzpIs9beCdapfAl8Q09ATfVaghUH%2Bc9klivfHoagC23TALgYAByvHENfjYbODO8hTWnk7DxBXwKAphuJgrYH8FJ1o7b7VdIfGVV0T7bimfsGphXiX9aCT7UeG34ycRsrDYFnS4gQNYaRb%2BirTs7oMfk2x2VAs5FnTJTPoqFY5S7tMF%2BrX9NG9BiQYWq6Z1a2dt%2Flr3BUL9r%2BDeaXEYi2f4y%2FV4AHiATWU3szidZiHYXuemPYcUPBbsg1R0VH970o%2BEOP%2FTBPHQ%2F3p73wlTnCAYvF5Ggeb0%2FuO%2FGbIBzFmtZX%2BNFha84LLp2rxyEf7lYasWkdf1SIrYrptM0Z2yPzDom6W9BjqkAaMfpZO4nYz4FMrUOOMCGat21rc9u8Zm80WVNHqEBPBSmhefe3I9nRAgsfz9nqyRr1%2FYlWf%2FteGHzxW2qOo17Sqv3XIsoaObjMPFGCz2GNJblptLwSU6E9ppZIVNyRY7Q4R2YOHJQxoGNpKGXMfbTrMcrDKVEs2Vuufa3vuX7PH51QzkBmqA%2BV0U3KAqwCNbmIEm2PEq1q4zuhokPdFZasCilzPN&X-Amz-Signature=2cace10cf55ffa918440c27939e07ebe535c81b0e63eaa5f6784ba13eeea06a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W34RNA7R%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ypmNEZnebRJlYo%2FQIeahEzpFIxQFzxt8lQHDWYmmQgIhAP13rYGgZpBH9opSIbs%2FLOfuXF8qtJX2%2Bd1TZ0c7n%2Ff%2FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBy9eRdKjhudBxgukq3ANieOEwuPlKNtUHyf8u9bUmfF3xGpebyD7DQh8SXISEj9Ec1X%2BE2B3OkLuAmGoyjjuL2RcHeT1KSNbo8mE6GoH2oxdbet0x2S5pTk8utUFHNdE%2FDh7kd1MSa0CE1UB1nTcS5PWBdJcpusx4Af5dxKkomTrkY2jwCZlNftQEZNuBB5NHDojQnJdoR3AcDp769nAcvWehTz3FjbLPrLUOTNqbXYvFNiSqnFZwM%2BTjU0r8TM%2B0Bu2z%2FQ1cnDLYTi8%2FJDFqdjc%2BWr%2FTJByGhWeG8K89gauP9XTFALdEKb2UDutzpIs9beCdapfAl8Q09ATfVaghUH%2Bc9klivfHoagC23TALgYAByvHENfjYbODO8hTWnk7DxBXwKAphuJgrYH8FJ1o7b7VdIfGVV0T7bimfsGphXiX9aCT7UeG34ycRsrDYFnS4gQNYaRb%2BirTs7oMfk2x2VAs5FnTJTPoqFY5S7tMF%2BrX9NG9BiQYWq6Z1a2dt%2Flr3BUL9r%2BDeaXEYi2f4y%2FV4AHiATWU3szidZiHYXuemPYcUPBbsg1R0VH970o%2BEOP%2FTBPHQ%2F3p73wlTnCAYvF5Ggeb0%2FuO%2FGbIBzFmtZX%2BNFha84LLp2rxyEf7lYasWkdf1SIrYrptM0Z2yPzDom6W9BjqkAaMfpZO4nYz4FMrUOOMCGat21rc9u8Zm80WVNHqEBPBSmhefe3I9nRAgsfz9nqyRr1%2FYlWf%2FteGHzxW2qOo17Sqv3XIsoaObjMPFGCz2GNJblptLwSU6E9ppZIVNyRY7Q4R2YOHJQxoGNpKGXMfbTrMcrDKVEs2Vuufa3vuX7PH51QzkBmqA%2BV0U3KAqwCNbmIEm2PEq1q4zuhokPdFZasCilzPN&X-Amz-Signature=ce676de7531e73e75df0a1b82616084971e4d49fb83695b4f552ad3f9a59174a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
