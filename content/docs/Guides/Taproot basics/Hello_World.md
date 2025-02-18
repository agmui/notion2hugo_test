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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXOG4ZRL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCID6xiwPolVxWldTnwiovWl9OLHwhynNalmwZwiM7%2B6o5AiBaVwLwB7Vephx7%2BSoAcWGLvKlppw8FHZlCS5sorrM8yCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3GjXalbncQD7OdWcKtwDPxySMTtMinWNc0ChyjQuMSztHLpZfIspKg0XU32A1AzdB8RSBCweLjSMM%2Bz3OrKoOgc6Pech75I1FuCbi08SpInhRNxSOn69TSQMg%2F2z9ni0lDSld9KzIAmZP%2FnjioQCgc1HsYUz%2B1gBxI3TGAJWUMdoMFTb1%2FCMA3Jj9tCvoxygLmvXtBe00294q92QstajTcZ9RMWVunKS4qyBKhbpF55CBu650wTqWsyLwEZUgTmF0oxF4epng2o7cmV3F9Ot1LfH%2BYtwl62YUWB2mtTAA0sjuqHY521AATjRTAva%2FK2J7NAFpuvy7f7OJbRRpw6sn2NHmCMbBukxH75hmQLxyypsucKBy6k%2BmUgrqJTX5LF1xJe3WPacvaz7CpHGHiLPYgLSnRVi0jWo1pu%2B%2F0Pv%2F6lsRlyJTeRMWoeZHLcM6lk1LAVuJYWHEYb9eiAopX9u8SoC6Xh0V%2Fx0Bi5nGq6OA7pEOjiiqPt%2FiQvXUSGOX9d6TDtvST%2FS5hGwCfhI%2BmCGxR9st6820qNlV8S3iuE7abf47WkNBDJIvSwlgZ%2BhTU4DeQJQnaO0Sq%2FYJk2WpeyeqY8mS7QgXojeKhn%2B1AG187gb8vEY5nJ2L3A%2F2eGVvArw4IobVd31eewBUigwj5TSvQY6pgFJglJJS%2FndPoUDUlkaef0uyVHgqbJL4UsjKG8oLlbJJQpSwwgDLQHuK5oQq9JtrDGJrCwXBJxIG6T4kXU%2FVzD0bbPU9rh7V5BNJrI59%2BVFgN%2BMcW%2BFZAu4fGPcAzrHzIPnNQYzZy1PVPqAzTwdIIdvXHsCz7l1whBgUUzKP9n9z85S8%2FGfjtsuAfAOzQPZX34w419y8FGcnei6rdv9shdgNxbYUHEd&X-Amz-Signature=d41253202fefb500df23356e99f1c037ac93c3ac9ce3dd26e32c2b5701495b00&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXOG4ZRL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCID6xiwPolVxWldTnwiovWl9OLHwhynNalmwZwiM7%2B6o5AiBaVwLwB7Vephx7%2BSoAcWGLvKlppw8FHZlCS5sorrM8yCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3GjXalbncQD7OdWcKtwDPxySMTtMinWNc0ChyjQuMSztHLpZfIspKg0XU32A1AzdB8RSBCweLjSMM%2Bz3OrKoOgc6Pech75I1FuCbi08SpInhRNxSOn69TSQMg%2F2z9ni0lDSld9KzIAmZP%2FnjioQCgc1HsYUz%2B1gBxI3TGAJWUMdoMFTb1%2FCMA3Jj9tCvoxygLmvXtBe00294q92QstajTcZ9RMWVunKS4qyBKhbpF55CBu650wTqWsyLwEZUgTmF0oxF4epng2o7cmV3F9Ot1LfH%2BYtwl62YUWB2mtTAA0sjuqHY521AATjRTAva%2FK2J7NAFpuvy7f7OJbRRpw6sn2NHmCMbBukxH75hmQLxyypsucKBy6k%2BmUgrqJTX5LF1xJe3WPacvaz7CpHGHiLPYgLSnRVi0jWo1pu%2B%2F0Pv%2F6lsRlyJTeRMWoeZHLcM6lk1LAVuJYWHEYb9eiAopX9u8SoC6Xh0V%2Fx0Bi5nGq6OA7pEOjiiqPt%2FiQvXUSGOX9d6TDtvST%2FS5hGwCfhI%2BmCGxR9st6820qNlV8S3iuE7abf47WkNBDJIvSwlgZ%2BhTU4DeQJQnaO0Sq%2FYJk2WpeyeqY8mS7QgXojeKhn%2B1AG187gb8vEY5nJ2L3A%2F2eGVvArw4IobVd31eewBUigwj5TSvQY6pgFJglJJS%2FndPoUDUlkaef0uyVHgqbJL4UsjKG8oLlbJJQpSwwgDLQHuK5oQq9JtrDGJrCwXBJxIG6T4kXU%2FVzD0bbPU9rh7V5BNJrI59%2BVFgN%2BMcW%2BFZAu4fGPcAzrHzIPnNQYzZy1PVPqAzTwdIIdvXHsCz7l1whBgUUzKP9n9z85S8%2FGfjtsuAfAOzQPZX34w419y8FGcnei6rdv9shdgNxbYUHEd&X-Amz-Signature=ae1d2bea6eb56926d25a4d630a116a4f112b792be3f56dd9193954a9952d2cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
