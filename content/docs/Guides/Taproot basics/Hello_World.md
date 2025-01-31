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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEARNMWZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH4VD6QefORkEajxQ8RpjW%2BSpnQ2%2FXWlXct1wz%2FaNexgIhALpdT%2FP52s5O%2FDbs7UCXbBuQ5Arca0G76bfzey%2FX%2FVspKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd2X%2F55Km%2F4yQE7bMq3APAoa6I2Tb16ouTYLveOeTJGMgSb2G9mduBJNLdrrK4oAH5S6Kc84Bly0YONDxjSL6ugDPWhy5odQVbvs3cZ2U%2F3%2FCUjeV%2FSxnRLaReRbCmJ1t5gspQTu9%2Bqc9h4%2B1BmYGycaXsl9kCT1mcFvSMVnzevB0ehAlkhYoIFYEYNWGOS%2FXXMxLHg59B1sBt2FnPxs8DDGCgv3hjFrQs1mFLfsmgMdL3eKqWceAWapIc9qBWMoco%2BT1MbsH%2FqXAssfoF4tOHVtBknoqBmnZP4DJ7k5ACk7R1GKrqSUubVhhXlJK2k0X3MGdr1BD880fB%2B6Hud%2B%2FxZq0hwMB4WIpOUTBumnu8ayb6jJb7cwbayrFd0mXjcTiOii2uTYc19l6UNr8EJwZPlmeNIFqEqXupY8fvw5Iewr6PJXPIDOjPuKq2vDTaEmI5LB9VylTYxY3W%2FR8EMDLch0PttygPvc3EdzaNhjs4IBT6%2F72OTLWGMJvKccUW08HIomwGeNLTRuf75wHdewIOj90ZK55qmzDMlQd0deVXdiqQPTHZcdNZh7pgbZKFldeBhzdbv0vUn4W%2F7bjvNftUxMJpEYk%2BVAjJJH5PmE%2Fy3ETMY23e2ypoen3ZbtGzC%2FtCRP4mBhd1%2BA0PDzDGyvO8BjqkAZAZm2YO7uMHy4QZyecVO4EAxwzkSf2A4kj3ySsdguf5VVBqZkIE%2Fp3K6aXHPhtEkxnWYLGrQzpjTN1vd1teU7ta9HB8yqV9Lz3xbETFhhnVLo3zb8XedaCxZkFIV8hlhd1zhndYsKIbw9j%2BPRxPZ7vB2XhP4IrFoZIlE00SQTZZtOFmjkUZtJ5iLzl75LaY3t37nQeto6bp3xFDK5rJplxsCmYo&X-Amz-Signature=06c5e9d4df5a898c747a5185570eb74e0bf56fb124b31945a76161f097187b24&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEARNMWZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH4VD6QefORkEajxQ8RpjW%2BSpnQ2%2FXWlXct1wz%2FaNexgIhALpdT%2FP52s5O%2FDbs7UCXbBuQ5Arca0G76bfzey%2FX%2FVspKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd2X%2F55Km%2F4yQE7bMq3APAoa6I2Tb16ouTYLveOeTJGMgSb2G9mduBJNLdrrK4oAH5S6Kc84Bly0YONDxjSL6ugDPWhy5odQVbvs3cZ2U%2F3%2FCUjeV%2FSxnRLaReRbCmJ1t5gspQTu9%2Bqc9h4%2B1BmYGycaXsl9kCT1mcFvSMVnzevB0ehAlkhYoIFYEYNWGOS%2FXXMxLHg59B1sBt2FnPxs8DDGCgv3hjFrQs1mFLfsmgMdL3eKqWceAWapIc9qBWMoco%2BT1MbsH%2FqXAssfoF4tOHVtBknoqBmnZP4DJ7k5ACk7R1GKrqSUubVhhXlJK2k0X3MGdr1BD880fB%2B6Hud%2B%2FxZq0hwMB4WIpOUTBumnu8ayb6jJb7cwbayrFd0mXjcTiOii2uTYc19l6UNr8EJwZPlmeNIFqEqXupY8fvw5Iewr6PJXPIDOjPuKq2vDTaEmI5LB9VylTYxY3W%2FR8EMDLch0PttygPvc3EdzaNhjs4IBT6%2F72OTLWGMJvKccUW08HIomwGeNLTRuf75wHdewIOj90ZK55qmzDMlQd0deVXdiqQPTHZcdNZh7pgbZKFldeBhzdbv0vUn4W%2F7bjvNftUxMJpEYk%2BVAjJJH5PmE%2Fy3ETMY23e2ypoen3ZbtGzC%2FtCRP4mBhd1%2BA0PDzDGyvO8BjqkAZAZm2YO7uMHy4QZyecVO4EAxwzkSf2A4kj3ySsdguf5VVBqZkIE%2Fp3K6aXHPhtEkxnWYLGrQzpjTN1vd1teU7ta9HB8yqV9Lz3xbETFhhnVLo3zb8XedaCxZkFIV8hlhd1zhndYsKIbw9j%2BPRxPZ7vB2XhP4IrFoZIlE00SQTZZtOFmjkUZtJ5iLzl75LaY3t37nQeto6bp3xFDK5rJplxsCmYo&X-Amz-Signature=d3b8c758ee4421b56690fb7034a66bc8ade7f02f7c5be37e686830a405e1e357&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
