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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTI3DGB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrtiNK4QSHXdWq0lXPlGjql4zo7IT0frcRx7ZmQT5IAIhAPnTpaW%2BDNEFHnADof55OEbxIt%2BdZU9YxQE2tUZ3Xg82KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCppD50v%2FIqjH9Rt0q3APkMcJ7YbHZoFGeLxM6o8Tn%2FPc4dB2NiRlH6DLcx292mot2OJTkjzZiSkpzlQrcVVNs54cZrQC7PCkNFbKGDGRTQyiwo7zARiCqPMZZiYx%2FkJXhlb9CQnjjOLBnQmYgPJbakog7DXnOCpQrOia0bdn9680swPakwlk2K0u6lyu5Xsi9WjNb0JNVT0NiWY8XWpb%2BxjCyz1Q4URaCt251FFAu5%2FtBjjOFKvv0EJM8WiPNBMM%2BK733b6S%2FfP0wrxMffqM3KmD4zCS%2FMMtouWx3A4sHMYQ93LmFgLDD3FRvDt9%2BrgvRPtRPndedo3UxFwgEz1fSOZuUdsSOVcNBYoCVFMRebInfVnwBZQ5H8e9MhwfhGP3S%2BhEcgYy529ZC3ZSqUpwQ7aZBEyjsEW1ZVxz1srQ0lwfAtMjZATLwITI9Ikzl0VvEdFgUoibxBE%2BJEnd1oYJWwobovGPkzR%2F1MsxOmpwe8gHkJsHniYksVvu9q2rfFXfh86aA2lnlGq%2BK8O9naHo21qZCc4HJnIgPDsnl7ytUFekYz%2FJsSPSaiKssUc2cgXBsmcpn4oH8OrsowkMSex3nHrJoFPD85TDBBTfqxGdZA8Ps5fv%2F8HCdpK3zri8OJ0FVFL88Nggsxoy5pTCUofvABjqkAbh5tHO7bZRyGEw0TvcdVbAm9i08gsyyteJS%2FNvVRruY5WKcBkT%2B2UEDwIYHpqTo%2FFYJYcDkJAoivA0SC4i6vbCv2fg5EfWLOtZHeTYGfaJ9lx5fVUhNCCmHS%2BO5inFRFXaFr3E6FpvYe24D9LzZ5j5LQaemuEOd9bJxxnbgjybLrAhuC74rR7M1QBx23PuoFvjHv1DsNnBaIGXd9Q55bU0NOcww&X-Amz-Signature=fd72c6103d36d89e75a012e60e3b55488d5f97c2b655bc1cbec086c18b334720&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTI3DGB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkrtiNK4QSHXdWq0lXPlGjql4zo7IT0frcRx7ZmQT5IAIhAPnTpaW%2BDNEFHnADof55OEbxIt%2BdZU9YxQE2tUZ3Xg82KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCppD50v%2FIqjH9Rt0q3APkMcJ7YbHZoFGeLxM6o8Tn%2FPc4dB2NiRlH6DLcx292mot2OJTkjzZiSkpzlQrcVVNs54cZrQC7PCkNFbKGDGRTQyiwo7zARiCqPMZZiYx%2FkJXhlb9CQnjjOLBnQmYgPJbakog7DXnOCpQrOia0bdn9680swPakwlk2K0u6lyu5Xsi9WjNb0JNVT0NiWY8XWpb%2BxjCyz1Q4URaCt251FFAu5%2FtBjjOFKvv0EJM8WiPNBMM%2BK733b6S%2FfP0wrxMffqM3KmD4zCS%2FMMtouWx3A4sHMYQ93LmFgLDD3FRvDt9%2BrgvRPtRPndedo3UxFwgEz1fSOZuUdsSOVcNBYoCVFMRebInfVnwBZQ5H8e9MhwfhGP3S%2BhEcgYy529ZC3ZSqUpwQ7aZBEyjsEW1ZVxz1srQ0lwfAtMjZATLwITI9Ikzl0VvEdFgUoibxBE%2BJEnd1oYJWwobovGPkzR%2F1MsxOmpwe8gHkJsHniYksVvu9q2rfFXfh86aA2lnlGq%2BK8O9naHo21qZCc4HJnIgPDsnl7ytUFekYz%2FJsSPSaiKssUc2cgXBsmcpn4oH8OrsowkMSex3nHrJoFPD85TDBBTfqxGdZA8Ps5fv%2F8HCdpK3zri8OJ0FVFL88Nggsxoy5pTCUofvABjqkAbh5tHO7bZRyGEw0TvcdVbAm9i08gsyyteJS%2FNvVRruY5WKcBkT%2B2UEDwIYHpqTo%2FFYJYcDkJAoivA0SC4i6vbCv2fg5EfWLOtZHeTYGfaJ9lx5fVUhNCCmHS%2BO5inFRFXaFr3E6FpvYe24D9LzZ5j5LQaemuEOd9bJxxnbgjybLrAhuC74rR7M1QBx23PuoFvjHv1DsNnBaIGXd9Q55bU0NOcww&X-Amz-Signature=5dd26b752be0cbabca86466e10df1383eb028bd62e567659a9e91c769406245a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
