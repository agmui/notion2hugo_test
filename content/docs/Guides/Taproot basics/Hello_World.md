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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLCTNMGZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbLfd9awysgbGjMzUWPxiMLP%2F0EXxCB6cY7Cpg6i4jGwIgQUgGnFJtj%2Be3BXLb2KhfQmuC5REGPm%2B%2B72zy8Sk%2FrzYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGwiAgOofEXjoDKQpSrcA3n4E2ER9bJKTbfDQ%2BteioHLrsO46vBK25fxTjUYSVoIKWbIAM8AxETDLa6daflTZDZkiG64uK2VMt7VNk%2FtMMEeNhflI%2BT%2F0MiJxciAYw8x4G%2BTu3%2B4H7wD82REBujEI8Bad7otbPsJeYUXrD95SjRDqAQp%2B0O8qzb5fJRTf%2BU1bH53sShKJ%2FKOFIHGsiHmjblsJ1N7KV%2FhCblBNMQW0ENPbQn987cKEYL6V9uNxtW3JUvhLGV8%2FYI2df9pNA7g1A2ylfJxnFlOYw8yV614KXngme3KcqSFwm1y9TBSDSIg4dtTNX1clC3278Jh8GaI%2FV7TfvOjRl%2F9IbZlR86upeteJ2ZLjVH3tvmr3ijDY0RsDS1vypV0mrt7s92LIKKyUWolBv%2BAy7Crt1IQjmoj09uZ%2Br2Kc4ET%2B2eAunMQ8r%2BejRouSMej2%2FqiQuBXQ0Aax%2BxFJZ0kppx%2BrsxuRYv0cLSlMJn8ioQQ8YuYsajqnKyjbRWP48FX9GmwU3IsTnWk86dh5SKyMbs7C22G%2BadvhPluXobFbZ5MF%2FgrWPkNjoDBkUs%2BMtzVvYNTM2GrnVecFe9Xos6iKij%2FckhDYxd1oDjLORfSEbcdSmPaqU1TXUH9JWarZjXz0p3vVdTKMIOdz78GOqUBFOpJxDE6JfkQqTFsxC7PW4f35WLS5zR3cuh5hKJJqxYTQqOmgVjmjEafH6IDZPoN%2BVh3XKa57%2BhYHxDY9W0vlefwIj6QXhx9HwjkNKxZ2B32yF49XdIId6tZrGBb5pCtRu5j39U9S6HllY3Hko3KT%2BNFdQb0axXZ6DTnvJESQVwTyS9TXu6U%2BAmRl4mR8IRL5mJ7R34W%2BFcYLhx1Dd4oOlznkGq2&X-Amz-Signature=0328b7a70457fcfacdd6f13ca6e14b74f124c33dd287421e5346d55f62dc5eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLCTNMGZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbLfd9awysgbGjMzUWPxiMLP%2F0EXxCB6cY7Cpg6i4jGwIgQUgGnFJtj%2Be3BXLb2KhfQmuC5REGPm%2B%2B72zy8Sk%2FrzYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGwiAgOofEXjoDKQpSrcA3n4E2ER9bJKTbfDQ%2BteioHLrsO46vBK25fxTjUYSVoIKWbIAM8AxETDLa6daflTZDZkiG64uK2VMt7VNk%2FtMMEeNhflI%2BT%2F0MiJxciAYw8x4G%2BTu3%2B4H7wD82REBujEI8Bad7otbPsJeYUXrD95SjRDqAQp%2B0O8qzb5fJRTf%2BU1bH53sShKJ%2FKOFIHGsiHmjblsJ1N7KV%2FhCblBNMQW0ENPbQn987cKEYL6V9uNxtW3JUvhLGV8%2FYI2df9pNA7g1A2ylfJxnFlOYw8yV614KXngme3KcqSFwm1y9TBSDSIg4dtTNX1clC3278Jh8GaI%2FV7TfvOjRl%2F9IbZlR86upeteJ2ZLjVH3tvmr3ijDY0RsDS1vypV0mrt7s92LIKKyUWolBv%2BAy7Crt1IQjmoj09uZ%2Br2Kc4ET%2B2eAunMQ8r%2BejRouSMej2%2FqiQuBXQ0Aax%2BxFJZ0kppx%2BrsxuRYv0cLSlMJn8ioQQ8YuYsajqnKyjbRWP48FX9GmwU3IsTnWk86dh5SKyMbs7C22G%2BadvhPluXobFbZ5MF%2FgrWPkNjoDBkUs%2BMtzVvYNTM2GrnVecFe9Xos6iKij%2FckhDYxd1oDjLORfSEbcdSmPaqU1TXUH9JWarZjXz0p3vVdTKMIOdz78GOqUBFOpJxDE6JfkQqTFsxC7PW4f35WLS5zR3cuh5hKJJqxYTQqOmgVjmjEafH6IDZPoN%2BVh3XKa57%2BhYHxDY9W0vlefwIj6QXhx9HwjkNKxZ2B32yF49XdIId6tZrGBb5pCtRu5j39U9S6HllY3Hko3KT%2BNFdQb0axXZ6DTnvJESQVwTyS9TXu6U%2BAmRl4mR8IRL5mJ7R34W%2BFcYLhx1Dd4oOlznkGq2&X-Amz-Signature=7fe9f9e7cea321badd80f40d4653f164ae0723262b8fcab8336ab12614e9692e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
