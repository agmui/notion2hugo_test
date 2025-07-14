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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USO3PKN6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIASd%2FkjSyH1eqi4VqvzngkxF%2FFgqrVO%2F223k8WGuZfusAiEA6jEp0wFBkBgX%2FnrgT9crykA%2FP43x%2BAvSJ5cqTlYS2PUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAuhgK%2BYJ%2BoKONetCSrcAx00%2FHP3IAMi2aor232MMBckFk0HX5iba2EaYdKnM9VmTZPbDcSYUsuLeaXNa0o5M8xwE0GVQAC%2FM7OEW%2By1R%2BhPRbzcmYWor1yUeVkmfLW%2BmdekMiD9xlF54025dVQfe7brmF6T9HrSH5ZtI1Gf9bYfQ2fXjMnYyGowLJvx2hHprhnXHZwoec0ETuKwtjaW5SPKi9Jzq3IrlPJG3VkqbdscMUqGdS6F8MwhMPE%2F%2FfdeGR7Tsyi251AYERaAl82no1mH0S%2BWUKagqQQlx99Xa0oYCpQ84G0%2Ff5Maaenke1HLcgO5t8yp67Mgujkz1ihWbt8rnm82QFSlSR3c5JHDqS5zibO9H8%2FpUbyd%2FheRW6XFrqwxbUFrB6LPfWTUvhxIUcdjtXH107D8lUSgRD27VDT7wdRCkANjRtORGXmJINLYNo6OS51BmDdhUKSz4Zd%2BKSYkNjMepTDsUL7PlTY0RplCiDt%2FS95EpXZoNsJSiEUAHfxqppGE9rqQhOT%2BsOR7mRfhmcpQXWt2At8Y9fhWRJzE%2BKSA%2BqnghCh3yfY0QpQX4jCf6z%2FeXEuQFHukP2GUwVsOd7AGwvNttH%2FRQ56oiAKvJBTDE%2BLvR5uBPzlehPBU0aoAAGLQl8TEvfimMMak1cMGOqUB9XAdkfFXufgiekgbG42QmyfYpzjBOVhNdmQe3PCbLOLj7vkCl0%2FdU44mHE6McW9Iy3jzKYVFkumzdkyeJuboTK3cLUJMJ7ao9QBEdMGAGfkyBrT5a4%2FgZP8bI1dvW%2B5pxpHLHLZBJy3avLNUGQ09fJJKd6ld04SKcwGKjkJvmNFlP9dKov1IKlUif4G13QI3qyAYbUAU%2B0tbSVAkHjbgwCHRuA0u&X-Amz-Signature=f14e832d89550bd48a3d43a3b82bbd3579c6a30682bdfe0528209c8f117f6d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USO3PKN6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIASd%2FkjSyH1eqi4VqvzngkxF%2FFgqrVO%2F223k8WGuZfusAiEA6jEp0wFBkBgX%2FnrgT9crykA%2FP43x%2BAvSJ5cqTlYS2PUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAuhgK%2BYJ%2BoKONetCSrcAx00%2FHP3IAMi2aor232MMBckFk0HX5iba2EaYdKnM9VmTZPbDcSYUsuLeaXNa0o5M8xwE0GVQAC%2FM7OEW%2By1R%2BhPRbzcmYWor1yUeVkmfLW%2BmdekMiD9xlF54025dVQfe7brmF6T9HrSH5ZtI1Gf9bYfQ2fXjMnYyGowLJvx2hHprhnXHZwoec0ETuKwtjaW5SPKi9Jzq3IrlPJG3VkqbdscMUqGdS6F8MwhMPE%2F%2FfdeGR7Tsyi251AYERaAl82no1mH0S%2BWUKagqQQlx99Xa0oYCpQ84G0%2Ff5Maaenke1HLcgO5t8yp67Mgujkz1ihWbt8rnm82QFSlSR3c5JHDqS5zibO9H8%2FpUbyd%2FheRW6XFrqwxbUFrB6LPfWTUvhxIUcdjtXH107D8lUSgRD27VDT7wdRCkANjRtORGXmJINLYNo6OS51BmDdhUKSz4Zd%2BKSYkNjMepTDsUL7PlTY0RplCiDt%2FS95EpXZoNsJSiEUAHfxqppGE9rqQhOT%2BsOR7mRfhmcpQXWt2At8Y9fhWRJzE%2BKSA%2BqnghCh3yfY0QpQX4jCf6z%2FeXEuQFHukP2GUwVsOd7AGwvNttH%2FRQ56oiAKvJBTDE%2BLvR5uBPzlehPBU0aoAAGLQl8TEvfimMMak1cMGOqUB9XAdkfFXufgiekgbG42QmyfYpzjBOVhNdmQe3PCbLOLj7vkCl0%2FdU44mHE6McW9Iy3jzKYVFkumzdkyeJuboTK3cLUJMJ7ao9QBEdMGAGfkyBrT5a4%2FgZP8bI1dvW%2B5pxpHLHLZBJy3avLNUGQ09fJJKd6ld04SKcwGKjkJvmNFlP9dKov1IKlUif4G13QI3qyAYbUAU%2B0tbSVAkHjbgwCHRuA0u&X-Amz-Signature=17fc3f5586c54930fe49028b219af47d94635e18e646e2cfea217a04e7b576d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
