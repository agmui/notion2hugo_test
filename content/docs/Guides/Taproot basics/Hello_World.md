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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJQ3XN7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeGRQ0Fr%2FdDaxeDe3azQ9PKmp8hWhfyLF6euBqio0QkwIhAIqCDz6JuZ5mtwIKstxut96%2BVJ%2BkvwoB%2FWaHT%2BtM5fHEKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxsQLEw7gDdkpExFEq3AODGgU55JvUeJqiQYHL0osF9NCiQeWAyy%2BXlbP9Wg8XTcXLCgMiTZf14KbvObTiiZnYQU6nB91fg5oogywMAat75dMRbS6TKsT1sasrZ8MLZJrrWnXHA1jilHcTL%2FIxssnzAGRI2%2Fpcuc%2Brg8XfXwCmytIrOZo68uC598bzM3FTKznCW%2FQWvGWB66m%2FtWEfgQJ0gF7YGM7MaNqJ%2BQ9c6efa2HqcQCBcM8iOIEkiib094puFb0SLS6n9n%2BQgQ5MDOITzkaJvzYcrih%2BmNGAyP3j0wbbAxnLWICSpVukzq4o%2FZknKXu8dMMekP0UVR46dk7m0%2Bpp4mPpdGDwWljHzU4z2X3CzvfxpjFhLLlHvSYce%2BQK49kQgNSmJ98WRnMCOGyRrKogUMRPbg4R5WNz4sFc%2BCJC8Be7R5Ha7ounElAQUWFQbdqmkV64F1jTYGDzf90m1nMc4FKbJqIGq87rC5oaaSnCkWsGw%2FqHaqNHDXR%2FFiLlSp7liHIqXQQklb%2B%2BWKI%2BwYCyMoov6SXhSmEweu%2FOHCwpflD%2F%2F1QJ6Rgzuog4rQaGBDC0YKnmXvZQlU81Pk9934aljMQyFaeN4%2FIuHiPcH5kOJcoEchbUIS2qpIkWL4MrDV%2FTdoZFxL70ufDCuo8XABjqkAcEVU8i6BJfoc4VmGEgAJQlT1TGnjftN18fQAl6RsYkuV35UxikHxqKUOgDE%2F482P39cXmLalwHXVlm37MxM%2FuIzOb%2Baniw6MCFBa4iccqoC1ekAzeUBX4JvYgK4xS1OxTKmJAoU97%2FCgw6KasxpBfvzQYtWcVO5sbV%2FE5EYfOFrgohhVnNMNwfW7nQJ6JE4mM%2FCvl9v8oQdR%2BzZdXC9EmKaxxEE&X-Amz-Signature=ca8be9f1be54be2a90329698ff495b032110a67251ab344040964273caf5b3e9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJQ3XN7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeGRQ0Fr%2FdDaxeDe3azQ9PKmp8hWhfyLF6euBqio0QkwIhAIqCDz6JuZ5mtwIKstxut96%2BVJ%2BkvwoB%2FWaHT%2BtM5fHEKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxsQLEw7gDdkpExFEq3AODGgU55JvUeJqiQYHL0osF9NCiQeWAyy%2BXlbP9Wg8XTcXLCgMiTZf14KbvObTiiZnYQU6nB91fg5oogywMAat75dMRbS6TKsT1sasrZ8MLZJrrWnXHA1jilHcTL%2FIxssnzAGRI2%2Fpcuc%2Brg8XfXwCmytIrOZo68uC598bzM3FTKznCW%2FQWvGWB66m%2FtWEfgQJ0gF7YGM7MaNqJ%2BQ9c6efa2HqcQCBcM8iOIEkiib094puFb0SLS6n9n%2BQgQ5MDOITzkaJvzYcrih%2BmNGAyP3j0wbbAxnLWICSpVukzq4o%2FZknKXu8dMMekP0UVR46dk7m0%2Bpp4mPpdGDwWljHzU4z2X3CzvfxpjFhLLlHvSYce%2BQK49kQgNSmJ98WRnMCOGyRrKogUMRPbg4R5WNz4sFc%2BCJC8Be7R5Ha7ounElAQUWFQbdqmkV64F1jTYGDzf90m1nMc4FKbJqIGq87rC5oaaSnCkWsGw%2FqHaqNHDXR%2FFiLlSp7liHIqXQQklb%2B%2BWKI%2BwYCyMoov6SXhSmEweu%2FOHCwpflD%2F%2F1QJ6Rgzuog4rQaGBDC0YKnmXvZQlU81Pk9934aljMQyFaeN4%2FIuHiPcH5kOJcoEchbUIS2qpIkWL4MrDV%2FTdoZFxL70ufDCuo8XABjqkAcEVU8i6BJfoc4VmGEgAJQlT1TGnjftN18fQAl6RsYkuV35UxikHxqKUOgDE%2F482P39cXmLalwHXVlm37MxM%2FuIzOb%2Baniw6MCFBa4iccqoC1ekAzeUBX4JvYgK4xS1OxTKmJAoU97%2FCgw6KasxpBfvzQYtWcVO5sbV%2FE5EYfOFrgohhVnNMNwfW7nQJ6JE4mM%2FCvl9v8oQdR%2BzZdXC9EmKaxxEE&X-Amz-Signature=7011d64f5fd4209bb11785a2fbbaf760aa5e3aea8ee9b305cae3b9a18225da95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
