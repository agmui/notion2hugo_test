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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7NWZV2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC39ZihS83kMWXu36TEV54bjgRKXyL1F3QbNc2pY%2BpDegIgG0i0Ch5ir1XUT%2Bv5bbxzuTh2MRW0v%2FgVSVTT5gFeIW4qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbEHdl5qTL9WTsEqyrcA0dHn7uDkLkrYIlXC8Sds8JYCaYWkLmUCKeR5hmYtP6RY7zH%2BsPggtrSpVga6o7TsGr9dgfylfnpjRFZddRlh8M%2BbV%2BcDAkgzUK074t1%2FuTyOLoY9SZy1iWIwiCn%2BuoXTo1d6jt4I7OctB0H6UDuKHn067izS%2BwizvNQVCdaSvhx%2B6F%2F35LjZNzoHDcQ06Is7nI1zhnv2Ctzhd7E%2FiNwPCwxHmX%2FLrGfl6NFJh223C3UJmZIZvi52P6IM4dKPYx0Fs%2BwRjXt0vnbQcpP3LfN17tKuc02qnhEoRRES9YrKRouDnqYFnpXGEDHOfpy5P0m7c0JREPp4FhnPOfpSsSaojBXmNTEji5WlYWPYEoqJ7QkH%2FFZrm%2BA4YU15dCBmA7UN7EjFXM52GQPCgbbb4gIkUkkhPpq%2FZ4DKyEiBiAVcj5Qxz2ltICOFKE1JUWvQpWDt66Upr7n6ULKQppayJMJa9jaqXoAYWOBLr5E3qKN6BxMrSBWG0leiAc5P40JAJsMVLgiA6qN7ZSkWRuCo%2BVdeW2MObCw45FC70ajXRL45TkKwAlz5Qz9HcuCoZZ1uckkGg8LzGWsZQGM6zn7uBdSm2hIjeSS4tLo8dwDVjf2h0HmbH4WsVL9bSGjzf4YMJ7TxMMGOqUB3mLjHQv02ripwO6%2FRgeUjRyxFo4G%2B1zZ5Ht53hENbG2T8AkQwqYrLx8we4CzPxrr7iZQRce65SMGLkWj44MM1kJ5eeSaQoOraQFDQgOlp5osNNHKGoFvDMqhWP%2FJXUl4MF2y9ll0yEF7eoJGgC7riVjN5YesqpSq%2BayRXhZASGV%2BLI8qGBa1MwWfgiOd%2BVfIzYAweUgzUQxT90JZtPl%2F7k%2FfQ20c&X-Amz-Signature=363e29e30d0772434287e436ff1ef5f73eb6cc6492971683291e5099de6a522b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7NWZV2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC39ZihS83kMWXu36TEV54bjgRKXyL1F3QbNc2pY%2BpDegIgG0i0Ch5ir1XUT%2Bv5bbxzuTh2MRW0v%2FgVSVTT5gFeIW4qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbEHdl5qTL9WTsEqyrcA0dHn7uDkLkrYIlXC8Sds8JYCaYWkLmUCKeR5hmYtP6RY7zH%2BsPggtrSpVga6o7TsGr9dgfylfnpjRFZddRlh8M%2BbV%2BcDAkgzUK074t1%2FuTyOLoY9SZy1iWIwiCn%2BuoXTo1d6jt4I7OctB0H6UDuKHn067izS%2BwizvNQVCdaSvhx%2B6F%2F35LjZNzoHDcQ06Is7nI1zhnv2Ctzhd7E%2FiNwPCwxHmX%2FLrGfl6NFJh223C3UJmZIZvi52P6IM4dKPYx0Fs%2BwRjXt0vnbQcpP3LfN17tKuc02qnhEoRRES9YrKRouDnqYFnpXGEDHOfpy5P0m7c0JREPp4FhnPOfpSsSaojBXmNTEji5WlYWPYEoqJ7QkH%2FFZrm%2BA4YU15dCBmA7UN7EjFXM52GQPCgbbb4gIkUkkhPpq%2FZ4DKyEiBiAVcj5Qxz2ltICOFKE1JUWvQpWDt66Upr7n6ULKQppayJMJa9jaqXoAYWOBLr5E3qKN6BxMrSBWG0leiAc5P40JAJsMVLgiA6qN7ZSkWRuCo%2BVdeW2MObCw45FC70ajXRL45TkKwAlz5Qz9HcuCoZZ1uckkGg8LzGWsZQGM6zn7uBdSm2hIjeSS4tLo8dwDVjf2h0HmbH4WsVL9bSGjzf4YMJ7TxMMGOqUB3mLjHQv02ripwO6%2FRgeUjRyxFo4G%2B1zZ5Ht53hENbG2T8AkQwqYrLx8we4CzPxrr7iZQRce65SMGLkWj44MM1kJ5eeSaQoOraQFDQgOlp5osNNHKGoFvDMqhWP%2FJXUl4MF2y9ll0yEF7eoJGgC7riVjN5YesqpSq%2BayRXhZASGV%2BLI8qGBa1MwWfgiOd%2BVfIzYAweUgzUQxT90JZtPl%2F7k%2FfQ20c&X-Amz-Signature=ec88a31af01ed56c6f9d1dff54069dd7e878c1de1552b0ed546c19a294a5bcf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
