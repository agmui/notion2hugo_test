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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAL43UD5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDad1wuLrpKR8H%2FdaZzemez3PJcRBDz0G6qtj2%2Bt%2Ffj1AIhAMZspNieW0JYbHQ98q150%2FsiOKWbe3vXaBEtruyXRMzKKv8DCEUQABoMNjM3NDIzMTgzODA1IgxuSMvdjOOdIpWHHYcq3AMJFEaHlr2dYO6dK7ZxKnnOQKctgJ1ro5fJ1dE9pyQ8xwvMK9gkUJ%2Fe%2Bvr0rZsnCGGt8ABQzdCWVdlrItUkDqaGX11wRJdcNQGOFPA8BV9ZeiLDOZoUank2IdFssDl2bm2WzLgNbeY0ZtldTcZb6vpIVqmfbfYwdjSizVMBXMivXoGhu5GarOmr5QUOT38dN0kv6e9ImRm0d5S8PbWs8I4QlBpqXXzo7HZfBIR8ec634ddnQQoyooV%2BhuLEpR%2BSI54%2BBpqBwUEhVl0gCBxW7%2FXXeJIi3%2BT0XeS89QrcqkaLJqrHKfwsjJIQVYXLcWpVVk8fu%2BoaxousrE%2Bh0wGIieqy9aKrUCE5Iyqhut9YzBt10Af6Jyxw%2FJCqhLtKwAxC%2FjwD%2B8ZDykoHPO0dktrYd71qOTRhEJbxzuIYv7Th0LPA4xHz8IB81HNl3ECw444pZ2W4egQN%2BQKytnLcvk29O10jTuWcCmN7aASxhgRucuoE7jUuD2UVhaSH%2BEmsVTSmp%2F4%2F1YwChKeMH3cFArW0ot3pMUy4WkwfPf1toDyLXNabMznqePMsdcb6bkJ0rGZgiOr31IuhztLBiu49xDQHkHVfVIbJ%2BRfi4iD4LkEqH5KYZBAJ8k6qdHWtjZvO%2BjDD3Pa9BjqkAZtPpfvHupR2km6AV24OfohwIzRUJVJO9OhhWtV5i52TqNyReWxDd48ery9Fjtjnsh0m1zFzQQG4mhbfBsyU1ObgSsIGnzxoSeni40kiVNDWiKiBbNHhhPb%2BkbGZAGQj%2FR0Uf7VaSJsB%2BfepqQfl39wmG6QzI07tQfZgE%2BNx%2BYIv6slzPgyyQAvHR5prt3shwZ%2FUaU7ljy2vHc1dEMSKdFoWTRq4&X-Amz-Signature=fc55487f883b1eade38f63e9526f0c93e762b6c4aebb88cb5181497a698eec77&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAL43UD5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDad1wuLrpKR8H%2FdaZzemez3PJcRBDz0G6qtj2%2Bt%2Ffj1AIhAMZspNieW0JYbHQ98q150%2FsiOKWbe3vXaBEtruyXRMzKKv8DCEUQABoMNjM3NDIzMTgzODA1IgxuSMvdjOOdIpWHHYcq3AMJFEaHlr2dYO6dK7ZxKnnOQKctgJ1ro5fJ1dE9pyQ8xwvMK9gkUJ%2Fe%2Bvr0rZsnCGGt8ABQzdCWVdlrItUkDqaGX11wRJdcNQGOFPA8BV9ZeiLDOZoUank2IdFssDl2bm2WzLgNbeY0ZtldTcZb6vpIVqmfbfYwdjSizVMBXMivXoGhu5GarOmr5QUOT38dN0kv6e9ImRm0d5S8PbWs8I4QlBpqXXzo7HZfBIR8ec634ddnQQoyooV%2BhuLEpR%2BSI54%2BBpqBwUEhVl0gCBxW7%2FXXeJIi3%2BT0XeS89QrcqkaLJqrHKfwsjJIQVYXLcWpVVk8fu%2BoaxousrE%2Bh0wGIieqy9aKrUCE5Iyqhut9YzBt10Af6Jyxw%2FJCqhLtKwAxC%2FjwD%2B8ZDykoHPO0dktrYd71qOTRhEJbxzuIYv7Th0LPA4xHz8IB81HNl3ECw444pZ2W4egQN%2BQKytnLcvk29O10jTuWcCmN7aASxhgRucuoE7jUuD2UVhaSH%2BEmsVTSmp%2F4%2F1YwChKeMH3cFArW0ot3pMUy4WkwfPf1toDyLXNabMznqePMsdcb6bkJ0rGZgiOr31IuhztLBiu49xDQHkHVfVIbJ%2BRfi4iD4LkEqH5KYZBAJ8k6qdHWtjZvO%2BjDD3Pa9BjqkAZtPpfvHupR2km6AV24OfohwIzRUJVJO9OhhWtV5i52TqNyReWxDd48ery9Fjtjnsh0m1zFzQQG4mhbfBsyU1ObgSsIGnzxoSeni40kiVNDWiKiBbNHhhPb%2BkbGZAGQj%2FR0Uf7VaSJsB%2BfepqQfl39wmG6QzI07tQfZgE%2BNx%2BYIv6slzPgyyQAvHR5prt3shwZ%2FUaU7ljy2vHc1dEMSKdFoWTRq4&X-Amz-Signature=83658863ed1d9c59a131ed0bf04c76d5a068c8bb13a8f172b7b8d218ff293abc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
