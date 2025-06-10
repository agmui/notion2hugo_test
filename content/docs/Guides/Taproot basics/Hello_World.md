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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYK4OPDO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMMNz0njUt2fOYrUqRIoB9xIAQaIW71%2Bjl%2Bo2o6iczWgIhAOigdH0miESyfdwWOfQLIwzayyln7KVeSdkqy8fqlHnQKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FzvMs1cePNW9Fj80q3AOhM20FwdQwMlp983qV9IYEa0nsMtNkxj2rWn%2BJWqAtr%2F9rfMib1UvYmSCl%2FiQxaTYtHh%2FCoHBozTYsmH0aZHK2xMO3%2B3yBJFmOkrHIPYlWAN14KzqFfz1k2V2Vu%2F1zjGVjSV1qnriypbM4WR8vtQ9T6%2FMdASPT1%2B5L%2B3IbSCT%2Fm2zECaJI%2BhcgDfKHq5RDaT78pj85hXV1h4T1Am1QKiHsksonTUgewxwhNWdqTohYr3KPV9etibFhz4oCo0IxD%2FsXUIun7IUjowFHu9Q%2BIkqVHnx8fUpI8ryOs%2FwcZukf8i2uLX6rDUIOMeJ7qDVRGu52jpWCh0vokpXZNz0ajcadXRsYtwwCNZW6WM0jVkdETDhLiJc65vZ6OfH4U%2FMxfZOnW6i%2Fxk%2FZZngD%2FOCwOLxnJYMniw48%2BK2liXNAK1%2BEPSNmQcYynJ4GYGlt%2FPktJpKtjNVKQyKEQJ4ATc3D1qHI72V3P%2FflmpGw4bXDpVX9rBDCeLtwZAQuRovnwhHNiKVKNf%2FvZBsHFSINxkMkYvo4qxHUwaQvC5mIGA%2BJsRCMNQGjwWcd6oQ9KEQSLJsLvYZv44mvAczZ%2F1nlb94RlL2BtHk%2BQhycq3SM1t%2F9X0V6J6V2wPt2h3GAVjDf7DCutaLCBjqkAS4D2ujEH8NPEXusJaE%2BKN0csInAEpuaIIdil393V9s2EQ10ygJ1mPZapwu46nhdKvuHSGjK%2FkH73xBOje96Utq4%2BAnqyNYKaJUyI3F8R5KHXdYTzblEj0wHeO1NFoC6uNFBNrDQVrhzTUQbp6d6mtXiRw7yvZtOFhbPQgYZeU%2FZLIOsjo672Kc5FY84IdMU0IJDbn9wMxE%2Bl9KgEF0gkw3HphAW&X-Amz-Signature=518346e84e18e5deb98803dd9028869f7ad7e521ab009a4731156487006656f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYK4OPDO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMMNz0njUt2fOYrUqRIoB9xIAQaIW71%2Bjl%2Bo2o6iczWgIhAOigdH0miESyfdwWOfQLIwzayyln7KVeSdkqy8fqlHnQKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FzvMs1cePNW9Fj80q3AOhM20FwdQwMlp983qV9IYEa0nsMtNkxj2rWn%2BJWqAtr%2F9rfMib1UvYmSCl%2FiQxaTYtHh%2FCoHBozTYsmH0aZHK2xMO3%2B3yBJFmOkrHIPYlWAN14KzqFfz1k2V2Vu%2F1zjGVjSV1qnriypbM4WR8vtQ9T6%2FMdASPT1%2B5L%2B3IbSCT%2Fm2zECaJI%2BhcgDfKHq5RDaT78pj85hXV1h4T1Am1QKiHsksonTUgewxwhNWdqTohYr3KPV9etibFhz4oCo0IxD%2FsXUIun7IUjowFHu9Q%2BIkqVHnx8fUpI8ryOs%2FwcZukf8i2uLX6rDUIOMeJ7qDVRGu52jpWCh0vokpXZNz0ajcadXRsYtwwCNZW6WM0jVkdETDhLiJc65vZ6OfH4U%2FMxfZOnW6i%2Fxk%2FZZngD%2FOCwOLxnJYMniw48%2BK2liXNAK1%2BEPSNmQcYynJ4GYGlt%2FPktJpKtjNVKQyKEQJ4ATc3D1qHI72V3P%2FflmpGw4bXDpVX9rBDCeLtwZAQuRovnwhHNiKVKNf%2FvZBsHFSINxkMkYvo4qxHUwaQvC5mIGA%2BJsRCMNQGjwWcd6oQ9KEQSLJsLvYZv44mvAczZ%2F1nlb94RlL2BtHk%2BQhycq3SM1t%2F9X0V6J6V2wPt2h3GAVjDf7DCutaLCBjqkAS4D2ujEH8NPEXusJaE%2BKN0csInAEpuaIIdil393V9s2EQ10ygJ1mPZapwu46nhdKvuHSGjK%2FkH73xBOje96Utq4%2BAnqyNYKaJUyI3F8R5KHXdYTzblEj0wHeO1NFoC6uNFBNrDQVrhzTUQbp6d6mtXiRw7yvZtOFhbPQgYZeU%2FZLIOsjo672Kc5FY84IdMU0IJDbn9wMxE%2Bl9KgEF0gkw3HphAW&X-Amz-Signature=330ff7145887aa9bd8bbad416427eb728d05b57043be3476e506c05f7450f532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
