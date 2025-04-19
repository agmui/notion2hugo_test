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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQRMFY7H%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEa95BJNPkpq2ZlQq%2BhPU1yMH96xahEBAccmzbkzJMAAiAI%2BKV%2FxxUEuCveoAf92paFtcb6xbHTfvRfuUQnJhQsoiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWK08taeSFmVM5XGKtwDSBFPTsdeINFPqhHzjpINLAGcX9Ko4a53AvlpFi%2BKR5zccQiwXS%2BOkHTPMZQqy%2FmR5iI6d%2FDmKhX2LRinsGMSiY31VygbypfYpp05Vb9mi7Ufp5qYmWoh3JZ8j%2Fj0VaLudDHODp%2F55D5Iq9GXbU1wpCsIWtKdQoWfXnlcwj87nO66epj38Gc6Zdayn2ThjfGNdoNzzA%2FhD4hZOzhstnXXcZm0F16ZrDAdF%2F874QstA5%2FVKWm%2FLDReoXIEafS7%2Bm9f%2FvZhpHWT5fmR4az%2BmIVhvMxicNvUrnheMPbJqd%2BQNGRrOqRPe%2B5NlMp7yadIF0g781Y0vHLFWhDvkHAmupvDdtw1p9SkVTfgFxATShJnlUaqI7eKXlJqk9kShMDXVBG9%2B%2BjS8AWHxXJe4Fg8%2FNqAATaLHbjqqRUojim3raaZS89IYnb0d1dP8Cnf6BuMM0%2BcrWCUlfcptkbDp1D5s%2BklxWLwtsMlqLhnXeUeg6dVug5UhcSnLICLiO0aMLt1Z6XpMIi%2FtBtCMfBh1Z8L0MDDyJ1%2FtRMYW60LdLun8AmPR8YzxUaSHtftyrlf49n9iyFVrjtM8prMlRN0XwTLv%2BH4H5ntN9OJRO4lzmSSGNK%2B1reAvXuSpEm3aKppZD8wwtiMwAY6pgHElr8D68BFtAQaex6VwjgVKjLkpCu30S3meia0LwKnGdm8GMy32SZms2TTYCvN7U1Tmzm6VUxPagZYg4sBEZ3gInZV3TYNsiv2KK4%2BcLjiJk%2B9z7Bs6RDHzrbAj89b9lzEljuIGvHmqhsRGUjBDRcwpu4%2FKbliE8CeXwHp3FySRd0krBGZ4BZCXhbbyagVlDrD88YeQmw4jgpRF5ObsOZR0SQz7mJm&X-Amz-Signature=a676859c9229a806423c79c395d29161e1c6c660739e2dced3541b8457ee7c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQRMFY7H%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEa95BJNPkpq2ZlQq%2BhPU1yMH96xahEBAccmzbkzJMAAiAI%2BKV%2FxxUEuCveoAf92paFtcb6xbHTfvRfuUQnJhQsoiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWK08taeSFmVM5XGKtwDSBFPTsdeINFPqhHzjpINLAGcX9Ko4a53AvlpFi%2BKR5zccQiwXS%2BOkHTPMZQqy%2FmR5iI6d%2FDmKhX2LRinsGMSiY31VygbypfYpp05Vb9mi7Ufp5qYmWoh3JZ8j%2Fj0VaLudDHODp%2F55D5Iq9GXbU1wpCsIWtKdQoWfXnlcwj87nO66epj38Gc6Zdayn2ThjfGNdoNzzA%2FhD4hZOzhstnXXcZm0F16ZrDAdF%2F874QstA5%2FVKWm%2FLDReoXIEafS7%2Bm9f%2FvZhpHWT5fmR4az%2BmIVhvMxicNvUrnheMPbJqd%2BQNGRrOqRPe%2B5NlMp7yadIF0g781Y0vHLFWhDvkHAmupvDdtw1p9SkVTfgFxATShJnlUaqI7eKXlJqk9kShMDXVBG9%2B%2BjS8AWHxXJe4Fg8%2FNqAATaLHbjqqRUojim3raaZS89IYnb0d1dP8Cnf6BuMM0%2BcrWCUlfcptkbDp1D5s%2BklxWLwtsMlqLhnXeUeg6dVug5UhcSnLICLiO0aMLt1Z6XpMIi%2FtBtCMfBh1Z8L0MDDyJ1%2FtRMYW60LdLun8AmPR8YzxUaSHtftyrlf49n9iyFVrjtM8prMlRN0XwTLv%2BH4H5ntN9OJRO4lzmSSGNK%2B1reAvXuSpEm3aKppZD8wwtiMwAY6pgHElr8D68BFtAQaex6VwjgVKjLkpCu30S3meia0LwKnGdm8GMy32SZms2TTYCvN7U1Tmzm6VUxPagZYg4sBEZ3gInZV3TYNsiv2KK4%2BcLjiJk%2B9z7Bs6RDHzrbAj89b9lzEljuIGvHmqhsRGUjBDRcwpu4%2FKbliE8CeXwHp3FySRd0krBGZ4BZCXhbbyagVlDrD88YeQmw4jgpRF5ObsOZR0SQz7mJm&X-Amz-Signature=871bec8094b5df4501c8008216ecb084f3a41427c51e125e398ff4ca3f68fffd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
