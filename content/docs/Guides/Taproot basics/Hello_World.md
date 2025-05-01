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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS2KBLYG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFwtUX3kouAkHUFIMFgrbZMVgkAHZ1NV3me4%2BB82fP%2FIAiBewfMPWMbzhUPQVqbAGy27xkCEqlzxM8oXRt21kngeQiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjbYtTBBcT9BpLyypKtwD%2B3eu%2F0l8yKJJP1gi5THr3KmAPGQ3tgMSZeRWd7xHYVf04CsFpvcLBG%2BYArO4vpGNJmYHSrTSR2Dz9xXUMNP67pugGpRD7JzsF%2BL3ffd6Y0sVVtg0TyrfoaDsQasun0Ek5JKUKaniVnLNZbMq5IxRM6gNIhr507Qz6OQZtvpckrZz5sQieutsT8Ws9lCosg%2BeMdBM1b6K5DSig2aZFj2BZyU%2FZzdwRsLiWS7XzajjpecM%2FGAoXVSjFcqC7Kl7KYpE32SPAPKohMy8WgsNxChf6O6gaRjGFHovg9cPWIvNVdfXiUHh%2B0%2BomdH1SMeHUhTqaFXZWzr8UOh2jeTWHrVEUH1fkF0mLj68jZAn51jPZ1jD8Qf8IpHCeedDjuZnokpKIBkIg3thh2NfnejtqPM3WmxEDBsSXk4XPPfqxS7STlcIpQTixOdQrrCygFPKZe8lz%2BCET%2FEKh0ZOOa9D9KbaDUk2Fidvzl9drRG3deDnmdWkZRsk8hI9mFXDUa0LxzubIwgHmDww5YKm8y64oqLOt26ibirNSY3Zpn3Pc4j95zM%2F7sHbvkRzL%2BwScAaptgyZqtJF84YQLqRQwys8EK0reC8mpqeo3PxaSIEeVVPSP5VRLEfCvma%2FYKKE3TEw6KDOwAY6pgEKky3787vg29gZ4Ks9pyfPro1NN6xw%2BIQa5Nm%2FKuUJrl%2FqAwVX2yuRe%2B5Lvv%2BYWgTMUribpuOs8oM3YBM2kp0qDlL7LFIkOC7R7jqpQXNN1qQfMP%2BmriaJWS3bxVJYzujg3dSdjj%2Bt5VPBNvEgpFBHeWK1gjmYQamZx1htLZdC31xFU0eH%2FhdGhxvy4WIWchdN0IFkDM2fNf0ydQbtcDzcDV9Qv9wI&X-Amz-Signature=0c5f07615261c7898155aeabdc2ac9b0c64039b55e12418e80b6e24750f1f16e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS2KBLYG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFwtUX3kouAkHUFIMFgrbZMVgkAHZ1NV3me4%2BB82fP%2FIAiBewfMPWMbzhUPQVqbAGy27xkCEqlzxM8oXRt21kngeQiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjbYtTBBcT9BpLyypKtwD%2B3eu%2F0l8yKJJP1gi5THr3KmAPGQ3tgMSZeRWd7xHYVf04CsFpvcLBG%2BYArO4vpGNJmYHSrTSR2Dz9xXUMNP67pugGpRD7JzsF%2BL3ffd6Y0sVVtg0TyrfoaDsQasun0Ek5JKUKaniVnLNZbMq5IxRM6gNIhr507Qz6OQZtvpckrZz5sQieutsT8Ws9lCosg%2BeMdBM1b6K5DSig2aZFj2BZyU%2FZzdwRsLiWS7XzajjpecM%2FGAoXVSjFcqC7Kl7KYpE32SPAPKohMy8WgsNxChf6O6gaRjGFHovg9cPWIvNVdfXiUHh%2B0%2BomdH1SMeHUhTqaFXZWzr8UOh2jeTWHrVEUH1fkF0mLj68jZAn51jPZ1jD8Qf8IpHCeedDjuZnokpKIBkIg3thh2NfnejtqPM3WmxEDBsSXk4XPPfqxS7STlcIpQTixOdQrrCygFPKZe8lz%2BCET%2FEKh0ZOOa9D9KbaDUk2Fidvzl9drRG3deDnmdWkZRsk8hI9mFXDUa0LxzubIwgHmDww5YKm8y64oqLOt26ibirNSY3Zpn3Pc4j95zM%2F7sHbvkRzL%2BwScAaptgyZqtJF84YQLqRQwys8EK0reC8mpqeo3PxaSIEeVVPSP5VRLEfCvma%2FYKKE3TEw6KDOwAY6pgEKky3787vg29gZ4Ks9pyfPro1NN6xw%2BIQa5Nm%2FKuUJrl%2FqAwVX2yuRe%2B5Lvv%2BYWgTMUribpuOs8oM3YBM2kp0qDlL7LFIkOC7R7jqpQXNN1qQfMP%2BmriaJWS3bxVJYzujg3dSdjj%2Bt5VPBNvEgpFBHeWK1gjmYQamZx1htLZdC31xFU0eH%2FhdGhxvy4WIWchdN0IFkDM2fNf0ydQbtcDzcDV9Qv9wI&X-Amz-Signature=e678f4e1307d2499fbcfb1f24a76e507d90190e0bf1da81f5900b4622d548d33&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
