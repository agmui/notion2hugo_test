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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ZKPBYC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIB877dvxLdL9tRWQgewrHIOXKsOz7TmNSUk8lyGwI1j5AiEAxi44uVCDAywn%2Bs%2FzFeuvI5OmZzle4ssjMehNG3wxu54q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDE958UNanoGQMMDrPCrcA%2BA6CPpgveiUORJ1822AWQXJsPEecI39%2BfA6m27Sd2hDmhJ%2F4h42vLQDXsRWyFwQi3BfKe8d1tKDD37z2cYSIsojtUP1pSxV384cd%2FdQ%2FoXlphT%2BJLHRJ4dZiBqfK0RD%2BzyvTW2hUt1qYelpUfwKzMkTetL5jnDnTeaHEnQ8J8XB3CBilDxrpp9wSFCdjQN4h0Z931iBd4QvmjqHMPdGR8h6gC7IcpVGj1kiR2WgH8v9%2BUOIOPcwmyilULzgKJHWGfHnitmchYJUeKW5PtmwNP5o9P64AQKnW0xpkaE0h3QgJa1mvTPmbU3j2gd1w3EMRZ4kk288h2ijAPI0hLRlyt%2BuYYANgOMd7KvfqI0hrgS%2Ffwt2ivjxb1yuXUqnw0s3NJmnnZ9fep2MnZlq%2FgLjMUPp3qYJ%2FJ0XM%2BGHe5Mrfbt30haaHNQCbvnfoJJeUlnCwAYr%2FiEhxFgHm8ol1l1NywiOeQx70iTujLuLEetO6kUftc2xiMDXAuwNI68eDMmhQwOH5eFEVrn2B31LeqNsWHs8TI109A6kkGLqVjvFgUFHVixL4aVJ3bDuuthjEURd9XAxUgI7jS2YPZPC0Bjg5D6t7LjcbbB6yb5IwvvVG2Yn8PfMFWoZPT16IkP0MPa7jr0GOqUBf9P3XAsmd4T8Np%2FhHeOyhnEQgeWnqybKPx2BXhd6ao%2BfPBmYY2JcofiC3ZGEdubUxpcT9E6M%2BO%2BQjynysMkrYSEdiTmYdS2TvGvHOIXQ%2Ff0cNntzdZzGJoTvv7Z8bUHhkPqRdBsDbnyOE1ICpg30y%2FqRVwyOAwHYQ6a8EjvRQtvcO8hbvebkXOAzKOcdYnTl8gWqkJFnjdYsH9iWAmPwNvwhKjyy&X-Amz-Signature=27bdc00190d071b4f525140789f4a6f44d35a488f0f81ea2cdcb0172a48217a1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ZKPBYC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIB877dvxLdL9tRWQgewrHIOXKsOz7TmNSUk8lyGwI1j5AiEAxi44uVCDAywn%2Bs%2FzFeuvI5OmZzle4ssjMehNG3wxu54q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDE958UNanoGQMMDrPCrcA%2BA6CPpgveiUORJ1822AWQXJsPEecI39%2BfA6m27Sd2hDmhJ%2F4h42vLQDXsRWyFwQi3BfKe8d1tKDD37z2cYSIsojtUP1pSxV384cd%2FdQ%2FoXlphT%2BJLHRJ4dZiBqfK0RD%2BzyvTW2hUt1qYelpUfwKzMkTetL5jnDnTeaHEnQ8J8XB3CBilDxrpp9wSFCdjQN4h0Z931iBd4QvmjqHMPdGR8h6gC7IcpVGj1kiR2WgH8v9%2BUOIOPcwmyilULzgKJHWGfHnitmchYJUeKW5PtmwNP5o9P64AQKnW0xpkaE0h3QgJa1mvTPmbU3j2gd1w3EMRZ4kk288h2ijAPI0hLRlyt%2BuYYANgOMd7KvfqI0hrgS%2Ffwt2ivjxb1yuXUqnw0s3NJmnnZ9fep2MnZlq%2FgLjMUPp3qYJ%2FJ0XM%2BGHe5Mrfbt30haaHNQCbvnfoJJeUlnCwAYr%2FiEhxFgHm8ol1l1NywiOeQx70iTujLuLEetO6kUftc2xiMDXAuwNI68eDMmhQwOH5eFEVrn2B31LeqNsWHs8TI109A6kkGLqVjvFgUFHVixL4aVJ3bDuuthjEURd9XAxUgI7jS2YPZPC0Bjg5D6t7LjcbbB6yb5IwvvVG2Yn8PfMFWoZPT16IkP0MPa7jr0GOqUBf9P3XAsmd4T8Np%2FhHeOyhnEQgeWnqybKPx2BXhd6ao%2BfPBmYY2JcofiC3ZGEdubUxpcT9E6M%2BO%2BQjynysMkrYSEdiTmYdS2TvGvHOIXQ%2Ff0cNntzdZzGJoTvv7Z8bUHhkPqRdBsDbnyOE1ICpg30y%2FqRVwyOAwHYQ6a8EjvRQtvcO8hbvebkXOAzKOcdYnTl8gWqkJFnjdYsH9iWAmPwNvwhKjyy&X-Amz-Signature=7f643308f4c72c7e4947440aaaf39fe686016a449ea082546fdd251cc511c377&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
