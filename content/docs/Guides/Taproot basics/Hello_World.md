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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAUYDNVX%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHlYiaeLTznP%2Bn%2BQqZpRKsiLoOa19l6%2F1HnTncu1MB7LAiEAgOpESOSJTbyWy8wYiiSyVEpaiD6LFBVlfW6TvKbn9egq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDBSCDBfNJ5IgrID2ircA1S0AVRVx3v7lVsgKvyQNChzsZhOagCUoZ3ZjeWkaCYTRqai6qNq7oUaN5jdNvZTAoej5h%2FdPRj6mCXqHFTHvnSu%2Bj9G8WREQKY21f47El5aylRcZ9UV2NAj1My3kUQVyWvkJ4A1wh43hZ1m1CxBbI6nFohMr8x3hD5HJkdISqoZSU6CpDfQ0E4FNAYmmmgh9fU7JvePBqv9rTQ8kyeogdhd52HIYiEESQicZzVjajSK5x360ec5M67X2Z7MmKbeiK7nquJLA7v5bu56jb13rOthtjS9CB6dtSwedfdo96ybRcGi%2FIMz0bOnG4P53Yfc7hU%2BMUrs37EL0chimrRdW3tyokEVCrQlYWm4CxFz5SvHYFnYr7JK%2BJ2%2B53vESY56gOqQiUgJuFPWwLt%2ButcDEK%2FpzXUiLApMN47I1r5pxkJ2QfOXfpfgGvvHtev9f7zl%2FHQoFuPuZ50%2BRI%2Fa6UbP5wOmp0huScviH96Qd55bkgsM37jman4SNGAGYUVtRMdWatOg%2F2DOER%2B1pJ6Hi87HAEyGsWYo3Q2%2F1l3ZYHH8BiQ9qeDYPJZTeaxRJJ7oGhR7oP0iEGCenr07sLZ%2FrRXdxH6PnGnPWcDvqeMJ4d2mP6WnlPKJpuLJewtURisMMPySy8EGOqUBdf0hpDEfS2AQ4Mi0dXYTGLuaNezKQEHipoZdZP6MEgaKAefCvzBtl0YyOxCw4TgCy4iY%2F8T96Gwt1YrOgrBqqwvFySZUe%2BK%2BN%2BPKMYvbFLhCrYfWxoIC0yNzyeHCgxSm4esKvGevlajxjZGLZf89K%2BGRTmZQvT5oOB0bFjcETpb3Ae0pfiTnwI4dPRElEWyoPp7OSGiwyAgy4%2F23fWGgwnq69RcI&X-Amz-Signature=b43ed2c370f63d37e0ea9c87130a04a47cb56a0ed795318e8bb064786a11267b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAUYDNVX%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHlYiaeLTznP%2Bn%2BQqZpRKsiLoOa19l6%2F1HnTncu1MB7LAiEAgOpESOSJTbyWy8wYiiSyVEpaiD6LFBVlfW6TvKbn9egq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDBSCDBfNJ5IgrID2ircA1S0AVRVx3v7lVsgKvyQNChzsZhOagCUoZ3ZjeWkaCYTRqai6qNq7oUaN5jdNvZTAoej5h%2FdPRj6mCXqHFTHvnSu%2Bj9G8WREQKY21f47El5aylRcZ9UV2NAj1My3kUQVyWvkJ4A1wh43hZ1m1CxBbI6nFohMr8x3hD5HJkdISqoZSU6CpDfQ0E4FNAYmmmgh9fU7JvePBqv9rTQ8kyeogdhd52HIYiEESQicZzVjajSK5x360ec5M67X2Z7MmKbeiK7nquJLA7v5bu56jb13rOthtjS9CB6dtSwedfdo96ybRcGi%2FIMz0bOnG4P53Yfc7hU%2BMUrs37EL0chimrRdW3tyokEVCrQlYWm4CxFz5SvHYFnYr7JK%2BJ2%2B53vESY56gOqQiUgJuFPWwLt%2ButcDEK%2FpzXUiLApMN47I1r5pxkJ2QfOXfpfgGvvHtev9f7zl%2FHQoFuPuZ50%2BRI%2Fa6UbP5wOmp0huScviH96Qd55bkgsM37jman4SNGAGYUVtRMdWatOg%2F2DOER%2B1pJ6Hi87HAEyGsWYo3Q2%2F1l3ZYHH8BiQ9qeDYPJZTeaxRJJ7oGhR7oP0iEGCenr07sLZ%2FrRXdxH6PnGnPWcDvqeMJ4d2mP6WnlPKJpuLJewtURisMMPySy8EGOqUBdf0hpDEfS2AQ4Mi0dXYTGLuaNezKQEHipoZdZP6MEgaKAefCvzBtl0YyOxCw4TgCy4iY%2F8T96Gwt1YrOgrBqqwvFySZUe%2BK%2BN%2BPKMYvbFLhCrYfWxoIC0yNzyeHCgxSm4esKvGevlajxjZGLZf89K%2BGRTmZQvT5oOB0bFjcETpb3Ae0pfiTnwI4dPRElEWyoPp7OSGiwyAgy4%2F23fWGgwnq69RcI&X-Amz-Signature=e748cd80b625be3897b26d81d274596b56c443f4a6b19eab2120d8801181ae57&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
