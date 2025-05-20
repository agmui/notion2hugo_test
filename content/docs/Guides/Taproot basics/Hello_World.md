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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LNUBPJB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkig2c%2BvWXuDrKn97CdgNLQdMgFxCFp2ELk2Ub3KcT3wIhAPdfgcJDE8NpxlHN8ibUe8rGhOuBLux%2B4J7urP0QyfG9KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdJk5uRUWmC7KuSYgq3ANIvlM0oIigQdO%2FZHjCRFlnPHd606i9HPN%2B36qD2mpzcwG1kipwxl8UZjE9FHsWZ6oWN96bJRdnKuLfOM4HV8QiyG%2FEHoQX3AcgipFxSVJ0Y7WiSZIRHzubH%2Fpghw%2BDP5bUJhzbQEzyP2py6TDoanTWRUsFnOR9tra0LzUQBaZPLHNyPS6yxUDcxRecJdBtcKuy2CWstnGqzmsTiprtn0EpKtzc8fypnGLmVUcku9UdxEXmaAnKxnwWI8Zck2MjXfs2pu1hwgX02FTis8c%2FCZPly%2BScKU8AWeqKy6ROOsRlbq0e1i4EUPaN8Q%2Bf%2BHb2Px3nw1kHi9x%2FyRPRWhbIItD7%2FZ1XyQ9eIZKiwVkAywkKXeSzwnMLlLYGgrmRfRztrbtXQ5807wnE5f0TxtDXSUccRzD9qCW%2F3SBpVgYGes0iA84U5gGnMu%2FW69%2BXYLvitzdxN90bst%2BovVaAYGXaLdfEi0GoWdB%2Bo53mCJJh6wqLOTyVNMBWgyhSGI9HDGEL9LG24hlW9O7cmwhMnkxeScaGvf3EdUdZTaIreSnSREmhSpC7T8R9LOvihfZIJaOFBIl8x3gBOBIJkTel7tP7UOAlWKQgaWj%2BD%2FPgg1ePZ6gI7ZK4CNPm7ubcGAwVATCby7PBBjqkAaP6jtX3%2FVCGUFGN0GUuj6KpxR7SeyOTlU7MrC4mP3sW7mbi%2FM4LfK2nKZlz%2Fy3UKrZozEwimCA8GbOcfYxPQ6H8HjdtAP%2BzVLiJvUjDMCr1BP6mx6f6VOOeqtpcTPVXruqTAoHjSBnZZqXsBY56sc%2BwVh5eFxT35ZSvYT%2BLqTNIv3ZLU2Sdhs6tSrZTlXPExeZMWLwVDMN1gTdp3ArtWqotnBF7&X-Amz-Signature=1ef389b377541c46dbf1cb0468d579f0af5ed2424033ee7b0666c1c6c3210bff&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LNUBPJB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkig2c%2BvWXuDrKn97CdgNLQdMgFxCFp2ELk2Ub3KcT3wIhAPdfgcJDE8NpxlHN8ibUe8rGhOuBLux%2B4J7urP0QyfG9KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdJk5uRUWmC7KuSYgq3ANIvlM0oIigQdO%2FZHjCRFlnPHd606i9HPN%2B36qD2mpzcwG1kipwxl8UZjE9FHsWZ6oWN96bJRdnKuLfOM4HV8QiyG%2FEHoQX3AcgipFxSVJ0Y7WiSZIRHzubH%2Fpghw%2BDP5bUJhzbQEzyP2py6TDoanTWRUsFnOR9tra0LzUQBaZPLHNyPS6yxUDcxRecJdBtcKuy2CWstnGqzmsTiprtn0EpKtzc8fypnGLmVUcku9UdxEXmaAnKxnwWI8Zck2MjXfs2pu1hwgX02FTis8c%2FCZPly%2BScKU8AWeqKy6ROOsRlbq0e1i4EUPaN8Q%2Bf%2BHb2Px3nw1kHi9x%2FyRPRWhbIItD7%2FZ1XyQ9eIZKiwVkAywkKXeSzwnMLlLYGgrmRfRztrbtXQ5807wnE5f0TxtDXSUccRzD9qCW%2F3SBpVgYGes0iA84U5gGnMu%2FW69%2BXYLvitzdxN90bst%2BovVaAYGXaLdfEi0GoWdB%2Bo53mCJJh6wqLOTyVNMBWgyhSGI9HDGEL9LG24hlW9O7cmwhMnkxeScaGvf3EdUdZTaIreSnSREmhSpC7T8R9LOvihfZIJaOFBIl8x3gBOBIJkTel7tP7UOAlWKQgaWj%2BD%2FPgg1ePZ6gI7ZK4CNPm7ubcGAwVATCby7PBBjqkAaP6jtX3%2FVCGUFGN0GUuj6KpxR7SeyOTlU7MrC4mP3sW7mbi%2FM4LfK2nKZlz%2Fy3UKrZozEwimCA8GbOcfYxPQ6H8HjdtAP%2BzVLiJvUjDMCr1BP6mx6f6VOOeqtpcTPVXruqTAoHjSBnZZqXsBY56sc%2BwVh5eFxT35ZSvYT%2BLqTNIv3ZLU2Sdhs6tSrZTlXPExeZMWLwVDMN1gTdp3ArtWqotnBF7&X-Amz-Signature=bb75b77daa5a432652cede4ee9fb3a65033907fdbd8c6ef8c4d96959982f0b92&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
