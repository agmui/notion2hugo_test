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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMT6KEQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHGNUim%2FouOqkcWmbEfzUEujUj1PIBNvdmcOza%2BM4S8nAiAd6W6ckDxFWJKudCs%2F8dopwwrVXjxlrPbwDECiK1gTVSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMXj3JwWsU7HssR1qAKtwDDafNE1I%2F2vZallNQXz7jjJO4ZC3ECiejdgdRIpF848jXCoJenNd6G1Y5FGCera7tlmXQbusLNdShlyW4H7PaP%2FM%2FlTTOW5N%2BVMFzb4gPjQ8PbfVpAN8XRHN5hWLkb42193SXukf31stycz45jvR9vBck5XZmAwY51Ww565NDiHpzVvof%2FqJI3doHg9vcCEE9MJcu%2FFj%2FsLaFiMlC2XhrMIa3UheAGjiQa6iVQVKBAK7LTJPRabG1lhjt5RyP85geyGJWIy85MBOVJxgG7THQUwbwLj8fJdTHvt9s5NKUylJ%2BYZkMUXknT1cBK%2B6w7RccLntS8a7nEM%2FD0gERAUy8p%2B06qQZJEJiIncYiKBfQuNM7Atv8FssjqW1Xwt7QCLTvcFQyk6IeAjMnQFyWfmgmJUtj3fmGG%2FP7r0V2lv%2BRvxRxkifZB7Tu1cxstj11oSEmIyxqVqUaxjeCvgI4Xa0VSXerFEqGYU5cQdIPQiqwmw6QbvS4tw576ZujuNk9KWgSw2%2B%2F76JiHEicqrUolcjzcJNo8J7Wde4hCqsRf9jZZw%2FgKEcTPNz0Nm82iQgZ4ueKiWTAjEv6zeWzMT0Es6Qzznqo0sficAmQaiZ9zioqK3HrBlhuhZ40H5AeNY8wxMjAwgY6pgF0BPjfAm3FyrsJXT%2BAA2dDY9DdPo%2B3hdfAr4tayGhGrEHnsJO944mUmZgIudQWT4Lv6qB8C4QLSPgh7N2RJ6X3OC8JQow7n1IDBjXQN2B5Q0Pax6vGzqoXByOR9%2FrrXfiOwH6VYrPI6oRfzAkrDonFd33x65kjl3S0Zs9Qxg9fwo0l1t1jTwERgeiwsCeWg8hON%2BPJ0l7PB3XQAq2D%2B9yrD2xVexTw&X-Amz-Signature=188bbafe8e40397afca2772cf3ed60504ab0dd6b315cd420febb8041bffb1832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMT6KEQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHGNUim%2FouOqkcWmbEfzUEujUj1PIBNvdmcOza%2BM4S8nAiAd6W6ckDxFWJKudCs%2F8dopwwrVXjxlrPbwDECiK1gTVSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMXj3JwWsU7HssR1qAKtwDDafNE1I%2F2vZallNQXz7jjJO4ZC3ECiejdgdRIpF848jXCoJenNd6G1Y5FGCera7tlmXQbusLNdShlyW4H7PaP%2FM%2FlTTOW5N%2BVMFzb4gPjQ8PbfVpAN8XRHN5hWLkb42193SXukf31stycz45jvR9vBck5XZmAwY51Ww565NDiHpzVvof%2FqJI3doHg9vcCEE9MJcu%2FFj%2FsLaFiMlC2XhrMIa3UheAGjiQa6iVQVKBAK7LTJPRabG1lhjt5RyP85geyGJWIy85MBOVJxgG7THQUwbwLj8fJdTHvt9s5NKUylJ%2BYZkMUXknT1cBK%2B6w7RccLntS8a7nEM%2FD0gERAUy8p%2B06qQZJEJiIncYiKBfQuNM7Atv8FssjqW1Xwt7QCLTvcFQyk6IeAjMnQFyWfmgmJUtj3fmGG%2FP7r0V2lv%2BRvxRxkifZB7Tu1cxstj11oSEmIyxqVqUaxjeCvgI4Xa0VSXerFEqGYU5cQdIPQiqwmw6QbvS4tw576ZujuNk9KWgSw2%2B%2F76JiHEicqrUolcjzcJNo8J7Wde4hCqsRf9jZZw%2FgKEcTPNz0Nm82iQgZ4ueKiWTAjEv6zeWzMT0Es6Qzznqo0sficAmQaiZ9zioqK3HrBlhuhZ40H5AeNY8wxMjAwgY6pgF0BPjfAm3FyrsJXT%2BAA2dDY9DdPo%2B3hdfAr4tayGhGrEHnsJO944mUmZgIudQWT4Lv6qB8C4QLSPgh7N2RJ6X3OC8JQow7n1IDBjXQN2B5Q0Pax6vGzqoXByOR9%2FrrXfiOwH6VYrPI6oRfzAkrDonFd33x65kjl3S0Zs9Qxg9fwo0l1t1jTwERgeiwsCeWg8hON%2BPJ0l7PB3XQAq2D%2B9yrD2xVexTw&X-Amz-Signature=c1edaf184fd3c69278fcbd850ebc91f54993af0de4cd9d521d7d691f42f68f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
