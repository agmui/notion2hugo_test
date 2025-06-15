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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OIFXO2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDXrY%2Bi7%2B25z%2B81y8CXGcNR%2F4I6PKGHwiqZ1AVbjVuyIAiBUMFaIpBxR3hSLjSIupJeQv0liIqk9FD42sdz1%2B10BVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMEpkSvE54tp8FZDOdKtwD0cabCB5EL4of8OGXY8EkYz5Dk3Q7yntwBvVFlMewIrjJXWz1mN4RMR1ESx2BgPVzltW7ZYUtIOvbUMBsQd0%2BVJKKqDn1hy762%2B%2FWFjxT3Sh06tY3UzPODhU1qOsYgxJvjOCTm5bOLf7GhtVwaz6hqmu2V43eRPaVbH8xhSIXs2XNKpKGFq%2BjzOQt%2B0UPOpfiRLyDTzdk%2FmUUB8YXmrj9BJAlVmu0CNfnvsxLoY56%2BVkf4Z7%2Bv6Li3bPZXKATOTiaZuDSMIzztx%2BS2IRbSMXr62UZN10gLt0xRQgBGdlEsk8%2BWASoTGKHHLd1JK9E%2FaYjLLEx5u%2F%2Bi%2FPplZVqyVxcE44b30ReGucMLHf4M2uHLC7GWEgQxMbVCpFEAe4fONl8dyY0dfbrFoabMKFpZ%2FoK0y73D9CnXyXDtaDGULtUPUOdQpZehJwdOcmEkI%2BdtDaWQqmkz3dHpuCYfc44FUaovMKbS6CwTMqwMUEQLgVWvJLaAjn8IAbmPqV0feqD53wosKnjQyx3ATmO3q%2BAx0eas675r9DXd5wAWGyluP8I5AN8gAWFlLXkPJCpZARtjQ2jZcTjNoJ%2BFt27Uq93GcFNETEPM51H3F%2FjKigot1RqytnDjcYJxyRUh0PxKZkwvIO7wgY6pgHoAZq1QIFQiJSYdXinOe3%2BO%2FAhgT4oElFNJHSeI9vXw9MZGx9C7LW6h65A5tMPICMtoic3b%2B2V5n220oQtwjIYV4nuJzj7T%2FnDh7Yu92z0J7wSWk8J8DmfP91Hch7ynxWdTmnJ4p4oLzBhjevRXESyUntAMzlZytWG%2F865TUvYPM%2FfCx598f%2BgS3t9L39E4AQzJcnVOO2oXnWFAcGOMsxP2MYSkrWS&X-Amz-Signature=660c6f2c0c5d8cfdcdbd22eeb85394f6c630cf707cecd042f43e59f39eadf7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OIFXO2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDXrY%2Bi7%2B25z%2B81y8CXGcNR%2F4I6PKGHwiqZ1AVbjVuyIAiBUMFaIpBxR3hSLjSIupJeQv0liIqk9FD42sdz1%2B10BVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMEpkSvE54tp8FZDOdKtwD0cabCB5EL4of8OGXY8EkYz5Dk3Q7yntwBvVFlMewIrjJXWz1mN4RMR1ESx2BgPVzltW7ZYUtIOvbUMBsQd0%2BVJKKqDn1hy762%2B%2FWFjxT3Sh06tY3UzPODhU1qOsYgxJvjOCTm5bOLf7GhtVwaz6hqmu2V43eRPaVbH8xhSIXs2XNKpKGFq%2BjzOQt%2B0UPOpfiRLyDTzdk%2FmUUB8YXmrj9BJAlVmu0CNfnvsxLoY56%2BVkf4Z7%2Bv6Li3bPZXKATOTiaZuDSMIzztx%2BS2IRbSMXr62UZN10gLt0xRQgBGdlEsk8%2BWASoTGKHHLd1JK9E%2FaYjLLEx5u%2F%2Bi%2FPplZVqyVxcE44b30ReGucMLHf4M2uHLC7GWEgQxMbVCpFEAe4fONl8dyY0dfbrFoabMKFpZ%2FoK0y73D9CnXyXDtaDGULtUPUOdQpZehJwdOcmEkI%2BdtDaWQqmkz3dHpuCYfc44FUaovMKbS6CwTMqwMUEQLgVWvJLaAjn8IAbmPqV0feqD53wosKnjQyx3ATmO3q%2BAx0eas675r9DXd5wAWGyluP8I5AN8gAWFlLXkPJCpZARtjQ2jZcTjNoJ%2BFt27Uq93GcFNETEPM51H3F%2FjKigot1RqytnDjcYJxyRUh0PxKZkwvIO7wgY6pgHoAZq1QIFQiJSYdXinOe3%2BO%2FAhgT4oElFNJHSeI9vXw9MZGx9C7LW6h65A5tMPICMtoic3b%2B2V5n220oQtwjIYV4nuJzj7T%2FnDh7Yu92z0J7wSWk8J8DmfP91Hch7ynxWdTmnJ4p4oLzBhjevRXESyUntAMzlZytWG%2F865TUvYPM%2FfCx598f%2BgS3t9L39E4AQzJcnVOO2oXnWFAcGOMsxP2MYSkrWS&X-Amz-Signature=8e359eb06ebd929ab95065f1509ec5087d43aa1711b91c9dfbf19939fa57cafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
