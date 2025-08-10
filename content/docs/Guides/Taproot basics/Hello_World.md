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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHYCVXO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeCECqrEkoBVNGN9nY5CMxyzdiHGtnfYRzBaI6ypcrJwIgctC5rZGeluag9CSCdR2TgwGBfihcLr1l5gUBT6qskbQqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt5xtgW3Ivb8CFtBSrcA31eXaFqyyDRKJxbDPjpRNZvbXHpGqvuEFM6rBqIKGdhi0JOohY43meZ4qpz9Hn%2BJZBBooZpCZdeOzHiCCZNs37A%2B3T6Q6ni5LVZZIyNG9HfoKluAVs56ctauFfF%2B87kEYhHurwYlXuFLgUN%2FvO4b5CUNU603glSIV7tbQzbTsibtIKsrhRJ0jk60m9GW22rdmdeCfqL%2FX%2BiXQGP6WdgbAfjnZf0xp6CRnuiyWt%2FMQ1FyzPt%2Ff9rfGEyerXvNjSW%2Fy%2Fsy8LptrvpmiW1XOLk8GdU3%2FXFiONTHfuXp8wh4oZidZLZDjZfCrlsZrVgQw29CcP60HQPH9e9bdsw2B6uLYf7OshbE7ofpNmaPB1ggWwJYaJp8ygw6a8oWnz6L8CL7zFIXsPGqJmBL2xY7WX11V%2BjfnfmQO1%2BOYsxTPckdUuDg0iMpqOcpke3Cxrw%2F8hyiu6wylXaKKJpE2heVq0ESYjMSsuZf4X6E8kp7k%2FbnqecX6gyGgSCg7M3XtdmrYZlN1UEN3uZYruvC0fL71UdYLvV%2FjGCdbVWSbx%2FoUGodR%2BYE4x4VLTAec3OHDv8UeOwuT8boLoygqJeUG0qLTOtnaLPbM2bLbSkMLSJAp%2BRNgHupJDMA%2BjCvGQxHVtcMO2Y4sQGOqUB5jbFzPphmU09KYKxr7Hsak5VZC8GhCThAShiE7CqPZHTgtU1lCN2gTw%2BPtyXvMXmOmhnZtT4hGdySOidShOSucPAsVy6pyY6x8QUMNwVGbs977KrayqW1GQA%2Fa5iBA%2FjaBCjVH8Yn3Zl3cltjxxZOFB6OLQ%2B7I8tb8C%2FSv59mHi1OPC2Pkjkv2xtanfltdksmXG6tqXgCZczgczVjI14MfqOfQLu&X-Amz-Signature=3a046d766b3018f8b8785ef041631e93c7fa484626a3637e622c768645a66282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHYCVXO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeCECqrEkoBVNGN9nY5CMxyzdiHGtnfYRzBaI6ypcrJwIgctC5rZGeluag9CSCdR2TgwGBfihcLr1l5gUBT6qskbQqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt5xtgW3Ivb8CFtBSrcA31eXaFqyyDRKJxbDPjpRNZvbXHpGqvuEFM6rBqIKGdhi0JOohY43meZ4qpz9Hn%2BJZBBooZpCZdeOzHiCCZNs37A%2B3T6Q6ni5LVZZIyNG9HfoKluAVs56ctauFfF%2B87kEYhHurwYlXuFLgUN%2FvO4b5CUNU603glSIV7tbQzbTsibtIKsrhRJ0jk60m9GW22rdmdeCfqL%2FX%2BiXQGP6WdgbAfjnZf0xp6CRnuiyWt%2FMQ1FyzPt%2Ff9rfGEyerXvNjSW%2Fy%2Fsy8LptrvpmiW1XOLk8GdU3%2FXFiONTHfuXp8wh4oZidZLZDjZfCrlsZrVgQw29CcP60HQPH9e9bdsw2B6uLYf7OshbE7ofpNmaPB1ggWwJYaJp8ygw6a8oWnz6L8CL7zFIXsPGqJmBL2xY7WX11V%2BjfnfmQO1%2BOYsxTPckdUuDg0iMpqOcpke3Cxrw%2F8hyiu6wylXaKKJpE2heVq0ESYjMSsuZf4X6E8kp7k%2FbnqecX6gyGgSCg7M3XtdmrYZlN1UEN3uZYruvC0fL71UdYLvV%2FjGCdbVWSbx%2FoUGodR%2BYE4x4VLTAec3OHDv8UeOwuT8boLoygqJeUG0qLTOtnaLPbM2bLbSkMLSJAp%2BRNgHupJDMA%2BjCvGQxHVtcMO2Y4sQGOqUB5jbFzPphmU09KYKxr7Hsak5VZC8GhCThAShiE7CqPZHTgtU1lCN2gTw%2BPtyXvMXmOmhnZtT4hGdySOidShOSucPAsVy6pyY6x8QUMNwVGbs977KrayqW1GQA%2Fa5iBA%2FjaBCjVH8Yn3Zl3cltjxxZOFB6OLQ%2B7I8tb8C%2FSv59mHi1OPC2Pkjkv2xtanfltdksmXG6tqXgCZczgczVjI14MfqOfQLu&X-Amz-Signature=e9dad70263a922212dca84e6a0f919543acf9615e8070c006d59e195da151864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
