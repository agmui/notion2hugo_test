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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7AVTBES%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKHh2hR4EWISevTSmdm1RHS6svhfYwCZw0JIah5EoHigIhAODr34XSGyxu4MRWEdzaPkmYulZ%2FG4Lo%2F72lMUTU3v3jKv8DCEwQABoMNjM3NDIzMTgzODA1IgxAR%2Btx1z1s9ewd204q3AOXl0KpLBLqJdgqmWRQOmrUjeda6qeDKaEpkAyY9z0AcEZZU5sVjW4zdUUvIItuXXGkxRipXwC1sENR%2BtC%2FwgNd0cObsyUidWDQd6EIs2XSu%2FJYK5cVnMLZu50Pd1wWicg1tGrpz2cVtCz2wgg7%2BUEjBWMDBw4YuxaNLKt2JnrbAtyr9OP7SwZ7Gw3lvIfUliST1M2FrlQ9MnGzLcAnXthEsEIODfShcXpt5cb0nJhH3RIFQFGcTeGM8oQYiyby8VTj2lzpfXjGy0IOewT3g4lATCHGhQ3vj9vIuBzUJ9zEWWskDVcbNv%2FbJM04fJYNmpLjMGwjOAD5u%2FrTwq3AeO4iOFpy3XjK%2BqDvIf%2BLLV8hqsptZx2qQOpVTjm86ApXIxk75n6zRfoCdDHLq050poXc3KgmGFT9nbGdLY4XCZ2uXLoxAx5ma7D5rg7O9Bs3isyuqE5ORx8%2BgyjFnYGrU21VVayx4qv2QXW0UR8klShvh%2Bz3w0yZfgjYj7QPZMufloTcfs4DwDhdOjkd%2BSc9K8wXpkgz1kCJnuURE4ivaljmyg1SLNmcosFukCiLhY%2BdP7zqeQjk1cXhvS57%2BRNcbmYnosnaeHzuN3R4%2F7KYTF%2BZuEgpuTXOBtWYBdABGjCYtOnABjqkAY%2BT5aHYKJOX0zkO27GA%2FCwT8g6imGz%2FnFnL7EKwzQZ%2B1SCXNKY82hGts44F0une4Dv%2BZXfSBfVnekVQnBivBowiP2IF7wAUSTQeh36O9QQNXG18Li6VbJQjIeHJAcO2xVhYkJIdLnVZdeLzWqheKvWMY8LF%2FmTBtfhiVi8Zi2WZgitHmNyqeFa3jwtQCo%2FYvJ8EI2lcH%2FIORTgMB7nPA6pzqODA&X-Amz-Signature=538d77be237e2d4ce8b5556432db030c2a952a39d8d559a52f0f5c6862efa932&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7AVTBES%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKHh2hR4EWISevTSmdm1RHS6svhfYwCZw0JIah5EoHigIhAODr34XSGyxu4MRWEdzaPkmYulZ%2FG4Lo%2F72lMUTU3v3jKv8DCEwQABoMNjM3NDIzMTgzODA1IgxAR%2Btx1z1s9ewd204q3AOXl0KpLBLqJdgqmWRQOmrUjeda6qeDKaEpkAyY9z0AcEZZU5sVjW4zdUUvIItuXXGkxRipXwC1sENR%2BtC%2FwgNd0cObsyUidWDQd6EIs2XSu%2FJYK5cVnMLZu50Pd1wWicg1tGrpz2cVtCz2wgg7%2BUEjBWMDBw4YuxaNLKt2JnrbAtyr9OP7SwZ7Gw3lvIfUliST1M2FrlQ9MnGzLcAnXthEsEIODfShcXpt5cb0nJhH3RIFQFGcTeGM8oQYiyby8VTj2lzpfXjGy0IOewT3g4lATCHGhQ3vj9vIuBzUJ9zEWWskDVcbNv%2FbJM04fJYNmpLjMGwjOAD5u%2FrTwq3AeO4iOFpy3XjK%2BqDvIf%2BLLV8hqsptZx2qQOpVTjm86ApXIxk75n6zRfoCdDHLq050poXc3KgmGFT9nbGdLY4XCZ2uXLoxAx5ma7D5rg7O9Bs3isyuqE5ORx8%2BgyjFnYGrU21VVayx4qv2QXW0UR8klShvh%2Bz3w0yZfgjYj7QPZMufloTcfs4DwDhdOjkd%2BSc9K8wXpkgz1kCJnuURE4ivaljmyg1SLNmcosFukCiLhY%2BdP7zqeQjk1cXhvS57%2BRNcbmYnosnaeHzuN3R4%2F7KYTF%2BZuEgpuTXOBtWYBdABGjCYtOnABjqkAY%2BT5aHYKJOX0zkO27GA%2FCwT8g6imGz%2FnFnL7EKwzQZ%2B1SCXNKY82hGts44F0une4Dv%2BZXfSBfVnekVQnBivBowiP2IF7wAUSTQeh36O9QQNXG18Li6VbJQjIeHJAcO2xVhYkJIdLnVZdeLzWqheKvWMY8LF%2FmTBtfhiVi8Zi2WZgitHmNyqeFa3jwtQCo%2FYvJ8EI2lcH%2FIORTgMB7nPA6pzqODA&X-Amz-Signature=d5d19c9573881f7996f51b4ea749c6a6067a488f0ce87b24ba6644bce107217f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
