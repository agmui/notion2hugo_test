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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7CRUBK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIANkUlYIu7TiWwsXtPubDWYscYqDJb8w7e6GcmHf8sYeAiEAq%2BjE1MSdMwVi%2Fz7BZAq%2FWy7gr98oDp4kH03lQOgyn14qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfyk%2FaMysujtH225yrcA9IO0Q%2FgYZOT22CfS43BFa9z9ajEZgQA6qaH1ZSrpXxfTIU8hINUhD%2F%2FD5hlnSLgge%2BroIiGCqZ4y68IU1nFgDE6sQRLYZLTgKDWyROojdlF7ntSXEyMrZ9AXL45vN08gGw4ATUTcGPxB0HIBRm4%2FOf1rm7Go9unMY7pIdaM8AjROf03fBpjYaKkR5rToniYGKpq6B8Z24NjHoDdnfqTi2zJ%2F30B14FhLrAtA3KrHhF0ZYAHQE11LjGjlgLlzMXEUqxXyUW5917uLIbmU48LY9RU5OBah%2FR2WrLp67aWmXXOx1FezZE7TkTn6c%2BKaQUMjy%2F0%2FEQ%2BPfuTcPcqWv2JweXXlC6SCK%2BxjfrCSgE78Uv8aOYKi3FSBssEdt0S4FaArviR4JtZWv5tS%2B1zYt99TGRy%2F5sMzHz9ym%2Bd5StIR2%2FtPsiH%2Fg5cAw6bqshtexgNnJMUzprk5QDZ0tmWOVFN3ks92oTKgLvluciJargLmWXaztWh%2F%2BUsnG4tEW5lu8qBDxs8xKNQvWfSF1ADil6SVBejQjhZaU6Ny3he32rIN7AGbzUxCCbTC1NG38c%2BTQLtH4OgsG2CIPRmT1yYfqsbeUcP9CmKiHvKnen3lZqFRuPFfCka%2F%2BpXc%2B2lqyRoMLDe8MEGOqUBmgSrqIXlJoXZWON4WoT58bSCxKb8UJmWvzSf%2FhYbRxh%2Ftpg6B%2BlJhOZY9gK8YiBKJoIfm4d6NtnONj6YMcr2N%2B%2B698%2BG8YhxtqDWdaICcQFHGehKvpDFKXdmHDQbRPm1ST6OG6gDoqh0R719YBs5%2FgdzkLGPW48GTdkCjqDHB%2F7tnMtfI9LeQgOif8crjL%2BSYS8eTgaXXIlCm%2FfRlDgRj4mJ3hmE&X-Amz-Signature=9af09caad1d08fd9cd9d57ad6282029f2a0122bcdf14b7d2181af4d6b06a68a4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7CRUBK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIANkUlYIu7TiWwsXtPubDWYscYqDJb8w7e6GcmHf8sYeAiEAq%2BjE1MSdMwVi%2Fz7BZAq%2FWy7gr98oDp4kH03lQOgyn14qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfyk%2FaMysujtH225yrcA9IO0Q%2FgYZOT22CfS43BFa9z9ajEZgQA6qaH1ZSrpXxfTIU8hINUhD%2F%2FD5hlnSLgge%2BroIiGCqZ4y68IU1nFgDE6sQRLYZLTgKDWyROojdlF7ntSXEyMrZ9AXL45vN08gGw4ATUTcGPxB0HIBRm4%2FOf1rm7Go9unMY7pIdaM8AjROf03fBpjYaKkR5rToniYGKpq6B8Z24NjHoDdnfqTi2zJ%2F30B14FhLrAtA3KrHhF0ZYAHQE11LjGjlgLlzMXEUqxXyUW5917uLIbmU48LY9RU5OBah%2FR2WrLp67aWmXXOx1FezZE7TkTn6c%2BKaQUMjy%2F0%2FEQ%2BPfuTcPcqWv2JweXXlC6SCK%2BxjfrCSgE78Uv8aOYKi3FSBssEdt0S4FaArviR4JtZWv5tS%2B1zYt99TGRy%2F5sMzHz9ym%2Bd5StIR2%2FtPsiH%2Fg5cAw6bqshtexgNnJMUzprk5QDZ0tmWOVFN3ks92oTKgLvluciJargLmWXaztWh%2F%2BUsnG4tEW5lu8qBDxs8xKNQvWfSF1ADil6SVBejQjhZaU6Ny3he32rIN7AGbzUxCCbTC1NG38c%2BTQLtH4OgsG2CIPRmT1yYfqsbeUcP9CmKiHvKnen3lZqFRuPFfCka%2F%2BpXc%2B2lqyRoMLDe8MEGOqUBmgSrqIXlJoXZWON4WoT58bSCxKb8UJmWvzSf%2FhYbRxh%2Ftpg6B%2BlJhOZY9gK8YiBKJoIfm4d6NtnONj6YMcr2N%2B%2B698%2BG8YhxtqDWdaICcQFHGehKvpDFKXdmHDQbRPm1ST6OG6gDoqh0R719YBs5%2FgdzkLGPW48GTdkCjqDHB%2F7tnMtfI9LeQgOif8crjL%2BSYS8eTgaXXIlCm%2FfRlDgRj4mJ3hmE&X-Amz-Signature=2d871ec46bb10abc94d8e829853a8eaf6a4105cce9cd86bbcd41367aee014bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
