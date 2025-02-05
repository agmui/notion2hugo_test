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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJINAN6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCID7UU3gDs3Cg9lX5xlqkP%2FkB8f%2BDpOc0IzEuyP3Cx4bwAiAlrO7fBTJNtW5HCaNS1w2UA3H4Krq5Y79CSEeI5EewwSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMEH0%2B7HDSNHQSUc4lKtwD0WbNwgB3FaNieVWO4u%2BzMhBNliqiLVNocCkWtaTMldbIw3TbArcTqr1wjwz%2BxAj%2BKDKzg%2BzM93fF4bg0%2FrQZam19pe1q28m7v4kquoKIEosi5j00cHeCFNg25ku3l1Oe7sU6tTtQouHa%2BpmnmL2U9e1buAOy2HB13JbYPRHjfV77C%2FSHreqoTC%2FYqqCFkuqQK%2BxaGQjUYqb7TdxdfIo3mmPH1UbNtaq5GkfDh0003tJ6OF7sL2nRixrIdBVHgOaoeyds7mi7NZ3QvaveRAJ02gl%2B5RUEdcBCbCsagGYmsXaiqytOwwa6GGrvwu7MH%2BV98ed0Bl%2F%2F4FGuNrFZbyE0g6W7EsV7v5n6tCdj7iNfBDIvDdsFWwlZcYtRs3vCkZxvrXovCb0C5TRU07ic1YqGyKa1yWKji5V4JELwUy84S47jJQZceIC9%2F0SmTHn5SMVXpRcmJ8Fb84v42%2FH3jPixvLRP9RIAT8Fwk6mkZVaG%2B9khlVxxvqd%2FKa%2FbRjLugvT21XfSwtU8pLVEDu%2Bztam%2BxSaJUX2zv5zrRSXjZdHnFGKFdIF2JTFQEDsGcDZcnochZG54lHn5%2BT8cJABolzdJ8FLqYHN1gobnsx5Z%2B8xh1IrOBUn2PWcqZpoGnxwwvryOvQY6pgGn%2FvtGiiAwsEt1NvTTD7fV9%2FODm7MaKYWyHbS%2BXbyGLWb2ia6sQ6BOn3nRQVvERWXqV9knJvrZYaPG3q06XpP99gc6spzOgFMzlXqqbCsf3rk2d5NkGvZGGCkCAPMjvQe9MgmeRevUDljtF0ub%2Bu%2BM5sW%2B6AzHgZvasSzLXPZU88264iGZ1larVqbS441ecHEvyuEOQrbY%2BcdvWLIT7nd%2F29HOOtUy&X-Amz-Signature=d67325b7aea4b5c6e983617591dce90c74f41cef2dc7a1241699b50ff04beb04&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJINAN6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCID7UU3gDs3Cg9lX5xlqkP%2FkB8f%2BDpOc0IzEuyP3Cx4bwAiAlrO7fBTJNtW5HCaNS1w2UA3H4Krq5Y79CSEeI5EewwSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMEH0%2B7HDSNHQSUc4lKtwD0WbNwgB3FaNieVWO4u%2BzMhBNliqiLVNocCkWtaTMldbIw3TbArcTqr1wjwz%2BxAj%2BKDKzg%2BzM93fF4bg0%2FrQZam19pe1q28m7v4kquoKIEosi5j00cHeCFNg25ku3l1Oe7sU6tTtQouHa%2BpmnmL2U9e1buAOy2HB13JbYPRHjfV77C%2FSHreqoTC%2FYqqCFkuqQK%2BxaGQjUYqb7TdxdfIo3mmPH1UbNtaq5GkfDh0003tJ6OF7sL2nRixrIdBVHgOaoeyds7mi7NZ3QvaveRAJ02gl%2B5RUEdcBCbCsagGYmsXaiqytOwwa6GGrvwu7MH%2BV98ed0Bl%2F%2F4FGuNrFZbyE0g6W7EsV7v5n6tCdj7iNfBDIvDdsFWwlZcYtRs3vCkZxvrXovCb0C5TRU07ic1YqGyKa1yWKji5V4JELwUy84S47jJQZceIC9%2F0SmTHn5SMVXpRcmJ8Fb84v42%2FH3jPixvLRP9RIAT8Fwk6mkZVaG%2B9khlVxxvqd%2FKa%2FbRjLugvT21XfSwtU8pLVEDu%2Bztam%2BxSaJUX2zv5zrRSXjZdHnFGKFdIF2JTFQEDsGcDZcnochZG54lHn5%2BT8cJABolzdJ8FLqYHN1gobnsx5Z%2B8xh1IrOBUn2PWcqZpoGnxwwvryOvQY6pgGn%2FvtGiiAwsEt1NvTTD7fV9%2FODm7MaKYWyHbS%2BXbyGLWb2ia6sQ6BOn3nRQVvERWXqV9knJvrZYaPG3q06XpP99gc6spzOgFMzlXqqbCsf3rk2d5NkGvZGGCkCAPMjvQe9MgmeRevUDljtF0ub%2Bu%2BM5sW%2B6AzHgZvasSzLXPZU88264iGZ1larVqbS441ecHEvyuEOQrbY%2BcdvWLIT7nd%2F29HOOtUy&X-Amz-Signature=afc1372e098f1ea7b454f58e4820ae5aec00a25d256f6fd67804cb02232ca4df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
