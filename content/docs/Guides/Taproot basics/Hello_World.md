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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TIDYDSH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIqWPWHrNbSBjCjcClmaXERJBeoV6D1rO5xH0btjwxsgIhAP%2FRmzO7WeZ%2FvXIGgrNp7vpDtSxJ68mauogRNQF4yBGZKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydzTizRNR9ygIKHf4q3AM1UC3ezutgKi0JRsjgBKEr6GiqYO9E3DqhEW9ZIInlb5b3G8t5pmOXJ23l9WYugYs%2BzI2zbG2Jnzf0OREd7g6jn2ADHBzeZ2oirjvPV0fMGpst79U3PYxUINK0I6Con8GA50bvUnlHVYyU5sdRuSm%2Bneb6oZ0VHMgtGQ4Od9aGjsrHt1WD182BMlZFLTB08qwJ1vbTgEcfdLbR0uZrhfWgs8ff%2FpWAO%2BSFOiCdUvQNWBvfULTV3QvQFw0Bgpojo0TdJIioGWdWUFYjc%2BocMAeWlw2DaLUBOSwfvXY7zFDwgd1uJRz7TioRHWyoqtZtM%2FVPWPkxoQYOCCDa1A2jZBj5TKHAZ06RbHMVFUU5bIYDKO3tEJgEcbM4SAYf3b6wiPYSE2V1kL1VD54s3agTalksrUEOW32Yxb46e1SBlKxeEoT7U%2BfBnl4bOeVWF3JS6E%2BFu%2B%2B7%2Fgs1F339O3G%2BCD0GOx5%2Bvh%2Bqt2MmJVTqvo0%2FaN%2BRBT%2FGLSzxcBYRBnFSKugs60ebFIEhzY9vJlgUvfukD%2BMNWmS5%2FU%2BLYhzQocfva0GEy8xkFpjCp2lXUUQco%2Fr%2FdEKgGTX8i4rGD5ZQur7zFFNXn9wlW1GHmQOWKJDe6Uf6%2F%2BWEDQp24c8%2FazCUtLbDBjqkAb%2BlJE7pgktxiBzBe0rK1SWhZfMRbdh0BjWb2kK5YPBpEAkegCpBQWo6%2BwtuUghIn%2Fma979qLNinCA6PUM2HvPaa9w%2BcEK8TcPmO6Juq036Ps9T0bKkIGLzQ4K14b7ZscxfvtVLFhRGjvpLCOmsJBbXUOCCahj%2FL7NoBAByv8iQmPwgqn015cNOF7a5WgVH41glVgrZ5aGBkHn4nBZTnF4KkuaLT&X-Amz-Signature=c0665a6ee0d5dfa439b6db2ab88bbe2bf55154ea7adeb91752b5b7dca9743ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TIDYDSH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIqWPWHrNbSBjCjcClmaXERJBeoV6D1rO5xH0btjwxsgIhAP%2FRmzO7WeZ%2FvXIGgrNp7vpDtSxJ68mauogRNQF4yBGZKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydzTizRNR9ygIKHf4q3AM1UC3ezutgKi0JRsjgBKEr6GiqYO9E3DqhEW9ZIInlb5b3G8t5pmOXJ23l9WYugYs%2BzI2zbG2Jnzf0OREd7g6jn2ADHBzeZ2oirjvPV0fMGpst79U3PYxUINK0I6Con8GA50bvUnlHVYyU5sdRuSm%2Bneb6oZ0VHMgtGQ4Od9aGjsrHt1WD182BMlZFLTB08qwJ1vbTgEcfdLbR0uZrhfWgs8ff%2FpWAO%2BSFOiCdUvQNWBvfULTV3QvQFw0Bgpojo0TdJIioGWdWUFYjc%2BocMAeWlw2DaLUBOSwfvXY7zFDwgd1uJRz7TioRHWyoqtZtM%2FVPWPkxoQYOCCDa1A2jZBj5TKHAZ06RbHMVFUU5bIYDKO3tEJgEcbM4SAYf3b6wiPYSE2V1kL1VD54s3agTalksrUEOW32Yxb46e1SBlKxeEoT7U%2BfBnl4bOeVWF3JS6E%2BFu%2B%2B7%2Fgs1F339O3G%2BCD0GOx5%2Bvh%2Bqt2MmJVTqvo0%2FaN%2BRBT%2FGLSzxcBYRBnFSKugs60ebFIEhzY9vJlgUvfukD%2BMNWmS5%2FU%2BLYhzQocfva0GEy8xkFpjCp2lXUUQco%2Fr%2FdEKgGTX8i4rGD5ZQur7zFFNXn9wlW1GHmQOWKJDe6Uf6%2F%2BWEDQp24c8%2FazCUtLbDBjqkAb%2BlJE7pgktxiBzBe0rK1SWhZfMRbdh0BjWb2kK5YPBpEAkegCpBQWo6%2BwtuUghIn%2Fma979qLNinCA6PUM2HvPaa9w%2BcEK8TcPmO6Juq036Ps9T0bKkIGLzQ4K14b7ZscxfvtVLFhRGjvpLCOmsJBbXUOCCahj%2FL7NoBAByv8iQmPwgqn015cNOF7a5WgVH41glVgrZ5aGBkHn4nBZTnF4KkuaLT&X-Amz-Signature=31702c9fc13f4a70a56a1aaccfa48c19d5af296fcea9d659a009653b38a1517e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
