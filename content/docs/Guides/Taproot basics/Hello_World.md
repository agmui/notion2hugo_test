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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPZEOWCU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEKfU3fSx5YkUX3dK6MsDcyMII0LtBRRBR%2B3vCYStpP6AiBlzpnIs6vc2%2BM4AEJefy5%2BjIj%2Fc3UrKgADyYXUm5GOASqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ8ezzuabNC96o6DmKtwDvhxDMX%2BrS90cZoMp5a44Z1WZgEmMOcfb83U6%2Bq82nnd7vHPukPJdr0WHVEuM5QV%2FTEwfKSDQEurOkxKZUkQwWiFf6q26M0PLOId%2B%2F6gfuUGeqkafzspLne5Vla8MCIBkrM9L0LrahSWaZfjJcLEitwUmJEvXbC%2Fpy1qIKFUndStuB4KlgwzMDk84VV46e0ojhMf7UhZXAeckMKcHR0dlcBckILO6eIDI167l6azn4sDUq4eupGX2ZlkEie4xyquCpyH7g4wDyJ1HIXr6GaZScV817oDawJ2scYAY7pjtoFaJ6yyhTnkfaioB7i3HHvtLDao4unSwY1vmFp7ZN%2FM2SGt87Bskj7r7cX8Py5QGqz6CK4fU3ePVrxnN%2FOJLtOM3vtnuq5z2JKKejsc26pSw1Qks%2F65Mxo5%2BVmiTXNBmp7PY%2FV1LjZWtTXClKo3EPOx7vd4Y%2BzfKoAo1IqvjDbp9MyG9ajhwZEMYaPQqr1XiJA0H1LxkOnd9W4k6%2BkDhC8BkA28T%2FGOSMMzHt4SfII2DCoOINcYSP%2Fk2vCeCJIYNpVDEAvEzKv9zf0I3eb4Lw0PyUfflIx8lhBicneY2xzXZOqXYtR6u4K13fBD2QdD%2BqAxH68%2FC5S5Phm1M%2FkUw24juvwY6pgGq1QfGhlQw%2FIZGZeeEArKj1e6mMHVNcf5ecc69LXS%2BOqbhpGHvwL88Pmeh6DQRag13HoT%2FtNTcfPr5ze1cqYry040Dsb%2Fmh7t6URNc8xXkkEWcwRzpWEoBanbqqW7y6mg3Kt0bSm8xpD8GogQ99zCKTgX0gOrq2H%2FAa7zgX1WSOtJCH5BixaGaCe9sNYJViNZUixX0bB%2BhMeblBUkuUFudjkuJ5U%2Bd&X-Amz-Signature=bf4d65f72e7386f4e9bb32033aac52808d4725ae95db26fb345ce4ab8636f69e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPZEOWCU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEKfU3fSx5YkUX3dK6MsDcyMII0LtBRRBR%2B3vCYStpP6AiBlzpnIs6vc2%2BM4AEJefy5%2BjIj%2Fc3UrKgADyYXUm5GOASqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ8ezzuabNC96o6DmKtwDvhxDMX%2BrS90cZoMp5a44Z1WZgEmMOcfb83U6%2Bq82nnd7vHPukPJdr0WHVEuM5QV%2FTEwfKSDQEurOkxKZUkQwWiFf6q26M0PLOId%2B%2F6gfuUGeqkafzspLne5Vla8MCIBkrM9L0LrahSWaZfjJcLEitwUmJEvXbC%2Fpy1qIKFUndStuB4KlgwzMDk84VV46e0ojhMf7UhZXAeckMKcHR0dlcBckILO6eIDI167l6azn4sDUq4eupGX2ZlkEie4xyquCpyH7g4wDyJ1HIXr6GaZScV817oDawJ2scYAY7pjtoFaJ6yyhTnkfaioB7i3HHvtLDao4unSwY1vmFp7ZN%2FM2SGt87Bskj7r7cX8Py5QGqz6CK4fU3ePVrxnN%2FOJLtOM3vtnuq5z2JKKejsc26pSw1Qks%2F65Mxo5%2BVmiTXNBmp7PY%2FV1LjZWtTXClKo3EPOx7vd4Y%2BzfKoAo1IqvjDbp9MyG9ajhwZEMYaPQqr1XiJA0H1LxkOnd9W4k6%2BkDhC8BkA28T%2FGOSMMzHt4SfII2DCoOINcYSP%2Fk2vCeCJIYNpVDEAvEzKv9zf0I3eb4Lw0PyUfflIx8lhBicneY2xzXZOqXYtR6u4K13fBD2QdD%2BqAxH68%2FC5S5Phm1M%2FkUw24juvwY6pgGq1QfGhlQw%2FIZGZeeEArKj1e6mMHVNcf5ecc69LXS%2BOqbhpGHvwL88Pmeh6DQRag13HoT%2FtNTcfPr5ze1cqYry040Dsb%2Fmh7t6URNc8xXkkEWcwRzpWEoBanbqqW7y6mg3Kt0bSm8xpD8GogQ99zCKTgX0gOrq2H%2FAa7zgX1WSOtJCH5BixaGaCe9sNYJViNZUixX0bB%2BhMeblBUkuUFudjkuJ5U%2Bd&X-Amz-Signature=e7adb227c1036944deffce5234bcfb6661a845da64feceedebfec62d7ade18e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
