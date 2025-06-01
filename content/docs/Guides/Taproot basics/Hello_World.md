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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TMCQ7DU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCe%2FlwYVQmLAyAyKLOcjA36idxSlx%2B7XZ%2FJ%2F9enS1w4aAIgLDSziYLKEuV0nAzd9HeF48cYSz4GMYv5Ln7ZmvgmIlcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICJUHhClvOt%2F4D4TSrcA1H9fHB3TvRh7LyfSZOiD87hxbvY3hdqXFji%2FQV0vd2x637OegI7T16jA%2FYxWmAwJyQGrruMmyPZfNOi0dSZaAYzioIuq1AMjrgumyaKb5SebDFDY1blxubjSbRWe%2B4jzqFqs5UdlWG6qOwvVhNPgphUSJc2MtunNj3rC1e1KV%2BkVmRTjlAuO7F%2Be214Xql69oCAttqd%2FUA4Ast%2F49iJkWC7YgGu3N2SExscerXJ1szfxhtd4eDZmShj6ZjUT1k3p9bmy1IPkGkv%2F7f9xYk6LiUdd9JnhdSOPVOKBe8TEG2fNXKwaeXluiIOyQc6GoqL9YcYWk3nO2olTN7zEED5er1iTjft7vDW2uiVZL52SOIKxz%2BjNm8xWIHjlEs7%2F9Nsfsv%2BLJ%2Fdd4e0I7g%2FD4FwiWn9wGlqwyPmwLNnQYCdrtZaf%2FWgSb8UL8wQjStfJlG97ZWdnXgJ7M%2FkBd4IH3nBXKrjnyQBT7%2BPJzzvKImWhJK3llKUbCuZruDq0sJBQlse9wQoxImHCxtDUm703mQ%2F0tLd3Trt33omESrgraGqRXZtdycQhmL9ysbawPD%2FzevVGuZH1bsE4eHYhRvb1b4AseEWzR%2FHj4qTrGdBqz8KwFjjGuzzu2AGyCkwEq4hMLWU78EGOqUBbbQuTNmioypyg54H21gDAB%2FlELh7M1jQGPOmUw78WnRykODtRPjI4E%2BLa%2BFPBTf4FhzaDwrt6eWcq3t2c7o2bnIJQq1FwvQKGVx8CnyIo8G3WZYBgLifsDhlINCMUZO3uH2XAqN5emuOhIBNOowwSqr1SpWAa6Xa0IUtpgKX0L4SDhbfj%2Fw3mOLkTFYExkJZ5EPS0Fgi%2FVSXA%2F1D7NnNshefEogR&X-Amz-Signature=a8cc62d719f0c3c445c629c44163f473dbc5fe7a50b2a40f2c9749136effd77d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TMCQ7DU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCe%2FlwYVQmLAyAyKLOcjA36idxSlx%2B7XZ%2FJ%2F9enS1w4aAIgLDSziYLKEuV0nAzd9HeF48cYSz4GMYv5Ln7ZmvgmIlcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICJUHhClvOt%2F4D4TSrcA1H9fHB3TvRh7LyfSZOiD87hxbvY3hdqXFji%2FQV0vd2x637OegI7T16jA%2FYxWmAwJyQGrruMmyPZfNOi0dSZaAYzioIuq1AMjrgumyaKb5SebDFDY1blxubjSbRWe%2B4jzqFqs5UdlWG6qOwvVhNPgphUSJc2MtunNj3rC1e1KV%2BkVmRTjlAuO7F%2Be214Xql69oCAttqd%2FUA4Ast%2F49iJkWC7YgGu3N2SExscerXJ1szfxhtd4eDZmShj6ZjUT1k3p9bmy1IPkGkv%2F7f9xYk6LiUdd9JnhdSOPVOKBe8TEG2fNXKwaeXluiIOyQc6GoqL9YcYWk3nO2olTN7zEED5er1iTjft7vDW2uiVZL52SOIKxz%2BjNm8xWIHjlEs7%2F9Nsfsv%2BLJ%2Fdd4e0I7g%2FD4FwiWn9wGlqwyPmwLNnQYCdrtZaf%2FWgSb8UL8wQjStfJlG97ZWdnXgJ7M%2FkBd4IH3nBXKrjnyQBT7%2BPJzzvKImWhJK3llKUbCuZruDq0sJBQlse9wQoxImHCxtDUm703mQ%2F0tLd3Trt33omESrgraGqRXZtdycQhmL9ysbawPD%2FzevVGuZH1bsE4eHYhRvb1b4AseEWzR%2FHj4qTrGdBqz8KwFjjGuzzu2AGyCkwEq4hMLWU78EGOqUBbbQuTNmioypyg54H21gDAB%2FlELh7M1jQGPOmUw78WnRykODtRPjI4E%2BLa%2BFPBTf4FhzaDwrt6eWcq3t2c7o2bnIJQq1FwvQKGVx8CnyIo8G3WZYBgLifsDhlINCMUZO3uH2XAqN5emuOhIBNOowwSqr1SpWAa6Xa0IUtpgKX0L4SDhbfj%2Fw3mOLkTFYExkJZ5EPS0Fgi%2FVSXA%2F1D7NnNshefEogR&X-Amz-Signature=3db9e02596581ad9d8fab5a32dbe2d68186040db9f274c24f9e34a5fbbcdb0da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
