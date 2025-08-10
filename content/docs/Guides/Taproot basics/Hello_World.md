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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N77EPZC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeP6DH8EsISbF8Ya1l%2FeEei5Vb8JTFb968sW0V1udBjAiEAtcW%2B3vIRTcIsTM3G3U0S97SsFRrSR8Vu7omu2FMDtPMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu1w5kZ%2FtF2zXrOKircA4aJqwP3bQfkPJTHC821JbbLOMr60W5HVOWri%2BE95cgMycDdatXDs7kn6uVbIsquAjeOPiwMG8zCXwOYBqTwGfrHSW92cuVQ50Yla8mj8NwoEXvRaoR9WF%2BbIpwAN1j0VoSHODZqKNprrn2Jz0tk8FG3ikUHJM%2FhxnVBYZ2SBGSFztUKGikMI6mhlpmFRcFZ3rPTQFCxdijCMBal1HQRO7mEs1fDHlcQmj6kNHi9gmOnu81QOZbZqUijn5XyhBJNSMihjhHlZRuCCsr4JWMXk0ScWGjoRmJ5DzECjKh%2FgAKnQb5XbvYQgwZ6uuRpn5LnSk4VDlYEz4N%2BA6YG1XUubCs6cK4i32tKeizsGNb3ZyfAcZxwU9woV4CXdd7i4%2BPhxuqRCPAEoRdY0wSWmN8MJgrkA0DcZx66BzUsOf2O3lgSjRE8RTG03wiIu%2FAnNSigqyEletc81ZaD5jnezczkPmrkv5r%2BbjB1zdSzo3gBkOUp7xKFWFcbYa6gE5bLu2wrSuq3JYY%2BAp7D3kfv9T%2B1zwjsVFPh%2BJRnF%2FSJ6XrZZCcjhSqt0izUzJinVCPoM7FBmB%2FRAhcgE0EbMTa8Fn7HM5Lz4JdZyxEMLN6jBMQVrgpMi9w%2F5yXAKAmRU%2B%2FIMO7R4MQGOqUBYrhOU9%2Fut0mfeYtwDKsebfys3rL9X1VG6ls07zla%2F1qKpjF6cz7azAAjCooirjv1a%2FK48ZDUcSAjE0NQCWG5iYgeQaO0tQjG0mDlTIecHBRRHQhcEKTnn7Brmpb0Zd%2FNCUZCaJc7IasEl7yWhPaSLqomO8VWTGncz2TZk7kDDDbwh9AWh9TMveDlGDRJp01w5GkoXr07aDuHRmScu1v4rgsnuwuD&X-Amz-Signature=14bc8fa9c0a7fd8e2dc7c52afe6e62ccd4ad298377cf3806cf7573382776cd08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N77EPZC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeP6DH8EsISbF8Ya1l%2FeEei5Vb8JTFb968sW0V1udBjAiEAtcW%2B3vIRTcIsTM3G3U0S97SsFRrSR8Vu7omu2FMDtPMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu1w5kZ%2FtF2zXrOKircA4aJqwP3bQfkPJTHC821JbbLOMr60W5HVOWri%2BE95cgMycDdatXDs7kn6uVbIsquAjeOPiwMG8zCXwOYBqTwGfrHSW92cuVQ50Yla8mj8NwoEXvRaoR9WF%2BbIpwAN1j0VoSHODZqKNprrn2Jz0tk8FG3ikUHJM%2FhxnVBYZ2SBGSFztUKGikMI6mhlpmFRcFZ3rPTQFCxdijCMBal1HQRO7mEs1fDHlcQmj6kNHi9gmOnu81QOZbZqUijn5XyhBJNSMihjhHlZRuCCsr4JWMXk0ScWGjoRmJ5DzECjKh%2FgAKnQb5XbvYQgwZ6uuRpn5LnSk4VDlYEz4N%2BA6YG1XUubCs6cK4i32tKeizsGNb3ZyfAcZxwU9woV4CXdd7i4%2BPhxuqRCPAEoRdY0wSWmN8MJgrkA0DcZx66BzUsOf2O3lgSjRE8RTG03wiIu%2FAnNSigqyEletc81ZaD5jnezczkPmrkv5r%2BbjB1zdSzo3gBkOUp7xKFWFcbYa6gE5bLu2wrSuq3JYY%2BAp7D3kfv9T%2B1zwjsVFPh%2BJRnF%2FSJ6XrZZCcjhSqt0izUzJinVCPoM7FBmB%2FRAhcgE0EbMTa8Fn7HM5Lz4JdZyxEMLN6jBMQVrgpMi9w%2F5yXAKAmRU%2B%2FIMO7R4MQGOqUBYrhOU9%2Fut0mfeYtwDKsebfys3rL9X1VG6ls07zla%2F1qKpjF6cz7azAAjCooirjv1a%2FK48ZDUcSAjE0NQCWG5iYgeQaO0tQjG0mDlTIecHBRRHQhcEKTnn7Brmpb0Zd%2FNCUZCaJc7IasEl7yWhPaSLqomO8VWTGncz2TZk7kDDDbwh9AWh9TMveDlGDRJp01w5GkoXr07aDuHRmScu1v4rgsnuwuD&X-Amz-Signature=8d4db1af8f09830267315a3094cf1ea535da223c4baf8abac8f50a81ba240b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
