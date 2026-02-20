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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376HOFSE%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCINxYOExp3hAq9XbRSNXg2KJMqNiWZ%2FpjrwZSfYh6y9AIhAPwChpIz6VlkaM0Rt6sT1p5T3gK7otGB4YWCESDc7ggxKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMqV1c9OEguSCeZcgq3AORNkY5OxZ2X53eQBRBPTSilcK%2Fetgr7ciAYFY4x0RVsVupge2lMbiDRmgn%2Fmy7T5zzDTbXjVSjaPwmil%2FWsNAL0uFRLWdXzeQQVEUosYSRdS%2FKfaHvEG9iGIVwQrBlCePxyDuOx2BHa1owAKm2FjI0%2BC0gzxD8Yk8MxTvsd1WyM%2BABdXs9WSzQ901Xxgwbo8C3PBQSdvdZts4gu%2BlU0Mn7wYhWsA5FPaIDyQU5IwMH9nbe%2FPCUMLLa9QthQ0YfsZ27HWAg7O8C%2Bgr29GmZgCEz2npRH7lSnBGL%2BXdZB0HMjpJ3vwsgFrkCaGqe5iPdBmvuBQMjZ4oL4MK4KwGOoYts%2BvvGSGZMVLs0YV8cZAqPMr5lq%2Fu7F5onI7YIVmXU8OwPFaGyA1Oas7dfTSj3PEv5Ecsf4dpVO6tQkqjj1av9Qr%2Fm6vFJi%2BwXYy4znM0LD%2BZv2qnNZ4l1zj1nPkQpUuVZJfM7A3dFdJtObpgKFJskMQfZHSafgO94FamwE7we8tlh9kX%2F2Xq3gGeBqcSr9jRjkKzJqxKIxmEEOhTrDMx2pZN2TxpdKhnc5%2FIp3GXZ%2Fw3gi8BjxF71OZtKad5HRH8UFjZ%2Bx8U0LKgQ3OXjggWn%2BHnKdMSrIuIMweFduTC%2B6N7MBjqkAQjIBwSH5tx2D1ni1K03FK5dARQfm%2BQfgXLDuZ%2BF3Kjlzh9HtsstRbWEpf3ZnmkA48I1rWlmEeEe936f9eSSUkC9qZRSscr78zucKWjeOPCJv8Purqeh%2BcpfUoiQzTXZ5qVHQgvekmgyzm5yV0EbPsr1eByaa8d0b0ku%2FaHtuO%2FdDGo%2BUGkH1C6v0MzWUXnvNIT02zcPTR3J2bzZS8YV9LFU0kMt&X-Amz-Signature=e1710c84e93e804160ba904a3a2c40225f5f63426bc52569512c8c14754e72cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376HOFSE%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCINxYOExp3hAq9XbRSNXg2KJMqNiWZ%2FpjrwZSfYh6y9AIhAPwChpIz6VlkaM0Rt6sT1p5T3gK7otGB4YWCESDc7ggxKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMqV1c9OEguSCeZcgq3AORNkY5OxZ2X53eQBRBPTSilcK%2Fetgr7ciAYFY4x0RVsVupge2lMbiDRmgn%2Fmy7T5zzDTbXjVSjaPwmil%2FWsNAL0uFRLWdXzeQQVEUosYSRdS%2FKfaHvEG9iGIVwQrBlCePxyDuOx2BHa1owAKm2FjI0%2BC0gzxD8Yk8MxTvsd1WyM%2BABdXs9WSzQ901Xxgwbo8C3PBQSdvdZts4gu%2BlU0Mn7wYhWsA5FPaIDyQU5IwMH9nbe%2FPCUMLLa9QthQ0YfsZ27HWAg7O8C%2Bgr29GmZgCEz2npRH7lSnBGL%2BXdZB0HMjpJ3vwsgFrkCaGqe5iPdBmvuBQMjZ4oL4MK4KwGOoYts%2BvvGSGZMVLs0YV8cZAqPMr5lq%2Fu7F5onI7YIVmXU8OwPFaGyA1Oas7dfTSj3PEv5Ecsf4dpVO6tQkqjj1av9Qr%2Fm6vFJi%2BwXYy4znM0LD%2BZv2qnNZ4l1zj1nPkQpUuVZJfM7A3dFdJtObpgKFJskMQfZHSafgO94FamwE7we8tlh9kX%2F2Xq3gGeBqcSr9jRjkKzJqxKIxmEEOhTrDMx2pZN2TxpdKhnc5%2FIp3GXZ%2Fw3gi8BjxF71OZtKad5HRH8UFjZ%2Bx8U0LKgQ3OXjggWn%2BHnKdMSrIuIMweFduTC%2B6N7MBjqkAQjIBwSH5tx2D1ni1K03FK5dARQfm%2BQfgXLDuZ%2BF3Kjlzh9HtsstRbWEpf3ZnmkA48I1rWlmEeEe936f9eSSUkC9qZRSscr78zucKWjeOPCJv8Purqeh%2BcpfUoiQzTXZ5qVHQgvekmgyzm5yV0EbPsr1eByaa8d0b0ku%2FaHtuO%2FdDGo%2BUGkH1C6v0MzWUXnvNIT02zcPTR3J2bzZS8YV9LFU0kMt&X-Amz-Signature=89390b734346769b7594849c4edfe5d6a01958fc5511477e0a11fdec8d5097c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
