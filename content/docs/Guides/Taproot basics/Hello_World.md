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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBNZYGV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7kDZRliDiv7Ny6f0pIia9EPaKZKO8TouMV9bN%2FKZddAiBLds1xLz7za94srRvTKypmcRheeuA8nxT2Yt9zEw2q9SqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRhnsazFtt0vy1txKtwD7%2FGlP59JPukvR6gUAxknSXgPbsFJaHfxdGs3p3RVHoBtWWBpXPatf1H41%2F1kkKQaspAtjGzGIIIJx5TsBI60fSzrNTsIQ5friWtVEWgrLC8ZTbCD962s5L8xMTi%2FwTfY1j2Jj0b9mXvjcItuF6ZYZEJm3uIKUD0%2B5vCUZ7c6EyWHT3xE%2FUDPHKM3vIkoMfuJ3riui8lYtOo77gusuRZa5PB5XScD1TxJWwRU0NKOW6CvBusSb5iFolccKYdGIyecqFdNYP6FOMAIqxTHrMAKxH5oTmwxfh7x3%2Fn%2FdAUTRjWPBVRBNjlVQVui9cIxjM1kxpvqlBSfBjw9ZIvMFjeTqJ0uVEis%2FXYxUV8kElBSarQTxh5VsGmDo3%2B0biDVgBrUC7SWxZ5XAqYK52gQ4wDnbB1KchOCM0UiLhSCL8BLR6xaHP8khrvcvWVWzoPVaMygmGK%2FS45XHXSUKL%2FmhMKl5M10LesAiOfY%2FVx2gnpa%2BY0KrXN9BjEqQEkWPUVeJmCitL2O56415IoG%2F5yRukOMT71xoSPUeYg5uBvcS6V8c5LA7y21vrQDXDZGE08efUeoOok8nfJuPxLp7WX5U2cGxMPWqMHNQmLgmjLDbdQQG4NBP75cNkrTnIs7J%2Fow1a%2BcvgY6pgFoJ3ezzgqQM4pnTvLgqpJGVTeokDph6T8xON2Fs8TgFWZV7G3XAaYSPRdhKf%2BhK%2BaFCXvxoFE4Vha1WIgniZeeJmYR8NsapyqTfv3EPa03aQgAFv5qzvvb5XPwo07fT2NM5I2j%2B4HDyYl4NzNEDizNTjIi8borLB%2Fi7WQRXwn7oBOXjisDt9U7RHJCGzgDoNxjqKv9djXT5GDdnu2G3cyd%2Fn0VpW2N&X-Amz-Signature=1a927dad06002c7be012672ee0746fd13b99e39fc91e0357b2ea415c10dc22b9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBNZYGV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7kDZRliDiv7Ny6f0pIia9EPaKZKO8TouMV9bN%2FKZddAiBLds1xLz7za94srRvTKypmcRheeuA8nxT2Yt9zEw2q9SqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRhnsazFtt0vy1txKtwD7%2FGlP59JPukvR6gUAxknSXgPbsFJaHfxdGs3p3RVHoBtWWBpXPatf1H41%2F1kkKQaspAtjGzGIIIJx5TsBI60fSzrNTsIQ5friWtVEWgrLC8ZTbCD962s5L8xMTi%2FwTfY1j2Jj0b9mXvjcItuF6ZYZEJm3uIKUD0%2B5vCUZ7c6EyWHT3xE%2FUDPHKM3vIkoMfuJ3riui8lYtOo77gusuRZa5PB5XScD1TxJWwRU0NKOW6CvBusSb5iFolccKYdGIyecqFdNYP6FOMAIqxTHrMAKxH5oTmwxfh7x3%2Fn%2FdAUTRjWPBVRBNjlVQVui9cIxjM1kxpvqlBSfBjw9ZIvMFjeTqJ0uVEis%2FXYxUV8kElBSarQTxh5VsGmDo3%2B0biDVgBrUC7SWxZ5XAqYK52gQ4wDnbB1KchOCM0UiLhSCL8BLR6xaHP8khrvcvWVWzoPVaMygmGK%2FS45XHXSUKL%2FmhMKl5M10LesAiOfY%2FVx2gnpa%2BY0KrXN9BjEqQEkWPUVeJmCitL2O56415IoG%2F5yRukOMT71xoSPUeYg5uBvcS6V8c5LA7y21vrQDXDZGE08efUeoOok8nfJuPxLp7WX5U2cGxMPWqMHNQmLgmjLDbdQQG4NBP75cNkrTnIs7J%2Fow1a%2BcvgY6pgFoJ3ezzgqQM4pnTvLgqpJGVTeokDph6T8xON2Fs8TgFWZV7G3XAaYSPRdhKf%2BhK%2BaFCXvxoFE4Vha1WIgniZeeJmYR8NsapyqTfv3EPa03aQgAFv5qzvvb5XPwo07fT2NM5I2j%2B4HDyYl4NzNEDizNTjIi8borLB%2Fi7WQRXwn7oBOXjisDt9U7RHJCGzgDoNxjqKv9djXT5GDdnu2G3cyd%2Fn0VpW2N&X-Amz-Signature=501a4c609b1b86ec932c0244cea2d0370bd47d001e97c0f6e7e758b25ed55235&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
