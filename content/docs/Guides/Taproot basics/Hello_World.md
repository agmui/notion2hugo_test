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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW4NLFL7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDijJgnytnHv2tdSjKCMdTvzbSQ7fewHeTbtikP%2FMOOEAiBr6MoJhY3xvblM5vJH0hjCLDllA9KILRkux%2FI1s0obJir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMllzPEshIvot8l5FeKtwDipvsgVTCxTqrHmxVFQef0i1%2BG%2BULTgYJqY4hZ4MjBeoltjGav09KP6GNfoT8nBW%2FO0JYqEd3yLMPdx6Y0sbSGS3fbORUiUl%2B1aQUijQRXC8tdlRFyUWQhcs51DBmSPMzePBKWHQeW0dS3ehAoHyWgjaGtvZ6MhQxSh3bb9FNcpf3sM4GmlsgkMJqT5o%2BwnQIStOzxAoqJ%2BtrYXaky7Z7uOzh6hmQ5WNeRwdTnjb5BfCzeCNuQXDMxpvakK7LUgzS4o7O5%2FwFaJUxjwwSwCX%2FFnVPeq5i4XjGMlx7g7RRFQeZ%2FOktgK22bFlaJYwfrY6mN7Xmd%2BV1LVDZDszuYtNVnA2R6a9fnt521vd2o%2BuV07wqz78Asgp8XiT15OSnIJoe7VXen6%2BCjaSR1sK8EA6yx%2BwmfcxBERMcTzoL9CMeOJSHWkrZ757Jn4CzIB%2F%2FDEDi2aKqX4HIzC2ZDo2FC%2B%2F7L%2BRnQuQFsS%2FONQ4eYA42CGPDHbIr7nfyyhogd0bBAABNWhzib1v1e4sbvf4T5%2FI81aaoTc3LJ6z8gTnZIRVyShT7Zk%2FfeFux%2FUE57RA2ihQVP4gEF1yLZEo2tZkYLs8CwxoIyi0ToXcrwpyY%2FX8Fa%2F0EPhvHx6OTpY1FU6wwqM%2BpwwY6pgG7PLLVzqWghPMzYMjR5tM%2BjeGcOizSxZ3Mozqa%2F6LGn8LKWklQXwaxRzEufNPGaOMN8x1pQwZUGoIrmE8FxOwRV9xAC0sN%2BPqJdlNj5urdsBwzMqcP6%2B72mcT6PqhjmZETgNuHJQJYzZpMVoZ%2FO88j1%2FMqvO7ct3JwZd2%2F62UzlRJcRORK5kX2Qno6p5PAFLoAdZDl44y8n87IutR%2Fc%2Fqi6olGUU5k&X-Amz-Signature=27a699686e2fdfe3b9c45a21ecc3387015663b130a7fd28afdfaf51085dd42bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW4NLFL7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDijJgnytnHv2tdSjKCMdTvzbSQ7fewHeTbtikP%2FMOOEAiBr6MoJhY3xvblM5vJH0hjCLDllA9KILRkux%2FI1s0obJir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMllzPEshIvot8l5FeKtwDipvsgVTCxTqrHmxVFQef0i1%2BG%2BULTgYJqY4hZ4MjBeoltjGav09KP6GNfoT8nBW%2FO0JYqEd3yLMPdx6Y0sbSGS3fbORUiUl%2B1aQUijQRXC8tdlRFyUWQhcs51DBmSPMzePBKWHQeW0dS3ehAoHyWgjaGtvZ6MhQxSh3bb9FNcpf3sM4GmlsgkMJqT5o%2BwnQIStOzxAoqJ%2BtrYXaky7Z7uOzh6hmQ5WNeRwdTnjb5BfCzeCNuQXDMxpvakK7LUgzS4o7O5%2FwFaJUxjwwSwCX%2FFnVPeq5i4XjGMlx7g7RRFQeZ%2FOktgK22bFlaJYwfrY6mN7Xmd%2BV1LVDZDszuYtNVnA2R6a9fnt521vd2o%2BuV07wqz78Asgp8XiT15OSnIJoe7VXen6%2BCjaSR1sK8EA6yx%2BwmfcxBERMcTzoL9CMeOJSHWkrZ757Jn4CzIB%2F%2FDEDi2aKqX4HIzC2ZDo2FC%2B%2F7L%2BRnQuQFsS%2FONQ4eYA42CGPDHbIr7nfyyhogd0bBAABNWhzib1v1e4sbvf4T5%2FI81aaoTc3LJ6z8gTnZIRVyShT7Zk%2FfeFux%2FUE57RA2ihQVP4gEF1yLZEo2tZkYLs8CwxoIyi0ToXcrwpyY%2FX8Fa%2F0EPhvHx6OTpY1FU6wwqM%2BpwwY6pgG7PLLVzqWghPMzYMjR5tM%2BjeGcOizSxZ3Mozqa%2F6LGn8LKWklQXwaxRzEufNPGaOMN8x1pQwZUGoIrmE8FxOwRV9xAC0sN%2BPqJdlNj5urdsBwzMqcP6%2B72mcT6PqhjmZETgNuHJQJYzZpMVoZ%2FO88j1%2FMqvO7ct3JwZd2%2F62UzlRJcRORK5kX2Qno6p5PAFLoAdZDl44y8n87IutR%2Fc%2Fqi6olGUU5k&X-Amz-Signature=767abc3013d8e7c64f1b89aadca6f4264be6e4c03377336f6c6277e5d84295c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
