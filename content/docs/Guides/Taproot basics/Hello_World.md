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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNKE7DB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDueHYxUcYdcy1LjhkIvTRprBQBzcZcsXTEpsa8KGlMlgIgVFuQdL33mzZmPU%2BaOmRMDmynlnRqf0uC34sV5OaWPiEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDL4JEV9Dxu6ouvDu6SrcA1bYSiZk4zfCMBlf%2Bt9AGA4%2FTVYA5EZ4byWY2MGOqd5WX4mewSQ%2B5vOo6%2BcmCmXyjSOG%2FoErNMTT10nqh98QQe2XIWBdj7%2FJ8J5oFPkRV32FwxHtDHhPcuhiq1J17qaobqX0lkFhUzB2veks8NCAyrfzKov52AbHbm2IcRsSX6WyTKwem6UFzdRzDd2NCTOs8FFmOxF5J4GFqlUzkqEUPNAvd5YNmm%2FeFF9u1QBfZJxFMbJ%2Fr25Qam47kT3f3y9Bd4vIkakV3oxm2qxvr6zPso1RUHCCWygJ%2B6FONe%2B9TrN0k3lhzGQLuEo6MZS8crNJn5FHPhIm8visbaKoIui%2FhwzLov8D3SiQQxst0yZv0d%2FTENCnVR%2BIoblTsMfQX6CMnusGlKTtluKlDpnxZFFMrr40WSDXqI%2BaZgRYFFiITMkOCdg%2FJSiTiwM5rLv1Ioo2mlgreHk5NPIUs6PlIRyeBx3NQj7dEJXHJaOhj7P5x6CjKfzbLwNDcBo7UDTv35JI0824vc67UbSWcUT6Y4VoqifwyGiRI%2Fn%2Br1gooAJ8STSudV1tIz0l%2B%2FqamCgClFub60tq7mfb37h1J4qzFe1em0lCfvQRxO9vi2NoEPw%2BtNAhCImChmci6fjmnW3iMOrV5sAGOqUBJtAVQdwBJ3jJAHFeqt9diH0gRXzVD3E3b98Sou9ZEcqaS8u8a6d%2FtjVdaG2U6qMW0vyTKug15rX8Uo2aHN9Qa4lZpGZ6wGnGNS1EuEMzv1feGIYmt5b49P5%2BzEcGmFrn3masdvTi4AE3ycxn1JNdmeULyqH7flMQg0lAcE7UgS%2Fs3MLBGh%2FzY%2Fhbko61h%2BIJ3fjWeQaOpkNzM%2BGj3d3r5zSBYKe8&X-Amz-Signature=d6c2702fb0972e3a73dffbf7f378610435faf5f4b070836c57137b1090a56b74&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNKE7DB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDueHYxUcYdcy1LjhkIvTRprBQBzcZcsXTEpsa8KGlMlgIgVFuQdL33mzZmPU%2BaOmRMDmynlnRqf0uC34sV5OaWPiEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDL4JEV9Dxu6ouvDu6SrcA1bYSiZk4zfCMBlf%2Bt9AGA4%2FTVYA5EZ4byWY2MGOqd5WX4mewSQ%2B5vOo6%2BcmCmXyjSOG%2FoErNMTT10nqh98QQe2XIWBdj7%2FJ8J5oFPkRV32FwxHtDHhPcuhiq1J17qaobqX0lkFhUzB2veks8NCAyrfzKov52AbHbm2IcRsSX6WyTKwem6UFzdRzDd2NCTOs8FFmOxF5J4GFqlUzkqEUPNAvd5YNmm%2FeFF9u1QBfZJxFMbJ%2Fr25Qam47kT3f3y9Bd4vIkakV3oxm2qxvr6zPso1RUHCCWygJ%2B6FONe%2B9TrN0k3lhzGQLuEo6MZS8crNJn5FHPhIm8visbaKoIui%2FhwzLov8D3SiQQxst0yZv0d%2FTENCnVR%2BIoblTsMfQX6CMnusGlKTtluKlDpnxZFFMrr40WSDXqI%2BaZgRYFFiITMkOCdg%2FJSiTiwM5rLv1Ioo2mlgreHk5NPIUs6PlIRyeBx3NQj7dEJXHJaOhj7P5x6CjKfzbLwNDcBo7UDTv35JI0824vc67UbSWcUT6Y4VoqifwyGiRI%2Fn%2Br1gooAJ8STSudV1tIz0l%2B%2FqamCgClFub60tq7mfb37h1J4qzFe1em0lCfvQRxO9vi2NoEPw%2BtNAhCImChmci6fjmnW3iMOrV5sAGOqUBJtAVQdwBJ3jJAHFeqt9diH0gRXzVD3E3b98Sou9ZEcqaS8u8a6d%2FtjVdaG2U6qMW0vyTKug15rX8Uo2aHN9Qa4lZpGZ6wGnGNS1EuEMzv1feGIYmt5b49P5%2BzEcGmFrn3masdvTi4AE3ycxn1JNdmeULyqH7flMQg0lAcE7UgS%2Fs3MLBGh%2FzY%2Fhbko61h%2BIJ3fjWeQaOpkNzM%2BGj3d3r5zSBYKe8&X-Amz-Signature=2603e2ca1130a8d5d79eae6e6b1ad97af7bd5a92bd5a8638191961c22cfdb688&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
