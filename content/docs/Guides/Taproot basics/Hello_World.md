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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5QZWIC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQD6vWEm3QSkJSTlfij1Q7wryDn2yYlLWmH%2BFzi9BAWdJgIhAMZ7ilP5rTsJCu2N2UwsHf%2BDQVc%2FobqYORxz6V2w5sDjKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5BqHXknR2HxhHjB0q3AMK2dw%2B24eIHf0DTQGDa2K70G%2FQ4GBHBil8siJi65bPMTWUZF1hmOzzXwcgFeFi19aZyXcdsj6dJIO1Tlc10imkrnGIZlCne0C9HhZs18ImOgGaQdIoniyhlPqu1QEf7VhZE1vlfL1YNTUGBwZRws691YIAsIGPlDneeW68yYx7kNJ2CxFE8qQUIy6zV9j%2BW%2B9dJW7nOz9HO89j757fxpYPhGU8tyl5SmGRx8Li50lOIw9XqC2mWLwxBcHBDIEHa3NY4Qf2IiGgnP8pyWp6NOtgjcqqCKkCQwovRVZlPNR10GilMgLMna3U6DJPVRSxafgDCuytxEfOqYOMAbMYQ609nOBVYBAdAQLWBgruwyIJyshGKhf1xvqEuhMhCziPyKJf8yQMlg3qleIA7vSd%2BzrVVxdYwwKyXrvIXM%2BcmoyAKC0pBQaY40yahbsPPWlDloD2oRC%2FwRSFPdD6Lf7oeokRBirZGKRZLsDxzOPfvsi4zZCt36MZMVpQfHoZ7Ey75beu4hS%2BnTAVIbSNSZiip8ZmQMNE%2Bi5dW6bG2zBcBmg%2Bynho0qkpHLt%2B%2BsL7P%2Bu86cAaETazWvDh%2FBki1e2LgUdEyFYuykkjosAkay1KElrXls4bZff8vO4sRzOYvTCAjrjBBjqkAQAwhpuKPd36ofh8W2Y88%2F0H8HMwZk4OvYCxpDSFn52ZU1XRSH4d2gbzZiz7luYXKnWYBdXuH6kXw%2BlG59Tgs5%2BNSf9eltM8ef9BMyDuBKW5H7hkgTTQ3kPK7EnleaGtGRpIVh90zlcW%2BHRg3rTKoRlD4TafXHZY0flhUIoZcfg1UZBugKAFJnO0%2FAA5UX2cQuDNNaNpsZgna3I8ZWHLIV2Dfrhr&X-Amz-Signature=c32bb6521a06236991383703c2dfabae6fd5fe3d0af0bdf8d31cfdfb23490182&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5QZWIC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQD6vWEm3QSkJSTlfij1Q7wryDn2yYlLWmH%2BFzi9BAWdJgIhAMZ7ilP5rTsJCu2N2UwsHf%2BDQVc%2FobqYORxz6V2w5sDjKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5BqHXknR2HxhHjB0q3AMK2dw%2B24eIHf0DTQGDa2K70G%2FQ4GBHBil8siJi65bPMTWUZF1hmOzzXwcgFeFi19aZyXcdsj6dJIO1Tlc10imkrnGIZlCne0C9HhZs18ImOgGaQdIoniyhlPqu1QEf7VhZE1vlfL1YNTUGBwZRws691YIAsIGPlDneeW68yYx7kNJ2CxFE8qQUIy6zV9j%2BW%2B9dJW7nOz9HO89j757fxpYPhGU8tyl5SmGRx8Li50lOIw9XqC2mWLwxBcHBDIEHa3NY4Qf2IiGgnP8pyWp6NOtgjcqqCKkCQwovRVZlPNR10GilMgLMna3U6DJPVRSxafgDCuytxEfOqYOMAbMYQ609nOBVYBAdAQLWBgruwyIJyshGKhf1xvqEuhMhCziPyKJf8yQMlg3qleIA7vSd%2BzrVVxdYwwKyXrvIXM%2BcmoyAKC0pBQaY40yahbsPPWlDloD2oRC%2FwRSFPdD6Lf7oeokRBirZGKRZLsDxzOPfvsi4zZCt36MZMVpQfHoZ7Ey75beu4hS%2BnTAVIbSNSZiip8ZmQMNE%2Bi5dW6bG2zBcBmg%2Bynho0qkpHLt%2B%2BsL7P%2Bu86cAaETazWvDh%2FBki1e2LgUdEyFYuykkjosAkay1KElrXls4bZff8vO4sRzOYvTCAjrjBBjqkAQAwhpuKPd36ofh8W2Y88%2F0H8HMwZk4OvYCxpDSFn52ZU1XRSH4d2gbzZiz7luYXKnWYBdXuH6kXw%2BlG59Tgs5%2BNSf9eltM8ef9BMyDuBKW5H7hkgTTQ3kPK7EnleaGtGRpIVh90zlcW%2BHRg3rTKoRlD4TafXHZY0flhUIoZcfg1UZBugKAFJnO0%2FAA5UX2cQuDNNaNpsZgna3I8ZWHLIV2Dfrhr&X-Amz-Signature=d6b9d259d0a6da2a1c3bd5792c7f5e3ba10f1a716f027767f673fad967161341&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
