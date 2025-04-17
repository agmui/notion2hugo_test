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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q43KND6X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBhKjhWAZsjiPR24CvXxelTpL65D%2BahzTgChuPEc0rTAiEA5OPijzeudsxrLS3t9GH%2BYFs3QMYNQK99bxP%2BXUwdV%2BYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNMX%2FW2M%2FjFD0MjPqircA2oX2BK3dNis31LJ9N5oHIKjiGdYcps7TjjWrOtckmbzg0gTGVllmfjZWQK8pjvG8Pkkiw5cfs53NYniFzZXrqFctgUNtNIVVRH5HxmnsCo%2F7UXiDUPPWGfyheJ7uk7MpAR4Uxw0XiorKD8Al9iWS0QsLsHHn0fpcjv6AAmQqhYZJxWG4eHwudPWxC3YzvzHm%2FSieMzemcdk%2B4vujr5oFLCg8LGZD3tLRm7LuqP7%2FfU8oveXhZBgQefv%2FyaFEAsetDAb4z7V48EiW6A1NMu%2ByrNL1EaHnL8Hk7MQ0xVNIIq3lmK1%2Fqfh8tyA%2BPZQ6joTfVO4N0ihrECQpwYm8tGXZisGAqfnw%2BUNknjqQ8vFxpM4ON1Bs9Nv2aKEMJ%2FuO64L%2B3VMsjp1jfE0Msu7NlxdpOkoYhtdow89qZtkGGxFUgosXMZDF5Q5qHFU0%2FDfiHFiCOHOeumMhNaSYwqoix6NWXPgByv3cyfiuKC1iZm91Eriv1ZrTPs91G3yE5zNBt5s9Y50Qv%2FrKhYp%2BS%2BN6bqrt3SRMXO0lsVgv8j49Zs8Br6PJjKTTI4KTlDKrgEkNUB8lXcf3%2F1DzeOgycp2ooHiJ%2FtVdNawz8%2B92HFzjsJ6vosCKrk2zdX94FI7ao88MILhgsAGOqUBgyxNrsecAq39z5XJaphYeDOA41igmJHmK4Ar%2BaswYg8y385TmH1jPAZP0locCzpoR0CArgVIE487VUAJnizwG7oqllbEatFmHWYZ6%2BzI9xB0UrrDTQOpXy7u%2BT0gGEcJtxBWZkiyhxVJ%2BlP%2FOmRqT5sykmqB1bG85xBuEyOBcV9a1IITt894TfH5ZeWwHtkLfpusC2zHZCNM3z2qoW9lsniLKfxv&X-Amz-Signature=00480087db13893d8d5887fe1a4a223fee89474f7b973e65ca6169362e1551b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q43KND6X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBhKjhWAZsjiPR24CvXxelTpL65D%2BahzTgChuPEc0rTAiEA5OPijzeudsxrLS3t9GH%2BYFs3QMYNQK99bxP%2BXUwdV%2BYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNMX%2FW2M%2FjFD0MjPqircA2oX2BK3dNis31LJ9N5oHIKjiGdYcps7TjjWrOtckmbzg0gTGVllmfjZWQK8pjvG8Pkkiw5cfs53NYniFzZXrqFctgUNtNIVVRH5HxmnsCo%2F7UXiDUPPWGfyheJ7uk7MpAR4Uxw0XiorKD8Al9iWS0QsLsHHn0fpcjv6AAmQqhYZJxWG4eHwudPWxC3YzvzHm%2FSieMzemcdk%2B4vujr5oFLCg8LGZD3tLRm7LuqP7%2FfU8oveXhZBgQefv%2FyaFEAsetDAb4z7V48EiW6A1NMu%2ByrNL1EaHnL8Hk7MQ0xVNIIq3lmK1%2Fqfh8tyA%2BPZQ6joTfVO4N0ihrECQpwYm8tGXZisGAqfnw%2BUNknjqQ8vFxpM4ON1Bs9Nv2aKEMJ%2FuO64L%2B3VMsjp1jfE0Msu7NlxdpOkoYhtdow89qZtkGGxFUgosXMZDF5Q5qHFU0%2FDfiHFiCOHOeumMhNaSYwqoix6NWXPgByv3cyfiuKC1iZm91Eriv1ZrTPs91G3yE5zNBt5s9Y50Qv%2FrKhYp%2BS%2BN6bqrt3SRMXO0lsVgv8j49Zs8Br6PJjKTTI4KTlDKrgEkNUB8lXcf3%2F1DzeOgycp2ooHiJ%2FtVdNawz8%2B92HFzjsJ6vosCKrk2zdX94FI7ao88MILhgsAGOqUBgyxNrsecAq39z5XJaphYeDOA41igmJHmK4Ar%2BaswYg8y385TmH1jPAZP0locCzpoR0CArgVIE487VUAJnizwG7oqllbEatFmHWYZ6%2BzI9xB0UrrDTQOpXy7u%2BT0gGEcJtxBWZkiyhxVJ%2BlP%2FOmRqT5sykmqB1bG85xBuEyOBcV9a1IITt894TfH5ZeWwHtkLfpusC2zHZCNM3z2qoW9lsniLKfxv&X-Amz-Signature=77c8a7f7149cdb770a07baa9de193f2fe6760b3c1fd6373cf5d6950e841dde59&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
