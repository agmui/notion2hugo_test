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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BFACHZJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCVHR6SVUovm%2FcG%2B2n%2F7LH9pmUU8lOuC%2FStY0ic8H2cCAIgJgNfeaX%2FnLDTyCD4UssIO6atgoS%2BIXpo3KGzjdF77MIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDoED%2BbWkevs374GvSrcA%2BnSrvnPPMcw9jzToEQXHwboK%2BoBM3ZAkBHjMJi%2Fv1Y6O9FbUKYWZbR6h6PxNiXmaDZxvEpIw1hRpXj8c%2FTMWE3hpyDWgeOdDmYFtAm%2BgNTxOaPOFRXU8LNvf5Nqi0sAWgVe5lPw0RUqS6T23AxBdtW8ODt14namkKT1lPVuyZLlbPAWUjMbfT5Qji4KqJbkmjI3QIIhm1tQhS6h%2F%2BO94KYeSt5COqzfuj2fBk9%2BAvhiLa2wssGoEfGGZu1h7wYNSWOsJ%2FaE54DHyEWjPZCyZhb%2F%2BZD0SrrDlH6WkFmja7xSi4PLc661RoyKx%2Bjs6xfNkcJnmO%2BfdAYAMU5t%2FLoahueC6ZEFlXX2vWteYbXMFGD9A8tXku%2Bdl5lB%2FLLpKy8PgGEDqqz%2Bh6m8De%2BIb5j6Bt0tdPWhJAf2F%2B%2FlRkQ53qi5hMVTIdo0ZbK%2FUKdm%2BTU39N5GetjCLk7KJIbMFkLsQGdN5M9z%2FzZj9%2FbreabS%2FuGJ70eBARoRwJ46qSFps3rdw2HjF2GmiODG4QiO76JiU0Hvij6QBvp6rzGfQtXQYrh6oWRE28f19zFc5y%2FSe46JJZ%2FCQ00%2BzUStH7pTyVwG2DXyix95IAf6RJVSnXbr7Elz2Nh9%2Fhunfz4LsEj1MKfEmMEGOqUBxKCdIU1gcdCnLsZKr0CXhkIwO0GBfsU5%2B9SdvNfsZ10%2Bd4JKqBOxR24wFO4FaC%2B26P5foETucBMyk0KDmWlwEgN1fmeZJFECA8dyEzPudUj9e0ePfOUpdrZKJfSRIQEg0Uh0O1tsJFtI5LqCW8CBhaAEJAYKmzxRUqKHB7lL7mCmxa4rZpawSfCpaEGXdjqYP%2FK1hprk%2Bs6YmUo7z9Bm7rHrJSgQ&X-Amz-Signature=7d6165949ade9db05b5cf36e1b492b039762b243482df99aa97c90bcd5944271&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BFACHZJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCVHR6SVUovm%2FcG%2B2n%2F7LH9pmUU8lOuC%2FStY0ic8H2cCAIgJgNfeaX%2FnLDTyCD4UssIO6atgoS%2BIXpo3KGzjdF77MIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDoED%2BbWkevs374GvSrcA%2BnSrvnPPMcw9jzToEQXHwboK%2BoBM3ZAkBHjMJi%2Fv1Y6O9FbUKYWZbR6h6PxNiXmaDZxvEpIw1hRpXj8c%2FTMWE3hpyDWgeOdDmYFtAm%2BgNTxOaPOFRXU8LNvf5Nqi0sAWgVe5lPw0RUqS6T23AxBdtW8ODt14namkKT1lPVuyZLlbPAWUjMbfT5Qji4KqJbkmjI3QIIhm1tQhS6h%2F%2BO94KYeSt5COqzfuj2fBk9%2BAvhiLa2wssGoEfGGZu1h7wYNSWOsJ%2FaE54DHyEWjPZCyZhb%2F%2BZD0SrrDlH6WkFmja7xSi4PLc661RoyKx%2Bjs6xfNkcJnmO%2BfdAYAMU5t%2FLoahueC6ZEFlXX2vWteYbXMFGD9A8tXku%2Bdl5lB%2FLLpKy8PgGEDqqz%2Bh6m8De%2BIb5j6Bt0tdPWhJAf2F%2B%2FlRkQ53qi5hMVTIdo0ZbK%2FUKdm%2BTU39N5GetjCLk7KJIbMFkLsQGdN5M9z%2FzZj9%2FbreabS%2FuGJ70eBARoRwJ46qSFps3rdw2HjF2GmiODG4QiO76JiU0Hvij6QBvp6rzGfQtXQYrh6oWRE28f19zFc5y%2FSe46JJZ%2FCQ00%2BzUStH7pTyVwG2DXyix95IAf6RJVSnXbr7Elz2Nh9%2Fhunfz4LsEj1MKfEmMEGOqUBxKCdIU1gcdCnLsZKr0CXhkIwO0GBfsU5%2B9SdvNfsZ10%2Bd4JKqBOxR24wFO4FaC%2B26P5foETucBMyk0KDmWlwEgN1fmeZJFECA8dyEzPudUj9e0ePfOUpdrZKJfSRIQEg0Uh0O1tsJFtI5LqCW8CBhaAEJAYKmzxRUqKHB7lL7mCmxa4rZpawSfCpaEGXdjqYP%2FK1hprk%2Bs6YmUo7z9Bm7rHrJSgQ&X-Amz-Signature=29e5fed82052bf416282fd6639d5f1d7048aedac80bd88d977eb15cb285941c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
