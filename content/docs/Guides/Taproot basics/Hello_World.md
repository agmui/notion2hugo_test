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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2KDVQ4M%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIHPVbbtQjwIktkkQV4oRsgaFMY0kItnQa7LUe39I5g3cAiEAgxE%2B3qmd2KY4fBVOsS2TbEyPRRZ5qAVKdZtpZhW12RIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIp8nuzZgXVYxvOMFyrcAy4%2FtY8cF40nzGWkx2rFXUd87D3FvA2LPYFSTpZYMbf0xkdz5zNI2N%2FfbjYrVQpv3%2B2zFfXmp3mKZy1MCxaonaqASFrVyMBfSmxZVsriIvXffLdN5CCyCFk8eDaTTp2Onuxrq1SU9JFwKHCcRqmvxa37dM%2F%2F5F3Q4y9B6wyrpnWdi8ws1Ar6JK6Awc5l12lHooYGk0mzYyLZ1vFw8d7r9T0M%2B6%2B0UGJ%2Bsgo17yGQSGJ%2BhMHRJeMEaCWAXZKQQXABKQrbZDfBOOsbJ6zn%2Fpk8bJMmGBsHW7furPlbjwxVyXVDazsdJFdmjbwBTE6EdbuOOeeKMV8We8qiwvGM5RmEb1jKZ5%2FwO1ShDmHhCe%2F4FNNKs0sKfKXLU8YxD8CP8pnL3pQRr4ya3YOszHvJ7CCBiFqhS49gvs2nQe7B0ih05t99wBwEVFKY1MmwCdymJBxXohNy5mVVKbpus4uzc0uYYlrtLPsLXkseRPtHHwu2W5jfz9MvNYjXU4EupkjywSxMdPZvUHSfKyFVrN2JwsvPq%2BIKdGo4E9IU2brpBF0O2%2F4yrmsGevQTSI%2BC%2BJm7QWvbV6dLUXzCw1fZ%2Br5hMw2YDGF%2BfvPLM1QEGTbtOjhe%2Bn6YgE2eV5PlRyHSVJY8MKKB5MIGOqUBNS4ZHEGzqMQ%2FwLNlMxZroQBiygMYRY%2FtekJpakN4oMDJrvOA%2FGQlpuIbk4gkkmLQ6%2BAdH2DcsoUpOHtd5Dw8YU1%2FkR6SBHau9Q%2FVXAjGOJnzxw6BZM1xNO5qewVx17t%2BKpk2RKof3Zn8iDDjpWA5VMCklXMLmCUQaReRwZMt6SsCYak8F6GKQGdQ43idfWyj4tMqPt0YHM7l0ifZpTeYa2HyIMZN&X-Amz-Signature=5767da3224516a7d70562ba4427c22a480e740f244eb3aff8f21383c48771200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2KDVQ4M%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIHPVbbtQjwIktkkQV4oRsgaFMY0kItnQa7LUe39I5g3cAiEAgxE%2B3qmd2KY4fBVOsS2TbEyPRRZ5qAVKdZtpZhW12RIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIp8nuzZgXVYxvOMFyrcAy4%2FtY8cF40nzGWkx2rFXUd87D3FvA2LPYFSTpZYMbf0xkdz5zNI2N%2FfbjYrVQpv3%2B2zFfXmp3mKZy1MCxaonaqASFrVyMBfSmxZVsriIvXffLdN5CCyCFk8eDaTTp2Onuxrq1SU9JFwKHCcRqmvxa37dM%2F%2F5F3Q4y9B6wyrpnWdi8ws1Ar6JK6Awc5l12lHooYGk0mzYyLZ1vFw8d7r9T0M%2B6%2B0UGJ%2Bsgo17yGQSGJ%2BhMHRJeMEaCWAXZKQQXABKQrbZDfBOOsbJ6zn%2Fpk8bJMmGBsHW7furPlbjwxVyXVDazsdJFdmjbwBTE6EdbuOOeeKMV8We8qiwvGM5RmEb1jKZ5%2FwO1ShDmHhCe%2F4FNNKs0sKfKXLU8YxD8CP8pnL3pQRr4ya3YOszHvJ7CCBiFqhS49gvs2nQe7B0ih05t99wBwEVFKY1MmwCdymJBxXohNy5mVVKbpus4uzc0uYYlrtLPsLXkseRPtHHwu2W5jfz9MvNYjXU4EupkjywSxMdPZvUHSfKyFVrN2JwsvPq%2BIKdGo4E9IU2brpBF0O2%2F4yrmsGevQTSI%2BC%2BJm7QWvbV6dLUXzCw1fZ%2Br5hMw2YDGF%2BfvPLM1QEGTbtOjhe%2Bn6YgE2eV5PlRyHSVJY8MKKB5MIGOqUBNS4ZHEGzqMQ%2FwLNlMxZroQBiygMYRY%2FtekJpakN4oMDJrvOA%2FGQlpuIbk4gkkmLQ6%2BAdH2DcsoUpOHtd5Dw8YU1%2FkR6SBHau9Q%2FVXAjGOJnzxw6BZM1xNO5qewVx17t%2BKpk2RKof3Zn8iDDjpWA5VMCklXMLmCUQaReRwZMt6SsCYak8F6GKQGdQ43idfWyj4tMqPt0YHM7l0ifZpTeYa2HyIMZN&X-Amz-Signature=ab80000af51950729686ffd79ee9f3220aa9af5019ef410a3fd6d3a69a4cf709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
