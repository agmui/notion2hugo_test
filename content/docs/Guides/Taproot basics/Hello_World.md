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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBCKCN5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFa8ji2lq%2FwKgve%2Fwa7WwiKBesoMOA7hBAUvSw2TelwGAiEAjx6HoyqOlHjf1lV8kTBgr2%2BYdzrQJlCg2wo9cxO3rtQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYbcLZlgEMNRgsmTSrcA8iXK25qSE1iMwla2qjJUXx2OmCf%2FBm3PItlER4TABAlsnD%2FKK9Gz3dRM0mRTez5BNZvOfswBEmEuD3Wk5l6JVRIK2IW2eFxuO8AVn7lsIc%2BAQ%2B6CskMDSDn9inb66dVvbRbpmkoUr5ZpnaVZcUTET%2Fry5uwXpbtwphkRkU4y3fE060oo3A2VLbFTmBqwsXhxAQCJz7l%2FqY%2FsQlTozD%2F2jwWrAdrA5NOCZXmyWoeufmsQ1%2FS55Y7Hm7y8%2BCRycaA%2BvffOCHjfaUr7ofq%2FgDGXHqPC5jAJhra6yjNyCpRJfCxvdQxfrjUJaZ0YZozT5%2FrxT3K%2BZ%2Bq%2FQV8RzVWZy3Hfh6nvM8tFvJY0sxoUI%2FfH5tGTo30sYB%2FWNECWJ4B7moMcCVAesXCJXdJrLNmgWqWLqDXIppGJPQRELt2q6uILK13sbnOUnvy7JErNv65o4xMyYhUyjq9X1%2Bdnn3NHDvsrRRkx%2FJG%2Fash26Kuhh1oFDSEIK9fqg2kIAWrLQjOvfVtQhZ2Hoc18OEolJD4ZmSd1CuCL2WGncoKexJJ8mo21PUEOVHtJkt8mLwkKD5zZnGHWVlX6AJK2SZfgsPlUfOr%2FLY3n3Qz90GOaTwXRpVEaGRekjn0VLhJKNeM3QoAMMqEm74GOqUBsWP%2BYpysvFefYWc%2BxJW72lewWGHuT9KuVfMhHEPivZPfNeWmZOj%2FYybiR50PDMwDZrJd6PM50WiIhgGWwaoq8hWSADU10QBVHh3XgL%2BDbFUaVHLAfF6xqxkESS%2FoVNNPgP%2FGhtSXBxwXhJy1yhpH7qwQsFvhp4XKPze2Ppo7ar2NS7jAskTlJfryFjTWUgiJGfToT8MQ71%2BZHpOCl2ZhNURi5SXH&X-Amz-Signature=73bbd040e9d2a6e2c3597ba74fce6b6b246f0ccc9972936db0963b509d1c3b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBCKCN5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFa8ji2lq%2FwKgve%2Fwa7WwiKBesoMOA7hBAUvSw2TelwGAiEAjx6HoyqOlHjf1lV8kTBgr2%2BYdzrQJlCg2wo9cxO3rtQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYbcLZlgEMNRgsmTSrcA8iXK25qSE1iMwla2qjJUXx2OmCf%2FBm3PItlER4TABAlsnD%2FKK9Gz3dRM0mRTez5BNZvOfswBEmEuD3Wk5l6JVRIK2IW2eFxuO8AVn7lsIc%2BAQ%2B6CskMDSDn9inb66dVvbRbpmkoUr5ZpnaVZcUTET%2Fry5uwXpbtwphkRkU4y3fE060oo3A2VLbFTmBqwsXhxAQCJz7l%2FqY%2FsQlTozD%2F2jwWrAdrA5NOCZXmyWoeufmsQ1%2FS55Y7Hm7y8%2BCRycaA%2BvffOCHjfaUr7ofq%2FgDGXHqPC5jAJhra6yjNyCpRJfCxvdQxfrjUJaZ0YZozT5%2FrxT3K%2BZ%2Bq%2FQV8RzVWZy3Hfh6nvM8tFvJY0sxoUI%2FfH5tGTo30sYB%2FWNECWJ4B7moMcCVAesXCJXdJrLNmgWqWLqDXIppGJPQRELt2q6uILK13sbnOUnvy7JErNv65o4xMyYhUyjq9X1%2Bdnn3NHDvsrRRkx%2FJG%2Fash26Kuhh1oFDSEIK9fqg2kIAWrLQjOvfVtQhZ2Hoc18OEolJD4ZmSd1CuCL2WGncoKexJJ8mo21PUEOVHtJkt8mLwkKD5zZnGHWVlX6AJK2SZfgsPlUfOr%2FLY3n3Qz90GOaTwXRpVEaGRekjn0VLhJKNeM3QoAMMqEm74GOqUBsWP%2BYpysvFefYWc%2BxJW72lewWGHuT9KuVfMhHEPivZPfNeWmZOj%2FYybiR50PDMwDZrJd6PM50WiIhgGWwaoq8hWSADU10QBVHh3XgL%2BDbFUaVHLAfF6xqxkESS%2FoVNNPgP%2FGhtSXBxwXhJy1yhpH7qwQsFvhp4XKPze2Ppo7ar2NS7jAskTlJfryFjTWUgiJGfToT8MQ71%2BZHpOCl2ZhNURi5SXH&X-Amz-Signature=41c992305c0132c65c23a83797d0052fe628874c10225571d7565bf21a30a7df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
