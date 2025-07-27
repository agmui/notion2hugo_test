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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD45GG7I%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDUcGTsjQLvH8g3nRfrTfrPVAfvihhr9ayC5LM94Nkn9AiEAjBaoOp7fFElGyp4ZrgSZbrEZUfnGf%2BS8XvoXpMBVYuwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLI%2F2LU32JUE4jX7dircA8I8jVdbJYs6svSAmcf6XX%2FsD2gquLAFd8413clFXgZ5OQL9Pcn6hubUwc19Dwvw5ga0LZVVPW5%2Bi3949gIaeO%2F4tH4FPZWEhbn7HJ%2FBKmuuperB4H7fpavdSPGXGYJgwnULBAtYr3NekJVpNzRqr1an6aKl06KWKlk%2BjpTiv6ThbBpczqKiAzyNQhzvtDhO1%2BEJ27XpFLIda1g4XYdUOwoDGIT3JhQ3hK6yYy56E29lbKasOGAtxR%2BSTVplMyXlS6XXvqJ6wimGHBjT5Ry16iuUKT9OzpPmdSZOulS25Lh8OrbfW3Rl4c0aJtsyG8YE%2BEfq5ASDStrXOmmzO9bGEh7V0gqNyDXmZbWCjpPaoLV8DeQK3gPHx%2BLKjeBt%2Ffq7ypYxbQGu1YiZSscTerU6VJm6Gr5rpS2j6SaNODVfg0j2tCxWmCikEH4Y0lzDb%2FR2aIz6vNVkGbpsrMCL%2FABUtw5DtxzHzoNs5mLv%2BvMTfX2%2BM5f2Qmaz8V23yOOc53NQmjOyQGwFMJX5xhJ0qhuAqiy1TWqdP%2BwCwIpg5ot7I8aJ%2BjqFv6GoNvpFeo5TGfaSs7bHR0d7lsAePikw3OzimS2Vk9DMbfiWKu87B9drtxr7nXsbioCLbJp9p0SqMKbgl8QGOqUByF8VXwz%2Biw2z%2BQietJmlTV3uvxLj4dFnjLOatgVmqZYA2p2p875mGPmzQ9qZVUkPHWJt6FzrNJPijYKbYdV2Nkpu1rK88Vb%2FyRPvw2UIPEQpzaIoikrUdiXY0KdoZZLM%2FFI7CGoPQRg1OQwNtGCXlXrMR2V8YT3wuNyGYw7df2kjT2bKlHa2UjqF30%2FNMtA%2FW7O4iQu7LHpZDHOwcvr%2B5T6LleZW&X-Amz-Signature=a19cd7da717372bf1f4de80a6291167c829e958bc1cbe8d229dfb84d24b077d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD45GG7I%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDUcGTsjQLvH8g3nRfrTfrPVAfvihhr9ayC5LM94Nkn9AiEAjBaoOp7fFElGyp4ZrgSZbrEZUfnGf%2BS8XvoXpMBVYuwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLI%2F2LU32JUE4jX7dircA8I8jVdbJYs6svSAmcf6XX%2FsD2gquLAFd8413clFXgZ5OQL9Pcn6hubUwc19Dwvw5ga0LZVVPW5%2Bi3949gIaeO%2F4tH4FPZWEhbn7HJ%2FBKmuuperB4H7fpavdSPGXGYJgwnULBAtYr3NekJVpNzRqr1an6aKl06KWKlk%2BjpTiv6ThbBpczqKiAzyNQhzvtDhO1%2BEJ27XpFLIda1g4XYdUOwoDGIT3JhQ3hK6yYy56E29lbKasOGAtxR%2BSTVplMyXlS6XXvqJ6wimGHBjT5Ry16iuUKT9OzpPmdSZOulS25Lh8OrbfW3Rl4c0aJtsyG8YE%2BEfq5ASDStrXOmmzO9bGEh7V0gqNyDXmZbWCjpPaoLV8DeQK3gPHx%2BLKjeBt%2Ffq7ypYxbQGu1YiZSscTerU6VJm6Gr5rpS2j6SaNODVfg0j2tCxWmCikEH4Y0lzDb%2FR2aIz6vNVkGbpsrMCL%2FABUtw5DtxzHzoNs5mLv%2BvMTfX2%2BM5f2Qmaz8V23yOOc53NQmjOyQGwFMJX5xhJ0qhuAqiy1TWqdP%2BwCwIpg5ot7I8aJ%2BjqFv6GoNvpFeo5TGfaSs7bHR0d7lsAePikw3OzimS2Vk9DMbfiWKu87B9drtxr7nXsbioCLbJp9p0SqMKbgl8QGOqUByF8VXwz%2Biw2z%2BQietJmlTV3uvxLj4dFnjLOatgVmqZYA2p2p875mGPmzQ9qZVUkPHWJt6FzrNJPijYKbYdV2Nkpu1rK88Vb%2FyRPvw2UIPEQpzaIoikrUdiXY0KdoZZLM%2FFI7CGoPQRg1OQwNtGCXlXrMR2V8YT3wuNyGYw7df2kjT2bKlHa2UjqF30%2FNMtA%2FW7O4iQu7LHpZDHOwcvr%2B5T6LleZW&X-Amz-Signature=3eb39f55c8bc888af2fb4e393d108e7675a9e21ab8e4fa8dd3ce8c3094bc033f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
