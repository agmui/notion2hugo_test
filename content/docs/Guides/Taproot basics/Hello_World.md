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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IPYDQRA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClgQEWir83QfwSruIFqf4smyI49zW83rP%2FkJiRVfe0xwIhAJhxyvG%2BJ6oU7IQUn%2Bl0HXZw36rSsrEauntdqyo0uEJbKv8DCFYQABoMNjM3NDIzMTgzODA1Igz3%2Fvj5kF7jwthIk5Eq3AOWPtsmeHzENtdKoDqyP%2FvEBs6TWVc%2BxH%2BZ7NTrdhPh3JUf4eMUQPL3diE8AaqlPysPzj4vbyD1%2B1%2FMMd8bohbpTTAYaWDCKCm4XalxCjmz4b3hulaVcx2pjnL2fQSTD2pbCvhRan%2BFR8fKrvgDBJbYNYpoipQhzGmbw9oSr6ZEbOEGdkGQIm%2Bp7KDpD%2BgA5H9j%2F4XNeW4MwgVm11YbQv7iYMMNZNcDefbhe9El6LCZYXnnRwA6hvbCmqqGS4XZpOuuyvcM2TRFwgzytlymyeF5b0v9LE9E7KK6D3CG4qWvpgBavm1MZ85LW24lcPE8h2sUkpdB5k61uByIIq2ZTBmwvTWbSXLRVeBSXE%2BA%2FaDT8xauynsquLKHBj4slc5Cmsh%2FxyDivWKM0KcNu%2BpsP2S%2BTSjuB1%2FzyztJgWozkMLfNWdJjoCTqDyjWXxjy3YSFonktMbqKAisoQzS6kZhZCuYamuAPwDWV%2B1wV8v6vf3%2B%2F7ruymkTIzKNZk%2B7Kg82JGgOVRPc7Q4GvCfFfmD6rwZf3iIfYItFx2q3ompAVFCeIVoJhSI7ZEHXCSa9M%2FA56e%2FymbvC5lHwtajhbZgI9LUh6k5UxcUzgcIJcwHAu7B9EEqyGNCCAwDQS17RgjCl7bbABjqkAT147J0I1rM4SbgqeSN%2F9osmoI26kBxjQW%2Bk6mwPg8Mp8BbsSTNVXE0lw%2BoR1wjHxI2onaJ%2B8ij1VgfK5mw%2BEi0f9f9dd4M2WhXA%2BnGyaT7zBqOsy8eoMEoE8pC7sRQlN59mBtJ9XsaMxUA3vDeKld5XL%2BxsW61i2Izf56szHSNoaro3LJVTpef3OOTtDkwZWo72aZqrsDKnWcZSPy%2FAgfTr2UXD&X-Amz-Signature=9a81558b996fa1ae461464d54b09c55c8667d3026482345f481b324f7f3098c6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IPYDQRA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClgQEWir83QfwSruIFqf4smyI49zW83rP%2FkJiRVfe0xwIhAJhxyvG%2BJ6oU7IQUn%2Bl0HXZw36rSsrEauntdqyo0uEJbKv8DCFYQABoMNjM3NDIzMTgzODA1Igz3%2Fvj5kF7jwthIk5Eq3AOWPtsmeHzENtdKoDqyP%2FvEBs6TWVc%2BxH%2BZ7NTrdhPh3JUf4eMUQPL3diE8AaqlPysPzj4vbyD1%2B1%2FMMd8bohbpTTAYaWDCKCm4XalxCjmz4b3hulaVcx2pjnL2fQSTD2pbCvhRan%2BFR8fKrvgDBJbYNYpoipQhzGmbw9oSr6ZEbOEGdkGQIm%2Bp7KDpD%2BgA5H9j%2F4XNeW4MwgVm11YbQv7iYMMNZNcDefbhe9El6LCZYXnnRwA6hvbCmqqGS4XZpOuuyvcM2TRFwgzytlymyeF5b0v9LE9E7KK6D3CG4qWvpgBavm1MZ85LW24lcPE8h2sUkpdB5k61uByIIq2ZTBmwvTWbSXLRVeBSXE%2BA%2FaDT8xauynsquLKHBj4slc5Cmsh%2FxyDivWKM0KcNu%2BpsP2S%2BTSjuB1%2FzyztJgWozkMLfNWdJjoCTqDyjWXxjy3YSFonktMbqKAisoQzS6kZhZCuYamuAPwDWV%2B1wV8v6vf3%2B%2F7ruymkTIzKNZk%2B7Kg82JGgOVRPc7Q4GvCfFfmD6rwZf3iIfYItFx2q3ompAVFCeIVoJhSI7ZEHXCSa9M%2FA56e%2FymbvC5lHwtajhbZgI9LUh6k5UxcUzgcIJcwHAu7B9EEqyGNCCAwDQS17RgjCl7bbABjqkAT147J0I1rM4SbgqeSN%2F9osmoI26kBxjQW%2Bk6mwPg8Mp8BbsSTNVXE0lw%2BoR1wjHxI2onaJ%2B8ij1VgfK5mw%2BEi0f9f9dd4M2WhXA%2BnGyaT7zBqOsy8eoMEoE8pC7sRQlN59mBtJ9XsaMxUA3vDeKld5XL%2BxsW61i2Izf56szHSNoaro3LJVTpef3OOTtDkwZWo72aZqrsDKnWcZSPy%2FAgfTr2UXD&X-Amz-Signature=f00a5c472389aa60ec92d352323d6303b80f77e6ccc34504627706f1af91f717&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
