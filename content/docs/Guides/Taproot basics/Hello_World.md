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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UCE22C6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICii4P3wMU72bxiKfnZTHbq%2Bg4iJ6sMbg1PEW7mo5%2F4aAiEA6a%2BvPNiaRHcWF6ArUVO6Cz0a8P90tu6rDUc%2BcHh13rAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH17HVhfeevzKhcBsCrcAyGKAzTGHYVJUJneVoFqRKPyX48Vl2djqwa1P41dl8IpuQgMRvderqZN9U8I4yDmiFXAwQTXaQVhXIzZadWAMsQovuCWEe488GjNmZYZQ35cys02CkR9mqZwiVxT09zwWvMEIhlWxKzVhgy5MDYFdDa1WAYf56LqZHMFXgdZwPBZas8gLyt1b0WkmGX7VUdcAPYUVCsjj7CSZnzzkHG565slpavloa%2BkS2l0CY1EMY1n%2BeKGSOLf%2BYGWSfiPjzi5RbxuAM3MQWMyvdapKf2uwfI27h1rZN5iMpp5cnSjFmIVowhAvNuAWNxtFOKkxu2%2BkZU%2BaQjKzMRxkyekp27oLt70m3au6mP0AigayT439sYI2zfLpciJBNIvoDcxyaqb5oH%2FjbUiSebvcvu7Vk6b79u2upo8IWoHpd6GaX7gYafpvRqwIbU1sOTuQip2FJJulg9DQjXzNYSN4l4vBdUcYw29lj6ZPblOLY3EKSZCKIT2twcijxBM0Rf1twPEjpfSqDFK%2BWXr6Lz0IjYkupeX69IKlyFA54BhFvTmVUqWyuLrL53pRrY%2BTT%2FNpHfq19N4GEeq%2BBiDN8RN%2BvibVD6KFoZbH%2B6HoXp5hkdXLssedA5R2oCKvM2yTE%2FHRo%2BlMO3b18QGOqUBoJm%2FCnOrY2gdw3%2BTgY3UpVcD1KilZCj9vTHAJZy9%2FQgUFO4Wsh4jzuNAf7r1RMjAFWC6mgOUZgLg%2BFGZXNvZs55VAtttXmPxZyj6olswiO5RDynwTvQ%2FVSf8e%2FWjvfGs7NkDI2%2FLg1IKu7fnmC8vlIOUGl%2BghlD2YqXUdupPqWTpJzA7QOt6raGbuCVfYyY4BPcC05jF44E0iCWd8yvQA7LBjjkI&X-Amz-Signature=e4dbd2617e5d74c49df84122279f6073b91dab81a6703665f6678cf07005402e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UCE22C6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICii4P3wMU72bxiKfnZTHbq%2Bg4iJ6sMbg1PEW7mo5%2F4aAiEA6a%2BvPNiaRHcWF6ArUVO6Cz0a8P90tu6rDUc%2BcHh13rAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH17HVhfeevzKhcBsCrcAyGKAzTGHYVJUJneVoFqRKPyX48Vl2djqwa1P41dl8IpuQgMRvderqZN9U8I4yDmiFXAwQTXaQVhXIzZadWAMsQovuCWEe488GjNmZYZQ35cys02CkR9mqZwiVxT09zwWvMEIhlWxKzVhgy5MDYFdDa1WAYf56LqZHMFXgdZwPBZas8gLyt1b0WkmGX7VUdcAPYUVCsjj7CSZnzzkHG565slpavloa%2BkS2l0CY1EMY1n%2BeKGSOLf%2BYGWSfiPjzi5RbxuAM3MQWMyvdapKf2uwfI27h1rZN5iMpp5cnSjFmIVowhAvNuAWNxtFOKkxu2%2BkZU%2BaQjKzMRxkyekp27oLt70m3au6mP0AigayT439sYI2zfLpciJBNIvoDcxyaqb5oH%2FjbUiSebvcvu7Vk6b79u2upo8IWoHpd6GaX7gYafpvRqwIbU1sOTuQip2FJJulg9DQjXzNYSN4l4vBdUcYw29lj6ZPblOLY3EKSZCKIT2twcijxBM0Rf1twPEjpfSqDFK%2BWXr6Lz0IjYkupeX69IKlyFA54BhFvTmVUqWyuLrL53pRrY%2BTT%2FNpHfq19N4GEeq%2BBiDN8RN%2BvibVD6KFoZbH%2B6HoXp5hkdXLssedA5R2oCKvM2yTE%2FHRo%2BlMO3b18QGOqUBoJm%2FCnOrY2gdw3%2BTgY3UpVcD1KilZCj9vTHAJZy9%2FQgUFO4Wsh4jzuNAf7r1RMjAFWC6mgOUZgLg%2BFGZXNvZs55VAtttXmPxZyj6olswiO5RDynwTvQ%2FVSf8e%2FWjvfGs7NkDI2%2FLg1IKu7fnmC8vlIOUGl%2BghlD2YqXUdupPqWTpJzA7QOt6raGbuCVfYyY4BPcC05jF44E0iCWd8yvQA7LBjjkI&X-Amz-Signature=14a83b2238b25af0ab71da0492292be80ce84cda079730348357a4c026e344fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
