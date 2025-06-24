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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3APQW3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHWBNdI1T5aIbDJBixuOS6lK7gQEROPU579TKgzW6E%2FpAiEA9wYlAnoU5qd8D%2BhiSB8WtwtW%2FlqGj9BRzaFW3S9E3Okq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDA1Gp6dhF2BWlNOi3CrcA8KISrCcMiPYCKJHy5utIa9nSG93lVz6q8PpA3EXgFcOfXrDbYyOo%2B%2Bs4aLJO%2BdRyaVC0UwFYFmF%2FI656H6QCff2R5xkS69Gq26R2f7KZlfS%2BIZjpe13SfPca7rqCA04qlLUQroJjyR%2FS3907SpzEYrY6D8oAV3cBCzbVVW1CiH5xo3kxeCDyYbKMrx2cGncX4Md3Az0EXMXLmwguuNJtlLP4yfYavdvV9RJVnco1B8WU8rShEWdOy9QEpZTFhMt1l6PzgkjvPuNSFscN5m0G0zRWwwRr6USANWZyWPeRMj9nWjxMaMa2V6Ir2pkygcW1QZ%2BM%2F%2FyvrIuOOirjT665nXnMtxYD5SBz0yEao03qql%2FYIm9F%2B%2FUCfOgeF5aO%2Ff0bWGqE9nbk6%2FZU2ZLAqnyIWgKmrHz3%2Bp22wF%2BOJ97%2BeVtzwZlXTGBgREphSmKfj6vcMRm7R7vfcPDmrO4tP2FEyqaZG5u0ILL7Z6EngnF9hnC9dOr%2FJwMuuaOjGy4FxWP1f8OYs9AeL%2BaYqZtDJEIefyrR%2BGRW7Na7gLnJKav6pb4ZUl%2FnSGlFpNsdYU6lWW2k%2BqalHj9GlLGhdeVuR%2FfU%2FAR1NiEPuXuomdL4RDBH6w4AgOu7QqxAhokx%2FkuMOqx6cIGOqUBRNH8%2FW41YKEAGA7BvvPZWFL3MjV9PBsz91LxI%2Bj2eUYQr7%2BcrG3%2BWOfX3p502n6ueAa3ZOAalJdZ7dx%2FUq43AtHAc8aU%2FkgcYVeBC7zVLU%2FIz3HFdRp2vigi3kk37SYHuoycNtsvsTAgGF78ql7RJLeYsW5W6nhRRaFcKRQaUN%2FH7f4v4ipsxhjRzrt03TS%2FxgEnV0qgf5kPyDikuc9urqPEfVJ3&X-Amz-Signature=3293b77511096ba2ec945d15257b59928b9c5dfef5753b9abaf76d82be5bf1c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3APQW3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHWBNdI1T5aIbDJBixuOS6lK7gQEROPU579TKgzW6E%2FpAiEA9wYlAnoU5qd8D%2BhiSB8WtwtW%2FlqGj9BRzaFW3S9E3Okq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDA1Gp6dhF2BWlNOi3CrcA8KISrCcMiPYCKJHy5utIa9nSG93lVz6q8PpA3EXgFcOfXrDbYyOo%2B%2Bs4aLJO%2BdRyaVC0UwFYFmF%2FI656H6QCff2R5xkS69Gq26R2f7KZlfS%2BIZjpe13SfPca7rqCA04qlLUQroJjyR%2FS3907SpzEYrY6D8oAV3cBCzbVVW1CiH5xo3kxeCDyYbKMrx2cGncX4Md3Az0EXMXLmwguuNJtlLP4yfYavdvV9RJVnco1B8WU8rShEWdOy9QEpZTFhMt1l6PzgkjvPuNSFscN5m0G0zRWwwRr6USANWZyWPeRMj9nWjxMaMa2V6Ir2pkygcW1QZ%2BM%2F%2FyvrIuOOirjT665nXnMtxYD5SBz0yEao03qql%2FYIm9F%2B%2FUCfOgeF5aO%2Ff0bWGqE9nbk6%2FZU2ZLAqnyIWgKmrHz3%2Bp22wF%2BOJ97%2BeVtzwZlXTGBgREphSmKfj6vcMRm7R7vfcPDmrO4tP2FEyqaZG5u0ILL7Z6EngnF9hnC9dOr%2FJwMuuaOjGy4FxWP1f8OYs9AeL%2BaYqZtDJEIefyrR%2BGRW7Na7gLnJKav6pb4ZUl%2FnSGlFpNsdYU6lWW2k%2BqalHj9GlLGhdeVuR%2FfU%2FAR1NiEPuXuomdL4RDBH6w4AgOu7QqxAhokx%2FkuMOqx6cIGOqUBRNH8%2FW41YKEAGA7BvvPZWFL3MjV9PBsz91LxI%2Bj2eUYQr7%2BcrG3%2BWOfX3p502n6ueAa3ZOAalJdZ7dx%2FUq43AtHAc8aU%2FkgcYVeBC7zVLU%2FIz3HFdRp2vigi3kk37SYHuoycNtsvsTAgGF78ql7RJLeYsW5W6nhRRaFcKRQaUN%2FH7f4v4ipsxhjRzrt03TS%2FxgEnV0qgf5kPyDikuc9urqPEfVJ3&X-Amz-Signature=2e9b4bbe1df778b37ff7fec5d3b22df66e06f5aba1c1e656f1d261304a2c8311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
