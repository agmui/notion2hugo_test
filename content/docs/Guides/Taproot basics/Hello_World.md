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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEIY5TT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGLqJRa6x%2FlDfzt5wHVzd4SiBHJ9z6ZRrv1o%2Fc3YGuDbAiAI5EWUi9Jp%2BAGgaSKM9jAdaw0Kyw1Hbu5SAp2rO0uw3SqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOFJgZmJT6LxN3WYKtwDmP%2Bgyst1XNR%2BUwD7X7XxnhxF1LeqsEff9QWZxSD5IX2Yz3ohNyWM2uJfj0HzjG7iDMc9hLv42tpkktja7%2FlV8GUrt8ZKRC1vls2mEZo21yM4QogxSQU0xTy6JtAEwTC1FAU6Nxtgd7%2FYEbTyAONR3mU%2BbWSx2KFhOlg2VTK4%2FGoT3IhTTIjb2Hi1eTvCo24Dy5EXmuMmbao6t%2BLn%2FUL4VDxef4LB2Pb%2FDaWSIFtsIU2RbUF6C7TQsam8YMXZ030kAcyGCRI3qpUXQXXPhg3DrVJzV5RIigGdySFI32XddG8e0rNsN4iwJ0pHEqfKV2482GUJCKkskBIpaAe8GJb3pFVijE3j3ri9At%2FlK%2B%2BIYrEJ%2F2Lc0Wo7OpRKfGzpGMNvxe9j7REeN218l3I4IU5bquXCjpvaXB7PPCzIflYMsqdz9ztEdXt3Wg7HpvfPWgS362sLz7S4gzosSiyKOvuGu4tL6MTPan0VC53sfsYqD0EVWVETtC5L7Zj%2FPk%2B00TJP%2BLp%2FUtV2hmYc6Or6Ig%2BgqoURkQv3xxiaqcytooIeOHDO5zOQ8feQ9ru0TwpYiAQnh8xEYHbKFJcARdfDJAQP5uScNRtSUuSXE%2Fqb9Be1MPqg%2FK1s7RpHTVNDvcww3q7KwAY6pgFxUnllB52pUVvyMW%2FWPCyzJiXL2GLY5oMVZCtq30lThDgcutweNNNpWEE4s5eGGLTPdqOm87F%2B2BGg4uMBCbPhjkGL5qRzDnHpYU%2FBJjx16ZKwxt2HBhHzArRMemAqufjVJ1WD521Kwd3GmsyRfe6Ptaa8NKnGqp%2FIQbxzyoQzq%2Bg6goseZwtMV8X2vo5sWTnUWw4lPSc6P6AezcINqNgAOuGeIxD2&X-Amz-Signature=01eb2c27794359e2225a67d5c4ab2057426ca86688dba93e231c657612a5d563&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEIY5TT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGLqJRa6x%2FlDfzt5wHVzd4SiBHJ9z6ZRrv1o%2Fc3YGuDbAiAI5EWUi9Jp%2BAGgaSKM9jAdaw0Kyw1Hbu5SAp2rO0uw3SqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOFJgZmJT6LxN3WYKtwDmP%2Bgyst1XNR%2BUwD7X7XxnhxF1LeqsEff9QWZxSD5IX2Yz3ohNyWM2uJfj0HzjG7iDMc9hLv42tpkktja7%2FlV8GUrt8ZKRC1vls2mEZo21yM4QogxSQU0xTy6JtAEwTC1FAU6Nxtgd7%2FYEbTyAONR3mU%2BbWSx2KFhOlg2VTK4%2FGoT3IhTTIjb2Hi1eTvCo24Dy5EXmuMmbao6t%2BLn%2FUL4VDxef4LB2Pb%2FDaWSIFtsIU2RbUF6C7TQsam8YMXZ030kAcyGCRI3qpUXQXXPhg3DrVJzV5RIigGdySFI32XddG8e0rNsN4iwJ0pHEqfKV2482GUJCKkskBIpaAe8GJb3pFVijE3j3ri9At%2FlK%2B%2BIYrEJ%2F2Lc0Wo7OpRKfGzpGMNvxe9j7REeN218l3I4IU5bquXCjpvaXB7PPCzIflYMsqdz9ztEdXt3Wg7HpvfPWgS362sLz7S4gzosSiyKOvuGu4tL6MTPan0VC53sfsYqD0EVWVETtC5L7Zj%2FPk%2B00TJP%2BLp%2FUtV2hmYc6Or6Ig%2BgqoURkQv3xxiaqcytooIeOHDO5zOQ8feQ9ru0TwpYiAQnh8xEYHbKFJcARdfDJAQP5uScNRtSUuSXE%2Fqb9Be1MPqg%2FK1s7RpHTVNDvcww3q7KwAY6pgFxUnllB52pUVvyMW%2FWPCyzJiXL2GLY5oMVZCtq30lThDgcutweNNNpWEE4s5eGGLTPdqOm87F%2B2BGg4uMBCbPhjkGL5qRzDnHpYU%2FBJjx16ZKwxt2HBhHzArRMemAqufjVJ1WD521Kwd3GmsyRfe6Ptaa8NKnGqp%2FIQbxzyoQzq%2Bg6goseZwtMV8X2vo5sWTnUWw4lPSc6P6AezcINqNgAOuGeIxD2&X-Amz-Signature=450424e67da669104a5e4b3a34bf619d4a55caa180db5769b92a948ac50f7e27&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
