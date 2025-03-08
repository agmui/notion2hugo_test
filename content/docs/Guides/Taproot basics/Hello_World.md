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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNB4BSCS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCLZHz5cR%2Fg6Hpw%2F5jqMh3HvkQlTwKDPoTURUHcrwvWSQIgeA1U2a63CUnAObjIubUTs082O7R64Cvkw9YqxqI06Csq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKtQtp%2BQ0ggT%2FjVi4ircAzKlFYh21VSPUadtcPPE1MOoE8FaXE9q8tRAk7Sc2cSjCLN6uksaTJaPR0lmCINcrzr1DJuaqPOR98S9J1D2v%2FfyIT9FncTsULMbVcofCtQ063VZrhsaqliq2yHXHiCZO%2FgkwQB6uNDaQbESrRgMVs%2BJ%2BRXVQwuaOqyn53fpo0OXkdnBWaZNHneon3pEAQ563NQSBILJzWv5hFkT3A504G0NH%2BX0f6bv3tIPaiwm%2BpNeQVsBsY3ylYNG0W2sDA9YmBzTYze9%2BV0jxbnLI6La0w3BK%2FnQL7DczhpckXmUP73aGNj%2Bf7o0lrl4B%2Bi%2FGSzxmkc%2BUYE6lWzg%2FJdefYdzE6xBd3NlYfAYowGuOfpw8Tpc3JuU2YuZBmzqRip9pHU20jrfCrneq4KVF8GWBGkPwZanMSalgD%2BDerY1g2ot%2Ff6RBdXUV092TFKPr%2FLS8aHSFvmOkr0TEi0a1ss9OAhR2vW3pPC9dU8pw0%2BotQkk0IB3iPXfK5D8Ru2Jmz5%2FAt7jutzGckzHpKdb8d4n1KpD%2B9rMjjlnCJRv0xIjKm1MOMcp8BKPPU3iFue5zblQWx2q8USb%2FB3BDTagz%2FuIUM%2Fs6JHctLTHDjZSDIN9Uyg6aUNhbZg5ylemR3STeSycMIfgr74GOqUB2ZM7olFkzRzDOYiLqC8u0OLWtXRjDU%2Ffr5YHXf1skLd2yemXrD5EC04kduiEoB7XRlDJNNlCdmUQHsPdWTqDOALBiN4iVMPPTGag6USMhqj4Czd8HfmmA2DCKVemo3R61aZ5vfVJ1YNs%2FC2jApoIsC%2FZMXBOQaW7aWbcOGhfvUp2FE%2BRSq8QMBzKe9m45qKIocfANnHU30ft7qbDcCMFboJ4y3yu&X-Amz-Signature=e44f2eadd5c8dd189aa4ca0aea0eb3d7b6265f6a347756e8c3bf8641edfd9000&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNB4BSCS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCLZHz5cR%2Fg6Hpw%2F5jqMh3HvkQlTwKDPoTURUHcrwvWSQIgeA1U2a63CUnAObjIubUTs082O7R64Cvkw9YqxqI06Csq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKtQtp%2BQ0ggT%2FjVi4ircAzKlFYh21VSPUadtcPPE1MOoE8FaXE9q8tRAk7Sc2cSjCLN6uksaTJaPR0lmCINcrzr1DJuaqPOR98S9J1D2v%2FfyIT9FncTsULMbVcofCtQ063VZrhsaqliq2yHXHiCZO%2FgkwQB6uNDaQbESrRgMVs%2BJ%2BRXVQwuaOqyn53fpo0OXkdnBWaZNHneon3pEAQ563NQSBILJzWv5hFkT3A504G0NH%2BX0f6bv3tIPaiwm%2BpNeQVsBsY3ylYNG0W2sDA9YmBzTYze9%2BV0jxbnLI6La0w3BK%2FnQL7DczhpckXmUP73aGNj%2Bf7o0lrl4B%2Bi%2FGSzxmkc%2BUYE6lWzg%2FJdefYdzE6xBd3NlYfAYowGuOfpw8Tpc3JuU2YuZBmzqRip9pHU20jrfCrneq4KVF8GWBGkPwZanMSalgD%2BDerY1g2ot%2Ff6RBdXUV092TFKPr%2FLS8aHSFvmOkr0TEi0a1ss9OAhR2vW3pPC9dU8pw0%2BotQkk0IB3iPXfK5D8Ru2Jmz5%2FAt7jutzGckzHpKdb8d4n1KpD%2B9rMjjlnCJRv0xIjKm1MOMcp8BKPPU3iFue5zblQWx2q8USb%2FB3BDTagz%2FuIUM%2Fs6JHctLTHDjZSDIN9Uyg6aUNhbZg5ylemR3STeSycMIfgr74GOqUB2ZM7olFkzRzDOYiLqC8u0OLWtXRjDU%2Ffr5YHXf1skLd2yemXrD5EC04kduiEoB7XRlDJNNlCdmUQHsPdWTqDOALBiN4iVMPPTGag6USMhqj4Czd8HfmmA2DCKVemo3R61aZ5vfVJ1YNs%2FC2jApoIsC%2FZMXBOQaW7aWbcOGhfvUp2FE%2BRSq8QMBzKe9m45qKIocfANnHU30ft7qbDcCMFboJ4y3yu&X-Amz-Signature=d0d5f01b5bbd5f3366418ec5ee47b21a239c07a29e344ca9fa5124d879feb384&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
