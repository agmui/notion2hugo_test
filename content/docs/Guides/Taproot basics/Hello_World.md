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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DZLV2XU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCAolCzBHViPGP1YxFTL93bAzmSpjLDLzLTCzOpRU2ergIhAN6uC96Y6UZOIntCDiFSDzR8i8N4jQTA%2FVvJMJtvy5VgKv8DCCwQABoMNjM3NDIzMTgzODA1IgzCUrEKO9JapbF63Awq3AOvFIxih0gWmnh%2FsC0BOJWPu4%2Bb24uKXwcxLZhLJJlclubbQK2ozleEDZBMHt17cEUhaGJnubHVfmOLtux1vYdU%2BGm6gObo8N8HpsPoQtyBX0quWjZjDwpP86ZyUaDGVkh8%2BhslD3dO5n%2Bbe1EZIkqQz4mk%2BcgVF%2B4dWoG1I7bclM92mYisUr2xRKdesJolpwosuJdxCXIiNzmOl8IaaO%2Fe1DGO5J%2BZtnqQr3lB1V5pcD3Nz02T3YNYrCaBiJsLQU3z8%2BzxyBa8xuz%2FE4CTSTTMAY3Fd%2BMV6auLkIhSXVTogL2lP3QzqZZmJJKhr4GE9OOsC1dJrL5d5jZeY9a%2Fn2XDHl9VFYuFPxbvvrelhS3MufW56S2B7Q7z0kXWf9%2FEXQ2igmeFtKs78UurlQUY5NqoNi8lt2KuRlgqQJVe%2F8TK4YBxtZQYtgcH9XIFFO2GUl4%2BK95dFI%2Fc6kA%2BZTxxp%2FFiHr03hzQ5wCnEAAWqN%2FR8m%2FVb3nf%2FtT40VJcbDIoyZ5OiJmRE8ZXIJ00qIGfqVwa6Bj89t8%2FCyuuFr2n2xCARS%2F5d8Wm9gJ8niulIZYlyC7QBzG2aKM%2BUXdTIniOaLxJqqe%2FYISZJ4ohuM6i%2FA%2Fdw%2BiDlEHeMmT6yYTqypDDh8p7DBjqkARsb0cNubWgekmi1nPHkjv%2BpzLwYLUya6FH3mZOgBVNZaY68%2BQbdutqGup3Qd%2Bt2soUo8p9pr%2FdHEJuJDYfObcaPL50Y%2B7Y9ek%2BF7JjSuTp7Fl%2FLcOu37%2F1RCFZbaZMW%2FtL9mk2CuP3R9kjL9odBOa3MP0RbEmSOPLBVW6kprnL3W2vzdH8W0sGqbNqbVT59UlDxGp3Enw4k%2B3EBJBEJPZRupYUK&X-Amz-Signature=8c2a17c9a4831a45f715426c28e4e1e108efab99d5ff91b82e38dac90d2a42e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DZLV2XU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCAolCzBHViPGP1YxFTL93bAzmSpjLDLzLTCzOpRU2ergIhAN6uC96Y6UZOIntCDiFSDzR8i8N4jQTA%2FVvJMJtvy5VgKv8DCCwQABoMNjM3NDIzMTgzODA1IgzCUrEKO9JapbF63Awq3AOvFIxih0gWmnh%2FsC0BOJWPu4%2Bb24uKXwcxLZhLJJlclubbQK2ozleEDZBMHt17cEUhaGJnubHVfmOLtux1vYdU%2BGm6gObo8N8HpsPoQtyBX0quWjZjDwpP86ZyUaDGVkh8%2BhslD3dO5n%2Bbe1EZIkqQz4mk%2BcgVF%2B4dWoG1I7bclM92mYisUr2xRKdesJolpwosuJdxCXIiNzmOl8IaaO%2Fe1DGO5J%2BZtnqQr3lB1V5pcD3Nz02T3YNYrCaBiJsLQU3z8%2BzxyBa8xuz%2FE4CTSTTMAY3Fd%2BMV6auLkIhSXVTogL2lP3QzqZZmJJKhr4GE9OOsC1dJrL5d5jZeY9a%2Fn2XDHl9VFYuFPxbvvrelhS3MufW56S2B7Q7z0kXWf9%2FEXQ2igmeFtKs78UurlQUY5NqoNi8lt2KuRlgqQJVe%2F8TK4YBxtZQYtgcH9XIFFO2GUl4%2BK95dFI%2Fc6kA%2BZTxxp%2FFiHr03hzQ5wCnEAAWqN%2FR8m%2FVb3nf%2FtT40VJcbDIoyZ5OiJmRE8ZXIJ00qIGfqVwa6Bj89t8%2FCyuuFr2n2xCARS%2F5d8Wm9gJ8niulIZYlyC7QBzG2aKM%2BUXdTIniOaLxJqqe%2FYISZJ4ohuM6i%2FA%2Fdw%2BiDlEHeMmT6yYTqypDDh8p7DBjqkARsb0cNubWgekmi1nPHkjv%2BpzLwYLUya6FH3mZOgBVNZaY68%2BQbdutqGup3Qd%2Bt2soUo8p9pr%2FdHEJuJDYfObcaPL50Y%2B7Y9ek%2BF7JjSuTp7Fl%2FLcOu37%2F1RCFZbaZMW%2FtL9mk2CuP3R9kjL9odBOa3MP0RbEmSOPLBVW6kprnL3W2vzdH8W0sGqbNqbVT59UlDxGp3Enw4k%2B3EBJBEJPZRupYUK&X-Amz-Signature=7545a8b847e4b6047d527e0c4dd7e2f7c2fd61092d67f0812c8c8d31fcdb1168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
