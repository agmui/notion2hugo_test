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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCH54HI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIH%2FUaUE9ApfyI4QUn6KtkMdDV2xVLf72s%2BTQcHHbOuNSAiEA7o%2F54LdZGStVPG0s8DChO6AGtveOquIYehRXD0YOdT8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIdHnG6uxi1BVepmFyrcAwGYKxKZ%2FrURxIbNQcdQAJDZ38vyQNVoW%2BSfwwPU0YWPaCIQnLqiJSYkyWn0oQSkTHY%2BGlt%2F2PjCv2%2F81nRL8GyBRe31WR5r8UlfPcfjumA5OEB2toZqdiF1UlUmp6p7GOmKNs3PVvpwISOjTPaAFmuJBJfIKTY71RsqlXNxWTo7XNck3HEUOtzcnKFboVcZNc41g6uCf9G5s5PnhQ7TXjHWjRY%2FGkWZ5KMMTkm3K02BWXUSHqDaSM6Y2qvf6x6XkMAQgdqY8DH%2FpFFcRpVKeMDWwMbar8q36%2Fo5CdJhT1zb%2Fx051XoeOO0kApms2RDUFDZLBnQLQpwZfcJWVZMcShk6lH1mjiNQ2c%2BNffoZlpkK0LCFwqQHIqTsYJPChafWxdpOmELEfSln9Jzar3X0EG%2BxtQXWwDYlXHkSpLRtDWKGfcjV24pdrw3PnY95i3Aht7PwPJhErsXR7LLaw2xDKac3jR7bkGo4bPfFGzS6ULLeyakvsnn2%2Bf83jFxEGbtk%2Falvk873X1jPraJ5CUx7jwmf1dEpgUVlPf8omI1FNZROqTcj2Ym47wFVuYN%2BFwdYq1KaZUOpuSYiD%2FHoUQ5qq66RYohMU5IeGeG3q17aJGD4MWxZ8rHsCxLpffvcMOP2qsMGOqUBrfZIWLCxUkmgyFBy8ot86uwpcHHESLgXrbl1L2rHL4MI9850bffiYw3rlWisxGg%2F3mRwob%2FBIshmzBf5A17eTApPHQqqX8RkweKYvqzelwheN8%2F3tFMOkrMzMl64DlYbbcK3Mq09FJfI9r7%2F2EfCgPj%2FPEkuh8EA6PvatFIK3wzgCqMqU%2FgmJohYCSgT%2B1dTT4vCSMqXxy%2FCXXBtcteESxPiPWBb&X-Amz-Signature=acf4d43013ab24207e7ad6827a769da7e758e3d122500c08fe1d133c81811822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCH54HI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIH%2FUaUE9ApfyI4QUn6KtkMdDV2xVLf72s%2BTQcHHbOuNSAiEA7o%2F54LdZGStVPG0s8DChO6AGtveOquIYehRXD0YOdT8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIdHnG6uxi1BVepmFyrcAwGYKxKZ%2FrURxIbNQcdQAJDZ38vyQNVoW%2BSfwwPU0YWPaCIQnLqiJSYkyWn0oQSkTHY%2BGlt%2F2PjCv2%2F81nRL8GyBRe31WR5r8UlfPcfjumA5OEB2toZqdiF1UlUmp6p7GOmKNs3PVvpwISOjTPaAFmuJBJfIKTY71RsqlXNxWTo7XNck3HEUOtzcnKFboVcZNc41g6uCf9G5s5PnhQ7TXjHWjRY%2FGkWZ5KMMTkm3K02BWXUSHqDaSM6Y2qvf6x6XkMAQgdqY8DH%2FpFFcRpVKeMDWwMbar8q36%2Fo5CdJhT1zb%2Fx051XoeOO0kApms2RDUFDZLBnQLQpwZfcJWVZMcShk6lH1mjiNQ2c%2BNffoZlpkK0LCFwqQHIqTsYJPChafWxdpOmELEfSln9Jzar3X0EG%2BxtQXWwDYlXHkSpLRtDWKGfcjV24pdrw3PnY95i3Aht7PwPJhErsXR7LLaw2xDKac3jR7bkGo4bPfFGzS6ULLeyakvsnn2%2Bf83jFxEGbtk%2Falvk873X1jPraJ5CUx7jwmf1dEpgUVlPf8omI1FNZROqTcj2Ym47wFVuYN%2BFwdYq1KaZUOpuSYiD%2FHoUQ5qq66RYohMU5IeGeG3q17aJGD4MWxZ8rHsCxLpffvcMOP2qsMGOqUBrfZIWLCxUkmgyFBy8ot86uwpcHHESLgXrbl1L2rHL4MI9850bffiYw3rlWisxGg%2F3mRwob%2FBIshmzBf5A17eTApPHQqqX8RkweKYvqzelwheN8%2F3tFMOkrMzMl64DlYbbcK3Mq09FJfI9r7%2F2EfCgPj%2FPEkuh8EA6PvatFIK3wzgCqMqU%2FgmJohYCSgT%2B1dTT4vCSMqXxy%2FCXXBtcteESxPiPWBb&X-Amz-Signature=daca73aacc85b7db230295f7e76b370cd635e4f5966247dbab1950907f414134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
