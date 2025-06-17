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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFH5BWU7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtUKf9%2FPH6XDwSwjtsfv%2Fp7E2QhJssUxrWU9UzM8Xu0gIhAIZN2qFAEkYzHO8s6FuihM0%2Fxt%2FdR5y%2Bo%2BIP%2FLnOSNVKKv8DCGsQABoMNjM3NDIzMTgzODA1Igw%2FsAzL%2FB7KKdV56g8q3AO%2BhapTtJQhbZj%2BdAKANbZKsrQMp4KONDj3JlQzoQ1g71jx4NKcy4uVniotcCEuaDk9aDz9xPas6Vbd%2BCxGNQXg0K5UMuMss14eZX6CQ6TA3v3GhUzr9GW1py10VRV%2Fqe1%2FM0e7MhG2q7zdiX76zBaaObXNb25wK1M3l5ylaXNwbmtjK5Ujl82KfiYLJHqXHRpv6ndtFfRl4laZFqxWbqJrpLZXv3TlqwTTCXeWt5DUFELAMwLX4k440tIFkiUnNfnmquTeOsAVbqkakM2IfkES0kgSNDzMluXtoeGUrJ052BZsdW5tC0aY09M%2BGm01x9jhpCkwL%2Br2guR%2BOS6%2B0v5Qd9XQM2Fdgg3S4Qpls%2FwP1wHnqXg%2ByuFr%2BZTHU8A6uvDIojBOStQHH1LJx06%2BQTQuoMdIqr%2FCMctCXBp7%2FHOYu4FfMBwynZ7ufpg3MkFoZYFvTxCsL8YGhkzi%2Fi5eqOdBwgP%2FXH6RnR38jkwOOwstSJu5zMcmyRLLD5nzSjdkKnuYSFIANheOqNCZJrw6%2FR%2B%2FXUHXmNBmwfh%2Blpn%2BvlCbbxiNqxidJ3Y4%2BbD3vbiXzH1BLWYKYLh0SvbUCmqecEAj9ZgDwJ44OUuUfVtlBNxVaUYCH1X4ke64Jw5a%2FzD2i8PCBjqkAegzUX6JeUgQb7c08K2eBIp0SMoyrAj3igC6GQaCSYonwaTJ9VYRWSshZt%2B6xuwMvIG%2B0MI3uxIjpJIySSmnpibr4nq%2F9IOHhwmRt%2B3S2QCjscp%2Bw55ZRmJE8RduyuJf59kejG3C575S9zM%2FOX%2BVTM3ziYkKp1IFwXELBJGv5ptTygbrY0jxIwZLOvN02%2F2aLMw%2Br5pHbXPn8IjzzYy5VKNP8QqP&X-Amz-Signature=6a27eb0bdad0a08480b3c388e2c50a97e5307850adaf75f6ba5be109aca8b451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFH5BWU7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtUKf9%2FPH6XDwSwjtsfv%2Fp7E2QhJssUxrWU9UzM8Xu0gIhAIZN2qFAEkYzHO8s6FuihM0%2Fxt%2FdR5y%2Bo%2BIP%2FLnOSNVKKv8DCGsQABoMNjM3NDIzMTgzODA1Igw%2FsAzL%2FB7KKdV56g8q3AO%2BhapTtJQhbZj%2BdAKANbZKsrQMp4KONDj3JlQzoQ1g71jx4NKcy4uVniotcCEuaDk9aDz9xPas6Vbd%2BCxGNQXg0K5UMuMss14eZX6CQ6TA3v3GhUzr9GW1py10VRV%2Fqe1%2FM0e7MhG2q7zdiX76zBaaObXNb25wK1M3l5ylaXNwbmtjK5Ujl82KfiYLJHqXHRpv6ndtFfRl4laZFqxWbqJrpLZXv3TlqwTTCXeWt5DUFELAMwLX4k440tIFkiUnNfnmquTeOsAVbqkakM2IfkES0kgSNDzMluXtoeGUrJ052BZsdW5tC0aY09M%2BGm01x9jhpCkwL%2Br2guR%2BOS6%2B0v5Qd9XQM2Fdgg3S4Qpls%2FwP1wHnqXg%2ByuFr%2BZTHU8A6uvDIojBOStQHH1LJx06%2BQTQuoMdIqr%2FCMctCXBp7%2FHOYu4FfMBwynZ7ufpg3MkFoZYFvTxCsL8YGhkzi%2Fi5eqOdBwgP%2FXH6RnR38jkwOOwstSJu5zMcmyRLLD5nzSjdkKnuYSFIANheOqNCZJrw6%2FR%2B%2FXUHXmNBmwfh%2Blpn%2BvlCbbxiNqxidJ3Y4%2BbD3vbiXzH1BLWYKYLh0SvbUCmqecEAj9ZgDwJ44OUuUfVtlBNxVaUYCH1X4ke64Jw5a%2FzD2i8PCBjqkAegzUX6JeUgQb7c08K2eBIp0SMoyrAj3igC6GQaCSYonwaTJ9VYRWSshZt%2B6xuwMvIG%2B0MI3uxIjpJIySSmnpibr4nq%2F9IOHhwmRt%2B3S2QCjscp%2Bw55ZRmJE8RduyuJf59kejG3C575S9zM%2FOX%2BVTM3ziYkKp1IFwXELBJGv5ptTygbrY0jxIwZLOvN02%2F2aLMw%2Br5pHbXPn8IjzzYy5VKNP8QqP&X-Amz-Signature=e8fd2a088f84b2a7a474c6a79d548401279a7b7e0456d114a219c80b5f1fb38c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
