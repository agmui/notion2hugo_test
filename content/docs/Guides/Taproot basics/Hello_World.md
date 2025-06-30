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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KEG6PX7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeB%2F8XH223cGy8eZqU1WfXkIFUEtNIYaG9xPAsL8lHaAiEAniKhmcaIybbL7GIlchloOuBciUoO3dpU7q%2BuUUAb5MQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg10bv%2B8J5JO2OtxircA5BGZq4B7XQ%2BM5SMkCx5Lf3ABgKsIQAWsm0wZ8%2FhalzlvK2LlcUwE0848%2Fm6rmBWT1%2Bx0f8grl91FOZ9jDTN%2FKZG6SYrN8TuUbTwGY0UbF7jAFGnMZK%2BHNonoeWqk0rR%2ByJonXd%2FvzJxUmTmuiaoP0obFPz58vMg2YTJvO2waXJOXOEojEHG27g8sMsuGYY9jmdFAyd7wApV8l5aiFrYH3k0srcENS8pvF%2FJCilLPuA%2BpYgGSZLuJJiGcNVOFddq1zg7oo6qBbJMsP3GbsPzgptvN5aaVzEOq0DgNUxCXAcJEnIwXOfAC8HKc20aL5DS2rD30DAv69q8VW0E%2Fl8ifiyepPE3T6ujiVBHsG5rvRy9iQkmcexz7wWTW4cyE%2FD67wvHzsx%2F3UFo5xwJXAK%2BWlm6W21lz%2BeqqsjbpO%2BB6lbbb%2BLxMmNqIcHkE4yi9rDFDl8Txq9poVPUYHhsCWlEfrgVpxQA8F2LyRI%2FoUuA2bwigVSrFm41jXsDSP5MANnI7noYEYuiajHxr0HTM3p6ex8utwihyahQDNw2CcJbMWthSpdep9b6M0dTzfT473NylQ%2FRwVOMg5wCGfuDQu%2FxKKNoLpTW4EXtU5FxgvY1fj8rTDC5TI5iJtveq%2BWXMKn5i8MGOqUBIS4BrFKgxgP9fwUtKdwmX45P6xG8y21oIh9XAxDVoiAwTytVcDOHk3t8wLKHYmnbchCRgrCaa%2BsiVCSVqRvCdhkxgtbDXQpj4mncX%2Ffk7HIgqrkRoLuB0RXdb9ABfsc2jzSJACirMSZd6eRDpr9HHJqqQB5XsfHIeHdfA9NephSqwP5MBffqt%2F1UtJDJvHuZqcDSoaBhaKXIsYHq7nRkgYn61iwA&X-Amz-Signature=8a36b4f3f372dc41a5983ac36628cb5f577b18b85d0aff3cddd6a312fb62774f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KEG6PX7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeB%2F8XH223cGy8eZqU1WfXkIFUEtNIYaG9xPAsL8lHaAiEAniKhmcaIybbL7GIlchloOuBciUoO3dpU7q%2BuUUAb5MQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg10bv%2B8J5JO2OtxircA5BGZq4B7XQ%2BM5SMkCx5Lf3ABgKsIQAWsm0wZ8%2FhalzlvK2LlcUwE0848%2Fm6rmBWT1%2Bx0f8grl91FOZ9jDTN%2FKZG6SYrN8TuUbTwGY0UbF7jAFGnMZK%2BHNonoeWqk0rR%2ByJonXd%2FvzJxUmTmuiaoP0obFPz58vMg2YTJvO2waXJOXOEojEHG27g8sMsuGYY9jmdFAyd7wApV8l5aiFrYH3k0srcENS8pvF%2FJCilLPuA%2BpYgGSZLuJJiGcNVOFddq1zg7oo6qBbJMsP3GbsPzgptvN5aaVzEOq0DgNUxCXAcJEnIwXOfAC8HKc20aL5DS2rD30DAv69q8VW0E%2Fl8ifiyepPE3T6ujiVBHsG5rvRy9iQkmcexz7wWTW4cyE%2FD67wvHzsx%2F3UFo5xwJXAK%2BWlm6W21lz%2BeqqsjbpO%2BB6lbbb%2BLxMmNqIcHkE4yi9rDFDl8Txq9poVPUYHhsCWlEfrgVpxQA8F2LyRI%2FoUuA2bwigVSrFm41jXsDSP5MANnI7noYEYuiajHxr0HTM3p6ex8utwihyahQDNw2CcJbMWthSpdep9b6M0dTzfT473NylQ%2FRwVOMg5wCGfuDQu%2FxKKNoLpTW4EXtU5FxgvY1fj8rTDC5TI5iJtveq%2BWXMKn5i8MGOqUBIS4BrFKgxgP9fwUtKdwmX45P6xG8y21oIh9XAxDVoiAwTytVcDOHk3t8wLKHYmnbchCRgrCaa%2BsiVCSVqRvCdhkxgtbDXQpj4mncX%2Ffk7HIgqrkRoLuB0RXdb9ABfsc2jzSJACirMSZd6eRDpr9HHJqqQB5XsfHIeHdfA9NephSqwP5MBffqt%2F1UtJDJvHuZqcDSoaBhaKXIsYHq7nRkgYn61iwA&X-Amz-Signature=58ab5a3b679ea42ffd1a6c03b3d88612e340ad244af0a846851af3900cb85fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
