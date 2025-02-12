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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBAE6PS%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA44hSbdtr%2FtqpMJCgXicgP5V3isDNZSOrdWPElWmeFHAiEA6ZzcDgnkvbTQdyWdcE6YpbwEMq37suLcLID%2FG%2Fg%2BBEIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAi0H3F8ZU3ozcIYCrcA0WmZXtT%2FGSvKOySl9QRPfWGIp7x3D1C6cw0aIPDB2CsBuoVGdb9u%2Bde8hhlBw6VtkTon4Hj1EjFoNT9DBlnYXEPgmupjMIPGIkqp2iTAfLylDUJbKZm6DwDztuwtfoYKzW4X2BpFlRNvy%2Fce7%2Bvf%2FdZs3e0SzLY5bJtJLVMcBXGpkog1xAAAq5SK0RcqDlkrVdQ7I0e1LMCxIKQec%2BYDIFyAhnmHmEVl1xaW7P%2FefBfyBeHnwBuzwFtjicP9ocTucDeE7DNhka91ndCu%2FCUw3MSpETfpY9CsJZu0naXlg31HBAsfmxjH2iKXQE6HYl9kUZhV0cySUxItsNOmS%2Blgb2cW4QufduouEzkbi5qbL%2BJVa3ilPw2DusWkCaMzkIp7epvUDyrReypexfbjYPX1qC5nDsPPtSc3OaPs%2BFeDREGy%2FD75kUGkel8Jm50XJyxtkwjT5TBGb%2FlhymscArFeK4dqphUoY6bObhd4dkl1Z8sMTzvMGhHvZwitM41bLlf7XqBPCFRL7Vaa%2F7CZusHmBY8OA0s%2B8AMo4mHYX8lwlrPE1s%2FqldH0dcgDIlsyianvEuzqrfz3V0NhV%2BA%2FliR1cJtxmDt%2Bf%2BXOzoxD%2Bb%2F3omG4kfa%2BImOiVEzM0UDMOfpr70GOqUBoxknT8W%2BhfCwJiD5sRjBvRzSR2ebjfKlucLTeJBitrQVANoLceD%2FyzEQZV8TkAJ7cf8eK93eXEbVd1VRnGdJkYXBdiyqej0kRA2O%2BC4CzAFr1KjeL%2ByJB2D2uZutJeg9wB7miRk3oerY5AunN0nONO33qOUpEYS5YnVEQOiDqJ1E8uyCr%2BkFPyeQ%2BWxkGIs45XpK0eClaAHmhmqkVD1t87slln68&X-Amz-Signature=ec643037756916b1cd46d90a99aa57ddf5eca00dc44b3520c1898a72a365b667&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBAE6PS%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA44hSbdtr%2FtqpMJCgXicgP5V3isDNZSOrdWPElWmeFHAiEA6ZzcDgnkvbTQdyWdcE6YpbwEMq37suLcLID%2FG%2Fg%2BBEIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAi0H3F8ZU3ozcIYCrcA0WmZXtT%2FGSvKOySl9QRPfWGIp7x3D1C6cw0aIPDB2CsBuoVGdb9u%2Bde8hhlBw6VtkTon4Hj1EjFoNT9DBlnYXEPgmupjMIPGIkqp2iTAfLylDUJbKZm6DwDztuwtfoYKzW4X2BpFlRNvy%2Fce7%2Bvf%2FdZs3e0SzLY5bJtJLVMcBXGpkog1xAAAq5SK0RcqDlkrVdQ7I0e1LMCxIKQec%2BYDIFyAhnmHmEVl1xaW7P%2FefBfyBeHnwBuzwFtjicP9ocTucDeE7DNhka91ndCu%2FCUw3MSpETfpY9CsJZu0naXlg31HBAsfmxjH2iKXQE6HYl9kUZhV0cySUxItsNOmS%2Blgb2cW4QufduouEzkbi5qbL%2BJVa3ilPw2DusWkCaMzkIp7epvUDyrReypexfbjYPX1qC5nDsPPtSc3OaPs%2BFeDREGy%2FD75kUGkel8Jm50XJyxtkwjT5TBGb%2FlhymscArFeK4dqphUoY6bObhd4dkl1Z8sMTzvMGhHvZwitM41bLlf7XqBPCFRL7Vaa%2F7CZusHmBY8OA0s%2B8AMo4mHYX8lwlrPE1s%2FqldH0dcgDIlsyianvEuzqrfz3V0NhV%2BA%2FliR1cJtxmDt%2Bf%2BXOzoxD%2Bb%2F3omG4kfa%2BImOiVEzM0UDMOfpr70GOqUBoxknT8W%2BhfCwJiD5sRjBvRzSR2ebjfKlucLTeJBitrQVANoLceD%2FyzEQZV8TkAJ7cf8eK93eXEbVd1VRnGdJkYXBdiyqej0kRA2O%2BC4CzAFr1KjeL%2ByJB2D2uZutJeg9wB7miRk3oerY5AunN0nONO33qOUpEYS5YnVEQOiDqJ1E8uyCr%2BkFPyeQ%2BWxkGIs45XpK0eClaAHmhmqkVD1t87slln68&X-Amz-Signature=b8e651ef54bfa5992eaf822fd9dc99cb601b29276d7d251cbf4aa29a7bf36d82&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
