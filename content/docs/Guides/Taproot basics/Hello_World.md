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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRALXNH3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDLLivV89qlpYEJUUTnseDJZdyod4o58P4loLfXzcVm3QIgRhBO4MF8M57JV%2FjC23%2FHyWeCL4GvwThuBK7uK%2BWt%2FCEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPhoysvbPuPRZCoYJCrcA%2BOVVVqGZpg9ae43hN6%2F6tg3j%2FBSgd6tfVKWlpK6aXIWiok8D2aCatJ5uVxIW1hQBC8dt3ECJ5UvzRUrgo8a%2FWfmv338QFVf3V7C1dsrcoJlL%2FM2KJT5cXmaOKDfN%2F4beWnGPpksBr34TdRhUGXds%2FHVsCLXZAYKWDMYy1C%2FtHlDAcqBafmdA%2FVynqh%2FKSMtTMcg%2FvbfWf%2BxvJRxdpKQjvT8%2B0vXqqSBG0cTOr24%2BKSbzRLYyGQtpcqXqDAUa8UXcmScTTxShdpFHtf3Za%2BoqWrNb4ZiwNAaQorOtT5zVk3C%2BAB0Kb6%2FDdbwNpl%2FQuQCzghPxwfhJyNFf0U47SP0yje%2B1KTA7gh5SsP7Z8ZpstLDoYJL1RWMUjr0RD9bcAdslqr3TuJuewUS2bazvvOhKo7wiTLFRYtu7TM83zRZxcKhTAx6YYbNkFdeYmGT0Lvx5kzyhp0fR4A6cSkO1wctUxSf5leoerfRFxEynZgr8qHB7NsLSzmfJD7tdZstYktXCf34HXU8Mi1sQ1YYZ7Go29hGiWbl%2B2%2F0vN1RTr9a3AALaq6DBMdWrYz3QfN4lLGvGwyM%2BkfTNTz5M%2FpPB5Wpc2dyGALEUlL%2B1PesbftePkJXEyU8f%2BXlLHqcOG7IMNHSscIGOqUBNU2GClE67Bo5QvktkIPU%2FMRTN4FT7650eJbw6U8twwq7IIHElh7FmdE5kfS6vWQpSq2BMGO7tTDWZRllegwg7YFIXh6BibUCXTryC53h1BEpYqD2znYN4hPwmPn930kSluf0NDhXJqRy08Zz2RzVBIsvqk61Act7wVeZM89yYTI3qFi9wjJze5lol5IQ%2BnNielYDgVifzDkyUzasMw%2B9wLuNC8QZ&X-Amz-Signature=3d47c8dddf8a5028dbbffad0380fc64871972ca912097990d098d3c2fdb87351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRALXNH3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDLLivV89qlpYEJUUTnseDJZdyod4o58P4loLfXzcVm3QIgRhBO4MF8M57JV%2FjC23%2FHyWeCL4GvwThuBK7uK%2BWt%2FCEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPhoysvbPuPRZCoYJCrcA%2BOVVVqGZpg9ae43hN6%2F6tg3j%2FBSgd6tfVKWlpK6aXIWiok8D2aCatJ5uVxIW1hQBC8dt3ECJ5UvzRUrgo8a%2FWfmv338QFVf3V7C1dsrcoJlL%2FM2KJT5cXmaOKDfN%2F4beWnGPpksBr34TdRhUGXds%2FHVsCLXZAYKWDMYy1C%2FtHlDAcqBafmdA%2FVynqh%2FKSMtTMcg%2FvbfWf%2BxvJRxdpKQjvT8%2B0vXqqSBG0cTOr24%2BKSbzRLYyGQtpcqXqDAUa8UXcmScTTxShdpFHtf3Za%2BoqWrNb4ZiwNAaQorOtT5zVk3C%2BAB0Kb6%2FDdbwNpl%2FQuQCzghPxwfhJyNFf0U47SP0yje%2B1KTA7gh5SsP7Z8ZpstLDoYJL1RWMUjr0RD9bcAdslqr3TuJuewUS2bazvvOhKo7wiTLFRYtu7TM83zRZxcKhTAx6YYbNkFdeYmGT0Lvx5kzyhp0fR4A6cSkO1wctUxSf5leoerfRFxEynZgr8qHB7NsLSzmfJD7tdZstYktXCf34HXU8Mi1sQ1YYZ7Go29hGiWbl%2B2%2F0vN1RTr9a3AALaq6DBMdWrYz3QfN4lLGvGwyM%2BkfTNTz5M%2FpPB5Wpc2dyGALEUlL%2B1PesbftePkJXEyU8f%2BXlLHqcOG7IMNHSscIGOqUBNU2GClE67Bo5QvktkIPU%2FMRTN4FT7650eJbw6U8twwq7IIHElh7FmdE5kfS6vWQpSq2BMGO7tTDWZRllegwg7YFIXh6BibUCXTryC53h1BEpYqD2znYN4hPwmPn930kSluf0NDhXJqRy08Zz2RzVBIsvqk61Act7wVeZM89yYTI3qFi9wjJze5lol5IQ%2BnNielYDgVifzDkyUzasMw%2B9wLuNC8QZ&X-Amz-Signature=59bf7097b8941401667470a093ec42a6a251e650ab09dd94fd3ef2ab1a159610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
