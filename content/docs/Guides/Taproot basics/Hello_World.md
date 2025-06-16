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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SM5PM5R%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCLn3DeHuYrDj570HT0UA%2FlJ0zBpG%2BBBFGmwCQ7vh1l5QIhAKXObFL02aVluYttphtLNoH79MBFWyd0KswAAnVdHSL6Kv8DCFMQABoMNjM3NDIzMTgzODA1Igz5u3kQQMKH4k3oU5Iq3AOWluzWUY7Hsj%2Bam8oGq%2BB72E6qKJgotcpz9jsO4eD6d%2FxctIhYprM3%2FDRZ%2FE9xZHjLVoKuT4dqIJ%2BnzYKxl1VCVtUkrYmv41EzfAMRbb4wwhZUULaSg6uYbEk7qfIb0dtCpylq9l84UL54FBpP1CzcTkZ9O2944PmCH%2Bsqtcdq3xbgCjeqqS6QjQ6MkYqvmeq0Z2uL0Jf1HwalStWHkb8A4E5NDkTGLoWUw91RQyPI22eONIEN%2FO3rVYlf79BSDt38QC%2F%2BbXJxrrDn1OuV%2BtkPSahakHVqgWlhDpYer4fWpapYNiIuWmrK3ET6rDSt%2BmTAwt5r95GYnb878LDWDv0dD%2BeakJ2hnr9C0vOcvJeW%2F9KPmxcGZkM3nJ%2B9tywUMoL%2BGHX8IBddiPGPmJiFQ1qROe3ewxTci3ZrFEU6EMZ76%2BjhnSsv1BRqxZVx6rR%2BYN%2F0KvVcZYEcKQdPM3xMO0IoSlZ%2FxpenV7%2FyFU6rZ1YL7EvUwsP66nGPAfpK3JCWvVKboUU9oC02ONzCIaNqrR5b2r8B8H1xlZyswH3JMMAhGdwBfYpJHDtFf%2FoC5d9lA8%2FKEbeYd8ApT7Bn46%2BcTaWR0Nx9BbZgwozvE5WJ8mpmgb3JgHyLLHvfWwqYqTCi%2Fr3CBjqkAUXaGWVgyQOeW83a6h2PSRp0pP3fcU3OYsegjk9qpnSYzoo3mHvVfFeHbkQ5ubcn5LVOBS3g8lI9ik3Y%2B6jRvnARtPdD%2FBxOJO4jdMq9sIJK14VgZ%2BsPAnM91QfEUJj7uTgqSx%2FSfulpqIyJPpHJFzqSoNcEHYGxzC9qU7Ong7HSdhnz22JXyEu8k%2BN9lL1Q%2Fjcd2TaSewhzgQNxk48vpTsBX5KN&X-Amz-Signature=391a7776669067debaee339f899fc4f2fb07e0b083a1cc4392d0eb9ab370acde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SM5PM5R%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCLn3DeHuYrDj570HT0UA%2FlJ0zBpG%2BBBFGmwCQ7vh1l5QIhAKXObFL02aVluYttphtLNoH79MBFWyd0KswAAnVdHSL6Kv8DCFMQABoMNjM3NDIzMTgzODA1Igz5u3kQQMKH4k3oU5Iq3AOWluzWUY7Hsj%2Bam8oGq%2BB72E6qKJgotcpz9jsO4eD6d%2FxctIhYprM3%2FDRZ%2FE9xZHjLVoKuT4dqIJ%2BnzYKxl1VCVtUkrYmv41EzfAMRbb4wwhZUULaSg6uYbEk7qfIb0dtCpylq9l84UL54FBpP1CzcTkZ9O2944PmCH%2Bsqtcdq3xbgCjeqqS6QjQ6MkYqvmeq0Z2uL0Jf1HwalStWHkb8A4E5NDkTGLoWUw91RQyPI22eONIEN%2FO3rVYlf79BSDt38QC%2F%2BbXJxrrDn1OuV%2BtkPSahakHVqgWlhDpYer4fWpapYNiIuWmrK3ET6rDSt%2BmTAwt5r95GYnb878LDWDv0dD%2BeakJ2hnr9C0vOcvJeW%2F9KPmxcGZkM3nJ%2B9tywUMoL%2BGHX8IBddiPGPmJiFQ1qROe3ewxTci3ZrFEU6EMZ76%2BjhnSsv1BRqxZVx6rR%2BYN%2F0KvVcZYEcKQdPM3xMO0IoSlZ%2FxpenV7%2FyFU6rZ1YL7EvUwsP66nGPAfpK3JCWvVKboUU9oC02ONzCIaNqrR5b2r8B8H1xlZyswH3JMMAhGdwBfYpJHDtFf%2FoC5d9lA8%2FKEbeYd8ApT7Bn46%2BcTaWR0Nx9BbZgwozvE5WJ8mpmgb3JgHyLLHvfWwqYqTCi%2Fr3CBjqkAUXaGWVgyQOeW83a6h2PSRp0pP3fcU3OYsegjk9qpnSYzoo3mHvVfFeHbkQ5ubcn5LVOBS3g8lI9ik3Y%2B6jRvnARtPdD%2FBxOJO4jdMq9sIJK14VgZ%2BsPAnM91QfEUJj7uTgqSx%2FSfulpqIyJPpHJFzqSoNcEHYGxzC9qU7Ong7HSdhnz22JXyEu8k%2BN9lL1Q%2Fjcd2TaSewhzgQNxk48vpTsBX5KN&X-Amz-Signature=3e964114bb09744d62c0bed2de2c324414ad10981eafba77a05a804b6b1561c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
