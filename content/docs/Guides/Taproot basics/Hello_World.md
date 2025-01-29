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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2K5UQD7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCSUQ6b1E6%2FcKmNr7tOUiImpg%2BVMFZiylNVZJdJP4RZPwIhAPlb7bRn5p1CqpRKexrETu1VH4KkrHyPdBclUWh%2BrmBeKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3u6gyBwYS985btKMq3AMODcZ31LCj0QkcikXYUgVJL0IU%2FHj4pPMhi59%2BiFxUZMG%2FokyJfaDOaqWSFQElAXWq0OYDDoVNEbrXXTkrtdLGhJllQ6isFXpYO5BP%2BqXi57krgmsZRe%2B0C5fK361gisM5NG37zcxyZsm2ACEFPM%2BvzPMJunpbGtOVgfMvP0Gcwu0DbeRyX7tQyM8n3YLFA31n09P1orXauHStNQjan4PgQ7Nag0Os9NqNATakJKVxtFBAWFtWjdXfmkrgGxwnwiUruJOPaaBM6Rs24TP02u6pCUKvD6cYWaMT9R8Puxj29jjemsnQg0RBfIYU6C4731HNt4fCWPGaMLfd2KrhMS1mjiPeME0UxUz6TZ9IgdnrK5ehwAf6zZrZ3iRT7TAJwn%2BLJOxHQCzeK%2BzZZ54lBmN5FyLViPyrPf%2BJ0ECYQVfeUK3yccNnnpF%2FDg%2FxTohdiA%2Bin5CcRsdam6bluzIh3U1Rv9m5uc0ddvuN5cpq9k8nHIpqoctZHmqirnpGptaY%2FwO6PTlghrJKKsBbGKXwip7pIi9leLRp860b3hN1KC%2BvIjd9w03q7IReCX2VMUmSytRsjhYZowmpxiJzbh82%2Fl46wDajROxmoaqV4%2Br%2FxpQzH84uMT%2FIksB7kAwo1jCqhea8BjqkAeO%2F7l9M2j%2FLft3QwtaBsQPaKpXYAa1UizfPMz92%2F%2B%2F0J3z2wDMfjoHVXQw8WoS%2BXFcIi9vbqCblIdBPa2Pw%2F9Hi96Vfx4FpPhoN%2B%2FRDNEtO%2BDsH24m%2Fpmj%2B6Ne%2F%2B%2F7RI6iRhnoob8hH4knIjeC0IqxxGiN1530UQqbvz%2B12JXBtNJEbp5mroOpGcakxOkZelopa8duaD9kWrx%2F4V7robLm0HVEK&X-Amz-Signature=e1c467e24f0bba74869e54e89d3707a597014a9209d338db5b64390058142cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2K5UQD7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCSUQ6b1E6%2FcKmNr7tOUiImpg%2BVMFZiylNVZJdJP4RZPwIhAPlb7bRn5p1CqpRKexrETu1VH4KkrHyPdBclUWh%2BrmBeKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3u6gyBwYS985btKMq3AMODcZ31LCj0QkcikXYUgVJL0IU%2FHj4pPMhi59%2BiFxUZMG%2FokyJfaDOaqWSFQElAXWq0OYDDoVNEbrXXTkrtdLGhJllQ6isFXpYO5BP%2BqXi57krgmsZRe%2B0C5fK361gisM5NG37zcxyZsm2ACEFPM%2BvzPMJunpbGtOVgfMvP0Gcwu0DbeRyX7tQyM8n3YLFA31n09P1orXauHStNQjan4PgQ7Nag0Os9NqNATakJKVxtFBAWFtWjdXfmkrgGxwnwiUruJOPaaBM6Rs24TP02u6pCUKvD6cYWaMT9R8Puxj29jjemsnQg0RBfIYU6C4731HNt4fCWPGaMLfd2KrhMS1mjiPeME0UxUz6TZ9IgdnrK5ehwAf6zZrZ3iRT7TAJwn%2BLJOxHQCzeK%2BzZZ54lBmN5FyLViPyrPf%2BJ0ECYQVfeUK3yccNnnpF%2FDg%2FxTohdiA%2Bin5CcRsdam6bluzIh3U1Rv9m5uc0ddvuN5cpq9k8nHIpqoctZHmqirnpGptaY%2FwO6PTlghrJKKsBbGKXwip7pIi9leLRp860b3hN1KC%2BvIjd9w03q7IReCX2VMUmSytRsjhYZowmpxiJzbh82%2Fl46wDajROxmoaqV4%2Br%2FxpQzH84uMT%2FIksB7kAwo1jCqhea8BjqkAeO%2F7l9M2j%2FLft3QwtaBsQPaKpXYAa1UizfPMz92%2F%2B%2F0J3z2wDMfjoHVXQw8WoS%2BXFcIi9vbqCblIdBPa2Pw%2F9Hi96Vfx4FpPhoN%2B%2FRDNEtO%2BDsH24m%2Fpmj%2B6Ne%2F%2B%2F7RI6iRhnoob8hH4knIjeC0IqxxGiN1530UQqbvz%2B12JXBtNJEbp5mroOpGcakxOkZelopa8duaD9kWrx%2F4V7robLm0HVEK&X-Amz-Signature=9adfd9c7e464c1ff59f8bcd018c48374d0cc79e8bacab1a34fb4c5fa31da5b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
