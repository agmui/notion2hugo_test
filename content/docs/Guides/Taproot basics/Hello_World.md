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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UALVIOYL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkLjHb857Z2Seq1QDy0RsTfpW3cARy8XqG%2FAxhHd%2FMCAiBEfPLAa7EFdEanr1f7JHjRvtjitXcX3X6c%2B0A4p95fASr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMwYIPfQvhV%2FAqQBi8KtwDfJzJoB4qsw5gSUWi4ysmZqQ6WiFqLxmzniWmfAKjYKKseD2d9mCdncruEzDFpFCKOxQ87qO7TD49sBimvqLtwfKXYnlT55LKT72IkRiEwpgMpSQeGOSMiL5%2BdIxz5C8uIlAdF3NdYYmG0FZ3cgIUnC3kMH2%2B65eIARVWdoC0g7BA%2B%2FdUL7k48n8A4k0xkHI0bBuG%2Bogq%2BaonBlRUpiRrIldptPfsa%2FYKa981Bv7gZcaPXAnxbsLH8xOp4ZVv8YaHbI2%2BrmElieHqbaGR6T0BXsdbT17bU9dQBAJ5OxDGyam%2BzCPmfJmPlBsklpKbNf%2FbRmSJKAYALUfTX79EHhP8BCmOrv%2FHVttxxUWjNXPJ5jlRd0KSy67tGtANiAvw%2F74Rz5r4HI2FU3sl92iBUT5h9lhsAZjnI0E0U7sTLrY1qoIn6kRzSP3eNqYNG7xY7rhnUw5e9pDbO5m3L9vcuHLWR0LQIqR8w8a8I3WAl80KKDEsYUt6VN7YKcVBI86tnbOscvLe8uF1of0T0O%2FNXjIxLz1GEthoU0rsj%2FrF2pBpAPrrzz0NwNFbNIc3luPF%2FJPABYfTrRolycb%2BeQvEDiYJImy5YzhFSkjp5XwAKJ4M%2FNO4cJ2i7R7pkvZW6Awwst7CwgY6pgFzuM0i4h3v4oFUY3Kwjp8NugoAwT%2FloEVqfSzf1ZxH8N8X0%2FrC0T1zGIpkyFrg8Jms4PU2H4fhGDPSjushmW9wGbVnUxoQhAvbW1cjJQAW4tWbjazyQ%2BbPQotN3rR3Jkovs%2BJ1LDb0ZM2djX5Uwy0EsNTeQ9QEO1zoseqW08LY5VYrLJdEilDdT8GdJEDvEER0OaKj5UPZD%2FtIPzEw6YEUfNAFZsFk&X-Amz-Signature=498c6312630416f5fc79725bf09893fe0f8c8840024714efab9764289d83a61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UALVIOYL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkLjHb857Z2Seq1QDy0RsTfpW3cARy8XqG%2FAxhHd%2FMCAiBEfPLAa7EFdEanr1f7JHjRvtjitXcX3X6c%2B0A4p95fASr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMwYIPfQvhV%2FAqQBi8KtwDfJzJoB4qsw5gSUWi4ysmZqQ6WiFqLxmzniWmfAKjYKKseD2d9mCdncruEzDFpFCKOxQ87qO7TD49sBimvqLtwfKXYnlT55LKT72IkRiEwpgMpSQeGOSMiL5%2BdIxz5C8uIlAdF3NdYYmG0FZ3cgIUnC3kMH2%2B65eIARVWdoC0g7BA%2B%2FdUL7k48n8A4k0xkHI0bBuG%2Bogq%2BaonBlRUpiRrIldptPfsa%2FYKa981Bv7gZcaPXAnxbsLH8xOp4ZVv8YaHbI2%2BrmElieHqbaGR6T0BXsdbT17bU9dQBAJ5OxDGyam%2BzCPmfJmPlBsklpKbNf%2FbRmSJKAYALUfTX79EHhP8BCmOrv%2FHVttxxUWjNXPJ5jlRd0KSy67tGtANiAvw%2F74Rz5r4HI2FU3sl92iBUT5h9lhsAZjnI0E0U7sTLrY1qoIn6kRzSP3eNqYNG7xY7rhnUw5e9pDbO5m3L9vcuHLWR0LQIqR8w8a8I3WAl80KKDEsYUt6VN7YKcVBI86tnbOscvLe8uF1of0T0O%2FNXjIxLz1GEthoU0rsj%2FrF2pBpAPrrzz0NwNFbNIc3luPF%2FJPABYfTrRolycb%2BeQvEDiYJImy5YzhFSkjp5XwAKJ4M%2FNO4cJ2i7R7pkvZW6Awwst7CwgY6pgFzuM0i4h3v4oFUY3Kwjp8NugoAwT%2FloEVqfSzf1ZxH8N8X0%2FrC0T1zGIpkyFrg8Jms4PU2H4fhGDPSjushmW9wGbVnUxoQhAvbW1cjJQAW4tWbjazyQ%2BbPQotN3rR3Jkovs%2BJ1LDb0ZM2djX5Uwy0EsNTeQ9QEO1zoseqW08LY5VYrLJdEilDdT8GdJEDvEER0OaKj5UPZD%2FtIPzEw6YEUfNAFZsFk&X-Amz-Signature=9c1fb1077de4b772bd9c7c8c86d7bdf20370b84a6a9771e6dbd79bac88a9c0fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
