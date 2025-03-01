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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IKQVKT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCID1Fx%2B9s99RY%2Bz0CzHifcXUXFzxPyp9%2FNWdf%2BTQAgUqWAiBqbDUr39kRhfNX38Sn4l8vLp3GktAF6QRPk37qPlqzEyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz2AFBHAg0IFZvZ4nKtwDFE2iONxA%2Fhw82nCprHeflSUZtrVXDaj1%2BvGvUHAzgTvCLoPsrFrnGsTk1M1jH4yeqXvSi3%2FZj1U5L5lR2xbbRWQBPgS0gCIhcc9wqU132YExxnD2FOpB%2BcPglw2hfhPjdKoL0u%2BmTX8n4C4V5zcvLx1iEmBd%2FpNh6VWAvPK%2F3HYOPmiKRLz28v%2BsAZUCnwfNUCbO2GzlTCww9M8d%2FoUCJLtF6w7erU3SGm3yJobz32lHHDSl6w4ZI3F8qATDkxFK1EOM%2FvrNaQC9o4UDmh8CTrDBIVAPUIWZjgMWDxNrcRedIdV6aty3D%2BRsXYWQ76Zl9k3784grZioP5U02Cu%2Fvwtk35d1JY31orh3hq22YZO3LgoPGrZz0sOZ%2B%2FPbu4srhcRzbhiYoqjgR1%2B3Uq6LAG7gvZ9OTE8WyCChymguQ1isgLK5f%2FRU1dmJtf%2F3w2wExeesD7GOb7be2gJX5CE7z3znzKFYQ0Mkcj5HSE%2Fj7FAWZ%2BfyzOidTNMoTrr%2BskK15B75PxQNDR%2FAlc935oX5Ex%2FWEJRqwDt%2FkQQ0pKGEKGkPhZrnv9qwmJeoP2SR7t3%2FQSDIs2WpyhTaw5EPN5sXHcLCwxU6b1J36BAsf%2FE0gMgUcmzzSTJxwsoDO0UMw3K%2BLvgY6pgGYEaMzdC%2FNz6fD5p55oi5r471ny7rFmklj%2FCPido9LgESTK%2BNJPn%2F457jGpHAoXo71Js5dVdxbgs8pZ6ZNwSaJ6Opx5alSkKsCbolI1yZVG5UUy%2BUaLMemibIkTOWA%2FyK%2BcYOOksZwGU4rxblQ377AQewd1gJcG8w0bAh1pHigCsjNS9io5vZc8Fob8H4Ck3P70CuFa29DQRIpcU%2BZ%2B1fOhRSuibNO&X-Amz-Signature=9c966b1680929a9e4bc16ede1b20b6825d74c969ec59f896774044a74866062c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IKQVKT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCID1Fx%2B9s99RY%2Bz0CzHifcXUXFzxPyp9%2FNWdf%2BTQAgUqWAiBqbDUr39kRhfNX38Sn4l8vLp3GktAF6QRPk37qPlqzEyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz2AFBHAg0IFZvZ4nKtwDFE2iONxA%2Fhw82nCprHeflSUZtrVXDaj1%2BvGvUHAzgTvCLoPsrFrnGsTk1M1jH4yeqXvSi3%2FZj1U5L5lR2xbbRWQBPgS0gCIhcc9wqU132YExxnD2FOpB%2BcPglw2hfhPjdKoL0u%2BmTX8n4C4V5zcvLx1iEmBd%2FpNh6VWAvPK%2F3HYOPmiKRLz28v%2BsAZUCnwfNUCbO2GzlTCww9M8d%2FoUCJLtF6w7erU3SGm3yJobz32lHHDSl6w4ZI3F8qATDkxFK1EOM%2FvrNaQC9o4UDmh8CTrDBIVAPUIWZjgMWDxNrcRedIdV6aty3D%2BRsXYWQ76Zl9k3784grZioP5U02Cu%2Fvwtk35d1JY31orh3hq22YZO3LgoPGrZz0sOZ%2B%2FPbu4srhcRzbhiYoqjgR1%2B3Uq6LAG7gvZ9OTE8WyCChymguQ1isgLK5f%2FRU1dmJtf%2F3w2wExeesD7GOb7be2gJX5CE7z3znzKFYQ0Mkcj5HSE%2Fj7FAWZ%2BfyzOidTNMoTrr%2BskK15B75PxQNDR%2FAlc935oX5Ex%2FWEJRqwDt%2FkQQ0pKGEKGkPhZrnv9qwmJeoP2SR7t3%2FQSDIs2WpyhTaw5EPN5sXHcLCwxU6b1J36BAsf%2FE0gMgUcmzzSTJxwsoDO0UMw3K%2BLvgY6pgGYEaMzdC%2FNz6fD5p55oi5r471ny7rFmklj%2FCPido9LgESTK%2BNJPn%2F457jGpHAoXo71Js5dVdxbgs8pZ6ZNwSaJ6Opx5alSkKsCbolI1yZVG5UUy%2BUaLMemibIkTOWA%2FyK%2BcYOOksZwGU4rxblQ377AQewd1gJcG8w0bAh1pHigCsjNS9io5vZc8Fob8H4Ck3P70CuFa29DQRIpcU%2BZ%2B1fOhRSuibNO&X-Amz-Signature=896562bb47ab3ff0aa8ebffc47566983af4b6cd4cff6275a783f766683deb058&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
