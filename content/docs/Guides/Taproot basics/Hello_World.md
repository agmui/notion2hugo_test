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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBBRBU5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkQ4JGIgLAjGQiY2yn3kGkYpEAuBHSt0dZ3jPXPCYJJAiEA2ylxMndgg5rmWTdzGawxEMGZ6ZtepQEBTbJm55Q1zXAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAti62Xy8DsjRMFuzyrcA3Nu1lIcf6BQJKRZ5bmBDhCY%2Bt484iAS0JJ4%2Bh%2BE4uhRZ0FGFXM6A4aNEV5JA9ZDcowz1pLzk2%2BVHwGB89sKVepNKjO04V8iSMlbrn%2F65f4R0pYyqSawhZRjEFmoUw%2BC47WCkxzD6Ce9u2KSvPIp48Gi%2BsccWtdcnS%2F6fId4wj4MTYeV0awS9G%2BDXQcmnn9mJYTcKDij3eGdyD%2FSSFxeo0oPssJAo85Fxm%2BYMWFBSWBzqp%2F%2FemXZY%2BKrDPqR7eJ21CtXt3LVlFfQeR5e5t6DwXx3Ir1Y4pj7xUmg3GYBbFj4%2FSFEV6DHXKGWaA1V8Uzi0XkycYXaaCrxgcuPLI58s8rj506O7WolrOVj%2BEuggilMjuftv7rAHIrxu%2B6SV257JNYrzNvez0ShCcawMKv3pfhD1xqoligvNvOt6RQeTnb2H4NTyL7X6n6LWzPabKoPSIHpXGRlhaht1uA1LCOxSk5%2F%2FbUaibu8vynUDIAgmV0OhCIS2uqCX24JUQI1q6e0eSNlhImNI4jUNJUogJyI5K8aUShCbZUzHUynj9PPXxlCiXxPO05T14D9bX7%2BWcF2cqjLr20xx874eJkVLzE338FtrRChweXGk%2BzyKxCtwqqzTc8mLuPd87NMQPm1MJXv2L0GOqUBPd%2F1jVrdx%2BPMxKea9WxphcqpEZR0tlMy4e4nUZ5uobETb%2B56lnLLTrc%2By1jJr7pr3M1fXhGGg%2FJZUSNDC1FK4nomRTF3wpfDgew6IyYZi%2BibLDblltd27E9fixnUZEfPXXJ5nho%2BFOYn5u7ZDCKO3bM9X7k9iyC%2FLvPY4rpXqzcloVIa21icdWin8cKPrylFQVaypKDm1%2By2wWGb5yo6Tn6%2BJkT7&X-Amz-Signature=5b7b782a1c0a4e4c59c18eed19bdea25e871d16be2fe0b83792fd0e4d18e2489&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBBRBU5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkQ4JGIgLAjGQiY2yn3kGkYpEAuBHSt0dZ3jPXPCYJJAiEA2ylxMndgg5rmWTdzGawxEMGZ6ZtepQEBTbJm55Q1zXAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAti62Xy8DsjRMFuzyrcA3Nu1lIcf6BQJKRZ5bmBDhCY%2Bt484iAS0JJ4%2Bh%2BE4uhRZ0FGFXM6A4aNEV5JA9ZDcowz1pLzk2%2BVHwGB89sKVepNKjO04V8iSMlbrn%2F65f4R0pYyqSawhZRjEFmoUw%2BC47WCkxzD6Ce9u2KSvPIp48Gi%2BsccWtdcnS%2F6fId4wj4MTYeV0awS9G%2BDXQcmnn9mJYTcKDij3eGdyD%2FSSFxeo0oPssJAo85Fxm%2BYMWFBSWBzqp%2F%2FemXZY%2BKrDPqR7eJ21CtXt3LVlFfQeR5e5t6DwXx3Ir1Y4pj7xUmg3GYBbFj4%2FSFEV6DHXKGWaA1V8Uzi0XkycYXaaCrxgcuPLI58s8rj506O7WolrOVj%2BEuggilMjuftv7rAHIrxu%2B6SV257JNYrzNvez0ShCcawMKv3pfhD1xqoligvNvOt6RQeTnb2H4NTyL7X6n6LWzPabKoPSIHpXGRlhaht1uA1LCOxSk5%2F%2FbUaibu8vynUDIAgmV0OhCIS2uqCX24JUQI1q6e0eSNlhImNI4jUNJUogJyI5K8aUShCbZUzHUynj9PPXxlCiXxPO05T14D9bX7%2BWcF2cqjLr20xx874eJkVLzE338FtrRChweXGk%2BzyKxCtwqqzTc8mLuPd87NMQPm1MJXv2L0GOqUBPd%2F1jVrdx%2BPMxKea9WxphcqpEZR0tlMy4e4nUZ5uobETb%2B56lnLLTrc%2By1jJr7pr3M1fXhGGg%2FJZUSNDC1FK4nomRTF3wpfDgew6IyYZi%2BibLDblltd27E9fixnUZEfPXXJ5nho%2BFOYn5u7ZDCKO3bM9X7k9iyC%2FLvPY4rpXqzcloVIa21icdWin8cKPrylFQVaypKDm1%2By2wWGb5yo6Tn6%2BJkT7&X-Amz-Signature=4aeaea982924f970495101a2855a6ca61b4d67cfae310a87e0afb6798ebfdcbd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
