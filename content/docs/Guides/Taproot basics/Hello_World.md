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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QLJM3Z%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCReh9NPIi8E1eyzdbUl0pAdM0Em4tD05eBDbfY5gQdlgIhANJ%2Fq7ew3GGMRgAkTeybQY7Z4joEjgNMJpJRyYsyn8%2B%2BKv8DCDMQABoMNjM3NDIzMTgzODA1IgyPtJrTXvr%2BWlUEOhIq3AOhmpDZwqQmcg%2BDBFseX3bBiZIN5jWRQl5hUm6t3Fy9fF145%2B4iriKaXJ2qbvwDypRSSfwTbElFnAVPf28pcRl73VvYgb0cIQFx50YvNISXaMWziPZNHZXOvGJYV2q8a%2B8Didqj7bGQ1ibm2%2FFJJQjGmAvM7UgujnoiI4oM7b66dNAZxQT0H%2FEe6ntGic7m3XnS%2BDeqkkGdGvuF8pmswDov1OfpXQ9PEylUIcrDjqltvTGJvxL69fbAv450EQomeOsdUb9j4O0XB5p1Tms%2FUGqE4ttUKNH4HnaZpbIGGePzhYuglPGZanU0z9hEW%2B997x4wCm3VQq6TcWMxWi3Ke8sIsxQuLZQm%2BHVRQ9r%2F41efp02j2mXvI3Enoz9Yf%2FPr4wMqkIpBxIHI4LdVxM4sW28Wpm8ARi6lAVgpHbE7p3qrLBVVLaX28ONEWH0JxOYkfxf8cBCX4U%2B1p0P3iwQE5M4fvajFKkgfAHzxITKE9tZ8lY%2BMO7ds%2Fz2vmyeZTtLWjqopBot4aQ3aDnkVfKAr8wFTV4B1s7UjkgFq0j8d%2B90b8ddEWN7HeLXi4L8FmBeqJHOvSGw2RKkwxsIoylCNGrSknXAcG7n%2BtMwkd1LviK%2BoY9P4tXu4JWL7L2xQPTDQzae%2BBjqkAe9gbqlUa4hpf31bc%2FaKhbN8HuAnDnysUh157b6aAn1ZvrOVCJYEfXDJRckGV6geJ%2FjFviYGpGUQpBCfeSYZo794W1okwC82zgGBgwt6b%2BCoskmG8eauvJkodHvIrEIzRqYkxDf6ilwZer0jG5HIFMqNQTGCELXUuo5LDkibwRA9sJVHqzgDf77WheVbHjdiWgMxRtWxXuFuTUtxUGKLbJ%2BeAV47&X-Amz-Signature=dd93c6a33a0604fb9d24ec14e058c2c15baf3cc6fa41caca24453536b81c2495&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QLJM3Z%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCReh9NPIi8E1eyzdbUl0pAdM0Em4tD05eBDbfY5gQdlgIhANJ%2Fq7ew3GGMRgAkTeybQY7Z4joEjgNMJpJRyYsyn8%2B%2BKv8DCDMQABoMNjM3NDIzMTgzODA1IgyPtJrTXvr%2BWlUEOhIq3AOhmpDZwqQmcg%2BDBFseX3bBiZIN5jWRQl5hUm6t3Fy9fF145%2B4iriKaXJ2qbvwDypRSSfwTbElFnAVPf28pcRl73VvYgb0cIQFx50YvNISXaMWziPZNHZXOvGJYV2q8a%2B8Didqj7bGQ1ibm2%2FFJJQjGmAvM7UgujnoiI4oM7b66dNAZxQT0H%2FEe6ntGic7m3XnS%2BDeqkkGdGvuF8pmswDov1OfpXQ9PEylUIcrDjqltvTGJvxL69fbAv450EQomeOsdUb9j4O0XB5p1Tms%2FUGqE4ttUKNH4HnaZpbIGGePzhYuglPGZanU0z9hEW%2B997x4wCm3VQq6TcWMxWi3Ke8sIsxQuLZQm%2BHVRQ9r%2F41efp02j2mXvI3Enoz9Yf%2FPr4wMqkIpBxIHI4LdVxM4sW28Wpm8ARi6lAVgpHbE7p3qrLBVVLaX28ONEWH0JxOYkfxf8cBCX4U%2B1p0P3iwQE5M4fvajFKkgfAHzxITKE9tZ8lY%2BMO7ds%2Fz2vmyeZTtLWjqopBot4aQ3aDnkVfKAr8wFTV4B1s7UjkgFq0j8d%2B90b8ddEWN7HeLXi4L8FmBeqJHOvSGw2RKkwxsIoylCNGrSknXAcG7n%2BtMwkd1LviK%2BoY9P4tXu4JWL7L2xQPTDQzae%2BBjqkAe9gbqlUa4hpf31bc%2FaKhbN8HuAnDnysUh157b6aAn1ZvrOVCJYEfXDJRckGV6geJ%2FjFviYGpGUQpBCfeSYZo794W1okwC82zgGBgwt6b%2BCoskmG8eauvJkodHvIrEIzRqYkxDf6ilwZer0jG5HIFMqNQTGCELXUuo5LDkibwRA9sJVHqzgDf77WheVbHjdiWgMxRtWxXuFuTUtxUGKLbJ%2BeAV47&X-Amz-Signature=0ce4af3becb5950c926301955e9073f2042282fae7c740f08d801c9eda8a821f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
