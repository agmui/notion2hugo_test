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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFO6YBD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1yF213%2BSA2oKJN8PZPOsEKisSuc47GGfN9bUop0pGEAiBbxhi8vdt3KYQMJSFi8dtyybiLnhCqOgP4RV5IMDgZnyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSXJOeSP0nf51Ll40KtwD7guFR2PKNOpMBRoSJAiHb1zUaCoJFHkeE5eRMY6N3dpKgZ2BsfR%2F6N3OcE%2Bdod9GoLxUalhhKkc%2FswNxgz58%2B5fk7ee76wbXWYHyEOMQjFVkuPZL6h2qxisxdT9gfl4yJUQz5w4X5nOfSv0%2B6iJURS7K2SByyzN57mJ4WxZt33h4K8C%2FEE3xcwfdXgcx4nUX4ytzj6CQfwPOYamFsBl6Irgq9%2Fqq%2B3ISD2YswnboFi16Bmb%2FPcXcL%2BsgL3fnDqpxcr4lfFPc9nEiyrNuMPXujCyY%2FKVvF8s8hYOsPdLdKHyapFz0icE1t%2FhJcnghGDbyAeZAWxljZKpGg%2BWk2frTBWyjQ5S86OLlrFyhNayZFDFx64eOhA5mrDgZEMJ1YOms0iQLvNB8TNDKgXwZMSVMY7l6B%2BrKidR84sc678PIXCXQISQhRoBAPuob9qQIUw%2BtN2jCnLUGOsqME9YvnnN%2FL0m3QtSxS0TYipiCbkSB09BWFAp6zsu6hXDmbHZHaukFHQSyhWzUp831v7y7s8sQKsSYTQ72BSM9bo8phOwnQo0hpgbcL1Ah11xn0TT6n3t0SpXFHBo2AC7xtzaeN6U8HhlLaO8n2MJw%2FD7OwbhxRfJVFKX9Lwz6qk8mt%2BMwoca0xAY6pgEQsc%2B5X4F1qpU2LSWxOp9cBmJ9RrvOeb2JUqQuAmg4%2Bok%2BevVyc50RM%2Bm4wsnshc7Y3IwqMOX1VktHOq3pSEAsT0yO7YYAKNylvTReESd9LfAU414lCfZrmzo9N6ORjzEnr1KkLtEn0vSZPyv4HPoZj3ep49UKn9%2FTYEF8Cj40sJBfVx0ulUqI7q0ySgttO%2Frj8JV4hsTVTdlYig%2Fpk0GxbmKx6aHX&X-Amz-Signature=91c2e2a3b878b82fa0061e7ba50612f3fe551d8ed333042bf0f7741ca1196bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFO6YBD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1yF213%2BSA2oKJN8PZPOsEKisSuc47GGfN9bUop0pGEAiBbxhi8vdt3KYQMJSFi8dtyybiLnhCqOgP4RV5IMDgZnyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSXJOeSP0nf51Ll40KtwD7guFR2PKNOpMBRoSJAiHb1zUaCoJFHkeE5eRMY6N3dpKgZ2BsfR%2F6N3OcE%2Bdod9GoLxUalhhKkc%2FswNxgz58%2B5fk7ee76wbXWYHyEOMQjFVkuPZL6h2qxisxdT9gfl4yJUQz5w4X5nOfSv0%2B6iJURS7K2SByyzN57mJ4WxZt33h4K8C%2FEE3xcwfdXgcx4nUX4ytzj6CQfwPOYamFsBl6Irgq9%2Fqq%2B3ISD2YswnboFi16Bmb%2FPcXcL%2BsgL3fnDqpxcr4lfFPc9nEiyrNuMPXujCyY%2FKVvF8s8hYOsPdLdKHyapFz0icE1t%2FhJcnghGDbyAeZAWxljZKpGg%2BWk2frTBWyjQ5S86OLlrFyhNayZFDFx64eOhA5mrDgZEMJ1YOms0iQLvNB8TNDKgXwZMSVMY7l6B%2BrKidR84sc678PIXCXQISQhRoBAPuob9qQIUw%2BtN2jCnLUGOsqME9YvnnN%2FL0m3QtSxS0TYipiCbkSB09BWFAp6zsu6hXDmbHZHaukFHQSyhWzUp831v7y7s8sQKsSYTQ72BSM9bo8phOwnQo0hpgbcL1Ah11xn0TT6n3t0SpXFHBo2AC7xtzaeN6U8HhlLaO8n2MJw%2FD7OwbhxRfJVFKX9Lwz6qk8mt%2BMwoca0xAY6pgEQsc%2B5X4F1qpU2LSWxOp9cBmJ9RrvOeb2JUqQuAmg4%2Bok%2BevVyc50RM%2Bm4wsnshc7Y3IwqMOX1VktHOq3pSEAsT0yO7YYAKNylvTReESd9LfAU414lCfZrmzo9N6ORjzEnr1KkLtEn0vSZPyv4HPoZj3ep49UKn9%2FTYEF8Cj40sJBfVx0ulUqI7q0ySgttO%2Frj8JV4hsTVTdlYig%2Fpk0GxbmKx6aHX&X-Amz-Signature=380b0271de39e0c493193b65984df36eb5019b5857db9edc35c8adca4c2e3502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
