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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OOYEXV6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVlutb4xGVZzQWC4c90y9btTW7GSOdLnu4FZ3hlvp%2B2AiA1Nlwixkalhky%2FNBFS5tRjQ5qjrfCdQu9%2Bmyoo1wVf8SqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3EBB6%2B3XaVno5E2MKtwDAK6EZ2MoMVW%2Bgdz8%2BjtA3xRRmBOmhkC5ZUtUwzHVsrC4DOsARb3tFxSu%2FT91%2BBJLtU9uxzZoxj%2BavaF%2FkkV5HV%2FMLDz4D1efbbtyLo4yV8dZaxmhLzEuh1biGiANAFkB3UOsX1dOzdUi5%2BpxqO4vne4Em1PKF22jPIR4OOY96jJReJak5XHTg%2FxLRFMDsX%2B05%2BGXdAFGbpOW9TzQycxrXdTP3NPJh8cKyOcakA8I1NXR2FkYJDnc78JqWdYbeskMlrfdW9Gi34vIIYtBRC3OC25l261SlzRPjYVAHgbZH9bcurwQtFiCFp1WyKuHGW9DZ5R0%2Bwz5Ij9hrBAX0D46j4GzTaGpWvbf%2FsC44lYjIz%2Ftx3HvBsG9HNHp36o0nObvG%2FFkaTq10k%2BQua1IuDYeXYoMfsRcbyJDzdehdEzR0I4AWFihylFtXDJGPcZb5kuIbPexNl3Lq1pC3vnWmJPXZqh7IK%2FOg6Si6c9BDI27v2qL%2Fmo3pwRIJhiMKXMrmp1B2HvU6pxOTYqC78owSP1sn6ZmSSX0dprKDaGC4ukRYCSr8xgB20Y2SFdyJGE2N5fvI8UTTj7BMosxYJbevXA3ILndGfwpu36W9Z%2Ffv4waVwASVXRhAyWo%2FU1X1wAwvrLWwgY6pgEqF6hxoGQ3yf9J%2BksZUePXRaFkSaqCicpY0ZPOrp3ZcWVU0rVNTubl3kklZiNVB8gSrJ%2FiJzWYFmzeLd7h5gWUKSD0bwWdJowIsMLn1wTJqxDQSCmSLNjCu5VwX1yaPcfTRxc9SSgp%2Bjqo7fehmYdgzeTyRC6gYlfqfsqkhip6h1mnopQLUwJnoi6rGwemSLyGHWfb7y%2F0cvBe1yZ%2BvhEhTfFoQT8w&X-Amz-Signature=d28550068a1867f1eaad8262d00b32a55a2502c9eb42e5b79071b5d094167cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OOYEXV6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVlutb4xGVZzQWC4c90y9btTW7GSOdLnu4FZ3hlvp%2B2AiA1Nlwixkalhky%2FNBFS5tRjQ5qjrfCdQu9%2Bmyoo1wVf8SqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3EBB6%2B3XaVno5E2MKtwDAK6EZ2MoMVW%2Bgdz8%2BjtA3xRRmBOmhkC5ZUtUwzHVsrC4DOsARb3tFxSu%2FT91%2BBJLtU9uxzZoxj%2BavaF%2FkkV5HV%2FMLDz4D1efbbtyLo4yV8dZaxmhLzEuh1biGiANAFkB3UOsX1dOzdUi5%2BpxqO4vne4Em1PKF22jPIR4OOY96jJReJak5XHTg%2FxLRFMDsX%2B05%2BGXdAFGbpOW9TzQycxrXdTP3NPJh8cKyOcakA8I1NXR2FkYJDnc78JqWdYbeskMlrfdW9Gi34vIIYtBRC3OC25l261SlzRPjYVAHgbZH9bcurwQtFiCFp1WyKuHGW9DZ5R0%2Bwz5Ij9hrBAX0D46j4GzTaGpWvbf%2FsC44lYjIz%2Ftx3HvBsG9HNHp36o0nObvG%2FFkaTq10k%2BQua1IuDYeXYoMfsRcbyJDzdehdEzR0I4AWFihylFtXDJGPcZb5kuIbPexNl3Lq1pC3vnWmJPXZqh7IK%2FOg6Si6c9BDI27v2qL%2Fmo3pwRIJhiMKXMrmp1B2HvU6pxOTYqC78owSP1sn6ZmSSX0dprKDaGC4ukRYCSr8xgB20Y2SFdyJGE2N5fvI8UTTj7BMosxYJbevXA3ILndGfwpu36W9Z%2Ffv4waVwASVXRhAyWo%2FU1X1wAwvrLWwgY6pgEqF6hxoGQ3yf9J%2BksZUePXRaFkSaqCicpY0ZPOrp3ZcWVU0rVNTubl3kklZiNVB8gSrJ%2FiJzWYFmzeLd7h5gWUKSD0bwWdJowIsMLn1wTJqxDQSCmSLNjCu5VwX1yaPcfTRxc9SSgp%2Bjqo7fehmYdgzeTyRC6gYlfqfsqkhip6h1mnopQLUwJnoi6rGwemSLyGHWfb7y%2F0cvBe1yZ%2BvhEhTfFoQT8w&X-Amz-Signature=32a3735afe5a13a472ae773b5870921087b7bc06abfd8d62e84e721474e2778d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
