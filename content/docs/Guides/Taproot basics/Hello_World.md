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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662645PKQ5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGBozpYtpg8vTmRIgmXG%2BiQ45h5lClQfWgaKI9ZGS0M7AiEApY%2BOh5296DXmOTmtWl65qmFICLcEq%2F%2BOGJZmhs%2FufcUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2tUKgkEbup9PrzPircA6lKW%2BdbIbH4BtqXZzdPwa6y6ZsbPXfY0yeGNq5rC2V8URMR3zDhJFpKuhaqWpRfv9MwVYtQx2zou99OcZJymSbVMES%2FHmYMUFtKFCBxS3kHQQX3jv%2F1aLyCYsKYzsYL0NsHaLsDU%2F0OOz8oNuBQvoo3v0oTDSD%2F2iiju%2BfIF2FmL3VdIwIzRtXkrqmmNf0TTxDKQa0IIBSeKjhaHfj172B%2BFOPnUl14CzAEcnpvChyKo6ujPZq7IjiaKclo32JRkJDhvTtu4%2BeJi%2FyM83%2BSv7P4MColXpCl%2F9CBWPiDmxmhP2mQEsmHc7BgvjRqapT0xHPL9d%2BI8j48iQWDObFTbgIhjIVbNgB22sNk%2Fo5jnN0ZPArvDCHjWqgBfdp6Np85Xdp51T1crTM2VHQtpb%2BfH0O2WLZ%2Bh0pFtStI1wunkWxmYM8Pv04HFmzsjdpoh%2FAjBphWw2k5VTZYPL%2BowSEYojzWeJEJXLV0Wa5V43bPeL%2FkKgjzeB6ph8qleDHhbxo5zDgvuwEbIKFC5%2Fykhbe31D6eKclOnG7u23j3Blt3zXDpTo6p5MKCGK8Fb56uK1YNL3kep3iSlcJtDs6X2GsFhe2sWQLQdcNQFyqgNB1nK4WY8GcK6pGw6IdIfoptMLLwz70GOqUBKg8MZOuQTpiGkZyvBcQoDA6J%2FPm3H6wgkZ2di5OA0bz%2By0RSVgY%2FHKeOGQAm6%2Fh2mNvDW6vjI5Bd6GzqYnK6VZsNsl8GiK4rga0oxRBLJqj2Yf3qAgjnlIXEcbFjLzNEp%2FBBas84tvIl%2FgcOZLXJDwCAAQVR2vhTMwPZ68TivbU0qS3BnnqBbidJMcqdU%2FaeyRzb7fY548xuCoY91IiSFPzsCIhX&X-Amz-Signature=409f7678d53b40fb85bd20653d094248ff4fcf9b19f78452f6ce63e328b40bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662645PKQ5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGBozpYtpg8vTmRIgmXG%2BiQ45h5lClQfWgaKI9ZGS0M7AiEApY%2BOh5296DXmOTmtWl65qmFICLcEq%2F%2BOGJZmhs%2FufcUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2tUKgkEbup9PrzPircA6lKW%2BdbIbH4BtqXZzdPwa6y6ZsbPXfY0yeGNq5rC2V8URMR3zDhJFpKuhaqWpRfv9MwVYtQx2zou99OcZJymSbVMES%2FHmYMUFtKFCBxS3kHQQX3jv%2F1aLyCYsKYzsYL0NsHaLsDU%2F0OOz8oNuBQvoo3v0oTDSD%2F2iiju%2BfIF2FmL3VdIwIzRtXkrqmmNf0TTxDKQa0IIBSeKjhaHfj172B%2BFOPnUl14CzAEcnpvChyKo6ujPZq7IjiaKclo32JRkJDhvTtu4%2BeJi%2FyM83%2BSv7P4MColXpCl%2F9CBWPiDmxmhP2mQEsmHc7BgvjRqapT0xHPL9d%2BI8j48iQWDObFTbgIhjIVbNgB22sNk%2Fo5jnN0ZPArvDCHjWqgBfdp6Np85Xdp51T1crTM2VHQtpb%2BfH0O2WLZ%2Bh0pFtStI1wunkWxmYM8Pv04HFmzsjdpoh%2FAjBphWw2k5VTZYPL%2BowSEYojzWeJEJXLV0Wa5V43bPeL%2FkKgjzeB6ph8qleDHhbxo5zDgvuwEbIKFC5%2Fykhbe31D6eKclOnG7u23j3Blt3zXDpTo6p5MKCGK8Fb56uK1YNL3kep3iSlcJtDs6X2GsFhe2sWQLQdcNQFyqgNB1nK4WY8GcK6pGw6IdIfoptMLLwz70GOqUBKg8MZOuQTpiGkZyvBcQoDA6J%2FPm3H6wgkZ2di5OA0bz%2By0RSVgY%2FHKeOGQAm6%2Fh2mNvDW6vjI5Bd6GzqYnK6VZsNsl8GiK4rga0oxRBLJqj2Yf3qAgjnlIXEcbFjLzNEp%2FBBas84tvIl%2FgcOZLXJDwCAAQVR2vhTMwPZ68TivbU0qS3BnnqBbidJMcqdU%2FaeyRzb7fY548xuCoY91IiSFPzsCIhX&X-Amz-Signature=3ef98080e33f104f831cfe131eb551aea4689258ff64a7fe711e8827fede0234&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
