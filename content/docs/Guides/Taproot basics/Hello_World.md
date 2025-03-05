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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633234OFE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHC%2FduWLcH5yRVmr8AJC05kfKeB%2BP8Uy22BLR%2BrqcesAIhAOD%2Fgjr%2FgVG5wobObVg%2FMpT7dZ2Bufw5j%2F5xtd%2FJSVLsKv8DCBoQABoMNjM3NDIzMTgzODA1IgxqeiUSzHUk6rEjf%2B0q3AO7K8JcCM4eQ%2FH51QbLuMFG12ReApEaIkEHBQnu1UbSPS0gq5se8N9lDrcExskKp%2F5xoYoLW0QdpEl%2FQK2h%2B8ByecCZrL2u%2B3ZZ61Vd%2BA2j7gy%2FdIN%2B1tQzzXEaiahiTO2c77gIyQ5K0y8Tz2RWniLnRBnN1rpq7q3ypSlcb1UQ6SpY1XYm4VF5DcTTLiWR5V6sfroxYz8SKkMjkAcHh7CUeW6OdZXx4A6FmrHYOt5yMW5CgBJApS9GyLSb7ORxm8agVpQmf%2F8O60UY99kTyEdhKxOsSS%2BGyL2pAdJjhKJBXuoOAYo8IspI9Dc14IVSOeejBZkblAVz5Uii8ZSFGJZ2fhpIkTP736nZaKsjL6NhrnG2Dqj2xxzYzPu%2BPnWxq%2BLRabA0nEbQ4Z2TDX%2BDsAb8Djx3wKpaM%2B%2FggQ%2BZ8a%2F7yLe66oStv5hDrJzP%2BlJA1CYCCvm5Kjnui2wTZVoq8UlNjbn%2BvbQiFRpBWTRDbDntolFW3Q6MrVi%2FSb3rRrV%2BzpjIH72JRwyDcc01sDuZLVK6OUf8uJP9Y3qP13VAHvNa0IqXTcWQ4b2f204f9VpT%2BfEzrnkrBM%2FDfGbfStp%2FPO9q5j91Xud46uP7htjjUdNEl%2B%2FmW7ZtJt1kpvW3PTDIhKK%2BBjqkAYQH%2F2lOYycojjFgNirPhwIxBf7h1fUOmfMkwNhEYVZ64BkuXnN%2FSWxwV%2Bj30TlXhiq%2Fpiz7fUMjkQPhsB%2BRUfzpGjFhlEN3HnQoDwoKgnuD8RER%2FSLe3DfHB2aK5qJZQqGZAxPYuAYJM4KzK1imBUQjLXQbEfOOxSk5cHm7Xgya3IpQXImx3ZRMTMe2XjSO23TS%2FTyFCd88EqUapCheJJ4oxFr4&X-Amz-Signature=6821db0c700d6aad9863bfe2bcc1ba998eac013f5378bfa7a51cee3301e426e4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633234OFE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHC%2FduWLcH5yRVmr8AJC05kfKeB%2BP8Uy22BLR%2BrqcesAIhAOD%2Fgjr%2FgVG5wobObVg%2FMpT7dZ2Bufw5j%2F5xtd%2FJSVLsKv8DCBoQABoMNjM3NDIzMTgzODA1IgxqeiUSzHUk6rEjf%2B0q3AO7K8JcCM4eQ%2FH51QbLuMFG12ReApEaIkEHBQnu1UbSPS0gq5se8N9lDrcExskKp%2F5xoYoLW0QdpEl%2FQK2h%2B8ByecCZrL2u%2B3ZZ61Vd%2BA2j7gy%2FdIN%2B1tQzzXEaiahiTO2c77gIyQ5K0y8Tz2RWniLnRBnN1rpq7q3ypSlcb1UQ6SpY1XYm4VF5DcTTLiWR5V6sfroxYz8SKkMjkAcHh7CUeW6OdZXx4A6FmrHYOt5yMW5CgBJApS9GyLSb7ORxm8agVpQmf%2F8O60UY99kTyEdhKxOsSS%2BGyL2pAdJjhKJBXuoOAYo8IspI9Dc14IVSOeejBZkblAVz5Uii8ZSFGJZ2fhpIkTP736nZaKsjL6NhrnG2Dqj2xxzYzPu%2BPnWxq%2BLRabA0nEbQ4Z2TDX%2BDsAb8Djx3wKpaM%2B%2FggQ%2BZ8a%2F7yLe66oStv5hDrJzP%2BlJA1CYCCvm5Kjnui2wTZVoq8UlNjbn%2BvbQiFRpBWTRDbDntolFW3Q6MrVi%2FSb3rRrV%2BzpjIH72JRwyDcc01sDuZLVK6OUf8uJP9Y3qP13VAHvNa0IqXTcWQ4b2f204f9VpT%2BfEzrnkrBM%2FDfGbfStp%2FPO9q5j91Xud46uP7htjjUdNEl%2B%2FmW7ZtJt1kpvW3PTDIhKK%2BBjqkAYQH%2F2lOYycojjFgNirPhwIxBf7h1fUOmfMkwNhEYVZ64BkuXnN%2FSWxwV%2Bj30TlXhiq%2Fpiz7fUMjkQPhsB%2BRUfzpGjFhlEN3HnQoDwoKgnuD8RER%2FSLe3DfHB2aK5qJZQqGZAxPYuAYJM4KzK1imBUQjLXQbEfOOxSk5cHm7Xgya3IpQXImx3ZRMTMe2XjSO23TS%2FTyFCd88EqUapCheJJ4oxFr4&X-Amz-Signature=dce402c7fdbf9f5ca595145f810dc3a24f84e5db885900e2de9c8081d20aa64e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
