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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2JBRDI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDB3eCG9bbwkQgS9r2vPNiQnuXDBOlSk%2FPTxuxWH%2F7JrQIhAO4kO5WyOGGO7zFsFg5VfW2Xy03CTH9rbYFrX5y%2Bnt0YKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd8lAkV%2BbrEQ%2BiJq0q3AMF9CgYBT04hY5ei77Rt2%2FLe2BvSBtD%2FXgACOufnYtdWmnKTgrbqSrJSFh2no9L0UI8bTRy4R0CvZdhQzmpLtRd2Katjd%2Fnw0XxuHvoUYFPrrMag3QlnQpa7xb0X38%2FC8PfeDJWhrs%2BMKsXDsSbVoipGyjFdS0i4V%2B9klQzhdFjcTpQlYhtxDAoRhIodnsFyiL6Yd8qYXG%2Fyg2Mimo%2BEUwvnJAO%2BNpToivwTNRUnWLASDmM5wLtt79a3VL02dhJSkS6VSNRN5BZprPLTwHg0kbP9N1oJMEGCSd9e00OshJM8n0ZSiGNGKIM7JFbzcAeFRZkPK8GoriphqHJBW5t0hcqfHeIsYa7UR7kuxRuU8Nm%2F3KOK4tP2nFLXQo5YYUsTOiP7DVfZo%2FQAc2%2B50Fni%2BZ1ZD26%2F4k%2FmSzOp5SRbRKMRz9nwe61vkwwfuH4UWGIUh2sdnczJa3dqdP071GJU53xQ2e%2Bv6oM8EqWzt0k6hQeYMm6ezq1jY4YH5vVph8RvPhKYPQCcKHYd9AfRnXUfG%2FvBr%2BV9aRa42eOQjL9KkSxvlfevW0EyUe%2FIHiaSOMzX2La1%2F0lCPIy1kA5q3ZSwJWKM7zFXvsZSgsCVZvNZYU%2BVnOZUHhZYhLS7NRLDDCOi7y%2BBjqkAQO5D6HnMti7HsL829F%2BWCUOlX485N7s0bze02tLF1BCOKCOiDZi445MHO2QKlSS7GHvMfHrg32KYw1gBLpDftDS9YX6PHhvmzqxx1cQyv9Ftkx1wOg6czWJSaUr5NYgD1vlDGBkjhqJMDBLkDIQH%2BaWVbsWG0cShKRHt1xdmnPX27Bj4pxZ1fW3HxGiiy9LOeos2TJRoChcnZqg3XegzmnaC2F6&X-Amz-Signature=24454769e25ee7027d872fc1550e28ae5920de037677fbffb75e6c64b36e7d26&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2JBRDI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDB3eCG9bbwkQgS9r2vPNiQnuXDBOlSk%2FPTxuxWH%2F7JrQIhAO4kO5WyOGGO7zFsFg5VfW2Xy03CTH9rbYFrX5y%2Bnt0YKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd8lAkV%2BbrEQ%2BiJq0q3AMF9CgYBT04hY5ei77Rt2%2FLe2BvSBtD%2FXgACOufnYtdWmnKTgrbqSrJSFh2no9L0UI8bTRy4R0CvZdhQzmpLtRd2Katjd%2Fnw0XxuHvoUYFPrrMag3QlnQpa7xb0X38%2FC8PfeDJWhrs%2BMKsXDsSbVoipGyjFdS0i4V%2B9klQzhdFjcTpQlYhtxDAoRhIodnsFyiL6Yd8qYXG%2Fyg2Mimo%2BEUwvnJAO%2BNpToivwTNRUnWLASDmM5wLtt79a3VL02dhJSkS6VSNRN5BZprPLTwHg0kbP9N1oJMEGCSd9e00OshJM8n0ZSiGNGKIM7JFbzcAeFRZkPK8GoriphqHJBW5t0hcqfHeIsYa7UR7kuxRuU8Nm%2F3KOK4tP2nFLXQo5YYUsTOiP7DVfZo%2FQAc2%2B50Fni%2BZ1ZD26%2F4k%2FmSzOp5SRbRKMRz9nwe61vkwwfuH4UWGIUh2sdnczJa3dqdP071GJU53xQ2e%2Bv6oM8EqWzt0k6hQeYMm6ezq1jY4YH5vVph8RvPhKYPQCcKHYd9AfRnXUfG%2FvBr%2BV9aRa42eOQjL9KkSxvlfevW0EyUe%2FIHiaSOMzX2La1%2F0lCPIy1kA5q3ZSwJWKM7zFXvsZSgsCVZvNZYU%2BVnOZUHhZYhLS7NRLDDCOi7y%2BBjqkAQO5D6HnMti7HsL829F%2BWCUOlX485N7s0bze02tLF1BCOKCOiDZi445MHO2QKlSS7GHvMfHrg32KYw1gBLpDftDS9YX6PHhvmzqxx1cQyv9Ftkx1wOg6czWJSaUr5NYgD1vlDGBkjhqJMDBLkDIQH%2BaWVbsWG0cShKRHt1xdmnPX27Bj4pxZ1fW3HxGiiy9LOeos2TJRoChcnZqg3XegzmnaC2F6&X-Amz-Signature=5fd28d88872fc00edef64ac8e19e57922aca91ec606e6edaa9a466d11285036a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
