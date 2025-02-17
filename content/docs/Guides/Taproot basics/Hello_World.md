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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPWHKYD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIA4wffrrseDsudK9y41p7Wi0qvWDQGFjZ03AAKe6NH%2FvAiEA9bFSo6XCV6zpGUAOsQ6AS0wLphZuAMNe7LoqE1xvoA0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO813aK2EWcEFIc4FircA9eW4zMTKPUQMvfUZ2%2Bi0WUxFZjVuiPiibNQq5tl5dmXgHhWetR89VQrYs4BHAwodNe7F5GKZsF2OLW97NlDgDrQBE2HV2zRmNW454RORAFQ2uUKMPXIQylnv%2BTWiw1R3TpM1N4PWNSbaUXokp84JocrU0o%2F28hjv9PtE0tVOwskjj7nrClEGpC06POX0mQovI2DHhi8%2B71LsQWeiP0xFylSlKnp1Jl1gBsOuANMREeaRTE08V41AEc4yh56YCiBWmYDq0bJfS2DSIHEtZMGvCPpQUtbj9%2Bz3GH9csa%2FMRBRG98OBWOfnlj1EuDNgWgMCdYmO0r61cjGcMR2aGe9rytZ73%2FVxbuoAepkNlm%2FQiriSMTgFfHVv8z9ZLZTi1yAui6u%2BDbg%2FHAeewCjHo8WaHw8e2UKnCxqSZS5h19GLAhemk3IVpO%2FHUX4mLh6EZPdnWzE2zuOF4EmIvD6pcxB3gGe68y0RXHudxgtpPyUlGgaPz4PPPvc8%2FGnwh3OLUZ6UzPqypaZoNBAgPTvXvnDQzPhvQPeFUKomKXhnMQeB%2FGk%2Fa0GQgdXBmMosMb0Y5FHB8OsUBGZxTDMVp2pel7VZYwEZOXPXh5HhocVpLJ3LW2ucmu2qybdAas5aSlsMIuWzb0GOqUB1%2BLDhyt%2Bp3SGdWcPXud7Rt4%2BQ7jNZYpDO3X%2BdmDTeVsyh%2BufJTeT3%2Btq1jGIgNGzoVsMSr%2FXInc8D6YK4ANjVqM9f00CiLhomrQxrv4V7MYSdGwzNt3szKzJnki8T30GfZGsvXU9%2F%2FWUVpXrf5%2FPVMX9oBWp%2BBke%2Fe58zgOLFkvYbWD6AawR6CB931n4Bf9UQlv3KBzgWcgtKN%2BJHYZYce4rCgkX&X-Amz-Signature=0b616e6bfbe060d1d622957d39c1cc0973699be58cf7c6e0bb847a9c2c932dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPWHKYD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIA4wffrrseDsudK9y41p7Wi0qvWDQGFjZ03AAKe6NH%2FvAiEA9bFSo6XCV6zpGUAOsQ6AS0wLphZuAMNe7LoqE1xvoA0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO813aK2EWcEFIc4FircA9eW4zMTKPUQMvfUZ2%2Bi0WUxFZjVuiPiibNQq5tl5dmXgHhWetR89VQrYs4BHAwodNe7F5GKZsF2OLW97NlDgDrQBE2HV2zRmNW454RORAFQ2uUKMPXIQylnv%2BTWiw1R3TpM1N4PWNSbaUXokp84JocrU0o%2F28hjv9PtE0tVOwskjj7nrClEGpC06POX0mQovI2DHhi8%2B71LsQWeiP0xFylSlKnp1Jl1gBsOuANMREeaRTE08V41AEc4yh56YCiBWmYDq0bJfS2DSIHEtZMGvCPpQUtbj9%2Bz3GH9csa%2FMRBRG98OBWOfnlj1EuDNgWgMCdYmO0r61cjGcMR2aGe9rytZ73%2FVxbuoAepkNlm%2FQiriSMTgFfHVv8z9ZLZTi1yAui6u%2BDbg%2FHAeewCjHo8WaHw8e2UKnCxqSZS5h19GLAhemk3IVpO%2FHUX4mLh6EZPdnWzE2zuOF4EmIvD6pcxB3gGe68y0RXHudxgtpPyUlGgaPz4PPPvc8%2FGnwh3OLUZ6UzPqypaZoNBAgPTvXvnDQzPhvQPeFUKomKXhnMQeB%2FGk%2Fa0GQgdXBmMosMb0Y5FHB8OsUBGZxTDMVp2pel7VZYwEZOXPXh5HhocVpLJ3LW2ucmu2qybdAas5aSlsMIuWzb0GOqUB1%2BLDhyt%2Bp3SGdWcPXud7Rt4%2BQ7jNZYpDO3X%2BdmDTeVsyh%2BufJTeT3%2Btq1jGIgNGzoVsMSr%2FXInc8D6YK4ANjVqM9f00CiLhomrQxrv4V7MYSdGwzNt3szKzJnki8T30GfZGsvXU9%2F%2FWUVpXrf5%2FPVMX9oBWp%2BBke%2Fe58zgOLFkvYbWD6AawR6CB931n4Bf9UQlv3KBzgWcgtKN%2BJHYZYce4rCgkX&X-Amz-Signature=e39e6df453f27c901acb51d9624ee3f0baeb395b6c2e079150bcf51d86b06b37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
