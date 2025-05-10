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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EBRURX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB2WdxKzq4jUqPgilD0kKo4iQP4vgtRC13C24gtEzyPxAiEAnxEz9xlixxtJBCqsU633%2FCg7p9p4nkAwCBPOZ3qCUwIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB0vgQFhxA1NPrkGircA5PC2iE%2BbS5UdPTlh1gAQBEnYu%2BtQKCkcsBotHGvJ5vajJQ4G60sclzvYLIs9O3XW0uxDzfjKz9x8scoo5%2F2DLyxykqWGvg6pl%2B3yMQvrWj2HPbLLxuGfJSMx1HVRg%2FNjH8noPnTSK10NEuBPw3TbVv6Hfs34FZCdl7v7wNkX%2FFqfep4G3WP5RCCXYwDDmnnhi4KHBMAwk9zZ6X99b6ShP8mQv8bIikiUsIpJtRbji6PCxv3wmYsMueSUT%2F1ovQkLBqPDNB04KmP1R70yh3y5xmZ1YOCss29ViZD90RS91DpFfUkaSBgNWYwhCHVgtRQa%2Bv%2FTNY23Uwh26g0zz%2FQ4GT%2Fq12OPBE7yY8MQ8Ey%2Bfmu9IGOKs7U9QibvCKsr%2FEiIvUQtOOtVEdN9bY%2BhgFNU8utIcfwvww1%2FaTOvoyDe%2FeDD%2FeCqD2R%2Bwd701Qg8tbuolHu5abRCLXNKeIOyss52WNhCStJo9dICUANQQgiv%2B3PT3UQ0xWqr1jnwTv%2FBmOKkVs6xSs8AjypfyFL%2FQcwDAVf2XHJthfcTj0xa%2BBNYtfGslgOfHRuKq2HMB3KjJ2GWDTi5lsLLkARXYlaqD46Nif6yoX6O4%2B2jlh%2FVxj1wYQgWhaDXjg6ImBcHX4wMNOG%2FsAGOqUBoo7rCh4jsVmBGKDHkZ%2F9Vw0S8U1cfT4zri%2BFUsnPIqBjBa5LYVvcZOcB%2B0C%2BR%2BKuP3VXlTvptwiEj7k1xkehkD181Lq8BE0RkrunOP8B3DNGSXHMFZpHmUyWS5BU30TXFMW8BVTp5fHlYxLpJ%2FnLXcmxGMjH1KGPuGc4vjGrmFKAhLA3J3uWxts3qUU6RfVVY2OWH0IXyI2EQBxGb7I%2FxU9aLgUN&X-Amz-Signature=df1705a70d1cd0aee42fe25bacc8fef3eed5261363523de83d9b7743127bbd04&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EBRURX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB2WdxKzq4jUqPgilD0kKo4iQP4vgtRC13C24gtEzyPxAiEAnxEz9xlixxtJBCqsU633%2FCg7p9p4nkAwCBPOZ3qCUwIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB0vgQFhxA1NPrkGircA5PC2iE%2BbS5UdPTlh1gAQBEnYu%2BtQKCkcsBotHGvJ5vajJQ4G60sclzvYLIs9O3XW0uxDzfjKz9x8scoo5%2F2DLyxykqWGvg6pl%2B3yMQvrWj2HPbLLxuGfJSMx1HVRg%2FNjH8noPnTSK10NEuBPw3TbVv6Hfs34FZCdl7v7wNkX%2FFqfep4G3WP5RCCXYwDDmnnhi4KHBMAwk9zZ6X99b6ShP8mQv8bIikiUsIpJtRbji6PCxv3wmYsMueSUT%2F1ovQkLBqPDNB04KmP1R70yh3y5xmZ1YOCss29ViZD90RS91DpFfUkaSBgNWYwhCHVgtRQa%2Bv%2FTNY23Uwh26g0zz%2FQ4GT%2Fq12OPBE7yY8MQ8Ey%2Bfmu9IGOKs7U9QibvCKsr%2FEiIvUQtOOtVEdN9bY%2BhgFNU8utIcfwvww1%2FaTOvoyDe%2FeDD%2FeCqD2R%2Bwd701Qg8tbuolHu5abRCLXNKeIOyss52WNhCStJo9dICUANQQgiv%2B3PT3UQ0xWqr1jnwTv%2FBmOKkVs6xSs8AjypfyFL%2FQcwDAVf2XHJthfcTj0xa%2BBNYtfGslgOfHRuKq2HMB3KjJ2GWDTi5lsLLkARXYlaqD46Nif6yoX6O4%2B2jlh%2FVxj1wYQgWhaDXjg6ImBcHX4wMNOG%2FsAGOqUBoo7rCh4jsVmBGKDHkZ%2F9Vw0S8U1cfT4zri%2BFUsnPIqBjBa5LYVvcZOcB%2B0C%2BR%2BKuP3VXlTvptwiEj7k1xkehkD181Lq8BE0RkrunOP8B3DNGSXHMFZpHmUyWS5BU30TXFMW8BVTp5fHlYxLpJ%2FnLXcmxGMjH1KGPuGc4vjGrmFKAhLA3J3uWxts3qUU6RfVVY2OWH0IXyI2EQBxGb7I%2FxU9aLgUN&X-Amz-Signature=a20545b25e3494854eb3e10d2e2c363be67fc559431c86f18153abc4ae1d3126&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
