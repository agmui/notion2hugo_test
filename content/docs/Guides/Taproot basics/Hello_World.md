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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65N3US7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUvwMaNug%2BOWfb%2Beov4yG4kNaWIRp9Gjbuy9h6QvzxEgIhAK%2F0bZXHhetEQmzO2AhIM971gBZuo7egGoc%2BmFtbPUT1KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywY8vTumwRMBbj0HYq3APVxAklVeI9qtGtTHBUD7GLQo7WNT7zxmYSgXfCe0bDWW5%2Bpcyp%2Fk%2F3B6kV71e%2BNxRHTRXvmW1n6%2BAJTFRGATXbiQn94YmCtr1Ob0qZZAsBK%2BfefXEmp7d5GwJYipNLTAtLBsIQo4k3abR9xobgAHCxNjRoF83XEStVTWucYYAEcMy4NxuapMcDWEgPh91qsHDr%2BDsozIkElG%2FFpdCtugXlUbsKdCoue3fpx9yBKe80fErjdkauYkad1DtTt6nnaUG50QNrRKXTi94wJEAbqJftJXe%2FdCugnUSc1MiW70Fgcqhircf2v4eDnwA4ySz%2BXMqzNrrOHuyZn6IkklEQh0ykwlgr40DcrHzLpwDRSIFdUeHy0tEfVL03F%2BRHMDlOEiiYsRcEW9xp6Z%2B5OcBx2u%2F%2F0kXAmGTYmaj7JNoe6b6lFJ0y%2BBU6tC1U8o7PRbA%2BVdy8zi7SbfvO152nXF99jBDa5xnhN%2Bj4rAsDNenuFjDMVu0Bda5PrwkbEnGUGaaz2sMAr8wk0cBSquzm5caisvW6PRSJQ%2Brkx8OcI5rC0nkz55EJ6koCgQ2rrvvls6BwF9LWDTcEsZb1TA9NtJ2%2FoYUl5OZpUfrLiXqG7uNhTjmg7mK1NKd90uVQBk55hjDbyrLBBjqkAatLK6Z04F7cpWQ6BNlsqo2Gou9oUGWWvxwZgATjL6BnOefBjme9MN%2BfBP0h5NW4fEMWH422psXn6gc0cm01l9Pmf%2FE2zJE%2F6jn9G0ZJr0VZ6E3h3igB0rqKWnFIlKLxfjXufl8uY3i8Z0XtqEypdjBxDu7tMPI0M7KDlemVSRfQt33T0qyHZa0V72FZ8BHFCoSTbf25JFboDuGlu35mlBZESOMR&X-Amz-Signature=07e28a73a16c1e6108c14608818c168a4b2cf014aa03d8ec1dbd45beba4d58fd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65N3US7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUvwMaNug%2BOWfb%2Beov4yG4kNaWIRp9Gjbuy9h6QvzxEgIhAK%2F0bZXHhetEQmzO2AhIM971gBZuo7egGoc%2BmFtbPUT1KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywY8vTumwRMBbj0HYq3APVxAklVeI9qtGtTHBUD7GLQo7WNT7zxmYSgXfCe0bDWW5%2Bpcyp%2Fk%2F3B6kV71e%2BNxRHTRXvmW1n6%2BAJTFRGATXbiQn94YmCtr1Ob0qZZAsBK%2BfefXEmp7d5GwJYipNLTAtLBsIQo4k3abR9xobgAHCxNjRoF83XEStVTWucYYAEcMy4NxuapMcDWEgPh91qsHDr%2BDsozIkElG%2FFpdCtugXlUbsKdCoue3fpx9yBKe80fErjdkauYkad1DtTt6nnaUG50QNrRKXTi94wJEAbqJftJXe%2FdCugnUSc1MiW70Fgcqhircf2v4eDnwA4ySz%2BXMqzNrrOHuyZn6IkklEQh0ykwlgr40DcrHzLpwDRSIFdUeHy0tEfVL03F%2BRHMDlOEiiYsRcEW9xp6Z%2B5OcBx2u%2F%2F0kXAmGTYmaj7JNoe6b6lFJ0y%2BBU6tC1U8o7PRbA%2BVdy8zi7SbfvO152nXF99jBDa5xnhN%2Bj4rAsDNenuFjDMVu0Bda5PrwkbEnGUGaaz2sMAr8wk0cBSquzm5caisvW6PRSJQ%2Brkx8OcI5rC0nkz55EJ6koCgQ2rrvvls6BwF9LWDTcEsZb1TA9NtJ2%2FoYUl5OZpUfrLiXqG7uNhTjmg7mK1NKd90uVQBk55hjDbyrLBBjqkAatLK6Z04F7cpWQ6BNlsqo2Gou9oUGWWvxwZgATjL6BnOefBjme9MN%2BfBP0h5NW4fEMWH422psXn6gc0cm01l9Pmf%2FE2zJE%2F6jn9G0ZJr0VZ6E3h3igB0rqKWnFIlKLxfjXufl8uY3i8Z0XtqEypdjBxDu7tMPI0M7KDlemVSRfQt33T0qyHZa0V72FZ8BHFCoSTbf25JFboDuGlu35mlBZESOMR&X-Amz-Signature=c5b56696b42d058cb7ab21af8089f8819a98b18c10129ee1f51657cb23fc4ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
