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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMRNII5D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCpiF%2BAWUpAcPTORKOvrKk7TbbxxBwnL83wBeOgJhttAiAeOpvmmqYlYYdbMmpHD7x1bULiXq6xZlH1Ub7MAWgUiyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMXY8Q28gxabEa8j%2FGKtwDhn%2FT0ya8mERESDfEZy6NUcXPnL2vDgKm2JHxQMxGIetsNWp8Di%2F8kPuUH0eCOTwsaQ1aZJ8TbKY71VqjTOU%2BXpF4Fjf14dl53uJDk9Xpp%2BccjGuJAR06I7nFt3MGdqvUI4NnIoYmKIQ5fK3WyUsys%2FaEh1e7x7%2BbHY25EJhgkfKXfTX%2FtXmZNsJwPu0cKbKxIFtTpN0RBJ9VPJkzZr87rap16NEOcJZjri4lKD46wz8YoB6stlfDSRC9QCmIO%2FgDEPo7Ry%2Fv07jkxgFEDXolSbLY3tSZ79KFP4pbm6XOwGQyF2koOWwulwDOSfQ3C9oOYlK3bo6a3KIny4a31fJ4UR%2BRxEHMSebC3b2YB3CulSK7229RFAcGOsrweM42p1uVcTwAYirBbex%2BVg0BC6rWgyilBVWRujRiNRiUiI%2F4HamcKvYCBWJK62%2FTUddvn3HyxZ1szgUf2IAkbSRwRjAyKXnLBH3CSEkSuezDXzE8vWN1Xlwsoat%2BT5%2BA07QDMNf10TBllx%2FlVIquOsTe2bRL4DwaYXFfFojDBo8gTrqr%2F6RayStj1feh9TdHefBNRTkasyLaWjtvYwKT4SDyvPG6u%2BymsXanUlifPPlvRKkF6zBkP2BsvUVyhqZa0vowsIv1xAY6pgEDK4ggDdwsqdt2evjk%2Bxs2blOJ%2BAsDhv73oi9UAFPrc0y1NVDM3AOBbc39R90nc7Dm6q842IzctoJLZw2QV2DNKUp7Od4qrRvWRXnMCAU7p%2Fu%2Bc6qeJYkEk6Q32%2BbuXKd%2F%2FdzPcrxLl8KjoFmU2AXLgCVjgqEDjD9l%2Bh%2F3sJPmDtzo07llkypZshg8sjLuO%2Fiv61RWbvb3Q8qubrzDoHmfdBDYFWYD&X-Amz-Signature=b7863bbce5f1800b301f0172d50f7e60339f32555bbbf7f5a2bded8d3ae8ff39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMRNII5D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCpiF%2BAWUpAcPTORKOvrKk7TbbxxBwnL83wBeOgJhttAiAeOpvmmqYlYYdbMmpHD7x1bULiXq6xZlH1Ub7MAWgUiyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMXY8Q28gxabEa8j%2FGKtwDhn%2FT0ya8mERESDfEZy6NUcXPnL2vDgKm2JHxQMxGIetsNWp8Di%2F8kPuUH0eCOTwsaQ1aZJ8TbKY71VqjTOU%2BXpF4Fjf14dl53uJDk9Xpp%2BccjGuJAR06I7nFt3MGdqvUI4NnIoYmKIQ5fK3WyUsys%2FaEh1e7x7%2BbHY25EJhgkfKXfTX%2FtXmZNsJwPu0cKbKxIFtTpN0RBJ9VPJkzZr87rap16NEOcJZjri4lKD46wz8YoB6stlfDSRC9QCmIO%2FgDEPo7Ry%2Fv07jkxgFEDXolSbLY3tSZ79KFP4pbm6XOwGQyF2koOWwulwDOSfQ3C9oOYlK3bo6a3KIny4a31fJ4UR%2BRxEHMSebC3b2YB3CulSK7229RFAcGOsrweM42p1uVcTwAYirBbex%2BVg0BC6rWgyilBVWRujRiNRiUiI%2F4HamcKvYCBWJK62%2FTUddvn3HyxZ1szgUf2IAkbSRwRjAyKXnLBH3CSEkSuezDXzE8vWN1Xlwsoat%2BT5%2BA07QDMNf10TBllx%2FlVIquOsTe2bRL4DwaYXFfFojDBo8gTrqr%2F6RayStj1feh9TdHefBNRTkasyLaWjtvYwKT4SDyvPG6u%2BymsXanUlifPPlvRKkF6zBkP2BsvUVyhqZa0vowsIv1xAY6pgEDK4ggDdwsqdt2evjk%2Bxs2blOJ%2BAsDhv73oi9UAFPrc0y1NVDM3AOBbc39R90nc7Dm6q842IzctoJLZw2QV2DNKUp7Od4qrRvWRXnMCAU7p%2Fu%2Bc6qeJYkEk6Q32%2BbuXKd%2F%2FdzPcrxLl8KjoFmU2AXLgCVjgqEDjD9l%2Bh%2F3sJPmDtzo07llkypZshg8sjLuO%2Fiv61RWbvb3Q8qubrzDoHmfdBDYFWYD&X-Amz-Signature=0bf7b7c7d1fa6f32527c1b4301ba7ec213fca6a8543b48cc6af1bd2316ce31d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
