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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWVLAKUG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUTdLeKqD97LUsisM2tvUQqZ%2FRr7x9tpBOK9n7BoO1BgIgFOA4KqVM0PzevdLzHlUxLgOu8kf1K5WddVB0S0oUpJwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBcYafXGGGX9%2Fmm%2B%2FSrcAyP%2FHOhiIHwFlCL2L%2B0D%2F7hcP%2FbDSJJlzpSUSJyTdXUjlz8rKACnGL3GVerqBASlJVbVCaPLXYOS3xiKpx5%2F6%2Fi%2FRvBj51DzxszWCd6RR2Ll6T6YIoqfMuLd7%2FyfW4OWWvoAmLguhPej69klWHJWN78A5jI%2FPoc4ArasbO7nda%2FriKrMsFZ1RHDS5RBhqV9ckitgB0HIureHdjjA%2FqgkimWV9x4eArKddHZumqI6tQisv4MuzPXCJm2bR7L7i%2Bo6Z5Vpjx11rLz9vTWmcpkrIrDTQ2cPnKITTLpLaBf8LfbD%2BL8DlS9qHzNfahcyHL2OAhVYJoqbTi9PFKFBtfNRfSu2JagRZyCoQm9wBuGQ%2F4l3aIq4Vtp2KcVk8hf4s%2BkBiwaUyQwTjd1d0lHOtunUSSdHlebuM4qN%2B5J9KBJDM6M%2BsjeZjTJ6zCCkUMMQkpSBnVcWTzwc3TQciYB2RDSPv6nUsc%2BNLr7%2FrYdM9trAyFO%2FxyZ2udpQOhptFnlFX2n%2BzPCCthu6lcqIOjtDVjKkRfq9nZSpDgY%2FYzwQdEbYxcN98L1Hcvq8kjLnx0YDyF2V8TT2isR2IKhLF9i1rh%2B3QHUppQ7PAlazobyQvc1TlXBECILpkfx590gc5zIlMMDh770GOqUB8J73ZJcPXPheE6eIJlrmykbBNFrntaLWEdYQs4N7o56pvRnm7SdlScLp4eSyQHaVg20nXoDH23T5yUFMaam8dU%2Bj5o7tUNvjw7Wf%2BUFROkyx77CfGO9z5aDGAaBADQlwwaey3jkIuYuISCsk%2FjlJAnvVXx4SwUEj8MDofGhn16ITB26xc8Nn6I0BYBmHbJrYqBD0e8RyNvm7CFFoG1Njvct9JLhX&X-Amz-Signature=2550b017b7304d6a6571189536f2a83909a959bb79001a26f7cc730ea02eb493&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWVLAKUG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUTdLeKqD97LUsisM2tvUQqZ%2FRr7x9tpBOK9n7BoO1BgIgFOA4KqVM0PzevdLzHlUxLgOu8kf1K5WddVB0S0oUpJwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBcYafXGGGX9%2Fmm%2B%2FSrcAyP%2FHOhiIHwFlCL2L%2B0D%2F7hcP%2FbDSJJlzpSUSJyTdXUjlz8rKACnGL3GVerqBASlJVbVCaPLXYOS3xiKpx5%2F6%2Fi%2FRvBj51DzxszWCd6RR2Ll6T6YIoqfMuLd7%2FyfW4OWWvoAmLguhPej69klWHJWN78A5jI%2FPoc4ArasbO7nda%2FriKrMsFZ1RHDS5RBhqV9ckitgB0HIureHdjjA%2FqgkimWV9x4eArKddHZumqI6tQisv4MuzPXCJm2bR7L7i%2Bo6Z5Vpjx11rLz9vTWmcpkrIrDTQ2cPnKITTLpLaBf8LfbD%2BL8DlS9qHzNfahcyHL2OAhVYJoqbTi9PFKFBtfNRfSu2JagRZyCoQm9wBuGQ%2F4l3aIq4Vtp2KcVk8hf4s%2BkBiwaUyQwTjd1d0lHOtunUSSdHlebuM4qN%2B5J9KBJDM6M%2BsjeZjTJ6zCCkUMMQkpSBnVcWTzwc3TQciYB2RDSPv6nUsc%2BNLr7%2FrYdM9trAyFO%2FxyZ2udpQOhptFnlFX2n%2BzPCCthu6lcqIOjtDVjKkRfq9nZSpDgY%2FYzwQdEbYxcN98L1Hcvq8kjLnx0YDyF2V8TT2isR2IKhLF9i1rh%2B3QHUppQ7PAlazobyQvc1TlXBECILpkfx590gc5zIlMMDh770GOqUB8J73ZJcPXPheE6eIJlrmykbBNFrntaLWEdYQs4N7o56pvRnm7SdlScLp4eSyQHaVg20nXoDH23T5yUFMaam8dU%2Bj5o7tUNvjw7Wf%2BUFROkyx77CfGO9z5aDGAaBADQlwwaey3jkIuYuISCsk%2FjlJAnvVXx4SwUEj8MDofGhn16ITB26xc8Nn6I0BYBmHbJrYqBD0e8RyNvm7CFFoG1Njvct9JLhX&X-Amz-Signature=2337f739e3fbf6d2f9f275297fc900fab5616604a265a2eb2df93a48bf87287f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
