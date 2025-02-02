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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFPHSR4C%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BYhp071TTJM6XgQGSWCzTLQQBm%2FCtFdplq29cyaS0fwIgSv%2FrmpnCEMqQJpSTIkgdIKgQHtCyh%2B9dFrRsJOWA9mYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByr6FvWS%2BK5SYJr3SrcA5I0KBmB9eBc4DeWLW7IYEYS0UWzkACIqyHWn4dH7gRfUnP64HtvnQQ6QDQY8ndoTGeWn5JKI7qNr8p1plQ3eZbU74GAuF6l54YzHL3OUTUWTHWW14NnTq0dB4qJa%2FiVvUULwiDmmZhqkK4SJ5FOr2LQyKOZA%2F9ht4rZbZDfZIXEDxentK6wTBVTRb9c1giaxU1X3Z9lDRyAPEDovmYhkor8zBGTlBycU1o8wOasM3qda6uglbZI5owU0uYOl98rpaLr%2FhwjE8w7maUXWF8lxs5S%2Bqmax066H7KyormzJlhoa%2B1IlE4EMdbfA8hGPAE7Fc3Mwy95jLMrrX8sVjmv8IHJC%2BIsrdzlUtqNWCaBzEL72UYjb6QSXsbCIYPKpp1xfD%2FjleZb5xOh6BhODpQh7odUGwhr97UuQlnbHy3iXz6Je2SrXIZ5b3aF4fzeLCGtayLvUTKCx5ACTQaLVP0Uu3rGj2VJygOaYgh3HCcNsJfYjaSN79uhU0c1az5O9I1wVdtQZOfYLu6cyEcicMGQmbnYTAYP6vfr4MA4gqV91rpy4KN96hKCbp1505MYy1HCX27IAuDYDOkVP2rPy37S2bux5VdOxdZMteIRnvxNbhlo%2BmCfAk%2FXKyT7O0E8MKa8%2B7wGOqUBoe5A6ruihE5nz6Pg%2FtaZWxRhUtZfXDiAbQzRCadoEsTDHCCnLoguMl5w5sVJg2mzGIREgZf9v9TJx4r7p%2B190%2FAGnlvNLB2LKp%2BMFl7%2B6%2BGsfTb7MOoF%2F5XsSQJb3md1QorACpBd6sHo5G0V1GX%2FJUsOUjqB8lYjdFKeix3%2B4J4fa7rYXZxy7GekCmcY8oYk1gFjDI7IhdQV3QO%2Fd69W%2FKGf9qRX&X-Amz-Signature=a187379a82b0baba1cefffd2d9c62f7e5190b204a15505f03e67050c431a6030&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFPHSR4C%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BYhp071TTJM6XgQGSWCzTLQQBm%2FCtFdplq29cyaS0fwIgSv%2FrmpnCEMqQJpSTIkgdIKgQHtCyh%2B9dFrRsJOWA9mYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByr6FvWS%2BK5SYJr3SrcA5I0KBmB9eBc4DeWLW7IYEYS0UWzkACIqyHWn4dH7gRfUnP64HtvnQQ6QDQY8ndoTGeWn5JKI7qNr8p1plQ3eZbU74GAuF6l54YzHL3OUTUWTHWW14NnTq0dB4qJa%2FiVvUULwiDmmZhqkK4SJ5FOr2LQyKOZA%2F9ht4rZbZDfZIXEDxentK6wTBVTRb9c1giaxU1X3Z9lDRyAPEDovmYhkor8zBGTlBycU1o8wOasM3qda6uglbZI5owU0uYOl98rpaLr%2FhwjE8w7maUXWF8lxs5S%2Bqmax066H7KyormzJlhoa%2B1IlE4EMdbfA8hGPAE7Fc3Mwy95jLMrrX8sVjmv8IHJC%2BIsrdzlUtqNWCaBzEL72UYjb6QSXsbCIYPKpp1xfD%2FjleZb5xOh6BhODpQh7odUGwhr97UuQlnbHy3iXz6Je2SrXIZ5b3aF4fzeLCGtayLvUTKCx5ACTQaLVP0Uu3rGj2VJygOaYgh3HCcNsJfYjaSN79uhU0c1az5O9I1wVdtQZOfYLu6cyEcicMGQmbnYTAYP6vfr4MA4gqV91rpy4KN96hKCbp1505MYy1HCX27IAuDYDOkVP2rPy37S2bux5VdOxdZMteIRnvxNbhlo%2BmCfAk%2FXKyT7O0E8MKa8%2B7wGOqUBoe5A6ruihE5nz6Pg%2FtaZWxRhUtZfXDiAbQzRCadoEsTDHCCnLoguMl5w5sVJg2mzGIREgZf9v9TJx4r7p%2B190%2FAGnlvNLB2LKp%2BMFl7%2B6%2BGsfTb7MOoF%2F5XsSQJb3md1QorACpBd6sHo5G0V1GX%2FJUsOUjqB8lYjdFKeix3%2B4J4fa7rYXZxy7GekCmcY8oYk1gFjDI7IhdQV3QO%2Fd69W%2FKGf9qRX&X-Amz-Signature=a3aaccfd5d848b09a44f7f8b3121db06d3f73d51f9ab65ee0f13abf961d00edc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
