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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LCNDCBC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDolXklZP3a33GE48lNgkTjN2J6Meu4kjCPCjGKqdJKzgIgFMV47%2Foz9RfzoNBmTpfw2D64XWHDKjFpYOXs7vFMxPIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDg4WpJCI1g7AXF1PyrcA4SEI%2Fy6I%2FiXY%2FyihXHO%2B5Cooq8sOrgX2Cjr5R0RW8dcwGMgzoWIln5h5GGdkzKLgzhwXkTV%2F3odq3gU%2FpSyaYmOQ5OnllD6sF52YUReW11CyyLZ60Te%2F%2BdA0DWCZBqDNDNlHj1gKgYnzDttKxgWDqAp3fHJW2sFwe3kp3v%2F1rLuz0%2BH0R2L5691O66JdBSjk%2BjYnCwiT8CYaTNdvegoQgJ1GAeieBbhUCn10j9Gr1IkkM66DQ2YksegouN9fmcgok2q735EUxts%2BPuxILbBHmzCSQPMLdRozD86YOMJ%2F5OWh%2Boimg4A%2ByF6O7GxW4IgfkE5bxw%2BQ4kR8X%2FuCiZqShCV2J%2Fckg%2B%2BXfqim3oGez4fiF%2FHZYLz1UylCgh6DSMR%2FAsUL2YbXfIYbq4pg3%2F5QuCGFHFFSEEO3b%2FffJ79EB8bNMbkr6x5kMoKfnIEKW7D9BDtuc7bYvZEtBVzz1XkJnKwEF8U1f19%2Fp7Mj7UcewQWut%2FvN78DW9zgvqjJLY1KivSwAJKb4TIZijy4Nm6uKdc0iqb2Hj0ix4LSNunwsG9DnV7RNYVyOz6S%2F5cZlCc3bR%2FdxDZZWw3cns6VlXJx2NJRFz%2BQUnc3oLb3KFpYt%2FuAp8YKG7%2Bb5mlVj3AeMLPr9b8GOqUB9c01QxFfVtFgkS15ztPL%2Fxo8rwJcDHrm1TEmI60o34qGO6vaZqQ0vf%2FyA9qUpzXVYmtYNknUwIoxtw6jAWgroWFISbl6ibHAww6H%2B3gGRzRnAa1QozWq9PcTIK0unQTOjx259pmdomWmcCDoM5lIZ7WvGf9r8wUi4iInE8eFYKukmY4ETYwld3ajMKzRn7cdkjvB2Aj6p4OJtNFlHfYDrH13%2FNpJ&X-Amz-Signature=9fa2ae419e5fb325a5784899e3a8e19c908e27d561772b09b302e1f9e0e01aff&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LCNDCBC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDolXklZP3a33GE48lNgkTjN2J6Meu4kjCPCjGKqdJKzgIgFMV47%2Foz9RfzoNBmTpfw2D64XWHDKjFpYOXs7vFMxPIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDg4WpJCI1g7AXF1PyrcA4SEI%2Fy6I%2FiXY%2FyihXHO%2B5Cooq8sOrgX2Cjr5R0RW8dcwGMgzoWIln5h5GGdkzKLgzhwXkTV%2F3odq3gU%2FpSyaYmOQ5OnllD6sF52YUReW11CyyLZ60Te%2F%2BdA0DWCZBqDNDNlHj1gKgYnzDttKxgWDqAp3fHJW2sFwe3kp3v%2F1rLuz0%2BH0R2L5691O66JdBSjk%2BjYnCwiT8CYaTNdvegoQgJ1GAeieBbhUCn10j9Gr1IkkM66DQ2YksegouN9fmcgok2q735EUxts%2BPuxILbBHmzCSQPMLdRozD86YOMJ%2F5OWh%2Boimg4A%2ByF6O7GxW4IgfkE5bxw%2BQ4kR8X%2FuCiZqShCV2J%2Fckg%2B%2BXfqim3oGez4fiF%2FHZYLz1UylCgh6DSMR%2FAsUL2YbXfIYbq4pg3%2F5QuCGFHFFSEEO3b%2FffJ79EB8bNMbkr6x5kMoKfnIEKW7D9BDtuc7bYvZEtBVzz1XkJnKwEF8U1f19%2Fp7Mj7UcewQWut%2FvN78DW9zgvqjJLY1KivSwAJKb4TIZijy4Nm6uKdc0iqb2Hj0ix4LSNunwsG9DnV7RNYVyOz6S%2F5cZlCc3bR%2FdxDZZWw3cns6VlXJx2NJRFz%2BQUnc3oLb3KFpYt%2FuAp8YKG7%2Bb5mlVj3AeMLPr9b8GOqUB9c01QxFfVtFgkS15ztPL%2Fxo8rwJcDHrm1TEmI60o34qGO6vaZqQ0vf%2FyA9qUpzXVYmtYNknUwIoxtw6jAWgroWFISbl6ibHAww6H%2B3gGRzRnAa1QozWq9PcTIK0unQTOjx259pmdomWmcCDoM5lIZ7WvGf9r8wUi4iInE8eFYKukmY4ETYwld3ajMKzRn7cdkjvB2Aj6p4OJtNFlHfYDrH13%2FNpJ&X-Amz-Signature=87fd89c318a7d55f0f9e715830ddbd011413afee03de06f786ebbbd2e2ec09cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
