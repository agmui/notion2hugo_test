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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FH2BFED%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDqgCQcsCkwHnc2LkNbmfND1yOkg73kJAlUh1L2b6AOjwIhAN9O06xQrOdcPYDpPEDkMTcHSnRZMJmhuePnBN9TyvIsKv8DCAIQABoMNjM3NDIzMTgzODA1Igzyt7SPZQ8gSXVxlpkq3AMOY7ihEL8QznBvBp%2FYdWcxUqnoVPLY5iI6xvHsQwdNCE%2FUwXtq0rDB3vOJ%2F3xtCg%2BzQIaoGM2vtwownwrPkwPFLx%2F3kWP0xKRGvH1EDsNYdsdfUb33rlDIJXOAxwV79RVu6UYBbtD7vTsPvrklAkPAzsnTW8hbnLNvF6HG0b4Gj6LPvgGuZ%2FjMqgmaR%2BlmMR0llpjoEGN9F%2BwLNEagrJHFH9FVUtB4SJGcxCbmJYnIzHNuNxdMQ%2F%2F2NMEpbHyqI9p6Xz80OXP%2FPUWn9cAXR8mPya6xjOp8e9MQL1e%2BzjPvr%2FCtVYE6rTTx78eYi0qi1HuaTzXnLT4txHjZziOSsb7n7uy8ZR2xf4cBWrRBplc%2FBhNvuBYvGA3AO8f%2FSZL4sW0JUaQM3Gd1ceInwmE5nRKiuIWareOOM5fba6tNbq5G7lym3brf8uLdW6yEJdK3Gf5mWslwoh7zTjuMDZzjFe9oMEv%2BOqke3ZEz0MVeiUJHjP%2FCJMa0zfc%2BpYrAg8yFNjVe1rBdK9%2FIkxeaOIBoQmpLX9nzEPbhkUZVspfIYZHVOtv2asZ3ZLLAbyHkW3ux7xdMiC5112%2Bvm4bCvLkl3NZDucKWZHyxOKR1cksJUWRDxJpvXTIz1FaTQwPvBTCLhPnMBjqkARNsHLs1%2BZaSednUcSH%2FJQLJKTwq7tXyZQ8dsgzmo7TZ3CcbP0njwWNSrn2eU3O%2FbO926fcS%2FoEM4zQQG9BpDoa2ldMU%2BbIkdVzD5%2FJF%2F%2BX8JgqvwMt%2FG9j4XY34n3QkOxnKkP0fHNvpqRZwIxSyASam4pc6QTRqgMk8s%2BaKou2cRnE5r0pB0OC204%2FQOo%2Bt25xUmhr1QFHbTGYQLPSebqEMgsU8&X-Amz-Signature=73a458eda41c206923fd4b550387f6bf911933f13d6f09dffcc0b76aaca8cce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FH2BFED%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDqgCQcsCkwHnc2LkNbmfND1yOkg73kJAlUh1L2b6AOjwIhAN9O06xQrOdcPYDpPEDkMTcHSnRZMJmhuePnBN9TyvIsKv8DCAIQABoMNjM3NDIzMTgzODA1Igzyt7SPZQ8gSXVxlpkq3AMOY7ihEL8QznBvBp%2FYdWcxUqnoVPLY5iI6xvHsQwdNCE%2FUwXtq0rDB3vOJ%2F3xtCg%2BzQIaoGM2vtwownwrPkwPFLx%2F3kWP0xKRGvH1EDsNYdsdfUb33rlDIJXOAxwV79RVu6UYBbtD7vTsPvrklAkPAzsnTW8hbnLNvF6HG0b4Gj6LPvgGuZ%2FjMqgmaR%2BlmMR0llpjoEGN9F%2BwLNEagrJHFH9FVUtB4SJGcxCbmJYnIzHNuNxdMQ%2F%2F2NMEpbHyqI9p6Xz80OXP%2FPUWn9cAXR8mPya6xjOp8e9MQL1e%2BzjPvr%2FCtVYE6rTTx78eYi0qi1HuaTzXnLT4txHjZziOSsb7n7uy8ZR2xf4cBWrRBplc%2FBhNvuBYvGA3AO8f%2FSZL4sW0JUaQM3Gd1ceInwmE5nRKiuIWareOOM5fba6tNbq5G7lym3brf8uLdW6yEJdK3Gf5mWslwoh7zTjuMDZzjFe9oMEv%2BOqke3ZEz0MVeiUJHjP%2FCJMa0zfc%2BpYrAg8yFNjVe1rBdK9%2FIkxeaOIBoQmpLX9nzEPbhkUZVspfIYZHVOtv2asZ3ZLLAbyHkW3ux7xdMiC5112%2Bvm4bCvLkl3NZDucKWZHyxOKR1cksJUWRDxJpvXTIz1FaTQwPvBTCLhPnMBjqkARNsHLs1%2BZaSednUcSH%2FJQLJKTwq7tXyZQ8dsgzmo7TZ3CcbP0njwWNSrn2eU3O%2FbO926fcS%2FoEM4zQQG9BpDoa2ldMU%2BbIkdVzD5%2FJF%2F%2BX8JgqvwMt%2FG9j4XY34n3QkOxnKkP0fHNvpqRZwIxSyASam4pc6QTRqgMk8s%2BaKou2cRnE5r0pB0OC204%2FQOo%2Bt25xUmhr1QFHbTGYQLPSebqEMgsU8&X-Amz-Signature=94b57e102c8391c11b3120e810478a625e87b96207c867db9257af206ab0cdbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
