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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRKFKFF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCo7gBKfAaYI4JpWxBtpnU%2F%2BIwCuTXE0W%2B0Xdg8FwvZwIgevOZ6B5iry3cxBse0o1d9P4bF1ayd1d6JSuz3DvqH94q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAMtY%2FxZEqSfWjYuaCrcAz82%2B1nCd5o6tJUsKA2BZjE08hNmTv5vjZ0LmvjNCcFdrgEszefQXu1ur9bJRDO5yA1RmdjXLsadUy5iZt8YZbXAE7LO%2FKMVOoL51vmZ7k19ccsvtkatem5Eag1z3tANHj2a1uAD6uyQD6ASCYhk4CJWr5VLX%2ByTuaXlC4VZIhmwOy1b%2BCBPHFOEXZvzEWNP4qTY1UwRaL6nPSjVb2jnUdAu7jr8bRr9n0Jz4Uha6bfY8m07PYSQHichspEmKtqOzwbaaSjUZP4pCUd2781g8xveDmdLorpzOMIgN6g%2B35L17%2B7Q0MKHPBxyIYW%2FhxsW0ItvAxJ7jcBzLJPeB1RN5R4qWxiCgOiGfFa4xxbNHV7cE%2BJQh6L4ktw%2BId09k0OEc7sBuJoxlN5NK6DCT9N9DtskPd4BZBl1gTJUPwl30aeHEP9OcSSzM%2BzEIAaypnJtoy3rsR0iKno3mYqjLW%2FjXiRxFnTdzAikCijJqfSfNIadY5UnKvAPYi57z7DeqWWamIaVzHCR83t5PGm0aobeKoyp%2FKg6YFe13hF20zuF6zIF2VMzgvtDkGWsxvCz7jGEWdsIowI7VKxmZIeDwPc%2BfwjDclUpEUxziLi%2BNsMiWb6SPZkd1mWhxrOoiJXuMLOE0b8GOqUBss25BnGYXZAAjYmJa95rEi53KGT%2FbU%2FOm%2BzCMVoqmpWGnnb4SenCAMI4KwAoXwrNi93%2B4AD2QW1mCwecrNHuxuDj%2FR63Gk%2FS1fioDHcUiQwgMMa8zqyShZJXvIkm4mVRo%2BzeZAEJx7AK%2B9DmxlTTW1DzLhzJ7tSrJYCW3DCuUvaBwCfUS8zqdp8Z2fpSk0%2BwZ3iGKAUWie5dijnZBl33QqT12UVd&X-Amz-Signature=02cf8d763aab1624b99d66ea26b3bd9102e0ace1b85c71a4d892b800b1c13418&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRKFKFF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCo7gBKfAaYI4JpWxBtpnU%2F%2BIwCuTXE0W%2B0Xdg8FwvZwIgevOZ6B5iry3cxBse0o1d9P4bF1ayd1d6JSuz3DvqH94q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAMtY%2FxZEqSfWjYuaCrcAz82%2B1nCd5o6tJUsKA2BZjE08hNmTv5vjZ0LmvjNCcFdrgEszefQXu1ur9bJRDO5yA1RmdjXLsadUy5iZt8YZbXAE7LO%2FKMVOoL51vmZ7k19ccsvtkatem5Eag1z3tANHj2a1uAD6uyQD6ASCYhk4CJWr5VLX%2ByTuaXlC4VZIhmwOy1b%2BCBPHFOEXZvzEWNP4qTY1UwRaL6nPSjVb2jnUdAu7jr8bRr9n0Jz4Uha6bfY8m07PYSQHichspEmKtqOzwbaaSjUZP4pCUd2781g8xveDmdLorpzOMIgN6g%2B35L17%2B7Q0MKHPBxyIYW%2FhxsW0ItvAxJ7jcBzLJPeB1RN5R4qWxiCgOiGfFa4xxbNHV7cE%2BJQh6L4ktw%2BId09k0OEc7sBuJoxlN5NK6DCT9N9DtskPd4BZBl1gTJUPwl30aeHEP9OcSSzM%2BzEIAaypnJtoy3rsR0iKno3mYqjLW%2FjXiRxFnTdzAikCijJqfSfNIadY5UnKvAPYi57z7DeqWWamIaVzHCR83t5PGm0aobeKoyp%2FKg6YFe13hF20zuF6zIF2VMzgvtDkGWsxvCz7jGEWdsIowI7VKxmZIeDwPc%2BfwjDclUpEUxziLi%2BNsMiWb6SPZkd1mWhxrOoiJXuMLOE0b8GOqUBss25BnGYXZAAjYmJa95rEi53KGT%2FbU%2FOm%2BzCMVoqmpWGnnb4SenCAMI4KwAoXwrNi93%2B4AD2QW1mCwecrNHuxuDj%2FR63Gk%2FS1fioDHcUiQwgMMa8zqyShZJXvIkm4mVRo%2BzeZAEJx7AK%2B9DmxlTTW1DzLhzJ7tSrJYCW3DCuUvaBwCfUS8zqdp8Z2fpSk0%2BwZ3iGKAUWie5dijnZBl33QqT12UVd&X-Amz-Signature=58cbd6eb1c9b0e572381a3866367535b2f80af38078c4d4acab2ab5878bac322&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
