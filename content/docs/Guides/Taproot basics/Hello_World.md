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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MMCQVEJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXzXtmsILVnrUzkQpeZaXpiCqe%2BjJ8fkpblfmIPIin1wIgBMkoq7O27PULmR0Dxk3M%2F3yFmtOykCLIcpgb3%2F1%2F80MqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5C5KSXiCEVdXvKryrcA3TVi%2FlYwnVLJ20%2BxpeB1gSNI9sllb39zzMrGcHCmCgwSdsmtYbQHf4A1wHOQ9EcxXFA1N62kyn0oXHI4wt1FMD3ivYyNZwFl1QLbkXA6Pu9auapuirp5jex%2FRaHQ4A62NGtYmvz8bz1P8XXA27kHZzniUd4aCL857JUSDY0s5L9BT%2FZiueog1zwrbM5liDAEowaEcRMM9%2FjXiXL3Uint6dvWYDhZQPPa0fQkbo%2FHHHoNZk4RksFuxxZ0FT3VQrRvt0kJXTqWfej6s1K7ErrslwyKCxm48JlPN7W5maAK0U2qXiO9LlsxY1Fg1%2BQbBomfS6SUALbk1uiVI5S8S%2B4CamiTBRVaZN09OSsDMKVU4G8VFZErF%2BNyjdDoQdfmjAyB6NYx2ZzKVQNT9v3%2BFTj76AJ%2Fudk1YN9si0F6xWxPeoKXICsl2FFyiletouVlk1PKCeOPo4rSN9uNCQIN%2Feld2vkGOAJYO4WMnWl7NOjf5ygo%2FkL2mgM7WXlx6ENYLG59%2B28hxz64PvYoldnght9A8ANN1X9lX%2FBGme2czCN3r6kLDQxYmiRJ4xXn%2BCBBAF29wZl93gIPh8vwER0sDZgmKW8TOtJWKm8eg2c77Do2hkmCLoc0uSizZ05ATatMJiy4cEGOqUBk3eTZNjNzxzP%2FiG9n7%2F%2FZnvNp5Wlt1xjBuV9VAZ8Gqqns1EBhmbZYeMHiZm6p01pibSuWOENhpd2bfrF4Y3hYsfbcyNr9APTB8R3K02MamnSDjfKov7oZSdYgKcr%2BZ3pj6TIHVggY3Pd2%2FwaD6lmOKTeZKTM5YATKW%2BtbMtENQhUKXav%2BDPyH7M72BcTqr1hzRvwhbwxQHXTV8YTRVRAJUWHVbAc&X-Amz-Signature=22fb5c5b3c5ac70b2efa7e6064b502520754c2e512959baca2a3c445d50008b9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MMCQVEJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXzXtmsILVnrUzkQpeZaXpiCqe%2BjJ8fkpblfmIPIin1wIgBMkoq7O27PULmR0Dxk3M%2F3yFmtOykCLIcpgb3%2F1%2F80MqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5C5KSXiCEVdXvKryrcA3TVi%2FlYwnVLJ20%2BxpeB1gSNI9sllb39zzMrGcHCmCgwSdsmtYbQHf4A1wHOQ9EcxXFA1N62kyn0oXHI4wt1FMD3ivYyNZwFl1QLbkXA6Pu9auapuirp5jex%2FRaHQ4A62NGtYmvz8bz1P8XXA27kHZzniUd4aCL857JUSDY0s5L9BT%2FZiueog1zwrbM5liDAEowaEcRMM9%2FjXiXL3Uint6dvWYDhZQPPa0fQkbo%2FHHHoNZk4RksFuxxZ0FT3VQrRvt0kJXTqWfej6s1K7ErrslwyKCxm48JlPN7W5maAK0U2qXiO9LlsxY1Fg1%2BQbBomfS6SUALbk1uiVI5S8S%2B4CamiTBRVaZN09OSsDMKVU4G8VFZErF%2BNyjdDoQdfmjAyB6NYx2ZzKVQNT9v3%2BFTj76AJ%2Fudk1YN9si0F6xWxPeoKXICsl2FFyiletouVlk1PKCeOPo4rSN9uNCQIN%2Feld2vkGOAJYO4WMnWl7NOjf5ygo%2FkL2mgM7WXlx6ENYLG59%2B28hxz64PvYoldnght9A8ANN1X9lX%2FBGme2czCN3r6kLDQxYmiRJ4xXn%2BCBBAF29wZl93gIPh8vwER0sDZgmKW8TOtJWKm8eg2c77Do2hkmCLoc0uSizZ05ATatMJiy4cEGOqUBk3eTZNjNzxzP%2FiG9n7%2F%2FZnvNp5Wlt1xjBuV9VAZ8Gqqns1EBhmbZYeMHiZm6p01pibSuWOENhpd2bfrF4Y3hYsfbcyNr9APTB8R3K02MamnSDjfKov7oZSdYgKcr%2BZ3pj6TIHVggY3Pd2%2FwaD6lmOKTeZKTM5YATKW%2BtbMtENQhUKXav%2BDPyH7M72BcTqr1hzRvwhbwxQHXTV8YTRVRAJUWHVbAc&X-Amz-Signature=8a6f50b7ad8d24e62a0df1c9040821c85d0c90183a3921906ec0b6c63a8d2e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
