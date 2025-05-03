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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LEXNJQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIE80s3083MRotO55U%2FkxhkeK2Og5BssQW3hrkqH5Xop1AiEAqUpxKrkJspiQtAbrIzZJwJVWmt%2FQ0ab5gySZ0R4%2BDyEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuBs1BDrAw2ZX1QByrcA%2B4KtuP1B8JUjcw6VZmOsqTUn7%2BJIMELwz2RSB6hQMvuhpr3riAPa3kuRLRjpSxIuqhrjIPqASih4chFW1WxIsgwTNJxqnbupx5B4h30Id0aZUnlFC0BrgizPemxbquP9XE15OXSGorrGZtoaF6W%2FO4igkzOWNb3JkdCBW9yveu0%2FWK%2Fj9E1wqQrMXJ5%2FpathMadEqcKOXi5T6GAu8%2F%2FowktogwFgPTdoo3hemHtFh6zbAIqbSTBg1izx%2BfQMWj0Q3MGZqhRZ6jIp7CvsczDfBRdE44X0br8o4CCAd6%2F1u%2FCmpi9dtYyIP4XHd18WxMiLxrqL0I1Vh4gAWF%2FbwmOCUjIQvtkqJHRILl8m2QyhQTGK6TIZH5vkCOQ%2BhvuAD%2BbQSU1F%2F%2FUxTTRH8LUVp0%2FWzWDVLsSogj%2FyjY7UK4k%2FpE00QJEGGOTpYiU0EbIhjyxGQ5KeN9U2gh1rOS3hTyP9rDGtrioIoTfvQrNjuaRrU1O%2FDsrlS1zPC6dR20VfcsqZoWBjd3V0%2FtZBSlwTyGucNIPUUX7jWb2fztDMnl6DkDcD5%2FZoTJk%2F8HcVYZvnIPisIeyHaQ%2FeVnApls1z2QqN7Fq2durKu%2Fju8KDd0jsPhIEuJqNiOCjbMSI5fPzMPSG1sAGOqUBINL0YM4bmDOjv%2BwTmkOXrWGe6niYn68o1jcZDJ1ayZ8VVAWaeYfa2bv7k8k4ZlWTvAbWPwTHuLX4RY8QQVrh%2Fj%2BQEvM1jZbYCd7WoGC98OVtBt1I3PIptACmJrIqGBiB6jEMG6zvWdYB81RziWRqqQEmrz7WQ71T3zdcgNfsArDb5GHjGp3GyGzGpHVWC51DBHoK3OANDNrDD%2B%2BE8j94cGgHprjq&X-Amz-Signature=d4d2110d61dba39ecf953066e624c1fe6af4bb136ffab02b7c90ff4929bf4266&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LEXNJQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIE80s3083MRotO55U%2FkxhkeK2Og5BssQW3hrkqH5Xop1AiEAqUpxKrkJspiQtAbrIzZJwJVWmt%2FQ0ab5gySZ0R4%2BDyEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuBs1BDrAw2ZX1QByrcA%2B4KtuP1B8JUjcw6VZmOsqTUn7%2BJIMELwz2RSB6hQMvuhpr3riAPa3kuRLRjpSxIuqhrjIPqASih4chFW1WxIsgwTNJxqnbupx5B4h30Id0aZUnlFC0BrgizPemxbquP9XE15OXSGorrGZtoaF6W%2FO4igkzOWNb3JkdCBW9yveu0%2FWK%2Fj9E1wqQrMXJ5%2FpathMadEqcKOXi5T6GAu8%2F%2FowktogwFgPTdoo3hemHtFh6zbAIqbSTBg1izx%2BfQMWj0Q3MGZqhRZ6jIp7CvsczDfBRdE44X0br8o4CCAd6%2F1u%2FCmpi9dtYyIP4XHd18WxMiLxrqL0I1Vh4gAWF%2FbwmOCUjIQvtkqJHRILl8m2QyhQTGK6TIZH5vkCOQ%2BhvuAD%2BbQSU1F%2F%2FUxTTRH8LUVp0%2FWzWDVLsSogj%2FyjY7UK4k%2FpE00QJEGGOTpYiU0EbIhjyxGQ5KeN9U2gh1rOS3hTyP9rDGtrioIoTfvQrNjuaRrU1O%2FDsrlS1zPC6dR20VfcsqZoWBjd3V0%2FtZBSlwTyGucNIPUUX7jWb2fztDMnl6DkDcD5%2FZoTJk%2F8HcVYZvnIPisIeyHaQ%2FeVnApls1z2QqN7Fq2durKu%2Fju8KDd0jsPhIEuJqNiOCjbMSI5fPzMPSG1sAGOqUBINL0YM4bmDOjv%2BwTmkOXrWGe6niYn68o1jcZDJ1ayZ8VVAWaeYfa2bv7k8k4ZlWTvAbWPwTHuLX4RY8QQVrh%2Fj%2BQEvM1jZbYCd7WoGC98OVtBt1I3PIptACmJrIqGBiB6jEMG6zvWdYB81RziWRqqQEmrz7WQ71T3zdcgNfsArDb5GHjGp3GyGzGpHVWC51DBHoK3OANDNrDD%2B%2BE8j94cGgHprjq&X-Amz-Signature=21bd3df61534b1f0d4e7230102d19d60f26dec4103a9ad35b32240ef6648d6ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
