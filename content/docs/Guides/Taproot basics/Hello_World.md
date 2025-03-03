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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PA4PND5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT3hrwnKQHwr5qNTUJeCfxBDH9TVCBOnpArf0kXspjjQIgFKH7Kt4qZukTOYshhcdLRvwhm8tIGCaypX6Y7qtuSDIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFQzmefDtfNwRawRSrcA2q0359IbczVavjpyiKdSSTiWxdW8bRLua%2Btiuj4dZJuuW%2BEqk%2BJX1QwJdvKPgjH%2FsemuabRbWjC%2FbbXFfVVG1aB1dMiqerjksERHYrr7fkXH1X4nEjfcEAS2I7mkDRR3YQCyKkv5SFa8KJAnauzCSDj%2FuS2oGHSWFalcwk3E282r4ZSyvXcT5K8NRZZCV1Insy3Mr5AGAz0g3EKVReSXWY5a7hieD4g3Pbsz9w53oEPm8QBMQHKv%2FKPykhdzyOYkV0xzA6WOX3ILWXZ%2BVhoAzhlL%2FcC1fJcZp85d45JqE17fWQL3wbwNx6hMj%2FsWDdJtCTOXtoT8Av%2F2%2FKwWUZJmZozrUbV2tDDN81snIACdsvgLCNWypZk7lvCuUrFefI3KsZF0OIIFi1kVYiFmn8z3dw0vB0MgAHvlsWce%2BjPWyArGmcR8ivEhEXZ8ONOYyyrkqieCfxKf6MNWKZTzKY4nDJIhIUyfMiHlzg4l2yopuTjbrdm9UogBlatxslYahuDHVThUwMXEkP2TXZQHZZwuoFeHbZ9YTz9JdhnCroEpPrIGMJYkdWBnjIdOhZ0K5tNb6se71nyxAhWtvl176C%2BNI3zCqqAZ6pSpUBV5mBTt8AuTwxV%2B%2BA9lSofumg8MPD8lb4GOqUBzUHhWnzxGj2Wq%2FT%2FMJBo5g7QTujsmPKbPLnRXyH6veTvyADp0rUhYkBkv85dH0rhVaRKNlWEWxXNF6WVKgb5ZoyGkZwCNkY%2BZtv3%2FgRWadWksa1%2Bvx5lw9FPikxcwXtj26g3Mz4N44ZlA%2BdbCw4nBnkf2z0sHUcPEEeAOzmwyq2aBTXkYvMMk6XFiqmZkUxS5wnVEQm5OX7R2xmXtjgxlILi%2FV5r&X-Amz-Signature=9918d77ab50a4e4e2f5ced5b2db9a0596bc7103cb1eb0eba0a6dc044d38e16d7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PA4PND5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT3hrwnKQHwr5qNTUJeCfxBDH9TVCBOnpArf0kXspjjQIgFKH7Kt4qZukTOYshhcdLRvwhm8tIGCaypX6Y7qtuSDIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFQzmefDtfNwRawRSrcA2q0359IbczVavjpyiKdSSTiWxdW8bRLua%2Btiuj4dZJuuW%2BEqk%2BJX1QwJdvKPgjH%2FsemuabRbWjC%2FbbXFfVVG1aB1dMiqerjksERHYrr7fkXH1X4nEjfcEAS2I7mkDRR3YQCyKkv5SFa8KJAnauzCSDj%2FuS2oGHSWFalcwk3E282r4ZSyvXcT5K8NRZZCV1Insy3Mr5AGAz0g3EKVReSXWY5a7hieD4g3Pbsz9w53oEPm8QBMQHKv%2FKPykhdzyOYkV0xzA6WOX3ILWXZ%2BVhoAzhlL%2FcC1fJcZp85d45JqE17fWQL3wbwNx6hMj%2FsWDdJtCTOXtoT8Av%2F2%2FKwWUZJmZozrUbV2tDDN81snIACdsvgLCNWypZk7lvCuUrFefI3KsZF0OIIFi1kVYiFmn8z3dw0vB0MgAHvlsWce%2BjPWyArGmcR8ivEhEXZ8ONOYyyrkqieCfxKf6MNWKZTzKY4nDJIhIUyfMiHlzg4l2yopuTjbrdm9UogBlatxslYahuDHVThUwMXEkP2TXZQHZZwuoFeHbZ9YTz9JdhnCroEpPrIGMJYkdWBnjIdOhZ0K5tNb6se71nyxAhWtvl176C%2BNI3zCqqAZ6pSpUBV5mBTt8AuTwxV%2B%2BA9lSofumg8MPD8lb4GOqUBzUHhWnzxGj2Wq%2FT%2FMJBo5g7QTujsmPKbPLnRXyH6veTvyADp0rUhYkBkv85dH0rhVaRKNlWEWxXNF6WVKgb5ZoyGkZwCNkY%2BZtv3%2FgRWadWksa1%2Bvx5lw9FPikxcwXtj26g3Mz4N44ZlA%2BdbCw4nBnkf2z0sHUcPEEeAOzmwyq2aBTXkYvMMk6XFiqmZkUxS5wnVEQm5OX7R2xmXtjgxlILi%2FV5r&X-Amz-Signature=6ec28c84022cee614664b1775b6abc4804d882ff5de3291cc7a0f7f224981cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
