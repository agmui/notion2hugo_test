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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNDUJNL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMgxoGpM8kAg7Ccij9lBHMqbQBd0VhmcRFy0rq8uQtIgIgIheK1qXokM9SEnoIwGw95T%2BQEbMerzWJVpx1aYNU06oqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPebSPQNKZE%2F0sfTBircAwOAKsJLsfKs5wUuPQlJ66OzBkiF6Xm3McWwqXM0YwpVbjOjRaNuZ%2FN3tUHJZ0Okg7d08cMmTmR3TWJYsTym0AYLT54q7XzkSX56WEiNNcWGrt0d93qPvT9tcvbggaubue3oyCJQsFv5NbjVj0CXk5meB2i2dFOsVRqKVqaO0yurB5O4NHs%2FN9R8Vy4vvC0ZsyzS5E9pYvUdRaX5XdkIm6aWv7%2Fx%2BWXF89GVyTcFKO0JQeBwQQM9VKwiPRrLkgr1fZHUc5%2BLRSK3i7Sdt1ITVnY0rdHzOs1PHjZrs5xzPltpg%2FU16KpvALI%2B4SqZ3PNM30ehC5y4KyGxaCohLdec5WeHUqnBw8tXRn8EekuTp0H49gXUkF%2FkYgT%2FhgJr0fUXEnLF0U33QWy4CYT1Ig1PV6kll1%2BaQv8mW5bjqSGBZONAUnCu6IWWFTJkOfLf8j99jClY%2FE52waWLQzDfdrVLjbT%2BuiHSR%2B3bWXQeTgqC01Bm3lP%2FVhVIIXNSt1sDFxt%2BCUhIjXRRqYN74%2FowGMGjJmYDQfmOgABeznzhF92YB7gCmpAjLezX%2BrUNBQRLveiFuE6A8OOHmfRIM6%2FCJv6kfG2BfLpQN%2BZt27sayQvjhNdgKW9wZSyVpZBvxmPEMMC1xsMGOqUBWdLhBnNKhmMCR8pGOWKxMjXqKAutEhxZgLymp7dnbsuc3Z6VJmqB6rs3x5XkKzPYV3T%2F0gxBb51eBHZ12zcuBaVN9Hki3eDQAgGP2mxjCA50zyXuFnXjR5wq7sBUjaZikVbCHaBsGuaDYx2SlxLFPHk0yb5UhoaqOiPw%2BxaNfMO7yTkmeb4RdUun9DwZyy3jitvdmZ4vfGrw2UqaiMdulhmUefuG&X-Amz-Signature=fb5b2eac799b79de1197910b770f162aa26902dbaa73c428eb2e47c8d1c9a800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNDUJNL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMgxoGpM8kAg7Ccij9lBHMqbQBd0VhmcRFy0rq8uQtIgIgIheK1qXokM9SEnoIwGw95T%2BQEbMerzWJVpx1aYNU06oqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPebSPQNKZE%2F0sfTBircAwOAKsJLsfKs5wUuPQlJ66OzBkiF6Xm3McWwqXM0YwpVbjOjRaNuZ%2FN3tUHJZ0Okg7d08cMmTmR3TWJYsTym0AYLT54q7XzkSX56WEiNNcWGrt0d93qPvT9tcvbggaubue3oyCJQsFv5NbjVj0CXk5meB2i2dFOsVRqKVqaO0yurB5O4NHs%2FN9R8Vy4vvC0ZsyzS5E9pYvUdRaX5XdkIm6aWv7%2Fx%2BWXF89GVyTcFKO0JQeBwQQM9VKwiPRrLkgr1fZHUc5%2BLRSK3i7Sdt1ITVnY0rdHzOs1PHjZrs5xzPltpg%2FU16KpvALI%2B4SqZ3PNM30ehC5y4KyGxaCohLdec5WeHUqnBw8tXRn8EekuTp0H49gXUkF%2FkYgT%2FhgJr0fUXEnLF0U33QWy4CYT1Ig1PV6kll1%2BaQv8mW5bjqSGBZONAUnCu6IWWFTJkOfLf8j99jClY%2FE52waWLQzDfdrVLjbT%2BuiHSR%2B3bWXQeTgqC01Bm3lP%2FVhVIIXNSt1sDFxt%2BCUhIjXRRqYN74%2FowGMGjJmYDQfmOgABeznzhF92YB7gCmpAjLezX%2BrUNBQRLveiFuE6A8OOHmfRIM6%2FCJv6kfG2BfLpQN%2BZt27sayQvjhNdgKW9wZSyVpZBvxmPEMMC1xsMGOqUBWdLhBnNKhmMCR8pGOWKxMjXqKAutEhxZgLymp7dnbsuc3Z6VJmqB6rs3x5XkKzPYV3T%2F0gxBb51eBHZ12zcuBaVN9Hki3eDQAgGP2mxjCA50zyXuFnXjR5wq7sBUjaZikVbCHaBsGuaDYx2SlxLFPHk0yb5UhoaqOiPw%2BxaNfMO7yTkmeb4RdUun9DwZyy3jitvdmZ4vfGrw2UqaiMdulhmUefuG&X-Amz-Signature=a4073879d870aedc2eb0e92504ce23f08cbabf50aa59ef0b57e1943dc798f052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
