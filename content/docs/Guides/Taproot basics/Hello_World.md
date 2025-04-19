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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJLUSLTR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCKVqBP8Sk0O91dCn4R2wAvS%2FMRfOunrZ%2F4PmAttak4WQIhAMSLyBCdHBkK5f4fRXuwC4yC3BU60reScMFJMRuXzLi2KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRklQ1%2F3hs3JALgQMq3AOL4Y%2F6zY2e7%2BDcEFZXwmwsh5J26Og3a2lOnO6F9hkfF018%2FEwRfqrboMeLsFXiCG11p78udGBXMXMQqnA6vWRKU%2FJnrX00HjWKX5F%2F7Cm8A%2F%2BpXWnNffbLsWgx7qkkNDtQGSf4HC6ny%2B7NiC7S6HfMh2ees4RlmZGanJWLJmZTuMyKZMp1442gw%2B8Mf0MIPZ2R4uatBRPVK9A03O%2FLIxZ7JRjXpRdC93Hxp1sdC1pGdV%2F7Si88hEL1TF4iv7E2R96ym4u%2BbD2Mt5YzAwtzggew%2F5QOntU9rXB%2BDDoxne6HjjQz3dGoFxLwyGynyzh93VKOFR0uT%2FESkKcKuWO1relnOkcswVl%2BUWFQiDcOLoYgCdnK%2FchhaKQTZfwR2pONfG7cI4HKXHsM%2BwoogQBDLN0vo4flztKywZtTs3LcaVwG7c%2FWd5GqZBQ6Pbzbm8%2FhqLkOMy1bIR0WbMkOVSGKvQN7OFb9u57i%2B86t0KJC2HIMGHqIhaQdoZp4OGEm0ShAwIt72PhjkUaZ%2BzNV8fwHkkfQZGXsi1iB8OhF0tA0LvCkJdZslhbUxP%2Fpf0Wd6aHgSnts%2BEQVh0UL1Rxzbe5%2FdsbM7g562bZP7pOKXSrsWiVMy4OcugSDoUlQ6mcG4zD5npDABjqkAXQQCoZrrHdKzLOtJmebvR7MB6DNB3D9DsCoqygoFPW27hOLxtVUlrP1ps%2Ff3X5FAojWXbKHV9Mw0pMn1sOBB36tqAGuVpAaNtEqTZgKyn%2FefVylGNzDapSXMflZRO81Iho%2BaHtXBBg1DzUFrGng0%2BFahw1VczaDOR3QBEwLB3tuHgq286dN%2FQmn2A5OuhxBQTFUPnLhU4qiyRNhxr5fkvtGElAt&X-Amz-Signature=9ad71bc3d7f844263d65a8e6af3d56bbd4a1726e741030041dfb8ea902d48611&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJLUSLTR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCKVqBP8Sk0O91dCn4R2wAvS%2FMRfOunrZ%2F4PmAttak4WQIhAMSLyBCdHBkK5f4fRXuwC4yC3BU60reScMFJMRuXzLi2KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRklQ1%2F3hs3JALgQMq3AOL4Y%2F6zY2e7%2BDcEFZXwmwsh5J26Og3a2lOnO6F9hkfF018%2FEwRfqrboMeLsFXiCG11p78udGBXMXMQqnA6vWRKU%2FJnrX00HjWKX5F%2F7Cm8A%2F%2BpXWnNffbLsWgx7qkkNDtQGSf4HC6ny%2B7NiC7S6HfMh2ees4RlmZGanJWLJmZTuMyKZMp1442gw%2B8Mf0MIPZ2R4uatBRPVK9A03O%2FLIxZ7JRjXpRdC93Hxp1sdC1pGdV%2F7Si88hEL1TF4iv7E2R96ym4u%2BbD2Mt5YzAwtzggew%2F5QOntU9rXB%2BDDoxne6HjjQz3dGoFxLwyGynyzh93VKOFR0uT%2FESkKcKuWO1relnOkcswVl%2BUWFQiDcOLoYgCdnK%2FchhaKQTZfwR2pONfG7cI4HKXHsM%2BwoogQBDLN0vo4flztKywZtTs3LcaVwG7c%2FWd5GqZBQ6Pbzbm8%2FhqLkOMy1bIR0WbMkOVSGKvQN7OFb9u57i%2B86t0KJC2HIMGHqIhaQdoZp4OGEm0ShAwIt72PhjkUaZ%2BzNV8fwHkkfQZGXsi1iB8OhF0tA0LvCkJdZslhbUxP%2Fpf0Wd6aHgSnts%2BEQVh0UL1Rxzbe5%2FdsbM7g562bZP7pOKXSrsWiVMy4OcugSDoUlQ6mcG4zD5npDABjqkAXQQCoZrrHdKzLOtJmebvR7MB6DNB3D9DsCoqygoFPW27hOLxtVUlrP1ps%2Ff3X5FAojWXbKHV9Mw0pMn1sOBB36tqAGuVpAaNtEqTZgKyn%2FefVylGNzDapSXMflZRO81Iho%2BaHtXBBg1DzUFrGng0%2BFahw1VczaDOR3QBEwLB3tuHgq286dN%2FQmn2A5OuhxBQTFUPnLhU4qiyRNhxr5fkvtGElAt&X-Amz-Signature=98ea52c8d6f6cfbb87d956d47359eaf7f40c674de7a839f9a9b59363f3b2cb67&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
