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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGATI37%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDjAjuA%2FtdH1s0cYkp56AnXSm658F9%2BAvGsIo2KmODfQgIhANrbNDyNs7iWYwdSUfSGprfY1eAZSV1HkMHSI6LXgytCKv8DCHYQABoMNjM3NDIzMTgzODA1IgyjFELOIy5KqbyoVa8q3APBOT8BVJBlzDkJU5yBPuiww%2FzKVGdTpLeTffA7ty92AquQSKw%2FtA%2FTgRzFvRGwjo3TXv6dt%2Fp0RGh4AJw8HF5CDPDDdcNwOXpsa%2F1rWOcO7aLj85n91rIOBE6LmoAWoiViCMVkgXPuffomXYvCeQOYQL6ZYVjVix1%2Ba4uzpuHuYDMRrhWIfRyKR53hdG%2BPMA4ra24GJdQnLgpV%2Fuz49zTn9a3mUyddPtvt93ShAnWAClr9tmEledQv0BQIIUOYWRPBnuOyKfgNDMcEpL1GFz2BQpI1z71bXcut5pJKXc2pBEK8FGw5IljBj%2FYipNJxQNEqLskXMrJaM0NTARXMXPo%2Be8Paomose08IfpF2j8a%2FSebnadMIru8HGDg3fNSlQcGKh%2FGzn0fW2B1tm9hT4ZBQIO69IxTx%2BIuWd3Q1Fa1MFJZn7v40G6wa5A5fwWQ0iYex85W0XZHzOlRt21dttts%2FL4HflkxL0TKlEJkeV3Ggtcuf9swt%2BZJdvj8ZAQYpU7PsSy0Fm0PmCDgfS8AWxXCYCsBnMg4%2Bci31Hy%2Bd0NKU9T2lnXQN61KsHemoLy2S4d2QZTt5WyLlkeoygrmSQBLFxyCTMHnl%2B2dfO5iYyjyfsBpKP00cJwZV3TcSLjCRjJi9BjqkAbpZUt5MEX15%2BmyYmzUIljui5p6Zb1ALQY%2BbEDXzIsJ%2BFuJkC06WSVG7a%2BOrllxNu1OhcvfOeTpZ9ymOiJTIVi9ulDnU3ZoM6PLdw5uIWF6sAYpA7sW%2Bbn%2FkYXdWuXpCPGKoAsNviLD8En98E3ECXakZ6IgUilw4uoMRCYYR3ee4v60U138LcZBeWoktpF%2BJocKe%2FafDa5hdPICBAs%2FPE%2F3duEFB&X-Amz-Signature=220fc17ceaba5a6b0bb6d4c3d85da618da665c441146246e23c8e482a0d38ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGATI37%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDjAjuA%2FtdH1s0cYkp56AnXSm658F9%2BAvGsIo2KmODfQgIhANrbNDyNs7iWYwdSUfSGprfY1eAZSV1HkMHSI6LXgytCKv8DCHYQABoMNjM3NDIzMTgzODA1IgyjFELOIy5KqbyoVa8q3APBOT8BVJBlzDkJU5yBPuiww%2FzKVGdTpLeTffA7ty92AquQSKw%2FtA%2FTgRzFvRGwjo3TXv6dt%2Fp0RGh4AJw8HF5CDPDDdcNwOXpsa%2F1rWOcO7aLj85n91rIOBE6LmoAWoiViCMVkgXPuffomXYvCeQOYQL6ZYVjVix1%2Ba4uzpuHuYDMRrhWIfRyKR53hdG%2BPMA4ra24GJdQnLgpV%2Fuz49zTn9a3mUyddPtvt93ShAnWAClr9tmEledQv0BQIIUOYWRPBnuOyKfgNDMcEpL1GFz2BQpI1z71bXcut5pJKXc2pBEK8FGw5IljBj%2FYipNJxQNEqLskXMrJaM0NTARXMXPo%2Be8Paomose08IfpF2j8a%2FSebnadMIru8HGDg3fNSlQcGKh%2FGzn0fW2B1tm9hT4ZBQIO69IxTx%2BIuWd3Q1Fa1MFJZn7v40G6wa5A5fwWQ0iYex85W0XZHzOlRt21dttts%2FL4HflkxL0TKlEJkeV3Ggtcuf9swt%2BZJdvj8ZAQYpU7PsSy0Fm0PmCDgfS8AWxXCYCsBnMg4%2Bci31Hy%2Bd0NKU9T2lnXQN61KsHemoLy2S4d2QZTt5WyLlkeoygrmSQBLFxyCTMHnl%2B2dfO5iYyjyfsBpKP00cJwZV3TcSLjCRjJi9BjqkAbpZUt5MEX15%2BmyYmzUIljui5p6Zb1ALQY%2BbEDXzIsJ%2BFuJkC06WSVG7a%2BOrllxNu1OhcvfOeTpZ9ymOiJTIVi9ulDnU3ZoM6PLdw5uIWF6sAYpA7sW%2Bbn%2FkYXdWuXpCPGKoAsNviLD8En98E3ECXakZ6IgUilw4uoMRCYYR3ee4v60U138LcZBeWoktpF%2BJocKe%2FafDa5hdPICBAs%2FPE%2F3duEFB&X-Amz-Signature=fd1e25040023c968513edb88cfef2903c6980ec166e7e5535e06fa226c316bae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
