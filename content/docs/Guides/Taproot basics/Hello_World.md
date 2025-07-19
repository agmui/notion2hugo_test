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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQKSQRXU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe8o0dDrYJwAv9oGGF8G%2BvRzrh%2FsLGaVbHHFFsj6m%2BjAiBCjNBnV%2Bx%2BDDyRfVs7pOgoeZU%2BZiv%2FeKbviFjZlBHMJyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTW7mRdry%2FEp%2BdLknKtwDYzAcqxPQLUktwi0cCtDWdJ88Orx1x%2BXRoU70CFrOok%2Bjj6SIYWtiSEfqTYoOdvsVfx2uBdcd3dze1GB3pptcIUveAgZwSXVYp7Xip4ZfP00tePy7aEjPOkZ5S05bgwJC%2BcpKc3s3g9Ed7Rob5o6MGzSJrAuvVko8iY4QhhsiPTU6RMGWjqxzeHbagor7vJqJMuGJ3RqYJK%2FlCDOteUPfgEp5A1%2B5LpcrlE3L2riOIhnI8TM3HoRtFXCjz3Ezc9Ah1oBFUt7ultsO0wFCVBZjzbZ2CMyZvZLxVehVx9kJWyp604MbJDUvKtlyodUYyhd7IvtzxHMaRDlutg%2B5rkKcuiV72U57vt%2BlYDx40a40bZV1pZRDUP68oJSkgYCninBRAHq3XMVhA4fYm%2BWQHP3WfgXVlIWizB5fdR7IdNoDtNbz6ZVbkN42rDomPiZJBCEjcxPpDyg1XNJIBj7MD2ddyiTg6RE%2Bb88gE1PG%2FBKjKnE2T9J4ZQeTw344Om7m5M0LMNJMqxoXtl4X%2B7ukymN9WCWniBZI3K5rqkboM9frH9IfXaH4ygGy6q2DZrc5Nvz44AXXHnafo7oJDttf6e4b9CCEcLx%2FAi91nAVs1hk%2FJWkjxV%2BanVTGcl2en48w5sXswwY6pgFPNrNkk2mS3a3alY3vtCDV9myBZSnqGmhg%2Fo54yNYxZu8ms34dx4m%2BZEgxaFgTaErRybteJNWVtAtXRE0wczPM3gyeP9vV3OI9TigTMZPKrHDT9DtII4IX4b2d696yctf58QAMb%2FczsTDsjdzeFBK9GTvm%2F34Hzoq7V6OKu3OXGcCpFxZtLMEZR%2BHBJHm1V1RPDxPwR7JJ6xnIFZQ4HRt%2BVa8Upw82&X-Amz-Signature=40cdeb667bb2746220826953b2c9b418bac5e5f7e2a0bea184d56089e29f6a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQKSQRXU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe8o0dDrYJwAv9oGGF8G%2BvRzrh%2FsLGaVbHHFFsj6m%2BjAiBCjNBnV%2Bx%2BDDyRfVs7pOgoeZU%2BZiv%2FeKbviFjZlBHMJyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTW7mRdry%2FEp%2BdLknKtwDYzAcqxPQLUktwi0cCtDWdJ88Orx1x%2BXRoU70CFrOok%2Bjj6SIYWtiSEfqTYoOdvsVfx2uBdcd3dze1GB3pptcIUveAgZwSXVYp7Xip4ZfP00tePy7aEjPOkZ5S05bgwJC%2BcpKc3s3g9Ed7Rob5o6MGzSJrAuvVko8iY4QhhsiPTU6RMGWjqxzeHbagor7vJqJMuGJ3RqYJK%2FlCDOteUPfgEp5A1%2B5LpcrlE3L2riOIhnI8TM3HoRtFXCjz3Ezc9Ah1oBFUt7ultsO0wFCVBZjzbZ2CMyZvZLxVehVx9kJWyp604MbJDUvKtlyodUYyhd7IvtzxHMaRDlutg%2B5rkKcuiV72U57vt%2BlYDx40a40bZV1pZRDUP68oJSkgYCninBRAHq3XMVhA4fYm%2BWQHP3WfgXVlIWizB5fdR7IdNoDtNbz6ZVbkN42rDomPiZJBCEjcxPpDyg1XNJIBj7MD2ddyiTg6RE%2Bb88gE1PG%2FBKjKnE2T9J4ZQeTw344Om7m5M0LMNJMqxoXtl4X%2B7ukymN9WCWniBZI3K5rqkboM9frH9IfXaH4ygGy6q2DZrc5Nvz44AXXHnafo7oJDttf6e4b9CCEcLx%2FAi91nAVs1hk%2FJWkjxV%2BanVTGcl2en48w5sXswwY6pgFPNrNkk2mS3a3alY3vtCDV9myBZSnqGmhg%2Fo54yNYxZu8ms34dx4m%2BZEgxaFgTaErRybteJNWVtAtXRE0wczPM3gyeP9vV3OI9TigTMZPKrHDT9DtII4IX4b2d696yctf58QAMb%2FczsTDsjdzeFBK9GTvm%2F34Hzoq7V6OKu3OXGcCpFxZtLMEZR%2BHBJHm1V1RPDxPwR7JJ6xnIFZQ4HRt%2BVa8Upw82&X-Amz-Signature=4151969098d2431fec77e5131800b6e3610cdbd6a62b728445e6280ed42e3498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
