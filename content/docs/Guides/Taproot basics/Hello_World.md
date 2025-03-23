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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFTFNPZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICBpxC0aknltNzmZ2Wr69Fxef286tmTLDZ4Fgbak32BjAiAncwHbUUCNk%2B8bvXIiy3Fpvwc%2B%2Fh0K3I63aIQ%2B9J%2BX6SqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKuNxgPFvGzwb3TlpKtwD4Fjhyw9sLFZmnO67MtW8ndDvRAO06LnqBhpwcwOAda35cGtKkqbw%2FuAx2%2F0SMcsrH1Pch9K0JrGZ9DahI2GE8XDzEcj%2Fu17CG6QbH8Ke8xBEPoapkY2ZvspQPuYQO9T8xAbB36bhSb5V7yVpNYtj%2F6xTXDyYPsHSZW7yfcYVa74YorOgtBN4KNS85zkGu9jwlYjMDOpNkPLkjksSNwjZgM80bG8qbgbXchqxawHDdwKRBqfKLbPsuQ9gEkk2Kz0Nu4xU%2BhN24u74HCakf9Z%2B%2BhUxroa%2Bb7g44l4QVOzad%2FkVV7sxVqayJuYceNGJaa52j6Nx45dRuQu0Ws1npJvtFwddHfv9DqRolFu5X1Q5ZXUzto7ZDWqeoYHTrioU%2BgBN0RCxjOJsLLUm%2FjvhvezmivO3IrKSGF9rMkT827pxCxP0rlaiGZW9%2FevNBXpzBWeQCiRtzYGcjaGEofy2q5wS3woM5ZkwSP2pNDw1TS5Y%2Bt80JkLj%2FNqLKsUPyxBr5aCGpVRp1WRy%2B6ohCSHcaRnn9I1gHd%2FIG8cs0RazkPctQX1c4p0CyaU%2B4DoXn3w7F1%2ByVukZb9ZnaHE9WnllZ13UQT1h8uPn2RiRvJtlqrcfKWKO3JHYtRqsHBApmdkwhc3%2FvgY6pgH0Nz%2FNxV%2FHx7U64AGD27%2FcFXV7dc%2F14Ok99SX3WAkCTf0A5hJijjYtIU1hcBLu5xjGNhfHIOnHeXum%2FzHlpDGoUaLyeRcCk0hOotwkCwcHfU5FyIzyMcUELIAaQxDAw%2FXFONp%2BTbhCEzemTi2ocwf8cMUIm%2B0N7nEbB02Iue%2BWiF6LdcFwfcsq1hGKWMXY04zd79NjnKrLUI0gJsZhcaDn0IIcSYRp&X-Amz-Signature=3a4d2be786c918d0643ba84ecfbfb67220641e436c642348f2060c594724f8a5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFTFNPZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICBpxC0aknltNzmZ2Wr69Fxef286tmTLDZ4Fgbak32BjAiAncwHbUUCNk%2B8bvXIiy3Fpvwc%2B%2Fh0K3I63aIQ%2B9J%2BX6SqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKuNxgPFvGzwb3TlpKtwD4Fjhyw9sLFZmnO67MtW8ndDvRAO06LnqBhpwcwOAda35cGtKkqbw%2FuAx2%2F0SMcsrH1Pch9K0JrGZ9DahI2GE8XDzEcj%2Fu17CG6QbH8Ke8xBEPoapkY2ZvspQPuYQO9T8xAbB36bhSb5V7yVpNYtj%2F6xTXDyYPsHSZW7yfcYVa74YorOgtBN4KNS85zkGu9jwlYjMDOpNkPLkjksSNwjZgM80bG8qbgbXchqxawHDdwKRBqfKLbPsuQ9gEkk2Kz0Nu4xU%2BhN24u74HCakf9Z%2B%2BhUxroa%2Bb7g44l4QVOzad%2FkVV7sxVqayJuYceNGJaa52j6Nx45dRuQu0Ws1npJvtFwddHfv9DqRolFu5X1Q5ZXUzto7ZDWqeoYHTrioU%2BgBN0RCxjOJsLLUm%2FjvhvezmivO3IrKSGF9rMkT827pxCxP0rlaiGZW9%2FevNBXpzBWeQCiRtzYGcjaGEofy2q5wS3woM5ZkwSP2pNDw1TS5Y%2Bt80JkLj%2FNqLKsUPyxBr5aCGpVRp1WRy%2B6ohCSHcaRnn9I1gHd%2FIG8cs0RazkPctQX1c4p0CyaU%2B4DoXn3w7F1%2ByVukZb9ZnaHE9WnllZ13UQT1h8uPn2RiRvJtlqrcfKWKO3JHYtRqsHBApmdkwhc3%2FvgY6pgH0Nz%2FNxV%2FHx7U64AGD27%2FcFXV7dc%2F14Ok99SX3WAkCTf0A5hJijjYtIU1hcBLu5xjGNhfHIOnHeXum%2FzHlpDGoUaLyeRcCk0hOotwkCwcHfU5FyIzyMcUELIAaQxDAw%2FXFONp%2BTbhCEzemTi2ocwf8cMUIm%2B0N7nEbB02Iue%2BWiF6LdcFwfcsq1hGKWMXY04zd79NjnKrLUI0gJsZhcaDn0IIcSYRp&X-Amz-Signature=6ba11302c9af7e05c292b7b3d5db61f0637719e9db428f55d8fde18a494839a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
