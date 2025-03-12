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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625KVEG3M%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCJhDcBXySRqtMqJVWOvvhMQlNMCfm4e%2FB%2FO%2F0fSPUoewIgXn5kgaYmJekkkC0rMUGhiGBerE2P7NIcemMXYogtZaUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh5eH5UsBbP7BzDkyrcA0Dn2N5rkf%2Fw%2Fbbe9gnJf%2BcasBaSafkPbbhFMlpknJRJv%2B8bTC%2BHtoOi2VMT1Zf5Vw1NjaSebsr%2Bg1g9FztHf%2Bm3nMEq3eTLyUHB7NZXF42Bm5gfGE4Ho4LpEARQtTJmXOa45u7MCWSh5b5aV2djSA5bQZGZi1IlwuS%2BB8UdNnR0ZyBAAZM98kgX16YpCFzIoXDlw1XUtQ6rQWXTcCI7Nl%2FS%2BgGZKgFm28t%2B%2F1dGLYjfocReH%2Btd%2FzxjpeoAJq7Akln9qjb8OkRzcMOzEUNcv7SOmuh9PVQ%2BQVe5L9h1%2FqHoYaYbv0iCJRFHPOHZ7C2XdND%2FAtDK5XVUmQxSO0XDcZ1LaSfmxNaOQI7FrsHb3yP7ovw0Rgz%2FQdUbUCi2xCcv0NkY5UYcCBjV4etZXaazMPTlEvmfGrBRRed2lSQ2TQGawW6OvhKiQoPOpL1ET1D0GxRy13nwZZTEkLkpJHZPZ%2B7uCnX8YoBlHvcsFLMAdiAw1Ke4Qp2SJdWZ1TkYAQ5PaSC0jLtjrQdd9Q%2B%2Bvs%2FEsLxbcEZd1YgAKDUP2xBv2ZPZ0L8%2FSwmkSegyEOLnTR4FI5DaS1Qh61UQRSBza0iTKM3iuSfmFVf7b5vVQqRAxCL7cf2I0dZCiADkHArIMO7aw74GOqUBjmHGLWy0Pg9KVB0yxSvdRtmvQvbGsK8nlLUB%2BYMrDrTDsyIwEvrCPqnde3SXn%2BIFu2Onrb%2BVwBbZ1IeZ4dyrrOzoHQF5A9aqvHTS%2BNg0ufRcwGbLpUJpVNVvqQ6Ijfk9QYsAUEGfQCKXfOm106XHBJR8RWt5hilj%2F1o1Uu92FZUEjBmgXq4NNQ719YV5HN4E8inI%2Fks%2BRjfb5IhJIdYyM5XjRS0A&X-Amz-Signature=18c3e32a88ea8df800438bad659dec4024ac7827e2870dd305c4236b69761f66&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625KVEG3M%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCJhDcBXySRqtMqJVWOvvhMQlNMCfm4e%2FB%2FO%2F0fSPUoewIgXn5kgaYmJekkkC0rMUGhiGBerE2P7NIcemMXYogtZaUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh5eH5UsBbP7BzDkyrcA0Dn2N5rkf%2Fw%2Fbbe9gnJf%2BcasBaSafkPbbhFMlpknJRJv%2B8bTC%2BHtoOi2VMT1Zf5Vw1NjaSebsr%2Bg1g9FztHf%2Bm3nMEq3eTLyUHB7NZXF42Bm5gfGE4Ho4LpEARQtTJmXOa45u7MCWSh5b5aV2djSA5bQZGZi1IlwuS%2BB8UdNnR0ZyBAAZM98kgX16YpCFzIoXDlw1XUtQ6rQWXTcCI7Nl%2FS%2BgGZKgFm28t%2B%2F1dGLYjfocReH%2Btd%2FzxjpeoAJq7Akln9qjb8OkRzcMOzEUNcv7SOmuh9PVQ%2BQVe5L9h1%2FqHoYaYbv0iCJRFHPOHZ7C2XdND%2FAtDK5XVUmQxSO0XDcZ1LaSfmxNaOQI7FrsHb3yP7ovw0Rgz%2FQdUbUCi2xCcv0NkY5UYcCBjV4etZXaazMPTlEvmfGrBRRed2lSQ2TQGawW6OvhKiQoPOpL1ET1D0GxRy13nwZZTEkLkpJHZPZ%2B7uCnX8YoBlHvcsFLMAdiAw1Ke4Qp2SJdWZ1TkYAQ5PaSC0jLtjrQdd9Q%2B%2Bvs%2FEsLxbcEZd1YgAKDUP2xBv2ZPZ0L8%2FSwmkSegyEOLnTR4FI5DaS1Qh61UQRSBza0iTKM3iuSfmFVf7b5vVQqRAxCL7cf2I0dZCiADkHArIMO7aw74GOqUBjmHGLWy0Pg9KVB0yxSvdRtmvQvbGsK8nlLUB%2BYMrDrTDsyIwEvrCPqnde3SXn%2BIFu2Onrb%2BVwBbZ1IeZ4dyrrOzoHQF5A9aqvHTS%2BNg0ufRcwGbLpUJpVNVvqQ6Ijfk9QYsAUEGfQCKXfOm106XHBJR8RWt5hilj%2F1o1Uu92FZUEjBmgXq4NNQ719YV5HN4E8inI%2Fks%2BRjfb5IhJIdYyM5XjRS0A&X-Amz-Signature=0b7b779998cf8c4af2cdafaac1a468a4c193ce5e1e6d480adf6b71d3d98de4de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
