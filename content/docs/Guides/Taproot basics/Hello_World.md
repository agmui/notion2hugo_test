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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWEAGQOX%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCH7H6JfGXv%2F5AM3IjasYi%2FBAUdrZs%2F12GP%2FNGnFgt0EAIhAKBSYlpFoX4EAfsR1y38nPHZNn94QS7zJ3eGOMZtkesIKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybzB5aFg0Izc%2FkT78q3AN6uvWqtnTKMJ%2FAh5FGNrrCcjRE0tNU0fy1sGM6Xmihj5jAk7%2FaDxj%2BI7Z%2FkTRGg8otnD3uFPkE1d2PPWUIwaFJ%2BNvqXQAEDQEltZMEkm1wiAudp9stOLtIlATvEGaqzyJuXsq06BLUi9TRihaesKjzu6gT8vaf7IAOwsfNU%2BxadxQFm%2Fdo2hIdYXA0%2BRpXjz%2BnFoLl%2BTexjRLO%2FyMs5raSBWNEkqxmabd0928IdkpUZcW%2FFK5rFFL6%2FIC608kgNpFftWLUq%2FODKg03RAaFDQNR8pdZ28%2BNrxzu5q8CwFIvtrHWQXjHlhP9FxioCAy8fj2uLCzKzCNyBwMQ2CIRDzsDKsilVS8gWRiU1U5AHBqm71BbeWQXYkE7RmhhSSxS%2F8s6h2jz91XXba3HPu3YUDKtlbGyUWW3a7b5OUaGtSraOXDbvAmNOyEY85Y9tGeu7hj4EgyAM1iLMiKxSEO1%2FkOiM6wXuaSoZxhH59J6%2BAp%2F20oQMzS3maH7jkK%2BlfgHFQ1zGj8JEAAzr0khZ0xz5X7%2B%2F1%2BTSMo2PEs5VB2kWgJr9r6pYceGpsxaSX%2BPKsuJUlAWpjdTug7FJjCgDT8nmbO2NXYaWy8bottlrRX4C3YSAWvu%2B%2FHyz20metBTqDDJk%2BHCBjqkAXccZU2yZMOcdL%2Bd9upJQicdbDCmL4xiNfsuEkcwxafv7txWbbK9s8%2BpL30mU0Z0YwpiQaE3VIHANxQUClMqURhxBLw2%2BkjVYyyPrINrJu%2FMBlr2usSYEdYgHmKb1IobmQpLJ1XuyeKBjbzN49NFkLyWoJbiKAYMgApogxCfZ1VFfsMYg0DSGuArLK7bCBVvN0kGbj3DJIi9jtBOA8VlPrEYLJRZ&X-Amz-Signature=f6ad57c02f0d9101403820dcc5ea34450e36ea6240216e29370d68ec75763da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWEAGQOX%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCH7H6JfGXv%2F5AM3IjasYi%2FBAUdrZs%2F12GP%2FNGnFgt0EAIhAKBSYlpFoX4EAfsR1y38nPHZNn94QS7zJ3eGOMZtkesIKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybzB5aFg0Izc%2FkT78q3AN6uvWqtnTKMJ%2FAh5FGNrrCcjRE0tNU0fy1sGM6Xmihj5jAk7%2FaDxj%2BI7Z%2FkTRGg8otnD3uFPkE1d2PPWUIwaFJ%2BNvqXQAEDQEltZMEkm1wiAudp9stOLtIlATvEGaqzyJuXsq06BLUi9TRihaesKjzu6gT8vaf7IAOwsfNU%2BxadxQFm%2Fdo2hIdYXA0%2BRpXjz%2BnFoLl%2BTexjRLO%2FyMs5raSBWNEkqxmabd0928IdkpUZcW%2FFK5rFFL6%2FIC608kgNpFftWLUq%2FODKg03RAaFDQNR8pdZ28%2BNrxzu5q8CwFIvtrHWQXjHlhP9FxioCAy8fj2uLCzKzCNyBwMQ2CIRDzsDKsilVS8gWRiU1U5AHBqm71BbeWQXYkE7RmhhSSxS%2F8s6h2jz91XXba3HPu3YUDKtlbGyUWW3a7b5OUaGtSraOXDbvAmNOyEY85Y9tGeu7hj4EgyAM1iLMiKxSEO1%2FkOiM6wXuaSoZxhH59J6%2BAp%2F20oQMzS3maH7jkK%2BlfgHFQ1zGj8JEAAzr0khZ0xz5X7%2B%2F1%2BTSMo2PEs5VB2kWgJr9r6pYceGpsxaSX%2BPKsuJUlAWpjdTug7FJjCgDT8nmbO2NXYaWy8bottlrRX4C3YSAWvu%2B%2FHyz20metBTqDDJk%2BHCBjqkAXccZU2yZMOcdL%2Bd9upJQicdbDCmL4xiNfsuEkcwxafv7txWbbK9s8%2BpL30mU0Z0YwpiQaE3VIHANxQUClMqURhxBLw2%2BkjVYyyPrINrJu%2FMBlr2usSYEdYgHmKb1IobmQpLJ1XuyeKBjbzN49NFkLyWoJbiKAYMgApogxCfZ1VFfsMYg0DSGuArLK7bCBVvN0kGbj3DJIi9jtBOA8VlPrEYLJRZ&X-Amz-Signature=95d3e63000091440de25d743ffb300ffa3f84609b60d764296dabf02e229e7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
