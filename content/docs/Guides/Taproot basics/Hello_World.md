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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMN2SHG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFm4D2pxFPUh2dBnRwymRr2ywBJ1dAC%2FDeJgS53cjRSkAiEA6BgAeWNBxBW%2B78rfcxwULe%2Bs4dPz2X8xSIUgoKse8T4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAhRXM90yZdy5MmVyrcA3X%2BjdWIfbwvY8PuJkflOnx0Hvvmd1F5yW7L%2FsixAnx2AUr2kG4C3Pcx11LUzYtf6LXQWg2GnUN8UVpXVzPysCLOwgj35X73kD7ZsOyASKXVCBWOOEOIMczmC2cYE6EAM4o6cMM1FhhBOqr5IQuKuvB2sJzoPyVoLzN%2BEjklTwORmW18vTO4isEfwN8elwS0ww3Z2aft9o9fJ4brpG3gJgelW2EKPGHgi193sdg9AADhyz7vI%2B8jdmwtrI4EIMQT7AUzsYcfDeltXJFGFRmh6v5L60NXR2GIG336IZD46LVR1O1EveJB%2FZZhvbYKxwrMD6tPfUITjEUF%2B34Ojga8K85RQ9OAaZeScGcbFlQ1KF3pg1KLIrIIfyc%2BzTIog37UXRtuZc7atwIZ4qW5upEPe23%2FKOrL4KZydgh38q8UGO057lGZPvf%2FKMm8%2Fy7v011iuih%2BvPWn3Yvsla%2B1CkFmTPvx71GPIALfqYR5L5hf%2FhSZhT9Js%2Fotl%2BIwWp6Ik%2FugHS1oMYiNcAe%2B7eS9gi5HhikUZVu7fDndu81Ib%2BOuUn71yZdM%2FoQHne8Ab9djE8Pom%2Fomv7OPJLkTAcko5U5ihJUDVzG4pIogW3ly85fOD%2FlxOTP5evm9khrSICSZMI6o6L8GOqUB%2FRvySajh6x7FQpcc96i2eqwE6StFu2yfs8BS1bSq8XJdz0Td262FcEpeON%2BKCkP4CnJBwTrkIf8JEYNnY0VzB%2FeWuWlL6KY2%2BKmjehGR5mZ3qCMfj4nmIJ1E2k4UlaqujJGhj%2FtM%2Bf2CrNdqh8o%2Fu0uDVYy3IFv66ZdWWUc3G1aJHN%2Bt%2BW0iu3XTAwc2b1fQmpUG%2BAleGaWSc9nUYovjkcr4fGvH&X-Amz-Signature=d9477570ba14692584c2b0d402aa800acf584644151f924cc5b083743d01376e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMN2SHG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFm4D2pxFPUh2dBnRwymRr2ywBJ1dAC%2FDeJgS53cjRSkAiEA6BgAeWNBxBW%2B78rfcxwULe%2Bs4dPz2X8xSIUgoKse8T4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAhRXM90yZdy5MmVyrcA3X%2BjdWIfbwvY8PuJkflOnx0Hvvmd1F5yW7L%2FsixAnx2AUr2kG4C3Pcx11LUzYtf6LXQWg2GnUN8UVpXVzPysCLOwgj35X73kD7ZsOyASKXVCBWOOEOIMczmC2cYE6EAM4o6cMM1FhhBOqr5IQuKuvB2sJzoPyVoLzN%2BEjklTwORmW18vTO4isEfwN8elwS0ww3Z2aft9o9fJ4brpG3gJgelW2EKPGHgi193sdg9AADhyz7vI%2B8jdmwtrI4EIMQT7AUzsYcfDeltXJFGFRmh6v5L60NXR2GIG336IZD46LVR1O1EveJB%2FZZhvbYKxwrMD6tPfUITjEUF%2B34Ojga8K85RQ9OAaZeScGcbFlQ1KF3pg1KLIrIIfyc%2BzTIog37UXRtuZc7atwIZ4qW5upEPe23%2FKOrL4KZydgh38q8UGO057lGZPvf%2FKMm8%2Fy7v011iuih%2BvPWn3Yvsla%2B1CkFmTPvx71GPIALfqYR5L5hf%2FhSZhT9Js%2Fotl%2BIwWp6Ik%2FugHS1oMYiNcAe%2B7eS9gi5HhikUZVu7fDndu81Ib%2BOuUn71yZdM%2FoQHne8Ab9djE8Pom%2Fomv7OPJLkTAcko5U5ihJUDVzG4pIogW3ly85fOD%2FlxOTP5evm9khrSICSZMI6o6L8GOqUB%2FRvySajh6x7FQpcc96i2eqwE6StFu2yfs8BS1bSq8XJdz0Td262FcEpeON%2BKCkP4CnJBwTrkIf8JEYNnY0VzB%2FeWuWlL6KY2%2BKmjehGR5mZ3qCMfj4nmIJ1E2k4UlaqujJGhj%2FtM%2Bf2CrNdqh8o%2Fu0uDVYy3IFv66ZdWWUc3G1aJHN%2Bt%2BW0iu3XTAwc2b1fQmpUG%2BAleGaWSc9nUYovjkcr4fGvH&X-Amz-Signature=f3fdde316db8b51107ce7792ea9b58603f4681310a2229ef75e84a74930e746b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
