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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHGGKJWJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnU4VJfZTH5c1%2BG3PSGqRuip3YBb%2B1Pc3JI5Ts24ZghgIgR9yA%2BaXhPxOaH5zBrJJTnlBRuw1ke9gvO81bzoPUsA4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcyS3H8tGiGBjM6aircA6hxWu%2FHW%2BytCwltCdp8%2BVxPaOd4ThwtvLi1bZsPaiLnOKTXxXsLzOrlUV%2Fw8v1wAXTA2VKVEh32zv0iTFze3XJdgpYUrsolzNhiDRAiq0k%2BMl6pk2aGNHa2GpQLG9EawwET2JqfZlksroJDqXn0EJIeHwOYmEvztwrpIhzqZ72nDc9mPdD%2F5xjdbtCVegxeRhpLP3TLOSLSgbVuBIBHTqsU6h0xfn5y%2BMiqpwq3Az58F%2BdqoGheDZcqt9J2XgzrMGutcA6zbFJRxXu8i1o1su45atRcjE6eZsCJAEIaU6VHGRR5pX%2BANG00Ca9jdtKgge7rJK5AVDWTayIjmVqrn9l27iajuftI6dDap8InXqAwd0pPE%2BFbH7WRW449pOvuLQC1hV53h6zb92DCfSnWFIGC4azKyQfbMlj%2FIuIBIJNuwipNNmdWemjSb%2FOQxEsXy3XBFK7pknRzQqu0kOWRtkcceZRdCnV%2Bgn182bP4jzlWR5bsyK2M02g9olmEkVVA2yxbAeL09X7WTclWUrWcrOLxptsexBxqlRfgCy9VHg4Q2%2Bj0nc%2BdG2I9jRenkS2QSjKdEg7xPj58rIMH7YGPMKj6UxYgN%2BZuZCjN0hJ8iNqU8sbQXCq5yrcw0L%2FXMPyL5b0GOqUBvEMBSq%2B3vqVJ3ir6wKrrOsV8tdm0HtHYVtd%2F74AS2VK98DMp%2FgGxYdrIdCDFeQVYFV22DBkbcL6YkRADUA1%2BKvX6E9058L9Dgs7s4%2FqB53diyItHThuOfQ48QXWw9HoFk%2B5v5kWFNjcWWvLTB6qPRL0wkw7i6WCMNiZIwjOQZFd8jZMZbb5XU9WTkIgVrq7eZAz0Tq5yfRk11J7ND%2BMq%2FNA1Ji6n&X-Amz-Signature=c60a1c7964d476a07b0825d28ef6bbb9d3032842c2cfb9380d6feb7651044f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHGGKJWJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnU4VJfZTH5c1%2BG3PSGqRuip3YBb%2B1Pc3JI5Ts24ZghgIgR9yA%2BaXhPxOaH5zBrJJTnlBRuw1ke9gvO81bzoPUsA4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcyS3H8tGiGBjM6aircA6hxWu%2FHW%2BytCwltCdp8%2BVxPaOd4ThwtvLi1bZsPaiLnOKTXxXsLzOrlUV%2Fw8v1wAXTA2VKVEh32zv0iTFze3XJdgpYUrsolzNhiDRAiq0k%2BMl6pk2aGNHa2GpQLG9EawwET2JqfZlksroJDqXn0EJIeHwOYmEvztwrpIhzqZ72nDc9mPdD%2F5xjdbtCVegxeRhpLP3TLOSLSgbVuBIBHTqsU6h0xfn5y%2BMiqpwq3Az58F%2BdqoGheDZcqt9J2XgzrMGutcA6zbFJRxXu8i1o1su45atRcjE6eZsCJAEIaU6VHGRR5pX%2BANG00Ca9jdtKgge7rJK5AVDWTayIjmVqrn9l27iajuftI6dDap8InXqAwd0pPE%2BFbH7WRW449pOvuLQC1hV53h6zb92DCfSnWFIGC4azKyQfbMlj%2FIuIBIJNuwipNNmdWemjSb%2FOQxEsXy3XBFK7pknRzQqu0kOWRtkcceZRdCnV%2Bgn182bP4jzlWR5bsyK2M02g9olmEkVVA2yxbAeL09X7WTclWUrWcrOLxptsexBxqlRfgCy9VHg4Q2%2Bj0nc%2BdG2I9jRenkS2QSjKdEg7xPj58rIMH7YGPMKj6UxYgN%2BZuZCjN0hJ8iNqU8sbQXCq5yrcw0L%2FXMPyL5b0GOqUBvEMBSq%2B3vqVJ3ir6wKrrOsV8tdm0HtHYVtd%2F74AS2VK98DMp%2FgGxYdrIdCDFeQVYFV22DBkbcL6YkRADUA1%2BKvX6E9058L9Dgs7s4%2FqB53diyItHThuOfQ48QXWw9HoFk%2B5v5kWFNjcWWvLTB6qPRL0wkw7i6WCMNiZIwjOQZFd8jZMZbb5XU9WTkIgVrq7eZAz0Tq5yfRk11J7ND%2BMq%2FNA1Ji6n&X-Amz-Signature=36674016859a8bbfe02e23443a0f818397b517f10884735959426127a90cb194&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
