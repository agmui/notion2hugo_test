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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFHZALDH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDs868zC8z75RT3gAJh4%2BQ1A1AxnjnR0jOeftb17S5CgIhANGJHl255F8HSNrlwO5Dbjca%2FbnkqtWRpKi65QZxjPioKv8DCDMQABoMNjM3NDIzMTgzODA1IgxJr3KykmzuJa05U0Aq3AMbQPzFqALytImwvfnp8UxOiwXdHA1BCD7xvqVanBS3UGxt9dHahepoc9wWAc1eFa1k1irw5qtiybNlO8YmbDc66mSvTkG1u1t36DJEl4ElJaP7pRA4vE3zov0QqOBSma%2BXr3I0A7SoL1HQ4UGfI7l09Jop1f%2BLBYFMiXhbx9JLmFOXxMgRX4DwlpmQGo8QhOElrV76v3DEbo5OKyYPIagyzqpMfoHxGE6lA8nZsuIm6rSPkpd1uYBSfO%2FA5wJwpCLmFDWMgoJnGiVk5OTei3XU8t1Be4ln%2B%2BUrYD4Q9fS8i5bUzy6erh4q3WpALBeE4bVL3nMZAyPle%2FcM92Co1OFxcsy58EUGvIimZzF9e4oYDSVfrsnhj2wAndDvxjSECtSNf7H68hmqZsWRCDQd8LshW8t5wwU44uxe3D29aMLpX9kEJUbuF%2B1gOyJwqFIotHsPDWy%2FSEe7eWIZp71s7iYHcGQcryQnzKLaNjVmKhKbm63djwbMUFoKTf1Rc5te9lcY5fKZ6Aooeki%2Be5OqmhkeoznRQtifpPsFzykM2JjN5bieh4iz%2Bukj1DPpjPXlAjqsbp5wt7B7oe8hZogWqAqRXlmiqxuzanDJ6GHcQ7CNVJL5w0A45HHqODMw3zDC3vK9BjqkAc7LjRzI66ZVPM3XDfr6EF7K2WbcLc8SG23XoS8SYpSBQrQoNhUNZsij7rnKo8%2FH5tVUqej4c3yjtqAhWIkdIh90g%2FJvVBbEa8w9TR0iCBjsFwUDQhMFpjzuyhY3QUfROe1YGmHnxFJ9t3tBtT9UeX9FI7QCdp7omf84yi33qe0piiqQPGDC97kjsk0dyPXtVHUBkg%2Bd9%2FL2Ya2qCB3KnFnVjzw%2F&X-Amz-Signature=671c0b7b5481a4d56b6ae667d52d05dd82054ec91d66f8ad26811441b743e9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFHZALDH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDs868zC8z75RT3gAJh4%2BQ1A1AxnjnR0jOeftb17S5CgIhANGJHl255F8HSNrlwO5Dbjca%2FbnkqtWRpKi65QZxjPioKv8DCDMQABoMNjM3NDIzMTgzODA1IgxJr3KykmzuJa05U0Aq3AMbQPzFqALytImwvfnp8UxOiwXdHA1BCD7xvqVanBS3UGxt9dHahepoc9wWAc1eFa1k1irw5qtiybNlO8YmbDc66mSvTkG1u1t36DJEl4ElJaP7pRA4vE3zov0QqOBSma%2BXr3I0A7SoL1HQ4UGfI7l09Jop1f%2BLBYFMiXhbx9JLmFOXxMgRX4DwlpmQGo8QhOElrV76v3DEbo5OKyYPIagyzqpMfoHxGE6lA8nZsuIm6rSPkpd1uYBSfO%2FA5wJwpCLmFDWMgoJnGiVk5OTei3XU8t1Be4ln%2B%2BUrYD4Q9fS8i5bUzy6erh4q3WpALBeE4bVL3nMZAyPle%2FcM92Co1OFxcsy58EUGvIimZzF9e4oYDSVfrsnhj2wAndDvxjSECtSNf7H68hmqZsWRCDQd8LshW8t5wwU44uxe3D29aMLpX9kEJUbuF%2B1gOyJwqFIotHsPDWy%2FSEe7eWIZp71s7iYHcGQcryQnzKLaNjVmKhKbm63djwbMUFoKTf1Rc5te9lcY5fKZ6Aooeki%2Be5OqmhkeoznRQtifpPsFzykM2JjN5bieh4iz%2Bukj1DPpjPXlAjqsbp5wt7B7oe8hZogWqAqRXlmiqxuzanDJ6GHcQ7CNVJL5w0A45HHqODMw3zDC3vK9BjqkAc7LjRzI66ZVPM3XDfr6EF7K2WbcLc8SG23XoS8SYpSBQrQoNhUNZsij7rnKo8%2FH5tVUqej4c3yjtqAhWIkdIh90g%2FJvVBbEa8w9TR0iCBjsFwUDQhMFpjzuyhY3QUfROe1YGmHnxFJ9t3tBtT9UeX9FI7QCdp7omf84yi33qe0piiqQPGDC97kjsk0dyPXtVHUBkg%2Bd9%2FL2Ya2qCB3KnFnVjzw%2F&X-Amz-Signature=7ac63a20bbc06af8e7dad8535af629b03ab084c69be49671a75425e40ece56d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
