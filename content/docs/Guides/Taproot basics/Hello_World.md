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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6OY52C%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEPrtJ6LM0AyRwVj6g2SF44bgZ5jGq4xSAbVbv7sGGKtAiAgVYkBY%2FKse7jMc1wut%2BozrNCtkgM9fHP8kx817SJ4%2BSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNg0xp2jrhcInHIorKtwDFPB%2FAFHMIzOf2mAkw4DhennZpk16qjLa18NCv94noT8qv6murwR3lW4Meb0cIOWvmDVBP8gh3pOvZ4TLcZ5RO0wsb%2FoX2e0q2f8DaoE9lcRKiHOnyUd9xy2xsdUDTsS%2BJTUMMDi19VF2Mq5D2dTG4hjVfVc90orJw%2BpizXMCtnvACq4hSR2KhCXNbQ0oBonOPyum9aSlrjaDuaST9UqrQu%2BUQOzhAuZl5sZiZv7xgJ%2FNnpK6jzJ9gph%2BE5e61ndK8gtlQsUhoGWWbJWX2i6TLa%2F6X98UodtEGzx1EB2ThJOq0ZQZMSugcR%2BPF8hs2Md69%2FqFp7c2qEibeWErMC3kkEofYEHmKrr0B9Lrgp2DVemdm8BJBA7dubAzmApgcT1etgpOC8rrHv3JGwMii19BlgQpBIhubCRQCUaPi0Yq7WkDjXcLm6MYPdhMnNrFC3XY9I91qxmxJy6f1%2FI28rPfbyxUE5qv1Q%2B%2F5ONqJJoHkjBxktMBuwklu%2FHVsQLY%2FC8Fb%2Br%2BjWjifkn6lzDH0h8z0LXJ%2F9lhY1GY2rPSAdGkFaBI%2BoY5JHfFCWUxsPaGTs%2BCCrl7Z2I%2Bx9AdfUeTGixcw729Jw82pi3FIVKHAJHGLv8GmIutwu1o2tgAa9Qww%2FL9xQY6pgHyCCETkOJEtHxUzPeQfdvGCpRmkgGR0khtt60u0WoUCwXJTyLtm%2BFeP8YsyYmOD12z1osnNHLRb%2F%2BthGRl5mK9QFJB8Oiw8klCtkQPATTLH2RQtPGBTTWcnYRUTmz4C67q1OPxGbVDwnCy%2BX9%2B9JFgDaBhyawmSIxQDfKxP5a6N1yGhspHQGF17I%2F8YWB4%2Fcp1yQeSAxgmOyQ3D9m%2FRgd9jtduXdQE&X-Amz-Signature=88516451f01c8bf4a989d6da058ac6dffa516ad159c2bc886715090846a197a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6OY52C%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEPrtJ6LM0AyRwVj6g2SF44bgZ5jGq4xSAbVbv7sGGKtAiAgVYkBY%2FKse7jMc1wut%2BozrNCtkgM9fHP8kx817SJ4%2BSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNg0xp2jrhcInHIorKtwDFPB%2FAFHMIzOf2mAkw4DhennZpk16qjLa18NCv94noT8qv6murwR3lW4Meb0cIOWvmDVBP8gh3pOvZ4TLcZ5RO0wsb%2FoX2e0q2f8DaoE9lcRKiHOnyUd9xy2xsdUDTsS%2BJTUMMDi19VF2Mq5D2dTG4hjVfVc90orJw%2BpizXMCtnvACq4hSR2KhCXNbQ0oBonOPyum9aSlrjaDuaST9UqrQu%2BUQOzhAuZl5sZiZv7xgJ%2FNnpK6jzJ9gph%2BE5e61ndK8gtlQsUhoGWWbJWX2i6TLa%2F6X98UodtEGzx1EB2ThJOq0ZQZMSugcR%2BPF8hs2Md69%2FqFp7c2qEibeWErMC3kkEofYEHmKrr0B9Lrgp2DVemdm8BJBA7dubAzmApgcT1etgpOC8rrHv3JGwMii19BlgQpBIhubCRQCUaPi0Yq7WkDjXcLm6MYPdhMnNrFC3XY9I91qxmxJy6f1%2FI28rPfbyxUE5qv1Q%2B%2F5ONqJJoHkjBxktMBuwklu%2FHVsQLY%2FC8Fb%2Br%2BjWjifkn6lzDH0h8z0LXJ%2F9lhY1GY2rPSAdGkFaBI%2BoY5JHfFCWUxsPaGTs%2BCCrl7Z2I%2Bx9AdfUeTGixcw729Jw82pi3FIVKHAJHGLv8GmIutwu1o2tgAa9Qww%2FL9xQY6pgHyCCETkOJEtHxUzPeQfdvGCpRmkgGR0khtt60u0WoUCwXJTyLtm%2BFeP8YsyYmOD12z1osnNHLRb%2F%2BthGRl5mK9QFJB8Oiw8klCtkQPATTLH2RQtPGBTTWcnYRUTmz4C67q1OPxGbVDwnCy%2BX9%2B9JFgDaBhyawmSIxQDfKxP5a6N1yGhspHQGF17I%2F8YWB4%2Fcp1yQeSAxgmOyQ3D9m%2FRgd9jtduXdQE&X-Amz-Signature=b2410d560be0d808e1a4dde69cd975f96c5cebfbf6a83a4c6c851d5adfa3ecf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
