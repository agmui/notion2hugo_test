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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGI4BZI6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAbxGoLuemoJ5ViskIKoJOroST3S4cqnKi6zJYA5IGSZAiEAreelrm%2FR%2BeLEvDOZc9AAyj%2Bv9W%2BXEhOypoUaLuUsM9kq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDD5wskGfq50JGF2r0SrcAwajogTxtahNE7rMblrb74hMkCE1Mjpx8colc9HbsIRnIAE3qD3oKKW4fBW98dNBd0MC9FI00nkYttZbVQH2k2rsJPwzPzH4tDFmL62q67fUUcg3HjaVGOjD9x1xzA5XH%2BT8iEDMuaR9Ywzv0FZqFJZdaUK5jiIg%2FAuZUyMI2F4jDWflJjHI8O282tVNVxBYHEgZLu61z8YatHh5ePEoH5cYceSMBdrQsAWv7O8tpsSED%2BM9lJqJKtxBJIs76lhKscFZyz95SJ%2FvpWGRN7Nmzmi2nwDKRyrI791%2BFUV%2BMeJM%2B%2BkgRGtCk3RZSThVfV6OjBNQZRTf31rgWzlWJt%2FRdzEIIr6Kli%2FBGL%2BWbGJLSihU1sZ%2Bv%2FopK2r4mE19XbzIOsTXCbEqMuJLynpP5Zb%2BBDVYDNU7KXnTJ6hnJN2D484ihQ5iS%2FukiNa7D2WBvxa0oJkXtOUKjTh%2Fjkq%2B3jxWO78Ym6fFVTdaQZ9WCa2qgimqtyATLuru1Nh9ckCXmT06UmK5xkhLnQ3DiCjUvj4PbvExLzq%2BtPKSXeMuHC3fnc9CgcAbhb86X9gGAQiUtxEJtqRbHH65i3afvuSmNl7OoWRirpGu0XrSV7PQmPVQvTYdKOLjLtePZTh6zM%2FOMNzFr8IGOqUBzK%2BsGjMC7db5BgYGsaJcMW4Y4hDy4C51aSo%2FW%2Fh%2FIFvfhA7wTnEG%2B8jsrgRDDcXNTavpVT1xdZ9DgqIDWd1JtwZVS13Hfc%2BPEwejW%2F6T99N3iFqqQ8R0r4jtNhiPgwtmdzQhBFQ4TavncJBPmIl2zRHqKGgXdMvbnVCHhbYxjYdJcLlxuhab0%2BXkdyC9z5NNkJUVKLB9da3eRSXEPz01DkyM9vEm&X-Amz-Signature=0f77a6e0cba5565accda2fe25abedc1f63039f74a075b536136c8229018128d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGI4BZI6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAbxGoLuemoJ5ViskIKoJOroST3S4cqnKi6zJYA5IGSZAiEAreelrm%2FR%2BeLEvDOZc9AAyj%2Bv9W%2BXEhOypoUaLuUsM9kq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDD5wskGfq50JGF2r0SrcAwajogTxtahNE7rMblrb74hMkCE1Mjpx8colc9HbsIRnIAE3qD3oKKW4fBW98dNBd0MC9FI00nkYttZbVQH2k2rsJPwzPzH4tDFmL62q67fUUcg3HjaVGOjD9x1xzA5XH%2BT8iEDMuaR9Ywzv0FZqFJZdaUK5jiIg%2FAuZUyMI2F4jDWflJjHI8O282tVNVxBYHEgZLu61z8YatHh5ePEoH5cYceSMBdrQsAWv7O8tpsSED%2BM9lJqJKtxBJIs76lhKscFZyz95SJ%2FvpWGRN7Nmzmi2nwDKRyrI791%2BFUV%2BMeJM%2B%2BkgRGtCk3RZSThVfV6OjBNQZRTf31rgWzlWJt%2FRdzEIIr6Kli%2FBGL%2BWbGJLSihU1sZ%2Bv%2FopK2r4mE19XbzIOsTXCbEqMuJLynpP5Zb%2BBDVYDNU7KXnTJ6hnJN2D484ihQ5iS%2FukiNa7D2WBvxa0oJkXtOUKjTh%2Fjkq%2B3jxWO78Ym6fFVTdaQZ9WCa2qgimqtyATLuru1Nh9ckCXmT06UmK5xkhLnQ3DiCjUvj4PbvExLzq%2BtPKSXeMuHC3fnc9CgcAbhb86X9gGAQiUtxEJtqRbHH65i3afvuSmNl7OoWRirpGu0XrSV7PQmPVQvTYdKOLjLtePZTh6zM%2FOMNzFr8IGOqUBzK%2BsGjMC7db5BgYGsaJcMW4Y4hDy4C51aSo%2FW%2Fh%2FIFvfhA7wTnEG%2B8jsrgRDDcXNTavpVT1xdZ9DgqIDWd1JtwZVS13Hfc%2BPEwejW%2F6T99N3iFqqQ8R0r4jtNhiPgwtmdzQhBFQ4TavncJBPmIl2zRHqKGgXdMvbnVCHhbYxjYdJcLlxuhab0%2BXkdyC9z5NNkJUVKLB9da3eRSXEPz01DkyM9vEm&X-Amz-Signature=b040de774775a14e695036cbb90139d1bc5f964afa6d0e68fe3b7f9dea698484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
