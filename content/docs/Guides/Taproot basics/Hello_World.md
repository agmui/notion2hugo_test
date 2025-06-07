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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNCQKRGF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyETyFqpf33PlEV5o5ftt9XcDiJo4%2BAdvmB%2F73LI6vxgIgTdtxN4sbEDyfHSCbvnB08qB662hmDHgJRVlCjwR77z4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB1ksdubjWtvbm4zrSrcA2aIPA1dzM%2B7j5Ig1DJGY%2Bj4x2AEKJWkuHYZN5mtAaiRhfWKI7uTVkguzTwqFQ5o0tBnpihRhTo7vd%2FBJn7wcJN4I7tM3psExdSrYTGO8BklKNBPXSajPvHAW0eund2Hc5o6MFkwhVLlKPBYOvuaq6LpVnljRxwwH%2BJNsxoHnYmr1gr%2FLprfNql6lEDUOrjKpnU%2FwuMoUajIwCqolVh949tryB2kMR6Ipwb%2BhFj05Cxp9G0iFAnohZsirP44Xt%2FeKDY4ZQ4B1WNTr8O7jk0pXc6%2F6tTdnNAga97ryBMJOXi18Vkt9z4Z73FcSXf3c2ud3j029E45%2Bo1T%2F7ZrgzCVIKLJOe8aV4kdj%2B55XwpHN85VFWAKF4TnEF5LfRmJkiJ0kPT9eHhGRPL5DNdB7%2Fo6Z%2FqW4WPl%2B4Y%2F7PMwo3mN7Pgjmtz%2FvoPKnOV32NbwBNCzpkamRXa748kzRdcO3gWE2Az%2F8MD9QhCtcFrj804NjCMGI907P%2FaEQbi%2BqvWNwOs6du8ZM6EFjIDPSRCN0qBM%2FhEkXRwuRWR46%2BWI6o6O6Cdru11boRf4fSslc3g67ZdF6cO%2FdzetMo0lkFbzZ7kl4%2F2G7obCn3DI7WmGAP%2Fx25xqwzUeEXGF5%2FYTLTSDMJ%2F6jsIGOqUBkGS6T9Me05%2Bz92sxvQntDio0%2Fid5EVCEbLL%2BocXQRGq%2B2k97xWeHRSsXHVuLWZXqXYeYq4CQfWeUtPAtxua8eDqT7sCthcpYZHnfgpFCY2F4ijw1tOYcCncR9k1Q%2FtKtfz7VXuqD3zHSwuYHuIvBd4vwFOYT5%2BszcTGDJ7nRvOEJ5vQNnmxeMeL9RiFxwXxxAxlVs9MK6xLCi9bkN0fUOosnU0%2BK&X-Amz-Signature=8257197f2714fd1dd603efdec4c29929cf1f811a93093c4780df004152da77f9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNCQKRGF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyETyFqpf33PlEV5o5ftt9XcDiJo4%2BAdvmB%2F73LI6vxgIgTdtxN4sbEDyfHSCbvnB08qB662hmDHgJRVlCjwR77z4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB1ksdubjWtvbm4zrSrcA2aIPA1dzM%2B7j5Ig1DJGY%2Bj4x2AEKJWkuHYZN5mtAaiRhfWKI7uTVkguzTwqFQ5o0tBnpihRhTo7vd%2FBJn7wcJN4I7tM3psExdSrYTGO8BklKNBPXSajPvHAW0eund2Hc5o6MFkwhVLlKPBYOvuaq6LpVnljRxwwH%2BJNsxoHnYmr1gr%2FLprfNql6lEDUOrjKpnU%2FwuMoUajIwCqolVh949tryB2kMR6Ipwb%2BhFj05Cxp9G0iFAnohZsirP44Xt%2FeKDY4ZQ4B1WNTr8O7jk0pXc6%2F6tTdnNAga97ryBMJOXi18Vkt9z4Z73FcSXf3c2ud3j029E45%2Bo1T%2F7ZrgzCVIKLJOe8aV4kdj%2B55XwpHN85VFWAKF4TnEF5LfRmJkiJ0kPT9eHhGRPL5DNdB7%2Fo6Z%2FqW4WPl%2B4Y%2F7PMwo3mN7Pgjmtz%2FvoPKnOV32NbwBNCzpkamRXa748kzRdcO3gWE2Az%2F8MD9QhCtcFrj804NjCMGI907P%2FaEQbi%2BqvWNwOs6du8ZM6EFjIDPSRCN0qBM%2FhEkXRwuRWR46%2BWI6o6O6Cdru11boRf4fSslc3g67ZdF6cO%2FdzetMo0lkFbzZ7kl4%2F2G7obCn3DI7WmGAP%2Fx25xqwzUeEXGF5%2FYTLTSDMJ%2F6jsIGOqUBkGS6T9Me05%2Bz92sxvQntDio0%2Fid5EVCEbLL%2BocXQRGq%2B2k97xWeHRSsXHVuLWZXqXYeYq4CQfWeUtPAtxua8eDqT7sCthcpYZHnfgpFCY2F4ijw1tOYcCncR9k1Q%2FtKtfz7VXuqD3zHSwuYHuIvBd4vwFOYT5%2BszcTGDJ7nRvOEJ5vQNnmxeMeL9RiFxwXxxAxlVs9MK6xLCi9bkN0fUOosnU0%2BK&X-Amz-Signature=5d0494060bae282b86d0021116d6b81e51043e4f4ebee037b6155a7de0f197c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
