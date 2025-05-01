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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5HAI2F%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICDyWYM4GdL6UnC12yRFununhb2ejYMuBKvboD5mvftmAiEA0rr%2FrmosKlgq4YCszakYa2pvj5VbGhL63qcwQEGO8zgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBj3LGrdHHwbo%2BywSrcA%2Bt32eYZZqbRQtcdZXX%2BZTvDMTyCGvE24aNJgkX4vwIhggDMeZZi5gBti4dDT39%2BPdOV4KzYfJ327yjVilfSq%2F1orFHzPH%2F28lK1TrswhlNDsrCRXlgmSfbFoLi%2BfNeLi0ZPpK82LAitkDwI6I9Q4v%2FQXVf8zGcOKT8jgNueEBT7cJIe9YHF6GacIIhocpkxufD3rsEjmimDq4%2FnENNXZD%2BsG8ajqNqCTa2f%2BMnzbseiJDauImB4Rc%2FV%2FfDCpfhDWSUBrkd2q1lcBNscZd0TzF3gdEjLW09c%2FO9N65eMwkqP3o%2F%2Fcpruxk%2FVd8jQKBgGfvknK9m%2Fw5ikgiQau%2BHvh51UnoVIgLM77vETOttdM%2FvclUN6OzY1cb%2FqJALxs%2Fop%2FxyV8qL%2FdmwG8s%2FxPtNH9GheoQ35YS0f0pSoYt%2FRJmWLunuyt7g40SdMNgPADu1meojAoA1H5R3%2Bq%2FrjELECJsM0%2Fu9co0b9KU%2BSdAWmcriO5g6RxdcBcjPXWsSXkNOskXSFcXyrxIKCnqqGpYcpNYT3yDp7nc0fWtOdesCDL0tsyaPAGWx%2FgTU9N8yhMM9nJ1ZRE8I8bhgSxFYceDRMiMY2iBw1Xt0fIWx4d4ncbc9ukqD2DUV2R1RPaweOMLvjz8AGOqUBb5eHQ705Pv6nWLlKOFOhe3PACbU3V20QbIAQuEJq4s71xvQDiwAKQqAkhmh%2FpxuA%2FEb8ktG7ke2USCUpzu47biXAibzYNOJwFPUcVNWwmbEcEcrKuAiwOx4VhexOAEKp4gCj5iQqMgfBGpA7QO8QpY5HOKTJ7CqSF9A%2BBobUkJVcPu%2FO4lQDI8gOr%2F%2Fk30wDU%2Fyw0NoNX5XTvYhBQ1ZDc%2BZrIsBR&X-Amz-Signature=1df3010aa60c8195a8aafbd2055c1b260516ac8ee30e7fde4f8e39d4ce55c54c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5HAI2F%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICDyWYM4GdL6UnC12yRFununhb2ejYMuBKvboD5mvftmAiEA0rr%2FrmosKlgq4YCszakYa2pvj5VbGhL63qcwQEGO8zgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBj3LGrdHHwbo%2BywSrcA%2Bt32eYZZqbRQtcdZXX%2BZTvDMTyCGvE24aNJgkX4vwIhggDMeZZi5gBti4dDT39%2BPdOV4KzYfJ327yjVilfSq%2F1orFHzPH%2F28lK1TrswhlNDsrCRXlgmSfbFoLi%2BfNeLi0ZPpK82LAitkDwI6I9Q4v%2FQXVf8zGcOKT8jgNueEBT7cJIe9YHF6GacIIhocpkxufD3rsEjmimDq4%2FnENNXZD%2BsG8ajqNqCTa2f%2BMnzbseiJDauImB4Rc%2FV%2FfDCpfhDWSUBrkd2q1lcBNscZd0TzF3gdEjLW09c%2FO9N65eMwkqP3o%2F%2Fcpruxk%2FVd8jQKBgGfvknK9m%2Fw5ikgiQau%2BHvh51UnoVIgLM77vETOttdM%2FvclUN6OzY1cb%2FqJALxs%2Fop%2FxyV8qL%2FdmwG8s%2FxPtNH9GheoQ35YS0f0pSoYt%2FRJmWLunuyt7g40SdMNgPADu1meojAoA1H5R3%2Bq%2FrjELECJsM0%2Fu9co0b9KU%2BSdAWmcriO5g6RxdcBcjPXWsSXkNOskXSFcXyrxIKCnqqGpYcpNYT3yDp7nc0fWtOdesCDL0tsyaPAGWx%2FgTU9N8yhMM9nJ1ZRE8I8bhgSxFYceDRMiMY2iBw1Xt0fIWx4d4ncbc9ukqD2DUV2R1RPaweOMLvjz8AGOqUBb5eHQ705Pv6nWLlKOFOhe3PACbU3V20QbIAQuEJq4s71xvQDiwAKQqAkhmh%2FpxuA%2FEb8ktG7ke2USCUpzu47biXAibzYNOJwFPUcVNWwmbEcEcrKuAiwOx4VhexOAEKp4gCj5iQqMgfBGpA7QO8QpY5HOKTJ7CqSF9A%2BBobUkJVcPu%2FO4lQDI8gOr%2F%2Fk30wDU%2Fyw0NoNX5XTvYhBQ1ZDc%2BZrIsBR&X-Amz-Signature=c55bbf5a5af5be0f088596981fc5eabf924e69c63eb05e564a23e9d4d0d28745&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
