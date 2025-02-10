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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWUWJ2T%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3pCIb%2FxDgRIxiz2vgGi6xeo9%2Flej%2Bq4V310xJTAN4XgIhAPtzqjD8uceYYeNSzcacThJPjRae3LYambCSe8itX0xsKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwiw4798wCLcjrRpGcq3AOCYKt%2Bc6orMSr%2BUhJVyzpDF20%2Bw0XwlG4hsun4lGvYaFYdoa2YMKvrbk%2B9bRo77LTyhNG7F5gotawjlAkFOdpevmFPH%2FYtulrx2pVrESxU4arPfy5QlTtP6DU78x662j5fx%2FbvXk884Ye0K9lRivXeZk2chVS8J8qbmv6irmHtn7dEHm88kwe2nqvt5zZXFfZVW022Nqb%2BqWSuLNsQ4g2EfUsV5im%2BeeeY%2Bnh0ID4FiiKZlLsN2z0bZXocAFInUd4JmPBURqM3khItoMe0Ges0Q5parSWtldJvlK9W2op1Fuyo6UcxyYf9NDu9OtJ4SYVNGCEBnGeek%2F0dNelV6POYjv0eJcAaMurNK4t8DmOQFzSaYSJNF0LYjcy6ZQxvw2VFPG1dkXi7wM3ocCTItND9lOLfokr%2B2oO8%2FNigmtz%2BJ%2FD6exgs50Lbf4IJ6T7dI5O7edEDMTNJqIaRgxvFL84cBSarrmL%2BsnOFU5R6Z0%2FH7YXuJkDC%2BdNDpmAlg3JF%2Bd0vV1si4Bb%2BvLACZ07I0hePcpGUjtLkab77pzU4Y1mmeP%2Bi7RnGqSUIQ%2FrGVlkIdmYQHCxznX5spAeDjZlva2KBbJIFG3bddJZAeoowMaPRo1H9PTPle7kvYwHa5TC4rqe9BjqkAVwDgxh8RN0Ujx2jEBwBuJAs8qVMF0rXpSNM%2B%2BjkWzNEWikzmBvq8EPJdM1kopVGNzFG4%2Fgt6dD9aqFFPfP3E%2Fzp4Dz5dRBArAS5VArbb%2FQV57hzyy41K2GK0X5ZViGXtwiCoLH0VaZj6pmFyXWvvJFCdyJGLgD2UQgVtK%2BKvfU4RNFqXzUyXRcMVI2yiU3QM3b6JlFGFai1up70Yp8UimL69lm1&X-Amz-Signature=0369df48f2864b16c6139a125527e0f0c1ac6c66f06d9cf6d9783db0a39a0677&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWUWJ2T%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3pCIb%2FxDgRIxiz2vgGi6xeo9%2Flej%2Bq4V310xJTAN4XgIhAPtzqjD8uceYYeNSzcacThJPjRae3LYambCSe8itX0xsKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwiw4798wCLcjrRpGcq3AOCYKt%2Bc6orMSr%2BUhJVyzpDF20%2Bw0XwlG4hsun4lGvYaFYdoa2YMKvrbk%2B9bRo77LTyhNG7F5gotawjlAkFOdpevmFPH%2FYtulrx2pVrESxU4arPfy5QlTtP6DU78x662j5fx%2FbvXk884Ye0K9lRivXeZk2chVS8J8qbmv6irmHtn7dEHm88kwe2nqvt5zZXFfZVW022Nqb%2BqWSuLNsQ4g2EfUsV5im%2BeeeY%2Bnh0ID4FiiKZlLsN2z0bZXocAFInUd4JmPBURqM3khItoMe0Ges0Q5parSWtldJvlK9W2op1Fuyo6UcxyYf9NDu9OtJ4SYVNGCEBnGeek%2F0dNelV6POYjv0eJcAaMurNK4t8DmOQFzSaYSJNF0LYjcy6ZQxvw2VFPG1dkXi7wM3ocCTItND9lOLfokr%2B2oO8%2FNigmtz%2BJ%2FD6exgs50Lbf4IJ6T7dI5O7edEDMTNJqIaRgxvFL84cBSarrmL%2BsnOFU5R6Z0%2FH7YXuJkDC%2BdNDpmAlg3JF%2Bd0vV1si4Bb%2BvLACZ07I0hePcpGUjtLkab77pzU4Y1mmeP%2Bi7RnGqSUIQ%2FrGVlkIdmYQHCxznX5spAeDjZlva2KBbJIFG3bddJZAeoowMaPRo1H9PTPle7kvYwHa5TC4rqe9BjqkAVwDgxh8RN0Ujx2jEBwBuJAs8qVMF0rXpSNM%2B%2BjkWzNEWikzmBvq8EPJdM1kopVGNzFG4%2Fgt6dD9aqFFPfP3E%2Fzp4Dz5dRBArAS5VArbb%2FQV57hzyy41K2GK0X5ZViGXtwiCoLH0VaZj6pmFyXWvvJFCdyJGLgD2UQgVtK%2BKvfU4RNFqXzUyXRcMVI2yiU3QM3b6JlFGFai1up70Yp8UimL69lm1&X-Amz-Signature=54ea1e1a00f9a61ffeb9e7934ed90ff89080f42e7e8ba71e7648654380911ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
