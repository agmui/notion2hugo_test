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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABZQYZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDPdZW9RWBwSw1OaItT2fwByZmZUHND2Kpkb0V0mfGiWgIgLKACz66A4g15jwUF5k1GmmfGkKBNtOHuEKTeKw9sz70q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHjuq3H7xV3r1QrzKyrcA8ZiEBM7QyItxKHu6XwR4E1hRD8GfzyRgeZ3RfCQ%2BYXA%2Br87joWL6SPk6y96rimlIUinqbHqDFULrF%2BQWWP2LS%2BjYqFcvEhSrTF7NNs7LcmS0UJMDJy0Hb6kvNAmW%2BMtNf%2FHdVp4MYZeBsYvLhVtU6Pbo3pkt8MLleAg6ARpMnJF5mBuhqoe%2Fimo%2F%2Be6FC8SvLsXYdZv8MMOllwe4qU940Komh1ugHqv7RI2WAH4dFYx2PfbOZral%2FZpdti1R1kR6ZiiGkuXaKZfndrqYQUVJ%2BwJNlHAgaiuPnyE0jBSHnlBxtN1jl%2F3dgUCElcRuBBTVKFbDITuayf354p5psyWBqftbMH%2BOQaVAXNEMFApkk5dl0jIFUY1ifW4TCBrO%2B1yiU3%2BYNQP8nqn9HqNnyUEFE49o3eUx0IpOerTIgraKQET1pe2MPfFxq%2BRN80L9CJ46p09lgfXIbHParn%2FdC%2Bn8MaaJRfLYSEQ5iVu1%2FhGJv4I50KH4VDbjwuNrffr83pWaOLU6TqorcRPS%2FbTNXe7UVcDw5bco1JPrpBkrsUG1PkAE8e8OJi4l0C2r1fq8tsduv5%2BycBwTl21HbW0tWR6XZ7buM0SNr93wMiWV3CsfDTtO7m34DnJMIq8VCkdMIXD%2BMQGOqUBMA302Qb70VRohwMN40UvxXiZHCYloTfOLoQSfb7aKYoTXHZJHyaB%2BpLZ0%2FnErbcUVPPCU6CAfJFx5skpKO%2FbvU99639%2BFfZSJlDvsk8ViJuvKDs9BwVyv%2FmHNpQJEIBsXWZWcNzRbZZcv6NOmZS7agz0S%2Bai8zUSFy3X5M67kfxvVCJ%2BCClOL5FgWpbmi2Uk3jDUUQGC3LO4QT8NKYSrb9Slwk7n&X-Amz-Signature=97d3169d18d121eb1f161be837442ab7cb004b8b9933d75446275d5fbf68f436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABZQYZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDPdZW9RWBwSw1OaItT2fwByZmZUHND2Kpkb0V0mfGiWgIgLKACz66A4g15jwUF5k1GmmfGkKBNtOHuEKTeKw9sz70q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHjuq3H7xV3r1QrzKyrcA8ZiEBM7QyItxKHu6XwR4E1hRD8GfzyRgeZ3RfCQ%2BYXA%2Br87joWL6SPk6y96rimlIUinqbHqDFULrF%2BQWWP2LS%2BjYqFcvEhSrTF7NNs7LcmS0UJMDJy0Hb6kvNAmW%2BMtNf%2FHdVp4MYZeBsYvLhVtU6Pbo3pkt8MLleAg6ARpMnJF5mBuhqoe%2Fimo%2F%2Be6FC8SvLsXYdZv8MMOllwe4qU940Komh1ugHqv7RI2WAH4dFYx2PfbOZral%2FZpdti1R1kR6ZiiGkuXaKZfndrqYQUVJ%2BwJNlHAgaiuPnyE0jBSHnlBxtN1jl%2F3dgUCElcRuBBTVKFbDITuayf354p5psyWBqftbMH%2BOQaVAXNEMFApkk5dl0jIFUY1ifW4TCBrO%2B1yiU3%2BYNQP8nqn9HqNnyUEFE49o3eUx0IpOerTIgraKQET1pe2MPfFxq%2BRN80L9CJ46p09lgfXIbHParn%2FdC%2Bn8MaaJRfLYSEQ5iVu1%2FhGJv4I50KH4VDbjwuNrffr83pWaOLU6TqorcRPS%2FbTNXe7UVcDw5bco1JPrpBkrsUG1PkAE8e8OJi4l0C2r1fq8tsduv5%2BycBwTl21HbW0tWR6XZ7buM0SNr93wMiWV3CsfDTtO7m34DnJMIq8VCkdMIXD%2BMQGOqUBMA302Qb70VRohwMN40UvxXiZHCYloTfOLoQSfb7aKYoTXHZJHyaB%2BpLZ0%2FnErbcUVPPCU6CAfJFx5skpKO%2FbvU99639%2BFfZSJlDvsk8ViJuvKDs9BwVyv%2FmHNpQJEIBsXWZWcNzRbZZcv6NOmZS7agz0S%2Bai8zUSFy3X5M67kfxvVCJ%2BCClOL5FgWpbmi2Uk3jDUUQGC3LO4QT8NKYSrb9Slwk7n&X-Amz-Signature=aca6927a19a5ebdc6531b33835ff4dd9681cc264db149640bccc51e3768590b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
