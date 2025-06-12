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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7WO6ME%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCFHCqo4Il6y2vaZioOoHHo7J1DJ8hzEVPciSXUIZyaYwIhAMa84b1eSFbfksb2knetze2yLw1Imyi%2BSj6xuRKqyugcKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVscYZFw9nyGeIkCYq3AMBXpneGbiDja7gYygIXFbvK142M06gLUEgq2FoanBH4wRLuwf7nPYhU4QGqGz7Ng3kKGVQpqRLdl5ubhG7hFLrtYFvJYe6lTzVf8%2Bh5Rkuj3qTt7h9ksP1ECfZvdG238yUMPU6ybuW%2FmCfqBMmOunmNXxqIxT4RmGbyY8IBUiIqMd0nEURb4kkFK6eRxWdHTTlkqc%2FcGzlMEBdWSelKExjtUdljz%2FZSbHVekMF9tVkueCN09b%2F1880VNnylWNkPHTuIiq353cmFhygJQTN%2BKUF%2FPswOAUV8dfJjJgXK7CIeZ9f2oIUHxzwyUL01Zh0QRZc1kmwJx%2BA5UBw0DtDMGOybH7hNZgJlbqcljFkqKGoXRy%2BGpK5mZ8juEZmNc8ymkZtJsPOpdtyrd7%2BXiD%2Beo7IHViCKoLc1Dbxk0ZzcbtvGzx6d%2F8qE12rJAYPcpEzy1EaxY7E9LXjvdcG%2BUQKARXBAgwU5Mv6Kq1CYYHYgY1X0T9lVi90xeuyrCm1N5UYIAsqM%2FIIP71rfQrbbD5QvUfoOiPdd1jomsNw4OaMf0yOEmLmiCpyXrcg0P7sOrZN6gsHuHM7URL8RHN%2FVX8uVIc6gquFpNnuyzZt5iZ8m7AYgC%2F6Do%2FtGfCMfUUDPDDak6nCBjqkAXa0h0CaWT6bsAVGpTKTeJFEovvMsi7t%2F8P%2BQ03VwsvRFMrmZMyQH8Q2BgJA1FUB%2FmqEoGaT7qOJLiWjPyYkdsnQcyMN%2Ft5S3XWzVgptbpyN4LEOQzyKIBAEmiWyunXpgxnfgT12INTqfAiDhT5uF29N8hS8pGi6Dql2%2FyBxHtruUs0NHdfNd%2FTV7sXHQAAG6peFLWxkDy95Nrlr5OA9KARxMGwi&X-Amz-Signature=ef67ac6d79a9942849b550a03b1cbf9073752fc1a879ae35b9bb1f8011746e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7WO6ME%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCFHCqo4Il6y2vaZioOoHHo7J1DJ8hzEVPciSXUIZyaYwIhAMa84b1eSFbfksb2knetze2yLw1Imyi%2BSj6xuRKqyugcKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVscYZFw9nyGeIkCYq3AMBXpneGbiDja7gYygIXFbvK142M06gLUEgq2FoanBH4wRLuwf7nPYhU4QGqGz7Ng3kKGVQpqRLdl5ubhG7hFLrtYFvJYe6lTzVf8%2Bh5Rkuj3qTt7h9ksP1ECfZvdG238yUMPU6ybuW%2FmCfqBMmOunmNXxqIxT4RmGbyY8IBUiIqMd0nEURb4kkFK6eRxWdHTTlkqc%2FcGzlMEBdWSelKExjtUdljz%2FZSbHVekMF9tVkueCN09b%2F1880VNnylWNkPHTuIiq353cmFhygJQTN%2BKUF%2FPswOAUV8dfJjJgXK7CIeZ9f2oIUHxzwyUL01Zh0QRZc1kmwJx%2BA5UBw0DtDMGOybH7hNZgJlbqcljFkqKGoXRy%2BGpK5mZ8juEZmNc8ymkZtJsPOpdtyrd7%2BXiD%2Beo7IHViCKoLc1Dbxk0ZzcbtvGzx6d%2F8qE12rJAYPcpEzy1EaxY7E9LXjvdcG%2BUQKARXBAgwU5Mv6Kq1CYYHYgY1X0T9lVi90xeuyrCm1N5UYIAsqM%2FIIP71rfQrbbD5QvUfoOiPdd1jomsNw4OaMf0yOEmLmiCpyXrcg0P7sOrZN6gsHuHM7URL8RHN%2FVX8uVIc6gquFpNnuyzZt5iZ8m7AYgC%2F6Do%2FtGfCMfUUDPDDak6nCBjqkAXa0h0CaWT6bsAVGpTKTeJFEovvMsi7t%2F8P%2BQ03VwsvRFMrmZMyQH8Q2BgJA1FUB%2FmqEoGaT7qOJLiWjPyYkdsnQcyMN%2Ft5S3XWzVgptbpyN4LEOQzyKIBAEmiWyunXpgxnfgT12INTqfAiDhT5uF29N8hS8pGi6Dql2%2FyBxHtruUs0NHdfNd%2FTV7sXHQAAG6peFLWxkDy95Nrlr5OA9KARxMGwi&X-Amz-Signature=72c2381c62b580bdd28745bce739ccf93bd76069f116261d3bdea4bc0788332a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
