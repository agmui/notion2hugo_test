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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SEUH6S5%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKwvv0oicbBwCv5n5h8Pl%2FFkOOhJlVAQ8IcdzRRoncQIhAKSV5jO3sSqUlJHLLTNwIjs0aC79sg3FYerVVKQ1F8HYKv8DCFUQABoMNjM3NDIzMTgzODA1IgwaTBKMZmbJ8850b9wq3ANxGKsoSXAjpmoJQebe13mPz4%2B0gsrR7sdkT4xdPWMJqXLzNXurZnNduEZtb3UJ9CeSSJOSXLa%2BO2rhs87vFTk8YQqAOYkmfL1vHrNxYzEDb1n4cIcpA7FNE5ISarv658Pc6%2Bhp7FGGEXrb1VLeQkRt%2Bwu6nmuT%2Fhyk7zZwWeCIxrjHLXmdZd5QWCniJwDI%2BeibUlZZNsBgPQ0ZELWNi9KetSqOhSuPNLVKkSdxivfndpN2qsOmJxXYP7rsR75Zetg7AelNqL9GsKgwLYd0QNiSsaBYykP2uLpwWFyJebxoIEI54iOBLQ1E07ospX6i9OPHChSYUMizC2HRmVOsXDoBgVZ7kdvmFNUDWlJDRwIwHQx7X61BdhOq5gPD%2BNlAlzGJ%2BLb4i4cBx9KY1Ib1%2BQngO9eGuQ7jwlnEzMV8MOX9WFf6ZDA64fLkAULG8AYbBdSeeophplp2hSuuE%2Fi3o7KPkC2A387uw6gcBWtC9ymrJFegn8O2hTwiHfdb7Hn6L7%2FVXsUxBsQCFfE8ceDNNgJDGqxLeDFPK30LOM3ev7ijyb59ODh4OX5kA3Q%2FtUnXVRwEZY2Ya1eMdMDLcT6Gw1wDAyUzxryh7%2BP5SfDDfIvIyBf%2BZDe5Izb5KqMvRDCGsJi%2FBjqkATrsSqp61ChphdsuDC%2F4ZXn7aAI%2BCuWCei7N5poqz%2BMa4pl5ugG%2Bojw6ZvihCzXi%2B5Yf24CCXcs0Bk9oN1Gtak86m8qFiijI2wMbpwxxX3VZJlHgcfKv61ZaBmLqPbJ9KS1tSBZapFlkbmES7CE2RuE0lNkmBqmndo4Xf0BbuWmjzp1%2FtcuJeK8kmFUGqHtw8Yih9Xl6OCHZ0LmidAcv0Op2W7oU&X-Amz-Signature=81448c071c4f8274892480efd8d3e249f7f147cd0c2bf11f60029804ebe1805b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SEUH6S5%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKwvv0oicbBwCv5n5h8Pl%2FFkOOhJlVAQ8IcdzRRoncQIhAKSV5jO3sSqUlJHLLTNwIjs0aC79sg3FYerVVKQ1F8HYKv8DCFUQABoMNjM3NDIzMTgzODA1IgwaTBKMZmbJ8850b9wq3ANxGKsoSXAjpmoJQebe13mPz4%2B0gsrR7sdkT4xdPWMJqXLzNXurZnNduEZtb3UJ9CeSSJOSXLa%2BO2rhs87vFTk8YQqAOYkmfL1vHrNxYzEDb1n4cIcpA7FNE5ISarv658Pc6%2Bhp7FGGEXrb1VLeQkRt%2Bwu6nmuT%2Fhyk7zZwWeCIxrjHLXmdZd5QWCniJwDI%2BeibUlZZNsBgPQ0ZELWNi9KetSqOhSuPNLVKkSdxivfndpN2qsOmJxXYP7rsR75Zetg7AelNqL9GsKgwLYd0QNiSsaBYykP2uLpwWFyJebxoIEI54iOBLQ1E07ospX6i9OPHChSYUMizC2HRmVOsXDoBgVZ7kdvmFNUDWlJDRwIwHQx7X61BdhOq5gPD%2BNlAlzGJ%2BLb4i4cBx9KY1Ib1%2BQngO9eGuQ7jwlnEzMV8MOX9WFf6ZDA64fLkAULG8AYbBdSeeophplp2hSuuE%2Fi3o7KPkC2A387uw6gcBWtC9ymrJFegn8O2hTwiHfdb7Hn6L7%2FVXsUxBsQCFfE8ceDNNgJDGqxLeDFPK30LOM3ev7ijyb59ODh4OX5kA3Q%2FtUnXVRwEZY2Ya1eMdMDLcT6Gw1wDAyUzxryh7%2BP5SfDDfIvIyBf%2BZDe5Izb5KqMvRDCGsJi%2FBjqkATrsSqp61ChphdsuDC%2F4ZXn7aAI%2BCuWCei7N5poqz%2BMa4pl5ugG%2Bojw6ZvihCzXi%2B5Yf24CCXcs0Bk9oN1Gtak86m8qFiijI2wMbpwxxX3VZJlHgcfKv61ZaBmLqPbJ9KS1tSBZapFlkbmES7CE2RuE0lNkmBqmndo4Xf0BbuWmjzp1%2FtcuJeK8kmFUGqHtw8Yih9Xl6OCHZ0LmidAcv0Op2W7oU&X-Amz-Signature=4b662457d9614b21a17280fb69be58e5fd0e79653fd9e0b1e5fe4d55c72658b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
