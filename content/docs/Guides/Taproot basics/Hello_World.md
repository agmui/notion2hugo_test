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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWEQ53BK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCa6Hlt2%2FzxDUoa1PJiNHZ03JSdWv4v0qBYnQ9oB%2F2NTQIhAJ9E8tUiui8thqxAUXrKb1CWJAc5zv0N6sl260b%2BzwxMKv8DCDwQABoMNjM3NDIzMTgzODA1IgxO%2BqIpoNuxPJSr5Ucq3APFi4XOhyvn3CK9dSYDJil%2FEfz5GqToDEqmrSRNIDN5XSueQaF6Di%2BaJ9CIDZIitHi%2BcAVgfl4Xco0OTFs3QR6EUbh5blxtRjqsZd38sXzRK85zMk7YKNtmUcxJvjlenJbYjjHZy1dbt4tzd4KyFa3RHU%2FPV6eYbxJiX3CNcpGwKihGHnvKYoDQarkZsx1YBzCmwNQcZ8aK7aGwhJNrlfl2DXUgZIyRf9HOjfnUgvc57%2BI29r%2BbssRIeqqVQsNdKJBqJvNKZ1oSfmQXRvLZg%2Fd%2FTnF8XyfV1y68huzT2DkTWPvazGDwn9trtomKG55waJZAEOSmWwwdqUAr%2FP2t4NilQ9%2BkHXhrwj9iXNMoAnLVxb0ifdFiUOdqyar8qCF8%2B6CPv7hXZ%2Fdk6RcLQEiqVwwpLogfdbblAHdoQ1yO17SBK68bdaxlONxEsvgjcg3VmJWY3Bp6NISgR2nAxfXqKu%2F87STuCi7qoW%2FrUW7%2BjUR1dUpUxfwtqeE1YsnKb5dAojpSujufuZ6CiEzHFVStjGJeFUw%2Bc9%2Bizk1D7knF7yZcID2%2BlZUwHVWMdKGThQY8pzY%2BbFtt62hoYx2GJzHfL1kvpi2%2FUN2y4IE7%2FXaJRFCFEBRskhKPdYoeINPv7TCbw%2B3CBjqkActphoFuxyPyHwdGOY0agMMQYyKI8BEq6LQ6Ql%2Bv8%2FI5IJNL8K0vdDECNF7IhoC%2BHjI%2FxKCs%2Buzz8mz0n%2F7UKu0FkS%2F%2FTQGnImWIBdLyWawUFQbOQxXeXuILiijOQ9dlb%2B9DhElyLZmT%2Fm9CmuE5fF%2BznfrVd5cq5D%2BuD07e3Bcp%2BWk5GIWqJzWjEcy3XvgXxWWpCzIfXWQrg2qIPpkZtHQSj9Ob&X-Amz-Signature=ad62ea02f8da409c74953abace63877784e5f6c64391148ee0634054ff5b7bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWEQ53BK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCa6Hlt2%2FzxDUoa1PJiNHZ03JSdWv4v0qBYnQ9oB%2F2NTQIhAJ9E8tUiui8thqxAUXrKb1CWJAc5zv0N6sl260b%2BzwxMKv8DCDwQABoMNjM3NDIzMTgzODA1IgxO%2BqIpoNuxPJSr5Ucq3APFi4XOhyvn3CK9dSYDJil%2FEfz5GqToDEqmrSRNIDN5XSueQaF6Di%2BaJ9CIDZIitHi%2BcAVgfl4Xco0OTFs3QR6EUbh5blxtRjqsZd38sXzRK85zMk7YKNtmUcxJvjlenJbYjjHZy1dbt4tzd4KyFa3RHU%2FPV6eYbxJiX3CNcpGwKihGHnvKYoDQarkZsx1YBzCmwNQcZ8aK7aGwhJNrlfl2DXUgZIyRf9HOjfnUgvc57%2BI29r%2BbssRIeqqVQsNdKJBqJvNKZ1oSfmQXRvLZg%2Fd%2FTnF8XyfV1y68huzT2DkTWPvazGDwn9trtomKG55waJZAEOSmWwwdqUAr%2FP2t4NilQ9%2BkHXhrwj9iXNMoAnLVxb0ifdFiUOdqyar8qCF8%2B6CPv7hXZ%2Fdk6RcLQEiqVwwpLogfdbblAHdoQ1yO17SBK68bdaxlONxEsvgjcg3VmJWY3Bp6NISgR2nAxfXqKu%2F87STuCi7qoW%2FrUW7%2BjUR1dUpUxfwtqeE1YsnKb5dAojpSujufuZ6CiEzHFVStjGJeFUw%2Bc9%2Bizk1D7knF7yZcID2%2BlZUwHVWMdKGThQY8pzY%2BbFtt62hoYx2GJzHfL1kvpi2%2FUN2y4IE7%2FXaJRFCFEBRskhKPdYoeINPv7TCbw%2B3CBjqkActphoFuxyPyHwdGOY0agMMQYyKI8BEq6LQ6Ql%2Bv8%2FI5IJNL8K0vdDECNF7IhoC%2BHjI%2FxKCs%2Buzz8mz0n%2F7UKu0FkS%2F%2FTQGnImWIBdLyWawUFQbOQxXeXuILiijOQ9dlb%2B9DhElyLZmT%2Fm9CmuE5fF%2BznfrVd5cq5D%2BuD07e3Bcp%2BWk5GIWqJzWjEcy3XvgXxWWpCzIfXWQrg2qIPpkZtHQSj9Ob&X-Amz-Signature=40ddeeecd6ab50aefe1f37e9eec6cb0300bcbafab59239532e69ba08f92751bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
