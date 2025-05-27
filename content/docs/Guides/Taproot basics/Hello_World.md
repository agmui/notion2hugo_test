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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDCLHBD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC67GDxiodZjGXPGjdDrZdaV3uOoMiKHcoiG8BfGkFjvwIhAJpFKxBRIEXP687gn61sRDeKTw1DLAfxJzfmTAuuKHEwKv8DCGgQABoMNjM3NDIzMTgzODA1IgzhABtqyDXHA1hfCeUq3AMUSzCXw%2FUlNDnUPRocmUBDM5hnQD4kuEQAyV2IDieG7knsGphrNCBAe%2FEIKCGjNijLq%2Bdk3Y%2BOrNNg%2BIW7jHcW4a5tXNvPQJPgH9NkBi%2BR0AKj4tBFqDoC9dqXitFRQWIQacOH%2F%2Bcax8CLuym1OMPj4VcGn7IHwJan4057yn7Dvc9rHi2QF2qhqL0hJMgAW4YSliHiEO3pEqU9lDrrrcxeJD5kU0gFMmyyIBQyBFejFP%2BOZpIWwqyRKfy9IYL%2B3ngMow5oyIuArVukdnc29aI9xg21TOwxrnbBP5kkKIa00bp%2BlMEwMOkm7pFue05BjkSLhghfM3GOwwcBH3AizQNM2bt5RMMWZqnJKVfHxSgyta1VtwxpbWbd1PS4jnqtwEWTNOxLDnZ7WL4UH%2FRUOOs%2BmEaqb3chAkqB7Jt5ACUHoVJk2VnkuSFBXKTtAYJoPIEkTc60omCtzubLWP6W5BGQNGKReNQHWixQO9Yw%2B%2BUNvL%2B1WHBORWNSfTwMHHRf9ZEkhyIYLWhWm2Tf19nHsnNY36c0FMVfDudHXtra%2Fgqr4rVLdKOab2Y03wpr9ZmDI6GEIHG54vJSAqyDkilW1hi%2FcKS9fYdNVlqxUin28xON9ODRAUbQAJHaB8S5GDCw%2BNjBBjqkAbqC%2F%2FIg38BZ43sDREbfsphjs0ND5UMQt4w84zTjhyPSnwBEOEJB1t4unC6eB75DiEmdPMev8IpXbxzEdHZrhB0isms%2BHjd6LBgbNvlblVju666yAeLr%2FK3o%2BXIAyp0FrHsXo9h6Rg4ZNQsqMyrwNLTwAW%2FYSqzuZDbCUNZw4TLVIFyt5e6Py38NzHh4we0kuEQUMMyx8hDw3zQyk8SwJ9%2B234jf&X-Amz-Signature=380e57ca448c2064041f0bb2b3d0e7070880a89e274d58fa93d175ebcc76e7b4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDCLHBD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC67GDxiodZjGXPGjdDrZdaV3uOoMiKHcoiG8BfGkFjvwIhAJpFKxBRIEXP687gn61sRDeKTw1DLAfxJzfmTAuuKHEwKv8DCGgQABoMNjM3NDIzMTgzODA1IgzhABtqyDXHA1hfCeUq3AMUSzCXw%2FUlNDnUPRocmUBDM5hnQD4kuEQAyV2IDieG7knsGphrNCBAe%2FEIKCGjNijLq%2Bdk3Y%2BOrNNg%2BIW7jHcW4a5tXNvPQJPgH9NkBi%2BR0AKj4tBFqDoC9dqXitFRQWIQacOH%2F%2Bcax8CLuym1OMPj4VcGn7IHwJan4057yn7Dvc9rHi2QF2qhqL0hJMgAW4YSliHiEO3pEqU9lDrrrcxeJD5kU0gFMmyyIBQyBFejFP%2BOZpIWwqyRKfy9IYL%2B3ngMow5oyIuArVukdnc29aI9xg21TOwxrnbBP5kkKIa00bp%2BlMEwMOkm7pFue05BjkSLhghfM3GOwwcBH3AizQNM2bt5RMMWZqnJKVfHxSgyta1VtwxpbWbd1PS4jnqtwEWTNOxLDnZ7WL4UH%2FRUOOs%2BmEaqb3chAkqB7Jt5ACUHoVJk2VnkuSFBXKTtAYJoPIEkTc60omCtzubLWP6W5BGQNGKReNQHWixQO9Yw%2B%2BUNvL%2B1WHBORWNSfTwMHHRf9ZEkhyIYLWhWm2Tf19nHsnNY36c0FMVfDudHXtra%2Fgqr4rVLdKOab2Y03wpr9ZmDI6GEIHG54vJSAqyDkilW1hi%2FcKS9fYdNVlqxUin28xON9ODRAUbQAJHaB8S5GDCw%2BNjBBjqkAbqC%2F%2FIg38BZ43sDREbfsphjs0ND5UMQt4w84zTjhyPSnwBEOEJB1t4unC6eB75DiEmdPMev8IpXbxzEdHZrhB0isms%2BHjd6LBgbNvlblVju666yAeLr%2FK3o%2BXIAyp0FrHsXo9h6Rg4ZNQsqMyrwNLTwAW%2FYSqzuZDbCUNZw4TLVIFyt5e6Py38NzHh4we0kuEQUMMyx8hDw3zQyk8SwJ9%2B234jf&X-Amz-Signature=82b52ce541aa726283d51b2fa073c3bf776676bc5316596b0a6d9cc2fcef3ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
