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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PH3RB7B%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGchYtnF1M3By11sEyFy%2BdXI5xPSNIvtF6PYEPwk1bB1AiEApxaE0YVWILxvwO6MnckaxLZm8Z7L2%2FOzdzpmB6wXCEYqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHs%2Bgpt%2FD%2BOc4yF6kSrcA%2B5aQ7pPxMux%2Bmt2FPlB9MQgsLCVwj0i8684hmWkNRo%2FzsYZkisESZLFR%2Bpf5kJveHdKEGFeM9rweHyQocjuInBpFWyKDQEf0gHB1P%2BzxkyoUnNQE5XxyQiUr0hCI4JidhM%2BMZQYwOkG9NCj1qSDVe4SD%2Bv0lQyx78GcTJ5u5n5Xv4aAGz5LUAb0nP0H6oqYem%2BBwI4PYl08lXRF9PDxyb4RnpECw9bPTvju4%2BJqLD%2FyhIRphIWh%2BWi2DA2SX1ySfg%2FFQoZ2vL8kST20bsl4TO%2FbxRthpCWCCzXHMnpRR%2BaxnRpOnQXBxlDnP0exvadXOSANSmNubzjI9EPSfdeyYSxLYEzrSo9FM10L%2Bz0wHF3h8kYSgMbXDKjv3tAPuYNlxV7nZkiRmv14G2GxV6jDSK8%2FTyo4bHb0FW3KdnvdesxKrGLPCi24vQFY272h7aqJ8jgYCzkIjR628ZEBHnDvDL%2Bbr1U9f2qa10ORwfT%2BnUHuS0AmjZHoS44HC26MH7hoqzcWyV9YvJdNoIWTHaFRo%2B0Tzz%2FBkotaGaJLv6DKFIA3oNy2Wi87fXoXYXLHBNYaw%2FI0Tp8YI%2FdtLqYVRKp6Em%2FiO63gCSjOgtdxeFVPsQm5vPl6dEUamYUbsFz9MJ309cEGOqUBRGRK0aX3fmQ1njR1r8aoigeqDlR3d1SgRtcmYvye2jJ2frDZO9AiLTtMTGtHv%2BZrJoK9WKmkuL8MVgUXfWrEzwt39J6xyeo5Og601vcxijXsBG9A5ov2PD88aUQDAJyq0FZitghNUeSKIO4zYmlykoCWzIRi7Q4O7UsDJfrbIZS7%2BlSSjFfAC2%2FzWGMMhIPKrVZbKVBrLhBCCwzMNto%2Fr5psBXqE&X-Amz-Signature=b38d527dd9000857bf69580f02760a426ca1a331fad4f1c080b5d9ae5bb5f779&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PH3RB7B%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGchYtnF1M3By11sEyFy%2BdXI5xPSNIvtF6PYEPwk1bB1AiEApxaE0YVWILxvwO6MnckaxLZm8Z7L2%2FOzdzpmB6wXCEYqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHs%2Bgpt%2FD%2BOc4yF6kSrcA%2B5aQ7pPxMux%2Bmt2FPlB9MQgsLCVwj0i8684hmWkNRo%2FzsYZkisESZLFR%2Bpf5kJveHdKEGFeM9rweHyQocjuInBpFWyKDQEf0gHB1P%2BzxkyoUnNQE5XxyQiUr0hCI4JidhM%2BMZQYwOkG9NCj1qSDVe4SD%2Bv0lQyx78GcTJ5u5n5Xv4aAGz5LUAb0nP0H6oqYem%2BBwI4PYl08lXRF9PDxyb4RnpECw9bPTvju4%2BJqLD%2FyhIRphIWh%2BWi2DA2SX1ySfg%2FFQoZ2vL8kST20bsl4TO%2FbxRthpCWCCzXHMnpRR%2BaxnRpOnQXBxlDnP0exvadXOSANSmNubzjI9EPSfdeyYSxLYEzrSo9FM10L%2Bz0wHF3h8kYSgMbXDKjv3tAPuYNlxV7nZkiRmv14G2GxV6jDSK8%2FTyo4bHb0FW3KdnvdesxKrGLPCi24vQFY272h7aqJ8jgYCzkIjR628ZEBHnDvDL%2Bbr1U9f2qa10ORwfT%2BnUHuS0AmjZHoS44HC26MH7hoqzcWyV9YvJdNoIWTHaFRo%2B0Tzz%2FBkotaGaJLv6DKFIA3oNy2Wi87fXoXYXLHBNYaw%2FI0Tp8YI%2FdtLqYVRKp6Em%2FiO63gCSjOgtdxeFVPsQm5vPl6dEUamYUbsFz9MJ309cEGOqUBRGRK0aX3fmQ1njR1r8aoigeqDlR3d1SgRtcmYvye2jJ2frDZO9AiLTtMTGtHv%2BZrJoK9WKmkuL8MVgUXfWrEzwt39J6xyeo5Og601vcxijXsBG9A5ov2PD88aUQDAJyq0FZitghNUeSKIO4zYmlykoCWzIRi7Q4O7UsDJfrbIZS7%2BlSSjFfAC2%2FzWGMMhIPKrVZbKVBrLhBCCwzMNto%2Fr5psBXqE&X-Amz-Signature=9d688c462fe445cb194d0a268c8a02cf529fac3fae9c10efa561a8902e21cd97&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
