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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCVUIQOX%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIExkot8hRW%2Fk4sT7YZtMzVoEpjMWf9Rj5keZvaU9MZwIAiBHCsuKyQP2uHNrlrGUASvCyuypUmkmXb2nmM1w1OKvZCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDAtZVUDnSXCmIQW9KtwDScSphYI3L%2B6ESdtNgI1q3fZP4CD9zfDpjh3TfCfsXrH4xYf03HdxF9114Z%2Bla%2FrLQuEzwF%2B9eiEnfzfwUlFiyzCbUOKLA%2BAIV8FbzfidLR6NIISMIvbqlvCOGP2jH7lVaFgMxUlsBDz2%2FmG93wSgrdSiWSLagLPSEQhCi9ewRdA7gU0elbD3Lhd9DzWB3Pwm3086fhrGDCPxfzQFzQQzfn%2FIqQdoSART8Vxwln5HM3yFehoxT0Fexlqwqa7bUvaTLi%2B9C%2Bx60y5G0w7kyOy8HNCAj83j8LaB1PfaNSFt0FPZ90h%2FdYtNSDc4wBJIcSKyC5XtHNkttqfgssomhqiOy6TBpG6OHIxeoXZn%2By5XDYScub%2BCARnysQINixiYx0iJyYlivMEDWLxSpvwLq5L6uGzC2FNVh3i5JcYUaktZ5IZlNl6Q6B9b%2FR4wehNoiO4CwfBJcgV38nd45gy75kxs1aQhI8Fsq7Eqel5jbjz%2B5wv36hW5CAr%2BCQzACBQDyoGW4LuUiKUsERgQ6p6l3J0%2Bd2FZrUgJFpn2GMFeElXUc6wTp2nAd0UXA03ODsOYsHnu62tus7Q2riUfXeqOytEyB4tn9J2IvWoLsI8OcDF5rzpa%2BlEw2HVO943NYhAw1%2BOUwAY6pgE8lQ7i5zcB16lVGe6Z%2FDeuwR58PwO8EGZa3MzNOxLbjcUjfcRUIQrugGcwnEBbNT15ftd5MTR%2BjdJ8H0IznLKGLHb6aQ1%2BGsWAamEiiCpmbAZtrviVbJNBkZ%2BkFaX3Z7xmC26mSooTKFzu%2B70VYp5QK3jbQXIl%2BBQwbULAaVHMGz%2FZQuUDT1viKO1jF3Y7jDOQzbeV1BYCvlne7hd0RkOnoS2v39B5&X-Amz-Signature=6ecd07871aeb9a849de7b81d1d3fa66ce5d1b6f76637c4466a668e99d23964be&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCVUIQOX%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIExkot8hRW%2Fk4sT7YZtMzVoEpjMWf9Rj5keZvaU9MZwIAiBHCsuKyQP2uHNrlrGUASvCyuypUmkmXb2nmM1w1OKvZCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDAtZVUDnSXCmIQW9KtwDScSphYI3L%2B6ESdtNgI1q3fZP4CD9zfDpjh3TfCfsXrH4xYf03HdxF9114Z%2Bla%2FrLQuEzwF%2B9eiEnfzfwUlFiyzCbUOKLA%2BAIV8FbzfidLR6NIISMIvbqlvCOGP2jH7lVaFgMxUlsBDz2%2FmG93wSgrdSiWSLagLPSEQhCi9ewRdA7gU0elbD3Lhd9DzWB3Pwm3086fhrGDCPxfzQFzQQzfn%2FIqQdoSART8Vxwln5HM3yFehoxT0Fexlqwqa7bUvaTLi%2B9C%2Bx60y5G0w7kyOy8HNCAj83j8LaB1PfaNSFt0FPZ90h%2FdYtNSDc4wBJIcSKyC5XtHNkttqfgssomhqiOy6TBpG6OHIxeoXZn%2By5XDYScub%2BCARnysQINixiYx0iJyYlivMEDWLxSpvwLq5L6uGzC2FNVh3i5JcYUaktZ5IZlNl6Q6B9b%2FR4wehNoiO4CwfBJcgV38nd45gy75kxs1aQhI8Fsq7Eqel5jbjz%2B5wv36hW5CAr%2BCQzACBQDyoGW4LuUiKUsERgQ6p6l3J0%2Bd2FZrUgJFpn2GMFeElXUc6wTp2nAd0UXA03ODsOYsHnu62tus7Q2riUfXeqOytEyB4tn9J2IvWoLsI8OcDF5rzpa%2BlEw2HVO943NYhAw1%2BOUwAY6pgE8lQ7i5zcB16lVGe6Z%2FDeuwR58PwO8EGZa3MzNOxLbjcUjfcRUIQrugGcwnEBbNT15ftd5MTR%2BjdJ8H0IznLKGLHb6aQ1%2BGsWAamEiiCpmbAZtrviVbJNBkZ%2BkFaX3Z7xmC26mSooTKFzu%2B70VYp5QK3jbQXIl%2BBQwbULAaVHMGz%2FZQuUDT1viKO1jF3Y7jDOQzbeV1BYCvlne7hd0RkOnoS2v39B5&X-Amz-Signature=e299c42ae4d7e243072da5c347cf8bc5a3b9ff189c32cd3c5a514817d97211d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
