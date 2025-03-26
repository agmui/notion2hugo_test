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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7TZO54%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmMMdS7%2F40R3X7LtPSaQGH8QyUhAp3GSDL4RCt1hmFBQIhAKkFg1OB6VhleBdEk1Y3LdJE87gFFxFe6s0vdoDD2NTtKv8DCCkQABoMNjM3NDIzMTgzODA1IgyTRJ0HLrcf88ga174q3AMOLQaQdvYMHNBY5KDqsLpzsUa0EqabwUWJeZwnNypxbTn5rdNII%2FFVq8TUjYBRhMsQ1HUmyG%2FsZRaaaWcge5ArVkyQGksfs09iuKwzjMhlzwTvgcBbseZ7ucj853e4i%2Br6DcyBoYjUuty8OrOkEh04QZmIZku7PvbhfpTDJ1lbjfbryvP7oHWm%2B%2FjGObwsHdWehG836vW0lJEJ8CEaFsxdHZJJTPpknpjLLuOk23Dnkv3IwEhWou8wNJJDgoEpdH4Majfi34qIwPJj830huZDHiPjUVfX1z%2F51M%2FEyf5ARNpi%2FUlHocSj49U4EnhHOnzo0JTf3gZBdrKgndmYijEZ%2BXS31cRkAYDmhu6V0NIH63gtNynb6v4S8BTeeNj2X%2BGWmRvmj7YjXS1q0qB125H7HZf7LviMreTHX4iEETM7CWXCp%2BlJm2L02Q5Hbl8aDfOQBAziFs93jFW1zF5zi8b65%2BipLzHvkC%2BUHyqBjolEMkoAq1DkKIK6NQO%2BWbrXaNGMB66RFQSihIhDhLN%2Bdk90nPrb3Vz3kzcfIAFMvICasR%2BLpEKWfxy3fWdFziwC%2BqOQq8KGwvJT6azvHPiN9mRp3FFLQKfAt290Bb%2B6B1h8Hdupz73HU4TgWyIYePTCl646%2FBjqkAbzI5TctdYVNwREFJMReh1aSh8NSzcu1m53p4XUCHah%2Fl0V%2B3KxPSslKCFjku6T3AQJrTOa9NaHbERYnPkJVHuitukWfXS7%2Fy5cPXtJOGPJ7lzHZA9Ex9aa7YJlw%2BODQHKA3Wi1ADYTrd%2BNfikXOaue4QQb8kM%2B%2BvRMUtbpJPZj6DM7l6u4UUfjXQKlbw46ztSUNaaY0K%2BACsRdfgAke2t%2FKir82&X-Amz-Signature=bc0126225dea7e883c979702ebd57134612e383419b0e9ff1b102d038a4d2419&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7TZO54%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmMMdS7%2F40R3X7LtPSaQGH8QyUhAp3GSDL4RCt1hmFBQIhAKkFg1OB6VhleBdEk1Y3LdJE87gFFxFe6s0vdoDD2NTtKv8DCCkQABoMNjM3NDIzMTgzODA1IgyTRJ0HLrcf88ga174q3AMOLQaQdvYMHNBY5KDqsLpzsUa0EqabwUWJeZwnNypxbTn5rdNII%2FFVq8TUjYBRhMsQ1HUmyG%2FsZRaaaWcge5ArVkyQGksfs09iuKwzjMhlzwTvgcBbseZ7ucj853e4i%2Br6DcyBoYjUuty8OrOkEh04QZmIZku7PvbhfpTDJ1lbjfbryvP7oHWm%2B%2FjGObwsHdWehG836vW0lJEJ8CEaFsxdHZJJTPpknpjLLuOk23Dnkv3IwEhWou8wNJJDgoEpdH4Majfi34qIwPJj830huZDHiPjUVfX1z%2F51M%2FEyf5ARNpi%2FUlHocSj49U4EnhHOnzo0JTf3gZBdrKgndmYijEZ%2BXS31cRkAYDmhu6V0NIH63gtNynb6v4S8BTeeNj2X%2BGWmRvmj7YjXS1q0qB125H7HZf7LviMreTHX4iEETM7CWXCp%2BlJm2L02Q5Hbl8aDfOQBAziFs93jFW1zF5zi8b65%2BipLzHvkC%2BUHyqBjolEMkoAq1DkKIK6NQO%2BWbrXaNGMB66RFQSihIhDhLN%2Bdk90nPrb3Vz3kzcfIAFMvICasR%2BLpEKWfxy3fWdFziwC%2BqOQq8KGwvJT6azvHPiN9mRp3FFLQKfAt290Bb%2B6B1h8Hdupz73HU4TgWyIYePTCl646%2FBjqkAbzI5TctdYVNwREFJMReh1aSh8NSzcu1m53p4XUCHah%2Fl0V%2B3KxPSslKCFjku6T3AQJrTOa9NaHbERYnPkJVHuitukWfXS7%2Fy5cPXtJOGPJ7lzHZA9Ex9aa7YJlw%2BODQHKA3Wi1ADYTrd%2BNfikXOaue4QQb8kM%2B%2BvRMUtbpJPZj6DM7l6u4UUfjXQKlbw46ztSUNaaY0K%2BACsRdfgAke2t%2FKir82&X-Amz-Signature=768a5963a9330c0efc80430aaf68aa0458ac2aa738c7e5f19f915d8bea1e28d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
