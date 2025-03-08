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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQF3MO3J%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDsd03jP%2Bf0Z8z8JE78E%2BY4I9GobNzTgFE1X%2B9At1XYUAiEA8GhsP7B2OPtn2HYui1E6fy1HEWH64wfJhz9AaKOopH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNjEHpVSL0tLG%2FPd4SrcA31%2B5lBCBy9hdD1PSJGRH4CHWVFv9YdCt3iEil7IcPZbs0lRnTdrL0%2F769UDkuf99dIc%2FFSSx9qXymftX2tWD1jtkxFisvB8qLVvtAtftMuW9aorlzf7KIF4SQy1KqO4VAZuwe7CaAD7Y4G4HU5ydfisvlleFGhQJYT9pf3IFEiYog5e7CspOvm7cBNZJwXuh%2Fm72h5mHgzEd8lt5Lwu6OpE%2FmISTuSwWysFsF%2FmqLn8j%2B6fu49S89VstrL8klUEoykpP8y%2Blb7ZrQnV%2B0H5anmi1g4CA1bQUK40YPp%2Bi02APDOEIrq4r3fknk7S9oNTVsbrBcP6hiQ9je5Z3XXgj06ueKY8dPT%2FPHZPhJyZ6WCfWeqczZ44LpP8sMAVoDDAbtqmw9psX1Npm0GgESzPOtLJo209qGf2FNvm5%2BYQCkHDasdPURTPS7Y7vARSqMQTSFW6TsEEhlccQB%2F9XKO3ddsD%2FsSAgku5UTvjpwDCvDR0JXqjh8Mz0pDfjNUYAkSda5N1J8G2LXbQF7beqXN%2BojeQUdJ7PcdBODoAYkhp1Uxd4o8JxgvpPQ6Y5Cy12C%2FkbEw%2FWKczDUBlYv%2BPxiidEM3xBplVooQ7GTXeQ7rqWyWpQudujAGAAglqM3fQMJ3gr74GOqUBNuP%2FvDW0jWDUvH5RVsVRQ4HT7roj1NWzWVq8IHwo5vXuPPIp36vrJ%2F%2Bfr5VNkB0b%2FteEakwAebCmDJt1d%2Bg4WLnOxGcBk4z%2FPZdlDXPf6U0uhVAWEsUNhd0Cad6YtfB%2FPCiqxZnhgKwZ6SV9JXwFeiP8xDExYoeAhXOlSynZF1pb0px%2Bd3%2B3TR6vWdlDdWSURsdXJvf%2FuN4ns3Ad7cMkD16Q5KQ8&X-Amz-Signature=b586b9540ff7172f09474581a3c1dbab088b53a13351b1a2ea2cbf6a5a738077&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQF3MO3J%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDsd03jP%2Bf0Z8z8JE78E%2BY4I9GobNzTgFE1X%2B9At1XYUAiEA8GhsP7B2OPtn2HYui1E6fy1HEWH64wfJhz9AaKOopH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNjEHpVSL0tLG%2FPd4SrcA31%2B5lBCBy9hdD1PSJGRH4CHWVFv9YdCt3iEil7IcPZbs0lRnTdrL0%2F769UDkuf99dIc%2FFSSx9qXymftX2tWD1jtkxFisvB8qLVvtAtftMuW9aorlzf7KIF4SQy1KqO4VAZuwe7CaAD7Y4G4HU5ydfisvlleFGhQJYT9pf3IFEiYog5e7CspOvm7cBNZJwXuh%2Fm72h5mHgzEd8lt5Lwu6OpE%2FmISTuSwWysFsF%2FmqLn8j%2B6fu49S89VstrL8klUEoykpP8y%2Blb7ZrQnV%2B0H5anmi1g4CA1bQUK40YPp%2Bi02APDOEIrq4r3fknk7S9oNTVsbrBcP6hiQ9je5Z3XXgj06ueKY8dPT%2FPHZPhJyZ6WCfWeqczZ44LpP8sMAVoDDAbtqmw9psX1Npm0GgESzPOtLJo209qGf2FNvm5%2BYQCkHDasdPURTPS7Y7vARSqMQTSFW6TsEEhlccQB%2F9XKO3ddsD%2FsSAgku5UTvjpwDCvDR0JXqjh8Mz0pDfjNUYAkSda5N1J8G2LXbQF7beqXN%2BojeQUdJ7PcdBODoAYkhp1Uxd4o8JxgvpPQ6Y5Cy12C%2FkbEw%2FWKczDUBlYv%2BPxiidEM3xBplVooQ7GTXeQ7rqWyWpQudujAGAAglqM3fQMJ3gr74GOqUBNuP%2FvDW0jWDUvH5RVsVRQ4HT7roj1NWzWVq8IHwo5vXuPPIp36vrJ%2F%2Bfr5VNkB0b%2FteEakwAebCmDJt1d%2Bg4WLnOxGcBk4z%2FPZdlDXPf6U0uhVAWEsUNhd0Cad6YtfB%2FPCiqxZnhgKwZ6SV9JXwFeiP8xDExYoeAhXOlSynZF1pb0px%2Bd3%2B3TR6vWdlDdWSURsdXJvf%2FuN4ns3Ad7cMkD16Q5KQ8&X-Amz-Signature=ada5d2dec5567df91f7acf135c3890cd0dcc1a03dd17e2a9af0e4393d0274f70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
