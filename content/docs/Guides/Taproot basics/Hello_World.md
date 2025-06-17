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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KN7HB3W%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHooDn44Ou0RjHUKxhlcpvkFZG0Ot%2FhoUl3mDcyL7dBAiBvZtCr9PAvprn8abWOGpP4KWKa0ZrG6ij%2FJY3%2FqmTHBir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMfotoKsQUkngTOgD0KtwDfMMmaNBZbPY7E72DA%2B5EUdDk1HfnfHCxjuoAB8fDq5kzzhu2fnWyDVZBGTwaPj%2F%2Bx2SormQCGEqCOr3p0ZaiIxc4UIlaar%2F2NwOKfVw9hQibMp63j5%2BXFECHXBXjj1FItr4bBE1HH8WFELLTV%2F7tsL2Yqlrh7Ye%2Bc2GGEU4dG9v3SBuWOEsKyOnB1YOom00Lui8KYSxt6ihj6QgH2uKv42nVRSjZn8xzkWhz8WW3C%2BD0JMC0t4pw3ekL7aC3UKwMGHvC5yaDFJNnMgigA8CrS%2FES3jtVMkMuGxjdkOankRjMxyAJpg32HWXJpbjbWyKkNdzofRgnnZJdUbd4CKj8CDjuAlMNAH%2B7zDhKXhHNawZb56IO7uSTLVsuDRZNgVJZnI6RC6oL67Pi9PZNPLa2k8gPHqofcdXrDDPkvJlhyWX1MekCXVTaD2WRRCvokzNn8b8CXs1BRmYg9eQunRlWwKQPgqwF30R1vvfjE60uh9i3sea7Yvi%2Bt0dlT7UHM%2B9w%2Fh0Rfo7V0B4cWSKEVIlnZXwxyrzIKVV15LKxjfWWdjja5JYtEPp7kWMc7ET7S17wuuI74H0ozp9MVQiMtbrKVrkqlDt3%2FqdfIyuPZrz1QNWlQPOrewrLzgrOt24wpOzDwgY6pgEOwH%2Bz4UuXpZS3LA4qxX7OF2fQc%2BMOYELpMK2L%2ByXS6b6%2FVBz4NeE8hX65hO8GSnlniNTxbt7g3%2B5E15UEQPJjEwRKXaK0JpmXeZG8KFgHZwa2HW%2BTkfVXhEPWDbjK48e%2BESAarvYwChiWCo%2Bnb%2BEnzQfMPu1mQOU%2FeysvGuTlEKvFTIYpVOZASS9c6qXt5HpLyIevqDTcwlEICsWe4tNzeSXNxIGS&X-Amz-Signature=42acb0300b7e3affd4941888bb85f2071bac41b1b13287632128ad05e00bdaa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KN7HB3W%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHooDn44Ou0RjHUKxhlcpvkFZG0Ot%2FhoUl3mDcyL7dBAiBvZtCr9PAvprn8abWOGpP4KWKa0ZrG6ij%2FJY3%2FqmTHBir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMfotoKsQUkngTOgD0KtwDfMMmaNBZbPY7E72DA%2B5EUdDk1HfnfHCxjuoAB8fDq5kzzhu2fnWyDVZBGTwaPj%2F%2Bx2SormQCGEqCOr3p0ZaiIxc4UIlaar%2F2NwOKfVw9hQibMp63j5%2BXFECHXBXjj1FItr4bBE1HH8WFELLTV%2F7tsL2Yqlrh7Ye%2Bc2GGEU4dG9v3SBuWOEsKyOnB1YOom00Lui8KYSxt6ihj6QgH2uKv42nVRSjZn8xzkWhz8WW3C%2BD0JMC0t4pw3ekL7aC3UKwMGHvC5yaDFJNnMgigA8CrS%2FES3jtVMkMuGxjdkOankRjMxyAJpg32HWXJpbjbWyKkNdzofRgnnZJdUbd4CKj8CDjuAlMNAH%2B7zDhKXhHNawZb56IO7uSTLVsuDRZNgVJZnI6RC6oL67Pi9PZNPLa2k8gPHqofcdXrDDPkvJlhyWX1MekCXVTaD2WRRCvokzNn8b8CXs1BRmYg9eQunRlWwKQPgqwF30R1vvfjE60uh9i3sea7Yvi%2Bt0dlT7UHM%2B9w%2Fh0Rfo7V0B4cWSKEVIlnZXwxyrzIKVV15LKxjfWWdjja5JYtEPp7kWMc7ET7S17wuuI74H0ozp9MVQiMtbrKVrkqlDt3%2FqdfIyuPZrz1QNWlQPOrewrLzgrOt24wpOzDwgY6pgEOwH%2Bz4UuXpZS3LA4qxX7OF2fQc%2BMOYELpMK2L%2ByXS6b6%2FVBz4NeE8hX65hO8GSnlniNTxbt7g3%2B5E15UEQPJjEwRKXaK0JpmXeZG8KFgHZwa2HW%2BTkfVXhEPWDbjK48e%2BESAarvYwChiWCo%2Bnb%2BEnzQfMPu1mQOU%2FeysvGuTlEKvFTIYpVOZASS9c6qXt5HpLyIevqDTcwlEICsWe4tNzeSXNxIGS&X-Amz-Signature=8041c14f6ab34f6281ce57cbf3c3366777798fbf36211906912d77374ed9d771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
